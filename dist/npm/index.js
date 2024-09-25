"use strict";var ao=Object.create;var Le=Object.defineProperty;var uo=Object.getOwnPropertyDescriptor;var co=Object.getOwnPropertyNames;var lo=Object.getPrototypeOf,ho=Object.prototype.hasOwnProperty;var fo=(r,e,t)=>e in r?Le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var a=(r,e)=>Le(r,"name",{value:e,configurable:!0});var Y=(r,e)=>()=>(r&&(e=r(r=0)),e);var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),re=(r,e)=>{for(var t in e)
Le(r,t,{get:e[t],enumerable:!0})},Tn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let s of co(e))!ho.call(r,s)&&s!==t&&Le(r,s,{get:()=>e[s],enumerable:!(n=
uo(e,s))||n.enumerable});return r};var Ae=(r,e,t)=>(t=r!=null?ao(lo(r)):{},Tn(e||!r||!r.__esModule?Le(t,"default",{
value:r,enumerable:!0}):t,r)),q=r=>Tn(Le({},"__esModule",{value:!0}),r);var w=(r,e,t)=>fo(r,typeof e!="symbol"?e+"":e,t);var Ln=I(it=>{"use strict";p();it.byteLength=yo;it.toByteArray=go;it.fromByteArray=
So;var ae=[],ne=[],po=typeof Uint8Array<"u"?Uint8Array:Array,Bt="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_e=0,Pn=Bt.length;_e<Pn;++_e)
ae[_e]=Bt[_e],ne[Bt.charCodeAt(_e)]=_e;var _e,Pn;ne[45]=62;ne[95]=63;function In(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(In,
"getLens");function yo(r){var e=In(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(yo,"byte\
Length");function mo(r,e,t){return(e+t)*3/4-t}a(mo,"_byteLength");function go(r){
var e,t=In(r),n=t[0],s=t[1],i=new po(mo(r,n,s)),o=0,u=s>0?n-4:n,c;for(c=0;c<u;c+=
4)e=ne[r.charCodeAt(c)]<<18|ne[r.charCodeAt(c+1)]<<12|ne[r.charCodeAt(c+2)]<<6|ne[r.
charCodeAt(c+3)],i[o++]=e>>16&255,i[o++]=e>>8&255,i[o++]=e&255;return s===2&&(e=
ne[r.charCodeAt(c)]<<2|ne[r.charCodeAt(c+1)]>>4,i[o++]=e&255),s===1&&(e=ne[r.charCodeAt(
c)]<<10|ne[r.charCodeAt(c+1)]<<4|ne[r.charCodeAt(c+2)]>>2,i[o++]=e>>8&255,i[o++]=
e&255),i}a(go,"toByteArray");function wo(r){return ae[r>>18&63]+ae[r>>12&63]+ae[r>>
6&63]+ae[r&63]}a(wo,"tripletToBase64");function bo(r,e,t){for(var n,s=[],i=e;i<t;i+=
3)n=(r[i]<<16&16711680)+(r[i+1]<<8&65280)+(r[i+2]&255),s.push(wo(n));return s.join(
"")}a(bo,"encodeChunk");function So(r){for(var e,t=r.length,n=t%3,s=[],i=16383,o=0,
u=t-n;o<u;o+=i)s.push(bo(r,o,o+i>u?u:o+i));return n===1?(e=r[t-1],s.push(ae[e>>2]+
ae[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],s.push(ae[e>>10]+ae[e>>4&63]+ae[e<<
2&63]+"=")),s.join("")}a(So,"fromByteArray")});var Bn=I(Rt=>{p();Rt.read=function(r,e,t,n,s){var i,o,u=s*8-n-1,c=(1<<u)-1,l=c>>
1,h=-7,d=t?s-1:0,S=t?-1:1,_=r[e+d];for(d+=S,i=_&(1<<-h)-1,_>>=-h,h+=u;h>0;i=i*256+
r[e+d],d+=S,h-=8);for(o=i&(1<<-h)-1,i>>=-h,h+=n;h>0;o=o*256+r[e+d],d+=S,h-=8);if(i===
0)i=1-l;else{if(i===c)return o?NaN:(_?-1:1)*(1/0);o=o+Math.pow(2,n),i=i-l}return(_?
-1:1)*o*Math.pow(2,i-n)};Rt.write=function(r,e,t,n,s,i){var o,u,c,l=i*8-s-1,h=(1<<
l)-1,d=h>>1,S=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:i-1,L=n?1:-1,j=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=h):(o=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+d>=1?e+=S/c:e+=
S*Math.pow(2,1-d),e*c>=2&&(o++,c/=2),o+d>=h?(u=0,o=h):o+d>=1?(u=(e*c-1)*Math.pow(
2,s),o=o+d):(u=e*Math.pow(2,d-1)*Math.pow(2,s),o=0));s>=8;r[t+_]=u&255,_+=L,u/=256,
s-=8);for(o=o<<s|u,l+=s;l>0;r[t+_]=o&255,_+=L,o/=256,l-=8);r[t+_-L]|=j*128}});var Kn=I(ke=>{"use strict";p();var Ft=Ln(),Re=Bn(),Rn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ke.Buffer=
f;ke.SlowBuffer=_o;ke.INSPECT_MAX_BYTES=50;var ot=2147483647;ke.kMaxLength=ot;f.
TYPED_ARRAY_SUPPORT=xo();!f.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function xo(){try{let r=new Uint8Array(1),e={foo:a(function(){
return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(
r,e),r.foo()===42}catch{return!1}}a(xo,"typedArraySupport");Object.defineProperty(
f.prototype,"parent",{enumerable:!0,get:a(function(){if(f.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:a(
function(){if(f.isBuffer(this))return this.byteOffset},"get")});function pe(r){if(r>
ot)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(
r);return Object.setPrototypeOf(e,f.prototype),e}a(pe,"createBuffer");function f(r,e,t){
if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" a\
rgument must be of type string. Received type number');return Ut(r)}return Dn(r,
e,t)}a(f,"Buffer");f.poolSize=8192;function Dn(r,e,t){if(typeof r=="string")return vo(
r,e);if(ArrayBuffer.isView(r))return Co(r);if(r==null)throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type "+typeof r);if(ue(r,ArrayBuffer)||r&&ue(r.buffer,ArrayBuffer)||
typeof SharedArrayBuffer<"u"&&(ue(r,SharedArrayBuffer)||r&&ue(r.buffer,SharedArrayBuffer)))
return Mt(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();
if(n!=null&&n!==r)return f.from(n,e,t);let s=Ao(r);if(s)return s;if(typeof Symbol<
"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return f.
from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type "+typeof r)}a(Dn,"from");f.from=function(r,e,t){return Dn(r,e,t)};
Object.setPrototypeOf(f.prototype,Uint8Array.prototype);Object.setPrototypeOf(f,
Uint8Array);function Un(r){if(typeof r!="number")throw new TypeError('"size" arg\
ument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is\
 invalid for option "size"')}a(Un,"assertSize");function Eo(r,e,t){return Un(r),
r<=0?pe(r):e!==void 0?typeof t=="string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}a(Eo,
"alloc");f.alloc=function(r,e,t){return Eo(r,e,t)};function Ut(r){return Un(r),pe(
r<0?0:Ot(r)|0)}a(Ut,"allocUnsafe");f.allocUnsafe=function(r){return Ut(r)};f.allocUnsafeSlow=
function(r){return Ut(r)};function vo(r,e){if((typeof e!="string"||e==="")&&(e="\
utf8"),!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=On(r,e)|
0,n=pe(t),s=n.write(r,e);return s!==t&&(n=n.slice(0,s)),n}a(vo,"fromString");function kt(r){
let e=r.length<0?0:Ot(r.length)|0,t=pe(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}
a(kt,"fromArrayLike");function Co(r){if(ue(r,Uint8Array)){let e=new Uint8Array(r);
return Mt(e.buffer,e.byteOffset,e.byteLength)}return kt(r)}a(Co,"fromArrayView");
function Mt(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outs\
ide of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" i\
s outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,f.prototype),n}a(Mt,"fromArrayBuffer");function Ao(r){if(f.isBuffer(r)){let e=Ot(
r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||qt(r.length)?pe(0):kt(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return kt(r.data)}a(Ao,"fromObject");function Ot(r){if(r>=
ot)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
ot.toString(16)+" bytes");return r|0}a(Ot,"checked");function _o(r){return+r!=r&&
(r=0),f.alloc(+r)}a(_o,"SlowBuffer");f.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==f.prototype},"isBuffer");f.compare=a(function(e,t){if(ue(e,Uint8Array)&&
(e=f.from(e,e.offset,e.byteLength)),ue(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),
!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,s=t.
length;for(let i=0,o=Math.min(n,s);i<o;++i)if(e[i]!==t[i]){n=e[i],s=t[i];break}return n<
s?-1:s<n?1:0},"compare");f.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");f.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return f.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let s=f.allocUnsafe(t),i=0;
for(n=0;n<e.length;++n){let o=e[n];if(ue(o,Uint8Array))i+o.length>s.length?(f.isBuffer(
o)||(o=f.from(o)),o.copy(s,i)):Uint8Array.prototype.set.call(s,o,i);else if(f.isBuffer(
o))o.copy(s,i);else throw new TypeError('"list" argument must be an Array of Buf\
fers');i+=o.length}return s},"concat");function On(r,e){if(f.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ue(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let s=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return Dt(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Vn(r).length;default:if(s)return n?-1:Dt(r).length;e=(""+e).toLowerCase(),
s=!0}}a(On,"byteLength");f.byteLength=On;function To(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Uo(
this,e,t);case"utf8":case"utf-8":return qn(this,e,t);case"ascii":return Mo(this,
e,t);case"latin1":case"binary":return Do(this,e,t);case"base64":return Fo(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
To,"slowToString");f.prototype._isBuffer=!0;function Te(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}a(Te,"swap");f.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Te(this,t,t+1);return this},"swap16");f.prototype.swap32=a(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Te(this,t,t+3),Te(this,t+1,t+2);return this},"swap32");
f.prototype.swap64=a(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Te(this,t,t+7),
Te(this,t+1,t+6),Te(this,t+2,t+5),Te(this,t+3,t+4);return this},"swap64");f.prototype.
toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?qn(
this,0,e):To.apply(this,arguments)},"toString");f.prototype.toLocaleString=f.prototype.
toString;f.prototype.equals=a(function(e){if(!f.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:f.compare(this,e)===0},"equals");
f.prototype.inspect=a(function(){let e="",t=ke.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Rn&&(f.prototype[Rn]=f.prototype.inspect);f.prototype.compare=
a(function(e,t,n,s,i){if(ue(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),s===void 0&&(s=0),i===void 0&&(i=this.length),t<0||n>e.length||s<0||
i>this.length)throw new RangeError("out of range index");if(s>=i&&t>=n)return 0;
if(s>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,s>>>=0,i>>>=0,this===e)return 0;
let o=i-s,u=n-t,c=Math.min(o,u),l=this.slice(s,i),h=e.slice(t,n);for(let d=0;d<c;++d)
if(l[d]!==h[d]){o=l[d],u=h[d];break}return o<u?-1:u<o?1:0},"compare");function Nn(r,e,t,n,s){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,qt(t)&&(t=s?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(s)return-1;t=r.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof e==
"string"&&(e=f.from(e,n)),f.isBuffer(e))return e.length===0?-1:Fn(r,e,t,n,s);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Fn(r,
[e],t,n,s);throw new TypeError("val must be string, number or Buffer")}a(Nn,"bid\
irectionalIndexOf");function Fn(r,e,t,n,s){let i=1,o=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;i=2,o/=2,u/=2,t/=2}function c(h,d){
return i===1?h[d]:h.readUInt16BE(d*i)}a(c,"read");let l;if(s){let h=-1;for(l=t;l<
o;l++)if(c(r,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===u)return h*i}else h!==
-1&&(l-=l-h),h=-1}else for(t+u>o&&(t=o-u),l=t;l>=0;l--){let h=!0;for(let d=0;d<u;d++)
if(c(r,l+d)!==c(e,d)){h=!1;break}if(h)return l}return-1}a(Fn,"arrayIndexOf");f.prototype.
includes=a(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");f.prototype.
indexOf=a(function(e,t,n){return Nn(this,e,t,n,!0)},"indexOf");f.prototype.lastIndexOf=
a(function(e,t,n){return Nn(this,e,t,n,!1)},"lastIndexOf");function Po(r,e,t,n){
t=Number(t)||0;let s=r.length-t;n?(n=Number(n),n>s&&(n=s)):n=s;let i=e.length;n>
i/2&&(n=i/2);let o;for(o=0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(qt(u))
return o;r[t+o]=u}return o}a(Po,"hexWrite");function Io(r,e,t,n){return at(Dt(e,
r.length-t),r,t,n)}a(Io,"utf8Write");function Lo(r,e,t,n){return at(Wo(e),r,t,n)}
a(Lo,"asciiWrite");function Bo(r,e,t,n){return at(Vn(e),r,t,n)}a(Bo,"base64Write");
function Ro(r,e,t,n){return at(jo(e,r.length-t),r,t,n)}a(Ro,"ucs2Write");f.prototype.
write=a(function(e,t,n,s){if(t===void 0)s="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")s=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,s===void 0&&(s="utf8")):(s=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let i=this.length-
t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");s||(s="utf8");let o=!1;for(;;)switch(s){case"\
hex":return Po(this,e,t,n);case"utf8":case"utf-8":return Io(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Lo(this,e,t,n);case"base64":return Bo(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ro(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),o=!0}},"\
write");f.prototype.toJSON=a(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function Fo(r,e,t){return e===0&&t===r.
length?Ft.fromByteArray(r):Ft.fromByteArray(r.slice(e,t))}a(Fo,"base64Slice");function qn(r,e,t){
t=Math.min(r.length,t);let n=[],s=e;for(;s<t;){let i=r[s],o=null,u=i>239?4:i>223?
3:i>191?2:1;if(s+u<=t){let c,l,h,d;switch(u){case 1:i<128&&(o=i);break;case 2:c=
r[s+1],(c&192)===128&&(d=(i&31)<<6|c&63,d>127&&(o=d));break;case 3:c=r[s+1],l=r[s+
2],(c&192)===128&&(l&192)===128&&(d=(i&15)<<12|(c&63)<<6|l&63,d>2047&&(d<55296||
d>57343)&&(o=d));break;case 4:c=r[s+1],l=r[s+2],h=r[s+3],(c&192)===128&&(l&192)===
128&&(h&192)===128&&(d=(i&15)<<18|(c&63)<<12|(l&63)<<6|h&63,d>65535&&d<1114112&&
(o=d))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|
o&1023),n.push(o),s+=u}return ko(n)}a(qn,"utf8Slice");var kn=4096;function ko(r){
let e=r.length;if(e<=kn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=kn));return t}a(ko,"d\
ecodeCodePointsArray");function Mo(r,e,t){let n="";t=Math.min(r.length,t);for(let s=e;s<
t;++s)n+=String.fromCharCode(r[s]&127);return n}a(Mo,"asciiSlice");function Do(r,e,t){
let n="";t=Math.min(r.length,t);for(let s=e;s<t;++s)n+=String.fromCharCode(r[s]);
return n}a(Do,"latin1Slice");function Uo(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let s="";for(let i=e;i<t;++i)s+=Ho[r[i]];return s}a(Uo,"he\
xSlice");function Oo(r,e,t){let n=r.slice(e,t),s="";for(let i=0;i<n.length-1;i+=
2)s+=String.fromCharCode(n[i]+n[i+1]*256);return s}a(Oo,"utf16leSlice");f.prototype.
slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let s=this.subarray(
e,t);return Object.setPrototypeOf(s,f.prototype),s},"slice");function Q(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(Q,"checkOffset");f.prototype.readUintLE=
f.prototype.readUIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let s=this[e],
i=1,o=0;for(;++o<t&&(i*=256);)s+=this[e+o]*i;return s},"readUIntLE");f.prototype.
readUintBE=f.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.
length);let s=this[e+--t],i=1;for(;t>0&&(i*=256);)s+=this[e+--t]*i;return s},"re\
adUIntBE");f.prototype.readUint8=f.prototype.readUInt8=a(function(e,t){return e=
e>>>0,t||Q(e,1,this.length),this[e]},"readUInt8");f.prototype.readUint16LE=f.prototype.
readUInt16LE=a(function(e,t){return e=e>>>0,t||Q(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");f.prototype.readUint16BE=f.prototype.readUInt16BE=a(function(e,t){
return e=e>>>0,t||Q(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");f.prototype.
readUint32LE=f.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
f.prototype.readUint32BE=f.prototype.readUInt32BE=a(function(e,t){return e=e>>>0,
t||Q(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");f.prototype.readBigUInt64LE=Se(a(function(e){e=e>>>0,Fe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let s=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(s)+(BigInt(i)<<BigInt(32))},"readBigUInt64LE"));f.prototype.
readBigUInt64BE=Se(a(function(e){e=e>>>0,Fe(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&He(e,this.length-8);let s=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
s)<<BigInt(32))+BigInt(i)},"readBigUInt64BE"));f.prototype.readIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let s=this[e],i=1,o=0;for(;++o<t&&(i*=256);)
s+=this[e+o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},"readIntLE");f.prototype.
readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let s=t,i=1,o=this[e+
--s];for(;s>0&&(i*=256);)o+=this[e+--s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),
o},"readIntBE");f.prototype.readInt8=a(function(e,t){return e=e>>>0,t||Q(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");f.prototype.readInt16LE=
a(function(e,t){e=e>>>0,t||Q(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");f.prototype.readInt16BE=a(function(e,t){e=e>>>
0,t||Q(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");f.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");f.prototype.
readInt32BE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");f.prototype.readBigInt64LE=Se(a(function(e){
e=e>>>0,Fe(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,
this.length-8);let s=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
s)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));f.prototype.readBigInt64BE=Se(a(function(e){e=e>>>0,Fe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&He(e,this.length-8);let s=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(s)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));f.prototype.
readFloatLE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.length),Re.read(this,e,
!0,23,4)},"readFloatLE");f.prototype.readFloatBE=a(function(e,t){return e=e>>>0,
t||Q(e,4,this.length),Re.read(this,e,!1,23,4)},"readFloatBE");f.prototype.readDoubleLE=
a(function(e,t){return e=e>>>0,t||Q(e,8,this.length),Re.read(this,e,!0,52,8)},"r\
eadDoubleLE");f.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||Q(e,8,this.
length),Re.read(this,e,!1,52,8)},"readDoubleBE");function Z(r,e,t,n,s,i){if(!f.isBuffer(
r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>s||e<
i)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError(
"Index out of range")}a(Z,"checkInt");f.prototype.writeUintLE=f.prototype.writeUIntLE=
a(function(e,t,n,s){if(e=+e,t=t>>>0,n=n>>>0,!s){let u=Math.pow(2,8*n)-1;Z(this,e,
t,n,u,0)}let i=1,o=0;for(this[t]=e&255;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+
n},"writeUIntLE");f.prototype.writeUintBE=f.prototype.writeUIntBE=a(function(e,t,n,s){
if(e=+e,t=t>>>0,n=n>>>0,!s){let u=Math.pow(2,8*n)-1;Z(this,e,t,n,u,0)}let i=n-1,
o=1;for(this[t+i]=e&255;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},"writeUI\
ntBE");f.prototype.writeUint8=f.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||Z(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");f.prototype.writeUint16LE=
f.prototype.writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Z(this,e,t,2,
65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");f.prototype.writeUint16BE=
f.prototype.writeUInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||Z(this,e,t,2,
65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");f.prototype.writeUint32LE=
f.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Z(this,e,t,4,
4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+
4},"writeUInt32LE");f.prototype.writeUint32BE=f.prototype.writeUInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Z(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,
this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Qn(r,e,t,n,s){$n(
e,n,s,r,t,7);let i=Number(e&BigInt(4294967295));r[t++]=i,i=i>>8,r[t++]=i,i=i>>8,
r[t++]=i,i=i>>8,r[t++]=i;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}a(Qn,"wrtBigUInt64LE");function Wn(r,e,t,n,s){
$n(e,n,s,r,t,7);let i=Number(e&BigInt(4294967295));r[t+7]=i,i=i>>8,r[t+6]=i,i=i>>
8,r[t+5]=i,i=i>>8,r[t+4]=i;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Wn,"wrtBigUInt64BE");f.
prototype.writeBigUInt64LE=Se(a(function(e,t=0){return Qn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));f.prototype.writeBigUInt64BE=Se(a(function(e,t=0){
return Wn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
f.prototype.writeIntLE=a(function(e,t,n,s){if(e=+e,t=t>>>0,!s){let c=Math.pow(2,
8*n-1);Z(this,e,t,n,c-1,-c)}let i=0,o=1,u=0;for(this[t]=e&255;++i<n&&(o*=256);)e<
0&&u===0&&this[t+i-1]!==0&&(u=1),this[t+i]=(e/o>>0)-u&255;return t+n},"writeIntL\
E");f.prototype.writeIntBE=a(function(e,t,n,s){if(e=+e,t=t>>>0,!s){let c=Math.pow(
2,8*n-1);Z(this,e,t,n,c-1,-c)}let i=n-1,o=1,u=0;for(this[t+i]=e&255;--i>=0&&(o*=
256);)e<0&&u===0&&this[t+i+1]!==0&&(u=1),this[t+i]=(e/o>>0)-u&255;return t+n},"w\
riteIntBE");f.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||Z(this,
e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");f.prototype.writeInt16LE=
a(function(e,t,n){return e=+e,t=t>>>0,n||Z(this,e,t,2,32767,-32768),this[t]=e&255,
this[t+1]=e>>>8,t+2},"writeInt16LE");f.prototype.writeInt16BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Z(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");f.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>
0,n||Z(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=
e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");f.prototype.writeInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Z(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+
1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeIn\
t32BE");f.prototype.writeBigInt64LE=Se(a(function(e,t=0){return Qn(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));f.prototype.
writeBigInt64BE=Se(a(function(e,t=0){return Wn(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function jn(r,e,t,n,s,i){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}a(jn,"checkIEEE754");function Hn(r,e,t,n,s){return e=+e,t=
t>>>0,s||jn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Re.write(r,e,t,n,
23,4),t+4}a(Hn,"writeFloat");f.prototype.writeFloatLE=a(function(e,t,n){return Hn(
this,e,t,!0,n)},"writeFloatLE");f.prototype.writeFloatBE=a(function(e,t,n){return Hn(
this,e,t,!1,n)},"writeFloatBE");function Gn(r,e,t,n,s){return e=+e,t=t>>>0,s||jn(
r,e,t,8,17976931348623157e292,-17976931348623157e292),Re.write(r,e,t,n,52,8),t+8}
a(Gn,"writeDouble");f.prototype.writeDoubleLE=a(function(e,t,n){return Gn(this,e,
t,!0,n)},"writeDoubleLE");f.prototype.writeDoubleBE=a(function(e,t,n){return Gn(
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
o[i%u]}return this},"fill");var Be={};function Nt(r,e,t){var n;Be[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,
configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){
return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,
value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}},
a(n,"NodeError"),n)}a(Nt,"E");Nt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);Nt("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);Nt("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,s=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?s=Mn(String(t)):typeof t=="bigint"&&(s=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(s=Mn(s)),s+="n"),n+=` It\
 must be ${e}. Received ${s}`,n},RangeError);function Mn(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}a(Mn,"addNumericalSeparator");function No(r,e,t){Fe(e,"offset"),(r[e]===
void 0||r[e+t]===void 0)&&He(e,r.length-(t+1))}a(No,"checkBounds");function $n(r,e,t,n,s,i){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw i>3?e===0||e===BigInt(0)?u=
`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:u=`>= -(2${o} ** ${(i+1)*8-1}${o}) and \
< 2 ** ${(i+1)*8-1}${o}`:u=`>= ${e}${o} and <= ${t}${o}`,new Be.ERR_OUT_OF_RANGE(
"value",u,r)}No(n,s,i)}a($n,"checkIntBI");function Fe(r,e){if(typeof r!="number")
throw new Be.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Fe,"validateNumber");function He(r,e,t){
throw Math.floor(r)!==r?(Fe(r,t),new Be.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Be.ERR_BUFFER_OUT_OF_BOUNDS:new Be.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}a(He,"boundsError");var qo=/[^+/0-9A-Za-z-_]/g;function Qo(r){
if(r=r.split("=")[0],r=r.trim().replace(qo,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}a(Qo,"base64clean");function Dt(r,e){e=e||1/0;let t,n=r.
length,s=null,i=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!s){
if(t>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&
i.push(239,191,189);continue}s=t;continue}if(t<56320){(e-=3)>-1&&i.push(239,191,
189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(e-=3)>-1&&i.push(239,191,
189);if(s=null,t<128){if((e-=1)<0)break;i.push(t)}else if(t<2048){if((e-=2)<0)break;
i.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;i.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;i.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return i}a(
Dt,"utf8ToBytes");function Wo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}a(Wo,"asciiToBytes");function jo(r,e){let t,n,s,i=[];for(let o=0;o<
r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,s=t%256,i.push(s),i.push(n);return i}
a(jo,"utf16leToBytes");function Vn(r){return Ft.toByteArray(Qo(r))}a(Vn,"base64T\
oBytes");function at(r,e,t,n){let s;for(s=0;s<n&&!(s+t>=e.length||s>=r.length);++s)
e[s+t]=r[s];return s}a(at,"blitBuffer");function ue(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
a(ue,"isInstance");function qt(r){return r!==r}a(qt,"numberIsNaN");var Ho=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let s=0;s<
16;++s)e[n+s]=r[t]+r[s]}return e}();function Se(r){return typeof BigInt>"u"?Go:r}
a(Se,"defineBigIntMethod");function Go(){throw new Error("BigInt not supported")}
a(Go,"BufferBigIntNotDefined")});var x,E,v,g,y,m,p=Y(()=>{"use strict";x=globalThis,E=globalThis.setImmediate??(r=>setTimeout(
r,0)),v=globalThis.clearImmediate??(r=>clearTimeout(r)),g=globalThis.crypto??{};
g.subtle??(g.subtle={});y=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Kn().Buffer,m=globalThis.process??
{};m.env??(m.env={});try{m.nextTick(()=>{})}catch{let e=Promise.resolve();m.nextTick=
e.then.bind(e)}});var de=I((al,Qt)=>{"use strict";p();var Me=typeof Reflect=="object"?Reflect:null,
zn=Me&&typeof Me.apply=="function"?Me.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),ut;Me&&typeof Me.ownKeys=="function"?ut=Me.ownKeys:
Object.getOwnPropertySymbols?ut=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):ut=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function $o(r){console&&console.warn&&
console.warn(r)}a($o,"ProcessEmitWarning");var Zn=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function R(){R.init.call(this)}a(R,"EventEmitter");Qt.exports=
R;Qt.exports.once=Yo;R.EventEmitter=R;R.prototype._events=void 0;R.prototype._eventsCount=
0;R.prototype._maxListeners=void 0;var Yn=10;function ct(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(ct,"checkListener");Object.defineProperty(R,"defaultMaxLi\
steners",{enumerable:!0,get:a(function(){return Yn},"get"),set:a(function(r){if(typeof r!=
"number"||r<0||Zn(r))throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received '+r+".");Yn=r},"set")});
R.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this).
_events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=
this._maxListeners||void 0};R.prototype.setMaxListeners=a(function(e){if(typeof e!=
"number"||e<0||Zn(e))throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},
"setMaxListeners");function Jn(r){return r._maxListeners===void 0?R.defaultMaxListeners:
r._maxListeners}a(Jn,"_getMaxListeners");R.prototype.getMaxListeners=a(function(){
return Jn(this)},"getMaxListeners");R.prototype.emit=a(function(e){for(var t=[],
n=1;n<arguments.length;n++)t.push(arguments[n]);var s=e==="error",i=this._events;
if(i!==void 0)s=s&&i.error===void 0;else if(!s)return!1;if(s){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+
o.message+")":""));throw u.context=o,u}var c=i[e];if(c===void 0)return!1;if(typeof c==
"function")zn(c,this,t);else for(var l=c.length,h=ns(c,l),n=0;n<l;++n)zn(h[n],this,
t);return!0},"emit");function Xn(r,e,t,n){var s,i,o;if(ct(t),i=r._events,i===void 0?
(i=r._events=Object.create(null),r._eventsCount=0):(i.newListener!==void 0&&(r.emit(
"newListener",e,t.listener?t.listener:t),i=r._events),o=i[e]),o===void 0)o=i[e]=
t,++r._eventsCount;else if(typeof o=="function"?o=i[e]=n?[t,o]:[o,t]:n?o.unshift(
t):o.push(t),s=Jn(r),s>0&&o.length>s&&!o.warned){o.warned=!0;var u=new Error("Po\
ssible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners a\
dded. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExce\
ededWarning",u.emitter=r,u.type=e,u.count=o.length,$o(u)}return r}a(Xn,"_addList\
ener");R.prototype.addListener=a(function(e,t){return Xn(this,e,t,!1)},"addListe\
ner");R.prototype.on=R.prototype.addListener;R.prototype.prependListener=a(function(e,t){
return Xn(this,e,t,!0)},"prependListener");function Vo(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?
this.listener.call(this.target):this.listener.apply(this.target,arguments)}a(Vo,
"onceWrapper");function es(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,
listener:t},s=Vo.bind(n);return s.listener=t,n.wrapFn=s,s}a(es,"_onceWrap");R.prototype.
once=a(function(e,t){return ct(t),this.on(e,es(this,e,t)),this},"once");R.prototype.
prependOnceListener=a(function(e,t){return ct(t),this.prependListener(e,es(this,
e,t)),this},"prependOnceListener");R.prototype.removeListener=a(function(e,t){var n,
s,i,o,u;if(ct(t),s=this._events,s===void 0)return this;if(n=s[e],n===void 0)return this;
if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):
(delete s[e],s.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!=
"function"){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].
listener,i=o;break}if(i<0)return this;i===0?n.shift():Ko(n,i),n.length===1&&(s[e]=
n[0]),s.removeListener!==void 0&&this.emit("removeListener",e,u||t)}return this},
"removeListener");R.prototype.off=R.prototype.removeListener;R.prototype.removeAllListeners=
a(function(e){var t,n,s;if(n=this._events,n===void 0)return this;if(n.removeListener===
void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),
this;if(arguments.length===0){var i=Object.keys(n),o;for(s=0;s<i.length;++s)o=i[s],
o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=
n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(s=t.length-
1;s>=0;s--)this.removeListener(e,t[s]);return this},"removeAllListeners");function ts(r,e,t){
var n=r._events;if(n===void 0)return[];var s=n[e];return s===void 0?[]:typeof s==
"function"?t?[s.listener||s]:[s]:t?zo(s):ns(s,s.length)}a(ts,"_listeners");R.prototype.
listeners=a(function(e){return ts(this,e,!0)},"listeners");R.prototype.rawListeners=
a(function(e){return ts(this,e,!1)},"rawListeners");R.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):rs.call(r,e)};R.prototype.
listenerCount=rs;function rs(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(rs,"listenerCount");
R.prototype.eventNames=a(function(){return this._eventsCount>0?ut(this._events):
[]},"eventNames");function ns(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(ns,"arrayClone");function Ko(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(Ko,"spliceOne");function zo(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(zo,"unwrapListeners");function Yo(r,e){return new Promise(
function(t,n){function s(o){r.removeListener(e,i),n(o)}a(s,"errorListener");function i(){
typeof r.removeListener=="function"&&r.removeListener("error",s),t([].slice.call(
arguments))}a(i,"resolver"),ss(r,e,i,{once:!0}),e!=="error"&&Zo(r,s,{once:!0})})}
a(Yo,"once");function Zo(r,e,t){typeof r.on=="function"&&ss(r,"error",e,t)}a(Zo,
"addErrorHandlerIfEventEmitter");function ss(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function s(i){n.once&&r.removeEventListener(e,s),t(i)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(ss,"eventTargetAgnosticAddListener")});var Ge={};re(Ge,{default:()=>Jo});var Jo,$e=Y(()=>{p();Jo={}});function Ve(r){let e=1779033703,t=3144134277,n=1013904242,s=2773480762,i=1359893119,
o=2600822924,u=528734635,c=1541459225,l=0,h=0,d=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],S=a((T,b)=>T>>>b|T<<32-b,
"rrot"),_=new Uint32Array(64),L=new Uint8Array(64),j=a(()=>{for(let F=0,$=0;F<16;F++,
$+=4)_[F]=L[$]<<24|L[$+1]<<16|L[$+2]<<8|L[$+3];for(let F=16;F<64;F++){let $=S(_[F-
15],7)^S(_[F-15],18)^_[F-15]>>>3,he=S(_[F-2],17)^S(_[F-2],19)^_[F-2]>>>10;_[F]=_[F-
16]+$+_[F-7]+he|0}let T=e,b=t,B=n,K=s,O=i,H=o,le=u,te=c;for(let F=0;F<64;F++){let $=S(
O,6)^S(O,11)^S(O,25),he=O&H^~O&le,ge=te+$+he+d[F]+_[F]|0,ve=S(T,2)^S(T,13)^S(T,22),
fe=T&b^T&B^b&B,Ie=ve+fe|0;te=le,le=H,H=O,O=K+ge|0,K=B,B=b,b=T,T=ge+Ie|0}e=e+T|0,
t=t+b|0,n=n+B|0,s=s+K|0,i=i+O|0,o=o+H|0,u=u+le|0,c=c+te|0,h=0},"process"),ee=a(T=>{
typeof T=="string"&&(T=new TextEncoder().encode(T));for(let b=0;b<T.length;b++)L[h++]=
T[b],h===64&&j();l+=T.length},"add"),me=a(()=>{if(L[h++]=128,h==64&&j(),h+8>64){
for(;h<64;)L[h++]=0;j()}for(;h<58;)L[h++]=0;let T=l*8;L[h++]=T/1099511627776&255,
L[h++]=T/4294967296&255,L[h++]=T>>>24,L[h++]=T>>>16&255,L[h++]=T>>>8&255,L[h++]=
T&255,j();let b=new Uint8Array(32);return b[0]=e>>>24,b[1]=e>>>16&255,b[2]=e>>>8&
255,b[3]=e&255,b[4]=t>>>24,b[5]=t>>>16&255,b[6]=t>>>8&255,b[7]=t&255,b[8]=n>>>24,
b[9]=n>>>16&255,b[10]=n>>>8&255,b[11]=n&255,b[12]=s>>>24,b[13]=s>>>16&255,b[14]=
s>>>8&255,b[15]=s&255,b[16]=i>>>24,b[17]=i>>>16&255,b[18]=i>>>8&255,b[19]=i&255,
b[20]=o>>>24,b[21]=o>>>16&255,b[22]=o>>>8&255,b[23]=o&255,b[24]=u>>>24,b[25]=u>>>
16&255,b[26]=u>>>8&255,b[27]=u&255,b[28]=c>>>24,b[29]=c>>>16&255,b[30]=c>>>8&255,
b[31]=c&255,b},"digest");return r===void 0?{add:ee,digest:me}:(ee(r),me())}var is=Y(
()=>{p();a(Ve,"sha256")});var N,Ke,os=Y(()=>{p();N=class N{constructor(){w(this,"_dataLength",0);w(this,"_\
bufferLength",0);w(this,"_state",new Int32Array(4));w(this,"_buffer",new ArrayBuffer(
68));w(this,"_buffer8");w(this,"_buffer32");this._buffer8=new Uint8Array(this._buffer,
0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=N.
hexChars,n=N.hexOut,s,i,o,u;for(u=0;u<4;u+=1)for(i=u*8,s=e[u],o=0;o<8;o+=2)n[i+1+
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
0,this._state.set(N.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,s=this._bufferLength,i,o;for(o=0;o<e.length;o+=1){if(i=e.charCodeAt(o),
i<128)t[s++]=i;else if(i<2048)t[s++]=(i>>>6)+192,t[s++]=i&63|128;else if(i<55296||
i>56319)t[s++]=(i>>>12)+224,t[s++]=i>>>6&63|128,t[s++]=i&63|128;else{if(i=(i-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,i>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[s++]=(i>>>18)+240,t[s++]=i>>>12&63|128,
t[s++]=i>>>6&63|128,t[s++]=i&63|128}s>=64&&(this._dataLength+=64,N._md5cycle(this.
_state,n),s-=64,n[0]=n[16])}return this._bufferLength=s,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e.charCodeAt(o++);if(s<64)break;this._dataLength+=64,N._md5cycle(
this._state,n),s=0}return this._bufferLength=s,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,s=this._bufferLength,i,o=0;for(;;){for(i=Math.min(e.length-
o,64-s);i--;)t[s++]=e[o++];if(s<64)break;this._dataLength+=64,N._md5cycle(this._state,
n),s=0}return this._bufferLength=s,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,s=this.
_state,i;for(this._dataLength=e.length,this._bufferLength=e.buflen,s[0]=n[0],s[1]=
n[1],s[2]=n[2],s[3]=n[3],i=0;i<t.length;i+=1)this._buffer8[i]=t.charCodeAt(i)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,s=this._buffer32,i=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,s.set(N.buffer32Identity.
subarray(i),i),t>55&&(N._md5cycle(this._state,s),s.set(N.buffer32Identity)),o<=4294967295)
s[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),l=parseInt(u[1],16)||0;s[14]=c,s[15]=l}return N._md5cycle(this._state,s),
e?this._state:N._hex(this._state)}};a(N,"Md5"),w(N,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),w(N,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),w(N,"hexChars","0123456789abcdef"),w(N,"hexO\
ut",[]),w(N,"onePassHasher",new N);Ke=N});var Wt={};re(Wt,{createHash:()=>ea,createHmac:()=>ta,randomBytes:()=>Xo});function Xo(r){
return g.getRandomValues(y.alloc(r))}function ea(r){if(r==="sha256")return{update:a(
function(e){return{digest:a(function(){return y.from(Ve(e))},"digest")}},"update")};
if(r==="md5")return{update:a(function(e){return{digest:a(function(){return typeof e==
"string"?Ke.hashStr(e):Ke.hashByteArray(e)},"digest")}},"update")};throw new Error(
`Hash type '${r}' not supported`)}function ta(r,e){if(r!=="sha256")throw new Error(
`Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{
digest:a(function(){typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t==
"string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>64)e=Ve(e);else if(n<
64){let c=new Uint8Array(64);c.set(e),e=c}let s=new Uint8Array(64),i=new Uint8Array(
64);for(let c=0;c<64;c++)s[c]=54^e[c],i[c]=92^e[c];let o=new Uint8Array(t.length+
64);o.set(s,0),o.set(t,64);let u=new Uint8Array(96);return u.set(i,0),u.set(Ve(o),
64),y.from(Ve(u))},"digest")}},"update")}}var jt=Y(()=>{p();is();os();a(Xo,"rand\
omBytes");a(ea,"createHash");a(ta,"createHmac")});var Gt=I(as=>{"use strict";p();as.parse=function(r,e){return new Ht(r,e).parse()};
var lt=class lt{constructor(e,t){this.source=e,this.transform=t||ra,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,s;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!s)this.dimension++,this.dimension>
1&&(n=new lt(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!s){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(s&&this.newEntry(!0),s=!s):t.value===","&&!s?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};a(lt,"ArrayParser");var Ht=lt;function ra(r){return r}a(ra,"identity")});var $t=I((Cl,us)=>{p();var na=Gt();us.exports={create:a(function(r,e){return{parse:a(
function(){return na.parse(r,e)},"parse")}},"create")}});var hs=I((Tl,ls)=>{"use strict";p();var sa=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
ia=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,oa=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,aa=/^-?infinity$/;
ls.exports=a(function(e){if(aa.test(e))return Number(e.replace("i","I"));var t=sa.
exec(e);if(!t)return ua(e)||null;var n=!!t[8],s=parseInt(t[1],10);n&&(s=cs(s));var i=parseInt(
t[2],10)-1,o=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var d,S=ca(e);return S!=null?(d=new Date(Date.UTC(s,i,o,
u,c,l,h)),Vt(s)&&d.setUTCFullYear(s),S!==0&&d.setTime(d.getTime()-S)):(d=new Date(
s,i,o,u,c,l,h),Vt(s)&&d.setFullYear(s)),d},"parseDate");function ua(r){var e=ia.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=cs(t));var s=parseInt(e[2],
10)-1,i=e[3],o=new Date(t,s,i);return Vt(t)&&o.setFullYear(t),o}}a(ua,"getDate");
function ca(r){if(r.endsWith("+00"))return 0;var e=oa.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,s=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return s*n*1e3}}a(ca,"timeZoneOffset");function cs(r){
return-(r-1)}a(cs,"bcYearToNegativeYear");function Vt(r){return r>=0&&r<100}a(Vt,
"is0To99")});var ps=I((Ll,fs)=>{p();fs.exports=ha;var la=Object.prototype.hasOwnProperty;function ha(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)la.call(t,
n)&&(r[n]=t[n])}return r}a(ha,"extend")});var ms=I((Fl,ys)=>{"use strict";p();var fa=ps();ys.exports=De;function De(r){if(!(this instanceof
De))return new De(r);fa(this,Ca(r))}a(De,"PostgresInterval");var pa=["seconds","\
minutes","hours","days","months","years"];De.prototype.toPostgres=function(){var r=pa.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var da={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},ya=["years","months","days"],ma=["hours","minutes","seconds"];De.
prototype.toISOString=De.prototype.toISO=function(){var r=ya.map(t,this).join(""),
e=ma.map(t,this).join("");return"P"+r+"T"+e;function t(n){var s=this[n]||0;return n===
"seconds"&&this.milliseconds&&(s=(s+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),s+da[n]}};var Kt="([+-]?\\d+)",ga=Kt+"\\s+years?",wa=Kt+"\\s+mons?",ba=Kt+"\
\\s+days?",Sa="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",xa=new RegExp([
ga,wa,ba,Sa].map(function(r){return"("+r+")?"}).join("\\s*")),ds={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},Ea=["hours","minutes","sec\
onds","milliseconds"];function va(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(va,"parseMilliseconds");function Ca(r){if(!r)return{};var e=xa.exec(
r),t=e[8]==="-";return Object.keys(ds).reduce(function(n,s){var i=ds[s],o=e[i];return!o||
(o=s==="milliseconds"?va(o):parseInt(o,10),!o)||(t&&~Ea.indexOf(s)&&(o*=-1),n[s]=
o),n},{})}a(Ca,"parse")});var ws=I((Dl,gs)=>{"use strict";p();gs.exports=a(function(e){if(/^\\x/.test(e))return new y(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var s=1;n+s<e.length&&e[n+s]==="\\";)s++;for(var i=0;i<Math.floor(s/2);++i)t+=
"\\";n+=Math.floor(s/2)*2}return new y(t,"binary")},"parseBytea")});var As=I((Nl,Cs)=>{p();var ze=Gt(),Ye=$t(),ht=hs(),Ss=ms(),xs=ws();function ft(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(ft,"allowNull");function Es(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(Es,"parseBool");function Aa(r){return r?ze.parse(r,Es):null}a(Aa,"pars\
eBoolArray");function _a(r){return parseInt(r,10)}a(_a,"parseBaseTenInt");function zt(r){
return r?ze.parse(r,ft(_a)):null}a(zt,"parseIntegerArray");function Ta(r){return r?
ze.parse(r,ft(function(e){return vs(e).trim()})):null}a(Ta,"parseBigIntegerArray");
var Pa=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){return t!==
null&&(t=Xt(t)),t});return e.parse()},"parsePointArray"),Yt=a(function(r){if(!r)
return null;var e=Ye.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),se=a(function(r){if(!r)return null;var e=Ye.
create(r);return e.parse()},"parseStringArray"),Zt=a(function(r){if(!r)return null;
var e=Ye.create(r,function(t){return t!==null&&(t=ht(t)),t});return e.parse()},"\
parseDateArray"),Ia=a(function(r){if(!r)return null;var e=Ye.create(r,function(t){
return t!==null&&(t=Ss(t)),t});return e.parse()},"parseIntervalArray"),La=a(function(r){
return r?ze.parse(r,ft(xs)):null},"parseByteAArray"),Jt=a(function(r){return parseInt(
r,10)},"parseInteger"),vs=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),bs=a(function(r){return r?ze.parse(r,ft(JSON.parse)):null},
"parseJsonArray"),Xt=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),Ba=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,s=2;s<r.length-1;s++){
if(n||(e+=r[s]),r[s]===")"){n=!0;continue}else if(!n)continue;r[s]!==","&&(t+=r[s])}
var i=Xt(e);return i.radius=parseFloat(t),i},"parseCircle"),Ra=a(function(r){r(20,
vs),r(21,Jt),r(23,Jt),r(26,Jt),r(700,parseFloat),r(701,parseFloat),r(16,Es),r(1082,
ht),r(1114,ht),r(1184,ht),r(600,Xt),r(651,se),r(718,Ba),r(1e3,Aa),r(1001,La),r(1005,
zt),r(1007,zt),r(1028,zt),r(1016,Ta),r(1017,Pa),r(1021,Yt),r(1022,Yt),r(1231,Yt),
r(1014,se),r(1015,se),r(1008,se),r(1009,se),r(1040,se),r(1041,se),r(1115,Zt),r(1182,
Zt),r(1185,Zt),r(1186,Ss),r(1187,Ia),r(17,xs),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,bs),r(3807,bs),r(3907,se),r(2951,se),r(791,se),r(1183,
se),r(1270,se)},"init");Cs.exports={init:Ra}});var Ts=I((Wl,_s)=>{"use strict";p();var J=1e6;function Fa(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var s="",i,o,u,
c,l,h;{if(i=e%J,e=e/J>>>0,o=4294967296*i+t,t=o/J>>>0,u=""+(o-J*t),t===0&&e===0)return n+
u+s;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";s=c+u+s}{if(i=e%J,e=e/J>>>0,o=4294967296*
i+t,t=o/J>>>0,u=""+(o-J*t),t===0&&e===0)return n+u+s;for(c="",l=6-u.length,h=0;h<
l;h++)c+="0";s=c+u+s}{if(i=e%J,e=e/J>>>0,o=4294967296*i+t,t=o/J>>>0,u=""+(o-J*t),
t===0&&e===0)return n+u+s;for(c="",l=6-u.length,h=0;h<l;h++)c+="0";s=c+u+s}return i=
e%J,o=4294967296*i+t,u=""+o%J,n+u+s}a(Fa,"readInt8");_s.exports=Fa});var Rs=I((Gl,Bs)=>{p();var ka=Ts(),k=a(function(r,e,t,n,s){t=t||0,n=n||!1,s=s||function(_,L,j){
return _*Math.pow(2,j)+L};var i=t>>3,o=a(function(_){return n?~_&255:_},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var l=0;t%8+e>=8&&(l=s(0,o(r[i])&
u,c));for(var h=e+t>>3,d=i+1;d<h;d++)l=s(l,o(r[d]),8);var S=(e+t)%8;return S>0&&
(l=s(l,o(r[h])>>8-S,S)),l},"parseBits"),Ls=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,s=k(r,1),i=k(r,t,1);if(i===0)return 0;var o=1,u=a(function(l,h,d){l===0&&(l=
1);for(var S=1;S<=d;S++)o/=2,(h&1<<d-S)>0&&(l+=o);return l},"parsePrecisionBits"),
c=k(r,e,t+1,!1,u);return i==Math.pow(2,t+1)-1?c===0?s===0?1/0:-1/0:NaN:(s===0?1:
-1)*Math.pow(2,i-n)*c},"parseFloatFromBits"),Ma=a(function(r){return k(r,1)==1?-1*
(k(r,15,1,!0)+1):k(r,15,1)},"parseInt16"),Ps=a(function(r){return k(r,1)==1?-1*(k(
r,31,1,!0)+1):k(r,31,1)},"parseInt32"),Da=a(function(r){return Ls(r,23,8)},"pars\
eFloat32"),Ua=a(function(r){return Ls(r,52,11)},"parseFloat64"),Oa=a(function(r){
var e=k(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,k(r,16,16)),n=0,s=[],
i=k(r,16),o=0;o<i;o++)n+=k(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,k(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Is=a(function(r,e){var t=k(
e,1),n=k(e,63,1),s=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||s.setTime(s.
getTime()+s.getTimezoneOffset()*6e4),s.usec=n%1e3,s.getMicroSeconds=function(){return this.
usec},s.setMicroSeconds=function(i){this.usec=i},s.getUTCMicroSeconds=function(){
return this.usec},s},"parseDate"),Ze=a(function(r){for(var e=k(r,32),t=k(r,32,32),
n=k(r,32,64),s=96,i=[],o=0;o<e;o++)i[o]=k(r,32,s),s+=32,s+=32;var u=a(function(l){
var h=k(r,32,s);if(s+=32,h==4294967295)return null;var d;if(l==23||l==20)return d=
k(r,h*8,s),s+=h*8,d;if(l==25)return d=r.toString(this.encoding,s>>3,(s+=h<<3)>>3),
d;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),c=a(function(l,h){
var d=[],S;if(l.length>1){var _=l.shift();for(S=0;S<_;S++)d[S]=c(l,h);l.unshift(
_)}else for(S=0;S<l[0];S++)d[S]=u(h);return d},"parse");return c(i,n)},"parseArr\
ay"),Na=a(function(r){return r.toString("utf8")},"parseText"),qa=a(function(r){return r===
null?null:k(r,8)>0},"parseBool"),Qa=a(function(r){r(20,ka),r(21,Ma),r(23,Ps),r(26,
Ps),r(1700,Oa),r(700,Da),r(701,Ua),r(16,qa),r(1114,Is.bind(null,!1)),r(1184,Is.bind(
null,!0)),r(1e3,Ze),r(1007,Ze),r(1016,Ze),r(1008,Ze),r(1009,Ze),r(25,Na)},"init");
Bs.exports={init:Qa}});var ks=I((Kl,Fs)=>{p();Fs.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var et=I(Xe=>{p();var Wa=As(),ja=Rs(),Ha=$t(),Ga=ks();Xe.getTypeParser=$a;Xe.setTypeParser=
Va;Xe.arrayParser=Ha;Xe.builtins=Ga;var Je={text:{},binary:{}};function Ms(r){return String(
r)}a(Ms,"noParse");function $a(r,e){return e=e||"text",Je[e]&&Je[e][r]||Ms}a($a,
"getTypeParser");function Va(r,e,t){typeof e=="function"&&(t=e,e="text"),Je[e][r]=
t}a(Va,"setTypeParser");Wa.init(function(r,e){Je.text[r]=e});ja.init(function(r,e){
Je.binary[r]=e})});var tt=I((Xl,er)=>{"use strict";p();er.exports={host:"localhost",user:m.platform===
"win32"?m.env.USERNAME:m.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Ue=et(),Ka=Ue.getTypeParser(
20,"text"),za=Ue.getTypeParser(1016,"text");er.exports.__defineSetter__("parseIn\
t8",function(r){Ue.setTypeParser(20,"text",r?Ue.getTypeParser(23,"text"):Ka),Ue.
setTypeParser(1016,"text",r?Ue.getTypeParser(1007,"text"):za)})});var rt=I((th,Us)=>{"use strict";p();var Ya=(jt(),q(Wt)),Za=tt();function Ja(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Ja,"escapeElement");
function Ds(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+Ds(r[t]):r[t]instanceof y?e+="\\\\x"+r[t].
toString("hex"):e+=Ja(pt(r[t]));return e=e+"}",e}a(Ds,"arrayString");var pt=a(function(r,e){
if(r==null)return null;if(r instanceof y)return r;if(ArrayBuffer.isView(r)){var t=y.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?Za.parseInputDatesAsUTC?
tu(r):eu(r):Array.isArray(r)?Ds(r):typeof r=="object"?Xa(r,e):r.toString()},"pre\
pareValue");function Xa(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),pt(r.toPostgres(pt),e)}return JSON.stringify(r)}
a(Xa,"prepareObject");function G(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}a(
G,"pad");function eu(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var s=G(t,4)+"-"+G(r.getMonth()+1,2)+"-"+G(r.getDate(),2)+"T"+
G(r.getHours(),2)+":"+G(r.getMinutes(),2)+":"+G(r.getSeconds(),2)+"."+G(r.getMilliseconds(),
3);return e<0?(s+="-",e*=-1):s+="+",s+=G(Math.floor(e/60),2)+":"+G(e%60,2),n&&(s+=
" BC"),s}a(eu,"dateToString");function tu(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=
Math.abs(e)+1);var n=G(e,4)+"-"+G(r.getUTCMonth()+1,2)+"-"+G(r.getUTCDate(),2)+"\
T"+G(r.getUTCHours(),2)+":"+G(r.getUTCMinutes(),2)+":"+G(r.getUTCSeconds(),2)+"."+
G(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(tu,"dateToStrin\
gUTC");function ru(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="\
function"?r.callback=e:r.values=e),t&&(r.callback=t),r}a(ru,"normalizeQueryConfi\
g");var tr=a(function(r){return Ya.createHash("md5").update(r,"utf-8").digest("h\
ex")},"md5"),nu=a(function(r,e,t){var n=tr(e+r),s=tr(y.concat([y.from(n),t]));return"\
md5"+s},"postgresMd5PasswordHash");Us.exports={prepareValue:a(function(e){return pt(
e)},"prepareValueWrapper"),normalizeQueryConfig:ru,postgresMd5PasswordHash:nu,md5:tr}});var Ws=I((sh,Qs)=>{"use strict";p();var rr=(jt(),q(Wt));function su(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=rr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(su,"startSession");function iu(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=uu(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var s=y.from(n.salt,"base64"),i=hu(e,
s,n.iteration),o=Oe(i,"Client Key"),u=lu(o),c="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,d=c+","+l+","+h,S=Oe(u,d),_=qs(
o,S),L=_.toString("base64"),j=Oe(i,"Server Key"),ee=Oe(j,d);r.message="SASLRespo\
nse",r.serverSignature=ee.toString("base64"),r.response=h+",p="+L}a(iu,"continue\
Session");function ou(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: \
Last message was not SASLResponse");if(typeof e!="string")throw new Error("SASL:\
 SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=cu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(ou,"finalizeSession");function au(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(au,"isPrintableC\
hars");function Os(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Os,"isBase64");function Ns(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(Ns,"parseAttributePairs");function uu(r){let e=Ns(
r),t=e.get("r");if(t){if(!au(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Os(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let s=e.get("i");if(s){if(!/^[1-9][0-9]*$/.
test(s))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let i=parseInt(s,10);return{nonce:t,salt:n,iteration:i}}a(uu,"parseServerFirstMe\
ssage");function cu(r){let t=Ns(r).get("v");if(t){if(!Os(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(cu,"parseServerFinalMessage");function qs(r,e){if(!y.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!y.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return y.
from(r.map((t,n)=>r[n]^e[n]))}a(qs,"xorBuffers");function lu(r){return rr.createHash(
"sha256").update(r).digest()}a(lu,"sha256");function Oe(r,e){return rr.createHmac(
"sha256",r).update(e).digest()}a(Oe,"hmacSha256");function hu(r,e,t){for(var n=Oe(
r,y.concat([e,y.from([0,0,0,1])])),s=n,i=0;i<t-1;i++)n=Oe(r,n),s=qs(s,n);return s}
a(hu,"Hi");Qs.exports={startSession:su,continueSession:iu,finalizeSession:ou}});var nr={};re(nr,{join:()=>fu});function fu(...r){return r.join("/")}var sr=Y(()=>{
p();a(fu,"join")});var ir={};re(ir,{stat:()=>pu});function pu(r,e){e(new Error("No filesystem"))}var or=Y(
()=>{p();a(pu,"stat")});var ar={};re(ar,{default:()=>du});var du,ur=Y(()=>{p();du={}});var js={};re(js,{StringDecoder:()=>cr});var lr,cr,Hs=Y(()=>{p();lr=class lr{constructor(e){
w(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};a(lr,"StringDecoder");cr=lr});var Ks=I((dh,Vs)=>{"use strict";p();var{Transform:yu}=(ur(),q(ar)),{StringDecoder:mu}=(Hs(),q(js)),
xe=Symbol("last"),dt=Symbol("decoder");function gu(r,e,t){let n;if(this.overflow){
if(n=this[dt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[xe]+=this[dt].write(r),n=this[xe].split(this.matcher);this[xe]=
n.pop();for(let s=0;s<n.length;s++)try{$s(this,this.mapper(n[s]))}catch(i){return t(
i)}if(this.overflow=this[xe].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(gu,"transform");function wu(r){
if(this[xe]+=this[dt].end(),this[xe])try{$s(this,this.mapper(this[xe]))}catch(e){
return r(e)}r()}a(wu,"flush");function $s(r,e){e!==void 0&&r.push(e)}a($s,"push");
function Gs(r){return r}a(Gs,"noop");function bu(r,e,t){switch(r=r||/\r?\n/,e=e||
Gs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Gs)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=gu,t.flush=wu,t.readableObjectMode=!0;
let n=new yu(t);return n[xe]="",n[dt]=new mu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(s,i){
this._writableState.errorEmitted=!1,i(s)},n}a(bu,"split");Vs.exports=bu});var Zs=I((gh,ye)=>{"use strict";p();var zs=(sr(),q(nr)),Su=(ur(),q(ar)).Stream,xu=Ks(),
Ys=($e(),q(Ge)),Eu=5432,yt=m.platform==="win32",nt=m.stderr,vu=56,Cu=7,Au=61440,
_u=32768;function Tu(r){return(r&Au)==_u}a(Tu,"isRegFile");var Ne=["host","port",
"database","user","password"],hr=Ne.length,Pu=Ne[hr-1];function fr(){var r=nt instanceof
Su&&nt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);nt.write(Ys.format.apply(Ys,e))}}a(fr,"warn");Object.defineProperty(ye.exports,
"isWin",{get:a(function(){return yt},"get"),set:a(function(r){yt=r},"set")});ye.
exports.warnTo=function(r){var e=nt;return nt=r,e};ye.exports.getFileName=function(r){
var e=r||m.env,t=e.PGPASSFILE||(yt?zs.join(e.APPDATA||"./","postgresql","pgpass.\
conf"):zs.join(e.HOME||"./",".pgpass"));return t};ye.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(m.env,"PGPASSWORD")?!1:yt?!0:(e=e||"\
<unkn>",Tu(r.mode)?r.mode&(vu|Cu)?(fr('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less',e),!1):!0:(fr('WARNING:\
 password file "%s" is not a plain file',e),!1))};var Iu=ye.exports.match=function(r,e){
return Ne.slice(0,-1).reduce(function(t,n,s){return s==1&&Number(r[n]||Eu)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};ye.exports.getPassword=function(r,e,t){
var n,s=e.pipe(xu());function i(c){var l=Lu(c);l&&Bu(l)&&Iu(r,l)&&(n=l[Pu],s.end())}
a(i,"onLine");var o=a(function(){e.destroy(),t(n)},"onEnd"),u=a(function(c){e.destroy(),
fr("WARNING: error on reading file: %s",c),t(void 0)},"onErr");e.on("error",u),s.
on("data",i).on("end",o).on("error",u)};var Lu=ye.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,s=0,i=0,o={},
u=!1,c=a(function(h,d,S){var _=r.substring(d,S);Object.hasOwnProperty.call(m.env,
"PGPASS_NO_DEESCAPE")||(_=_.replace(/\\([:\\])/g,"$1")),o[Ne[h]]=_},"addToObj"),
l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(l),u=n==hr-1,u){c(n,s);break}
l>=0&&e==":"&&t!=="\\"&&(c(n,s,l+1),s=l+2,n+=1)}return o=Object.keys(o).length===
hr?o:null,o},Bu=ye.exports.isValidEntry=function(r){for(var e={0:function(o){return o.
length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&
Math.floor(o)===o)},2:function(o){return o.length>0},3:function(o){return o.length>
0},4:function(o){return o.length>0}},t=0;t<Ne.length;t+=1){var n=e[t],s=r[Ne[t]]||
"",i=n(s);if(!i)return!1}return!0}});var Xs=I((xh,pr)=>{"use strict";p();var Sh=(sr(),q(nr)),Js=(or(),q(ir)),mt=Zs();
pr.exports=function(r,e){var t=mt.getFileName();Js.stat(t,function(n,s){if(n||!mt.
usePgPass(s,t))return e(void 0);var i=Js.createReadStream(t);mt.getPassword(r,i,
e)})};pr.exports.warnTo=mt.warnTo});var wt=I((vh,ei)=>{"use strict";p();var Ru=et();function gt(r){this._types=r||Ru,
this.text={},this.binary={}}a(gt,"TypeOverrides");gt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
gt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};gt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};ei.exports=gt});var ti={};re(ti,{default:()=>Fu});var Fu,ri=Y(()=>{p();Fu={}});var ni={};re(ni,{parse:()=>ku});function ku(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:s,password:i,host:o,hostname:u,port:c,pathname:l,
search:h,searchParams:d,hash:S}=new URL(n);i=decodeURIComponent(i),s=decodeURIComponent(
s),l=decodeURIComponent(l);let _=s+":"+i,L=e?Object.fromEntries(d.entries()):h;return{
href:r,protocol:t,auth:_,username:s,password:i,host:o,hostname:u,port:c,pathname:l,
search:h,query:L,hash:S}}var si=Y(()=>{p();a(ku,"parse")});var oi=I((Ih,ii)=>{"use strict";p();var Mu=(si(),q(ni)),dr=(or(),q(ir));function yr(r){
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
(t.ssl.cert=dr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=dr.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=dr.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(yr,"parse");ii.exports=yr;yr.parse=yr});var bt=I((Rh,ci)=>{"use strict";p();var Du=(ri(),q(ti)),ui=tt(),ai=oi().parse,V=a(
function(r,e,t){return t===void 0?t=m.env["PG"+r.toUpperCase()]:t===!1||(t=m.env[t]),
e[r]||t||ui[r]},"val"),Uu=a(function(){switch(m.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return ui.ssl},"readSSLConfigFromEnvironment"),qe=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),ie=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+qe(n))},"ad\
d"),gr=class gr{constructor(e){e=typeof e=="string"?ai(e):e||{},e.connectionString&&
(e=Object.assign({},e,ai(e.connectionString))),this.user=V("user",e),this.database=
V("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
V("port",e),10),this.host=V("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:V("password",e)}),this.binary=V("binary",e),this.
options=V("options",e),this.ssl=typeof e.ssl>"u"?Uu():e.ssl,typeof this.ssl=="st\
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
ie(t,this,"user"),ie(t,this,"password"),ie(t,this,"port"),ie(t,this,"application\
_name"),ie(t,this,"fallback_application_name"),ie(t,this,"connect_timeout"),ie(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(ie(t,n,"sslmode"),ie(t,n,"sslca"),ie(t,n,"sslkey"),ie(t,n,"sslcert"),
ie(t,n,"sslrootcert"),this.database&&t.push("dbname="+qe(this.database)),this.replication&&
t.push("replication="+qe(this.replication)),this.host&&t.push("host="+qe(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+qe(this.client_encoding)),Du.lookup(this.host,function(s,i){return s?
e(s,null):(t.push("hostaddr="+qe(i)),e(null,t.join(" ")))})}};a(gr,"ConnectionPa\
rameters");var mr=gr;ci.exports=mr});var fi=I((Mh,hi)=>{"use strict";p();var Ou=et(),li=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
br=class br{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=li.exec(e.text):t=li.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,s=e.length;n<s;n++){
var i=e[n];i!==null?t[n]=this._parsers[n](i):t[n]=null}return t}parseRow(e){for(var t={},
n=0,s=e.length;n<s;n++){var i=e[n],o=this.fields[n].name;i!==null?t[o]=this._parsers[n](
i):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Ou.getTypeParser(n.dataTypeID,n.format||"text")}}};a(br,"\
Result");var wr=br;hi.exports=wr});var mi=I((Oh,yi)=>{"use strict";p();var{EventEmitter:Nu}=de(),pi=fi(),di=rt(),xr=class xr extends Nu{constructor(e,t,n){
super(),e=di.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,m.domain&&e.callback&&
(this.callback=m.domain.bind(e.callback)),this._result=new pi(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new pi(
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
binary,valueMapper:di.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(xr,"Query");
var Sr=xr;yi.exports=Sr});var bi={};re(bi,{Socket:()=>Er,isIP:()=>qu});function qu(r){return 0}var wi,gi,C,
Er,Si=Y(()=>{p();wi=Ae(de(),1);a(qu,"isIP");gi=/^[^.]+\./,C=class C extends wi.EventEmitter{constructor(){
super(...arguments);w(this,"opts",{});w(this,"connecting",!1);w(this,"pending",!0);
w(this,"writable",!0);w(this,"encrypted",!1);w(this,"authorized",!1);w(this,"des\
troyed",!1);w(this,"ws",null);w(this,"writeBuffer");w(this,"tlsState",0);w(this,
"tlsRead");w(this,"tlsWrite")}static get poolQueryViaFetch(){return C.opts.poolQueryViaFetch??
C.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){C.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return C.opts.fetchEndpoint??C.defaults.fetchEndpoint}static set fetchEndpoint(t){
C.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`\
)")}static get fetchFunction(){return C.opts.fetchFunction??C.defaults.fetchFunction}static set fetchFunction(t){
C.opts.fetchFunction=t}static get webSocketConstructor(){return C.opts.webSocketConstructor??
C.defaults.webSocketConstructor}static set webSocketConstructor(t){C.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??C.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return C.opts.wsProxy??C.defaults.
wsProxy}static set wsProxy(t){C.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
C.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return C.
opts.coalesceWrites??C.defaults.coalesceWrites}static set coalesceWrites(t){C.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??C.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return C.opts.useSecureWebSocket??
C.defaults.useSecureWebSocket}static set useSecureWebSocket(t){C.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??C.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return C.opts.forceDisablePgSSL??
C.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){C.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??C.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return C.opts.disableSNI??
C.defaults.disableSNI}static set disableSNI(t){C.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??C.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return C.opts.pipelineConnect??C.defaults.pipelineConnect}static set pipelineConnect(t){
C.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
C.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return C.opts.subtls??C.defaults.subtls}static set subtls(t){C.opts.subtls=t}get subtls(){
return this.opts.subtls??C.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return C.opts.pipelineTLS??C.defaults.pipelineTLS}static set pipelineTLS(t){C.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??C.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return C.opts.rootCerts??C.defaults.
rootCerts}static set rootCerts(t){C.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??C.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let s=this.wsProxy;if(s===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof s=="functi\
on"?s(t,n):`${s}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){return this}ref(){
return this}unref(){return this}connect(t,n,s){this.connecting=!0,s&&this.once("\
connect",s);let i=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),
this.emit("ready")},"handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuf\
fer",c.addEventListener("error",h=>{this.emit("error",h),this.emit("close")}),c.
addEventListener("message",h=>{if(this.tlsState===0){let d=y.from(h.data);this.emit(
"data",d)}}),c.addEventListener("close",()=>{this.emit("close")}),l?i():c.addEventListener(
"open",i)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="st\
ring"?parseInt(t,10):t)}catch(c){this.emit("error",c),this.emit("close");return}
try{let l=(this.useSecureWebSocket?"wss:":"ws:")+"//"+u;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(l),o(this.ws);else try{this.ws=new WebSocket(
l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){let h=(this.
useSecureWebSocket?"https:":"http:")+"//"+u;fetch(h,{headers:{Upgrade:"websocket"}}).
then(d=>{if(this.ws=d.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,
!0)}).catch(d=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${d.message}`)),this.emit("close")})}}async startTls(t){if(this.subtls===
void 0)throw new Error("For Postgres SSL connections, you must set `neonConfig.s\
ubtls` to the subtls library. See https://github.com/neondatabase/serverless/blo\
b/main/CONFIG.md for more information.");this.tlsState=1;let n=this.subtls.TrustedCert.
fromPEM(this.rootCerts),s=new this.subtls.WebSocketReadQueue(this.ws),i=s.read.bind(
s),o=this.rawWrite.bind(this),[u,c]=await this.subtls.startTls(t,n,i,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=
u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){let t=await this.
tlsRead();if(t===void 0)break;{let n=y.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===void 0)this.
writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},
0);else{let n=new Uint8Array(this.writeBuffer.length+t.length);n.set(this.writeBuffer),
n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="utf8",s=i=>{}){return t.
length===0?(s(),!0):(typeof t=="string"&&(t=y.from(t,n)),this.tlsState===0?(this.
rawWrite(t),s()):this.tlsState===1?this.once("secureConnection",()=>{this.write(
t,n,s)}):(this.tlsWrite(t),s()),!0)}end(t=y.alloc(0),n="utf8",s=()=>{}){return this.
write(t,n,()=>{this.ws.close(),s()}),this}destroy(){return this.destroyed=!0,this.
end()}};a(C,"Socket"),w(C,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a((t,n,s)=>{
let i;return s?.jwtAuth?i=t.replace(gi,"apiauth."):i=t.replace(gi,"api."),"https\
://"+i+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
w(C,"opts",{});Er=C});var Zr=I(P=>{"use strict";p();Object.defineProperty(P,"__esModule",{value:!0});P.
NoticeMessage=P.DataRowMessage=P.CommandCompleteMessage=P.ReadyForQueryMessage=P.
NotificationResponseMessage=P.BackendKeyDataMessage=P.AuthenticationMD5Password=
P.ParameterStatusMessage=P.ParameterDescriptionMessage=P.RowDescriptionMessage=P.
Field=P.CopyResponse=P.CopyDataMessage=P.DatabaseError=P.copyDone=P.emptyQuery=P.
replicationStart=P.portalSuspended=P.noData=P.closeComplete=P.bindComplete=P.parseComplete=
void 0;P.parseComplete={name:"parseComplete",length:5};P.bindComplete={name:"bin\
dComplete",length:5};P.closeComplete={name:"closeComplete",length:5};P.noData={name:"\
noData",length:5};P.portalSuspended={name:"portalSuspended",length:5};P.replicationStart=
{name:"replicationStart",length:4};P.emptyQuery={name:"emptyQuery",length:4};P.copyDone=
{name:"copyDone",length:4};var Ur=class Ur extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};a(Ur,"DatabaseError");var vr=Ur;P.DatabaseError=vr;
var Or=class Or{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
a(Or,"CopyDataMessage");var Cr=Or;P.CopyDataMessage=Cr;var Nr=class Nr{constructor(e,t,n,s){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(s)}};a(Nr,"Co\
pyResponse");var Ar=Nr;P.CopyResponse=Ar;var qr=class qr{constructor(e,t,n,s,i,o,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=s,this.dataTypeSize=i,
this.dataTypeModifier=o,this.format=u}};a(qr,"Field");var _r=qr;P.Field=_r;var Qr=class Qr{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};a(Qr,"RowDescriptionMessage");var Tr=Qr;P.RowDescriptionMessage=
Tr;var Wr=class Wr{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};a(Wr,"P\
arameterDescriptionMessage");var Pr=Wr;P.ParameterDescriptionMessage=Pr;var jr=class jr{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};a(jr,"ParameterStatusMessage");var Ir=jr;P.ParameterStatusMessage=Ir;var Hr=class Hr{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};a(Hr,"Authenti\
cationMD5Password");var Lr=Hr;P.AuthenticationMD5Password=Lr;var Gr=class Gr{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Gr,
"BackendKeyDataMessage");var Br=Gr;P.BackendKeyDataMessage=Br;var $r=class $r{constructor(e,t,n,s){
this.length=e,this.processId=t,this.channel=n,this.payload=s,this.name="notifica\
tion"}};a($r,"NotificationResponseMessage");var Rr=$r;P.NotificationResponseMessage=
Rr;var Vr=class Vr{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};a(Vr,"ReadyForQueryMessage");var Fr=Vr;P.ReadyForQueryMessage=Fr;var Kr=class Kr{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};a(Kr,"CommandCompleteMes\
sage");var kr=Kr;P.CommandCompleteMessage=kr;var zr=class zr{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(zr,"Data\
RowMessage");var Mr=zr;P.DataRowMessage=Mr;var Yr=class Yr{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};a(Yr,"NoticeMessage");var Dr=Yr;P.NoticeMessage=
Dr});var xi=I(St=>{"use strict";p();Object.defineProperty(St,"__esModule",{value:!0});
St.Writer=void 0;var Xr=class Xr{constructor(e=256){this.size=e,this.offset=5,this.
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
offset=5,this.headerPosition=0,this.buffer=y.allocUnsafe(this.size),t}};a(Xr,"Wr\
iter");var Jr=Xr;St.Writer=Jr});var vi=I(Et=>{"use strict";p();Object.defineProperty(Et,"__esModule",{value:!0});
Et.serialize=void 0;var en=xi(),M=new en.Writer,Qu=a(r=>{M.addInt16(3).addInt16(
0);for(let n of Object.keys(r))M.addCString(n).addCString(r[n]);M.addCString("cl\
ient_encoding").addCString("UTF8");var e=M.addCString("").flush(),t=e.length+4;return new en.
Writer().addInt32(t).add(e).flush()},"startup"),Wu=a(()=>{let r=y.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),ju=a(r=>M.
addCString(r).flush(112),"password"),Hu=a(function(r,e){return M.addCString(r).addInt32(
y.byteLength(e)).addString(e),M.flush(112)},"sendSASLInitialResponseMessage"),Gu=a(
function(r){return M.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),$u=a(
r=>M.addCString(r).flush(81),"query"),Ei=[],Vu=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||Ei;for(var n=t.length,
s=M.addCString(e).addCString(r.text).addInt16(n),i=0;i<n;i++)s.addInt32(t[i]);return M.
flush(80)},"parse"),Qe=new en.Writer,Ku=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(M.addInt16(0),Qe.addInt32(-1)):n instanceof y?(M.
addInt16(1),Qe.addInt32(n.length),Qe.add(n)):(M.addInt16(0),Qe.addInt32(y.byteLength(
n)),Qe.addString(n))}},"writeValues"),zu=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,s=r.values||Ei,i=s.length;return M.addCString(e).addCString(t),
M.addInt16(i),Ku(s,r.valueMapper),M.addInt16(i),M.add(Qe.flush()),M.addInt16(n?1:
0),M.flush(66)},"bind"),Yu=y.from([69,0,0,0,9,0,0,0,0,0]),Zu=a(r=>{if(!r||!r.portal&&
!r.rows)return Yu;let e=r.portal||"",t=r.rows||0,n=y.byteLength(e),s=4+n+1+4,i=y.
allocUnsafe(1+s);return i[0]=69,i.writeInt32BE(s,1),i.write(e,5,"utf-8"),i[n+5]=
0,i.writeUInt32BE(t,i.length-4),i},"execute"),Ju=a((r,e)=>{let t=y.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),tn=a((r,e)=>{let n=4+y.byteLength(e)+1,s=y.
allocUnsafe(1+n);return s[0]=r,s.writeInt32BE(n,1),s.write(e,5,"utf-8"),s[n]=0,s},
"cstringMessage"),Xu=M.addCString("P").flush(68),ec=M.addCString("S").flush(68),
tc=a(r=>r.name?tn(68,`${r.type}${r.name||""}`):r.type==="P"?Xu:ec,"describe"),rc=a(
r=>{let e=`${r.type}${r.name||""}`;return tn(67,e)},"close"),nc=a(r=>M.add(r).flush(
100),"copyData"),sc=a(r=>tn(102,r),"copyFail"),xt=a(r=>y.from([r,0,0,0,4]),"code\
OnlyBuffer"),ic=xt(72),oc=xt(83),ac=xt(88),uc=xt(99),cc={startup:Qu,password:ju,
requestSsl:Wu,sendSASLInitialResponseMessage:Hu,sendSCRAMClientFinalMessage:Gu,query:$u,
parse:Vu,bind:zu,execute:Zu,describe:tc,close:rc,flush:a(()=>ic,"flush"),sync:a(
()=>oc,"sync"),end:a(()=>ac,"end"),copyData:nc,copyDone:a(()=>uc,"copyDone"),copyFail:sc,
cancel:Ju};Et.serialize=cc});var Ci=I(vt=>{"use strict";p();Object.defineProperty(vt,"__esModule",{value:!0});
vt.BufferReader=void 0;var lc=y.allocUnsafe(0),nn=class nn{constructor(e=0){this.
offset=e,this.buffer=lc,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};a(nn,"BufferReader");var rn=nn;vt.BufferReader=
rn});var Ti=I(Ct=>{"use strict";p();Object.defineProperty(Ct,"__esModule",{value:!0});
Ct.Parser=void 0;var D=Zr(),hc=Ci(),sn=1,fc=4,Ai=sn+fc,_i=y.allocUnsafe(0),an=class an{constructor(e){
if(this.buffer=_i,this.bufferLength=0,this.bufferOffset=0,this.reader=new hc.BufferReader,
e?.mode==="binary")throw new Error("Binary mode not supported yet");this.mode=e?.
mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.bufferOffset+this.bufferLength,
s=this.bufferOffset;for(;s+Ai<=n;){let i=this.buffer[s],o=this.buffer.readUInt32BE(
s+sn),u=sn+o;if(u+s<=n){let c=this.handlePacket(s+Ai,i,o,this.buffer);t(c),s+=u}else
break}s===n?(this.buffer=_i,this.bufferLength=0,this.bufferOffset=0):(this.bufferLength=
n-s,this.bufferOffset=s)}mergeBuffer(e){if(this.bufferLength>0){let t=this.bufferLength+
e.byteLength;if(t+this.bufferOffset>this.buffer.byteLength){let s;if(t<=this.buffer.
byteLength&&this.bufferOffset>=this.bufferLength)s=this.buffer;else{let i=this.buffer.
byteLength*2;for(;t>=i;)i*=2;s=y.allocUnsafe(i)}this.buffer.copy(s,0,this.bufferOffset,
this.bufferOffset+this.bufferLength),this.buffer=s,this.bufferOffset=0}e.copy(this.
buffer,this.bufferOffset+this.bufferLength),this.bufferLength=t}else this.buffer=
e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,s){switch(t){case 50:
return D.bindComplete;case 49:return D.parseComplete;case 51:return D.closeComplete;case 110:
return D.noData;case 115:return D.portalSuspended;case 99:return D.copyDone;case 87:
return D.replicationStart;case 73:return D.emptyQuery;case 68:return this.parseDataRowMessage(
e,n,s);case 67:return this.parseCommandCompleteMessage(e,n,s);case 90:return this.
parseReadyForQueryMessage(e,n,s);case 65:return this.parseNotificationMessage(e,
n,s);case 82:return this.parseAuthenticationResponse(e,n,s);case 83:return this.
parseParameterStatusMessage(e,n,s);case 75:return this.parseBackendKeyData(e,n,s);case 69:
return this.parseErrorMessage(e,n,s,"error");case 78:return this.parseErrorMessage(
e,n,s,"notice");case 84:return this.parseRowDescriptionMessage(e,n,s);case 116:return this.
parseParameterDescriptionMessage(e,n,s);case 71:return this.parseCopyInMessage(e,
n,s);case 72:return this.parseCopyOutMessage(e,n,s);case 100:return this.parseCopyData(
e,n,s);default:return new D.DatabaseError("received invalid response: "+t.toString(
16),n,"error")}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.
reader.string(1);return new D.ReadyForQueryMessage(t,s)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.cstring();return new D.CommandCompleteMessage(
t,s)}parseCopyData(e,t,n){let s=n.slice(e,e+(t-4));return new D.CopyDataMessage(
t,s)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,s){this.reader.setBuffer(e,n);let i=this.reader.byte()!==
0,o=this.reader.int16(),u=new D.CopyResponse(t,s,i,o);for(let c=0;c<o;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i=this.reader.cstring(),o=this.reader.cstring();return new D.
NotificationResponseMessage(t,s,i,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let s=this.reader.int16(),i=new D.RowDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.fields[o]=this.parseField();return i}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),s=this.reader.int32(),i=this.reader.
int16(),o=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new D.
Field(e,t,n,s,i,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int16(),i=new D.ParameterDescriptionMessage(t,s);for(let o=0;o<
s;o++)i.dataTypeIDs[o]=this.reader.int32();return i}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let s=this.reader.int16(),i=new Array(s);for(let o=0;o<s;o++){
let u=this.reader.int32();i[o]=u===-1?null:this.reader.string(u)}return new D.DataRowMessage(
t,i)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let s=this.reader.
cstring(),i=this.reader.cstring();return new D.ParameterStatusMessage(t,s,i)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let s=this.reader.int32(),i=this.reader.int32();return new D.
BackendKeyDataMessage(t,s,i)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let s=this.reader.int32(),i={name:"authenticationOk",length:t};switch(s){case 0:
break;case 3:i.length===8&&(i.name="authenticationCleartextPassword");break;case 5:
if(i.length===12){i.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new D.AuthenticationMD5Password(t,u)}break;case 10:i.name="authentication\
SASL",i.mechanisms=[];let o;do o=this.reader.cstring(),o&&i.mechanisms.push(o);while(o);
break;case 11:i.name="authenticationSASLContinue",i.data=this.reader.string(t-8);
break;case 12:i.name="authenticationSASLFinal",i.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+s)}return i}parseErrorMessage(e,t,n,s){
this.reader.setBuffer(e,n);let i={},o=this.reader.string(1);for(;o!=="\0";)i[o]=
this.reader.cstring(),o=this.reader.string(1);let u=i.M,c=s==="notice"?new D.NoticeMessage(
t,u):new D.DatabaseError(u,t,s);return c.severity=i.S,c.code=i.C,c.detail=i.D,c.
hint=i.H,c.position=i.P,c.internalPosition=i.p,c.internalQuery=i.q,c.where=i.W,c.
schema=i.s,c.table=i.t,c.column=i.c,c.dataType=i.d,c.constraint=i.n,c.file=i.F,c.
line=i.L,c.routine=i.R,c}};a(an,"Parser");var on=an;Ct.Parser=on});var un=I(Ee=>{"use strict";p();Object.defineProperty(Ee,"__esModule",{value:!0});
Ee.DatabaseError=Ee.serialize=Ee.parse=void 0;var pc=Zr();Object.defineProperty(
Ee,"DatabaseError",{enumerable:!0,get:a(function(){return pc.DatabaseError},"get")});
var dc=vi();Object.defineProperty(Ee,"serialize",{enumerable:!0,get:a(function(){
return dc.serialize},"get")});var yc=Ti();function mc(r,e){let t=new yc.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(mc,"parse");Ee.
parse=mc});var Pi={};re(Pi,{connect:()=>gc});function gc({socket:r,servername:e}){return r.
startTls(e),r}var Ii=Y(()=>{p();a(gc,"connect")});var hn=I((lf,Ri)=>{"use strict";p();var Li=(Si(),q(bi)),wc=de().EventEmitter,{parse:bc,
serialize:W}=un(),Bi=W.flush(),Sc=W.sync(),xc=W.end(),ln=class ln extends wc{constructor(e){
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
nnection"))}var u=(Ii(),q(Pi));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Li.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(l){return n.emit("error",l)}n.attachListeners(n.stream),
n.stream.on("error",s),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),bc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(W.requestSsl())}startup(e){
this.stream.write(W.startup(e))}cancel(e,t){this._send(W.cancel(e,t))}password(e){
this._send(W.password(e))}sendSASLInitialResponseMessage(e,t){this._send(W.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(W.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(W.query(
e))}parse(e){this._send(W.parse(e))}bind(e){this._send(W.bind(e))}execute(e){this.
_send(W.execute(e))}flush(){this.stream.writable&&this.stream.write(Bi)}sync(){this.
_ending=!0,this._send(Bi),this._send(Sc)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(xc,()=>{this.stream.end()})}close(e){
this._send(W.close(e))}describe(e){this._send(W.describe(e))}sendCopyFromChunk(e){
this._send(W.copyData(e))}endCopyFrom(){this._send(W.copyDone())}sendCopyFail(e){
this._send(W.copyFail(e))}};a(ln,"Connection");var cn=ln;Ri.exports=cn});var Mi=I((df,ki)=>{"use strict";p();var Ec=de().EventEmitter,pf=($e(),q(Ge)),vc=rt(),
fn=Ws(),Cc=Xs(),Ac=wt(),_c=bt(),Fi=mi(),Tc=tt(),Pc=hn(),pn=class pn extends Ec{constructor(e){
super(),this.connectionParameters=new _c(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||x.Promise,this._types=new Ac(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Pc({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||Tc.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
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
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():Cc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=vc.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=fn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
fn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){fn.finalizeSession(this.saslSession,
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
(s.callback=s.callback||t)):(o=this.connectionParameters.query_timeout,s=new Fi(
e,t,n),s.callback||(i=new this._Promise((l,h)=>{s.callback=(d,S)=>d?h(d):l(S)}))),
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
_Promise(t=>{this.connection.once("end",t)})}};a(pn,"Client");var At=pn;At.Query=
Fi;ki.exports=At});var Ni=I((gf,Oi)=>{"use strict";p();var Ic=de().EventEmitter,Di=a(function(){},"\
NOOP"),Ui=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),mn=class mn{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};a(mn,"IdleItem");var dn=mn,gn=class gn{constructor(e){this.callback=
e}};a(gn,"PendingItem");var We=gn;function Lc(){throw new Error("Release called \
on client which has already been released to the pool.")}a(Lc,"throwOnDoubleRele\
ase");function _t(r,e){if(e)return{callback:e,result:void 0};let t,n,s=a(function(o,u){
o?t(o):n(u)},"cb"),i=new r(function(o,u){n=o,t=u}).catch(o=>{throw Error.captureStackTrace(
o),o});return{callback:s,result:i}}a(_t,"promisify");function Bc(r,e){return a(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}a(Bc,"makeIdleListener");var wn=class wn extends Ic{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||Tt().Client,this.Promise=
this.options.Promise||x.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
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
s)}let t=_t(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&m.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new We(t.callback)),n;let s=a((u,c,l)=>{clearTimeout(
o),t.callback(u,c,l)},"queueCallback"),i=new We(s),o=setTimeout(()=>{Ui(this._pendingQueue,
u=>u.callback===s),i.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(i),n}return this.newClient(new We(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=Bc(this,t);this.log("checking c\
lient timeout");let s,i=!1;this.options.connectionTimeoutMillis&&(s=setTimeout(()=>{
this.log("ending client due to timeout"),i=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(o=>{if(s&&clearTimeout(s),t.on("error",n),o)this.log("client failed to\
 connect",o),this._clients=this._clients.filter(u=>u!==t),i&&(o.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
o,void 0,Di);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(
t,new We((l,h,d)=>d()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,s){
s&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?s&&this.options.verify?this.options.verify(
e,e.release):e.release():s&&this.options.verify?this.options.verify(e,i=>{if(i)return e.
release(i),t.callback(i,void 0,Di);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return s=>{n&&Lc(),n=!0,this._release(e,
t,s)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let i;this.options.idleTimeoutMillis&&(i=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
i.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new dn(e,t,i)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let i=_t(this.Promise,e);
return E(function(){return i.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),i.result}typeof t=="function"&&(n=
t,t=void 0);let s=_t(this.Promise,n);return n=s.callback,this.connect((i,o)=>{if(i)
return n(i);let u=!1,c=a(l=>{u||(u=!0,o.release(l),n(l))},"onError");o.once("err\
or",c),this.log("dispatching query");try{o.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(l),l?n(l):n(void 0,
h)})}catch(l){return o.release(l),n(l)}}),s.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=_t(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(wn,"Pool");var yn=wn;Oi.exports=yn});var qi={};re(qi,{default:()=>Rc});var Rc,Qi=Y(()=>{p();Rc={}});var Wi=I((xf,Fc)=>{Fc.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var Gi=I((Ef,Hi)=>{"use strict";p();var ji=de().EventEmitter,kc=($e(),q(Ge)),bn=rt(),
je=Hi.exports=function(r,e,t){ji.call(this),r=bn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};kc.inherits(
je,ji);var Mc={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};je.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Mc[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};je.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};je.prototype.catch=function(r){return this._getPromise().
catch(r)};je.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};je.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(i,o,u){if(r.native.arrayMode=!1,E(function(){e.emit("_done")}),i)return e.
handleError(i);e._emitRowEvents&&(u.length>1?o.forEach((c,l)=>{c.forEach(h=>{e.emit(
"row",h,u[l])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(m.domain&&(t=m.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(bn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let i=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(i)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(i){return i?t(i):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let i=new Error("Query values must be an array");return t(i)}var s=this.
values.map(bn.prepareValue);r.native.query(this.text,s,t)}else r.native.query(this.
text,t)}});var zi=I((_f,Ki)=>{"use strict";p();var Dc=(Qi(),q(qi)),Uc=wt(),Af=Wi(),$i=de().
EventEmitter,Oc=($e(),q(Ge)),Nc=bt(),Vi=Gi(),X=Ki.exports=function(r){$i.call(this),
r=r||{},this._Promise=r.Promise||x.Promise,this._types=new Uc(r.types),this.native=
new Dc({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Nc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};X.Query=Vi;Oc.inherits(X,$i);X.prototype._errorAllQueries=
function(r){let e=a(t=>{m.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};X.prototype._connect=
function(r){var e=this;if(this._connecting){m.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(s){if(s)return e.native.end(),r(s);e._connected=!0,
e.native.on("error",function(i){e._queryable=!1,e._errorAllQueries(i),e.emit("er\
ror",i)}),e.native.on("notification",function(i){e.emit("notification",{channel:i.
relname,payload:i.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};X.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};X.prototype.query=function(r,e,t){var n,
s,i,o,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")i=r.query_timeout||this.connectionParameters.
query_timeout,s=n=r,typeof e=="function"&&(r.callback=e);else if(i=this.connectionParameters.
query_timeout,n=new Vi(r,e,t),!n.callback){let c,l;s=new this._Promise((h,d)=>{c=
h,l=d}),n.callback=(h,d)=>h?l(h):c(d)}return i&&(u=n.callback,o=setTimeout(()=>{
var c=new Error("Query read timeout");m.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},i),n.callback=(c,l)=>{clearTimeout(o),u(c,l)}),
this._queryable?this._ending?(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),s):(this._queryQueue.push(
n),this._pulseQueryQueue(),s):(n.native=this.native,m.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),s)};
X.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,s){
r=a(i=>i?s(i):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),m.nextTick(()=>{e.emit("end"),r&&r()})}),t};X.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};X.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};X.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};X.prototype.ref=function(){};
X.prototype.unref=function(){};X.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};X.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Sn=I((If,Yi)=>{"use strict";p();Yi.exports=zi()});var Tt=I((Bf,st)=>{"use strict";p();var qc=Mi(),Qc=tt(),Wc=hn(),jc=Ni(),{DatabaseError:Hc}=un(),
Gc=a(r=>{var e;return e=class extends jc{constructor(n){super(n,r)}},a(e,"BoundP\
ool"),e},"poolFactory"),xn=a(function(r){this.defaults=Qc,this.Client=r,this.Query=
this.Client.Query,this.Pool=Gc(this.Client),this._pools=[],this.Connection=Wc,this.
types=et(),this.DatabaseError=Hc},"PG");typeof m.env.NODE_PG_FORCE_NATIVE<"u"?st.
exports=new xn(Sn()):(st.exports=new xn(qc),Object.defineProperty(st.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new xn(Sn())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(st.exports,"\
native",{value:r}),r}}))});var Yc={};re(Yc,{Client:()=>Pt,ClientBase:()=>oe.ClientBase,Connection:()=>oe.Connection,
DatabaseError:()=>oe.DatabaseError,NeonDbError:()=>ce,Pool:()=>Cn,Query:()=>oe.Query,
defaults:()=>oe.defaults,neon:()=>En,neonConfig:()=>Pe,types:()=>oe.types});module.
exports=q(Yc);p();var It=Ae(Tt());p();var Ji=Ae(de(),1);var Zi=/^[^.]+\./,A=class A extends Ji.EventEmitter{constructor(){super(...arguments);
w(this,"opts",{});w(this,"connecting",!1);w(this,"pending",!0);w(this,"writable",
!0);w(this,"encrypted",!1);w(this,"authorized",!1);w(this,"destroyed",!1);w(this,
"ws",null);w(this,"writeBuffer");w(this,"tlsState",0);w(this,"tlsRead");w(this,"\
tlsWrite")}static get poolQueryViaFetch(){return A.opts.poolQueryViaFetch??A.defaults.
poolQueryViaFetch}static set poolQueryViaFetch(t){A.opts.poolQueryViaFetch=t}static get fetchEndpoint(){
return A.opts.fetchEndpoint??A.defaults.fetchEndpoint}static set fetchEndpoint(t){
A.opts.fetchEndpoint=t}static get fetchConnectionCache(){return!0}static set fetchConnectionCache(t){
console.warn("The `fetchConnectionCache` option is deprecated (now always `true`\
)")}static get fetchFunction(){return A.opts.fetchFunction??A.defaults.fetchFunction}static set fetchFunction(t){
A.opts.fetchFunction=t}static get webSocketConstructor(){return A.opts.webSocketConstructor??
A.defaults.webSocketConstructor}static set webSocketConstructor(t){A.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??A.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return A.opts.wsProxy??A.defaults.
wsProxy}static set wsProxy(t){A.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
A.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return A.
opts.coalesceWrites??A.defaults.coalesceWrites}static set coalesceWrites(t){A.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??A.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return A.opts.useSecureWebSocket??
A.defaults.useSecureWebSocket}static set useSecureWebSocket(t){A.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??A.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return A.opts.forceDisablePgSSL??
A.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){A.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??A.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return A.opts.disableSNI??
A.defaults.disableSNI}static set disableSNI(t){A.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??A.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return A.opts.pipelineConnect??A.defaults.pipelineConnect}static set pipelineConnect(t){
A.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
A.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return A.opts.subtls??A.defaults.subtls}static set subtls(t){A.opts.subtls=t}get subtls(){
return this.opts.subtls??A.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return A.opts.pipelineTLS??A.defaults.pipelineTLS}static set pipelineTLS(t){A.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??A.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return A.opts.rootCerts??A.defaults.
rootCerts}static set rootCerts(t){A.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??A.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let s=this.wsProxy;if(s===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof s=="functi\
on"?s(t,n):`${s}?address=${t}:${n}`}setNoDelay(){return this}setKeepAlive(){return this}ref(){
return this}unref(){return this}connect(t,n,s){this.connecting=!0,s&&this.once("\
connect",s);let i=a(()=>{this.connecting=!1,this.pending=!1,this.emit("connect"),
this.emit("ready")},"handleWebSocketOpen"),o=a((c,l=!1)=>{c.binaryType="arraybuf\
fer",c.addEventListener("error",h=>{this.emit("error",h),this.emit("close")}),c.
addEventListener("message",h=>{if(this.tlsState===0){let d=y.from(h.data);this.emit(
"data",d)}}),c.addEventListener("close",()=>{this.emit("close")}),l?i():c.addEventListener(
"open",i)},"configureWebSocket"),u;try{u=this.wsProxyAddrForHost(n,typeof t=="st\
ring"?parseInt(t,10):t)}catch(c){this.emit("error",c),this.emit("close");return}
try{let l=(this.useSecureWebSocket?"wss:":"ws:")+"//"+u;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(l),o(this.ws);else try{this.ws=new WebSocket(
l),o(this.ws)}catch{this.ws=new __unstable_WebSocket(l),o(this.ws)}}catch(c){let h=(this.
useSecureWebSocket?"https:":"http:")+"//"+u;fetch(h,{headers:{Upgrade:"websocket"}}).
then(d=>{if(this.ws=d.webSocket,this.ws==null)throw c;this.ws.accept(),o(this.ws,
!0)}).catch(d=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${d.message}`)),this.emit("close")})}}async startTls(t){if(this.subtls===
void 0)throw new Error("For Postgres SSL connections, you must set `neonConfig.s\
ubtls` to the subtls library. See https://github.com/neondatabase/serverless/blo\
b/main/CONFIG.md for more information.");this.tlsState=1;let n=this.subtls.TrustedCert.
fromPEM(this.rootCerts),s=new this.subtls.WebSocketReadQueue(this.ws),i=s.read.bind(
s),o=this.rawWrite.bind(this),[u,c]=await this.subtls.startTls(t,n,i,o,{useSNI:!this.
disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=
u,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=!0,this.emit(
"secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){let t=await this.
tlsRead();if(t===void 0)break;{let n=y.from(t);this.emit("data",n)}}}rawWrite(t){
if(!this.coalesceWrites){this.ws.send(t);return}if(this.writeBuffer===void 0)this.
writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=void 0},
0);else{let n=new Uint8Array(this.writeBuffer.length+t.length);n.set(this.writeBuffer),
n.set(t,this.writeBuffer.length),this.writeBuffer=n}}write(t,n="utf8",s=i=>{}){return t.
length===0?(s(),!0):(typeof t=="string"&&(t=y.from(t,n)),this.tlsState===0?(this.
rawWrite(t),s()):this.tlsState===1?this.once("secureConnection",()=>{this.write(
t,n,s)}):(this.tlsWrite(t),s()),!0)}end(t=y.alloc(0),n="utf8",s=()=>{}){return this.
write(t,n,()=>{this.ws.close(),s()}),this}destroy(){return this.destroyed=!0,this.
end()}};a(A,"Socket"),w(A,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:a((t,n,s)=>{
let i;return s?.jwtAuth?i=t.replace(Zi,"apiauth."):i=t.replace(Zi,"api."),"https\
://"+i+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:a(t=>t+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
w(A,"opts",{});var Pe=A;p();p();function Xi(r,e=!1){let{protocol:t}=new URL(r),n="http:"+r.substring(t.length),{
username:s,password:i,host:o,hostname:u,port:c,pathname:l,search:h,searchParams:d,
hash:S}=new URL(n);i=decodeURIComponent(i),s=decodeURIComponent(s),l=decodeURIComponent(
l);let _=s+":"+i,L=e?Object.fromEntries(d.entries()):h;return{href:r,protocol:t,
auth:_,username:s,password:i,host:o,hostname:u,port:c,pathname:l,search:h,query:L,
hash:S}}a(Xi,"parse");var ro=Ae(rt()),no=Ae(wt());var vn=class vn extends Error{constructor(){super(...arguments);w(this,"name","N\
eonDbError");w(this,"severity");w(this,"code");w(this,"detail");w(this,"hint");w(
this,"position");w(this,"internalPosition");w(this,"internalQuery");w(this,"wher\
e");w(this,"schema");w(this,"table");w(this,"column");w(this,"dataType");w(this,
"constraint");w(this,"file");w(this,"line");w(this,"routine");w(this,"sourceErro\
r")}};a(vn,"NeonDbError");var ce=vn,eo="transaction() expects an array of querie\
s, or a function returning an array of queries",$c=["severity","code","detail","\
hint","position","internalPosition","internalQuery","where","schema","table","co\
lumn","dataType","constraint","file","line","routine"];function En(r,{arrayMode:e,
fullResults:t,fetchOptions:n,isolationLevel:s,readOnly:i,deferrable:o,queryCallback:u,
resultCallback:c,authToken:l}={}){if(!r)throw new Error("No database connection \
string was provided to `neon()`. Perhaps an environment variable has not been se\
t?");let h;try{h=Xi(r)}catch{throw new Error("Database connection string provide\
d to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:d,
username:S,hostname:_,port:L,pathname:j}=h;if(d!=="postgres:"&&d!=="postgresql:"||
!S||!_||!j)throw new Error("Database connection string format for `neon()` shoul\
d be: postgresql://user:password@host.tld/dbname?option=value");function ee(T,...b){
let B,K;if(typeof T=="string")B=T,K=b[1],b=b[0]??[];else{B="";for(let H=0;H<T.length;H++)
B+=T[H],H<b.length&&(B+="$"+(H+1))}b=b.map(H=>(0,ro.prepareValue)(H));let O={query:B,
params:b};return u&&u(O),Vc(me,O,K)}a(ee,"resolve"),ee.transaction=async(T,b)=>{
if(typeof T=="function"&&(T=T(ee)),!Array.isArray(T))throw new Error(eo);T.forEach(
O=>{if(O[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(eo)});let B=T.
map(O=>O.parameterizedQuery),K=T.map(O=>O.opts??{});return me(B,K,b)};async function me(T,b,B){
let{fetchEndpoint:K,fetchFunction:O}=Pe,H=typeof K=="function"?K(_,L,{jwtAuth:l!==
void 0}):K,le=Array.isArray(T)?{queries:T}:T,te=n??{},F=e??!1,$=t??!1,he=s,ge=i,
ve=o;B!==void 0&&(B.fetchOptions!==void 0&&(te={...te,...B.fetchOptions}),B.arrayMode!==
void 0&&(F=B.arrayMode),B.fullResults!==void 0&&($=B.fullResults),B.isolationLevel!==
void 0&&(he=B.isolationLevel),B.readOnly!==void 0&&(ge=B.readOnly),B.deferrable!==
void 0&&(ve=B.deferrable)),b!==void 0&&!Array.isArray(b)&&b.fetchOptions!==void 0&&
(te={...te,...b.fetchOptions});let fe={"Neon-Connection-String":r,"Neon-Raw-Text\
-Output":"true","Neon-Array-Mode":"true"},Ie=await Kc(l);Ie&&(fe.Authorization=`\
Bearer ${Ie}`),Array.isArray(T)&&(he!==void 0&&(fe["Neon-Batch-Isolation-Level"]=
he),ge!==void 0&&(fe["Neon-Batch-Read-Only"]=String(ge)),ve!==void 0&&(fe["Neon-\
Batch-Deferrable"]=String(ve)));let we;try{we=await(O??fetch)(H,{method:"POST",body:JSON.
stringify(le),headers:fe,...te})}catch(z){let U=new ce(`Error connecting to data\
base: ${z.message}`);throw U.sourceError=z,U}if(we.ok){let z=await we.json();if(Array.
isArray(T)){let U=z.results;if(!Array.isArray(U))throw new ce("Neon internal err\
or: unexpected result format");return U.map((be,Ce)=>{let Lt=b[Ce]??{},io=Lt.arrayMode??
F,oo=Lt.fullResults??$;return to(be,{arrayMode:io,fullResults:oo,parameterizedQuery:T[Ce],
resultCallback:c,types:Lt.types})})}else{let U=b??{},be=U.arrayMode??F,Ce=U.fullResults??
$;return to(z,{arrayMode:be,fullResults:Ce,parameterizedQuery:T,resultCallback:c,
types:U.types})}}else{let{status:z}=we;if(z===400){let U=await we.json(),be=new ce(
U.message);for(let Ce of $c)be[Ce]=U[Ce]??void 0;throw be}else{let U=await we.text();
throw new ce(`Server error (HTTP status ${z}): ${U}`)}}}return a(me,"execute"),ee}
a(En,"neon");function Vc(r,e,t){return{[Symbol.toStringTag]:"NeonQueryPromise",parameterizedQuery:e,
opts:t,then:a((n,s)=>r(e,t).then(n,s),"then"),catch:a(n=>r(e,t).catch(n),"catch"),
finally:a(n=>r(e,t).finally(n),"finally")}}a(Vc,"createNeonQueryPromise");function to(r,{
arrayMode:e,fullResults:t,parameterizedQuery:n,resultCallback:s,types:i}){let o=new no.default(
i),u=r.fields.map(h=>h.name),c=r.fields.map(h=>o.getTypeParser(h.dataTypeID)),l=e===
!0?r.rows.map(h=>h.map((d,S)=>d===null?null:c[S](d))):r.rows.map(h=>Object.fromEntries(
h.map((d,S)=>[u[S],d===null?null:c[S](d)])));return s&&s(n,r,l,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=l,r._parsers=c,r._types=o,r):l}a(to,"\
processQueryResult");async function Kc(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new ce("Error ge\
tting auth token.");throw e instanceof Error&&(t=new ce(`Error getting auth toke\
n: ${e.message}`)),t}}a(Kc,"getAuthToken");var so=Ae(bt()),oe=Ae(Tt());var An=class An extends It.Client{constructor(t){super(t);this.config=t}get neonConfig(){
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
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){let n=this.
saslSession,s=this.password,i=t.data;if(n.message!=="SASLInitialResponse"||typeof s!=
"string"||typeof i!="string")throw new Error("SASL: protocol error");let o=Object.
fromEntries(i.split(",").map(z=>{if(!/^.=/.test(z))throw new Error("SASL: Invali\
d attribute pair entry");let U=z[0],be=z.substring(2);return[U,be]})),u=o.r,c=o.
s,l=o.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!l||!/^[1-9][0-9]*$/.test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(l,10),d=y.from(c,"base64"),S=new TextEncoder,
_=S.encode(s),L=await g.subtle.importKey("raw",_,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),j=new Uint8Array(await g.subtle.sign("HMAC",L,y.concat([d,y.from(
[0,0,0,1])]))),ee=j;for(var me=0;me<h-1;me++)j=new Uint8Array(await g.subtle.sign(
"HMAC",L,j)),ee=y.from(ee.map((z,U)=>ee[U]^j[U]));let T=ee,b=await g.subtle.importKey(
"raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),B=new Uint8Array(await g.
subtle.sign("HMAC",b,S.encode("Client Key"))),K=await g.subtle.digest("SHA-256",
B),O="n=*,r="+n.clientNonce,H="r="+u+",s="+c+",i="+h,le="c=biws,r="+u,te=O+","+H+
","+le,F=await g.subtle.importKey("raw",K,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var $=new Uint8Array(await g.subtle.sign("HMAC",F,S.encode(te))),he=y.
from(B.map((z,U)=>B[U]^$[U])),ge=he.toString("base64");let ve=await g.subtle.importKey(
"raw",T,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),fe=await g.subtle.sign(
"HMAC",ve,S.encode("Server Key")),Ie=await g.subtle.importKey("raw",fe,{name:"HM\
AC",hash:{name:"SHA-256"}},!1,["sign"]);var we=y.from(await g.subtle.sign("HMAC",
Ie,S.encode(te)));n.message="SASLResponse",n.serverSignature=we.toString("base64"),
n.response=le+",p="+ge,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};a(An,"NeonClient");var Pt=An;function zc(r,e){if(e)return{callback:e,
result:void 0};let t,n,s=a(function(o,u){o?t(o):n(u)},"cb"),i=new r(function(o,u){
n=o,t=u});return{callback:s,result:i}}a(zc,"promisify");var _n=class _n extends It.Pool{constructor(){
super(...arguments);w(this,"Client",Pt);w(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,s){
if(!Pe.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,s);typeof n=="function"&&(s=n,n=void 0);let i=zc(this.Promise,
s);s=i.callback;try{let o=new so.default(this.options),u=encodeURIComponent,c=encodeURI,
l=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,h=typeof t==
"string"?t:t.text,d=n??t.values??[];En(l,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(h,d,{types:t.types??this.options?.types}).then(_=>s(void 0,_)).catch(_=>s(
_))}catch(o){s(o)}return i.result}};a(_n,"NeonPool");var Cn=_n;
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
