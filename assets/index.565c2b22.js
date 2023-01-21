(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function nl(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=yt(i)?gd(i):nl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(yt(n))return n;if(at(n))return n}}const dd=/;(?![^(]*\))/g,pd=/:([^]+)/,md=/\/\*.*?\*\//gs;function gd(n){const e={};return n.replace(md,"").split(dd).forEach(t=>{if(t){const i=t.split(pd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function il(n){let e="";if(yt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=il(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xd=tl(_d);function _f(n){return!!n||n===""}const et={},Lr=[],nn=()=>{},vd=()=>!1,yd=/^on[^a-z]/,so=n=>yd.test(n),rl=n=>n.startsWith("onUpdate:"),Dt=Object.assign,sl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Md=Object.prototype.hasOwnProperty,We=(n,e)=>Md.call(n,e),Oe=Array.isArray,Rr=n=>oo(n)==="[object Map]",Sd=n=>oo(n)==="[object Set]",ze=n=>typeof n=="function",yt=n=>typeof n=="string",ol=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",xf=n=>at(n)&&ze(n.then)&&ze(n.catch),bd=Object.prototype.toString,oo=n=>bd.call(n),wd=n=>oo(n).slice(8,-1),Ed=n=>oo(n)==="[object Object]",al=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gs=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Td=/-(\w)/g,Zi=ao(n=>n.replace(Td,(e,t)=>t?t.toUpperCase():"")),Ad=/\B([A-Z])/g,lr=ao(n=>n.replace(Ad,"-$1").toLowerCase()),vf=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),To=ao(n=>n?`on${vf(n)}`:""),Br=(n,e)=>!Object.is(n,e),Ao=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},$s=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},yf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Vl;const Cd=()=>Vl||(Vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let on;class Pd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}run(e){if(this.active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Ld(n,e=on){e&&e.active&&e.effects.push(n)}const ll=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Mf=n=>(n.w&Xn)>0,Sf=n=>(n.n&Xn)>0,Rd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Xn},Dd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Mf(r)&&!Sf(r)?r.delete(n):e[t++]=r,r.w&=~Xn,r.n&=~Xn}e.length=t}},ba=new WeakMap;let Er=0,Xn=1;const wa=30;let Qt;const ui=Symbol(""),Ea=Symbol("");class cl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,i)}run(){if(!this.active)return this.fn();let e=Qt,t=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,Vn=!0,Xn=1<<++Er,Er<=wa?Rd(this):Wl(this),this.fn()}finally{Er<=wa&&Dd(this),Xn=1<<--Er,Qt=this.parent,Vn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Wl(this),this.onStop&&this.onStop(),this.active=!1)}}function Wl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Vn=!0;const bf=[];function cr(){bf.push(Vn),Vn=!1}function ur(){const n=bf.pop();Vn=n===void 0?!0:n}function Wt(n,e,t){if(Vn&&Qt){let i=ba.get(n);i||ba.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=ll()),wf(r)}}function wf(n,e){let t=!1;Er<=wa?Sf(n)||(n.n|=Xn,t=!Mf(n)):t=!n.has(Qt),t&&(n.add(Qt),Qt.deps.push(n))}function Dn(n,e,t,i,r,s){const a=ba.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=yf(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?al(t)&&o.push(a.get("length")):(o.push(a.get(ui)),Rr(n)&&o.push(a.get(Ea)));break;case"delete":Oe(n)||(o.push(a.get(ui)),Rr(n)&&o.push(a.get(Ea)));break;case"set":Rr(n)&&o.push(a.get(ui));break}if(o.length===1)o[0]&&Ta(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ta(ll(l))}}function Ta(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&ql(i);for(const i of t)i.computed||ql(i)}function ql(n,e){(n!==Qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Id=tl("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ol)),Nd=ul(),Od=ul(!1,!0),Fd=ul(!0),Xl=zd();function zd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Wt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){cr();const i=je(this)[e].apply(this,t);return ur(),i}}),n}function ul(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Qd:Lf:e?Pf:Cf).get(i))return i;const a=Oe(i);if(!n&&a&&We(Xl,r))return Reflect.get(Xl,r,s);const o=Reflect.get(i,r,s);return(ol(r)?Ef.has(r):Id(r))||(n||Wt(i,"get",r),e)?o:Tt(o)?a&&al(r)?o:o.value:at(o)?n?Rf(o):ts(o):o}}const Ud=Tf(),Bd=Tf(!0);function Tf(n=!1){return function(t,i,r,s){let a=t[i];if(Ki(a)&&Tt(a)&&!Tt(r))return!1;if(!n&&(!Zs(r)&&!Ki(r)&&(a=je(a),r=je(r)),!Oe(t)&&Tt(a)&&!Tt(r)))return a.value=r,!0;const o=Oe(t)&&al(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?Br(r,a)&&Dn(t,"set",i,r):Dn(t,"add",i,r)),l}}function kd(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Dn(n,"delete",e,void 0),i}function Gd(n,e){const t=Reflect.has(n,e);return(!ol(e)||!Ef.has(e))&&Wt(n,"has",e),t}function Hd(n){return Wt(n,"iterate",Oe(n)?"length":ui),Reflect.ownKeys(n)}const Af={get:Nd,set:Ud,deleteProperty:kd,has:Gd,ownKeys:Hd},Vd={get:Fd,set(n,e){return!0},deleteProperty(n,e){return!0}},Wd=Dt({},Af,{get:Od,set:Bd}),fl=n=>n,lo=n=>Reflect.getPrototypeOf(n);function os(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Wt(r,"get",e),Wt(r,"get",s));const{has:a}=lo(r),o=i?fl:t?pl:kr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function as(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Wt(i,"has",n),Wt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ls(n,e=!1){return n=n.__v_raw,!e&&Wt(je(n),"iterate",ui),Reflect.get(n,"size",n)}function jl(n){n=je(n);const e=je(this);return lo(e).has.call(e,n)||(e.add(n),Dn(e,"add",n,n)),this}function Yl(n,e){e=je(e);const t=je(this),{has:i,get:r}=lo(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Br(e,a)&&Dn(t,"set",n,e):Dn(t,"add",n,e),this}function $l(n){const e=je(this),{has:t,get:i}=lo(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Dn(e,"delete",n,void 0),s}function Zl(){const n=je(this),e=n.size!==0,t=n.clear();return e&&Dn(n,"clear",void 0,void 0),t}function cs(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?fl:n?pl:kr;return!n&&Wt(o,"iterate",ui),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function us(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=Rr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?fl:e?pl:kr;return!e&&Wt(s,"iterate",l?Ea:ui),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...e){return n==="delete"?!1:this}}function qd(){const n={get(s){return os(this,s)},get size(){return ls(this)},has:as,add:jl,set:Yl,delete:$l,clear:Zl,forEach:cs(!1,!1)},e={get(s){return os(this,s,!1,!0)},get size(){return ls(this)},has:as,add:jl,set:Yl,delete:$l,clear:Zl,forEach:cs(!1,!0)},t={get(s){return os(this,s,!0)},get size(){return ls(this,!0)},has(s){return as.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:cs(!0,!1)},i={get(s){return os(this,s,!0,!0)},get size(){return ls(this,!0)},has(s){return as.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=us(s,!1,!1),t[s]=us(s,!0,!1),e[s]=us(s,!1,!0),i[s]=us(s,!0,!0)}),[n,t,e,i]}const[Xd,jd,Yd,$d]=qd();function hl(n,e){const t=e?n?$d:Yd:n?jd:Xd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const Zd={get:hl(!1,!1)},Kd={get:hl(!1,!0)},Jd={get:hl(!0,!1)},Cf=new WeakMap,Pf=new WeakMap,Lf=new WeakMap,Qd=new WeakMap;function ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tp(n){return n.__v_skip||!Object.isExtensible(n)?0:ep(wd(n))}function ts(n){return Ki(n)?n:dl(n,!1,Af,Zd,Cf)}function np(n){return dl(n,!1,Wd,Kd,Pf)}function Rf(n){return dl(n,!0,Vd,Jd,Lf)}function dl(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=tp(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Xi(n){return Ki(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ki(n){return!!(n&&n.__v_isReadonly)}function Zs(n){return!!(n&&n.__v_isShallow)}function Df(n){return Xi(n)||Ki(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function If(n){return $s(n,"__v_skip",!0),n}const kr=n=>at(n)?ts(n):n,pl=n=>at(n)?Rf(n):n;function Nf(n){Vn&&Qt&&(n=je(n),wf(n.dep||(n.dep=ll())))}function Of(n,e){n=je(n),n.dep&&Ta(n.dep)}function Tt(n){return!!(n&&n.__v_isRef===!0)}function En(n){return Ff(n,!1)}function ip(n){return Ff(n,!0)}function Ff(n,e){return Tt(n)?n:new rp(n,e)}class rp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:kr(e)}get value(){return Nf(this),this._value}set value(e){const t=this.__v_isShallow||Zs(e)||Ki(e);e=t?e:je(e),Br(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:kr(e),Of(this))}}function Dr(n){return Tt(n)?n.value:n}const sp={get:(n,e,t)=>Dr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function zf(n){return Xi(n)?n:new Proxy(n,sp)}var Uf;class op{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Uf]=!1,this._dirty=!0,this.effect=new cl(e,()=>{this._dirty||(this._dirty=!0,Of(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return Nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Uf="__v_isReadonly";function ap(n,e,t=!1){let i,r;const s=ze(n);return s?(i=n,r=nn):(i=n.get,r=n.set),new op(i,r,s||!r,t)}function Wn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){co(s,e,t)}return r}function rn(n,e,t,i){if(ze(n)){const s=Wn(n,e,t,i);return s&&xf(s)&&s.catch(a=>{co(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(rn(n[s],e,t,i));return r}function co(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Wn(l,null,10,[n,a,o]);return}}lp(n,t,r,i)}function lp(n,e,t,i=!0){console.error(n)}let Gr=!1,Aa=!1;const wt=[];let un=0;const ji=[];let Tn=null,si=0;const Bf=Promise.resolve();let ml=null;function kf(n){const e=ml||Bf;return n?e.then(this?n.bind(this):n):e}function cp(n){let e=un+1,t=wt.length;for(;e<t;){const i=e+t>>>1;Hr(wt[i])<n?e=i+1:t=i}return e}function gl(n){(!wt.length||!wt.includes(n,Gr&&n.allowRecurse?un+1:un))&&(n.id==null?wt.push(n):wt.splice(cp(n.id),0,n),Gf())}function Gf(){!Gr&&!Aa&&(Aa=!0,ml=Bf.then(Vf))}function up(n){const e=wt.indexOf(n);e>un&&wt.splice(e,1)}function fp(n){Oe(n)?ji.push(...n):(!Tn||!Tn.includes(n,n.allowRecurse?si+1:si))&&ji.push(n),Gf()}function Kl(n,e=Gr?un+1:0){for(;e<wt.length;e++){const t=wt[e];t&&t.pre&&(wt.splice(e,1),e--,t())}}function Hf(n){if(ji.length){const e=[...new Set(ji)];if(ji.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((t,i)=>Hr(t)-Hr(i)),si=0;si<Tn.length;si++)Tn[si]();Tn=null,si=0}}const Hr=n=>n.id==null?1/0:n.id,hp=(n,e)=>{const t=Hr(n)-Hr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Vf(n){Aa=!1,Gr=!0,wt.sort(hp);const e=nn;try{for(un=0;un<wt.length;un++){const t=wt[un];t&&t.active!==!1&&Wn(t,null,14)}}finally{un=0,wt.length=0,Hf(),Gr=!1,ml=null,(wt.length||ji.length)&&Vf()}}function dp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||et;h&&(r=t.map(d=>yt(d)?d.trim():d)),f&&(r=t.map(yf))}let o,l=i[o=To(e)]||i[o=To(Zi(e))];!l&&s&&(l=i[o=To(lr(e))]),l&&rn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,rn(c,n,6,r)}}function Wf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ze(n)){const l=c=>{const u=Wf(c,e,!0);u&&(o=!0,Dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(at(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):Dt(a,s),at(n)&&i.set(n,a),a)}function uo(n,e){return!n||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,lr(e))||We(n,e))}let hn=null,qf=null;function Ks(n){const e=hn;return hn=n,qf=n&&n.type.__scopeId||null,e}function pp(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&sc(-1);const s=Ks(e);let a;try{a=n(...r)}finally{Ks(s),i._d&&sc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Co(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:m}=n;let p,x;const w=Ks(n);try{if(t.shapeFlag&4){const S=r||i;p=ln(u.call(S,S,f,s,d,h,g)),x=l}else{const S=e;p=ln(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),x=e.props?l:mp(l)}}catch(S){co(S,n,1),p=vt(Vr)}let _=p;if(x&&m!==!1){const S=Object.keys(x),{shapeFlag:b}=_;S.length&&b&7&&(a&&S.some(rl)&&(x=gp(x,a)),_=Ji(_,x))}return t.dirs&&(_=Ji(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,Ks(w),p}const mp=n=>{let e;for(const t in n)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=n[t]);return e},gp=(n,e)=>{const t={};for(const i in n)(!rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function _p(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Jl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!uo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Jl(i,a,c):!0:!!a;return!1}function Jl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!uo(t,s))return!0}return!1}function xp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const vp=n=>n.__isSuspense;function yp(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):fp(n)}function Hs(n,e){if(Et){let t=Et.provides;const i=Et.parent&&Et.parent.provides;i===t&&(t=Et.provides=Object.create(i)),t[n]=e}}function Ln(n,e,t=!1){const i=Et||hn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i.proxy):e}}const fs={};function Vs(n,e,t){return Xf(n,e,t)}function Xf(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=et){const o=Et;let l,c=!1,u=!1;if(Tt(n)?(l=()=>n.value,c=Zs(n)):Xi(n)?(l=()=>n,i=!0):Oe(n)?(u=!0,c=n.some(_=>Xi(_)||Zs(_)),l=()=>n.map(_=>{if(Tt(_))return _.value;if(Xi(_))return Gi(_);if(ze(_))return Wn(_,o,2)})):ze(n)?e?l=()=>Wn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),rn(n,o,3,[h])}:l=nn,e&&i){const _=l;l=()=>Gi(_())}let f,h=_=>{f=x.onStop=()=>{Wn(_,o,4)}},d;if(Wr)if(h=nn,e?t&&rn(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const _=um();d=_.__watcherHandles||(_.__watcherHandles=[])}else return nn;let g=u?new Array(n.length).fill(fs):fs;const m=()=>{if(!!x.active)if(e){const _=x.run();(i||c||(u?_.some((S,b)=>Br(S,g[b])):Br(_,g)))&&(f&&f(),rn(e,o,3,[_,g===fs?void 0:u&&g[0]===fs?[]:g,h]),g=_)}else x.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>It(m,o&&o.suspense):(m.pre=!0,o&&(m.id=o.uid),p=()=>gl(m));const x=new cl(l,p);e?t?m():g=x.run():r==="post"?It(x.run.bind(x),o&&o.suspense):x.run();const w=()=>{x.stop(),o&&o.scope&&sl(o.scope.effects,x)};return d&&d.push(w),w}function Mp(n,e,t){const i=this.proxy,r=yt(n)?n.includes(".")?jf(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const a=Et;Qi(this);const o=Xf(r,s.bind(i),t);return a?Qi(a):fi(),o}function jf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Gi(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Tt(n))Gi(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Gi(n[t],e);else if(Sd(n)||Rr(n))n.forEach(t=>{Gi(t,e)});else if(Ed(n))for(const t in n)Gi(n[t],e);return n}function fo(n){return ze(n)?{setup:n,name:n.name}:n}const Ws=n=>!!n.type.__asyncLoader,Yf=n=>n.type.__isKeepAlive;function Sp(n,e){$f(n,"a",e)}function bp(n,e){$f(n,"da",e)}function $f(n,e,t=Et){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ho(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Yf(r.parent.vnode)&&wp(i,e,t,r),r=r.parent}}function wp(n,e,t,i){const r=ho(e,n,i,!0);Kf(()=>{sl(i[e],r)},t)}function ho(n,e,t=Et,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;cr(),Qi(t);const o=rn(e,t,n,a);return fi(),ur(),o});return i?r.unshift(s):r.push(s),s}}const In=n=>(e,t=Et)=>(!Wr||n==="sp")&&ho(n,(...i)=>e(...i),t),Ep=In("bm"),Zf=In("m"),Tp=In("bu"),Ap=In("u"),Cp=In("bum"),Kf=In("um"),Pp=In("sp"),Lp=In("rtg"),Rp=In("rtc");function Dp(n,e=Et){ho("ec",n,e)}function Kn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(cr(),rn(l,t,8,[n.el,o,n,e]),ur())}}const Ip=Symbol(),Ca=n=>n?lh(n)?Ml(n)||n.proxy:Ca(n.parent):null,Ir=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ca(n.parent),$root:n=>Ca(n.root),$emit:n=>n.emit,$options:n=>_l(n),$forceUpdate:n=>n.f||(n.f=()=>gl(n.update)),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>Mp.bind(n)}),Po=(n,e)=>n!==et&&!n.__isScriptSetup&&We(n,e),Np={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Po(i,e))return a[e]=1,i[e];if(r!==et&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==et&&We(t,e))return a[e]=4,t[e];Pa&&(a[e]=0)}}const u=Ir[e];let f,h;if(u)return e==="$attrs"&&Wt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==et&&We(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Po(r,e)?(r[e]=t,!0):i!==et&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==et&&We(n,a)||Po(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(Ir,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Pa=!0;function Op(n){const e=_l(n),t=n.proxy,i=n.ctx;Pa=!1,e.beforeCreate&&Ql(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:x,beforeUnmount:w,destroyed:_,unmounted:S,render:b,renderTracked:R,renderTriggered:O,errorCaptured:y,serverPrefetch:L,expose:N,inheritAttrs:V,components:pe,directives:k,filters:D}=e;if(c&&Fp(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const Y in a){const j=a[Y];ze(j)&&(i[Y]=j.bind(t))}if(r){const Y=r.call(t,t);at(Y)&&(n.data=ts(Y))}if(Pa=!0,s)for(const Y in s){const j=s[Y],ne=ze(j)?j.bind(t,t):ze(j.get)?j.get.bind(t,t):nn,le=!ze(j)&&ze(j.set)?j.set.bind(t):nn,$=fn({get:ne,set:le});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>$.value,set:K=>$.value=K})}if(o)for(const Y in o)Jf(o[Y],i,t,Y);if(l){const Y=ze(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(j=>{Hs(j,Y[j])})}u&&Ql(u,n,"c");function q(Y,j){Oe(j)?j.forEach(ne=>Y(ne.bind(t))):j&&Y(j.bind(t))}if(q(Ep,f),q(Zf,h),q(Tp,d),q(Ap,g),q(Sp,m),q(bp,p),q(Dp,y),q(Rp,R),q(Lp,O),q(Cp,w),q(Kf,S),q(Pp,L),Oe(N))if(N.length){const Y=n.exposed||(n.exposed={});N.forEach(j=>{Object.defineProperty(Y,j,{get:()=>t[j],set:ne=>t[j]=ne})})}else n.exposed||(n.exposed={});b&&n.render===nn&&(n.render=b),V!=null&&(n.inheritAttrs=V),pe&&(n.components=pe),k&&(n.directives=k)}function Fp(n,e,t=nn,i=!1){Oe(n)&&(n=La(n));for(const r in n){const s=n[r];let a;at(s)?"default"in s?a=Ln(s.from||r,s.default,!0):a=Ln(s.from||r):a=Ln(s),Tt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Ql(n,e,t){rn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Jf(n,e,t,i){const r=i.includes(".")?jf(t,i):()=>t[i];if(yt(n)){const s=e[n];ze(s)&&Vs(r,s)}else if(ze(n))Vs(r,n.bind(t));else if(at(n))if(Oe(n))n.forEach(s=>Jf(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&Vs(r,s,n)}}function _l(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Js(l,c,a,!0)),Js(l,e,a)),at(e)&&s.set(e,l),l}function Js(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Js(n,s,t,!0),r&&r.forEach(a=>Js(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=zp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const zp={data:ec,props:ni,emits:ni,methods:ni,computed:ni,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:ni,directives:ni,watch:Bp,provide:ec,inject:Up};function ec(n,e){return e?n?function(){return Dt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function Up(n,e){return ni(La(n),La(e))}function La(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function ni(n,e){return n?Dt(Dt(Object.create(null),n),e):e}function Bp(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function kp(n,e,t,i=!1){const r={},s={};$s(s,mo,1),n.propsDefaults=Object.create(null),Qf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:np(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Gp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(uo(n.emitsOptions,h))continue;const d=e[h];if(l)if(We(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Zi(h);r[g]=Ra(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Qf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!We(e,f)&&((u=lr(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ra(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!We(e,f)&&!0)&&(delete s[f],c=!0)}c&&Dn(n,"set","$attrs")}function Qf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;r&&We(r,u=Zi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||et;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ra(r,l,f,c[f],n,!We(c,f))}}return a}function Ra(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&ze(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Qi(r),i=c[t]=l.call(null,e),fi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===lr(t))&&(i=!0))}return i}function eh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[h,d]=eh(f,e,!0);Dt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,Lr),Lr;if(Oe(s))for(let u=0;u<s.length;u++){const f=Zi(s[u]);tc(f)&&(a[f]=et)}else if(s)for(const u in s){const f=Zi(u);if(tc(f)){const h=s[u],d=a[f]=Oe(h)||ze(h)?{type:h}:Object.assign({},h);if(d){const g=rc(Boolean,d.type),m=rc(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||We(d,"default"))&&o.push(f)}}}const c=[a,o];return at(n)&&i.set(n,c),c}function tc(n){return n[0]!=="$"}function nc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function ic(n,e){return nc(n)===nc(e)}function rc(n,e){return Oe(e)?e.findIndex(t=>ic(t,n)):ze(e)&&ic(e,n)?0:-1}const th=n=>n[0]==="_"||n==="$stable",xl=n=>Oe(n)?n.map(ln):[ln(n)],Hp=(n,e,t)=>{if(e._n)return e;const i=pp((...r)=>xl(e(...r)),t);return i._c=!1,i},nh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(th(r))continue;const s=n[r];if(ze(s))e[r]=Hp(r,s,i);else if(s!=null){const a=xl(s);e[r]=()=>a}}},ih=(n,e)=>{const t=xl(e);n.slots.default=()=>t},Vp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),$s(e,"_",t)):nh(e,n.slots={})}else n.slots={},e&&ih(n,e);$s(n.slots,mo,1)},Wp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=et;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Dt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,nh(e,r)),a=e}else e&&(ih(n,e),a={default:1});if(s)for(const o in r)!th(o)&&!(o in a)&&delete r[o]};function rh(){return{app:null,config:{isNativeTag:vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function Xp(n,e){return function(i,r=null){ze(i)||(i=Object.assign({},i)),r!=null&&!at(r)&&(r=null);const s=rh(),a=new Set;let o=!1;const l=s.app={_uid:qp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:fm,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ze(c.install)?(a.add(c),c.install(l,...u)):ze(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=vt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Ml(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Da(n,e,t,i,r=!1){if(Oe(n)){n.forEach((h,d)=>Da(h,e&&(Oe(e)?e[d]:e),t,i,r));return}if(Ws(i)&&!r)return;const s=i.shapeFlag&4?Ml(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===et?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,We(f,c)&&(f[c]=null)):Tt(c)&&(c.value=null)),ze(l))Wn(l,o,12,[a,u]);else{const h=yt(l),d=Tt(l);if(h||d){const g=()=>{if(n.f){const m=h?We(f,l)?f[l]:u[l]:l.value;r?Oe(m)&&sl(m,s):Oe(m)?m.includes(s)||m.push(s):h?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,We(f,l)&&(f[l]=a)):d&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,It(g,t)):g()}}}const It=yp;function jp(n){return Yp(n)}function Yp(n,e){const t=Cd();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=nn,insertStaticContent:g}=n,m=(v,E,I,W=null,H=null,te=null,re=!1,Q=null,de=!!E.dynamicChildren)=>{if(v===E)return;v&&!mr(v,E)&&(W=ce(v),K(v,H,te,!0),v=null),E.patchFlag===-2&&(de=!1,E.dynamicChildren=null);const{type:ie,ref:T,shapeFlag:M}=E;switch(ie){case po:p(v,E,I,W);break;case Vr:x(v,E,I,W);break;case Lo:v==null&&w(E,I,W,re);break;case An:pe(v,E,I,W,H,te,re,Q,de);break;default:M&1?b(v,E,I,W,H,te,re,Q,de):M&6?k(v,E,I,W,H,te,re,Q,de):(M&64||M&128)&&ie.process(v,E,I,W,H,te,re,Q,de,ve)}T!=null&&H&&Da(T,v&&v.ref,te,E||v,!E)},p=(v,E,I,W)=>{if(v==null)i(E.el=o(E.children),I,W);else{const H=E.el=v.el;E.children!==v.children&&c(H,E.children)}},x=(v,E,I,W)=>{v==null?i(E.el=l(E.children||""),I,W):E.el=v.el},w=(v,E,I,W)=>{[v.el,v.anchor]=g(v.children,E,I,W,v.el,v.anchor)},_=({el:v,anchor:E},I,W)=>{let H;for(;v&&v!==E;)H=h(v),i(v,I,W),v=H;i(E,I,W)},S=({el:v,anchor:E})=>{let I;for(;v&&v!==E;)I=h(v),r(v),v=I;r(E)},b=(v,E,I,W,H,te,re,Q,de)=>{re=re||E.type==="svg",v==null?R(E,I,W,H,te,re,Q,de):L(v,E,H,te,re,Q,de)},R=(v,E,I,W,H,te,re,Q)=>{let de,ie;const{type:T,props:M,shapeFlag:B,transition:ee,dirs:se}=v;if(de=v.el=a(v.type,te,M&&M.is,M),B&8?u(de,v.children):B&16&&y(v.children,de,null,W,H,te&&T!=="foreignObject",re,Q),se&&Kn(v,null,W,"created"),M){for(const Se in M)Se!=="value"&&!Gs(Se)&&s(de,Se,null,M[Se],te,v.children,W,H,U);"value"in M&&s(de,"value",null,M.value),(ie=M.onVnodeBeforeMount)&&sn(ie,W,v)}O(de,v,v.scopeId,re,W),se&&Kn(v,null,W,"beforeMount");const me=(!H||H&&!H.pendingBranch)&&ee&&!ee.persisted;me&&ee.beforeEnter(de),i(de,E,I),((ie=M&&M.onVnodeMounted)||me||se)&&It(()=>{ie&&sn(ie,W,v),me&&ee.enter(de),se&&Kn(v,null,W,"mounted")},H)},O=(v,E,I,W,H)=>{if(I&&d(v,I),W)for(let te=0;te<W.length;te++)d(v,W[te]);if(H){let te=H.subTree;if(E===te){const re=H.vnode;O(v,re,re.scopeId,re.slotScopeIds,H.parent)}}},y=(v,E,I,W,H,te,re,Q,de=0)=>{for(let ie=de;ie<v.length;ie++){const T=v[ie]=Q?Gn(v[ie]):ln(v[ie]);m(null,T,E,I,W,H,te,re,Q)}},L=(v,E,I,W,H,te,re)=>{const Q=E.el=v.el;let{patchFlag:de,dynamicChildren:ie,dirs:T}=E;de|=v.patchFlag&16;const M=v.props||et,B=E.props||et;let ee;I&&Jn(I,!1),(ee=B.onVnodeBeforeUpdate)&&sn(ee,I,E,v),T&&Kn(E,v,I,"beforeUpdate"),I&&Jn(I,!0);const se=H&&E.type!=="foreignObject";if(ie?N(v.dynamicChildren,ie,Q,I,W,se,te):re||j(v,E,Q,null,I,W,se,te,!1),de>0){if(de&16)V(Q,E,M,B,I,W,H);else if(de&2&&M.class!==B.class&&s(Q,"class",null,B.class,H),de&4&&s(Q,"style",M.style,B.style,H),de&8){const me=E.dynamicProps;for(let Se=0;Se<me.length;Se++){const C=me[Se],X=M[C],be=B[C];(be!==X||C==="value")&&s(Q,C,X,be,H,v.children,I,W,U)}}de&1&&v.children!==E.children&&u(Q,E.children)}else!re&&ie==null&&V(Q,E,M,B,I,W,H);((ee=B.onVnodeUpdated)||T)&&It(()=>{ee&&sn(ee,I,E,v),T&&Kn(E,v,I,"updated")},W)},N=(v,E,I,W,H,te,re)=>{for(let Q=0;Q<E.length;Q++){const de=v[Q],ie=E[Q],T=de.el&&(de.type===An||!mr(de,ie)||de.shapeFlag&70)?f(de.el):I;m(de,ie,T,null,W,H,te,re,!0)}},V=(v,E,I,W,H,te,re)=>{if(I!==W){if(I!==et)for(const Q in I)!Gs(Q)&&!(Q in W)&&s(v,Q,I[Q],null,re,E.children,H,te,U);for(const Q in W){if(Gs(Q))continue;const de=W[Q],ie=I[Q];de!==ie&&Q!=="value"&&s(v,Q,ie,de,re,E.children,H,te,U)}"value"in W&&s(v,"value",I.value,W.value)}},pe=(v,E,I,W,H,te,re,Q,de)=>{const ie=E.el=v?v.el:o(""),T=E.anchor=v?v.anchor:o("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:ee}=E;ee&&(Q=Q?Q.concat(ee):ee),v==null?(i(ie,I,W),i(T,I,W),y(E.children,I,T,H,te,re,Q,de)):M>0&&M&64&&B&&v.dynamicChildren?(N(v.dynamicChildren,B,I,H,te,re,Q),(E.key!=null||H&&E===H.subTree)&&sh(v,E,!0)):j(v,E,I,T,H,te,re,Q,de)},k=(v,E,I,W,H,te,re,Q,de)=>{E.slotScopeIds=Q,v==null?E.shapeFlag&512?H.ctx.activate(E,I,W,re,de):D(E,I,W,H,te,re,de):P(v,E,de)},D=(v,E,I,W,H,te,re)=>{const Q=v.component=im(v,W,H);if(Yf(v)&&(Q.ctx.renderer=ve),rm(Q),Q.asyncDep){if(H&&H.registerDep(Q,q),!v.el){const de=Q.subTree=vt(Vr);x(null,de,E,I)}return}q(Q,v,E,I,H,te,re)},P=(v,E,I)=>{const W=E.component=v.component;if(_p(v,E,I))if(W.asyncDep&&!W.asyncResolved){Y(W,E,I);return}else W.next=E,up(W.update),W.update();else E.el=v.el,W.vnode=E},q=(v,E,I,W,H,te,re)=>{const Q=()=>{if(v.isMounted){let{next:T,bu:M,u:B,parent:ee,vnode:se}=v,me=T,Se;Jn(v,!1),T?(T.el=se.el,Y(v,T,re)):T=se,M&&Ao(M),(Se=T.props&&T.props.onVnodeBeforeUpdate)&&sn(Se,ee,T,se),Jn(v,!0);const C=Co(v),X=v.subTree;v.subTree=C,m(X,C,f(X.el),ce(X),v,H,te),T.el=C.el,me===null&&xp(v,C.el),B&&It(B,H),(Se=T.props&&T.props.onVnodeUpdated)&&It(()=>sn(Se,ee,T,se),H)}else{let T;const{el:M,props:B}=E,{bm:ee,m:se,parent:me}=v,Se=Ws(E);if(Jn(v,!1),ee&&Ao(ee),!Se&&(T=B&&B.onVnodeBeforeMount)&&sn(T,me,E),Jn(v,!0),M&&Me){const C=()=>{v.subTree=Co(v),Me(M,v.subTree,v,H,null)};Se?E.type.__asyncLoader().then(()=>!v.isUnmounted&&C()):C()}else{const C=v.subTree=Co(v);m(null,C,I,W,v,H,te),E.el=C.el}if(se&&It(se,H),!Se&&(T=B&&B.onVnodeMounted)){const C=E;It(()=>sn(T,me,C),H)}(E.shapeFlag&256||me&&Ws(me.vnode)&&me.vnode.shapeFlag&256)&&v.a&&It(v.a,H),v.isMounted=!0,E=I=W=null}},de=v.effect=new cl(Q,()=>gl(ie),v.scope),ie=v.update=()=>de.run();ie.id=v.uid,Jn(v,!0),ie()},Y=(v,E,I)=>{E.component=v;const W=v.vnode.props;v.vnode=E,v.next=null,Gp(v,E.props,W,I),Wp(v,E.children,I),cr(),Kl(),ur()},j=(v,E,I,W,H,te,re,Q,de=!1)=>{const ie=v&&v.children,T=v?v.shapeFlag:0,M=E.children,{patchFlag:B,shapeFlag:ee}=E;if(B>0){if(B&128){le(ie,M,I,W,H,te,re,Q,de);return}else if(B&256){ne(ie,M,I,W,H,te,re,Q,de);return}}ee&8?(T&16&&U(ie,H,te),M!==ie&&u(I,M)):T&16?ee&16?le(ie,M,I,W,H,te,re,Q,de):U(ie,H,te,!0):(T&8&&u(I,""),ee&16&&y(M,I,W,H,te,re,Q,de))},ne=(v,E,I,W,H,te,re,Q,de)=>{v=v||Lr,E=E||Lr;const ie=v.length,T=E.length,M=Math.min(ie,T);let B;for(B=0;B<M;B++){const ee=E[B]=de?Gn(E[B]):ln(E[B]);m(v[B],ee,I,null,H,te,re,Q,de)}ie>T?U(v,H,te,!0,!1,M):y(E,I,W,H,te,re,Q,de,M)},le=(v,E,I,W,H,te,re,Q,de)=>{let ie=0;const T=E.length;let M=v.length-1,B=T-1;for(;ie<=M&&ie<=B;){const ee=v[ie],se=E[ie]=de?Gn(E[ie]):ln(E[ie]);if(mr(ee,se))m(ee,se,I,null,H,te,re,Q,de);else break;ie++}for(;ie<=M&&ie<=B;){const ee=v[M],se=E[B]=de?Gn(E[B]):ln(E[B]);if(mr(ee,se))m(ee,se,I,null,H,te,re,Q,de);else break;M--,B--}if(ie>M){if(ie<=B){const ee=B+1,se=ee<T?E[ee].el:W;for(;ie<=B;)m(null,E[ie]=de?Gn(E[ie]):ln(E[ie]),I,se,H,te,re,Q,de),ie++}}else if(ie>B)for(;ie<=M;)K(v[ie],H,te,!0),ie++;else{const ee=ie,se=ie,me=new Map;for(ie=se;ie<=B;ie++){const Te=E[ie]=de?Gn(E[ie]):ln(E[ie]);Te.key!=null&&me.set(Te.key,ie)}let Se,C=0;const X=B-se+1;let be=!1,Ae=0;const Ee=new Array(X);for(ie=0;ie<X;ie++)Ee[ie]=0;for(ie=ee;ie<=M;ie++){const Te=v[ie];if(C>=X){K(Te,H,te,!0);continue}let De;if(Te.key!=null)De=me.get(Te.key);else for(Se=se;Se<=B;Se++)if(Ee[Se-se]===0&&mr(Te,E[Se])){De=Se;break}De===void 0?K(Te,H,te,!0):(Ee[De-se]=ie+1,De>=Ae?Ae=De:be=!0,m(Te,E[De],I,null,H,te,re,Q,de),C++)}const Pe=be?$p(Ee):Lr;for(Se=Pe.length-1,ie=X-1;ie>=0;ie--){const Te=se+ie,De=E[Te],Ue=Te+1<T?E[Te+1].el:W;Ee[ie]===0?m(null,De,I,Ue,H,te,re,Q,de):be&&(Se<0||ie!==Pe[Se]?$(De,I,Ue,2):Se--)}}},$=(v,E,I,W,H=null)=>{const{el:te,type:re,transition:Q,children:de,shapeFlag:ie}=v;if(ie&6){$(v.component.subTree,E,I,W);return}if(ie&128){v.suspense.move(E,I,W);return}if(ie&64){re.move(v,E,I,ve);return}if(re===An){i(te,E,I);for(let M=0;M<de.length;M++)$(de[M],E,I,W);i(v.anchor,E,I);return}if(re===Lo){_(v,E,I);return}if(W!==2&&ie&1&&Q)if(W===0)Q.beforeEnter(te),i(te,E,I),It(()=>Q.enter(te),H);else{const{leave:M,delayLeave:B,afterLeave:ee}=Q,se=()=>i(te,E,I),me=()=>{M(te,()=>{se(),ee&&ee()})};B?B(te,se,me):me()}else i(te,E,I)},K=(v,E,I,W=!1,H=!1)=>{const{type:te,props:re,ref:Q,children:de,dynamicChildren:ie,shapeFlag:T,patchFlag:M,dirs:B}=v;if(Q!=null&&Da(Q,null,I,v,!0),T&256){E.ctx.deactivate(v);return}const ee=T&1&&B,se=!Ws(v);let me;if(se&&(me=re&&re.onVnodeBeforeUnmount)&&sn(me,E,v),T&6)z(v.component,I,W);else{if(T&128){v.suspense.unmount(I,W);return}ee&&Kn(v,null,E,"beforeUnmount"),T&64?v.type.remove(v,E,I,H,ve,W):ie&&(te!==An||M>0&&M&64)?U(ie,E,I,!1,!0):(te===An&&M&384||!H&&T&16)&&U(de,E,I),W&&he(v)}(se&&(me=re&&re.onVnodeUnmounted)||ee)&&It(()=>{me&&sn(me,E,v),ee&&Kn(v,null,E,"unmounted")},I)},he=v=>{const{type:E,el:I,anchor:W,transition:H}=v;if(E===An){_e(I,W);return}if(E===Lo){S(v);return}const te=()=>{r(I),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(v.shapeFlag&1&&H&&!H.persisted){const{leave:re,delayLeave:Q}=H,de=()=>re(I,te);Q?Q(v.el,te,de):de()}else te()},_e=(v,E)=>{let I;for(;v!==E;)I=h(v),r(v),v=I;r(E)},z=(v,E,I)=>{const{bum:W,scope:H,update:te,subTree:re,um:Q}=v;W&&Ao(W),H.stop(),te&&(te.active=!1,K(re,v,E,I)),Q&&It(Q,E),It(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},U=(v,E,I,W=!1,H=!1,te=0)=>{for(let re=te;re<v.length;re++)K(v[re],E,I,W,H)},ce=v=>v.shapeFlag&6?ce(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),ue=(v,E,I)=>{v==null?E._vnode&&K(E._vnode,null,null,!0):m(E._vnode||null,v,E,null,null,null,I),Kl(),Hf(),E._vnode=v},ve={p:m,um:K,m:$,r:he,mt:D,mc:y,pc:j,pbc:N,n:ce,o:n};let ge,Me;return e&&([ge,Me]=e(ve)),{render:ue,hydrate:ge,createApp:Xp(ue,ge)}}function Jn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function sh(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Gn(r[s]),o.el=a.el),t||sh(a,o)),o.type===po&&(o.el=a.el)}}function $p(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Zp=n=>n.__isTeleport,An=Symbol(void 0),po=Symbol(void 0),Vr=Symbol(void 0),Lo=Symbol(void 0);let Hi=null,vl=1;function sc(n){vl+=n}function Ia(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const mo="__vInternal",oh=({key:n})=>n!=null?n:null,qs=({ref:n,ref_key:e,ref_for:t})=>n!=null?yt(n)||Tt(n)||ze(n)?{i:hn,r:n,k:e,f:!!t}:n:null;function Kp(n,e=null,t=null,i=0,r=null,s=n===An?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&oh(e),ref:e&&qs(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return o?(yl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),vl>0&&!a&&Hi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Hi.push(l),l}const vt=Jp;function Jp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ip)&&(n=Vr),Ia(n)){const o=Ji(n,e,!0);return t&&yl(o,t),vl>0&&!s&&Hi&&(o.shapeFlag&6?Hi[Hi.indexOf(n)]=o:Hi.push(o)),o.patchFlag|=-2,o}if(lm(n)&&(n=n.__vccOpts),e){e=Qp(e);let{class:o,style:l}=e;o&&!yt(o)&&(e.class=il(o)),at(l)&&(Df(l)&&!Oe(l)&&(l=Dt({},l)),e.style=nl(l))}const a=yt(n)?1:vp(n)?128:Zp(n)?64:at(n)?4:ze(n)?2:0;return Kp(n,e,t,i,r,a,s,!0)}function Qp(n){return n?Df(n)||mo in n?Dt({},n):n:null}function Ji(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?em(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&oh(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(qs(e)):[r,qs(e)]:qs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==An?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ji(n.ssContent),ssFallback:n.ssFallback&&Ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function ah(n=" ",e=0){return vt(po,null,n,e)}function ln(n){return n==null||typeof n=="boolean"?vt(Vr):Oe(n)?vt(An,null,n.slice()):typeof n=="object"?Gn(n):vt(po,null,String(n))}function Gn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ji(n)}function yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),yl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(mo in e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[ah(e)]):t=8);n.children=e,n.shapeFlag|=t}function em(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=il([e.class,i.class]));else if(r==="style")e.style=nl([e.style,i.style]);else if(so(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function sn(n,e,t,i=null){rn(n,e,7,[t,i])}const tm=rh();let nm=0;function im(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||tm,s={uid:nm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(i,r),emitsOptions:Wf(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dp.bind(null,s),n.ce&&n.ce(s),s}let Et=null;const Qi=n=>{Et=n,n.scope.on()},fi=()=>{Et&&Et.scope.off(),Et=null};function lh(n){return n.vnode.shapeFlag&4}let Wr=!1;function rm(n,e=!1){Wr=e;const{props:t,children:i}=n.vnode,r=lh(n);kp(n,t,r,e),Vp(n,i);const s=r?sm(n,e):void 0;return Wr=!1,s}function sm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=If(new Proxy(n.ctx,Np));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?am(n):null;Qi(n),cr();const s=Wn(i,n,0,[n.props,r]);if(ur(),fi(),xf(s)){if(s.then(fi,fi),e)return s.then(a=>{oc(n,a,e)}).catch(a=>{co(a,n,0)});n.asyncDep=s}else oc(n,s,e)}else ch(n,e)}function oc(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=zf(e)),ch(n,t)}let ac;function ch(n,e,t){const i=n.type;if(!n.render){if(!e&&ac&&!i.render){const r=i.template||_l(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:s,delimiters:o},a),l);i.render=ac(r,c)}}n.render=i.render||nn}Qi(n),cr(),Op(n),ur(),fi()}function om(n){return new Proxy(n.attrs,{get(e,t){return Wt(n,"get","$attrs"),e[t]}})}function am(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=om(n))},slots:n.slots,emit:n.emit,expose:e}}function Ml(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(zf(If(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}}))}function lm(n){return ze(n)&&"__vccOpts"in n}const fn=(n,e)=>ap(n,e,Wr);function uh(n,e,t){const i=arguments.length;return i===2?at(e)&&!Oe(e)?Ia(e)?vt(n,null,[e]):vt(n,e):vt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ia(t)&&(t=[t]),vt(n,e,t))}const cm=Symbol(""),um=()=>Ln(cm),fm="3.2.45",hm="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,lc=oi&&oi.createElement("template"),dm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?oi.createElementNS(hm,n):oi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{lc.innerHTML=i?`<svg>${n}</svg>`:n;const o=lc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function pm(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function mm(n,e,t){const i=n.style,r=yt(t);if(t&&!r){for(const s in t)Na(i,s,t[s]);if(e&&!yt(e))for(const s in e)t[s]==null&&Na(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const cc=/\s*!important$/;function Na(n,e,t){if(Oe(t))t.forEach(i=>Na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=gm(n,e);cc.test(t)?n.setProperty(lr(i),t.replace(cc,""),"important"):n[i]=t}}const uc=["Webkit","Moz","ms"],Ro={};function gm(n,e){const t=Ro[e];if(t)return t;let i=Zi(e);if(i!=="filter"&&i in n)return Ro[e]=i;i=vf(i);for(let r=0;r<uc.length;r++){const s=uc[r]+i;if(s in n)return Ro[e]=s}return e}const fc="http://www.w3.org/1999/xlink";function _m(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(fc,e.slice(6,e.length)):n.setAttributeNS(fc,e,t);else{const s=xd(e);t==null||s&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function xm(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=_f(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function vm(n,e,t,i){n.addEventListener(e,t,i)}function ym(n,e,t,i){n.removeEventListener(e,t,i)}function Mm(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Sm(e);if(i){const c=s[e]=Em(i,r);vm(n,o,c,l)}else a&&(ym(n,o,a,l),s[e]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function Sm(n){let e;if(hc.test(n)){e={};let i;for(;i=n.match(hc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):lr(n.slice(2)),e]}let Do=0;const bm=Promise.resolve(),wm=()=>Do||(bm.then(()=>Do=0),Do=Date.now());function Em(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(Tm(i,t.value),e,5,[i])};return t.value=n,t.attached=wm(),t}function Tm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const dc=/^on[a-z]/,Am=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?pm(n,i,r):e==="style"?mm(n,t,i):so(e)?rl(e)||Mm(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cm(n,e,i,r))?xm(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),_m(n,e,i,r))};function Cm(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&dc.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||dc.test(e)&&yt(t)?!1:e in n}const Pm=Dt({patchProp:Am},dm);let pc;function Lm(){return pc||(pc=jp(Pm))}const Rm=(...n)=>{const e=Lm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Dm(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Dm(n){return yt(n)?document.querySelector(n):n}const Im="_mainPage_p9byw_1",Nm={mainPage:Im};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="148",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,mc=1,Fm=2,fh=1,zm=2,Tr=3,pi=0,Yt=1,bl=2,hs=3,qn=0,Yi=1,gc=2,_c=3,xc=4,Um=5,Bi=100,Bm=101,km=102,vc=103,yc=104,Gm=200,Hm=201,Vm=202,Wm=203,hh=204,dh=205,qm=206,Xm=207,jm=208,Ym=209,$m=210,Zm=0,Km=1,Jm=2,Oa=3,Qm=4,eg=5,tg=6,ng=7,ph=0,ig=1,rg=2,Rn=0,sg=1,og=2,ag=3,lg=4,cg=5,mh=300,er=301,tr=302,Fa=303,za=304,go=306,Ua=1e3,en=1001,Ba=1002,Rt=1003,Mc=1004,Io=1005,jt=1006,ug=1007,qr=1008,mi=1009,fg=1010,hg=1011,gh=1012,dg=1013,li=1014,ci=1015,Xr=1016,pg=1017,mg=1018,$i=1020,gg=1021,_g=1022,tn=1023,xg=1024,vg=1025,hi=1026,nr=1027,yg=1028,Mg=1029,Sg=1030,bg=1031,wg=1033,No=33776,Oo=33777,Fo=33778,zo=33779,Sc=35840,bc=35841,wc=35842,Ec=35843,Eg=36196,Tc=37492,Ac=37496,Cc=37808,Pc=37809,Lc=37810,Rc=37811,Dc=37812,Ic=37813,Nc=37814,Oc=37815,Fc=37816,zc=37817,Uc=37818,Bc=37819,kc=37820,Gc=37821,Hc=36492,gi=3e3,Je=3001,Tg=3200,Ag=3201,Cg=0,Pg=1,an="srgb",jr="srgb-linear",Uo=7680,Lg=519,Vc=35044,Wc="300 es",ka=1035;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,qc=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Rg(n,e){return(n%e+e)%e}function ko(n,e,t){return(1-t)*n+t*e}function Xc(n){return(n&n-1)===0&&n!==0}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],m=r[0],p=r[3],x=r[6],w=r[1],_=r[4],S=r[7],b=r[2],R=r[5],O=r[8];return s[0]=a*m+o*w+l*b,s[3]=a*p+o*_+l*R,s[6]=a*x+o*S+l*O,s[1]=c*m+u*w+f*b,s[4]=c*p+u*_+f*R,s[7]=c*x+u*S+f*O,s[2]=h*m+d*w+g*b,s[5]=h*p+d*_+g*R,s[8]=h*x+d*S+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(o*i-r*a)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ht;function _h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ho={[an]:{[jr]:di},[jr]:{[an]:Xs}},Ct={legacyMode:!0,get workingColorSpace(){return jr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ho[e]&&Ho[e][t]!==void 0){const i=Ho[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},Zt={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ms(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ct.workingColorSpace){if(e=Rg(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vo(a,s,e+1/3),this.g=Vo(a,s,e),this.b=Vo(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ct.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ct.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const i=xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Ct.fromWorkingColorSpace(ms(this,ht),e),bt(ht.r*255,0,255)<<16^bt(ht.g*255,0,255)<<8^bt(ht.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(ms(this,ht),t);const i=ht.r,r=ht.g,s=ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(ms(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=an){return Ct.fromWorkingColorSpace(ms(this,ht),e),e!==an?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=i,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(ps);const i=ko(Zt.h,ps.h,t),r=ko(Zt.s,ps.s,t),s=ko(Zt.l,ps.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=xh;let wi;class vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Qs("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yh{constructor(e=null){this.isSource=!0,this.uuid=fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wo(r[a].image)):s.push(Wo(r[a]))}else s=Wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dg=0;class Vt extends Mi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=en,r=en,s=jt,a=qr,o=tn,l=mi,c=Vt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=fr(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=mh;Vt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(d+1)/2,b=(x+1)/2,R=(u+h)/4,O=(f+m)/4,y=(g+p)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=O/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=O/s,r=y/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-m)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends Mi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ig extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==d||u!==g){let p=1-o;const x=l*h+c*d+u*g+f*m,w=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const b=Math.sqrt(_),R=Math.atan2(b,x*w);p=Math.sin(p*R)/b,o=Math.sin(o*R)/b}const S=o*w;if(l=l*p+h*S,c=c*p+d*S,u=u*p+g*S,f=f*p+m*S,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new F,jc=new xi;class ns{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Qn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),gs.subVectors(this.max,gr),Ei.subVectors(e.a,gr),Ti.subVectors(e.b,gr),Ai.subVectors(e.c,gr),On.subVectors(Ti,Ei),Fn.subVectors(Ai,Ti),ei.subVectors(Ei,Ai);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-ei.z,ei.y,On.z,0,-On.x,Fn.z,0,-Fn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-ei.y,ei.x,0];return!jo(t,Ei,Ti,Ai,gs)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Ei,Ti,Ai,gs))?!1:(_s.crossVectors(On,Fn),t=[_s.x,_s.y,_s.z],jo(t,Ei,Ti,Ai,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new F,new F,new F,new F,new F,new F,new F,new F],Qn=new F,Xo=new ns,Ei=new F,Ti=new F,Ai=new F,On=new F,Fn=new F,ei=new F,gr=new F,gs=new F,_s=new F,ti=new F;function jo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ng=new ns,_r=new F,Yo=new F;class _o{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ng.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Yo)),this.expandByPoint(_r.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new F,$o=new F,xs=new F,zn=new F,Zo=new F,vs=new F,Ko=new F;class wl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.direction).multiplyScalar(t).add(this.origin),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$o.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=zn.dot(this.direction),l=-zn.dot(xs),c=zn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(xs).multiplyScalar(h).add($o),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Zo.subVectors(t,e),vs.subVectors(i,e),Ko.crossVectors(Zo,vs);let a=this.direction.dot(Ko),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(vs.crossVectors(zn,vs));if(l<0)return null;const c=o*this.direction.dot(Zo.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(Ko);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,m,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=m+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h-m*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=m-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,m=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Og,e,Fg)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Un.crossVectors(i,Ut),Un.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Un.crossVectors(i,Ut)),Un.normalize(),ys.crossVectors(Ut,Un),r[0]=Un.x,r[4]=ys.x,r[8]=Ut.x,r[1]=Un.y,r[5]=ys.y,r[9]=Ut.y,r[2]=Un.z,r[6]=ys.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],m=i[6],p=i[10],x=i[14],w=i[3],_=i[7],S=i[11],b=i[15],R=r[0],O=r[4],y=r[8],L=r[12],N=r[1],V=r[5],pe=r[9],k=r[13],D=r[2],P=r[6],q=r[10],Y=r[14],j=r[3],ne=r[7],le=r[11],$=r[15];return s[0]=a*R+o*N+l*D+c*j,s[4]=a*O+o*V+l*P+c*ne,s[8]=a*y+o*pe+l*q+c*le,s[12]=a*L+o*k+l*Y+c*$,s[1]=u*R+f*N+h*D+d*j,s[5]=u*O+f*V+h*P+d*ne,s[9]=u*y+f*pe+h*q+d*le,s[13]=u*L+f*k+h*Y+d*$,s[2]=g*R+m*N+p*D+x*j,s[6]=g*O+m*V+p*P+x*ne,s[10]=g*y+m*pe+p*q+x*le,s[14]=g*L+m*k+p*Y+x*$,s[3]=w*R+_*N+S*D+b*j,s[7]=w*O+_*V+S*P+b*ne,s[11]=w*y+_*pe+S*q+b*le,s[15]=w*L+_*k+S*Y+b*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],x=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+m*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+x*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],x=e[15],w=f*p*c-m*h*c+m*l*d-o*p*d-f*l*x+o*h*x,_=g*h*c-u*p*c-g*l*d+a*p*d+u*l*x-a*h*x,S=u*m*c-g*f*c+g*o*d-a*m*d-u*o*x+a*f*x,b=g*f*l-u*m*l-g*o*h+a*m*h+u*o*p-a*f*p,R=t*w+i*_+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=w*O,e[1]=(m*h*s-f*p*s-m*r*d+i*p*d+f*r*x-i*h*x)*O,e[2]=(o*p*s-m*l*s+m*r*c-i*p*c-o*r*x+i*l*x)*O,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*O,e[4]=_*O,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*x+t*h*x)*O,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*x-t*l*x)*O,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*O,e[8]=S*O,e[9]=(g*f*s-u*m*s-g*i*d+t*m*d+u*i*x-t*f*x)*O,e[10]=(a*m*s-g*o*s+g*i*c-t*m*c-a*i*x+t*o*x)*O,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*O,e[12]=b*O,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*p+t*f*p)*O,e[14]=(g*o*r-a*m*r-g*i*l+t*m*l+a*i*p-t*o*p)*O,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,m=a*u,p=a*f,x=o*f,w=l*c,_=l*u,S=l*f,b=i.x,R=i.y,O=i.z;return r[0]=(1-(m+x))*b,r[1]=(d+S)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(h+x))*R,r[6]=(p+w)*R,r[7]=0,r[8]=(g+_)*O,r[9]=(p-w)*O,r[10]=(1-(h+m))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/a,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new F,Kt=new rt,Og=new F(0,0,0),Fg=new F(1,1,1),Un=new F,ys=new F,Ut=new F,Yc=new rt,$c=new xi;class is{constructor(e=0,t=0,i=0,r=is.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}is.DefaultOrder="XYZ";is.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zg=0;const Zc=new F,Pi=new xi,Mn=new rt,Ms=new F,xr=new F,Ug=new F,Bg=new xi,Kc=new F(1,0,0),Jc=new F(0,1,0),Qc=new F(0,0,1),kg={type:"added"},eu={type:"removed"};class xt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DefaultUp.clone();const e=new F,t=new is,i=new xi,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ht}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=xt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DefaultMatrixWorldAutoUpdate,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(xr,Ms,this.up):Mn.lookAt(Ms,xr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(eu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DefaultUp=new F(0,1,0);xt.DefaultMatrixAutoUpdate=!0;xt.DefaultMatrixWorldAutoUpdate=!0;const Jt=new F,Sn=new F,Jo=new F,bn=new F,Li=new F,Ri=new F,tu=new F,Qo=new F,ea=new F,ta=new F;class Cn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),Sn.subVectors(i,t),Jo.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Sn),l=Jt.dot(Jo),c=Sn.dot(Sn),u=Sn.dot(Jo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,bn),l.set(0,0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),Sn.subVectors(e,t),Jt.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Jt.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Cn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,i),Ri.subVectors(s,i),Qo.subVectors(e,i);const l=Li.dot(Qo),c=Ri.dot(Qo);if(l<=0&&c<=0)return t.copy(i);ea.subVectors(e,r);const u=Li.dot(ea),f=Ri.dot(ea);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Li,a);ta.subVectors(e,s);const d=Li.dot(ta),g=Ri.dot(ta);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ri,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return tu.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(tu,o);const x=1/(p+m+h);return a=m*x,o=h*x,t.copy(i).addScaledVector(Li,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gg=0;class rs extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Yi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hh,this.blendDst=dh,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tl extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new F,Ss=new ye;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sh extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bh extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hg=0;const Xt=new rt,na=new xt,Di=new F,Bt=new ns,vr=new ns,_t=new F;class mn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?bh:Sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Bt.min,vr.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,vr.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(vr.min),Bt.expandByPoint(vr.max))}Bt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),_t.add(Di)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new F,u[N]=new F;const f=new F,h=new F,d=new F,g=new ye,m=new ye,p=new ye,x=new F,w=new F;function _(N,V,pe){f.fromArray(r,N*3),h.fromArray(r,V*3),d.fromArray(r,pe*3),g.fromArray(a,N*2),m.fromArray(a,V*2),p.fromArray(a,pe*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const k=1/(m.x*p.y-p.x*m.y);!isFinite(k)||(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(k),w.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(k),c[N].add(x),c[V].add(x),c[pe].add(x),u[N].add(w),u[V].add(w),u[pe].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let N=0,V=S.length;N<V;++N){const pe=S[N],k=pe.start,D=pe.count;for(let P=k,q=k+D;P<q;P+=3)_(i[P+0],i[P+1],i[P+2])}const b=new F,R=new F,O=new F,y=new F;function L(N){O.fromArray(s,N*3),y.copy(O);const V=c[N];b.copy(V),b.sub(O.multiplyScalar(O.dot(V))).normalize(),R.crossVectors(y,V);const k=R.dot(u[N])<0?-1:1;l[N*4]=b.x,l[N*4+1]=b.y,l[N*4+2]=b.z,l[N*4+3]=k}for(let N=0,V=S.length;N<V;++N){const pe=S[N],k=pe.start,D=pe.count;for(let P=k,q=k+D;P<q;P+=3)L(i[P+0]),L(i[P+1]),L(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let x=0;x<u;x++)h[g++]=c[d++]}return new dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new rt,Ii=new wl,ia=new _o,yr=new F,Mr=new F,Sr=new F,ra=new F,bs=new F,ws=new ye,Es=new ye,Ts=new ye,sa=new F,As=new F;class Pn extends xt{constructor(e=new mn,t=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ra.fromBufferAttribute(f,e),a?bs.addScaledVector(ra,u):bs.addScaledVector(ra.sub(t),u))}t.add(bs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),e.ray.intersectsSphere(ia)===!1)||(nu.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(nu),i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=r[m.materialIndex],x=Math.max(m.start,h.start),w=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=x,S=w;_<S;_+=3){const b=o.getX(_),R=o.getX(_+1),O=o.getX(_+2);a=Cs(this,p,e,Ii,c,u,b,R,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const d=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const x=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);a=Cs(this,r,e,Ii,c,u,x,w,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=r[m.materialIndex],x=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=x,S=w;_<S;_+=3){const b=_,R=_+1,O=_+2;a=Cs(this,p,e,Ii,c,u,b,R,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const d=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const x=m,w=m+1,_=m+2;a=Cs(this,r,e,Ii,c,u,x,w,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Vg(n,e,t,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pi,o),l===null)return null;As.copy(o),As.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,yr),n.getVertexPosition(o,Mr),n.getVertexPosition(l,Sr);const c=Vg(n,e,t,i,yr,Mr,Sr,sa);if(c){r&&(ws.fromBufferAttribute(r,a),Es.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,l),c.uv=Cn.getUV(sa,yr,Mr,Sr,ws,Es,Ts,new ye)),s&&(ws.fromBufferAttribute(s,a),Es.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,l),c.uv2=Cn.getUV(sa,yr,Mr,Sr,ws,Es,Ts,new ye));const u={a,b:o,c:l,normal:new F,materialIndex:0};Cn.getNormal(yr,Mr,Sr,u.normal),c.face=u}return c}class ss extends mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(f,2));function g(m,p,x,w,_,S,b,R,O,y,L){const N=S/O,V=b/y,pe=S/2,k=b/2,D=R/2,P=O+1,q=y+1;let Y=0,j=0;const ne=new F;for(let le=0;le<q;le++){const $=le*V-k;for(let K=0;K<P;K++){const he=K*N-pe;ne[m]=he*w,ne[p]=$*_,ne[x]=D,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[p]=0,ne[x]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(K/O),f.push(1-le/y),Y+=1}}for(let le=0;le<y;le++)for(let $=0;$<O;$++){const K=h+$+P*le,he=h+$+P*(le+1),_e=h+($+1)+P*(le+1),z=h+($+1)+P*le;l.push(K,he,z),l.push(he,_e,z),j+=6}o.addGroup(d,j,L),d+=j,h+=Y}}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function Wg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wh(n){return n.getRenderTarget()===null&&n.outputEncoding===Je?an:jr}const qg={clone:ir,merge:Lt};var Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Oi=1;class Yg extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Gt(Ni,Oi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Gt(Ni,Oi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Gt(Ni,Oi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Gt(Ni,Oi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Gt(Ni,Oi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Gt(Ni,Oi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Th extends Vt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $g extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Th(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:qn});s.uniforms.tEquirect.value=t;const a=new Pn(r,s),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=jt),new Yg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const oa=new F,Zg=new F,Kg=new Ht;class ii{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oa.subVectors(i,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kg.getNormalMatrix(e),r=this.coplanarPoint(oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new _o,Ps=new F;class Al{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],m=i[11],p=i[12],x=i[13],w=i[14],_=i[15];return t[0].setComponents(o-r,f-l,m-h,_-p).normalize(),t[1].setComponents(o+r,f+l,m+h,_+p).normalize(),t[2].setComponents(o+s,f+c,m+d,_+x).normalize(),t[3].setComponents(o-s,f-c,m-d,_-x).normalize(),t[4].setComponents(o-a,f-u,m-g,_-w).normalize(),t[5].setComponents(o+a,f+u,m+g,_+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ah(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Cl extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],m=[],p=[];for(let x=0;x<u;x++){const w=x*h-a;for(let _=0;_<c;_++){const S=_*f-s;g.push(S,-w,0),m.push(0,0,1),p.push(_/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let w=0;w<o;w++){const _=w+c*x,S=w+c*(x+1),b=w+1+c*(x+1),R=w+1+c*x;d.push(_,S,R),d.push(S,b,R)}this.setIndex(d),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(p,2))}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_="vec3 transformed = vec3( position );",o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,l_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,H_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Y_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,J_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,u0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,d0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,I0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,W0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,q0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,X0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,j0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Y0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ix=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Qg,alphamap_pars_fragment:e_,alphatest_fragment:t_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:r_,begin_vertex:s_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:x_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:y_,displacementmap_pars_vertex:M_,displacementmap_vertex:S_,emissivemap_fragment:b_,emissivemap_pars_fragment:w_,encodings_fragment:E_,encodings_pars_fragment:T_,envmap_fragment:A_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:H_,envmap_vertex:R_,fog_vertex:D_,fog_pars_vertex:I_,fog_fragment:N_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_fragment:z_,lightmap_pars_fragment:U_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:k_,lights_pars_begin:G_,lights_toon_fragment:V_,lights_toon_pars_fragment:W_,lights_phong_fragment:q_,lights_phong_pars_fragment:X_,lights_physical_fragment:j_,lights_physical_pars_fragment:Y_,lights_fragment_begin:$_,lights_fragment_maps:Z_,lights_fragment_end:K_,logdepthbuf_fragment:J_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:t0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:h0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,output_fragment:S0,packing:b0,premultiplied_alpha_fragment:w0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:R0,shadowmap_vertex:D0,shadowmask_pars_fragment:I0,skinbase_vertex:N0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:z0,specularmap_fragment:U0,specularmap_pars_fragment:B0,tonemapping_fragment:k0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:q0,uv_vertex:X0,uv2_pars_fragment:j0,uv2_pars_vertex:Y0,uv2_vertex:$0,worldpos_vertex:Z0,background_vert:K0,background_frag:J0,backgroundCube_vert:Q0,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:rx,distanceRGBA_vert:sx,distanceRGBA_frag:ox,equirect_vert:ax,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:hx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:_x,meshnormal_frag:xx,meshphong_vert:vx,meshphong_frag:yx,meshphysical_vert:Mx,meshphysical_frag:Sx,meshtoon_vert:bx,meshtoon_frag:wx,points_vert:Ex,points_frag:Tx,shadow_vert:Ax,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Lx},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},cn={basic:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([we.points,we.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([we.common,we.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([we.sprite,we.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};cn.physical={uniforms:Lt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ls={r:0,b:0,g:0};function Rx(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,x){let w=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const S=n.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?m(o,l):_&&_.isColor&&(m(_,1),w=!0),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===go)?(u===void 0&&(u=new Pn(new ss(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ir(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,O,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==Je,(f!==_||h!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pn(new Cl(2,2),new vi({name:"BackgroundMaterial",uniforms:ir(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_.encoding!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,x){p.getRGB(Ls,wh(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function Dx(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(D,P,q,Y,j){let ne=!1;if(a){const le=m(Y,q,P);c!==le&&(c=le,d(c.object)),ne=x(D,Y,q,j),ne&&w(D,Y,q,j)}else{const le=P.wireframe===!0;(c.geometry!==Y.id||c.program!==q.id||c.wireframe!==le)&&(c.geometry=Y.id,c.program=q.id,c.wireframe=le,ne=!0)}j!==null&&t.update(j,34963),(ne||u)&&(u=!1,y(D,P,q,Y),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,P,q){const Y=q.wireframe===!0;let j=o[D.id];j===void 0&&(j={},o[D.id]=j);let ne=j[P.id];ne===void 0&&(ne={},j[P.id]=ne);let le=ne[Y];return le===void 0&&(le=p(h()),ne[Y]=le),le}function p(D){const P=[],q=[],Y=[];for(let j=0;j<r;j++)P[j]=0,q[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function x(D,P,q,Y){const j=c.attributes,ne=P.attributes;let le=0;const $=q.getAttributes();for(const K in $)if($[K].location>=0){const _e=j[K];let z=ne[K];if(z===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),_e===void 0||_e.attribute!==z||z&&_e.data!==z.data)return!0;le++}return c.attributesNum!==le||c.index!==Y}function w(D,P,q,Y){const j={},ne=P.attributes;let le=0;const $=q.getAttributes();for(const K in $)if($[K].location>=0){let _e=ne[K];_e===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const z={};z.attribute=_e,_e&&_e.data&&(z.data=_e.data),j[K]=z,le++}c.attributes=j,c.attributesNum=le,c.index=Y}function _(){const D=c.newAttributes;for(let P=0,q=D.length;P<q;P++)D[P]=0}function S(D){b(D,0)}function b(D,P){const q=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;q[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),j[D]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,P),j[D]=P)}function R(){const D=c.newAttributes,P=c.enabledAttributes;for(let q=0,Y=P.length;q<Y;q++)P[q]!==D[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function O(D,P,q,Y,j,ne){i.isWebGL2===!0&&(q===5124||q===5125)?n.vertexAttribIPointer(D,P,q,j,ne):n.vertexAttribPointer(D,P,q,Y,j,ne)}function y(D,P,q,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=Y.attributes,ne=q.getAttributes(),le=P.defaultAttributeValues;for(const $ in ne){const K=ne[$];if(K.location>=0){let he=j[$];if(he===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),he!==void 0){const _e=he.normalized,z=he.itemSize,U=t.get(he);if(U===void 0)continue;const ce=U.buffer,ue=U.type,ve=U.bytesPerElement;if(he.isInterleavedBufferAttribute){const ge=he.data,Me=ge.stride,v=he.offset;if(ge.isInstancedInterleavedBuffer){for(let E=0;E<K.locationSize;E++)b(K.location+E,ge.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let E=0;E<K.locationSize;E++)S(K.location+E);n.bindBuffer(34962,ce);for(let E=0;E<K.locationSize;E++)O(K.location+E,z/K.locationSize,ue,_e,Me*ve,(v+z/K.locationSize*E)*ve)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)b(K.location+ge,he.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<K.locationSize;ge++)S(K.location+ge);n.bindBuffer(34962,ce);for(let ge=0;ge<K.locationSize;ge++)O(K.location+ge,z/K.locationSize,ue,_e,z*ve,z/K.locationSize*ge*ve)}}else if(le!==void 0){const _e=le[$];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(K.location,_e);break;case 3:n.vertexAttrib3fv(K.location,_e);break;case 4:n.vertexAttrib4fv(K.location,_e);break;default:n.vertexAttrib1fv(K.location,_e)}}}}R()}function L(){pe();for(const D in o){const P=o[D];for(const q in P){const Y=P[q];for(const j in Y)g(Y[j].object),delete Y[j];delete P[q]}delete o[D]}}function N(D){if(o[D.id]===void 0)return;const P=o[D.id];for(const q in P){const Y=P[q];for(const j in Y)g(Y[j].object),delete Y[j];delete P[q]}delete o[D.id]}function V(D){for(const P in o){const q=o[P];if(q[D.id]===void 0)continue;const Y=q[D.id];for(const j in Y)g(Y[j].object),delete Y[j];delete q[D.id]}}function pe(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:pe,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:S,disableUnusedAttributes:R}}function Ix(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Nx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),x=n.getParameter(36348),w=n.getParameter(36349),_=h>0,S=a||e.has("OES_texture_float"),b=_&&S,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:R}}function Ox(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ii,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,d,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,x=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,_=w*4;let S=x.clippingState||null;l.value=S,S=u(g,h,_,d);for(let b=0;b!==_;++b)S[b]=t[b];x.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const x=d+m*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<x)&&(p=new Float32Array(x));for(let _=0,S=d;_!==m;++_,S+=4)a.copy(f[_]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Fx(n){let e=new WeakMap;function t(a,o){return o===Fa?a.mapping=er:o===za&&(a.mapping=tr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fa||o===za)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $g(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zx extends Eh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,iu=[.125,.215,.35,.446,.526,.582],ai=20,aa=new zx,ru=new Ze;let la=null;const ri=(1+Math.sqrt(5))/2,zi=1/ri,su=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ri,zi),new F(0,ri,-zi),new F(zi,0,ri),new F(-zi,0,ri),new F(ri,zi,0),new F(-ri,zi,0)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){la=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Xr,format:tn,encoding:gi,depthBuffer:!1},r=au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(s)),this._blurMaterial=Bx(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ru),u.toneMapping=Rn,u.autoClear=!1;const d=new Tl({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new Pn(new ss,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(ru),m=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):w===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const _=this._cubeSize;Rs(r,w*_,x>2?_:0,_,_),u.setRenderTarget(r),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=su[(r-1)%su.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ai-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const x=[];let w=0;for(let O=0;O<ai;++O){const y=O/m,L=Math.exp(-y*y/2);x.push(L),O===0?w+=L:O<p&&(w+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-Vi?r-_+Vi:0),R=4*(this._cubeSize-S);Rs(t,b,R,3*S,2*S),l.setRenderTarget(t),l.render(f,aa)}}function Ux(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+iu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vi?l=iu[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,x=1,w=new Float32Array(m*g*d),_=new Float32Array(p*g*d),S=new Float32Array(x*g*d);for(let R=0;R<d;R++){const O=R%3*2/3-1,y=R>2?0:-1,L=[O,y,0,O+2/3,y,0,O+2/3,y+1,0,O,y,0,O+2/3,y+1,0,O,y+1,0];w.set(L,m*g*R),_.set(h,p*g*R);const N=[R,R,R,R,R,R];S.set(N,x*g*R)}const b=new mn;b.setAttribute("position",new dn(w,m)),b.setAttribute("uv",new dn(_,p)),b.setAttribute("faceIndex",new dn(S,x)),e.push(b),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function au(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bx(n,e,t){const i=new Float32Array(ai),r=new F(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function lu(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function cu(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fa||l===za,u=l===er||l===tr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ou(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new ou(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const w=d.array;m=d.version;for(let _=0,S=w.length;_<S;_+=3){const b=w[_+0],R=w[_+1],O=w[_+2];h.push(b,R,R,O,O,b)}}else{const w=g.array;m=g.version;for(let _=0,S=w.length/3-1;_<S;_+=3){const b=_+0,R=_+1,O=_+2;h.push(b,R,R,O,O,b)}}const p=new(_h(h)?bh:Sh)(h,1);p.version=m;const x=s.get(f);x&&e.remove(x),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Vx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Wx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qx(n,e){return n[0]-e[0]}function Xx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function jx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let x=s.get(u);if(x===void 0||x.count!==p){let q=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var g=q;x!==void 0&&x.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let N=0;S===!0&&(N=1),b===!0&&(N=2),R===!0&&(N=3);let V=u.attributes.position.count*N,pe=1;V>e.maxTextureSize&&(pe=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const k=new Float32Array(V*pe*4*p),D=new Mh(k,V,pe,p);D.type=ci,D.needsUpdate=!0;const P=N*4;for(let Y=0;Y<p;Y++){const j=O[Y],ne=y[Y],le=L[Y],$=V*pe*4*Y;for(let K=0;K<j.count;K++){const he=K*P;S===!0&&(a.fromBufferAttribute(j,K),k[$+he+0]=a.x,k[$+he+1]=a.y,k[$+he+2]=a.z,k[$+he+3]=0),b===!0&&(a.fromBufferAttribute(ne,K),k[$+he+4]=a.x,k[$+he+5]=a.y,k[$+he+6]=a.z,k[$+he+7]=0),R===!0&&(a.fromBufferAttribute(le,K),k[$+he+8]=a.x,k[$+he+9]=a.y,k[$+he+10]=a.z,k[$+he+11]=le.itemSize===4?a.w:1)}}x={count:p,texture:D,size:new ye(V,pe)},s.set(u,x),u.addEventListener("dispose",q)}let w=0;for(let S=0;S<d.length;S++)w+=d[S];const _=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const m=d===void 0?0:d.length;let p=i[u.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];i[u.id]=p}for(let b=0;b<m;b++){const R=p[b];R[0]=b,R[1]=d[b]}p.sort(Xx);for(let b=0;b<8;b++)b<m&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(qx);const x=u.morphAttributes.position,w=u.morphAttributes.normal;let _=0;for(let b=0;b<8;b++){const R=o[b],O=R[0],y=R[1];O!==Number.MAX_SAFE_INTEGER&&y?(x&&u.getAttribute("morphTarget"+b)!==x[O]&&u.setAttribute("morphTarget"+b,x[O]),w&&u.getAttribute("morphNormal"+b)!==w[O]&&u.setAttribute("morphNormal"+b,w[O]),r[b]=y,_+=y):(x&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),w&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Yx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ch=new Vt,Ph=new Mh,Lh=new Ig,Rh=new Th,uu=[],fu=[],hu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uu[r];if(s===void 0&&(s=new Float32Array(r),uu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;pu.set(i),n.uniformMatrix2fv(this.addr,!1,pu),pt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),pt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),pt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ch,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lh,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rh,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ph,r)}function pv(n){switch(n){case 5126:return $x;case 35664:return Zx;case 35665:return Kx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function _v(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function xv(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function vv(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yv(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mv(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sv(n,e){n.uniform1iv(this.addr,e)}function bv(n,e){n.uniform2iv(this.addr,e)}function wv(n,e){n.uniform3iv(this.addr,e)}function Ev(n,e){n.uniform4iv(this.addr,e)}function Tv(n,e){n.uniform1uiv(this.addr,e)}function Av(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Pv(n,e){n.uniform4uiv(this.addr,e)}function Lv(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ch,s[a])}function Rv(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lh,s[a])}function Dv(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rh,s[a])}function Iv(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ph,s[a])}function Nv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return xv;case 35674:return vv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=pv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Nv(t.type)}}class zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function mu(n,e){n.seq.push(e),n.map[e.id]=e}function Uv(n,e,t){const i=n.name,r=i.length;for(ca.lastIndex=0;;){const s=ca.exec(i),a=ca.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mu(t,c===void 0?new Ov(o,n,e):new Fv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zv(o),mu(t,f)),t=f}}}class js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Uv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function gu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Bv=0;function kv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Gv(n){switch(n){case gi:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function _u(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kv(n.getShaderSource(e),a)}else return r}function Hv(n,e){const t=Gv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vv(n,e){let t;switch(e){case sg:t="Linear";break;case og:t="Reinhard";break;case ag:t="OptimizedCineon";break;case lg:t="ACESFilmic";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wv(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function qv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ar(n){return n!==""}function xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(jv,Yv)}function Yv(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ha(t)}const $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace($v,Zv)}function Zv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Jv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case rg:e="ENVMAP_BLENDING_ADD";break}return e}function ty(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ny(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kv(t),c=Jv(t),u=Qv(t),f=ey(t),h=ty(t),d=t.isWebGL2?"":Wv(t),g=qv(s),m=r.createProgram();let p,x,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter(Ar).join(`
`),x.length>0&&(x+=`
`)):(p=[Mu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),x=[d,Mu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Hv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Ha(a),a=xu(a,t),a=vu(a,t),o=Ha(o),o=xu(o,t),o=vu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=w+p+a,S=w+x+o,b=gu(r,35633,_),R=gu(r,35632,S);if(r.attachShader(m,b),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(R).trim();let pe=!0,k=!0;if(r.getProgramParameter(m,35714)===!1){pe=!1;const D=_u(r,b,"vertex"),P=_u(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+D+`
`+P)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||V==="")&&(k=!1);k&&(this.diagnostics={runnable:pe,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:V,prefix:x}})}r.deleteShader(b),r.deleteShader(R);let O;this.getUniforms=function(){return O===void 0&&(O=new js(r,m)),O};let y;return this.getAttributes=function(){return y===void 0&&(y=Xv(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}let iy=0;class ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sy(e),t.set(e,i)),i}}class sy{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}}function oy(n,e,t,i,r,s,a){const o=new El,l=new ry,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,L,N,V,pe){const k=V.fog,D=pe.geometry,P=y.isMeshStandardMaterial?V.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||P),Y=!!q&&q.mapping===go?q.image.height:null,j=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=ne!==void 0?ne.length:0;let $=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let K,he,_e,z;if(j){const Me=cn[j];K=Me.vertexShader,he=Me.fragmentShader}else K=y.vertexShader,he=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),z=l.getFragmentShaderID(y);const U=n.getRenderTarget(),ce=y.alphaTest>0,ue=y.clearcoat>0,ve=y.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:y.type,vertexShader:K,fragmentShader:he,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?n.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:gi,map:!!y.map,matcap:!!y.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:Y,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Pg,tangentSpaceNormalMap:y.normalMapType===Cg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Je,clearcoat:ue,clearcoatMap:ue&&!!y.clearcoatMap,clearcoatRoughnessMap:ue&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!y.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!y.iridescenceMap,iridescenceThicknessMap:ve&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Yi,alphaMap:!!y.alphaMap,alphaTest:ce,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:pe.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:$,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Rn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bl,flipSided:y.side===Yt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)L.push(N),L.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(L,y),w(L,y),L.push(n.outputEncoding)),L.push(y.customProgramCacheKey),L.join()}function x(y,L){y.push(L.precision),y.push(L.outputEncoding),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.combine),y.push(L.vertexUvs),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numSpotLightMaps),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.numSpotLightShadowsWithMaps),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection),y.push(L.depthPacking)}function w(y,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),y.push(o.mask)}function _(y){const L=g[y.type];let N;if(L){const V=cn[L];N=qg.clone(V.uniforms)}else N=y.uniforms;return N}function S(y,L){let N;for(let V=0,pe=c.length;V<pe;V++){const k=c[V];if(k.cacheKey===L){N=k,++N.usedTimes;break}}return N===void 0&&(N=new ny(n,L,y,s),c.push(N)),N}function b(y){if(--y.usedTimes===0){const L=c.indexOf(y);c[L]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:O}}function ay(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ly(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,m,p){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},n[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=d,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function o(f,h,d,g,m,p){const x=a(f,h,d,g,m,p);d.transmission>0?i.push(x):d.transparent===!0?r.push(x):t.push(x)}function l(f,h,d,g,m,p){const x=a(f,h,d,g,m,p);d.transmission>0?i.unshift(x):d.transparent===!0?r.unshift(x):t.unshift(x)}function c(f,h){t.length>1&&t.sort(f||ly),i.length>1&&i.sort(h||Su),r.length>1&&r.sort(h||Su)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function cy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bu,n.set(i,[a])):r>=s.length?(a=new bu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function uy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function fy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hy=0;function dy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function py(n,e){const t=new uy,i=fy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new rt,o=new rt;function l(u,f){let h=0,d=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let m=0,p=0,x=0,w=0,_=0,S=0,b=0,R=0,O=0,y=0;u.sort(dy);const L=f!==!0?Math.PI:1;for(let V=0,pe=u.length;V<pe;V++){const k=u[V],D=k.color,P=k.intensity,q=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=D.r*P*L,d+=D.g*P*L,g+=D.b*P*L;else if(k.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(k.sh.coefficients[j],P);else if(k.isDirectionalLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const ne=k.shadow,le=i.get(k);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,r.directionalShadow[m]=le,r.directionalShadowMap[m]=Y,r.directionalShadowMatrix[m]=k.shadow.matrix,S++}r.directional[m]=j,m++}else if(k.isSpotLight){const j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(D).multiplyScalar(P*L),j.distance=q,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,r.spot[x]=j;const ne=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,ne.updateMatrices(k),k.castShadow&&y++),r.spotLightMatrix[x]=ne.matrix,k.castShadow){const le=i.get(k);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,r.spotShadow[x]=le,r.spotShadowMap[x]=Y,R++}x++}else if(k.isRectAreaLight){const j=t.get(k);j.color.copy(D).multiplyScalar(P),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),r.rectArea[w]=j,w++}else if(k.isPointLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*L),j.distance=k.distance,j.decay=k.decay,k.castShadow){const ne=k.shadow,le=i.get(k);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,le.shadowCameraNear=ne.camera.near,le.shadowCameraFar=ne.camera.far,r.pointShadow[p]=le,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=k.shadow.matrix,b++}r.point[p]=j,p++}else if(k.isHemisphereLight){const j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(P*L),j.groundColor.copy(k.groundColor).multiplyScalar(P*L),r.hemi[_]=j,_++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==m||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==w||N.hemiLength!==_||N.numDirectionalShadows!==S||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==O)&&(r.directional.length=m,r.spot.length=x,r.rectArea.length=w,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+O-y,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=y,N.directionalLength=m,N.pointLength=p,N.spotLength=x,N.rectAreaLength=w,N.hemiLength=_,N.numDirectionalShadows=S,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=O,r.version=hy++)}function c(u,f){let h=0,d=0,g=0,m=0,p=0;const x=f.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const S=u[w];if(S.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),h++}else if(S.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const b=r.rectArea[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),o.identity(),a.copy(S.matrixWorld),a.premultiply(x),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),d++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:r}}function wu(n,e){const t=new py(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function my(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new wu(n,e),t.set(s,[l])):a>=o.length?(l=new wu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class gy extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _y extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yy(n,e,t){let i=new Al;const r=new ye,s=new ye,a=new tt,o=new gy({depthPacking:Ag}),l=new _y,c={},u=t.maxTextureSize,f={0:Yt,1:pi,2:bl},h=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:xy,fragmentShader:vy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Pn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh,this.render=function(S,b,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const O=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(qn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let V=0,pe=S.length;V<pe;V++){const k=S[V],D=k.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const P=D.getFrameExtents();if(r.multiply(P),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/P.x),r.x=s.x*P.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/P.y),r.y=s.y*P.y,D.mapSize.y=s.y)),D.map===null){const Y=this.type!==Tr?{minFilter:Rt,magFilter:Rt}:{};D.map=new _i(r.x,r.y,Y),D.map.texture.name=k.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const q=D.getViewportCount();for(let Y=0;Y<q;Y++){const j=D.getViewport(Y);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),N.viewport(a),D.updateMatrices(k,Y),i=D.getFrustum(),_(b,R,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===Tr&&x(D,R),D.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(O,y,L)};function x(S,b){const R=e.update(m);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _i(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,R,h,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,R,d,m,null)}function w(S,b,R,O,y,L){let N=null;const V=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)N=V;else if(N=R.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const pe=N.uuid,k=b.uuid;let D=c[pe];D===void 0&&(D={},c[pe]=D);let P=D[k];P===void 0&&(P=N.clone(),D[k]=P),N=P}return N.visible=b.visible,N.wireframe=b.wireframe,L===Tr?N.side=b.shadowSide!==null?b.shadowSide:b.side:N.side=b.shadowSide!==null?b.shadowSide:f[b.side],N.alphaMap=b.alphaMap,N.alphaTest=b.alphaTest,N.map=b.map,N.clipShadows=b.clipShadows,N.clippingPlanes=b.clippingPlanes,N.clipIntersection=b.clipIntersection,N.displacementMap=b.displacementMap,N.displacementScale=b.displacementScale,N.displacementBias=b.displacementBias,N.wireframeLinewidth=b.wireframeLinewidth,N.linewidth=b.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=O,N.farDistance=y),N}function _(S,b,R,O,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Tr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const V=e.update(S),pe=S.material;if(Array.isArray(pe)){const k=V.groups;for(let D=0,P=k.length;D<P;D++){const q=k[D],Y=pe[q.materialIndex];if(Y&&Y.visible){const j=w(S,Y,O,R.near,R.far,y);n.renderBufferDirect(R,null,V,j,S,q)}}}else if(pe.visible){const k=w(S,pe,O,R.near,R.far,y);n.renderBufferDirect(R,null,V,k,S,null)}}const N=S.children;for(let V=0,pe=N.length;V<pe;V++)_(N[V],b,R,O,y)}}function My(n,e,t){const i=t.isWebGL2;function r(){let G=!1;const oe=new tt;let xe=null;const Ce=new tt(0,0,0,0);return{setMask:function(Le){xe!==Le&&!G&&(n.colorMask(Le,Le,Le,Le),xe=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Xe,mt,Mt,jn){jn===!0&&(Le*=Mt,Xe*=Mt,mt*=Mt),oe.set(Le,Xe,mt,Mt),Ce.equals(oe)===!1&&(n.clearColor(Le,Xe,mt,Mt),Ce.copy(oe))},reset:function(){G=!1,xe=null,Ce.set(-1,0,0,0)}}}function s(){let G=!1,oe=null,xe=null,Ce=null;return{setTest:function(Le){Le?ce(2929):ue(2929)},setMask:function(Le){oe!==Le&&!G&&(n.depthMask(Le),oe=Le)},setFunc:function(Le){if(xe!==Le){switch(Le){case Zm:n.depthFunc(512);break;case Km:n.depthFunc(519);break;case Jm:n.depthFunc(513);break;case Oa:n.depthFunc(515);break;case Qm:n.depthFunc(514);break;case eg:n.depthFunc(518);break;case tg:n.depthFunc(516);break;case ng:n.depthFunc(517);break;default:n.depthFunc(515)}xe=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Ce!==Le&&(n.clearDepth(Le),Ce=Le)},reset:function(){G=!1,oe=null,xe=null,Ce=null}}}function a(){let G=!1,oe=null,xe=null,Ce=null,Le=null,Xe=null,mt=null,Mt=null,jn=null;return{setTest:function(Qe){G||(Qe?ce(2960):ue(2960))},setMask:function(Qe){oe!==Qe&&!G&&(n.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,_n,qt){(xe!==Qe||Ce!==_n||Le!==qt)&&(n.stencilFunc(Qe,_n,qt),xe=Qe,Ce=_n,Le=qt)},setOp:function(Qe,_n,qt){(Xe!==Qe||mt!==_n||Mt!==qt)&&(n.stencilOp(Qe,_n,qt),Xe=Qe,mt=_n,Mt=qt)},setLocked:function(Qe){G=Qe},setClear:function(Qe){jn!==Qe&&(n.clearStencil(Qe),jn=Qe)},reset:function(){G=!1,oe=null,xe=null,Ce=null,Le=null,Xe=null,mt=null,Mt=null,jn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,x=!1,w=null,_=null,S=null,b=null,R=null,O=null,y=null,L=!1,N=null,V=null,pe=null,k=null,D=null;const P=n.getParameter(35661);let q=!1,Y=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=Y>=2);let ne=null,le={};const $=n.getParameter(3088),K=n.getParameter(2978),he=new tt().fromArray($),_e=new tt().fromArray(K);function z(G,oe,xe){const Ce=new Uint8Array(4),Le=n.createTexture();n.bindTexture(G,Le),n.texParameteri(G,10241,9728),n.texParameteri(G,10240,9728);for(let Xe=0;Xe<xe;Xe++)n.texImage2D(oe+Xe,0,6408,1,1,0,6408,5121,Ce);return Le}const U={};U[3553]=z(3553,3553,1),U[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(2929),l.setFunc(Oa),H(!1),te(mc),ce(2884),I(qn);function ce(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function ue(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function ve(G,oe){return d[G]!==oe?(n.bindFramebuffer(G,oe),d[G]=oe,i&&(G===36009&&(d[36160]=oe),G===36160&&(d[36009]=oe)),!0):!1}function ge(G,oe){let xe=m,Ce=!1;if(G)if(xe=g.get(oe),xe===void 0&&(xe=[],g.set(oe,xe)),G.isWebGLMultipleRenderTargets){const Le=G.texture;if(xe.length!==Le.length||xe[0]!==36064){for(let Xe=0,mt=Le.length;Xe<mt;Xe++)xe[Xe]=36064+Xe;xe.length=Le.length,Ce=!0}}else xe[0]!==36064&&(xe[0]=36064,Ce=!0);else xe[0]!==1029&&(xe[0]=1029,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Me(G){return p!==G?(n.useProgram(G),p=G,!0):!1}const v={[Bi]:32774,[Bm]:32778,[km]:32779};if(i)v[vc]=32775,v[yc]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(v[vc]=G.MIN_EXT,v[yc]=G.MAX_EXT)}const E={[Gm]:0,[Hm]:1,[Vm]:768,[hh]:770,[$m]:776,[jm]:774,[qm]:772,[Wm]:769,[dh]:771,[Ym]:775,[Xm]:773};function I(G,oe,xe,Ce,Le,Xe,mt,Mt){if(G===qn){x===!0&&(ue(3042),x=!1);return}if(x===!1&&(ce(3042),x=!0),G!==Um){if(G!==w||Mt!==L){if((_!==Bi||R!==Bi)&&(n.blendEquation(32774),_=Bi,R=Bi),Mt)switch(G){case Yi:n.blendFuncSeparate(1,771,1,771);break;case gc:n.blendFunc(1,1);break;case _c:n.blendFuncSeparate(0,769,0,1);break;case xc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Yi:n.blendFuncSeparate(770,771,1,771);break;case gc:n.blendFunc(770,1);break;case _c:n.blendFuncSeparate(0,769,0,1);break;case xc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,b=null,O=null,y=null,w=G,L=Mt}return}Le=Le||oe,Xe=Xe||xe,mt=mt||Ce,(oe!==_||Le!==R)&&(n.blendEquationSeparate(v[oe],v[Le]),_=oe,R=Le),(xe!==S||Ce!==b||Xe!==O||mt!==y)&&(n.blendFuncSeparate(E[xe],E[Ce],E[Xe],E[mt]),S=xe,b=Ce,O=Xe,y=mt),w=G,L=!1}function W(G,oe){G.side===bl?ue(2884):ce(2884);let xe=G.side===Yt;oe&&(xe=!xe),H(xe),G.blending===Yi&&G.transparent===!1?I(qn):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const Ce=G.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(32926):ue(32926)}function H(G){N!==G&&(G?n.frontFace(2304):n.frontFace(2305),N=G)}function te(G){G!==Om?(ce(2884),G!==V&&(G===mc?n.cullFace(1029):G===Fm?n.cullFace(1028):n.cullFace(1032))):ue(2884),V=G}function re(G){G!==pe&&(q&&n.lineWidth(G),pe=G)}function Q(G,oe,xe){G?(ce(32823),(k!==oe||D!==xe)&&(n.polygonOffset(oe,xe),k=oe,D=xe)):ue(32823)}function de(G){G?ce(3089):ue(3089)}function ie(G){G===void 0&&(G=33984+P-1),ne!==G&&(n.activeTexture(G),ne=G)}function T(G,oe,xe){xe===void 0&&(ne===null?xe=33984+P-1:xe=ne);let Ce=le[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},le[xe]=Ce),(Ce.type!==G||Ce.texture!==oe)&&(ne!==xe&&(n.activeTexture(xe),ne=xe),n.bindTexture(G,oe||U[G]),Ce.type=G,Ce.texture=oe)}function M(){const G=le[ne];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function C(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){he.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),he.copy(G))}function Te(G){_e.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),_e.copy(G))}function De(G,oe){let xe=f.get(oe);xe===void 0&&(xe=new WeakMap,f.set(oe,xe));let Ce=xe.get(G);Ce===void 0&&(Ce=n.getUniformBlockIndex(oe,G.name),xe.set(G,Ce))}function Ue(G,oe){const Ce=f.get(oe).get(G);u.get(oe)!==Ce&&(n.uniformBlockBinding(oe,Ce,G.__bindingPointIndex),u.set(oe,Ce))}function Ye(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,le={},d={},g=new WeakMap,m=[],p=null,x=!1,w=null,_=null,S=null,b=null,R=null,O=null,y=null,L=!1,N=null,V=null,pe=null,k=null,D=null,he.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ce,disable:ue,bindFramebuffer:ve,drawBuffers:ge,useProgram:Me,setBlending:I,setMaterial:W,setFlipSided:H,setCullFace:te,setLineWidth:re,setPolygonOffset:Q,setScissorTest:de,activeTexture:ie,bindTexture:T,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:ee,texImage2D:Ae,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:X,texStorage3D:be,texSubImage2D:se,texSubImage3D:me,compressedTexSubImage2D:Se,compressedTexSubImage3D:C,scissor:Pe,viewport:Te,reset:Ye}}function Sy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,M){return x?new OffscreenCanvas(T,M):Qs("canvas")}function _(T,M,B,ee){let se=1;if((T.width>ee||T.height>ee)&&(se=ee/Math.max(T.width,T.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const me=M?Ga:Math.floor,Se=me(se*T.width),C=me(se*T.height);m===void 0&&(m=w(Se,C));const X=B?w(Se,C):m;return X.width=Se,X.height=C,X.getContext("2d").drawImage(T,0,0,Se,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Se+"x"+C+")."),X}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return Xc(T.width)&&Xc(T.height)}function b(T){return o?!1:T.wrapS!==en||T.wrapT!==en||T.minFilter!==Rt&&T.minFilter!==jt}function R(T,M){return T.generateMipmaps&&M&&T.minFilter!==Rt&&T.minFilter!==jt}function O(T){n.generateMipmap(T)}function y(T,M,B,ee,se=!1){if(o===!1)return M;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let me=M;return M===6403&&(B===5126&&(me=33326),B===5131&&(me=33325),B===5121&&(me=33321)),M===33319&&(B===5126&&(me=33328),B===5131&&(me=33327),B===5121&&(me=33323)),M===6408&&(B===5126&&(me=34836),B===5131&&(me=34842),B===5121&&(me=ee===Je&&se===!1?35907:32856),B===32819&&(me=32854),B===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function L(T,M,B){return R(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function N(T){return T===Rt||T===Mc||T===Io?9728:9729}function V(T){const M=T.target;M.removeEventListener("dispose",V),k(M),M.isVideoTexture&&g.delete(M)}function pe(T){const M=T.target;M.removeEventListener("dispose",pe),P(M)}function k(T){const M=i.get(T);if(M.__webglInit===void 0)return;const B=T.source,ee=p.get(B);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(T),Object.keys(ee).length===0&&p.delete(B)}i.remove(T)}function D(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const B=T.source,ee=p.get(B);delete ee[M.__cacheKey],a.memory.textures--}function P(T){const M=T.texture,B=i.get(T),ee=i.get(M);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(B.__webglFramebuffer[se]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[se]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,me=M.length;se<me;se++){const Se=i.get(M[se]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(T)}let q=0;function Y(){q=0}function j(){const T=q;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),q+=1,T}function ne(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function le(T,M){const B=i.get(T);if(T.isVideoTexture&&de(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,T,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function $(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ue(B,T,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function K(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ue(B,T,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function he(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ve(B,T,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}const _e={[Ua]:10497,[en]:33071,[Ba]:33648},z={[Rt]:9728,[Mc]:9984,[Io]:9986,[jt]:9729,[ug]:9985,[qr]:9987};function U(T,M,B){if(B?(n.texParameteri(T,10242,_e[M.wrapS]),n.texParameteri(T,10243,_e[M.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,_e[M.wrapR]),n.texParameteri(T,10240,z[M.magFilter]),n.texParameteri(T,10241,z[M.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(M.wrapS!==en||M.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,N(M.magFilter)),n.texParameteri(T,10241,N(M.minFilter)),M.minFilter!==Rt&&M.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Rt||M.minFilter!==Io&&M.minFilter!==qr||M.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Xr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ce(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",V));const ee=M.source;let se=p.get(ee);se===void 0&&(se={},p.set(ee,se));const me=ne(M);if(me!==T.__cacheKey){se[me]===void 0&&(se[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),se[me].usedTimes++;const Se=se[T.__cacheKey];Se!==void 0&&(se[T.__cacheKey].usedTimes--,Se.usedTimes===0&&D(M)),T.__cacheKey=me,T.__webglTexture=se[me].texture}return B}function ue(T,M,B){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);const se=ce(T,M),me=M.source;t.bindTexture(ee,T.__webglTexture,33984+B);const Se=i.get(me);if(me.version!==Se.__version||se===!0){t.activeTexture(33984+B),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const C=b(M)&&S(M.image)===!1;let X=_(M.image,C,!1,u);X=ie(M,X);const be=S(X)||o,Ae=s.convert(M.format,M.encoding);let Ee=s.convert(M.type),Pe=y(M.internalFormat,Ae,Ee,M.encoding,M.isVideoTexture);U(ee,M,be);let Te;const De=M.mipmaps,Ue=o&&M.isVideoTexture!==!0,Ye=Se.__version===void 0||se===!0,G=L(M,X,be);if(M.isDepthTexture)Pe=6402,o?M.type===ci?Pe=36012:M.type===li?Pe=33190:M.type===$i?Pe=35056:Pe=33189:M.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===hi&&Pe===6402&&M.type!==gh&&M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=li,Ee=s.convert(M.type)),M.format===nr&&Pe===6402&&(Pe=34041,M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$i,Ee=s.convert(M.type))),Ye&&(Ue?t.texStorage2D(3553,1,Pe,X.width,X.height):t.texImage2D(3553,0,Pe,X.width,X.height,0,Ae,Ee,null));else if(M.isDataTexture)if(De.length>0&&be){Ue&&Ye&&t.texStorage2D(3553,G,Pe,De[0].width,De[0].height);for(let oe=0,xe=De.length;oe<xe;oe++)Te=De[oe],Ue?t.texSubImage2D(3553,oe,0,0,Te.width,Te.height,Ae,Ee,Te.data):t.texImage2D(3553,oe,Pe,Te.width,Te.height,0,Ae,Ee,Te.data);M.generateMipmaps=!1}else Ue?(Ye&&t.texStorage2D(3553,G,Pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Ae,Ee,X.data)):t.texImage2D(3553,0,Pe,X.width,X.height,0,Ae,Ee,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Ye&&t.texStorage3D(35866,G,Pe,De[0].width,De[0].height,X.depth);for(let oe=0,xe=De.length;oe<xe;oe++)Te=De[oe],M.format!==tn?Ae!==null?Ue?t.compressedTexSubImage3D(35866,oe,0,0,0,Te.width,Te.height,X.depth,Ae,Te.data,0,0):t.compressedTexImage3D(35866,oe,Pe,Te.width,Te.height,X.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,oe,0,0,0,Te.width,Te.height,X.depth,Ae,Ee,Te.data):t.texImage3D(35866,oe,Pe,Te.width,Te.height,X.depth,0,Ae,Ee,Te.data)}else{Ue&&Ye&&t.texStorage2D(3553,G,Pe,De[0].width,De[0].height);for(let oe=0,xe=De.length;oe<xe;oe++)Te=De[oe],M.format!==tn?Ae!==null?Ue?t.compressedTexSubImage2D(3553,oe,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(3553,oe,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,oe,0,0,Te.width,Te.height,Ae,Ee,Te.data):t.texImage2D(3553,oe,Pe,Te.width,Te.height,0,Ae,Ee,Te.data)}else if(M.isDataArrayTexture)Ue?(Ye&&t.texStorage3D(35866,G,Pe,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Ae,Ee,X.data)):t.texImage3D(35866,0,Pe,X.width,X.height,X.depth,0,Ae,Ee,X.data);else if(M.isData3DTexture)Ue?(Ye&&t.texStorage3D(32879,G,Pe,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Ae,Ee,X.data)):t.texImage3D(32879,0,Pe,X.width,X.height,X.depth,0,Ae,Ee,X.data);else if(M.isFramebufferTexture){if(Ye)if(Ue)t.texStorage2D(3553,G,Pe,X.width,X.height);else{let oe=X.width,xe=X.height;for(let Ce=0;Ce<G;Ce++)t.texImage2D(3553,Ce,Pe,oe,xe,0,Ae,Ee,null),oe>>=1,xe>>=1}}else if(De.length>0&&be){Ue&&Ye&&t.texStorage2D(3553,G,Pe,De[0].width,De[0].height);for(let oe=0,xe=De.length;oe<xe;oe++)Te=De[oe],Ue?t.texSubImage2D(3553,oe,0,0,Ae,Ee,Te):t.texImage2D(3553,oe,Pe,Ae,Ee,Te);M.generateMipmaps=!1}else Ue?(Ye&&t.texStorage2D(3553,G,Pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,Ae,Ee,X)):t.texImage2D(3553,0,Pe,Ae,Ee,X);R(M,be)&&O(ee),Se.__version=me.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ve(T,M,B){if(M.image.length!==6)return;const ee=ce(T,M),se=M.source;t.bindTexture(34067,T.__webglTexture,33984+B);const me=i.get(se);if(se.version!==me.__version||ee===!0){t.activeTexture(33984+B),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,X=[];for(let oe=0;oe<6;oe++)!Se&&!C?X[oe]=_(M.image[oe],!1,!0,c):X[oe]=C?M.image[oe].image:M.image[oe],X[oe]=ie(M,X[oe]);const be=X[0],Ae=S(be)||o,Ee=s.convert(M.format,M.encoding),Pe=s.convert(M.type),Te=y(M.internalFormat,Ee,Pe,M.encoding),De=o&&M.isVideoTexture!==!0,Ue=me.__version===void 0||ee===!0;let Ye=L(M,be,Ae);U(34067,M,Ae);let G;if(Se){De&&Ue&&t.texStorage2D(34067,Ye,Te,be.width,be.height);for(let oe=0;oe<6;oe++){G=X[oe].mipmaps;for(let xe=0;xe<G.length;xe++){const Ce=G[xe];M.format!==tn?Ee!==null?De?t.compressedTexSubImage2D(34069+oe,xe,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(34069+oe,xe,Te,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+oe,xe,0,0,Ce.width,Ce.height,Ee,Pe,Ce.data):t.texImage2D(34069+oe,xe,Te,Ce.width,Ce.height,0,Ee,Pe,Ce.data)}}}else{G=M.mipmaps,De&&Ue&&(G.length>0&&Ye++,t.texStorage2D(34067,Ye,Te,X[0].width,X[0].height));for(let oe=0;oe<6;oe++)if(C){De?t.texSubImage2D(34069+oe,0,0,0,X[oe].width,X[oe].height,Ee,Pe,X[oe].data):t.texImage2D(34069+oe,0,Te,X[oe].width,X[oe].height,0,Ee,Pe,X[oe].data);for(let xe=0;xe<G.length;xe++){const Le=G[xe].image[oe].image;De?t.texSubImage2D(34069+oe,xe+1,0,0,Le.width,Le.height,Ee,Pe,Le.data):t.texImage2D(34069+oe,xe+1,Te,Le.width,Le.height,0,Ee,Pe,Le.data)}}else{De?t.texSubImage2D(34069+oe,0,0,0,Ee,Pe,X[oe]):t.texImage2D(34069+oe,0,Te,Ee,Pe,X[oe]);for(let xe=0;xe<G.length;xe++){const Ce=G[xe];De?t.texSubImage2D(34069+oe,xe+1,0,0,Ee,Pe,Ce.image[oe]):t.texImage2D(34069+oe,xe+1,Te,Ee,Pe,Ce.image[oe])}}}R(M,Ae)&&O(34067),me.__version=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ge(T,M,B,ee,se){const me=s.convert(B.format,B.encoding),Se=s.convert(B.type),C=y(B.internalFormat,me,Se,B.encoding);i.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,C,M.width,M.height,M.depth,0,me,Se,null):t.texImage2D(se,0,C,M.width,M.height,0,me,Se,null)),t.bindFramebuffer(36160,T),Q(M)?h.framebufferTexture2DMultisampleEXT(36160,ee,se,i.get(B).__webglTexture,0,re(M)):(se===3553||se>=34069&&se<=34074)&&n.framebufferTexture2D(36160,ee,se,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(T,M,B){if(n.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(B||Q(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===ci?ee=36012:se.type===li&&(ee=33190));const me=re(M);Q(M)?h.renderbufferStorageMultisampleEXT(36161,me,ee,M.width,M.height):n.renderbufferStorageMultisample(36161,me,ee,M.width,M.height)}else n.renderbufferStorage(36161,ee,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const ee=re(M);B&&Q(M)===!1?n.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Q(M)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ee.length;se++){const me=ee[se],Se=s.convert(me.format,me.encoding),C=s.convert(me.type),X=y(me.internalFormat,Se,C,me.encoding),be=re(M);B&&Q(M)===!1?n.renderbufferStorageMultisample(36161,be,X,M.width,M.height):Q(M)?h.renderbufferStorageMultisampleEXT(36161,be,X,M.width,M.height):n.renderbufferStorage(36161,X,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function v(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,se=re(M);if(M.depthTexture.format===hi)Q(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,se):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===nr)Q(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,se):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function E(T){const M=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");v(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=n.createRenderbuffer(),Me(M.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Me(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function I(T,M,B){const ee=i.get(T);M!==void 0&&ge(ee.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&E(T)}function W(T){const M=T.texture,B=i.get(T),ee=i.get(M);T.addEventListener("dispose",pe),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,a.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,me=T.isWebGLMultipleRenderTargets===!0,Se=S(T)||o;if(se){B.__webglFramebuffer=[];for(let C=0;C<6;C++)B.__webglFramebuffer[C]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),me)if(r.drawBuffers){const C=T.texture;for(let X=0,be=C.length;X<be;X++){const Ae=i.get(C[X]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Q(T)===!1){const C=me?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let X=0;X<C.length;X++){const be=C[X];B.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer[X]);const Ae=s.convert(be.format,be.encoding),Ee=s.convert(be.type),Pe=y(be.internalFormat,Ae,Ee,be.encoding,T.isXRRenderTarget===!0),Te=re(T);n.renderbufferStorageMultisample(36161,Te,Pe,T.width,T.height),n.framebufferRenderbuffer(36160,36064+X,36161,B.__webglColorRenderbuffer[X])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ee.__webglTexture),U(34067,M,Se);for(let C=0;C<6;C++)ge(B.__webglFramebuffer[C],T,M,36064,34069+C);R(M,Se)&&O(34067),t.unbindTexture()}else if(me){const C=T.texture;for(let X=0,be=C.length;X<be;X++){const Ae=C[X],Ee=i.get(Ae);t.bindTexture(3553,Ee.__webglTexture),U(3553,Ae,Se),ge(B.__webglFramebuffer,T,Ae,36064+X,3553),R(Ae,Se)&&O(3553)}t.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ee.__webglTexture),U(C,M,Se),ge(B.__webglFramebuffer,T,M,36064,C),R(M,Se)&&O(C),t.unbindTexture()}T.depthBuffer&&E(T)}function H(T){const M=S(T)||o,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,se=B.length;ee<se;ee++){const me=B[ee];if(R(me,M)){const Se=T.isWebGLCubeRenderTarget?34067:3553,C=i.get(me).__webglTexture;t.bindTexture(Se,C),O(Se),t.unbindTexture()}}}function te(T){if(o&&T.samples>0&&Q(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ee=T.height;let se=16384;const me=[],Se=T.stencilBuffer?33306:36096,C=i.get(T),X=T.isWebGLMultipleRenderTargets===!0;if(X)for(let be=0;be<M.length;be++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let be=0;be<M.length;be++){me.push(36064+be),T.depthBuffer&&me.push(Se);const Ae=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(Ae===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),X&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[be]),Ae===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),X){const Ee=i.get(M[be]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,se,9728),d&&n.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let be=0;be<M.length;be++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,C.__webglColorRenderbuffer[be]);const Ae=i.get(M[be]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,Ae,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function re(T){return Math.min(f,T.samples)}function Q(T){const M=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(T){const M=a.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function ie(T,M){const B=T.encoding,ee=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ka||B!==gi&&(B===Je?o===!1?e.has("EXT_sRGB")===!0&&ee===tn?(T.format=ka,T.minFilter=jt,T.generateMipmaps=!1):M=vh.sRGBToLinear(M):(ee!==tn||se!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=he,this.rebindTextures=I,this.setupRenderTarget=W,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Q}function by(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===mi)return 5121;if(s===pg)return 32819;if(s===mg)return 32820;if(s===fg)return 5120;if(s===hg)return 5122;if(s===gh)return 5123;if(s===dg)return 5124;if(s===li)return 5125;if(s===ci)return 5126;if(s===Xr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gg)return 6406;if(s===tn)return 6408;if(s===xg)return 6409;if(s===vg)return 6410;if(s===hi)return 6402;if(s===nr)return 34041;if(s===_g)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ka)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===yg)return 6403;if(s===Mg)return 36244;if(s===Sg)return 33319;if(s===bg)return 33320;if(s===wg)return 36249;if(s===No||s===Oo||s===Fo||s===zo)if(a===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sc||s===bc||s===wc||s===Ec)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ec)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tc||s===Ac)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Tc)return a===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ac)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cc||s===Pc||s===Lc||s===Rc||s===Dc||s===Ic||s===Nc||s===Oc||s===Fc||s===zc||s===Uc||s===Bc||s===kc||s===Gc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Cc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ic)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Uc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gc)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Hc)return a===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$i?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class wy extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),x=this._getHandJoint(c,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ty extends Vt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hi&&(i=li),i===void 0&&u===nr&&(i=$i),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class Ay extends Mi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const x=[],w=[],_=new Set,S=new Map,b=new Gt;b.layers.enable(1),b.viewport=new tt;const R=new Gt;R.layers.enable(2),R.viewport=new tt;const O=[b,R],y=new wy;y.layers.enable(1),y.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=x[$];return K===void 0&&(K=new ua,x[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=x[$];return K===void 0&&(K=new ua,x[$]=K),K.getGripSpace()},this.getHand=function($){let K=x[$];return K===void 0&&(K=new ua,x[$]=K),K.getHandSpace()};function V($){const K=w.indexOf($.inputSource);if(K===-1)return;const he=x[K];he!==void 0&&he.dispatchEvent({type:$.type,data:$.inputSource})}function pe(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",k);for(let $=0;$<x.length;$++){const K=w[$];K!==null&&(w[$]=null,x[$].disconnect(K))}L=null,N=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,p=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),p=new _i(h.framebufferWidth,h.framebufferHeight,{format:tn,type:mi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,he=null,_e=null;g.depth&&(_e=g.stencil?35056:33190,K=g.stencil?nr:hi,he=g.stencil?$i:li);const z={colorFormat:32856,depthFormat:_e,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(z),r.updateRenderState({layers:[f]}),p=new _i(f.textureWidth,f.textureHeight,{format:tn,type:mi,depthTexture:new Ty(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const U=e.properties.get(p);U.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k($){for(let K=0;K<$.removed.length;K++){const he=$.removed[K],_e=w.indexOf(he);_e>=0&&(w[_e]=null,x[_e].disconnect(he))}for(let K=0;K<$.added.length;K++){const he=$.added[K];let _e=w.indexOf(he);if(_e===-1){for(let U=0;U<x.length;U++)if(U>=w.length){w.push(he),_e=U;break}else if(w[U]===null){w[U]=he,_e=U;break}if(_e===-1)break}const z=x[_e];z&&z.connect(he)}}const D=new F,P=new F;function q($,K,he){D.setFromMatrixPosition(K.matrixWorld),P.setFromMatrixPosition(he.matrixWorld);const _e=D.distanceTo(P),z=K.projectionMatrix.elements,U=he.projectionMatrix.elements,ce=z[14]/(z[10]-1),ue=z[14]/(z[10]+1),ve=(z[9]+1)/z[5],ge=(z[9]-1)/z[5],Me=(z[8]-1)/z[0],v=(U[8]+1)/U[0],E=ce*Me,I=ce*v,W=_e/(-Me+v),H=W*-Me;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(H),$.translateZ(W),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const te=ce+W,re=ue+W,Q=E-H,de=I+(_e-H),ie=ve*ue/re*te,T=ge*ue/re*te;$.projectionMatrix.makePerspective(Q,de,ie,T,te,re)}function Y($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;y.near=R.near=b.near=$.near,y.far=R.far=b.far=$.far,(L!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,N=y.far);const K=$.parent,he=y.cameras;Y(y,K);for(let z=0;z<he.length;z++)Y(he[z],K);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),$.matrix.copy(y.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const _e=$.children;for(let z=0,U=_e.length;z<U;z++)_e[z].updateMatrixWorld(!0);he.length===2?q(y,b,R):y.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function($){f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.getPlanes=function(){return _};let j=null;function ne($,K){if(c=K.getViewerPose(l||a),d=K,c!==null){const he=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let _e=!1;he.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let z=0;z<he.length;z++){const U=he[z];let ce=null;if(h!==null)ce=h.getViewport(U);else{const ve=u.getViewSubImage(f,U);ce=ve.viewport,z===0&&(e.setRenderTargetTextures(p,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}let ue=O[z];ue===void 0&&(ue=new Gt,ue.layers.enable(z),ue.viewport=new tt,O[z]=ue),ue.matrix.fromArray(U.transform.matrix),ue.projectionMatrix.fromArray(U.projectionMatrix),ue.viewport.set(ce.x,ce.y,ce.width,ce.height),z===0&&y.matrix.copy(ue.matrix),_e===!0&&y.cameras.push(ue)}}for(let he=0;he<x.length;he++){const _e=w[he],z=x[he];_e!==null&&z!==void 0&&z.update(_e,K,l||a)}if(j&&j($,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let he=null;for(const _e of _)K.detectedPlanes.has(_e)||(he===null&&(he=[]),he.push(_e));if(he!==null)for(const _e of he)_.delete(_e),S.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of K.detectedPlanes)if(!_.has(_e))_.add(_e),S.set(_e,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const z=S.get(_e);_e.lastChangedTime>z&&(S.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}d=null}const le=new Ah;le.setAnimationLoop(ne),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}function Cy(n,e){function t(m,p){p.color.getRGB(m.fogColor.value,wh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,x,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Py(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(w,_){const S=_.program;i.uniformBlockBinding(w,S)}function c(w,_){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",p));const b=_.program;i.updateUBOMapping(w,b);const R=e.render.frame;s[w.id]!==R&&(h(w),s[w.id]=R)}function u(w){const _=f();w.__bindingPointIndex=_;const S=n.createBuffer(),b=w.__size,R=w.usage;return n.bindBuffer(35345,S),n.bufferData(35345,b,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,S),S}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=r[w.id],S=w.uniforms,b=w.__cache;n.bindBuffer(35345,_);for(let R=0,O=S.length;R<O;R++){const y=S[R];if(d(y,R,b)===!0){const L=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let V=0;for(let pe=0;pe<N.length;pe++){const k=N[pe],D=m(k);typeof k=="number"?(y.__data[0]=k,n.bufferSubData(35345,L+V,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=k.elements[0],y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=k.elements[0],y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=k.elements[0]):(k.toArray(y.__data,V),V+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,L,y.__data)}}n.bindBuffer(35345,null)}function d(w,_,S){const b=w.value;if(S[_]===void 0){if(typeof b=="number")S[_]=b;else{const R=Array.isArray(b)?b:[b],O=[];for(let y=0;y<R.length;y++)O.push(R[y].clone());S[_]=O}return!0}else if(typeof b=="number"){if(S[_]!==b)return S[_]=b,!0}else{const R=Array.isArray(S[_])?S[_]:[S[_]],O=Array.isArray(b)?b:[b];for(let y=0;y<R.length;y++){const L=R[y];if(L.equals(O[y])===!1)return L.copy(O[y]),!0}}return!1}function g(w){const _=w.uniforms;let S=0;const b=16;let R=0;for(let O=0,y=_.length;O<y;O++){const L=_[O],N={boundary:0,storage:0},V=Array.isArray(L.value)?L.value:[L.value];for(let pe=0,k=V.length;pe<k;pe++){const D=V[pe],P=m(D);N.boundary+=P.boundary,N.storage+=P.storage}if(L.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,O>0){R=S%b;const pe=b-R;R!==0&&pe-N.boundary<0&&(S+=b-R,L.__offset=S)}S+=N.storage}return R=S%b,R>0&&(S+=b-R),w.__size=S,w.__cache={},this}function m(w){const _={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function x(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}function Ly(){const n=Qs("canvas");return n.style.display="block",n}function Dh(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Ly(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const m=this;let p=!1,x=0,w=0,_=null,S=-1,b=null;const R=new tt,O=new tt;let y=null,L=e.width,N=e.height,V=1,pe=null,k=null;const D=new tt(0,0,L,N),P=new tt(0,0,L,N);let q=!1;const Y=new Al;let j=!1,ne=!1,le=null;const $=new rt,K=new ye,he=new F,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return _===null?V:1}let U=t;function ce(A,J){for(let ae=0;ae<A.length;ae++){const Z=A[ae],fe=e.getContext(Z,J);if(fe!==null)return fe}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",De,!1),U===null){const J=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&J.shift(),U=ce(J,A),U===null)throw ce(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,ve,ge,Me,v,E,I,W,H,te,re,Q,de,ie,T,M,B,ee,se,me,Se,C,X,be;function Ae(){ue=new Gx(U),ve=new Nx(U,ue,n),ue.init(ve),C=new by(U,ue,ve),ge=new My(U,ue,ve),Me=new Wx,v=new ay,E=new Sy(U,ue,ge,v,ve,C,Me),I=new Fx(m),W=new kx(m),H=new Jg(U,ve),X=new Dx(U,ue,H,ve),te=new Hx(U,H,Me,X),re=new Yx(U,te,H,Me),se=new jx(U,ve,E),M=new Ox(v),Q=new oy(m,I,W,ue,ve,X,M),de=new Cy(m,v),ie=new cy,T=new my(ue,ve),ee=new Rx(m,I,W,ge,re,u,a),B=new yy(m,re,ve),be=new Py(U,Me,ve,ge),me=new Ix(U,ue,Me,ve),Se=new Vx(U,ue,Me,ve),Me.programs=Q.programs,m.capabilities=ve,m.extensions=ue,m.properties=v,m.renderLists=ie,m.shadowMap=B,m.state=ge,m.info=Me}Ae();const Ee=new Ay(m,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(L,N,!1))},this.getSize=function(A){return A.set(L,N)},this.setSize=function(A,J,ae){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,N=J,e.width=Math.floor(A*V),e.height=Math.floor(J*V),ae!==!1&&(e.style.width=A+"px",e.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(L*V,N*V).floor()},this.setDrawingBufferSize=function(A,J,ae){L=A,N=J,V=ae,e.width=Math.floor(A*ae),e.height=Math.floor(J*ae),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,J,ae,Z){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,J,ae,Z),ge.viewport(R.copy(D).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(P)},this.setScissor=function(A,J,ae,Z){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,J,ae,Z),ge.scissor(O.copy(P).multiplyScalar(V).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(A){ge.setScissorTest(q=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,J=!0,ae=!0){let Z=0;A&&(Z|=16384),J&&(Z|=256),ae&&(Z|=1024),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ie.dispose(),T.dispose(),v.dispose(),I.dispose(),W.dispose(),re.dispose(),X.dispose(),be.dispose(),Q.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ce),Ee.removeEventListener("sessionend",Le),le&&(le.dispose(),le=null),Xe.stop()};function Pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Me.autoReset,J=B.enabled,ae=B.autoUpdate,Z=B.needsUpdate,fe=B.type;Ae(),Me.autoReset=A,B.enabled=J,B.autoUpdate=ae,B.needsUpdate=Z,B.type=fe}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){const J=A.target;J.removeEventListener("dispose",Ue),Ye(J)}function Ye(A){G(A),v.remove(A)}function G(A){const J=v.get(A).programs;J!==void 0&&(J.forEach(function(ae){Q.releaseProgram(ae)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ae,Z,fe,Re){J===null&&(J=_e);const Ie=fe.isMesh&&fe.matrixWorld.determinant()<0,Fe=cd(A,J,ae,Z,fe);ge.setMaterial(Z,Ie);let Be=ae.index,qe=1;Z.wireframe===!0&&(Be=te.getWireframeAttribute(ae),qe=2);const ke=ae.drawRange,Ge=ae.attributes.position;let lt=ke.start*qe,Ot=(ke.start+ke.count)*qe;Re!==null&&(lt=Math.max(lt,Re.start*qe),Ot=Math.min(Ot,(Re.start+Re.count)*qe)),Be!==null?(lt=Math.max(lt,0),Ot=Math.min(Ot,Be.count)):Ge!=null&&(lt=Math.max(lt,0),Ot=Math.min(Ot,Ge.count));const xn=Ot-lt;if(xn<0||xn===1/0)return;X.setup(fe,Z,Fe,ae,Be);let Yn,ct=me;if(Be!==null&&(Yn=H.get(Be),ct=Se,ct.setIndex(Yn)),fe.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*z()),ct.setMode(1)):ct.setMode(4);else if(fe.isLine){let He=Z.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*z()),fe.isLineSegments?ct.setMode(1):fe.isLineLoop?ct.setMode(2):ct.setMode(3)}else fe.isPoints?ct.setMode(0):fe.isSprite&&ct.setMode(4);if(fe.isInstancedMesh)ct.renderInstances(lt,xn,fe.count);else if(ae.isInstancedBufferGeometry){const He=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,So=Math.min(ae.instanceCount,He);ct.renderInstances(lt,xn,So)}else ct.render(lt,xn)},this.compile=function(A,J){function ae(Z,fe,Re){Z.transparent===!0&&Z.side===hs?(Z.side=Yt,Z.needsUpdate=!0,qt(Z,fe,Re),Z.side=pi,Z.needsUpdate=!0,qt(Z,fe,Re),Z.side=hs):qt(Z,fe,Re)}h=T.get(A),h.init(),g.push(h),A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights(m.physicallyCorrectLights),A.traverse(function(Z){const fe=Z.material;if(fe)if(Array.isArray(fe))for(let Re=0;Re<fe.length;Re++){const Ie=fe[Re];ae(Ie,A,Z)}else ae(fe,A,Z)}),g.pop(),h=null};let oe=null;function xe(A){oe&&oe(A)}function Ce(){Xe.stop()}function Le(){Xe.start()}const Xe=new Ah;Xe.setAnimationLoop(xe),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){oe=A,Ee.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},Ee.addEventListener("sessionstart",Ce),Ee.addEventListener("sessionend",Le),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(J),J=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,J,_),h=T.get(A,g.length),h.init(),g.push(h),$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Y.setFromProjectionMatrix($),ne=this.localClippingEnabled,j=M.init(this.clippingPlanes,ne,J),f=ie.get(A,d.length),f.init(),d.push(f),mt(A,J,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(pe,k),j===!0&&M.beginShadows();const ae=h.state.shadowsArray;if(B.render(ae,A,J),j===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,A),h.setupLights(m.physicallyCorrectLights),J.isArrayCamera){const Z=J.cameras;for(let fe=0,Re=Z.length;fe<Re;fe++){const Ie=Z[fe];Mt(f,A,Ie,Ie.viewport)}}else Mt(f,A,J);_!==null&&(E.updateMultisampleRenderTarget(_),E.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(m,A,J),X.resetDefaultState(),S=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function mt(A,J,ae,Z){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){Z&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Ie=re.update(A),Fe=A.material;Fe.visible&&f.push(A,Ie,Fe,ae,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Me.render.frame&&(A.skeleton.update(),A.skeleton.frame=Me.render.frame),!A.frustumCulled||Y.intersectsObject(A))){Z&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Ie=re.update(A),Fe=A.material;if(Array.isArray(Fe)){const Be=Ie.groups;for(let qe=0,ke=Be.length;qe<ke;qe++){const Ge=Be[qe],lt=Fe[Ge.materialIndex];lt&&lt.visible&&f.push(A,Ie,lt,ae,he.z,Ge)}}else Fe.visible&&f.push(A,Ie,Fe,ae,he.z,null)}}const Re=A.children;for(let Ie=0,Fe=Re.length;Ie<Fe;Ie++)mt(Re[Ie],J,ae,Z)}function Mt(A,J,ae,Z){const fe=A.opaque,Re=A.transmissive,Ie=A.transparent;h.setupLightsView(ae),Re.length>0&&jn(fe,J,ae),Z&&ge.viewport(R.copy(Z)),fe.length>0&&Qe(fe,J,ae),Re.length>0&&Qe(Re,J,ae),Ie.length>0&&Qe(Ie,J,ae),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function jn(A,J,ae){const Z=ve.isWebGL2;le===null&&(le=new _i(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Xr:mi,minFilter:qr,samples:Z&&s===!0?4:0})),m.getDrawingBufferSize(K),Z?le.setSize(K.x,K.y):le.setSize(Ga(K.x),Ga(K.y));const fe=m.getRenderTarget();m.setRenderTarget(le),m.clear();const Re=m.toneMapping;m.toneMapping=Rn,Qe(A,J,ae),m.toneMapping=Re,E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le),m.setRenderTarget(fe)}function Qe(A,J,ae){const Z=J.isScene===!0?J.overrideMaterial:null;for(let fe=0,Re=A.length;fe<Re;fe++){const Ie=A[fe],Fe=Ie.object,Be=Ie.geometry,qe=Z===null?Ie.material:Z,ke=Ie.group;Fe.layers.test(ae.layers)&&_n(Fe,J,ae,Be,qe,ke)}}function _n(A,J,ae,Z,fe,Re){A.onBeforeRender(m,J,ae,Z,fe,Re),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),fe.onBeforeRender(m,J,ae,Z,A,Re),fe.transparent===!0&&fe.side===hs?(fe.side=Yt,fe.needsUpdate=!0,m.renderBufferDirect(ae,J,Z,fe,A,Re),fe.side=pi,fe.needsUpdate=!0,m.renderBufferDirect(ae,J,Z,fe,A,Re),fe.side=hs):m.renderBufferDirect(ae,J,Z,fe,A,Re),A.onAfterRender(m,J,ae,Z,fe,Re)}function qt(A,J,ae){J.isScene!==!0&&(J=_e);const Z=v.get(A),fe=h.state.lights,Re=h.state.shadowsArray,Ie=fe.state.version,Fe=Q.getParameters(A,fe.state,Re,J,ae),Be=Q.getProgramCacheKey(Fe);let qe=Z.programs;Z.environment=A.isMeshStandardMaterial?J.environment:null,Z.fog=J.fog,Z.envMap=(A.isMeshStandardMaterial?W:I).get(A.envMap||Z.environment),qe===void 0&&(A.addEventListener("dispose",Ue),qe=new Map,Z.programs=qe);let ke=qe.get(Be);if(ke!==void 0){if(Z.currentProgram===ke&&Z.lightsStateVersion===Ie)return kl(A,Fe),ke}else Fe.uniforms=Q.getUniforms(A),A.onBuild(ae,Fe,m),A.onBeforeCompile(Fe,m),ke=Q.acquireProgram(Fe,Be),qe.set(Be,ke),Z.uniforms=Fe.uniforms;const Ge=Z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=M.uniform),kl(A,Fe),Z.needsLights=fd(A),Z.lightsStateVersion=Ie,Z.needsLights&&(Ge.ambientLightColor.value=fe.state.ambient,Ge.lightProbe.value=fe.state.probe,Ge.directionalLights.value=fe.state.directional,Ge.directionalLightShadows.value=fe.state.directionalShadow,Ge.spotLights.value=fe.state.spot,Ge.spotLightShadows.value=fe.state.spotShadow,Ge.rectAreaLights.value=fe.state.rectArea,Ge.ltc_1.value=fe.state.rectAreaLTC1,Ge.ltc_2.value=fe.state.rectAreaLTC2,Ge.pointLights.value=fe.state.point,Ge.pointLightShadows.value=fe.state.pointShadow,Ge.hemisphereLights.value=fe.state.hemi,Ge.directionalShadowMap.value=fe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,Ge.spotShadowMap.value=fe.state.spotShadowMap,Ge.spotLightMatrix.value=fe.state.spotLightMatrix,Ge.spotLightMap.value=fe.state.spotLightMap,Ge.pointShadowMap.value=fe.state.pointShadowMap,Ge.pointShadowMatrix.value=fe.state.pointShadowMatrix);const lt=ke.getUniforms(),Ot=js.seqWithValue(lt.seq,Ge);return Z.currentProgram=ke,Z.uniformsList=Ot,ke}function kl(A,J){const ae=v.get(A);ae.outputEncoding=J.outputEncoding,ae.instancing=J.instancing,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function cd(A,J,ae,Z,fe){J.isScene!==!0&&(J=_e),E.resetTextureUnits();const Re=J.fog,Ie=Z.isMeshStandardMaterial?J.environment:null,Fe=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:gi,Be=(Z.isMeshStandardMaterial?W:I).get(Z.envMap||Ie),qe=Z.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ke=!!Z.normalMap&&!!ae.attributes.tangent,Ge=!!ae.morphAttributes.position,lt=!!ae.morphAttributes.normal,Ot=!!ae.morphAttributes.color,xn=Z.toneMapped?m.toneMapping:Rn,Yn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ct=Yn!==void 0?Yn.length:0,He=v.get(Z),So=h.state.lights;if(j===!0&&(ne===!0||A!==b)){const Ft=A===b&&Z.id===S;M.setState(Z,A,Ft)}let gt=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==So.state.version||He.outputEncoding!==Fe||fe.isInstancedMesh&&He.instancing===!1||!fe.isInstancedMesh&&He.instancing===!0||fe.isSkinnedMesh&&He.skinning===!1||!fe.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||Z.fog===!0&&He.fog!==Re||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==M.numPlanes||He.numIntersection!==M.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==ke||He.morphTargets!==Ge||He.morphNormals!==lt||He.morphColors!==Ot||He.toneMapping!==xn||ve.isWebGL2===!0&&He.morphTargetsCount!==ct)&&(gt=!0):(gt=!0,He.__version=Z.version);let $n=He.currentProgram;gt===!0&&($n=qt(Z,J,fe));let Gl=!1,pr=!1,bo=!1;const At=$n.getUniforms(),Zn=He.uniforms;if(ge.useProgram($n.program)&&(Gl=!0,pr=!0,bo=!0),Z.id!==S&&(S=Z.id,pr=!0),Gl||b!==A){if(At.setValue(U,"projectionMatrix",A.projectionMatrix),ve.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,pr=!0,bo=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Ft=At.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,he.setFromMatrixPosition(A.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||fe.isSkinnedMesh)&&At.setValue(U,"viewMatrix",A.matrixWorldInverse)}if(fe.isSkinnedMesh){At.setOptional(U,fe,"bindMatrix"),At.setOptional(U,fe,"bindMatrixInverse");const Ft=fe.skeleton;Ft&&(ve.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),At.setValue(U,"boneTexture",Ft.boneTexture,E),At.setValue(U,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wo=ae.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&ve.isWebGL2===!0)&&se.update(fe,ae,Z,$n),(pr||He.receiveShadow!==fe.receiveShadow)&&(He.receiveShadow=fe.receiveShadow,At.setValue(U,"receiveShadow",fe.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Zn.envMap.value=Be,Zn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),pr&&(At.setValue(U,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&ud(Zn,bo),Re&&Z.fog===!0&&de.refreshFogUniforms(Zn,Re),de.refreshMaterialUniforms(Zn,Z,V,N,le),js.upload(U,He.uniformsList,Zn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(js.upload(U,He.uniformsList,Zn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(U,"center",fe.center),At.setValue(U,"modelViewMatrix",fe.modelViewMatrix),At.setValue(U,"normalMatrix",fe.normalMatrix),At.setValue(U,"modelMatrix",fe.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ft=Z.uniformsGroups;for(let Eo=0,hd=Ft.length;Eo<hd;Eo++)if(ve.isWebGL2){const Hl=Ft[Eo];be.update(Hl,$n),be.bind(Hl,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function ud(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function fd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,J,ae){v.get(A.texture).__webglTexture=J,v.get(A.depthTexture).__webglTexture=ae;const Z=v.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=ae===void 0,Z.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,J){const ae=v.get(A);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,ae=0){_=A,x=J,w=ae;let Z=!0,fe=null,Re=!1,Ie=!1;if(A){const Be=v.get(A);Be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),Z=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(A):Be.__hasExternalTextures&&E.rebindTextures(A,v.get(A.texture).__webglTexture,v.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const ke=v.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(fe=ke[J],Re=!0):ve.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?fe=v.get(A).__webglMultisampledFramebuffer:fe=ke,R.copy(A.viewport),O.copy(A.scissor),y=A.scissorTest}else R.copy(D).multiplyScalar(V).floor(),O.copy(P).multiplyScalar(V).floor(),y=q;if(ge.bindFramebuffer(36160,fe)&&ve.drawBuffers&&Z&&ge.drawBuffers(A,fe),ge.viewport(R),ge.scissor(O),ge.setScissorTest(y),Re){const Be=v.get(A.texture);U.framebufferTexture2D(36160,36064,34069+J,Be.__webglTexture,ae)}else if(Ie){const Be=v.get(A.texture),qe=J||0;U.framebufferTextureLayer(36160,36064,Be.__webglTexture,ae||0,qe)}S=-1},this.readRenderTargetPixels=function(A,J,ae,Z,fe,Re,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=v.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){ge.bindFramebuffer(36160,Fe);try{const Be=A.texture,qe=Be.format,ke=Be.type;if(qe!==tn&&C.convert(qe)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Xr&&(ue.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ue.has("EXT_color_buffer_float"));if(ke!==mi&&C.convert(ke)!==U.getParameter(35738)&&!(ke===ci&&(ve.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-Z&&ae>=0&&ae<=A.height-fe&&U.readPixels(J,ae,Z,fe,C.convert(qe),C.convert(ke),Re)}finally{const Be=_!==null?v.get(_).__webglFramebuffer:null;ge.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(A,J,ae=0){const Z=Math.pow(2,-ae),fe=Math.floor(J.image.width*Z),Re=Math.floor(J.image.height*Z);E.setTexture2D(J,0),U.copyTexSubImage2D(3553,ae,0,0,A.x,A.y,fe,Re),ge.unbindTexture()},this.copyTextureToTexture=function(A,J,ae,Z=0){const fe=J.image.width,Re=J.image.height,Ie=C.convert(ae.format),Fe=C.convert(ae.type);E.setTexture2D(ae,0),U.pixelStorei(37440,ae.flipY),U.pixelStorei(37441,ae.premultiplyAlpha),U.pixelStorei(3317,ae.unpackAlignment),J.isDataTexture?U.texSubImage2D(3553,Z,A.x,A.y,fe,Re,Ie,Fe,J.image.data):J.isCompressedTexture?U.compressedTexSubImage2D(3553,Z,A.x,A.y,J.mipmaps[0].width,J.mipmaps[0].height,Ie,J.mipmaps[0].data):U.texSubImage2D(3553,Z,A.x,A.y,Ie,Fe,J.image),Z===0&&ae.generateMipmaps&&U.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,J,ae,Z,fe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Be=C.convert(Z.format),qe=C.convert(Z.type);let ke;if(Z.isData3DTexture)E.setTexture3D(Z,0),ke=32879;else if(Z.isDataArrayTexture)E.setTexture2DArray(Z,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,Z.flipY),U.pixelStorei(37441,Z.premultiplyAlpha),U.pixelStorei(3317,Z.unpackAlignment);const Ge=U.getParameter(3314),lt=U.getParameter(32878),Ot=U.getParameter(3316),xn=U.getParameter(3315),Yn=U.getParameter(32877),ct=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;U.pixelStorei(3314,ct.width),U.pixelStorei(32878,ct.height),U.pixelStorei(3316,A.min.x),U.pixelStorei(3315,A.min.y),U.pixelStorei(32877,A.min.z),ae.isDataTexture||ae.isData3DTexture?U.texSubImage3D(ke,fe,J.x,J.y,J.z,Re,Ie,Fe,Be,qe,ct.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ke,fe,J.x,J.y,J.z,Re,Ie,Fe,Be,ct.data)):U.texSubImage3D(ke,fe,J.x,J.y,J.z,Re,Ie,Fe,Be,qe,ct),U.pixelStorei(3314,Ge),U.pixelStorei(32878,lt),U.pixelStorei(3316,Ot),U.pixelStorei(3315,xn),U.pixelStorei(32877,Yn),fe===0&&Z.generateMipmaps&&U.generateMipmap(ke),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){x=0,w=0,_=null,ge.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ry extends Dh{}Ry.prototype.isWebGL1Renderer=!0;class Dy extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ih extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new F,Tu=new F,Au=new rt,fa=new wl,Is=new _o;class Iy extends xt{constructor(e=new mn,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Eu.fromBufferAttribute(t,r-1),Tu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Au.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Au);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,f=new F,h=new F,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const x=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let _=x,S=w-1;_<S;_+=d){const b=g.getX(_),R=g.getX(_+1);if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,R),fa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),w=Math.min(p.count,a.start+a.count);for(let _=x,S=w-1;_<S;_+=d){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),fa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ye:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],s=[],a=[],o=new F,l=new rt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(bt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(bt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends gn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ny extends Ll{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Ns=new F,ha=new Rl,da=new Rl,pa=new Rl;class Oy extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ns.subVectors(r[0],r[1]).add(r[0]),c=Ns);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ns.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),ha.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,m,p),da.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,m,p),pa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),da.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),pa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ha.calc(l),da.calc(l),pa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Fy(n,e){const t=1-n;return t*t*e}function zy(n,e){return 2*(1-n)*n*e}function Uy(n,e){return n*n*e}function Nr(n,e,t,i){return Fy(n,e)+zy(n,t)+Uy(n,i)}function By(n,e){const t=1-n;return t*t*t*e}function ky(n,e){const t=1-n;return 3*t*t*n*e}function Gy(n,e){return 3*(1-n)*n*n*e}function Hy(n,e){return n*n*n*e}function Or(n,e,t,i,r){return By(n,e)+ky(n,t)+Gy(n,i)+Hy(n,r)}class Nh extends gn{constructor(e=new ye,t=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vy extends gn{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y),Or(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dl extends gn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ye;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wy extends gn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends gn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Nr(e,r.x,s.x,a.x),Nr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qy extends gn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Nr(e,r.x,s.x,a.x),Nr(e,r.y,s.y,a.y),Nr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Cu(o,l.x,c.x,u.x,f.x),Cu(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var zh=Object.freeze({__proto__:null,ArcCurve:Ny,CatmullRomCurve3:Oy,CubicBezierCurve:Nh,CubicBezierCurve3:Vy,EllipseCurve:Ll,LineCurve:Dl,LineCurve3:Wy,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:qy,SplineCurve:Fh});class Xy extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Dl(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new zh[r.type]().fromJSON(r))}return this}}class Pu extends Xy{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Dl(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Oh(this.currentPoint.clone(),new ye(e,t),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Nh(this.currentPoint.clone(),new ye(e,t),new ye(i,r),new ye(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Fh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new Ll(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uh extends Pu{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Pu().fromJSON(r))}return this}}const jy={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Bh(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,f,h,d;if(i&&(s=Jy(n,e,s,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Yr(s,a,t,o,l,d,0),a}};function Bh(n,e,t,i,r){let s,a;if(r===cM(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Lu(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Lu(s,n[s],n[s+1],a);return a&&vo(a,a.next)&&(Zr(a),a=a.next),a}function yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vo(t,t.next)||nt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&iM(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?$y(n,i,r,s):Yy(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Zr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Zy(yi(n),e,t),Yr(n,e,t,i,r,s,2)):a===2&&Ky(n,e,t,i,r,s):Yr(yi(n),e,t,i,r,s,1);break}}}function Yy(n){const e=n.prev,t=n,i=n.next;if(nt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,f=o<l?o<c?o:c:l<c?l:c,h=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Wi(r,o,s,l,a,c,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $y(n,e,t,i){const r=n.prev,s=n,a=n.next;if(nt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,m=o>l?o>c?o:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,x=Va(d,g,e,t,i),w=Va(m,p,e,t,i);let _=n.prevZ,S=n.nextZ;for(;_&&_.z>=x&&S&&S.z<=w;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==r&&_!==a&&Wi(o,u,l,f,c,h,_.x,_.y)&&nt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=d&&S.x<=m&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Wi(o,u,l,f,c,h,S.x,S.y)&&nt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=x;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==r&&_!==a&&Wi(o,u,l,f,c,h,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=w;){if(S.x>=d&&S.x<=m&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Wi(o,u,l,f,c,h,S.x,S.y)&&nt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Zy(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!vo(r,s)&&kh(r,i,i.next,s)&&$r(r,s)&&$r(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Zr(i),Zr(i.next),i=n=s),i=i.next}while(i!==n);return yi(i)}function Ky(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&oM(a,o)){let l=Gh(a,o);a=yi(a,a.next),l=yi(l,l.next),Yr(a,e,t,i,r,s,0),Yr(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Jy(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Bh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(sM(c));for(r.sort(Qy),s=0;s<r.length;s++)t=eM(r[s],t);return t}function Qy(n,e){return n.x-e.x}function eM(n,e){const t=tM(n,e);if(!t)return e;const i=Gh(t,n);return yi(i,i.next),yi(t,t.next)}function tM(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Wi(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(s-t.x),$r(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&nM(r,t)))&&(r=t,u=f)),t=t.next;while(t!==o);return r}function nM(n,e){return nt(n.prev,n,e.prev)<0&&nt(e.next,n,n.next)<0}function iM(n,e,t,i){let r=n;do r.z===0&&(r.z=Va(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,rM(r)}function rM(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function Va(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Wi(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function oM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!aM(n,e)&&($r(n,e)&&$r(e,n)&&lM(n,e)&&(nt(n.prev,n,e.prev)||nt(n,e.prev,e))||vo(n,e)&&nt(n.prev,n,n.next)>0&&nt(e.prev,e,e.next)>0)}function nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vo(n,e){return n.x===e.x&&n.y===e.y}function kh(n,e,t,i){const r=Fs(nt(n,e,t)),s=Fs(nt(n,e,i)),a=Fs(nt(t,i,n)),o=Fs(nt(t,i,e));return!!(r!==s&&a!==o||r===0&&Os(n,t,e)||s===0&&Os(n,i,e)||a===0&&Os(t,n,i)||o===0&&Os(t,e,i))}function Os(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fs(n){return n>0?1:n<0?-1:0}function aM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&kh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $r(n,e){return nt(n.prev,n,n.next)<0?nt(n,e,n.next)>=0&&nt(n,n.prev,e)>=0:nt(n,e,n.prev)<0||nt(n,n.next,e)<0}function lM(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gh(n,e){const t=new Wa(n.i,n.x,n.y),i=new Wa(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Lu(n,e,t,i){const r=new Wa(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wa(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cM(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Fr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Fr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Ru(e),Du(i,e);let a=e.length;t.forEach(Ru);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Du(i,t[l]);const o=jy.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ru(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Du(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Il extends mn{constructor(e=new Uh([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new pn(r,3)),this.setAttribute("uv",new pn(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:uM;let _,S=!1,b,R,O,y;x&&(_=x.getSpacedPoints(u),S=!0,h=!1,b=x.computeFrenetFrames(u,!1),R=new F,O=new F,y=new F),h||(p=0,d=0,g=0,m=0);const L=o.extractPoints(c);let N=L.shape;const V=L.holes;if(!Fr.isClockWise(N)){N=N.reverse();for(let v=0,E=V.length;v<E;v++){const I=V[v];Fr.isClockWise(I)&&(V[v]=I.reverse())}}const k=Fr.triangulateShape(N,V),D=N;for(let v=0,E=V.length;v<E;v++){const I=V[v];N=N.concat(I)}function P(v,E,I){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().multiplyScalar(I).add(v)}const q=N.length,Y=k.length;function j(v,E,I){let W,H,te;const re=v.x-E.x,Q=v.y-E.y,de=I.x-v.x,ie=I.y-v.y,T=re*re+Q*Q,M=re*ie-Q*de;if(Math.abs(M)>Number.EPSILON){const B=Math.sqrt(T),ee=Math.sqrt(de*de+ie*ie),se=E.x-Q/B,me=E.y+re/B,Se=I.x-ie/ee,C=I.y+de/ee,X=((Se-se)*ie-(C-me)*de)/(re*ie-Q*de);W=se+re*X-v.x,H=me+Q*X-v.y;const be=W*W+H*H;if(be<=2)return new ye(W,H);te=Math.sqrt(be/2)}else{let B=!1;re>Number.EPSILON?de>Number.EPSILON&&(B=!0):re<-Number.EPSILON?de<-Number.EPSILON&&(B=!0):Math.sign(Q)===Math.sign(ie)&&(B=!0),B?(W=-Q,H=re,te=Math.sqrt(T)):(W=re,H=Q,te=Math.sqrt(T/2))}return new ye(W/te,H/te)}const ne=[];for(let v=0,E=D.length,I=E-1,W=v+1;v<E;v++,I++,W++)I===E&&(I=0),W===E&&(W=0),ne[v]=j(D[v],D[I],D[W]);const le=[];let $,K=ne.concat();for(let v=0,E=V.length;v<E;v++){const I=V[v];$=[];for(let W=0,H=I.length,te=H-1,re=W+1;W<H;W++,te++,re++)te===H&&(te=0),re===H&&(re=0),$[W]=j(I[W],I[te],I[re]);le.push($),K=K.concat($)}for(let v=0;v<p;v++){const E=v/p,I=d*Math.cos(E*Math.PI/2),W=g*Math.sin(E*Math.PI/2)+m;for(let H=0,te=D.length;H<te;H++){const re=P(D[H],ne[H],W);ce(re.x,re.y,-I)}for(let H=0,te=V.length;H<te;H++){const re=V[H];$=le[H];for(let Q=0,de=re.length;Q<de;Q++){const ie=P(re[Q],$[Q],W);ce(ie.x,ie.y,-I)}}}const he=g+m;for(let v=0;v<q;v++){const E=h?P(N[v],K[v],he):N[v];S?(O.copy(b.normals[0]).multiplyScalar(E.x),R.copy(b.binormals[0]).multiplyScalar(E.y),y.copy(_[0]).add(O).add(R),ce(y.x,y.y,y.z)):ce(E.x,E.y,0)}for(let v=1;v<=u;v++)for(let E=0;E<q;E++){const I=h?P(N[E],K[E],he):N[E];S?(O.copy(b.normals[v]).multiplyScalar(I.x),R.copy(b.binormals[v]).multiplyScalar(I.y),y.copy(_[v]).add(O).add(R),ce(y.x,y.y,y.z)):ce(I.x,I.y,f/u*v)}for(let v=p-1;v>=0;v--){const E=v/p,I=d*Math.cos(E*Math.PI/2),W=g*Math.sin(E*Math.PI/2)+m;for(let H=0,te=D.length;H<te;H++){const re=P(D[H],ne[H],W);ce(re.x,re.y,f+I)}for(let H=0,te=V.length;H<te;H++){const re=V[H];$=le[H];for(let Q=0,de=re.length;Q<de;Q++){const ie=P(re[Q],$[Q],W);S?ce(ie.x,ie.y+_[u-1].y,_[u-1].x+I):ce(ie.x,ie.y,f+I)}}}_e(),z();function _e(){const v=r.length/3;if(h){let E=0,I=q*E;for(let W=0;W<Y;W++){const H=k[W];ue(H[2]+I,H[1]+I,H[0]+I)}E=u+p*2,I=q*E;for(let W=0;W<Y;W++){const H=k[W];ue(H[0]+I,H[1]+I,H[2]+I)}}else{for(let E=0;E<Y;E++){const I=k[E];ue(I[2],I[1],I[0])}for(let E=0;E<Y;E++){const I=k[E];ue(I[0]+q*u,I[1]+q*u,I[2]+q*u)}}i.addGroup(v,r.length/3-v,0)}function z(){const v=r.length/3;let E=0;U(D,E),E+=D.length;for(let I=0,W=V.length;I<W;I++){const H=V[I];U(H,E),E+=H.length}i.addGroup(v,r.length/3-v,1)}function U(v,E){let I=v.length;for(;--I>=0;){const W=I;let H=I-1;H<0&&(H=v.length-1);for(let te=0,re=u+p*2;te<re;te++){const Q=q*te,de=q*(te+1),ie=E+W+Q,T=E+H+Q,M=E+H+de,B=E+W+de;ve(ie,T,M,B)}}}function ce(v,E,I){l.push(v),l.push(E),l.push(I)}function ue(v,E,I){ge(v),ge(E),ge(I);const W=r.length/3,H=w.generateTopUV(i,r,W-3,W-2,W-1);Me(H[0]),Me(H[1]),Me(H[2])}function ve(v,E,I,W){ge(v),ge(E),ge(W),ge(E),ge(I),ge(W);const H=r.length/3,te=w.generateSideWallUV(i,r,H-6,H-3,H-2,H-1);Me(te[0]),Me(te[1]),Me(te[3]),Me(te[1]),Me(te[2]),Me(te[3])}function ge(v){r.push(l[v*3+0]),r.push(l[v*3+1]),r.push(l[v*3+2])}function Me(v){s.push(v.x),s.push(v.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return fM(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zh[r.type]().fromJSON(r)),new Il(i,e.options)}}const uM={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,a),new ye(o,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],m=e[s*3],p=e[s*3+1],x=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-f),new ye(h,1-g),new ye(m,1-x)]:[new ye(o,1-l),new ye(u,1-f),new ye(d,1-g),new ye(p,1-x)]}};function fM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}const Iu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const dM=new hM;class pM{constructor(e){this.manager=e!==void 0?e:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const wn={};class mM extends Error{constructor(e,t){super(e),this.response=t}}class gM extends pM{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Iu.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:i,onError:r});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let m=0;const p=new ReadableStream({start(x){w();function w(){f.read().then(({done:_,value:S})=>{if(_)x.close();else{m+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,O=u.length;R<O;R++){const y=u[R];y.onProgress&&y.onProgress(b)}x.enqueue(S),w()}})}}});return new Response(p)}else throw new mM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Iu.add(e,c);const u=wn[e];delete wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nl extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _M extends Nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DefaultUp),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ma=new rt,Nu=new F,Ou=new F;class xM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fu=new rt,br=new F,ga=new F;class vM extends xM{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),i.position.copy(br),ga.copy(i.position),ga.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ga),i.updateMatrixWorld(),r.makeTranslation(-br.x,-br.y,-br.z),Fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class yM extends Nl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MM extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class SM{constructor(e,t,i=0,r=1/0){this.ray=new wl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return qa(e,this,i,t),i.sort(zu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qa(e[r],this,i,t);return i.sort(zu),i}}function zu(n,e){return n.distance-e.distance}function qa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)qa(r[s],e,t,!0)}}class Uu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);class bM{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],a=e+s,o=Math.abs(e)<Math.abs(s)?e-(a-s):s-(a-e);o&&(t[i++]=o),e=a}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,a=0;if(t>0){for(a=e[--t];t>0&&(i=a,r=e[--t],a=i+r,s=r-(a-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=a+r,r==i-a&&(a=i))}return a}}function*wM(n){for(const e of n)yield*e}function Hh(n){return Array.from(wM(n))}var Ke=1e-6,EM=1e-12,Ve=Math.PI,Nt=Ve/2,Bu=Ve/4,$t=Ve*2,kt=180/Ve,ft=Ve/180,it=Math.abs,Vh=Math.atan,Kr=Math.atan2,st=Math.cos,TM=Math.exp,AM=Math.log,ot=Math.sin,CM=Math.sign||function(n){return n>0?1:n<0?-1:0},yo=Math.sqrt,PM=Math.tan;function LM(n){return n>1?0:n<-1?Ve:Math.acos(n)}function Jr(n){return n>1?Nt:n<-1?-Nt:Math.asin(n)}function Cr(){}function eo(n,e){n&&Gu.hasOwnProperty(n.type)&&Gu[n.type](n,e)}var ku={Feature:function(n,e){eo(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)eo(t[i].geometry,e)}},Gu={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Xa(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Xa(t[i],e,0)},Polygon:function(n,e){Hu(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Hu(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)eo(t[i],e)}};function Xa(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function Hu(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Xa(n[t],e,1);e.polygonEnd()}function RM(n,e){n&&ku.hasOwnProperty(n.type)?ku[n.type](n,e):eo(n,e)}function ja(n){return[Kr(n[1],n[0]),Jr(n[2])]}function rr(n){var e=n[0],t=n[1],i=st(t);return[i*st(e),i*ot(e),ot(t)]}function zs(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function to(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function _a(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Us(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Ya(n){var e=yo(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}function $a(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function Za(n,e){return it(n)>Ve&&(n-=Math.round(n/$t)*$t),[n,e]}Za.invert=Za;function Wh(n,e,t){return(n%=$t)?e||t?$a(Wu(n),qu(e,t)):Wu(n):e||t?qu(e,t):Za}function Vu(n){return function(e,t){return e+=n,it(e)>Ve&&(e-=Math.round(e/$t)*$t),[e,t]}}function Wu(n){var e=Vu(n);return e.invert=Vu(-n),e}function qu(n,e){var t=st(n),i=ot(n),r=st(e),s=ot(e);function a(o,l){var c=st(l),u=st(o)*c,f=ot(o)*c,h=ot(l),d=h*t+u*i;return[Kr(f*r-d*s,u*t-h*i),Jr(d*r+f*s)]}return a.invert=function(o,l){var c=st(l),u=st(o)*c,f=ot(o)*c,h=ot(l),d=h*r-f*s;return[Kr(f*r+h*s,u*t+d*i),Jr(d*t-u*i)]},a}function DM(n){n=Wh(n[0]*ft,n[1]*ft,n.length>2?n[2]*ft:0);function e(t){return t=n(t[0]*ft,t[1]*ft),t[0]*=kt,t[1]*=kt,t}return e.invert=function(t){return t=n.invert(t[0]*ft,t[1]*ft),t[0]*=kt,t[1]*=kt,t},e}function IM(n,e,t,i,r,s){if(!!t){var a=st(e),o=ot(e),l=i*t;r==null?(r=e+i*$t,s=e-l/2):(r=Xu(a,r),s=Xu(a,s),(i>0?r<s:r>s)&&(r+=i*$t));for(var c,u=r;i>0?u>s:u<s;u-=l)c=ja([a,-o*st(u),-o*ot(u)]),n.point(c[0],c[1])}}function Xu(n,e){e=rr(e),e[0]-=n,Ya(e);var t=LM(-e[1]);return((-e[2]<0?-t:t)+$t-Ke)%$t}function qh(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:Cr,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function Ys(n,e){return it(n[0]-e[0])<Ke&&it(n[1]-e[1])<Ke}function Bs(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function Xh(n,e,t,i,r){var s=[],a=[],o,l;if(n.forEach(function(g){if(!((m=g.length-1)<=0)){var m,p=g[0],x=g[m],w;if(Ys(p,x)){if(!p[2]&&!x[2]){for(r.lineStart(),o=0;o<m;++o)r.point((p=g[o])[0],p[1]);r.lineEnd();return}x[0]+=2*Ke}s.push(w=new Bs(p,g,null,!0)),a.push(w.o=new Bs(p,null,w,!1)),s.push(w=new Bs(x,g,null,!1)),a.push(w.o=new Bs(x,null,w,!0))}}),!!s.length){for(a.sort(e),ju(s),ju(a),o=0,l=a.length;o<l;++o)a[o].e=t=!t;for(var c=s[0],u,f;;){for(var h=c,d=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,l=u.length;o<l;++o)r.point((f=u[o])[0],f[1]);else i(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else i(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function ju(n){if(!!(e=n.length)){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function xa(n){return it(n[0])<=Ve?n[0]:CM(n[0])*((it(n[0])+Ve)%$t-Ve)}function NM(n,e){var t=xa(e),i=e[1],r=ot(i),s=[ot(t),-st(t),0],a=0,o=0,l=new bM;r===1?i=Nt+Ke:r===-1&&(i=-Nt-Ke);for(var c=0,u=n.length;c<u;++c)if(!!(h=(f=n[c]).length))for(var f,h,d=f[h-1],g=xa(d),m=d[1]/2+Bu,p=ot(m),x=st(m),w=0;w<h;++w,g=S,p=R,x=O,d=_){var _=f[w],S=xa(_),b=_[1]/2+Bu,R=ot(b),O=st(b),y=S-g,L=y>=0?1:-1,N=L*y,V=N>Ve,pe=p*R;if(l.add(Kr(pe*L*ot(N),x*O+pe*st(N))),a+=V?y+L*$t:y,V^g>=t^S>=t){var k=to(rr(d),rr(_));Ya(k);var D=to(s,k);Ya(D);var P=(V^y>=0?-1:1)*Jr(D[2]);(i>P||i===P&&(k[0]||k[1]))&&(o+=V^y>=0?1:-1)}}return(a<-Ke||a<Ke&&l<-EM)^o&1}function jh(n,e,t,i){return function(r){var s=e(r),a=qh(),o=e(a),l=!1,c,u,f,h={point:d,lineStart:m,lineEnd:p,polygonStart:function(){h.point=x,h.lineStart=w,h.lineEnd=_,u=[],c=[]},polygonEnd:function(){h.point=d,h.lineStart=m,h.lineEnd=p,u=Hh(u);var S=NM(c,i);u.length?(l||(r.polygonStart(),l=!0),Xh(u,FM,S,t,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(S,b){n(S,b)&&r.point(S,b)}function g(S,b){s.point(S,b)}function m(){h.point=g,s.lineStart()}function p(){h.point=d,s.lineEnd()}function x(S,b){f.push([S,b]),o.point(S,b)}function w(){o.lineStart(),f=[]}function _(){x(f[0][0],f[0][1]),o.lineEnd();var S=o.clean(),b=a.result(),R,O=b.length,y,L,N;if(f.pop(),c.push(f),f=null,!!O){if(S&1){if(L=b[0],(y=L.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),R=0;R<y;++R)r.point((N=L[R])[0],N[1]);r.lineEnd()}return}O>1&&S&2&&b.push(b.pop().concat(b.shift())),u.push(b.filter(OM))}}return h}}function OM(n){return n.length>1}function FM(n,e){return((n=n.x)[0]<0?n[1]-Nt-Ke:Nt-n[1])-((e=e.x)[0]<0?e[1]-Nt-Ke:Nt-e[1])}const Yu=jh(function(){return!0},zM,BM,[-Ve,-Nt]);function zM(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,a){var o=s>0?Ve:-Ve,l=it(s-e);it(l-Ve)<Ke?(n.point(e,t=(t+a)/2>0?Nt:-Nt),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),n.point(s,t),r=0):i!==o&&l>=Ve&&(it(e-i)<Ke&&(e-=i*Ke),it(s-o)<Ke&&(s-=o*Ke),t=UM(e,t,s,a),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),r=0),n.point(e=s,t=a),i=o},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function UM(n,e,t,i){var r,s,a=ot(n-t);return it(a)>Ke?Vh((ot(e)*(s=st(i))*ot(t)-ot(i)*(r=st(e))*ot(n))/(r*s*a)):(e+i)/2}function BM(n,e,t,i){var r;if(n==null)r=t*Nt,i.point(-Ve,r),i.point(0,r),i.point(Ve,r),i.point(Ve,0),i.point(Ve,-r),i.point(0,-r),i.point(-Ve,-r),i.point(-Ve,0),i.point(-Ve,r);else if(it(n[0]-e[0])>Ke){var s=n[0]<e[0]?Ve:-Ve;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function kM(n){var e=st(n),t=6*ft,i=e>0,r=it(e)>Ke;function s(u,f,h,d){IM(d,n,t,h,u,f)}function a(u,f){return st(u)*st(f)>e}function o(u){var f,h,d,g,m;return{lineStart:function(){g=d=!1,m=1},point:function(p,x){var w=[p,x],_,S=a(p,x),b=i?S?0:c(p,x):S?c(p+(p<0?Ve:-Ve),x):0;if(!f&&(g=d=S)&&u.lineStart(),S!==d&&(_=l(f,w),(!_||Ys(f,_)||Ys(w,_))&&(w[2]=1)),S!==d)m=0,S?(u.lineStart(),_=l(w,f),u.point(_[0],_[1])):(_=l(f,w),u.point(_[0],_[1],2),u.lineEnd()),f=_;else if(r&&f&&i^S){var R;!(b&h)&&(R=l(w,f,!0))&&(m=0,i?(u.lineStart(),u.point(R[0][0],R[0][1]),u.point(R[1][0],R[1][1]),u.lineEnd()):(u.point(R[1][0],R[1][1]),u.lineEnd(),u.lineStart(),u.point(R[0][0],R[0][1],3)))}S&&(!f||!Ys(f,w))&&u.point(w[0],w[1]),f=w,d=S,h=b},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return m|(g&&d)<<1}}}function l(u,f,h){var d=rr(u),g=rr(f),m=[1,0,0],p=to(d,g),x=zs(p,p),w=p[0],_=x-w*w;if(!_)return!h&&u;var S=e*x/_,b=-e*w/_,R=to(m,p),O=Us(m,S),y=Us(p,b);_a(O,y);var L=R,N=zs(O,L),V=zs(L,L),pe=N*N-V*(zs(O,O)-1);if(!(pe<0)){var k=yo(pe),D=Us(L,(-N-k)/V);if(_a(D,O),D=ja(D),!h)return D;var P=u[0],q=f[0],Y=u[1],j=f[1],ne;q<P&&(ne=P,P=q,q=ne);var le=q-P,$=it(le-Ve)<Ke,K=$||le<Ke;if(!$&&j<Y&&(ne=Y,Y=j,j=ne),K?$?Y+j>0^D[1]<(it(D[0]-P)<Ke?Y:j):Y<=D[1]&&D[1]<=j:le>Ve^(P<=D[0]&&D[0]<=q)){var he=Us(L,(-N+k)/V);return _a(he,O),[D,ja(he)]}}}function c(u,f){var h=i?n:Ve-n,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return jh(a,o,s,i?[0,-n]:[-Ve,n-Ve])}function GM(n,e,t,i,r,s){var a=n[0],o=n[1],l=e[0],c=e[1],u=0,f=1,h=l-a,d=c-o,g;if(g=t-a,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=r-a,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=i-o,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>u&&(u=g)}if(g=s-o,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<f&&(f=g)}return u>0&&(n[0]=a+u*h,n[1]=o+u*d),f<1&&(e[0]=a+f*h,e[1]=o+f*d),!0}}}}}var Pr=1e9,ks=-Pr;function HM(n,e,t,i){function r(c,u){return n<=c&&c<=t&&e<=u&&u<=i}function s(c,u,f,h){var d=0,g=0;if(c==null||(d=a(c,f))!==(g=a(u,f))||l(c,u)<0^f>0)do h.point(d===0||d===3?n:t,d>1?i:e);while((d=(d+f+4)%4)!==g);else h.point(u[0],u[1])}function a(c,u){return it(c[0]-n)<Ke?u>0?0:3:it(c[0]-t)<Ke?u>0?2:1:it(c[1]-e)<Ke?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var f=a(c,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=qh(),h,d,g,m,p,x,w,_,S,b,R,O={point:y,lineStart:pe,lineEnd:k,polygonStart:N,polygonEnd:V};function y(P,q){r(P,q)&&u.point(P,q)}function L(){for(var P=0,q=0,Y=d.length;q<Y;++q)for(var j=d[q],ne=1,le=j.length,$=j[0],K,he,_e=$[0],z=$[1];ne<le;++ne)K=_e,he=z,$=j[ne],_e=$[0],z=$[1],he<=i?z>i&&(_e-K)*(i-he)>(z-he)*(n-K)&&++P:z<=i&&(_e-K)*(i-he)<(z-he)*(n-K)&&--P;return P}function N(){u=f,h=[],d=[],R=!0}function V(){var P=L(),q=R&&P,Y=(h=Hh(h)).length;(q||Y)&&(c.polygonStart(),q&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),Y&&Xh(h,o,P,s,c),c.polygonEnd()),u=c,h=d=g=null}function pe(){O.point=D,d&&d.push(g=[]),b=!0,S=!1,w=_=NaN}function k(){h&&(D(m,p),x&&S&&f.rejoin(),h.push(f.result())),O.point=y,S&&u.lineEnd()}function D(P,q){var Y=r(P,q);if(d&&g.push([P,q]),b)m=P,p=q,x=Y,b=!1,Y&&(u.lineStart(),u.point(P,q));else if(Y&&S)u.point(P,q);else{var j=[w=Math.max(ks,Math.min(Pr,w)),_=Math.max(ks,Math.min(Pr,_))],ne=[P=Math.max(ks,Math.min(Pr,P)),q=Math.max(ks,Math.min(Pr,q))];GM(j,ne,n,e,t,i)?(S||(u.lineStart(),u.point(j[0],j[1])),u.point(ne[0],ne[1]),Y||u.lineEnd(),R=!1):Y&&(u.lineStart(),u.point(P,q),R=!1)}w=P,_=q,S=Y}return O}}const $u=n=>n;var sr=1/0,no=sr,Qr=-sr,io=Qr,VM={point:WM,lineStart:Cr,lineEnd:Cr,polygonStart:Cr,polygonEnd:Cr,result:function(){var n=[[sr,no],[Qr,io]];return Qr=io=-(no=sr=1/0),n}};function WM(n,e){n<sr&&(sr=n),n>Qr&&(Qr=n),e<no&&(no=e),e>io&&(io=e)}const Zu=VM;function Ol(n){return function(e){var t=new Ka;for(var i in n)t[i]=n[i];return t.stream=e,t}}function Ka(){}Ka.prototype={constructor:Ka,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Fl(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),RM(t,n.stream(Zu)),e(Zu.result()),i!=null&&n.clipExtent(i),n}function Yh(n,e,t){return Fl(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],a=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),o=+e[0][0]+(r-a*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-a*(i[1][1]+i[0][1]))/2;n.scale(150*a).translate([o,l])},t)}function qM(n,e,t){return Yh(n,[[0,0],e],t)}function XM(n,e,t){return Fl(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),a=(r-s*(i[1][0]+i[0][0]))/2,o=-s*i[0][1];n.scale(150*s).translate([a,o])},t)}function jM(n,e,t){return Fl(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),a=-s*i[0][0],o=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([a,o])},t)}var Ku=16,YM=st(30*ft);function Ju(n,e){return+e?ZM(n,e):$M(n)}function $M(n){return Ol({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function ZM(n,e){function t(i,r,s,a,o,l,c,u,f,h,d,g,m,p){var x=c-i,w=u-r,_=x*x+w*w;if(_>4*e&&m--){var S=a+h,b=o+d,R=l+g,O=yo(S*S+b*b+R*R),y=Jr(R/=O),L=it(it(R)-1)<Ke||it(s-f)<Ke?(s+f)/2:Kr(b,S),N=n(L,y),V=N[0],pe=N[1],k=V-i,D=pe-r,P=w*k-x*D;(P*P/_>e||it((x*k+w*D)/_-.5)>.3||a*h+o*d+l*g<YM)&&(t(i,r,s,a,o,l,V,pe,L,S/=O,b/=O,R,m,p),p.point(V,pe),t(V,pe,L,S,b,R,c,u,f,h,d,g,m,p))}}return function(i){var r,s,a,o,l,c,u,f,h,d,g,m,p={point:x,lineStart:w,lineEnd:S,polygonStart:function(){i.polygonStart(),p.lineStart=b},polygonEnd:function(){i.polygonEnd(),p.lineStart=w}};function x(y,L){y=n(y,L),i.point(y[0],y[1])}function w(){f=NaN,p.point=_,i.lineStart()}function _(y,L){var N=rr([y,L]),V=n(y,L);t(f,h,u,d,g,m,f=V[0],h=V[1],u=y,d=N[0],g=N[1],m=N[2],Ku,i),i.point(f,h)}function S(){p.point=x,i.lineEnd()}function b(){w(),p.point=R,p.lineEnd=O}function R(y,L){_(r=y,L),s=f,a=h,o=d,l=g,c=m,p.point=_}function O(){t(f,h,u,d,g,m,s,a,r,o,l,c,Ku,i),p.lineEnd=S,S()}return p}}var KM=Ol({point:function(n,e){this.stream.point(n*ft,e*ft)}});function JM(n){return Ol({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function QM(n,e,t,i,r){function s(a,o){return a*=i,o*=r,[e+n*a,t-n*o]}return s.invert=function(a,o){return[(a-e)/n*i,(t-o)/n*r]},s}function Qu(n,e,t,i,r,s){if(!s)return QM(n,e,t,i,r);var a=st(s),o=ot(s),l=a*n,c=o*n,u=a/n,f=o/n,h=(o*t-a*e)/n,d=(o*e+a*t)/n;function g(m,p){return m*=i,p*=r,[l*m-c*p+e,t-c*m-l*p]}return g.invert=function(m,p){return[i*(u*m-f*p+h),r*(d-f*m-u*p)]},g}function eS(n){return tS(function(){return n})()}function tS(n){var e,t=150,i=480,r=250,s=0,a=0,o=0,l=0,c=0,u,f=0,h=1,d=1,g=null,m=Yu,p=null,x,w,_,S=$u,b=.5,R,O,y,L,N;function V(P){return y(P[0]*ft,P[1]*ft)}function pe(P){return P=y.invert(P[0],P[1]),P&&[P[0]*kt,P[1]*kt]}V.stream=function(P){return L&&N===P?L:L=KM(JM(u)(m(R(S(N=P)))))},V.preclip=function(P){return arguments.length?(m=P,g=void 0,D()):m},V.postclip=function(P){return arguments.length?(S=P,p=x=w=_=null,D()):S},V.clipAngle=function(P){return arguments.length?(m=+P?kM(g=P*ft):(g=null,Yu),D()):g*kt},V.clipExtent=function(P){return arguments.length?(S=P==null?(p=x=w=_=null,$u):HM(p=+P[0][0],x=+P[0][1],w=+P[1][0],_=+P[1][1]),D()):p==null?null:[[p,x],[w,_]]},V.scale=function(P){return arguments.length?(t=+P,k()):t},V.translate=function(P){return arguments.length?(i=+P[0],r=+P[1],k()):[i,r]},V.center=function(P){return arguments.length?(s=P[0]%360*ft,a=P[1]%360*ft,k()):[s*kt,a*kt]},V.rotate=function(P){return arguments.length?(o=P[0]%360*ft,l=P[1]%360*ft,c=P.length>2?P[2]%360*ft:0,k()):[o*kt,l*kt,c*kt]},V.angle=function(P){return arguments.length?(f=P%360*ft,k()):f*kt},V.reflectX=function(P){return arguments.length?(h=P?-1:1,k()):h<0},V.reflectY=function(P){return arguments.length?(d=P?-1:1,k()):d<0},V.precision=function(P){return arguments.length?(R=Ju(O,b=P*P),D()):yo(b)},V.fitExtent=function(P,q){return Yh(V,P,q)},V.fitSize=function(P,q){return qM(V,P,q)},V.fitWidth=function(P,q){return XM(V,P,q)},V.fitHeight=function(P,q){return jM(V,P,q)};function k(){var P=Qu(t,0,0,h,d,f).apply(null,e(s,a)),q=Qu(t,i-P[0],r-P[1],h,d,f);return u=Wh(o,l,c),O=$a(e,q),y=$a(u,O),R=Ju(O,b),D()}function D(){return L=N=null,V}return function(){return e=n.apply(this,arguments),V.invert=e.invert&&pe,k()}}function zl(n,e){return[n,AM(PM((Nt+e)/2))]}zl.invert=function(n,e){return[n,2*Vh(TM(e))-Nt]};function nS(){return iS(zl).scale(961/$t)}function iS(n){var e=eS(n),t=e.center,i=e.scale,r=e.translate,s=e.clipExtent,a=null,o,l,c;e.scale=function(f){return arguments.length?(i(f),u()):i()},e.translate=function(f){return arguments.length?(r(f),u()):r()},e.center=function(f){return arguments.length?(t(f),u()):t()},e.clipExtent=function(f){return arguments.length?(f==null?a=o=l=c=null:(a=+f[0][0],o=+f[0][1],l=+f[1][0],c=+f[1][1]),u()):a==null?null:[[a,o],[l,c]]};function u(){var f=Ve*i(),h=e(DM(e.rotate()).invert([0,0]));return s(a==null?[[h[0]-f,h[1]-f],[h[0]+f,h[1]+f]]:n===zl?[[Math.max(h[0]-f,a),o],[Math.min(h[0]+f,l),c]]:[[a,Math.max(h[1]-f,o)],[l,Math.min(h[1]+f,c)]])}return u()}function qi(n,e,t){this.k=n,this.x=e,this.y=t}qi.prototype={constructor:qi,scale:function(n){return n===1?this:new qi(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new qi(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new qi(1,0,0);qi.prototype;const ef={type:"change"},va={type:"start"},tf={type:"end"};class rS extends Mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ie),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ef),i.update(),s=r.NONE},this.update=function(){const C=new F,X=new xi().setFromUnitVectors(e.up,new F(0,1,0)),be=X.clone().invert(),Ae=new F,Ee=new xi,Pe=2*Math.PI;return function(){const De=i.object.position;C.copy(De).sub(i.target),C.applyQuaternion(X),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&L(O()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ue=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;return isFinite(Ue)&&isFinite(Ye)&&(Ue<-Math.PI?Ue+=Pe:Ue>Math.PI&&(Ue-=Pe),Ye<-Math.PI?Ye+=Pe:Ye>Math.PI&&(Ye-=Pe),Ue<=Ye?o.theta=Math.max(Ue,Math.min(Ye,o.theta)):o.theta=o.theta>(Ue+Ye)/2?Math.max(Ue,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(o),C.applyQuaternion(be),De.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ae.distanceToSquared(i.object.position)>a||8*(1-Ee.dot(i.object.quaternion))>a?(i.dispatchEvent(ef),Ae.copy(i.object.position),Ee.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",te),i.domElement.removeEventListener("wheel",de),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ie)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Uu,l=new Uu;let c=1;const u=new F;let f=!1;const h=new ye,d=new ye,g=new ye,m=new ye,p=new ye,x=new ye,w=new ye,_=new ye,S=new ye,b=[],R={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function L(C){l.theta-=C}function N(C){l.phi-=C}const V=function(){const C=new F;return function(be,Ae){C.setFromMatrixColumn(Ae,0),C.multiplyScalar(-be),u.add(C)}}(),pe=function(){const C=new F;return function(be,Ae){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ae,1):(C.setFromMatrixColumn(Ae,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(be),u.add(C)}}(),k=function(){const C=new F;return function(be,Ae){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;C.copy(Pe).sub(i.target);let Te=C.length();Te*=Math.tan(i.object.fov/2*Math.PI/180),V(2*be*Te/Ee.clientHeight,i.object.matrix),pe(2*Ae*Te/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(be*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),pe(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function P(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(C){h.set(C.clientX,C.clientY)}function Y(C){w.set(C.clientX,C.clientY)}function j(C){m.set(C.clientX,C.clientY)}function ne(C){d.set(C.clientX,C.clientY),g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const X=i.domElement;L(2*Math.PI*g.x/X.clientHeight),N(2*Math.PI*g.y/X.clientHeight),h.copy(d),i.update()}function le(C){_.set(C.clientX,C.clientY),S.subVectors(_,w),S.y>0?D(y()):S.y<0&&P(y()),w.copy(_),i.update()}function $(C){p.set(C.clientX,C.clientY),x.subVectors(p,m).multiplyScalar(i.panSpeed),k(x.x,x.y),m.copy(p),i.update()}function K(C){C.deltaY<0?P(y()):C.deltaY>0&&D(y()),i.update()}function he(C){let X=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),X=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),X=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),X=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),X=!0;break}X&&(C.preventDefault(),i.update())}function _e(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const C=.5*(b[0].pageX+b[1].pageX),X=.5*(b[0].pageY+b[1].pageY);h.set(C,X)}}function z(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const C=.5*(b[0].pageX+b[1].pageX),X=.5*(b[0].pageY+b[1].pageY);m.set(C,X)}}function U(){const C=b[0].pageX-b[1].pageX,X=b[0].pageY-b[1].pageY,be=Math.sqrt(C*C+X*X);w.set(0,be)}function ce(){i.enableZoom&&U(),i.enablePan&&z()}function ue(){i.enableZoom&&U(),i.enableRotate&&_e()}function ve(C){if(b.length==1)d.set(C.pageX,C.pageY);else{const be=Se(C),Ae=.5*(C.pageX+be.x),Ee=.5*(C.pageY+be.y);d.set(Ae,Ee)}g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const X=i.domElement;L(2*Math.PI*g.x/X.clientHeight),N(2*Math.PI*g.y/X.clientHeight),h.copy(d)}function ge(C){if(b.length===1)p.set(C.pageX,C.pageY);else{const X=Se(C),be=.5*(C.pageX+X.x),Ae=.5*(C.pageY+X.y);p.set(be,Ae)}x.subVectors(p,m).multiplyScalar(i.panSpeed),k(x.x,x.y),m.copy(p)}function Me(C){const X=Se(C),be=C.pageX-X.x,Ae=C.pageY-X.y,Ee=Math.sqrt(be*be+Ae*Ae);_.set(0,Ee),S.set(0,Math.pow(_.y/w.y,i.zoomSpeed)),D(S.y),w.copy(_)}function v(C){i.enableZoom&&Me(C),i.enablePan&&ge(C)}function E(C){i.enableZoom&&Me(C),i.enableRotate&&ve(C)}function I(C){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",W),i.domElement.addEventListener("pointerup",H)),ee(C),C.pointerType==="touch"?T(C):re(C))}function W(C){i.enabled!==!1&&(C.pointerType==="touch"?M(C):Q(C))}function H(C){se(C),b.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(tf),s=r.NONE}function te(C){se(C)}function re(C){let X;switch(C.button){case 0:X=i.mouseButtons.LEFT;break;case 1:X=i.mouseButtons.MIDDLE;break;case 2:X=i.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Si.DOLLY:if(i.enableZoom===!1)return;Y(C),s=r.DOLLY;break;case Si.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;j(C),s=r.PAN}else{if(i.enableRotate===!1)return;q(C),s=r.ROTATE}break;case Si.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;j(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(va)}function Q(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ne(C);break;case r.DOLLY:if(i.enableZoom===!1)return;le(C);break;case r.PAN:if(i.enablePan===!1)return;$(C);break}}function de(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(va),K(C),i.dispatchEvent(tf))}function ie(C){i.enabled===!1||i.enablePan===!1||he(C)}function T(C){switch(me(C),b.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ce(),s=r.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(va)}function M(C){switch(me(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ge(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;E(C),i.update();break;default:s=r.NONE}}function B(C){i.enabled!==!1&&C.preventDefault()}function ee(C){b.push(C)}function se(C){delete R[C.pointerId];for(let X=0;X<b.length;X++)if(b[X].pointerId==C.pointerId){b.splice(X,1);return}}function me(C){let X=R[C.pointerId];X===void 0&&(X=new ye,R[C.pointerId]=X),X.set(C.pageX,C.pageY)}function Se(C){const X=C.pointerId===b[0].pointerId?b[1]:b[0];return R[X.pointerId]}i.domElement.addEventListener("contextmenu",B),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",te),i.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}const sS=fo({setup:()=>{const n=En(),e=En(),t=En(),i=En(),r=new Dy,s=En(),a=En(),o=nS().center([116.412318,39.909843]).translate([10,-20]),l=new xt,c=new Array,u=En(0),f=En(),h=new SM;let d;const g=new ye,m=()=>{var D;n.value=new Dh({antialias:!0}),n.value.setSize(window.innerWidth,window.innerHeight),n.value.setClearColor("#1F2025",1),(D=e.value)==null||D.appendChild(n.value.domElement)},p=()=>{i.value=new Gt(45,window.innerWidth/window.innerHeight,.1,1e3),i.value.position.set(0,-150,300),i.value.lookAt(new F(0,0,0))},x=()=>{s.value=new _M("#80edff","#75baff",.3),s.value.position.set(0,50,50),r.add(s.value),r.add(new MM(4473924)),a.value=new yM(16777215),a.value.position.set(0,50,50),a.value.castShadow=!0,r.add(a.value)},w=(D,P)=>{const q=new Uh;D.forEach((le,$)=>{const K=o(le)[0],he=o(le)[1];$===0&&q.moveTo(K,-he),q.lineTo(K,-he)});const Y=new Il(q,{depth:100,bevelEnabled:!1}),j=new Tl({color:P,transparent:!0,opacity:.3}),ne=new Pn(Y,j);return ne.scale.set(1,1,.1),ne},_=(D,P)=>{const q=new mn,Y=new Array;D.forEach(ne=>{const le=o(ne)[0],$=o(ne)[1];Y.push(new F(le,-$,10))}),q.setFromPoints(Y);const j=new Ih({color:P});return new Iy(q,j)},S=D=>{const P="#3597D4";D.forEach(q=>{const Y=new xt;Y.name=q.properties.name;const j=q.geometry.coordinates;q.geometry.type==="MultiPolygon"&&j.forEach(ne=>{ne.forEach(le=>{const $=w(le,P),K=_(le,P);Y.add(K),Y.add($)})}),q.geometry.type==="Polygon"&&j.forEach(ne=>{const le=w(ne,P),$=_(ne,P);Y.add($),Y.add(le)}),c.push(Y),l.add(Y),u.value++}),r.add(l)},b=D=>new Promise((P,q)=>{const Y=new XMLHttpRequest,j=D.replace(/省|自治区|维吾尔/g,""),ne=encodeURI(`http://1.13.165.4:8888/getCovidInfo?province=${j}`);Y.open("GET",ne,!0),Y.onload=function(){P(JSON.parse(Y.responseText))},Y.onerror=function(){q("\u51FA\u73B0\u5F02\u5E38")},Y.send()}),R=()=>{if(d&&(d.material.opacity=.3,d=null),h){const D=h.intersectObjects(c,!0);if(D.length>0){const P=D.filter(function(q){return q&&q.object})[D.length-1];P&&P.object&&(d=P.object,d.material.opacity=1)}}},O=()=>{f.value=new rS(i.value,n.value.domElement),f.value.enableDamping=!0,f.value.enableZoom=!0,f.value.autoRotate=!0,f.value.autoRotateSpeed=.5,f.value.minDistance=1,f.value.maxDistance=400,f.value.enablePan=!0,f.value.minAzimuthAngle=-Math.PI*(50/180),f.value.maxAzimuthAngle=Math.PI*(50/180),f.value.minPolarAngle=-Math.PI*(100/180),f.value.maxPolarAngle=Math.PI*1},y=()=>{h&&h.setFromCamera(g,i.value),n.value.render(r,i.value)},L=()=>{if(d){let D=d.parent.name;console.log(D),t.value.innerText=D,b(D).then(P=>{t.value.innerText=`${D}\u3002\u5171\u8BA1\u786E\u8BCA\u6570\u91CF\uFF1A${P.total.confirm}\u3002\u5171\u8BA1\u6B7B\u4EA1\u6570\u91CF\uFF1A${P.total.dead}\u3002\u5171\u8BA1\u6CBB\u6108\u6570\u91CF\uFF1A${P.total.heal}`})}},N=()=>{new gM().load("model/china.json",P=>{const Y=JSON.parse(P).features;S(Y)})},V=()=>{y(),requestAnimationFrame(V)},pe=D=>{const{top:P,left:q,width:Y,height:j}=e.value.getBoundingClientRect();let ne=D.clientX-q,le=D.clientY-P;g.x=ne/Y*2-1,g.y=-(le/j)*2+1},k=()=>{i.value.aspect=window.innerWidth/window.innerHeight,i.value.updateProjectionMatrix(),y(),n.value.setSize(window.innerWidth,window.innerHeight)};return Zf(()=>{m(),p(),x(),N(),O(),V(),document.addEventListener("mousemove",pe,!1),document.addEventListener("pointermove",R),document.addEventListener("click",L),window.onresize=k}),()=>vt("div",{class:Nm.mainPage},[vt("header",null,[vt("h1",{ref:t},[ah("\u57CE\u5E02\u540D")])]),vt("main",{ref:e},null)])}}),oS=[{path:"/",redirect:"/mainpage"},{path:"/mainpage",component:sS}];/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $h=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",dr=n=>$h?Symbol(n):"_vr_"+n,aS=dr("rvlm"),nf=dr("rvd"),Ul=dr("r"),Zh=dr("rl"),Ja=dr("rvl"),ki=typeof window<"u";function lS(n){return n.__esModule||$h&&n[Symbol.toStringTag]==="Module"}const $e=Object.assign;function ya(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const zr=()=>{},cS=/\/$/,uS=n=>n.replace(cS,"");function Ma(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("?"),l=e.indexOf("#",o>-1?o:0);return o>-1&&(i=e.slice(0,o),s=e.slice(o+1,l>-1?l:e.length),r=n(s)),l>-1&&(i=i||e.slice(0,l),a=e.slice(l,e.length)),i=pS(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function fS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function rf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function hS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&or(e.matched[i],t.matched[r])&&Kh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function or(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Kh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!dS(n[t],e[t]))return!1;return!0}function dS(n,e){return Array.isArray(n)?sf(n,e):Array.isArray(e)?sf(e,n):n===e}function sf(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function pS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],!(r===1||a==="."))if(a==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var es;(function(n){n.pop="pop",n.push="push"})(es||(es={}));var Ur;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ur||(Ur={}));function mS(n){if(!n)if(ki){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),uS(n)}const gS=/^[^#]+#/;function _S(n,e){return n.replace(gS,"#")+e}function xS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function vS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=xS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function of(n,e){return(history.state?history.state.position-e:-1)+n}const Qa=new Map;function yS(n,e){Qa.set(n,e)}function MS(n){const e=Qa.get(n);return Qa.delete(n),e}let SS=()=>location.protocol+"//"+location.host;function Jh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),rf(l,"")}return rf(t,n)+i+r}function bS(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=Jh(n,location),g=t.value,m=e.value;let p=0;if(h){if(t.value=d,e.value=h,a&&a===g){a=null;return}p=m?h.position-m.position:0}else i(d);r.forEach(x=>{x(t.value,g,{delta:p,type:es.pop,direction:p?p>0?Ur.forward:Ur.back:Ur.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState($e({},h.state,{scroll:Mo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function af(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Mo():null}}function wS(n){const{history:e,location:t}=window,i={value:Jh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:SS()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){const u=$e({},e.state,af(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=$e({},r.value,e.state,{forward:l,scroll:Mo()});s(u.current,u,!0);const f=$e({},af(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function ES(n){n=mS(n);const e=wS(n),t=bS(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=$e({location:"",base:n,go:i,createHref:_S.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function TS(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),ES(n)}function AS(n){return typeof n=="string"||n&&typeof n=="object"}function Qh(n){return typeof n=="string"||typeof n=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ed=dr("nf");var lf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(lf||(lf={}));function ar(n,e){return $e(new Error,{type:n,[ed]:!0},e)}function kn(n,e){return n instanceof Error&&ed in n&&(e==null||!!(n.type&e))}const cf="[^/]+?",CS={sensitive:!1,strict:!1,start:!0,end:!0},PS=/[.+*?^${}()[\]/\\]/g;function LS(n,e){const t=$e({},CS,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(PS,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:m,optional:p,regexp:x}=h;s.push({name:g,repeatable:m,optional:p});const w=x||cf;if(w!==cf){d+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+S.message)}}let _=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(_=p&&c.length<2?`(?:/${_})`:"/"+_),p&&(_+="?"),r+=_,d+=20,p&&(d+=-8),m&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,x=g in c?c[g]:"";if(Array.isArray(x)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(x)?x.join("/"):x;if(!w)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u}return{re:a,score:i,keys:s,parse:o,stringify:l}}function RS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DS(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=RS(i[t],r[t]);if(s)return s;t++}return r.length-i.length}const IS={type:0,value:""},NS=/[a-zA-Z0-9_]/;function OS(n){if(!n)return[[]];if(n==="/")return[[IS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:NS.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function FS(n,e,t){const i=LS(OS(n.path),t),r=$e(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function zS(n,e){const t=[],i=new Map;e=ff({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const d=!h,g=BS(u);g.aliasOf=h&&h.record;const m=ff(e,u),p=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of _)p.push($e({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g}))}let x,w;for(const _ of p){const{path:S}=_;if(f&&S[0]!=="/"){const b=f.record.path,R=b[b.length-1]==="/"?"":"/";_.path=f.record.path+(S&&R+S)}if(x=FS(_,f,m),h?h.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),d&&u.name&&!uf(x)&&a(u.name)),"children"in g){const b=g.children;for(let R=0;R<b.length;R++)s(b[R],x,h&&h.children[R])}h=h||x,l(x)}return w?()=>{a(w)}:zr}function a(u){if(Qh(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&DS(u,t[f])>=0&&(u.record.path!==t[f].record.path||!td(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!uf(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,m;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw ar(1,{location:u});m=h.record.name,d=$e(US(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(w=>w.re.test(g)),h&&(d=h.parse(g),m=h.record.name);else{if(h=f.name?i.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw ar(1,{location:u,currentLocation:f});m=h.record.name,d=$e({},f.params,u.params),g=h.stringify(d)}const p=[];let x=h;for(;x;)p.unshift(x.record),x=x.parent;return{name:m,path:g,params:d,matched:p,meta:GS(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function US(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function BS(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:kS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function kS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function uf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function GS(n){return n.reduce((e,t)=>$e(e,t.meta),{})}function ff(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function td(n,e){return e.children.some(t=>t===n||td(n,t))}const nd=/#/g,HS=/&/g,VS=/\//g,WS=/=/g,qS=/\?/g,id=/\+/g,XS=/%5B/g,jS=/%5D/g,rd=/%5E/g,YS=/%60/g,sd=/%7B/g,$S=/%7C/g,od=/%7D/g,ZS=/%20/g;function Bl(n){return encodeURI(""+n).replace($S,"|").replace(XS,"[").replace(jS,"]")}function KS(n){return Bl(n).replace(sd,"{").replace(od,"}").replace(rd,"^")}function el(n){return Bl(n).replace(id,"%2B").replace(ZS,"+").replace(nd,"%23").replace(HS,"%26").replace(YS,"`").replace(sd,"{").replace(od,"}").replace(rd,"^")}function JS(n){return el(n).replace(WS,"%3D")}function QS(n){return Bl(n).replace(nd,"%23").replace(qS,"%3F")}function eb(n){return n==null?"":QS(n).replace(VS,"%2F")}function ro(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function tb(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(id," "),a=s.indexOf("="),o=ro(a<0?s:s.slice(0,a)),l=a<0?null:ro(s.slice(a+1));if(o in e){let c=e[o];Array.isArray(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function hf(n){let e="";for(let t in n){const i=n[t];if(t=JS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&el(s)):[i&&el(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function nb(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function wr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Hn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(ar(4,{from:t,to:e})):f instanceof Error?o(f):AS(f)?o(ar(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Sa(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(ib(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Hn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=lS(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Hn(h,t,i,s,a)()}))}}return r}function ib(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function df(n){const e=Ln(Ul),t=Ln(Zh),i=fn(()=>e.resolve(Dr(n.to))),r=fn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(or.bind(null,u));if(h>-1)return h;const d=pf(l[c-2]);return c>1&&pf(u)===d&&f[f.length-1].path!==d?f.findIndex(or.bind(null,l[c-2])):h}),s=fn(()=>r.value>-1&&ab(t.params,i.value.params)),a=fn(()=>r.value>-1&&r.value===t.matched.length-1&&Kh(t.params,i.value.params));function o(l={}){return ob(l)?e[Dr(n.replace)?"replace":"push"](Dr(n.to)).catch(zr):Promise.resolve()}return{route:i,href:fn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const rb=fo({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(n,{slots:e}){const t=ts(df(n)),{options:i}=Ln(Ul),r=fn(()=>({[mf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[mf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:uh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),sb=rb;function ob(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ab(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function pf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mf=(n,e,t)=>n!=null?n:e!=null?e:t,lb=fo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=Ln(Ja),r=fn(()=>n.route||i.value),s=Ln(nf,0),a=fn(()=>r.value.matched[s]);Hs(nf,s+1),Hs(aS,a),Hs(Ja,r);const o=En();return Vs(()=>[o.value,a.value,n.name],([l,c,u],[f,h,d])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!or(c,h)||!f)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=a.value,u=c&&c.components[n.name],f=n.name;if(!u)return gf(t.default,{Component:u,route:l});const h=c.props[n.name],d=h?h===!0?l.params:typeof h=="function"?h(l):h:null,m=uh(u,$e({},d,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(c.instances[f]=null)},ref:o}));return gf(t.default,{Component:m,route:l})||m}}});function gf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ad=lb;function cb(n){const e=zS(n.routes,n),t=n.parseQuery||tb,i=n.stringifyQuery||hf,r=n.history,s=wr(),a=wr(),o=wr(),l=ip(Bn);let c=Bn;ki&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ya.bind(null,z=>""+z),f=ya.bind(null,eb),h=ya.bind(null,ro);function d(z,U){let ce,ue;return Qh(z)?(ce=e.getRecordMatcher(z),ue=U):ue=z,e.addRoute(ue,ce)}function g(z){const U=e.getRecordMatcher(z);U&&e.removeRoute(U)}function m(){return e.getRoutes().map(z=>z.record)}function p(z){return!!e.getRecordMatcher(z)}function x(z,U){if(U=$e({},U||l.value),typeof z=="string"){const v=Ma(t,z,U.path),E=e.resolve({path:v.path},U),I=r.createHref(v.fullPath);return $e(v,E,{params:h(E.params),hash:ro(v.hash),redirectedFrom:void 0,href:I})}let ce;if("path"in z)ce=$e({},z,{path:Ma(t,z.path,U.path).path});else{const v=$e({},z.params);for(const E in v)v[E]==null&&delete v[E];ce=$e({},z,{params:f(z.params)}),U.params=f(U.params)}const ue=e.resolve(ce,U),ve=z.hash||"";ue.params=u(h(ue.params));const ge=fS(i,$e({},z,{hash:KS(ve),path:ue.path})),Me=r.createHref(ge);return $e({fullPath:ge,hash:ve,query:i===hf?nb(z.query):z.query||{}},ue,{redirectedFrom:void 0,href:Me})}function w(z){return typeof z=="string"?Ma(t,z,l.value.path):$e({},z)}function _(z,U){if(c!==z)return ar(8,{from:U,to:z})}function S(z){return O(z)}function b(z){return S($e(w(z),{replace:!0}))}function R(z){const U=z.matched[z.matched.length-1];if(U&&U.redirect){const{redirect:ce}=U;let ue=typeof ce=="function"?ce(z):ce;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=w(ue):{path:ue},ue.params={}),$e({query:z.query,hash:z.hash,params:z.params},ue)}}function O(z,U){const ce=c=x(z),ue=l.value,ve=z.state,ge=z.force,Me=z.replace===!0,v=R(ce);if(v)return O($e(w(v),{state:ve,force:ge,replace:Me}),U||ce);const E=ce;E.redirectedFrom=U;let I;return!ge&&hS(i,ue,ce)&&(I=ar(16,{to:E,from:ue}),le(ue,ue,!0,!1)),(I?Promise.resolve(I):L(E,ue)).catch(W=>kn(W)?kn(W,2)?W:ne(W):Y(W,E,ue)).then(W=>{if(W){if(kn(W,2))return O($e(w(W.to),{state:ve,force:ge,replace:Me}),U||E)}else W=V(E,ue,!0,Me,ve);return N(E,ue,W),W})}function y(z,U){const ce=_(z,U);return ce?Promise.reject(ce):Promise.resolve()}function L(z,U){let ce;const[ue,ve,ge]=ub(z,U);ce=Sa(ue.reverse(),"beforeRouteLeave",z,U);for(const v of ue)v.leaveGuards.forEach(E=>{ce.push(Hn(E,z,U))});const Me=y.bind(null,z,U);return ce.push(Me),Ui(ce).then(()=>{ce=[];for(const v of s.list())ce.push(Hn(v,z,U));return ce.push(Me),Ui(ce)}).then(()=>{ce=Sa(ve,"beforeRouteUpdate",z,U);for(const v of ve)v.updateGuards.forEach(E=>{ce.push(Hn(E,z,U))});return ce.push(Me),Ui(ce)}).then(()=>{ce=[];for(const v of z.matched)if(v.beforeEnter&&!U.matched.includes(v))if(Array.isArray(v.beforeEnter))for(const E of v.beforeEnter)ce.push(Hn(E,z,U));else ce.push(Hn(v.beforeEnter,z,U));return ce.push(Me),Ui(ce)}).then(()=>(z.matched.forEach(v=>v.enterCallbacks={}),ce=Sa(ge,"beforeRouteEnter",z,U),ce.push(Me),Ui(ce))).then(()=>{ce=[];for(const v of a.list())ce.push(Hn(v,z,U));return ce.push(Me),Ui(ce)}).catch(v=>kn(v,8)?v:Promise.reject(v))}function N(z,U,ce){for(const ue of o.list())ue(z,U,ce)}function V(z,U,ce,ue,ve){const ge=_(z,U);if(ge)return ge;const Me=U===Bn,v=ki?history.state:{};ce&&(ue||Me?r.replace(z.fullPath,$e({scroll:Me&&v&&v.scroll},ve)):r.push(z.fullPath,ve)),l.value=z,le(z,U,ce,Me),ne()}let pe;function k(){pe=r.listen((z,U,ce)=>{const ue=x(z),ve=R(ue);if(ve){O($e(ve,{replace:!0}),ue).catch(zr);return}c=ue;const ge=l.value;ki&&yS(of(ge.fullPath,ce.delta),Mo()),L(ue,ge).catch(Me=>kn(Me,12)?Me:kn(Me,2)?(O(Me.to,ue).then(v=>{kn(v,20)&&!ce.delta&&ce.type===es.pop&&r.go(-1,!1)}).catch(zr),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),Y(Me,ue,ge))).then(Me=>{Me=Me||V(ue,ge,!1),Me&&(ce.delta?r.go(-ce.delta,!1):ce.type===es.pop&&kn(Me,20)&&r.go(-1,!1)),N(ue,ge,Me)}).catch(zr)})}let D=wr(),P=wr(),q;function Y(z,U,ce){ne(z);const ue=P.list();return ue.length?ue.forEach(ve=>ve(z,U,ce)):console.error(z),Promise.reject(z)}function j(){return q&&l.value!==Bn?Promise.resolve():new Promise((z,U)=>{D.add([z,U])})}function ne(z){return q||(q=!z,k(),D.list().forEach(([U,ce])=>z?ce(z):U()),D.reset()),z}function le(z,U,ce,ue){const{scrollBehavior:ve}=n;if(!ki||!ve)return Promise.resolve();const ge=!ce&&MS(of(z.fullPath,0))||(ue||!ce)&&history.state&&history.state.scroll||null;return kf().then(()=>ve(z,U,ge)).then(Me=>Me&&vS(Me)).catch(Me=>Y(Me,z,U))}const $=z=>r.go(z);let K;const he=new Set;return{currentRoute:l,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:x,options:n,push:S,replace:b,go:$,back:()=>$(-1),forward:()=>$(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:P.add,isReady:j,install(z){const U=this;z.component("RouterLink",sb),z.component("RouterView",ad),z.config.globalProperties.$router=U,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>Dr(l)}),ki&&!K&&l.value===Bn&&(K=!0,S(r.location).catch(ve=>{}));const ce={};for(const ve in Bn)ce[ve]=fn(()=>l.value[ve]);z.provide(Ul,U),z.provide(Zh,ts(ce)),z.provide(Ja,l);const ue=z.unmount;he.add(z),z.unmount=function(){he.delete(z),he.size<1&&(c=Bn,pe&&pe(),l.value=Bn,K=!1,q=!1),ue()}}}}function Ui(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ub(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>or(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>or(c,l))||r.push(l))}return[t,i,r]}const fb=fo({setup(){return()=>vt("div",null,[vt(ad,null,null)])}});const hb=TS(),db=cb({history:hb,routes:oS}),ld=Rm(fb);ld.use(db);ld.mount("#app");
