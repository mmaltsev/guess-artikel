/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Pn=[],Je=()=>{},sd=()=>!1,yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ks=e=>e.startsWith("onUpdate:"),me=Object.assign,Gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},od=Object.prototype.hasOwnProperty,oe=(e,t)=>od.call(e,t),W=Array.isArray,kn=e=>bi(e)==="[object Map]",Hc=e=>bi(e)==="[object Set]",Y=e=>typeof e=="function",ve=e=>typeof e=="string",Gt=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Vc=e=>(ge(e)||Y(e))&&Y(e.then)&&Y(e.catch),qc=Object.prototype.toString,bi=e=>qc.call(e),ad=e=>bi(e).slice(8,-1),Wc=e=>bi(e)==="[object Object]",Js=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},cd=/-(\w)/g,Ve=wi(e=>e.replace(cd,(t,n)=>n?n.toUpperCase():"")),ld=/\B([A-Z])/g,vn=wi(e=>e.replace(ld,"-$1").toLowerCase()),Ei=wi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ui=wi(e=>e?`on${Ei(e)}`:""),qt=(e,t)=>!Object.is(e,t),Bi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ud=e=>{const t=parseFloat(e);return isNaN(t)?e:t},fd=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Bo;const Ii=()=>Bo||(Bo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Ys(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ve(r)?gd(r):Ys(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(ve(e)||ge(e))return e}const dd=/;(?![^(]*\))/g,hd=/:([^]+)/,pd=/\/\*[^]*?\*\//g;function gd(e){const t={};return e.replace(pd,"").split(dd).forEach(n=>{if(n){const r=n.split(hd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qs(e){let t="";if(ve(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Qs(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vd=zs(md);function Kc(e){return!!e||e===""}const Gc=e=>!!(e&&e.__v_isRef===!0),_d=e=>ve(e)?e:e==null?"":W(e)||ge(e)&&(e.toString===qc||!Y(e.toString))?Gc(e)?_d(e.value):JSON.stringify(e,Jc,2):String(e),Jc=(e,t)=>Gc(t)?Jc(e,t.value):kn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[ji(r,s)+" =>"]=i,n),{})}:Hc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ji(n))}:Gt(t)?ji(t):ge(t)&&!W(t)&&!Wc(t)?String(t):t,ji=(e,t="")=>{var n;return Gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class yd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function bd(){return Me}let he;const Hi=new WeakSet;class Yc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hi.has(this)&&(Hi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jo(this),Zc(this);const t=he,n=Ye;he=this,Ye=!0;try{return this.fn()}finally{el(this),he=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)eo(t);this.deps=this.depsTail=void 0,jo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gs(this)&&this.run()}get dirty(){return gs(this)}}let Qc=0,er,tr;function Xc(e,t=!1){if(e.flags|=8,t){e.next=tr,tr=e;return}e.next=er,er=e}function Xs(){Qc++}function Zs(){if(--Qc>0)return;if(tr){let t=tr;for(tr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;er;){let t=er;for(er=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Zc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function el(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),eo(r),wd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function gs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function tl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ur))return;e.globalVersion=ur;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!gs(e)){e.flags&=-3;return}const n=he,r=Ye;he=e,Ye=!0;try{Zc(e);const i=e.fn(e._value);(t.version===0||qt(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{he=n,Ye=r,el(e),e.flags&=-3}}function eo(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)eo(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const nl=[];function Jt(){nl.push(Ye),Ye=!1}function Yt(){const e=nl.pop();Ye=e===void 0?!0:e}function jo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=he;he=void 0;try{t()}finally{he=n}}}let ur=0;class Ed{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!he||!Ye||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Ed(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,rl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=r)}return n}trigger(t){this.version++,ur++,this.notify(t)}notify(t){Xs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zs()}}}function rl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)rl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ms=new WeakMap,an=Symbol(""),vs=Symbol(""),fr=Symbol("");function we(e,t,n){if(Ye&&he){let r=ms.get(e);r||ms.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new to),i.map=r,i.key=n),i.track()}}function vt(e,t,n,r,i,s){const o=ms.get(e);if(!o){ur++;return}const a=c=>{c&&c.trigger()};if(Xs(),t==="clear")o.forEach(a);else{const c=W(e),l=c&&Js(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===fr||!Gt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(fr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(an)),kn(e)&&a(o.get(vs)));break;case"delete":c||(a(o.get(an)),kn(e)&&a(o.get(vs)));break;case"set":kn(e)&&a(o.get(an));break}}Zs()}function wn(e){const t=ne(e);return t===e?t:(we(t,"iterate",fr),Qe(e)?t:t.map(Se))}function no(e){return we(e=ne(e),"iterate",fr),e}const Id={__proto__:null,[Symbol.iterator](){return Vi(this,Symbol.iterator,Se)},concat(...e){return wn(this).concat(...e.map(t=>W(t)?wn(t):t))},entries(){return Vi(this,"entries",e=>(e[1]=Se(e[1]),e))},every(e,t){return pt(this,"every",e,t,void 0,arguments)},filter(e,t){return pt(this,"filter",e,t,n=>n.map(Se),arguments)},find(e,t){return pt(this,"find",e,t,Se,arguments)},findIndex(e,t){return pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pt(this,"findLast",e,t,Se,arguments)},findLastIndex(e,t){return pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return qi(this,"includes",e)},indexOf(...e){return qi(this,"indexOf",e)},join(e){return wn(this).join(e)},lastIndexOf(...e){return qi(this,"lastIndexOf",e)},map(e,t){return pt(this,"map",e,t,void 0,arguments)},pop(){return qn(this,"pop")},push(...e){return qn(this,"push",e)},reduce(e,...t){return Ho(this,"reduce",e,t)},reduceRight(e,...t){return Ho(this,"reduceRight",e,t)},shift(){return qn(this,"shift")},some(e,t){return pt(this,"some",e,t,void 0,arguments)},splice(...e){return qn(this,"splice",e)},toReversed(){return wn(this).toReversed()},toSorted(e){return wn(this).toSorted(e)},toSpliced(...e){return wn(this).toSpliced(...e)},unshift(...e){return qn(this,"unshift",e)},values(){return Vi(this,"values",Se)}};function Vi(e,t,n){const r=no(e),i=r[t]();return r!==e&&!Qe(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Td=Array.prototype;function pt(e,t,n,r,i,s){const o=no(e),a=o!==e&&!Qe(e),c=o[t];if(c!==Td[t]){const f=c.apply(e,s);return a?Se(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,Se(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function Ho(e,t,n,r){const i=no(e);let s=n;return i!==e&&(Qe(e)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,e)}):s=function(o,a,c){return n.call(this,o,Se(a),c,e)}),i[t](s,...r)}function qi(e,t,n){const r=ne(e);we(r,"iterate",fr);const i=r[t](...n);return(i===-1||i===!1)&&so(n[0])?(n[0]=ne(n[0]),r[t](...n)):i}function qn(e,t,n=[]){Jt(),Xs();const r=ne(e)[t].apply(e,n);return Zs(),Yt(),r}const Sd=zs("__proto__,__v_isRef,__isVue"),il=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gt));function Cd(e){Gt(e)||(e=String(e));const t=ne(this);return we(t,"has",e),t.hasOwnProperty(e)}class sl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Md:ll:s?cl:al).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!i){let c;if(o&&(c=Id[n]))return c;if(n==="hasOwnProperty")return Cd}const a=Reflect.get(t,n,Ee(t)?t:r);return(Gt(n)?il.has(n):Sd(n))||(i||we(t,"get",n),s)?a:Ee(a)?o&&Js(n)?a:a.value:ge(a)?i?fl(a):Bn(a):a}}class ol extends sl{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=ln(s);if(!Qe(r)&&!ln(r)&&(s=ne(s),r=ne(r)),!W(t)&&Ee(s)&&!Ee(r))return c?!1:(s.value=r,!0)}const o=W(t)&&Js(n)?Number(n)<t.length:oe(t,n),a=Reflect.set(t,n,r,Ee(t)?t:i);return t===ne(i)&&(o?qt(r,s)&&vt(t,"set",n,r):vt(t,"add",n,r)),a}deleteProperty(t,n){const r=oe(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&vt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Gt(n)||!il.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",W(t)?"length":an),Reflect.ownKeys(t)}}class Ad extends sl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rd=new ol,Pd=new Ad,kd=new ol(!0);const _s=e=>e,$r=e=>Reflect.getPrototypeOf(e);function Od(e,t,n){return function(...r){const i=this.__v_raw,s=ne(i),o=kn(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...r),u=n?_s:t?ys:Se;return!t&&we(s,"iterate",c?vs:an),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Fr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function xd(e,t){const n={get(i){const s=this.__v_raw,o=ne(s),a=ne(i);e||(qt(i,a)&&we(o,"get",i),we(o,"get",a));const{has:c}=$r(o),l=t?_s:e?ys:Se;if(c.call(o,i))return l(s.get(i));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&we(ne(i),"iterate",an),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=ne(s),a=ne(i);return e||(qt(i,a)&&we(o,"has",i),we(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=ne(a),l=t?_s:e?ys:Se;return!e&&we(c,"iterate",an),a.forEach((u,f)=>i.call(s,l(u),l(f),o))}};return me(n,e?{add:Fr("add"),set:Fr("set"),delete:Fr("delete"),clear:Fr("clear")}:{add(i){!t&&!Qe(i)&&!ln(i)&&(i=ne(i));const s=ne(this);return $r(s).has.call(s,i)||(s.add(i),vt(s,"add",i,i)),this},set(i,s){!t&&!Qe(s)&&!ln(s)&&(s=ne(s));const o=ne(this),{has:a,get:c}=$r(o);let l=a.call(o,i);l||(i=ne(i),l=a.call(o,i));const u=c.call(o,i);return o.set(i,s),l?qt(s,u)&&vt(o,"set",i,s):vt(o,"add",i,s),this},delete(i){const s=ne(this),{has:o,get:a}=$r(s);let c=o.call(s,i);c||(i=ne(i),c=o.call(s,i)),a&&a.call(s,i);const l=s.delete(i);return c&&vt(s,"delete",i,void 0),l},clear(){const i=ne(this),s=i.size!==0,o=i.clear();return s&&vt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Od(i,e,t)}),n}function ro(e,t){const n=xd(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(oe(n,i)&&i in r?n:r,i,s)}const Ld={get:ro(!1,!1)},Dd={get:ro(!1,!0)},Nd={get:ro(!0,!1)};const al=new WeakMap,cl=new WeakMap,ll=new WeakMap,Md=new WeakMap;function $d(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fd(e){return e.__v_skip||!Object.isExtensible(e)?0:$d(ad(e))}function Bn(e){return ln(e)?e:io(e,!1,Rd,Ld,al)}function ul(e){return io(e,!1,kd,Dd,cl)}function fl(e){return io(e,!0,Pd,Nd,ll)}function io(e,t,n,r,i){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Fd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function nr(e){return ln(e)?nr(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function so(e){return e?!!e.__v_raw:!1}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function Sr(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&zc(e,"__v_skip",!0),e}const Se=e=>ge(e)?Bn(e):e,ys=e=>ge(e)?fl(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function dr(e){return dl(e,!1)}function Ud(e){return dl(e,!0)}function dl(e,t){return Ee(e)?e:new Bd(e,t)}class Bd{constructor(t,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ne(t),this._value=n?t:Se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Qe(t)||ln(t);t=r?t:ne(t),qt(t,n)&&(this._rawValue=t,this._value=r?t:Se(t),this.dep.trigger())}}function cn(e){return Ee(e)?e.value:e}const jd={get:(e,t,n)=>t==="__v_raw"?e:cn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function hl(e){return nr(e)?e:new Proxy(e,jd)}class Hd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Xc(this,!0),!0}get value(){const t=this.dep.track();return tl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vd(e,t,n=!1){let r,i;return Y(e)?r=e:(r=e.get,i=e.set),new Hd(r,i,n)}const Ur={},ei=new WeakMap;let tn;function qd(e,t=!1,n=tn){if(n){let r=ei.get(n);r||ei.set(n,r=[]),r.push(e)}}function Wd(e,t,n=ue){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=n,l=R=>i?R:Qe(R)||i===!1||i===0?_t(R,1):_t(R);let u,f,d,g,v=!1,b=!1;if(Ee(e)?(f=()=>e.value,v=Qe(e)):nr(e)?(f=()=>l(e),v=!0):W(e)?(b=!0,v=e.some(R=>nr(R)||Qe(R)),f=()=>e.map(R=>{if(Ee(R))return R.value;if(nr(R))return l(R);if(Y(R))return c?c(R,2):R()})):Y(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Jt();try{d()}finally{Yt()}}const R=tn;tn=u;try{return c?c(e,3,[g]):e(g)}finally{tn=R}}:f=Je,t&&i){const R=f,F=i===!0?1/0:i;f=()=>_t(R(),F)}const S=bd(),C=()=>{u.stop(),S&&S.active&&Gs(S.effects,u)};if(s&&t){const R=t;t=(...F)=>{R(...F),C()}}let k=b?new Array(e.length).fill(Ur):Ur;const x=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(t){const F=u.run();if(i||v||(b?F.some((j,q)=>qt(j,k[q])):qt(F,k))){d&&d();const j=tn;tn=u;try{const q=[F,k===Ur?void 0:b&&k[0]===Ur?[]:k,g];c?c(t,3,q):t(...q),k=F}finally{tn=j}}}else u.run()};return a&&a(x),u=new Yc(f),u.scheduler=o?()=>o(x,!1):x,g=R=>qd(R,!1,u),d=u.onStop=()=>{const R=ei.get(u);if(R){if(c)c(R,4);else for(const F of R)F();ei.delete(u)}},t?r?x(!0):k=u.run():o?o(x.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function _t(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ee(e))_t(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(Hc(e)||kn(e))e.forEach(r=>{_t(r,t,n)});else if(Wc(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(e,t,n,r){try{return r?e(...r):e()}catch(i){Ti(i,t,n)}}function Ze(e,t,n,r){if(Y(e)){const i=Cr(e,t,n,r);return i&&Vc(i)&&i.catch(s=>{Ti(s,t,n)}),i}if(W(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Ze(e[s],t,n,r));return i}}function Ti(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ue;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(s){Jt(),Cr(s,null,10,[e,c,l]),Yt();return}}zd(e,n,i,r,o)}function zd(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ce=[];let st=-1;const On=[];let Mt=null,Cn=0;const pl=Promise.resolve();let ti=null;function gl(e){const t=ti||pl;return e?t.then(this?e.bind(this):e):t}function Kd(e){let t=st+1,n=Ce.length;for(;t<n;){const r=t+n>>>1,i=Ce[r],s=hr(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function oo(e){if(!(e.flags&1)){const t=hr(e),n=Ce[Ce.length-1];!n||!(e.flags&2)&&t>=hr(n)?Ce.push(e):Ce.splice(Kd(t),0,e),e.flags|=1,ml()}}function ml(){ti||(ti=pl.then(_l))}function Gd(e){W(e)?On.push(...e):Mt&&e.id===-1?Mt.splice(Cn+1,0,e):e.flags&1||(On.push(e),e.flags|=1),ml()}function Vo(e,t,n=st+1){for(;n<Ce.length;n++){const r=Ce[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ce.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vl(e){if(On.length){const t=[...new Set(On)].sort((n,r)=>hr(n)-hr(r));if(On.length=0,Mt){Mt.push(...t);return}for(Mt=t,Cn=0;Cn<Mt.length;Cn++){const n=Mt[Cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,Cn=0}}const hr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _l(e){const t=Je;try{for(st=0;st<Ce.length;st++){const n=Ce[st];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Cr(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;st<Ce.length;st++){const n=Ce[st];n&&(n.flags&=-2)}st=-1,Ce.length=0,vl(),ti=null,(Ce.length||On.length)&&_l()}}let Oe=null,yl=null;function ni(e){const t=Oe;return Oe=e,yl=e&&e.type.__scopeId||null,t}function Jd(e,t=Oe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&na(-1);const s=ni(t);let o;try{o=e(...i)}finally{ni(s),r._d&&na(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yd(e,t){if(Oe===null)return e;const n=ki(Oe),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,c=ue]=t[i];s&&(Y(s)&&(s={mounted:s,updated:s}),s.deep&&_t(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Xt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Jt(),Ze(c,n,8,[e.el,a,e,t]),Yt())}}const bl=Symbol("_vte"),wl=e=>e.__isTeleport,rr=e=>e&&(e.disabled||e.disabled===""),qo=e=>e&&(e.defer||e.defer===""),Wo=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,zo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,bs=(e,t)=>{const n=e&&e.to;return ve(n)?t?t(n):null:n},El={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:g,querySelector:v,createText:b,createComment:S}}=l,C=rr(t.props);let{shapeFlag:k,children:x,dynamicChildren:R}=t;if(e==null){const F=t.el=b(""),j=t.anchor=b("");g(F,n,r),g(j,n,r);const q=(M,J)=>{k&16&&(i&&i.isCE&&(i.ce._teleportTarget=M),u(x,M,J,i,s,o,a,c))},X=()=>{const M=t.target=bs(t.props,v),J=Il(M,t,b,g);M&&(o!=="svg"&&Wo(M)?o="svg":o!=="mathml"&&zo(M)&&(o="mathml"),C||(q(M,J),Vr(t,!1)))};C&&(q(n,j),Vr(t,!0)),qo(t.props)?Te(()=>{X(),t.el.__isMounted=!0},s):X()}else{if(qo(t.props)&&!e.el.__isMounted){Te(()=>{El.process(e,t,n,r,i,s,o,a,c,l),delete e.el.__isMounted},s);return}t.el=e.el,t.targetStart=e.targetStart;const F=t.anchor=e.anchor,j=t.target=e.target,q=t.targetAnchor=e.targetAnchor,X=rr(e.props),M=X?n:j,J=X?F:q;if(o==="svg"||Wo(j)?o="svg":(o==="mathml"||zo(j))&&(o="mathml"),R?(d(e.dynamicChildren,R,M,i,s,o,a),fo(e,t,!0)):c||f(e,t,M,J,i,s,o,a,!1),C)X?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Br(t,n,F,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Q=t.target=bs(t.props,v);Q&&Br(t,Q,null,l,0)}else X&&Br(t,j,q,l,1);Vr(t,C)}},remove(e,t,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:d}=e;if(f&&(i(l),i(u)),s&&i(c),o&16){const g=s||!rr(d);for(let v=0;v<a.length;v++){const b=a[v];r(b,t,n,g,!!b.dynamicChildren)}}},move:Br,hydrate:Qd};function Br(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=s===2;if(f&&r(o,t,n),(!f||rr(u))&&c&16)for(let d=0;d<l.length;d++)i(l[d],t,n,2);f&&r(a,t,n)}function Qd(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const d=t.target=bs(t.props,c);if(d){const g=rr(t.props),v=d._lpa||d.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,a(e),n,r,i,s),t.targetStart=v,t.targetAnchor=v&&o(v);else{t.anchor=o(e);let b=v;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}}b=o(b)}t.targetAnchor||Il(d,t,u,l),f(v&&o(v),t,d,n,r,i,s)}Vr(t,g)}return t.anchor&&o(t.anchor)}const CE=El;function Vr(e,t){const n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Il(e,t,n,r){const i=t.targetStart=n(""),s=t.targetAnchor=n("");return i[bl]=s,e&&(r(i,e),r(s,e)),s}const $t=Symbol("_leaveCb"),jr=Symbol("_enterCb");function Tl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ol(()=>{e.isMounted=!0}),co(()=>{e.isUnmounting=!0}),e}const je=[Function,Array],Sl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},Cl=e=>{const t=e.subTree;return t.component?Cl(t.component):t},Xd={name:"BaseTransition",props:Sl,setup(e,{slots:t}){const n=Ar(),r=Tl();return()=>{const i=t.default&&ao(t.default(),!0);if(!i||!i.length)return;const s=Al(i),o=ne(e),{mode:a}=o;if(r.isLeaving)return Wi(s);const c=Ko(s);if(!c)return Wi(s);let l=pr(c,o,r,n,f=>l=f);c.type!==ke&&un(c,l);let u=n.subTree&&Ko(n.subTree);if(u&&u.type!==ke&&!rn(c,u)&&Cl(n).type!==ke){let f=pr(u,o,r,n);if(un(u,f),a==="out-in"&&c.type!==ke)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Wi(s);a==="in-out"&&c.type!==ke?f.delayLeave=(d,g,v)=>{const b=Rl(r,u);b[String(u.key)]=u,d[$t]=()=>{g(),d[$t]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{v(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Al(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ke){t=n;break}}return t}const Zd=Xd;function Rl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pr(e,t,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:S,onAppear:C,onAfterAppear:k,onAppearCancelled:x}=t,R=String(e.key),F=Rl(n,e),j=(M,J)=>{M&&Ze(M,r,9,J)},q=(M,J)=>{const Q=J[1];j(M,J),W(M)?M.every(D=>D.length<=1)&&Q():M.length<=1&&Q()},X={mode:o,persisted:a,beforeEnter(M){let J=c;if(!n.isMounted)if(s)J=S||c;else return;M[$t]&&M[$t](!0);const Q=F[R];Q&&rn(e,Q)&&Q.el[$t]&&Q.el[$t](),j(J,[M])},enter(M){let J=l,Q=u,D=f;if(!n.isMounted)if(s)J=C||l,Q=k||u,D=x||f;else return;let Z=!1;const N=M[jr]=ee=>{Z||(Z=!0,ee?j(D,[M]):j(Q,[M]),X.delayedLeave&&X.delayedLeave(),M[jr]=void 0)};J?q(J,[M,N]):N()},leave(M,J){const Q=String(e.key);if(M[jr]&&M[jr](!0),n.isUnmounting)return J();j(d,[M]);let D=!1;const Z=M[$t]=N=>{D||(D=!0,J(),N?j(b,[M]):j(v,[M]),M[$t]=void 0,F[Q]===e&&delete F[Q])};F[Q]=e,g?q(g,[M,Z]):Z()},clone(M){const J=pr(M,t,n,r,i);return i&&i(J),J}};return X}function Wi(e){if(Ci(e))return e=Kt(e),e.children=null,e}function Ko(e){if(!Ci(e))return wl(e.type)&&e.children?Al(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function un(e,t){e.shapeFlag&6&&e.component?(e.transition=t,un(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ao(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ke?(o.patchFlag&128&&i++,r=r.concat(ao(o.children,t,a))):(t||o.type!==ke)&&r.push(a!=null?Kt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Si(e,t){return Y(e)?(()=>me({name:e.name},t,{setup:e}))():e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ri(e,t,n,r,i=!1){if(W(e)){e.forEach((v,b)=>ri(v,t&&(W(t)?t[b]:t),n,r,i));return}if(ir(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ri(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?ki(r.component):r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ue?a.refs={}:a.refs,f=a.setupState,d=ne(f),g=f===ue?()=>!1:v=>oe(d,v);if(l!=null&&l!==c&&(ve(l)?(u[l]=null,g(l)&&(f[l]=null)):Ee(l)&&(l.value=null)),Y(c))Cr(c,a,12,[o,u]);else{const v=ve(c),b=Ee(c);if(v||b){const S=()=>{if(e.f){const C=v?g(c)?f[c]:u[c]:c.value;i?W(C)&&Gs(C,s):W(C)?C.includes(s)||C.push(s):v?(u[c]=[s],g(c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else v?(u[c]=o,g(c)&&(f[c]=o)):b&&(c.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,Te(S,n)):S()}}}Ii().requestIdleCallback;Ii().cancelIdleCallback;const ir=e=>!!e.type.__asyncLoader,Ci=e=>e.type.__isKeepAlive;function eh(e,t){kl(e,"a",t)}function th(e,t){kl(e,"da",t)}function kl(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ai(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ci(i.parent.vnode)&&nh(r,t,n,i),i=i.parent}}function nh(e,t,n,r){const i=Ai(t,e,r,!0);Ll(()=>{Gs(r[t],i)},n)}function Ai(e,t,n=_e,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Jt();const a=Rr(n),c=Ze(t,n,e,o);return a(),Yt(),c});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=_e)=>{(!mr||e==="sp")&&Ai(e,(...r)=>t(...r),n)},rh=At("bm"),Ol=At("m"),ih=At("bu"),xl=At("u"),co=At("bum"),Ll=At("um"),sh=At("sp"),oh=At("rtg"),ah=At("rtc");function ch(e,t=_e){Ai("ec",e,t)}const Dl="components";function lh(e,t){return fh(Dl,e,!0,t)||e}const uh=Symbol.for("v-ndc");function fh(e,t,n=!0,r=!1){const i=Oe||_e;if(i){const s=i.type;if(e===Dl){const a=Xh(s,!1);if(a&&(a===t||a===Ve(t)||a===Ei(Ve(t))))return s}const o=Go(i[e]||s[e],t)||Go(i.appContext[e],t);return!o&&r?s:o}}function Go(e,t){return e&&(e[t]||e[Ve(t)]||e[Ei(Ve(t))])}const ws=e=>e?nu(e)?ki(e):ws(e.parent):null,sr=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ws(e.parent),$root:e=>ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>{oo(e.update)}),$nextTick:e=>e.n||(e.n=gl.bind(e.proxy)),$watch:e=>xh.bind(e)}),zi=(e,t)=>e!==ue&&!e.__isScriptSetup&&oe(e,t),dh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(zi(r,t))return o[t]=1,r[t];if(i!==ue&&oe(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&oe(l,t))return o[t]=3,s[t];if(n!==ue&&oe(n,t))return o[t]=4,n[t];Es&&(o[t]=0)}}const u=sr[t];let f,d;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ue&&oe(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,oe(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return zi(i,t)?(i[t]=n,!0):r!==ue&&oe(r,t)?(r[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==ue&&oe(e,o)||zi(t,o)||(a=s[0])&&oe(a,o)||oe(r,o)||oe(sr,o)||oe(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Jo(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Es=!0;function hh(e){const t=lo(e),n=e.proxy,r=e.ctx;Es=!1,t.beforeCreate&&Yo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:v,activated:b,deactivated:S,beforeDestroy:C,beforeUnmount:k,destroyed:x,unmounted:R,render:F,renderTracked:j,renderTriggered:q,errorCaptured:X,serverPrefetch:M,expose:J,inheritAttrs:Q,components:D,directives:Z,filters:N}=t;if(l&&ph(l,r,null),o)for(const ce in o){const re=o[ce];Y(re)&&(r[ce]=re.bind(n))}if(i){const ce=i.call(n,n);ge(ce)&&(e.data=Bn(ce))}if(Es=!0,s)for(const ce in s){const re=s[ce],ht=Y(re)?re.bind(n,n):Y(re.get)?re.get.bind(n,n):Je,kt=!Y(re)&&Y(re.set)?re.set.bind(n):Je,tt=G({get:ht,set:kt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(a)for(const ce in a)Nl(a[ce],r,n,ce);if(c){const ce=Y(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(re=>{qr(re,ce[re])})}u&&Yo(u,e,"c");function fe(ce,re){W(re)?re.forEach(ht=>ce(ht.bind(n))):re&&ce(re.bind(n))}if(fe(rh,f),fe(Ol,d),fe(ih,g),fe(xl,v),fe(eh,b),fe(th,S),fe(ch,X),fe(ah,j),fe(oh,q),fe(co,k),fe(Ll,R),fe(sh,M),W(J))if(J.length){const ce=e.exposed||(e.exposed={});J.forEach(re=>{Object.defineProperty(ce,re,{get:()=>n[re],set:ht=>n[re]=ht})})}else e.exposed||(e.exposed={});F&&e.render===Je&&(e.render=F),Q!=null&&(e.inheritAttrs=Q),D&&(e.components=D),Z&&(e.directives=Z),M&&Pl(e)}function ph(e,t,n=Je){W(e)&&(e=Is(e));for(const r in e){const i=e[r];let s;ge(i)?"default"in i?s=at(i.from||r,i.default,!0):s=at(i.from||r):s=at(i),Ee(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Yo(e,t,n){Ze(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nl(e,t,n,r){let i=r.includes(".")?Gl(n,r):()=>n[r];if(ve(e)){const s=t[e];Y(s)&&Wr(i,s)}else if(Y(e))Wr(i,e.bind(n));else if(ge(e))if(W(e))e.forEach(s=>Nl(s,t,n,r));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&Wr(i,s,e)}}function lo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>ii(c,l,o,!0)),ii(c,t,o)),ge(t)&&s.set(t,c),c}function ii(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ii(e,s,n,!0),i&&i.forEach(o=>ii(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=gh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const gh={data:Qo,props:Xo,emits:Xo,methods:Jn,computed:Jn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Jn,directives:Jn,watch:vh,provide:Qo,inject:mh};function Qo(e,t){return t?e?function(){return me(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function mh(e,t){return Jn(Is(e),Is(t))}function Is(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Jn(e,t){return e?me(Object.create(null),e,t):t}function Xo(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:me(Object.create(null),Jo(e),Jo(t!=null?t:{})):t}function vh(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Ml(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _h=0;function yh(e,t){return function(r,i=null){Y(r)||(r=me({},r)),i!=null&&!ge(i)&&(i=null);const s=Ml(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:_h++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ep,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(l,...f)):Y(u)&&(o.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,d){if(!c){const g=l._ceVNode||xe(r,i);return g.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(g,u):e(g,u,d),c=!0,l._container=u,u.__vue_app__=l,ki(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ze(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=xn;xn=l;try{return u()}finally{xn=f}}};return l}}let xn=null;function qr(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function at(e,t,n=!1){const r=_e||Oe;if(r||xn){const i=xn?xn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}const $l={},Fl=()=>Object.create($l),Ul=e=>Object.getPrototypeOf(e)===$l;function bh(e,t,n,r=!1){const i={},s=Fl();e.propsDefaults=Object.create(null),Bl(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ul(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function wh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ne(i),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ri(e.emitsOptions,d))continue;const g=t[d];if(c)if(oe(s,d))g!==s[d]&&(s[d]=g,l=!0);else{const v=Ve(d);i[v]=Ts(c,a,v,g,e,!1)}else g!==s[d]&&(s[d]=g,l=!0)}}}else{Bl(e,t,i,s)&&(l=!0);let u;for(const f in a)(!t||!oe(t,f)&&((u=vn(f))===f||!oe(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ts(c,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!oe(t,f)&&!0)&&(delete s[f],l=!0)}l&&vt(e.attrs,"set","")}function Bl(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Zn(c))continue;const l=t[c];let u;i&&oe(i,u=Ve(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ri(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ne(n),l=a||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ts(i,c,f,l[f],e,!oe(l,f))}}return o}function Ts(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=i;if(n in l)r=l[n];else{const u=Rr(i);r=l[n]=c.call(null,t),u()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===vn(n))&&(r=!0))}return r}const Eh=new WeakMap;function jl(e,t,n=!1){const r=n?Eh:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!Y(e)){const u=f=>{c=!0;const[d,g]=jl(f,t,!0);me(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return ge(e)&&r.set(e,Pn),Pn;if(W(s))for(let u=0;u<s.length;u++){const f=Ve(s[u]);Zo(f)&&(o[f]=ue)}else if(s)for(const u in s){const f=Ve(u);if(Zo(f)){const d=s[u],g=o[f]=W(d)||Y(d)?{type:d}:me({},d),v=g.type;let b=!1,S=!0;if(W(v))for(let C=0;C<v.length;++C){const k=v[C],x=Y(k)&&k.name;if(x==="Boolean"){b=!0;break}else x==="String"&&(S=!1)}else b=Y(v)&&v.name==="Boolean";g[0]=b,g[1]=S,(b||oe(g,"default"))&&a.push(f)}}const l=[o,a];return ge(e)&&r.set(e,l),l}function Zo(e){return e[0]!=="$"&&!Zn(e)}const Hl=e=>e[0]==="_"||e==="$stable",uo=e=>W(e)?e.map(ot):[ot(e)],Ih=(e,t,n)=>{if(t._n)return t;const r=Jd((...i)=>uo(t(...i)),n);return r._c=!1,r},Vl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Hl(i))continue;const s=e[i];if(Y(s))t[i]=Ih(i,s,r);else if(s!=null){const o=uo(s);t[i]=()=>o}}},ql=(e,t)=>{const n=uo(t);e.slots.default=()=>n},Wl=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Th=(e,t,n)=>{const r=e.slots=Fl();if(e.vnode.shapeFlag&32){const i=t._;i?(Wl(r,t,n),n&&zc(r,"_",i,!0)):Vl(t,r)}else t&&ql(e,t)},Sh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=ue;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Wl(i,t,n):(s=!t.$stable,Vl(t,i)),o=t}else t&&(ql(e,t),o={default:1});if(s)for(const a in i)!Hl(a)&&o[a]==null&&delete i[a]},Te=Uh;function Ch(e){return Ah(e)}function Ah(e,t){const n=Ii();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=Je,insertStaticContent:v}=e,b=(h,p,m,w=null,_=null,E=null,P=void 0,A=null,T=!!p.dynamicChildren)=>{if(h===p)return;h&&!rn(h,p)&&(w=y(h),Pe(h,_,E,!0),h=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:V,shapeFlag:L}=p;switch(I){case Pi:S(h,p,m,w);break;case ke:C(h,p,m,w);break;case Ji:h==null&&k(p,m,w,P);break;case Ke:D(h,p,m,w,_,E,P,A,T);break;default:L&1?F(h,p,m,w,_,E,P,A,T):L&6?Z(h,p,m,w,_,E,P,A,T):(L&64||L&128)&&I.process(h,p,m,w,_,E,P,A,T,U)}V!=null&&_&&ri(V,h&&h.ref,E,p||h,!p)},S=(h,p,m,w)=>{if(h==null)r(p.el=a(p.children),m,w);else{const _=p.el=h.el;p.children!==h.children&&l(_,p.children)}},C=(h,p,m,w)=>{h==null?r(p.el=c(p.children||""),m,w):p.el=h.el},k=(h,p,m,w)=>{[h.el,h.anchor]=v(h.children,p,m,w,h.el,h.anchor)},x=({el:h,anchor:p},m,w)=>{let _;for(;h&&h!==p;)_=d(h),r(h,m,w),h=_;r(p,m,w)},R=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),i(h),h=m;i(p)},F=(h,p,m,w,_,E,P,A,T)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),h==null?j(p,m,w,_,E,P,A,T):M(h,p,_,E,P,A,T)},j=(h,p,m,w,_,E,P,A)=>{let T,I;const{props:V,shapeFlag:L,transition:B,dirs:z}=h;if(T=h.el=o(h.type,E,V&&V.is,V),L&8?u(T,h.children):L&16&&X(h.children,T,null,w,_,Ki(h,E),P,A),z&&Xt(h,null,w,"created"),q(T,h,h.scopeId,P,w),V){for(const de in V)de!=="value"&&!Zn(de)&&s(T,de,null,V[de],E,w);"value"in V&&s(T,"value",null,V.value,E),(I=V.onVnodeBeforeMount)&&rt(I,w,h)}z&&Xt(h,null,w,"beforeMount");const te=Rh(_,B);te&&B.beforeEnter(T),r(T,p,m),((I=V&&V.onVnodeMounted)||te||z)&&Te(()=>{I&&rt(I,w,h),te&&B.enter(T),z&&Xt(h,null,w,"mounted")},_)},q=(h,p,m,w,_)=>{if(m&&g(h,m),w)for(let E=0;E<w.length;E++)g(h,w[E]);if(_){let E=_.subTree;if(p===E||Yl(E.type)&&(E.ssContent===p||E.ssFallback===p)){const P=_.vnode;q(h,P,P.scopeId,P.slotScopeIds,_.parent)}}},X=(h,p,m,w,_,E,P,A,T=0)=>{for(let I=T;I<h.length;I++){const V=h[I]=A?Ft(h[I]):ot(h[I]);b(null,V,p,m,w,_,E,P,A)}},M=(h,p,m,w,_,E,P)=>{const A=p.el=h.el;let{patchFlag:T,dynamicChildren:I,dirs:V}=p;T|=h.patchFlag&16;const L=h.props||ue,B=p.props||ue;let z;if(m&&Zt(m,!1),(z=B.onVnodeBeforeUpdate)&&rt(z,m,p,h),V&&Xt(p,h,m,"beforeUpdate"),m&&Zt(m,!0),(L.innerHTML&&B.innerHTML==null||L.textContent&&B.textContent==null)&&u(A,""),I?J(h.dynamicChildren,I,A,m,w,Ki(p,_),E):P||re(h,p,A,null,m,w,Ki(p,_),E,!1),T>0){if(T&16)Q(A,L,B,m,_);else if(T&2&&L.class!==B.class&&s(A,"class",null,B.class,_),T&4&&s(A,"style",L.style,B.style,_),T&8){const te=p.dynamicProps;for(let de=0;de<te.length;de++){const ae=te[de],Le=L[ae],ye=B[ae];(ye!==Le||ae==="value")&&s(A,ae,Le,ye,_,m)}}T&1&&h.children!==p.children&&u(A,p.children)}else!P&&I==null&&Q(A,L,B,m,_);((z=B.onVnodeUpdated)||V)&&Te(()=>{z&&rt(z,m,p,h),V&&Xt(p,h,m,"updated")},w)},J=(h,p,m,w,_,E,P)=>{for(let A=0;A<p.length;A++){const T=h[A],I=p[A],V=T.el&&(T.type===Ke||!rn(T,I)||T.shapeFlag&70)?f(T.el):m;b(T,I,V,null,w,_,E,P,!0)}},Q=(h,p,m,w,_)=>{if(p!==m){if(p!==ue)for(const E in p)!Zn(E)&&!(E in m)&&s(h,E,p[E],null,_,w);for(const E in m){if(Zn(E))continue;const P=m[E],A=p[E];P!==A&&E!=="value"&&s(h,E,A,P,_,w)}"value"in m&&s(h,"value",p.value,m.value,_)}},D=(h,p,m,w,_,E,P,A,T)=>{const I=p.el=h?h.el:a(""),V=p.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:z}=p;z&&(A=A?A.concat(z):z),h==null?(r(I,m,w),r(V,m,w),X(p.children||[],m,V,_,E,P,A,T)):L>0&&L&64&&B&&h.dynamicChildren?(J(h.dynamicChildren,B,m,_,E,P,A),(p.key!=null||_&&p===_.subTree)&&fo(h,p,!0)):re(h,p,m,V,_,E,P,A,T)},Z=(h,p,m,w,_,E,P,A,T)=>{p.slotScopeIds=A,h==null?p.shapeFlag&512?_.ctx.activate(p,m,w,P,T):N(p,m,w,_,E,P,T):ee(h,p,T)},N=(h,p,m,w,_,E,P)=>{const A=h.component=Kh(h,w,_);if(Ci(h)&&(A.ctx.renderer=U),Gh(A,!1,P),A.asyncDep){if(_&&_.registerDep(A,fe,P),!h.el){const T=A.subTree=xe(ke);C(null,T,p,m)}}else fe(A,h,p,m,_,E,P)},ee=(h,p,m)=>{const w=p.component=h.component;if($h(h,p,m))if(w.asyncDep&&!w.asyncResolved){ce(w,p,m);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},fe=(h,p,m,w,_,E,P)=>{const A=()=>{if(h.isMounted){let{next:L,bu:B,u:z,parent:te,vnode:de}=h;{const De=zl(h);if(De){L&&(L.el=de.el,ce(h,L,P)),De.asyncDep.then(()=>{h.isUnmounted||A()});return}}let ae=L,Le;Zt(h,!1),L?(L.el=de.el,ce(h,L,P)):L=de,B&&Bi(B),(Le=L.props&&L.props.onVnodeBeforeUpdate)&&rt(Le,te,L,de),Zt(h,!0);const ye=Gi(h),We=h.subTree;h.subTree=ye,b(We,ye,f(We.el),y(We),h,_,E),L.el=ye.el,ae===null&&Fh(h,ye.el),z&&Te(z,_),(Le=L.props&&L.props.onVnodeUpdated)&&Te(()=>rt(Le,te,L,de),_)}else{let L;const{el:B,props:z}=p,{bm:te,m:de,parent:ae,root:Le,type:ye}=h,We=ir(p);if(Zt(h,!1),te&&Bi(te),!We&&(L=z&&z.onVnodeBeforeMount)&&rt(L,ae,p),Zt(h,!0),B&&pe){const De=()=>{h.subTree=Gi(h),pe(B,h.subTree,h,_,null)};We&&ye.__asyncHydrate?ye.__asyncHydrate(B,h,De):De()}else{Le.ce&&Le.ce._injectChildStyle(ye);const De=h.subTree=Gi(h);b(null,De,m,w,h,_,E),p.el=De.el}if(de&&Te(de,_),!We&&(L=z&&z.onVnodeMounted)){const De=p;Te(()=>rt(L,ae,De),_)}(p.shapeFlag&256||ae&&ir(ae.vnode)&&ae.vnode.shapeFlag&256)&&h.a&&Te(h.a,_),h.isMounted=!0,p=m=w=null}};h.scope.on();const T=h.effect=new Yc(A);h.scope.off();const I=h.update=T.run.bind(T),V=h.job=T.runIfDirty.bind(T);V.i=h,V.id=h.uid,T.scheduler=()=>oo(V),Zt(h,!0),I()},ce=(h,p,m)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,wh(h,p.props,w,m),Sh(h,p.children,m),Jt(),Vo(h),Yt()},re=(h,p,m,w,_,E,P,A,T=!1)=>{const I=h&&h.children,V=h?h.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){kt(I,L,m,w,_,E,P,A,T);return}else if(B&256){ht(I,L,m,w,_,E,P,A,T);return}}z&8?(V&16&&Be(I,_,E),L!==I&&u(m,L)):V&16?z&16?kt(I,L,m,w,_,E,P,A,T):Be(I,_,E,!0):(V&8&&u(m,""),z&16&&X(L,m,w,_,E,P,A,T))},ht=(h,p,m,w,_,E,P,A,T)=>{h=h||Pn,p=p||Pn;const I=h.length,V=p.length,L=Math.min(I,V);let B;for(B=0;B<L;B++){const z=p[B]=T?Ft(p[B]):ot(p[B]);b(h[B],z,m,null,_,E,P,A,T)}I>V?Be(h,_,E,!0,!1,L):X(p,m,w,_,E,P,A,T,L)},kt=(h,p,m,w,_,E,P,A,T)=>{let I=0;const V=p.length;let L=h.length-1,B=V-1;for(;I<=L&&I<=B;){const z=h[I],te=p[I]=T?Ft(p[I]):ot(p[I]);if(rn(z,te))b(z,te,m,null,_,E,P,A,T);else break;I++}for(;I<=L&&I<=B;){const z=h[L],te=p[B]=T?Ft(p[B]):ot(p[B]);if(rn(z,te))b(z,te,m,null,_,E,P,A,T);else break;L--,B--}if(I>L){if(I<=B){const z=B+1,te=z<V?p[z].el:w;for(;I<=B;)b(null,p[I]=T?Ft(p[I]):ot(p[I]),m,te,_,E,P,A,T),I++}}else if(I>B)for(;I<=L;)Pe(h[I],_,E,!0),I++;else{const z=I,te=I,de=new Map;for(I=te;I<=B;I++){const Ne=p[I]=T?Ft(p[I]):ot(p[I]);Ne.key!=null&&de.set(Ne.key,I)}let ae,Le=0;const ye=B-te+1;let We=!1,De=0;const Vn=new Array(ye);for(I=0;I<ye;I++)Vn[I]=0;for(I=z;I<=L;I++){const Ne=h[I];if(Le>=ye){Pe(Ne,_,E,!0);continue}let nt;if(Ne.key!=null)nt=de.get(Ne.key);else for(ae=te;ae<=B;ae++)if(Vn[ae-te]===0&&rn(Ne,p[ae])){nt=ae;break}nt===void 0?Pe(Ne,_,E,!0):(Vn[nt-te]=I+1,nt>=De?De=nt:We=!0,b(Ne,p[nt],m,null,_,E,P,A,T),Le++)}const Fo=We?Ph(Vn):Pn;for(ae=Fo.length-1,I=ye-1;I>=0;I--){const Ne=te+I,nt=p[Ne],Uo=Ne+1<V?p[Ne+1].el:w;Vn[I]===0?b(null,nt,m,Uo,_,E,P,A,T):We&&(ae<0||I!==Fo[ae]?tt(nt,m,Uo,2):ae--)}}},tt=(h,p,m,w,_=null)=>{const{el:E,type:P,transition:A,children:T,shapeFlag:I}=h;if(I&6){tt(h.component.subTree,p,m,w);return}if(I&128){h.suspense.move(p,m,w);return}if(I&64){P.move(h,p,m,U);return}if(P===Ke){r(E,p,m);for(let L=0;L<T.length;L++)tt(T[L],p,m,w);r(h.anchor,p,m);return}if(P===Ji){x(h,p,m);return}if(w!==2&&I&1&&A)if(w===0)A.beforeEnter(E),r(E,p,m),Te(()=>A.enter(E),_);else{const{leave:L,delayLeave:B,afterLeave:z}=A,te=()=>r(E,p,m),de=()=>{L(E,()=>{te(),z&&z()})};B?B(E,te,de):de()}else r(E,p,m)},Pe=(h,p,m,w=!1,_=!1)=>{const{type:E,props:P,ref:A,children:T,dynamicChildren:I,shapeFlag:V,patchFlag:L,dirs:B,cacheIndex:z}=h;if(L===-2&&(_=!1),A!=null&&ri(A,null,m,h,!0),z!=null&&(p.renderCache[z]=void 0),V&256){p.ctx.deactivate(h);return}const te=V&1&&B,de=!ir(h);let ae;if(de&&(ae=P&&P.onVnodeBeforeUnmount)&&rt(ae,p,h),V&6)Mr(h.component,m,w);else{if(V&128){h.suspense.unmount(m,w);return}te&&Xt(h,null,p,"beforeUnmount"),V&64?h.type.remove(h,p,m,U,w):I&&!I.hasOnce&&(E!==Ke||L>0&&L&64)?Be(I,p,m,!1,!0):(E===Ke&&L&384||!_&&V&16)&&Be(T,p,m),w&&yn(h)}(de&&(ae=P&&P.onVnodeUnmounted)||te)&&Te(()=>{ae&&rt(ae,p,h),te&&Xt(h,null,p,"unmounted")},m)},yn=h=>{const{type:p,el:m,anchor:w,transition:_}=h;if(p===Ke){bn(m,w);return}if(p===Ji){R(h);return}const E=()=>{i(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(h.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:A}=_,T=()=>P(m,E);A?A(h.el,E,T):T()}else E()},bn=(h,p)=>{let m;for(;h!==p;)m=d(h),i(h),h=m;i(p)},Mr=(h,p,m)=>{const{bum:w,scope:_,job:E,subTree:P,um:A,m:T,a:I}=h;ea(T),ea(I),w&&Bi(w),_.stop(),E&&(E.flags|=8,Pe(P,h,p,m)),A&&Te(A,p),Te(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Be=(h,p,m,w=!1,_=!1,E=0)=>{for(let P=E;P<h.length;P++)Pe(h[P],p,m,w,_)},y=h=>{if(h.shapeFlag&6)return y(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),m=p&&p[bl];return m?d(m):p};let $=!1;const O=(h,p,m)=>{h==null?p._vnode&&Pe(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,m),p._vnode=h,$||($=!0,Vo(),vl(),$=!1)},U={p:b,um:Pe,m:tt,r:yn,mt:N,mc:X,pc:re,pbc:J,n:y,o:e};let ie,pe;return t&&([ie,pe]=t(U)),{render:O,hydrate:ie,createApp:yh(O,ie)}}function Ki({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Rh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fo(e,t,n=!1){const r=e.children,i=t.children;if(W(r)&&W(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ft(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&fo(o,a)),a.type===Pi&&(a.el=o.el)}}function Ph(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function zl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zl(t)}function ea(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const kh=Symbol.for("v-scx"),Oh=()=>at(kh);function Wr(e,t,n){return Kl(e,t,n)}function Kl(e,t,n=ue){const{immediate:r,deep:i,flush:s,once:o}=n,a=me({},n),c=t&&r||!t&&s!=="post";let l;if(mr){if(s==="sync"){const g=Oh();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Je,g.resume=Je,g.pause=Je,g}}const u=_e;a.call=(g,v,b)=>Ze(g,u,v,b);let f=!1;s==="post"?a.scheduler=g=>{Te(g,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,v)=>{v?g():oo(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=Wd(e,t,a);return mr&&(l?l.push(d):c&&d()),d}function xh(e,t,n){const r=this.proxy,i=ve(e)?e.includes(".")?Gl(r,e):()=>r[e]:e.bind(r,r);let s;Y(t)?s=t:(s=t.handler,n=t);const o=Rr(this),a=Kl(i,s.bind(r),n);return o(),a}function Gl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Lh=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${vn(t)}Modifiers`];function Dh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),o=s&&Lh(r,t.slice(7));o&&(o.trim&&(i=n.map(u=>ve(u)?u.trim():u)),o.number&&(i=n.map(ud)));let a,c=r[a=Ui(t)]||r[a=Ui(Ve(t))];!c&&s&&(c=r[a=Ui(vn(t))]),c&&Ze(c,e,6,i);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(l,e,6,i)}}function Jl(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!Y(e)){const c=l=>{const u=Jl(l,t,!0);u&&(a=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(ge(e)&&r.set(e,null),null):(W(s)?s.forEach(c=>o[c]=null):me(o,s),ge(e)&&r.set(e,o),o)}function Ri(e,t){return!e||!yi(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,vn(t))||oe(e,t))}function Gi(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:g,ctx:v,inheritAttrs:b}=e,S=ni(e);let C,k;try{if(n.shapeFlag&4){const R=i||r,F=R;C=ot(l.call(F,R,u,f,g,d,v)),k=a}else{const R=t;C=ot(R.length>1?R(f,{attrs:a,slots:o,emit:c}):R(f,null)),k=t.props?a:Nh(a)}}catch(R){or.length=0,Ti(R,e,1),C=xe(ke)}let x=C;if(k&&b!==!1){const R=Object.keys(k),{shapeFlag:F}=x;R.length&&F&7&&(s&&R.some(Ks)&&(k=Mh(k,s)),x=Kt(x,k,!1,!0))}return n.dirs&&(x=Kt(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&un(x,n.transition),C=x,ni(S),C}const Nh=e=>{let t;for(const n in e)(n==="class"||n==="style"||yi(n))&&((t||(t={}))[n]=e[n]);return t},Mh=(e,t)=>{const n={};for(const r in e)(!Ks(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $h(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ta(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Ri(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ta(r,o,l):!0:!!o;return!1}function ta(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ri(n,s))return!0}return!1}function Fh({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Yl=e=>e.__isSuspense;function Uh(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Gd(e)}const Ke=Symbol.for("v-fgt"),Pi=Symbol.for("v-txt"),ke=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),or=[];let $e=null;function Ql(e=!1){or.push($e=e?null:[])}function Bh(){or.pop(),$e=or[or.length-1]||null}let gr=1;function na(e,t=!1){gr+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function Xl(e){return e.dynamicChildren=gr>0?$e||Pn:null,Bh(),gr>0&&$e&&$e.push(e),e}function AE(e,t,n,r,i,s){return Xl(tu(e,t,n,r,i,s,!0))}function Zl(e,t,n,r,i){return Xl(xe(e,t,n,r,i,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const eu=({key:e})=>e!=null?e:null,zr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Ee(e)||Y(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function tu(e,t=null,n=null,r=0,i=null,s=e===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&eu(t),ref:t&&zr(t),scopeId:yl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return a?(ho(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),gr>0&&!o&&$e&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&$e.push(c),c}const xe=jh;function jh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===uh)&&(e=ke),si(e)){const a=Kt(e,t,!0);return n&&ho(a,n),gr>0&&!s&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(Zh(e)&&(e=e.__vccOpts),t){t=Hh(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=Qs(a)),ge(c)&&(so(c)&&!W(c)&&(c=me({},c)),t.style=Ys(c))}const o=ve(e)?1:Yl(e)?128:wl(e)?64:ge(e)?4:Y(e)?2:0;return tu(e,t,n,r,i,o,s,!0)}function Hh(e){return e?so(e)||Ul(e)?me({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=e,l=t?qh(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&eu(l),ref:t&&t.ref?n&&s?W(s)?s.concat(zr(t)):[s,zr(t)]:zr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&un(u,c.clone(u)),u}function Vh(e=" ",t=0){return xe(Pi,null,e,t)}function RE(e="",t=!1){return t?(Ql(),Zl(ke,null,e)):xe(ke,null,e)}function ot(e){return e==null||typeof e=="boolean"?xe(ke):W(e)?xe(Ke,null,e.slice()):si(e)?Ft(e):xe(Pi,null,String(e))}function Ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ho(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ho(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ul(t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Vh(t)]):n=8);e.children=t,e.shapeFlag|=n}function qh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Qs([t.class,r.class]));else if(i==="style")t.style=Ys([t.style,r.style]);else if(yi(i)){const s=t[i],o=r[i];o&&s!==o&&!(W(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function rt(e,t,n,r=null){Ze(e,t,7,[n,r])}const Wh=Ml();let zh=0;function Kh(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Wh,s={uid:zh++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jl(r,i),emitsOptions:Jl(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Dh.bind(null,s),e.ce&&e.ce(s),s}let _e=null;const Ar=()=>_e||Oe;let oi,Ss;{const e=Ii(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};oi=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),Ss=t("__VUE_SSR_SETTERS__",n=>mr=n)}const Rr=e=>{const t=_e;return oi(e),e.scope.on(),()=>{e.scope.off(),oi(t)}},ra=()=>{_e&&_e.scope.off(),oi(null)};function nu(e){return e.vnode.shapeFlag&4}let mr=!1;function Gh(e,t=!1,n=!1){t&&Ss(t);const{props:r,children:i}=e.vnode,s=nu(e);bh(e,r,s,t),Th(e,i,n);const o=s?Jh(e,t):void 0;return t&&Ss(!1),o}function Jh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,dh);const{setup:r}=n;if(r){Jt();const i=e.setupContext=r.length>1?Qh(e):null,s=Rr(e),o=Cr(r,e,0,[e.props,i]),a=Vc(o);if(Yt(),s(),(a||e.sp)&&!ir(e)&&Pl(e),a){if(o.then(ra,ra),t)return o.then(c=>{ia(e,c,t)}).catch(c=>{Ti(c,e,0)});e.asyncDep=o}else ia(e,o,t)}else ru(e,t)}function ia(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=hl(t)),ru(e,n)}let sa;function ru(e,t,n){const r=e.type;if(!e.render){if(!t&&sa&&!r.render){const i=r.template||lo(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=me(me({isCustomElement:s,delimiters:a},o),c);r.render=sa(i,l)}}e.render=r.render||Je}{const i=Rr(e);Jt();try{hh(e)}finally{Yt(),i()}}}const Yh={get(e,t){return we(e,"get",""),e[t]}};function Qh(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Yh),slots:e.slots,emit:e.emit,expose:t}}function ki(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(hl(Sr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sr)return sr[n](e)},has(t,n){return n in t||n in sr}})):e.proxy}function Xh(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Zh(e){return Y(e)&&"__vccOpts"in e}const G=(e,t)=>Vd(e,t,mr);function K(e,t,n){const r=arguments.length;return r===2?ge(t)&&!W(t)?si(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),xe(e,t,n))}const ep="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cs;const oa=typeof window!="undefined"&&window.trustedTypes;if(oa)try{Cs=oa.createPolicy("vue",{createHTML:e=>e})}catch{}const iu=Cs?e=>Cs.createHTML(e):e=>e,tp="http://www.w3.org/2000/svg",np="http://www.w3.org/1998/Math/MathML",mt=typeof document!="undefined"?document:null,aa=mt&&mt.createElement("template"),rp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?mt.createElementNS(tp,e):t==="mathml"?mt.createElementNS(np,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{aa.innerHTML=iu(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=aa.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ot="transition",Wn="animation",$n=Symbol("_vtc"),su={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ou=me({},Sl,su),ip=e=>(e.displayName="Transition",e.props=ou,e),sp=ip((e,{slots:t})=>K(Zd,au(e),t)),en=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},ca=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function au(e){const t={};for(const D in e)D in su||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,v=op(i),b=v&&v[0],S=v&&v[1],{onBeforeEnter:C,onEnter:k,onEnterCancelled:x,onLeave:R,onLeaveCancelled:F,onBeforeAppear:j=C,onAppear:q=k,onAppearCancelled:X=x}=t,M=(D,Z,N,ee)=>{D._enterCancelled=ee,Nt(D,Z?u:a),Nt(D,Z?l:o),N&&N()},J=(D,Z)=>{D._isLeaving=!1,Nt(D,f),Nt(D,g),Nt(D,d),Z&&Z()},Q=D=>(Z,N)=>{const ee=D?q:k,fe=()=>M(Z,D,N);en(ee,[Z,fe]),la(()=>{Nt(Z,D?c:s),it(Z,D?u:a),ca(ee)||ua(Z,r,b,fe)})};return me(t,{onBeforeEnter(D){en(C,[D]),it(D,s),it(D,o)},onBeforeAppear(D){en(j,[D]),it(D,c),it(D,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(D,Z){D._isLeaving=!0;const N=()=>J(D,Z);it(D,f),D._enterCancelled?(it(D,d),As()):(As(),it(D,d)),la(()=>{!D._isLeaving||(Nt(D,f),it(D,g),ca(R)||ua(D,r,S,N))}),en(R,[D,N])},onEnterCancelled(D){M(D,!1,void 0,!0),en(x,[D])},onAppearCancelled(D){M(D,!0,void 0,!0),en(X,[D])},onLeaveCancelled(D){J(D),en(F,[D])}})}function op(e){if(e==null)return null;if(ge(e))return[Yi(e.enter),Yi(e.leave)];{const t=Yi(e);return[t,t]}}function Yi(e){return fd(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[$n]||(e[$n]=new Set)).add(t)}function Nt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[$n];n&&(n.delete(t),n.size||(e[$n]=void 0))}function la(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ap=0;function ua(e,t,n,r){const i=e._endId=++ap,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=cu(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),s()},d=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function cu(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),i=r(`${Ot}Delay`),s=r(`${Ot}Duration`),o=fa(i,s),a=r(`${Wn}Delay`),c=r(`${Wn}Duration`),l=fa(a,c);let u=null,f=0,d=0;t===Ot?o>0&&(u=Ot,f=o,d=s.length):t===Wn?l>0&&(u=Wn,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Ot:Wn:null,d=u?u===Ot?s.length:c.length:0);const g=u===Ot&&/\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function fa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>da(n)+da(e[r])))}function da(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function As(){return document.body.offsetHeight}function cp(e,t,n){const r=e[$n];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ha=Symbol("_vod"),lp=Symbol("_vsh"),up=Symbol(""),fp=/(^|;)\s*display\s*:/;function dp(e,t,n){const r=e.style,i=ve(n);let s=!1;if(n&&!i){if(t)if(ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Kr(r,a,"")}else for(const o in t)n[o]==null&&Kr(r,o,"");for(const o in n)o==="display"&&(s=!0),Kr(r,o,n[o])}else if(i){if(t!==n){const o=r[up];o&&(n+=";"+o),r.cssText=n,s=fp.test(n)}}else t&&e.removeAttribute("style");ha in e&&(e[ha]=s?r.display:"",e[lp]&&(r.display="none"))}const pa=/\s*!important$/;function Kr(e,t,n){if(W(n))n.forEach(r=>Kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hp(e,t);pa.test(n)?e.setProperty(vn(r),n.replace(pa,""),"important"):e[r]=n}}const ga=["Webkit","Moz","ms"],Qi={};function hp(e,t){const n=Qi[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Qi[t]=r;r=Ei(r);for(let i=0;i<ga.length;i++){const s=ga[i]+r;if(s in e)return Qi[t]=s}return t}const ma="http://www.w3.org/1999/xlink";function va(e,t,n,r,i,s=vd(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ma,t.slice(6,t.length)):e.setAttributeNS(ma,t,n):n==null||s&&!Kc(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Gt(n)?String(n):n)}function _a(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?iu(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Kc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function pp(e,t,n,r){e.addEventListener(t,n,r)}function gp(e,t,n,r){e.removeEventListener(t,n,r)}const ya=Symbol("_vei");function mp(e,t,n,r,i=null){const s=e[ya]||(e[ya]={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=vp(t);if(r){const l=s[t]=bp(r,i);pp(e,a,l,c)}else o&&(gp(e,a,o,c),s[t]=void 0)}}const ba=/(?:Once|Passive|Capture)$/;function vp(e){let t;if(ba.test(e)){t={};let r;for(;r=e.match(ba);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vn(e.slice(2)),t]}let Xi=0;const _p=Promise.resolve(),yp=()=>Xi||(_p.then(()=>Xi=0),Xi=Date.now());function bp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(wp(r,n.value),t,5,[r])};return n.value=e,n.attached=yp(),n}function wp(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const wa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ep=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?cp(e,r,o):t==="style"?dp(e,n,r):yi(t)?Ks(t)||mp(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ip(e,t,r,o))?(_a(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&va(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ve(r))?_a(e,Ve(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),va(e,t,r,o))};function Ip(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&wa(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wa(t)&&ve(n)?!1:t in e}const lu=new WeakMap,uu=new WeakMap,ai=Symbol("_moveCb"),Ea=Symbol("_enterCb"),Tp=e=>(delete e.props.mode,e),Sp=Tp({name:"TransitionGroup",props:me({},ou,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ar(),r=Tl();let i,s;return xl(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!kp(i[0].el,n.vnode.el,o))return;i.forEach(Ap),i.forEach(Rp);const a=i.filter(Pp);As(),a.forEach(c=>{const l=c.el,u=l.style;it(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[ai]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[ai]=null,Nt(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=ne(e),a=au(o);let c=o.tag||Ke;if(i=[],s)for(let l=0;l<s.length;l++){const u=s[l];u.el&&u.el instanceof Element&&(i.push(u),un(u,pr(u,a,r,n)),lu.set(u,u.el.getBoundingClientRect()))}s=t.default?ao(t.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&un(u,pr(u,a,r,n))}return xe(c,null,s)}}}),Cp=Sp;function Ap(e){const t=e.el;t[ai]&&t[ai](),t[Ea]&&t[Ea]()}function Rp(e){uu.set(e,e.el.getBoundingClientRect())}function Pp(e){const t=lu.get(e),n=uu.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",e}}function kp(e,t,n){const r=e.cloneNode(),i=e[$n];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=cu(r);return s.removeChild(r),o}const Op=me({patchProp:Ep},rp);let Ia;function xp(){return Ia||(Ia=Ch(Op))}const fu=(...e)=>{const t=xp().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Dp(r);if(!i)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Lp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Lp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Dp(e){return ve(e)?document.querySelector(e):e}function po(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const fn=dr(!1);let Rs;function Np(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function Mp(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const du="ontouchstart"in window||window.navigator.maxTouchPoints>0;function $p(e){const t=e.toLowerCase(),n=Mp(t),r=Np(t,n),i={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.version,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(s===!0||t.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios||i.edg?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox"),(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(r.browser="blackberry",i.blackberry=!0):i.playbook?(r.browser="playbook",i.playbook=!0):i.android?(r.browser="android",i.android=!0):i.kindle?(r.browser="kindle",i.kindle=!0):i.silk&&(r.browser="silk",i.silk=!0)),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),fn.value===!0&&(Rs={is:{...i}}),du===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const Ta=navigator.userAgent||navigator.vendor||window.opera,Fp={has:{touch:!1,webStorage:!1},within:{iframe:!1}},ct={userAgent:Ta,is:$p(Ta),has:{touch:du},within:{iframe:window.self!==window.top}},Ps={install(e){const{$q:t}=e;fn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,ct),fn.value=!1}),t.platform=Bn(this)):t.platform=this}};{let e;po(ct.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Ps,ct),fn.value===!0&&(Object.assign(Ps,Rs,Fp),Rs=null)}function Pr(e){return Sr(Si(e))}function Up(e){return Sr(e)}const Oi=(e,t)=>{const n=Bn(e);for(const r in e)po(t,r,()=>n[r],i=>{n[r]=i});return t},dn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(dn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function vr(){}function PE(e){return e.button===0}function Bp(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function kE(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function hu(e){e.stopPropagation()}function ks(e){e.cancelable!==!1&&e.preventDefault()}function En(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function OE(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",ks,dn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",ks,dn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function jp(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],e[i[2]],dn[i[3]])})}function Hp(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],dn[r[3]])}),e[n]=void 0)}function Vp(e,t=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&e.apply(this,s)};r!==null?clearTimeout(r):n===!0&&e.apply(this,s),r=setTimeout(o,t)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const Zi=["sm","md","lg","xl"],{passive:Sa}=dn;var qp=Oi({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:vr,setDebounce:vr,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||ct.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=f=>{const[d,g]=s();if(g!==this.height&&(this.height=g),d!==this.width)this.width=d;else if(f!==!0)return;let v=this.sizes;this.gt.xs=d>=v.sm,this.gt.sm=d>=v.md,this.gt.md=d>=v.lg,this.gt.lg=d>=v.xl,this.lt.sm=d<v.sm,this.lt.md=d<v.md,this.lt.lg=d<v.lg,this.lt.xl=d<v.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,v=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",v!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${v}`)),this.name=v)};let a,c={},l=16;this.setSizes=f=>{Zi.forEach(d=>{f[d]!==void 0&&(c[d]=f[d])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Zi.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{Zi.forEach(g=>{d[g]&&(this.sizes[g]=d[g])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Sa),a=d>0?Vp(this.__update,d):this.__update,r.addEventListener("resize",a,Sa)},this.setDebounce(l),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};fn.value===!0?t.push(u):u()}});const be=Oi({isActive:!1,mode:!1},{__media:void 0,set(e){be.mode=e,e==="auto"?(be.__media===void 0&&(be.__media=window.matchMedia("(prefers-color-scheme: dark)"),be.__updateMedia=()=>{be.set("auto")},be.__media.addListener(be.__updateMedia)),e=be.__media.matches):be.__media!==void 0&&(be.__media.removeListener(be.__updateMedia),be.__media=void 0),be.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){be.set(be.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Wp(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let pu=!1;function zp(e){pu=e.isComposing===!0}function Kp(e){return pu===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Os(e,t){return Kp(e)===!0?!1:[].concat(t).includes(e.keyCode)}function gu(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Gp({is:e,has:t,within:n},r){const i=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const s=gu(e);s!==void 0&&i.push("platform-"+s)}if(e.nativeMobile===!0){const s=e.nativeMobileWrapper;i.push(s),i.push("native-mobile"),e.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else e.electron===!0?i.push("electron"):e.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function Jp(){const{is:e}=ct,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=gu(e);i!==void 0&&n.add(`platform-${i}`)}}ct.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),ct.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function Yp(e){for(const t in e)Wp(t,e[t])}var Qp={install(e){if(this.__installed!==!0){if(fn.value===!0)Jp();else{const{$q:t}=e;t.config.brand!==void 0&&Yp(t.config.brand);const n=Gp(ct,t.config);document.body.classList.add.apply(document.body.classList,n)}ct.is.ios===!0&&document.body.addEventListener("touchstart",vr),window.addEventListener("keydown",zp,!0)}}};const mu=()=>!0;function Xp(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Zp(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function eg(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return mu;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Xp).map(Zp)),()=>t.includes(window.location.hash)}var tg={__history:[],add:vr,remove:vr,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=ct.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=mu),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=eg(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Ca={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Aa(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Ut=Oi({__qLang:{}},{getLocale:Aa,set(e=Ca,t){const n={...e,rtl:e.rtl===!0,getLocale:Aa};{if(n.set=Ut.set,Ut.__langConfig===void 0||Ut.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Ut.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Ut.__qLang,Ut.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set"&&i!=="getLocale")}}),this.set(t||Ca))}});var ng={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const ci=Oi({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=ci.set,Object.assign(ci.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,po(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set")}}),this.set(t||ng))}}),rg="_q_",xE="_q_l_",LE="_q_pc_",DE="_q_fo_";function NE(){}const li={};let vu=!1;function ig(){vu=!0}function _r(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const Ra=[Ps,Qp,be,qp,tg,Ut,ci];function sg(e,t){const n=fu(e);n.config.globalProperties=t.config.globalProperties;const{reload:r,...i}=t._context;return Object.assign(n._context,i),n}function Pa(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function og(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(rg,n.$q),Pa(n,Ra),t.components!==void 0&&Object.values(t.components).forEach(r=>{_r(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{_r(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Pa(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&Ra.includes(r)===!1)),fn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var ag=function(e,t={}){const n={version:"2.17.4"};vu===!1?(t.config!==void 0&&Object.assign(li,t.config),n.config={...li},ig()):n.config=t.config||{},og(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},cg={name:"Quasar",version:"2.17.4",install:ag,lang:Ut,iconSet:ci};const lg=Si({name:"App",__name:"App",setup(e){return(t,n)=>{const r=lh("router-view");return Ql(),Zl(r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof document!="undefined";function _u(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ug(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&_u(e.default)}const se=Object.assign;function es(e,t){const n={};for(const r in t){const i=t[r];n[r]=et(i)?i.map(e):e(i)}return n}const ar=()=>{},et=Array.isArray,yu=/#/g,fg=/&/g,dg=/\//g,hg=/=/g,pg=/\?/g,bu=/\+/g,gg=/%5B/g,mg=/%5D/g,wu=/%5E/g,vg=/%60/g,Eu=/%7B/g,_g=/%7C/g,Iu=/%7D/g,yg=/%20/g;function go(e){return encodeURI(""+e).replace(_g,"|").replace(gg,"[").replace(mg,"]")}function bg(e){return go(e).replace(Eu,"{").replace(Iu,"}").replace(wu,"^")}function xs(e){return go(e).replace(bu,"%2B").replace(yg,"+").replace(yu,"%23").replace(fg,"%26").replace(vg,"`").replace(Eu,"{").replace(Iu,"}").replace(wu,"^")}function wg(e){return xs(e).replace(hg,"%3D")}function Eg(e){return go(e).replace(yu,"%23").replace(pg,"%3F")}function Ig(e){return e==null?"":Eg(e).replace(dg,"%2F")}function yr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Tg=/\/$/,Sg=e=>e.replace(Tg,"");function ts(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Pg(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:yr(o)}}function Cg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ka(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ag(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Fn(t.matched[r],n.matched[i])&&Tu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Tu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rg(e[n],t[n]))return!1;return!0}function Rg(e,t){return et(e)?Oa(e,t):et(t)?Oa(t,e):e===t}function Oa(e,t){return et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Pg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var br;(function(e){e.pop="pop",e.push="push"})(br||(br={}));var cr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cr||(cr={}));function kg(e){if(!e)if(An){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sg(e)}const Og=/^[^#]+#/;function xg(e,t){return e.replace(Og,"#")+t}function Lg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const xi=()=>({left:window.scrollX,top:window.scrollY});function Dg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Lg(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xa(e,t){return(history.state?history.state.position-t:-1)+e}const Ls=new Map;function Ng(e,t){Ls.set(e,t)}function Mg(e){const t=Ls.get(e);return Ls.delete(e),t}let $g=()=>location.protocol+"//"+location.host;function Su(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ka(c,"")}return ka(n,e)+r+i}function Fg(e,t,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const g=Su(e,location),v=n.value,b=t.value;let S=0;if(d){if(n.value=g,t.value=d,o&&o===v){o=null;return}S=b?d.position-b.position:0}else r(g);i.forEach(C=>{C(n.value,v,{delta:S,type:br.pop,direction:S?S>0?cr.forward:cr.back:cr.unknown})})};function c(){o=n.value}function l(d){i.push(d);const g=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return s.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(se({},d.state,{scroll:xi()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function La(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?xi():null}}function Ug(e){const{history:t,location:n}=window,r={value:Su(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:$g()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=se({},t.state,La(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=se({},i.value,t.state,{forward:c,scroll:xi()});s(u.current,u,!0);const f=se({},La(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function Bg(e){e=kg(e);const t=Ug(e),n=Fg(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=se({location:"",base:e,go:r,createHref:xg.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function jg(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bg(e)}function Hg(e){return typeof e=="string"||e&&typeof e=="object"}function Cu(e){return typeof e=="string"||typeof e=="symbol"}const Au=Symbol("");var Da;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Da||(Da={}));function Un(e,t){return se(new Error,{type:e,[Au]:!0},t)}function gt(e,t){return e instanceof Error&&Au in e&&(t==null||!!(e.type&t))}const Na="[^/]+?",Vg={sensitive:!1,strict:!1,start:!0,end:!0},qg=/[.+*?^${}()[\]/\\]/g;function Wg(e,t){const n=se({},Vg,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(qg,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:b,optional:S,regexp:C}=d;s.push({name:v,repeatable:b,optional:S});const k=C||Na;if(k!==Na){g+=10;try{new RegExp(`(${k})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+R.message)}}let x=b?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(x=S&&l.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),i+=x,g+=20,S&&(g+=-8),b&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=s[d-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:b,optional:S}=g,C=v in l?l[v]:"";if(et(C)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=et(C)?C.join("/"):C;if(!k)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function zg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ru(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=zg(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Ma(r))return 1;if(Ma(i))return-1}return i.length-r.length}function Ma(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kg={type:0,value:""},Gg=/[a-zA-Z0-9_]/;function Jg(e){if(!e)return[[]];if(e==="/")return[[Kg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Gg.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function Yg(e,t,n){const r=Wg(Jg(e.path),n),i=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Qg(e,t){const n=[],r=new Map;t=Ba({strict:!1,end:!0,sensitive:!1},t);function i(f){return r.get(f)}function s(f,d,g){const v=!g,b=Fa(f);b.aliasOf=g&&g.record;const S=Ba(t,f),C=[b];if("alias"in f){const R=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of R)C.push(Fa(se({},b,{components:g?g.record.components:b.components,path:F,aliasOf:g?g.record:b})))}let k,x;for(const R of C){const{path:F}=R;if(d&&F[0]!=="/"){const j=d.record.path,q=j[j.length-1]==="/"?"":"/";R.path=d.record.path+(F&&q+F)}if(k=Yg(R,d,S),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),v&&f.name&&!Ua(k)&&o(f.name)),Pu(k)&&c(k),b.children){const j=b.children;for(let q=0;q<j.length;q++)s(j[q],k,g&&g.children[q])}g=g||k}return x?()=>{o(x)}:ar}function o(f){if(Cu(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=em(f,n);n.splice(d,0,f),f.record.name&&!Ua(f)&&r.set(f.record.name,f)}function l(f,d){let g,v={},b,S;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Un(1,{location:f});S=g.record.name,v=se($a(d.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&$a(f.params,g.keys.map(x=>x.name))),b=g.stringify(v)}else if(f.path!=null)b=f.path,g=n.find(x=>x.re.test(b)),g&&(v=g.parse(b),S=g.record.name);else{if(g=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!g)throw Un(1,{location:f,currentLocation:d});S=g.record.name,v=se({},d.params,f.params),b=g.stringify(v)}const C=[];let k=g;for(;k;)C.unshift(k.record),k=k.parent;return{name:S,path:b,params:v,matched:C,meta:Zg(C)}}e.forEach(f=>s(f));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function $a(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Fa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Xg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Xg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ua(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zg(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Ba(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function em(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Ru(e,t[s])<0?r=s:n=s+1}const i=tm(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function tm(e){let t=e;for(;t=t.parent;)if(Pu(t)&&Ru(e,t)===0)return t}function Pu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function nm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(bu," "),o=s.indexOf("="),a=yr(o<0?s:s.slice(0,o)),c=o<0?null:yr(s.slice(o+1));if(a in t){let l=t[a];et(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function ja(e){let t="";for(let n in e){const r=e[n];if(n=wg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(r)?r.map(s=>s&&xs(s)):[r&&xs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function rm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=et(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const im=Symbol(""),Ha=Symbol(""),Li=Symbol(""),ku=Symbol(""),Ds=Symbol("");function zn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bt(e,t,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Un(4,{from:n,to:t})):d instanceof Error?c(d):Hg(d)?c(Un(2,{from:t,to:d})):(o&&r.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>e.call(r&&r.instances[i],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function ns(e,t,n,r,i=s=>s()){const s=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(_u(c)){const u=(c.__vccOpts||c)[t];u&&s.push(Bt(u,n,r,o,a,i))}else{let l=c();s.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ug(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[t];return g&&Bt(g,n,r,o,a,i)()}))}}return s}function Va(e){const t=at(Li),n=at(ku),r=G(()=>{const c=cn(e.to);return t.resolve(c)}),i=G(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Fn.bind(null,u));if(d>-1)return d;const g=qa(c[l-2]);return l>1&&qa(u)===g&&f[f.length-1].path!==g?f.findIndex(Fn.bind(null,c[l-2])):d}),s=G(()=>i.value>-1&&lm(n.params,r.value.params)),o=G(()=>i.value>-1&&i.value===n.matched.length-1&&Tu(n.params,r.value.params));function a(c={}){if(cm(c)){const l=t[cn(e.replace)?"replace":"push"](cn(e.to)).catch(ar);return e.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:G(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function sm(e){return e.length===1?e[0]:e}const om=Si({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Va,setup(e,{slots:t}){const n=Bn(Va(e)),{options:r}=at(Li),i=G(()=>({[Wa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&sm(t.default(n));return e.custom?s:K("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),am=om;function cm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function lm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!et(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wa=(e,t,n)=>e!=null?e:t!=null?t:n,um=Si({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=at(Ds),i=G(()=>e.route||r.value),s=at(Ha,0),o=G(()=>{let l=cn(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=G(()=>i.value.matched[o.value]);qr(Ha,G(()=>o.value+1)),qr(im,a),qr(Ds,i);const c=dr();return Wr(()=>[c.value,a.value,e.name],([l,u,f],[d,g,v])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Fn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return za(n.default,{Component:d,route:l});const g=f.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,S=K(d,se({},v,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return za(n.default,{Component:S,route:l})||S}}});function za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fm=um;function dm(e){const t=Qg(e.routes,e),n=e.parseQuery||nm,r=e.stringifyQuery||ja,i=e.history,s=zn(),o=zn(),a=zn(),c=Ud(xt);let l=xt;An&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=es.bind(null,y=>""+y),f=es.bind(null,Ig),d=es.bind(null,yr);function g(y,$){let O,U;return Cu(y)?(O=t.getRecordMatcher(y),U=$):U=y,t.addRoute(U,O)}function v(y){const $=t.getRecordMatcher(y);$&&t.removeRoute($)}function b(){return t.getRoutes().map(y=>y.record)}function S(y){return!!t.getRecordMatcher(y)}function C(y,$){if($=se({},$||c.value),typeof y=="string"){const p=ts(n,y,$.path),m=t.resolve({path:p.path},$),w=i.createHref(p.fullPath);return se(p,m,{params:d(m.params),hash:yr(p.hash),redirectedFrom:void 0,href:w})}let O;if(y.path!=null)O=se({},y,{path:ts(n,y.path,$.path).path});else{const p=se({},y.params);for(const m in p)p[m]==null&&delete p[m];O=se({},y,{params:f(p)}),$.params=f($.params)}const U=t.resolve(O,$),ie=y.hash||"";U.params=u(d(U.params));const pe=Cg(r,se({},y,{hash:bg(ie),path:U.path})),h=i.createHref(pe);return se({fullPath:pe,hash:ie,query:r===ja?rm(y.query):y.query||{}},U,{redirectedFrom:void 0,href:h})}function k(y){return typeof y=="string"?ts(n,y,c.value.path):se({},y)}function x(y,$){if(l!==y)return Un(8,{from:$,to:y})}function R(y){return q(y)}function F(y){return R(se(k(y),{replace:!0}))}function j(y){const $=y.matched[y.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let U=typeof O=="function"?O(y):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=k(U):{path:U},U.params={}),se({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function q(y,$){const O=l=C(y),U=c.value,ie=y.state,pe=y.force,h=y.replace===!0,p=j(O);if(p)return q(se(k(p),{state:typeof p=="object"?se({},ie,p.state):ie,force:pe,replace:h}),$||O);const m=O;m.redirectedFrom=$;let w;return!pe&&Ag(r,U,O)&&(w=Un(16,{to:m,from:U}),tt(U,U,!0,!1)),(w?Promise.resolve(w):J(m,U)).catch(_=>gt(_)?gt(_,2)?_:kt(_):re(_,m,U)).then(_=>{if(_){if(gt(_,2))return q(se({replace:h},k(_.to),{state:typeof _.to=="object"?se({},ie,_.to.state):ie,force:pe}),$||m)}else _=D(m,U,!0,h,ie);return Q(m,U,_),_})}function X(y,$){const O=x(y,$);return O?Promise.reject(O):Promise.resolve()}function M(y){const $=bn.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(y):y()}function J(y,$){let O;const[U,ie,pe]=hm(y,$);O=ns(U.reverse(),"beforeRouteLeave",y,$);for(const p of U)p.leaveGuards.forEach(m=>{O.push(Bt(m,y,$))});const h=X.bind(null,y,$);return O.push(h),Be(O).then(()=>{O=[];for(const p of s.list())O.push(Bt(p,y,$));return O.push(h),Be(O)}).then(()=>{O=ns(ie,"beforeRouteUpdate",y,$);for(const p of ie)p.updateGuards.forEach(m=>{O.push(Bt(m,y,$))});return O.push(h),Be(O)}).then(()=>{O=[];for(const p of pe)if(p.beforeEnter)if(et(p.beforeEnter))for(const m of p.beforeEnter)O.push(Bt(m,y,$));else O.push(Bt(p.beforeEnter,y,$));return O.push(h),Be(O)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),O=ns(pe,"beforeRouteEnter",y,$,M),O.push(h),Be(O))).then(()=>{O=[];for(const p of o.list())O.push(Bt(p,y,$));return O.push(h),Be(O)}).catch(p=>gt(p,8)?p:Promise.reject(p))}function Q(y,$,O){a.list().forEach(U=>M(()=>U(y,$,O)))}function D(y,$,O,U,ie){const pe=x(y,$);if(pe)return pe;const h=$===xt,p=An?history.state:{};O&&(U||h?i.replace(y.fullPath,se({scroll:h&&p&&p.scroll},ie)):i.push(y.fullPath,ie)),c.value=y,tt(y,$,O,h),kt()}let Z;function N(){Z||(Z=i.listen((y,$,O)=>{if(!Mr.listening)return;const U=C(y),ie=j(U);if(ie){q(se(ie,{replace:!0,force:!0}),U).catch(ar);return}l=U;const pe=c.value;An&&Ng(xa(pe.fullPath,O.delta),xi()),J(U,pe).catch(h=>gt(h,12)?h:gt(h,2)?(q(se(k(h.to),{force:!0}),U).then(p=>{gt(p,20)&&!O.delta&&O.type===br.pop&&i.go(-1,!1)}).catch(ar),Promise.reject()):(O.delta&&i.go(-O.delta,!1),re(h,U,pe))).then(h=>{h=h||D(U,pe,!1),h&&(O.delta&&!gt(h,8)?i.go(-O.delta,!1):O.type===br.pop&&gt(h,20)&&i.go(-1,!1)),Q(U,pe,h)}).catch(ar)}))}let ee=zn(),fe=zn(),ce;function re(y,$,O){kt(y);const U=fe.list();return U.length?U.forEach(ie=>ie(y,$,O)):console.error(y),Promise.reject(y)}function ht(){return ce&&c.value!==xt?Promise.resolve():new Promise((y,$)=>{ee.add([y,$])})}function kt(y){return ce||(ce=!y,N(),ee.list().forEach(([$,O])=>y?O(y):$()),ee.reset()),y}function tt(y,$,O,U){const{scrollBehavior:ie}=e;if(!An||!ie)return Promise.resolve();const pe=!O&&Mg(xa(y.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return gl().then(()=>ie(y,$,pe)).then(h=>h&&Dg(h)).catch(h=>re(h,y,$))}const Pe=y=>i.go(y);let yn;const bn=new Set,Mr={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:C,options:e,push:R,replace:F,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:ht,install(y){const $=this;y.component("RouterLink",am),y.component("RouterView",fm),y.config.globalProperties.$router=$,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(c)}),An&&!yn&&c.value===xt&&(yn=!0,R(i.location).catch(ie=>{}));const O={};for(const ie in xt)Object.defineProperty(O,ie,{get:()=>c.value[ie],enumerable:!0});y.provide(Li,$),y.provide(ku,ul(O)),y.provide(Ds,c);const U=y.unmount;bn.add(y),y.unmount=function(){bn.delete(y),bn.size<1&&(l=xt,Z&&Z(),Z=null,c.value=xt,yn=!1,ce=!1),U()}}};function Be(y){return y.reduce(($,O)=>$.then(()=>M(O)),Promise.resolve())}return Mr}function hm(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>Fn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Fn(l,c))||i.push(c))}return[n,r,i]}function ME(){return at(Li)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ou(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new gm;const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mm=function(e){const t=Ou(e);return xu.encodeByteArray(t,!0)},Lu=function(e){return mm(e).replace(/\./g,"")},Du=function(e){try{return xu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=()=>vm().__FIREBASE_DEFAULTS__,ym=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bm=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Du(e[1]);return t&&JSON.parse(t)},mo=()=>{try{return _m()||ym()||bm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wm=e=>{var t,n;return(n=(t=mo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Nu=()=>{var e;return(e=mo())===null||e===void 0?void 0:e.config},Mu=e=>{var t;return(t=mo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Tm(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function $u(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cm(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Fu(){try{return typeof indexedDB=="object"}catch{return!1}}function Uu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Am(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="FirebaseError";class dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rm,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Pm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,r)}}function Pm(e,t){return e.replace(km,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const km=/\{\$([^}]+)}/g;function Om(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ka(s)&&Ka(o)){if(!wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ka(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Qn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function xm(e,t){const n=new Lm(e,t);return n.subscribe.bind(n)}class Lm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=rs),i.error===void 0&&(i.error=rs),i.complete===void 0&&(i.complete=rs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function rs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=1e3,Mm=2,$m=4*60*60*1e3,Fm=.5;function Ga(e,t=Nm,n=Mm){const r=t*Math.pow(n,e),i=Math.round(Fm*r*(Math.random()-.5)*2);return Math.min($m,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){return e&&e._delegate?e._delegate:e}class ft{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Em;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jm(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bm(e){return e===nn?void 0:e}function jm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Um(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(le||(le={}));const Vm={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},qm=le.INFO,Wm={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},zm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vo{constructor(t){this.name=t,this._logLevel=qm,this._logHandler=zm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in le))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...t),this._logHandler(this,le.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...t),this._logHandler(this,le.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,le.INFO,...t),this._logHandler(this,le.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,le.WARN,...t),this._logHandler(this,le.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...t),this._logHandler(this,le.ERROR,...t)}}const Km=(e,t)=>t.some(n=>e instanceof n);let Ja,Ya;function Gm(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jm(){return Ya||(Ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bu=new WeakMap,Ns=new WeakMap,ju=new WeakMap,is=new WeakMap,_o=new WeakMap;function Ym(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Wt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bu.set(n,e)}).catch(()=>{}),_o.set(t,e),t}function Qm(e){if(Ns.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ns.set(e,t)}let Ms={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ns.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ju.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xm(e){Ms=e(Ms)}function Zm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ss(this),t,...n);return ju.set(r,t.sort?t.sort():[t]),Wt(r)}:Jm().includes(e)?function(...t){return e.apply(ss(this),t),Wt(Bu.get(this))}:function(...t){return Wt(e.apply(ss(this),t))}}function ev(e){return typeof e=="function"?Zm(e):(e instanceof IDBTransaction&&Qm(e),Km(e,Gm())?new Proxy(e,Ms):e)}function Wt(e){if(e instanceof IDBRequest)return Ym(e);if(is.has(e))return is.get(e);const t=ev(e);return t!==e&&(is.set(e,t),_o.set(t,e)),t}const ss=e=>_o.get(e);function Hu(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wt(o.result),c.oldVersion,c.newVersion,Wt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tv=["get","getKey","getAll","getAllKeys","count"],nv=["put","add","delete","clear"],os=new Map;function Qa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(os.get(t))return os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=nv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tv.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return os.set(t,s),s}Xm(e=>({...e,get:(t,n,r)=>Qa(t,n)||e.get(t,n,r),has:(t,n)=>!!Qa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $s="@firebase/app",Xa="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new vo("@firebase/app"),sv="@firebase/app-compat",ov="@firebase/analytics-compat",av="@firebase/analytics",cv="@firebase/app-check-compat",lv="@firebase/app-check",uv="@firebase/auth",fv="@firebase/auth-compat",dv="@firebase/database",hv="@firebase/data-connect",pv="@firebase/database-compat",gv="@firebase/functions",mv="@firebase/functions-compat",vv="@firebase/installations",_v="@firebase/installations-compat",yv="@firebase/messaging",bv="@firebase/messaging-compat",wv="@firebase/performance",Ev="@firebase/performance-compat",Iv="@firebase/remote-config",Tv="@firebase/remote-config-compat",Sv="@firebase/storage",Cv="@firebase/storage-compat",Av="@firebase/firestore",Rv="@firebase/vertexai",Pv="@firebase/firestore-compat",kv="firebase",Ov="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]",xv={[$s]:"fire-core",[sv]:"fire-core-compat",[av]:"fire-analytics",[ov]:"fire-analytics-compat",[lv]:"fire-app-check",[cv]:"fire-app-check-compat",[uv]:"fire-auth",[fv]:"fire-auth-compat",[dv]:"fire-rtdb",[hv]:"fire-data-connect",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[mv]:"fire-fn-compat",[vv]:"fire-iid",[_v]:"fire-iid-compat",[yv]:"fire-fcm",[bv]:"fire-fcm-compat",[wv]:"fire-perf",[Ev]:"fire-perf-compat",[Iv]:"fire-rc",[Tv]:"fire-rc-compat",[Sv]:"fire-gcs",[Cv]:"fire-gcs-compat",[Av]:"fire-fst",[Pv]:"fire-fst-compat",[Rv]:"fire-vertex","fire-js":"fire-js",[kv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Map,Lv=new Map,Us=new Map;function Za(e,t){try{e.container.addComponent(t)}catch(n){Tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(Us.has(t))return Tt.debug(`There were multiple attempts to register component ${t}.`),!1;Us.set(t,e);for(const n of ui.values())Za(n,e);for(const n of Lv.values())Za(n,e);return!0}function jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ge(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},zt=new _n("app","Firebase",Dv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=Ov;function Vu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Nu()),!n)throw zt.create("no-options");const s=ui.get(i);if(s){if(wr(n,s.options)&&wr(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new Hm(i);for(const c of Us.values())o.addComponent(c);const a=new Nv(n,r,o);return ui.set(i,a),a}function qu(e=Fs){const t=ui.get(e);if(!t&&e===Fs&&Nu())return Vu();if(!t)throw zt.create("no-app",{appName:e});return t}function lt(e,t,n){var r;let i=(r=xv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}St(new ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firebase-heartbeat-database",$v=1,Er="firebase-heartbeat-store";let as=null;function Wu(){return as||(as=Hu(Mv,$v,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Er)}catch(n){console.warn(n)}}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),as}async function Fv(e){try{const n=(await Wu()).transaction(Er),r=await n.objectStore(Er).get(zu(e));return await n.done,r}catch(t){if(t instanceof dt)Tt.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(n.message)}}}async function ec(e,t){try{const r=(await Wu()).transaction(Er,"readwrite");await r.objectStore(Er).put(t,zu(e)),await r.done}catch(n){if(n instanceof dt)Tt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(r.message)}}}function zu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1024,Bv=30*24*60*60*1e3;class jv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tc(),{heartbeatsToSend:r,unsentEntries:i}=Hv(this._heartbeatsCache.heartbeats),s=Lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tt.warn(n),""}}}function tc(){return new Date().toISOString().substring(0,10)}function Hv(e,t=Uv){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fu()?Uu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function nc(e){return Lu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(e){St(new ft("platform-logger",t=>new rv(t),"PRIVATE")),St(new ft("heartbeat",t=>new jv(t),"PRIVATE")),lt($s,Xa,e),lt($s,Xa,"esm2017"),lt("fire-js","")}qv("");function yo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wv=Ku,Gu=new _n("auth","Firebase",Ku());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new vo("@firebase/auth");function zv(e,...t){fi.logLevel<=le.WARN&&fi.warn(`Auth (${Or}): ${e}`,...t)}function Gr(e,...t){fi.logLevel<=le.ERROR&&fi.error(`Auth (${Or}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e,...t){throw wo(e,...t)}function Xe(e,...t){return wo(e,...t)}function bo(e,t,n){const r=Object.assign(Object.assign({},Wv()),{[t]:n});return new _n("auth","Firebase",r).create(t,{appName:e.name})}function It(e){return bo(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&qe(e,"argument-error"),bo(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Gu.create(e,...t)}function H(e,t,...n){if(!e)throw wo(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Gr(t),new Error(t)}function Ct(e,t){e||bt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Gv(){return rc()==="http:"||rc()==="https:"}function rc(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gv()||$u()||"connection"in navigator)?navigator.onLine:!0}function Yv(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=Im()||Sm()}get(){return Jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new xr(3e4,6e4);function Rt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pt(e,t,n,r,i={}){return Yu(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=kr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},s);return Tm()||(l.referrerPolicy="no-referrer"),Ju.fetch()(Qu(e,e.config.apiHost,n,a),l)})}async function Yu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qv),t);try{const i=new e_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hr(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bo(e,u,l);qe(e,u)}}catch(i){if(i instanceof dt)throw i;qe(e,"network-request-failed",{message:String(i)})}}async function Lr(e,t,n,r,i={}){const s=await Pt(e,t,n,r,i);return"mfaPendingCredential"in s&&qe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Qu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Eo(e.config,i):`${e.config.apiScheme}://${i}`}function Zv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),Xv.get())})}}function Hr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(e,t,r);return i.customData._tokenResponse=n,i}function ic(e){return e!==void 0&&e.enterprise!==void 0}class t_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Zv(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function n_(e,t){return Pt(e,"GET","/v2/recaptchaConfig",Rt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(e,t){return Pt(e,"POST","/v1/accounts:delete",t)}async function Xu(e,t){return Pt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function i_(e,t=!1){const n=Ue(e),r=await n.getIdToken(t),i=Io(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lr(cs(i.auth_time)),issuedAtTime:lr(cs(i.iat)),expirationTime:lr(cs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cs(e){return Number(e)*1e3}function Io(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Du(n);return i?JSON.parse(i):(Gr("Failed to decode base64 JWT payload"),null)}catch(i){return Gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sc(e){const t=Io(e);return H(t,"internal-error"),H(typeof t.exp!="undefined","internal-error"),H(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof dt&&s_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function s_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ir(e,Xu(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Zu(s.providerUserInfo):[],a=c_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new js(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function a_(e){const t=Ue(e);await di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function c_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zu(e){return e.map(t=>{var{providerId:n}=t,r=yo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e,t){const n=await Yu(e,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Qu(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ju.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function u_(e,t){return Pt(e,"POST","/v2/accounts:revokeToken",Rt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken!="undefined","internal-error"),H(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):sc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=sc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ln;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){H(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class wt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=yo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new js(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return i_(this,t)}reload(){return a_(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(It(this.auth));const t=await this.getIdToken();return await Ir(this,r_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:R,isAnonymous:F,providerData:j,stsTokenManager:q}=n;H(x&&q,t,"internal-error");const X=Ln.fromJSON(this.name,q);H(typeof x=="string",t,"internal-error"),Lt(f,t.name),Lt(d,t.name),H(typeof R=="boolean",t,"internal-error"),H(typeof F=="boolean",t,"internal-error"),Lt(g,t.name),Lt(v,t.name),Lt(b,t.name),Lt(S,t.name),Lt(C,t.name),Lt(k,t.name);const M=new wt({uid:x,auth:t,email:d,emailVerified:R,displayName:f,isAnonymous:F,photoURL:v,phoneNumber:g,tenantId:b,stsTokenManager:X,createdAt:C,lastLoginAt:k});return j&&Array.isArray(j)&&(M.providerData=j.map(J=>Object.assign({},J))),S&&(M._redirectEventId=S),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ln;i.updateFromServerResponse(n);const s=new wt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await di(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zu(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ln;a.updateFromIdToken(r);const c=new wt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new js(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map;function Et(e){Ct(e instanceof Function,"Expected a class definition");let t=oc.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,oc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ef.type="NONE";const ac=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t,n){return`firebase:${e}:${t}:${n}`}class Dn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?wt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Dn(Et(ac),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Et(ac);const o=Jr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=wt._fromJSON(t,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Dn(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Dn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(af(t))return"Blackberry";if(cf(t))return"Webos";if(nf(t))return"Safari";if((t.includes("chrome/")||rf(t))&&!t.includes("edge/"))return"Chrome";if(of(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(e=Re()){return/firefox\//i.test(e)}function nf(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rf(e=Re()){return/crios\//i.test(e)}function sf(e=Re()){return/iemobile/i.test(e)}function of(e=Re()){return/android/i.test(e)}function af(e=Re()){return/blackberry/i.test(e)}function cf(e=Re()){return/webos/i.test(e)}function To(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function f_(e=Re()){var t;return To(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function d_(){return Cm()&&document.documentMode===10}function lf(e=Re()){return To(e)||of(e)||cf(e)||af(e)||/windows phone/i.test(e)||sf(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(e,t=[]){let n;switch(e){case"Browser":n=cc(Re());break;case"Worker":n=`${cc(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(e,t={}){return Pt(e,"GET","/v2/passwordPolicy",Rt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=6;class m_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:g_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lc(this),this.idTokenSubscription=new lc(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xu(this,{idToken:t}),r=await wt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await di(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Yv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ge(this.app))return Promise.reject(It(this));const n=t?Ue(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ge(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await p_(this),n=new m_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _n("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await u_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&zv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qt(e){return Ue(e)}class lc{constructor(t){this.auth=t,this.observer=null,this.addObserver=xm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function __(e){Di=e}function ff(e){return Di.loadJS(e)}function y_(){return Di.recaptchaEnterpriseScript}function b_(){return Di.gapiScript}function w_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class E_{constructor(){this.enterprise=new I_}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class I_{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const T_="recaptcha-enterprise",df="NO_RECAPTCHA";class S_{constructor(t){this.type=T_,this.auth=Qt(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{n_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new t_(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;ic(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(df)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new E_().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ic(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=y_();c.length!==0&&(c+=a),ff(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Kn(e,t,n,r=!1,i=!1){const s=new S_(e);let o;if(i)o=df;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hs(e,t,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Kn(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Kn(e,t,n,n==="getOobCode");return r(e,c)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Kn(e,t,n);return r(e,a).catch(async c=>{var l;if(((l=e._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await Kn(e,t,n,!1,!0);return r(e,u)}return Promise.reject(c)})}else{const a=await Kn(e,t,n,!1,!0);return r(e,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(e,t){const n=jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wr(s,t!=null?t:{}))return i;qe(i,"already-initialized")}return n.initialize({options:t})}function A_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function R_(e,t,n){const r=Qt(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hf(t),{host:o,port:a}=P_(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||k_()}function hf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function P_(e){const t=hf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uc(o)}}}function uc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function k_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function O_(e,t){return Pt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(e,t){return Lr(e,"POST","/v1/accounts:signInWithPassword",Rt(e,t))}async function L_(e,t){return Pt(e,"POST","/v1/accounts:sendOobCode",Rt(e,t))}async function D_(e,t){return L_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(e,t){return Lr(e,"POST","/v1/accounts:signInWithEmailLink",Rt(e,t))}async function M_(e,t){return Lr(e,"POST","/v1/accounts:signInWithEmailLink",Rt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends So{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Tr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Tr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(t,n,"signInWithPassword",x_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return N_(t,{email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(t,r,"signUpPassword",O_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return M_(t,{idToken:n,email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t){return Lr(e,"POST","/v1/accounts:signInWithIdp",Rt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="http://localhost";class hn extends So{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=yo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Nn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Nn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nn(t,n)}buildRequest(){const t={requestUri:$_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=kr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(e){const t=Yn(Qn(e)).link,n=t?Yn(Qn(t)).deep_link_id:null,r=Yn(Qn(e)).deep_link_id;return(r?Yn(Qn(r)).link:null)||r||n||t||e}class Co{constructor(t){var n,r,i,s,o,a;const c=Yn(Qn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=F_((i=c.mode)!==null&&i!==void 0?i:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=U_(t);try{return new Co(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(t,n){return Tr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Co.parseLink(n);return H(r,"argument-error"),Tr._fromEmailAndCode(t,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Ao{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Dr{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Dr{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Dr{constructor(){super("twitter.com")}static credential(t,n){return hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(e,t){return Lr(e,"POST","/v1/accounts:signUp",Rt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await wt._fromIdTokenResponse(t,r,i),o=fc(r);return new pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=fc(r);return new pn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function fc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends dt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hi(t,n,r,i)}}function pf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hi._fromErrorAndOperation(e,s,t,r):s})}async function j_(e,t,n=!1){const r=await Ir(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(e,t,n=!1){const{auth:r}=e;if(Ge(r.app))return Promise.reject(It(r));const i="reauthenticate";try{const s=await Ir(e,pf(r,i,t,e),n);H(s.idToken,r,"internal-error");const o=Io(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),pn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(e,t,n=!1){if(Ge(e.app))return Promise.reject(It(e));const r="signIn",i=await pf(e,r,t),s=await pn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function V_(e,t){return gf(Qt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(e,t,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(e){const t=Qt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $E(e,t,n){if(Ge(e.app))return Promise.reject(It(e));const r=Qt(e),o=await Hs(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B_,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&mf(e),c}),a=await pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function FE(e,t,n){return Ge(e.app)?Promise.reject(It(e)):V_(Ue(e),Hn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mf(e),r})}async function UE(e,t){const n=Ue(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&q_(n.auth,i,t);const{email:s}=await D_(n.auth,i);s!==e.email&&await e.reload()}function W_(e,t,n,r){return Ue(e).onIdTokenChanged(t,n,r)}function z_(e,t,n){return Ue(e).beforeAuthStateChanged(t,n)}function K_(e,t,n,r){return Ue(e).onAuthStateChanged(t,n,r)}function BE(e){return Ue(e).signOut()}const pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=1e3,J_=10;class _f extends vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);d_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,J_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}_f.type="LOCAL";const Y_=_f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yf.type="SESSION";const bf=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ni(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Q_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ro("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function Z_(e){ut().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return typeof ut().WorkerGlobalScope!="undefined"&&typeof ut().importScripts=="function"}async function ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ny(){return wf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="firebaseLocalStorageDb",ry=1,gi="firebaseLocalStorage",If="fbase_key";class Nr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mi(e,t){return e.transaction([gi],t?"readwrite":"readonly").objectStore(gi)}function iy(){const e=indexedDB.deleteDatabase(Ef);return new Nr(e).toPromise()}function Vs(){const e=indexedDB.open(Ef,ry);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(gi,{keyPath:If})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(gi)?t(r):(r.close(),await iy(),t(await Vs()))})})}async function dc(e,t,n){const r=Mi(e,!0).put({[If]:t,value:n});return new Nr(r).toPromise()}async function sy(e,t){const n=Mi(e,!1).get(t),r=await new Nr(n).toPromise();return r===void 0?null:r.value}function hc(e,t){const n=Mi(e,!0).delete(t);return new Nr(n).toPromise()}const oy=800,ay=3;class Tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ay)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(ny()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ey(),!this.activeServiceWorker)return;this.sender=new X_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vs();return await dc(t,pi,"1"),await hc(t,pi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>sy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Mi(i,!1).getAll();return new Nr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tf.type="LOCAL";const cy=Tf;new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(e,t){return t?Et(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends So{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ly(e){return gf(e.auth,new Po(e),e.bypassAuthState)}function uy(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),H_(n,new Po(e),e.bypassAuthState)}async function fy(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),j_(n,new Po(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ly;case"linkViaPopup":case"linkViaRedirect":return fy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:qe(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new xr(2e3,1e4);async function jE(e,t,n){if(Ge(e.app))return Promise.reject(Xe(e,"operation-not-supported-in-this-environment"));const r=Qt(e);Kv(e,t,Ao);const i=Sf(r,n);return new sn(r,"signInViaPopup",t,i).executeNotNull()}class sn extends Cf{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dy.get())};t()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="pendingRedirect",Yr=new Map;class py extends Cf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yr.get(this.auth._key());if(!t){try{const r=await gy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yr.set(this.auth._key(),t)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gy(e,t){const n=_y(t),r=vy(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function my(e,t){Yr.set(e._key(),t)}function vy(e){return Et(e._redirectPersistence)}function _y(e){return Jr(hy,e.config.apiKey,e.name)}async function yy(e,t,n=!1){if(Ge(e.app))return Promise.reject(It(e));const r=Qt(e),i=Sf(r,t),o=await new py(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=10*60*1e3;class wy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ey(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Af(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=by&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(t))}saveEventToCache(t){this.cachedEventUids.add(pc(t)),this.lastProcessedEventTime=Date.now()}}function pc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Af({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ey(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Af(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(e,t={}){return Pt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sy=/^https?/;async function Cy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Iy(e);for(const n of t)try{if(Ay(n))return}catch{}qe(e,"unauthorized-domain")}function Ay(e){const t=Bs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sy.test(n))return!1;if(Ty.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new xr(3e4,6e4);function gc(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Py(e){return new Promise((t,n)=>{var r,i,s;function o(){gc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gc(),n(Xe(e,"network-request-failed"))},timeout:Ry.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)o();else{const a=w_("iframefcb");return ut()[a]=()=>{gapi.load?o():n(Xe(e,"network-request-failed"))},ff(`${b_()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Qr=null,t})}let Qr=null;function ky(e){return Qr=Qr||Py(e),Qr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new xr(5e3,15e3),xy="__/auth/iframe",Ly="emulator/auth/iframe",Dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function My(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Eo(t,Ly):`https://${e.config.authDomain}/${xy}`,r={apiKey:t.apiKey,appName:e.name,v:Or},i=Ny.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${kr(r).slice(1)}`}async function $y(e){const t=await ky(e),n=ut().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:My(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(e,"network-request-failed"),a=ut().setTimeout(()=>{s(o)},Oy.get());function c(){ut().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uy=500,By=600,jy="_blank",Hy="http://localhost";class mc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vy(e,t,n,r=Uy,i=By){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Fy),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Re().toLowerCase();n&&(a=rf(l)?jy:n),tf(l)&&(t=t||Hy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(f_(l)&&a!=="_self")return qy(t||"",a),new mc(null);const f=window.open(t||"",a,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new mc(f)}function qy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="__/auth/handler",zy="emulator/auth/handler",Ky=encodeURIComponent("fac");async function vc(e,t,n,r,i,s){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(t instanceof Ao){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Om(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))o[u]=f}if(t instanceof Dr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Ky}=${encodeURIComponent(c)}`:"";return`${Gy(e)}?${kr(a).slice(1)}${l}`}function Gy({config:e}){return e.emulator?Eo(e,zy):`https://${e.authDomain}/${Wy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="webStorageSupport";class Jy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=yy,this._overrideRedirectResult=my}async _openPopup(t,n,r,i){var s;Ct((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vc(t,n,r,Bs(),i);return Vy(t,o,Ro())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await vc(t,n,r,Bs(),i);return Z_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ct(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await $y(t),r=new wy(t);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ls,{type:ls},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ls];o!==void 0&&n(!!o),qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lf()||nf()||To()}}const Yy=Jy;var _c="@firebase/auth",yc="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zy(e){St(new ft("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(e)},l=new v_(r,i,s,c);return A_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new ft("auth-internal",t=>{const n=Qt(t.getProvider("auth").getImmediate());return(r=>new Qy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(_c,yc,Xy(e)),lt(_c,yc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=5*60,tb=Mu("authIdTokenMaxAge")||eb;let bc=null;const nb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tb)return;const i=n==null?void 0:n.token;bc!==i&&(bc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rb(e=qu()){const t=jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=C_(e,{popupRedirectResolver:Yy,persistence:[cy,Y_,bf]}),r=Mu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nb(s.toString());z_(n,o,()=>o(n.currentUser)),W_(n,a=>o(a))}}const i=wm("auth");return i&&R_(n,`http://${i}`),n}function ib(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}__({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ib().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zy("Browser");var sb="firebase",ob="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(sb,ob,"app");const Rf="@firebase/installations",ko="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=1e4,kf=`w:${ko}`,Of="FIS_v2",ab="https://firebaseinstallations.googleapis.com/v1",cb=60*60*1e3,lb="installations",ub="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gn=new _n(lb,ub,fb);function xf(e){return e instanceof dt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf({projectId:e}){return`${ab}/projects/${e}/installations`}function Df(e){return{token:e.token,requestStatus:2,expiresIn:hb(e.expiresIn),creationTime:Date.now()}}async function Nf(e,t){const r=(await t.json()).error;return gn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function db(e,{refreshToken:t}){const n=Mf(e);return n.append("Authorization",pb(t)),n}async function $f(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hb(e){return Number(e.replace("s","000"))}function pb(e){return`${Of} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Lf(e),i=Mf(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Of,appId:e.appId,sdkVersion:kf},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await $f(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Df(l.authToken)}}else throw await Nf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=/^[cdef][\w-]{21}$/,qs="";function _b(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=yb(e);return vb.test(n)?n:qs}catch{return qs}}function yb(e){return mb(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;function Bf(e,t){const n=$i(e);jf(n,t),bb(n,t)}function jf(e,t){const n=Uf.get(e);if(!!n)for(const r of n)r(t)}function bb(e,t){const n=wb();n&&n.postMessage({key:e,fid:t}),Eb()}let on=null;function wb(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=e=>{jf(e.data.key,e.data.fid)}),on}function Eb(){Uf.size===0&&on&&(on.close(),on=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="firebase-installations-database",Tb=1,mn="firebase-installations-store";let us=null;function Oo(){return us||(us=Hu(Ib,Tb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mn)}}})),us}async function mi(e,t){const n=$i(e),i=(await Oo()).transaction(mn,"readwrite"),s=i.objectStore(mn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Bf(e,t.fid),t}async function Hf(e){const t=$i(e),r=(await Oo()).transaction(mn,"readwrite");await r.objectStore(mn).delete(t),await r.done}async function Fi(e,t){const n=$i(e),i=(await Oo()).transaction(mn,"readwrite"),s=i.objectStore(mn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Bf(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(e){let t;const n=await Fi(e.appConfig,r=>{const i=Sb(r),s=Cb(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===qs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Sb(e){const t=e||{fid:_b(),registrationStatus:0};return Vf(t)}function Cb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ab(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Rb(e)}:{installationEntry:t}}async function Ab(e,t){try{const n=await gb(e,t);return mi(e.appConfig,n)}catch(n){throw xf(n)&&n.customData.serverCode===409?await Hf(e.appConfig):await mi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Rb(e){let t=await wc(e.appConfig);for(;t.registrationStatus===1;)await Ff(100),t=await wc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xo(e);return r||n}return t}function wc(e){return Fi(e,t=>{if(!t)throw gn.create("installation-not-found");return Vf(t)})}function Vf(e){return Pb(e)?{fid:e.fid,registrationStatus:0}:e}function Pb(e){return e.registrationStatus===1&&e.registrationTime+Pf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb({appConfig:e,heartbeatServiceProvider:t},n){const r=Ob(e,n),i=db(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:kf,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await $f(()=>fetch(r,a));if(c.ok){const l=await c.json();return Df(l)}else throw await Nf("Generate Auth Token",c)}function Ob(e,{fid:t}){return`${Lf(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(e,t=!1){let n;const r=await Fi(e.appConfig,s=>{if(!qf(s))throw gn.create("not-registered");const o=s.authToken;if(!t&&Db(o))return s;if(o.requestStatus===1)return n=xb(e,t),s;{if(!navigator.onLine)throw gn.create("app-offline");const a=Mb(s);return n=Lb(e,a),a}});return n?await n:r.authToken}async function xb(e,t){let n=await Ec(e.appConfig);for(;n.authToken.requestStatus===1;)await Ff(100),n=await Ec(e.appConfig);const r=n.authToken;return r.requestStatus===0?Lo(e,t):r}function Ec(e){return Fi(e,t=>{if(!qf(t))throw gn.create("not-registered");const n=t.authToken;return $b(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Lb(e,t){try{const n=await kb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await mi(e.appConfig,r),n}catch(n){if(xf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await mi(e.appConfig,r)}throw n}}function qf(e){return e!==void 0&&e.registrationStatus===2}function Db(e){return e.requestStatus===2&&!Nb(e)}function Nb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+cb}function Mb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function $b(e){return e.requestStatus===1&&e.requestTime+Pf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(e){const t=e,{installationEntry:n,registrationPromise:r}=await xo(t);return r?r.catch(console.error):Lo(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(e,t=!1){const n=e;return await Bb(n),(await Lo(n,t)).token}async function Bb(e){const{registrationPromise:t}=await xo(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(e){if(!e||!e.options)throw fs("App Configuration");if(!e.name)throw fs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw fs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function fs(e){return gn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="installations",Hb="installations-internal",Vb=e=>{const t=e.getProvider("app").getImmediate(),n=jb(t),r=jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qb=e=>{const t=e.getProvider("app").getImmediate(),n=jn(t,Wf).getImmediate();return{getId:()=>Fb(n),getToken:i=>Ub(n,i)}};function Wb(){St(new ft(Wf,Vb,"PUBLIC")),St(new ft(Hb,qb,"PRIVATE"))}Wb();lt(Rf,ko);lt(Rf,ko,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="analytics",zb="firebase_id",Kb="origin",Gb=60*1e3,Jb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Do="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new vo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new _n("analytics","Analytics",Yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(e){if(!e.startsWith(Do)){const t=Fe.create("invalid-gtag-resource",{gtagURL:e});return Ae.warn(t.message),""}return e}function zf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Xb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Zb(e,t){const n=Xb("firebase-js-sdk-policy",{createScriptURL:Qb}),r=document.createElement("script"),i=`${Do}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ew(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function tw(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await zf(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){Ae.error(a)}e("config",i,s)}async function nw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await zf(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ae.error(s)}}function rw(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await nw(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await tw(e,t,n,r,a,c)}else if(s==="consent"){const[a,c]=o;e("consent",a,c)}else if(s==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Ae.error(a)}}return i}function iw(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rw(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function sw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Do)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=30,aw=1e3;class cw{constructor(t={},n=aw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kf=new cw;function lw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function uw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:lw(r)},s=Jb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function fw(e,t=Kf,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Fe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Fe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new pw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Gb),Gf({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Gf(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Kf){var s;const{appId:o,measurementId:a}=e;try{await dw(r,t)}catch(c){if(a)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await uw(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!hw(l)){if(i.deleteThrottleMetadata(o),a)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ga(n,i.intervalMillis,ow):Ga(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ae.debug(`Calling attemptFetch again in ${u} millis`),Gf(e,f,r,i)}}function dw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Fe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function hw(e){if(!(e instanceof dt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class pw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function gw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}async function mw(e,t){const n=await e;window[`ga-disable-${n}`]=!t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(){if(Fu())try{await Uu()}catch(e){return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _w(e,t,n,r,i,s,o){var a;const c=fw(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ae.error(g)),t.push(c);const l=vw().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);sw(s)||Zb(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Kb]="firebase",d.update=!0,f!=null&&(d[zb]=f),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.app=t}_delete(){return delete Mn[this.app.options.appId],Promise.resolve()}}let Mn={},Ic=[];const Tc={};let ds="dataLayer",bw="gtag",Sc,Jf,Cc=!1;function ww(){const e=[];if($u()&&e.push("This is a browser extension environment."),Am()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function Ew(e,t,n){ww();const r=e.options.appId;if(!r)throw Fe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(Mn[r]!=null)throw Fe.create("already-exists",{id:r});if(!Cc){ew(ds);const{wrappedGtag:s,gtagCore:o}=iw(Mn,Ic,Tc,ds,bw);Jf=s,Sc=o,Cc=!0}return Mn[r]=_w(e,Ic,Tc,t,Sc,ds,n),new yw(e)}function Iw(e=qu()){e=Ue(e);const t=jn(e,vi);return t.isInitialized()?t.getImmediate():Tw(e)}function Tw(e,t={}){const n=jn(e,vi);if(n.isInitialized()){const i=n.getImmediate();if(wr(t,n.getOptions()))return i;throw Fe.create("already-initialized")}return n.initialize({options:t})}function Sw(e,t){e=Ue(e),mw(Mn[e.app.options.appId],t).catch(n=>Ae.error(n))}function Cw(e,t,n,r){e=Ue(e),gw(Jf,Mn[e.app.options.appId],t,n,r).catch(i=>Ae.error(i))}const Ac="@firebase/analytics",Rc="0.10.10";function Aw(){St(new ft(vi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ew(r,i,n)},"PUBLIC")),St(new ft("analytics-internal",e,"PRIVATE")),lt(Ac,Rc),lt(Ac,Rc,"esm2017");function e(t){try{const n=t.getProvider(vi).getImmediate();return{logEvent:(r,i,s)=>Cw(n,r,i,s)}}catch(n){throw Fe.create("interop-component-reg-failed",{reason:n})}}}Aw();const Rw={apiKey:"AIzaSyCN1jAV6XM2Mu04NQKbrnRdTBUmlbt68qA",authDomain:"guess-artikel-df92e.firebaseapp.com",projectId:"guess-artikel-df92e",storageBucket:"guess-artikel-df92e.firebasestorage.app",messagingSenderId:"620058445357",appId:"1:620058445357:web:828041dbd9b5d078a65aa4",measurementId:"G-MTN0DXB8EK"},Yf=Vu(Rw),Pc=rb(Yf),HE=new yt,Pw=Iw(Yf);Sw(Pw,!1);let kc=!1;const kw=()=>new Promise(e=>{kc?e(Pc.currentUser):K_(Pc,t=>{kc=!0,e(t)})}),Ow=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Oc={},xw="/guess-artikel/",Dt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${xw}${r}`,r in Oc)return;Oc[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Ow,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Lw=[{path:"/",component:()=>Dt(()=>import("./MainLayout.b4ba4c30.js"),["assets/MainLayout.b4ba4c30.js","assets/QLayout.6c24b5cd.js","assets/scroll.21af1a12.js"]),children:[{path:"",component:()=>Dt(()=>import("./IndexPage.4eb36cab.js"),["assets/IndexPage.4eb36cab.js","assets/IndexPage.bef83c20.css","assets/use-quasar.6a6e4e03.js","assets/QCardActions.f0776ecf.js"])}]},{path:"/profile",component:()=>Dt(()=>import("./ProfileLayout.9a037acb.js"),["assets/ProfileLayout.9a037acb.js","assets/QLayout.6c24b5cd.js","assets/scroll.21af1a12.js"]),children:[{path:"",component:()=>Dt(()=>import("./ProfilePage.569a68d9.js"),["assets/ProfilePage.569a68d9.js","assets/use-quasar.6a6e4e03.js","assets/useAuth.c66cfb10.js","assets/QCardActions.f0776ecf.js","assets/scroll.21af1a12.js"])}],meta:{requiresAuth:!0}},{path:"/login",component:()=>Dt(()=>import("./ProfileLayout.9a037acb.js"),["assets/ProfileLayout.9a037acb.js","assets/QLayout.6c24b5cd.js","assets/scroll.21af1a12.js"]),children:[{path:"",component:()=>Dt(()=>import("./LoginPage.d1636435.js"),["assets/LoginPage.d1636435.js","assets/use-quasar.6a6e4e03.js","assets/useAuth.c66cfb10.js","assets/google-icon.c9eadf7b.js"])}]},{path:"/signup",component:()=>Dt(()=>import("./ProfileLayout.9a037acb.js"),["assets/ProfileLayout.9a037acb.js","assets/QLayout.6c24b5cd.js","assets/scroll.21af1a12.js"]),children:[{path:"",component:()=>Dt(()=>import("./SignupPage.ca6c153b.js"),["assets/SignupPage.ca6c153b.js","assets/use-quasar.6a6e4e03.js","assets/useAuth.c66cfb10.js","assets/google-icon.c9eadf7b.js"])}]},{path:"/:catchAll(.*)*",redirect:{path:"/"}}];var hs=function(){const t=dm({scrollBehavior:()=>({left:0,top:0}),routes:Lw,history:jg("/guess-artikel/")});return t.beforeEach(async(n,r,i)=>{const s=await kw();n.meta.requiresAuth&&!s?i("/login"):(n.path==="/login"||n.path==="/signup")&&s?i("/profile"):i()}),t};async function Dw(e,t){const n=e(lg);n.use(cg,t);const r=Sr(typeof hs=="function"?await hs({}):hs);return{app:n,router:r}}const Ws={xs:18,sm:24,md:32,lg:38,xl:46},No={size:String};function Mo(e,t=Ws){return G(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function Nw(e,t){return e!==void 0&&e()||t}function VE(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function Xn(e,t){return e!==void 0?t.concat(e()):t}function Mw(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}const xc="0 0 24 24",Lc=e=>e,ps=e=>`ionicons ${e}`,Qf={"mdi-":e=>`mdi ${e}`,"icon-":Lc,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":ps,"ion-ios":ps,"ion-logo":ps,"iconfont ":Lc,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Xf={o_:"-outlined",r_:"-round",s_:"-sharp"},Zf={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$w=new RegExp("^("+Object.keys(Qf).join("|")+")"),Fw=new RegExp("^("+Object.keys(Xf).join("|")+")"),Dc=new RegExp("^("+Object.keys(Zf).join("|")+")"),Uw=/^[Mm]\s?[-+]?\.?\d/,Bw=/^img:/,jw=/^svguse:/,Hw=/^ion-/,Vw=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var _i=Pr({name:"QIcon",props:{...No,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Ar(),r=Mo(e),i=G(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=G(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(Uw.test(a)===!0){const[u,f=xc]=a.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(d=>{const[g,v,b]=d.split("@@");return K("path",{style:v,d:g,transform:b})})}}if(Bw.test(a)===!0)return{img:!0,src:a.substring(4)};if(jw.test(a)===!0){const[u,f=xc]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let c=" ";const l=a.match($w);if(l!==null)o=Qf[l[1]](a);else if(Vw.test(a)===!0)o=a;else if(Hw.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Dc.test(a)===!0){o="notranslate material-symbols";const u=a.match(Dc);u!==null&&(a=a.substring(6),o+=Zf[u[1]]),c=a}else{o="notranslate material-icons";const u=a.match(Fw);u!==null&&(a=a.substring(2),o+=Xf[u[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?K(e.tag,o,Nw(t.default)):s.value.img===!0?K(e.tag,o,Xn(t.default,[K("img",{src:s.value.src})])):s.value.svg===!0?K(e.tag,o,Xn(t.default,[K("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?K(e.tag,o,Xn(t.default,[K("svg",{viewBox:s.value.viewBox},[K("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),K(e.tag,o,Xn(t.default,[s.value.content])))}}}),qw=Pr({name:"QAvatar",props:{...No,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=Mo(e),r=G(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),i=G(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const s=e.icon!==void 0?[K(_i,{name:e.icon})]:void 0;return K("div",{class:r.value,style:n.value},[K("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},Mw(t.default,s))])}}});const Ww={size:{type:[String,Number],default:"1em"},color:String};function zw(e){return{cSize:G(()=>e.size in Ws?`${Ws[e.size]}px`:e.size),classes:G(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ed=Pr({name:"QSpinner",props:{...Ww,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=zw(e);return()=>K("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[K("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Kw(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function qE(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=cn(e);if(t)return t.$el||t}function WE(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Gw(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function Nc(e,t,n,r){n.modifiers.stop===!0&&hu(e);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=Bp(e),{left:l,top:u,width:f,height:d}=t.getBoundingClientRect(),g=Math.sqrt(f*f+d*d),v=g/2,b=`${(f-g)/2}px`,S=s?b:`${c.left-l-v}px`,C=`${(d-g)/2}px`,k=s?C:`${c.top-u-v}px`;a.className="q-ripple__inner",Kw(a,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${S},${k},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const x=()=>{o.remove(),clearTimeout(R)};n.abort.push(x);let R=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${C},0) scale3d(1,1,1)`,a.style.opacity=.2,R=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,R=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(x),1)},275)},250)},50)}function Mc(e,{modifiers:t,value:n,arg:r}){const i=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var Jw=Up({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&Nc(i,e,r,i.qKeyEvent===!0)},keystart:Gw(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&Os(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&Nc(i,e,r,!0)},300)};Mc(r,t),e.__qripple=r,jp(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&Mc(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),Hp(t,"main"),delete e._qripple)}});const td={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Yw=Object.keys(td),Qw={align:{type:String,validator:e=>Yw.includes(e)}};function Xw(e){return G(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${td[t]}`})}function zE(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Zw(e){return e.appContext.config.globalProperties.$router!==void 0}function KE(e){return e.isUnmounted===!0||e.isDeactivated===!0}function $c(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Fc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function eE(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Uc(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function tE(e,t){return Array.isArray(e)===!0?Uc(e,t):Array.isArray(t)===!0?Uc(t,e):e===t}function nE(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(tE(e[n],t[n])===!1)return!1;return!0}const rE={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function iE({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Ar(),{props:r,proxy:i,emit:s}=n,o=Zw(n),a=G(()=>r.disable!==!0&&r.href!==void 0),c=G(t===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),l=G(()=>c.value===!0?k(r.to):null),u=G(()=>l.value!==null),f=G(()=>a.value===!0||u.value===!0),d=G(()=>r.type==="a"||f.value===!0?"a":r.tag||e||"div"),g=G(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:l.value.href,target:r.target}:{}),v=G(()=>{if(u.value===!1)return-1;const{matched:F}=l.value,{length:j}=F,q=F[j-1];if(q===void 0)return-1;const X=i.$route.matched;if(X.length===0)return-1;const M=X.findIndex(Fc.bind(null,q));if(M!==-1)return M;const J=$c(F[j-2]);return j>1&&$c(q)===J&&X[X.length-1].path!==J?X.findIndex(Fc.bind(null,F[j-2])):M}),b=G(()=>u.value===!0&&v.value!==-1&&eE(i.$route.params,l.value.params)),S=G(()=>b.value===!0&&v.value===i.$route.matched.length-1&&nE(i.$route.params,l.value.params)),C=G(()=>u.value===!0?S.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":b.value===!0?` ${r.activeClass}`:"":"");function k(F){try{return i.$router.resolve(F)}catch{}return null}function x(F,{returnRouterError:j,to:q=r.to,replace:X=r.replace}={}){if(r.disable===!0)return F.preventDefault(),Promise.resolve(!1);if(F.metaKey||F.altKey||F.ctrlKey||F.shiftKey||F.button!==void 0&&F.button!==0||r.target==="_blank")return Promise.resolve(!1);F.preventDefault();const M=i.$router[X===!0?"replace":"push"](q);return j===!0?M:M.then(()=>{}).catch(()=>{})}function R(F){if(u.value===!0){const j=q=>x(F,q);s("click",F,j),F.defaultPrevented!==!0&&j()}else s("click",F)}return{hasRouterLink:u,hasHrefLink:a,hasLink:f,linkTag:d,resolvedLink:l,linkIsActive:b,linkIsExactActive:S,linkClass:C,linkAttrs:g,getLink:k,navigateToRouterLink:x,navigateOnClick:R}}const Bc={none:0,xs:4,sm:8,md:16,lg:24,xl:32},sE={xs:8,sm:10,md:14,lg:20,xl:24},oE=["button","submit","reset"],aE=/[^\s]\/[^\s]/,cE=["flat","outline","push","unelevated"];function lE(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const uE={...No,...rE,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...cE.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Qw.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},fE={...uE,round:Boolean};function dE(e){const t=Mo(e,sE),n=Xw(e),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=iE({fallbackTag:"button"}),c=G(()=>{const S=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},S,{padding:e.padding.split(/\s+/).map(C=>C in Bc?Bc[C]+"px":C).join(" "),minWidth:"0",minHeight:"0"}):S}),l=G(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),u=G(()=>e.disable!==!0&&e.loading!==!0),f=G(()=>u.value===!0?e.tabindex||0:-1),d=G(()=>lE(e,"standard")),g=G(()=>{const S={tabindex:f.value};return i.value===!0?Object.assign(S,o.value):oE.includes(e.type)===!0&&(S.type=e.type),s.value==="a"?(e.disable===!0?S["aria-disabled"]="true":S.href===void 0&&(S.role="button"),r.value!==!0&&aE.test(e.type)===!0&&(S.type=e.type)):e.disable===!0&&(S.disabled="",S["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(S,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),S}),v=G(()=>{let S;e.color!==void 0?e.flat===!0||e.outline===!0?S=`text-${e.textColor||e.color}`:S=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(S=`text-${e.textColor}`);const C=e.round===!0?"round":`rectangle${l.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${C}`+(S!==void 0?" "+S:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),b=G(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:c,innerClasses:b,attributes:g,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:He}=dn;let In=null,Tn=null,Sn=null;var hE=Pr({name:"QBtn",props:{...fE,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=Ar(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:c,linkTag:l,navigateOnClick:u,isActionable:f}=dE(e),d=dr(null),g=dr(null);let v=null,b,S=null;const C=G(()=>e.label!==void 0&&e.label!==null&&e.label!==""),k=G(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),x=G(()=>({center:e.round})),R=G(()=>{const N=Math.max(0,Math.min(100,e.percentage));return N>0?{transition:"transform 0.6s",transform:`translateX(${N-100}%)`}:{}}),F=G(()=>{if(e.loading===!0)return{onMousedown:Z,onTouchstart:Z,onClick:Z,onKeydown:Z,onKeyup:Z};if(f.value===!0){const N={onClick:q,onKeydown:X,onMousedown:J};if(r.$q.platform.has.touch===!0){const ee=e.onTouchstart!==void 0?"":"Passive";N[`onTouchstart${ee}`]=M}return N}return{onClick:En}}),j=G(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...F.value}));function q(N){if(d.value!==null){if(N!==void 0){if(N.defaultPrevented===!0)return;const ee=document.activeElement;if(e.type==="submit"&&ee!==document.body&&d.value.contains(ee)===!1&&ee.contains(d.value)===!1){d.value.focus();const fe=()=>{document.removeEventListener("keydown",En,!0),document.removeEventListener("keyup",fe,He),d.value!==null&&d.value.removeEventListener("blur",fe,He)};document.addEventListener("keydown",En,!0),document.addEventListener("keyup",fe,He),d.value.addEventListener("blur",fe,He)}}u(N)}}function X(N){d.value!==null&&(n("keydown",N),Os(N,[13,32])===!0&&Tn!==d.value&&(Tn!==null&&D(),N.defaultPrevented!==!0&&(d.value.focus(),Tn=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",Q,!0),d.value.addEventListener("blur",Q,He)),En(N)))}function M(N){d.value!==null&&(n("touchstart",N),N.defaultPrevented!==!0&&(In!==d.value&&(In!==null&&D(),In=d.value,v=N.target,v.addEventListener("touchcancel",Q,He),v.addEventListener("touchend",Q,He)),b=!0,S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,b=!1},200)))}function J(N){d.value!==null&&(N.qSkipRipple=b===!0,n("mousedown",N),N.defaultPrevented!==!0&&Sn!==d.value&&(Sn!==null&&D(),Sn=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",Q,He)))}function Q(N){if(d.value!==null&&!(N!==void 0&&N.type==="blur"&&document.activeElement===d.value)){if(N!==void 0&&N.type==="keyup"){if(Tn===d.value&&Os(N,[13,32])===!0){const ee=new MouseEvent("click",N);ee.qKeyEvent=!0,N.defaultPrevented===!0&&ks(ee),N.cancelBubble===!0&&hu(ee),d.value.dispatchEvent(ee),En(N),N.qKeyEvent=!0}n("keyup",N)}D()}}function D(N){const ee=g.value;N!==!0&&(In===d.value||Sn===d.value)&&ee!==null&&ee!==document.activeElement&&(ee.setAttribute("tabindex",-1),ee.focus()),In===d.value&&(v!==null&&(v.removeEventListener("touchcancel",Q,He),v.removeEventListener("touchend",Q,He)),In=v=null),Sn===d.value&&(document.removeEventListener("mouseup",Q,He),Sn=null),Tn===d.value&&(document.removeEventListener("keyup",Q,!0),d.value!==null&&d.value.removeEventListener("blur",Q,He),Tn=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function Z(N){En(N),N.qSkipRipple=!0}return co(()=>{D(!0)}),Object.assign(r,{click:N=>{f.value===!0&&q(N)}}),()=>{let N=[];e.icon!==void 0&&N.push(K(_i,{name:e.icon,left:e.stack!==!0&&C.value===!0,role:"img"})),C.value===!0&&N.push(K("span",{class:"block"},[e.label])),N=Xn(t.default,N),e.iconRight!==void 0&&e.round===!1&&N.push(K(_i,{name:e.iconRight,right:e.stack!==!0&&C.value===!0,role:"img"}));const ee=[K("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&ee.push(K("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[K("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),ee.push(K("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},N)),e.loading!==null&&ee.push(K(sp,{name:"q-transition--fade"},()=>e.loading===!0?[K("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[K(ed)])]:null)),Yd(K(l.value,j.value,ee),[[Jw,k.value,void 0,x.value]])}}});let pE=1,gE=document.body;function mE(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${pE++}`:e,li.globalNodes!==void 0){const r=li.globalNodes.class;r!==void 0&&(n.className=r)}return gE.appendChild(n),n}function GE(e){e.remove()}let vE=0;const Xr={},Zr={},ze={},nd={},_E=/^\s*$/,rd=[],yE=[void 0,null,!0,!1,""],$o=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],bE=["top-left","top-right","bottom-left","bottom-right"],Rn={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function id(e,t,n){if(!e)return Gn("parameter required");let r;const i={textColor:"white"};if(e.ignoreDefaults!==!0&&Object.assign(i,Xr),_r(e)===!1&&(i.type&&Object.assign(i,Rn[i.type]),e={message:e}),Object.assign(i,Rn[e.type||i.type],e),typeof i.icon=="function"&&(i.icon=i.icon(t)),i.spinner?(i.spinner===!0&&(i.spinner=ed),i.spinner=Sr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:jc(i.message)||jc(i.caption)},i.position){if($o.includes(i.position)===!1)return Gn("wrong position",e)}else i.position="bottom";if(yE.includes(i.timeout)===!0)i.timeout=5e3;else{const c=Number(i.timeout);if(isNaN(c)||c<0)return Gn("wrong timeout",e);i.timeout=Number.isFinite(c)?c:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray(Xr.actions)===!0?Xr.actions:[]).concat(Rn[e.type]!==void 0&&Array.isArray(Rn[e.type].actions)===!0?Rn[e.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:t.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:l,...u})=>({flat:!0,...u,onClick:typeof c=="function"?()=>{c(),l!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=ze[i.position].value.indexOf(n.notif);ze[i.position].value[c]=i}else{const c=Zr[i.meta.group];if(c===void 0){if(i.meta.uid=vE++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)ze[i.position].value.splice(Math.floor(ze[i.position].value.length/2),0,i);else{const l=i.position.indexOf("top")!==-1?"unshift":"push";ze[i.position].value[l](i)}i.group!==void 0&&(Zr[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(bE.includes(i.badgePosition)===!1)return Gn("wrong badgePosition",e)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const l=ze[i.position].value.indexOf(c);ze[i.position].value[l]=Zr[i.meta.group]=i}}const a=()=>{wE(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?Gn("trying to update a grouped one which is forbidden",e):a()};if(r={dismiss:a,config:e,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const l=Object.assign({},r.config,c,{group:!1,position:i.position});id(l,t,r)}}}function wE(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);const t=ze[e.position].value.indexOf(e);if(t!==-1){e.group!==void 0&&delete Zr[e.meta.group];const n=rd[""+e.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}ze[e.position].value.splice(t,1),typeof e.onDismiss=="function"&&e.onDismiss()}}function jc(e){return e!=null&&_E.test(e)!==!0}function Gn(e,t){return console.error(`Notify: ${e}`,t),!1}function EE(){return Pr({name:"QNotifications",devtools:{hide:!0},setup(){return()=>K("div",{class:"q-notifications"},$o.map(e=>K(Cp,{key:e,class:nd[e],tag:"div",name:`q-notification--${e}`},()=>ze[e].value.map(t=>{const n=t.meta,r=[];if(n.hasMedia===!0&&(t.spinner!==!1?r.push(K(t.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:t.spinnerColor,size:t.spinnerSize})):t.icon?r.push(K(_i,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:t.icon,color:t.iconColor,size:t.iconSize,role:"img"})):t.avatar&&r.push(K(qw,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>K("img",{src:t.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(t.html===!0)o.innerHTML=t.caption?`<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`:t.message;else{const a=[t.message];s=t.caption?[K("div",a),K("div",{class:"q-notification__caption"},[t.caption])]:a}r.push(K("div",o,s))}const i=[K("div",{class:n.contentClass},r)];return t.progress===!0&&i.push(K("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),t.actions!==void 0&&i.push(K("div",{class:n.actionsClass},t.actions.map(s=>K(hE,s)))),n.badge>1&&i.push(K("div",{key:`${n.uid}|${n.badge}`,class:t.meta.badgeClass,style:t.badgeStyle},[n.badge])),K("div",{ref:s=>{rd[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[K("div",{class:n.wrapperClass},i)])}))))}})}var IE={setDefaults(e){_r(e)===!0&&Object.assign(Xr,e)},registerType(e,t){_r(t)===!0&&(Rn[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=n=>id(n,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){$o.forEach(r=>{ze[r]=dr([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",s=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;nd[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=mE("q-notify");sg(EE(),t).mount(n)}}},TE={config:{},plugins:{Notify:IE}};async function SE({app:e,router:t}){e.use(t),e.mount("#q-app")}Dw(fu,TE).then(SE);export{Qw as $,LE as A,Bn as B,Ll as C,Xn as D,Kw as E,qE as F,Up as G,ct as H,PE as I,jp as J,OE as K,ks as L,hu as M,Bp as N,Hp as O,Ps as P,hE as Q,En as R,AE as S,tu as T,Qs as U,_i as V,_d as W,Yd as X,Ys as Y,RE as Z,rg as _,G as a,Xw as a0,tg as a1,th as a2,KE as a3,Zw as a4,zE as a5,po as a6,CE as a7,mE as a8,GE as a9,kE as aa,Os as ab,sp as ac,WE as ad,Pc as ae,cn as af,Ee as ag,ih as ah,DE as ai,Vp as aj,eh as ak,ed as al,Kp as am,K_ as an,$E as ao,UE as ap,FE as aq,jE as ar,BE as as,HE as at,Nw as b,Pr as c,Si as d,Zl as e,xe as f,Vh as g,K as h,dr as i,fn as j,Ol as k,co as l,gl as m,vr as n,Ql as o,Ar as p,dn as q,lh as r,at as s,NE as t,ME as u,Wr as v,Jd as w,VE as x,xE as y,qr as z};
