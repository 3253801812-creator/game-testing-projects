var Ux=Object.defineProperty;var Nx=(e,t,n)=>t in e?Ux(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var At=(e,t,n)=>Nx(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var kg={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=Symbol.for("react.transitional.element"),zx=Symbol.for("react.fragment");function Xg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:Ox,type:e,key:i,ref:t!==void 0?t:null,props:n}}Cc.Fragment=zx;Cc.jsx=Xg;Cc.jsxs=Xg;kg.exports=Cc;var N=kg.exports,Wg={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=Symbol.for("react.transitional.element"),Px=Symbol.for("react.portal"),Bx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Fx=Symbol.for("react.profiler"),Hx=Symbol.for("react.consumer"),Gx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Xx=Symbol.for("react.memo"),qg=Symbol.for("react.lazy"),Wx=Symbol.for("react.activity"),qd=Symbol.iterator;function qx(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,Zg={};function xr(e,t,n){this.props=e,this.context=t,this.refs=Zg,this.updater=n||jg}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kg(){}Kg.prototype=xr.prototype;function wh(e,t,n){this.props=e,this.context=t,this.refs=Zg,this.updater=n||jg}var Lh=wh.prototype=new Kg;Lh.constructor=wh;Yg(Lh,xr.prototype);Lh.isPureReactComponent=!0;var jd=Array.isArray;function Mf(){}var me={H:null,A:null,T:null,S:null},Qg=Object.prototype.hasOwnProperty;function Dh(e,t,n){var i=n.ref;return{$$typeof:Ch,type:e,key:t,ref:i!==void 0?i:null,props:n}}function jx(e,t){return Dh(e.type,t,e.props)}function Uh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ch}function Yx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yd=/\/+/g;function eu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yx(""+e.key):t.toString(36)}function Zx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Mf,Mf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ds(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ch:case Px:r=!0;break;case qg:return r=e._init,Ds(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+eu(e,0):i,jd(a)?(n="",r!=null&&(n=r.replace(Yd,"$&/")+"/"),Ds(a,t,n,"",function(c){return c})):a!=null&&(Uh(a)&&(a=jx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Yd,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(jd(e))for(var l=0;l<e.length;l++)i=e[l],s=o+eu(i,l),r+=Ds(i,t,n,s,a);else if(l=qx(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+eu(i,l++),r+=Ds(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Ds(Zx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Xo(e,t,n){if(e==null)return e;var i=[],a=0;return Ds(e,i,"","",function(s){return t.call(n,s,a++)}),i}function Kx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Zd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qx={map:Xo,forEach:function(e,t,n){Xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!Uh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};wt.Activity=Wx;wt.Children=Qx;wt.Component=xr;wt.Fragment=Bx;wt.Profiler=Fx;wt.PureComponent=wh;wt.StrictMode=Ix;wt.Suspense=kx;wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return me.H.useMemoCache(e)}};wt.cache=function(e){return function(){return e.apply(null,arguments)}};wt.cacheSignal=function(){return null};wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Yg({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Qg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Dh(e.type,a,i)};wt.createContext=function(e){return e={$$typeof:Gx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Hx,_context:e},e};wt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Qg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Dh(e,s,a)};wt.createRef=function(){return{current:null}};wt.forwardRef=function(e){return{$$typeof:Vx,render:e}};wt.isValidElement=Uh;wt.lazy=function(e){return{$$typeof:qg,_payload:{_status:-1,_result:e},_init:Kx}};wt.memo=function(e,t){return{$$typeof:Xx,type:e,compare:t===void 0?null:t}};wt.startTransition=function(e){var t=me.T,n={};me.T=n;try{var i=e(),a=me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Mf,Zd)}catch(s){Zd(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),me.T=t}};wt.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()};wt.use=function(e){return me.H.use(e)};wt.useActionState=function(e,t,n){return me.H.useActionState(e,t,n)};wt.useCallback=function(e,t){return me.H.useCallback(e,t)};wt.useContext=function(e){return me.H.useContext(e)};wt.useDebugValue=function(){};wt.useDeferredValue=function(e,t){return me.H.useDeferredValue(e,t)};wt.useEffect=function(e,t){return me.H.useEffect(e,t)};wt.useEffectEvent=function(e){return me.H.useEffectEvent(e)};wt.useId=function(){return me.H.useId()};wt.useImperativeHandle=function(e,t,n){return me.H.useImperativeHandle(e,t,n)};wt.useInsertionEffect=function(e,t){return me.H.useInsertionEffect(e,t)};wt.useLayoutEffect=function(e,t){return me.H.useLayoutEffect(e,t)};wt.useMemo=function(e,t){return me.H.useMemo(e,t)};wt.useOptimistic=function(e,t){return me.H.useOptimistic(e,t)};wt.useReducer=function(e,t,n){return me.H.useReducer(e,t,n)};wt.useRef=function(e){return me.H.useRef(e)};wt.useState=function(e){return me.H.useState(e)};wt.useSyncExternalStore=function(e,t,n){return me.H.useSyncExternalStore(e,t,n)};wt.useTransition=function(){return me.H.useTransition()};wt.version="19.2.8";Wg.exports=wt;var Ci=Wg.exports,Jg={exports:{}},wc={},$g={exports:{}},t_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,k){var B=L.length;L.push(k);t:for(;0<B;){var j=B-1>>>1,Y=L[j];if(0<a(Y,k))L[j]=k,L[B]=Y,B=j;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],B=L.pop();if(B!==k){L[0]=B;t:for(var j=0,Y=L.length,nt=Y>>>1;j<nt;){var it=2*(j+1)-1,q=L[it],K=it+1,rt=L[K];if(0>a(q,B))K<Y&&0>a(rt,q)?(L[j]=rt,L[K]=B,j=K):(L[j]=q,L[it]=B,j=it);else if(K<Y&&0>a(rt,B))L[j]=rt,L[K]=B,j=K;else break t}}return k}function a(L,k){var B=L.sortIndex-k.sortIndex;return B!==0?B:L.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],f=1,d=null,h=3,p=!1,y=!1,v=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function x(L){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=L)i(c),k.sortIndex=k.expirationTime,t(l,k);else break;k=n(c)}}function C(L){if(v=!1,x(L),!y)if(n(l)!==null)y=!0,R||(R=!0,X());else{var k=n(c);k!==null&&I(C,k.startTime-L)}}var R=!1,T=-1,U=5,S=-1;function E(){return m?!0:!(e.unstable_now()-S<U)}function P(){if(m=!1,R){var L=e.unstable_now();S=L;var k=!0;try{t:{y=!1,v&&(v=!1,g(T),T=-1),p=!0;var B=h;try{e:{for(x(L),d=n(l);d!==null&&!(d.expirationTime>L&&E());){var j=d.callback;if(typeof j=="function"){d.callback=null,h=d.priorityLevel;var Y=j(d.expirationTime<=L);if(L=e.unstable_now(),typeof Y=="function"){d.callback=Y,x(L),k=!0;break e}d===n(l)&&i(l),x(L)}else i(l);d=n(l)}if(d!==null)k=!0;else{var nt=n(c);nt!==null&&I(C,nt.startTime-L),k=!1}}break t}finally{d=null,h=B,p=!1}k=void 0}}finally{k?X():R=!1}}}var X;if(typeof _=="function")X=function(){_(P)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,D=$.port2;$.port1.onmessage=P,X=function(){D.postMessage(null)}}else X=function(){u(P,0)};function I(L,k){T=u(function(){L(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var B=h;h=k;try{return L()}finally{h=B}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=h;h=L;try{return k()}finally{h=B}},e.unstable_scheduleCallback=function(L,k,B){var j=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?j+B:j):B=j,L){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=B+Y,L={id:f++,callback:k,priorityLevel:L,startTime:B,expirationTime:Y,sortIndex:-1},B>j?(L.sortIndex=B,t(c,L),n(l)===null&&L===n(c)&&(v?(g(T),T=-1):v=!0,I(C,B-j))):(L.sortIndex=Y,t(l,L),y||p||(y=!0,R||(R=!0,X()))),L},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(L){var k=h;return function(){var B=h;h=k;try{return L.apply(this,arguments)}finally{h=B}}}})(t_);$g.exports=t_;var Jx=$g.exports,e_={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=Ci;function n_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qi(){}var ln={d:{f:qi,r:function(){throw Error(n_(522))},D:qi,C:qi,L:qi,m:qi,X:qi,S:qi,M:qi},p:0,findDOMNode:null},ty=Symbol.for("react.portal");function ey(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ty,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var jr=$x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ln;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n_(299));return ey(e,t,null,n)};cn.flushSync=function(e){var t=jr.T,n=ln.p;try{if(jr.T=null,ln.p=2,e)return e()}finally{jr.T=t,ln.p=n,ln.d.f()}};cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ln.d.C(e,t))};cn.prefetchDNS=function(e){typeof e=="string"&&ln.d.D(e)};cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?ln.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&ln.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Lc(t.as,t.crossOrigin);ln.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ln.d.M(e)};cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin);ln.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Lc(t.as,t.crossOrigin);ln.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ln.d.m(e)};cn.requestFormReset=function(e){ln.d.r(e)};cn.unstable_batchedUpdates=function(e,t){return e(t)};cn.useFormState=function(e,t,n){return jr.H.useFormState(e,t,n)};cn.useFormStatus=function(){return jr.H.useHostTransitionStatus()};cn.version="19.2.8";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(e){console.error(e)}}i_(),e_.exports=cn;var ny=e_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=Jx,a_=Ci,iy=ny;function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function o_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kd(e){if(Ao(e)!==e)throw Error(Z(188))}function ay(e){var t=e.alternate;if(!t){if(t=Ao(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Kd(a),e;if(s===i)return Kd(a),t;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function l_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=l_(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,sy=Symbol.for("react.element"),Wo=Symbol.for("react.transitional.element"),Vr=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),c_=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),u_=Symbol.for("react.consumer"),Ui=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Af=Symbol.for("react.activity"),ry=Symbol.for("react.memo_cache_sentinel"),Qd=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Qd&&e[Qd]||e["@@iterator"],typeof e=="function"?e:null)}var oy=Symbol.for("react.client.reference");function Rf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Os:return"Fragment";case Ef:return"Profiler";case c_:return"StrictMode";case bf:return"Suspense";case Tf:return"SuspenseList";case Af:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Vr:return"Portal";case Ui:return e.displayName||"Context";case u_:return(e._context.displayName||"Context")+".Consumer";case Nh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oh:return t=e.displayName||null,t!==null?t:Rf(e.type)||"Memo";case Ji:t=e._payload,e=e._init;try{return Rf(e(t))}catch{}}return null}var kr=Array.isArray,Mt=a_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$t=iy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},Cf=[],zs=-1;function pi(e){return{current:e}}function Xe(e){0>zs||(e.current=Cf[zs],Cf[zs]=null,zs--)}function fe(e,t){zs++,Cf[zs]=e.current,e.current=t}var hi=pi(null),lo=pi(null),fa=pi(null),jl=pi(null);function Yl(e,t){switch(fe(fa,t),fe(lo,e),fe(hi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?im(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=im(t),e=Lv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Xe(hi),fe(hi,e)}function ar(){Xe(hi),Xe(lo),Xe(fa)}function wf(e){e.memoizedState!==null&&fe(jl,e);var t=hi.current,n=Lv(t,e.type);t!==n&&(fe(lo,e),fe(hi,n))}function Zl(e){lo.current===e&&(Xe(hi),Xe(lo)),jl.current===e&&(Xe(jl),yo._currentValue=Wa)}var nu,Jd;function Ba(e){if(nu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nu=t&&t[1]||"",Jd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nu+e+Jd}var iu=!1;function au(e,t){if(!e||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){h=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ba(n):""}function ly(e,t){switch(e.tag){case 26:case 27:case 5:return Ba(e.type);case 16:return Ba("Lazy");case 13:return e.child!==t&&t!==null?Ba("Suspense Fallback"):Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return au(e.type,!1);case 11:return au(e.type.render,!1);case 1:return au(e.type,!0);case 31:return Ba("Activity");default:return""}}function $d(e){try{var t="",n=null;do t+=ly(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lf=Object.prototype.hasOwnProperty,zh=ze.unstable_scheduleCallback,su=ze.unstable_cancelCallback,cy=ze.unstable_shouldYield,uy=ze.unstable_requestPaint,wn=ze.unstable_now,fy=ze.unstable_getCurrentPriorityLevel,f_=ze.unstable_ImmediatePriority,h_=ze.unstable_UserBlockingPriority,Kl=ze.unstable_NormalPriority,hy=ze.unstable_LowPriority,d_=ze.unstable_IdlePriority,dy=ze.log,py=ze.unstable_setDisableYieldValue,Ro=null,Ln=null;function aa(e){if(typeof dy=="function"&&py(e),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(Ro,e)}catch{}}var Dn=Math.clz32?Math.clz32:_y,my=Math.log,gy=Math.LN2;function _y(e){return e>>>=0,e===0?32:31-(my(e)/gy|0)|0}var qo=256,jo=262144,Yo=4194304;function Ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=Ia(i):(r&=o,r!==0?a=Ia(r):n||(n=o&~e,n!==0&&(a=Ia(n))))):(o=i&~s,o!==0?a=Ia(o):r!==0?a=Ia(r):n||(n=i&~e,n!==0&&(a=Ia(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Co(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(){var e=Yo;return Yo<<=1,!(Yo&62914560)&&(Yo=4194304),e}function ru(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xy(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Dn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&m_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function m_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Dn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function g_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Dn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function __(e,t){var n=t&-t;return n=n&42?1:Ph(n),n&(e.suspendedLanes|t)?0:n}function Ph(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function v_(){var e=$t.p;return e!==0?e:(e=window.event,e===void 0?32:Gv(e.type))}function tp(e,t){var n=$t.p;try{return $t.p=e,t()}finally{$t.p=n}}var Ca=Math.random().toString(36).slice(2),je="__reactFiber$"+Ca,xn="__reactProps$"+Ca,yr="__reactContainer$"+Ca,Df="__reactEvents$"+Ca,yy="__reactListeners$"+Ca,Sy="__reactHandles$"+Ca,ep="__reactResources$"+Ca,Lo="__reactMarker$"+Ca;function Ih(e){delete e[je],delete e[xn],delete e[Df],delete e[yy],delete e[Sy]}function Ps(e){var t=e[je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yr]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lm(e);e!==null;){if(n=e[je])return n;e=lm(e)}return t}e=n,n=e.parentNode}return null}function Sr(e){if(e=e[je]||e[yr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function Zs(e){var t=e[ep];return t||(t=e[ep]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Lo]=!0}var x_=new Set,y_={};function os(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(y_[e]=t,e=0;e<t.length;e++)x_.add(t[e])}var My=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),np={},ip={};function Ey(e){return Lf.call(ip,e)?!0:Lf.call(np,e)?!1:My.test(e)?ip[e]=!0:(np[e]=!0,!1)}function Dl(e,t,n){if(Ey(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Zo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _i(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function S_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function by(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uf(e){if(!e._valueTracker){var t=S_(e)?"checked":"value";e._valueTracker=by(e,t,""+e[t])}}function M_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=S_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ty=/[\n"\\]/g;function Xn(e){return e.replace(Ty,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nf(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Fn(t)):e.value!==""+Fn(t)&&(e.value=""+Fn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Of(e,r,Fn(t)):n!=null?Of(e,r,Fn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Fn(o):e.removeAttribute("name")}function E_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Uf(e);return}n=n!=null?""+Fn(n):"",t=t!=null?""+Fn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Uf(e)}function Of(e,t,n){t==="number"&&Ql(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ks(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function b_(e,t,n){if(t!=null&&(t=""+Fn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Fn(n):""}function T_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(kr(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Fn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Uf(e)}function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ay=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Ay.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function A_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&ap(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&ap(e,s,t[s])}function Fh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ry=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return Cy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ni(){}var zf=null;function Hh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Qs=null;function sp(e){var t=Sr(e);if(t&&(e=t.stateNode)){var n=e[xn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Nf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[xn]||null;if(!a)throw Error(Z(90));Nf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&M_(i)}break t;case"textarea":b_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ks(e,!!n.multiple,t,!1)}}}var ou=!1;function R_(e,t,n){if(ou)return e(t,n);ou=!0;try{var i=e(t);return i}finally{if(ou=!1,(Bs!==null||Qs!==null)&&(kc(),Bs&&(t=Bs,e=Qs,Qs=Bs=null,sp(t),e)))for(t=0;t<e.length;t++)sp(e[t])}}function co(e,t){var n=e.stateNode;if(n===null)return null;var i=n[xn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=!1;if(Fi)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Pf=!1}var sa=null,Gh=null,Nl=null;function C_(){if(Nl)return Nl;var e,t=Gh,n=t.length,i,a="value"in sa?sa.value:sa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Nl=a.slice(e,1<i?1-i:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function rp(){return!1}function yn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:rp,this.isPropagationStopped=rp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),t}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=yn(ls),Do=ge({},ls,{view:0,detail:0}),wy=yn(Do),lu,cu,Ur,Nc=ge({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(lu=e.screenX-Ur.screenX,cu=e.screenY-Ur.screenY):cu=lu=0,Ur=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),op=yn(Nc),Ly=ge({},Nc,{dataTransfer:0}),Dy=yn(Ly),Uy=ge({},Do,{relatedTarget:0}),uu=yn(Uy),Ny=ge({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=yn(Ny),zy=ge({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Py=yn(zy),By=ge({},ls,{data:0}),lp=yn(By),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hy[e])?!!t[e]:!1}function Vh(){return Gy}var Vy=ge({},Do,{key:function(e){if(e.key){var t=Iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ky=yn(Vy),Xy=ge({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=yn(Xy),Wy=ge({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),qy=yn(Wy),jy=ge({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=yn(jy),Zy=ge({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=yn(Zy),Qy=ge({},ls,{newState:0,oldState:0}),Jy=yn(Qy),$y=[9,13,27,32],kh=Fi&&"CompositionEvent"in window,Yr=null;Fi&&"documentMode"in document&&(Yr=document.documentMode);var tS=Fi&&"TextEvent"in window&&!Yr,w_=Fi&&(!kh||Yr&&8<Yr&&11>=Yr),up=" ",fp=!1;function L_(e,t){switch(e){case"keyup":return $y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function eS(e,t){switch(e){case"compositionend":return D_(t);case"keypress":return t.which!==32?null:(fp=!0,up);case"textInput":return e=t.data,e===up&&fp?null:e;default:return null}}function nS(e,t){if(Is)return e==="compositionend"||!kh&&L_(e,t)?(e=C_(),Nl=Gh=sa=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return w_&&t.locale!=="ko"?null:t.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!iS[e.type]:t==="textarea"}function U_(e,t,n,i){Bs?Qs?Qs.push(i):Qs=[i]:Bs=i,t=mc(t,"onChange"),0<t.length&&(n=new Uc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zr=null,uo=null;function aS(e){Rv(e,0)}function Oc(e){var t=Xr(e);if(M_(t))return e}function dp(e,t){if(e==="change")return t}var N_=!1;if(Fi){var fu;if(Fi){var hu="oninput"in document;if(!hu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),hu=typeof pp.oninput=="function"}fu=hu}else fu=!1;N_=fu&&(!document.documentMode||9<document.documentMode)}function mp(){Zr&&(Zr.detachEvent("onpropertychange",O_),uo=Zr=null)}function O_(e){if(e.propertyName==="value"&&Oc(uo)){var t=[];U_(t,uo,e,Hh(e)),R_(aS,t)}}function sS(e,t,n){e==="focusin"?(mp(),Zr=t,uo=n,Zr.attachEvent("onpropertychange",O_)):e==="focusout"&&mp()}function rS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(uo)}function oS(e,t){if(e==="click")return Oc(t)}function lS(e,t){if(e==="input"||e==="change")return Oc(t)}function cS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var On=typeof Object.is=="function"?Object.is:cS;function fo(e,t){if(On(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Lf.call(t,a)||!On(e[a],t[a]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,t){var n=gp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=gp(n)}}function z_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ql(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ql(e.document)}return t}function Xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uS=Fi&&"documentMode"in document&&11>=document.documentMode,Fs=null,Bf=null,Kr=null,If=!1;function vp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Fs==null||Fs!==Ql(i)||(i=Fs,"selectionStart"in i&&Xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Kr&&fo(Kr,i)||(Kr=i,i=mc(Bf,"onSelect"),0<i.length&&(t=new Uc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fs)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hs={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},du={},B_={};Fi&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function cs(e){if(du[e])return du[e];if(!Hs[e])return e;var t=Hs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B_)return du[e]=t[n];return e}var I_=cs("animationend"),F_=cs("animationiteration"),H_=cs("animationstart"),fS=cs("transitionrun"),hS=cs("transitionstart"),dS=cs("transitioncancel"),G_=cs("transitionend"),V_=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function si(e,t){V_.set(e,t),os(t,[e])}var Jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},In=[],Gs=0,Wh=0;function zc(){for(var e=Gs,t=Wh=Gs=0;t<e;){var n=In[t];In[t++]=null;var i=In[t];In[t++]=null;var a=In[t];In[t++]=null;var s=In[t];if(In[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&k_(n,a,s)}}function Pc(e,t,n,i){In[Gs++]=e,In[Gs++]=t,In[Gs++]=n,In[Gs++]=i,Wh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qh(e,t,n,i){return Pc(e,t,n,i),$l(e)}function us(e,t){return Pc(e,null,null,t),$l(e)}function k_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Dn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function $l(e){if(50<so)throw so=0,rh=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vs={};function pS(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,t,n,i){return new pS(e,t,n,i)}function jh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,t){var n=e.alternate;return n===null?(n=Rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function X_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zl(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")jh(e)&&(r=1);else if(typeof e=="string")r=xM(e,n,hi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Af:return e=Rn(31,n,t,a),e.elementType=Af,e.lanes=s,e;case Os:return qa(n.children,a,s,t);case c_:r=8,a|=24;break;case Ef:return e=Rn(12,n,t,a|2),e.elementType=Ef,e.lanes=s,e;case bf:return e=Rn(13,n,t,a),e.elementType=bf,e.lanes=s,e;case Tf:return e=Rn(19,n,t,a),e.elementType=Tf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ui:r=10;break t;case u_:r=9;break t;case Nh:r=11;break t;case Oh:r=14;break t;case Ji:r=16,i=null;break t}r=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=Rn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function qa(e,t,n,i){return e=Rn(7,e,i,t),e.lanes=n,e}function pu(e,t,n){return e=Rn(6,e,null,t),e.lanes=n,e}function W_(e){var t=Rn(18,null,null,0);return t.stateNode=e,t}function mu(e,t,n){return t=Rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xp=new WeakMap;function Wn(e,t){if(typeof e=="object"&&e!==null){var n=xp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$d(t)},xp.set(e,t),t)}return{value:e,source:t,stack:$d(t)}}var ks=[],Xs=0,tc=null,ho=0,Hn=[],Gn=0,Ea=null,ci=1,ui="";function wi(e,t){ks[Xs++]=ho,ks[Xs++]=tc,tc=e,ho=t}function q_(e,t,n){Hn[Gn++]=ci,Hn[Gn++]=ui,Hn[Gn++]=Ea,Ea=e;var i=ci;e=ui;var a=32-Dn(i)-1;i&=~(1<<a),n+=1;var s=32-Dn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,ci=1<<32-Dn(t)+a|n<<a|i,ui=s+e}else ci=1<<s|n<<a|i,ui=e}function Yh(e){e.return!==null&&(wi(e,1),q_(e,1,0))}function Zh(e){for(;e===tc;)tc=ks[--Xs],ks[Xs]=null,ho=ks[--Xs],ks[Xs]=null;for(;e===Ea;)Ea=Hn[--Gn],Hn[Gn]=null,ui=Hn[--Gn],Hn[Gn]=null,ci=Hn[--Gn],Hn[Gn]=null}function j_(e,t){Hn[Gn++]=ci,Hn[Gn++]=ui,Hn[Gn++]=Ea,ci=t.id,ui=t.overflow,Ea=e}var Ye=null,pe=null,Zt=!1,ha=null,qn=!1,Hf=Error(Z(519));function ba(e){var t=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(Wn(t,e)),Hf}function yp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[je]=e,t[xn]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<vo.length;n++)Wt(vo[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),E_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),T_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||wv(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=Ni),t=!0):t=!1,t||ba(e,!0)}function Sp(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:qn=!1;return;case 27:case 3:qn=!0;return;default:Ye=Ye.return}}function hs(e){if(e!==Ye)return!1;if(!Zt)return Sp(e),Zt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fh(e.type,e.memoizedProps)),n=!n),n&&pe&&ba(e),Sp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));pe=om(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));pe=om(e)}else t===27?(t=pe,wa(e.type)?(e=mh,mh=null,pe=e):pe=t):pe=Ye?Zn(e.stateNode.nextSibling):null;return!0}function $a(){pe=Ye=null,Zt=!1}function gu(){var e=ha;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),ha=null),e}function po(e){ha===null?ha=[e]:ha.push(e)}var Gf=pi(null),fs=null,Oi=null;function ta(e,t,n){fe(Gf,t._currentValue),t._currentValue=n}function Bi(e){e._currentValue=Gf.current,Xe(Gf)}function Vf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function kf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vf(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(Z(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Vf(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Mr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(Z(387));if(r=r.memoizedProps,r!==null){var o=a.type;On(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===jl.current){if(r=a.alternate,r===null)throw Error(Z(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}a=a.return}e!==null&&kf(t,e,n,i),t.flags|=262144}function ec(e){for(e=e.firstContext;e!==null;){if(!On(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){fs=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Y_(fs,e)}function Qo(e,t){return fs===null&&ts(e),Y_(e,t)}function Y_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Oi===null){if(e===null)throw Error(Z(308));Oi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Oi=Oi.next=t;return n}var mS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},gS=ze.unstable_scheduleCallback,_S=ze.unstable_NormalPriority,Le={$$typeof:Ui,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kh(){return{controller:new mS,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&gS(_S,function(){e.controller.abort()})}var Qr=null,Xf=0,or=0,Js=null;function vS(e,t){if(Qr===null){var n=Qr=[];Xf=0,or=Sd(),Js={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xf++,t.then(Mp,Mp),t}function Mp(){if(--Xf===0&&Qr!==null){Js!==null&&(Js.status="fulfilled");var e=Qr;Qr=null,or=0,Js=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xS(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Ep=Mt.S;Mt.S=function(e,t){lv=wn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vS(e,t),Ep!==null&&Ep(e,t)};var ja=pi(null);function Qh(){var e=ja.current;return e!==null?e:oe.pooledCache}function Pl(e,t){t===null?fe(ja,ja.current):fe(ja,t.pool)}function Z_(){var e=Qh();return e===null?null:{parent:Le._currentValue,pool:e}}var Er=Error(Z(460)),Jh=Error(Z(474)),Bc=Error(Z(542)),nc={then:function(){}};function bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function K_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ni,Ni),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ap(e),e;default:if(typeof t.status=="string")t.then(Ni,Ni);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ap(e),e}throw Ya=t,Er}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ya=n,Er):n}}var Ya=null;function Tp(){if(Ya===null)throw Error(Z(459));var e=Ya;return Ya=null,e}function Ap(e){if(e===Er||e===Bc)throw Error(Z(483))}var $s=null,mo=0;function Jo(e){var t=mo;return mo+=1,$s===null&&($s=[]),K_($s,e,t)}function Nr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $o(e,t){throw t.$$typeof===sy?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Q_(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Pi(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,x){return g===null||g.tag!==6?(g=pu(_,u.mode,x),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,x){var C=_.type;return C===Os?f(u,g,_.props.children,x,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&Fa(C)===g.type)?(g=a(g,_.props),Nr(g,_),g.return=u,g):(g=zl(_.type,_.key,_.props,null,u.mode,x),Nr(g,_),g.return=u,g)}function c(u,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=mu(_,u.mode,x),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function f(u,g,_,x,C){return g===null||g.tag!==7?(g=qa(_,u.mode,x,C),g.return=u,g):(g=a(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=pu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return _=zl(g.type,g.key,g.props,null,u.mode,_),Nr(_,g),_.return=u,_;case Vr:return g=mu(g,u.mode,_),g.return=u,g;case Ji:return g=Fa(g),d(u,g,_)}if(kr(g)||Lr(g))return g=qa(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,Jo(g),_);if(g.$$typeof===Ui)return d(u,Qo(u,g),_);$o(u,g)}return null}function h(u,g,_,x){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(u,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return _.key===C?l(u,g,_,x):null;case Vr:return _.key===C?c(u,g,_,x):null;case Ji:return _=Fa(_),h(u,g,_,x)}if(kr(_)||Lr(_))return C!==null?null:f(u,g,_,x,null);if(typeof _.then=="function")return h(u,g,Jo(_),x);if(_.$$typeof===Ui)return h(u,g,Qo(u,_),x);$o(u,_)}return null}function p(u,g,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return u=u.get(_)||null,o(g,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wo:return u=u.get(x.key===null?_:x.key)||null,l(g,u,x,C);case Vr:return u=u.get(x.key===null?_:x.key)||null,c(g,u,x,C);case Ji:return x=Fa(x),p(u,g,_,x,C)}if(kr(x)||Lr(x))return u=u.get(_)||null,f(g,u,x,C,null);if(typeof x.then=="function")return p(u,g,_,Jo(x),C);if(x.$$typeof===Ui)return p(u,g,_,Qo(g,x),C);$o(g,x)}return null}function y(u,g,_,x){for(var C=null,R=null,T=g,U=g=0,S=null;T!==null&&U<_.length;U++){T.index>U?(S=T,T=null):S=T.sibling;var E=h(u,T,_[U],x);if(E===null){T===null&&(T=S);break}e&&T&&E.alternate===null&&t(u,T),g=s(E,g,U),R===null?C=E:R.sibling=E,R=E,T=S}if(U===_.length)return n(u,T),Zt&&wi(u,U),C;if(T===null){for(;U<_.length;U++)T=d(u,_[U],x),T!==null&&(g=s(T,g,U),R===null?C=T:R.sibling=T,R=T);return Zt&&wi(u,U),C}for(T=i(T);U<_.length;U++)S=p(T,u,U,_[U],x),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?U:S.key),g=s(S,g,U),R===null?C=S:R.sibling=S,R=S);return e&&T.forEach(function(P){return t(u,P)}),Zt&&wi(u,U),C}function v(u,g,_,x){if(_==null)throw Error(Z(151));for(var C=null,R=null,T=g,U=g=0,S=null,E=_.next();T!==null&&!E.done;U++,E=_.next()){T.index>U?(S=T,T=null):S=T.sibling;var P=h(u,T,E.value,x);if(P===null){T===null&&(T=S);break}e&&T&&P.alternate===null&&t(u,T),g=s(P,g,U),R===null?C=P:R.sibling=P,R=P,T=S}if(E.done)return n(u,T),Zt&&wi(u,U),C;if(T===null){for(;!E.done;U++,E=_.next())E=d(u,E.value,x),E!==null&&(g=s(E,g,U),R===null?C=E:R.sibling=E,R=E);return Zt&&wi(u,U),C}for(T=i(T);!E.done;U++,E=_.next())E=p(T,u,U,E.value,x),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?U:E.key),g=s(E,g,U),R===null?C=E:R.sibling=E,R=E);return e&&T.forEach(function(X){return t(u,X)}),Zt&&wi(u,U),C}function m(u,g,_,x){if(typeof _=="object"&&_!==null&&_.type===Os&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:t:{for(var C=_.key;g!==null;){if(g.key===C){if(C=_.type,C===Os){if(g.tag===7){n(u,g.sibling),x=a(g,_.props.children),x.return=u,u=x;break t}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&Fa(C)===g.type){n(u,g.sibling),x=a(g,_.props),Nr(x,_),x.return=u,u=x;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Os?(x=qa(_.props.children,u.mode,x,_.key),x.return=u,u=x):(x=zl(_.type,_.key,_.props,null,u.mode,x),Nr(x,_),x.return=u,u=x)}return r(u);case Vr:t:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),x=a(g,_.children||[]),x.return=u,u=x;break t}else{n(u,g);break}else t(u,g);g=g.sibling}x=mu(_,u.mode,x),x.return=u,u=x}return r(u);case Ji:return _=Fa(_),m(u,g,_,x)}if(kr(_))return y(u,g,_,x);if(Lr(_)){if(C=Lr(_),typeof C!="function")throw Error(Z(150));return _=C.call(_),v(u,g,_,x)}if(typeof _.then=="function")return m(u,g,Jo(_),x);if(_.$$typeof===Ui)return m(u,g,Qo(u,_),x);$o(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),x=a(g,_),x.return=u,u=x):(n(u,g),x=pu(_,u.mode,x),x.return=u,u=x),r(u)):n(u,g)}return function(u,g,_,x){try{mo=0;var C=m(u,g,_,x);return $s=null,C}catch(T){if(T===Er||T===Bc)throw T;var R=Rn(29,T,null,u.mode);return R.lanes=x,R.return=u,R}finally{}}}var es=Q_(!0),J_=Q_(!1),$i=!1;function $h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Jt&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=$l(e),k_(e,null,n),t}return Pc(e,i,t,n),$l(e)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,g_(e,n)}}function _u(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qf=!1;function $r(){if(qf){var e=Js;if(e!==null)throw e}}function to(e,t,n,i){qf=!1;var a=e.updateQueue;$i=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,f=c=l=null,o=s;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(jt&h)===h:(i&h)===h){h!==0&&h===or&&(qf=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var y=e,v=o;h=t;var m=n;switch(v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(m,d,h);break t}d=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break t;d=ge({},d,h);break t;case 2:$i=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Aa|=r,e.lanes=r,e.memoizedState=d}}function $_(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function t0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$_(n[e],t)}var lr=pi(null),ic=pi(0);function Rp(e,t){e=ki,fe(ic,e),fe(lr,t),ki=e|t.baseLanes}function jf(){fe(ic,ki),fe(lr,lr.current)}function td(){ki=ic.current,Xe(lr),Xe(ic)}var zn=pi(null),Yn=null;function ea(e){var t=e.alternate;fe(Te,Te.current&1),fe(zn,e),Yn===null&&(t===null||lr.current!==null||t.memoizedState!==null)&&(Yn=e)}function Yf(e){fe(Te,Te.current),fe(zn,e),Yn===null&&(Yn=e)}function e0(e){e.tag===22?(fe(Te,Te.current),fe(zn,e),Yn===null&&(Yn=e)):na()}function na(){fe(Te,Te.current),fe(zn,zn.current)}function An(e){Xe(zn),Yn===e&&(Yn=null),Xe(Te)}var Te=pi(0);function ac(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dh(n)||ph(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=0,Ut=null,re=null,Ce=null,sc=!1,tr=!1,ns=!1,rc=0,go=0,er=null,yS=0;function Me(){throw Error(Z(321))}function ed(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!On(e[n],t[n]))return!1;return!0}function nd(e,t,n,i,a,s){return Hi=s,Ut=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mt.H=e===null||e.memoizedState===null?U0:dd,ns=!1,s=n(i,a),ns=!1,tr&&(s=i0(t,n,i,a)),n0(e),s}function n0(e){Mt.H=_o;var t=re!==null&&re.next!==null;if(Hi=0,Ce=re=Ut=null,sc=!1,go=0,er=null,t)throw Error(Z(300));e===null||De||(e=e.dependencies,e!==null&&ec(e)&&(De=!0))}function i0(e,t,n,i){Ut=e;var a=0;do{if(tr&&(er=null),go=0,tr=!1,25<=a)throw Error(Z(301));if(a+=1,Ce=re=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Mt.H=N0,s=t(n,i)}while(tr);return s}function SS(){var e=Mt.H,t=e.useState()[0];return t=typeof t.then=="function"?No(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(Ut.flags|=1024),t}function id(){var e=rc!==0;return rc=0,e}function ad(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sd(e){if(sc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sc=!1}Hi=0,Ce=re=Ut=null,tr=!1,go=rc=0,er=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?Ut.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Ae(){if(re===null){var e=Ut.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Ce===null?Ut.memoizedState:Ce.next;if(t!==null)Ce=t,re=e;else{if(e===null)throw Ut.alternate===null?Error(Z(467)):Error(Z(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ce===null?Ut.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=go;return go+=1,er===null&&(er=[]),e=K_(er,e,t),t=Ut,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,Mt.H=t===null||t.memoizedState===null?U0:dd),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===Ui)return Ze(e)}throw Error(Z(438,String(e)))}function rd(e){var t=null,n=Ut.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ut.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ic(),Ut.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ry;return t.index++,n}function Gi(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Ae();return od(t,re,e)}function od(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(jt&d)===d:(Hi&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===or&&(f=!0);else if((Hi&h)===h){c=c.next,h===or&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Ut.lanes|=h,Aa|=h;d=c.action,ns&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Ut.lanes|=d,Aa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!On(s,e.memoizedState)&&(De=!0,f&&(n=Js,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function vu(e){var t=Ae(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);On(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function a0(e,t,n){var i=Ut,a=Ae(),s=Zt;if(s){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var r=!On((re||a).memoizedState,n);if(r&&(a.memoizedState=n,De=!0),a=a.queue,ld(o0.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ce!==null&&Ce.memoizedState.tag&1){if(i.flags|=2048,cr(9,{destroy:void 0},r0.bind(null,i,a,n,t),null),oe===null)throw Error(Z(349));s||Hi&127||s0(i,t,n)}return n}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ut.updateQueue,t===null?(t=Ic(),Ut.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function r0(e,t,n,i){t.value=n,t.getSnapshot=i,l0(t)&&c0(e)}function o0(e,t,n){return n(function(){l0(t)&&c0(e)})}function l0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!On(e,n)}catch{return!0}}function c0(e){var t=us(e,2);t!==null&&_n(t,e,2)}function Zf(e){var t=rn();if(typeof e=="function"){var n=e;if(e=n(),ns){aa(!0);try{n()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t}function u0(e,t,n,i){return e.baseState=n,od(e,re,typeof i=="function"?i:Gi)}function MS(e,t,n,i,a){if(Gc(e))throw Error(Z(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Mt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,f0(t,s)):(s.next=n.next,t.pending=n.next=s)}}function f0(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Mt.T,r={};Mt.T=r;try{var o=n(a,i),l=Mt.S;l!==null&&l(r,o),Cp(e,t,o)}catch(c){Kf(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Mt.T=s}}else try{s=n(a,i),Cp(e,t,s)}catch(c){Kf(e,t,c)}}function Cp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wp(e,t,i)},function(i){return Kf(e,t,i)}):wp(e,t,n)}function wp(e,t,n){t.status="fulfilled",t.value=n,h0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,f0(e,n)))}function Kf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,h0(t),t=t.next;while(t!==i)}e.action=null}function h0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function d0(e,t){return t}function Lp(e,t){if(Zt){var n=oe.formState;if(n!==null){t:{var i=Ut;if(Zt){if(pe){e:{for(var a=pe,s=qn;a.nodeType!==8;){if(!s){a=null;break e}if(a=Zn(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){pe=Zn(a.nextSibling),i=a.data==="F!";break t}}ba(i)}i=!1}i&&(t=n[0])}}return n=rn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d0,lastRenderedState:t},n.queue=i,n=w0.bind(null,Ut,i),i.dispatch=n,i=Zf(!1),s=hd.bind(null,Ut,!1,i.queue),i=rn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=MS.bind(null,Ut,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Dp(e){var t=Ae();return p0(t,re,e)}function p0(e,t,n){if(t=od(e,t,d0)[0],e=Bl(Gi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=No(t)}catch(r){throw r===Er?Bc:r}else i=t;t=Ae();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Ut.flags|=2048,cr(9,{destroy:void 0},ES.bind(null,a,n),null)),[i,s,e]}function ES(e,t){e.action=t}function Up(e){var t=Ae(),n=re;if(n!==null)return p0(t,n,e);Ae(),t=t.memoizedState,n=Ae();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function cr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ut.updateQueue,t===null&&(t=Ic(),Ut.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function m0(){return Ae().memoizedState}function Il(e,t,n,i){var a=rn();Ut.flags|=e,a.memoizedState=cr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Hc(e,t,n,i){var a=Ae();i=i===void 0?null:i;var s=a.memoizedState.inst;re!==null&&i!==null&&ed(i,re.memoizedState.deps)?a.memoizedState=cr(t,s,n,i):(Ut.flags|=e,a.memoizedState=cr(1|t,s,n,i))}function Np(e,t){Il(8390656,8,e,t)}function ld(e,t){Hc(2048,8,e,t)}function bS(e){Ut.flags|=4;var t=Ut.updateQueue;if(t===null)t=Ic(),Ut.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function g0(e){var t=Ae().memoizedState;return bS({ref:t,nextImpl:e}),function(){if(Jt&2)throw Error(Z(440));return t.impl.apply(void 0,arguments)}}function _0(e,t){return Hc(4,2,e,t)}function v0(e,t){return Hc(4,4,e,t)}function x0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function y0(e,t,n){n=n!=null?n.concat([e]):null,Hc(4,4,x0.bind(null,t,e),n)}function cd(){}function S0(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ed(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function M0(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ed(t,i[1]))return i[0];if(i=e(),ns){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i}function ud(e,t,n){return n===void 0||Hi&1073741824&&!(jt&261930)?e.memoizedState=t:(e.memoizedState=n,e=uv(),Ut.lanes|=e,Aa|=e,n)}function E0(e,t,n,i){return On(n,t)?n:lr.current!==null?(e=ud(e,n,i),On(e,t)||(De=!0),e):!(Hi&42)||Hi&1073741824&&!(jt&261930)?(De=!0,e.memoizedState=n):(e=uv(),Ut.lanes|=e,Aa|=e,t)}function b0(e,t,n,i,a){var s=$t.p;$t.p=s!==0&&8>s?s:8;var r=Mt.T,o={};Mt.T=o,hd(e,!1,t,n);try{var l=a(),c=Mt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=xS(l,i);eo(e,t,f,Un(e))}else eo(e,t,i,Un(e))}catch(d){eo(e,t,{then:function(){},status:"rejected",reason:d},Un())}finally{$t.p=s,r!==null&&o.types!==null&&(r.types=o.types),Mt.T=r}}function TS(){}function Qf(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var a=T0(e).queue;b0(e,a,t,Wa,n===null?TS:function(){return A0(e),n(i)})}function T0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function A0(e){var t=T0(e);t.next===null&&(t=e.alternate.memoizedState),eo(e,t.next.queue,{},Un())}function fd(){return Ze(yo)}function R0(){return Ae().memoizedState}function C0(){return Ae().memoizedState}function AS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Un();e=da(n);var i=pa(t,e,n);i!==null&&(_n(i,t,n),Jr(i,t,n)),t={cache:Kh()},e.payload=t;return}t=t.return}}function RS(e,t,n){var i=Un();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e)?L0(t,n):(n=qh(e,t,n,i),n!==null&&(_n(n,e,i),D0(n,t,i)))}function w0(e,t,n){var i=Un();eo(e,t,n,i)}function eo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))L0(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,On(o,r))return Pc(e,t,a,0),oe===null&&zc(),!1}catch{}finally{}if(n=qh(e,t,a,i),n!==null)return _n(n,e,i),D0(n,t,i),!0}return!1}function hd(e,t,n,i){if(i={lane:2,revertLane:Sd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Gc(e)){if(t)throw Error(Z(479))}else t=qh(e,n,i,2),t!==null&&_n(t,e,2)}function Gc(e){var t=e.alternate;return e===Ut||t!==null&&t===Ut}function L0(e,t){tr=sc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function D0(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,g_(e,n)}}var _o={readContext:Ze,use:Fc,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};_o.useEffectEvent=Me;var U0={readContext:Ze,use:Fc,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Np,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Il(4194308,4,x0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){Il(4,2,e,t)},useMemo:function(e,t){var n=rn();t=t===void 0?null:t;var i=e();if(ns){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=rn();if(n!==void 0){var a=n(t);if(ns){aa(!0);try{n(t)}finally{aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=RS.bind(null,Ut,e),[i.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:function(e){e=Zf(e);var t=e.queue,n=w0.bind(null,Ut,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cd,useDeferredValue:function(e,t){var n=rn();return ud(n,e,t)},useTransition:function(){var e=Zf(!1);return e=b0.bind(null,Ut,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ut,a=rn();if(Zt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),oe===null)throw Error(Z(349));jt&127||s0(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Np(o0.bind(null,i,s,e),[e]),i.flags|=2048,cr(9,{destroy:void 0},r0.bind(null,i,s,n,t),null),n},useId:function(){var e=rn(),t=oe.identifierPrefix;if(Zt){var n=ui,i=ci;n=(i&~(1<<32-Dn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=rc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yS++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fd,useFormState:Lp,useActionState:Lp,useOptimistic:function(e){var t=rn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hd.bind(null,Ut,!0,n),n.dispatch=t,[e,t]},useMemoCache:rd,useCacheRefresh:function(){return rn().memoizedState=AS.bind(null,Ut)},useEffectEvent:function(e){var t=rn(),n={impl:e};return t.memoizedState=n,function(){if(Jt&2)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},dd={readContext:Ze,use:Fc,useCallback:S0,useContext:Ze,useEffect:ld,useImperativeHandle:y0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:Bl,useRef:m0,useState:function(){return Bl(Gi)},useDebugValue:cd,useDeferredValue:function(e,t){var n=Ae();return E0(n,re.memoizedState,e,t)},useTransition:function(){var e=Bl(Gi)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:a0,useId:R0,useHostTransitionStatus:fd,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,t){var n=Ae();return u0(n,re,e,t)},useMemoCache:rd,useCacheRefresh:C0};dd.useEffectEvent=g0;var N0={readContext:Ze,use:Fc,useCallback:S0,useContext:Ze,useEffect:ld,useImperativeHandle:y0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:vu,useRef:m0,useState:function(){return vu(Gi)},useDebugValue:cd,useDeferredValue:function(e,t){var n=Ae();return re===null?ud(n,e,t):E0(n,re.memoizedState,e,t)},useTransition:function(){var e=vu(Gi)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:a0,useId:R0,useHostTransitionStatus:fd,useFormState:Up,useActionState:Up,useOptimistic:function(e,t){var n=Ae();return re!==null?u0(n,re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rd,useCacheRefresh:C0};N0.useEffectEvent=g0;function xu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Un(),a=da(i);a.payload=t,n!=null&&(a.callback=n),t=pa(e,a,i),t!==null&&(_n(t,e,i),Jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Un(),a=da(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=pa(e,a,i),t!==null&&(_n(t,e,i),Jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Un(),i=da(n);i.tag=2,t!=null&&(i.callback=t),t=pa(e,i,n),t!==null&&(_n(t,e,n),Jr(t,e,n))}};function Op(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!fo(n,i)||!fo(a,s):!0}function zp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Jf.enqueueReplaceState(t,t.state,null)}function is(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function O0(e){Jl(e)}function z0(e){console.error(e)}function P0(e){Jl(e)}function oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Pp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function $f(e,t,n){return n=da(n),n.tag=3,n.payload={element:null},n.callback=function(){oc(e,t)},n}function B0(e){return e=da(e),e.tag=3,e}function I0(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Pp(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Pp(t,n,i),typeof a!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function CS(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Mr(t,n,a,!0),n=zn.current,n!==null){switch(n.tag){case 31:case 13:return Yn===null?hc():n.alternate===null&&Ee===0&&(Ee=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===nc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Lu(e,i,a)),!1;case 22:return n.flags|=65536,i===nc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Lu(e,i,a)),!1}throw Error(Z(435,n.tag))}return Lu(e,i,a),hc(),!1}if(Zt)return t=zn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Hf&&(e=Error(Z(422),{cause:i}),po(Wn(e,n)))):(i!==Hf&&(t=Error(Z(423),{cause:i}),po(Wn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Wn(i,n),a=$f(e.stateNode,i,a),_u(e,a),Ee!==4&&(Ee=2)),!1;var s=Error(Z(520),{cause:i});if(s=Wn(s,n),ao===null?ao=[s]:ao.push(s),Ee!==4&&(Ee=2),t===null)return!0;i=Wn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$f(n.stateNode,i,e),_u(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=B0(a),I0(a,e,n,i),_u(n,a),!1}n=n.return}while(n!==null);return!1}var pd=Error(Z(461)),De=!1;function We(e,t,n,i){t.child=e===null?J_(t,null,n,i):es(t,e.child,n,i)}function Bp(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ts(t),i=nd(e,t,n,r,s,a),o=id(),e!==null&&!De?(ad(e,t,a),Vi(e,t,a)):(Zt&&o&&Yh(t),t.flags|=1,We(e,t,i,a),t.child)}function Ip(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,F0(e,t,s,i,a)):(e=zl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!md(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(r,i)&&e.ref===t.ref)return Vi(e,t,a)}return t.flags|=1,e=Pi(s,i),e.ref=t.ref,e.return=t,t.child=e}function F0(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(fo(s,i)&&e.ref===t.ref)if(De=!1,t.pendingProps=i=s,md(e,a))e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Vi(e,t,a)}return th(e,t,n,i,a)}function H0(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Fp(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(t,s!==null?s.cachePool:null),s!==null?Rp(t,s):jf(),e0(t);else return i=t.lanes=536870912,Fp(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Pl(t,s.cachePool),Rp(t,s),na(),t.memoizedState=null):(e!==null&&Pl(t,null),jf(),na());return We(e,t,a,n),t.child}function Wr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fp(e,t,n,i,a){var s=Qh();return s=s===null?null:{parent:Le._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Pl(t,null),jf(),e0(t),e!==null&&Mr(e,t,i,!0),t.childLanes=a,null}function Fl(e,t){return t=lc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hp(e,t,n){return es(t,e.child,null,n),e=Fl(t,t.pendingProps),e.flags|=2,An(t),t.memoizedState=null,e}function wS(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Zt){if(i.mode==="hidden")return e=Fl(t,i),t.lanes=536870912,Wr(null,e);if(Yf(t),(e=pe)?(e=Uv(e,qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:ci,overflow:ui}:null,retryLane:536870912,hydrationErrors:null},n=W_(e),n.return=t,t.child=n,Ye=t,pe=null)):e=null,e===null)throw ba(t);return t.lanes=536870912,null}return Fl(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Yf(t),a)if(t.flags&256)t.flags&=-257,t=Hp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Z(558));else if(De||Mr(e,t,n,!1),a=(n&e.childLanes)!==0,De||a){if(i=oe,i!==null&&(r=__(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,us(e,r),_n(i,e,r),pd;hc(),t=Hp(e,t,n)}else e=s.treeContext,pe=Zn(r.nextSibling),Ye=t,Zt=!0,ha=null,qn=!1,e!==null&&j_(t,e),t=Fl(t,i),t.flags|=4096;return t}return e=Pi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function th(e,t,n,i,a){return ts(t),n=nd(e,t,n,i,void 0,a),i=id(),e!==null&&!De?(ad(e,t,a),Vi(e,t,a)):(Zt&&i&&Yh(t),t.flags|=1,We(e,t,n,a),t.child)}function Gp(e,t,n,i,a,s){return ts(t),t.updateQueue=null,n=i0(t,i,n,a),n0(e),i=id(),e!==null&&!De?(ad(e,t,s),Vi(e,t,s)):(Zt&&i&&Yh(t),t.flags|=1,We(e,t,n,s),t.child)}function Vp(e,t,n,i,a){if(ts(t),t.stateNode===null){var s=Vs,r=n.contextType;typeof r=="object"&&r!==null&&(s=Ze(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Jf,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},$h(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Ze(r):Vs,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(xu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Jf.enqueueReplaceState(s,s.state,null),to(t,i,s,a),$r(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=is(n,o);s.props=l;var c=s.context,f=n.contextType;r=Vs,typeof f=="object"&&f!==null&&(r=Ze(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&zp(t,s,i,r),$i=!1;var h=t.memoizedState;s.state=h,to(t,i,s,a),$r(),c=t.memoizedState,o||h!==c||$i?(typeof d=="function"&&(xu(t,n,d,i),c=t.memoizedState),(l=$i||Op(t,n,l,i,h,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Wf(e,t),r=t.memoizedProps,f=is(n,r),s.props=f,d=t.pendingProps,h=s.context,c=n.contextType,l=Vs,typeof c=="object"&&c!==null&&(l=Ze(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||h!==l)&&zp(t,s,i,l),$i=!1,h=t.memoizedState,s.state=h,to(t,i,s,a),$r();var p=t.memoizedState;r!==d||h!==p||$i||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof o=="function"&&(xu(t,n,o,i),p=t.memoizedState),(f=$i||Op(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Hl(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=es(t,e.child,null,a),t.child=es(t,null,n,a)):We(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Vi(e,t,a),e}function kp(e,t,n,i){return $a(),t.flags|=256,We(e,t,n,i),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Su(e){return{baseLanes:e,cachePool:Z_()}}function Mu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Cn),e}function G0(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Zt){if(a?ea(t):na(),(e=pe)?(e=Uv(e,qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:ci,overflow:ui}:null,retryLane:536870912,hydrationErrors:null},n=W_(e),n.return=t,t.child=n,Ye=t,pe=null)):e=null,e===null)throw ba(t);return ph(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(na(),a=t.mode,o=lc({mode:"hidden",children:o},a),i=qa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Su(n),i.childLanes=Mu(e,r,n),t.memoizedState=yu,Wr(null,i)):(ea(t),eh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(ea(t),t.flags&=-257,t=Eu(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),o=i.fallback,a=t.mode,i=lc({mode:"visible",children:i.children},a),o=qa(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,es(t,e.child,null,n),i=t.child,i.memoizedState=Su(n),i.childLanes=Mu(e,r,n),t.memoizedState=yu,t=Wr(null,i));else if(ea(t),ph(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(Z(419)),i.stack="",i.digest=r,po({value:i,source:null,stack:null}),t=Eu(e,t,n)}else if(De||Mr(e,t,n,!1),r=(n&e.childLanes)!==0,De||r){if(r=oe,r!==null&&(i=__(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,us(e,i),_n(r,e,i),pd;dh(o)||hc(),t=Eu(e,t,n)}else dh(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,pe=Zn(o.nextSibling),Ye=t,Zt=!0,ha=null,qn=!1,e!==null&&j_(t,e),t=eh(t,i.children),t.flags|=4096);return t}return a?(na(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Pi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Pi(c,o):(o=qa(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Wr(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Su(n):(a=o.cachePool,a!==null?(l=Le._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Z_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Mu(e,r,n),t.memoizedState=yu,Wr(e.child,i)):(ea(t),n=e.child,e=n.sibling,n=Pi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function eh(e,t){return t=lc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lc(e,t){return e=Rn(22,e,null,t),e.lanes=0,e}function Eu(e,t,n){return es(t,e.child,null,n),e=eh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vf(e.return,t,n)}function bu(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function V0(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Te.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,fe(Te,r),We(e,t,i,n),i=Zt?ho:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xp(e,n,t);else if(e.tag===19)Xp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ac(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),bu(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ac(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}bu(t,!0,n,null,s,i);break;case"together":bu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Vi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function md(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function LS(e,t,n){switch(t.tag){case 3:Yl(t,t.stateNode.containerInfo),ta(t,Le,e.memoizedState.cache),$a();break;case 27:case 5:wf(t);break;case 4:Yl(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ea(t),t.flags|=128,null):n&t.child.childLanes?G0(e,t,n):(ea(t),e=Vi(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Mr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return V0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fe(Te,Te.current),i)break;return null;case 22:return t.lanes=0,H0(e,t,n,t.pendingProps);case 24:ta(t,Le,e.memoizedState.cache)}return Vi(e,t,n)}function k0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!md(e,n)&&!(t.flags&128))return De=!1,LS(e,t,n);De=!!(e.flags&131072)}else De=!1,Zt&&t.flags&1048576&&q_(t,ho,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")jh(e)?(i=is(e,i),t.tag=1,t=Vp(null,t,e,i,n)):(t.tag=0,t=th(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Nh){t.tag=11,t=Bp(null,t,e,i,n);break t}else if(a===Oh){t.tag=14,t=Ip(null,t,e,i,n);break t}}throw t=Rf(e)||e,Error(Z(306,t,""))}}return t;case 0:return th(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=is(i,t.pendingProps),Vp(e,t,i,a,n);case 3:t:{if(Yl(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Wf(e,t),to(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ta(t,Le,i),i!==s.cache&&kf(t,[Le],n,!0),$r(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=kp(e,t,i,n);break t}else if(i!==a){a=Wn(Error(Z(424)),t),po(a),t=kp(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pe=Zn(e.firstChild),Ye=t,Zt=!0,ha=null,qn=!0,n=J_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if($a(),i===a){t=Vi(e,t,n);break t}We(e,t,i,n)}t=t.child}return t;case 26:return Hl(e,t),e===null?(n=um(t.type,null,t.pendingProps,null))?t.memoizedState=n:Zt||(n=t.type,e=t.pendingProps,i=gc(fa.current).createElement(n),i[je]=t,i[xn]=e,Ke(i,n,e),Ve(i),t.stateNode=i):t.memoizedState=um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wf(t),e===null&&Zt&&(i=t.stateNode=Nv(t.type,t.pendingProps,fa.current),Ye=t,qn=!0,a=pe,wa(t.type)?(mh=a,pe=Zn(i.firstChild)):pe=a),We(e,t,t.pendingProps.children,n),Hl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Zt&&((a=i=pe)&&(i=rM(i,t.type,t.pendingProps,qn),i!==null?(t.stateNode=i,Ye=t,pe=Zn(i.firstChild),qn=!1,a=!0):a=!1),a||ba(t)),wf(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,fh(a,s)?i=null:r!==null&&fh(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=nd(e,t,SS,null,null,n),yo._currentValue=a),Hl(e,t),We(e,t,i,n),t.child;case 6:return e===null&&Zt&&((e=n=pe)&&(n=oM(n,t.pendingProps,qn),n!==null?(t.stateNode=n,Ye=t,pe=null,e=!0):e=!1),e||ba(t)),null;case 13:return G0(e,t,n);case 4:return Yl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=es(t,null,i,n):We(e,t,i,n),t.child;case 11:return Bp(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),We(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ts(t),a=Ze(a),i=i(a),t.flags|=1,We(e,t,i,n),t.child;case 14:return Ip(e,t,t.type,t.pendingProps,n);case 15:return F0(e,t,t.type,t.pendingProps,n);case 19:return V0(e,t,n);case 31:return wS(e,t,n);case 22:return H0(e,t,n,t.pendingProps);case 24:return ts(t),i=Ze(Le),e===null?(a=Qh(),a===null&&(a=oe,s=Kh(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},$h(t),ta(t,Le,a)):(e.lanes&n&&(Wf(e,t),to(t,null,null,n),$r()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,Le,i)):(i=s.cache,ta(t,Le,i),i!==a.cache&&kf(t,[Le],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function vi(e){e.flags|=4}function Tu(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(dv())e.flags|=8192;else throw Ya=nc,Jh}else e.flags&=-16777217}function Wp(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Pv(t))if(dv())e.flags|=8192;else throw Ya=nc,Jh}function tl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?p_():536870912,e.lanes|=t,ur|=t)}function Or(e,t){if(!Zt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function DS(e,t,n){var i=t.pendingProps;switch(Zh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bi(Le),ar(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hs(t)?vi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gu())),he(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(vi(t),s!==null?(he(t),Wp(t,s)):(he(t),Tu(t,a,null,i,n))):s?s!==e.memoizedState?(vi(t),he(t),Wp(t,s)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&vi(t),he(t),Tu(t,a,e,i,n)),null;case 27:if(Zl(t),n=fa.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return he(t),null}e=hi.current,hs(t)?yp(t):(e=Nv(a,i,n),t.stateNode=e,vi(t))}return he(t),null;case 5:if(Zl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return he(t),null}if(s=hi.current,hs(t))yp(t);else{var r=gc(fa.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[je]=t,s[xn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(Ke(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&vi(t)}}return he(t),Tu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=fa.current,hs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Ye,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||wv(e.nodeValue,n)),e||ba(t,!0)}else e=gc(e).createTextNode(i),e[je]=t,t.stateNode=e}return he(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=hs(t),n!==null){if(e===null){if(!i)throw Error(Z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(557));e[je]=t}else $a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else n=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(An(t),t):(An(t),null);if(t.flags&128)throw Error(Z(558))}return he(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=hs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[je]=t}else $a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(An(t),t):(An(t),null)}return An(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),tl(t,t.updateQueue),he(t),null);case 4:return ar(),e===null&&Md(t.stateNode.containerInfo),he(t),null;case 10:return Bi(t.type),he(t),null;case 19:if(Xe(Te),i=t.memoizedState,i===null)return he(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Or(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ac(e),s!==null){for(t.flags|=128,Or(i,!1),e=s.updateQueue,t.updateQueue=e,tl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)X_(n,e),n=n.sibling;return fe(Te,Te.current&1|2),Zt&&wi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&wn()>uc&&(t.flags|=128,a=!0,Or(i,!1),t.lanes=4194304)}else{if(!a)if(e=ac(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,tl(t,e),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Zt)return he(t),null}else 2*wn()-i.renderingStartTime>uc&&n!==536870912&&(t.flags|=128,a=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=wn(),e.sibling=null,n=Te.current,fe(Te,a?n&1|2:n&1),Zt&&wi(t,i.treeForkCount),e):(he(t),null);case 22:case 23:return An(t),td(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),n=t.updateQueue,n!==null&&tl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Xe(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bi(Le),he(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function US(e,t){switch(Zh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(Le),ar(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zl(t),null;case 31:if(t.memoizedState!==null){if(An(t),t.alternate===null)throw Error(Z(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(An(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xe(Te),null;case 4:return ar(),null;case 10:return Bi(t.type),null;case 22:case 23:return An(t),td(),e!==null&&Xe(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bi(Le),null;case 25:return null;default:return null}}function X0(e,t){switch(Zh(t),t.tag){case 3:Bi(Le),ar();break;case 26:case 27:case 5:Zl(t);break;case 4:ar();break;case 31:t.memoizedState!==null&&An(t);break;case 13:An(t);break;case 19:Xe(Te);break;case 10:Bi(t.type);break;case 22:case 23:An(t),td(),e!==null&&Xe(ja);break;case 24:Bi(Le)}}function Oo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ne(t,t.return,o)}}function Ta(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){ne(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){ne(t,t.return,f)}}function W0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{t0(t,n)}catch(i){ne(e,e.return,i)}}}function q0(e,t,n){n.props=is(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ne(e,t,i)}}function no(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ne(e,t,a)}}function fi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ne(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ne(e,t,a)}else n.current=null}function j0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ne(e,e.return,a)}}function Au(e,t,n){try{var i=e.stateNode;tM(i,e.type,n,t),i[xn]=t}catch(a){ne(e,e.return,a)}}function Y0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Ru(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Y0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ni));else if(i!==4&&(i===27&&wa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nh(e,t,n),e=e.sibling;e!==null;)nh(e,t,n),e=e.sibling}function cc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&wa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cc(e,t,n),e=e.sibling;e!==null;)cc(e,t,n),e=e.sibling}function Z0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ke(t,i,n),t[je]=e,t[xn]=n}catch(s){ne(e,e.return,s)}}var Li=!1,we=!1,Cu=!1,qp=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function NS(e,t){if(e=e.containerInfo,ch=yc,e=P_(e),Xh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,d=e,h=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break e;if(h===n&&++c===a&&(o=r),h===s&&++f===i&&(l=r),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:e,selectionRange:n},yc=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var y=is(n.type,a);e=i.getSnapshotBeforeUpdate(y,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(v){ne(n,n.return,v)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function K0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n),i&4&&Oo(5,n);break;case 1:if(yi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ne(n,n.return,r)}else{var a=is(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ne(n,n.return,r)}}i&64&&W0(n),i&512&&no(n,n.return);break;case 3:if(yi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{t0(e,t)}catch(r){ne(n,n.return,r)}}break;case 27:t===null&&i&4&&Z0(n);case 26:case 5:yi(e,n),t===null&&i&4&&j0(n),i&512&&no(n,n.return);break;case 12:yi(e,n);break;case 31:yi(e,n),i&4&&$0(e,n);break;case 13:yi(e,n),i&4&&tv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=VS.bind(null,n),lM(e,n))));break;case 22:if(i=n.memoizedState!==null||Li,!i){t=t!==null&&t.memoizedState!==null||we,a=Li;var s=we;Li=i,(we=t)&&!s?Ai(e,n,(n.subtreeFlags&8772)!==0):yi(e,n),Li=a,we=s}break;case 30:break;default:yi(e,n)}}function Q0(e){var t=e.alternate;t!==null&&(e.alternate=null,Q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ih(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,dn=!1;function xi(e,t,n){for(n=n.child;n!==null;)J0(e,t,n),n=n.sibling}function J0(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 26:we||fi(n,t),xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:we||fi(n,t);var i=_e,a=dn;wa(n.type)&&(_e=n.stateNode,dn=!1),xi(e,t,n),ro(n.stateNode),_e=i,dn=a;break;case 5:we||fi(n,t);case 6:if(i=_e,a=dn,_e=null,xi(e,t,n),_e=i,dn=a,_e!==null)if(dn)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(n.stateNode)}catch(s){ne(n,t,s)}else try{_e.removeChild(n.stateNode)}catch(s){ne(n,t,s)}break;case 18:_e!==null&&(dn?(e=_e,sm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),pr(e)):sm(_e,n.stateNode));break;case 4:i=_e,a=dn,_e=n.stateNode.containerInfo,dn=!0,xi(e,t,n),_e=i,dn=a;break;case 0:case 11:case 14:case 15:Ta(2,n,t),we||Ta(4,n,t),xi(e,t,n);break;case 1:we||(fi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&q0(n,t,i)),xi(e,t,n);break;case 21:xi(e,t,n);break;case 22:we=(i=we)||n.memoizedState!==null,xi(e,t,n),we=i;break;default:xi(e,t,n)}}function $0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(n){ne(t,t.return,n)}}}function tv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(n){ne(t,t.return,n)}}function OS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qp),t;default:throw Error(Z(435,e.tag))}}function el(e,t){var n=OS(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=kS.bind(null,e,i);i.then(a,a)}})}function un(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(wa(o.type)){_e=o.stateNode,dn=!1;break t}break;case 5:_e=o.stateNode,dn=!1;break t;case 3:case 4:_e=o.stateNode.containerInfo,dn=!0;break t}o=o.return}if(_e===null)throw Error(Z(160));J0(s,r,a),_e=null,dn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ev(t,e),t=t.sibling}var ei=null;function ev(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:un(t,e),fn(e),i&4&&(Ta(3,e,e.return),Oo(3,e),Ta(5,e,e.return));break;case 1:un(t,e),fn(e),i&512&&(we||n===null||fi(n,n.return)),i&64&&Li&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ei;if(un(t,e),fn(e),i&512&&(we||n===null||fi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Lo]||s[je]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),Ke(s,i,n),s[je]=e,Ve(s),i=s;break t;case"link":var r=hm("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),Ke(s,i,n),a.head.appendChild(s);break;case"meta":if(r=hm("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),Ke(s,i,n),a.head.appendChild(s);break;default:throw Error(Z(468,i))}s[je]=e,Ve(s),i=s}e.stateNode=i}else dm(a,e.type,e.stateNode);else e.stateNode=fm(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?dm(a,e.type,e.stateNode):fm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Au(e,e.memoizedProps,n.memoizedProps)}break;case 27:un(t,e),fn(e),i&512&&(we||n===null||fi(n,n.return)),n!==null&&i&4&&Au(e,e.memoizedProps,n.memoizedProps);break;case 5:if(un(t,e),fn(e),i&512&&(we||n===null||fi(n,n.return)),e.flags&32){a=e.stateNode;try{rr(a,"")}catch(y){ne(e,e.return,y)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Au(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Cu=!0);break;case 6:if(un(t,e),fn(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(y){ne(e,e.return,y)}}break;case 3:if(kl=null,a=ei,ei=_c(t.containerInfo),un(t,e),ei=a,fn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(y){ne(e,e.return,y)}Cu&&(Cu=!1,nv(e));break;case 4:i=ei,ei=_c(e.stateNode.containerInfo),un(t,e),fn(e),ei=i;break;case 12:un(t,e),fn(e);break;case 31:un(t,e),fn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,el(e,i)));break;case 13:un(t,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vc=wn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,el(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Li,f=we;if(Li=c||a,we=f||l,un(t,e),we=f,Li=c,fn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Li||we||Ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(y){ne(l,l.return,y)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(y){ne(l,l.return,y)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?rm(p,!0):rm(l.stateNode,!1)}catch(y){ne(l,l.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,el(e,n))));break;case 19:un(t,e),fn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,el(e,i)));break;case 30:break;case 21:break;default:un(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Y0(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var a=n.stateNode,s=Ru(e);cc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(rr(r,""),n.flags&=-33);var o=Ru(e);cc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ru(e);nh(e,c,l);break;default:throw Error(Z(161))}}catch(f){ne(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)K0(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),Ha(t);break;case 1:fi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&q0(t,t.return,n),Ha(t);break;case 27:ro(t.stateNode);case 26:case 5:fi(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Ai(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(a,s,n),Oo(4,s);break;case 1:if(Ai(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ne(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)$_(l[a],o)}catch(c){ne(i,i.return,c)}}n&&r&64&&W0(s),no(s,s.return);break;case 27:Z0(s);case 26:case 5:Ai(a,s,n),n&&i===null&&r&4&&j0(s),no(s,s.return);break;case 12:Ai(a,s,n);break;case 31:Ai(a,s,n),n&&r&4&&$0(a,s);break;case 13:Ai(a,s,n),n&&r&4&&tv(a,s);break;case 22:s.memoizedState===null&&Ai(a,s,n),no(s,s.return);break;case 30:break;default:Ai(a,s,n)}t=t.sibling}}function gd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Uo(n))}function _d(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Uo(e))}function Qn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iv(e,t,n,i),t=t.sibling}function iv(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Qn(e,t,n,i),a&2048&&Oo(9,t);break;case 1:Qn(e,t,n,i);break;case 3:Qn(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Uo(e)));break;case 12:if(a&2048){Qn(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ne(t,t.return,l)}}else Qn(e,t,n,i);break;case 31:Qn(e,t,n,i);break;case 13:Qn(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?Qn(e,t,n,i):io(e,t):s._visibility&2?Qn(e,t,n,i):(s._visibility|=2,Us(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&gd(r,t);break;case 24:Qn(e,t,n,i),a&2048&&_d(t.alternate,t);break;default:Qn(e,t,n,i)}}function Us(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Us(s,r,o,l,a),Oo(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Us(s,r,o,l,a):io(s,r):(f._visibility|=2,Us(s,r,o,l,a)),a&&c&2048&&gd(r.alternate,r);break;case 24:Us(s,r,o,l,a),a&&c&2048&&_d(r.alternate,r);break;default:Us(s,r,o,l,a)}t=t.sibling}}function io(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:io(n,i),a&2048&&gd(i.alternate,i);break;case 24:io(n,i),a&2048&&_d(i.alternate,i);break;default:io(n,i)}t=t.sibling}}var qr=8192;function ds(e,t,n){if(e.subtreeFlags&qr)for(e=e.child;e!==null;)av(e,t,n),e=e.sibling}function av(e,t,n){switch(e.tag){case 26:ds(e,t,n),e.flags&qr&&e.memoizedState!==null&&yM(n,ei,e.memoizedState,e.memoizedProps);break;case 5:ds(e,t,n);break;case 3:case 4:var i=ei;ei=_c(e.stateNode.containerInfo),ds(e,t,n),ei=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=qr,qr=16777216,ds(e,t,n),qr=i):ds(e,t,n));break;default:ds(e,t,n)}}function sv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,ov(i,e)}sv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rv(e),e=e.sibling}function rv(e){switch(e.tag){case 0:case 11:case 15:zr(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:zr(e);break;case 12:zr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gl(e)):zr(e);break;default:zr(e)}}function Gl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,ov(i,e)}sv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Gl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(t));break;default:Gl(t)}e=e.sibling}}function ov(e,t){for(;Ge!==null;){var n=Ge;switch(n.tag){case 0:case 11:case 15:Ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Uo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ge=i;else t:for(n=e;Ge!==null;){i=Ge;var a=i.sibling,s=i.return;if(Q0(i),i===n){Ge=null;break t}if(a!==null){a.return=s,Ge=a;break t}Ge=s}}}var zS={getCacheForType:function(e){var t=Ze(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ze(Le).controller.signal}},PS=typeof WeakMap=="function"?WeakMap:Map,Jt=0,oe=null,qt=null,jt=0,ee=0,Tn=null,ra=!1,br=!1,vd=!1,ki=0,Ee=0,Aa=0,Za=0,xd=0,Cn=0,ur=0,ao=null,pn=null,ih=!1,Vc=0,lv=0,uc=1/0,fc=null,ma=null,Ue=0,ga=null,fr=null,Ii=0,ah=0,sh=null,cv=null,so=0,rh=null;function Un(){return Jt&2&&jt!==0?jt&-jt:Mt.T!==null?Sd():v_()}function uv(){if(Cn===0)if(!(jt&536870912)||Zt){var e=jo;jo<<=1,!(jo&3932160)&&(jo=262144),Cn=e}else Cn=536870912;return e=zn.current,e!==null&&(e.flags|=32),Cn}function _n(e,t,n){(e===oe&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(hr(e,0),oa(e,jt,Cn,!1)),wo(e,n),(!(Jt&2)||e!==oe)&&(e===oe&&(!(Jt&2)&&(Za|=n),Ee===4&&oa(e,jt,Cn,!1)),mi(e))}function fv(e,t,n){if(Jt&6)throw Error(Z(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Co(e,t),a=i?FS(e,t):wu(e,t,!0),s=i;do{if(a===0){br&&!i&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!BS(n)){a=wu(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=ao;var l=o.current.memoizedState.isDehydrated;if(l&&(hr(o,r).flags|=256),r=wu(o,r,!1),r!==2){if(vd&&!l){o.errorRecoveryDisabledLanes|=s,Za|=s,a=4;break t}s=pn,pn=a,s!==null&&(pn===null?pn=s:pn.push.apply(pn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){hr(e,0),oa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:oa(i,t,Cn,!ra);break t;case 2:pn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(a=Vc+300-wn(),10<a)){if(oa(i,t,Cn,!ra),Dc(i,0,!0)!==0)break t;Ii=t,i.timeoutHandle=Dv(jp.bind(null,i,n,pn,fc,ih,t,Cn,Za,ur,ra,s,"Throttled",-0,0),a);break t}jp(i,n,pn,fc,ih,t,Cn,Za,ur,ra,s,null,-0,0)}}break}while(!0);mi(e)}function jp(e,t,n,i,a,s,r,o,l,c,f,d,h,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},av(t,s,d);var y=(s&62914560)===s?Vc-wn():(s&4194048)===s?lv-wn():0;if(y=SM(d,y),y!==null){Ii=s,e.cancelPendingCommit=y(Zp.bind(null,e,t,s,n,i,a,r,o,l,f,d,null,h,p)),oa(e,s,r,!c);return}}Zp(e,t,s,n,i,a,r,o,l)}function BS(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!On(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,i){t&=~xd,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Dn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&m_(e,n,t)}function kc(){return Jt&6?!0:(zo(0),!1)}function yd(){if(qt!==null){if(ee===0)var e=qt.return;else e=qt,Oi=fs=null,sd(e),$s=null,mo=0,e=qt;for(;e!==null;)X0(e.alternate,e),e=e.return;qt=null}}function hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,iM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ii=0,yd(),oe=e,qt=n=Pi(e.current,null),jt=t,ee=0,Tn=null,ra=!1,br=Co(e,t),vd=!1,ur=Cn=xd=Za=Aa=Ee=0,pn=ao=null,ih=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Dn(i),s=1<<a;t|=e[a],i&=~s}return ki=t,zc(),n}function hv(e,t){Ut=null,Mt.H=_o,t===Er||t===Bc?(t=Tp(),ee=3):t===Jh?(t=Tp(),ee=4):ee=t===pd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tn=t,qt===null&&(Ee=1,oc(e,Wn(t,e.current)))}function dv(){var e=zn.current;return e===null?!0:(jt&4194048)===jt?Yn===null:(jt&62914560)===jt||jt&536870912?e===Yn:!1}function pv(){var e=Mt.H;return Mt.H=_o,e===null?_o:e}function mv(){var e=Mt.A;return Mt.A=zS,e}function hc(){Ee=4,ra||(jt&4194048)!==jt&&zn.current!==null||(br=!0),!(Aa&134217727)&&!(Za&134217727)||oe===null||oa(oe,jt,Cn,!1)}function wu(e,t,n){var i=Jt;Jt|=2;var a=pv(),s=mv();(oe!==e||jt!==t)&&(fc=null,hr(e,t)),t=!1;var r=Ee;t:do try{if(ee!==0&&qt!==null){var o=qt,l=Tn;switch(ee){case 8:yd(),r=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(t=!0);var c=ee;if(ee=0,Tn=null,Ws(e,o,l,c),n&&br){r=0;break t}break;default:c=ee,ee=0,Tn=null,Ws(e,o,l,c)}}IS(),r=Ee;break}catch(f){hv(e,f)}while(!0);return t&&e.shellSuspendCounter++,Oi=fs=null,Jt=i,Mt.H=a,Mt.A=s,qt===null&&(oe=null,jt=0,zc()),r}function IS(){for(;qt!==null;)gv(qt)}function FS(e,t){var n=Jt;Jt|=2;var i=pv(),a=mv();oe!==e||jt!==t?(fc=null,uc=wn()+500,hr(e,t)):br=Co(e,t);t:do try{if(ee!==0&&qt!==null){t=qt;var s=Tn;e:switch(ee){case 1:ee=0,Tn=null,Ws(e,t,s,1);break;case 2:case 9:if(bp(s)){ee=0,Tn=null,Yp(t);break}t=function(){ee!==2&&ee!==9||oe!==e||(ee=7),mi(e)},s.then(t,t);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:bp(s)?(ee=0,Tn=null,Yp(t)):(ee=0,Tn=null,Ws(e,t,s,7));break;case 5:var r=null;switch(qt.tag){case 26:r=qt.memoizedState;case 5:case 27:var o=qt;if(r?Pv(r):o.stateNode.complete){ee=0,Tn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,Xc(c)):qt=null}break e}}ee=0,Tn=null,Ws(e,t,s,5);break;case 6:ee=0,Tn=null,Ws(e,t,s,6);break;case 8:yd(),Ee=6;break t;default:throw Error(Z(462))}}HS();break}catch(f){hv(e,f)}while(!0);return Oi=fs=null,Mt.H=i,Mt.A=a,Jt=n,qt!==null?0:(oe=null,jt=0,zc(),Ee)}function HS(){for(;qt!==null&&!cy();)gv(qt)}function gv(e){var t=k0(e.alternate,e,ki);e.memoizedProps=e.pendingProps,t===null?Xc(e):qt=t}function Yp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gp(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=Gp(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:sd(t);default:X0(n,t),t=qt=X_(t,ki),t=k0(n,t,ki)}e.memoizedProps=e.pendingProps,t===null?Xc(e):qt=t}function Ws(e,t,n,i){Oi=fs=null,sd(t),$s=null,mo=0;var a=t.return;try{if(CS(e,a,t,n,jt)){Ee=1,oc(e,Wn(n,e.current)),qt=null;return}}catch(s){if(a!==null)throw qt=a,s;Ee=1,oc(e,Wn(n,e.current)),qt=null;return}t.flags&32768?(Zt||i===1?e=!0:br||jt&536870912?e=!1:(ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),_v(t,e)):Xc(t)}function Xc(e){var t=e;do{if(t.flags&32768){_v(t,ra);return}e=t.return;var n=DS(t.alternate,t,ki);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Ee===0&&(Ee=5)}function _v(e,t){do{var n=US(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Ee=6,qt=null}function Zp(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Wc();while(Ue!==0);if(Jt&6)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(s=t.lanes|t.childLanes,s|=Wh,xy(e,n,s,r,o,l),e===oe&&(qt=oe=null,jt=0),fr=t,ga=e,Ii=n,ah=s,sh=a,cv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,XS(Kl,function(){return Mv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Mt.T,Mt.T=null,a=$t.p,$t.p=2,r=Jt,Jt|=4;try{NS(e,t,n)}finally{Jt=r,$t.p=a,Mt.T=i}}Ue=1,vv(),xv(),yv()}}function vv(){if(Ue===1){Ue=0;var e=ga,t=fr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Mt.T,Mt.T=null;var i=$t.p;$t.p=2;var a=Jt;Jt|=4;try{ev(t,e);var s=uh,r=P_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&z_(o.ownerDocument.documentElement,o)){if(l!==null&&Xh(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),y=o.textContent.length,v=Math.min(l.start,y),m=l.end===void 0?v:Math.min(l.end,y);!p.extend&&v>m&&(r=m,m=v,v=r);var u=_p(o,v),g=_p(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),v>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}yc=!!ch,uh=ch=null}finally{Jt=a,$t.p=i,Mt.T=n}}e.current=t,Ue=2}}function xv(){if(Ue===2){Ue=0;var e=ga,t=fr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Mt.T,Mt.T=null;var i=$t.p;$t.p=2;var a=Jt;Jt|=4;try{K0(e,t.alternate,t)}finally{Jt=a,$t.p=i,Mt.T=n}}Ue=3}}function yv(){if(Ue===4||Ue===3){Ue=0,uy();var e=ga,t=fr,n=Ii,i=cv;t.subtreeFlags&10256||t.flags&10256?Ue=5:(Ue=0,fr=ga=null,Sv(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ma=null),Bh(n),t=t.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Mt.T,a=$t.p,$t.p=2,Mt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Mt.T=t,$t.p=a}}Ii&3&&Wc(),mi(e),a=e.pendingLanes,n&261930&&a&42?e===rh?so++:(so=0,rh=e):so=0,zo(0)}}function Sv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Uo(t)))}function Wc(){return vv(),xv(),yv(),Mv()}function Mv(){if(Ue!==5)return!1;var e=ga,t=ah;ah=0;var n=Bh(Ii),i=Mt.T,a=$t.p;try{$t.p=32>n?32:n,Mt.T=null,n=sh,sh=null;var s=ga,r=Ii;if(Ue=0,fr=ga=null,Ii=0,Jt&6)throw Error(Z(331));var o=Jt;if(Jt|=4,rv(s.current),iv(s,s.current,r,n),Jt=o,zo(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Ro,s)}catch{}return!0}finally{$t.p=a,Mt.T=i,Sv(e,t)}}function Kp(e,t,n){t=Wn(n,t),t=$f(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(wo(e,2),mi(e))}function ne(e,t,n){if(e.tag===3)Kp(e,e,n);else for(;t!==null;){if(t.tag===3){Kp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=Wn(n,e),n=B0(2),i=pa(t,n,2),i!==null&&(I0(n,i,t,e),wo(i,2),mi(i));break}}t=t.return}}function Lu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new PS;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(vd=!0,a.add(n),e=GS.bind(null,e,t,n),t.then(e,e))}function GS(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,oe===e&&(jt&n)===n&&(Ee===4||Ee===3&&(jt&62914560)===jt&&300>wn()-Vc?!(Jt&2)&&hr(e,0):xd|=n,ur===jt&&(ur=0)),mi(e)}function Ev(e,t){t===0&&(t=p_()),e=us(e,t),e!==null&&(wo(e,t),mi(e))}function VS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ev(e,n)}function kS(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),Ev(e,n)}function XS(e,t){return zh(e,t)}var dc=null,Ns=null,oh=!1,pc=!1,Du=!1,la=0;function mi(e){e!==Ns&&e.next===null&&(Ns===null?dc=Ns=e:Ns=Ns.next=e),pc=!0,oh||(oh=!0,qS())}function zo(e,t){if(!Du&&pc){Du=!0;do for(var n=!1,i=dc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Dn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Qp(i,s))}else s=jt,s=Dc(i,i===oe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Co(i,s)||(n=!0,Qp(i,s));i=i.next}while(n);Du=!1}}function WS(){bv()}function bv(){pc=oh=!1;var e=0;la!==0&&nM()&&(e=la);for(var t=wn(),n=null,i=dc;i!==null;){var a=i.next,s=Tv(i,t);s===0?(i.next=null,n===null?dc=a:n.next=a,a===null&&(Ns=n)):(n=i,(e!==0||s&3)&&(pc=!0)),i=a}Ue!==0&&Ue!==5||zo(e),la!==0&&(la=0)}function Tv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Dn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=vy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=oe,n=jt,n=Dc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&su(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Co(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&su(i),Bh(n)){case 2:case 8:n=h_;break;case 32:n=Kl;break;case 268435456:n=d_;break;default:n=Kl}return i=Av.bind(null,e),n=zh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&su(i),e.callbackPriority=2,e.callbackNode=null,2}function Av(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wc()&&e.callbackNode!==n)return null;var i=jt;return i=Dc(e,e===oe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(fv(e,i,t),Tv(e,wn()),e.callbackNode!=null&&e.callbackNode===n?Av.bind(null,e):null)}function Qp(e,t){if(Wc())return null;fv(e,t,!0)}function qS(){aM(function(){Jt&6?zh(f_,WS):bv()})}function Sd(){if(la===0){var e=or;e===0&&(e=qo,qo<<=1,!(qo&261888)&&(qo=256)),la=e}return la}function Jp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function $p(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function jS(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Jp((a[xn]||null).action),r=i.submitter;r&&(t=(t=r[xn]||null)?Jp(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Uc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var l=r?$p(a,r):new FormData(a);Qf(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?$p(a,r):new FormData(a),Qf(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Uu=0;Uu<Ff.length;Uu++){var Nu=Ff[Uu],YS=Nu.toLowerCase(),ZS=Nu[0].toUpperCase()+Nu.slice(1);si(YS,"on"+ZS)}si(I_,"onAnimationEnd");si(F_,"onAnimationIteration");si(H_,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(fS,"onTransitionRun");si(hS,"onTransitionStart");si(dS,"onTransitionCancel");si(G_,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Rv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Jl(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Jl(f)}a.currentTarget=null,s=l}}}}function Wt(e,t){var n=t[Df];n===void 0&&(n=t[Df]=new Set);var i=e+"__bubble";n.has(i)||(Cv(t,e,2,!1),n.add(i))}function Ou(e,t,n){var i=0;t&&(i|=4),Cv(n,e,i,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Md(e){if(!e[nl]){e[nl]=!0,x_.forEach(function(n){n!=="selectionchange"&&(KS.has(n)||Ou(n,!1,e),Ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Ou("selectionchange",!1,t))}}function Cv(e,t,n,i){switch(Gv(t)){case 2:var a=bM;break;case 8:a=TM;break;default:a=Ad}n=a.bind(null,t,n,e),a=void 0,!Pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function zu(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Ps(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}R_(function(){var c=s,f=Hh(n),d=[];t:{var h=V_.get(e);if(h!==void 0){var p=Uc,y=e;switch(e){case"keypress":if(Ol(n)===0)break t;case"keydown":case"keyup":p=ky;break;case"focusin":y="focus",p=uu;break;case"focusout":y="blur",p=uu;break;case"beforeblur":case"afterblur":p=uu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qy;break;case I_:case F_:case H_:p=Oy;break;case G_:p=Yy;break;case"scroll":case"scrollend":p=wy;break;case"wheel":p=Ky;break;case"copy":case"cut":case"paste":p=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cp;break;case"toggle":case"beforetoggle":p=Jy}var v=(t&4)!==0,m=!v&&(e==="scroll"||e==="scrollend"),u=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,_;g!==null;){var x=g;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||u===null||(x=co(g,u),x!=null&&v.push(xo(g,x,_))),m)break;g=g.return}0<v.length&&(h=new p(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==zf&&(y=n.relatedTarget||n.fromElement)&&(Ps(y)||y[yr]))break t;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Ps(y):null,y!==null&&(m=Ao(y),v=y.tag,y!==m||v!==5&&v!==27&&v!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=op,x="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=cp,x="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:Xr(p),_=y==null?h:Xr(y),h=new v(x,g+"leave",p,n,f),h.target=m,h.relatedTarget=_,x=null,Ps(f)===c&&(v=new v(u,g+"enter",y,n,f),v.target=_,v.relatedTarget=m,x=v),m=x,p&&y)e:{for(v=QS,u=p,g=y,_=0,x=u;x;x=v(x))_++;x=0;for(var C=g;C;C=v(C))x++;for(;0<_-x;)u=v(u),_--;for(;0<x-_;)g=v(g),x--;for(;_--;){if(u===g||g!==null&&u===g.alternate){v=u;break e}u=v(u),g=v(g)}v=null}else v=null;p!==null&&tm(d,h,p,v,!1),y!==null&&m!==null&&tm(d,m,y,v,!0)}}t:{if(h=c?Xr(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=dp;else if(hp(h))if(N_)R=lS;else{R=rS;var T=sS}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Fh(c.elementType)&&(R=dp):R=oS;if(R&&(R=R(e,c))){U_(d,R,n,f);break t}T&&T(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Of(h,"number",h.value)}switch(T=c?Xr(c):window,e){case"focusin":(hp(T)||T.contentEditable==="true")&&(Fs=T,Bf=c,Kr=null);break;case"focusout":Kr=Bf=Fs=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,vp(d,n,f);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":vp(d,n,f)}var U;if(kh)t:{switch(e){case"compositionstart":var S="onCompositionStart";break t;case"compositionend":S="onCompositionEnd";break t;case"compositionupdate":S="onCompositionUpdate";break t}S=void 0}else Is?L_(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(w_&&n.locale!=="ko"&&(Is||S!=="onCompositionStart"?S==="onCompositionEnd"&&Is&&(U=C_()):(sa=f,Gh="value"in sa?sa.value:sa.textContent,Is=!0)),T=mc(c,S),0<T.length&&(S=new lp(S,e,null,n,f),d.push({event:S,listeners:T}),U?S.data=U:(U=D_(n),U!==null&&(S.data=U)))),(U=tS?eS(e,n):nS(e,n))&&(S=mc(c,"onBeforeInput"),0<S.length&&(T=new lp("onBeforeInput","beforeinput",null,n,f),d.push({event:T,listeners:S}),T.data=U)),jS(d,e,c,n,f)}Rv(d,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=co(e,n),a!=null&&i.unshift(xo(e,a,s)),a=co(e,t),a!=null&&i.push(xo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function QS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tm(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=co(n,s),c!=null&&r.unshift(xo(n,c,l))):a||(c=co(n,s),c!=null&&r.push(xo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var JS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function em(e){return(typeof e=="string"?e:""+e).replace(JS,`
`).replace($S,"")}function wv(e,t){return t=em(t),em(e)===t}function ae(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||rr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&rr(e,""+i);break;case"className":Zo(e,"class",i);break;case"tabIndex":Zo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zo(e,n,i);break;case"style":A_(e,i,s);break;case"data":if(t!=="object"){Zo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ae(e,t,"name",a.name,a,null),ae(e,t,"formEncType",a.formEncType,a,null),ae(e,t,"formMethod",a.formMethod,a,null),ae(e,t,"formTarget",a.formTarget,a,null)):(ae(e,t,"encType",a.encType,a,null),ae(e,t,"method",a.method,a,null),ae(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ni);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),Dl(e,"popover",i);break;case"xlinkActuate":_i(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_i(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_i(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_i(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_i(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_i(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_i(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_i(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_i(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ry.get(n)||n,Dl(e,n,i))}}function lh(e,t,n,i,a,s){switch(n){case"style":A_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?rr(e,i):(typeof i=="number"||typeof i=="bigint")&&rr(e,""+i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!y_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[xn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Dl(e,n,i)}}}function Ke(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ae(e,t,s,r,n,null)}}a&&ae(e,t,"srcSet",n.srcSet,n,null),i&&ae(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,t));break;default:ae(e,t,i,f,n,null)}}E_(e,s,o,l,c,r,a,!1);return;case"select":Wt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ae(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Ks(e,!!i,t,!1):n!=null&&Ks(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:ae(e,t,r,o,n,null)}T_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ae(e,t,l,i,n,null)}return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<vo.length;i++)Wt(vo[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:ae(e,t,c,i,n,null)}return;default:if(Fh(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&lh(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ae(e,t,o,i,n,null))}function tM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ae(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==d&&ae(e,t,h,p,i,d)}}Nf(e,r,o,l,c,f,s,a);return;case"select":p=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ae(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":h=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ae(e,t,a,s,i,l)}t=o,n=r,i=p,h!=null?Ks(e,!!n,h,!1):!!i!=!!n&&(t!=null?Ks(e,!!n,t,!0):Ks(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ae(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Z(91));break;default:a!==s&&ae(e,t,r,a,i,s)}b_(e,h,p);return;case"option":for(var y in n)if(h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y))switch(y){case"selected":e.selected=!1;break;default:ae(e,t,y,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ae(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v)&&ae(e,t,v,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:ae(e,t,c,h,i,p)}return;default:if(Fh(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&lh(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||lh(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&ae(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ae(e,t,d,h,i,p)}function nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&nm(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&nm(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ch=null,uh=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pu=null;function nM(){var e=window.event;return e&&e.type==="popstate"?e===Pu?!1:(Pu=e,!0):(Pu=null,!1)}var Dv=typeof setTimeout=="function"?setTimeout:void 0,iM=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(sM)}:Dv;function sM(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function sm(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),pr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ro(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ro(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Lo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&ro(e.ownerDocument.body);n=a}while(n);pr(t)}function rm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function hh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hh(n),Ih(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Lo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Zn(e.nextSibling),e===null)break}return null}function oM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zn(e.nextSibling),e===null))return null;return e}function Uv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zn(e.nextSibling),e===null))return null;return e}function dh(e){return e.data==="$?"||e.data==="$~"}function ph(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lM(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var mh=null;function om(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Nv(e,t,n){switch(t=gc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ih(e)}var Kn=new Map,cm=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wi=$t.d;$t.d={f:cM,r:uM,D:fM,C:hM,L:dM,m:pM,X:gM,S:mM,M:_M};function cM(){var e=Wi.f(),t=kc();return e||t}function uM(e){var t=Sr(e);t!==null&&t.tag===5&&t.type==="form"?A0(t):Wi.r(e)}var Tr=typeof document>"u"?null:document;function Ov(e,t,n){var i=Tr;if(i&&typeof t=="string"&&t){var a=Xn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),cm.has(a)||(cm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ke(t,"link",e),Ve(t),i.head.appendChild(t)))}}function fM(e){Wi.D(e),Ov("dns-prefetch",e,null)}function hM(e,t){Wi.C(e,t),Ov("preconnect",e,t)}function dM(e,t,n){Wi.L(e,t,n);var i=Tr;if(i&&e&&t){var a='link[rel="preload"][as="'+Xn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Xn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Xn(n.imageSizes)+'"]')):a+='[href="'+Xn(e)+'"]';var s=a;switch(t){case"style":s=dr(e);break;case"script":s=Ar(e)}Kn.has(s)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kn.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Po(s))||t==="script"&&i.querySelector(Bo(s))||(t=i.createElement("link"),Ke(t,"link",e),Ve(t),i.head.appendChild(t)))}}function pM(e,t){Wi.m(e,t);var n=Tr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Xn(i)+'"][href="'+Xn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ar(e)}if(!Kn.has(s)&&(e=ge({rel:"modulepreload",href:e},t),Kn.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bo(s)))return}i=n.createElement("link"),Ke(i,"link",e),Ve(i),n.head.appendChild(i)}}}function mM(e,t,n){Wi.S(e,t,n);var i=Tr;if(i&&e){var a=Zs(i).hoistableStyles,s=dr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Po(s)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kn.get(s))&&Ed(e,n);var l=r=i.createElement("link");Ve(l),Ke(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Vl(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function gM(e,t){Wi.X(e,t);var n=Tr;if(n&&e){var i=Zs(n).hoistableScripts,a=Ar(e),s=i.get(a);s||(s=n.querySelector(Bo(a)),s||(e=ge({src:e,async:!0},t),(t=Kn.get(a))&&bd(e,t),s=n.createElement("script"),Ve(s),Ke(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function _M(e,t){Wi.M(e,t);var n=Tr;if(n&&e){var i=Zs(n).hoistableScripts,a=Ar(e),s=i.get(a);s||(s=n.querySelector(Bo(a)),s||(e=ge({src:e,async:!0,type:"module"},t),(t=Kn.get(a))&&bd(e,t),s=n.createElement("script"),Ve(s),Ke(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function um(e,t,n,i){var a=(a=fa.current)?_c(a):null;if(!a)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=dr(n.href),n=Zs(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=dr(n.href);var s=Zs(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Po(e)))&&!s._p&&(r.instance=s,r.state.loading=5),Kn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kn.set(e,n),s||vM(a,e,n,r.state))),t&&i===null)throw Error(Z(528,""));return r}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ar(n),n=Zs(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function dr(e){return'href="'+Xn(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function zv(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function vM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ke(t,"link",n),Ve(t),e.head.appendChild(t))}function Ar(e){return'[src="'+Xn(e)+'"]'}function Bo(e){return"script[async]"+e}function fm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Xn(n.href)+'"]');if(i)return t.instance=i,Ve(i),i;var a=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ve(i),Ke(i,"style",a),Vl(i,n.precedence,e),t.instance=i;case"stylesheet":a=dr(n.href);var s=e.querySelector(Po(a));if(s)return t.state.loading|=4,t.instance=s,Ve(s),s;i=zv(n),(a=Kn.get(a))&&Ed(i,a),s=(e.ownerDocument||e).createElement("link"),Ve(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ke(s,"link",i),t.state.loading|=4,Vl(s,n.precedence,e),t.instance=s;case"script":return s=Ar(n.src),(a=e.querySelector(Bo(s)))?(t.instance=a,Ve(a),a):(i=n,(a=Kn.get(s))&&(i=ge({},n),bd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),Ke(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Vl(i,n.precedence,e));return t.instance}function Vl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ed(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var kl=null;function hm(e,t,n){if(kl===null){var i=new Map,a=kl=new Map;a.set(n,i)}else a=kl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Lo]||s[je]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function xM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function yM(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=dr(i.href),s=t.querySelector(Po(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Ve(s);return}s=t.ownerDocument||t,i=zv(i),(a=Kn.get(a))&&Ed(i,a),s=s.createElement("link"),Ve(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ke(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=vc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bu=0;function SM(e,t){return e.stylesheets&&e.count===0&&Xl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Bu===0&&(Bu=62500*eM());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Bu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Xl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,t.forEach(MM,e),xc=null,vc.call(e))}function MM(e,t){if(!(t.state.loading&4)){var n=xc.get(e);if(n)var i=n.get(null);else{n=new Map,xc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=vc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var yo={$$typeof:Ui,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function EM(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Bv(e,t,n,i,a,s,r,o,l,c,f,d){return e=new EM(e,t,n,r,l,c,f,d,o),t=1,s===!0&&(t|=24),s=Rn(3,null,null,t),e.current=s,s.stateNode=e,t=Kh(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},$h(s),e}function Iv(e){return e?(e=Vs,e):Vs}function Fv(e,t,n,i,a,s){a=Iv(a),i.context===null?i.context=a:i.pendingContext=a,i=da(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=pa(e,i,t),n!==null&&(_n(n,e,t),Jr(n,e,t))}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Td(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function Hv(e){if(e.tag===13||e.tag===31){var t=us(e,67108864);t!==null&&_n(t,e,67108864),Td(e,67108864)}}function mm(e){if(e.tag===13||e.tag===31){var t=Un();t=Ph(t);var n=us(e,t);n!==null&&_n(n,e,t),Td(e,t)}}var yc=!0;function bM(e,t,n,i){var a=Mt.T;Mt.T=null;var s=$t.p;try{$t.p=2,Ad(e,t,n,i)}finally{$t.p=s,Mt.T=a}}function TM(e,t,n,i){var a=Mt.T;Mt.T=null;var s=$t.p;try{$t.p=8,Ad(e,t,n,i)}finally{$t.p=s,Mt.T=a}}function Ad(e,t,n,i){if(yc){var a=gh(i);if(a===null)zu(e,t,i,Sc,n),gm(e,i);else if(RM(a,e,t,n,i))i.stopPropagation();else if(gm(e,i),t&4&&-1<AM.indexOf(e)){for(;a!==null;){var s=Sr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Ia(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Dn(r);o.entanglements[1]|=l,r&=~l}mi(s),!(Jt&6)&&(uc=wn()+500,zo(0))}}break;case 31:case 13:o=us(s,2),o!==null&&_n(o,s,2),kc(),Td(s,2)}if(s=gh(i),s===null&&zu(e,t,i,Sc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else zu(e,t,i,null,n)}}function gh(e){return e=Hh(e),Rd(e)}var Sc=null;function Rd(e){if(Sc=null,e=Ps(e),e!==null){var t=Ao(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=r_(t),e!==null)return e;e=null}else if(n===31){if(e=o_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sc=e,null}function Gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fy()){case f_:return 2;case h_:return 8;case Kl:case hy:return 32;case d_:return 268435456;default:return 32}default:return 32}}var _h=!1,_a=null,va=null,xa=null,So=new Map,Mo=new Map,ia=[],AM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gm(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":So.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(t.pointerId)}}function Pr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Sr(t),t!==null&&Hv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function RM(e,t,n,i,a){switch(t){case"focusin":return _a=Pr(_a,e,t,n,i,a),!0;case"dragenter":return va=Pr(va,e,t,n,i,a),!0;case"mouseover":return xa=Pr(xa,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return So.set(s,Pr(So.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Mo.set(s,Pr(Mo.get(s)||null,e,t,n,i,a)),!0}return!1}function Vv(e){var t=Ps(e.target);if(t!==null){var n=Ao(t);if(n!==null){if(t=n.tag,t===13){if(t=r_(n),t!==null){e.blockedOn=t,tp(e.priority,function(){mm(n)});return}}else if(t===31){if(t=o_(n),t!==null){e.blockedOn=t,tp(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zf=i,n.target.dispatchEvent(i),zf=null}else return t=Sr(n),t!==null&&Hv(t),e.blockedOn=n,!1;t.shift()}return!0}function _m(e,t,n){Wl(e)&&n.delete(t)}function CM(){_h=!1,_a!==null&&Wl(_a)&&(_a=null),va!==null&&Wl(va)&&(va=null),xa!==null&&Wl(xa)&&(xa=null),So.forEach(_m),Mo.forEach(_m)}function il(e,t){e.blockedOn===t&&(e.blockedOn=null,_h||(_h=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,CM)))}var al=null;function vm(e){al!==e&&(al=e,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,function(){al===e&&(al=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Rd(i||n)===null)continue;break}var s=Sr(n);s!==null&&(e.splice(t,3),t-=3,Qf(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function pr(e){function t(l){return il(l,e)}_a!==null&&il(_a,e),va!==null&&il(va,e),xa!==null&&il(xa,e),So.forEach(t),Mo.forEach(t);for(var n=0;n<ia.length;n++){var i=ia[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)Vv(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[xn]||null;if(typeof s=="function")r||vm(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[xn]||null)o=r.formAction;else if(Rd(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),vm(n)}}}function kv(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Cd(e){this._internalRoot=e}qc.prototype.render=Cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=Un();Fv(n,i,e,t,null,null)};qc.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fv(e.current,2,null,e,null,null),kc(),t[yr]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=v_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&Vv(e)}};var xm=a_.version;if(xm!=="19.2.8")throw Error(Z(527,xm,"19.2.8"));$t.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=ay(t),e=e!==null?l_(e):null,e=e===null?null:e.stateNode,e};var wM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Ro=sl.inject(wM),Ln=sl}catch{}}wc.createRoot=function(e,t){if(!s_(e))throw Error(Z(299));var n=!1,i="",a=O0,s=z0,r=P0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Bv(e,1,!1,null,null,n,i,null,a,s,r,kv),e[yr]=t.current,Md(e),new Cd(t)};wc.hydrateRoot=function(e,t,n){if(!s_(e))throw Error(Z(299));var i=!1,a="",s=O0,r=z0,o=P0,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Bv(e,1,!0,t,n??null,i,a,l,s,r,o,kv),t.context=Iv(null),n=t.current,i=Un(),i=Ph(i),a=da(i),a.callback=null,pa(n,a,i),n=i,t.current.lanes=n,wo(t,n),mi(t),e[yr]=t.current,Md(e),new qc(t)};wc.version="19.2.8";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(e){console.error(e)}}Xv(),Jg.exports=wc;var LM=Jg.exports;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="160",DM=0,ym=1,UM=2,Wv=1,qv=2,Ri=3,Ra=0,vn=1,Di=2,ya=0,nr=1,Sm=2,Mm=3,Em=4,NM=5,ka=100,OM=101,zM=102,bm=103,Tm=104,PM=200,BM=201,IM=202,FM=203,vh=204,xh=205,HM=206,GM=207,VM=208,kM=209,XM=210,WM=211,qM=212,jM=213,YM=214,ZM=0,KM=1,QM=2,Mc=3,JM=4,$M=5,tE=6,eE=7,jv=0,nE=1,iE=2,Sa=0,aE=1,sE=2,rE=3,oE=4,lE=5,cE=6,Yv=300,mr=301,gr=302,yh=303,Sh=304,jc=306,Mh=1e3,ii=1001,Eh=1002,on=1003,Am=1004,Iu=1005,Vn=1006,uE=1007,Eo=1008,Ma=1009,fE=1010,hE=1011,Ld=1012,Zv=1013,ca=1014,ua=1015,bo=1016,Kv=1017,Qv=1018,Ka=1020,dE=1021,ai=1023,pE=1024,mE=1025,Qa=1026,_r=1027,gE=1028,Jv=1029,_E=1030,$v=1031,tx=1033,Fu=33776,Hu=33777,Gu=33778,Vu=33779,Rm=35840,Cm=35841,wm=35842,Lm=35843,ex=36196,Dm=37492,Um=37496,Nm=37808,Om=37809,zm=37810,Pm=37811,Bm=37812,Im=37813,Fm=37814,Hm=37815,Gm=37816,Vm=37817,km=37818,Xm=37819,Wm=37820,qm=37821,ku=36492,jm=36494,Ym=36495,vE=36283,Zm=36284,Km=36285,Qm=36286,nx=3e3,Ja=3001,xE=3200,yE=3201,ix=0,SE=1,jn="",qe="srgb",Xi="srgb-linear",Dd="display-p3",Yc="display-p3-linear",Ec="linear",de="srgb",bc="rec709",Tc="p3",ps=7680,Jm=519,ME=512,EE=513,bE=514,ax=515,TE=516,AE=517,RE=518,CE=519,$m=35044,tg="300 es",bh=1035,zi=2e3,Ac=2001;class Rr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=Math.PI/180,Th=180/Math.PI;function Io(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[e&255]+Je[e>>8&255]+Je[e>>16&255]+Je[e>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[n&63|128]+Je[n>>8&255]+"-"+Je[n>>16&255]+Je[n>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function mn(e,t,n){return Math.max(t,Math.min(n,e))}function wE(e,t){return(e%t+t)%t}function Wu(e,t,n){return(1-n)*e+n*t}function eg(e){return(e&e-1)===0&&e!==0}function Ah(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Br(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,n=0){Yt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,n,i,a,s,r,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],y=i[8],v=a[0],m=a[3],u=a[6],g=a[1],_=a[4],x=a[7],C=a[2],R=a[5],T=a[8];return s[0]=r*v+o*g+l*C,s[3]=r*m+o*_+l*R,s[6]=r*u+o*x+l*T,s[1]=c*v+f*g+d*C,s[4]=c*m+f*_+d*R,s[7]=c*u+f*x+d*T,s[2]=h*v+p*g+y*C,s[5]=h*m+p*_+y*R,s[8]=h*u+p*x+y*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*s,p=c*s-r*l,y=n*d+i*h+a*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return t[0]=d*v,t[1]=(a*c-f*i)*v,t[2]=(o*i-a*r)*v,t[3]=h*v,t[4]=(f*n-a*l)*v,t[5]=(a*s-o*n)*v,t[6]=p*v,t[7]=(i*l-c*n)*v,t[8]=(r*n-i*s)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(qu.makeScale(t,n)),this}rotate(t){return this.premultiply(qu.makeRotation(-t)),this}translate(t,n){return this.premultiply(qu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new kt;function sx(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Rc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function LE(){const e=Rc("canvas");return e.style.display="block",e}const ng={};function oo(e){e in ng||(ng[e]=!0,console.warn(e))}const ig=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ag=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[Xi]:{transfer:Ec,primaries:bc,toReference:e=>e,fromReference:e=>e},[qe]:{transfer:de,primaries:bc,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Yc]:{transfer:Ec,primaries:Tc,toReference:e=>e.applyMatrix3(ag),fromReference:e=>e.applyMatrix3(ig)},[Dd]:{transfer:de,primaries:Tc,toReference:e=>e.convertSRGBToLinear().applyMatrix3(ag),fromReference:e=>e.applyMatrix3(ig).convertLinearToSRGB()}},DE=new Set([Xi,Yc]),se={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!DE.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=rl[t].toReference,a=rl[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return rl[e].primaries},getTransfer:function(e){return e===jn?Ec:rl[e].transfer}};function ir(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ju(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let ms;class rx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=Rc("canvas")),ms.width=t.width,ms.height=t.height;const i=ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ir(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ir(n[i]/255)*255):n[i]=ir(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UE=0;class ox{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Io(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Yu(a[r].image)):s.push(Yu(a[r]))}else s=Yu(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Yu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rx.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NE=0;class Nn extends Rr{constructor(t=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,i=ii,a=ii,s=Vn,r=Eo,o=ai,l=Ma,c=Nn.DEFAULT_ANISOTROPY,f=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Io(),this.name="",this.source=new ox(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ja?qe:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Ja:nx}set encoding(t){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ja?qe:jn}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Yv;Nn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,n=0,i=0,a=1){ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],y=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,C=(u+1)/2,R=(f+h)/4,T=(d+v)/4,U=(y+m)/4;return _>x&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=R/i,s=T/i):x>C?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=R/a,s=U/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=T/s,a=U/s),this.set(i,a,s,n),this}let g=Math.sqrt((m-y)*(m-y)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-v)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends Rr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ke(0,0,t,n),this.scissorTest=!1,this.viewport=new ke(0,0,t,n);const a={width:t,height:n,depth:1};i.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ja?qe:jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new ox(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends OE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class lx extends Nn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zE extends Nn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],d=i[a+3];const h=s[r+0],p=s[r+1],y=s[r+2],v=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=y,t[n+3]=v;return}if(d!==v||l!==h||c!==p||f!==y){let m=1-o;const u=l*h+c*p+f*y+d*v,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),R=Math.atan2(C,u*g);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const x=o*g;if(l=l*m+h*x,c=c*m+p*x,f=f*m+y*x,d=d*m+v*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],d=s[r],h=s[r+1],p=s[r+2],y=s[r+3];return t[n]=o*y+f*d+l*p-c*h,t[n+1]=l*y+f*h+c*d-o*p,t[n+2]=c*y+f*p+o*h-l*d,t[n+3]=f*y-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),d=o(s/2),h=l(i/2),p=l(a/2),y=l(s/2);switch(r){case"XYZ":this._x=h*f*d+c*p*y,this._y=c*p*d-h*f*y,this._z=c*f*y+h*p*d,this._w=c*f*d-h*p*y;break;case"YXZ":this._x=h*f*d+c*p*y,this._y=c*p*d-h*f*y,this._z=c*f*y-h*p*d,this._w=c*f*d+h*p*y;break;case"ZXY":this._x=h*f*d-c*p*y,this._y=c*p*d+h*f*y,this._z=c*f*y+h*p*d,this._w=c*f*d-h*p*y;break;case"ZYX":this._x=h*f*d-c*p*y,this._y=c*p*d+h*f*y,this._z=c*f*y-h*p*d,this._w=c*f*d+h*p*y;break;case"YZX":this._x=h*f*d+c*p*y,this._y=c*p*d+h*f*y,this._z=c*f*y-h*p*d,this._w=c*f*d-h*p*y;break;case"XZY":this._x=h*f*d-c*p*y,this._y=c*p*d-h*f*y,this._z=c*f*y+h*p*d,this._w=c*f*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(a),i*Math.sin(s),i*Math.cos(s),n*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,n=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(sg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(sg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-s*d,this.z=a+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new z,sg=new Fo;class Ho{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Jn):Jn.fromBufferAttribute(s,r),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ol.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(t.matrixWorld),this.union(ol)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),ll.subVectors(this.max,Ir),gs.subVectors(t.a,Ir),_s.subVectors(t.b,Ir),vs.subVectors(t.c,Ir),ji.subVectors(_s,gs),Yi.subVectors(vs,_s),Na.subVectors(gs,vs);let n=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-Na.z,Na.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,Na.z,0,-Na.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-Na.y,Na.x,0];return!Ku(n,gs,_s,vs,ll)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,gs,_s,vs,ll))?!1:(cl.crossVectors(ji,Yi),n=[cl.x,cl.y,cl.z],Ku(n,gs,_s,vs,ll))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Si=[new z,new z,new z,new z,new z,new z,new z,new z],Jn=new z,ol=new Ho,gs=new z,_s=new z,vs=new z,ji=new z,Yi=new z,Na=new z,Ir=new z,ll=new z,cl=new z,Oa=new z;function Ku(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Oa.fromArray(e,s);const o=a.x*Math.abs(Oa.x)+a.y*Math.abs(Oa.y)+a.z*Math.abs(Oa.z),l=t.dot(Oa),c=n.dot(Oa),f=i.dot(Oa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const PE=new Ho,Fr=new z,Qu=new z;class Ud{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):PE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const n=Fr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Fr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Qu)),this.expandByPoint(Fr.copy(t.center).sub(Qu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new z,Ju=new z,ul=new z,Zi=new z,$u=new z,fl=new z,tf=new z;class BE{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Mi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Ju.copy(t).add(n).multiplyScalar(.5),ul.copy(n).sub(t).normalize(),Zi.copy(this.origin).sub(Ju);const s=t.distanceTo(n)*.5,r=-this.direction.dot(ul),o=Zi.dot(this.direction),l=-Zi.dot(ul),c=Zi.lengthSq(),f=Math.abs(1-r*r);let d,h,p,y;if(f>0)if(d=r*l-o,h=r*o-l,y=s*f,d>=0)if(h>=-y)if(h<=y){const v=1/f;d*=v,h*=v,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Ju).addScaledVector(ul,h),p}intersectSphere(t,n){Mi.subVectors(t.center,this.origin);const i=Mi.dot(this.direction),a=Mi.dot(Mi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,a=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,a=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,n,i,a,s){$u.subVectors(n,t),fl.subVectors(i,t),tf.crossVectors($u,fl);let r=this.direction.dot(tf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Zi.subVectors(this.origin,t);const l=o*this.direction.dot(fl.crossVectors(Zi,fl));if(l<0)return null;const c=o*this.direction.dot($u.cross(Zi));if(c<0||l+c>r)return null;const f=-o*Zi.dot(tf);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,n,i,a,s,r,o,l,c,f,d,h,p,y,v,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,d,h,p,y,v,m)}set(t,n,i,a,s,r,o,l,c,f,d,h,p,y,v,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=y,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/xs.setFromMatrixColumn(t,0).length(),s=1/xs.setFromMatrixColumn(t,1).length(),r=1/xs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*f,p=r*d,y=o*f,v=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=y+p*c,n[10]=r*l}else if(t.order==="YXZ"){const h=l*f,p=l*d,y=c*f,v=c*d;n[0]=h+v*o,n[4]=y*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-y,n[6]=v+h*o,n[10]=r*l}else if(t.order==="ZXY"){const h=l*f,p=l*d,y=c*f,v=c*d;n[0]=h-v*o,n[4]=-r*d,n[8]=y+p*o,n[1]=p+y*o,n[5]=r*f,n[9]=v-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const h=r*f,p=r*d,y=o*f,v=o*d;n[0]=l*f,n[4]=y*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-y,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,y=o*l,v=o*c;n[0]=l*f,n[4]=v-h*d,n[8]=y*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+y,n[10]=h-v*d}else if(t.order==="XZY"){const h=r*l,p=r*c,y=o*l,v=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+v,n[5]=r*f,n[9]=p*d-y,n[2]=y*d-p,n[6]=o*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IE,t,FE)}lookAt(t,n,i){const a=this.elements;return Mn.subVectors(t,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),hl.crossVectors(Mn,Ki),a[0]=Ki.x,a[4]=hl.x,a[8]=Mn.x,a[1]=Ki.y,a[5]=hl.y,a[9]=Mn.y,a[2]=Ki.z,a[6]=hl.z,a[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],y=i[2],v=i[6],m=i[10],u=i[14],g=i[3],_=i[7],x=i[11],C=i[15],R=a[0],T=a[4],U=a[8],S=a[12],E=a[1],P=a[5],X=a[9],$=a[13],D=a[2],I=a[6],L=a[10],k=a[14],B=a[3],j=a[7],Y=a[11],nt=a[15];return s[0]=r*R+o*E+l*D+c*B,s[4]=r*T+o*P+l*I+c*j,s[8]=r*U+o*X+l*L+c*Y,s[12]=r*S+o*$+l*k+c*nt,s[1]=f*R+d*E+h*D+p*B,s[5]=f*T+d*P+h*I+p*j,s[9]=f*U+d*X+h*L+p*Y,s[13]=f*S+d*$+h*k+p*nt,s[2]=y*R+v*E+m*D+u*B,s[6]=y*T+v*P+m*I+u*j,s[10]=y*U+v*X+m*L+u*Y,s[14]=y*S+v*$+m*k+u*nt,s[3]=g*R+_*E+x*D+C*B,s[7]=g*T+_*P+x*I+C*j,s[11]=g*U+_*X+x*L+C*Y,s[15]=g*S+_*$+x*k+C*nt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],y=t[3],v=t[7],m=t[11],u=t[15];return y*(+s*l*d-a*c*d-s*o*h+i*c*h+a*o*p-i*l*p)+v*(+n*l*p-n*c*h+s*r*h-a*r*p+a*c*f-s*l*f)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*f-i*c*f)+u*(-a*o*f-n*l*d+n*o*h+a*r*d-i*r*h+i*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],y=t[12],v=t[13],m=t[14],u=t[15],g=d*m*c-v*h*c+v*l*p-o*m*p-d*l*u+o*h*u,_=y*h*c-f*m*c-y*l*p+r*m*p+f*l*u-r*h*u,x=f*v*c-y*d*c+y*o*p-r*v*p-f*o*u+r*d*u,C=y*d*l-f*v*l-y*o*h+r*v*h+f*o*m-r*d*m,R=n*g+i*_+a*x+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=g*T,t[1]=(v*h*s-d*m*s-v*a*p+i*m*p+d*a*u-i*h*u)*T,t[2]=(o*m*s-v*l*s+v*a*c-i*m*c-o*a*u+i*l*u)*T,t[3]=(d*l*s-o*h*s-d*a*c+i*h*c+o*a*p-i*l*p)*T,t[4]=_*T,t[5]=(f*m*s-y*h*s+y*a*p-n*m*p-f*a*u+n*h*u)*T,t[6]=(y*l*s-r*m*s-y*a*c+n*m*c+r*a*u-n*l*u)*T,t[7]=(r*h*s-f*l*s+f*a*c-n*h*c-r*a*p+n*l*p)*T,t[8]=x*T,t[9]=(y*d*s-f*v*s-y*i*p+n*v*p+f*i*u-n*d*u)*T,t[10]=(r*v*s-y*o*s+y*i*c-n*v*c-r*i*u+n*o*u)*T,t[11]=(f*o*s-r*d*s-f*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=C*T,t[13]=(f*v*a-y*d*a+y*i*h-n*v*h-f*i*m+n*d*m)*T,t[14]=(y*o*a-r*v*a-y*i*l+n*v*l+r*i*m-n*o*m)*T,t[15]=(r*d*a-f*o*a+f*i*l-n*d*l-r*i*h+n*o*h)*T,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,d=o+o,h=s*c,p=s*f,y=s*d,v=r*f,m=r*d,u=o*d,g=l*c,_=l*f,x=l*d,C=i.x,R=i.y,T=i.z;return a[0]=(1-(v+u))*C,a[1]=(p+x)*C,a[2]=(y-_)*C,a[3]=0,a[4]=(p-x)*R,a[5]=(1-(h+u))*R,a[6]=(m+g)*R,a[7]=0,a[8]=(y+_)*T,a[9]=(m-g)*T,a[10]=(1-(h+v))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let s=xs.set(a[0],a[1],a[2]).length();const r=xs.set(a[4],a[5],a[6]).length(),o=xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],$n.copy(this);const c=1/s,f=1/r,d=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=zi){const l=this.elements,c=2*s/(n-t),f=2*s/(i-a),d=(n+t)/(n-t),h=(i+a)/(i-a);let p,y;if(o===zi)p=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===Ac)p=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=zi){const l=this.elements,c=1/(n-t),f=1/(i-a),d=1/(r-s),h=(n+t)*c,p=(i+a)*f;let y,v;if(o===zi)y=(r+s)*d,v=-2*d;else if(o===Ac)y=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const xs=new z,$n=new Ne,IE=new z(0,0,0),FE=new z(1,1,1),Ki=new z,hl=new z,Mn=new z,rg=new Ne,og=new Fo;class Zc{constructor(t=0,n=0,i=0,a=Zc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return rg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return og.setFromEuler(this),this.setFromQuaternion(og,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zc.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let HE=0;const lg=new z,ys=new Fo,Ei=new Ne,dl=new z,Hr=new z,GE=new z,VE=new Fo,cg=new z(1,0,0),ug=new z(0,1,0),fg=new z(0,0,1),kE={type:"added"},XE={type:"removed"};class tn extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new z,n=new Zc,i=new Fo,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ne},normalMatrix:{value:new kt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(cg,t)}rotateY(t){return this.rotateOnAxis(ug,t)}rotateZ(t){return this.rotateOnAxis(fg,t)}translateOnAxis(t,n){return lg.copy(t).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(cg,t)}translateY(t){return this.translateOnAxis(ug,t)}translateZ(t){return this.translateOnAxis(fg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?dl.copy(t):dl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Hr,dl,this.up):Ei.lookAt(dl,Hr,this.up),this.quaternion.setFromRotationMatrix(Ei),a&&(Ei.extractRotation(a.matrixWorld),ys.setFromRotationMatrix(Ei),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(XE)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,GE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,VE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),y=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=a,i;function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}tn.DEFAULT_UP=new z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new z,bi=new z,ef=new z,Ti=new z,Ss=new z,Ms=new z,hg=new z,nf=new z,af=new z,sf=new z;let pl=!1;class ni{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ti.subVectors(t,n),a.cross(ti);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ti.subVectors(a,n),bi.subVectors(i,n),ef.subVectors(t,n);const r=ti.dot(ti),o=ti.dot(bi),l=ti.dot(ef),c=bi.dot(bi),f=bi.dot(ef),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*f)*h,y=(r*f-o*l)*h;return s.set(1-p-y,y,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(t,n,i,a,s,r,o,l){return pl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pl=!0),this.getInterpolation(t,n,i,a,s,r,o,l)}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(r,Ti.y),l.addScaledVector(o,Ti.z),l)}static isFrontFacing(t,n,i,a){return ti.subVectors(i,n),bi.subVectors(t,n),ti.cross(bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ti.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ni.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,a,s){return pl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pl=!0),ni.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}getInterpolation(t,n,i,a,s){return ni.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Ss.subVectors(a,i),Ms.subVectors(s,i),nf.subVectors(t,i);const l=Ss.dot(nf),c=Ms.dot(nf);if(l<=0&&c<=0)return n.copy(i);af.subVectors(t,a);const f=Ss.dot(af),d=Ms.dot(af);if(f>=0&&d<=f)return n.copy(a);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Ss,r);sf.subVectors(t,s);const p=Ss.dot(sf),y=Ms.dot(sf);if(y>=0&&p<=y)return n.copy(s);const v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Ms,o);const m=f*y-p*d;if(m<=0&&d-f>=0&&p-y>=0)return hg.subVectors(s,a),o=(d-f)/(d-f+(p-y)),n.copy(a).addScaledVector(hg,o);const u=1/(m+v+h);return r=v*u,o=h*u,n.copy(i).addScaledVector(Ss,r).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ml={h:0,s:0,l:0};function rf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Qt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=se.workingColorSpace){if(t=wE(t,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=rf(r,s,t+1/3),this.g=rf(r,s,t),this.b=rf(r,s,t-1/3)}return se.toWorkingColorSpace(this,a),this}setStyle(t,n=qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qe){const i=ux[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}copyLinearToSRGB(t){return this.r=ju(t.r),this.g=ju(t.g),this.b=ju(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return se.fromWorkingColorSpace($e.copy(this),t),Math.round(mn($e.r*255,0,255))*65536+Math.round(mn($e.g*255,0,255))*256+Math.round(mn($e.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.fromWorkingColorSpace($e.copy(this),n);const i=$e.r,a=$e.g,s=$e.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const f=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=se.workingColorSpace){return se.fromWorkingColorSpace($e.copy(this),n),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=qe){se.fromWorkingColorSpace($e.copy(this),t);const n=$e.r,i=$e.g,a=$e.b;return t!==qe?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+n,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Qi),t.getHSL(ml);const i=Wu(Qi.h,ml.h,n),a=Wu(Qi.s,ml.s,n),s=Wu(Qi.l,ml.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Qt;Qt.NAMES=ux;let WE=0;class Go extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=nr,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=ka,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Ra&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==xh&&(i.blendDst=this.blendDst),this.blendEquation!==ka&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fx extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new z,gl=new Yt;class di{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=$m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(t),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Re.fromBufferAttribute(this,n),Re.applyMatrix3(t),this.setXYZ(n,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Re.fromBufferAttribute(this,n),Re.applyMatrix4(t),this.setXYZ(n,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Re.fromBufferAttribute(this,n),Re.applyNormalMatrix(t),this.setXYZ(n,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Re.fromBufferAttribute(this,n),Re.transformDirection(t),this.setXYZ(n,Re.x,Re.y,Re.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Br(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Br(n,this.array)),n}setX(t,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Br(n,this.array)),n}setY(t,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Br(n,this.array)),n}setZ(t,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Br(n,this.array)),n}setW(t,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),a=hn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),a=hn(a,this.array),s=hn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$m&&(t.usage=this.usage),t}}class hx extends di{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class dx extends di{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Oe extends di{constructor(t,n,i){super(new Float32Array(t),n,i)}}let qE=0;const Bn=new Ne,of=new tn,Es=new z,En=new Ho,Gr=new Ho,He=new z;class ri extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sx(t)?dx:hx)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,n,i){return Bn.makeTranslation(t,n,i),this.applyMatrix4(Bn),this}scale(t,n,i){return Bn.makeScale(t,n,i),this.applyMatrix4(Bn),this}lookAt(t){return of.lookAt(t),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(En.min,Gr.min),En.expandByPoint(He),He.addVectors(En.max,Gr.max),En.expandByPoint(He)):(En.expandByPoint(Gr.min),En.expandByPoint(Gr.max))}En.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)He.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(He));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)He.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),He.add(Es)),a=Math.max(a,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,a=n.position.array,s=n.normal.array,r=n.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let E=0;E<o;E++)c[E]=new z,f[E]=new z;const d=new z,h=new z,p=new z,y=new Yt,v=new Yt,m=new Yt,u=new z,g=new z;function _(E,P,X){d.fromArray(a,E*3),h.fromArray(a,P*3),p.fromArray(a,X*3),y.fromArray(r,E*2),v.fromArray(r,P*2),m.fromArray(r,X*2),h.sub(d),p.sub(d),v.sub(y),m.sub(y);const $=1/(v.x*m.y-m.x*v.y);isFinite($)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar($),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar($),c[E].add(u),c[P].add(u),c[X].add(u),f[E].add(g),f[P].add(g),f[X].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,P=x.length;E<P;++E){const X=x[E],$=X.start,D=X.count;for(let I=$,L=$+D;I<L;I+=3)_(i[I+0],i[I+1],i[I+2])}const C=new z,R=new z,T=new z,U=new z;function S(E){T.fromArray(s,E*3),U.copy(T);const P=c[E];C.copy(P),C.sub(T.multiplyScalar(T.dot(P))).normalize(),R.crossVectors(U,P);const $=R.dot(f[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=$}for(let E=0,P=x.length;E<P;++E){const X=x[E],$=X.start,D=X.count;for(let I=$,L=$+D;I<L;I+=3)S(i[I+0]),S(i[I+1]),S(i[I+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,f=new z,d=new z;if(t)for(let h=0,p=t.count;h<p;h+=3){const y=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)He.fromBufferAttribute(t,n),He.normalize(),t.setXYZ(n,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*f;for(let u=0;u<f;u++)h[y++]=c[p++]}return new di(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const s=t.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new Ne,za=new BE,_l=new Ud,pg=new z,bs=new z,Ts=new z,As=new z,lf=new z,vl=new z,xl=new Yt,yl=new Yt,Sl=new Yt,mg=new z,gg=new z,_g=new z,Ml=new z,El=new z;class gn extends tn{constructor(t=new ri,n=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(lf.fromBufferAttribute(d,t),r?vl.addScaledVector(lf,f):vl.addScaledVector(lf.sub(n),f))}n.add(vl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),za.copy(t.ray).recast(t.near),!(_l.containsPoint(za.origin)===!1&&(za.intersectSphere(_l,pg)===null||za.origin.distanceToSquared(pg)>(t.far-t.near)**2))&&(dg.copy(s).invert(),za.copy(t.ray).applyMatrix4(dg),!(i.boundingBox!==null&&za.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,za)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,v=h.length;y<v;y++){const m=h[y],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,C=_;x<C;x+=3){const R=o.getX(x),T=o.getX(x+1),U=o.getX(x+2);a=bl(this,u,t,i,c,f,d,R,T,U),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const y=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=y,u=v;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);a=bl(this,r,t,i,c,f,d,g,_,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,v=h.length;y<v;y++){const m=h[y],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,C=_;x<C;x+=3){const R=x,T=x+1,U=x+2;a=bl(this,u,t,i,c,f,d,R,T,U),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,u=v;m<u;m+=3){const g=m,_=m+1,x=m+2;a=bl(this,r,t,i,c,f,d,g,_,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function jE(e,t,n,i,a,s,r,o){let l;if(t.side===vn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ra,o),l===null)return null;El.copy(o),El.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:e}}function bl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,bs),e.getVertexPosition(l,Ts),e.getVertexPosition(c,As);const f=jE(e,t,n,i,bs,Ts,As,Ml);if(f){a&&(xl.fromBufferAttribute(a,o),yl.fromBufferAttribute(a,l),Sl.fromBufferAttribute(a,c),f.uv=ni.getInterpolation(Ml,bs,Ts,As,xl,yl,Sl,new Yt)),s&&(xl.fromBufferAttribute(s,o),yl.fromBufferAttribute(s,l),Sl.fromBufferAttribute(s,c),f.uv1=ni.getInterpolation(Ml,bs,Ts,As,xl,yl,Sl,new Yt),f.uv2=f.uv1),r&&(mg.fromBufferAttribute(r,o),gg.fromBufferAttribute(r,l),_g.fromBufferAttribute(r,c),f.normal=ni.getInterpolation(Ml,bs,Ts,As,mg,gg,_g,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};ni.getNormal(bs,Ts,As,d.normal),f.face=d}return f}class ss extends ri{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,t,r,s,0),y("z","y","x",1,-1,i,n,-t,r,s,1),y("x","z","y",1,1,t,i,n,a,r,2),y("x","z","y",1,-1,t,i,-n,a,r,3),y("x","y","z",1,-1,t,n,i,a,s,4),y("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(d,2));function y(v,m,u,g,_,x,C,R,T,U,S){const E=x/T,P=C/U,X=x/2,$=C/2,D=R/2,I=T+1,L=U+1;let k=0,B=0;const j=new z;for(let Y=0;Y<L;Y++){const nt=Y*P-$;for(let it=0;it<I;it++){const q=it*E-X;j[v]=q*g,j[m]=nt*_,j[u]=D,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[u]=R>0?1:-1,f.push(j.x,j.y,j.z),d.push(it/T),d.push(1-Y/U),k+=1}}for(let Y=0;Y<U;Y++)for(let nt=0;nt<T;nt++){const it=h+nt+I*Y,q=h+nt+I*(Y+1),K=h+(nt+1)+I*(Y+1),rt=h+(nt+1)+I*Y;l.push(it,q,rt),l.push(q,K,rt),B+=6}o.addGroup(p,B,S),p+=B,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function sn(e){const t={};for(let n=0;n<e.length;n++){const i=vr(e[n]);for(const a in i)t[a]=i[a]}return t}function YE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function px(e){return e.getRenderTarget()===null?e.outputColorSpace:se.workingColorSpace}const ZE={clone:vr,merge:sn};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=YE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=zi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends mx{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Cs=1;class JE extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new kn(Rs,Cs,t,n);a.layers=this.layers,this.add(a);const s=new kn(Rs,Cs,t,n);s.layers=this.layers,this.add(s);const r=new kn(Rs,Cs,t,n);r.layers=this.layers,this.add(r);const o=new kn(Rs,Cs,t,n);o.layers=this.layers,this.add(o);const l=new kn(Rs,Cs,t,n);l.layers=this.layers,this.add(l);const c=new kn(Rs,Cs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class gx extends Nn{constructor(t,n,i,a,s,r,o,l,c,f){t=t!==void 0?t:[],n=n!==void 0?n:mr,super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $E extends as{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];n.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ja?qe:jn),this.texture=new gx(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ss(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ya});s.uniforms.tEquirect.value=n;const r=new gn(a,s),o=n.minFilter;return n.minFilter===Eo&&(n.minFilter=Vn),new JE(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,a){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}const cf=new z,tb=new z,eb=new kt;class Ga{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=cf.subVectors(i,n).cross(tb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(cf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||eb.getNormalMatrix(t),a=this.coplanarPoint(cf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pa=new Ud,Tl=new z;class Nd{constructor(t=new Ga,n=new Ga,i=new Ga,a=new Ga,s=new Ga,r=new Ga){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi){const i=this.planes,a=t.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],f=a[5],d=a[6],h=a[7],p=a[8],y=a[9],v=a[10],m=a[11],u=a[12],g=a[13],_=a[14],x=a[15];if(i[0].setComponents(l-s,h-c,m-p,x-u).normalize(),i[1].setComponents(l+s,h+c,m+p,x+u).normalize(),i[2].setComponents(l+r,h+f,m+y,x+g).normalize(),i[3].setComponents(l-r,h-f,m-y,x-g).normalize(),i[4].setComponents(l-o,h-d,m-v,x-_).normalize(),n===zi)i[5].setComponents(l+o,h+d,m+v,x+_).normalize();else if(n===Ac)i[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(t){return Pa.center.set(0,0,0),Pa.radius=.7071067811865476,Pa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Tl.x=a.normal.x>0?t.max.x:t.min.x,Tl.y=a.normal.y>0?t.max.y:t.min.y,Tl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _x(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function nb(e,t){const n=t.isWebGL2,i=new WeakMap;function a(c,f){const d=c.array,h=c.usage,p=d.byteLength,y=e.createBuffer();e.bindBuffer(f,y),e.bufferData(f,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=e.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=e.SHORT;else if(d instanceof Uint32Array)v=e.UNSIGNED_INT;else if(d instanceof Int32Array)v=e.INT;else if(d instanceof Int8Array)v=e.BYTE;else if(d instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,f,d){const h=f.array,p=f._updateRange,y=f.updateRanges;if(e.bindBuffer(d,c),p.count===-1&&y.length===0&&e.bufferSubData(d,0,h),y.length!==0){for(let v=0,m=y.length;v<m;v++){const u=y[v];n?e.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):e.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}p.count!==-1&&(n?e.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):e.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(e.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,a(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:r,remove:o,update:l}}class To extends ri{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,d=t/o,h=n/l,p=[],y=[],v=[],m=[];for(let u=0;u<f;u++){const g=u*h-r;for(let _=0;_<c;_++){const x=_*d-s;y.push(x,-g,0),v.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,x=g+c*(u+1),C=g+1+c*(u+1),R=g+1+c*u;p.push(_,x,R),p.push(x,C,R)}this.setIndex(p),this.setAttribute("position",new Oe(y,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.width,t.height,t.widthSegments,t.heightSegments)}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,_b=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ab=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xb=`#ifdef USE_GRADIENTMAP
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
}`,Wb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nT=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,iT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ST=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,GT=`float getShadowMask() {
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
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,qT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QT=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,cA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,fA=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,SA=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,bA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,TA=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,RA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OA=`uniform float rotation;
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
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:ib,alphahash_pars_fragment:ab,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:fb,batching_vertex:hb,begin_vertex:db,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:_b,clipping_planes_fragment:vb,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Sb,color_fragment:Mb,color_pars_fragment:Eb,color_pars_vertex:bb,color_vertex:Tb,common:Ab,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:wb,displacementmap_vertex:Lb,emissivemap_fragment:Db,emissivemap_pars_fragment:Ub,colorspace_fragment:Nb,colorspace_pars_fragment:Ob,envmap_fragment:zb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Bb,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:Kb,envmap_vertex:Fb,fog_vertex:Hb,fog_pars_vertex:Gb,fog_fragment:Vb,fog_pars_fragment:kb,gradientmap_pars_fragment:Xb,lightmap_fragment:Wb,lightmap_pars_fragment:qb,lights_lambert_fragment:jb,lights_lambert_pars_fragment:Yb,lights_pars_begin:Zb,lights_toon_fragment:Qb,lights_toon_pars_fragment:Jb,lights_phong_fragment:$b,lights_phong_pars_fragment:tT,lights_physical_fragment:eT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:sT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:vT,morphtarget_vertex:xT,normal_fragment_begin:yT,normal_fragment_maps:ST,normal_pars_fragment:MT,normal_pars_vertex:ET,normal_vertex:bT,normalmap_pars_fragment:TT,clearcoat_normal_fragment_begin:AT,clearcoat_normal_fragment_maps:RT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:wT,opaque_fragment:LT,packing:DT,premultiplied_alpha_fragment:UT,project_vertex:NT,dithering_fragment:OT,dithering_pars_fragment:zT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:FT,shadowmap_vertex:HT,shadowmask_pars_fragment:GT,skinbase_vertex:VT,skinning_pars_vertex:kT,skinning_vertex:XT,skinnormal_vertex:WT,specularmap_fragment:qT,specularmap_pars_fragment:jT,tonemapping_fragment:YT,tonemapping_pars_fragment:ZT,transmission_fragment:KT,transmission_pars_fragment:QT,uv_pars_fragment:JT,uv_pars_vertex:$T,uv_vertex:tA,worldpos_vertex:eA,background_vert:nA,background_frag:iA,backgroundCube_vert:aA,backgroundCube_frag:sA,cube_vert:rA,cube_frag:oA,depth_vert:lA,depth_frag:cA,distanceRGBA_vert:uA,distanceRGBA_frag:fA,equirect_vert:hA,equirect_frag:dA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:_A,meshlambert_vert:vA,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:EA,meshphong_vert:bA,meshphong_frag:TA,meshphysical_vert:AA,meshphysical_frag:RA,meshtoon_vert:CA,meshtoon_frag:wA,points_vert:LA,points_frag:DA,shadow_vert:UA,shadow_frag:NA,sprite_vert:OA,sprite_frag:zA},st={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},li={basic:{uniforms:sn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:sn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:sn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:sn([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:sn([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:sn([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:sn([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:sn([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:sn([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:sn([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:sn([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:sn([st.common,st.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:sn([st.lights,st.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};li.physical={uniforms:sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Al={r:0,b:0,g:0};function PA(e,t,n,i,a,s,r){const o=new Qt(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function y(m,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:t).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),g=!0);const x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jc)?(f===void 0&&(f=new gn(new ss(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:vr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=se.getTransfer(_.colorSpace)!==de,(d!==_||h!==_.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=_,h=_.version,p=e.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new gn(new To(2,2),new rs({name:"BackgroundMaterial",uniforms:vr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=se.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(Al,px(e)),i.buffers.color.setClear(Al.r,Al.g,Al.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:y}}function BA(e,t,n,i){const a=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function d(D,I,L,k,B){let j=!1;if(r){const Y=v(k,L,I);c!==Y&&(c=Y,p(c.object)),j=u(D,k,L,B),j&&g(D,k,L,B)}else{const Y=I.wireframe===!0;(c.geometry!==k.id||c.program!==L.id||c.wireframe!==Y)&&(c.geometry=k.id,c.program=L.id,c.wireframe=Y,j=!0)}B!==null&&n.update(B,e.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,U(D,I,L,k),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?e.bindVertexArray(D):s.bindVertexArrayOES(D)}function y(D){return i.isWebGL2?e.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,I,L){const k=L.wireframe===!0;let B=o[D.id];B===void 0&&(B={},o[D.id]=B);let j=B[I.id];j===void 0&&(j={},B[I.id]=j);let Y=j[k];return Y===void 0&&(Y=m(h()),j[k]=Y),Y}function m(D){const I=[],L=[],k=[];for(let B=0;B<a;B++)I[B]=0,L[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:k,object:D,attributes:{},index:null}}function u(D,I,L,k){const B=c.attributes,j=I.attributes;let Y=0;const nt=L.getAttributes();for(const it in nt)if(nt[it].location>=0){const K=B[it];let rt=j[it];if(rt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),K===void 0||K.attribute!==rt||rt&&K.data!==rt.data)return!0;Y++}return c.attributesNum!==Y||c.index!==k}function g(D,I,L,k){const B={},j=I.attributes;let Y=0;const nt=L.getAttributes();for(const it in nt)if(nt[it].location>=0){let K=j[it];K===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const rt={};rt.attribute=K,K&&K.data&&(rt.data=K.data),B[it]=rt,Y++}c.attributes=B,c.attributesNum=Y,c.index=k}function _(){const D=c.newAttributes;for(let I=0,L=D.length;I<L;I++)D[I]=0}function x(D){C(D,0)}function C(D,I){const L=c.newAttributes,k=c.enabledAttributes,B=c.attributeDivisors;L[D]=1,k[D]===0&&(e.enableVertexAttribArray(D),k[D]=1),B[D]!==I&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),B[D]=I)}function R(){const D=c.newAttributes,I=c.enabledAttributes;for(let L=0,k=I.length;L<k;L++)I[L]!==D[L]&&(e.disableVertexAttribArray(L),I[L]=0)}function T(D,I,L,k,B,j,Y){Y===!0?e.vertexAttribIPointer(D,I,L,B,j):e.vertexAttribPointer(D,I,L,k,B,j)}function U(D,I,L,k){if(i.isWebGL2===!1&&(D.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const B=k.attributes,j=L.getAttributes(),Y=I.defaultAttributeValues;for(const nt in j){const it=j[nt];if(it.location>=0){let q=B[nt];if(q===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const K=q.normalized,rt=q.itemSize,_t=n.get(q);if(_t===void 0)continue;const gt=_t.buffer,Nt=_t.type,zt=_t.bytesPerElement,bt=i.isWebGL2===!0&&(Nt===e.INT||Nt===e.UNSIGNED_INT||q.gpuType===Zv);if(q.isInterleavedBufferAttribute){const Kt=q.data,F=Kt.stride,en=q.offset;if(Kt.isInstancedInterleavedBuffer){for(let xt=0;xt<it.locationSize;xt++)C(it.location+xt,Kt.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let xt=0;xt<it.locationSize;xt++)x(it.location+xt);e.bindBuffer(e.ARRAY_BUFFER,gt);for(let xt=0;xt<it.locationSize;xt++)T(it.location+xt,rt/it.locationSize,Nt,K,F*zt,(en+rt/it.locationSize*xt)*zt,bt)}else{if(q.isInstancedBufferAttribute){for(let Kt=0;Kt<it.locationSize;Kt++)C(it.location+Kt,q.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Kt=0;Kt<it.locationSize;Kt++)x(it.location+Kt);e.bindBuffer(e.ARRAY_BUFFER,gt);for(let Kt=0;Kt<it.locationSize;Kt++)T(it.location+Kt,rt/it.locationSize,Nt,K,rt*zt,rt/it.locationSize*Kt*zt,bt)}}else if(Y!==void 0){const K=Y[nt];if(K!==void 0)switch(K.length){case 2:e.vertexAttrib2fv(it.location,K);break;case 3:e.vertexAttrib3fv(it.location,K);break;case 4:e.vertexAttrib4fv(it.location,K);break;default:e.vertexAttrib1fv(it.location,K)}}}}R()}function S(){X();for(const D in o){const I=o[D];for(const L in I){const k=I[L];for(const B in k)y(k[B].object),delete k[B];delete I[L]}delete o[D]}}function E(D){if(o[D.id]===void 0)return;const I=o[D.id];for(const L in I){const k=I[L];for(const B in k)y(k[B].object),delete k[B];delete I[L]}delete o[D.id]}function P(D){for(const I in o){const L=o[I];if(L[D.id]===void 0)continue;const k=L[D.id];for(const B in k)y(k[B].object),delete k[B];delete L[D.id]}}function X(){$(),f=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:x,disableUnusedAttributes:R}}function IA(e,t,n,i){const a=i.isWebGL2;let s;function r(f){s=f}function o(f,d){e.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,y;if(a)p=e,y="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[y](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<h;y++)this.render(f[y],d[y]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let y=0;for(let v=0;v<h;v++)y+=d[v];n.update(y,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function FA(e,t,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),u=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,x=r||t.has("OES_texture_float"),C=_&&x,R=r?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:R}}function HA(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new Ga,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||y===null||y.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,_=g*4;let x=u.clippingState||null;l.value=x,x=f(y,h,_,p);for(let C=0;C!==_;++C)x[C]=n[C];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,y){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const u=p+v*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,x=p;_!==v;++_,x+=4)r.copy(d[_]).applyMatrix4(g,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function GA(e){let t=new WeakMap;function n(r,o){return o===yh?r.mapping=mr:o===Sh&&(r.mapping=gr),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===yh||o===Sh)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new $E(l.height/2);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vx extends mx{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,vg=[.125,.215,.35,.446,.526,.582],Xa=20,uf=new vx,xg=new Qt;let ff=null,hf=0,df=0;const Va=(1+Math.sqrt(5))/2,ws=1/Va,yg=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Va,ws),new z(0,Va,-ws),new z(ws,0,Va),new z(-ws,0,Va),new z(Va,ws,0),new z(-Va,ws,0)];class Sg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,a,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ff,hf,df),t.scissorTest=!1,Rl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:bo,format:ai,colorSpace:Xi,depthBuffer:!1},a=Mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VA(s)),this._blurMaterial=kA(s,t,n)}return a}_compileMaterial(t){const n=new gn(this._lodPlanes[0],t);this._renderer.compile(n,uf)}_sceneToCubeUV(t,n,i,a){const o=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(xg),f.toneMapping=Sa,f.autoClear=!1;const p=new fx({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),y=new gn(new ss,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(xg),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Rl(a,g*_,u>2?_:0,_,_),f.setRenderTarget(a),v&&f.render(y,o),f.render(t,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===mr||t.mapping===gr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,uf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=yg[(a-1)%yg.length];this._blur(t,a-1,a,s,r)}n.autoClear=i}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new gn(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xa-1),v=s/y,m=isFinite(s)?1+Math.floor(f*v):Xa;m>Xa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xa}`);const u=[];let g=0;for(let T=0;T<Xa;++T){const U=T/v,S=Math.exp(-U*U/2);u.push(S),T===0?g+=S:T<m&&(g+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const x=this._sizeLods[a],C=3*x*(a>_-qs?a-_+qs:0),R=4*(this._cubeSize-x);Rl(n,C,R,3*x,2*x),l.setRenderTarget(n),l.render(d,uf)}}function VA(e){const t=[],n=[],i=[];let a=e;const s=e-qs+1+vg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>e-qs?l=vg[r-e+qs-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,y=6,v=3,m=2,u=1,g=new Float32Array(v*y*p),_=new Float32Array(m*y*p),x=new Float32Array(u*y*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,U=R>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];g.set(S,v*y*R),_.set(h,m*y*R);const E=[R,R,R,R,R,R];x.set(E,u*y*R)}const C=new ri;C.setAttribute("position",new di(g,v)),C.setAttribute("uv",new di(_,m)),C.setAttribute("faceIndex",new di(x,u)),t.push(C),a>qs&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Mg(e,t,n){const i=new as(e,t,n);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function kA(e,t,n){const i=new Float32Array(Xa),a=new z(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Xa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Od(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Eg(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function bg(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Od(){return`

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
	`}function XA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yh||l===Sh,f=l===mr||l===gr;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return n===null&&(n=new Sg(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&a(d)){n===null&&(n=new Sg(e));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function a(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function WA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const a=n(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function qA(e,t,n,i){const a={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const y in h.attributes)t.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}h.removeEventListener("dispose",r),delete a[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)t.update(h[y],e.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const v=p[y];for(let m=0,u=v.length;m<u;m++)t.update(v[m],e.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,y=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,x=g.length;_<x;_+=3){const C=g[_+0],R=g[_+1],T=g[_+2];h.push(C,R,R,T,T,C)}}else if(y!==void 0){const g=y.array;v=y.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const C=_+0,R=_+1,T=_+2;h.push(C,R,R,T,T,C)}}else return;const m=new(sx(h)?dx:hx)(h,1);m.version=v;const u=s.get(d);u&&t.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function jA(e,t,n,i){const a=i.isWebGL2;let s;function r(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function f(p,y){e.drawElements(s,y,o,p*l),n.update(y,s,1)}function d(p,y,v){if(v===0)return;let m,u;if(a)m=e,u="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,y,o,p*l,v),n.update(y,s,v)}function h(p,y,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<v;u++)this.render(p[u]/l,y[u]);else{m.multiDrawElementsWEBGL(s,y,0,o,p,0,v);let u=0;for(let g=0;g<v;g++)u+=y[g];n.update(u,s,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function YA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function ZA(e,t){return e[0]-t[0]}function KA(e,t){return Math.abs(t[1])-Math.abs(e[1])}function QA(e,t,n){const i={},a=new Float32Array(8),s=new WeakMap,r=new ke,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let I=function(){$.dispose(),s.delete(f),f.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const _=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),C===!0&&(S=3);let E=f.attributes.position.count*S,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const X=new Float32Array(E*P*4*v),$=new lx(X,E,P,v);$.type=ua,$.needsUpdate=!0;const D=S*4;for(let L=0;L<v;L++){const k=R[L],B=T[L],j=U[L],Y=E*P*4*L;for(let nt=0;nt<k.count;nt++){const it=nt*D;_===!0&&(r.fromBufferAttribute(k,nt),X[Y+it+0]=r.x,X[Y+it+1]=r.y,X[Y+it+2]=r.z,X[Y+it+3]=0),x===!0&&(r.fromBufferAttribute(B,nt),X[Y+it+4]=r.x,X[Y+it+5]=r.y,X[Y+it+6]=r.z,X[Y+it+7]=0),C===!0&&(r.fromBufferAttribute(j,nt),X[Y+it+8]=r.x,X[Y+it+9]=r.y,X[Y+it+10]=r.z,X[Y+it+11]=j.itemSize===4?r.w:1)}}m={count:v,texture:$,size:new Yt(E,P)},s.set(f,m),f.addEventListener("dispose",I)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(e,"morphTargetBaseInfluence",g),d.getUniforms().setValue(e,"morphTargetInfluences",h),d.getUniforms().setValue(e,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(e,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[f.id]=v}for(let x=0;x<y;x++){const C=v[x];C[0]=x,C[1]=h[x]}v.sort(KA);for(let x=0;x<8;x++)x<y&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ZA);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const C=o[x],R=C[0],T=C[1];R!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+x)!==m[R]&&f.setAttribute("morphTarget"+x,m[R]),u&&f.getAttribute("morphNormal"+x)!==u[R]&&f.setAttribute("morphNormal"+x,u[R]),a[x]=T,g+=T):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),u&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),a[x]=0)}const _=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(e,"morphTargetBaseInfluence",_),d.getUniforms().setValue(e,"morphTargetInfluences",a)}}return{update:l}}function JA(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class xx extends Nn{constructor(t,n,i,a,s,r,o,l,c,f){if(f=f!==void 0?f:Qa,f!==Qa&&f!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Qa&&(i=ca),i===void 0&&f===_r&&(i=Ka),super(null,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yx=new Nn,Sx=new xx(1,1);Sx.compareFunction=ax;const Mx=new lx,Ex=new zE,bx=new gx,Tg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),wg=new Float32Array(4);function Cr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=Tg[a];if(s===void 0&&(s=new Float32Array(a),Tg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Pe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Be(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Kc(e,t){let n=Ag[t];n===void 0&&(n=new Int32Array(t),Ag[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function $A(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function t1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pe(n,t))return;e.uniform2fv(this.addr,t),Be(n,t)}}function e1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Pe(n,t))return;e.uniform3fv(this.addr,t),Be(n,t)}}function n1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pe(n,t))return;e.uniform4fv(this.addr,t),Be(n,t)}}function i1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Be(n,t)}else{if(Pe(n,i))return;wg.set(i),e.uniformMatrix2fv(this.addr,!1,wg),Be(n,i)}}function a1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Be(n,t)}else{if(Pe(n,i))return;Cg.set(i),e.uniformMatrix3fv(this.addr,!1,Cg),Be(n,i)}}function s1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Be(n,t)}else{if(Pe(n,i))return;Rg.set(i),e.uniformMatrix4fv(this.addr,!1,Rg),Be(n,i)}}function r1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function o1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pe(n,t))return;e.uniform2iv(this.addr,t),Be(n,t)}}function l1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pe(n,t))return;e.uniform3iv(this.addr,t),Be(n,t)}}function c1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pe(n,t))return;e.uniform4iv(this.addr,t),Be(n,t)}}function u1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function f1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pe(n,t))return;e.uniform2uiv(this.addr,t),Be(n,t)}}function h1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pe(n,t))return;e.uniform3uiv(this.addr,t),Be(n,t)}}function d1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pe(n,t))return;e.uniform4uiv(this.addr,t),Be(n,t)}}function p1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);const s=this.type===e.SAMPLER_2D_SHADOW?Sx:yx;n.setTexture2D(t||s,a)}function m1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Ex,a)}function g1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||bx,a)}function _1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||Mx,a)}function v1(e){switch(e){case 5126:return $A;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(e,t){e.uniform1fv(this.addr,t)}function y1(e,t){const n=Cr(t,this.size,2);e.uniform2fv(this.addr,n)}function S1(e,t){const n=Cr(t,this.size,3);e.uniform3fv(this.addr,n)}function M1(e,t){const n=Cr(t,this.size,4);e.uniform4fv(this.addr,n)}function E1(e,t){const n=Cr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function b1(e,t){const n=Cr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function T1(e,t){const n=Cr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function A1(e,t){e.uniform1iv(this.addr,t)}function R1(e,t){e.uniform2iv(this.addr,t)}function C1(e,t){e.uniform3iv(this.addr,t)}function w1(e,t){e.uniform4iv(this.addr,t)}function L1(e,t){e.uniform1uiv(this.addr,t)}function D1(e,t){e.uniform2uiv(this.addr,t)}function U1(e,t){e.uniform3uiv(this.addr,t)}function N1(e,t){e.uniform4uiv(this.addr,t)}function O1(e,t,n){const i=this.cache,a=t.length,s=Kc(n,a);Pe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||yx,s[r])}function z1(e,t,n){const i=this.cache,a=t.length,s=Kc(n,a);Pe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||Ex,s[r])}function P1(e,t,n){const i=this.cache,a=t.length,s=Kc(n,a);Pe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||bx,s[r])}function B1(e,t,n){const i=this.cache,a=t.length,s=Kc(n,a);Pe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||Mx,s[r])}function I1(e){switch(e){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return b1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return w1;case 5125:return L1;case 36294:return D1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return B1}}class F1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=v1(n.type)}}class H1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I1(n.type)}}class G1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Lg(e,t){e.seq.push(t),e.map[t.id]=t}function V1(e,t,n){const i=e.name,a=i.length;for(pf.lastIndex=0;;){const s=pf.exec(i),r=pf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Lg(n,c===void 0?new F1(o,e,t):new H1(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new G1(o),Lg(n,d)),n=d}}}class ql{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);V1(s,r,this)}}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Dg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const k1=37297;let X1=0;function W1(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function q1(e){const t=se.getPrimaries(se.workingColorSpace),n=se.getPrimaries(e);let i;switch(t===n?i="":t===Tc&&n===bc?i="LinearDisplayP3ToLinearSRGB":t===bc&&n===Tc&&(i="LinearSRGBToLinearDisplayP3"),e){case Xi:case Yc:return[i,"LinearTransferOETF"];case qe:case Dd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Ug(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+W1(e.getShaderSource(t),r)}else return a}function j1(e,t){const n=q1(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Y1(e,t){let n;switch(t){case aE:n="Linear";break;case sE:n="Reinhard";break;case rE:n="OptimizedCineon";break;case oE:n="ACESFilmic";break;case cE:n="AgX";break;case lE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Z1(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function K1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(js).join(`
`)}function Q1(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function J1(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function js(e){return e!==""}function Ng(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Og(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(e){return e.replace($1,e2)}const t2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e2(e,t){let n=Bt[t];if(n===void 0){const i=t2.get(t);if(i!==void 0)n=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rh(n)}const n2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(e){return e.replace(n2,i2)}function i2(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Pg(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Wv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===qv?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function s2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function o2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case jv:t="ENVMAP_BLENDING_MULTIPLY";break;case nE:t="ENVMAP_BLENDING_MIX";break;case iE:t="ENVMAP_BLENDING_ADD";break}return t}function l2(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function c2(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=a2(n),c=s2(n),f=r2(n),d=o2(n),h=l2(n),p=n.isWebGL2?"":Z1(n),y=K1(n),v=Q1(s),m=a.createProgram();let u,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(js).join(`
`),u.length>0&&(u+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(js).join(`
`),g.length>0&&(g+=`
`)):(u=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),g=[p,Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sa?"#define TONE_MAPPING":"",n.toneMapping!==Sa?Bt.tonemapping_pars_fragment:"",n.toneMapping!==Sa?Y1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,j1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),r=Rh(r),r=Ng(r,n),r=Og(r,n),o=Rh(o),o=Ng(o,n),o=Og(o,n),r=zg(r),o=zg(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+u+r,C=_+g+o,R=Dg(a,a.VERTEX_SHADER,x),T=Dg(a,a.FRAGMENT_SHADER,C);a.attachShader(m,R),a.attachShader(m,T),n.index0AttributeName!==void 0?a.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function U(X){if(e.debug.checkShaderErrors){const $=a.getProgramInfoLog(m).trim(),D=a.getShaderInfoLog(R).trim(),I=a.getShaderInfoLog(T).trim();let L=!0,k=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(L=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,m,R,T);else{const B=Ug(a,R,"vertex"),j=Ug(a,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+B+`
`+j)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||I==="")&&(k=!1);k&&(X.diagnostics={runnable:L,programLog:$,vertexShader:{log:D,prefix:u},fragmentShader:{log:I,prefix:g}})}a.deleteShader(R),a.deleteShader(T),S=new ql(a,m),E=J1(a,m)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(m,k1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=X1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}let u2=0;class f2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new h2(t),n.set(t,i)),i}}class h2{constructor(t){this.id=u2++,this.code=t,this.usedTimes=0}}function d2(e,t,n,i,a,s,r){const o=new cx,l=new f2,c=[],f=a.isWebGL2,d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,E,P,X,$){const D=X.fog,I=$.geometry,L=S.isMeshStandardMaterial?X.environment:null,k=(S.isMeshStandardMaterial?n:t).get(S.envMap||L),B=k&&k.mapping===jc?k.image.height:null,j=y[S.type];S.precision!==null&&(p=a.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=Y!==void 0?Y.length:0;let it=0;I.morphAttributes.position!==void 0&&(it=1),I.morphAttributes.normal!==void 0&&(it=2),I.morphAttributes.color!==void 0&&(it=3);let q,K,rt,_t;if(j){const nn=li[j];q=nn.vertexShader,K=nn.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const gt=e.getRenderTarget(),Nt=$.isInstancedMesh===!0,zt=$.isBatchedMesh===!0,bt=!!S.map,Kt=!!S.matcap,F=!!k,en=!!S.aoMap,xt=!!S.lightMap,Lt=!!S.bumpMap,dt=!!S.normalMap,ve=!!S.displacementMap,It=!!S.emissiveMap,A=!!S.metalnessMap,M=!!S.roughnessMap,G=S.anisotropy>0,tt=S.clearcoat>0,J=S.iridescence>0,et=S.sheen>0,pt=S.transmission>0,ct=G&&!!S.anisotropyMap,ft=tt&&!!S.clearcoatMap,Et=tt&&!!S.clearcoatNormalMap,Ft=tt&&!!S.clearcoatRoughnessMap,Q=J&&!!S.iridescenceMap,ie=J&&!!S.iridescenceThicknessMap,Xt=et&&!!S.sheenColorMap,Ct=et&&!!S.sheenRoughnessMap,vt=!!S.specularMap,ht=!!S.specularColorMap,Pt=!!S.specularIntensityMap,te=pt&&!!S.transmissionMap,ye=pt&&!!S.thicknessMap,Gt=!!S.gradientMap,at=!!S.alphaMap,w=S.alphaTest>0,ot=!!S.alphaHash,lt=!!S.extensions,Tt=!!I.attributes.uv1,yt=!!I.attributes.uv2,le=!!I.attributes.uv3;let ce=Sa;return S.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ce=e.toneMapping),{isWebGL2:f,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:zt,instancing:Nt,instancingColor:Nt&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:gt===null?e.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Xi,map:bt,matcap:Kt,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:B,aoMap:en,lightMap:xt,bumpMap:Lt,normalMap:dt,displacementMap:h&&ve,emissiveMap:It,normalMapObjectSpace:dt&&S.normalMapType===SE,normalMapTangentSpace:dt&&S.normalMapType===ix,metalnessMap:A,roughnessMap:M,anisotropy:G,anisotropyMap:ct,clearcoat:tt,clearcoatMap:ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:Ft,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:ie,sheen:et,sheenColorMap:Xt,sheenRoughnessMap:Ct,specularMap:vt,specularColorMap:ht,specularIntensityMap:Pt,transmission:pt,transmissionMap:te,thicknessMap:ye,gradientMap:Gt,opaque:S.transparent===!1&&S.blending===nr,alphaMap:at,alphaTest:w,alphaHash:ot,combine:S.combine,mapUv:bt&&v(S.map.channel),aoMapUv:en&&v(S.aoMap.channel),lightMapUv:xt&&v(S.lightMap.channel),bumpMapUv:Lt&&v(S.bumpMap.channel),normalMapUv:dt&&v(S.normalMap.channel),displacementMapUv:ve&&v(S.displacementMap.channel),emissiveMapUv:It&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:ct&&v(S.anisotropyMap.channel),clearcoatMapUv:ft&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Et&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&v(S.sheenRoughnessMap.channel),specularMapUv:vt&&v(S.specularMap.channel),specularColorMapUv:ht&&v(S.specularColorMap.channel),specularIntensityMapUv:Pt&&v(S.specularIntensityMap.channel),transmissionMapUv:te&&v(S.transmissionMap.channel),thicknessMapUv:ye&&v(S.thicknessMap.channel),alphaMapUv:at&&v(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:yt,vertexUv3s:le,pointsUvs:$.isPoints===!0&&!!I.attributes.uv&&(bt||at),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:it,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:ce,useLegacyLights:e._useLegacyLights,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:lt&&S.extensions.derivatives===!0,extensionFragDepth:lt&&S.extensions.fragDepth===!0,extensionDrawBuffers:lt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(E,S),_(E,S),E.push(e.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function x(S){const E=y[S.type];let P;if(E){const X=li[E];P=ZE.clone(X.uniforms)}else P=S.uniforms;return P}function C(S,E){let P;for(let X=0,$=c.length;X<$;X++){const D=c[X];if(D.cacheKey===E){P=D,++P.usedTimes;break}}return P===void 0&&(P=new c2(e,E,S,s),c.push(P)),P}function R(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:U}}function p2(){let e=new WeakMap;function t(s){let r=e.get(s);return r===void 0&&(r={},e.set(s,r)),r}function n(s){e.delete(s)}function i(s,r,o){e.get(s)[r]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function m2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Bg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ig(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,h,p,y,v,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function o(d,h,p,y,v,m){const u=r(d,h,p,y,v,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,h,p,y,v,m){const u=r(d,h,p,y,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||m2),i.length>1&&i.sort(h||Bg),a.length>1&&a.sort(h||Bg)}function f(){for(let d=t,h=e.length;d<h;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:f,sort:c}}function g2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Ig,e.set(i,[r])):a>=s.length?(r=new Ig,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function _2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new Qt};break;case"SpotLight":n={position:new z,direction:new z,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function v2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let x2=0;function y2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function S2(e,t){const n=new _2,i=v2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)a.probe.push(new z);const s=new z,r=new Ne,o=new Ne;function l(f,d){let h=0,p=0,y=0;for(let X=0;X<9;X++)a.probe[X].set(0,0,0);let v=0,m=0,u=0,g=0,_=0,x=0,C=0,R=0,T=0,U=0,S=0;f.sort(y2);const E=d===!0?Math.PI:1;for(let X=0,$=f.length;X<$;X++){const D=f[X],I=D.color,L=D.intensity,k=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*L*E,p+=I.g*L*E,y+=I.b*L*E;else if(D.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(D.sh.coefficients[j],L);S++}else if(D.isDirectionalLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const Y=D.shadow,nt=i.get(D);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,a.directionalShadow[v]=nt,a.directionalShadowMap[v]=B,a.directionalShadowMatrix[v]=D.shadow.matrix,x++}a.directional[v]=j,v++}else if(D.isSpotLight){const j=n.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(I).multiplyScalar(L*E),j.distance=k,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,a.spot[u]=j;const Y=D.shadow;if(D.map&&(a.spotLightMap[T]=D.map,T++,Y.updateMatrices(D),D.castShadow&&U++),a.spotLightMatrix[u]=Y.matrix,D.castShadow){const nt=i.get(D);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,a.spotShadow[u]=nt,a.spotShadowMap[u]=B,R++}u++}else if(D.isRectAreaLight){const j=n.get(D);j.color.copy(I).multiplyScalar(L),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),a.rectArea[g]=j,g++}else if(D.isPointLight){const j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Y=D.shadow,nt=i.get(D);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,nt.shadowCameraNear=Y.camera.near,nt.shadowCameraFar=Y.camera.far,a.pointShadow[m]=nt,a.pointShadowMap[m]=B,a.pointShadowMatrix[m]=D.shadow.matrix,C++}a.point[m]=j,m++}else if(D.isHemisphereLight){const j=n.get(D);j.skyColor.copy(D.color).multiplyScalar(L*E),j.groundColor.copy(D.groundColor).multiplyScalar(L*E),a.hemi[_]=j,_++}}g>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=st.LTC_FLOAT_1,a.rectAreaLTC2=st.LTC_FLOAT_2):(a.rectAreaLTC1=st.LTC_HALF_1,a.rectAreaLTC2=st.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=st.LTC_FLOAT_1,a.rectAreaLTC2=st.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=st.LTC_HALF_1,a.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=h,a.ambient[1]=p,a.ambient[2]=y;const P=a.hash;(P.directionalLength!==v||P.pointLength!==m||P.spotLength!==u||P.rectAreaLength!==g||P.hemiLength!==_||P.numDirectionalShadows!==x||P.numPointShadows!==C||P.numSpotShadows!==R||P.numSpotMaps!==T||P.numLightProbes!==S)&&(a.directional.length=v,a.spot.length=u,a.rectArea.length=g,a.point.length=m,a.hemi.length=_,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=R+T-U,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=S,P.directionalLength=v,P.pointLength=m,P.spotLength=u,P.rectAreaLength=g,P.hemiLength=_,P.numDirectionalShadows=x,P.numPointShadows=C,P.numSpotShadows=R,P.numSpotMaps=T,P.numLightProbes=S,a.version=x2++)}function c(f,d){let h=0,p=0,y=0,v=0,m=0;const u=d.matrixWorldInverse;for(let g=0,_=f.length;g<_;g++){const x=f[g];if(x.isDirectionalLight){const C=a.directional[h];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(x.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),y++}else if(x.isRectAreaLight){const C=a.rectArea[v];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),o.identity(),r.copy(x.matrixWorld),r.premultiply(u),o.extractRotation(r),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const C=a.point[p];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const C=a.hemi[m];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:a}}function Fg(e,t){const n=new S2(e,t),i=[],a=[];function s(){i.length=0,a.length=0}function r(d){i.push(d)}function o(d){a.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:n},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function M2(e,t){let n=new WeakMap;function i(s,r=0){const o=n.get(s);let l;return o===void 0?(l=new Fg(e,t),n.set(s,[l])):r>=o.length?(l=new Fg(e,t),o.push(l)):l=o[r],l}function a(){n=new WeakMap}return{get:i,dispose:a}}class E2 extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b2 extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const T2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
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
}`;function R2(e,t,n){let i=new Nd;const a=new Yt,s=new Yt,r=new ke,o=new E2({depthPacking:yE}),l=new b2,c={},f=n.maxTextureSize,d={[Ra]:vn,[vn]:Ra,[Di]:Di},h=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:T2,fragmentShader:A2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new ri;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gn(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let u=this.type;this.render=function(R,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=e.getRenderTarget(),E=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),X=e.state;X.setBlending(ya),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=u!==Ri&&this.type===Ri,D=u===Ri&&this.type!==Ri;for(let I=0,L=R.length;I<L;I++){const k=R[I],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const j=B.getFrameExtents();if(a.multiply(j),s.copy(B.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/j.x),a.x=s.x*j.x,B.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/j.y),a.y=s.y*j.y,B.mapSize.y=s.y)),B.map===null||$===!0||D===!0){const nt=this.type!==Ri?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new as(a.x,a.y,nt),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const Y=B.getViewportCount();for(let nt=0;nt<Y;nt++){const it=B.getViewport(nt);r.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),X.viewport(r),B.updateMatrices(k,nt),i=B.getFrustum(),x(T,U,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Ri&&g(B,U),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(S,E,P)};function g(R,T){const U=t.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new as(a.x,a.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(T,null,U,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(T,null,U,p,v,null)}function _(R,T,U,S){let E=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=U.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=E.uuid,$=T.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let I=D[$];I===void 0&&(I=E.clone(),D[$]=I,T.addEventListener("dispose",C)),E=I}if(E.visible=T.visible,E.wireframe=T.wireframe,S===Ri?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=e.properties.get(E);X.light=U}return E}function x(R,T,U,S,E){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const $=t.update(R),D=R.material;if(Array.isArray(D)){const I=$.groups;for(let L=0,k=I.length;L<k;L++){const B=I[L],j=D[B.materialIndex];if(j&&j.visible){const Y=_(R,j,S,E);R.onBeforeShadow(e,R,T,U,$,Y,B),e.renderBufferDirect(U,null,$,Y,R,B),R.onAfterShadow(e,R,T,U,$,Y,B)}}}else if(D.visible){const I=_(R,D,S,E);R.onBeforeShadow(e,R,T,U,$,I,null),e.renderBufferDirect(U,null,$,I,R,null),R.onAfterShadow(e,R,T,U,$,I,null)}}const X=R.children;for(let $=0,D=X.length;$<D;$++)x(X[$],T,U,S,E)}function C(R){R.target.removeEventListener("dispose",C);for(const U in c){const S=c[U],E=R.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function C2(e,t,n){const i=n.isWebGL2;function a(){let w=!1;const ot=new ke;let lt=null;const Tt=new ke(0,0,0,0);return{setMask:function(yt){lt!==yt&&!w&&(e.colorMask(yt,yt,yt,yt),lt=yt)},setLocked:function(yt){w=yt},setClear:function(yt,le,ce,Ie,nn){nn===!0&&(yt*=Ie,le*=Ie,ce*=Ie),ot.set(yt,le,ce,Ie),Tt.equals(ot)===!1&&(e.clearColor(yt,le,ce,Ie),Tt.copy(ot))},reset:function(){w=!1,lt=null,Tt.set(-1,0,0,0)}}}function s(){let w=!1,ot=null,lt=null,Tt=null;return{setTest:function(yt){yt?zt(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function(yt){ot!==yt&&!w&&(e.depthMask(yt),ot=yt)},setFunc:function(yt){if(lt!==yt){switch(yt){case ZM:e.depthFunc(e.NEVER);break;case KM:e.depthFunc(e.ALWAYS);break;case QM:e.depthFunc(e.LESS);break;case Mc:e.depthFunc(e.LEQUAL);break;case JM:e.depthFunc(e.EQUAL);break;case $M:e.depthFunc(e.GEQUAL);break;case tE:e.depthFunc(e.GREATER);break;case eE:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=yt}},setLocked:function(yt){w=yt},setClear:function(yt){Tt!==yt&&(e.clearDepth(yt),Tt=yt)},reset:function(){w=!1,ot=null,lt=null,Tt=null}}}function r(){let w=!1,ot=null,lt=null,Tt=null,yt=null,le=null,ce=null,Ie=null,nn=null;return{setTest:function(ue){w||(ue?zt(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(ue){ot!==ue&&!w&&(e.stencilMask(ue),ot=ue)},setFunc:function(ue,an,oi){(lt!==ue||Tt!==an||yt!==oi)&&(e.stencilFunc(ue,an,oi),lt=ue,Tt=an,yt=oi)},setOp:function(ue,an,oi){(le!==ue||ce!==an||Ie!==oi)&&(e.stencilOp(ue,an,oi),le=ue,ce=an,Ie=oi)},setLocked:function(ue){w=ue},setClear:function(ue){nn!==ue&&(e.clearStencil(ue),nn=ue)},reset:function(){w=!1,ot=null,lt=null,Tt=null,yt=null,le=null,ce=null,Ie=null,nn=null}}}const o=new a,l=new s,c=new r,f=new WeakMap,d=new WeakMap;let h={},p={},y=new WeakMap,v=[],m=null,u=!1,g=null,_=null,x=null,C=null,R=null,T=null,U=null,S=new Qt(0,0,0),E=0,P=!1,X=null,$=null,D=null,I=null,L=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=j>=2);let nt=null,it={};const q=e.getParameter(e.SCISSOR_BOX),K=e.getParameter(e.VIEWPORT),rt=new ke().fromArray(q),_t=new ke().fromArray(K);function gt(w,ot,lt,Tt){const yt=new Uint8Array(4),le=e.createTexture();e.bindTexture(w,le),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ce=0;ce<lt;ce++)i&&(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)?e.texImage3D(ot,0,e.RGBA,1,1,Tt,0,e.RGBA,e.UNSIGNED_BYTE,yt):e.texImage2D(ot+ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,yt);return le}const Nt={};Nt[e.TEXTURE_2D]=gt(e.TEXTURE_2D,e.TEXTURE_2D,1),Nt[e.TEXTURE_CUBE_MAP]=gt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[e.TEXTURE_2D_ARRAY]=gt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Nt[e.TEXTURE_3D]=gt(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(e.DEPTH_TEST),l.setFunc(Mc),It(!1),A(ym),zt(e.CULL_FACE),dt(ya);function zt(w){h[w]!==!0&&(e.enable(w),h[w]=!0)}function bt(w){h[w]!==!1&&(e.disable(w),h[w]=!1)}function Kt(w,ot){return p[w]!==ot?(e.bindFramebuffer(w,ot),p[w]=ot,i&&(w===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ot),w===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ot)),!0):!1}function F(w,ot){let lt=v,Tt=!1;if(w)if(lt=y.get(ot),lt===void 0&&(lt=[],y.set(ot,lt)),w.isWebGLMultipleRenderTargets){const yt=w.texture;if(lt.length!==yt.length||lt[0]!==e.COLOR_ATTACHMENT0){for(let le=0,ce=yt.length;le<ce;le++)lt[le]=e.COLOR_ATTACHMENT0+le;lt.length=yt.length,Tt=!0}}else lt[0]!==e.COLOR_ATTACHMENT0&&(lt[0]=e.COLOR_ATTACHMENT0,Tt=!0);else lt[0]!==e.BACK&&(lt[0]=e.BACK,Tt=!0);Tt&&(n.isWebGL2?e.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function en(w){return m!==w?(e.useProgram(w),m=w,!0):!1}const xt={[ka]:e.FUNC_ADD,[OM]:e.FUNC_SUBTRACT,[zM]:e.FUNC_REVERSE_SUBTRACT};if(i)xt[bm]=e.MIN,xt[Tm]=e.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(xt[bm]=w.MIN_EXT,xt[Tm]=w.MAX_EXT)}const Lt={[PM]:e.ZERO,[BM]:e.ONE,[IM]:e.SRC_COLOR,[vh]:e.SRC_ALPHA,[XM]:e.SRC_ALPHA_SATURATE,[VM]:e.DST_COLOR,[HM]:e.DST_ALPHA,[FM]:e.ONE_MINUS_SRC_COLOR,[xh]:e.ONE_MINUS_SRC_ALPHA,[kM]:e.ONE_MINUS_DST_COLOR,[GM]:e.ONE_MINUS_DST_ALPHA,[WM]:e.CONSTANT_COLOR,[qM]:e.ONE_MINUS_CONSTANT_COLOR,[jM]:e.CONSTANT_ALPHA,[YM]:e.ONE_MINUS_CONSTANT_ALPHA};function dt(w,ot,lt,Tt,yt,le,ce,Ie,nn,ue){if(w===ya){u===!0&&(bt(e.BLEND),u=!1);return}if(u===!1&&(zt(e.BLEND),u=!0),w!==NM){if(w!==g||ue!==P){if((_!==ka||R!==ka)&&(e.blendEquation(e.FUNC_ADD),_=ka,R=ka),ue)switch(w){case nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sm:e.blendFunc(e.ONE,e.ONE);break;case Mm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Em:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sm:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Mm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Em:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}x=null,C=null,T=null,U=null,S.set(0,0,0),E=0,g=w,P=ue}return}yt=yt||ot,le=le||lt,ce=ce||Tt,(ot!==_||yt!==R)&&(e.blendEquationSeparate(xt[ot],xt[yt]),_=ot,R=yt),(lt!==x||Tt!==C||le!==T||ce!==U)&&(e.blendFuncSeparate(Lt[lt],Lt[Tt],Lt[le],Lt[ce]),x=lt,C=Tt,T=le,U=ce),(Ie.equals(S)===!1||nn!==E)&&(e.blendColor(Ie.r,Ie.g,Ie.b,nn),S.copy(Ie),E=nn),g=w,P=!1}function ve(w,ot){w.side===Di?bt(e.CULL_FACE):zt(e.CULL_FACE);let lt=w.side===vn;ot&&(lt=!lt),It(lt),w.blending===nr&&w.transparent===!1?dt(ya):dt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),o.setMask(w.colorWrite);const Tt=w.stencilWrite;c.setTest(Tt),Tt&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),G(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?zt(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function It(w){X!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),X=w)}function A(w){w!==DM?(zt(e.CULL_FACE),w!==$&&(w===ym?e.cullFace(e.BACK):w===UM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),$=w}function M(w){w!==D&&(B&&e.lineWidth(w),D=w)}function G(w,ot,lt){w?(zt(e.POLYGON_OFFSET_FILL),(I!==ot||L!==lt)&&(e.polygonOffset(ot,lt),I=ot,L=lt)):bt(e.POLYGON_OFFSET_FILL)}function tt(w){w?zt(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function J(w){w===void 0&&(w=e.TEXTURE0+k-1),nt!==w&&(e.activeTexture(w),nt=w)}function et(w,ot,lt){lt===void 0&&(nt===null?lt=e.TEXTURE0+k-1:lt=nt);let Tt=it[lt];Tt===void 0&&(Tt={type:void 0,texture:void 0},it[lt]=Tt),(Tt.type!==w||Tt.texture!==ot)&&(nt!==lt&&(e.activeTexture(lt),nt=lt),e.bindTexture(w,ot||Nt[w]),Tt.type=w,Tt.texture=ot)}function pt(){const w=it[nt];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ct(){try{e.compressedTexImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ft(){try{e.compressedTexImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Et(){try{e.texSubImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ft(){try{e.texSubImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Xt(){try{e.texStorage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ct(){try{e.texStorage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function vt(){try{e.texImage2D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ht(){try{e.texImage3D.apply(e,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pt(w){rt.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),rt.copy(w))}function te(w){_t.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),_t.copy(w))}function ye(w,ot){let lt=d.get(ot);lt===void 0&&(lt=new WeakMap,d.set(ot,lt));let Tt=lt.get(w);Tt===void 0&&(Tt=e.getUniformBlockIndex(ot,w.name),lt.set(w,Tt))}function Gt(w,ot){const Tt=d.get(ot).get(w);f.get(ot)!==Tt&&(e.uniformBlockBinding(ot,Tt,w.__bindingPointIndex),f.set(ot,Tt))}function at(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},nt=null,it={},p={},y=new WeakMap,v=[],m=null,u=!1,g=null,_=null,x=null,C=null,R=null,T=null,U=null,S=new Qt(0,0,0),E=0,P=!1,X=null,$=null,D=null,I=null,L=null,rt.set(0,0,e.canvas.width,e.canvas.height),_t.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:zt,disable:bt,bindFramebuffer:Kt,drawBuffers:F,useProgram:en,setBlending:dt,setMaterial:ve,setFlipSided:It,setCullFace:A,setLineWidth:M,setPolygonOffset:G,setScissorTest:tt,activeTexture:J,bindTexture:et,unbindTexture:pt,compressedTexImage2D:ct,compressedTexImage3D:ft,texImage2D:vt,texImage3D:ht,updateUBOMapping:ye,uniformBlockBinding:Gt,texStorage2D:Xt,texStorage3D:Ct,texSubImage2D:Et,texSubImage3D:Ft,compressedTexSubImage2D:Q,compressedTexSubImage3D:ie,scissor:Pt,viewport:te,reset:at}}function w2(e,t,n,i,a,s,r){const o=a.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return p?new OffscreenCanvas(A,M):Rc("canvas")}function v(A,M,G,tt){let J=1;if((A.width>tt||A.height>tt)&&(J=tt/Math.max(A.width,A.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const et=M?Ah:Math.floor,pt=et(J*A.width),ct=et(J*A.height);d===void 0&&(d=y(pt,ct));const ft=G?y(pt,ct):d;return ft.width=pt,ft.height=ct,ft.getContext("2d").drawImage(A,0,0,pt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pt+"x"+ct+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return eg(A.width)&&eg(A.height)}function u(A){return o?!1:A.wrapS!==ii||A.wrapT!==ii||A.minFilter!==on&&A.minFilter!==Vn}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==on&&A.minFilter!==Vn}function _(A){e.generateMipmap(A)}function x(A,M,G,tt,J=!1){if(o===!1)return M;if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=M;if(M===e.RED&&(G===e.FLOAT&&(et=e.R32F),G===e.HALF_FLOAT&&(et=e.R16F),G===e.UNSIGNED_BYTE&&(et=e.R8)),M===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(et=e.R8UI),G===e.UNSIGNED_SHORT&&(et=e.R16UI),G===e.UNSIGNED_INT&&(et=e.R32UI),G===e.BYTE&&(et=e.R8I),G===e.SHORT&&(et=e.R16I),G===e.INT&&(et=e.R32I)),M===e.RG&&(G===e.FLOAT&&(et=e.RG32F),G===e.HALF_FLOAT&&(et=e.RG16F),G===e.UNSIGNED_BYTE&&(et=e.RG8)),M===e.RGBA){const pt=J?Ec:se.getTransfer(tt);G===e.FLOAT&&(et=e.RGBA32F),G===e.HALF_FLOAT&&(et=e.RGBA16F),G===e.UNSIGNED_BYTE&&(et=pt===de?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT_4_4_4_4&&(et=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(et=e.RGB5_A1)}return(et===e.R16F||et===e.R32F||et===e.RG16F||et===e.RG32F||et===e.RGBA16F||et===e.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(A,M,G){return g(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){return A===on||A===Am||A===Iu?e.NEAREST:e.LINEAR}function T(A){const M=A.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&f.delete(M)}function U(A){const M=A.target;M.removeEventListener("dispose",U),P(M)}function S(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,tt=h.get(G);if(tt){const J=tt[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(tt).length===0&&h.delete(G)}i.remove(A)}function E(A){const M=i.get(A);e.deleteTexture(M.__webglTexture);const G=A.source,tt=h.get(G);delete tt[M.__cacheKey],r.memory.textures--}function P(A){const M=A.texture,G=i.get(A),tt=i.get(M);if(tt.__webglTexture!==void 0&&(e.deleteTexture(tt.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(G.__webglFramebuffer[J]))for(let et=0;et<G.__webglFramebuffer[J].length;et++)e.deleteFramebuffer(G.__webglFramebuffer[J][et]);else e.deleteFramebuffer(G.__webglFramebuffer[J]);G.__webglDepthbuffer&&e.deleteRenderbuffer(G.__webglDepthbuffer[J])}else{if(Array.isArray(G.__webglFramebuffer))for(let J=0;J<G.__webglFramebuffer.length;J++)e.deleteFramebuffer(G.__webglFramebuffer[J]);else e.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&e.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&e.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let J=0;J<G.__webglColorRenderbuffer.length;J++)G.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);G.__webglDepthRenderbuffer&&e.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,et=M.length;J<et;J++){const pt=i.get(M[J]);pt.__webglTexture&&(e.deleteTexture(pt.__webglTexture),r.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(A)}let X=0;function $(){X=0}function D(){const A=X;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),X+=1,A}function I(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function L(A,M){const G=i.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(G,A,M);return}}n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+M)}function k(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){rt(G,A,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+M)}function B(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){rt(G,A,M);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+M)}function j(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){_t(G,A,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+M)}const Y={[Mh]:e.REPEAT,[ii]:e.CLAMP_TO_EDGE,[Eh]:e.MIRRORED_REPEAT},nt={[on]:e.NEAREST,[Am]:e.NEAREST_MIPMAP_NEAREST,[Iu]:e.NEAREST_MIPMAP_LINEAR,[Vn]:e.LINEAR,[uE]:e.LINEAR_MIPMAP_NEAREST,[Eo]:e.LINEAR_MIPMAP_LINEAR},it={[ME]:e.NEVER,[CE]:e.ALWAYS,[EE]:e.LESS,[ax]:e.LEQUAL,[bE]:e.EQUAL,[RE]:e.GEQUAL,[TE]:e.GREATER,[AE]:e.NOTEQUAL};function q(A,M,G){if(G?(e.texParameteri(A,e.TEXTURE_WRAP_S,Y[M.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Y[M.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Y[M.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,nt[M.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,nt[M.minFilter])):(e.texParameteri(A,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(A,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(M.wrapS!==ii||M.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(A,e.TEXTURE_MAG_FILTER,R(M.magFilter)),e.texParameteri(A,e.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==on&&M.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,it[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===on||M.minFilter!==Iu&&M.minFilter!==Eo||M.type===ua&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===bo&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(e.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const tt=M.source;let J=h.get(tt);J===void 0&&(J={},h.set(tt,J));const et=I(M);if(et!==A.__cacheKey){J[et]===void 0&&(J[et]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),J[et].usedTimes++;const pt=J[A.__cacheKey];pt!==void 0&&(J[A.__cacheKey].usedTimes--,pt.usedTimes===0&&E(M)),A.__cacheKey=et,A.__webglTexture=J[et].texture}return G}function rt(A,M,G){let tt=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=e.TEXTURE_3D);const J=K(A,M),et=M.source;n.bindTexture(tt,A.__webglTexture,e.TEXTURE0+G);const pt=i.get(et);if(et.version!==pt.__version||J===!0){n.activeTexture(e.TEXTURE0+G);const ct=se.getPrimaries(se.workingColorSpace),ft=M.colorSpace===jn?null:se.getPrimaries(M.colorSpace),Et=M.colorSpace===jn||ct===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ft=u(M)&&m(M.image)===!1;let Q=v(M.image,Ft,!1,a.maxTextureSize);Q=It(M,Q);const ie=m(Q)||o,Xt=s.convert(M.format,M.colorSpace);let Ct=s.convert(M.type),vt=x(M.internalFormat,Xt,Ct,M.colorSpace,M.isVideoTexture);q(tt,M,ie);let ht;const Pt=M.mipmaps,te=o&&M.isVideoTexture!==!0&&vt!==ex,ye=pt.__version===void 0||J===!0,Gt=C(M,Q,ie);if(M.isDepthTexture)vt=e.DEPTH_COMPONENT,o?M.type===ua?vt=e.DEPTH_COMPONENT32F:M.type===ca?vt=e.DEPTH_COMPONENT24:M.type===Ka?vt=e.DEPTH24_STENCIL8:vt=e.DEPTH_COMPONENT16:M.type===ua&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Qa&&vt===e.DEPTH_COMPONENT&&M.type!==Ld&&M.type!==ca&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ca,Ct=s.convert(M.type)),M.format===_r&&vt===e.DEPTH_COMPONENT&&(vt=e.DEPTH_STENCIL,M.type!==Ka&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ka,Ct=s.convert(M.type))),ye&&(te?n.texStorage2D(e.TEXTURE_2D,1,vt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,vt,Q.width,Q.height,0,Xt,Ct,null));else if(M.isDataTexture)if(Pt.length>0&&ie){te&&ye&&n.texStorage2D(e.TEXTURE_2D,Gt,vt,Pt[0].width,Pt[0].height);for(let at=0,w=Pt.length;at<w;at++)ht=Pt[at],te?n.texSubImage2D(e.TEXTURE_2D,at,0,0,ht.width,ht.height,Xt,Ct,ht.data):n.texImage2D(e.TEXTURE_2D,at,vt,ht.width,ht.height,0,Xt,Ct,ht.data);M.generateMipmaps=!1}else te?(ye&&n.texStorage2D(e.TEXTURE_2D,Gt,vt,Q.width,Q.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,Xt,Ct,Q.data)):n.texImage2D(e.TEXTURE_2D,0,vt,Q.width,Q.height,0,Xt,Ct,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&ye&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,vt,Pt[0].width,Pt[0].height,Q.depth);for(let at=0,w=Pt.length;at<w;at++)ht=Pt[at],M.format!==ai?Xt!==null?te?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,ht.width,ht.height,Q.depth,Xt,ht.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,at,vt,ht.width,ht.height,Q.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?n.texSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,ht.width,ht.height,Q.depth,Xt,Ct,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,at,vt,ht.width,ht.height,Q.depth,0,Xt,Ct,ht.data)}else{te&&ye&&n.texStorage2D(e.TEXTURE_2D,Gt,vt,Pt[0].width,Pt[0].height);for(let at=0,w=Pt.length;at<w;at++)ht=Pt[at],M.format!==ai?Xt!==null?te?n.compressedTexSubImage2D(e.TEXTURE_2D,at,0,0,ht.width,ht.height,Xt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,at,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?n.texSubImage2D(e.TEXTURE_2D,at,0,0,ht.width,ht.height,Xt,Ct,ht.data):n.texImage2D(e.TEXTURE_2D,at,vt,ht.width,ht.height,0,Xt,Ct,ht.data)}else if(M.isDataArrayTexture)te?(ye&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,vt,Q.width,Q.height,Q.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ct,Q.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,Q.width,Q.height,Q.depth,0,Xt,Ct,Q.data);else if(M.isData3DTexture)te?(ye&&n.texStorage3D(e.TEXTURE_3D,Gt,vt,Q.width,Q.height,Q.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ct,Q.data)):n.texImage3D(e.TEXTURE_3D,0,vt,Q.width,Q.height,Q.depth,0,Xt,Ct,Q.data);else if(M.isFramebufferTexture){if(ye)if(te)n.texStorage2D(e.TEXTURE_2D,Gt,vt,Q.width,Q.height);else{let at=Q.width,w=Q.height;for(let ot=0;ot<Gt;ot++)n.texImage2D(e.TEXTURE_2D,ot,vt,at,w,0,Xt,Ct,null),at>>=1,w>>=1}}else if(Pt.length>0&&ie){te&&ye&&n.texStorage2D(e.TEXTURE_2D,Gt,vt,Pt[0].width,Pt[0].height);for(let at=0,w=Pt.length;at<w;at++)ht=Pt[at],te?n.texSubImage2D(e.TEXTURE_2D,at,0,0,Xt,Ct,ht):n.texImage2D(e.TEXTURE_2D,at,vt,Xt,Ct,ht);M.generateMipmaps=!1}else te?(ye&&n.texStorage2D(e.TEXTURE_2D,Gt,vt,Q.width,Q.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Xt,Ct,Q)):n.texImage2D(e.TEXTURE_2D,0,vt,Xt,Ct,Q);g(M,ie)&&_(tt),pt.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _t(A,M,G){if(M.image.length!==6)return;const tt=K(A,M),J=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+G);const et=i.get(J);if(J.version!==et.__version||tt===!0){n.activeTexture(e.TEXTURE0+G);const pt=se.getPrimaries(se.workingColorSpace),ct=M.colorSpace===jn?null:se.getPrimaries(M.colorSpace),ft=M.colorSpace===jn||pt===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Et=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let at=0;at<6;at++)!Et&&!Ft?Q[at]=v(M.image[at],!1,!0,a.maxCubemapSize):Q[at]=Ft?M.image[at].image:M.image[at],Q[at]=It(M,Q[at]);const ie=Q[0],Xt=m(ie)||o,Ct=s.convert(M.format,M.colorSpace),vt=s.convert(M.type),ht=x(M.internalFormat,Ct,vt,M.colorSpace),Pt=o&&M.isVideoTexture!==!0,te=et.__version===void 0||tt===!0;let ye=C(M,ie,Xt);q(e.TEXTURE_CUBE_MAP,M,Xt);let Gt;if(Et){Pt&&te&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ye,ht,ie.width,ie.height);for(let at=0;at<6;at++){Gt=Q[at].mipmaps;for(let w=0;w<Gt.length;w++){const ot=Gt[w];M.format!==ai?Ct!==null?Pt?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w,0,0,ot.width,ot.height,Ct,ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w,ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w,0,0,ot.width,ot.height,Ct,vt,ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w,ht,ot.width,ot.height,0,Ct,vt,ot.data)}}}else{Gt=M.mipmaps,Pt&&te&&(Gt.length>0&&ye++,n.texStorage2D(e.TEXTURE_CUBE_MAP,ye,ht,Q[0].width,Q[0].height));for(let at=0;at<6;at++)if(Ft){Pt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Q[at].width,Q[at].height,Ct,vt,Q[at].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ht,Q[at].width,Q[at].height,0,Ct,vt,Q[at].data);for(let w=0;w<Gt.length;w++){const lt=Gt[w].image[at].image;Pt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w+1,0,0,lt.width,lt.height,Ct,vt,lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w+1,ht,lt.width,lt.height,0,Ct,vt,lt.data)}}else{Pt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ct,vt,Q[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ht,Ct,vt,Q[at]);for(let w=0;w<Gt.length;w++){const ot=Gt[w];Pt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w+1,0,0,Ct,vt,ot.image[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,w+1,ht,Ct,vt,ot.image[at])}}}g(M,Xt)&&_(e.TEXTURE_CUBE_MAP),et.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function gt(A,M,G,tt,J,et){const pt=s.convert(G.format,G.colorSpace),ct=s.convert(G.type),ft=x(G.internalFormat,pt,ct,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Ft=Math.max(1,M.width>>et),Q=Math.max(1,M.height>>et);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,et,ft,Ft,Q,M.depth,0,pt,ct,null):n.texImage2D(J,et,ft,Ft,Q,0,pt,ct,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),dt(M)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,J,i.get(G).__webglTexture,0,Lt(M)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,tt,J,i.get(G).__webglTexture,et),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(A,M,G){if(e.bindRenderbuffer(e.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let tt=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(G||dt(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===ua?tt=e.DEPTH_COMPONENT32F:J.type===ca&&(tt=e.DEPTH_COMPONENT24));const et=Lt(M);dt(M)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et,tt,M.width,M.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,et,tt,M.width,M.height)}else e.renderbufferStorage(e.RENDERBUFFER,tt,M.width,M.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const tt=Lt(M);G&&dt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,tt,e.DEPTH24_STENCIL8,M.width,M.height):dt(M)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,tt,e.DEPTH24_STENCIL8,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,A)}else{const tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<tt.length;J++){const et=tt[J],pt=s.convert(et.format,et.colorSpace),ct=s.convert(et.type),ft=x(et.internalFormat,pt,ct,et.colorSpace),Et=Lt(M);G&&dt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Et,ft,M.width,M.height):dt(M)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Et,ft,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,ft,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const tt=i.get(M.depthTexture).__webglTexture,J=Lt(M);if(M.depthTexture.format===Qa)dt(M)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(M.depthTexture.format===_r)dt(M)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");zt(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=e.createRenderbuffer(),Nt(M.__webglDepthbuffer[tt],A,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=e.createRenderbuffer(),Nt(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Kt(A,M,G){const tt=i.get(A);M!==void 0&&gt(tt.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&bt(A)}function F(A){const M=A.texture,G=i.get(A),tt=i.get(M);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=e.createTexture()),tt.__version=M.version,r.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,pt=m(A)||o;if(J){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let ft=0;ft<M.mipmaps.length;ft++)G.__webglFramebuffer[ct][ft]=e.createFramebuffer()}else G.__webglFramebuffer[ct]=e.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)G.__webglFramebuffer[ct]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(et)if(a.drawBuffers){const ct=A.texture;for(let ft=0,Et=ct.length;ft<Et;ft++){const Ft=i.get(ct[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=e.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&dt(A)===!1){const ct=et?M:[M];G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<ct.length;ft++){const Et=ct[ft];G.__webglColorRenderbuffer[ft]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Ft=s.convert(Et.format,Et.colorSpace),Q=s.convert(Et.type),ie=x(Et.internalFormat,Ft,Q,Et.colorSpace,A.isXRRenderTarget===!0),Xt=Lt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Xt,ie,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),Nt(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){n.bindTexture(e.TEXTURE_CUBE_MAP,tt.__webglTexture),q(e.TEXTURE_CUBE_MAP,M,pt);for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)gt(G.__webglFramebuffer[ct][ft],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else gt(G.__webglFramebuffer[ct],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(M,pt)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(et){const ct=A.texture;for(let ft=0,Et=ct.length;ft<Et;ft++){const Ft=ct[ft],Q=i.get(Ft);n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),q(e.TEXTURE_2D,Ft,pt),gt(G.__webglFramebuffer,A,Ft,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,0),g(Ft,pt)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let ct=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ct=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ct,tt.__webglTexture),q(ct,M,pt),o&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)gt(G.__webglFramebuffer[ft],A,M,e.COLOR_ATTACHMENT0,ct,ft);else gt(G.__webglFramebuffer,A,M,e.COLOR_ATTACHMENT0,ct,0);g(M,pt)&&_(ct),n.unbindTexture()}A.depthBuffer&&bt(A)}function en(A){const M=m(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,J=G.length;tt<J;tt++){const et=G[tt];if(g(et,M)){const pt=A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ct=i.get(et).__webglTexture;n.bindTexture(pt,ct),_(pt),n.unbindTexture()}}}function xt(A){if(o&&A.samples>0&&dt(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,tt=A.height;let J=e.COLOR_BUFFER_BIT;const et=[],pt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=i.get(A),ft=A.isWebGLMultipleRenderTargets===!0;if(ft)for(let Et=0;Et<M.length;Et++)n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){et.push(e.COLOR_ATTACHMENT0+Et),A.depthBuffer&&et.push(pt);const Ft=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ft===!1&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),ft&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]),Ft===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[pt]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[pt])),ft){const Q=i.get(M[Et]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,G,tt,0,0,G,tt,J,e.NEAREST),c&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,et)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ft)for(let Et=0;Et<M.length;Et++){n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]);const Ft=i.get(M[Et]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,Ft,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Lt(A){return Math.min(a.maxSamples,A.samples)}function dt(A){const M=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(A){const M=r.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function It(A,M){const G=A.colorSpace,tt=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===bh||G!==Xi&&G!==jn&&(se.getTransfer(G)===de?o===!1?t.has("EXT_sRGB")===!0&&tt===ai?(A.format=bh,A.minFilter=Vn,A.generateMipmaps=!1):M=rx.sRGBToLinear(M):(tt!==ai||J!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=L,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=Kt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt}function L2(e,t,n){const i=n.isWebGL2;function a(s,r=jn){let o;const l=se.getTransfer(r);if(s===Ma)return e.UNSIGNED_BYTE;if(s===Kv)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Qv)return e.UNSIGNED_SHORT_5_5_5_1;if(s===fE)return e.BYTE;if(s===hE)return e.SHORT;if(s===Ld)return e.UNSIGNED_SHORT;if(s===Zv)return e.INT;if(s===ca)return e.UNSIGNED_INT;if(s===ua)return e.FLOAT;if(s===bo)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===dE)return e.ALPHA;if(s===ai)return e.RGBA;if(s===pE)return e.LUMINANCE;if(s===mE)return e.LUMINANCE_ALPHA;if(s===Qa)return e.DEPTH_COMPONENT;if(s===_r)return e.DEPTH_STENCIL;if(s===bh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===gE)return e.RED;if(s===Jv)return e.RED_INTEGER;if(s===_E)return e.RG;if(s===$v)return e.RG_INTEGER;if(s===tx)return e.RGBA_INTEGER;if(s===Fu||s===Hu||s===Gu||s===Vu)if(l===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rm||s===Cm||s===wm||s===Lm)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Rm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ex)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dm||s===Um)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Dm)return l===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Um)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nm||s===Om||s===zm||s===Pm||s===Bm||s===Im||s===Fm||s===Hm||s===Gm||s===Vm||s===km||s===Xm||s===Wm||s===qm)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Nm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Om)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Im)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===km)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qm)return l===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ku||s===jm||s===Ym)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ku)return l===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ym)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vE||s===Zm||s===Km||s===Qm)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ku)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Km)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ka?i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[s]!==void 0?e[s]:null}return{convert:a}}class D2 extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cl extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U2={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Cl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class N2 extends Rr{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,y=null;const v=n.getContextAttributes();let m=null,u=null;const g=[],_=[],x=new Yt;let C=null;const R=new kn;R.layers.enable(1),R.viewport=new ke;const T=new kn;T.layers.enable(2),T.viewport=new ke;const U=[R,T],S=new D2;S.layers.enable(1),S.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=g[q];return K===void 0&&(K=new mf,g[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=g[q];return K===void 0&&(K=new mf,g[q]=K),K.getGripSpace()},this.getHand=function(q){let K=g[q];return K===void 0&&(K=new mf,g[q]=K),K.getHandSpace()};function X(q){const K=_.indexOf(q.inputSource);if(K===-1)return;const rt=g[K];rt!==void 0&&(rt.update(q.inputSource,q.frame,c||r),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",D);for(let q=0;q<g.length;q++){const K=_[q];K!==null&&(_[q]=null,g[q].disconnect(K))}E=null,P=null,t.setRenderTarget(m),p=null,h=null,d=null,a=null,u=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",$),a.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(x),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,K),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new as(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Ma,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,rt=null,_t=null;v.depth&&(_t=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=v.stencil?_r:Qa,rt=v.stencil?Ka:ca);const gt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:s};d=new XRWebGLBinding(a,n),h=d.createProjectionLayer(gt),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),u=new as(h.textureWidth,h.textureHeight,{format:ai,type:Ma,depthTexture:new xx(h.textureWidth,h.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Nt=t.properties.get(u);Nt.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function D(q){for(let K=0;K<q.removed.length;K++){const rt=q.removed[K],_t=_.indexOf(rt);_t>=0&&(_[_t]=null,g[_t].disconnect(rt))}for(let K=0;K<q.added.length;K++){const rt=q.added[K];let _t=_.indexOf(rt);if(_t===-1){for(let Nt=0;Nt<g.length;Nt++)if(Nt>=_.length){_.push(rt),_t=Nt;break}else if(_[Nt]===null){_[Nt]=rt,_t=Nt;break}if(_t===-1)break}const gt=g[_t];gt&&gt.connect(rt)}}const I=new z,L=new z;function k(q,K,rt){I.setFromMatrixPosition(K.matrixWorld),L.setFromMatrixPosition(rt.matrixWorld);const _t=I.distanceTo(L),gt=K.projectionMatrix.elements,Nt=rt.projectionMatrix.elements,zt=gt[14]/(gt[10]-1),bt=gt[14]/(gt[10]+1),Kt=(gt[9]+1)/gt[5],F=(gt[9]-1)/gt[5],en=(gt[8]-1)/gt[0],xt=(Nt[8]+1)/Nt[0],Lt=zt*en,dt=zt*xt,ve=_t/(-en+xt),It=ve*-en;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=zt+ve,M=bt+ve,G=Lt-It,tt=dt+(_t-It),J=Kt*bt/M*A,et=F*bt/M*A;q.projectionMatrix.makePerspective(G,tt,J,et,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function B(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;S.near=T.near=R.near=q.near,S.far=T.far=R.far=q.far,(E!==S.near||P!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,P=S.far);const K=q.parent,rt=S.cameras;B(S,K);for(let _t=0;_t<rt.length;_t++)B(rt[_t],K);rt.length===2?k(S,R,T):S.projectionMatrix.copy(R.projectionMatrix),j(q,S,K)};function j(q,K,rt){rt===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Th*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let Y=null;function nt(q,K){if(f=K.getViewerPose(c||r),y=K,f!==null){const rt=f.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let _t=!1;rt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let gt=0;gt<rt.length;gt++){const Nt=rt[gt];let zt=null;if(p!==null)zt=p.getViewport(Nt);else{const Kt=d.getViewSubImage(h,Nt);zt=Kt.viewport,gt===0&&(t.setRenderTargetTextures(u,Kt.colorTexture,h.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(u))}let bt=U[gt];bt===void 0&&(bt=new kn,bt.layers.enable(gt),bt.viewport=new ke,U[gt]=bt),bt.matrix.fromArray(Nt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Nt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(zt.x,zt.y,zt.width,zt.height),gt===0&&(S.matrix.copy(bt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(bt)}}for(let rt=0;rt<g.length;rt++){const _t=_[rt],gt=g[rt];_t!==null&&gt!==void 0&&gt.update(_t,K,c||r)}Y&&Y(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),y=null}const it=new _x;it.setAnimationLoop(nt),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}}function O2(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,px(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===vn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===vn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const _=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===vn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function z2(e,t,n,i){let a={},s={},r=[];const o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function c(g,_){let x=a[g.id];x===void 0&&(y(g),x=f(g),a[g.id]=x,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const R=t.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function f(g){const _=d();g.__bindingPointIndex=_;const x=e.createBuffer(),C=g.__size,R=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,C,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,x),x}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=a[g.id],x=g.uniforms,C=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,T=x.length;R<T;R++){const U=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,E=U.length;S<E;S++){const P=U[S];if(p(P,R,S,C)===!0){const X=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let I=0;I<$.length;I++){const L=$[I],k=v(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,e.bufferSubData(e.UNIFORM_BUFFER,X+D,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,D),D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,x,C){const R=g.value,T=_+"_"+x;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const U=C[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function y(g){const _=g.uniforms;let x=0;const C=16;for(let T=0,U=_.length;T<U;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,P=S.length;E<P;E++){const X=S[E],$=Array.isArray(X.value)?X.value:[X.value];for(let D=0,I=$.length;D<I;D++){const L=$[D],k=v(L),B=x%C;B!==0&&C-B<k.boundary&&(x+=C-B),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=k.storage}}}const R=x%C;return R>0&&(x+=C-R),g.__size=x,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}class Tx{constructor(t={}){const{canvas:n=LE(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=r;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=Sa,this.toneMappingExposure=1;const _=this;let x=!1,C=0,R=0,T=null,U=-1,S=null;const E=new ke,P=new ke;let X=null;const $=new Qt(0);let D=0,I=n.width,L=n.height,k=1,B=null,j=null;const Y=new ke(0,0,I,L),nt=new ke(0,0,I,L);let it=!1;const q=new Nd;let K=!1,rt=!1,_t=null;const gt=new Ne,Nt=new Yt,zt=new z,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return T===null?k:1}let F=i;function en(b,O){for(let V=0;V<b.length;V++){const W=b[V],H=n.getContext(W,O);if(H!==null)return H}return null}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wd}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",w,!1),n.addEventListener("webglcontextcreationerror",ot,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),F=en(O,b),F===null)throw en(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,Lt,dt,ve,It,A,M,G,tt,J,et,pt,ct,ft,Et,Ft,Q,ie,Xt,Ct,vt,ht,Pt,te;function ye(){xt=new WA(F),Lt=new FA(F,xt,t),xt.init(Lt),ht=new L2(F,xt,Lt),dt=new C2(F,xt,Lt),ve=new YA(F),It=new p2,A=new w2(F,xt,dt,It,Lt,ht,ve),M=new GA(_),G=new XA(_),tt=new nb(F,Lt),Pt=new BA(F,xt,tt,Lt),J=new qA(F,tt,ve,Pt),et=new JA(F,J,tt,ve),Xt=new QA(F,Lt,A),Ft=new HA(It),pt=new d2(_,M,G,xt,Lt,Pt,Ft),ct=new O2(_,It),ft=new g2,Et=new M2(xt,Lt),ie=new PA(_,M,G,dt,et,h,l),Q=new R2(_,et,Lt),te=new z2(F,ve,Lt,dt),Ct=new IA(F,xt,ve,Lt),vt=new jA(F,xt,ve,Lt),ve.programs=pt.programs,_.capabilities=Lt,_.extensions=xt,_.properties=It,_.renderLists=ft,_.shadowMap=Q,_.state=dt,_.info=ve}ye();const Gt=new N2(_,F);this.xr=Gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(I,L,!1))},this.getSize=function(b){return b.set(I,L)},this.setSize=function(b,O,V=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,L=O,n.width=Math.floor(b*k),n.height=Math.floor(O*k),V===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(I*k,L*k).floor()},this.setDrawingBufferSize=function(b,O,V){I=b,L=O,k=V,n.width=Math.floor(b*V),n.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,O,V,W){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,O,V,W),dt.viewport(E.copy(Y).multiplyScalar(k).floor())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,O,V,W){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,O,V,W),dt.scissor(P.copy(nt).multiplyScalar(k).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){dt.setScissorTest(it=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(b=!0,O=!0,V=!0){let W=0;if(b){let H=!1;if(T!==null){const ut=T.texture.format;H=ut===tx||ut===$v||ut===Jv}if(H){const ut=T.texture.type,mt=ut===Ma||ut===ca||ut===Ld||ut===Ka||ut===Kv||ut===Qv,St=ie.getClearColor(),Rt=ie.getClearAlpha(),Ht=St.r,Dt=St.g,Ot=St.b;mt?(p[0]=Ht,p[1]=Dt,p[2]=Ot,p[3]=Rt,F.clearBufferuiv(F.COLOR,0,p)):(y[0]=Ht,y[1]=Dt,y[2]=Ot,y[3]=Rt,F.clearBufferiv(F.COLOR,0,y))}else W|=F.COLOR_BUFFER_BIT}O&&(W|=F.DEPTH_BUFFER_BIT),V&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",w,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),Et.dispose(),It.dispose(),M.dispose(),G.dispose(),et.dispose(),Pt.dispose(),te.dispose(),pt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",nn),Gt.removeEventListener("sessionend",ue),_t&&(_t.dispose(),_t=null),an.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=ve.autoReset,O=Q.enabled,V=Q.autoUpdate,W=Q.needsUpdate,H=Q.type;ye(),ve.autoReset=b,Q.enabled=O,Q.autoUpdate=V,Q.needsUpdate=W,Q.type=H}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const O=b.target;O.removeEventListener("dispose",lt),Tt(O)}function Tt(b){yt(b),It.remove(b)}function yt(b){const O=It.get(b).programs;O!==void 0&&(O.forEach(function(V){pt.releaseProgram(V)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,W,H,ut){O===null&&(O=bt);const mt=H.isMesh&&H.matrixWorld.determinant()<0,St=Cx(b,O,V,W,H);dt.setMaterial(W,mt);let Rt=V.index,Ht=1;if(W.wireframe===!0){if(Rt=J.getWireframeAttribute(V),Rt===void 0)return;Ht=2}const Dt=V.drawRange,Ot=V.attributes.position;let be=Dt.start*Ht,Sn=(Dt.start+Dt.count)*Ht;ut!==null&&(be=Math.max(be,ut.start*Ht),Sn=Math.min(Sn,(ut.start+ut.count)*Ht)),Rt!==null?(be=Math.max(be,0),Sn=Math.min(Sn,Rt.count)):Ot!=null&&(be=Math.max(be,0),Sn=Math.min(Sn,Ot.count));const Fe=Sn-be;if(Fe<0||Fe===1/0)return;Pt.setup(H,W,St,V,Rt);let gi,xe=Ct;if(Rt!==null&&(gi=tt.get(Rt),xe=vt,xe.setIndex(gi)),H.isMesh)W.wireframe===!0?(dt.setLineWidth(W.wireframeLinewidth*Kt()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(H.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),dt.setLineWidth(Vt*Kt()),H.isLineSegments?xe.setMode(F.LINES):H.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else H.isPoints?xe.setMode(F.POINTS):H.isSprite&&xe.setMode(F.TRIANGLES);if(H.isBatchedMesh)xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)xe.renderInstances(be,Fe,H.count);else if(V.isInstancedBufferGeometry){const Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Qc=Math.min(V.instanceCount,Vt);xe.renderInstances(be,Fe,Qc)}else xe.render(be,Fe)};function le(b,O,V){b.transparent===!0&&b.side===Di&&b.forceSinglePass===!1?(b.side=vn,b.needsUpdate=!0,ko(b,O,V),b.side=Ra,b.needsUpdate=!0,ko(b,O,V),b.side=Di):ko(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),m=Et.get(V),m.init(),g.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),b!==V&&b.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return b.traverse(function(H){const ut=H.material;if(ut)if(Array.isArray(ut))for(let mt=0;mt<ut.length;mt++){const St=ut[mt];le(St,V,H),W.add(St)}else le(ut,V,H),W.add(ut)}),g.pop(),m=null,W},this.compileAsync=function(b,O,V=null){const W=this.compile(b,O,V);return new Promise(H=>{function ut(){if(W.forEach(function(mt){It.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){H(b);return}setTimeout(ut,10)}xt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ce=null;function Ie(b){ce&&ce(b)}function nn(){an.stop()}function ue(){an.start()}const an=new _x;an.setAnimationLoop(Ie),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(b){ce=b,Gt.setAnimationLoop(b),b===null?an.stop():an.start()},Gt.addEventListener("sessionstart",nn),Gt.addEventListener("sessionend",ue),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,T),m=Et.get(b,g.length),m.init(),g.push(m),gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(gt),rt=this.localClippingEnabled,K=Ft.init(this.clippingPlanes,rt),v=ft.get(b,u.length),v.init(),u.push(v),oi(b,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(B,j),this.info.render.frame++,K===!0&&Ft.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,b,O),K===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(v,b),m.setupLights(_._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let H=0,ut=W.length;H<ut;H++){const mt=W[H];Hd(v,b,mt,mt.viewport)}}else Hd(v,b,O);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,O),Pt.resetDefaultState(),U=-1,S=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function oi(b,O,V,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const mt=et.update(b),St=b.material;St.visible&&v.push(b,mt,St,V,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const mt=et.update(b),St=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),zt.copy(mt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(St)){const Rt=mt.groups;for(let Ht=0,Dt=Rt.length;Ht<Dt;Ht++){const Ot=Rt[Ht],be=St[Ot.materialIndex];be&&be.visible&&v.push(b,mt,be,V,zt.z,Ot)}}else St.visible&&v.push(b,mt,St,V,zt.z,null)}}const ut=b.children;for(let mt=0,St=ut.length;mt<St;mt++)oi(ut[mt],O,V,W)}function Hd(b,O,V,W){const H=b.opaque,ut=b.transmissive,mt=b.transparent;m.setupLightsView(V),K===!0&&Ft.setGlobalState(_.clippingPlanes,V),ut.length>0&&Rx(H,ut,O,V),W&&dt.viewport(E.copy(W)),H.length>0&&Vo(H,O,V),ut.length>0&&Vo(ut,O,V),mt.length>0&&Vo(mt,O,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Rx(b,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ut=Lt.isWebGL2;_t===null&&(_t=new as(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?bo:Ma,minFilter:Eo,samples:ut?4:0})),_.getDrawingBufferSize(Nt),ut?_t.setSize(Nt.x,Nt.y):_t.setSize(Ah(Nt.x),Ah(Nt.y));const mt=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor($),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const St=_.toneMapping;_.toneMapping=Sa,Vo(b,V,W),A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t);let Rt=!1;for(let Ht=0,Dt=O.length;Ht<Dt;Ht++){const Ot=O[Ht],be=Ot.object,Sn=Ot.geometry,Fe=Ot.material,gi=Ot.group;if(Fe.side===Di&&be.layers.test(W.layers)){const xe=Fe.side;Fe.side=vn,Fe.needsUpdate=!0,Gd(be,V,W,Sn,Fe,gi),Fe.side=xe,Fe.needsUpdate=!0,Rt=!0}}Rt===!0&&(A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t)),_.setRenderTarget(mt),_.setClearColor($,D),_.toneMapping=St}function Vo(b,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ut=b.length;H<ut;H++){const mt=b[H],St=mt.object,Rt=mt.geometry,Ht=W===null?mt.material:W,Dt=mt.group;St.layers.test(V.layers)&&Gd(St,O,V,Rt,Ht,Dt)}}function Gd(b,O,V,W,H,ut){b.onBeforeRender(_,O,V,W,H,ut),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(_,O,V,W,b,ut),H.transparent===!0&&H.side===Di&&H.forceSinglePass===!1?(H.side=vn,H.needsUpdate=!0,_.renderBufferDirect(V,O,W,H,b,ut),H.side=Ra,H.needsUpdate=!0,_.renderBufferDirect(V,O,W,H,b,ut),H.side=Di):_.renderBufferDirect(V,O,W,H,b,ut),b.onAfterRender(_,O,V,W,H,ut)}function ko(b,O,V){O.isScene!==!0&&(O=bt);const W=It.get(b),H=m.state.lights,ut=m.state.shadowsArray,mt=H.state.version,St=pt.getParameters(b,H.state,ut,O,V),Rt=pt.getProgramCacheKey(St);let Ht=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||W.environment),Ht===void 0&&(b.addEventListener("dispose",lt),Ht=new Map,W.programs=Ht);let Dt=Ht.get(Rt);if(Dt!==void 0){if(W.currentProgram===Dt&&W.lightsStateVersion===mt)return kd(b,St),Dt}else St.uniforms=pt.getUniforms(b),b.onBuild(V,St,_),b.onBeforeCompile(St,_),Dt=pt.acquireProgram(St,Rt),Ht.set(Rt,Dt),W.uniforms=St.uniforms;const Ot=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Ft.uniform),kd(b,St),W.needsLights=Lx(b),W.lightsStateVersion=mt,W.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.directionalShadowMap.value=H.state.directionalShadowMap,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotShadowMap.value=H.state.spotShadowMap,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMap.value=H.state.pointShadowMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Dt,W.uniformsList=null,Dt}function Vd(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ql.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function kd(b,O){const V=It.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Cx(b,O,V,W,H){O.isScene!==!0&&(O=bt),A.resetTextureUnits();const ut=O.fog,mt=W.isMeshStandardMaterial?O.environment:null,St=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,Rt=(W.isMeshStandardMaterial?G:M).get(W.envMap||mt),Ht=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Dt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ot=!!V.morphAttributes.position,be=!!V.morphAttributes.normal,Sn=!!V.morphAttributes.color;let Fe=Sa;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Fe=_.toneMapping);const gi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=gi!==void 0?gi.length:0,Vt=It.get(W),Qc=m.state.lights;if(K===!0&&(rt===!0||b!==S)){const Pn=b===S&&W.id===U;Ft.setState(W,b,Pn)}let Se=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Qc.state.version||Vt.outputColorSpace!==St||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||Vt.envMap!==Rt||W.fog===!0&&Vt.fog!==ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ft.numPlanes||Vt.numIntersection!==Ft.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Dt||Vt.morphTargets!==Ot||Vt.morphNormals!==be||Vt.morphColors!==Sn||Vt.toneMapping!==Fe||Lt.isWebGL2===!0&&Vt.morphTargetsCount!==xe)&&(Se=!0):(Se=!0,Vt.__version=W.version);let La=Vt.currentProgram;Se===!0&&(La=ko(W,O,H));let Xd=!1,wr=!1,Jc=!1;const Qe=La.getUniforms(),Da=Vt.uniforms;if(dt.useProgram(La.program)&&(Xd=!0,wr=!0,Jc=!0),W.id!==U&&(U=W.id,wr=!0),Xd||S!==b){Qe.setValue(F,"projectionMatrix",b.projectionMatrix),Qe.setValue(F,"viewMatrix",b.matrixWorldInverse);const Pn=Qe.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,zt.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Qe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Qe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,wr=!0,Jc=!0)}if(H.isSkinnedMesh){Qe.setOptional(F,H,"bindMatrix"),Qe.setOptional(F,H,"bindMatrixInverse");const Pn=H.skeleton;Pn&&(Lt.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Qe.setValue(F,"boneTexture",Pn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Qe.setOptional(F,H,"batchingTexture"),Qe.setValue(F,"batchingTexture",H._matricesTexture,A));const $c=V.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0&&Lt.isWebGL2===!0)&&Xt.update(H,V,La),(wr||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Qe.setValue(F,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Da.envMap.value=Rt,Da.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),wr&&(Qe.setValue(F,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&wx(Da,Jc),ut&&W.fog===!0&&ct.refreshFogUniforms(Da,ut),ct.refreshMaterialUniforms(Da,W,k,L,_t),ql.upload(F,Vd(Vt),Da,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ql.upload(F,Vd(Vt),Da,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Qe.setValue(F,"center",H.center),Qe.setValue(F,"modelViewMatrix",H.modelViewMatrix),Qe.setValue(F,"normalMatrix",H.normalMatrix),Qe.setValue(F,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pn=W.uniformsGroups;for(let tu=0,Dx=Pn.length;tu<Dx;tu++)if(Lt.isWebGL2){const Wd=Pn[tu];te.update(Wd,La),te.bind(Wd,La)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return La}function wx(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Lx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,V){It.get(b.texture).__webglTexture=O,It.get(b.depthTexture).__webglTexture=V;const W=It.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const V=It.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){T=b,C=O,R=V;let W=!0,H=null,ut=!1,mt=!1;if(b){const Rt=It.get(b);Rt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Rt.__webglFramebuffer===void 0?A.setupRenderTarget(b):Rt.__hasExternalTextures&&A.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);const Dt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?H=Dt[O][V]:H=Dt[O],ut=!0):Lt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?H=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[V]:H=Dt,E.copy(b.viewport),P.copy(b.scissor),X=b.scissorTest}else E.copy(Y).multiplyScalar(k).floor(),P.copy(nt).multiplyScalar(k).floor(),X=it;if(dt.bindFramebuffer(F.FRAMEBUFFER,H)&&Lt.drawBuffers&&W&&dt.drawBuffers(b,H),dt.viewport(E),dt.scissor(P),dt.setScissorTest(X),ut){const Rt=It.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,V)}else if(mt){const Rt=It.get(b.texture),Ht=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Ht)}U=-1},this.readRenderTargetPixels=function(b,O,V,W,H,ut,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){dt.bindFramebuffer(F.FRAMEBUFFER,St);try{const Rt=b.texture,Ht=Rt.format,Dt=Rt.type;if(Ht!==ai&&ht.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Dt===bo&&(xt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Dt!==Ma&&ht.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===ua&&(Lt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&V>=0&&V<=b.height-H&&F.readPixels(O,V,W,H,ht.convert(Ht),ht.convert(Dt),ut)}finally{const Rt=T!==null?It.get(T).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(b,O,V=0){const W=Math.pow(2,-V),H=Math.floor(O.image.width*W),ut=Math.floor(O.image.height*W);A.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,b.x,b.y,H,ut),dt.unbindTexture()},this.copyTextureToTexture=function(b,O,V,W=0){const H=O.image.width,ut=O.image.height,mt=ht.convert(V.format),St=ht.convert(V.type);A.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,b.x,b.y,H,ut,mt,St,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,mt,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,b.x,b.y,mt,St,O.image),W===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=b.max.x-b.min.x+1,mt=b.max.y-b.min.y+1,St=b.max.z-b.min.z+1,Rt=ht.convert(W.format),Ht=ht.convert(W.type);let Dt;if(W.isData3DTexture)A.setTexture3D(W,0),Dt=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ot=F.getParameter(F.UNPACK_ROW_LENGTH),be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Sn=F.getParameter(F.UNPACK_SKIP_PIXELS),Fe=F.getParameter(F.UNPACK_SKIP_ROWS),gi=F.getParameter(F.UNPACK_SKIP_IMAGES),xe=V.isCompressedTexture?V.mipmaps[H]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(Dt,H,O.x,O.y,O.z,ut,mt,St,Rt,Ht,xe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,H,O.x,O.y,O.z,ut,mt,St,Rt,xe.data)):F.texSubImage3D(Dt,H,O.x,O.y,O.z,ut,mt,St,Rt,Ht,xe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,gi),H===0&&W.generateMipmaps&&F.generateMipmap(Dt),dt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,dt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Dd?"display-p3":"srgb",n.unpackColorSpace=se.workingColorSpace===Yc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Ja:nx}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ja?qe:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class P2 extends Tx{}P2.prototype.isWebGL1Renderer=!0;class B2 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class zd extends ri{constructor(t=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);const s=[],r=[],o=[],l=[],c=new z,f=new Yt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const p=i+d/n*a;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(r[h]/t+1)/2,f.y=(r[h+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zd(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pd extends ri{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const f=[],d=[],h=[],p=[];let y=0;const v=[],m=i/2;let u=0;g(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(p,2));function g(){const x=new z,C=new z;let R=0;const T=(n-t)/i;for(let U=0;U<=s;U++){const S=[],E=U/s,P=E*(n-t)+t;for(let X=0;X<=a;X++){const $=X/a,D=$*l+o,I=Math.sin(D),L=Math.cos(D);C.x=P*I,C.y=-E*i+m,C.z=P*L,d.push(C.x,C.y,C.z),x.set(I,T,L).normalize(),h.push(x.x,x.y,x.z),p.push($,1-E),S.push(y++)}v.push(S)}for(let U=0;U<a;U++)for(let S=0;S<s;S++){const E=v[S][U],P=v[S+1][U],X=v[S+1][U+1],$=v[S][U+1];f.push(E,P,$),f.push(P,X,$),R+=6}c.addGroup(u,R,0),u+=R}function _(x){const C=y,R=new Yt,T=new z;let U=0;const S=x===!0?t:n,E=x===!0?1:-1;for(let X=1;X<=a;X++)d.push(0,m*E,0),h.push(0,E,0),p.push(.5,.5),y++;const P=y;for(let X=0;X<=a;X++){const D=X/a*l+o,I=Math.cos(D),L=Math.sin(D);T.x=S*L,T.y=m*E,T.z=S*I,d.push(T.x,T.y,T.z),h.push(0,E,0),R.x=I*.5+.5,R.y=L*.5*E+.5,p.push(R.x,R.y),y++}for(let X=0;X<a;X++){const $=C+X,D=P+X;x===!0?f.push(D,D+1,$):f.push(D+1,D,$),U+=3}c.addGroup(u,U,x===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bd extends Pd{constructor(t=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Bd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Id extends ri{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),f(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new z,x=new z,C=new z;for(let R=0;R<n.length;R+=3)p(n[R+0],_),p(n[R+1],x),p(n[R+2],C),l(_,x,C,g)}function l(g,_,x,C){const R=C+1,T=[];for(let U=0;U<=R;U++){T[U]=[];const S=g.clone().lerp(x,U/R),E=_.clone().lerp(x,U/R),P=R-U;for(let X=0;X<=P;X++)X===0&&U===R?T[U][X]=S:T[U][X]=S.clone().lerp(E,X/P)}for(let U=0;U<R;U++)for(let S=0;S<2*(R-U)-1;S++){const E=Math.floor(S/2);S%2===0?(h(T[U][E+1]),h(T[U+1][E]),h(T[U][E])):(h(T[U][E+1]),h(T[U+1][E+1]),h(T[U+1][E]))}}function c(g){const _=new z;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(g),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function f(){const g=new z;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const x=m(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;r.push(x,1-C)}y(),d()}function d(){for(let g=0;g<r.length;g+=6){const _=r[g+0],x=r[g+2],C=r[g+4],R=Math.max(_,x,C),T=Math.min(_,x,C);R>.9&&T<.1&&(_<.2&&(r[g+0]+=1),x<.2&&(r[g+2]+=1),C<.2&&(r[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){const x=g*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function y(){const g=new z,_=new z,x=new z,C=new z,R=new Yt,T=new Yt,U=new Yt;for(let S=0,E=0;S<s.length;S+=9,E+=6){g.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),R.set(r[E+0],r[E+1]),T.set(r[E+2],r[E+3]),U.set(r[E+4],r[E+5]),C.copy(g).add(_).add(x).divideScalar(3);const P=m(C);v(R,E+0,g,P),v(T,E+2,_,P),v(U,E+4,x,P)}}function v(g,_,x,C){C<0&&g.x===1&&(r[_]=g.x-1),x.x===0&&x.z===0&&(r[_]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Id(t.vertices,t.indices,t.radius,t.details)}}class Fd extends Id{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Fd(t.radius,t.detail)}}class Ys extends ri{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const f=[],d=new z,h=new z,p=[],y=[],v=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let x=0;u===0&&r===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const R=C/n;d.x=-t*Math.cos(a+R*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(a+R*s)*Math.sin(r+_*o),y.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+x,1-_),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=f[u][g+1],x=f[u][g],C=f[u+1][g],R=f[u+1][g+1];(u!==0||r>0)&&p.push(_,x,R),(u!==i-1||l<Math.PI)&&p.push(x,C,R)}this.setIndex(p),this.setAttribute("position",new Oe(y,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ls extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ix,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ax extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const gf=new Ne,Hg=new z,Gg=new z;class I2{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Hg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hg),Gg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Gg),n.updateMatrixWorld(),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class F2 extends I2{constructor(){super(new vx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H2 extends Ax{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new F2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G2 extends Ax{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const V2="1.0.0-"+Date.now(),wl=1/60,Ll=.15,_f=.4,vf=.5,xf=15,Vg=25,bn={forest:{id:"forest",name:"Forest Course",theme:"A peaceful forest setting with lush green grass",par:3,bounds:{minX:-15,maxX:15,minZ:-25,maxZ:5},spawn:{x:0,y:.15,z:0},hole:{x:0,y:0,z:-20,radius:_f},grassFriction:.015,sandFriction:.0525,iceFriction:0,surfaces:[{id:"grass-main",type:"grass",friction:.015,bounds:{minX:-15,maxX:15,minZ:-25,maxZ:5}},{id:"sand-1",type:"sand",friction:.0525,center:{x:-5,y:0,z:-10},bounds:{minX:-7,maxX:-3,minZ:-12,maxZ:-8}},{id:"sand-2",type:"sand",friction:.0525,center:{x:5,y:0,z:-15},bounds:{minX:3,maxX:7,minZ:-17,maxZ:-13}}],obstacles:[{id:"tree-1",type:"tree",position:{x:-8,y:0,z:-5},solid:!0,radius:.8},{id:"tree-2",type:"tree",position:{x:8,y:0,z:-12},solid:!0,radius:.8},{id:"rock-1",type:"rock",position:{x:3,y:0,z:-7},solid:!0,radius:.6},{id:"rock-2",type:"rock",position:{x:-6,y:0,z:-18},solid:!0,radius:.5}],terrainFeatures:[]},desert:{id:"desert",name:"Desert Course",theme:"A hot desert with sandy terrain and scattered dunes",par:4,bounds:{minX:-18,maxX:18,minZ:-30,maxZ:5},spawn:{x:0,y:.15,z:0},hole:{x:2,y:0,z:-25,radius:_f},grassFriction:.018,sandFriction:.063,iceFriction:0,surfaces:[{id:"grass-path",type:"grass",friction:.018,bounds:{minX:-3,maxX:3,minZ:-30,maxZ:5}},{id:"sand-main",type:"sand",friction:.063,bounds:{minX:-18,maxX:18,minZ:-30,maxZ:5}}],obstacles:[{id:"dune-1",type:"dune",position:{x:-10,y:0,z:-10},solid:!0,radius:2.5},{id:"dune-2",type:"dune",position:{x:8,y:0,z:-18},solid:!0,radius:2},{id:"dune-3",type:"dune",position:{x:-5,y:0,z:-22},solid:!0,radius:1.8},{id:"rock-1",type:"rock",position:{x:12,y:0,z:-8},solid:!0,radius:1},{id:"rock-2",type:"rock",position:{x:-12,y:0,z:-25},solid:!0,radius:.8}],terrainFeatures:[]},snow:{id:"snow",name:"Ice Course",theme:"A frozen wonderland with slippery ice surfaces",par:3,bounds:{minX:-15,maxX:15,minZ:-28,maxZ:5},spawn:{x:0,y:.15,z:0},hole:{x:-3,y:0,z:-23,radius:_f},grassFriction:.016,sandFriction:.056,iceFriction:.002,surfaces:[{id:"ice-main",type:"ice",friction:.002,bounds:{minX:-15,maxX:15,minZ:-28,maxZ:5}},{id:"grass-strip",type:"grass",friction:.016,bounds:{minX:-2,maxX:2,minZ:-5,maxZ:5}},{id:"sand-patch",type:"sand",friction:.056,center:{x:8,y:0,z:-15},bounds:{minX:6,maxX:10,minZ:-17,maxZ:-13}}],obstacles:[{id:"ice-crystal-1",type:"ice_crystal",position:{x:-8,y:0,z:-10},solid:!0,radius:.7},{id:"ice-crystal-2",type:"ice_crystal",position:{x:6,y:0,z:-20},solid:!0,radius:.6},{id:"snow-pile-1",type:"snow_pile",position:{x:10,y:0,z:-8},solid:!0,radius:1.2},{id:"snow-pile-2",type:"snow_pile",position:{x:-10,y:0,z:-18},solid:!0,radius:1}],terrainFeatures:[]}};class k2{constructor(){At(this,"scene",null);At(this,"renderer",null);At(this,"camera",null);At(this,"ball",null);At(this,"hole",null);At(this,"ground",null);At(this,"surfaceMeshes",new Map);At(this,"obstacleMeshes",new Map);At(this,"powerupMeshes",new Map);At(this,"ballPosition",{x:0,y:.15,z:0});At(this,"ballVelocity",{x:0,y:0,z:0});At(this,"ballMoving",!1);At(this,"ballInHole",!1);At(this,"ballAirborne",!1);At(this,"ballOutOfBounds",!1);At(this,"currentSurface","grass");At(this,"currentFriction",.015);At(this,"lastCollision",null);At(this,"lastSafePosition",{x:0,y:.15,z:0});At(this,"dragging",!1);At(this,"startScreen",null);At(this,"currentScreen",null);At(this,"shotDirection",{x:0,z:0});At(this,"shotPower",0);At(this,"strokeCount",0);At(this,"currentLevel","forest");At(this,"gameState","menu");At(this,"gameMode","single");At(this,"elapsedTime",0);At(this,"holeComplete",!1);At(this,"totalStrokes",0);At(this,"currentScore",0);At(this,"totalScore",0);At(this,"multiplayer",{enabled:!1,mode:"local",status:"setup",playerCount:2,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:[],winnerId:null,tiedPlayerIds:[]});At(this,"powerups",{items:[],inventory:[],activeEffect:null,lastTriggeredId:null,placingType:null,armedType:null,selectedPlacedId:null});At(this,"cameraState",{mode:"follow",position:{x:0,y:10,z:10},target:{x:0,y:0,z:0},distance:15,minDistance:5,maxDistance:40,zoom:1,angle:0,pitch:45});At(this,"performance",{fixedStep:wl,accumulator:0,simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,listenerCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:1,poolStats:{}});At(this,"leaderboard",{levelBest:{},overall:[],persisted:!1});At(this,"animationId",null);At(this,"lastTime",0);At(this,"container",null);At(this,"onStateChange",null);At(this,"holeInOneArmed",!1);At(this,"handleResize",()=>{if(!this.container||!this.renderer||!this.camera)return;const t=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)});At(this,"animate",t=>{this.animationId=requestAnimationFrame(this.animate);const n=Math.min((t-this.lastTime)/1e3,.1);if(this.lastTime=t,this.gameState==="playing"){for(this.elapsedTime+=n,this.performance.accumulator+=n;this.performance.accumulator>=wl;)this.fixedUpdate(wl),this.performance.accumulator-=wl,this.performance.simulationTick++;this.updateCameraPosition()}this.renderer&&this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.performance.renderFrame++)});this.loadLeaderboard()}exposeToWindow(){window.__contract={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__contract","__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:V2})},window.__game={getState:()=>this.getGameState()},window.__ball={getState:()=>this.getBallState()},window.__shot={getState:()=>this.getShotState()},window.__course={getState:()=>this.getCourseState()},window.__multiplayer={getState:()=>this.multiplayer},window.__powerups={getState:()=>this.powerups},window.__camera={getState:()=>this.cameraState},window.__leaderboard={getState:()=>this.leaderboard},window.__performance={getState:()=>this.performance}}getGameState(){const t=bn[this.currentLevel];return{ready:this.scene!==null,gameState:this.gameState,mode:this.gameMode,currentLevel:this.gameState==="playing"||this.gameState==="hole_complete"?{id:t.id,name:t.name,theme:t.theme,par:t.par}:null,currentHoleStrokes:this.strokeCount,totalStrokes:this.totalStrokes,currentScore:this.currentScore,totalScore:this.totalScore,holeComplete:this.holeComplete,elapsedTime:this.elapsedTime}}getBallState(){const t=Math.sqrt(this.ballVelocity.x**2+this.ballVelocity.y**2+this.ballVelocity.z**2);return{position:{...this.ballPosition},velocity:{...this.ballVelocity},speed:t,radius:Ll,moving:this.ballMoving,sleeping:!this.ballMoving&&!this.dragging,airborne:this.ballAirborne,inHole:this.ballInHole,outOfBounds:this.ballOutOfBounds,currentSurface:this.currentSurface,friction:this.currentFriction,lastCollision:this.lastCollision,lastSafePosition:{...this.lastSafePosition}}}getShotState(){return{dragging:this.dragging,canShoot:!this.ballMoving&&!this.ballInHole,startScreen:this.startScreen?{...this.startScreen}:null,currentScreen:this.currentScreen?{...this.currentScreen}:null,direction:{...this.shotDirection},power:this.shotPower,minPower:vf,maxPower:xf,strokeCount:this.strokeCount}}getCourseState(){var n;const t=bn[this.currentLevel];return{levelId:t.id,name:t.name,theme:t.theme,par:t.par,bounds:{...t.bounds},spawn:{...t.spawn},hole:{...t.hole},surfaces:t.surfaces.map(i=>({...i})),obstacles:t.obstacles.map(i=>({...i})),terrainFeatures:t.terrainFeatures.map(i=>({...i})),obstacleCount:t.obstacles.length,sceneObjectCount:((n=this.scene)==null?void 0:n.children.length)??0,loaded:this.scene!==null}}setOnStateChange(t){this.onStateChange=t}init(t){this.container=t,this.scene=new B2,this.renderer=new Tx({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qv,t.appendChild(this.renderer.domElement),this.camera=new kn(60,t.clientWidth/t.clientHeight,.1,1e3),this.updateCameraPosition();const n=new G2(16777215,.6);this.scene.add(n);const i=new H2(16777215,.8);i.position.set(10,20,10),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=100,i.shadow.camera.left=-30,i.shadow.camera.right=30,i.shadow.camera.top=30,i.shadow.camera.bottom=-30,this.scene.add(i),window.__THREE_SCENE__=this.scene,window.__THREE_RENDERER__=this.renderer,this.exposeToWindow(),window.addEventListener("resize",this.handleResize),this.animate(0)}destroy(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),window.removeEventListener("resize",this.handleResize),this.renderer&&(this.renderer.dispose(),this.container&&this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)),this.scene=null,this.renderer=null,this.camera=null,this.ball=null,this.ground=null,this.surfaceMeshes.clear(),this.obstacleMeshes.clear(),this.powerupMeshes.clear()}loadLevel(t){if(!this.scene)return;this.currentLevel=t;const n=bn[t];this.ground&&this.scene.remove(this.ground),this.ball&&this.scene.remove(this.ball),this.hole&&this.scene.remove(this.hole),this.surfaceMeshes.forEach(f=>{var d;return(d=this.scene)==null?void 0:d.remove(f)}),this.surfaceMeshes.clear(),this.obstacleMeshes.forEach(f=>{var d;return(d=this.scene)==null?void 0:d.remove(f)}),this.obstacleMeshes.clear(),this.powerupMeshes.forEach(f=>{var d;return(d=this.scene)==null?void 0:d.remove(f)}),this.powerupMeshes.clear();const i=new To(n.bounds.maxX-n.bounds.minX,n.bounds.maxZ-n.bounds.minZ);let a;switch(t){case"forest":a=2263842;break;case"desert":a=12759680;break;case"snow":a=15263976;break;default:a=2263842}const s=new Ls({color:a});this.ground=new gn(i,s),this.ground.rotation.x=-Math.PI/2,this.ground.position.set((n.bounds.minX+n.bounds.maxX)/2,0,(n.bounds.minZ+n.bounds.maxZ)/2),this.ground.receiveShadow=!0,this.scene.add(this.ground),n.surfaces.forEach(f=>{var d;if(f.bounds){const h=f.bounds.maxX-f.bounds.minX,p=f.bounds.maxZ-f.bounds.minZ,y=new To(h,p);let v;switch(f.type){case"grass":v=3050286;break;case"sand":v=13808780;break;case"ice":v=11393254;break;default:v=2263842}const m=new Ls({color:v,transparent:f.type==="ice",opacity:f.type==="ice"?.8:1}),u=new gn(y,m);u.rotation.x=-Math.PI/2,u.position.set((f.bounds.minX+f.bounds.maxX)/2,.01,(f.bounds.minZ+f.bounds.maxZ)/2),u.receiveShadow=!0,(d=this.scene)==null||d.add(u),this.surfaceMeshes.set(f.id,u)}}),n.obstacles.forEach(f=>{var v;let d,h;switch(f.type){case"tree":d=new Bd(.5,2,8),h=2263842;break;case"rock":d=new Ys(f.radius||.5,8,6),h=8421504;break;case"dune":d=new Ys(f.radius||2,16,8),h=13808780;break;case"ice_crystal":d=new Fd(f.radius||.5),h=8900331;break;case"snow_pile":d=new Ys(f.radius||1,12,8),h=16777215;break;default:d=new ss(1,1,1),h=8421504}const p=new Ls({color:h}),y=new gn(d,p);y.position.set(f.position.x,f.position.y+(f.type==="tree"?1:0),f.position.z),y.castShadow=!0,y.receiveShadow=!0,(v=this.scene)==null||v.add(y),this.obstacleMeshes.set(f.id,y)});const r=new zd(n.hole.radius,32),o=new Ls({color:0});this.hole=new gn(r,o),this.hole.rotation.x=-Math.PI/2,this.hole.position.set(n.hole.x,.02,n.hole.z),this.scene.add(this.hole);const l=new Ys(Ll,32,16),c=new Ls({color:16777215});this.ball=new gn(l,c),this.ball.castShadow=!0,this.ball.position.set(n.spawn.x,n.spawn.y,n.spawn.z),this.scene.add(this.ball),this.ballPosition={...n.spawn},this.ballVelocity={x:0,y:0,z:0},this.ballMoving=!1,this.ballInHole=!1,this.ballOutOfBounds=!1,this.currentSurface="grass",this.currentFriction=n.grassFriction,this.lastSafePosition={...n.spawn},this.createPowerups(t),this.updateCameraPosition(),this.onStateChange&&this.onStateChange()}createPowerups(t){const n=[];switch(t){case"forest":n.push({type:"bounce_pad",position:{x:-6,y:.2,z:-5},direction:{x:0,z:-1}},{type:"speed_boost",position:{x:6,y:.2,z:-8},direction:{x:0,z:-1}},{type:"hole_in_one",position:{x:0,y:.2,z:-12}});break;case"desert":n.push({type:"bounce_pad",position:{x:5,y:.2,z:-5},direction:{x:-1,z:-1}},{type:"speed_boost",position:{x:-8,y:.2,z:-15},direction:{x:0,z:-1}},{type:"hole_in_one",position:{x:-3,y:.2,z:-20}});break;case"snow":n.push({type:"bounce_pad",position:{x:5,y:.2,z:-5},direction:{x:0,z:-1}},{type:"speed_boost",position:{x:-5,y:.2,z:-12},direction:{x:-1,z:-1}},{type:"hole_in_one",position:{x:3,y:.2,z:-18}});break}this.powerups.items=n.map((i,a)=>({id:`powerup-${a}`,type:i.type,position:{...i.position},active:!0,collected:!1,direction:i.direction})),this.powerups.items.forEach(i=>{var l;const a=new ss(.4,.3,.4);let s;switch(i.type){case"bounce_pad":s=16739179;break;case"speed_boost":s=5164484;break;case"hole_in_one":s=16767293;break;default:s=16777215}const r=new Ls({color:s,emissive:s,emissiveIntensity:.3}),o=new gn(a,r);o.position.set(i.position.x,i.position.y,i.position.z),o.castShadow=!0,(l=this.scene)==null||l.add(o),this.powerupMeshes.set(i.id,o)})}startGame(t,n=1){if(this.gameMode=t,this.gameState="playing",this.strokeCount=0,this.totalStrokes=0,this.currentScore=0,this.totalScore=0,this.holeComplete=!1,this.elapsedTime=0,this.holeInOneArmed=!1,t==="local_multiplayer"){this.multiplayer.enabled=!0,this.multiplayer.mode="local",this.multiplayer.status="playing",this.multiplayer.playerCount=n,this.multiplayer.turnIndex=0,this.multiplayer.round=1,this.multiplayer.revision++,this.multiplayer.players=[];for(let i=0;i<n;i++)this.multiplayer.players.push({id:`player-${i+1}`,name:`Player ${i+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:{...bn[this.currentLevel].spawn},powerupInventory:[],armedPowerup:null});this.multiplayer.currentPlayerId=this.multiplayer.players[0].id}else this.multiplayer.enabled=!1,this.multiplayer.status="setup",this.multiplayer.players=[];this.powerups.inventory=[],this.onStateChange&&this.onStateChange()}updateCameraPosition(){if(!this.camera)return;const t=this.ballInHole?bn[this.currentLevel].hole:this.ballPosition,n=this.cameraState.distance;this.cameraState.target={...t},this.cameraState.position={x:t.x,y:t.y+n*.7,z:t.z+n*.7},this.camera.position.set(this.cameraState.position.x,this.cameraState.position.y,this.cameraState.position.z),this.camera.lookAt(t.x,t.y,t.z)}setZoom(t){this.cameraState.distance=Math.max(this.cameraState.minDistance,Math.min(this.cameraState.maxDistance,this.cameraState.distance+t)),this.cameraState.zoom=this.cameraState.distance/15,this.updateCameraPosition(),this.onStateChange&&this.onStateChange()}startDrag(t,n){this.ballMoving||this.ballInHole||(this.dragging=!0,this.startScreen={x:t,y:n},this.currentScreen={x:t,y:n},this.shotPower=0,this.shotDirection={x:0,z:0},this.onStateChange&&this.onStateChange())}updateDrag(t,n){if(this.dragging){if(this.currentScreen={x:t,y:n},this.startScreen){const i=this.startScreen.x-t,a=this.startScreen.y-n,s=Math.sqrt(i*i+a*a);this.shotPower=Math.min(xf,Math.max(vf,s*.05)),s>10&&(this.shotDirection={x:-i/s,z:-a/s})}this.onStateChange&&this.onStateChange()}}endDrag(){this.dragging&&(this.dragging=!1,this.shotPower>vf&&this.startScreen&&this.currentScreen&&this.shoot(),this.startScreen=null,this.currentScreen=null,this.shotPower=0,this.onStateChange&&this.onStateChange())}shoot(){if(this.ballMoving)return;if(this.holeInOneArmed){this.ballPosition={...bn[this.currentLevel].hole,y:.1},this.ballVelocity={x:0,y:0,z:0},this.ballInHole=!0,this.holeInOneArmed=!1;const n=this.powerups.inventory.findIndex(i=>i.type==="hole_in_one");if(n>=0&&(this.powerups.inventory[n].count--,this.powerups.inventory[n].count<=0&&this.powerups.inventory.splice(n,1)),this.multiplayer.enabled&&this.multiplayer.currentPlayerId){const i=this.multiplayer.players.find(a=>a.id===this.multiplayer.currentPlayerId);if(i){const a=i.powerupInventory.findIndex(s=>s.type==="hole_in_one");a>=0&&(i.powerupInventory[a].count--,i.powerupInventory[a].count<=0&&i.powerupInventory.splice(a,1)),i.armedPowerup=null}}this.strokeCount++,this.handleHoleComplete();return}const t=Math.min(this.shotPower,xf);if(this.ballVelocity={x:this.shotDirection.x*t,y:0,z:this.shotDirection.z*t},this.ballMoving=!0,this.strokeCount++,this.lastSafePosition={...this.ballPosition},this.multiplayer.enabled&&this.multiplayer.currentPlayerId){const n=this.multiplayer.players.find(i=>i.id===this.multiplayer.currentPlayerId);n&&(n.holeStrokes=this.strokeCount)}this.onStateChange&&this.onStateChange()}fixedUpdate(t){if(!this.ballMoving||this.ballInHole)return;const n=bn[this.currentLevel];this.currentSurface=this.getSurfaceAtPosition(this.ballPosition),this.currentFriction=this.getFrictionForSurface(this.currentSurface),this.ballVelocity.x*=1-this.currentFriction,this.ballVelocity.z*=1-this.currentFriction,this.ballPosition.x+=this.ballVelocity.x*t,this.ballPosition.z+=this.ballVelocity.z*t;const i=Math.sqrt(this.ballVelocity.x**2+this.ballVelocity.z**2);if(i>Vg){const s=Vg/i;this.ballVelocity.x*=s,this.ballVelocity.z*=s}if(this.ballPosition.x<n.bounds.minX||this.ballPosition.x>n.bounds.maxX||this.ballPosition.z<n.bounds.minZ||this.ballPosition.z>n.bounds.maxZ){this.ballOutOfBounds=!0,this.ballMoving=!1,this.ballPosition={...this.lastSafePosition},this.ballVelocity={x:0,y:0,z:0},this.strokeCount++,this.onStateChange&&this.onStateChange();return}for(const s of n.obstacles){if(!s.solid)continue;const r=this.ballPosition.x-s.position.x,o=this.ballPosition.z-s.position.z,l=Math.sqrt(r*r+o*o),c=s.radius||.5;if(l<c+Ll){const f=r/l,d=o/l,h=this.ballVelocity.x*f+this.ballVelocity.z*d;this.ballVelocity.x-=2*h*f,this.ballVelocity.z-=2*h*d;const p=c+Ll-l;this.ballPosition.x+=f*p,this.ballPosition.z+=d*p,this.lastCollision=s.id,this.ballVelocity.x*=.7,this.ballVelocity.z*=.7}}if(this.powerups.items.forEach(s=>{if(!s.active||s.collected)return;const r=this.ballPosition.x-s.position.x,o=this.ballPosition.z-s.position.z;if(Math.sqrt(r*r+o*o)<.5){s.collected=!0;const c=this.powerupMeshes.get(s.id);if(c&&this.scene&&(this.scene.remove(c),this.powerupMeshes.delete(s.id)),s.type==="hole_in_one"){const f=this.powerups.inventory.find(d=>d.type==="hole_in_one");if(f?f.count++:this.powerups.inventory.push({type:"hole_in_one",count:1}),this.multiplayer.enabled&&this.multiplayer.currentPlayerId){const d=this.multiplayer.players.find(h=>h.id===this.multiplayer.currentPlayerId);if(d){const h=d.powerupInventory.find(p=>p.type==="hole_in_one");h?h.count++:d.powerupInventory.push({type:"hole_in_one",count:1})}}}else if(s.type==="bounce_pad"){const f=s.direction||{x:0,z:-1};this.ballVelocity.x=f.x*8,this.ballVelocity.z=f.z*8}else if(s.type==="speed_boost"){const f=s.direction||{x:0,z:-1};Math.sqrt(this.ballVelocity.x**2+this.ballVelocity.z**2)>.5?(this.ballVelocity.x+=f.x*5,this.ballVelocity.z+=f.z*5):(this.ballVelocity.x=f.x*6,this.ballVelocity.z=f.z*6)}this.powerups.lastTriggeredId=s.id}}),Math.sqrt((this.ballPosition.x-n.hole.x)**2+(this.ballPosition.z-n.hole.z)**2)<n.hole.radius&&i<5){this.ballInHole=!0,this.ballMoving=!1,this.ballPosition={x:n.hole.x,y:.05,z:n.hole.z},this.ballVelocity={x:0,y:0,z:0},this.handleHoleComplete();return}i<.01&&(this.ballMoving=!1,this.ballVelocity={x:0,y:0,z:0},this.lastSafePosition={...this.ballPosition},this.multiplayer.enabled&&this.nextPlayerTurn()),this.ball&&this.ball.position.set(this.ballPosition.x,this.ballPosition.y,this.ballPosition.z),this.performance.logicLoopCount++,this.onStateChange&&this.onStateChange()}getSurfaceAtPosition(t){const n=bn[this.currentLevel];for(let i=n.surfaces.length-1;i>=0;i--){const a=n.surfaces[i];if(a.bounds&&t.x>=a.bounds.minX&&t.x<=a.bounds.maxX&&t.z>=a.bounds.minZ&&t.z<=a.bounds.maxZ)return a.type}return this.currentLevel==="snow"?"ice":this.currentLevel==="desert"?"sand":"grass"}getFrictionForSurface(t){const n=bn[this.currentLevel];switch(t){case"grass":return n.grassFriction;case"sand":return n.sandFriction;case"ice":return n.iceFriction;default:return n.grassFriction}}handleHoleComplete(){this.holeComplete=!0,this.gameState="hole_complete";const n=bn[this.currentLevel].par;let i=0;if(this.strokeCount===1?i=50:this.strokeCount<=n-2?i=30:this.strokeCount===n-1?i=20:this.strokeCount===n?i=10:this.strokeCount===n+1?i=5:i=1,this.currentScore=i,this.totalScore+=i,this.totalStrokes+=this.strokeCount,this.multiplayer.enabled&&this.multiplayer.currentPlayerId){const a=this.multiplayer.players.find(s=>s.id===this.multiplayer.currentPlayerId);a&&(a.totalStrokes+=this.strokeCount,a.finished=!0)}this.updateLeaderboard(),this.onStateChange&&this.onStateChange()}nextPlayerTurn(){if(!this.multiplayer.enabled)return;let t=(this.multiplayer.turnIndex+1)%this.multiplayer.playerCount,n=0;for(;n<this.multiplayer.playerCount&&this.multiplayer.players[t].finished;)t=(t+1)%this.multiplayer.playerCount,n++;if(this.multiplayer.currentPlayerId){const a=this.multiplayer.players.find(s=>s.id===this.multiplayer.currentPlayerId);a&&(a.ballPosition={...this.ballPosition})}this.multiplayer.turnIndex=t,this.multiplayer.currentPlayerId=this.multiplayer.players[t].id,this.multiplayer.revision++;const i=this.multiplayer.players[t];this.strokeCount=i.holeStrokes,this.ballPosition={...i.ballPosition},this.powerups.inventory=[...i.powerupInventory],this.holeInOneArmed=i.armedPowerup==="hole_in_one",this.ball&&this.ball.position.set(this.ballPosition.x,this.ballPosition.y,this.ballPosition.z),this.onStateChange&&this.onStateChange()}updateLeaderboard(){var l;const t=this.currentLevel,n=this.multiplayer.enabled&&this.multiplayer.currentPlayerId&&((l=this.multiplayer.players.find(c=>c.id===this.multiplayer.currentPlayerId))==null?void 0:l.name)||"Player",i=this.multiplayer.enabled&&this.multiplayer.currentPlayerId?this.multiplayer.currentPlayerId:"single-player",a=bn[t],s=this.strokeCount,r=Date.now();this.leaderboard.levelBest[t]||(this.leaderboard.levelBest[t]=[]);const o=this.leaderboard.levelBest[t].findIndex(c=>c.playerId===i);o>=0?s<this.leaderboard.levelBest[t][o].strokes&&(this.leaderboard.levelBest[t][o].strokes=s,this.leaderboard.levelBest[t][o].achievedAt=r,this.leaderboard.levelBest[t][o].relativeToPar=s-a.par):this.leaderboard.levelBest[t].push({playerId:i,playerName:n,strokes:s,rank:0,par:a.par,relativeToPar:s-a.par,achievedAt:r}),this.leaderboard.levelBest[t].sort((c,f)=>c.strokes!==f.strokes?c.strokes-f.strokes:c.achievedAt!==f.achievedAt?c.achievedAt-f.achievedAt:c.playerId.localeCompare(f.playerId)),this.leaderboard.levelBest[t].forEach((c,f)=>{c.rank=f+1}),this.updateOverallLeaderboard(),this.saveLeaderboard()}updateOverallLeaderboard(){const t=new Map;Object.entries(this.leaderboard.levelBest).forEach(([n,i])=>{i.forEach(a=>{t.has(a.playerId)||t.set(a.playerId,{playerName:a.playerName,levelStrokes:{},achievedAt:a.achievedAt});const s=t.get(a.playerId);s.levelStrokes[n]=a.strokes,a.achievedAt>s.achievedAt&&(s.achievedAt=a.achievedAt)})}),this.leaderboard.overall=[],t.forEach((n,i)=>{n.levelStrokes.forest&&n.levelStrokes.desert&&n.levelStrokes.snow&&this.leaderboard.overall.push({playerId:i,playerName:n.playerName,levelStrokes:{forest:n.levelStrokes.forest,desert:n.levelStrokes.desert,snow:n.levelStrokes.snow},totalStrokes:n.levelStrokes.forest+n.levelStrokes.desert+n.levelStrokes.snow,rank:0,achievedAt:n.achievedAt})}),this.leaderboard.overall.sort((n,i)=>n.totalStrokes!==i.totalStrokes?n.totalStrokes-i.totalStrokes:n.achievedAt!==i.achievedAt?n.achievedAt-i.achievedAt:n.playerId.localeCompare(i.playerId)),this.leaderboard.overall.forEach((n,i)=>{n.rank=i+1})}saveLeaderboard(){try{localStorage.setItem("mini-golf-leaderboard",JSON.stringify(this.leaderboard)),this.leaderboard.persisted=!0}catch{this.leaderboard.persisted=!1}}loadLeaderboard(){try{const t=localStorage.getItem("mini-golf-leaderboard");t&&(this.leaderboard=JSON.parse(t),this.leaderboard.persisted=!0)}catch{this.leaderboard.persisted=!1}}nextState(){if(this.gameState==="hole_complete"){if(!this.multiplayer.enabled){const t=["forest","desert","snow"],n=t.indexOf(this.currentLevel);if(n<t.length-1){const i=t[n+1];this.totalStrokes+=this.strokeCount,this.loadLevel(i),this.strokeCount=0,this.holeComplete=!1,this.gameState="playing"}else this.totalStrokes+=this.strokeCount,this.gameState="tournament_complete";this.onStateChange&&this.onStateChange();return}if(this.multiplayer.enabled){if(this.multiplayer.players.every(s=>s.finished)){const s=Math.min(...this.multiplayer.players.map(o=>o.totalStrokes)),r=this.multiplayer.players.filter(o=>o.totalStrokes===s);r.length===1?(this.multiplayer.winnerId=r[0].id,this.multiplayer.tiedPlayerIds=[]):(this.multiplayer.winnerId=null,this.multiplayer.tiedPlayerIds=r.map(o=>o.id)),this.multiplayer.status="complete",this.gameState="local_result",this.onStateChange&&this.onStateChange();return}this.multiplayer.turnIndex=(this.multiplayer.turnIndex+1)%this.multiplayer.playerCount;let n=0;for(;this.multiplayer.players[this.multiplayer.turnIndex].finished&&n<this.multiplayer.playerCount;)this.multiplayer.turnIndex=(this.multiplayer.turnIndex+1)%this.multiplayer.playerCount,n++;this.multiplayer.currentPlayerId=this.multiplayer.players[this.multiplayer.turnIndex].id,this.multiplayer.revision++;const i=bn[this.currentLevel],a=this.multiplayer.players[this.multiplayer.turnIndex];a.holeStrokes=0,this.ballPosition={...i.spawn},this.ballVelocity={x:0,y:0,z:0},this.ballMoving=!1,this.ballInHole=!1,this.ballOutOfBounds=!1,this.strokeCount=0,this.holeComplete=!1,this.holeInOneArmed=a.armedPowerup==="hole_in_one",this.powerups.inventory=[...a.powerupInventory],this.createPowerups(this.currentLevel),this.ball&&this.ball.position.set(i.spawn.x,i.spawn.y,i.spawn.z),this.gameState="playing",this.updateCameraPosition()}else this.gameState="tournament_complete"}this.onStateChange&&this.onStateChange()}resetBall(){const t=bn[this.currentLevel];this.ballPosition={...t.spawn},this.ballVelocity={x:0,y:0,z:0},this.ballMoving=!1,this.ballOutOfBounds=!1,this.ball&&this.ball.position.set(t.spawn.x,t.spawn.y,t.spawn.z),this.onStateChange&&this.onStateChange()}armHoleInOne(){if(this.powerups.inventory.some(t=>t.type==="hole_in_one"&&t.count>0)){if(this.holeInOneArmed=!this.holeInOneArmed,this.powerups.armedType=this.holeInOneArmed?"hole_in_one":null,this.multiplayer.enabled&&this.multiplayer.currentPlayerId){const t=this.multiplayer.players.find(n=>n.id===this.multiplayer.currentPlayerId);t&&(t.armedPowerup=this.holeInOneArmed?"hole_in_one":null)}this.onStateChange&&this.onStateChange()}}setGameState(t){this.gameState=t,this.onStateChange&&this.onStateChange()}setMultiplayerPlayerCount(t){this.multiplayer.playerCount=t,this.onStateChange&&this.onStateChange()}getGameStateValue(){return this.gameState}getCurrentLevel(){return this.currentLevel}getLeaderboard(){return this.leaderboard}getMultiplayerState(){return this.multiplayer}}let yf=null;function X2(){return yf||(yf=new k2),yf}function W2(){var f,d,h,p,y;const e=Ci.useRef(null),t=Ci.useRef(null),[,n]=Ci.useState({}),[i,a]=Ci.useState(!1),s=Ci.useCallback(()=>n({}),[]);Ci.useEffect(()=>{const v=X2();return t.current=v,v.setOnStateChange(s),e.current&&v.init(e.current),()=>{v.destroy()}},[s]);const r=v=>{!t.current||t.current.getGameStateValue()!=="playing"||(a(!0),t.current.startDrag(v.clientX,v.clientY))},o=v=>{!t.current||!i||t.current.updateDrag(v.clientX,v.clientY)},l=()=>{t.current&&(a(!1),t.current.endDrag())},c=((f=t.current)==null?void 0:f.getGameStateValue())||"menu";return N.jsxs("div",{className:"relative w-full h-screen bg-gray-900 overflow-hidden",children:[N.jsx("div",{ref:e,id:"gameScreen",className:"absolute inset-0",onMouseDown:r,onMouseMove:o,onMouseUp:l,onMouseLeave:l,style:{display:c==="playing"?"block":"none"}}),c==="menu"&&N.jsxs("div",{id:"menu",className:"absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-green-900",children:[N.jsx("h1",{className:"text-5xl font-bold text-white mb-4 tracking-wider",children:"3D Mini Golf"}),N.jsx("p",{className:"text-green-200 mb-12 text-lg",children:"Experience the thrill of mini golf in stunning 3D!"}),N.jsxs("div",{className:"flex flex-col gap-4",children:[N.jsx("button",{"data-testid":"start-btn",onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("level_select")},className:"px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105",children:"Start Game"}),N.jsx("button",{"data-testid":"multiplayer-btn",onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("local_setup")},className:"px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105",children:"Local Multiplayer"}),N.jsx("button",{"data-testid":"leaderboard-btn",onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("leaderboard")},className:"px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105",children:"Leaderboard"})]})]}),c==="level_select"&&N.jsxs("div",{id:"levelSelect",className:"absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-700 to-green-800",children:[N.jsx("h2",{className:"text-4xl font-bold text-white mb-8",children:"Select Course"}),N.jsxs("div",{className:"flex gap-6",children:[N.jsx(Sf,{id:"forest",name:"Forest",description:"A peaceful forest with lush green grass",color:"from-green-500 to-green-600",par:3,onClick:()=>{var v,m;(v=t.current)==null||v.loadLevel("forest"),(m=t.current)==null||m.startGame("single")}}),N.jsx(Sf,{id:"desert",name:"Desert",description:"Hot desert with sandy terrain",color:"from-yellow-500 to-yellow-600",par:4,onClick:()=>{var v,m;(v=t.current)==null||v.loadLevel("desert"),(m=t.current)==null||m.startGame("single")}}),N.jsx(Sf,{id:"snow",name:"Ice",description:"Frozen wonderland with slippery ice",color:"from-blue-300 to-blue-400",par:3,onClick:()=>{var v,m;(v=t.current)==null||v.loadLevel("snow"),(m=t.current)==null||m.startGame("single")}})]}),N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("menu")},className:"mt-8 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-all",children:"Back to Menu"})]}),c==="local_setup"&&N.jsxs("div",{id:"multiplayerLobby",className:"absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-800",children:[N.jsx("h2",{className:"text-4xl font-bold text-white mb-8",children:"Local Multiplayer"}),N.jsxs("div",{className:"bg-white/10 p-8 rounded-xl backdrop-blur",children:[N.jsx("label",{className:"text-white text-xl mb-4 block",children:"Number of Players:"}),N.jsxs("select",{"data-testid":"local-player-count",className:"w-full p-3 rounded-lg bg-white text-gray-800 font-bold text-lg mb-6",defaultValue:2,onChange:v=>{var m;return(m=t.current)==null?void 0:m.setMultiplayerPlayerCount(parseInt(v.target.value))},children:[N.jsx("option",{value:2,children:"2 Players"}),N.jsx("option",{value:3,children:"3 Players"}),N.jsx("option",{value:4,children:"4 Players"})]}),N.jsx("label",{className:"text-white text-xl mb-4 block",children:"Select Course:"}),N.jsxs("div",{className:"flex gap-4 mb-6",children:[N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.loadLevel("forest")},className:"flex-1 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all",children:"🌲 Forest"}),N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.loadLevel("desert")},className:"flex-1 px-4 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-all",children:"🏜️ Desert"}),N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.loadLevel("snow")},className:"flex-1 px-4 py-3 bg-blue-400 hover:bg-blue-300 text-white font-bold rounded-lg transition-all",children:"❄️ Ice"})]}),N.jsxs("div",{className:"mt-6 flex gap-4",children:[N.jsx("button",{"data-testid":"local-start-btn",onClick:()=>{var g,_,x,C;const v=(g=t.current)==null?void 0:g.getMultiplayerState(),m=(v==null?void 0:v.playerCount)||2,u=((_=t.current)==null?void 0:_.getCurrentLevel())||"forest";(x=t.current)==null||x.loadLevel(u),(C=t.current)==null||C.startGame("local_multiplayer",m)},className:"flex-1 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all",children:"Start Game"}),N.jsx("button",{"data-testid":"local-exit-btn",onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("menu")},className:"flex-1 px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg transition-all",children:"Exit"})]})]})]}),c==="leaderboard"&&N.jsx(j2,{engine:t.current}),c==="local_result"&&N.jsx(Y2,{engine:t.current}),c==="playing"&&N.jsx(q2,{engine:t.current,isDragging:i}),c==="hole_complete"&&N.jsx("div",{id:"resultScreen",className:"absolute inset-0 flex items-center justify-center bg-black/70",children:N.jsxs("div",{className:"bg-white p-8 rounded-xl text-center shadow-2xl",children:[N.jsx("h2",{className:"text-3xl font-bold text-green-600 mb-4",children:"Hole Complete!"}),N.jsxs("p",{className:"text-xl text-gray-700 mb-2",children:["Strokes: ",((d=window.__game)==null?void 0:d.getState().currentHoleStrokes)||0]}),N.jsxs("p",{className:"text-lg text-gray-500 mb-6",children:["Score: +",((h=window.__game)==null?void 0:h.getState().currentScore)||0]}),N.jsx("button",{"data-testid":"result-next",onClick:()=>{var v;return(v=t.current)==null?void 0:v.nextState()},className:"px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all",children:"Continue"})]})}),c==="tournament_complete"&&N.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600",children:N.jsxs("div",{className:"bg-white p-8 rounded-xl text-center shadow-2xl",children:[N.jsx("h2",{className:"text-4xl font-bold text-yellow-600 mb-4",children:"🎉 Tournament Complete! 🎉"}),N.jsxs("p",{className:"text-xl text-gray-700 mb-2",children:["Total Strokes: ",((p=window.__game)==null?void 0:p.getState().totalStrokes)||0]}),N.jsxs("p",{className:"text-lg text-gray-500 mb-6",children:["Total Score: ",((y=window.__game)==null?void 0:y.getState().totalScore)||0]}),N.jsxs("div",{className:"flex gap-4",children:[N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("menu")},className:"px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all",children:"Back to Menu"}),N.jsx("button",{onClick:()=>{var v;return(v=t.current)==null?void 0:v.setGameState("level_select")},className:"px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all",children:"Play Again"})]})]})})]})}function Sf({id:e,name:t,description:n,color:i,par:a,onClick:s}){return N.jsxs("button",{"data-testid":`level-${e}`,onClick:s,className:`w-56 h-72 rounded-xl bg-gradient-to-br ${i} flex flex-col items-center justify-center p-6 text-white shadow-xl hover:scale-105 transition-transform`,children:[N.jsx("h3",{className:"text-2xl font-bold mb-2",children:t}),N.jsx("p",{className:"text-sm opacity-80 text-center mb-4",children:n}),N.jsxs("p",{className:"text-lg font-semibold bg-white/20 px-4 py-2 rounded-full",children:["Par ",a]})]})}function q2({engine:e,isDragging:t}){var o,l,c,f,d,h,p;const n=(o=window.__shot)==null?void 0:o.getState(),i=(l=window.__game)==null?void 0:l.getState(),a=(c=window.__ball)==null?void 0:c.getState(),s=(f=window.__powerups)==null?void 0:f.getState(),r=(d=window.__multiplayer)==null?void 0:d.getState();return e?N.jsxs("div",{className:"absolute inset-x-0 top-0 p-4 pointer-events-none",children:[N.jsxs("div",{className:"flex justify-between items-start",children:[N.jsxs("div",{className:"bg-black/50 text-white p-4 rounded-lg pointer-events-auto",children:[N.jsxs("div",{className:"flex gap-6",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-300",children:"Strokes"}),N.jsx("p",{"data-testid":"stroke-count",className:"text-2xl font-bold",children:(i==null?void 0:i.currentHoleStrokes)||0})]}),N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-300",children:"Par"}),N.jsx("p",{className:"text-2xl font-bold",children:((h=i==null?void 0:i.currentLevel)==null?void 0:h.par)||3})]}),N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-300",children:"Score"}),N.jsx("p",{className:"text-2xl font-bold",children:(i==null?void 0:i.totalScore)||0})]})]}),(r==null?void 0:r.enabled)&&N.jsx("div",{className:"mt-2 pt-2 border-t border-white/20",children:N.jsxs("p",{"data-testid":"current-player",className:"text-sm",children:["Current: ",N.jsx("span",{className:"font-bold",children:((p=r.players[r.turnIndex])==null?void 0:p.name)||"Player 1"})]})}),N.jsxs("div",{className:"mt-2 pt-2 border-t border-white/20",children:[N.jsxs("p",{className:"text-sm text-gray-300",children:["Surface: ",N.jsx("span",{className:"text-white",children:(a==null?void 0:a.currentSurface)||"grass"})]}),N.jsxs("p",{"data-testid":"surface-friction",className:"text-sm text-gray-300",children:["Friction: ",N.jsx("span",{className:"text-white font-mono",children:((a==null?void 0:a.friction)||.015).toFixed(4)})]})]})]}),N.jsxs("div",{className:"bg-black/50 text-white p-4 rounded-lg pointer-events-auto",children:[N.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"Shot Power"}),N.jsx("div",{className:"w-32 h-4 bg-gray-700 rounded-full overflow-hidden",children:N.jsx("div",{"data-testid":"shot-power",className:"h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all",style:{width:`${Math.min(100,((n==null?void 0:n.power)||0)/15*100)}%`}})}),N.jsx("p",{className:"text-xs text-gray-400 mt-1 text-center",children:t?`${Math.round(((n==null?void 0:n.power)||0)/15*100)}%`:"Drag to aim"})]})]}),t&&n&&N.jsx("div",{"data-testid":"aim-feedback",className:"absolute left-1/2 top-24 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg",children:N.jsxs("p",{className:"text-sm",children:["Direction: ",n.direction.x.toFixed(2),", ",n.direction.z.toFixed(2)]})}),N.jsxs("div",{"data-testid":"physics-motion",className:"absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded text-xs",children:[N.jsxs("p",{children:["Moving: ",a!=null&&a.moving?"Yes":"No"]}),N.jsxs("p",{children:["Speed: ",((a==null?void 0:a.speed)||0).toFixed(3)]})]}),N.jsx("div",{"data-testid":"physics-contact",className:"absolute bottom-4 left-48 bg-black/50 text-white p-2 rounded text-xs",children:N.jsxs("p",{children:["Last Collision: ",(a==null?void 0:a.lastCollision)||"None"]})}),N.jsxs("div",{className:"absolute bottom-4 right-4 flex gap-2 pointer-events-auto",children:[N.jsxs("div",{"data-testid":"powerup-status",className:"bg-black/50 text-white p-3 rounded-lg",children:[N.jsx("p",{className:"text-xs text-gray-300 mb-1",children:"Powerups"}),N.jsxs("div",{className:"flex gap-2",children:[s==null?void 0:s.inventory.map((y,v)=>N.jsxs("div",{className:"text-center",children:[N.jsx("span",{className:"text-lg",children:y.type==="hole_in_one"?"🎯":y.type==="bounce_pad"?"🔄":"⚡"}),N.jsx("span",{className:"text-xs ml-1",children:y.count})]},v)),(s==null?void 0:s.inventory.length)===0&&N.jsx("span",{className:"text-xs text-gray-400",children:"None"})]}),(s==null?void 0:s.inventory.some(y=>y.type==="hole_in_one"&&y.count>0))&&N.jsx("button",{"data-testid":"powerup-hio",onClick:()=>e.armHoleInOne(),className:`mt-2 w-full text-xs py-1 px-2 rounded ${s.armedType==="hole_in_one"?"bg-yellow-500 text-black":"bg-yellow-600 hover:bg-yellow-500 text-white"}`,children:s.armedType==="hole_in_one"?"🎯 ARMED":"🎯 Use Hole-in-One"})]}),N.jsxs("div",{className:"flex flex-col gap-1",children:[N.jsx("button",{"data-testid":"zoom-in",onClick:()=>e.setZoom(-2),className:"p-2 bg-white/80 hover:bg-white rounded shadow",children:"🔍+"}),N.jsx("button",{"data-testid":"zoom-out",onClick:()=>e.setZoom(2),className:"p-2 bg-white/80 hover:bg-white rounded shadow",children:"🔍-"})]}),N.jsx("button",{"data-testid":"reset-position",onClick:()=>e.resetBall(),className:"p-2 bg-red-500 hover:bg-red-400 text-white rounded shadow",children:"Reset Ball"}),N.jsx("button",{onClick:()=>e.setGameState("menu"),className:"p-2 bg-gray-500 hover:bg-gray-400 text-white rounded shadow",children:"Menu"})]})]}):null}function j2({engine:e}){var n;const t=e==null?void 0:e.getLeaderboard();return N.jsxs("div",{id:"leaderboardScreen",className:"absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-purple-900 p-8",children:[N.jsx("h2",{className:"text-4xl font-bold text-white mb-8",children:"Leaderboard"}),N.jsx("div",{className:"flex gap-8 w-full max-w-5xl",children:["forest","desert","snow"].map(i=>{var a;return N.jsxs("div",{className:"flex-1 bg-white/10 rounded-xl p-4 backdrop-blur",children:[N.jsx("h3",{className:"text-xl font-bold text-white mb-4 text-center capitalize",children:i}),(a=t==null?void 0:t.levelBest[i])!=null&&a.length?N.jsxs("table",{className:"w-full text-white",children:[N.jsx("thead",{children:N.jsxs("tr",{className:"text-xs text-purple-300",children:[N.jsx("th",{className:"p-2 text-left",children:"#"}),N.jsx("th",{className:"p-2 text-left",children:"Player"}),N.jsx("th",{className:"p-2 text-right",children:"Strokes"})]})}),N.jsx("tbody",{children:t.levelBest[i].slice(0,5).map((s,r)=>N.jsxs("tr",{className:"border-t border-white/10",children:[N.jsx("td",{className:"p-2",children:s.rank}),N.jsx("td",{className:"p-2",children:s.playerName}),N.jsx("td",{className:"p-2 text-right",children:s.strokes})]},r))})]}):N.jsx("p",{className:"text-purple-300 text-center text-sm",children:"No records yet"})]},i)})}),N.jsxs("div",{className:"mt-8 w-full max-w-3xl bg-white/10 rounded-xl p-4 backdrop-blur",children:[N.jsx("h3",{className:"text-xl font-bold text-white mb-4 text-center",children:"Overall Ranking"}),(n=t==null?void 0:t.overall)!=null&&n.length?N.jsxs("table",{className:"w-full text-white",children:[N.jsx("thead",{children:N.jsxs("tr",{className:"text-xs text-purple-300",children:[N.jsx("th",{className:"p-2 text-left",children:"#"}),N.jsx("th",{className:"p-2 text-left",children:"Player"}),N.jsx("th",{className:"p-2 text-center",children:"Forest"}),N.jsx("th",{className:"p-2 text-center",children:"Desert"}),N.jsx("th",{className:"p-2 text-center",children:"Ice"}),N.jsx("th",{className:"p-2 text-right",children:"Total"})]})}),N.jsx("tbody",{children:t.overall.map((i,a)=>N.jsxs("tr",{className:"border-t border-white/10",children:[N.jsx("td",{className:"p-2",children:i.rank}),N.jsx("td",{className:"p-2",children:i.playerName}),N.jsx("td",{className:"p-2 text-center",children:i.levelStrokes.forest}),N.jsx("td",{className:"p-2 text-center",children:i.levelStrokes.desert}),N.jsx("td",{className:"p-2 text-center",children:i.levelStrokes.snow}),N.jsx("td",{className:"p-2 text-right font-bold",children:i.totalStrokes})]},a))})]}):N.jsx("p",{className:"text-purple-300 text-center text-sm",children:"Complete all three courses to see overall ranking"})]}),N.jsx("button",{onClick:()=>e==null?void 0:e.setGameState("menu"),className:"mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all",children:"Back to Menu"})]})}function Y2({engine:e}){var n;const t=e==null?void 0:e.getMultiplayerState();return e==null||e.getLeaderboard(),N.jsx("div",{id:"localLeaderboardScreen",className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 p-8",children:N.jsxs("div",{className:"bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl",children:[t!=null&&t.winnerId?N.jsx(N.Fragment,{children:N.jsxs("h2",{className:"text-3xl font-bold text-blue-600 mb-4 text-center",children:["🏆 ",(n=t.players.find(i=>i.id===t.winnerId))==null?void 0:n.name," Wins! 🏆"]})}):N.jsx(N.Fragment,{children:N.jsx("h2",{className:"text-3xl font-bold text-yellow-600 mb-4 text-center",children:"🤝 It's a Tie! 🤝"})}),N.jsxs("div",{"data-testid":"local-match-leaderboard",className:"mt-6",children:[N.jsx("h3",{className:"text-lg font-semibold text-gray-700 mb-3",children:"Final Standings"}),N.jsxs("table",{className:"w-full",children:[N.jsx("thead",{children:N.jsxs("tr",{className:"text-xs text-gray-500",children:[N.jsx("th",{className:"p-2 text-left",children:"#"}),N.jsx("th",{className:"p-2 text-left",children:"Player"}),N.jsx("th",{className:"p-2 text-right",children:"Strokes"}),N.jsx("th",{className:"p-2 text-right",children:"Status"})]})}),N.jsx("tbody",{children:t==null?void 0:t.players.sort((i,a)=>i.totalStrokes-a.totalStrokes).map((i,a)=>N.jsxs("tr",{className:`border-t ${i.id===t.winnerId?"bg-yellow-50":t.tiedPlayerIds.includes(i.id)?"bg-blue-50":""}`,children:[N.jsx("td",{className:"p-2",children:a+1}),N.jsx("td",{className:"p-2 font-semibold",children:i.name}),N.jsx("td",{className:"p-2 text-right",children:i.totalStrokes}),N.jsx("td",{className:"p-2 text-right",children:i.id===t.winnerId?"🏆 Winner":t.tiedPlayerIds.includes(i.id)?"🤝 Tied":""})]},i.id))})]})]}),N.jsxs("div",{className:"mt-6 flex gap-4",children:[N.jsx("button",{onClick:()=>e==null?void 0:e.setGameState("menu"),className:"flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-lg transition-all",children:"Back to Menu"}),N.jsx("button",{onClick:()=>{const i=(t==null?void 0:t.playerCount)||2;e==null||e.loadLevel("forest"),e==null||e.startGame("local_multiplayer",i)},className:"flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all",children:"Play Again"})]})]})})}LM.createRoot(document.getElementById("root")).render(N.jsx(Ci.StrictMode,{children:N.jsx(W2,{})}));
