import { Client, Pool, neon } from '../../dist/npm';
import type { ExecutionContext } from '@cloudflare/workers-types';

export default {
  async fetch(request: Request, emptyEnv: any, ctx: ExecutionContext) {
    // only wrangler.toml can be used to provide env vars (https://github.com/cloudflare/workers-sdk/issues/2898)
    // -- so we pass them in via the request URL instead
    const envJSON = decodeURIComponent(new URL(request.url).pathname.slice(1));
    const env = JSON.parse(envJSON);

    const DATABASE_URL = env.VITE_NEON_DB_URL;

    // test WebSockets (Client.prototype.query)
    const client = new Client(DATABASE_URL);
    await client.connect();
    const { rows: clientRows } = await client.query(
      "SELECT 'client' AS clientstr",
    );
    ctx.waitUntil(client.end());

    // test WebSockets (Pool.prototype.query)
    const pool = new Pool({ connectionString: DATABASE_URL });
    const { rows: poolRows } = await pool.query("SELECT 'pool' AS poolstr");

    // test WebSockets (Pool.prototype.connect)
    const poolClient = await pool.connect();
    const { rows: poolClientRows } = await poolClient.query(
      "SELECT 'poolclient' AS poolclientstr",
    );
    poolClient.release();
    ctx.waitUntil(pool.end());

    // test http fetch
    const sql = neon(DATABASE_URL, { fullResults: true });
    const { rows: fetchRows } = await sql`SELECT 'fetch' AS fetchStr`;

    const responseJson = JSON.stringify(
      { clientRows, poolRows, poolClientRows, fetchRows },
      null,
      2,
    );
    return new Response(responseJson, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
