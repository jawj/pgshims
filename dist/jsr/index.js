/// <reference types="./index.d.ts" />

var oo=Object.create;var Ie=Object.defineProperty;var ao=Object.getOwnPropertyDescriptor;var uo=Object.getOwnPropertyNames;var co=Object.getPrototypeOf,lo=Object.prototype.hasOwnProperty;var ho=(r,e,t)=>e in r?Ie(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var a=(r,e)=>Ie(r,"name",{value:e,configurable:!0}),Fn=(r=>typeof require<"u"?require:
typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(
function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error(
'Dynamic require of "'+r+'" is not supported')});var z=(r,e)=>()=>(r&&(e=r(r=0)),e);var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ne=(r,e)=>{for(var t in e)
Ie(r,t,{get:e[t],enumerable:!0})},ot=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let s of uo(e))!lo.call(r,s)&&s!==t&&Ie(r,s,{get:()=>e[s],enumerable:!(n=
ao(e,s))||n.enumerable});return r},te=(r,e,t)=>(ot(r,e,"default"),t&&ot(t,e,"def\
ault")),Re=(r,e,t)=>(t=r!=null?oo(co(r)):{},ot(e||!r||!r.__esModule?Ie(t,"defaul\
t",{value:r,enumerable:!0}):t,r)),U=r=>ot(Ie({},"__esModule",{value:!0}),r);var A=(r,e,t)=>ho(r,typeof e!="symbol"?e+"":e,t);var Mn=I(at=>{"use strict";d();at.byteLength=po;at.toByteArray=mo;at.fromByteArray=
bo;var ce=[],se=[],fo=typeof Uint8Array<"u"?Uint8Array:Array,kt="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ce=0,Ln=kt.length;Ce<Ln;++Ce)
ce[Ce]=kt[Ce],se[kt.charCodeAt(Ce)]=Ce;var Ce,Ln;se[45]=62;se[95]=63;function Bn(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(Bn,
"getLens");function po(r){var e=Bn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(po,"byte\
Length");function yo(r,e,t){return(e+t)*3/4-t}a(yo,"_byteLength");function mo(r){
var e,t=Bn(r),n=t[0],s=t[1],i=new fo(yo(r,n,s)),o=0,u=s>0?n-4:n,c;for(c=0;c<u;c+=
4)e=se[r.charCodeAt(c)]<<18|se[r.charCodeAt(c+1)]<<12|se[r.charCodeAt(c+2)]<<6|se[r.
charCodeAt(c+3)],i[o++]=e>>16&255,i[o++]=e>>8&255,i[o++]=e&255;return s===2&&(e=
se[r.charCodeAt(c)]<<2|se[r.charCodeAt(c+1)]>>4,i[o++]=e&255),s===1&&(e=se[r.charCodeAt(
c)]<<10|se[r.charCodeAt(c+1)]<<4|se[r.charCodeAt(c+2)]>>2,i[o++]=e>>8&255,i[o++]=
e&255),i}a(mo,"toByteArray");function go(r){return ce[r>>18&63]+ce[r>>12&63]+ce[r>>
6&63]+ce[r&63]}a(go,"tripletToBase64");function wo(r,e,t){for(var n,s=[],i=e;i<t;i+=
3)n=(r[i]<<16&16711680)+(r[i+1]<<8&65280)+(r[i+2]&255),s.push(go(n));return s.join(
"")}a(wo,"encodeChunk");function bo(r){for(var e,t=r.length,n=t%3,s=[],i=16383,o=0,
u=t-n;o<u;o+=i)s.push(wo(r,o,o+i>u?u:o+i));return n===1?(e=r[t-1],s.push(ce[e>>2]+
ce[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],s.push(ce[e>>10]+ce[e>>4&63]+ce[e<<
2&63]+"=")),s.join("")}a(bo,"fromByteArray")});var kn=I(Ot=>{d();Ot.read=function(r,e,t,n,s){var i,o,u=s*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,p=t?s-1:0,S=t?-1:1,_=r[e+p];for(p+=S,i=_&(1<<-h)-1,_>>=-h,h+=u;h>0;i=i*256+
r[e+p],p+=S,h-=8);for(o=i&(1<<-h)-1,i>>=-h,h+=n;h>0;o=o*256+r[e+p],p+=S,h-=8);if(i===
0)i=1-l;else{if(i===c)return o?NaN:(_?-1:1)*(1/0);o=o+Math.pow(2,n),i=i-l}return(_?
-1:1)*o*Math.pow(2,i-n)};Ot.write=function(r,e,t,n,s,i){var o,u,c,l=i*8-s-1,h=(1<<
l)-1,p=h>>1,S=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:i-1,P=n?1:-1,G=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=h):(o=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+p>=1?e+=S/c:e+=
S*Math.pow(2,1-p),e*c>=2&&(o++,c/=2),o+p>=h?(u=0,o=h):o+p>=1?(u=(e*c-1)*Math.pow(
2,s),o=o+p):(u=e*Math.pow(2,p-1)*Math.pow(2,s),o=0));s>=8;r[t+_]=u&255,_+=P,u/=256,
s-=8);for(o=o<<s|u,l+=s;l>0;r[t+_]=o&255,_+=P,o/=256,l-=8);r[t+_-P]|=G*128}});var Jn=I(Be=>{"use strict";d();var Dt=Mn(),Fe=kn(),On=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Be.Buffer=
f;Be.SlowBuffer=_o;Be.INSPECT_MAX_BYTES=50;var ut=2147483647;Be.kMaxLength=ut;f.
TYPED_ARRAY_SUPPORT=So();!f.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function So(){try{let r=new Uint8Array(1),e={foo:a(function(){
return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(
r,e),r.foo()===42}catch{return!1}}a(So,"typedArraySupport");Object.defineProperty(
f.prototype,"parent",{enumerable:!0,get:a(function(){if(f.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:a(
function(){if(f.isBuffer(this))return this.byteOffset},"get")});function pe(r){if(r>
ut)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(
r);return Object.setPrototypeOf(e,f.prototype),e}a(pe,"createBuffer");function f(r,e,t){
if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" a\
rgument must be of type string. Received type number');return Nt(r)}return qn(r,
e,t)}a(f,"Buffer");f.poolSize=8192;function qn(r,e,t){if(typeof r=="string")return vo(
r,e);if(ArrayBuffer.isView(r))return Eo(r);if(r==null)throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type "+typeof r);if(le(r,ArrayBuffer)||r&&le(r.buffer,ArrayBuffer)||
typeof SharedArrayBuffer<"u"&&(le(r,SharedArrayBuffer)||r&&le(r.buffer,SharedArrayBuffer)))
return Ut(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();
if(n!=null&&n!==r)return f.from(n,e,t);let s=Ao(r);if(s)return s;if(typeof Symbol<
"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return f.
from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type "+typeof r)}a(qn,"from");f.from=function(r,e,t){return qn(r,e,t)};
Object.setPrototypeOf(f.prototype,Uint8Array.prototype);Object.setPrototypeOf(f,
Uint8Array);function Nn(r){if(typeof r!="number")throw new TypeError('"size" arg\
ument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is\
 invalid for option "size"')}a(Nn,"assertSize");function xo(r,e,t){return Nn(r),
r<=0?pe(r):e!==void 0?typeof t=="string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}a(xo,
"alloc");f.alloc=function(r,e,t){return xo(r,e,t)};function Nt(r){return Nn(r),pe(
r<0?0:Wt(r)|0)}a(Nt,"allocUnsafe");f.allocUnsafe=function(r){return Nt(r)};f.allocUnsafeSlow=
function(r){return Nt(r)};function vo(r,e){if((typeof e!="string"||e==="")&&(e="\
utf8"),!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Wn(r,e)|
0,n=pe(t),s=n.write(r,e);return s!==t&&(n=n.slice(0,s)),n}a(vo,"fromString");function Qt(r){
let e=r.length<0?0:Wt(r.length)|0,t=pe(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}
a(Qt,"fromArrayLike");function Eo(r){if(le(r,Uint8Array)){let e=new Uint8Array(r);
return Ut(e.buffer,e.byteOffset,e.byteLength)}return Qt(r)}a(Eo,"fromArrayView");
function Ut(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outs\
ide of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" i\
s outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,f.prototype),n}a(Ut,"fromArrayBuffer");function Ao(r){if(f.isBuffer(r)){let e=Wt(
r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Ht(r.length)?pe(0):Qt(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return Qt(r.data)}a(Ao,"fromObject");function Wt(r){if(r>=
ut)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
ut.toString(16)+" bytes");return r|0}a(Wt,"checked");function _o(r){return+r!=r&&
(r=0),f.alloc(+r)}a(_o,"SlowBuffer");f.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==f.prototype},"isBuffer");f.compare=a(function(e,t){if(le(e,Uint8Array)&&
(e=f.from(e,e.offset,e.byteLength)),le(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),
!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,s=t.
length;for(let i=0,o=Math.min(n,s);i<o;++i)if(e[i]!==t[i]){n=e[i],s=t[i];break}return n<
s?-1:s<n?1:0},"compare");f.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");f.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return f.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let s=f.allocUnsafe(t),i=0;
for(n=0;n<e.length;++n){let o=e[n];if(le(o,Uint8Array))i+o.length>s.length?(f.isBuffer(
o)||(o=f.from(o)),o.copy(s,i)):Uint8Array.prototype.set.call(s,o,i);else if(f.isBuffer(
o))o.copy(s,i);else throw new TypeError('"list" argument must be an Array of Buf\
fers');i+=o.length}return s},"concat");function Wn(r,e){if(f.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||le(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let s=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return qt(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Zn(r).length;default:if(s)return n?-1:qt(r).length;e=(""+e).toLowerCase(),
s=!0}}a(Wn,"byteLength");f.byteLength=Wn;function Co(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Oo(
this,e,t);case"utf8":case"utf-8":return Hn(this,e,t);case"ascii":return Mo(this,
e,t);case"latin1":case"binary":return ko(this,e,t);case"base64":return Lo(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Do(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
Co,"slowToString");f.prototype._isBuffer=!0;function Te(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}a(Te,"swap");f.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Te(this,t,t+1);return this},"swap16");f.prototype.swap32=a(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Te(this,t,t+3),Te(this,t+1,t+2);return this},"swap32");
f.prototype.swap64=a(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Te(this,t,t+7),
Te(this,t+1,t+6),Te(this,t+2,t+5),Te(this,t+3,t+4);return this},"swap64");f.prototype.
toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Hn(
this,0,e):Co.apply(this,arguments)},"toString");f.prototype.toLocaleString=f.prototype.
toString;f.prototype.equals=a(function(e){if(!f.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:f.compare(this,e)===0},"equals");
f.prototype.inspect=a(function(){let e="",t=Be.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");On&&(f.prototype[On]=f.prototype.inspect);f.prototype.compare=
a(function(e,t,n,s,i){if(le(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),s===void 0&&(s=0),i===void 0&&(i=this.length),t<0||n>e.length||s<0||
i>this.length)throw new RangeError("out of range index");if(s>=i&&t>=n)return 0;
if(s>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,s>>>=0,i>>>=0,this===e)return 0;
let o=i-s,u=n-t,c=Math.min(o,u),l=this.slice(s,i),h=e.slice(t,n);for(let p=0;p<c;++p)
if(l[p]!==h[p]){o=l[p],u=h[p];break}return o<u?-1:u<o?1:0},"compare");function jn(r,e,t,n,s){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Ht(t)&&(t=s?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(s)return-1;t=r.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof e==
"string"&&(e=f.from(e,n)),f.isBuffer(e))return e.length===0?-1:Dn(r,e,t,n,s);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Dn(r,
[e],t,n,s);throw new TypeError("val must be string, number or Buffer")}a(jn,"bid\
irectionalIndexOf");function Dn(r,e,t,n,s){let i=1,o=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;i=2,o/=2,u/=2,t/=2}function c(h,p){
return i===1?h[p]:h.readUInt16BE(p*i)}a(c,"read");let l;if(s){let h=-1;for(l=t;l<
o;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*i}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let h=!0;for(let p=0;p<u;p++)
if(c(r,l+p)!==c(e,p)){h=!1;break}if(h)return l}return-1}a(Dn,"arrayIndexOf");f.prototype.
includes=a(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");f.prototype.
indexOf=a(function(e,t,n){return jn(this,e,t,n,!0)},"indexOf");f.prototype.lastIndexOf=
a(function(e,t,n){return jn(this,e,t,n,!1)},"lastIndexOf");function To(r,e,t,n){
t=Number(t)||0;let s=r.length-t;n?(n=Number(n),n>s&&(n=s)):n=s;let i=e.length;n>
i/2&&(n=i/2);let o;for(o=0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Ht(u))
return o;r[t+o]=u}return o}a(To,"hexWrite");function Io(r,e,t,n){return ct(qt(e,
r.length-t),r,t,n)}a(Io,"utf8Write");function Ro(r,e,t,n){return ct(No(e),r,t,n)}
a(Ro,"asciiWrite");function Po(r,e,t,n){return ct(Zn(e),r,t,n)}a(Po,"base64Write");
function Fo(r,e,t,n){return ct(Wo(e,r.length-t),r,t,n)}a(Fo,"ucs2Write");f.prototype.
write=a(function(e,t,n,s){if(t===void 0)s="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")s=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,s===void 0&&(s="utf8")):(s=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let i=this.length-
t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");s||(s="utf8");let o=!1;for(;;)switch(s){case"\
hex":return To(this,e,t,n);case"utf8":case"utf-8":return Io(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Ro(this,e,t,n);case"base64":return Po(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fo(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),o=!0}},"\
write");f.prototype.toJSON=a(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function Lo(r,e,t){return e===0&&t===r.
length?Dt.fromByteArray(r):Dt.fromByteArray(r.slice(e,t))}a(Lo,"base64Slice");function Hn(r,e,t){
t=Math.min(r.length,t);let n=[],s=e;for(;s<t;){let i=r[s],o=null,u=i>239?4:i>223?
3:i>191?2:1;if(s+u<=t){let c,l,h,p;switch(u){case 1:i<128&&(o=i);break;case 2:c=
r[s+1],(c&192)===128&&(p=(i&31)<<6|c&63,p>127&&(o=p));break;case 3:c=r[s+1],l=r[s+
2],(c&192)===128&&(l&192)===128&&(p=(i&15)<<12|(c&63)<<6|l&63,p>2047&&(p<55296||
p>57343)&&(o=p));break;case 4:c=r[s+1],l=r[s+2],h=r[s+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(p=(i&15)<<18|(c&63)<<12|(l&63)<<6|h&63,p>65535&&p<1114112&&
(o=p))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|
o&1023),n.push(o),s+=u}return Bo(n)}a(Hn,"utf8Slice");var Qn=4096;function Bo(r){
let e=r.length;if(e<=Qn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Qn));return t}a(Bo,"d\
ecodeCodePointsArray");function Mo(r,e,t){let n="";t=Math.min(r.length,t);for(let s=e;s<
t;++s)n+=String.fromCharCode(r[s]&127);return n}a(Mo,"asciiSlice");function ko(r,e,t){
let n="";t=Math.min(r.length,t);for(let s=e;s<t;++s)n+=String.fromCharCode(r[s]);
return n}a(ko,"latin1Slice");function Oo(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let s="";for(let i=e;i<t;++i)s+=jo[r[i]];return s}a(Oo,"he\
xSlice");function Do(r,e,t){let n=r.slice(e,t),s="";for(let i=0;i<n.length-1;i+=
2)s+=String.fromCharCode(n[i]+n[i+1]*256);return s}a(Do,"utf16leSlice");f.prototype.
slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let s=this.subarray(
e,t);return Object.setPrototypeOf(s,f.prototype),s},"slice");function q(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(q,"checkOffset");f.prototype.readUintLE=
f.prototype.readUIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,t,this.length);let s=this[e],
i=1,o=0;for(;++o<t&&(i*=256);)s+=this[e+o]*i;return s},"readUIntLE");f.prototype.
readUintBE=f.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,t,this.
length);let s=this[e+--t],i=1;for(;t>0&&(i*=256);)s+=this[e+--t]*i;return s},"re\
adUIntBE");f.prototype.readUint8=f.prototype.readUInt8=a(function(e,t){return e=
e>>>0,t||q(e,1,this.length),this[e]},"readUInt8");f.prototype.readUint16LE=f.prototype.
readUInt16LE=a(function(e,t){return e=e>>>0,t||q(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");f.prototype.readUint16BE=f.prototype.readUInt16BE=a(function(e,t){
return e=e>>>0,t||q(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");f.prototype.
readUint32LE=f.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||q(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
f.prototype.readUint32BE=f.prototype.readUInt32BE=a(function(e,t){return e=e>>>0,
t||q(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");f.prototype.readBigUInt64LE=be(a(function(e){e=e>>>0,Le(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let s=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(s)+(BigInt(i)<<BigInt(32))},"readBigUInt64LE"));f.prototype.
readBigUInt64BE=be(a(function(e){e=e>>>0,Le(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&He(e,this.length-8);let s=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
s)<<BigInt(32))+BigInt(i)},"readBigUInt64BE"));f.prototype.readIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||q(e,t,this.length);let s=this[e],i=1,o=0;for(;++o<t&&(i*=256);)
s+=this[e+o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},"readIntLE");f.prototype.
readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||q(e,t,this.length);let s=t,i=1,o=this[e+
--s];for(;s>0&&(i*=256);)o+=this[e+--s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),
o},"readIntBE");f.prototype.readInt8=a(function(e,t){return e=e>>>0,t||q(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");f.prototype.readInt16LE=
a(function(e,t){e=e>>>0,t||q(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");f.prototype.readInt16BE=a(function(e,t){e=e>>>
0,t||q(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");f.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||q(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");f.prototype.
readInt32BE=a(function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");f.prototype.readBigInt64LE=be(a(function(e){
e=e>>>0,Le(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,
this.length-8);let s=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
s)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));f.prototype.readBigInt64BE=be(a(function(e){e=e>>>0,Le(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let s=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(s)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));f.prototype.
readFloatLE=a(function(e,t){return e=e>>>0,t||q(e,4,this.length),Fe.read(this,e,
!0,23,4)},"readFloatLE");f.prototype.readFloatBE=a(function(e,t){return e=e>>>0,
t||q(e,4,this.length),Fe.read(this,e,!1,23,4)},"readFloatBE");f.prototype.readDoubleLE=
a(function(e,t){return e=e>>>0,t||q(e,8,this.length),Fe.read(this,e,!0,52,8)},"r\
eadDoubleLE");f.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||q(e,8,this.
length),Fe.read(this,e,!1,52,8)},"readDoubleBE");function Y(r,e,t,n,s,i){if(!f.isBuffer(
r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>s||e<
i)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError(
"Index out of range")}a(Y,"checkInt");f.prototype.writeUintLE=f.prototype.writeUIntLE=
a(function(e,t,n,s){if(e=+e,t=t>>>0,n=n>>>0,!s){let u=Math.pow(2,8*n)-1;Y(this,e,
t,n,u,0)}let i=1,o=0;for(this[t]=e&255;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+
n},"writeUIntLE");f.prototype.writeUintBE=f.prototype.writeUIntBE=a(function(e,t,n,s){
if(e=+e,t=t>>>0,n=n>>>0,!s){let u=Math.pow(2,8*n)-1;Y(this,e,t,n,u,0)}let i=n-1,
o=1;for(this[t+i]=e&255;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},"writeUI\
ntBE");f.prototype.writeUint8=f.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||Y(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");f.prototype.writeUint16LE=
f.prototype.writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,
65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");f.prototype.writeUint16BE=
f.prototype.writeUInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,
65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");f.prototype.writeUint32LE=
f.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,4,
4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+
4},"writeUInt32LE");f.prototype.writeUint32BE=f.prototype.writeUInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,
this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Gn(r,e,t,n,s){Yn(
e,n,s,r,t,7);let i=Number(e&BigInt(4294967295));r[t++]=i,i=i>>8,r[t++]=i,i=i>>8,
r[t++]=i,i=i>>8,r[t++]=i;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}a(Gn,"wrtBigUInt64LE");function $n(r,e,t,n,s){
Yn(e,n,s,r,t,7);let i=Number(e&BigInt(4294967295));r[t+7]=i,i=i>>8,r[t+6]=i,i=i>>
8,r[t+5]=i,i=i>>8,r[t+4]=i;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a($n,"wrtBigUInt64BE");f.
prototype.writeBigUInt64LE=be(a(function(e,t=0){return Gn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));f.prototype.writeBigUInt64BE=be(a(function(e,t=0){
return $n(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
f.prototype.writeIntLE=a(function(e,t,n,s){if(e=+e,t=t>>>0,!s){let c=Math.pow(2,
8*n-1);Y(this,e,t,n,c-1,-c)}let i=0,o=1,u=0;for(this[t]=e&255;++i<n&&(o*=256);)e<
0&&u===0&&this[t+i-1]!==0&&(u=1),this[t+i]=(e/o>>0)-u&255;return t+n},"writeIntL\
E");f.prototype.writeIntBE=a(function(e,t,n,s){if(e=+e,t=t>>>0,!s){let c=Math.pow(
2,8*n-1);Y(this,e,t,n,c-1,-c)}let i=n-1,o=1,u=0;for(this[t+i]=e&255;--i>=0&&(o*=
256);)e<0&&u===0&&this[t+i+1]!==0&&(u=1),this[t+i]=(e/o>>0)-u&255;return t+n},"w\
riteIntBE");f.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,
e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");f.prototype.writeInt16LE=
a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,32767,-32768),this[t]=e&255,
this[t+1]=e>>>8,t+2},"writeInt16LE");f.prototype.writeInt16BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");f.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>
0,n||Y(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=
e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");f.prototype.writeInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+
1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeIn\
t32BE");f.prototype.writeBigInt64LE=be(a(function(e,t=0){return Gn(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));f.prototype.
writeBigInt64BE=be(a(function(e,t=0){return $n(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function Vn(r,e,t,n,s,i){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}a(Vn,"checkIEEE754");function Kn(r,e,t,n,s){return e=+e,t=
t>>>0,s||Vn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Fe.write(r,e,t,n,
23,4),t+4}a(Kn,"writeFloat");f.prototype.writeFloatLE=a(function(e,t,n){return Kn(
this,e,t,!0,n)},"writeFloatLE");f.prototype.writeFloatBE=a(function(e,t,n){return Kn(
this,e,t,!1,n)},"writeFloatBE");function zn(r,e,t,n,s){return e=+e,t=t>>>0,s||Vn(
r,e,t,8,17976931348623157e292,-17976931348623157e292),Fe.write(r,e,t,n,52,8),t+8}
a(zn,"writeDouble");f.prototype.writeDoubleLE=a(function(e,t,n){return zn(this,e,
t,!0,n)},"writeDoubleLE");f.prototype.writeDoubleBE=a(function(e,t,n){return zn(
this,e,t,!1,n)},"writeDoubleBE");f.prototype.copy=a(function(e,t,n,s){if(!f.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!s&&s!==0&&(s=
this.length),t>=e.length&&(t=e.length),t||(t=0),s>0&&s<n&&(s=n),s===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError(
"sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-t<s-n&&(s=e.length-
t+n);let i=s-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,s):Uint8Array.prototype.set.call(e,this.subarray(n,s),t),
i},"copy");f.prototype.fill=a(function(e,t,n,s){if(typeof e=="string"){if(typeof t==
"string"?(s=t,t=0,n=this.length):typeof n=="string"&&(s=n,n=this.length),s!==void 0&&
typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s==
"string"&&!f.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(e.length===
1){let o=e.charCodeAt(0);(s==="utf8"&&o<128||s==="latin1")&&(e=o)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let i;if(typeof e=="number")for(i=t;i<n;++i)
this[i]=e;else{let o=f.isBuffer(e)?e:f.from(e,s),u=o.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=
o[i%u]}return this},"fill");var Pe={};function jt(r,e,t){var n;Pe[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,
configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){
return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,
value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}},
a(n,"NodeError"),n)}a(jt,"E");jt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);jt("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);jt("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,s=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?s=Un(String(t)):typeof t=="bigint"&&(s=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(s=Un(s)),s+="n"),n+=` It\
 must be ${e}. Received ${s}`,n},RangeError);function Un(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}a(Un,"addNumericalSeparator");function Qo(r,e,t){Le(e,"offset"),(r[e]===
void 0||r[e+t]===void 0)&&He(e,r.length-(t+1))}a(Qo,"checkBounds");function Yn(r,e,t,n,s,i){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw i>3?e===0||e===BigInt(0)?u=
`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:u=`>= -(2${o} ** ${(i+1)*8-1}${o}) and \
< 2 ** ${(i+1)*8-1}${o}`:u=`>= ${e}${o} and <= ${t}${o}`,new Pe.ERR_OUT_OF_RANGE(
"value",u,r)}Qo(n,s,i)}a(Yn,"checkIntBI");function Le(r,e){if(typeof r!="number")
throw new Pe.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Le,"validateNumber");function He(r,e,t){
throw Math.floor(r)!==r?(Le(r,t),new Pe.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Pe.ERR_BUFFER_OUT_OF_BOUNDS:new Pe.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}a(He,"boundsError");var Uo=/[^+/0-9A-Za-z-_]/g;function qo(r){
if(r=r.split("=")[0],r=r.trim().replace(Uo,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}a(qo,"base64clean");function qt(r,e){e=e||1/0;let t,n=r.
length,s=null,i=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!s){
if(t>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&
i.push(239,191,189);continue}s=t;continue}if(t<56320){(e-=3)>-1&&i.push(239,191,
189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(e-=3)>-1&&i.push(239,191,
189);if(s=null,t<128){if((e-=1)<0)break;i.push(t)}else if(t<2048){if((e-=2)<0)break;
i.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;i.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;i.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return i}a(
qt,"utf8ToBytes");function No(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}a(No,"asciiToBytes");function Wo(r,e){let t,n,s,i=[];for(let o=0;o<
r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,s=t%256,i.push(s),i.push(n);return i}
a(Wo,"utf16leToBytes");function Zn(r){return Dt.toByteArray(qo(r))}a(Zn,"base64T\
oBytes");function ct(r,e,t,n){let s;for(s=0;s<n&&!(s+t>=e.length||s>=r.length);++s)
e[s+t]=r[s];return s}a(ct,"blitBuffer");function le(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
a(le,"isInstance");function Ht(r){return r!==r}a(Ht,"numberIsNaN");var jo=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let s=0;s<
16;++s)e[n+s]=r[t]+r[s]}return e}();function be(r){return typeof BigInt>"u"?Ho:r}
a(be,"defineBigIntMethod");function Ho(){throw new Error("BigInt not supported")}
a(Ho,"BufferBigIntNotDefined")});var b,x,v,w,y,m,d=z(()=>{"use strict";b=globalThis,x=globalThis.setImmediate??(r=>setTimeout(
r,0)),v=globalThis.clearImmediate??(r=>clearTimeout(r)),w=globalThis.crypto??{};
w.subtle??(w.subtle={});y=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Jn().Buffer,m=globalThis.process??
{};m.env??(m.env={});try{m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=
e.then.bind(e)}});var Se=I((ol,Gt)=>{"use strict";d();var Me=typeof Reflect=="object"?Reflect:null,
Xn=Me&&typeof Me.apply=="function"?Me.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),lt;Me&&typeof Me.ownKeys=="function"?lt=Me.ownKeys:
Object.getOwnPropertySymbols?lt=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):lt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Go(r){console&&console.warn&&
console.warn(r)}a(Go,"ProcessEmitWarning");var ts=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function F(){F.init.call(this)}a(F,"EventEmitter");Gt.exports=
F;Gt.exports.once=zo;F.EventEmitter=F;F.prototype._events=void 0;F.prototype._eventsCount=
0;F.prototype._maxListeners=void 0;var es=10;function ht(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(ht,"checkListener");Object.defineProperty(F,"defaultMaxLi\
steners",{enumerable:!0,get:a(function(){return es},"get"),set:a(function(r){if(typeof r!=
"number"||r<0||ts(r))throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received '+r+".");es=r},"set")});
F.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this).
_events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=
this._maxListeners||void 0};F.prototype.setMaxListeners=a(function(e){if(typeof e!=
"number"||e<0||ts(e))throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},
"setMaxListeners");function rs(r){return r._maxListeners===void 0?F.defaultMaxListeners:
r._maxListeners}a(rs,"_getMaxListeners");F.prototype.getMaxListeners=a(function(){
return rs(this)},"getMaxListeners");F.prototype.emit=a(function(e){for(var t=[],
n=1;n<arguments.length;n++)t.push(arguments[n]);var s=e==="error",i=this._events;
if(i!==void 0)s=s&&i.error===void 0;else if(!s)return!1;if(s){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+
o.message+")":""));throw u.context=o,u}var c=i[e];if(c===void 0)return!1;if(typeof c==
"function")Xn(c,this,t);else for(var l=c.length,h=as(c,l),n=0;n<l;++n)Xn(h[n],this,
t);return!0},"emit");function ns(r,e,t,n){var s,i,o;if(ht(t),i=r._events,i===void 0?
(i=r._events=Object.create(null),r._eventsCount=0):(i.newListener!==void 0&&(r.emit(
"newListener",e,t.listener?t.listener:t),i=r._events),o=i[e]),o===void 0)o=i[e]=
t,++r._eventsCount;else if(typeof o=="function"?o=i[e]=n?[t,o]:[o,t]:n?o.unshift(
t):o.push(t),s=rs(r),s>0&&o.length>s&&!o.warned){o.warned=!0;var u=new Error("Po\
ssible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners a\
dded. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExce\
ededWarning",u.emitter=r,u.type=e,u.count=o.length,Go(u)}return r}a(ns,"_addList\
ener");F.prototype.addListener=a(function(e,t){return ns(this,e,t,!1)},"addListe\
ner");F.prototype.on=F.prototype.addListener;F.prototype.prependListener=a(function(e,t){
return ns(this,e,t,!0)},"prependListener");function $o(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?
this.listener.call(this.target):this.listener.apply(this.target,arguments)}a($o,
"onceWrapper");function ss(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,
listener:t},s=$o.bind(n);return s.listener=t,n.wrapFn=s,s}a(ss,"_onceWrap");F.prototype.
once=a(function(e,t){return ht(t),this.on(e,ss(this,e,t)),this},"once");F.prototype.
prependOnceListener=a(function(e,t){return ht(t),this.prependListener(e,ss(this,
e,t)),this},"prependOnceListener");F.prototype.removeListener=a(function(e,t){var n,
s,i,o,u;if(ht(t),s=this._events,s===void 0)return this;if(n=s[e],n===void 0)return this;
if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):
(delete s[e],s.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!=
"function"){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,i=o;break}if(i<0)return this;i===0?n.shift():Vo(n,i),n.length===1&&(s[e]=
n[0]),s.removeListener!==void 0&&this.emit("removeListener",e,u||t)}return this},
"removeListener");F.prototype.off=F.prototype.removeListener;F.prototype.removeAllListeners=
a(function(e){var t,n,s;if(n=this._events,n===void 0)return this;if(n.removeListener===
void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),
this;if(arguments.length===0){var i=Object.keys(n),o;for(s=0;s<i.length;++s)o=i[s],
o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=
n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(s=t.length-
1;s>=0;s--)this.removeListener(e,t[s]);return this},"removeAllListeners");function is(r,e,t){
var n=r._events;if(n===void 0)return[];var s=n[e];return s===void 0?[]:typeof s==
"function"?t?[s.listener||s]:[s]:t?Ko(s):as(s,s.length)}a(is,"_listeners");F.prototype.
listeners=a(function(e){return is(this,e,!0)},"listeners");F.prototype.rawListeners=
a(function(e){return is(this,e,!1)},"rawListeners");F.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):os.call(r,e)};F.prototype.
listenerCount=os;function os(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(os,"listenerCount");
F.prototype.eventNames=a(function(){return this._eventsCount>0?lt(this._events):
[]},"eventNames");function as(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(as,"arrayClone");function Vo(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(Vo,"spliceOne");function Ko(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(Ko,"unwrapListeners");function zo(r,e){return new Promise(
function(t,n){function s(o){r.removeListener(e,i),n(o)}a(s,"errorListener");function i(){
typeof r.removeListener=="function"&&r.removeListener("error",s),t([].slice.call(
arguments))}a(i,"resolver"),us(r,e,i,{once:!0}),e!=="error"&&Yo(r,s,{once:!0})})}
a(zo,"once");function Yo(r,e,t){typeof r.on=="function"&&us(r,"error",e,t)}a(Yo,
"addErrorHandlerIfEventEmitter");function us(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function s(i){n.once&&r.removeEventListener(e,s),t(i)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(us,"eventTargetAgnosticAddListener")});var Ge={};ne(Ge,{default:()=>Zo});var Zo,$e=z(()=>{"use strict";d();Zo={}});function Ve(r){let e=1779033703,t=3144134277,n=1013904242,s=2773480762,i=1359893119,
o=2600822924,u=528734635,c=1541459225,l=0,h=0,p=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],S=a((C,g)=>C>>>g|C<<32-g,
"rrot"),_=new Uint32Array(64),P=new Uint8Array(64),G=a(()=>{for(let L=0,$=0;L<16;L++,
$+=4)_[L]=P[$]<<24|P[$+1]<<16|P[$+2]<<8|P[$+3];for(let L=16;L<64;L++){let $=S(_[L-
15],7)^S(_[L-15],18)^_[L-15]>>>3,fe=S(_[L-2],17)^S(_[L-2],19)^_[L-2]>>>10;_[L]=_[L-
16]+$+_[L-7]+fe|0}let C=e,g=t,R=n,W=s,D=i,j=o,re=u,ue=c;for(let L=0;L<64;L++){let $=S(
D,6)^S(D,11)^S(D,25),fe=D&j^~D&re,me=ue+$+fe+p[L]+_[L]|0,Ae=S(C,2)^S(C,13)^S(C,22),
je=C&g^C&R^g&R,de=Ae+je|0;ue=re,re=j,j=D,D=W+me|0,W=R,R=g,g=C,C=me+de|0}e=e+C|0,
t=t+g|0,n=n+R|0,s=s+W|0,i=i+D|0,o=o+j|0,u=u+re|0,c=c+ue|0,h=0},"process"),ee=a(C=>{
typeof C=="string"&&(C=new TextEncoder().encode(C));for(let g=0;g<C.length;g++)P[h++]=
C[g],h===64&&G();l+=C.length},"add"),ae=a(()=>{if(P[h++]=128,h==64&&G(),h+8>64){
for(;h<64;)P[h++]=0;G()}for(;h<58;)P[h++]=0;let C=l*8;P[h++]=C/1099511627776&255,
P[h++]=C/4294967296&255,P[h++]=C>>>24,P[h++]=C>>>16&255,P[h++]=C>>>8&255,P[h++]=
C&255,G();let g=new Uint8Array(32);return g[0]=e>>>24,g[1]=e>>>16&255,g[2]=e>>>8&
255,g[3]=e&255,g[4]=t>>>24,g[5]=t>>>16&255,g[6]=t>>>8&255,g[7]=t&255,g[8]=n>>>24,
g[9]=n>>>16&255,g[10]=n>>>8&255,g[11]=n&255,g[12]=s>>>24,g[13]=s>>>16&255,g[14]=
s>>>8&255,g[15]=s&255,g[16]=i>>>24,g[17]=i>>>16&255,g[18]=i>>>8&255,g[19]=i&255,
g[20]=o>>>24,g[21]=o>>>16&255,g[22]=o>>>8&255,g[23]=o&255,g[24]=u>>>24,g[25]=u>>>
16&255,g[26]=u>>>8&255,g[27]=u&255,g[28]=c>>>24,g[29]=c>>>16&255,g[30]=c>>>8&255,
g[31]=c&255,g},"digest");return r===void 0?{add:ee,digest:ae}:(ee(r),ae())}var cs=z(
()=>{"use strict";d();a(Ve,"sha256")});var Q,Ke,ls=z(()=>{"use strict";d();Q=class Q{constructor(){A(this,"_dataLength",
0);A(this,"_bufferLength",0);A(this,"_state",new Int32Array(4));A(this,"_buffer",
new ArrayBuffer(68));A(this,"_buffer8");A(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=Q.
hexChars,n=Q.hexOut,s,i,o,u;for(u=0;u<4;u+=1)for(i=u*8,s=e[u],o=0;o<8;o+=2)n[i+1+
o]=t.charAt(s&15),s>>>=4,n[i+0+o]=t.charAt(s&15),s>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],s=e[1],i=e[2],o=e[3];n+=(s&i|~s&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+s|
0,o+=(n&s|~n&i)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[2]+606105819|
0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+t[3]-1044525330|0,s=(s<<22|s>>>10)+i|0,n+=(s&
i|~s&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+s|0,o+=(n&s|~n&i)+t[5]+1200080426|0,o=(o<<
12|o>>>20)+n|0,i+=(o&n|~o&s)+t[6]-1473231341|0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+
t[7]-45705983|0,s=(s<<22|s>>>10)+i|0,n+=(s&i|~s&o)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+s|0,o+=(n&s|~n&i)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[10]-
42063|0,i=(i<<17|i>>>15)+o|0,s+=(i&o|~i&n)+t[11]-1990404162|0,s=(s<<22|s>>>10)+i|
0,n+=(s&i|~s&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+s|0,o+=(n&s|~n&i)+t[13]-40341101|
0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&s)+t[14]-1502002290|0,i=(i<<17|i>>>15)+o|0,s+=
(i&o|~i&n)+t[15]+1236535329|0,s=(s<<22|s>>>10)+i|0,n+=(s&o|i&~o)+t[1]-165796510|
0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&~i)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,i+=(o&
s|n&~s)+t[11]+643717713|0,i=(i<<14|i>>>18)+o|0,s+=(i&n|o&~n)+t[0]-373897302|0,s=
(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&
~i)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,i+=(o&s|n&~s)+t[15]-660478335|0,i=(i<<14|
i>>>18)+o|0,s+=(i&n|o&~n)+t[4]-405537848|0,s=(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[9]+
568446438|0,n=(n<<5|n>>>27)+s|0,o+=(n&i|s&~i)+t[14]-1019803690|0,o=(o<<9|o>>>23)+
n|0,i+=(o&s|n&~s)+t[3]-187363961|0,i=(i<<14|i>>>18)+o|0,s+=(i&n|o&~n)+t[8]+1163531501|
0,s=(s<<20|s>>>12)+i|0,n+=(s&o|i&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+s|0,o+=(n&
i|s&~i)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,i+=(o&s|n&~s)+t[7]+1735328473|0,i=(i<<
14|i>>>18)+o|0,s+=(i&n|o&~n)+t[12]-1926607734|0,s=(s<<20|s>>>12)+i|0,n+=(s^i^o)+
t[5]-378558|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[8]-2022574463|0,o=(o<<11|o>>>21)+
n|0,i+=(o^n^s)+t[11]+1839030562|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+t[14]-35309556|
0,s=(s<<23|s>>>9)+i|0,n+=(s^i^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+
t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+t[7]-155497632|0,i=(i<<16|i>>>
16)+o|0,s+=(i^o^n)+t[10]-1094730640|0,s=(s<<23|s>>>9)+i|0,n+=(s^i^o)+t[13]+681279174|
0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+
t[3]-722521979|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+t[6]+76029189|0,s=(s<<23|s>>>9)+
i|0,n+=(s^i^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+s|0,o+=(n^s^i)+t[12]-421815835|0,
o=(o<<11|o>>>21)+n|0,i+=(o^n^s)+t[15]+530742520|0,i=(i<<16|i>>>16)+o|0,s+=(i^o^n)+
t[2]-995338651|0,s=(s<<23|s>>>9)+i|0,n+=(i^(s|~o))+t[0]-198630844|0,n=(n<<6|n>>>
26)+s|0,o+=(s^(n|~i))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[14]-
1416354905|0,i=(i<<15|i>>>17)+o|0,s+=(o^(i|~n))+t[5]-57434055|0,s=(s<<21|s>>>11)+
i|0,n+=(i^(s|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[3]-1894986606|
0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[10]-1051523|0,i=(i<<15|i>>>17)+o|0,s+=(o^
(i|~n))+t[1]-2054922799|0,s=(s<<21|s>>>11)+i|0,n+=(i^(s|~o))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+
t[6]-1560198380|0,i=(i<<15|i>>>17)+o|0,s+=(o^(i|~n))+t[13]+1309151649|0,s=(s<<21|
s>>>11)+i|0,n+=(i^(s|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+s|0,o+=(s^(n|~i))+t[11]-
1120210379|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~s))+t[2]+718787259|0,i=(i<<15|i>>>17)+
o|0,s+=(o^(i|~n))+t[9]-343485551|0,s=(s<<21|s>>>11)+i|0,e[0]=n+e[0]|0,e[1]=s+e[1]|
0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(Q.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,s=this._bufferLength,i,o;for(o=0;o<e.length;o+=1){if(i=e.charCodeAt(o),
i<128)t[s++]=i;else if(i<2048)t[s++]=(i>>>6)+192,t[s++]=i&63|128;else if(i<55296||
i>56319)t[s++]=(i>>>12)+224,t[s++]=i>>>6&63|128,t[s++]=i&63|128;else{if(i=(i-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,i>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[s++]=(i>>>18)+240,t[s++]=i>>>12&63|128,
t[s++]=i>>>6&63|128,t[s++]=i&63|128}s>=64&&(this._dataLength+=64,Q._md5cycle(this.
_state,n),s-=64,n[0]=n[16])}return this._bufferLength=s,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e.charCodeAt(o++);if(s<64)break;this._dataLength+=64,Q._md5cycle(
this._state,n),s=0}return this._bufferLength=s,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e[o++];if(s<64)break;this._dataLength+=64,Q._md5cycle(this._state,
n),s=0}return this._bufferLength=s,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,s=this.
_state,i;for(this._dataLength=e.length,this._bufferLength=e.buflen,s[0]=n[0],s[1]=
n[1],s[2]=n[2],s[3]=n[3],i=0;i<t.length;i+=1)this._buffer8[i]=t.charCodeAt(i)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,s=this._buffer32,i=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,s.set(Q.buffer32Identity.
subarray(i),i),t>55&&(Q._md5cycle(this._state,s),s.set(Q.buffer32Identity)),o<=4294967295)
s[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;s[14]=c,s[15]=l}return Q._md5cycle(this._state,s),
e?this._state:Q._hex(this._state)}};a(Q,"Md5"),A(Q,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),A(Q,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),A(Q,"hexChars","0123456789abcdef"),A(Q,"hexO\
ut",[]),A(Q,"onePassHasher",new Q);Ke=Q});var $t={};ne($t,{createHash:()=>ea,createHmac:()=>ta,randomBytes:()=>Xo});function Xo(r){
return typeof w<"u"&&w.randomBytes!==void 0?(w.webcrypto??w).getRandomValues(y.alloc(
r)):Fn(Jo).randomBytes(r)}function ea(r){if(r==="sha256")return{update:a(function(e){
return{digest:a(function(){return y.from(Ve(e))},"digest")}},"update")};if(r==="\
md5")return{update:a(function(e){return{digest:a(function(){return typeof e=="st\
ring"?Ke.hashStr(e):Ke.hashByteArray(e)},"digest")}},"update")};throw new Error(
`Hash type '${r}' not supported`)}function ta(r,e){if(r!=="sha256")throw new Error(
`Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{
digest:a(function(){typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t==
"string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>64)e=Ve(e);else if(n<
64){let c=new Uint8Array(64);c.set(e),e=c}let s=new Uint8Array(64),i=new Uint8Array(
64);for(let c=0;c<64;c++)s[c]=54^e[c],i[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(s,0),o.set(t,64);let u=new Uint8Array(96);return u.set(i,0),u.set(Ve(o),
64),y.from(Ve(u))},"digest")}},"update")}}var Jo,Vt=z(()=>{"use strict";d();cs();
ls();Jo="node:crypto";a(Xo,"randomBytes");a(ea,"createHash");a(ta,"createHmac")});var zt=I(hs=>{"use strict";d();hs.parse=function(r,e){return new Kt(r,e).parse()};
var ft=class ft{constructor(e,t){this.source=e,this.transform=t||ra,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,s;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!s)this.dimension++,this.dimension>
1&&(n=new ft(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!s){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(s&&this.newEntry(!0),s=!s):t.value===","&&!s?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};a(ft,"ArrayParser");var Kt=ft;function ra(r){return r}a(ra,"identity")});var Yt=I((El,fs)=>{d();var na=zt();fs.exports={create:a(function(r,e){return{parse:a(
function(){return na.parse(r,e)},"parse")}},"create")}});var ys=I((Cl,ps)=>{"use strict";d();var sa=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
ia=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,oa=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,aa=/^-?infinity$/;
ps.exports=a(function(e){if(aa.test(e))return Number(e.replace("i","I"));var t=sa.
exec(e);if(!t)return ua(e)||null;var n=!!t[8],s=parseInt(t[1],10);n&&(s=ds(s));var i=parseInt(
t[2],10)-1,o=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var p,S=ca(e);return S!=null?(p=new Date(Date.UTC(s,i,o,
u,c,l,h)),Zt(s)&&p.setUTCFullYear(s),S!==0&&p.setTime(p.getTime()-S)):(p=new Date(
s,i,o,u,c,l,h),Zt(s)&&p.setFullYear(s)),p},"parseDate");function ua(r){var e=ia.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=ds(t));var s=parseInt(e[2],
10)-1,i=e[3],o=new Date(t,s,i);return Zt(t)&&o.setFullYear(t),o}}a(ua,"getDate");
function ca(r){if(r.endsWith("+00"))return 0;var e=oa.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,s=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return s*n*1e3}}a(ca,"timeZoneOffset");function ds(r){
return-(r-1)}a(ds,"bcYearToNegativeYear");function Zt(r){return r>=0&&r<100}a(Zt,
"is0To99")});var gs=I((Rl,ms)=>{d();ms.exports=ha;var la=Object.prototype.hasOwnProperty;function ha(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)la.call(t,
n)&&(r[n]=t[n])}return r}a(ha,"extend")});var Ss=I((Ll,bs)=>{"use strict";d();var fa=gs();bs.exports=ke;function ke(r){if(!(this instanceof
ke))return new ke(r);fa(this,Aa(r))}a(ke,"PostgresInterval");var da=["seconds","\
minutes","hours","days","months","years"];ke.prototype.toPostgres=function(){var r=da.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var pa={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},ya=["years","months","days"],ma=["hours","minutes","seconds"];ke.
prototype.toISOString=ke.prototype.toISO=function(){var r=ya.map(t,this).join(""),
e=ma.map(t,this).join("");return"P"+r+"T"+e;function t(n){var s=this[n]||0;return n===
"seconds"&&this.milliseconds&&(s=(s+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),s+pa[n]}};var Jt="([+-]?\\d+)",ga=Jt+"\\s+years?",wa=Jt+"\\s+mons?",ba=Jt+"\
\\s+days?",Sa="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",xa=new RegExp([
ga,wa,ba,Sa].map(function(r){return"("+r+")?"}).join("\\s*")),ws={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},va=["hours","minutes","sec\
onds","milliseconds"];function Ea(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Ea,"parseMilliseconds");function Aa(r){if(!r)return{};var e=xa.exec(
r),t=e[8]==="-";return Object.keys(ws).reduce(function(n,s){var i=ws[s],o=e[i];return!o||
(o=s==="milliseconds"?Ea(o):parseInt(o,10),!o)||(t&&~va.indexOf(s)&&(o*=-1),n[s]=
o),n},{})}a(Aa,"parse")});var vs=I((kl,xs)=>{"use strict";d();xs.exports=a(function(e){if(/^\\x/.test(e))return new y(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var s=1;n+s<e.length&&e[n+s]==="\\";)s++;for(var i=0;i<Math.floor(s/2);++i)t+=
"\\";n+=Math.floor(s/2)*2}return new y(t,"binary")},"parseBytea")});var Rs=I((Ql,Is)=>{d();var ze=zt(),Ye=Yt(),dt=ys(),As=Ss(),_s=vs();function pt(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(pt,"allowNull");function Cs(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(Cs,"parseBool");function _a(r){return r?ze.parse(r,Cs):null}a(_a,"pars\
eBoolArray");function Ca(r){return parseInt(r,10)}a(Ca,"parseBaseTenInt");function Xt(r){
return r?ze.parse(r,pt(Ca)):null}a(Xt,"parseIntegerArray");function Ta(r){return r?
ze.parse(r,pt(function(e){return Ts(e).trim()})):null}a(Ta,"parseBigIntegerArray");
var Ia=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){return t!==
null&&(t=nr(t)),t});return e.parse()},"parsePointArray"),er=a(function(r){if(!r)
return null;var e=Ye.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),ie=a(function(r){if(!r)return null;var e=Ye.
create(r);return e.parse()},"parseStringArray"),tr=a(function(r){if(!r)return null;
var e=Ye.create(r,function(t){return t!==null&&(t=dt(t)),t});return e.parse()},"\
parseDateArray"),Ra=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){
return t!==null&&(t=As(t)),t});return e.parse()},"parseIntervalArray"),Pa=a(function(r){
return r?ze.parse(r,pt(_s)):null},"parseByteAArray"),rr=a(function(r){return parseInt(
r,10)},"parseInteger"),Ts=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),Es=a(function(r){return r?ze.parse(r,pt(JSON.parse)):null},
"parseJsonArray"),nr=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),Fa=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,s=2;s<r.length-1;s++){
if(n||(e+=r[s]),r[s]===")"){n=!0;continue}else if(!n)continue;r[s]!==","&&(t+=r[s])}
var i=nr(e);return i.radius=parseFloat(t),i},"parseCircle"),La=a(function(r){r(20,
Ts),r(21,rr),r(23,rr),r(26,rr),r(700,parseFloat),r(701,parseFloat),r(16,Cs),r(1082,
dt),r(1114,dt),r(1184,dt),r(600,nr),r(651,ie),r(718,Fa),r(1e3,_a),r(1001,Pa),r(1005,
Xt),r(1007,Xt),r(1028,Xt),r(1016,Ta),r(1017,Ia),r(1021,er),r(1022,er),r(1231,er),
r(1014,ie),r(1015,ie),r(1008,ie),r(1009,ie),r(1040,ie),r(1041,ie),r(1115,tr),r(1182,
tr),r(1185,tr),r(1186,As),r(1187,Ra),r(17,_s),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,Es),r(3807,Es),r(3907,ie),r(2951,ie),r(791,ie),r(1183,
ie),r(1270,ie)},"init");Is.exports={init:La}});var Fs=I((Nl,Ps)=>{"use strict";d();var Z=1e6;function Ba(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var s="",i,o,u,
c,l,h;{if(i=e%Z,e=e/Z>>>0,o=4294967296*i+t,t=o/Z>>>0,u=""+(o-Z*t),t===0&&e===0)return n+
u+s;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";s=c+u+s}{if(i=e%Z,e=e/Z>>>0,o=4294967296*
i+t,t=o/Z>>>0,u=""+(o-Z*t),t===0&&e===0)return n+u+s;for(c="",l=6-u.length,h=0;h<
l;h++)c+="0";s=c+u+s}{if(i=e%Z,e=e/Z>>>0,o=4294967296*i+t,t=o/Z>>>0,u=""+(o-Z*t),
t===0&&e===0)return n+u+s;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";s=c+u+s}return i=
e%Z,o=4294967296*i+t,u=""+o%Z,n+u+s}a(Ba,"readInt8");Ps.exports=Ba});var Os=I((Hl,ks)=>{d();var Ma=Fs(),B=a(function(r,e,t,n,s){t=t||0,n=n||!1,s=s||function(_,P,G){
return _*Math.pow(2,G)+P};var i=t>>3,o=a(function(_){return n?~_&255:_},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=s(0,o(r[i])&
u,c));for(var h=e+t>>3,p=i+1;p<h;p++)l=s(l,o(r[p]),8);var S=(e+t)%8;return S>0&&
(l=s(l,o(r[h])>>8-S,S)),l},"parseBits"),Ms=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,s=B(r,1),i=B(r,t,1);if(i===0)return 0;var o=1,u=a(function(l,h,p){l===0&&(l=
1);for(var S=1;S<=p;S++)o/=2,(h&1<<p-S)>0&&(l+=o);return l},"parsePrecisionBits"),
c=B(r,e,t+1,!1,u);return i==Math.pow(2,t+1)-1?c===0?s===0?1/0:-1/0:NaN:(s===0?1:
-1)*Math.pow(2,i-n)*c},"parseFloatFromBits"),ka=a(function(r){return B(r,1)==1?-1*
(B(r,15,1,!0)+1):B(r,15,1)},"parseInt16"),Ls=a(function(r){return B(r,1)==1?-1*(B(
r,31,1,!0)+1):B(r,31,1)},"parseInt32"),Oa=a(function(r){return Ms(r,23,8)},"pars\
eFloat32"),Da=a(function(r){return Ms(r,52,11)},"parseFloat64"),Qa=a(function(r){
var e=B(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,B(r,16,16)),n=0,s=[],
i=B(r,16),o=0;o<i;o++)n+=B(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,B(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Bs=a(function(r,e){var t=B(
e,1),n=B(e,63,1),s=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||s.setTime(s.
getTime()+s.getTimezoneOffset()*6e4),s.usec=n%1e3,s.getMicroSeconds=function(){return this.
usec},s.setMicroSeconds=function(i){this.usec=i},s.getUTCMicroSeconds=function(){
return this.usec},s},"parseDate"),Ze=a(function(r){for(var e=B(r,32),t=B(r,32,32),
n=B(r,32,64),s=96,i=[],o=0;o<e;o++)i[o]=B(r,32,s),s+=32,s+=32;var u=a(function(l){
var h=B(r,32,s);if(s+=32,h==4294967295)return null;var p;if(l==23||l==20)return p=
B(r,h*8,s),s+=h*8,p;if(l==25)return p=r.toString(this.encoding,s>>3,(s+=h<<3)>>3),
p;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=a(function(l,h){
var p=[],S;if(l.length>1){var _=l.shift();for(S=0;S<_;S++)p[S]=c(l,h);l.unshift(
_)}else for(S=0;S<l[0];S++)p[S]=u(h);return p},"parse");return c(i,n)},"parseArr\
ay"),Ua=a(function(r){return r.toString("utf8")},"parseText"),qa=a(function(r){return r===
null?null:B(r,8)>0},"parseBool"),Na=a(function(r){r(20,Ma),r(21,ka),r(23,Ls),r(26,
Ls),r(1700,Qa),r(700,Oa),r(701,Da),r(16,qa),r(1114,Bs.bind(null,!1)),r(1184,Bs.bind(
null,!0)),r(1e3,Ze),r(1007,Ze),r(1016,Ze),r(1008,Ze),r(1009,Ze),r(25,Ua)},"init");
ks.exports={init:Na}});var Qs=I((Vl,Ds)=>{d();Ds.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var et=I(Xe=>{d();var Wa=Rs(),ja=Os(),Ha=Yt(),Ga=Qs();Xe.getTypeParser=$a;Xe.setTypeParser=
Va;Xe.arrayParser=Ha;Xe.builtins=Ga;var Je={text:{},binary:{}};function Us(r){return String(
r)}a(Us,"noParse");function $a(r,e){return e=e||"text",Je[e]&&Je[e][r]||Us}a($a,
"getTypeParser");function Va(r,e,t){typeof e=="function"&&(t=e,e="text"),Je[e][r]=
t}a(Va,"setTypeParser");Wa.init(function(r,e){Je.text[r]=e});ja.init(function(r,e){
Je.binary[r]=e})});var tt=I((Jl,sr)=>{"use strict";d();sr.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Oe=et(),Ka=Oe.getTypeParser(
20,"text"),za=Oe.getTypeParser(1016,"text");sr.exports.__defineSetter__("parseIn\
t8",function(r){Oe.setTypeParser(20,"text",r?Oe.getTypeParser(23,"text"):Ka),Oe.
setTypeParser(1016,"text",r?Oe.getTypeParser(1007,"text"):za)})});var rt=I((eh,Ns)=>{"use strict";d();var Ya=(Vt(),U($t)),Za=tt();function Ja(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Ja,"escapeElement");
function qs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+qs(r[t]):r[t]instanceof y?e+="\\\\x"+r[t].
toString("hex"):e+=Ja(yt(r[t]));return e=e+"}",e}a(qs,"arrayString");var yt=a(function(r,e){
if(r==null)return null;if(r instanceof y)return r;if(ArrayBuffer.isView(r)){var t=y.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Za.parseInputDatesAsUTC?
tu(r):eu(r):Array.isArray(r)?qs(r):typeof r=="object"?Xa(r,e):r.toString()},"pre\
pareValue");function Xa(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),yt(r.toPostgres(yt),e)}return JSON.stringify(r)}
a(Xa,"prepareObject");function H(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}a(
H,"pad");function eu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var s=H(t,4)+"-"+H(r.getMonth()+1,2)+"-"+H(r.getDate(),2)+"T"+
H(r.getHours(),2)+":"+H(r.getMinutes(),2)+":"+H(r.getSeconds(),2)+"."+H(r.getMilliseconds(),
3);return e<0?(s+="-",e*=-1):s+="+",s+=H(Math.floor(e/60),2)+":"+H(e%60,2),n&&(s+=
" BC"),s}a(eu,"dateToString");function tu(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=
Math.abs(e)+1);var n=H(e,4)+"-"+H(r.getUTCMonth()+1,2)+"-"+H(r.getUTCDate(),2)+"\
T"+H(r.getUTCHours(),2)+":"+H(r.getUTCMinutes(),2)+":"+H(r.getUTCSeconds(),2)+"."+
H(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(tu,"dateToStrin\
gUTC");function ru(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="\
function"?r.callback=e:r.values=e),t&&(r.callback=t),r}a(ru,"normalizeQueryConfi\
g");var ir=a(function(r){return Ya.createHash("md5").update(r,"utf-8").digest("h\
ex")},"md5"),nu=a(function(r,e,t){var n=ir(e+r),s=ir(y.concat([y.from(n),t]));return"\
md5"+s},"postgresMd5PasswordHash");Ns.exports={prepareValue:a(function(e){return yt(
e)},"prepareValueWrapper"),normalizeQueryConfig:ru,postgresMd5PasswordHash:nu,md5:ir}});var $s=I((nh,Gs)=>{"use strict";d();var or=(Vt(),U($t));function su(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=or.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(su,"startSession");function iu(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=uu(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var s=y.from(n.salt,"base64"),i=hu(e,
s,n.iteration),o=De(i,"Client Key"),u=lu(o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,p=c+","+l+","+h,S=De(u,p),_=Hs(
o,S),P=_.toString("base64"),G=De(i,"Server Key"),ee=De(G,p);r.message="SASLRespo\
nse",r.serverSignature=ee.toString("base64"),r.response=h+",p="+P}a(iu,"continue\
Session");function ou(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: \
Last message was not SASLResponse");if(typeof e!="string")throw new Error("SASL:\
 SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=cu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(ou,"finalizeSession");function au(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(au,"isPrintableC\
hars");function Ws(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Ws,"isBase64");function js(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(js,"parseAttributePairs");function uu(r){let e=js(
r),t=e.get("r");if(t){if(!au(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Ws(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let s=e.get("i");if(s){if(!/^[1-9][0-9]*$/.
test(s))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let i=parseInt(s,10);return{nonce:t,salt:n,iteration:i}}a(uu,"parseServerFirstMe\
ssage");function cu(r){let t=js(r).get("v");if(t){if(!Ws(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(cu,"parseServerFinalMessage");function Hs(r,e){if(!y.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!y.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return y.
from(r.map((t,n)=>r[n]^e[n]))}a(Hs,"xorBuffers");function lu(r){return or.createHash(
"sha256").update(r).digest()}a(lu,"sha256");function De(r,e){return or.createHmac(
"sha256",r).update(e).digest()}a(De,"hmacSha256");function hu(r,e,t){for(var n=De(
r,y.concat([e,y.from([0,0,0,1])])),s=n,i=0;i<t-1;i++)n=De(r,n),s=Hs(s,n);return s}
a(hu,"Hi");Gs.exports={startSession:su,continueSession:iu,finalizeSession:ou}});var ar={};ne(ar,{join:()=>fu});function fu(...r){return r.join("/")}var ur=z(()=>{
"use strict";d();a(fu,"join")});var cr={};ne(cr,{stat:()=>du});function du(r,e){e(new Error("No filesystem"))}var lr=z(
()=>{"use strict";d();a(du,"stat")});var hr={};ne(hr,{default:()=>pu});var pu,fr=z(()=>{"use strict";d();pu={}});var Vs={};ne(Vs,{StringDecoder:()=>dr});var pr,dr,Ks=z(()=>{"use strict";d();pr=
class pr{constructor(e){A(this,"td");this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}};a(pr,"StringDecoder");
dr=pr});var Js=I((dh,Zs)=>{"use strict";d();var{Transform:yu}=(fr(),U(hr)),{StringDecoder:mu}=(Ks(),U(Vs)),
xe=Symbol("last"),mt=Symbol("decoder");function gu(r,e,t){let n;if(this.overflow){
if(n=this[mt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[xe]+=this[mt].write(r),n=this[xe].split(this.matcher);this[xe]=
n.pop();for(let s=0;s<n.length;s++)try{Ys(this,this.mapper(n[s]))}catch(i){return t(
i)}if(this.overflow=this[xe].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(gu,"transform");function wu(r){
if(this[xe]+=this[mt].end(),this[xe])try{Ys(this,this.mapper(this[xe]))}catch(e){
return r(e)}r()}a(wu,"flush");function Ys(r,e){e!==void 0&&r.push(e)}a(Ys,"push");
function zs(r){return r}a(zs,"noop");function bu(r,e,t){switch(r=r||/\r?\n/,e=e||
zs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=zs)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=gu,t.flush=wu,t.readableObjectMode=!0;
let n=new yu(t);return n[xe]="",n[mt]=new mu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(s,i){
this._writableState.errorEmitted=!1,i(s)},n}a(bu,"split");Zs.exports=bu});var ti=I((mh,ye)=>{"use strict";d();var Xs=(ur(),U(ar)),Su=(fr(),U(hr)).Stream,xu=Js(),
ei=($e(),U(Ge)),vu=5432,gt=m.platform==="win32",nt=m.stderr,Eu=56,Au=7,_u=61440,
Cu=32768;function Tu(r){return(r&_u)==Cu}a(Tu,"isRegFile");var Qe=["host","port",
"database","user","password"],yr=Qe.length,Iu=Qe[yr-1];function mr(){var r=nt instanceof
Su&&nt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);nt.write(ei.format.apply(ei,e))}}a(mr,"warn");Object.defineProperty(ye.exports,
"isWin",{get:a(function(){return gt},"get"),set:a(function(r){gt=r},"set")});ye.
exports.warnTo=function(r){var e=nt;return nt=r,e};ye.exports.getFileName=function(r){
var e=r||m.env,t=e.PGPASSFILE||(gt?Xs.join(e.APPDATA||"./","postgresql","pgpass.\
conf"):Xs.join(e.HOME||"./",".pgpass"));return t};ye.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(m.env,"PGPASSWORD")?!1:gt?!0:(e=e||"\
<unkn>",Tu(r.mode)?r.mode&(Eu|Au)?(mr('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less',e),!1):!0:(mr('WARNING:\
 password file "%s" is not a plain file',e),!1))};var Ru=ye.exports.match=function(r,e){
return Qe.slice(0,-1).reduce(function(t,n,s){return s==1&&Number(r[n]||vu)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};ye.exports.getPassword=function(r,e,t){
var n,s=e.pipe(xu());function i(c){var l=Pu(c);l&&Fu(l)&&Ru(r,l)&&(n=l[Iu],s.end())}
a(i,"onLine");var o=a(function(){e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),
mr("WARNING: error on reading file: %s",c),t(void 0)},"onErr");e.on("error",u),s.
on("data",i).on("end",o).on("error",u)};var Pu=ye.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,s=0,i=0,o={},
u=!1,c=a(function(h,p,S){var _=r.substring(p,S);Object.hasOwnProperty.call(m.env,
"PGPASS_NO_DEESCAPE")||(_=_.replace(/\\([:\\])/g,"$1")),o[Qe[h]]=_},"addToObj"),
l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(l),u=n==yr-1,u){c(n,s);break}
l>=0&&e==":"&&t!=="\\"&&(c(n,s,l+1),s=l+2,n+=1)}return o=Object.keys(o).length===
yr?o:null,o},Fu=ye.exports.isValidEntry=function(r){for(var e={0:function(o){return o.
length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&
Math.floor(o)===o)},2:function(o){return o.length>0},3:function(o){return o.length>
0},4:function(o){return o.length>0}},t=0;t<Qe.length;t+=1){var n=e[t],s=r[Qe[t]]||
"",i=n(s);if(!i)return!1}return!0}});var ni=I((Sh,gr)=>{"use strict";d();var bh=(ur(),U(ar)),ri=(lr(),U(cr)),wt=ti();
gr.exports=function(r,e){var t=wt.getFileName();ri.stat(t,function(n,s){if(n||!wt.
usePgPass(s,t))return e(void 0);var i=ri.createReadStream(t);wt.getPassword(r,i,
e)})};gr.exports.warnTo=wt.warnTo});var St=I((vh,si)=>{"use strict";d();var Lu=et();function bt(r){this._types=r||Lu,
this.text={},this.binary={}}a(bt,"TypeOverrides");bt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
bt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};bt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};si.exports=bt});var ii={};ne(ii,{default:()=>Bu});var Bu,oi=z(()=>{"use strict";d();Bu={}});var ai={};ne(ai,{parse:()=>wr});function wr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:s,password:i,host:o,hostname:u,port:c,pathname:l,
search:h,searchParams:p,hash:S}=new URL(n);i=decodeURIComponent(i),s=decodeURIComponent(
s),l=decodeURIComponent(l);let _=s+":"+i,P=e?Object.fromEntries(p.entries()):h;return{
href:r,protocol:t,auth:_,username:s,password:i,host:o,hostname:u,port:c,pathname:l,
search:h,query:P,hash:S}}var br=z(()=>{"use strict";d();a(wr,"parse")});var ci=I((Ih,ui)=>{"use strict";d();var Mu=(br(),U(ai)),Sr=(lr(),U(cr));function xr(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=Mu.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var s=(e.auth||":").split(":");if(t.user=s[0],t.password=s.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var i=e.
pathname;if(!t.host&&i&&/^%2f/i.test(i)){var o=i.split("/");t.host=decodeURIComponent(
o[0]),i=o.splice(1).join("/")}switch(i&&i.charAt(0)==="/"&&(i=i.slice(1)||null),
t.database=i&&decodeURI(i),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=Sr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=Sr.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=Sr.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(xr,"parse");ui.exports=xr;xr.parse=xr});var xt=I((Fh,fi)=>{"use strict";d();var ku=(oi(),U(ii)),hi=tt(),li=ci().parse,V=a(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||hi[r]},"val"),Ou=a(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return hi.ssl},"readSSLConfigFromEnvironment"),Ue=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),oe=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+Ue(n))},"ad\
d"),Er=class Er{constructor(e){e=typeof e=="string"?li(e):e||{},e.connectionString&&
(e=Object.assign({},e,li(e.connectionString))),this.user=V("user",e),this.database=
V("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
V("port",e),10),this.host=V("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:V("password",e)}),this.binary=V("binary",e),this.
options=V("options",e),this.ssl=typeof e.ssl>"u"?Ou():e.ssl,typeof this.ssl=="st\
ring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=V("client_encoding",e),this.replication=V("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=V("applicatio\
n_name",e,"PGAPPNAME"),this.fallback_application_name=V("fallback_application_na\
me",e,!1),this.statement_timeout=V("statement_timeout",e,!1),this.lock_timeout=V(
"lock_timeout",e,!1),this.idle_in_transaction_session_timeout=V("idle_in_transac\
tion_session_timeout",e,!1),this.query_timeout=V("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=m.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
oe(t,this,"user"),oe(t,this,"password"),oe(t,this,"port"),oe(t,this,"application\
_name"),oe(t,this,"fallback_application_name"),oe(t,this,"connect_timeout"),oe(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(oe(t,n,"sslmode"),oe(t,n,"sslca"),oe(t,n,"sslkey"),oe(t,n,"sslcert"),
oe(t,n,"sslrootcert"),this.database&&t.push("dbname="+Ue(this.database)),this.replication&&
t.push("replication="+Ue(this.replication)),this.host&&t.push("host="+Ue(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+Ue(this.client_encoding)),ku.lookup(this.host,function(s,i){return s?
e(s,null):(t.push("hostaddr="+Ue(i)),e(null,t.join(" ")))})}};a(Er,"ConnectionPa\
rameters");var vr=Er;fi.exports=vr});var yi=I((Mh,pi)=>{"use strict";d();var Du=et(),di=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
_r=class _r{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=di.exec(e.text):t=di.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,s=e.length;n<s;n++){
var i=e[n];i!==null?t[n]=this._parsers[n](i):t[n]=null}return t}parseRow(e){for(var t={},
n=0,s=e.length;n<s;n++){var i=e[n],o=this.fields[n].name;i!==null?t[o]=this._parsers[n](
i):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Du.getTypeParser(n.dataTypeID,n.format||"text")}}};a(_r,"\
Result");var Ar=_r;pi.exports=Ar});var bi=I((Dh,wi)=>{"use strict";d();var{EventEmitter:Qu}=Se(),mi=yi(),gi=rt(),Tr=class Tr extends Qu{constructor(e,t,n){
super(),e=gi.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,m.domain&&e.callback&&
(this.callback=m.domain.bind(e.callback)),this._result=new mi(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new mi(
this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
m.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
text!="string"&&typeof this.name!="string")return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`):this.values&&!Array.
isArray(this.values)?new Error("Query values must be an array"):(this.requiresPreparation()?
this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){return this.name&&e.parsedStatements[this.
name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){e.execute(
{portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=
!0,this.hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});
try{e.bind({portal:this.portal,statement:this.name,values:this.values,binary:this.
binary,valueMapper:gi.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Tr,"Query");
var Cr=Tr;wi.exports=Cr});var vi={};ne(vi,{Socket:()=>ve,isIP:()=>Uu});function Uu(r){return 0}var xi,Si,E,
ve,vt=z(()=>{"use strict";d();xi=Re(Se(),1);a(Uu,"isIP");Si=/^[^.]+\./,E=class E extends xi.EventEmitter{constructor(){
super(...arguments);A(this,"opts",{});A(this,"connecting",!1);A(this,"pending",!0);
A(this,"writable",!0);A(this,"encrypted",!1);A(this,"authorized",!1);A(this,"des\
troyed",!1);A(this,"ws",null);A(this,"writeBuffer");A(this,"tlsState",0);A(this,
"tlsRead");A(this,"tlsWrite")}static get poolQueryViaFetch(){return E.opts.poolQueryViaFetch??
E.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){E.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return E.opts.fetchEndpoint??E.defaults.fetchEndpoint}static set fetchEndpoint(t){
E.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`\
)")}static get fetchFunction(){return E.opts.fetchFunction??E.defaults.fetchFunction}static set fetchFunction(t){
E.opts.fetchFunction=t}static get webSocketConstructor(){return E.opts.webSocketConstructor??
E.defaults.webSocketConstructor}static set webSocketConstructor(t){E.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??E.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return E.opts.wsProxy??E.defaults.
wsProxy}static set wsProxy(t){E.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
E.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return E.
opts.coalesceWrites??E.defaults.coalesceWrites}static set coalesceWrites(t){E.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??E.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return E.opts.useSecureWebSocket??
E.defaults.useSecureWebSocket}static set useSecureWebSocket(t){E.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??E.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return E.opts.forceDisablePgSSL??
E.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){E.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??E.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return E.opts.disableSNI??
E.defaults.disableSNI}static set disableSNI(t){E.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??E.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return E.opts.pipelineConnect??E.defaults.pipelineConnect}static set pipelineConnect(t){
E.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
E.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return E.opts.subtls??E.defaults.subtls}static set subtls(t){E.opts.subtls=t}get subtls(){
return this.opts.subtls??E.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return E.opts.pipelineTLS??E.defaults.pipelineTLS}static set pipelineTLS(t){E.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??E.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return E.opts.rootCerts??E.defaults.
rootCerts}static set rootCerts(t){E.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??E.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let s=this.wsProxy;if(s===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof s=="functi\
on"?s(t,n):`${s}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){return this}ref(){
return this}unref(){return this}connect(t,n,s){this.connecting=!0,s&&this.once("\
connect",s);let i=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),
this.emit("ready")},"handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuf\
fer",c.addEventListener("error",h=>{this.emit("error",h),this.emit("close")}),c.
addEventListener("message",h=>{if(this.tlsState===0){let p=y.from(h.data);this.emit(
"data",p)}}),c.addEventListener("close",()=>{this.emit("close")}),l?i():c.addEventListener(
"open",i)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="st\
ring"?parseInt(t,10):t)}catch(c){this.emit("error",c),this.emit("close");return}
try{let l=(this.useSecureWebSocket?"wss:":"ws:")+"//"+u;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(l),o(this.ws);else try{this.ws=new WebSocket(
l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){let h=(this.
useSecureWebSocket?"https:":"http:")+"//"+u;fetch(h,{headers:{Upgrade:"websocket"}}).
then(p=>{if(this.ws=p.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,
!0)}).catch(p=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${p}`)),this.emit("close")})}}async startTls(t){if(this.subtls===void 0)
throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` \
to the subtls library. See https://github.com/neondatabase/serverless/blob/main/\
CONFIG.md for more information.");this.tlsState=1;let n=this.subtls.TrustedCert.
databaseFromPEM(this.rootCerts),s=new this.subtls.WebSocketReadQueue(this.ws),i=s.
read.bind(s),o=this.rawWrite.bind(this),[u,c]=await this.subtls.startTls(t,n,i,o,
{useSNI:!this.disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});
this.tlsRead=u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=
!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){
let t=await this.tlsRead();if(t===void 0)break;{let n=y.from(t);this.emit("data",
n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===
void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=
void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.length);n.set(this.
writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="utf\
8",s=i=>{}){return t.length===0?(s(),!0):(typeof t=="string"&&(t=y.from(t,n)),this.
tlsState===0?(this.rawWrite(t),s()):this.tlsState===1?this.once("secureConnectio\
n",()=>{this.write(t,n,s)}):(this.tlsWrite(t),s()),!0)}end(t=y.alloc(0),n="utf8",s=()=>{}){
return this.write(t,n,()=>{this.ws.close(),s()}),this}destroy(){return this.destroyed=
!0,this.end()}};a(E,"Socket"),A(E,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a(
(t,n,s)=>{let i;return s?.jwtAuth?i=t.replace(Si,"apiauth."):i=t.replace(Si,"api\
."),"https://"+i+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,
webSocketConstructor:void 0,wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,
forceDisablePgSSL:!0,coalesceWrites:!0,pipelineConnect:"password",subtls:void 0,
rootCerts:"",pipelineTLS:!1,disableSNI:!1}),A(E,"opts",{});ve=E});var rn=I(T=>{"use strict";d();Object.defineProperty(T,"__esModule",{value:!0});T.
NoticeMessage=T.DataRowMessage=T.CommandCompleteMessage=T.ReadyForQueryMessage=T.
NotificationResponseMessage=T.BackendKeyDataMessage=T.AuthenticationMD5Password=
T.ParameterStatusMessage=T.ParameterDescriptionMessage=T.RowDescriptionMessage=T.
Field=T.CopyResponse=T.CopyDataMessage=T.DatabaseError=T.copyDone=T.emptyQuery=T.
replicationStart=T.portalSuspended=T.noData=T.closeComplete=T.bindComplete=T.parseComplete=
void 0;T.parseComplete={name:"parseComplete",length:5};T.bindComplete={name:"bin\
dComplete",length:5};T.closeComplete={name:"closeComplete",length:5};T.noData={name:"\
noData",length:5};T.portalSuspended={name:"portalSuspended",length:5};T.replicationStart=
{name:"replicationStart",length:4};T.emptyQuery={name:"emptyQuery",length:4};T.copyDone=
{name:"copyDone",length:4};var Wr=class Wr extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};a(Wr,"DatabaseError");var Ir=Wr;T.DatabaseError=Ir;
var jr=class jr{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
a(jr,"CopyDataMessage");var Rr=jr;T.CopyDataMessage=Rr;var Hr=class Hr{constructor(e,t,n,s){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(s)}};a(Hr,"Co\
pyResponse");var Pr=Hr;T.CopyResponse=Pr;var Gr=class Gr{constructor(e,t,n,s,i,o,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=s,this.dataTypeSize=i,
this.dataTypeModifier=o,this.format=u}};a(Gr,"Field");var Fr=Gr;T.Field=Fr;var $r=class $r{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};a($r,"RowDescriptionMessage");var Lr=$r;T.RowDescriptionMessage=
Lr;var Vr=class Vr{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};a(Vr,"P\
arameterDescriptionMessage");var Br=Vr;T.ParameterDescriptionMessage=Br;var Kr=class Kr{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};a(Kr,"ParameterStatusMessage");var Mr=Kr;T.ParameterStatusMessage=Mr;var zr=class zr{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};a(zr,"Authenti\
cationMD5Password");var kr=zr;T.AuthenticationMD5Password=kr;var Yr=class Yr{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Yr,
"BackendKeyDataMessage");var Or=Yr;T.BackendKeyDataMessage=Or;var Zr=class Zr{constructor(e,t,n,s){
this.length=e,this.processId=t,this.channel=n,this.payload=s,this.name="notifica\
tion"}};a(Zr,"NotificationResponseMessage");var Dr=Zr;T.NotificationResponseMessage=
Dr;var Jr=class Jr{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};a(Jr,"ReadyForQueryMessage");var Qr=Jr;T.ReadyForQueryMessage=Qr;var Xr=class Xr{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};a(Xr,"CommandCompleteMes\
sage");var Ur=Xr;T.CommandCompleteMessage=Ur;var en=class en{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(en,"Data\
RowMessage");var qr=en;T.DataRowMessage=qr;var tn=class tn{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};a(tn,"NoticeMessage");var Nr=tn;T.NoticeMessage=
Nr});var Ei=I(Et=>{"use strict";d();Object.defineProperty(Et,"__esModule",{value:!0});
Et.Writer=void 0;var sn=class sn{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=y.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,s=n.length+(n.length>>1)+e;this.buffer=y.allocUnsafe(
s),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=y.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=y.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=y.allocUnsafe(this.size),t}};a(sn,"Wr\
iter");var nn=sn;Et.Writer=nn});var _i=I(_t=>{"use strict";d();Object.defineProperty(_t,"__esModule",{value:!0});
_t.serialize=void 0;var on=Ei(),M=new on.Writer,qu=a(r=>{M.addInt16(3).addInt16(
0);for(let n of Object.keys(r))M.addCString(n).addCString(r[n]);M.addCString("cl\
ient_encoding").addCString("UTF8");var e=M.addCString("").flush(),t=e.length+4;return new on.
Writer().addInt32(t).add(e).flush()},"startup"),Nu=a(()=>{let r=y.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Wu=a(r=>M.
addCString(r).flush(112),"password"),ju=a(function(r,e){return M.addCString(r).addInt32(
y.byteLength(e)).addString(e),M.flush(112)},"sendSASLInitialResponseMessage"),Hu=a(
function(r){return M.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Gu=a(
r=>M.addCString(r).flush(81),"query"),Ai=[],$u=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||Ai;for(var n=t.length,
s=M.addCString(e).addCString(r.text).addInt16(n),i=0;i<n;i++)s.addInt32(t[i]);return M.
flush(80)},"parse"),qe=new on.Writer,Vu=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(M.addInt16(0),qe.addInt32(-1)):n instanceof y?(M.
addInt16(1),qe.addInt32(n.length),qe.add(n)):(M.addInt16(0),qe.addInt32(y.byteLength(
n)),qe.addString(n))}},"writeValues"),Ku=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,s=r.values||Ai,i=s.length;return M.addCString(e).addCString(t),
M.addInt16(i),Vu(s,r.valueMapper),M.addInt16(i),M.add(qe.flush()),M.addInt16(n?1:
0),M.flush(66)},"bind"),zu=y.from([69,0,0,0,9,0,0,0,0,0]),Yu=a(r=>{if(!r||!r.portal&&
!r.rows)return zu;let e=r.portal||"",t=r.rows||0,n=y.byteLength(e),s=4+n+1+4,i=y.
allocUnsafe(1+s);return i[0]=69,i.writeInt32BE(s,1),i.write(e,5,"utf-8"),i[n+5]=
0,i.writeUInt32BE(t,i.length-4),i},"execute"),Zu=a((r,e)=>{let t=y.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),an=a((r,e)=>{let n=4+y.byteLength(e)+1,s=y.
allocUnsafe(1+n);return s[0]=r,s.writeInt32BE(n,1),s.write(e,5,"utf-8"),s[n]=0,s},
"cstringMessage"),Ju=M.addCString("P").flush(68),Xu=M.addCString("S").flush(68),
ec=a(r=>r.name?an(68,`${r.type}${r.name||""}`):r.type==="P"?Ju:Xu,"describe"),tc=a(
r=>{let e=`${r.type}${r.name||""}`;return an(67,e)},"close"),rc=a(r=>M.add(r).flush(
100),"copyData"),nc=a(r=>an(102,r),"copyFail"),At=a(r=>y.from([r,0,0,0,4]),"code\
OnlyBuffer"),sc=At(72),ic=At(83),oc=At(88),ac=At(99),uc={startup:qu,password:Wu,
requestSsl:Nu,sendSASLInitialResponseMessage:ju,sendSCRAMClientFinalMessage:Hu,query:Gu,
parse:$u,bind:Ku,execute:Yu,describe:ec,close:tc,flush:a(()=>sc,"flush"),sync:a(
()=>ic,"sync"),end:a(()=>oc,"end"),copyData:rc,copyDone:a(()=>ac,"copyDone"),copyFail:nc,
cancel:Zu};_t.serialize=uc});var Ci=I(Ct=>{"use strict";d();Object.defineProperty(Ct,"__esModule",{value:!0});
Ct.BufferReader=void 0;var cc=y.allocUnsafe(0),cn=class cn{constructor(e=0){this.
offset=e,this.buffer=cc,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};a(cn,"BufferReader");var un=cn;Ct.BufferReader=
un});var Ri=I(Tt=>{"use strict";d();Object.defineProperty(Tt,"__esModule",{value:!0});
Tt.Parser=void 0;var k=rn(),lc=Ci(),ln=1,hc=4,Ti=ln+hc,Ii=y.allocUnsafe(0),fn=class fn{constructor(e){
if(this.buffer=Ii,this.bufferLength=0,this.bufferOffset=0,this.reader=new lc.BufferReader,
e?.mode==="binary")throw new Error("Binary mode not supported yet");this.mode=e?.
mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+this.bufferLength,
s=this.bufferOffset;for(;s+Ti<=n;){let i=this.buffer[s],o=this.buffer.readUInt32BE(
s+ln),u=ln+o;if(u+s<=n){let c=this.handlePacket(s+Ti,i,o,this.buffer);t(c),s+=u}else
break}s===n?(this.buffer=Ii,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=
n-s,this.bufferOffset=s)}mergeBuffer(e){if(this.bufferLength>0){let t=this.bufferLength+
e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){let s;if(t<=this.buffer.
byteLength&&this.bufferOffset>=this.bufferLength)s=this.buffer;else{let i=this.buffer.
byteLength*2;for(;t>=i;)i*=2;s=y.allocUnsafe(i)}this.buffer.copy(s,0,this.bufferOffset,
this.bufferOffset+this.bufferLength),this.buffer=s,this.bufferOffset=0}e.copy(this.
buffer,this.bufferOffset+this.bufferLength),this.bufferLength=t}else this.buffer=
e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,s){switch(t){case 50:
return k.bindComplete;case 49:return k.parseComplete;case 51:return k.closeComplete;case 110:
return k.noData;case 115:return k.portalSuspended;case 99:return k.copyDone;case 87:
return k.replicationStart;case 73:return k.emptyQuery;case 68:return this.parseDataRowMessage(
e,n,s);case 67:return this.parseCommandCompleteMessage(e,n,s);case 90:return this.
parseReadyForQueryMessage(e,n,s);case 65:return this.parseNotificationMessage(e,
n,s);case 82:return this.parseAuthenticationResponse(e,n,s);case 83:return this.
parseParameterStatusMessage(e,n,s);case 75:return this.parseBackendKeyData(e,n,s);case 69:
return this.parseErrorMessage(e,n,s,"error");case 78:return this.parseErrorMessage(
e,n,s,"notice");case 84:return this.parseRowDescriptionMessage(e,n,s);case 116:return this.
parseParameterDescriptionMessage(e,n,s);case 71:return this.parseCopyInMessage(e,
n,s);case 72:return this.parseCopyOutMessage(e,n,s);case 100:return this.parseCopyData(
e,n,s);default:return new k.DatabaseError("received invalid response: "+t.toString(
16),n,"error")}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.
reader.string(1);return new k.ReadyForQueryMessage(t,s)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.cstring();return new k.CommandCompleteMessage(
t,s)}parseCopyData(e,t,n){let s=n.slice(e,e+(t-4));return new k.CopyDataMessage(
t,s)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,s){this.reader.setBuffer(e,n);let i=this.reader.byte()!==
0,o=this.reader.int16(),u=new k.CopyResponse(t,s,i,o);for(let c=0;c<o;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i=this.reader.cstring(),o=this.reader.cstring();return new k.
NotificationResponseMessage(t,s,i,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let s=this.reader.int16(),i=new k.RowDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.fields[o]=this.parseField();return i}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),s=this.reader.int32(),i=this.reader.
int16(),o=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new k.
Field(e,t,n,s,i,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int16(),i=new k.ParameterDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.dataTypeIDs[o]=this.reader.int32();return i}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let s=this.reader.int16(),i=new Array(s);for(let o=0;o<s;o++){
let u=this.reader.int32();i[o]=u===-1?null:this.reader.string(u)}return new k.DataRowMessage(
t,i)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.reader.
cstring(),i=this.reader.cstring();return new k.ParameterStatusMessage(t,s,i)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.int32(),i=this.reader.int32();return new k.
BackendKeyDataMessage(t,s,i)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i={name:"authenticationOk",length:t};switch(s){case 0:
break;case 3:i.length===8&&(i.name="authenticationCleartextPassword");break;case 5:
if(i.length===12){i.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new k.AuthenticationMD5Password(t,u)}break;case 10:i.name="authentication\
SASL",i.mechanisms=[];let o;do o=this.reader.cstring(),o&&i.mechanisms.push(o);while(o);
break;case 11:i.name="authenticationSASLContinue",i.data=this.reader.string(t-8);
break;case 12:i.name="authenticationSASLFinal",i.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+s)}return i}parseErrorMessage(e,t,n,s){
this.reader.setBuffer(e,n);let i={},o=this.reader.string(1);for(;o!=="\0";)i[o]=
this.reader.cstring(),o=this.reader.string(1);let u=i.M,c=s==="notice"?new k.NoticeMessage(
t,u):new k.DatabaseError(u,t,s);return c.severity=i.S,c.code=i.C,c.detail=i.D,c.
hint=i.H,c.position=i.P,c.internalPosition=i.p,c.internalQuery=i.q,c.where=i.W,c.
schema=i.s,c.table=i.t,c.column=i.c,c.dataType=i.d,c.constraint=i.n,c.file=i.F,c.
line=i.L,c.routine=i.R,c}};a(fn,"Parser");var hn=fn;Tt.Parser=hn});var dn=I(Ee=>{"use strict";d();Object.defineProperty(Ee,"__esModule",{value:!0});
Ee.DatabaseError=Ee.serialize=Ee.parse=void 0;var fc=rn();Object.defineProperty(
Ee,"DatabaseError",{enumerable:!0,get:a(function(){return fc.DatabaseError},"get")});
var dc=_i();Object.defineProperty(Ee,"serialize",{enumerable:!0,get:a(function(){
return dc.serialize},"get")});var pc=Ri();function yc(r,e){let t=new pc.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(yc,"parse");Ee.
parse=yc});var Pi={};ne(Pi,{connect:()=>mc});function mc({socket:r,servername:e}){return r.
startTls(e),r}var Fi=z(()=>{"use strict";d();a(mc,"connect")});var mn=I((cf,Mi)=>{"use strict";d();var Li=(vt(),U(vi)),gc=Se().EventEmitter,{parse:wc,
serialize:N}=dn(),Bi=N.flush(),bc=N.sync(),Sc=N.end(),yn=class yn extends gc{constructor(e){
super(),e=e||{},this.stream=e.stream||new Li.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let s=a(function(i){n._ending&&
(i.code==="ECONNRESET"||i.code==="EPIPE")||n.emit("error",i)},"reportStreamError");
if(this.stream.on("error",s),this.stream.on("close",function(){n.emit("end")}),!this.
ssl)return this.attachListeners(this.stream);this.stream.once("data",function(i){
var o=i.toString("utf8");switch(o){case"S":break;case"N":return n.stream.end(),n.
emit("error",new Error("The server does not support SSL connections"));default:return n.
stream.end(),n.emit("error",new Error("There was an error establishing an SSL co\
nnection"))}var u=(Fi(),U(Pi));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Li.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(l){return n.emit("error",l)}n.attachListeners(n.stream),
n.stream.on("error",s),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),wc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(N.requestSsl())}startup(e){
this.stream.write(N.startup(e))}cancel(e,t){this._send(N.cancel(e,t))}password(e){
this._send(N.password(e))}sendSASLInitialResponseMessage(e,t){this._send(N.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(N.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(N.query(
e))}parse(e){this._send(N.parse(e))}bind(e){this._send(N.bind(e))}execute(e){this.
_send(N.execute(e))}flush(){this.stream.writable&&this.stream.write(Bi)}sync(){this.
_ending=!0,this._send(Bi),this._send(bc)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(Sc,()=>{this.stream.end()})}close(e){
this._send(N.close(e))}describe(e){this._send(N.describe(e))}sendCopyFromChunk(e){
this._send(N.copyData(e))}endCopyFrom(){this._send(N.copyDone())}sendCopyFail(e){
this._send(N.copyFail(e))}};a(yn,"Connection");var pn=yn;Mi.exports=pn});var Di=I((df,Oi)=>{"use strict";d();var xc=Se().EventEmitter,ff=($e(),U(Ge)),vc=rt(),
gn=$s(),Ec=ni(),Ac=St(),_c=xt(),ki=bi(),Cc=tt(),Tc=mn(),wn=class wn extends xc{constructor(e){
super(),this.connectionParameters=new _c(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||b.Promise,this._types=new Ac(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Tc({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||Cc.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=a(
n=>{m.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let s=new Error("Client has already been conn\
ected. You cannot reuse a client.");m.nextTick(()=>{e(s)});return}this._connecting=
!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=
setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expired"))},this.
_connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.
host+"/.s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){
t.ssl?n.requestSsl():n.startup(t.getStartupConf())}),n.on("sslconnect",function(){
n.startup(t.getStartupConf())}),this._attachListeners(n),n.once("end",()=>{let s=this.
_ending?new Error("Connection terminated"):new Error("Connection terminated unex\
pectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(s),this.
_ending||(this._connecting&&!this._connectionError?this._connectionCallback?this.
_connectionCallback(s):this._handleErrorEvent(s):this._connectionError||this._handleErrorEvent(
s)),m.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
return new this._Promise((t,n)=>{this._connect(s=>{s?n(s):t()})})}_attachListeners(e){
e.on("authenticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),
e.on("authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("a\
uthenticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLCont\
inue",this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this.
_handleAuthSASLFinal.bind(this)),e.on("backendKeyData",this._handleBackendKeyData.
bind(this)),e.on("error",this._handleErrorEvent.bind(this)),e.on("errorMessage",
this._handleErrorMessage.bind(this)),e.on("readyForQuery",this._handleReadyForQuery.
bind(this)),e.on("notice",this._handleNotice.bind(this)),e.on("rowDescription",this.
_handleRowDescription.bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),
e.on("portalSuspended",this._handlePortalSuspended.bind(this)),e.on("emptyQuery",
this._handleEmptyQuery.bind(this)),e.on("commandComplete",this._handleCommandComplete.
bind(this)),e.on("parseComplete",this._handleParseComplete.bind(this)),e.on("cop\
yInResponse",this._handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.
bind(this)),e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){
let t=this.connection;typeof this.password=="function"?this._Promise.resolve().then(
()=>this.password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("erro\
r",new TypeError("Password must be a string"));return}this.connectionParameters.
password=this.password=n}else this.connectionParameters.password=this.password=null;
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Ec(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=vc.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=gn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
gn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){gn.finalizeSession(this.saslSession,
e.data),this.saslSession=null}_handleBackendKeyData(e){this.processID=e.processID,
this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this._connecting=
!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("c\
onnect"));let{activeQuery:t}=this;this.activeQuery=null,this.readyForQuery=!0,t&&
t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),
this._connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){
if(this._connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,
this._errorAllQueries(e),this.emit("error",e)}_handleErrorMessage(e){if(this._connecting)
return this._handleErrorWhileConnecting(e);let t=this.activeQuery;if(!t){this._handleErrorEvent(
e);return}this.activeQuery=null,t.handleError(e,this.connection)}_handleRowDescription(e){
this.activeQuery.handleRowDescription(e)}_handleDataRow(e){this.activeQuery.handleDataRow(
e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.connection)}_handleEmptyQuery(e){
this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){this.
activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.
activeQuery.name&&(this.connection.parsedStatements[this.activeQuery.name]=this.
activeQuery.text)}_handleCopyInResponse(e){this.activeQuery.handleCopyInResponse(
this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(e,this.connection)}_handleNotification(e){
this.emit("notification",e)}_handleNotice(e){this.emit("notice",e)}getStartupConf(){
var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=
""+e.replication),e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,
10))),e.lock_timeout&&(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&
(t.idle_in_transaction_session_timeout=String(parseInt(e.idle_in_transaction_session_timeout,
10))),e.options&&(t.options=e.options),t}cancel(e,t){if(e.activeQuery===t){var n=this.
connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+
this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.
indexOf(t),1)}setTypeParser(e,t,n){return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){
return this._types.getTypeParser(e,t)}escapeIdentifier(e){return'"'+e.replace(/"/g,
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",s=0;s<e.length;s++){var i=e[s];i===
"'"?n+=i+i:i==="\\"?(n+=i+i,t=!0):n+=i}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&m.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var s,i,o,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,i=s=e,typeof t=="function"&&
(s.callback=s.callback||t)):(o=this.connectionParameters.query_timeout,s=new ki(
e,t,n),s.callback||(i=new this._Promise((l,h)=>{s.callback=(p,S)=>p?h(p):l(S)}))),
o&&(c=s.callback,u=setTimeout(()=>{var l=new Error("Query read timeout");m.nextTick(
()=>{s.handleError(l,this.connection)}),c(l),s.callback=()=>{};var h=this.queryQueue.
indexOf(s);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},o),s.callback=
(l,h)=>{clearTimeout(u),c(l,h)}),this.binary&&!s.binary&&(s.binary=!0),s._result&&
!s._result._types&&(s._result._types=this._types),this._queryable?this._ending?(m.
nextTick(()=>{s.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),i):(this.queryQueue.push(s),this._pulseQueryQueue(),i):(m.nextTick(
()=>{s.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),i)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(wn,"Client");var It=wn;It.Query=
ki;Oi.exports=It});var Ni=I((mf,qi)=>{"use strict";d();var Ic=Se().EventEmitter,Qi=a(function(){},"\
NOOP"),Ui=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),xn=class xn{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};a(xn,"IdleItem");var bn=xn,vn=class vn{constructor(e){this.callback=
e}};a(vn,"PendingItem");var Ne=vn;function Rc(){throw new Error("Release called \
on client which has already been released to the pool.")}a(Rc,"throwOnDoubleRele\
ase");function Rt(r,e){if(e)return{callback:e,result:void 0};let t,n,s=a(function(o,u){
o?t(o):n(u)},"cb"),i=new r(function(o,u){n=o,t=u}).catch(o=>{throw Error.captureStackTrace(
o),o});return{callback:s,result:i}}a(Rt,"promisify");function Pc(r,e){return a(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}a(Pc,"makeIdleListener");var En=class En extends Ic{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||Pt().Client,this.Promise=
this.options.Promise||b.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,
this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse q\
ueue"),this.ended){this.log("pulse queue ended");return}if(this.ending){this.log(
"pulse queue on ending"),this._idle.length&&this._idle.slice().map(t=>{this._remove(
t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}if(!this.
_pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&
this._isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this.
_idle.pop();clearTimeout(t.timeoutId);let n=t.client;n.ref&&n.ref();let s=t.idleListener;
return this._acquireClient(n,e,s,!1)}if(!this._isFull())return this.newClient(e);
throw new Error("unexpected condition")}_remove(e){let t=Ui(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let s=new Error("Can\
not use a pool after calling end on the pool");return e?e(s):this.Promise.reject(
s)}let t=Rt(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&m.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new Ne(t.callback)),n;let s=a((u,c,l)=>{clearTimeout(
o),t.callback(u,c,l)},"queueCallback"),i=new Ne(s),o=setTimeout(()=>{Ui(this._pendingQueue,
u=>u.callback===s),i.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(i),n}return this.newClient(new Ne(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=Pc(this,t);this.log("checking c\
lient timeout");let s,i=!1;this.options.connectionTimeoutMillis&&(s=setTimeout(()=>{
this.log("ending client due to timeout"),i=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(o=>{if(s&&clearTimeout(s),t.on("error",n),o)this.log("client failed to\
 connect",o),this._clients=this._clients.filter(u=>u!==t),i&&(o.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
o,void 0,Qi);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(
t,new Ne((l,h,p)=>p()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,s){
s&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?s&&this.options.verify?this.options.verify(
e,e.release):e.release():s&&this.options.verify?this.options.verify(e,i=>{if(i)return e.
release(i),t.callback(i,void 0,Qi);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return s=>{n&&Rc(),n=!0,this._release(e,
t,s)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let i;this.options.idleTimeoutMillis&&(i=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
i.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new bn(e,t,i)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let i=Rt(this.Promise,e);
return x(function(){return i.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),i.result}typeof t=="function"&&(n=
t,t=void 0);let s=Rt(this.Promise,n);return n=s.callback,this.connect((i,o)=>{if(i)
return n(i);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("err\
or",c),this.log("dispatching query");try{o.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,
h)})}catch(l){return o.release(l),n(l)}}),s.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=Rt(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(En,"Pool");var Sn=En;qi.exports=Sn});var Wi={};ne(Wi,{default:()=>Fc});var Fc,ji=z(()=>{"use strict";d();Fc={}});var Hi=I((Sf,Lc)=>{Lc.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
 client - pure javascript & libpq with the same API",keywords:["database","libpq",
"pg","postgre","postgres","postgresql","rdbms"],homepage:"https://github.com/bri\
anc/node-postgres",repository:{type:"git",url:"git://github.com/brianc/node-post\
gres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail.\
com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0",
"pg-connection-string":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-ty\
pes":"^2.1.0",pgpass:"1.x"},devDependencies:{async:"2.6.4",bluebird:"3.5.2",co:"\
4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":">=3.0.1"},peerDependenciesMeta:{
"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["lib","SPONSORS\
.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c\
7b9a5491a178655"}});var Vi=I((xf,$i)=>{"use strict";d();var Gi=Se().EventEmitter,Bc=($e(),U(Ge)),An=rt(),
We=$i.exports=function(r,e,t){Gi.call(this),r=An.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Bc.inherits(
We,Gi);var Mc={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};We.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Mc[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};We.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};We.prototype.catch=function(r){return this._getPromise().
catch(r)};We.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};We.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(i,o,u){if(r.native.arrayMode=!1,x(function(){e.emit("_done")}),i)return e.
handleError(i);e._emitRowEvents&&(u.length>1?o.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(An.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let i=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(i)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(i){return i?t(i):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let i=new Error("Query values must be an array");return t(i)}var s=this.
values.map(An.prepareValue);r.native.query(this.text,s,t)}else r.native.query(this.
text,t)}});var Zi=I((_f,Yi)=>{"use strict";d();var kc=(ji(),U(Wi)),Oc=St(),Af=Hi(),Ki=Se().
EventEmitter,Dc=($e(),U(Ge)),Qc=xt(),zi=Vi(),J=Yi.exports=function(r){Ki.call(this),
r=r||{},this._Promise=r.Promise||b.Promise,this._types=new Oc(r.types),this.native=
new kc({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Qc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};J.Query=zi;Dc.inherits(J,Ki);J.prototype._errorAllQueries=
function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};J.prototype._connect=
function(r){var e=this;if(this._connecting){m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(s){if(s)return e.native.end(),r(s);e._connected=!0,
e.native.on("error",function(i){e._queryable=!1,e._errorAllQueries(i),e.emit("er\
ror",i)}),e.native.on("notification",function(i){e.emit("notification",{channel:i.
relname,payload:i.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};J.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};J.prototype.query=function(r,e,t){var n,
s,i,o,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")i=r.query_timeout||this.connectionParameters.
query_timeout,s=n=r,typeof e=="function"&&(r.callback=e);else if(i=this.connectionParameters.
query_timeout,n=new zi(r,e,t),!n.callback){let c,l;s=new this._Promise((h,p)=>{c=
h,l=p}),n.callback=(h,p)=>h?l(h):c(p)}return i&&(u=n.callback,o=setTimeout(()=>{
var c=new Error("Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},i),n.callback=(c,l)=>{clearTimeout(o),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),s):(this._queryQueue.push(
n),this._pulseQueryQueue(),s):(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),s)};
J.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,s){
r=a(i=>i?s(i):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),m.nextTick(()=>{e.emit("end"),r&&r()})}),t};J.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};J.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};J.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};J.prototype.ref=function(){};
J.prototype.unref=function(){};J.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};J.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var _n=I((If,Ji)=>{"use strict";d();Ji.exports=Zi()});var Pt=I((Pf,st)=>{"use strict";d();var Uc=Di(),qc=tt(),Nc=mn(),Wc=Ni(),{DatabaseError:jc}=dn(),
Hc=a(r=>{var e;return e=class extends Wc{constructor(n){super(n,r)}},a(e,"BoundP\
ool"),e},"poolFactory"),Cn=a(function(r){this.defaults=qc,this.Client=r,this.Query=
this.Client.Query,this.Pool=Hc(this.Client),this._pools=[],this.Connection=Nc,this.
types=et(),this.DatabaseError=jc},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?st.
exports=new Cn(_n()):(st.exports=new Cn(Uc),Object.defineProperty(st.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new Cn(_n())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(st.exports,"\
native",{value:r}),r}}))});var X={};ne(X,{Client:()=>Lt,NeonDbError:()=>he,Pool:()=>In,neon:()=>Tn,neonConfig:()=>ve});
d();var Bt=Re(Pt());vt();d();vt();br();var to=Re(rt()),ro=Re(St());function Gc(r){return r instanceof y?"\\x"+r.toString("hex"):r}a(Gc,"encodeBuffe\
rsAsBytea");var Ft=class Ft extends Error{constructor(t){super(t);A(this,"name",
"NeonDbError");A(this,"severity");A(this,"code");A(this,"detail");A(this,"hint");
A(this,"position");A(this,"internalPosition");A(this,"internalQuery");A(this,"wh\
ere");A(this,"schema");A(this,"table");A(this,"column");A(this,"dataType");A(this,
"constraint");A(this,"file");A(this,"line");A(this,"routine");A(this,"sourceErro\
r");"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.
captureStackTrace(this,Ft)}};a(Ft,"NeonDbError");var he=Ft,Xi="transaction() exp\
ects an array of queries, or a function returning an array of queries",$c=["seve\
rity","code","detail","hint","position","internalPosition","internalQuery","wher\
e","schema","table","column","dataType","constraint","file","line","routine"];function Tn(r,{
arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:s,readOnly:i,deferrable:o,
queryCallback:u,resultCallback:c,authToken:l}={}){if(!r)throw new Error("No data\
base connection string was provided to `neon()`. Perhaps an environment variable\
 has not been set?");let h;try{h=wr(r)}catch{throw new Error("Database connectio\
n string provided to `neon()` is not a valid URL. Connection string: "+String(r))}
let{protocol:p,username:S,hostname:_,port:P,pathname:G}=h;if(p!=="postgres:"&&p!==
"postgresql:"||!S||!_||!G)throw new Error("Database connection string format for\
 `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");function ee(C,...g){
let R,W;if(typeof C=="string")R=C,W=g[1],g=g[0]??[];else{R="";for(let j=0;j<C.length;j++)
R+=C[j],j<g.length&&(R+="$"+(j+1))}g=g.map(j=>Gc((0,to.prepareValue)(j)));let D={
query:R,params:g};return u&&u(D),Vc(ae,D,W)}a(ee,"resolve"),ee.transaction=async(C,g)=>{
if(typeof C=="function"&&(C=C(ee)),!Array.isArray(C))throw new Error(Xi);C.forEach(
D=>{if(D[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(Xi)});let R=C.
map(D=>D.parameterizedQuery),W=C.map(D=>D.opts??{});return ae(R,W,g)};async function ae(C,g,R){
let{fetchEndpoint:W,fetchFunction:D}=ve,j=Array.isArray(C)?{queries:C}:C,re=n??{},
ue=e??!1,L=t??!1,$=s,fe=i,me=o;R!==void 0&&(R.fetchOptions!==void 0&&(re={...re,
...R.fetchOptions}),R.arrayMode!==void 0&&(ue=R.arrayMode),R.fullResults!==void 0&&
(L=R.fullResults),R.isolationLevel!==void 0&&($=R.isolationLevel),R.readOnly!==void 0&&
(fe=R.readOnly),R.deferrable!==void 0&&(me=R.deferrable)),g!==void 0&&!Array.isArray(
g)&&g.fetchOptions!==void 0&&(re={...re,...g.fetchOptions});let Ae=l;!Array.isArray(
g)&&g?.authToken!==void 0&&(Ae=g.authToken);let je=typeof W=="function"?W(_,P,{jwtAuth:Ae!==
void 0}):W,de={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Ar\
ray-Mode":"true"},it=await Kc(Ae);it&&(de.Authorization=`Bearer ${it}`),Array.isArray(
C)&&($!==void 0&&(de["Neon-Batch-Isolation-Level"]=$),fe!==void 0&&(de["Neon-Bat\
ch-Read-Only"]=String(fe)),me!==void 0&&(de["Neon-Batch-Deferrable"]=String(me)));
let ge;try{ge=await(D??fetch)(je,{method:"POST",body:JSON.stringify(j),headers:de,
...re})}catch(K){let O=new he(`Error connecting to database: ${K}`);throw O.sourceError=
K,O}if(ge.ok){let K=await ge.json();if(Array.isArray(C)){let O=K.results;if(!Array.
isArray(O))throw new he("Neon internal error: unexpected result format");return O.
map((we,_e)=>{let Mt=g[_e]??{},so=Mt.arrayMode??ue,io=Mt.fullResults??L;return eo(
we,{arrayMode:so,fullResults:io,parameterizedQuery:C[_e],resultCallback:c,types:Mt.
types})})}else{let O=g??{},we=O.arrayMode??ue,_e=O.fullResults??L;return eo(K,{arrayMode:we,
fullResults:_e,parameterizedQuery:C,resultCallback:c,types:O.types})}}else{let{status:K}=ge;
if(K===400){let O=await ge.json(),we=new he(O.message);for(let _e of $c)we[_e]=O[_e]??
void 0;throw we}else{let O=await ge.text();throw new he(`Server error (HTTP stat\
us ${K}): ${O}`)}}}return a(ae,"execute"),ee}a(Tn,"neon");function Vc(r,e,t){return{
[Symbol.toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:a((n,s)=>r(
e,t).then(n,s),"then"),catch:a(n=>r(e,t).catch(n),"catch"),finally:a(n=>r(e,t).finally(
n),"finally")}}a(Vc,"createNeonQueryPromise");function eo(r,{arrayMode:e,fullResults:t,
parameterizedQuery:n,resultCallback:s,types:i}){let o=new ro.default(i),u=r.fields.
map(h=>h.name),c=r.fields.map(h=>o.getTypeParser(h.dataTypeID)),l=e===!0?r.rows.
map(h=>h.map((p,S)=>p===null?null:c[S](p))):r.rows.map(h=>Object.fromEntries(h.map(
(p,S)=>[u[S],p===null?null:c[S](p)])));return s&&s(n,r,l,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=l,r._parsers=c,r._types=o,r):l}a(eo,"\
processQueryResult");async function Kc(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new he("Error ge\
tting auth token.");throw e instanceof Error&&(t=new he(`Error getting auth toke\
n: ${e.message}`)),t}}a(Kc,"getAuthToken");var no=Re(xt());te(X,Re(Pt()));var Rn=class Rn extends Bt.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let s=this.config?.host!==void 0||this.config?.connectionString!==void 0||
m.env.PGHOST!==void 0,i=m.env.USER??m.env.USERNAME;if(!s&&this.host==="localhost"&&
this.user===i&&this.database===i&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${i}, db: ${i}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&
this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let l=this.
connection;if(u&&l.on("connect",()=>l.stream.emit("data","S")),c){l.removeAllListeners(
"authenticationCleartextPassword"),l.removeAllListeners("readyForQuery"),l.once(
"readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let h=this.ssl?"sslconnect":"connect";l.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){if(typeof w>
"u"||w.subtle===void 0||w.subtle.importKey===void 0)throw new Error("Cannot use \
SASL auth when `crypto.subtle` is not defined");let n=w.subtle,s=this.saslSession,
i=this.password,o=t.data;if(s.message!=="SASLInitialResponse"||typeof i!="string"||
typeof o!="string")throw new Error("SASL: protocol error");let u=Object.fromEntries(
o.split(",").map(K=>{if(!/^.=/.test(K))throw new Error("SASL: Invalid attribute \
pair entry");let O=K[0],we=K.substring(2);return[O,we]})),c=u.r,l=u.s,h=u.i;if(!c||
!/^[!-+--~]+$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce \
missing/unprintable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!h||!/^[1-9][0-9]*$/.test(h))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!c.startsWith(s.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(c.length===s.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let p=parseInt(h,10),S=y.from(l,"base64"),_=new TextEncoder,
P=_.encode(i),G=await n.importKey("raw",P,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),ee=new Uint8Array(await n.sign("HMAC",G,y.concat([S,y.from([0,0,0,1])]))),
ae=ee;for(var C=0;C<p-1;C++)ee=new Uint8Array(await n.sign("HMAC",G,ee)),ae=y.from(
ae.map((K,O)=>ae[O]^ee[O]));let g=ae,R=await n.importKey("raw",g,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]),W=new Uint8Array(await n.sign("HMAC",R,_.encode("C\
lient Key"))),D=await n.digest("SHA-256",W),j="n=*,r="+s.clientNonce,re="r="+c+"\
,s="+l+",i="+p,ue="c=biws,r="+c,L=j+","+re+","+ue,$=await n.importKey("raw",D,{name:"\
HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var fe=new Uint8Array(await n.sign("HM\
AC",$,_.encode(L))),me=y.from(W.map((K,O)=>W[O]^fe[O])),Ae=me.toString("base64");
let je=await n.importKey("raw",g,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),
de=await n.sign("HMAC",je,_.encode("Server Key")),it=await n.importKey("raw",de,
{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var ge=y.from(await n.sign("HMA\
C",it,_.encode(L)));s.message="SASLResponse",s.serverSignature=ge.toString("base\
64"),s.response=ue+",p="+Ae,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};a(Rn,"NeonClient");var Lt=Rn;function zc(r,e){if(e)return{callback:e,
result:void 0};let t,n,s=a(function(o,u){o?t(o):n(u)},"cb"),i=new r(function(o,u){
n=o,t=u});return{callback:s,result:i}}a(zc,"promisify");var Pn=class Pn extends Bt.Pool{constructor(){
super(...arguments);A(this,"Client",Lt);A(this,"hasFetchUnsupportedListeners",!1);
A(this,"addListener",this.on)}on(t,n){return t!=="error"&&(this.hasFetchUnsupportedListeners=
!0),super.on(t,n)}query(t,n,s){if(!ve.poolQueryViaFetch||this.hasFetchUnsupportedListeners||
typeof t=="function")return super.query(t,n,s);typeof n=="function"&&(s=n,n=void 0);
let i=zc(this.Promise,s);s=i.callback;try{let o=new no.default(this.options),u=encodeURIComponent,
c=encodeURI,l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,
h=typeof t=="string"?t:t.text,p=n??t.values??[];Tn(l,{fullResults:!0,arrayMode:t.
rowMode==="array"})(h,p,{types:t.types??this.options?.types}).then(_=>s(void 0,_)).
catch(_=>s(_))}catch(o){s(o)}return i.result}};a(Pn,"NeonPool");var In=Pn;export{Lt as Client,he as NeonDbError,In as Pool,Tn as neon,ve as neonConfig};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
