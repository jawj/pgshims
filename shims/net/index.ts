/**
 * This file shims parts of the Node.js built-in net and tls packages, by 
 * implementing net.Socket and tls.connect() on top of WebSockets. It's 
 * designed to work both in browsers and in Cloudflare Workers (where 
 * WebSockets work a bit differently). The calling client is assumed to be pg
 * (node-postgres).
 */

import { EventEmitter } from 'events';
import { startTls, TrustedCert, WebSocketReadQueue } from 'subtls';

// @ts-ignore - esbuild knows how to deal with this
import letsEncryptRootCert from './isrgrootx1.pem';

declare global {
  const debug: boolean;  // e.g. --define:debug=false in esbuild command
  interface WebSocket {
    accept: () => void;
    binaryType: string;
  }
}

enum TlsState {
  None,
  Handshake,
  Established,
}

function hexDump(data: Uint8Array) {
  return `${data.length} bytes` + data.reduce((memo, byte) =>
    memo + ' ' + byte.toString(16).padStart(2, '0'), '\nhex:') +
    '\nstr: ' + new TextDecoder().decode(data);
}

function log(...args: any[]) {
  console.log(...args.map(arg =>
    arg instanceof Uint8Array ? hexDump(arg) :
      arg instanceof ArrayBuffer ? hexDump(new Uint8Array(arg)) :
        arg));
}

export function isIP(input: string) {
  // if we ever need this to work properly, see https://github.com/nodejs/node/blob/main/lib/internal/net.js
  return 0;
}

export interface SocketDefaults {
  webSocketConstructor: typeof WebSocket | undefined;
  wsProxy: string | ((host: string, port: number | string) => string) | undefined;
  useSecureWebSocket: boolean;
  coalesceWrites: boolean;
  disableSNI: boolean;
  pipelineConnect: 'password' | false;
  pipelineTLS: boolean;  // relevant only when useSecureWebSocket == false
  rootCerts: string;  // ditto
}

export class Socket extends EventEmitter {
  static defaults: SocketDefaults = {
    webSocketConstructor: undefined,
    wsProxy: host => host + '/v2',
    useSecureWebSocket: true,
    coalesceWrites: true,
    disableSNI: false,
    pipelineConnect: 'password',
    pipelineTLS: false,
    rootCerts: letsEncryptRootCert as string,
  };

  static webSocketConstructor: SocketDefaults['webSocketConstructor'];
  private _webSocketConstructor: typeof Socket.webSocketConstructor | undefined;
  get webSocketConstructor() { return this._webSocketConstructor ?? Socket.webSocketConstructor ?? Socket.defaults.webSocketConstructor; }
  set webSocketConstructor(webSocketConstructor: typeof Socket.webSocketConstructor) { this._webSocketConstructor = webSocketConstructor; }

  static wsProxy: SocketDefaults['wsProxy'];
  private _wsProxy: typeof Socket.wsProxy | undefined;
  get wsProxy() { return this._wsProxy ?? Socket.wsProxy ?? Socket.defaults.wsProxy; }
  set wsProxy(wsProxy: typeof Socket.wsProxy) { this._wsProxy = wsProxy; }

  static coalesceWrites: SocketDefaults['coalesceWrites'];
  private _coalesceWrites: typeof Socket.coalesceWrites | undefined;
  get coalesceWrites() { return this._coalesceWrites ?? Socket.coalesceWrites ?? Socket.defaults.coalesceWrites; }
  set coalesceWrites(coalesceWrites: typeof Socket.coalesceWrites) { this._coalesceWrites = coalesceWrites; }

  static useSecureWebSocket: SocketDefaults['useSecureWebSocket'];
  private _useSecureWebSocket: typeof Socket.useSecureWebSocket | undefined;
  get useSecureWebSocket() { return this._useSecureWebSocket ?? Socket.useSecureWebSocket ?? Socket.defaults.useSecureWebSocket; }
  set useSecureWebSocket(useSecureWebSocket: typeof Socket.useSecureWebSocket) { this._useSecureWebSocket = useSecureWebSocket; }

  static disableSNI: SocketDefaults['disableSNI'];
  private _disableSNI: typeof Socket.disableSNI | undefined;
  get disableSNI() { return this._disableSNI ?? Socket.disableSNI ?? Socket.defaults.disableSNI; }
  set disableSNI(disableSNI: typeof Socket.disableSNI) { this._disableSNI = disableSNI; }

  static pipelineConnect: SocketDefaults['pipelineConnect'];
  private _pipelineConnect: typeof Socket.pipelineConnect | undefined;
  get pipelineConnect() { return this._pipelineConnect ?? Socket.pipelineConnect ?? Socket.defaults.pipelineConnect; }
  set pipelineConnect(pipelineConnect: typeof Socket.pipelineConnect) { this._pipelineConnect = pipelineConnect; }

  static pipelineTLS: SocketDefaults['pipelineTLS'];
  private _pipelineTLS: typeof Socket.pipelineTLS | undefined;
  get pipelineTLS() { return this._pipelineTLS ?? Socket.pipelineTLS ?? Socket.defaults.pipelineTLS; }
  set pipelineTLS(pipelineTLS: typeof Socket.pipelineTLS) { this._pipelineTLS = pipelineTLS; }

  static rootCerts: SocketDefaults['rootCerts'];
  private _rootCerts: typeof Socket.rootCerts | undefined;
  get rootCerts() { return this._rootCerts ?? Socket.rootCerts ?? Socket.defaults.rootCerts; }
  set rootCerts(rootCerts: typeof Socket.rootCerts) { this._rootCerts = rootCerts; }


  wsProxyAddrForHost(host: string, port: number) {
    const wsProxy = this.wsProxy;
    if (wsProxy === undefined) {
      throw new Error(`No WebSocket proxy is configured. Please refer to https://github.com/neondatabase/serverless#run-your-own-websocket-proxy`);
    }
    return typeof wsProxy === 'function' ? wsProxy(host, port) : `${wsProxy}?address=${host}:${port}`;
  }

  connecting = false;
  pending = true;
  writable = true;
  encrypted = false;
  authorized = false;
  destroyed = false;

  private ws: WebSocket | null = null;
  private writeBuffer: Uint8Array | undefined;  // used only if coalesceWrites === true
  private tlsState = TlsState.None;
  private tlsRead: undefined | (() => Promise<Uint8Array | undefined>);
  private tlsWrite: undefined | ((data: Uint8Array) => Promise<void>);

  setNoDelay() {
    debug && log('setNoDelay (no-op)');
    return this;
  }
  setKeepAlive() {
    debug && log('setKeepAlive (no-op)');
    return this;
  }
  ref() {
    debug && log('ref (no-op)');
    return this;
  }
  unref() {
    debug && log('unref (no-op)');
    return this;
  }

  async connect(port: number | string, host: string, connectListener?: () => void) {
    this.connecting = true;
    if (connectListener) this.once('connect', connectListener);

    let wsAddr: string;
    try {
      wsAddr = this.wsProxyAddrForHost(host, typeof port === 'string' ? parseInt(port, 10) : port);

    } catch (err) {
      this.emit('error', err);
      this.emit('close');
      return;
    }
    
    // for handling WebSocket error events before the open event.
    // we declare this listener here so we can remove it after we
    // get the open event.
    const beforeOpenError = (err: ErrorEvent) => {
      debug && log("WebSocket error", err);
      this.emit("error", err);
    };

    this.ws = await new Promise<WebSocket>(async resolve => {
      try {
        // ordinary/browser path
        const wsProtocol = this.useSecureWebSocket ? 'wss:' : 'ws:';
        const wsAddrFull = wsProtocol + '//' + wsAddr;

        let ws: WebSocket;
        if (this.webSocketConstructor !== undefined) {
          ws = new this.webSocketConstructor(wsAddrFull);

        } else {
          try {
            // first, try a common-or-garden WebSocket, e.g. in a web browser
            ws = new WebSocket(wsAddrFull);

          } catch (err) {
            debug && log('new WebSocket() failed');

            // @ts-ignore -- second, how about a Vercel Edge Functions __unstable_WebSocket (as at early 2023?)
            ws = new __unstable_WebSocket(wsAddrFull);
          }
        }
        
        ws.addEventListener('error', beforeOpenError)

        ws.addEventListener('open', () => {
          debug && log('WebSocket opened');
          resolve(ws);
        });

      } catch (err) {
        debug && log('new __unstable_WebSocket() failed');
        try {
          // fourth and finally, let's try the Cloudflare Workers method ...
          const wsProtocol = this.useSecureWebSocket ? 'https:' : 'http:';
          const fetchAddrFull = wsProtocol + '//' + wsAddr;
          await fetch(fetchAddrFull, { headers: { Upgrade: 'websocket' } }).then(resp => {
            const ws = resp.webSocket;
            if (ws == undefined) throw err;  // deliberate loose equality
            ws.accept();
            debug && log('Cloudflare WebSocket opened');
            resolve(ws);
          });

        } catch (err) {
          debug && log('fetch() with { Upgrade: "websocket" } failed');
          this.emit('error', new Error('All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless#run-on-node'));
          this.emit('close');
          return;
        }
      }
    });

    this.ws.binaryType = 'arraybuffer';
    
    // remove error event listener we may have assigned before opening
    ws.removeEventListener('error', beforeOpenError)

    this.ws.addEventListener('error', (err) => {
      debug && log('websocket error', err);
      this.emit('error', err);
      this.emit('close');
    });

    this.ws.addEventListener('close', () => {
      debug && log('websocket closed');
      this.emit('close');
    });

    this.ws.addEventListener('message', (msg) => {
      debug && log('socket received:', msg.data);
      if (this.tlsState === TlsState.None) {
        debug && log('emitting received data');
        const buffer = Buffer.from(msg.data as ArrayBuffer);
        this.emit('data', buffer);
      }
    });

    debug && log('socket ready');
    this.connecting = false;
    this.pending = false;
    this.emit('connect');
    this.emit('ready');

    return this;
  }

  async startTls(host: string) {
    debug && log('starting TLS');
    this.tlsState = TlsState.Handshake;

    const rootCerts = TrustedCert.fromPEM(letsEncryptRootCert);
    const readQueue = new WebSocketReadQueue(this.ws!);
    const networkRead = readQueue.read.bind(readQueue);
    const networkWrite = this.rawWrite.bind(this);

    const [tlsRead, tlsWrite] = await startTls(
      host,
      rootCerts,
      networkRead,
      networkWrite,
      !this.disableSNI,
      undefined,  // nothing to pre-write (pg handles the SSLRequest message)
      this.pipelineTLS ? new Uint8Array([0x53]) : undefined,  // expect (and discard) an 'S' before the TLS response if pipelineTLS is set
    );

    this.tlsRead = tlsRead;
    this.tlsWrite = tlsWrite;

    debug && log('TLS connection established');
    this.tlsState = TlsState.Established;
    this.encrypted = true;
    this.authorized = true;
    this.emit('secureConnection', this);

    this.tlsReadLoop();
  }

  async tlsReadLoop() {  // intended NOT to be awaited
    while (true) {
      debug && log('awaiting TLS data ...');
      const data = await this.tlsRead!();

      if (data === undefined) {
        debug && log('no TLS data, breaking loop');
        break;

      } else {
        debug && log('emitting decrypted TLS data:', data);
        const buffer = Buffer.from(data);
        this.emit('data', buffer);
      }
    }
  }

  rawWrite(data: Uint8Array) {
    if (!this.coalesceWrites) {
      this.ws!.send(data);
      return;
    }

    if (this.writeBuffer === undefined) {
      this.writeBuffer = data;
      setTimeout(() => {
        this.ws!.send(this.writeBuffer!);
        this.writeBuffer = undefined;
      }, 0);

    } else {
      const newBuffer = new Uint8Array(this.writeBuffer.length + data.length);
      newBuffer.set(this.writeBuffer);
      newBuffer.set(data, this.writeBuffer.length);
      this.writeBuffer = newBuffer;
    }
  }

  write(data: Buffer | string, encoding = 'utf8', callback = (err?: any) => { }) {
    if (data.length === 0) return callback();
    if (typeof data === 'string') data = Buffer.from(data, encoding as BufferEncoding) as unknown as Buffer;

    if (this.tlsState === TlsState.None) {
      debug && log('sending data direct:', data);
      this.rawWrite(data);

    } else if (this.tlsState === TlsState.Handshake) {
      // pg starts sending without waiting for the handshake to complete
      debug && log('TLS handshake in progress, queueing data:', data);
      this.once('secureConnection', () => this.write(data, encoding, callback));

    } else {
      debug && log('encrypting data:', data);
      this.tlsWrite!(data);
    }

    return true;
  }

  end(data: Buffer | string = Buffer.alloc(0) as unknown as Buffer, encoding = 'utf8', callback?: (() => void)) {
    debug && log('ending socket');
    this.write(data, encoding, () => {
      this.ws!.close();
      if (callback) callback();
    });
    return this;
  }

  destroy() {
    this.destroyed = true;
    return this.end();
  }
}
