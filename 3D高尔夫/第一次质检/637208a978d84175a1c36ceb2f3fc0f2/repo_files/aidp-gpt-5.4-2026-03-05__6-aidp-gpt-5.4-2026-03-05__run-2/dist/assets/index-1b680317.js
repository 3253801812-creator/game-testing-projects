(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Bg={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=Symbol.for("react.transitional.element"),NS=Symbol.for("react.fragment");function Fg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:US,type:t,key:i,ref:e!==void 0?e:null,props:n}}eu.Fragment=NS;eu.jsx=Fg;eu.jsxs=Fg;Bg.exports=eu;var ce=Bg.exports,Hg={exports:{}},Ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=Symbol.for("react.transitional.element"),LS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),PS=Symbol.for("react.strict_mode"),zS=Symbol.for("react.profiler"),IS=Symbol.for("react.consumer"),BS=Symbol.for("react.context"),FS=Symbol.for("react.forward_ref"),HS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),VS=Symbol.for("react.activity"),lm=Symbol.iterator;function kS(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Xg={};function zr(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Vg}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wg(){}Wg.prototype=zr.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Vg}var Oh=Lh.prototype=new Wg;Oh.constructor=Lh;kg(Oh,zr.prototype);Oh.isPureReactComponent=!0;var cm=Array.isArray;function Wf(){}var Tt={H:null,A:null,T:null,S:null},qg=Object.prototype.hasOwnProperty;function Ph(t,e,n){var i=n.ref;return{$$typeof:Nh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function XS(t,e){return Ph(t.type,e,t.props)}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nh}function WS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WS(""+t.key):e.toString(36)}function qS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Wf,Wf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Qs(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Nh:case LS:r=!0;break;case Gg:return r=t._init,Qs(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Tu(t,0):i,cm(a)?(n="",r!=null&&(n=r.replace(um,"$&/")+"/"),Qs(a,e,n,"",function(c){return c})):a!=null&&(zh(a)&&(a=XS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(um,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(cm(t))for(var l=0;l<t.length;l++)i=t[l],s=o+Tu(i,l),r+=Qs(i,e,n,s,a);else if(l=kS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+Tu(i,l++),r+=Qs(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Qs(qS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function ul(t,e,n){if(t==null)return t;var i=[],a=0;return Qs(t,i,"","",function(s){return e.call(n,s,a++)}),i}function YS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ZS={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Activity=VS;Ge.Children=ZS;Ge.Component=zr;Ge.Fragment=OS;Ge.Profiler=zS;Ge.PureComponent=Lh;Ge.StrictMode=PS;Ge.Suspense=HS;Ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;Ge.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Tt.H.useMemoCache(t)}};Ge.cache=function(t){return function(){return t.apply(null,arguments)}};Ge.cacheSignal=function(){return null};Ge.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=kg({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!qg.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Ph(t.type,a,i)};Ge.createContext=function(t){return t={$$typeof:BS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:IS,_context:t},t};Ge.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Ph(t,s,a)};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:FS,render:t}};Ge.isValidElement=zh;Ge.lazy=function(t){return{$$typeof:Gg,_payload:{_status:-1,_result:t},_init:YS}};Ge.memo=function(t,e){return{$$typeof:GS,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Tt.T,n={};Tt.T=n;try{var i=t(),a=Tt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Wf,fm)}catch(s){fm(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Tt.T=e}};Ge.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()};Ge.use=function(t){return Tt.H.use(t)};Ge.useActionState=function(t,e,n){return Tt.H.useActionState(t,e,n)};Ge.useCallback=function(t,e){return Tt.H.useCallback(t,e)};Ge.useContext=function(t){return Tt.H.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t,e){return Tt.H.useDeferredValue(t,e)};Ge.useEffect=function(t,e){return Tt.H.useEffect(t,e)};Ge.useEffectEvent=function(t){return Tt.H.useEffectEvent(t)};Ge.useId=function(){return Tt.H.useId()};Ge.useImperativeHandle=function(t,e,n){return Tt.H.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Tt.H.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Tt.H.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Tt.H.useMemo(t,e)};Ge.useOptimistic=function(t,e){return Tt.H.useOptimistic(t,e)};Ge.useReducer=function(t,e,n){return Tt.H.useReducer(t,e,n)};Ge.useRef=function(t){return Tt.H.useRef(t)};Ge.useState=function(t){return Tt.H.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Tt.H.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Tt.H.useTransition()};Ge.version="19.2.8";Hg.exports=Ge;var an=Hg.exports,Yg={exports:{}},tu={},Zg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var H=L.length;L.push(O);e:for(;0<H;){var K=H-1>>>1,ie=L[K];if(0<a(ie,O))L[K]=O,L[H]=ie,H=K;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],H=L.pop();if(H!==O){L[0]=H;e:for(var K=0,ie=L.length,oe=ie>>>1;K<oe;){var ue=2*(K+1)-1,Ze=L[ue],Ke=ue+1,Be=L[Ke];if(0>a(Ze,H))Ke<ie&&0>a(Be,Ze)?(L[K]=Be,L[Ke]=H,K=Ke):(L[K]=Ze,L[ue]=H,K=ue);else if(Ke<ie&&0>a(Be,H))L[K]=Be,L[Ke]=H,K=Ke;else break e}}return O}function a(L,O){var H=L.sortIndex-O.sortIndex;return H!==0?H:L.id-O.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,p=null,u=3,d=!1,S=!1,b=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function v(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function T(L){if(b=!1,v(L),!S)if(n(l)!==null)S=!0,A||(A=!0,D());else{var O=n(c);O!==null&&U(T,O.startTime-L)}}var A=!1,C=-1,g=5,R=-1;function N(){return m?!0:!(t.unstable_now()-R<g)}function E(){if(m=!1,A){var L=t.unstable_now();R=L;var O=!0;try{e:{S=!1,b&&(b=!1,x(C),C=-1),d=!0;var H=u;try{t:{for(v(L),p=n(l);p!==null&&!(p.expirationTime>L&&N());){var K=p.callback;if(typeof K=="function"){p.callback=null,u=p.priorityLevel;var ie=K(p.expirationTime<=L);if(L=t.unstable_now(),typeof ie=="function"){p.callback=ie,v(L),O=!0;break t}p===n(l)&&i(l),v(L)}else i(l);p=n(l)}if(p!==null)O=!0;else{var oe=n(c);oe!==null&&U(T,oe.startTime-L),O=!1}}break e}finally{p=null,u=H,d=!1}O=void 0}}finally{O?D():A=!1}}}var D;if(typeof y=="function")D=function(){y(E)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,q=V.port2;V.port1.onmessage=E,D=function(){q.postMessage(null)}}else D=function(){f(E,0)};function U(L,O){C=f(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var H=u;u=O;try{return L()}finally{u=H}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=u;u=L;try{return O()}finally{u=H}},t.unstable_scheduleCallback=function(L,O,H){var K=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?K+H:K):H=K,L){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,L={id:h++,callback:O,priorityLevel:L,startTime:H,expirationTime:ie,sortIndex:-1},H>K?(L.sortIndex=H,e(c,L),n(l)===null&&L===n(c)&&(b?(x(C),C=-1):b=!0,U(T,H-K))):(L.sortIndex=ie,e(l,L),S||d||(S=!0,A||(A=!0,D()))),L},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(L){var O=u;return function(){var H=u;u=O;try{return L.apply(this,arguments)}finally{u=H}}}})(Kg);Zg.exports=Kg;var KS=Zg.exports,Qg={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=an;function Jg(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ga(){}var xn={d:{f:ga,r:function(){throw Error(Jg(522))},D:ga,C:ga,L:ga,m:ga,X:ga,S:ga,M:ga},p:0,findDOMNode:null},JS=Symbol.for("react.portal");function jS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:JS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var mo=QS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function nu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Jg(299));return jS(t,e,null,n)};yn.flushSync=function(t){var e=mo.T,n=xn.p;try{if(mo.T=null,xn.p=2,t)return t()}finally{mo.T=e,xn.p=n,xn.d.f()}};yn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,xn.d.C(t,e))};yn.prefetchDNS=function(t){typeof t=="string"&&xn.d.D(t)};yn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=nu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?xn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&xn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};yn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=nu(e.as,e.crossOrigin);xn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&xn.d.M(t)};yn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=nu(n,e.crossOrigin);xn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};yn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=nu(e.as,e.crossOrigin);xn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else xn.d.m(t)};yn.requestFormReset=function(t){xn.d.r(t)};yn.unstable_batchedUpdates=function(t,e){return t(e)};yn.useFormState=function(t,e,n){return mo.H.useFormState(t,e,n)};yn.useFormStatus=function(){return mo.H.useHostTransitionStatus()};yn.version="19.2.8";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),Qg.exports=yn;var $S=Qg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=KS,$g=an,ey=$S;function ne(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function n_(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dm(t){if(Yo(t)!==t)throw Error(ne(188))}function ty(t){var e=t.alternate;if(!e){if(e=Yo(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return dm(a),t;if(s===i)return dm(a),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function i_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=i_(t),e!==null)return e;t=t.sibling}return null}var At=Object.assign,ny=Symbol.for("react.element"),fl=Symbol.for("react.transitional.element"),ro=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),a_=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),s_=Symbol.for("react.consumer"),Qi=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),ba=Symbol.for("react.lazy"),Kf=Symbol.for("react.activity"),iy=Symbol.for("react.memo_cache_sentinel"),hm=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var ay=Symbol.for("react.client.reference");function Qf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ay?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case qf:return"Profiler";case a_:return"StrictMode";case Yf:return"Suspense";case Zf:return"SuspenseList";case Kf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ro:return"Portal";case Qi:return t.displayName||"Context";case s_:return(t._context.displayName||"Context")+".Consumer";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:Qf(t.type)||"Memo";case ba:e=t._payload,t=t._init;try{return Qf(t(e))}catch{}}return null}var oo=Array.isArray,ze=$g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt=ey.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ps={pending:!1,data:null,method:null,action:null},Jf=[],er=-1;function Oi(t){return{current:t}}function tn(t){0>er||(t.current=Jf[er],Jf[er]=null,er--)}function yt(t,e){er++,Jf[er]=t.current,t.current=e}var Ci=Oi(null),Do=Oi(null),za=Oi(null),xc=Oi(null);function Sc(t,e){switch(yt(za,e),yt(Do,t),yt(Ci,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=x0(e),t=Tx(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tn(Ci),yt(Ci,t)}function yr(){tn(Ci),tn(Do),tn(za)}function jf(t){t.memoizedState!==null&&yt(xc,t);var e=Ci.current,n=Tx(e,t.type);e!==n&&(yt(Do,t),yt(Ci,n))}function yc(t){Do.current===t&&(tn(Ci),tn(Do)),xc.current===t&&(tn(xc),Go._currentValue=ps)}var Au,pm;function ss(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||"",pm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Au+t+pm}var Ru=!1;function Cu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(t,[],p)}else{try{p.call()}catch(d){u=d}t.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ss(n):""}function sy(t,e){switch(t.tag){case 26:case 27:case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return t.child!==e&&e!==null?ss("Suspense Fallback"):ss("Suspense");case 19:return ss("SuspenseList");case 0:case 15:return Cu(t.type,!1);case 11:return Cu(t.type.render,!1);case 1:return Cu(t.type,!0);case 31:return ss("Activity");default:return""}}function mm(t){try{var e="",n=null;do e+=sy(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $f=Object.prototype.hasOwnProperty,Fh=Zt.unstable_scheduleCallback,wu=Zt.unstable_cancelCallback,ry=Zt.unstable_shouldYield,oy=Zt.unstable_requestPaint,Hn=Zt.unstable_now,ly=Zt.unstable_getCurrentPriorityLevel,r_=Zt.unstable_ImmediatePriority,o_=Zt.unstable_UserBlockingPriority,Mc=Zt.unstable_NormalPriority,cy=Zt.unstable_LowPriority,l_=Zt.unstable_IdlePriority,uy=Zt.log,fy=Zt.unstable_setDisableYieldValue,Zo=null,Gn=null;function Da(t){if(typeof uy=="function"&&fy(t),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(Zo,t)}catch{}}var Vn=Math.clz32?Math.clz32:py,dy=Math.log,hy=Math.LN2;function py(t){return t>>>=0,t===0?32:31-(dy(t)/hy|0)|0}var dl=256,hl=262144,pl=4194304;function rs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function iu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=rs(i):(r&=o,r!==0?a=rs(r):n||(n=o&~t,n!==0&&(a=rs(n))))):(o=i&~s,o!==0?a=rs(o):r!==0?a=rs(r):n||(n=i&~t,n!==0&&(a=rs(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Ko(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function my(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c_(){var t=pl;return pl<<=1,!(pl&62914560)&&(pl=4194304),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gy(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Vn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&u_(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function u_(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Vn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function f_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function d_(t,e){var n=e&-e;return n=n&42?1:Hh(n),n&(t.suspendedLanes|e)?0:n}function Hh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function h_(){var t=lt.p;return t!==0?t:(t=window.event,t===void 0?32:zx(t.type))}function gm(t,e){var n=lt.p;try{return lt.p=t,e()}finally{lt.p=n}}var Ja=Math.random().toString(36).slice(2),rn="__reactFiber$"+Ja,wn="__reactProps$"+Ja,Ir="__reactContainer$"+Ja,ed="__reactEvents$"+Ja,_y="__reactListeners$"+Ja,vy="__reactHandles$"+Ja,_m="__reactResources$"+Ja,Jo="__reactMarker$"+Ja;function Vh(t){delete t[rn],delete t[wn],delete t[ed],delete t[_y],delete t[vy]}function tr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=E0(t);t!==null;){if(n=t[rn])return n;t=E0(t)}return e}t=n,n=t.parentNode}return null}function Br(t){if(t=t[rn]||t[Ir]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function lo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ne(33))}function fr(t){var e=t[_m];return e||(e=t[_m]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function en(t){t[Jo]=!0}var p_=new Set,m_={};function As(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(m_[t]=e,t=0;t<e.length;t++)p_.add(e[t])}var xy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vm={},xm={};function Sy(t){return $f.call(xm,t)?!0:$f.call(vm,t)?!1:xy.test(t)?xm[t]=!0:(vm[t]=!0,!1)}function jl(t,e,n){if(Sy(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ml(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function zi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yy(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function td(t){if(!t._valueTracker){var e=g_(t)?"checked":"value";t._valueTracker=yy(t,e,""+t[e])}}function __(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=g_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var My=/[\n"\\]/g;function ti(t){return t.replace(My,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nd(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Jn(e)):t.value!==""+Jn(e)&&(t.value=""+Jn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?id(t,r,Jn(e)):n!=null?id(t,r,Jn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Jn(o):t.removeAttribute("name")}function v_(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){td(t);return}n=n!=null?""+Jn(n):"",e=e!=null?""+Jn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),td(t)}function id(t,e,n){e==="number"&&bc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function dr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function x_(t,e,n){if(e!=null&&(e=""+Jn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Jn(n):""}function S_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ne(92));if(oo(i)){if(1<i.length)throw Error(ne(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Jn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),td(t)}function br(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var by=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||by.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function y_(t,e,n){if(e!=null&&typeof e!="object")throw Error(ne(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Sm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&Sm(t,s,e[s])}function kh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(t){return Ty.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var ad=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,hr=null;function ym(t){var e=Br(t);if(e&&(t=e.stateNode)){var n=t[wn]||null;e:switch(t=e.stateNode,e.type){case"input":if(nd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[wn]||null;if(!a)throw Error(ne(90));nd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&__(i)}break e;case"textarea":x_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&dr(t,!!n.multiple,e,!1)}}}var Uu=!1;function M_(t,e,n){if(Uu)return t(e,n);Uu=!0;try{var i=t(e);return i}finally{if(Uu=!1,(nr!==null||hr!==null)&&(mu(),nr&&(e=nr,t=hr,hr=nr=null,ym(e),t)))for(e=0;e<t.length;e++)ym(t[e])}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var i=n[wn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=!1;if(sa)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{sd=!1}var Ua=null,Wh=null,ec=null;function b_(){if(ec)return ec;var t,e=Wh,n=e.length,i,a="value"in Ua?Ua.value:Ua.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return ec=a.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Mm(){return!1}function Dn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Mm,this.isPropagationStopped=Mm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Dn(Rs),jo=At({},Rs,{view:0,detail:0}),Ay=Dn(jo),Nu,Lu,Zr,su=At({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(Nu=t.screenX-Zr.screenX,Lu=t.screenY-Zr.screenY):Lu=Nu=0,Zr=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),bm=Dn(su),Ry=At({},su,{dataTransfer:0}),Cy=Dn(Ry),wy=At({},jo,{relatedTarget:0}),Ou=Dn(wy),Dy=At({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=Dn(Dy),Ny=At({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=Dn(Ny),Oy=At({},Rs,{data:0}),Em=Dn(Oy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iy[t])?!!e[t]:!1}function qh(){return By}var Fy=At({},jo,{key:function(t){if(t.key){var e=Py[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=Dn(Fy),Gy=At({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Dn(Gy),Vy=At({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),ky=Dn(Vy),Xy=At({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Dn(Xy),qy=At({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Dn(qy),Zy=At({},Rs,{newState:0,oldState:0}),Ky=Dn(Zy),Qy=[9,13,27,32],Yh=sa&&"CompositionEvent"in window,go=null;sa&&"documentMode"in document&&(go=document.documentMode);var Jy=sa&&"TextEvent"in window&&!go,E_=sa&&(!Yh||go&&8<go&&11>=go),Am=String.fromCharCode(32),Rm=!1;function T_(t,e){switch(t){case"keyup":return Qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function jy(t,e){switch(t){case"compositionend":return A_(e);case"keypress":return e.which!==32?null:(Rm=!0,Am);case"textInput":return t=e.data,t===Am&&Rm?null:t;default:return null}}function $y(t,e){if(ir)return t==="compositionend"||!Yh&&T_(t,e)?(t=b_(),ec=Wh=Ua=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var eM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eM[t.type]:e==="textarea"}function R_(t,e,n,i){nr?hr?hr.push(i):hr=[i]:nr=i,e=Gc(e,"onChange"),0<e.length&&(n=new au("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _o=null,No=null;function tM(t){Mx(t,0)}function ru(t){var e=lo(t);if(__(e))return t}function wm(t,e){if(t==="change")return e}var C_=!1;if(sa){var Pu;if(sa){var zu="oninput"in document;if(!zu){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),zu=typeof Dm.oninput=="function"}Pu=zu}else Pu=!1;C_=Pu&&(!document.documentMode||9<document.documentMode)}function Um(){_o&&(_o.detachEvent("onpropertychange",w_),No=_o=null)}function w_(t){if(t.propertyName==="value"&&ru(No)){var e=[];R_(e,No,t,Xh(t)),M_(tM,e)}}function nM(t,e,n){t==="focusin"?(Um(),_o=e,No=n,_o.attachEvent("onpropertychange",w_)):t==="focusout"&&Um()}function iM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(No)}function aM(t,e){if(t==="click")return ru(e)}function sM(t,e){if(t==="input"||t==="change")return ru(e)}function rM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:rM;function Lo(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!$f.call(e,a)||!Xn(t[a],e[a]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Nm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var oM=sa&&"documentMode"in document&&11>=document.documentMode,ar=null,rd=null,vo=null,od=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||ar==null||ar!==bc(i)||(i=ar,"selectionStart"in i&&Zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&Lo(vo,i)||(vo=i,i=Gc(rd,"onSelect"),0<i.length&&(e=new au("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ar)))}function es(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},Iu={},N_={};sa&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Cs(t){if(Iu[t])return Iu[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N_)return Iu[t]=e[n];return t}var L_=Cs("animationend"),O_=Cs("animationiteration"),P_=Cs("animationstart"),lM=Cs("transitionrun"),cM=Cs("transitionstart"),uM=Cs("transitioncancel"),z_=Cs("transitionend"),I_=new Map,ld="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ld.push("scrollEnd");function gi(t,e){I_.set(t,e),As(e,[t])}var Ec=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Kn=[],rr=0,Kh=0;function ou(){for(var t=rr,e=Kh=rr=0;e<t;){var n=Kn[e];Kn[e++]=null;var i=Kn[e];Kn[e++]=null;var a=Kn[e];Kn[e++]=null;var s=Kn[e];if(Kn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&B_(n,a,s)}}function lu(t,e,n,i){Kn[rr++]=t,Kn[rr++]=e,Kn[rr++]=n,Kn[rr++]=i,Kh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Qh(t,e,n,i){return lu(t,e,n,i),Tc(t)}function ws(t,e){return lu(t,null,null,e),Tc(t)}function B_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Vn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function Tc(t){if(50<Ro)throw Ro=0,wd=null,Error(ne(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var or={};function fM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new fM(t,e,n,i)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function F_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function nc(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")Jh(t)&&(r=1);else if(typeof t=="string")r=gb(t,n,Ci.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Kf:return t=In(31,n,e,a),t.elementType=Kf,t.lanes=s,t;case $s:return ms(n.children,a,s,e);case a_:r=8,a|=24;break;case qf:return t=In(12,n,e,a|2),t.elementType=qf,t.lanes=s,t;case Yf:return t=In(13,n,e,a),t.elementType=Yf,t.lanes=s,t;case Zf:return t=In(19,n,e,a),t.elementType=Zf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qi:r=10;break e;case s_:r=9;break e;case Ih:r=11;break e;case Bh:r=14;break e;case ba:r=16,i=null;break e}r=29,n=Error(ne(130,t===null?"null":typeof t,"")),i=null}return e=In(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function ms(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function Bu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function H_(t){var e=In(18,null,null,0);return e.stateNode=t,e}function Fu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pm=new WeakMap;function ni(t,e){if(typeof t=="object"&&t!==null){var n=Pm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:mm(e)},Pm.set(t,e),e)}return{value:t,source:e,stack:mm(e)}}var lr=[],cr=0,Ac=null,Oo=0,jn=[],$n=0,Wa=null,bi=1,Ei="";function Yi(t,e){lr[cr++]=Oo,lr[cr++]=Ac,Ac=t,Oo=e}function G_(t,e,n){jn[$n++]=bi,jn[$n++]=Ei,jn[$n++]=Wa,Wa=t;var i=bi;t=Ei;var a=32-Vn(i)-1;i&=~(1<<a),n+=1;var s=32-Vn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,bi=1<<32-Vn(e)+a|n<<a|i,Ei=s+t}else bi=1<<s|n<<a|i,Ei=t}function jh(t){t.return!==null&&(Yi(t,1),G_(t,1,0))}function $h(t){for(;t===Ac;)Ac=lr[--cr],lr[cr]=null,Oo=lr[--cr],lr[cr]=null;for(;t===Wa;)Wa=jn[--$n],jn[$n]=null,Ei=jn[--$n],jn[$n]=null,bi=jn[--$n],jn[$n]=null}function V_(t,e){jn[$n++]=bi,jn[$n++]=Ei,jn[$n++]=Wa,bi=e.id,Ei=e.overflow,Wa=t}var on=null,Et=null,nt=!1,Ia=null,ii=!1,cd=Error(ne(519));function qa(t){var e=Error(ne(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(ni(e,t)),cd}function zm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[rn]=t,e[wn]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<Fo.length;n++)Qe(Fo[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),v_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),S_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Ex(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=Ji),e=!0):e=!1,e||qa(t,!0)}function Im(t){for(on=t.return;on;)switch(on.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:on=on.return}}function Os(t){if(t!==on)return!1;if(!nt)return Im(t),nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Od(t.type,t.memoizedProps)),n=!n),n&&Et&&qa(t),Im(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));Et=b0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));Et=b0(t)}else e===27?(e=Et,ja(t.type)?(t=Bd,Bd=null,Et=t):Et=e):Et=on?si(t.stateNode.nextSibling):null;return!0}function xs(){Et=on=null,nt=!1}function Hu(){var t=Ia;return t!==null&&(An===null?An=t:An.push.apply(An,t),Ia=null),t}function Po(t){Ia===null?Ia=[t]:Ia.push(t)}var ud=Oi(null),Ds=null,ji=null;function Ta(t,e,n){yt(ud,e._currentValue),e._currentValue=n}function ta(t){t._currentValue=ud.current,tn(ud)}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function dd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),fd(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(ne(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),fd(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Fr(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(ne(387));if(r=r.memoizedProps,r!==null){var o=a.type;Xn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===xc.current){if(r=a.alternate,r===null)throw Error(ne(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}a=a.return}t!==null&&dd(e,t,n,i),e.flags|=262144}function Rc(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ss(t){Ds=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return k_(Ds,t)}function _l(t,e){return Ds===null&&Ss(t),k_(t,e)}function k_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ji===null){if(t===null)throw Error(ne(308));ji=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ji=ji.next=e;return n}var dM=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},hM=Zt.unstable_scheduleCallback,pM=Zt.unstable_NormalPriority,Wt={$$typeof:Qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ep(){return{controller:new dM,data:new Map,refCount:0}}function $o(t){t.refCount--,t.refCount===0&&hM(pM,function(){t.controller.abort()})}var xo=null,hd=0,Er=0,pr=null;function mM(t,e){if(xo===null){var n=xo=[];hd=0,Er=Tp(),pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return hd++,e.then(Bm,Bm),e}function Bm(){if(--hd===0&&xo!==null){pr!==null&&(pr.status="fulfilled");var t=xo;xo=null,Er=0,pr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function gM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Fm=ze.S;ze.S=function(t,e){ix=Hn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&mM(t,e),Fm!==null&&Fm(t,e)};var gs=Oi(null);function tp(){var t=gs.current;return t!==null?t:vt.pooledCache}function ic(t,e){e===null?yt(gs,gs.current):yt(gs,e.pool)}function X_(){var t=tp();return t===null?null:{parent:Wt._currentValue,pool:t}}var Hr=Error(ne(460)),np=Error(ne(474)),cu=Error(ne(542)),Cc={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function W_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ji,Ji),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vm(t),t;default:if(typeof e.status=="string")e.then(Ji,Ji);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(ne(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Vm(t),t}throw _s=e,Hr}}function os(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_s=n,Hr):n}}var _s=null;function Gm(){if(_s===null)throw Error(ne(459));var t=_s;return _s=null,t}function Vm(t){if(t===Hr||t===cu)throw Error(ne(483))}var mr=null,zo=0;function vl(t){var e=zo;return zo+=1,mr===null&&(mr=[]),W_(mr,t,e)}function Kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function xl(t,e){throw e.$$typeof===ny?Error(ne(525)):(t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function q_(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f){for(var x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(f,x){return f=ea(f,x),f.index=0,f.sibling=null,f}function s(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=67108866,x):y):(f.flags|=67108866,x)):(f.flags|=1048576,x)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,x,y,v){return x===null||x.tag!==6?(x=Bu(y,f.mode,v),x.return=f,x):(x=a(x,y),x.return=f,x)}function l(f,x,y,v){var T=y.type;return T===$s?h(f,x,y.props.children,v,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ba&&os(T)===x.type)?(x=a(x,y.props),Kr(x,y),x.return=f,x):(x=nc(y.type,y.key,y.props,null,f.mode,v),Kr(x,y),x.return=f,x)}function c(f,x,y,v){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Fu(y,f.mode,v),x.return=f,x):(x=a(x,y.children||[]),x.return=f,x)}function h(f,x,y,v,T){return x===null||x.tag!==7?(x=ms(y,f.mode,v,T),x.return=f,x):(x=a(x,y),x.return=f,x)}function p(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Bu(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:return y=nc(x.type,x.key,x.props,null,f.mode,y),Kr(y,x),y.return=f,y;case ro:return x=Fu(x,f.mode,y),x.return=f,x;case ba:return x=os(x),p(f,x,y)}if(oo(x)||qr(x))return x=ms(x,f.mode,y,null),x.return=f,x;if(typeof x.then=="function")return p(f,vl(x),y);if(x.$$typeof===Qi)return p(f,_l(f,x),y);xl(f,x)}return null}function u(f,x,y,v){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(f,x,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return y.key===T?l(f,x,y,v):null;case ro:return y.key===T?c(f,x,y,v):null;case ba:return y=os(y),u(f,x,y,v)}if(oo(y)||qr(y))return T!==null?null:h(f,x,y,v,null);if(typeof y.then=="function")return u(f,x,vl(y),v);if(y.$$typeof===Qi)return u(f,x,_l(f,y),v);xl(f,y)}return null}function d(f,x,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(y)||null,o(x,f,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return f=f.get(v.key===null?y:v.key)||null,l(x,f,v,T);case ro:return f=f.get(v.key===null?y:v.key)||null,c(x,f,v,T);case ba:return v=os(v),d(f,x,y,v,T)}if(oo(v)||qr(v))return f=f.get(y)||null,h(x,f,v,T,null);if(typeof v.then=="function")return d(f,x,y,vl(v),T);if(v.$$typeof===Qi)return d(f,x,y,_l(x,v),T);xl(x,v)}return null}function S(f,x,y,v){for(var T=null,A=null,C=x,g=x=0,R=null;C!==null&&g<y.length;g++){C.index>g?(R=C,C=null):R=C.sibling;var N=u(f,C,y[g],v);if(N===null){C===null&&(C=R);break}t&&C&&N.alternate===null&&e(f,C),x=s(N,x,g),A===null?T=N:A.sibling=N,A=N,C=R}if(g===y.length)return n(f,C),nt&&Yi(f,g),T;if(C===null){for(;g<y.length;g++)C=p(f,y[g],v),C!==null&&(x=s(C,x,g),A===null?T=C:A.sibling=C,A=C);return nt&&Yi(f,g),T}for(C=i(C);g<y.length;g++)R=d(C,f,g,y[g],v),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?g:R.key),x=s(R,x,g),A===null?T=R:A.sibling=R,A=R);return t&&C.forEach(function(E){return e(f,E)}),nt&&Yi(f,g),T}function b(f,x,y,v){if(y==null)throw Error(ne(151));for(var T=null,A=null,C=x,g=x=0,R=null,N=y.next();C!==null&&!N.done;g++,N=y.next()){C.index>g?(R=C,C=null):R=C.sibling;var E=u(f,C,N.value,v);if(E===null){C===null&&(C=R);break}t&&C&&E.alternate===null&&e(f,C),x=s(E,x,g),A===null?T=E:A.sibling=E,A=E,C=R}if(N.done)return n(f,C),nt&&Yi(f,g),T;if(C===null){for(;!N.done;g++,N=y.next())N=p(f,N.value,v),N!==null&&(x=s(N,x,g),A===null?T=N:A.sibling=N,A=N);return nt&&Yi(f,g),T}for(C=i(C);!N.done;g++,N=y.next())N=d(C,f,g,N.value,v),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?g:N.key),x=s(N,x,g),A===null?T=N:A.sibling=N,A=N);return t&&C.forEach(function(D){return e(f,D)}),nt&&Yi(f,g),T}function m(f,x,y,v){if(typeof y=="object"&&y!==null&&y.type===$s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:e:{for(var T=y.key;x!==null;){if(x.key===T){if(T=y.type,T===$s){if(x.tag===7){n(f,x.sibling),v=a(x,y.props.children),v.return=f,f=v;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ba&&os(T)===x.type){n(f,x.sibling),v=a(x,y.props),Kr(v,y),v.return=f,f=v;break e}n(f,x);break}else e(f,x);x=x.sibling}y.type===$s?(v=ms(y.props.children,f.mode,v,y.key),v.return=f,f=v):(v=nc(y.type,y.key,y.props,null,f.mode,v),Kr(v,y),v.return=f,f=v)}return r(f);case ro:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),v=a(x,y.children||[]),v.return=f,f=v;break e}else{n(f,x);break}else e(f,x);x=x.sibling}v=Fu(y,f.mode,v),v.return=f,f=v}return r(f);case ba:return y=os(y),m(f,x,y,v)}if(oo(y))return S(f,x,y,v);if(qr(y)){if(T=qr(y),typeof T!="function")throw Error(ne(150));return y=T.call(y),b(f,x,y,v)}if(typeof y.then=="function")return m(f,x,vl(y),v);if(y.$$typeof===Qi)return m(f,x,_l(f,y),v);xl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),v=a(x,y),v.return=f,f=v):(n(f,x),v=Bu(y,f.mode,v),v.return=f,f=v),r(f)):n(f,x)}return function(f,x,y,v){try{zo=0;var T=m(f,x,y,v);return mr=null,T}catch(C){if(C===Hr||C===cu)throw C;var A=In(29,C,null,f.mode);return A.lanes=v,A.return=f,A}finally{}}}var ys=q_(!0),Y_=q_(!1),Ea=!1;function ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Tc(t),B_(t,null,n),e}return lu(t,i,e,n),Tc(t)}function So(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,f_(t,n)}}function Gu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var md=!1;function yo(){if(md){var t=pr;if(t!==null)throw t}}function Mo(t,e,n,i){md=!1;var a=t.updateQueue;Ea=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?($e&u)===u:(i&u)===u){u!==0&&u===Er&&(md=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,b=o;u=e;var m=n;switch(b.tag){case 1:if(S=b.payload,typeof S=="function"){p=S.call(m,p,u);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,u=typeof S=="function"?S.call(m,p,u):S,u==null)break e;p=At({},p,u);break e;case 2:Ea=!0}}u=o.callback,u!==null&&(t.flags|=64,d&&(t.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(1);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Za|=r,t.lanes=r,t.memoizedState=p}}function Z_(t,e){if(typeof t!="function")throw Error(ne(191,t));t.call(e)}function K_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Z_(n[t],e)}var Tr=Oi(null),wc=Oi(0);function km(t,e){t=ca,yt(wc,t),yt(Tr,e),ca=t|e.baseLanes}function gd(){yt(wc,ca),yt(Tr,Tr.current)}function ap(){ca=wc.current,tn(Tr),tn(wc)}var Wn=Oi(null),ai=null;function Aa(t){var e=t.alternate;yt(Ht,Ht.current&1),yt(Wn,t),ai===null&&(e===null||Tr.current!==null||e.memoizedState!==null)&&(ai=t)}function _d(t){yt(Ht,Ht.current),yt(Wn,t),ai===null&&(ai=t)}function Q_(t){t.tag===22?(yt(Ht,Ht.current),yt(Wn,t),ai===null&&(ai=t)):Ra()}function Ra(){yt(Ht,Ht.current),yt(Wn,Wn.current)}function zn(t){tn(Wn),ai===t&&(ai=null),tn(Ht)}var Ht=Oi(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zd(n)||Id(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=0,Xe=null,pt=null,kt=null,Uc=!1,gr=!1,Ms=!1,Nc=0,Io=0,_r=null,_M=0;function Ot(){throw Error(ne(321))}function sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function rp(t,e,n,i,a,s){return ra=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ze.H=t===null||t.memoizedState===null?Rv:_p,Ms=!1,s=n(i,a),Ms=!1,gr&&(s=j_(e,n,i,a)),J_(t),s}function J_(t){ze.H=Bo;var e=pt!==null&&pt.next!==null;if(ra=0,kt=pt=Xe=null,Uc=!1,Io=0,_r=null,e)throw Error(ne(300));t===null||qt||(t=t.dependencies,t!==null&&Rc(t)&&(qt=!0))}function j_(t,e,n,i){Xe=t;var a=0;do{if(gr&&(_r=null),Io=0,gr=!1,25<=a)throw Error(ne(301));if(a+=1,kt=pt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}ze.H=Cv,s=e(n,i)}while(gr);return s}function vM(){var t=ze.H,e=t.useState()[0];return e=typeof e.then=="function"?el(e):e,t=t.useState()[0],(pt!==null?pt.memoizedState:null)!==t&&(Xe.flags|=1024),e}function op(){var t=Nc!==0;return Nc=0,t}function lp(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function cp(t){if(Uc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Uc=!1}ra=0,kt=pt=Xe=null,gr=!1,Io=Nc=0,_r=null}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Xe.memoizedState=kt=t:kt=kt.next=t,kt}function Gt(){if(pt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=kt===null?Xe.memoizedState:kt.next;if(e!==null)kt=e,pt=t;else{if(t===null)throw Xe.alternate===null?Error(ne(467)):Error(ne(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},kt===null?Xe.memoizedState=kt=t:kt=kt.next=t}return kt}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(t){var e=Io;return Io+=1,_r===null&&(_r=[]),t=W_(_r,t,e),e=Xe,(kt===null?e.memoizedState:kt.next)===null&&(e=e.alternate,ze.H=e===null||e.memoizedState===null?Rv:_p),t}function fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return el(t);if(t.$$typeof===Qi)return ln(t)}throw Error(ne(438,String(t)))}function up(t){var e=null,n=Xe.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Xe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=uu(),Xe.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=iy;return e.index++,n}function oa(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=Gt();return fp(e,pt,t)}function fp(t,e,n){var i=t.queue;if(i===null)throw Error(ne(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?($e&p)===p:(ra&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Er&&(h=!0);else if((ra&u)===u){c=c.next,u===Er&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Xe.lanes|=u,Za|=u;p=c.action,Ms&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Xe.lanes|=p,Za|=p;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!Xn(s,t.memoizedState)&&(qt=!0,h&&(n=pr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Vu(t){var e=Gt(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Xn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $_(t,e,n){var i=Xe,a=Gt(),s=nt;if(s){if(n===void 0)throw Error(ne(407));n=n()}else n=e();var r=!Xn((pt||a).memoizedState,n);if(r&&(a.memoizedState=n,qt=!0),a=a.queue,dp(nv.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||kt!==null&&kt.memoizedState.tag&1){if(i.flags|=2048,Ar(9,{destroy:void 0},tv.bind(null,i,a,n,e),null),vt===null)throw Error(ne(349));s||ra&127||ev(i,e,n)}return n}function ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e=uu(),Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tv(t,e,n,i){e.value=n,e.getSnapshot=i,iv(e)&&av(t)}function nv(t,e,n){return n(function(){iv(e)&&av(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function av(t){var e=ws(t,2);e!==null&&Rn(e,t,2)}function vd(t){var e=vn();if(typeof t=="function"){var n=t;if(t=n(),Ms){Da(!0);try{n()}finally{Da(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e}function sv(t,e,n,i){return t.baseState=n,fp(t,pt,typeof i=="function"?i:oa)}function xM(t,e,n,i,a){if(hu(t))throw Error(ne(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};ze.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,rv(e,s)):(s.next=n.next,e.pending=n.next=s)}}function rv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=ze.T,r={};ze.T=r;try{var o=n(a,i),l=ze.S;l!==null&&l(r,o),Xm(t,e,o)}catch(c){xd(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),ze.T=s}}else try{s=n(a,i),Xm(t,e,s)}catch(c){xd(t,e,c)}}function Xm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wm(t,e,i)},function(i){return xd(t,e,i)}):Wm(t,e,n)}function Wm(t,e,n){e.status="fulfilled",e.value=n,ov(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,rv(t,n)))}function xd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,ov(e),e=e.next;while(e!==i)}t.action=null}function ov(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lv(t,e){return e}function qm(t,e){if(nt){var n=vt.formState;if(n!==null){e:{var i=Xe;if(nt){if(Et){t:{for(var a=Et,s=ii;a.nodeType!==8;){if(!s){a=null;break t}if(a=si(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Et=si(a.nextSibling),i=a.data==="F!";break e}}qa(i)}i=!1}i&&(e=n[0])}}return n=vn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lv,lastRenderedState:e},n.queue=i,n=Ev.bind(null,Xe,i),i.dispatch=n,i=vd(!1),s=gp.bind(null,Xe,!1,i.queue),i=vn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=xM.bind(null,Xe,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ym(t){var e=Gt();return cv(e,pt,t)}function cv(t,e,n){if(e=fp(t,e,lv)[0],t=ac(oa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=el(e)}catch(r){throw r===Hr?cu:r}else i=e;e=Gt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Xe.flags|=2048,Ar(9,{destroy:void 0},SM.bind(null,a,n),null)),[i,s,t]}function SM(t,e){t.action=e}function Zm(t){var e=Gt(),n=pt;if(n!==null)return cv(e,n,t);Gt(),e=e.memoizedState,n=Gt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ar(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Xe.updateQueue,e===null&&(e=uu(),Xe.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function uv(){return Gt().memoizedState}function sc(t,e,n,i){var a=vn();Xe.flags|=t,a.memoizedState=Ar(1|e,{destroy:void 0},n,i===void 0?null:i)}function du(t,e,n,i){var a=Gt();i=i===void 0?null:i;var s=a.memoizedState.inst;pt!==null&&i!==null&&sp(i,pt.memoizedState.deps)?a.memoizedState=Ar(e,s,n,i):(Xe.flags|=t,a.memoizedState=Ar(1|e,s,n,i))}function Km(t,e){sc(8390656,8,t,e)}function dp(t,e){du(2048,8,t,e)}function yM(t){Xe.flags|=4;var e=Xe.updateQueue;if(e===null)e=uu(),Xe.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function fv(t){var e=Gt().memoizedState;return yM({ref:e,nextImpl:t}),function(){if(ot&2)throw Error(ne(440));return e.impl.apply(void 0,arguments)}}function dv(t,e){return du(4,2,t,e)}function hv(t,e){return du(4,4,t,e)}function pv(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){n=n!=null?n.concat([t]):null,du(4,4,pv.bind(null,e,t),n)}function hp(){}function gv(t,e){var n=Gt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _v(t,e){var n=Gt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&sp(e,i[1]))return i[0];if(i=t(),Ms){Da(!0);try{t()}finally{Da(!1)}}return n.memoizedState=[i,e],i}function pp(t,e,n){return n===void 0||ra&1073741824&&!($e&261930)?t.memoizedState=e:(t.memoizedState=n,t=sx(),Xe.lanes|=t,Za|=t,n)}function vv(t,e,n,i){return Xn(n,e)?n:Tr.current!==null?(t=pp(t,n,i),Xn(t,e)||(qt=!0),t):!(ra&42)||ra&1073741824&&!($e&261930)?(qt=!0,t.memoizedState=n):(t=sx(),Xe.lanes|=t,Za|=t,e)}function xv(t,e,n,i,a){var s=lt.p;lt.p=s!==0&&8>s?s:8;var r=ze.T,o={};ze.T=o,gp(t,!1,e,n);try{var l=a(),c=ze.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=gM(l,i);bo(t,e,h,kn(t))}else bo(t,e,i,kn(t))}catch(p){bo(t,e,{then:function(){},status:"rejected",reason:p},kn())}finally{lt.p=s,r!==null&&o.types!==null&&(r.types=o.types),ze.T=r}}function MM(){}function Sd(t,e,n,i){if(t.tag!==5)throw Error(ne(476));var a=Sv(t).queue;xv(t,a,e,ps,n===null?MM:function(){return yv(t),n(i)})}function Sv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ps,baseState:ps,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ps},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yv(t){var e=Sv(t);e.next===null&&(e=t.alternate.memoizedState),bo(t,e.next.queue,{},kn())}function mp(){return ln(Go)}function Mv(){return Gt().memoizedState}function bv(){return Gt().memoizedState}function bM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=kn();t=Ba(n);var i=Fa(e,t,n);i!==null&&(Rn(i,e,n),So(i,e,n)),e={cache:ep()},t.payload=e;return}e=e.return}}function EM(t,e,n){var i=kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hu(t)?Tv(e,n):(n=Qh(t,e,n,i),n!==null&&(Rn(n,t,i),Av(n,e,i)))}function Ev(t,e,n){var i=kn();bo(t,e,n,i)}function bo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(t))Tv(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Xn(o,r))return lu(t,e,a,0),vt===null&&ou(),!1}catch{}finally{}if(n=Qh(t,e,a,i),n!==null)return Rn(n,t,i),Av(n,e,i),!0}return!1}function gp(t,e,n,i){if(i={lane:2,revertLane:Tp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(e)throw Error(ne(479))}else e=Qh(t,n,i,2),e!==null&&Rn(e,t,2)}function hu(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function Tv(t,e){gr=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,f_(t,n)}}var Bo={readContext:ln,use:fu,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot};Bo.useEffectEvent=Ot;var Rv={readContext:ln,use:fu,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Km,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,sc(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){sc(4,2,t,e)},useMemo:function(t,e){var n=vn();e=e===void 0?null:e;var i=t();if(Ms){Da(!0);try{t()}finally{Da(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=vn();if(n!==void 0){var a=n(e);if(Ms){Da(!0);try{n(e)}finally{Da(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=EM.bind(null,Xe,t),[i.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:function(t){t=vd(t);var e=t.queue,n=Ev.bind(null,Xe,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:hp,useDeferredValue:function(t,e){var n=vn();return pp(n,t,e)},useTransition:function(){var t=vd(!1);return t=xv.bind(null,Xe,t.queue,!0,!1),vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Xe,a=vn();if(nt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),vt===null)throw Error(ne(349));$e&127||ev(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,Km(nv.bind(null,i,s,t),[t]),i.flags|=2048,Ar(9,{destroy:void 0},tv.bind(null,i,s,n,e),null),n},useId:function(){var t=vn(),e=vt.identifierPrefix;if(nt){var n=Ei,i=bi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Nc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=_M++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mp,useFormState:qm,useActionState:qm,useOptimistic:function(t){var e=vn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=gp.bind(null,Xe,!0,n),n.dispatch=e,[t,e]},useMemoCache:up,useCacheRefresh:function(){return vn().memoizedState=bM.bind(null,Xe)},useEffectEvent:function(t){var e=vn(),n={impl:t};return e.memoizedState=n,function(){if(ot&2)throw Error(ne(440));return n.impl.apply(void 0,arguments)}}},_p={readContext:ln,use:fu,useCallback:gv,useContext:ln,useEffect:dp,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:_v,useReducer:ac,useRef:uv,useState:function(){return ac(oa)},useDebugValue:hp,useDeferredValue:function(t,e){var n=Gt();return vv(n,pt.memoizedState,t,e)},useTransition:function(){var t=ac(oa)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:el(t),e]},useSyncExternalStore:$_,useId:Mv,useHostTransitionStatus:mp,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,e){var n=Gt();return sv(n,pt,t,e)},useMemoCache:up,useCacheRefresh:bv};_p.useEffectEvent=fv;var Cv={readContext:ln,use:fu,useCallback:gv,useContext:ln,useEffect:dp,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:_v,useReducer:Vu,useRef:uv,useState:function(){return Vu(oa)},useDebugValue:hp,useDeferredValue:function(t,e){var n=Gt();return pt===null?pp(n,t,e):vv(n,pt.memoizedState,t,e)},useTransition:function(){var t=Vu(oa)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:el(t),e]},useSyncExternalStore:$_,useId:Mv,useHostTransitionStatus:mp,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,e){var n=Gt();return pt!==null?sv(n,pt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:up,useCacheRefresh:bv};Cv.useEffectEvent=fv;function ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),a=Ba(i);a.payload=e,n!=null&&(a.callback=n),e=Fa(t,a,i),e!==null&&(Rn(e,t,i),So(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),a=Ba(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Fa(t,a,i),e!==null&&(Rn(e,t,i),So(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=Ba(n);i.tag=2,e!=null&&(i.callback=e),e=Fa(t,i,n),e!==null&&(Rn(e,t,n),So(e,t,n))}};function Qm(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,i)||!Lo(a,s):!0}function Jm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yd.enqueueReplaceState(e,e.state,null)}function bs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=At({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function wv(t){Ec(t)}function Dv(t){console.error(t)}function Uv(t){Ec(t)}function Lc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function jm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Md(t,e,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Lc(t,e)},n}function Nv(t){return t=Ba(t),t.tag=3,t}function Lv(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){jm(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){jm(e,n,i),typeof a!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function TM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Fr(e,n,a,!0),n=Wn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?Bc():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Cc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),ef(t,i,a)),!1;case 22:return n.flags|=65536,i===Cc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),ef(t,i,a)),!1}throw Error(ne(435,n.tag))}return ef(t,i,a),Bc(),!1}if(nt)return e=Wn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==cd&&(t=Error(ne(422),{cause:i}),Po(ni(t,n)))):(i!==cd&&(e=Error(ne(423),{cause:i}),Po(ni(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=ni(i,n),a=Md(t.stateNode,i,a),Gu(t,a),Pt!==4&&(Pt=2)),!1;var s=Error(ne(520),{cause:i});if(s=ni(s,n),Ao===null?Ao=[s]:Ao.push(s),Pt!==4&&(Pt=2),e===null)return!0;i=ni(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Md(n.stateNode,i,t),Gu(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nv(a),Lv(a,t,n,i),Gu(n,a),!1}n=n.return}while(n!==null);return!1}var vp=Error(ne(461)),qt=!1;function sn(t,e,n,i){e.child=t===null?Y_(e,null,n,i):ys(e,t.child,n,i)}function $m(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ss(e),i=rp(t,e,n,r,s,a),o=op(),t!==null&&!qt?(lp(t,e,a),la(t,e,a)):(nt&&o&&jh(e),e.flags|=1,sn(t,e,i,a),e.child)}function e0(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!Jh(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,Ov(t,e,s,i,a)):(t=nc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!xp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(r,i)&&t.ref===e.ref)return la(t,e,a)}return e.flags|=1,t=ea(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(Lo(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,xp(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,la(t,e,a)}return bd(t,e,n,i,a)}function Pv(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return t0(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(e,s!==null?s.cachePool:null),s!==null?km(e,s):gd(),Q_(e);else return i=e.lanes=536870912,t0(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ic(e,s.cachePool),km(e,s),Ra(),e.memoizedState=null):(t!==null&&ic(e,null),gd(),Ra());return sn(t,e,a,n),e.child}function co(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function t0(t,e,n,i,a){var s=tp();return s=s===null?null:{parent:Wt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&ic(e,null),gd(),Q_(e),t!==null&&Fr(t,e,i,!0),e.childLanes=a,null}function rc(t,e){return e=Oc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function n0(t,e,n){return ys(e,t.child,null,n),t=rc(e,e.pendingProps),t.flags|=2,zn(e),e.memoizedState=null,t}function AM(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(nt){if(i.mode==="hidden")return t=rc(e,i),e.lanes=536870912,co(null,t);if(_d(e),(t=Et)?(t=Rx(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:bi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},n=H_(t),n.return=e,e.child=n,on=e,Et=null)):t=null,t===null)throw qa(e);return e.lanes=536870912,null}return rc(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(_d(e),a)if(e.flags&256)e.flags&=-257,e=n0(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ne(558));else if(qt||Fr(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(i=vt,i!==null&&(r=d_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,ws(t,r),Rn(i,t,r),vp;Bc(),e=n0(t,e,n)}else t=s.treeContext,Et=si(r.nextSibling),on=e,nt=!0,Ia=null,ii=!1,t!==null&&V_(e,t),e=rc(e,i),e.flags|=4096;return e}return t=ea(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function oc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ne(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function bd(t,e,n,i,a){return Ss(e),n=rp(t,e,n,i,void 0,a),i=op(),t!==null&&!qt?(lp(t,e,a),la(t,e,a)):(nt&&i&&jh(e),e.flags|=1,sn(t,e,n,a),e.child)}function i0(t,e,n,i,a,s){return Ss(e),e.updateQueue=null,n=j_(e,i,n,a),J_(t),i=op(),t!==null&&!qt?(lp(t,e,s),la(t,e,s)):(nt&&i&&jh(e),e.flags|=1,sn(t,e,n,s),e.child)}function a0(t,e,n,i,a){if(Ss(e),e.stateNode===null){var s=or,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},ip(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):or,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ku(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&yd.enqueueReplaceState(s,s.state,null),Mo(e,i,s,a),yo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=bs(n,o);s.props=l;var c=s.context,h=n.contextType;r=or,typeof h=="object"&&h!==null&&(r=ln(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Jm(e,s,i,r),Ea=!1;var u=e.memoizedState;s.state=u,Mo(e,i,s,a),yo(),c=e.memoizedState,o||u!==c||Ea?(typeof p=="function"&&(ku(e,n,p,i),c=e.memoizedState),(l=Ea||Qm(e,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,pd(t,e),r=e.memoizedProps,h=bs(n,r),s.props=h,p=e.pendingProps,u=s.context,c=n.contextType,l=or,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Jm(e,s,i,l),Ea=!1,u=e.memoizedState,s.state=u,Mo(e,i,s,a),yo();var d=e.memoizedState;r!==p||u!==d||Ea||t!==null&&t.dependencies!==null&&Rc(t.dependencies)?(typeof o=="function"&&(ku(e,n,o,i),d=e.memoizedState),(h=Ea||Qm(e,n,h,i,u,d,l)||t!==null&&t.dependencies!==null&&Rc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,oc(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=ys(e,t.child,null,a),e.child=ys(e,null,n,a)):sn(t,e,n,a),e.memoizedState=s.state,t=e.child):t=la(t,e,a),t}function s0(t,e,n,i){return xs(),e.flags|=256,sn(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(t){return{baseLanes:t,cachePool:X_()}}function qu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Fn),t}function zv(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(nt){if(a?Aa(e):Ra(),(t=Et)?(t=Rx(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:bi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},n=H_(t),n.return=e,e.child=n,on=e,Et=null)):t=null,t===null)throw qa(e);return Id(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ra(),a=e.mode,o=Oc({mode:"hidden",children:o},a),i=ms(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=Wu(n),i.childLanes=qu(t,r,n),e.memoizedState=Xu,co(null,i)):(Aa(e),Ed(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Aa(e),e.flags&=-257,e=Yu(t,e,n)):e.memoizedState!==null?(Ra(),e.child=t.child,e.flags|=128,e=null):(Ra(),o=i.fallback,a=e.mode,i=Oc({mode:"visible",children:i.children},a),o=ms(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,ys(e,t.child,null,n),i=e.child,i.memoizedState=Wu(n),i.childLanes=qu(t,r,n),e.memoizedState=Xu,e=co(null,i));else if(Aa(e),Id(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(ne(419)),i.stack="",i.digest=r,Po({value:i,source:null,stack:null}),e=Yu(t,e,n)}else if(qt||Fr(t,e,n,!1),r=(n&t.childLanes)!==0,qt||r){if(r=vt,r!==null&&(i=d_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ws(t,i),Rn(r,t,i),vp;zd(o)||Bc(),e=Yu(t,e,n)}else zd(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Et=si(o.nextSibling),on=e,nt=!0,Ia=null,ii=!1,t!==null&&V_(e,t),e=Ed(e,i.children),e.flags|=4096);return e}return a?(Ra(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=ea(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ea(c,o):(o=ms(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,co(null,i),i=e.child,o=t.child.memoizedState,o===null?o=Wu(n):(a=o.cachePool,a!==null?(l=Wt._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=X_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=qu(t,r,n),e.memoizedState=Xu,co(t.child,i)):(Aa(e),n=t.child,t=n.sibling,n=ea(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Ed(t,e){return e=Oc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Oc(t,e){return t=In(22,t,null,e),t.lanes=0,t}function Yu(t,e,n){return ys(e,t.child,null,n),t=Ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function Zu(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Iv(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ht.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,yt(Ht,r),sn(t,e,i,n),i=nt?Oo:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Zu(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Dc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Zu(e,!0,n,null,s,i);break;case"together":Zu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function la(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Za|=e.lanes,!(n&e.childLanes))if(t!==null){if(Fr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ea(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ea(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Rc(t)))}function RM(t,e,n){switch(e.tag){case 3:Sc(e,e.stateNode.containerInfo),Ta(e,Wt,t.memoizedState.cache),xs();break;case 27:case 5:jf(e);break;case 4:Sc(e,e.stateNode.containerInfo);break;case 10:Ta(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,_d(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Aa(e),e.flags|=128,null):n&e.child.childLanes?zv(t,e,n):(Aa(e),t=la(t,e,n),t!==null?t.sibling:null);Aa(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Fr(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return Iv(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),yt(Ht,Ht.current),i)break;return null;case 22:return e.lanes=0,Pv(t,e,n,e.pendingProps);case 24:Ta(e,Wt,t.memoizedState.cache)}return la(t,e,n)}function Bv(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!xp(t,n)&&!(e.flags&128))return qt=!1,RM(t,e,n);qt=!!(t.flags&131072)}else qt=!1,nt&&e.flags&1048576&&G_(e,Oo,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=os(e.elementType),e.type=t,typeof t=="function")Jh(t)?(i=bs(t,i),e.tag=1,e=a0(null,e,t,i,n)):(e.tag=0,e=bd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Ih){e.tag=11,e=$m(null,e,t,i,n);break e}else if(a===Bh){e.tag=14,e=e0(null,e,t,i,n);break e}}throw e=Qf(t)||t,Error(ne(306,e,""))}}return e;case 0:return bd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=bs(i,e.pendingProps),a0(t,e,i,a,n);case 3:e:{if(Sc(e,e.stateNode.containerInfo),t===null)throw Error(ne(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,pd(t,e),Mo(e,i,null,n);var r=e.memoizedState;if(i=r.cache,Ta(e,Wt,i),i!==s.cache&&dd(e,[Wt],n,!0),yo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=s0(t,e,i,n);break e}else if(i!==a){a=ni(Error(ne(424)),e),Po(a),e=s0(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=si(t.firstChild),on=e,nt=!0,Ia=null,ii=!0,n=Y_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xs(),i===a){e=la(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 26:return oc(t,e),t===null?(n=A0(e.type,null,e.pendingProps,null))?e.memoizedState=n:nt||(n=e.type,t=e.pendingProps,i=Vc(za.current).createElement(n),i[rn]=e,i[wn]=t,un(i,n,t),en(i),e.stateNode=i):e.memoizedState=A0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return jf(e),t===null&&nt&&(i=e.stateNode=Cx(e.type,e.pendingProps,za.current),on=e,ii=!0,a=Et,ja(e.type)?(Bd=a,Et=si(i.firstChild)):Et=a),sn(t,e,e.pendingProps.children,n),oc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&nt&&((a=i=Et)&&(i=ib(i,e.type,e.pendingProps,ii),i!==null?(e.stateNode=i,on=e,Et=si(i.firstChild),ii=!1,a=!0):a=!1),a||qa(e)),jf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Od(a,s)?i=null:r!==null&&Od(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=rp(t,e,vM,null,null,n),Go._currentValue=a),oc(t,e),sn(t,e,i,n),e.child;case 6:return t===null&&nt&&((t=n=Et)&&(n=ab(n,e.pendingProps,ii),n!==null?(e.stateNode=n,on=e,Et=null,t=!0):t=!1),t||qa(e)),null;case 13:return zv(t,e,n);case 4:return Sc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):sn(t,e,i,n),e.child;case 11:return $m(t,e,e.type,e.pendingProps,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Ta(e,e.type,i.value),sn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,Ss(e),a=ln(a),i=i(a),e.flags|=1,sn(t,e,i,n),e.child;case 14:return e0(t,e,e.type,e.pendingProps,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 19:return Iv(t,e,n);case 31:return AM(t,e,n);case 22:return Pv(t,e,n,e.pendingProps);case 24:return Ss(e),i=ln(Wt),t===null?(a=tp(),a===null&&(a=vt,s=ep(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},ip(e),Ta(e,Wt,a)):(t.lanes&n&&(pd(t,e),Mo(e,null,null,n),yo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Ta(e,Wt,i)):(i=s.cache,Ta(e,Wt,i),i!==a.cache&&dd(e,[Wt],n,!0))),sn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(ne(156,e.tag))}function Ii(t){t.flags|=4}function Ku(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(lx())t.flags|=8192;else throw _s=Cc,np}else t.flags&=-16777217}function o0(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Ux(e))if(lx())t.flags|=8192;else throw _s=Cc,np}function Sl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?c_():536870912,t.lanes|=e,Rr|=e)}function Qr(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CM(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ta(Wt),yr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Os(e)?Ii(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hu())),bt(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ii(e),s!==null?(bt(e),o0(e,s)):(bt(e),Ku(e,a,null,i,n))):s?s!==t.memoizedState?(Ii(e),bt(e),o0(e,s)):(bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ii(e),bt(e),Ku(e,a,t,i,n)),null;case 27:if(yc(e),n=za.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ii(e);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return bt(e),null}t=Ci.current,Os(e)?zm(e):(t=Cx(a,i,n),e.stateNode=t,Ii(e))}return bt(e),null;case 5:if(yc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ii(e);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return bt(e),null}if(s=Ci.current,Os(e))zm(e);else{var r=Vc(za.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[rn]=e,s[wn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(un(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ii(e)}}return bt(e),Ku(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ii(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=za.current,Os(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[rn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ex(t.nodeValue,n)),t||qa(e,!0)}else t=Vc(t).createTextNode(i),t[rn]=e,e.stateNode=t}return bt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Os(e),n!==null){if(t===null){if(!i)throw Error(ne(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(557));t[rn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),t=!1}else n=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(zn(e),e):(zn(e),null);if(e.flags&128)throw Error(ne(558))}return bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Os(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ne(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ne(317));a[rn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),a=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(zn(e),e):(zn(e),null)}return zn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Sl(e,e.updateQueue),bt(e),null);case 4:return yr(),t===null&&Ap(e.stateNode.containerInfo),bt(e),null;case 10:return ta(e.type),bt(e),null;case 19:if(tn(Ht),i=e.memoizedState,i===null)return bt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Qr(i,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Dc(t),s!==null){for(e.flags|=128,Qr(i,!1),t=s.updateQueue,e.updateQueue=t,Sl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)F_(n,t),n=n.sibling;return yt(Ht,Ht.current&1|2),nt&&Yi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Hn()>zc&&(e.flags|=128,a=!0,Qr(i,!1),e.lanes=4194304)}else{if(!a)if(t=Dc(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Sl(e,t),Qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!nt)return bt(e),null}else 2*Hn()-i.renderingStartTime>zc&&n!==536870912&&(e.flags|=128,a=!0,Qr(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Hn(),t.sibling=null,n=Ht.current,yt(Ht,a?n&1|2:n&1),nt&&Yi(e,i.treeForkCount),t):(bt(e),null);case 22:case 23:return zn(e),ap(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),n=e.updateQueue,n!==null&&Sl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&tn(gs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ta(Wt),bt(e),null;case 25:return null;case 30:return null}throw Error(ne(156,e.tag))}function wM(t,e){switch($h(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(Wt),yr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return yc(e),null;case 31:if(e.memoizedState!==null){if(zn(e),e.alternate===null)throw Error(ne(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(zn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tn(Ht),null;case 4:return yr(),null;case 10:return ta(e.type),null;case 22:case 23:return zn(e),ap(),t!==null&&tn(gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ta(Wt),null;case 25:return null;default:return null}}function Fv(t,e){switch($h(e),e.tag){case 3:ta(Wt),yr();break;case 26:case 27:case 5:yc(e);break;case 4:yr();break;case 31:e.memoizedState!==null&&zn(e);break;case 13:zn(e);break;case 19:tn(Ht);break;case 10:ta(e.type);break;case 22:case 23:zn(e),ap(),t!==null&&tn(gs);break;case 24:ta(Wt)}}function tl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ft(e,e.return,o)}}function Ya(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(h){ft(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){ft(e,e.return,h)}}function Hv(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{K_(e,n)}catch(i){ft(t,t.return,i)}}}function Gv(t,e,n){n.props=bs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ft(t,e,i)}}function Eo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ft(t,e,a)}}function Ti(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ft(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ft(t,e,a)}else n.current=null}function Vv(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ft(t,t.return,a)}}function Qu(t,e,n){try{var i=t.stateNode;JM(i,t.type,n,e),i[wn]=e}catch(a){ft(t,t.return,a)}}function kv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ji));else if(i!==4&&(i===27&&ja(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function Pc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ja(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}function Xv(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);un(e,i,n),e[rn]=t,e[wn]=n}catch(s){ft(t,t.return,s)}}var Zi=!1,Xt=!1,ju=!1,l0=typeof WeakSet=="function"?WeakSet:Set,$t=null;function DM(t,e){if(t=t.containerInfo,Nd=qc,t=U_(t),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,h=0,p=t,u=null;t:for(;;){for(var d;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===t)break t;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},qc=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var S=bs(n.type,a);t=i.getSnapshotBeforeUpdate(S,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(b){ft(n,n.return,b)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Pd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(ne(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function Wv(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n),i&4&&tl(5,n);break;case 1:if(Fi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){ft(n,n.return,r)}else{var a=bs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){ft(n,n.return,r)}}i&64&&Hv(n),i&512&&Eo(n,n.return);break;case 3:if(Fi(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{K_(t,e)}catch(r){ft(n,n.return,r)}}break;case 27:e===null&&i&4&&Xv(n);case 26:case 5:Fi(t,n),e===null&&i&4&&Vv(n),i&512&&Eo(n,n.return);break;case 12:Fi(t,n);break;case 31:Fi(t,n),i&4&&Zv(t,n);break;case 13:Fi(t,n),i&4&&Kv(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=FM.bind(null,n),sb(t,n))));break;case 22:if(i=n.memoizedState!==null||Zi,!i){e=e!==null&&e.memoizedState!==null||Xt,a=Zi;var s=Xt;Zi=i,(Xt=e)&&!s?qi(t,n,(n.subtreeFlags&8772)!==0):Fi(t,n),Zi=a,Xt=s}break;case 30:break;default:Fi(t,n)}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Vh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,Tn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 26:Xt||Ti(n,e),Bi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xt||Ti(n,e);var i=wt,a=Tn;ja(n.type)&&(wt=n.stateNode,Tn=!1),Bi(t,e,n),Co(n.stateNode),wt=i,Tn=a;break;case 5:Xt||Ti(n,e);case 6:if(i=wt,a=Tn,wt=null,Bi(t,e,n),wt=i,Tn=a,wt!==null)if(Tn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(s){ft(n,e,s)}else try{wt.removeChild(n.stateNode)}catch(s){ft(n,e,s)}break;case 18:wt!==null&&(Tn?(t=wt,y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ur(t)):y0(wt,n.stateNode));break;case 4:i=wt,a=Tn,wt=n.stateNode.containerInfo,Tn=!0,Bi(t,e,n),wt=i,Tn=a;break;case 0:case 11:case 14:case 15:Ya(2,n,e),Xt||Ya(4,n,e),Bi(t,e,n);break;case 1:Xt||(Ti(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Gv(n,e,i)),Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:Xt=(i=Xt)||n.memoizedState!==null,Bi(t,e,n),Xt=i;break;default:Bi(t,e,n)}}function Zv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(n){ft(e,e.return,n)}}}function Kv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(n){ft(e,e.return,n)}}function UM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new l0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new l0),e;default:throw Error(ne(435,t.tag))}}function yl(t,e){var n=UM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=HM.bind(null,t,i);i.then(a,a)}})}function Mn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ja(o.type)){wt=o.stateNode,Tn=!1;break e}break;case 5:wt=o.stateNode,Tn=!1;break e;case 3:case 4:wt=o.stateNode.containerInfo,Tn=!0;break e}o=o.return}if(wt===null)throw Error(ne(160));Yv(s,r,a),wt=null,Tn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}var di=null;function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mn(e,t),bn(t),i&4&&(Ya(3,t,t.return),tl(3,t),Ya(5,t,t.return));break;case 1:Mn(e,t),bn(t),i&512&&(Xt||n===null||Ti(n,n.return)),i&64&&Zi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=di;if(Mn(e,t),bn(t),i&512&&(Xt||n===null||Ti(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Jo]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),un(s,i,n),s[rn]=t,en(s),i=s;break e;case"link":var r=C0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;case"meta":if(r=C0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;default:throw Error(ne(468,i))}s[rn]=t,en(s),i=s}t.stateNode=i}else w0(a,t.type,t.stateNode);else t.stateNode=R0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?w0(a,t.type,t.stateNode):R0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Mn(e,t),bn(t),i&512&&(Xt||n===null||Ti(n,n.return)),n!==null&&i&4&&Qu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Mn(e,t),bn(t),i&512&&(Xt||n===null||Ti(n,n.return)),t.flags&32){a=t.stateNode;try{br(a,"")}catch(S){ft(t,t.return,S)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Qu(t,a,n!==null?n.memoizedProps:a)),i&1024&&(ju=!0);break;case 6:if(Mn(e,t),bn(t),i&4){if(t.stateNode===null)throw Error(ne(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(S){ft(t,t.return,S)}}break;case 3:if(uc=null,a=di,di=kc(e.containerInfo),Mn(e,t),di=a,bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(e.containerInfo)}catch(S){ft(t,t.return,S)}ju&&(ju=!1,Jv(t));break;case 4:i=di,di=kc(t.stateNode.containerInfo),Mn(e,t),bn(t),di=i;break;case 12:Mn(e,t),bn(t);break;case 31:Mn(e,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,yl(t,i)));break;case 13:Mn(e,t),bn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pu=Hn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,yl(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Zi,h=Xt;if(Zi=c||a,Xt=h||l,Mn(e,t),Xt=h,Zi=c,bn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Zi||Xt||ls(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(S){ft(l,l.return,S)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(S){ft(l,l.return,S)}}}else if(e.tag===18){if(n===null){l=e;try{var d=l.stateNode;a?M0(d,!0):M0(l.stateNode,!1)}catch(S){ft(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,yl(t,n))));break;case 19:Mn(e,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,yl(t,i)));break;case 30:break;case 21:break;default:Mn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(kv(i)){n=i;break}i=i.return}if(n==null)throw Error(ne(160));switch(n.tag){case 27:var a=n.stateNode,s=Ju(t);Pc(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(br(r,""),n.flags&=-33);var o=Ju(t);Pc(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ju(t);Td(t,c,l);break;default:throw Error(ne(161))}}catch(h){ft(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Jv(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wv(t,e.alternate,e),e=e.sibling}function ls(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ya(4,e,e.return),ls(e);break;case 1:Ti(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Gv(e,e.return,n),ls(e);break;case 27:Co(e.stateNode);case 26:case 5:Ti(e,e.return),ls(e);break;case 22:e.memoizedState===null&&ls(e);break;case 30:ls(e);break;default:ls(e)}t=t.sibling}}function qi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:qi(a,s,n),tl(4,s);break;case 1:if(qi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ft(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Z_(l[a],o)}catch(c){ft(i,i.return,c)}}n&&r&64&&Hv(s),Eo(s,s.return);break;case 27:Xv(s);case 26:case 5:qi(a,s,n),n&&i===null&&r&4&&Vv(s),Eo(s,s.return);break;case 12:qi(a,s,n);break;case 31:qi(a,s,n),n&&r&4&&Zv(a,s);break;case 13:qi(a,s,n),n&&r&4&&Kv(a,s);break;case 22:s.memoizedState===null&&qi(a,s,n),Eo(s,s.return);break;case 30:break;default:qi(a,s,n)}e=e.sibling}}function Sp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&$o(n))}function yp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$o(t))}function li(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jv(t,e,n,i),e=e.sibling}function jv(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:li(t,e,n,i),a&2048&&tl(9,e);break;case 1:li(t,e,n,i);break;case 3:li(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$o(t)));break;case 12:if(a&2048){li(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ft(e,e.return,l)}}else li(t,e,n,i);break;case 31:li(t,e,n,i);break;case 13:li(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?li(t,e,n,i):To(t,e):s._visibility&2?li(t,e,n,i):(s._visibility|=2,Js(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Sp(r,e);break;case 24:li(t,e,n,i),a&2048&&yp(e.alternate,e);break;default:li(t,e,n,i)}}function Js(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Js(s,r,o,l,a),tl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Js(s,r,o,l,a):To(s,r):(h._visibility|=2,Js(s,r,o,l,a)),a&&c&2048&&Sp(r.alternate,r);break;case 24:Js(s,r,o,l,a),a&&c&2048&&yp(r.alternate,r);break;default:Js(s,r,o,l,a)}e=e.sibling}}function To(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:To(n,i),a&2048&&Sp(i.alternate,i);break;case 24:To(n,i),a&2048&&yp(i.alternate,i);break;default:To(n,i)}e=e.sibling}}var uo=8192;function Ps(t,e,n){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$v(t,e,n),t=t.sibling}function $v(t,e,n){switch(t.tag){case 26:Ps(t,e,n),t.flags&uo&&t.memoizedState!==null&&_b(n,di,t.memoizedState,t.memoizedProps);break;case 5:Ps(t,e,n);break;case 3:case 4:var i=di;di=kc(t.stateNode.containerInfo),Ps(t,e,n),di=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=uo,uo=16777216,Ps(t,e,n),uo=i):Ps(t,e,n));break;default:Ps(t,e,n)}}function ex(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Jr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];$t=i,nx(i,t)}ex(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tx(t),t=t.sibling}function tx(t){switch(t.tag){case 0:case 11:case 15:Jr(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Jr(t);break;case 12:Jr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,lc(t)):Jr(t);break;default:Jr(t)}}function lc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];$t=i,nx(i,t)}ex(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ya(8,e,e.return),lc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,lc(e));break;default:lc(e)}t=t.sibling}}function nx(t,e){for(;$t!==null;){var n=$t;switch(n.tag){case 0:case 11:case 15:Ya(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:$o(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$t=i;else e:for(n=t;$t!==null;){i=$t;var a=i.sibling,s=i.return;if(qv(i),i===n){$t=null;break e}if(a!==null){a.return=s,$t=a;break e}$t=s}}}var NM={getCacheForType:function(t){var e=ln(Wt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ln(Wt).controller.signal}},LM=typeof WeakMap=="function"?WeakMap:Map,ot=0,vt=null,Je=null,$e=0,ut=0,Pn=null,Na=!1,Gr=!1,Mp=!1,ca=0,Pt=0,Za=0,vs=0,bp=0,Fn=0,Rr=0,Ao=null,An=null,Ad=!1,pu=0,ix=0,zc=1/0,Ic=null,Ha=null,Yt=0,Ga=null,Cr=null,na=0,Rd=0,Cd=null,ax=null,Ro=0,wd=null;function kn(){return ot&2&&$e!==0?$e&-$e:ze.T!==null?Tp():h_()}function sx(){if(Fn===0)if(!($e&536870912)||nt){var t=hl;hl<<=1,!(hl&3932160)&&(hl=262144),Fn=t}else Fn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Fn}function Rn(t,e,n){(t===vt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(wr(t,0),La(t,$e,Fn,!1)),Qo(t,n),(!(ot&2)||t!==vt)&&(t===vt&&(!(ot&2)&&(vs|=n),Pt===4&&La(t,$e,Fn,!1)),Pi(t))}function rx(t,e,n){if(ot&6)throw Error(ne(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ko(t,e),a=i?zM(t,e):$u(t,e,!0),s=i;do{if(a===0){Gr&&!i&&La(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!OM(n)){a=$u(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=Ao;var l=o.current.memoizedState.isDehydrated;if(l&&(wr(o,r).flags|=256),r=$u(o,r,!1),r!==2){if(Mp&&!l){o.errorRecoveryDisabledLanes|=s,vs|=s,a=4;break e}s=An,An=a,s!==null&&(An===null?An=s:An.push.apply(An,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){wr(t,0),La(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(ne(345));case 4:if((e&4194048)!==e)break;case 6:La(i,e,Fn,!Na);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(ne(329))}if((e&62914560)===e&&(a=pu+300-Hn(),10<a)){if(La(i,e,Fn,!Na),iu(i,0,!0)!==0)break e;na=e,i.timeoutHandle=Ax(c0.bind(null,i,n,An,Ic,Ad,e,Fn,vs,Rr,Na,s,"Throttled",-0,0),a);break e}c0(i,n,An,Ic,Ad,e,Fn,vs,Rr,Na,s,null,-0,0)}}break}while(1);Pi(t)}function c0(t,e,n,i,a,s,r,o,l,c,h,p,u,d){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},$v(e,s,p);var S=(s&62914560)===s?pu-Hn():(s&4194048)===s?ix-Hn():0;if(S=vb(p,S),S!==null){na=s,t.cancelPendingCommit=S(f0.bind(null,t,e,s,n,i,a,r,o,l,h,p,null,u,d)),La(t,s,r,!c);return}}f0(t,e,s,n,i,a,r,o,l)}function OM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Xn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function La(t,e,n,i){e&=~bp,e&=~vs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Vn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&u_(t,n,e)}function mu(){return ot&6?!0:(nl(0,!1),!1)}function Ep(){if(Je!==null){if(ut===0)var t=Je.return;else t=Je,ji=Ds=null,cp(t),mr=null,zo=0,t=Je;for(;t!==null;)Fv(t.alternate,t),t=t.return;Je=null}}function wr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,eb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),na=0,Ep(),vt=t,Je=n=ea(t.current,null),$e=e,ut=0,Pn=null,Na=!1,Gr=Ko(t,e),Mp=!1,Rr=Fn=bp=vs=Za=Pt=0,An=Ao=null,Ad=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Vn(i),s=1<<a;e|=t[a],i&=~s}return ca=e,ou(),n}function ox(t,e){Xe=null,ze.H=Bo,e===Hr||e===cu?(e=Gm(),ut=3):e===np?(e=Gm(),ut=4):ut=e===vp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Pn=e,Je===null&&(Pt=1,Lc(t,ni(e,t.current)))}function lx(){var t=Wn.current;return t===null?!0:($e&4194048)===$e?ai===null:($e&62914560)===$e||$e&536870912?t===ai:!1}function cx(){var t=ze.H;return ze.H=Bo,t===null?Bo:t}function ux(){var t=ze.A;return ze.A=NM,t}function Bc(){Pt=4,Na||($e&4194048)!==$e&&Wn.current!==null||(Gr=!0),!(Za&134217727)&&!(vs&134217727)||vt===null||La(vt,$e,Fn,!1)}function $u(t,e,n){var i=ot;ot|=2;var a=cx(),s=ux();(vt!==t||$e!==e)&&(Ic=null,wr(t,e)),e=!1;var r=Pt;e:do try{if(ut!==0&&Je!==null){var o=Je,l=Pn;switch(ut){case 8:Ep(),r=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(e=!0);var c=ut;if(ut=0,Pn=null,ur(t,o,l,c),n&&Gr){r=0;break e}break;default:c=ut,ut=0,Pn=null,ur(t,o,l,c)}}PM(),r=Pt;break}catch(h){ox(t,h)}while(1);return e&&t.shellSuspendCounter++,ji=Ds=null,ot=i,ze.H=a,ze.A=s,Je===null&&(vt=null,$e=0,ou()),r}function PM(){for(;Je!==null;)fx(Je)}function zM(t,e){var n=ot;ot|=2;var i=cx(),a=ux();vt!==t||$e!==e?(Ic=null,zc=Hn()+500,wr(t,e)):Gr=Ko(t,e);e:do try{if(ut!==0&&Je!==null){e=Je;var s=Pn;t:switch(ut){case 1:ut=0,Pn=null,ur(t,e,s,1);break;case 2:case 9:if(Hm(s)){ut=0,Pn=null,u0(e);break}e=function(){ut!==2&&ut!==9||vt!==t||(ut=7),Pi(t)},s.then(e,e);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:Hm(s)?(ut=0,Pn=null,u0(e)):(ut=0,Pn=null,ur(t,e,s,7));break;case 5:var r=null;switch(Je.tag){case 26:r=Je.memoizedState;case 5:case 27:var o=Je;if(r?Ux(r):o.stateNode.complete){ut=0,Pn=null;var l=o.sibling;if(l!==null)Je=l;else{var c=o.return;c!==null?(Je=c,gu(c)):Je=null}break t}}ut=0,Pn=null,ur(t,e,s,5);break;case 6:ut=0,Pn=null,ur(t,e,s,6);break;case 8:Ep(),Pt=6;break e;default:throw Error(ne(462))}}IM();break}catch(h){ox(t,h)}while(1);return ji=Ds=null,ze.H=i,ze.A=a,ot=n,Je!==null?0:(vt=null,$e=0,ou(),Pt)}function IM(){for(;Je!==null&&!ry();)fx(Je)}function fx(t){var e=Bv(t.alternate,t,ca);t.memoizedProps=t.pendingProps,e===null?gu(t):Je=e}function u0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=i0(n,e,e.pendingProps,e.type,void 0,$e);break;case 11:e=i0(n,e,e.pendingProps,e.type.render,e.ref,$e);break;case 5:cp(e);default:Fv(n,e),e=Je=F_(e,ca),e=Bv(n,e,ca)}t.memoizedProps=t.pendingProps,e===null?gu(t):Je=e}function ur(t,e,n,i){ji=Ds=null,cp(e),mr=null,zo=0;var a=e.return;try{if(TM(t,a,e,n,$e)){Pt=1,Lc(t,ni(n,t.current)),Je=null;return}}catch(s){if(a!==null)throw Je=a,s;Pt=1,Lc(t,ni(n,t.current)),Je=null;return}e.flags&32768?(nt||i===1?t=!0:Gr||$e&536870912?t=!1:(Na=t=!0,(i===2||i===9||i===3||i===6)&&(i=Wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),dx(e,t)):gu(e)}function gu(t){var e=t;do{if(e.flags&32768){dx(e,Na);return}t=e.return;var n=CM(e.alternate,e,ca);if(n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Pt===0&&(Pt=5)}function dx(t,e){do{var n=wM(t.alternate,t);if(n!==null){n.flags&=32767,Je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Je=t;return}Je=t=n}while(t!==null);Pt=6,Je=null}function f0(t,e,n,i,a,s,r,o,l){t.cancelPendingCommit=null;do _u();while(Yt!==0);if(ot&6)throw Error(ne(327));if(e!==null){if(e===t.current)throw Error(ne(177));if(s=e.lanes|e.childLanes,s|=Kh,gy(t,n,s,r,o,l),t===vt&&(Je=vt=null,$e=0),Cr=e,Ga=t,na=n,Rd=s,Cd=a,ax=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,GM(Mc,function(){return _x(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=ze.T,ze.T=null,a=lt.p,lt.p=2,r=ot,ot|=4;try{DM(t,e,n)}finally{ot=r,lt.p=a,ze.T=i}}Yt=1,hx(),px(),mx()}}function hx(){if(Yt===1){Yt=0;var t=Ga,e=Cr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=ze.T,ze.T=null;var i=lt.p;lt.p=2;var a=ot;ot|=4;try{Qv(e,t);var s=Ld,r=U_(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&D_(o.ownerDocument.documentElement,o)){if(l!==null&&Zh(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),S=o.textContent.length,b=Math.min(l.start,S),m=l.end===void 0?b:Math.min(l.end,S);!d.extend&&b>m&&(r=m,m=b,b=r);var f=Lm(o,b),x=Lm(o,m);if(f&&x&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==x.node||d.focusOffset!==x.offset)){var y=p.createRange();y.setStart(f.node,f.offset),d.removeAllRanges(),b>m?(d.addRange(y),d.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),d.addRange(y))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}qc=!!Nd,Ld=Nd=null}finally{ot=a,lt.p=i,ze.T=n}}t.current=e,Yt=2}}function px(){if(Yt===2){Yt=0;var t=Ga,e=Cr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=ze.T,ze.T=null;var i=lt.p;lt.p=2;var a=ot;ot|=4;try{Wv(t,e.alternate,e)}finally{ot=a,lt.p=i,ze.T=n}}Yt=3}}function mx(){if(Yt===4||Yt===3){Yt=0,oy();var t=Ga,e=Cr,n=na,i=ax;e.subtreeFlags&10256||e.flags&10256?Yt=5:(Yt=0,Cr=Ga=null,gx(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ha=null),Gh(n),e=e.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=ze.T,a=lt.p,lt.p=2,ze.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{ze.T=e,lt.p=a}}na&3&&_u(),Pi(t),a=t.pendingLanes,n&261930&&a&42?t===wd?Ro++:(Ro=0,wd=t):Ro=0,nl(0,!1)}}function gx(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,$o(e)))}function _u(){return hx(),px(),mx(),_x()}function _x(){if(Yt!==5)return!1;var t=Ga,e=Rd;Rd=0;var n=Gh(na),i=ze.T,a=lt.p;try{lt.p=32>n?32:n,ze.T=null,n=Cd,Cd=null;var s=Ga,r=na;if(Yt=0,Cr=Ga=null,na=0,ot&6)throw Error(ne(331));var o=ot;if(ot|=4,tx(s.current),jv(s,s.current,r,n),ot=o,nl(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Zo,s)}catch{}return!0}finally{lt.p=a,ze.T=i,gx(t,e)}}function d0(t,e,n){e=ni(n,e),e=Md(t.stateNode,e,2),t=Fa(t,e,2),t!==null&&(Qo(t,2),Pi(t))}function ft(t,e,n){if(t.tag===3)d0(t,t,n);else for(;e!==null;){if(e.tag===3){d0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ha===null||!Ha.has(i))){t=ni(n,t),n=Nv(2),i=Fa(e,n,2),i!==null&&(Lv(n,i,e,t),Qo(i,2),Pi(i));break}}e=e.return}}function ef(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new LM;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Mp=!0,a.add(n),t=BM.bind(null,t,e,n),e.then(t,t))}function BM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,vt===t&&($e&n)===n&&(Pt===4||Pt===3&&($e&62914560)===$e&&300>Hn()-pu?!(ot&2)&&wr(t,0):bp|=n,Rr===$e&&(Rr=0)),Pi(t)}function vx(t,e){e===0&&(e=c_()),t=ws(t,e),t!==null&&(Qo(t,e),Pi(t))}function FM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vx(t,n)}function HM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ne(314))}i!==null&&i.delete(e),vx(t,n)}function GM(t,e){return Fh(t,e)}var Fc=null,js=null,Dd=!1,Hc=!1,tf=!1,Oa=0;function Pi(t){t!==js&&t.next===null&&(js===null?Fc=js=t:js=js.next=t),Hc=!0,Dd||(Dd=!0,kM())}function nl(t,e){if(!tf&&Hc){tf=!0;do for(var n=!1,i=Fc;i!==null;){if(!e)if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Vn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,h0(i,s))}else s=$e,s=iu(i,i===vt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Ko(i,s)||(n=!0,h0(i,s));i=i.next}while(n);tf=!1}}function VM(){xx()}function xx(){Hc=Dd=!1;var t=0;Oa!==0&&$M()&&(t=Oa);for(var e=Hn(),n=null,i=Fc;i!==null;){var a=i.next,s=Sx(i,e);s===0?(i.next=null,n===null?Fc=a:n.next=a,a===null&&(js=n)):(n=i,(t!==0||s&3)&&(Hc=!0)),i=a}Yt!==0&&Yt!==5||nl(t,!1),Oa!==0&&(Oa=0)}function Sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Vn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=my(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=vt,n=$e,n=iu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&wu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Ko(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&wu(i),Gh(n)){case 2:case 8:n=o_;break;case 32:n=Mc;break;case 268435456:n=l_;break;default:n=Mc}return i=yx.bind(null,t),n=Fh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&wu(i),t.callbackPriority=2,t.callbackNode=null,2}function yx(t,e){if(Yt!==0&&Yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(_u()&&t.callbackNode!==n)return null;var i=$e;return i=iu(t,t===vt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(rx(t,i,e),Sx(t,Hn()),t.callbackNode!=null&&t.callbackNode===n?yx.bind(null,t):null)}function h0(t,e){if(_u())return null;rx(t,e,!0)}function kM(){tb(function(){ot&6?Fh(r_,VM):xx()})}function Tp(){if(Oa===0){var t=Er;t===0&&(t=dl,dl<<=1,!(dl&261888)&&(dl=256)),Oa=t}return Oa}function p0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$l(""+t)}function m0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function XM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=p0((a[wn]||null).action),r=i.submitter;r&&(e=(e=r[wn]||null)?p0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new au("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Oa!==0){var l=r?m0(a,r):new FormData(a);Sd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?m0(a,r):new FormData(a),Sd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var nf=0;nf<ld.length;nf++){var af=ld[nf],WM=af.toLowerCase(),qM=af[0].toUpperCase()+af.slice(1);gi(WM,"on"+qM)}gi(L_,"onAnimationEnd");gi(O_,"onAnimationIteration");gi(P_,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(lM,"onTransitionRun");gi(cM,"onTransitionStart");gi(uM,"onTransitionCancel");gi(z_,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function Mx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(h){Ec(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(h){Ec(h)}a.currentTarget=null,s=l}}}}function Qe(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(bx(e,t,2,!1),n.add(i))}function sf(t,e,n){var i=0;e&&(i|=4),bx(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Ap(t){if(!t[Ml]){t[Ml]=!0,p_.forEach(function(n){n!=="selectionchange"&&(YM.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,sf("selectionchange",!1,e))}}function bx(t,e,n,i){switch(zx(e)){case 2:var a=yb;break;case 8:a=Mb;break;default:a=Dp}n=a.bind(null,e,n,t),a=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function rf(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=tr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}M_(function(){var c=s,h=Xh(n),p=[];e:{var u=I_.get(t);if(u!==void 0){var d=au,S=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":d=Hy;break;case"focusin":S="focus",d=Ou;break;case"focusout":S="blur",d=Ou;break;case"beforeblur":case"afterblur":d=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=ky;break;case L_:case O_:case P_:d=Uy;break;case z_:d=Wy;break;case"scroll":case"scrollend":d=Ay;break;case"wheel":d=Yy;break;case"copy":case"cut":case"paste":d=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Tm;break;case"toggle":case"beforetoggle":d=Ky}var b=(e&4)!==0,m=!b&&(t==="scroll"||t==="scrollend"),f=b?u!==null?u+"Capture":null:u;b=[];for(var x=c,y;x!==null;){var v=x;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||f===null||(v=Uo(x,f),v!=null&&b.push(Ho(x,v,y))),m)break;x=x.return}0<b.length&&(u=new d(u,S,null,n,h),p.push({event:u,listeners:b}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",u&&n!==ad&&(S=n.relatedTarget||n.fromElement)&&(tr(S)||S[Ir]))break e;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(S=n.relatedTarget||n.toElement,d=c,S=S?tr(S):null,S!==null&&(m=Yo(S),b=S.tag,S!==m||b!==5&&b!==27&&b!==6)&&(S=null)):(d=null,S=c),d!==S)){if(b=bm,v="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(b=Tm,v="onPointerLeave",f="onPointerEnter",x="pointer"),m=d==null?u:lo(d),y=S==null?u:lo(S),u=new b(v,x+"leave",d,n,h),u.target=m,u.relatedTarget=y,v=null,tr(h)===c&&(b=new b(f,x+"enter",S,n,h),b.target=y,b.relatedTarget=m,v=b),m=v,d&&S)t:{for(b=ZM,f=d,x=S,y=0,v=f;v;v=b(v))y++;v=0;for(var T=x;T;T=b(T))v++;for(;0<y-v;)f=b(f),y--;for(;0<v-y;)x=b(x),v--;for(;y--;){if(f===x||x!==null&&f===x.alternate){b=f;break t}f=b(f),x=b(x)}b=null}else b=null;d!==null&&g0(p,u,d,b,!1),S!==null&&m!==null&&g0(p,m,S,b,!0)}}e:{if(u=c?lo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var A=wm;else if(Cm(u))if(C_)A=sM;else{A=iM;var C=nM}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&kh(c.elementType)&&(A=wm):A=aM;if(A&&(A=A(t,c))){R_(p,A,n,h);break e}C&&C(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&id(u,"number",u.value)}switch(C=c?lo(c):window,t){case"focusin":(Cm(C)||C.contentEditable==="true")&&(ar=C,rd=c,vo=null);break;case"focusout":vo=rd=ar=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Om(p,n,h);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":Om(p,n,h)}var g;if(Yh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ir?T_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(E_&&n.locale!=="ko"&&(ir||R!=="onCompositionStart"?R==="onCompositionEnd"&&ir&&(g=b_()):(Ua=h,Wh="value"in Ua?Ua.value:Ua.textContent,ir=!0)),C=Gc(c,R),0<C.length&&(R=new Em(R,t,null,n,h),p.push({event:R,listeners:C}),g?R.data=g:(g=A_(n),g!==null&&(R.data=g)))),(g=Jy?jy(t,n):$y(t,n))&&(R=Gc(c,"onBeforeInput"),0<R.length&&(C=new Em("onBeforeInput","beforeinput",null,n,h),p.push({event:C,listeners:R}),C.data=g)),XM(p,t,c,n,h)}Mx(p,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Uo(t,n),a!=null&&i.unshift(Ho(t,a,s)),a=Uo(t,e),a!=null&&i.push(Ho(t,a,s))),t.tag===3)return i;t=t.return}return[]}function ZM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Uo(n,s),c!=null&&r.unshift(Ho(n,c,l))):a||(c=Uo(n,s),c!=null&&r.push(Ho(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var KM=/\r\n?/g,QM=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(KM,`
`).replace(QM,"")}function Ex(t,e){return e=_0(e),_0(t)===e}function ht(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||br(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&br(t,""+i);break;case"className":ml(t,"class",i);break;case"tabIndex":ml(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ml(t,n,i);break;case"style":y_(t,i,s);break;case"data":if(e!=="object"){ml(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=$l(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&ht(t,e,"name",a.name,a,null),ht(t,e,"formEncType",a.formEncType,a,null),ht(t,e,"formMethod",a.formMethod,a,null),ht(t,e,"formTarget",a.formTarget,a,null)):(ht(t,e,"encType",a.encType,a,null),ht(t,e,"method",a.method,a,null),ht(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=$l(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Ji);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ne(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ne(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=$l(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),jl(t,"popover",i);break;case"xlinkActuate":zi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":zi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":zi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":zi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":zi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":zi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":zi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":zi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":zi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":jl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ey.get(n)||n,jl(t,n,i))}}function Ud(t,e,n,i,a,s){switch(n){case"style":y_(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ne(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ne(60));t.innerHTML=n}}break;case"children":typeof i=="string"?br(t,i):(typeof i=="number"||typeof i=="bigint")&&br(t,""+i);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!m_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[wn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):jl(t,n,i)}}}function un(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:ht(t,e,s,r,n,null)}}a&&ht(t,e,"srcSet",n.srcSet,n,null),i&&ht(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ne(137,e));break;default:ht(t,e,i,h,n,null)}}v_(t,s,o,l,c,r,a,!1);return;case"select":Qe("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ht(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?dr(t,!!i,e,!1):n!=null&&dr(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ne(91));break;default:ht(t,e,r,o,n,null)}S_(t,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ht(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Qe(Fo[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:ht(t,e,c,i,n,null)}return;default:if(kh(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Ud(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ht(t,e,o,i,n,null))}function JM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ht(t,e,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":s=d;break;case"name":a=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ne(137,e));break;default:d!==p&&ht(t,e,u,d,i,p)}}nd(t,r,o,l,c,h,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||ht(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ht(t,e,a,s,i,l)}e=o,n=r,i=d,u!=null?dr(t,!!n,u,!1):!!i!=!!n&&(e!=null?dr(t,!!n,e,!0):dr(t,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ht(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ne(91));break;default:a!==s&&ht(t,e,r,a,i,s)}x_(t,u,d);return;case"option":for(var S in n)if(u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:ht(t,e,S,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ht(t,e,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&ht(t,e,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ne(137,e));break;default:ht(t,e,c,u,i,d)}return;default:if(kh(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Ud(t,e,m,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||Ud(t,e,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ht(t,e,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ht(t,e,p,u,i,d)}function v0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&v0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&v0(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nd=null,Ld=null;function Vc(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tx(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var of=null;function $M(){var t=window.event;return t&&t.type==="popstate"?t===of?!1:(of=t,!0):(of=null,!1)}var Ax=typeof setTimeout=="function"?setTimeout:void 0,eb=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(t){return S0.resolve(null).then(t).catch(nb)}:Ax;function nb(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function y0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Ur(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Co(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Co(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Jo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Co(t.ownerDocument.body);n=a}while(n);Ur(e)}function M0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Pd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pd(n),Vh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ib(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Jo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function ab(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Rx(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=si(t.nextSibling),t===null))return null;return t}function zd(t){return t.data==="$?"||t.data==="$~"}function Id(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sb(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Bd=null;function b0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return si(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function E0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Cx(t,e,n){switch(e=Vc(n),t){case"html":if(t=e.documentElement,!t)throw Error(ne(452));return t;case"head":if(t=e.head,!t)throw Error(ne(453));return t;case"body":if(t=e.body,!t)throw Error(ne(454));return t;default:throw Error(ne(451))}}function Co(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Vh(t)}var ri=new Map,T0=new Set;function kc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=lt.d;lt.d={f:rb,r:ob,D:lb,C:cb,L:ub,m:fb,X:hb,S:db,M:pb};function rb(){var t=da.f(),e=mu();return t||e}function ob(t){var e=Br(t);e!==null&&e.tag===5&&e.type==="form"?yv(e):da.r(t)}var Vr=typeof document>"u"?null:document;function wx(t,e,n){var i=Vr;if(i&&typeof e=="string"&&e){var a=ti(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),T0.has(a)||(T0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),un(e,"link",t),en(e),i.head.appendChild(e)))}}function lb(t){da.D(t),wx("dns-prefetch",t,null)}function cb(t,e){da.C(t,e),wx("preconnect",t,e)}function ub(t,e,n){da.L(t,e,n);var i=Vr;if(i&&t&&e){var a='link[rel="preload"][as="'+ti(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(t)+'"]';var s=a;switch(e){case"style":s=Dr(t);break;case"script":s=kr(t)}ri.has(s)||(t=At({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ri.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(il(s))||e==="script"&&i.querySelector(al(s))||(e=i.createElement("link"),un(e,"link",t),en(e),i.head.appendChild(e)))}}function fb(t,e){da.m(t,e);var n=Vr;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=kr(t)}if(!ri.has(s)&&(t=At({rel:"modulepreload",href:t},e),ri.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(al(s)))return}i=n.createElement("link"),un(i,"link",t),en(i),n.head.appendChild(i)}}}function db(t,e,n){da.S(t,e,n);var i=Vr;if(i&&t){var a=fr(i).hoistableStyles,s=Dr(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(il(s)))o.loading=5;else{t=At({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ri.get(s))&&Rp(t,n);var l=r=i.createElement("link");en(l),un(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,cc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function hb(t,e){da.X(t,e);var n=Vr;if(n&&t){var i=fr(n).hoistableScripts,a=kr(t),s=i.get(a);s||(s=n.querySelector(al(a)),s||(t=At({src:t,async:!0},e),(e=ri.get(a))&&Cp(t,e),s=n.createElement("script"),en(s),un(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function pb(t,e){da.M(t,e);var n=Vr;if(n&&t){var i=fr(n).hoistableScripts,a=kr(t),s=i.get(a);s||(s=n.querySelector(al(a)),s||(t=At({src:t,async:!0,type:"module"},e),(e=ri.get(a))&&Cp(t,e),s=n.createElement("script"),en(s),un(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function A0(t,e,n,i){var a=(a=za.current)?kc(a):null;if(!a)throw Error(ne(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Dr(n.href),n=fr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Dr(n.href);var s=fr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(il(t)))&&!s._p&&(r.instance=s,r.state.loading=5),ri.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ri.set(t,n),s||mb(a,t,n,r.state))),e&&i===null)throw Error(ne(528,""));return r}if(e&&i!==null)throw Error(ne(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=kr(n),n=fr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ne(444,t))}}function Dr(t){return'href="'+ti(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Dx(t){return At({},t,{"data-precedence":t.precedence,precedence:null})}function mb(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),un(e,"link",n),en(e),t.head.appendChild(e))}function kr(t){return'[src="'+ti(t)+'"]'}function al(t){return"script[async]"+t}function R0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return e.instance=i,en(i),i;var a=At({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),en(i),un(i,"style",a),cc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Dr(n.href);var s=t.querySelector(il(a));if(s)return e.state.loading|=4,e.instance=s,en(s),s;i=Dx(n),(a=ri.get(a))&&Rp(i,a),s=(t.ownerDocument||t).createElement("link"),en(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),e.state.loading|=4,cc(s,n.precedence,t),e.instance=s;case"script":return s=kr(n.src),(a=t.querySelector(al(s)))?(e.instance=a,en(a),a):(i=n,(a=ri.get(s))&&(i=At({},n),Cp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),en(a),un(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ne(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,cc(i,n.precedence,t));return e.instance}function cc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Rp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Cp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var uc=null;function C0(t,e,n){if(uc===null){var i=new Map,a=uc=new Map;a.set(n,i)}else a=uc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Jo]||s[rn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function w0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function gb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ux(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function _b(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Dr(i.href),s=e.querySelector(il(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Xc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,en(s);return}s=e.ownerDocument||e,i=Dx(i),(a=ri.get(a))&&Rp(i,a),s=s.createElement("link"),en(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Xc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var lf=0;function vb(t,e){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&lf===0&&(lf=62500*jM());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>lf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wc=null;function fc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wc=new Map,e.forEach(xb,t),Wc=null,Xc.call(t))}function xb(t,e){if(!(e.state.loading&4)){var n=Wc.get(t);if(n)var i=n.get(null);else{n=new Map,Wc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Xc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Go={$$typeof:Qi,Provider:null,Consumer:null,_currentValue:ps,_currentValue2:ps,_threadCount:0};function Sb(t,e,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.hiddenUpdates=Du(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Nx(t,e,n,i,a,s,r,o,l,c,h,p){return t=new Sb(t,e,n,r,l,c,h,p,o),e=1,s===!0&&(e|=24),s=In(3,null,null,e),t.current=s,s.stateNode=t,e=ep(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},ip(s),t}function Lx(t){return t?(t=or,t):or}function Ox(t,e,n,i,a,s){a=Lx(a),i.context===null?i.context=a:i.pendingContext=a,i=Ba(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Fa(t,i,e),n!==null&&(Rn(n,t,e),So(n,t,e))}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wp(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function Px(t){if(t.tag===13||t.tag===31){var e=ws(t,67108864);e!==null&&Rn(e,t,67108864),wp(t,67108864)}}function U0(t){if(t.tag===13||t.tag===31){var e=kn();e=Hh(e);var n=ws(t,e);n!==null&&Rn(n,t,e),wp(t,e)}}var qc=!0;function yb(t,e,n,i){var a=ze.T;ze.T=null;var s=lt.p;try{lt.p=2,Dp(t,e,n,i)}finally{lt.p=s,ze.T=a}}function Mb(t,e,n,i){var a=ze.T;ze.T=null;var s=lt.p;try{lt.p=8,Dp(t,e,n,i)}finally{lt.p=s,ze.T=a}}function Dp(t,e,n,i){if(qc){var a=Fd(i);if(a===null)rf(t,e,i,Yc,n),N0(t,i);else if(Eb(a,t,e,n,i))i.stopPropagation();else if(N0(t,i),e&4&&-1<bb.indexOf(t)){for(;a!==null;){var s=Br(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=rs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Vn(r);o.entanglements[1]|=l,r&=~l}Pi(s),!(ot&6)&&(zc=Hn()+500,nl(0,!1))}}break;case 31:case 13:o=ws(s,2),o!==null&&Rn(o,s,2),mu(),wp(s,2)}if(s=Fd(i),s===null&&rf(t,e,i,Yc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else rf(t,e,i,null,n)}}function Fd(t){return t=Xh(t),Up(t)}var Yc=null;function Up(t){if(Yc=null,t=tr(t),t!==null){var e=Yo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===31){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yc=t,null}function zx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ly()){case r_:return 2;case o_:return 8;case Mc:case cy:return 32;case l_:return 268435456;default:return 32}default:return 32}}var Hd=!1,Va=null,ka=null,Xa=null,Vo=new Map,ko=new Map,Ca=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(t,e){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function jr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Br(e),e!==null&&Px(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Eb(t,e,n,i,a){switch(e){case"focusin":return Va=jr(Va,t,e,n,i,a),!0;case"dragenter":return ka=jr(ka,t,e,n,i,a),!0;case"mouseover":return Xa=jr(Xa,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Vo.set(s,jr(Vo.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,ko.set(s,jr(ko.get(s)||null,t,e,n,i,a)),!0}return!1}function Ix(t){var e=tr(t.target);if(e!==null){var n=Yo(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,gm(t.priority,function(){U0(n)});return}}else if(e===31){if(e=n_(n),e!==null){t.blockedOn=e,gm(t.priority,function(){U0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ad=i,n.target.dispatchEvent(i),ad=null}else return e=Br(n),e!==null&&Px(e),t.blockedOn=n,!1;e.shift()}return!0}function L0(t,e,n){dc(t)&&n.delete(e)}function Tb(){Hd=!1,Va!==null&&dc(Va)&&(Va=null),ka!==null&&dc(ka)&&(ka=null),Xa!==null&&dc(Xa)&&(Xa=null),Vo.forEach(L0),ko.forEach(L0)}function bl(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,Tb)))}var El=null;function O0(t){El!==t&&(El=t,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,function(){El===t&&(El=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Up(i||n)===null)continue;break}var s=Br(n);s!==null&&(t.splice(e,3),e-=3,Sd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ur(t){function e(l){return bl(l,t)}Va!==null&&bl(Va,t),ka!==null&&bl(ka,t),Xa!==null&&bl(Xa,t),Vo.forEach(e),ko.forEach(e);for(var n=0;n<Ca.length;n++){var i=Ca[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ca.length&&(n=Ca[0],n.blockedOn===null);)Ix(n),n.blockedOn===null&&Ca.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[wn]||null;if(typeof s=="function")r||O0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[wn]||null)o=r.formAction;else if(Up(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),O0(n)}}}function Bx(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Np(t){this._internalRoot=t}vu.prototype.render=Np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));var n=e.current,i=kn();Ox(n,i,t,e,null,null)};vu.prototype.unmount=Np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ox(t.current,2,null,t,null,null),mu(),e[Ir]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ca.length&&e!==0&&e<Ca[n].priority;n++);Ca.splice(n,0,t),n===0&&Ix(t)}};var P0=$g.version;if(P0!=="19.2.8")throw Error(ne(527,P0,"19.2.8"));lt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=ty(e),t=t!==null?i_(t):null,t=t===null?null:t.stateNode,t};var Ab={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:ze,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Zo=Tl.inject(Ab),Gn=Tl}catch{}}tu.createRoot=function(t,e){if(!e_(t))throw Error(ne(299));var n=!1,i="",a=wv,s=Dv,r=Uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nx(t,1,!1,null,null,n,i,null,a,s,r,Bx),t[Ir]=e.current,Ap(t),new Np(e)};tu.hydrateRoot=function(t,e,n){if(!e_(t))throw Error(ne(299));var i=!1,a="",s=wv,r=Dv,o=Uv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=Nx(t,1,!0,e,n??null,i,a,l,s,r,o,Bx),e.context=Lx(null),n=e.current,i=kn(),i=Hh(i),a=Ba(i),a.callback=null,Fa(n,a,i),n=i,e.current.lanes=n,Qo(e,n),Pi(e),t[Ir]=e.current,Ap(t),new vu(e)};tu.version="19.2.8";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(t){console.error(t)}}Fx(),Yg.exports=tu;var Rb=Yg.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="185",Cb=0,z0=1,wb=2,hc=1,Db=2,fo=3,Ka=0,Cn=1,Ki=2,ia=0,vr=1,I0=2,B0=3,F0=4,Ub=5,us=100,Nb=101,Lb=102,Ob=103,Pb=104,zb=200,Ib=201,Bb=202,Fb=203,Gd=204,Vd=205,Hb=206,Gb=207,Vb=208,kb=209,Xb=210,Wb=211,qb=212,Yb=213,Zb=214,kd=0,Xd=1,Wd=2,Nr=3,qd=4,Yd=5,Zd=6,Kd=7,Hx=0,Kb=1,Qb=2,wi=0,Gx=1,Vx=2,kx=3,Xx=4,Wx=5,qx=6,Yx=7,Zx=300,Es=301,Lr=302,cf=303,uf=304,xu=306,Qd=1e3,$i=1001,Jd=1002,cn=1003,Jb=1004,Al=1005,mn=1006,ff=1007,ds=1008,Bn=1009,Kx=1010,Qx=1011,Xo=1012,Op=1013,Ni=1014,Ai=1015,ua=1016,Pp=1017,zp=1018,Wo=1020,Jx=35902,jx=35899,$x=1021,eS=1022,mi=1023,fa=1026,hs=1027,tS=1028,Ip=1029,Ts=1030,Bp=1031,Fp=1033,pc=33776,mc=33777,gc=33778,_c=33779,jd=35840,$d=35841,eh=35842,th=35843,nh=36196,ih=37492,ah=37496,sh=37488,rh=37489,Zc=37490,oh=37491,lh=37808,ch=37809,uh=37810,fh=37811,dh=37812,hh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,Sh=37820,yh=37821,Mh=36492,bh=36494,Eh=36495,Th=36283,Ah=36284,Kc=36285,Rh=36286,jb=3200,Ch=0,$b=1,wa="",Qn="srgb",Qc="srgb-linear",Jc="linear",ct="srgb",zs=7680,H0=519,eE=512,tE=513,nE=514,Hp=515,iE=516,aE=517,Gp=518,sE=519,G0=35044,V0="300 es",Ri=2e3,qo=2001;function rE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oE(){const t=jc("canvas");return t.style.display="block",t}const k0={};function X0(...t){const e="THREE."+t.shift();console.log(e,...t)}function nS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=nS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=nS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function xr(...t){const e=t.join(" ");e in k0||(k0[e]=!0,Ie(...t))}function lE(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const cE={[kd]:Xd,[Wd]:Zd,[qd]:Kd,[Nr]:Yd,[Xd]:kd,[Zd]:Wd,[Kd]:qd,[Yd]:Nr};class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=Math.PI/180,wh=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function uE(t,e){return(t%e+e)%e}function hf(t,e,n){return(1-n)*t+n*e}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zp=class Zp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let it=Zp;class Xr{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],S=s[r+2],b=s[r+3];if(p!==b||l!==u||c!==d||h!==S){let m=l*u+c*d+h*S+p*b;m<0&&(u=-u,d=-d,S=-S,b=-b,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y,l=l*f+u*o,c=c*f+d*o,h=h*f+S*o,p=p*f+b*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+S*o,p=p*f+b*o;const x=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=x,c*=x,h*=x,p*=x}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],d=s[r+2],S=s[r+3];return e[n]=o*S+h*p+l*d-c*u,e[n+1]=l*S+h*u+c*p-o*d,e[n+2]=c*S+h*d+o*u-l*p,e[n+3]=h*S-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),S=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*d*S,this._y=c*d*p-u*h*S,this._z=c*h*S+u*d*p,this._w=c*h*p-u*d*S;break;case"YXZ":this._x=u*h*p+c*d*S,this._y=c*d*p-u*h*S,this._z=c*h*S-u*d*p,this._w=c*h*p+u*d*S;break;case"ZXY":this._x=u*h*p-c*d*S,this._y=c*d*p+u*h*S,this._z=c*h*S+u*d*p,this._w=c*h*p-u*d*S;break;case"ZYX":this._x=u*h*p-c*d*S,this._y=c*d*p+u*h*S,this._z=c*h*S-u*d*p,this._w=c*h*p+u*d*S;break;case"YZX":this._x=u*h*p+c*d*S,this._y=c*d*p+u*h*S,this._z=c*h*S-u*d*p,this._w=c*h*p-u*d*S;break;case"XZY":this._x=u*h*p-c*d*S,this._y=c*d*p-u*h*S,this._z=c*h*S+u*d*p,this._w=c*h*p+u*d*S;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kp=class Kp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(W0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kp.prototype.isVector3=!0;let G=Kp;const pf=new G,W0=new Xr,Qp=class Qp{constructor(e,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],S=i[8],b=a[0],m=a[3],f=a[6],x=a[1],y=a[4],v=a[7],T=a[2],A=a[5],C=a[8];return s[0]=r*b+o*x+l*T,s[3]=r*m+o*y+l*A,s[6]=r*f+o*v+l*C,s[1]=c*b+h*x+p*T,s[4]=c*m+h*y+p*A,s[7]=c*f+h*v+p*C,s[2]=u*b+d*x+S*T,s[5]=u*m+d*y+S*A,s[8]=u*f+d*v+S*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*r-o*c,u=o*l-h*s,d=c*s-r*l,S=n*p+i*u+a*d;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=p*b,e[1]=(a*c-h*i)*b,e[2]=(o*i-a*r)*b,e[3]=u*b,e[4]=(h*n-a*l)*b,e[5]=(a*s-o*n)*b,e[6]=d*b,e[7]=(i*l-c*n)*b,e[8]=(r*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mf.makeScale(e,n)),this}rotate(e){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mf.makeRotation(-e)),this}translate(e,n){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let He=Qp;const mf=new He,q0=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const t={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ct&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ct&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wa?Jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qc]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),t}const et=fE();function aa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Is;class dE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=jc("canvas")),Is.width=e.width,Is.height=e.height;const a=Is.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=aa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(aa(n[i]/255)*255):n[i]=aa(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(gf(a[r].image)):s.push(gf(a[r]))}else s=gf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let pE=0;const _f=new G;class Sn extends Us{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=$i,a=$i,s=mn,r=ds,o=mi,l=Bn,c=Sn.DEFAULT_ANISOTROPY,h=wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=sl(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_f).x}get height(){return this.source.getSize(_f).y}get depth(){return this.source.getSize(_f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Zx;Sn.DEFAULT_ANISOTROPY=1;const Jp=class Jp{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],S=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(S-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(S+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(d+1)/2,T=(f+1)/2,A=(h+u)/4,C=(p+b)/4,g=(S+m)/4;return y>v&&y>T?y<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(y),a=A/i,s=C/i):v>T?v<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),i=A/a,s=g/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=C/s,a=g/s),this.set(i,a,s,n),this}let x=Math.sqrt((m-S)*(m-S)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-S)/x,this.y=(p-b)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jp.prototype.isVector4=!0;let Dt=Jp;class mE extends Us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new Sn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Vp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends mE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iS extends Sn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends Sn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,n,i,a,s,r,o,l,c,h,p,u,d,S,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,h,p,u,d,S,b,m)}set(e,n,i,a,s,r,o,l,c,h,p,u,d,S,b,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=S,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),r=1/Bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=r*h,d=r*p,S=o*h,b=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+S*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=S+d*c,n[10]=r*l}else if(e.order==="YXZ"){const u=l*h,d=l*p,S=c*h,b=c*p;n[0]=u+b*o,n[4]=S*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-S,n[6]=b+u*o,n[10]=r*l}else if(e.order==="ZXY"){const u=l*h,d=l*p,S=c*h,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=S+d*o,n[1]=d+S*o,n[5]=r*h,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const u=r*h,d=r*p,S=o*h,b=o*p;n[0]=l*h,n[4]=S*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-S,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const u=r*l,d=r*c,S=o*l,b=o*c;n[0]=l*h,n[4]=b-u*p,n[8]=S*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+S,n[10]=u-b*p}else if(e.order==="XZY"){const u=r*l,d=r*c,S=o*l,b=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+b,n[5]=r*h,n[9]=d*p-S,n[2]=S*p-d,n[6]=o*h,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,n,i){const a=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),_a.crossVectors(i,Nn),_a.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),_a.crossVectors(i,Nn)),_a.normalize(),Rl.crossVectors(Nn,_a),a[0]=_a.x,a[4]=Rl.x,a[8]=Nn.x,a[1]=_a.y,a[5]=Rl.y,a[9]=Nn.y,a[2]=_a.z,a[6]=Rl.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],S=i[2],b=i[6],m=i[10],f=i[14],x=i[3],y=i[7],v=i[11],T=i[15],A=a[0],C=a[4],g=a[8],R=a[12],N=a[1],E=a[5],D=a[9],V=a[13],q=a[2],U=a[6],L=a[10],O=a[14],H=a[3],K=a[7],ie=a[11],oe=a[15];return s[0]=r*A+o*N+l*q+c*H,s[4]=r*C+o*E+l*U+c*K,s[8]=r*g+o*D+l*L+c*ie,s[12]=r*R+o*V+l*O+c*oe,s[1]=h*A+p*N+u*q+d*H,s[5]=h*C+p*E+u*U+d*K,s[9]=h*g+p*D+u*L+d*ie,s[13]=h*R+p*V+u*O+d*oe,s[2]=S*A+b*N+m*q+f*H,s[6]=S*C+b*E+m*U+f*K,s[10]=S*g+b*D+m*L+f*ie,s[14]=S*R+b*V+m*O+f*oe,s[3]=x*A+y*N+v*q+T*H,s[7]=x*C+y*E+v*U+T*K,s[11]=x*g+y*D+v*L+T*ie,s[15]=x*R+y*V+v*O+T*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],S=e[3],b=e[7],m=e[11],f=e[15],x=l*d-c*u,y=o*d-c*p,v=o*u-l*p,T=r*d-c*h,A=r*u-l*h,C=r*p-o*h;return n*(b*x-m*y+f*v)-i*(S*x-m*T+f*A)+a*(S*y-b*T+f*C)-s*(S*v-b*A+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(r*h-o*c)-i*(s*h-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],S=e[12],b=e[13],m=e[14],f=e[15],x=n*o-i*r,y=n*l-a*r,v=n*c-s*r,T=i*l-a*o,A=i*c-s*o,C=a*c-s*l,g=h*b-p*S,R=h*m-u*S,N=h*f-d*S,E=p*m-u*b,D=p*f-d*b,V=u*f-d*m,q=x*V-y*D+v*E+T*N-A*R+C*g;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/q;return e[0]=(o*V-l*D+c*E)*U,e[1]=(a*D-i*V-s*E)*U,e[2]=(b*C-m*A+f*T)*U,e[3]=(u*A-p*C-d*T)*U,e[4]=(l*N-r*V-c*R)*U,e[5]=(n*V-a*N+s*R)*U,e[6]=(m*v-S*C-f*y)*U,e[7]=(h*C-u*v+d*y)*U,e[8]=(r*D-o*N+c*g)*U,e[9]=(i*N-n*D-s*g)*U,e[10]=(S*A-b*v+f*x)*U,e[11]=(p*v-h*A-d*x)*U,e[12]=(o*R-r*E-l*g)*U,e[13]=(n*E-i*R+a*g)*U,e[14]=(b*y-S*T-m*x)*U,e[15]=(h*T-p*y+u*x)*U,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,d=s*h,S=s*p,b=r*h,m=r*p,f=o*p,x=l*c,y=l*h,v=l*p,T=i.x,A=i.y,C=i.z;return a[0]=(1-(b+f))*T,a[1]=(d+v)*T,a[2]=(S-y)*T,a[3]=0,a[4]=(d-v)*A,a[5]=(1-(u+f))*A,a[6]=(m+x)*A,a[7]=0,a[8]=(S+y)*C,a[9]=(m-x)*C,a[10]=(1-(u+b))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Bs.set(a[0],a[1],a[2]).length();const o=Bs.set(a[4],a[5],a[6]).length(),l=Bs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ci.copy(this);const c=1/r,h=1/o,p=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=p,ci.elements[9]*=p,ci.elements[10]*=p,n.setFromRotationMatrix(ci),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,a,s,r,o=Ri,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-a),u=(n+e)/(n-e),d=(i+a)/(i-a);let S,b;if(l)S=s/(r-s),b=r*s/(r-s);else if(o===Ri)S=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===qo)S=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=Ri,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),d=-(i+a)/(i-a);let S,b;if(l)S=1/(r-s),b=r/(r-s);else if(o===Ri)S=-2/(r-s),b=-(r+s)/(r-s);else if(o===qo)S=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=S,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$c.prototype.isMatrix4=!0;let zt=$c;const Bs=new G,ci=new zt,_E=new G(0,0,0),vE=new G(1,1,1),_a=new G,Rl=new G,Nn=new G,Z0=new zt,K0=new Xr;class Qa{constructor(e=0,n=0,i=0,a=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class aS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xE=0;const Q0=new G,Fs=new Xr,Hi=new zt,Cl=new G,eo=new G,SE=new G,yE=new Xr,J0=new G(1,0,0),j0=new G(0,1,0),$0=new G(0,0,1),eg={type:"added"},ME={type:"removed"},Hs={type:"childadded",child:null},vf={type:"childremoved",child:null};class fn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new G,n=new Qa,i=new Xr,a=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new He}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(j0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,n){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(j0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(eo,Cl,this.up):Hi.lookAt(Cl,eo,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ME),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),p=r(e.shapes),u=r(e.skeletons),d=r(e.animations),S=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),S.length>0&&(i.nodes=S)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}fn.DEFAULT_UP=new G(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ho extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const m=n.getJointPose(b,i),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,S=.005;c.inputState.pinching&&u>d+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=et.workingColorSpace){if(e=uE(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Sf(r,s,e+1/3),this.g=Sf(r,s,e),this.b=Sf(r,s,e-1/3)}return et.colorSpaceToWorking(this,a),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=sS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return et.workingToColorSpace(pn.copy(this),e),Math.round(tt(pn.r*255,0,255))*65536+Math.round(tt(pn.g*255,0,255))*256+Math.round(tt(pn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(pn.copy(this),n);const i=pn.r,a=pn.g,s=pn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Qn){et.workingToColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,a=pn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(va),this.setHSL(va.h+e,va.s+n,va.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(va),e.getHSL(wl);const i=hf(va.h,wl.h,n),a=hf(va.s,wl.s,n),s=hf(va.l,wl.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new je;je.NAMES=sS;class EE extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ui=new G,Gi=new G,yf=new G,Vi=new G,Gs=new G,Vs=new G,tg=new G,Mf=new G,bf=new G,Ef=new G,Tf=new Dt,Af=new Dt,Rf=new Dt;class pi{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ui.subVectors(e,n),a.cross(ui);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ui.subVectors(a,n),Gi.subVectors(i,n),yf.subVectors(e,n);const r=ui.dot(ui),o=ui.dot(Gi),l=ui.dot(yf),c=Gi.dot(Gi),h=Gi.dot(yf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,S=(r*h-o*l)*u;return s.set(1-d-S,S,d)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(r,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return Tf.setScalar(0),Af.setScalar(0),Rf.setScalar(0),Tf.fromBufferAttribute(e,n),Af.fromBufferAttribute(e,i),Rf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Tf,s.x),r.addScaledVector(Af,s.y),r.addScaledVector(Rf,s.z),r}static isFrontFacing(e,n,i,a){return ui.subVectors(i,n),Gi.subVectors(e,n),ui.cross(Gi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return pi.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;Gs.subVectors(a,i),Vs.subVectors(s,i),Mf.subVectors(e,i);const l=Gs.dot(Mf),c=Vs.dot(Mf);if(l<=0&&c<=0)return n.copy(i);bf.subVectors(e,a);const h=Gs.dot(bf),p=Vs.dot(bf);if(h>=0&&p<=h)return n.copy(a);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Gs,r);Ef.subVectors(e,s);const d=Gs.dot(Ef),S=Vs.dot(Ef);if(S>=0&&d<=S)return n.copy(s);const b=d*c-l*S;if(b<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Vs,o);const m=h*S-d*p;if(m<=0&&p-h>=0&&d-S>=0)return tg.subVectors(s,a),o=(p-h)/(p-h+(d-S)),n.copy(a).addScaledVector(tg,o);const f=1/(m+b+u);return r=b*f,o=u*f,n.copy(i).addScaledVector(Gs,r).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,fi):fi.fromBufferAttribute(s,r),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Ul.subVectors(this.max,to),ks.subVectors(e.a,to),Xs.subVectors(e.b,to),Ws.subVectors(e.c,to),xa.subVectors(Xs,ks),Sa.subVectors(Ws,Xs),ts.subVectors(ks,Ws);let n=[0,-xa.z,xa.y,0,-Sa.z,Sa.y,0,-ts.z,ts.y,xa.z,0,-xa.x,Sa.z,0,-Sa.x,ts.z,0,-ts.x,-xa.y,xa.x,0,-Sa.y,Sa.x,0,-ts.y,ts.x,0];return!Cf(n,ks,Xs,Ws,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Cf(n,ks,Xs,Ws,Ul))?!1:(Nl.crossVectors(xa,Sa),n=[Nl.x,Nl.y,Nl.z],Cf(n,ks,Xs,Ws,Ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new G,new G,new G,new G,new G,new G,new G,new G],fi=new G,Dl=new rl,ks=new G,Xs=new G,Ws=new G,xa=new G,Sa=new G,ts=new G,to=new G,Ul=new G,Nl=new G,ns=new G;function Cf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){ns.fromArray(t,s);const o=a.x*Math.abs(ns.x)+a.y*Math.abs(ns.y)+a.z*Math.abs(ns.z),l=e.dot(ns),c=n.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vt=new G,Ll=new it;let TE=0;class Ui extends Us{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=G0,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),a=En(a,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rS extends Ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class oS extends Ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends Ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const AE=new rl,no=new G,wf=new G;class kp{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AE.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(no,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(wf)),this.expandByPoint(no.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const Yn=new zt,Df=new fn,qs=new G,Ln=new rl,io=new rl,Jt=new G;class oi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rE(e)?oS:rS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,i){return Yn.makeTranslation(e,n,i),this.applyMatrix4(Yn),this}scale(e,n,i){return Yn.makeScale(e,n,i),this.applyMatrix4(Yn),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];io.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Ln.min,io.min),Ln.expandByPoint(Jt),Jt.addVectors(Ln.max,io.max),Ln.expandByPoint(Jt)):(Ln.expandByPoint(io.min),Ln.expandByPoint(io.max))}Ln.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Jt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Jt));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),Jt.add(qs)),a=Math.max(a,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new G,l[g]=new G;const c=new G,h=new G,p=new G,u=new it,d=new it,S=new it,b=new G,m=new G;function f(g,R,N){c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,N),u.fromBufferAttribute(s,g),d.fromBufferAttribute(s,R),S.fromBufferAttribute(s,N),h.sub(c),p.sub(c),d.sub(u),S.sub(u);const E=1/(d.x*S.y-S.x*d.y);isFinite(E)&&(b.copy(h).multiplyScalar(S.y).addScaledVector(p,-d.y).multiplyScalar(E),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-S.x).multiplyScalar(E),o[g].add(b),o[R].add(b),o[N].add(b),l[g].add(m),l[R].add(m),l[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let g=0,R=x.length;g<R;++g){const N=x[g],E=N.start,D=N.count;for(let V=E,q=E+D;V<q;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new G,v=new G,T=new G,A=new G;function C(g){T.fromBufferAttribute(a,g),A.copy(T);const R=o[g];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),v.crossVectors(A,R);const E=v.dot(l[g])<0?-1:1;r.setXYZW(g,y.x,y.y,y.z,E)}for(let g=0,R=x.length;g<R;++g){const N=x[g],E=N.start,D=N.count;for(let V=E,q=E+D;V<q;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new G,s=new G,r=new G,o=new G,l=new G,c=new G,h=new G,p=new G;if(e)for(let u=0,d=e.count;u<d;u+=3){const S=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,S=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let f=0;f<h;f++)u[S++]=c[d++]}return new Ui(u,h,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=e(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CE=0;class ol extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=vr,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new G,Uf=new G,Ol=new G,ya=new G,Nf=new G,Pl=new G,Lf=new G;class wE{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Uf.copy(e).add(n).multiplyScalar(.5),Ol.copy(n).sub(e).normalize(),ya.copy(this.origin).sub(Uf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Ol),o=ya.dot(this.direction),l=-ya.dot(Ol),c=ya.lengthSq(),h=Math.abs(1-r*r);let p,u,d,S;if(h>0)if(p=r*l-o,u=r*o-l,S=s*h,p>=0)if(u>=-S)if(u<=S){const b=1/h;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-S?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=S?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Uf).addScaledVector(Ol,u),d}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),a=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,a,s){Nf.subVectors(n,e),Pl.subVectors(i,e),Lf.crossVectors(Nf,Pl);let r=this.direction.dot(Lf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ya.subVectors(this.origin,e);const l=o*this.direction.dot(Pl.crossVectors(ya,Pl));if(l<0)return null;const c=o*this.direction.dot(Nf.cross(ya));if(c<0||l+c>r)return null;const h=-o*ya.dot(Lf);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lS extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ng=new zt,is=new wE,zl=new kp,ig=new G,Il=new G,Bl=new G,Fl=new G,Of=new G,Hl=new G,ag=new G,Gl=new G;class jt extends fn{constructor(e=new oi,n=new lS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Of.fromBufferAttribute(p,e),r?Hl.addScaledVector(Of,h):Hl.addScaledVector(Of.sub(n),h))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(zl.containsPoint(is.origin)===!1&&(is.intersectSphere(zl,ig)===null||is.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(s).invert(),is.copy(e.ray).applyMatrix4(ng),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,is)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,b=u.length;S<b;S++){const m=u[S],f=r[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,T=y;v<T;v+=3){const A=o.getX(v),C=o.getX(v+1),g=o.getX(v+2);a=Vl(this,f,e,i,c,h,p,A,C,g),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=S,f=b;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);a=Vl(this,r,e,i,c,h,p,x,y,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,b=u.length;S<b;S++){const m=u[S],f=r[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,T=y;v<T;v+=3){const A=v,C=v+1,g=v+2;a=Vl(this,f,e,i,c,h,p,A,C,g),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=S,f=b;m<f;m+=3){const x=m,y=m+1,v=m+2;a=Vl(this,r,e,i,c,h,p,x,y,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function DE(t,e,n,i,a,s,r,o){let l;if(e.side===Cn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Ka,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Vl(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,Il),t.getVertexPosition(l,Bl),t.getVertexPosition(c,Fl);const h=DE(t,e,n,i,Il,Bl,Fl,ag);if(h){const p=new G;pi.getBarycoord(ag,Il,Bl,Fl,p),a&&(h.uv=pi.getInterpolatedAttribute(a,o,l,c,p,new it)),s&&(h.uv1=pi.getInterpolatedAttribute(s,o,l,c,p,new it)),r&&(h.normal=pi.getInterpolatedAttribute(r,o,l,c,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};pi.getNormal(Il,Bl,Fl,u.normal),h.face=u,h.barycoord=p}return h}class UE extends Sn{constructor(e=null,n=1,i=1,a,s,r,o,l,c=cn,h=cn,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pf=new G,NE=new G,LE=new He;class cs{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Pf.subVectors(i,n).cross(NE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Pf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LE.getNormalMatrix(e),a=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new kp,OE=new it(.5,.5),kl=new G;class Xp{constructor(e=new cs,n=new cs,i=new cs,a=new cs,s=new cs,r=new cs){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],S=s[8],b=s[9],m=s[10],f=s[11],x=s[12],y=s[13],v=s[14],T=s[15];if(a[0].setComponents(c-r,d-h,f-S,T-x).normalize(),a[1].setComponents(c+r,d+h,f+S,T+x).normalize(),a[2].setComponents(c+o,d+p,f+b,T+y).normalize(),a[3].setComponents(c-o,d-p,f-b,T-y).normalize(),i)a[4].setComponents(l,u,m,v).normalize(),a[5].setComponents(c-l,d-u,f-m,T-v).normalize();else if(a[4].setComponents(c-l,d-u,f-m,T-v).normalize(),n===Ri)a[5].setComponents(c+l,d+u,f+m,T+v).normalize();else if(n===qo)a[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const n=OE.distanceTo(e.center);return as.radius=.7071067811865476+n,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(kl.x=a.normal.x>0?e.max.x:e.min.x,kl.y=a.normal.y>0?e.max.y:e.min.y,kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cS extends Sn{constructor(e=[],n=Es,i,a,s,r,o,l,c,h){super(e,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Or extends Sn{constructor(e,n,i=Ni,a,s,r,o=cn,l=cn,c,h=fa,p=1){if(h!==fa&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PE extends Or{constructor(e,n=Ni,i=Es,a,s,r=cn,o=cn,l,c=fa){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uS extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hi extends oi{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],p=[];let u=0,d=0;S("z","y","x",-1,-1,i,n,e,r,s,0),S("z","y","x",1,-1,i,n,-e,r,s,1),S("x","z","y",1,1,e,i,n,a,r,2),S("x","z","y",1,-1,e,i,-n,a,r,3),S("x","y","z",1,-1,e,n,i,a,s,4),S("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2));function S(b,m,f,x,y,v,T,A,C,g,R){const N=v/C,E=T/g,D=v/2,V=T/2,q=A/2,U=C+1,L=g+1;let O=0,H=0;const K=new G;for(let ie=0;ie<L;ie++){const oe=ie*E-V;for(let ue=0;ue<U;ue++){const Ze=ue*N-D;K[b]=Ze*x,K[m]=oe*y,K[f]=q,c.push(K.x,K.y,K.z),K[b]=0,K[m]=0,K[f]=A>0?1:-1,h.push(K.x,K.y,K.z),p.push(ue/C),p.push(1-ie/g),O+=1}}for(let ie=0;ie<g;ie++)for(let oe=0;oe<C;oe++){const ue=u+oe+U*ie,Ze=u+oe+U*(ie+1),Ke=u+(oe+1)+U*(ie+1),Be=u+(oe+1)+U*ie;l.push(ue,Ze,Be),l.push(Ze,Ke,Be),H+=6}o.addGroup(d,H,R),d+=H,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wo extends oi{constructor(e=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const h=[],p=[],u=[],d=[];let S=0;const b=[],m=i/2;let f=0;x(),r===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function x(){const v=new G,T=new G;let A=0;const C=(n-e)/i;for(let g=0;g<=s;g++){const R=[],N=g/s,E=N*(n-e)+e;for(let D=0;D<=a;D++){const V=D/a,q=V*l+o,U=Math.sin(q),L=Math.cos(q);T.x=E*U,T.y=-N*i+m,T.z=E*L,p.push(T.x,T.y,T.z),v.set(U,C,L).normalize(),u.push(v.x,v.y,v.z),d.push(V,1-N),R.push(S++)}b.push(R)}for(let g=0;g<a;g++)for(let R=0;R<s;R++){const N=b[R][g],E=b[R+1][g],D=b[R+1][g+1],V=b[R][g+1];(e>0||R!==0)&&(h.push(N,E,V),A+=3),(n>0||R!==s-1)&&(h.push(E,D,V),A+=3)}c.addGroup(f,A,0),f+=A}function y(v){const T=S,A=new it,C=new G;let g=0;const R=v===!0?e:n,N=v===!0?1:-1;for(let D=1;D<=a;D++)p.push(0,m*N,0),u.push(0,N,0),d.push(.5,.5),S++;const E=S;for(let D=0;D<=a;D++){const q=D/a*l+o,U=Math.cos(q),L=Math.sin(q);C.x=R*L,C.y=m*N,C.z=R*U,p.push(C.x,C.y,C.z),u.push(0,N,0),A.x=U*.5+.5,A.y=L*.5*N+.5,d.push(A.x,A.y),S++}for(let D=0;D<a;D++){const V=T+D,q=E+D;v===!0?h.push(q,q+1,V):h.push(q+1,q,V),g+=3}c.addGroup(f,g,v===!0?1:2),f+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Su extends oi{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=e/o,u=n/l,d=[],S=[],b=[],m=[];for(let f=0;f<h;f++){const x=f*u-r;for(let y=0;y<c;y++){const v=y*p-s;S.push(v,-x,0),b.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,v=x+c*(f+1),T=x+1+c*(f+1),A=x+1+c*f;d.push(y,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(b,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wp extends oi{constructor(e=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new G,u=new G,d=[],S=[],b=[],m=[];for(let f=0;f<=i;f++){const x=[],y=f/i,v=r+y*o,T=e*Math.cos(v),A=Math.sqrt(e*e-T*T);let C=0;f===0&&r===0?C=.5/n:f===i&&l===Math.PI&&(C=-.5/n);for(let g=0;g<=n;g++){const R=g/n,N=a+R*s;p.x=-A*Math.cos(N),p.y=T,p.z=A*Math.sin(N),S.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),m.push(R+C,1-y),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const y=h[f][x+1],v=h[f][x],T=h[f+1][x],A=h[f+1][x+1];(f!==0||r>0)&&d.push(y,v,A),(f!==i-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(b,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qp extends oi{constructor(e=1,n=.4,i=64,a=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:a,p:s,q:r},i=Math.floor(i),a=Math.floor(a);const o=[],l=[],c=[],h=[],p=new G,u=new G,d=new G,S=new G,b=new G,m=new G,f=new G;for(let y=0;y<=i;++y){const v=y/i*s*Math.PI*2;x(v,s,r,e,d),x(v+.01,s,r,e,S),m.subVectors(S,d),f.addVectors(S,d),b.crossVectors(m,f),f.crossVectors(b,m),b.normalize(),f.normalize();for(let T=0;T<=a;++T){const A=T/a*Math.PI*2,C=-n*Math.cos(A),g=n*Math.sin(A);p.x=d.x+(C*f.x+g*b.x),p.y=d.y+(C*f.y+g*b.y),p.z=d.z+(C*f.z+g*b.z),l.push(p.x,p.y,p.z),u.subVectors(p,d).normalize(),c.push(u.x,u.y,u.z),h.push(y/i),h.push(T/a)}}for(let y=1;y<=i;y++)for(let v=1;v<=a;v++){const T=(a+1)*(y-1)+(v-1),A=(a+1)*y+(v-1),C=(a+1)*y+v,g=(a+1)*(y-1)+v;o.push(T,A,g),o.push(A,C,g)}this.setIndex(o),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(h,2));function x(y,v,T,A,C){const g=Math.cos(y),R=Math.sin(y),N=T/v*y,E=Math.cos(N);C.x=A*(2+E)*.5*g,C.y=A*(2+E)*R*.5,C.z=A*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Pr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(sg(a))a.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(sg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Pr(t[n]);for(const a in i)e[a]=i[a]}return e}function sg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function zE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const IE={clone:Pr,merge:_n};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=zE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(a.value);break;case"v2":this.uniforms[i].value=new it().fromArray(a.value);break;case"v3":this.uniforms[i].value=new G().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new He().fromArray(a.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HE extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wi extends ol{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GE extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VE extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dS extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class kE extends dS{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const zf=new zt,rg=new G,og=new G;class XE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rg.setFromMatrixPosition(e.matrixWorld),n.position.copy(rg),og.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(og),n.updateMatrixWorld(),zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===qo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xl=new G,Wl=new Xr,Si=new G;class hS extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,Wl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Wl,Si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Xl,Wl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Wl,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ma=new G,lg=new it,cg=new it;class ei extends hS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,n){return this.getViewBounds(e,lg,cg),n.subVectors(cg,lg)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(df*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Yp extends hS{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class WE extends XE{constructor(){super(new Yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qE extends dS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new WE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Ys=-90,Zs=1;class YE extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(Ys,Zs,e,n);a.layers=this.layers,this.add(a);const s=new ei(Ys,Zs,e,n);s.layers=this.layers,this.add(s);const r=new ei(Ys,Zs,e,n);r.layers=this.layers,this.add(r);const o=new ei(Ys,Zs,e,n);o.layers=this.layers,this.add(o);const l=new ei(Ys,Zs,e,n);l.layers=this.layers,this.add(l);const c=new ei(Ys,Zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,u,d),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class ZE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jp=class jp{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};jp.prototype.isMatrix2=!0;let ug=jp;function fg(t,e,n,i){const a=KE(i);switch(n){case $x:return t*e;case tS:return t*e/a.components*a.byteLength;case Ip:return t*e/a.components*a.byteLength;case Ts:return t*e*2/a.components*a.byteLength;case Bp:return t*e*2/a.components*a.byteLength;case eS:return t*e*3/a.components*a.byteLength;case mi:return t*e*4/a.components*a.byteLength;case Fp:return t*e*4/a.components*a.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case th:return Math.max(t,16)*Math.max(e,8)/4;case jd:case eh:return Math.max(t,8)*Math.max(e,8)/2;case nh:case ih:case sh:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ah:case Zc:case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mh:case bh:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kc:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KE(t){switch(t){case Bn:case Kx:return{byteLength:1,components:1};case Xo:case Qx:case ua:return{byteLength:2,components:1};case Pp:case zp:return{byteLength:2,components:4};case Ni:case Op:case Ai:return{byteLength:4,components:1};case Jx:case jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QE(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((d,S)=>d.start-S.start);let u=0;for(let d=1;d<p.length;d++){const S=p[u],b=p[d];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,S=p.length;d<S;d++){const b=p[d];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,K1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ST=`#ifdef USE_NORMALMAP
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
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,zT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WT=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,aA=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sA=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,rA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,dA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hA=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,pA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mA=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,gA=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_A=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,vA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xA=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,SA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yA=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,MA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,bA=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,EA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,TA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,AA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,wA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,DA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,We={alphahash_fragment:JE,alphahash_pars_fragment:jE,alphamap_fragment:$E,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:s1,batching_vertex:r1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:f1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:S1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:M1,displacementmap_pars_vertex:b1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:w1,envmap_common_pars_fragment:D1,envmap_pars_fragment:U1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:k1,envmap_vertex:L1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:z1,fog_pars_fragment:I1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:F1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:V1,lights_toon_fragment:X1,lights_toon_pars_fragment:W1,lights_phong_fragment:q1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:K1,lights_fragment_begin:Q1,lights_fragment_maps:J1,lights_fragment_end:j1,lightprobes_pars_fragment:$1,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:rT,map_particle_pars_fragment:oT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:fT,morphnormal_vertex:dT,morphtarget_pars_vertex:hT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:_T,normal_pars_vertex:vT,normal_vertex:xT,normalmap_pars_fragment:ST,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:MT,clearcoat_pars_fragment:bT,iridescence_pars_fragment:ET,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:RT,project_vertex:CT,dithering_fragment:wT,dithering_pars_fragment:DT,roughnessmap_fragment:UT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:OT,shadowmap_vertex:PT,shadowmask_pars_fragment:zT,skinbase_vertex:IT,skinning_pars_vertex:BT,skinning_vertex:FT,skinnormal_vertex:HT,specularmap_fragment:GT,specularmap_pars_fragment:VT,tonemapping_fragment:kT,tonemapping_pars_fragment:XT,transmission_fragment:WT,transmission_pars_fragment:qT,uv_pars_fragment:YT,uv_pars_vertex:ZT,uv_vertex:KT,worldpos_vertex:QT,background_vert:JT,background_frag:jT,backgroundCube_vert:$T,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:aA,distance_vert:sA,distance_frag:rA,equirect_vert:oA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:_A,meshnormal_frag:vA,meshphong_vert:xA,meshphong_frag:SA,meshphysical_vert:yA,meshphysical_frag:MA,meshtoon_vert:bA,meshtoon_frag:EA,points_vert:TA,points_frag:AA,shadow_vert:RA,shadow_frag:CA,sprite_vert:wA,sprite_frag:DA},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mi={basic:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:_n([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:_n([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:_n([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:_n([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:_n([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:_n([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:_n([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:_n([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mi.physical={uniforms:_n([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ql={r:0,b:0,g:0},UA=new zt,mS=new He;mS.set(-1,0,0,0,1,0,0,0,1);function NA(t,e,n,i,a,s){const r=new je(0);let o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function S(x){let y=!1;const v=d(x);v===null?m(r,o):v&&v.isColor&&(m(v,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(x,y){const v=d(y);v&&(v.isCubeTexture||v.mapping===xu)?(c===void 0&&(c=new jt(new hi(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Pr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UA.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mS),c.material.toneMapped=et.getTransfer(v.colorSpace)!==ct,(h!==v||p!==v.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new jt(new Su(2,2),new Li({name:"BackgroundMaterial",uniforms:Pr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(ql,fS(t)),n.buffers.color.setClear(ql.r,ql.g,ql.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,y=1){r.set(x),o=y,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(r,o)},render:S,addToRenderList:b,dispose:f}}function LA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(E,D,V,q,U){let L=!1;const O=p(E,q,V,D);s!==O&&(s=O,c(s.object)),L=d(E,q,V,U),L&&S(E,q,V,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,v(E,D,V,q),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function h(E){return t.deleteVertexArray(E)}function p(E,D,V,q){const U=q.wireframe===!0;let L=i[D.id];L===void 0&&(L={},i[D.id]=L);const O=E.isInstancedMesh===!0?E.id:0;let H=L[O];H===void 0&&(H={},L[O]=H);let K=H[V.id];K===void 0&&(K={},H[V.id]=K);let ie=K[U];return ie===void 0&&(ie=u(l()),K[U]=ie),ie}function u(E){const D=[],V=[],q=[];for(let U=0;U<n;U++)D[U]=0,V[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:q,object:E,attributes:{},index:null}}function d(E,D,V,q){const U=s.attributes,L=D.attributes;let O=0;const H=V.getAttributes();for(const K in H)if(H[K].location>=0){const oe=U[K];let ue=L[K];if(ue===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==q}function S(E,D,V,q){const U={},L=D.attributes;let O=0;const H=V.getAttributes();for(const K in H)if(H[K].location>=0){let oe=L[K];oe===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),U[K]=ue,O++}s.attributes=U,s.attributesNum=O,s.index=q}function b(){const E=s.newAttributes;for(let D=0,V=E.length;D<V;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const V=s.newAttributes,q=s.enabledAttributes,U=s.attributeDivisors;V[E]=1,q[E]===0&&(t.enableVertexAttribArray(E),q[E]=1),U[E]!==D&&(t.vertexAttribDivisor(E,D),U[E]=D)}function x(){const E=s.newAttributes,D=s.enabledAttributes;for(let V=0,q=D.length;V<q;V++)D[V]!==E[V]&&(t.disableVertexAttribArray(V),D[V]=0)}function y(E,D,V,q,U,L,O){O===!0?t.vertexAttribIPointer(E,D,V,U,L):t.vertexAttribPointer(E,D,V,q,U,L)}function v(E,D,V,q){b();const U=q.attributes,L=V.getAttributes(),O=D.defaultAttributeValues;for(const H in L){const K=L[H];if(K.location>=0){let ie=U[H];if(ie===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const oe=ie.normalized,ue=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;const Ke=Ze.buffer,Be=Ze.type,j=Ze.bytesPerElement,fe=Be===t.INT||Be===t.UNSIGNED_INT||ie.gpuType===Op;if(ie.isInterleavedBufferAttribute){const re=ie.data,Pe=re.stride,Fe=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<K.locationSize;Le++)f(K.location+Le,re.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<K.locationSize;Le++)m(K.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Le=0;Le<K.locationSize;Le++)y(K.location+Le,ue/K.locationSize,Be,oe,Pe*j,(Fe+ue/K.locationSize*Le)*j,fe)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)f(K.location+re,ie.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<K.locationSize;re++)m(K.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let re=0;re<K.locationSize;re++)y(K.location+re,ue/K.locationSize,Be,oe,ue*j,ue/K.locationSize*re*j,fe)}}else if(O!==void 0){const oe=O[H];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(K.location,oe);break;case 3:t.vertexAttrib3fv(K.location,oe);break;case 4:t.vertexAttrib4fv(K.location,oe);break;default:t.vertexAttrib1fv(K.location,oe)}}}}x()}function T(){R();for(const E in i){const D=i[E];for(const V in D){const q=D[V];for(const U in q){const L=q[U];for(const O in L)h(L[O].object),delete L[O];delete q[U]}}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const V in D){const q=D[V];for(const U in q){const L=q[U];for(const O in L)h(L[O].object),delete L[O];delete q[U]}}delete i[E.id]}function C(E){for(const D in i){const V=i[D];for(const q in V){const U=V[q];if(U[E.id]===void 0)continue;const L=U[E.id];for(const O in L)h(L[O].object),delete L[O];delete U[E.id]}}}function g(E){for(const D in i){const V=i[D],q=E.isInstancedMesh===!0?E.id:0,U=V[q];if(U!==void 0){for(const L in U){const O=U[L];for(const H in O)h(O[H].object),delete O[H];delete U[L]}delete V[q],Object.keys(V).length===0&&delete i[D]}}}function R(){N(),r=!0,s!==a&&(s=a,c(s.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function OA(t,e,n){let i;function a(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function PA(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==mi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const g=C===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ai&&!g)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:A}}function zA(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new cs,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){const S=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!a||S===null||S.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,y=x*4;let v=f.clippingState||null;l.value=v,v=h(S,u,y,d);for(let T=0;T!==y;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,d,S){const b=p!==null?p.length:0;let m=null;if(b!==0){if(m=l.value,S!==!0||m===null){const f=d+b*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=d;y!==b;++y,v+=4)r.copy(p[y]).applyMatrix4(x,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const Pa=4,dg=[.125,.215,.35,.446,.526,.582],fs=20,IA=256,ao=new Yp,hg=new je;let If=null,Bf=0,Ff=0,Hf=!1;const BA=new G;class pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=BA}=s;If=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Bf,Ff),this._renderer.xr.enabled=Hf,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ua,format:mi,colorSpace:Qc,depthBuffer:!1},a=mg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FA(s)),this._blurMaterial=GA(s,e,n),this._ggxMaterial=HA(s,e,n)}return a}_compileMaterial(e){const n=new jt(new oi,e);this._renderer.compile(n,ao)}_sceneToCubeUV(e,n,i,a,s){const l=new ei(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(hg),p.toneMapping=wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new hi,new lS({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(hg),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const T=this._cubeSize;Ks(a,v*T,y>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(b,l),p.render(e,l)}p.toneMapping=d,p.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Es||e.mapping===Lr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ks(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ao)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:S}=this,b=this._sizeLods[i],m=3*b*(i>S-Pa?i-S+Pa:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=S-n,Ks(s,m,f,3*b,2*b),a.setRenderTarget(s),a.render(o,ao),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,Ks(e,m,f,3*b,2*b),a.setRenderTarget(e),a.render(o,ao)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fs-1),b=s/S,m=isFinite(s)?1+Math.floor(h*b):fs;m>fs&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const f=[];let x=0;for(let C=0;C<fs;++C){const g=C/b,R=Math.exp(-g*g/2);f.push(R),C===0?x+=R:C<m&&(x+=2*R)}for(let C=0;C<f.length;C++)f[C]=f[C]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=S,u.mipInt.value=y-i;const v=this._sizeLods[a],T=3*v*(a>y-Pa?a-y+Pa:0),A=4*(this._cubeSize-v);Ks(n,T,A,3*v,2*v),l.setRenderTarget(n),l.render(p,ao)}}function FA(t){const e=[],n=[],i=[];let a=t;const s=t-Pa+1+dg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let l=1/o;r>t-Pa?l=dg[r-t+Pa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,S=6,b=3,m=2,f=1,x=new Float32Array(b*S*d),y=new Float32Array(m*S*d),v=new Float32Array(f*S*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,g=A>2?0:-1,R=[C,g,0,C+2/3,g,0,C+2/3,g+1,0,C,g,0,C+2/3,g+1,0,C,g+1,0];x.set(R,b*S*A),y.set(u,m*S*A);const N=[A,A,A,A,A,A];v.set(N,f*S*A)}const T=new oi;T.setAttribute("position",new Ui(x,b)),T.setAttribute("uv",new Ui(y,m)),T.setAttribute("faceIndex",new Ui(v,f)),i.push(new jt(T,null)),a>Pa&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function mg(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function HA(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function GA(t,e,n){const i=new Float32Array(fs),a=new G(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yu(),fragmentShader:`

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
		`,blending:ia,depthTest:!1,depthWrite:!1})}function gg(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:ia,depthTest:!1,depthWrite:!1})}function _g(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}class gS extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new cS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new hi(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:ia});s.uniforms.tEquirect.value=n;const r=new jt(a,s),o=n.minFilter;return n.minFilter===ds&&(n.minFilter=mn),new YE(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function VA(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===cf||d===uf)if(e.has(u)){const S=e.get(u).texture;return o(S,u.mapping)}else{const S=u.image;if(S&&S.height>0){const b=new gS(S.height);return b.fromEquirectangularTexture(t,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,S=d===cf||d===uf,b=d===Es||d===Lr;if(S||b){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new pg(t)),m=S?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return S&&x&&x.height>0||b&&x&&l(x)?(i===null&&(i=new pg(t)),m=S?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===cf?u.mapping=Es:d===uf&&(u.mapping=Lr),u}function l(u){let d=0;const S=6;for(let b=0;b<S;b++)u[b]!==void 0&&d++;return d===S}function c(u){const d=u.target;d.removeEventListener("dispose",c);const S=e.get(d);S!==void 0&&(e.delete(d),S.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const S=n.get(d);S!==void 0&&(n.delete(d),S.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function kA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&xr("WebGLRenderer: "+i+" extension not supported."),a}}}function XA(t,e,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const S in u.attributes)e.remove(u.attributes[S]);u.removeEventListener("dispose",r),delete a[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,S=p.attributes.position;let b=0;if(S===void 0)return;if(d!==null){const x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],A=x[y+1],C=x[y+2];u.push(T,A,A,C,C,T)}}else{const x=S.array;b=S.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,A=y+1,C=y+2;u.push(T,A,A,C,C,T)}}const m=new(S.count>=65535?oS:rS)(u,1);m.version=b;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function h(p){const u=s.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function WA(t,e,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){t.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(t.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function YA(t,e,n){const i=new WeakMap,a=new Dt;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let N=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var d=N;u!==void 0&&u.texture.dispose();const S=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;S===!0&&(v=1),b===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*p),g=new iS(C,T,A,p);g.type=Ai,g.needsUpdate=!0;const R=v*4;for(let E=0;E<p;E++){const D=f[E],V=x[E],q=y[E],U=T*A*4*E;for(let L=0;L<D.count;L++){const O=L*R;S===!0&&(a.fromBufferAttribute(D,L),C[U+O+0]=a.x,C[U+O+1]=a.y,C[U+O+2]=a.z,C[U+O+3]=0),b===!0&&(a.fromBufferAttribute(V,L),C[U+O+4]=a.x,C[U+O+5]=a.y,C[U+O+6]=a.z,C[U+O+7]=0),m===!0&&(a.fromBufferAttribute(q,L),C[U+O+8]=a.x,C[U+O+9]=a.y,C[U+O+10]=a.z,C[U+O+11]=q.itemSize===4?a.w:1)}}u={count:p,texture:g,size:new it(T,A)},i.set(o,u),o.addEventListener("dispose",N)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let S=0;for(let m=0;m<c.length;m++)S+=c[m];const b=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function ZA(t,e,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const KA={[Gx]:"LINEAR_TONE_MAPPING",[Vx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[Xx]:"ACES_FILMIC_TONE_MAPPING",[qx]:"AGX_TONE_MAPPING",[Yx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function QA(t,e,n,i,a,s){const r=new Di(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Or(e,n):void 0}),o=new Di(e,n,{type:ua,depthBuffer:!1,stencilBuffer:!1}),l=new oi;l.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nn([0,2,0,0,2,0],2));const c=new HE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new jt(l,c),p=new Yp(-1,1,1,-1,0,1);let u=null,d=null,S=!1,b,m=null,f=[],x=!1;this.setSize=function(y,v){r.setSize(y,v),o.setSize(y,v);for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){f=y,x=f.length>0&&f[0].isRenderPass===!0;const v=r.width,T=r.height;for(let A=0;A<f.length;A++){const C=f[A];C.setSize&&C.setSize(v,T)}},this.begin=function(y,v){if(S||y.toneMapping===wi&&f.length===0)return!1;if(m=v,v!==null){const T=v.width,A=v.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return x===!1&&y.setRenderTarget(r),b=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return x},this.end=function(y,v){y.toneMapping=b,S=!0;let T=r,A=o;for(let C=0;C<f.length;C++){const g=f[C];if(g.enabled!==!1&&(g.render(y,A,T,v),g.needsSwap!==!1)){const R=T;T=A,A=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,c.defines={},et.getTransfer(u)===ct&&(c.defines.SRGB_TRANSFER="");const C=KA[d];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(h,p),m=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const _S=new Sn,Dh=new Or(1,1),vS=new iS,xS=new gE,SS=new cS,vg=[],xg=[],Sg=new Float32Array(16),yg=new Float32Array(9),Mg=new Float32Array(4);function Wr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=vg[a];if(s===void 0&&(s=new Float32Array(a),vg[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mu(t,e){let n=xg[e];n===void 0&&(n=new Int32Array(e),xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function tR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;Mg.set(i),t.uniformMatrix2fv(this.addr,!1,Mg),Qt(n,i)}}function nR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;yg.set(i),t.uniformMatrix3fv(this.addr,!1,yg),Qt(n,i)}}function iR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;Sg.set(i),t.uniformMatrix4fv(this.addr,!1,Sg),Qt(n,i)}}function aR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function lR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function dR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Dh.compareFunction=n.isReversedDepthBuffer()?Gp:Hp,s=Dh):s=_S,n.setTexture2D(e||s,a)}function hR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||xS,a)}function pR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||SS,a)}function mR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||vS,a)}function gR(t){switch(t){case 5126:return JA;case 35664:return jA;case 35665:return $A;case 35666:return eR;case 35674:return tR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return aR;case 35667:case 35671:return sR;case 35668:case 35672:return rR;case 35669:case 35673:return oR;case 5125:return lR;case 36294:return cR;case 36295:return uR;case 36296:return fR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}function _R(t,e){t.uniform1fv(this.addr,e)}function vR(t,e){const n=Wr(e,this.size,2);t.uniform2fv(this.addr,n)}function xR(t,e){const n=Wr(e,this.size,3);t.uniform3fv(this.addr,n)}function SR(t,e){const n=Wr(e,this.size,4);t.uniform4fv(this.addr,n)}function yR(t,e){const n=Wr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MR(t,e){const n=Wr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bR(t,e){const n=Wr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ER(t,e){t.uniform1iv(this.addr,e)}function TR(t,e){t.uniform2iv(this.addr,e)}function AR(t,e){t.uniform3iv(this.addr,e)}function RR(t,e){t.uniform4iv(this.addr,e)}function CR(t,e){t.uniform1uiv(this.addr,e)}function wR(t,e){t.uniform2uiv(this.addr,e)}function DR(t,e){t.uniform3uiv(this.addr,e)}function UR(t,e){t.uniform4uiv(this.addr,e)}function NR(t,e,n){const i=this.cache,a=e.length,s=Mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Dh:r=_S;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function LR(t,e,n){const i=this.cache,a=e.length,s=Mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||xS,s[r])}function OR(t,e,n){const i=this.cache,a=e.length,s=Mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||SS,s[r])}function PR(t,e,n){const i=this.cache,a=e.length,s=Mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||vS,s[r])}function zR(t){switch(t){case 5126:return _R;case 35664:return vR;case 35665:return xR;case 35666:return SR;case 35674:return yR;case 35675:return MR;case 35676:return bR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return AR;case 35669:case 35673:return RR;case 5125:return CR;case 36294:return wR;case 36295:return DR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return OR;case 36289:case 36303:case 36311:case 36292:return PR}}class IR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gR(n.type)}}class BR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zR(n.type)}}class FR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function bg(t,e){t.seq.push(e),t.map[e.id]=e}function HR(t,e,n){const i=t.name,a=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),r=Gf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){bg(n,c===void 0?new IR(o,t,e):new BR(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new FR(o),bg(n,p)),n=p}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);HR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function Eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GR=37297;let VR=0;function kR(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Tg=new He;function XR(t){et._getMatrix(Tg,et.workingColorSpace,t);const e=`mat3( ${Tg.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Jc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+kR(t.getShaderSource(e),o)}else return s}function WR(t,e){const n=XR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qR={[Gx]:"Linear",[Vx]:"Reinhard",[kx]:"Cineon",[Xx]:"ACESFilmic",[qx]:"AgX",[Yx]:"Neutral",[Wx]:"Custom"};function YR(t,e){const n=qR[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new G;function ZR(){et.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function QR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function po(t){return t!==""}function Rg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(t){return t.replace(jR,e3)}const $R=new Map;function e3(t,e){let n=We[e];if(n===void 0){const i=$R.get(e);if(i!==void 0)n=We[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uh(n)}const t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(t){return t.replace(t3,n3)}function n3(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Dg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const i3={[hc]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function a3(t){return i3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s3={[Es]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function r3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":s3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const o3={[Lr]:"ENVMAP_MODE_REFRACTION"};function l3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":o3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c3={[Hx]:"ENVMAP_BLENDING_MULTIPLY",[Kb]:"ENVMAP_BLENDING_MIX",[Qb]:"ENVMAP_BLENDING_ADD"};function u3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":c3[t.combine]||"ENVMAP_BLENDING_NONE"}function f3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d3(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=a3(n),c=r3(n),h=l3(n),p=u3(n),u=f3(n),d=KR(n),S=QR(s),b=a.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(po).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(po).join(`
`),f.length>0&&(f+=`
`)):(m=[Dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),f=[Dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?We.tonemapping_pars_fragment:"",n.toneMapping!==wi?YR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,WR("linearToOutputTexel",n.outputColorSpace),ZR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(po).join(`
`)),r=Uh(r),r=Rg(r,n),r=Cg(r,n),o=Uh(o),o=Rg(o,n),o=Cg(o,n),r=wg(r),o=wg(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+r,v=x+f+o,T=Eg(a,a.VERTEX_SHADER,y),A=Eg(a,a.FRAGMENT_SHADER,v);a.attachShader(b,T),a.attachShader(b,A),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function C(E){if(t.debug.checkShaderErrors){const D=a.getProgramInfoLog(b)||"",V=a.getShaderInfoLog(T)||"",q=a.getShaderInfoLog(A)||"",U=D.trim(),L=V.trim(),O=q.trim();let H=!0,K=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,b,T,A);else{const ie=Ag(a,T,"vertex"),oe=Ag(a,A,"fragment");rt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+ie+`
`+oe)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(L===""||O==="")&&(K=!1);K&&(E.diagnostics={runnable:H,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:f}})}a.deleteShader(T),a.deleteShader(A),g=new vc(a,b),R=JR(a,b)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(b,GR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let h3=0;class p3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m3(e),n.set(e,i)),i}}class m3{constructor(e){this.id=h3++,this.code=e,this.usedTimes=0}}function g3(t){return t===Ts||t===Zc||t===Kc}function _3(t,e,n,i,a,s){const r=new aS,o=new p3,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return l.add(g),g===0?"uv":`uv${g}`}function b(g,R,N,E,D,V){const q=E.fog,U=D.geometry,L=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?E.environment:null,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=e.get(g.envMap||L,O),K=H&&H.mapping===xu?H.image.height:null,ie=d[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Ze=0;U.morphAttributes.position!==void 0&&(Ze=1),U.morphAttributes.normal!==void 0&&(Ze=2),U.morphAttributes.color!==void 0&&(Ze=3);let Ke,Be,j,fe;if(ie){const Ee=Mi[ie];Ke=Ee.vertexShader,Be=Ee.fragmentShader}else{Ke=g.vertexShader,Be=g.fragmentShader;const Ee=o.getVertexShaderStage(g),Nt=o.getFragmentShaderStage(g);o.update(g,Ee,Nt),j=Ee.id,fe=Nt.id}const re=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,J=!!g.map,$=!!g.matcap,I=!!H,be=!!g.aoMap,Ne=!!g.lightMap,qe=!!g.bumpMap&&g.wireframe===!1,Mt=!!g.normalMap,Rt=!!g.displacementMap,Ut=!!g.emissiveMap,mt=!!g.metalnessMap,Ct=!!g.roughnessMap,z=g.anisotropy>0,gn=g.clearcoat>0,Ae=g.dispersion>0,w=g.iridescence>0,_=g.sheen>0,F=g.transmission>0,k=z&&!!g.anisotropyMap,Z=gn&&!!g.clearcoatMap,se=gn&&!!g.clearcoatNormalMap,le=gn&&!!g.clearcoatRoughnessMap,Q=w&&!!g.iridescenceMap,te=w&&!!g.iridescenceThicknessMap,he=_&&!!g.sheenColorMap,Ce=_&&!!g.sheenRoughnessMap,ge=!!g.specularMap,pe=!!g.specularColorMap,Ue=!!g.specularIntensityMap,Oe=F&&!!g.transmissionMap,Ve=F&&!!g.thicknessMap,P=!!g.gradientMap,de=!!g.alphaMap,ee=g.alphaTest>0,me=!!g.alphaHash,Se=!!g.extensions;let ae=wi;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ae=t.toneMapping);const Re={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Ke,fragmentShader:Be,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:fe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:J,matcap:$,envMap:I,envMapMode:I&&H.mapping,envMapCubeUVHeight:K,aoMap:be,lightMap:Ne,bumpMap:qe,normalMap:Mt,displacementMap:Rt,emissiveMap:Ut,normalMapObjectSpace:Mt&&g.normalMapType===$b,normalMapTangentSpace:Mt&&g.normalMapType===Ch,packedNormalMap:Mt&&g.normalMapType===Ch&&g3(g.normalMap.format),metalnessMap:mt,roughnessMap:Ct,anisotropy:z,anisotropyMap:k,clearcoat:gn,clearcoatMap:Z,clearcoatNormalMap:se,clearcoatRoughnessMap:le,dispersion:Ae,iridescence:w,iridescenceMap:Q,iridescenceThicknessMap:te,sheen:_,sheenColorMap:he,sheenRoughnessMap:Ce,specularMap:ge,specularColorMap:pe,specularIntensityMap:Ue,transmission:F,transmissionMap:Oe,thicknessMap:Ve,gradientMap:P,opaque:g.transparent===!1&&g.blending===vr&&g.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:me,combine:g.combine,mapUv:J&&S(g.map.channel),aoMapUv:be&&S(g.aoMap.channel),lightMapUv:Ne&&S(g.lightMap.channel),bumpMapUv:qe&&S(g.bumpMap.channel),normalMapUv:Mt&&S(g.normalMap.channel),displacementMapUv:Rt&&S(g.displacementMap.channel),emissiveMapUv:Ut&&S(g.emissiveMap.channel),metalnessMapUv:mt&&S(g.metalnessMap.channel),roughnessMapUv:Ct&&S(g.roughnessMap.channel),anisotropyMapUv:k&&S(g.anisotropyMap.channel),clearcoatMapUv:Z&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&S(g.sheenRoughnessMap.channel),specularMapUv:ge&&S(g.specularMap.channel),specularColorMapUv:pe&&S(g.specularColorMap.channel),specularIntensityMapUv:Ue&&S(g.specularIntensityMap.channel),transmissionMapUv:Oe&&S(g.transmissionMap.channel),thicknessMapUv:Ve&&S(g.thicknessMap.channel),alphaMapUv:de&&S(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Mt||z),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(J||de),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&Mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ze,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,decodeVideoTexture:J&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===ct,decodeVideoTextureEmissive:Ut&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ki,flipSided:g.side===Cn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Se&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&g.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(g){const R=[];if(g.shaderID?R.push(g.shaderID):(R.push(g.customVertexShaderID),R.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)R.push(N),R.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(f(R,g),x(R,g),R.push(t.outputColorSpace)),R.push(g.customProgramCacheKey),R.join()}function f(g,R){g.push(R.precision),g.push(R.outputColorSpace),g.push(R.envMapMode),g.push(R.envMapCubeUVHeight),g.push(R.mapUv),g.push(R.alphaMapUv),g.push(R.lightMapUv),g.push(R.aoMapUv),g.push(R.bumpMapUv),g.push(R.normalMapUv),g.push(R.displacementMapUv),g.push(R.emissiveMapUv),g.push(R.metalnessMapUv),g.push(R.roughnessMapUv),g.push(R.anisotropyMapUv),g.push(R.clearcoatMapUv),g.push(R.clearcoatNormalMapUv),g.push(R.clearcoatRoughnessMapUv),g.push(R.iridescenceMapUv),g.push(R.iridescenceThicknessMapUv),g.push(R.sheenColorMapUv),g.push(R.sheenRoughnessMapUv),g.push(R.specularMapUv),g.push(R.specularColorMapUv),g.push(R.specularIntensityMapUv),g.push(R.transmissionMapUv),g.push(R.thicknessMapUv),g.push(R.combine),g.push(R.fogExp2),g.push(R.sizeAttenuation),g.push(R.morphTargetsCount),g.push(R.morphAttributeCount),g.push(R.numDirLights),g.push(R.numPointLights),g.push(R.numSpotLights),g.push(R.numSpotLightMaps),g.push(R.numHemiLights),g.push(R.numRectAreaLights),g.push(R.numDirLightShadows),g.push(R.numPointLightShadows),g.push(R.numSpotLightShadows),g.push(R.numSpotLightShadowsWithMaps),g.push(R.numLightProbes),g.push(R.shadowMapType),g.push(R.toneMapping),g.push(R.numClippingPlanes),g.push(R.numClipIntersection),g.push(R.depthPacking)}function x(g,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function y(g){const R=d[g.type];let N;if(R){const E=Mi[R];N=IE.clone(E.uniforms)}else N=g.uniforms;return N}function v(g,R){let N=h.get(R);return N!==void 0?++N.usedTimes:(N=new d3(t,R,g,a),c.push(N),h.set(R,N)),N}function T(g){if(--g.usedTimes===0){const R=c.indexOf(g);c[R]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function v3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function x3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ug(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ng(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,S,b,m,f){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:S,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:f},t[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=S,x.materialVariant=r(u),x.groupOrder=b,x.renderOrder=u.renderOrder,x.z=m,x.group=f),e++,x}function l(u,d,S,b,m,f){const x=o(u,d,S,b,m,f);S.transmission>0?i.push(x):S.transparent===!0?a.push(x):n.push(x)}function c(u,d,S,b,m,f){const x=o(u,d,S,b,m,f);S.transmission>0?i.unshift(x):S.transparent===!0?a.unshift(x):n.unshift(x)}function h(u,d,S){n.length>1&&n.sort(u||x3),i.length>1&&i.sort(d||Ug),a.length>1&&a.sort(d||Ug),S&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=e,d=t.length;u<d;u++){const S=t[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function S3(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new Ng,t.set(i,[r])):a>=s.length?(r=new Ng,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function y3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new je};break;case"SpotLight":n={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function M3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let b3=0;function E3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T3(t){const e=new y3,n=M3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const a=new G,s=new zt,r=new zt;function o(c){let h=0,p=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,S=0,b=0,m=0,f=0,x=0,y=0,v=0,T=0,A=0,C=0;c.sort(E3);for(let R=0,N=c.length;R<N;R++){const E=c[R],D=E.color,V=E.intensity,q=E.distance;let U=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ts?U=E.shadow.map.texture:U=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=D.r*V,p+=D.g*V,u+=D.b*V;else if(E.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(E.sh.coefficients[L],V);C++}else if(E.isDirectionalLight){const L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const O=E.shadow,H=n.get(E);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=E.shadow.matrix,x++}i.directional[d]=L,d++}else if(E.isSpotLight){const L=e.get(E);L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(D).multiplyScalar(V),L.distance=q,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,i.spot[b]=L;const O=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,O.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[b]=O.matrix,E.castShadow){const H=n.get(E);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=U,v++}b++}else if(E.isRectAreaLight){const L=e.get(E);L.color.copy(D).multiplyScalar(V),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=L,m++}else if(E.isPointLight){const L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){const O=E.shadow,H=n.get(E);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,i.pointShadow[S]=H,i.pointShadowMap[S]=U,i.pointShadowMatrix[S]=E.shadow.matrix,y++}i.point[S]=L,S++}else if(E.isHemisphereLight){const L=e.get(E);L.skyColor.copy(E.color).multiplyScalar(V),L.groundColor.copy(E.groundColor).multiplyScalar(V),i.hemi[f]=L,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==d||g.pointLength!==S||g.spotLength!==b||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==x||g.numPointShadows!==y||g.numSpotShadows!==v||g.numSpotMaps!==T||g.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=m,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,g.directionalLength=d,g.pointLength=S,g.spotLength=b,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=x,g.numPointShadows=y,g.numSpotShadows=v,g.numSpotMaps=T,g.numLightProbes=C,i.version=b3++)}function l(c,h){let p=0,u=0,d=0,S=0,b=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),S++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=i.hemi[b];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function Lg(t){const e=new T3(t),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function A3(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Lg(t),e.set(a,[o])):s>=r.length?(o=new Lg(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const R3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w3=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],D3=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Og=new zt,so=new G,Vf=new G;function U3(t,e,n){let i=new Xp;const a=new it,s=new it,r=new Dt,o=new GE,l=new VE,c={},h=n.maxTextureSize,p={[Ka]:Cn,[Cn]:Ka,[Ki]:Ki},u=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:R3,fragmentShader:C3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const S=new oi;S.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new jt(S,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(A,C,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Db&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const R=t.getRenderTarget(),N=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),D=t.state;D.setBlending(ia),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=f!==this.type;V&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(U=>U.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,U=A.length;q<U;q++){const L=A[q],O=L.shadow;if(O===void 0){Ie("WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const H=O.getFrameExtents();a.multiply(H),s.copy(O.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/H.x),a.x=s.x*H.x,O.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/H.y),a.y=s.y*H.y,O.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===fo){if(L.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Di(a.x,a.y,{format:Ts,type:ua,minFilter:mn,magFilter:mn,generateMipmaps:!1}),O.map.texture.name=L.name+".shadowMap",O.map.depthTexture=new Or(a.x,a.y,Ai),O.map.depthTexture.name=L.name+".shadowMapDepth",O.map.depthTexture.format=fa,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=cn,O.map.depthTexture.magFilter=cn}else L.isPointLight?(O.map=new gS(a.x),O.map.depthTexture=new PE(a.x,Ni)):(O.map=new Di(a.x,a.y),O.map.depthTexture=new Or(a.x,a.y,Ni)),O.map.depthTexture.name=L.name+".shadowMap",O.map.depthTexture.format=fa,this.type===hc?(O.map.depthTexture.compareFunction=K?Gp:Hp,O.map.depthTexture.minFilter=mn,O.map.depthTexture.magFilter=mn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=cn,O.map.depthTexture.magFilter=cn);O.camera.updateProjectionMatrix()}const ie=O.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ie;oe++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(O.map),t.clear());const ue=O.getViewport(oe);r.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),D.viewport(r)}if(L.isPointLight){const ue=O.camera,Ze=O.matrix,Ke=L.distance||ue.far;Ke!==ue.far&&(ue.far=Ke,ue.updateProjectionMatrix()),so.setFromMatrixPosition(L.matrixWorld),ue.position.copy(so),Vf.copy(ue.position),Vf.add(w3[oe]),ue.up.copy(D3[oe]),ue.lookAt(Vf),ue.updateMatrixWorld(),Ze.makeTranslation(-so.x,-so.y,-so.z),Og.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Og,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(L);i=O.getFrustum(),v(C,g,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===fo&&x(O,g),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(R,N,E)};function x(A,C){const g=e.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(a.x,a.y,{format:Ts,type:ua})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,g,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,g,d,b,null)}function y(A,C,g,R){let N=null;const E=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)N=E;else if(N=g.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=N.uuid,V=C.uuid;let q=c[D];q===void 0&&(q={},c[D]=q);let U=q[V];U===void 0&&(U=N.clone(),q[V]=U,C.addEventListener("dispose",T)),N=U}if(N.visible=C.visible,N.wireframe=C.wireframe,R===fo?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:p[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,g.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=t.properties.get(N);D.light=g}return N}function v(A,C,g,R,N){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===fo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const V=e.update(A),q=A.material;if(Array.isArray(q)){const U=V.groups;for(let L=0,O=U.length;L<O;L++){const H=U[L],K=q[H.materialIndex];if(K&&K.visible){const ie=y(A,K,R,N);A.onBeforeShadow(t,A,C,g,V,ie,H),t.renderBufferDirect(g,null,V,ie,A,H),A.onAfterShadow(t,A,C,g,V,ie,H)}}}else if(q.visible){const U=y(A,q,R,N);A.onBeforeShadow(t,A,C,g,V,U,null),t.renderBufferDirect(g,null,V,U,A,null),A.onAfterShadow(t,A,C,g,V,U,null)}}const D=A.children;for(let V=0,q=D.length;V<q;V++)v(D[V],C,g,R,N)}function T(A){A.target.removeEventListener("dispose",T);for(const g in c){const R=c[g],N=A.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function N3(t,e){function n(){let P=!1;const de=new Dt;let ee=null;const me=new Dt(0,0,0,0);return{setMask:function(Se){ee!==Se&&!P&&(t.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){P=Se},setClear:function(Se,ae,Re,Ee,Nt){Nt===!0&&(Se*=Ee,ae*=Ee,Re*=Ee),de.set(Se,ae,Re,Ee),me.equals(de)===!1&&(t.clearColor(Se,ae,Re,Ee),me.copy(de))},reset:function(){P=!1,ee=null,me.set(-1,0,0,0)}}}function i(){let P=!1,de=!1,ee=null,me=null,Se=null;return{setReversed:function(ae){if(de!==ae){const Re=e.get("EXT_clip_control");ae?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=ae;const Ee=Se;Se=null,this.setClear(Ee)}},getReversed:function(){return de},setTest:function(ae){ae?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!P&&(t.depthMask(ae),ee=ae)},setFunc:function(ae){if(de&&(ae=cE[ae]),me!==ae){switch(ae){case kd:t.depthFunc(t.NEVER);break;case Xd:t.depthFunc(t.ALWAYS);break;case Wd:t.depthFunc(t.LESS);break;case Nr:t.depthFunc(t.LEQUAL);break;case qd:t.depthFunc(t.EQUAL);break;case Yd:t.depthFunc(t.GEQUAL);break;case Zd:t.depthFunc(t.GREATER);break;case Kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ae}},setLocked:function(ae){P=ae},setClear:function(ae){Se!==ae&&(Se=ae,de&&(ae=1-ae),t.clearDepth(ae))},reset:function(){P=!1,ee=null,me=null,Se=null,de=!1}}}function a(){let P=!1,de=null,ee=null,me=null,Se=null,ae=null,Re=null,Ee=null,Nt=null;return{setTest:function(xt){P||(xt?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(xt){de!==xt&&!P&&(t.stencilMask(xt),de=xt)},setFunc:function(xt,_i,vi){(ee!==xt||me!==_i||Se!==vi)&&(t.stencilFunc(xt,_i,vi),ee=xt,me=_i,Se=vi)},setOp:function(xt,_i,vi){(ae!==xt||Re!==_i||Ee!==vi)&&(t.stencilOp(xt,_i,vi),ae=xt,Re=_i,Ee=vi)},setLocked:function(xt){P=xt},setClear:function(xt){Nt!==xt&&(t.clearStencil(xt),Nt=xt)},reset:function(){P=!1,de=null,ee=null,me=null,Se=null,ae=null,Re=null,Ee=null,Nt=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},p={},u={},d=new WeakMap,S=[],b=null,m=!1,f=null,x=null,y=null,v=null,T=null,A=null,C=null,g=new je(0,0,0),R=0,N=!1,E=null,D=null,V=null,q=null,U=null;const L=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=H>=2);let ie=null,oe={};const ue=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),Ke=new Dt().fromArray(ue),Be=new Dt().fromArray(Ze);function j(P,de,ee,me){const Se=new Uint8Array(4),ae=t.createTexture();t.bindTexture(P,ae),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<ee;Re++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(de+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ae}const fe={};fe[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(t.DEPTH_TEST),r.setFunc(Nr),qe(!1),Mt(z0),re(t.CULL_FACE),be(ia);function re(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Pe(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Fe(P,de){return u[P]!==de?(t.bindFramebuffer(P,de),u[P]=de,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Le(P,de){let ee=S,me=!1;if(P){ee=d.get(de),ee===void 0&&(ee=[],d.set(de,ee));const Se=P.textures;if(ee.length!==Se.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Re=Se.length;ae<Re;ae++)ee[ae]=t.COLOR_ATTACHMENT0+ae;ee.length=Se.length,me=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,me=!0);me&&t.drawBuffers(ee)}function J(P){return b!==P?(t.useProgram(P),b=P,!0):!1}const $={[us]:t.FUNC_ADD,[Nb]:t.FUNC_SUBTRACT,[Lb]:t.FUNC_REVERSE_SUBTRACT};$[Ob]=t.MIN,$[Pb]=t.MAX;const I={[zb]:t.ZERO,[Ib]:t.ONE,[Bb]:t.SRC_COLOR,[Gd]:t.SRC_ALPHA,[Xb]:t.SRC_ALPHA_SATURATE,[Vb]:t.DST_COLOR,[Hb]:t.DST_ALPHA,[Fb]:t.ONE_MINUS_SRC_COLOR,[Vd]:t.ONE_MINUS_SRC_ALPHA,[kb]:t.ONE_MINUS_DST_COLOR,[Gb]:t.ONE_MINUS_DST_ALPHA,[Wb]:t.CONSTANT_COLOR,[qb]:t.ONE_MINUS_CONSTANT_COLOR,[Yb]:t.CONSTANT_ALPHA,[Zb]:t.ONE_MINUS_CONSTANT_ALPHA};function be(P,de,ee,me,Se,ae,Re,Ee,Nt,xt){if(P===ia){m===!0&&(Pe(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),P!==Ub){if(P!==f||xt!==N){if((x!==us||T!==us)&&(t.blendEquation(t.FUNC_ADD),x=us,T=us),xt)switch(P){case vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case I0:t.blendFunc(t.ONE,t.ONE);break;case B0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case F0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",P);break}else switch(P){case vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case I0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case B0:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F0:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",P);break}y=null,v=null,A=null,C=null,g.set(0,0,0),R=0,f=P,N=xt}return}Se=Se||de,ae=ae||ee,Re=Re||me,(de!==x||Se!==T)&&(t.blendEquationSeparate($[de],$[Se]),x=de,T=Se),(ee!==y||me!==v||ae!==A||Re!==C)&&(t.blendFuncSeparate(I[ee],I[me],I[ae],I[Re]),y=ee,v=me,A=ae,C=Re),(Ee.equals(g)===!1||Nt!==R)&&(t.blendColor(Ee.r,Ee.g,Ee.b,Nt),g.copy(Ee),R=Nt),f=P,N=!1}function Ne(P,de){P.side===Ki?Pe(t.CULL_FACE):re(t.CULL_FACE);let ee=P.side===Cn;de&&(ee=!ee),qe(ee),P.blending===vr&&P.transparent===!1?be(ia):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(P){E!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),E=P)}function Mt(P){P!==Cb?(re(t.CULL_FACE),P!==D&&(P===z0?t.cullFace(t.BACK):P===wb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),D=P}function Rt(P){P!==V&&(O&&t.lineWidth(P),V=P)}function Ut(P,de,ee){P?(re(t.POLYGON_OFFSET_FILL),(q!==de||U!==ee)&&(q=de,U=ee,r.getReversed()&&(de=-de),t.polygonOffset(de,ee))):Pe(t.POLYGON_OFFSET_FILL)}function mt(P){P?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Ct(P){P===void 0&&(P=t.TEXTURE0+L-1),ie!==P&&(t.activeTexture(P),ie=P)}function z(P,de,ee){ee===void 0&&(ie===null?ee=t.TEXTURE0+L-1:ee=ie);let me=oe[ee];me===void 0&&(me={type:void 0,texture:void 0},oe[ee]=me),(me.type!==P||me.texture!==de)&&(ie!==ee&&(t.activeTexture(ee),ie=ee),t.bindTexture(P,de||fe[P]),me.type=P,me.texture=de)}function gn(){const P=oe[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ae(){try{t.compressedTexImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function _(){try{t.texSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function F(){try{t.texSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function se(){try{t.texStorage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function le(){try{t.texStorage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function Q(){try{t.texImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function te(){try{t.texImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function he(P){return p[P]!==void 0?p[P]:t.getParameter(P)}function Ce(P,de){p[P]!==de&&(t.pixelStorei(P,de),p[P]=de)}function ge(P){Ke.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function pe(P){Be.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Be.copy(P))}function Ue(P,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let me=ee.get(P);me===void 0&&(me=t.getUniformBlockIndex(de,P.name),ee.set(P,me))}function Oe(P,de){const me=c.get(de).get(P);l.get(de)!==me&&(t.uniformBlockBinding(de,me,P.__bindingPointIndex),l.set(de,me))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},ie=null,oe={},u={},d=new WeakMap,S=[],b=null,m=!1,f=null,x=null,y=null,v=null,T=null,A=null,C=null,g=new je(0,0,0),R=0,N=!1,E=null,D=null,V=null,q=null,U=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:re,disable:Pe,bindFramebuffer:Fe,drawBuffers:Le,useProgram:J,setBlending:be,setMaterial:Ne,setFlipSided:qe,setCullFace:Mt,setLineWidth:Rt,setPolygonOffset:Ut,setScissorTest:mt,activeTexture:Ct,bindTexture:z,unbindTexture:gn,compressedTexImage2D:Ae,compressedTexImage3D:w,texImage2D:Q,texImage3D:te,pixelStorei:Ce,getParameter:he,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:se,texStorage3D:le,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:ge,viewport:pe,reset:Ve}}function L3(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,p=new Set;let u;const d=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,_){return S?new OffscreenCanvas(w,_):jc("canvas")}function m(w,_,F){let k=1;const Z=Ae(w);if((Z.width>F||Z.height>F)&&(k=F/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const se=Math.floor(k*Z.width),le=Math.floor(k*Z.height);u===void 0&&(u=b(se,le));const Q=_?b(se,le):u;return Q.width=se,Q.height=le,Q.getContext("2d").drawImage(w,0,0,se,le),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+le+")."),Q}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps}function x(w){t.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(w,_,F,k,Z,se=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le;k&&(le=e.get("EXT_texture_norm16"),le||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===t.RED&&(F===t.FLOAT&&(Q=t.R32F),F===t.HALF_FLOAT&&(Q=t.R16F),F===t.UNSIGNED_BYTE&&(Q=t.R8),F===t.UNSIGNED_SHORT&&le&&(Q=le.R16_EXT),F===t.SHORT&&le&&(Q=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.R8UI),F===t.UNSIGNED_SHORT&&(Q=t.R16UI),F===t.UNSIGNED_INT&&(Q=t.R32UI),F===t.BYTE&&(Q=t.R8I),F===t.SHORT&&(Q=t.R16I),F===t.INT&&(Q=t.R32I)),_===t.RG&&(F===t.FLOAT&&(Q=t.RG32F),F===t.HALF_FLOAT&&(Q=t.RG16F),F===t.UNSIGNED_BYTE&&(Q=t.RG8),F===t.UNSIGNED_SHORT&&le&&(Q=le.RG16_EXT),F===t.SHORT&&le&&(Q=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RG8UI),F===t.UNSIGNED_SHORT&&(Q=t.RG16UI),F===t.UNSIGNED_INT&&(Q=t.RG32UI),F===t.BYTE&&(Q=t.RG8I),F===t.SHORT&&(Q=t.RG16I),F===t.INT&&(Q=t.RG32I)),_===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),F===t.UNSIGNED_INT&&(Q=t.RGB32UI),F===t.BYTE&&(Q=t.RGB8I),F===t.SHORT&&(Q=t.RGB16I),F===t.INT&&(Q=t.RGB32I)),_===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),F===t.UNSIGNED_INT&&(Q=t.RGBA32UI),F===t.BYTE&&(Q=t.RGBA8I),F===t.SHORT&&(Q=t.RGBA16I),F===t.INT&&(Q=t.RGBA32I)),_===t.RGB&&(F===t.UNSIGNED_SHORT&&le&&(Q=le.RGB16_EXT),F===t.SHORT&&le&&(Q=le.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),_===t.RGBA){const te=se?Jc:et.getTransfer(Z);F===t.FLOAT&&(Q=t.RGBA32F),F===t.HALF_FLOAT&&(Q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Q=te===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&le&&(Q=le.RGBA16_EXT),F===t.SHORT&&le&&(Q=le.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(w,_){let F;return w?_===null||_===Ni||_===Wo?F=t.DEPTH24_STENCIL8:_===Ai?F=t.DEPTH32F_STENCIL8:_===Xo&&(F=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===Wo?F=t.DEPTH_COMPONENT24:_===Ai?F=t.DEPTH_COMPONENT32F:_===Xo&&(F=t.DEPTH_COMPONENT16),F}function A(w,_){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),R(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function g(w){const _=w.target;_.removeEventListener("dispose",g),E(_)}function R(w){const _=i.get(w);if(_.__webglInit===void 0)return;const F=w.source,k=d.get(F);if(k){const Z=k[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(w),Object.keys(k).length===0&&d.delete(F)}i.remove(w)}function N(w){const _=i.get(w);t.deleteTexture(_.__webglTexture);const F=w.source,k=d.get(F);delete k[_.__cacheKey],r.memory.textures--}function E(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Z=0;Z<_.__webglFramebuffer[k].length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[k][Z]);else t.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)t.deleteFramebuffer(_.__webglFramebuffer[k]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=w.textures;for(let k=0,Z=F.length;k<Z;k++){const se=i.get(F[k]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),r.memory.textures--),i.remove(F[k])}i.remove(w)}let D=0;function V(){D=0}function q(){return D}function U(w){D=w}function L(){const w=D;return w>=a.maxTextures&&Ie("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),D+=1,w}function O(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function H(w,_){const F=i.get(w);if(w.isVideoTexture&&z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const k=w.image;if(k===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+_)}function K(w,_){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Pe(F,w,_);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+_)}function ie(w,_){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Pe(F,w,_);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+_)}function oe(w,_){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Fe(F,w,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+_)}const ue={[Qd]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[Jd]:t.MIRRORED_REPEAT},Ze={[cn]:t.NEAREST,[Jb]:t.NEAREST_MIPMAP_NEAREST,[Al]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[ff]:t.LINEAR_MIPMAP_NEAREST,[ds]:t.LINEAR_MIPMAP_LINEAR},Ke={[eE]:t.NEVER,[sE]:t.ALWAYS,[tE]:t.LESS,[Hp]:t.LEQUAL,[nE]:t.EQUAL,[Gp]:t.GEQUAL,[iE]:t.GREATER,[aE]:t.NOTEQUAL};function Be(w,_){if(_.type===Ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===ff||_.magFilter===Al||_.magFilter===ds||_.minFilter===mn||_.minFilter===ff||_.minFilter===Al||_.minFilter===ds)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ue[_.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ue[_.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ue[_.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ze[_.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ze[_.minFilter]),_.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Al&&_.minFilter!==ds||_.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function j(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const k=_.source;let Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));const se=O(_);if(se!==w.__cacheKey){Z[se]===void 0&&(Z[se]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[se].usedTimes++;const le=Z[w.__cacheKey];le!==void 0&&(Z[w.__cacheKey].usedTimes--,le.usedTimes===0&&N(_)),w.__cacheKey=se,w.__webglTexture=Z[se].texture}return F}function fe(w,_,F){return Math.floor(Math.floor(w/F)/_)}function re(w,_,F,k){const se=w.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,F,k,_.data);else{se.sort((Ce,ge)=>Ce.start-ge.start);let le=0;for(let Ce=1;Ce<se.length;Ce++){const ge=se[le],pe=se[Ce],Ue=ge.start+ge.count,Oe=fe(pe.start,_.width,4),Ve=fe(ge.start,_.width,4);pe.start<=Ue+1&&Oe===Ve&&fe(pe.start+pe.count-1,_.width,4)===Oe?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++le,se[le]=pe)}se.length=le+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ce=0,ge=se.length;Ce<ge;Ce++){const pe=se[Ce],Ue=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),Ve=Ue%_.width,P=Math.floor(Ue/_.width),de=Oe,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Ve,P,de,ee,F,k,_.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Pe(w,_,F){let k=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=t.TEXTURE_3D);const Z=j(w,_),se=_.source;n.bindTexture(k,w.__webglTexture,t.TEXTURE0+F);const le=i.get(se);if(se.version!==le.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=et.getPrimaries(et.workingColorSpace),me=_.colorSpace===wa?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===wa||ee===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,a.maxTextureSize);te=gn(_,te);const he=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type);let ge=v(_.internalFormat,he,Ce,_.normalized,_.colorSpace,_.isVideoTexture);Be(k,_);let pe;const Ue=_.mipmaps,Oe=_.isVideoTexture!==!0,Ve=le.__version===void 0||Z===!0,P=se.dataReady,de=A(_,te);if(_.isDepthTexture)ge=T(_.format===hs,_.type),Ve&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,ge,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ge,te.width,te.height,0,he,Ce,null));else if(_.isDataTexture)if(Ue.length>0){Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,ge,Ue[0].width,Ue[0].height);for(let ee=0,me=Ue.length;ee<me;ee++)pe=Ue[ee],Oe?P&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,he,Ce,pe.data):n.texImage2D(t.TEXTURE_2D,ee,ge,pe.width,pe.height,0,he,Ce,pe.data);_.generateMipmaps=!1}else Oe?(Ve&&n.texStorage2D(t.TEXTURE_2D,de,ge,te.width,te.height),P&&re(_,te,he,Ce)):n.texImage2D(t.TEXTURE_2D,0,ge,te.width,te.height,0,he,Ce,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,Ue[0].width,Ue[0].height,te.depth);for(let ee=0,me=Ue.length;ee<me;ee++)if(pe=Ue[ee],_.format!==mi)if(he!==null)if(Oe){if(P)if(_.layerUpdates.size>0){const Se=fg(pe.width,pe.height,_.format,_.type);for(const ae of _.layerUpdates){const Re=pe.data.subarray(ae*Se/pe.data.BYTES_PER_ELEMENT,(ae+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ae,pe.width,pe.height,1,he,Re)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,te.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,ge,pe.width,pe.height,te.depth,0,pe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,te.depth,he,Ce,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,ge,pe.width,pe.height,te.depth,0,he,Ce,pe.data)}else{Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,de,ge,Ue[0].width,Ue[0].height);for(let ee=0,me=Ue.length;ee<me;ee++)pe=Ue[ee],_.format!==mi?he!==null?Oe?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,ge,pe.width,pe.height,0,pe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?P&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,he,Ce,pe.data):n.texImage2D(t.TEXTURE_2D,ee,ge,pe.width,pe.height,0,he,Ce,pe.data)}else if(_.isDataArrayTexture)if(Oe){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,te.width,te.height,te.depth),P)if(_.layerUpdates.size>0){const ee=fg(te.width,te.height,_.format,_.type);for(const me of _.layerUpdates){const Se=te.data.subarray(me*ee/te.data.BYTES_PER_ELEMENT,(me+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,te.width,te.height,1,he,Ce,Se)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Ce,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,he,Ce,te.data);else if(_.isData3DTexture)Oe?(Ve&&n.texStorage3D(t.TEXTURE_3D,de,ge,te.width,te.height,te.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,he,Ce,te.data);else if(_.isFramebufferTexture){if(Ve)if(Oe)n.texStorage2D(t.TEXTURE_2D,de,ge,te.width,te.height);else{let ee=te.width,me=te.height;for(let Se=0;Se<de;Se++)n.texImage2D(t.TEXTURE_2D,Se,ge,ee,me,0,he,Ce,null),ee>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(_),ee.onpaint=me=>{const Se=me.changedElements;for(const ae of p)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const Se=t.RGBA,ae=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,ae,Re,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Oe&&Ve){const ee=Ae(Ue[0]);n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height)}for(let ee=0,me=Ue.length;ee<me;ee++)pe=Ue[ee],Oe?P&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he,Ce,pe):n.texImage2D(t.TEXTURE_2D,ee,ge,he,Ce,pe);_.generateMipmaps=!1}else if(Oe){if(Ve){const ee=Ae(te);n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Ce,te)}else n.texImage2D(t.TEXTURE_2D,0,ge,he,Ce,te);f(_)&&x(k),le.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Fe(w,_,F){if(_.image.length!==6)return;const k=j(w,_),Z=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+F);const se=i.get(Z);if(Z.version!==se.__version||k===!0){n.activeTexture(t.TEXTURE0+F);const le=et.getPrimaries(et.workingColorSpace),Q=_.colorSpace===wa?null:et.getPrimaries(_.colorSpace),te=_.colorSpace===wa||le===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Ce=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!he&&!Ce?ge[ae]=m(_.image[ae],!0,a.maxCubemapSize):ge[ae]=Ce?_.image[ae].image:_.image[ae],ge[ae]=gn(_,ge[ae]);const pe=ge[0],Ue=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),Ve=v(_.internalFormat,Ue,Oe,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,de=se.__version===void 0||k===!0,ee=Z.dataReady;let me=A(_,pe);Be(t.TEXTURE_CUBE_MAP,_);let Se;if(he){P&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,pe.width,pe.height);for(let ae=0;ae<6;ae++){Se=ge[ae].mipmaps;for(let Re=0;Re<Se.length;Re++){const Ee=Se[Re];_.format!==mi?Ue!==null?P?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,0,0,Ee.width,Ee.height,Ue,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,Ve,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,0,0,Ee.width,Ee.height,Ue,Oe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re,Ve,Ee.width,Ee.height,0,Ue,Oe,Ee.data)}}}else{if(Se=_.mipmaps,P&&de){Se.length>0&&me++;const ae=Ae(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ce){P?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Ue,Oe,ge[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,ge[ae].width,ge[ae].height,0,Ue,Oe,ge[ae].data);for(let Re=0;Re<Se.length;Re++){const Nt=Se[Re].image[ae].image;P?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,0,0,Nt.width,Nt.height,Ue,Oe,Nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,Ve,Nt.width,Nt.height,0,Ue,Oe,Nt.data)}}else{P?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Oe,ge[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,Ue,Oe,ge[ae]);for(let Re=0;Re<Se.length;Re++){const Ee=Se[Re];P?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,0,0,Ue,Oe,Ee.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re+1,Ve,Ue,Oe,Ee.image[ae])}}}f(_)&&x(t.TEXTURE_CUBE_MAP),se.__version=Z.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Le(w,_,F,k,Z,se){const le=s.convert(F.format,F.colorSpace),Q=s.convert(F.type),te=v(F.internalFormat,le,Q,F.normalized,F.colorSpace),he=i.get(_),Ce=i.get(F);if(Ce.__renderTarget=_,!he.__hasExternalTextures){const ge=Math.max(1,_.width>>se),pe=Math.max(1,_.height>>se);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,se,te,ge,pe,_.depth,0,le,Q,null):n.texImage2D(Z,se,te,ge,pe,0,le,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,Z,Ce.__webglTexture,0,mt(_)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,Z,Ce.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(w,_,F){if(t.bindRenderbuffer(t.RENDERBUFFER,w),_.depthBuffer){const k=_.depthTexture,Z=k&&k.isDepthTexture?k.type:null,se=T(_.stencilBuffer,Z),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),se,_.width,_.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,w)}else{const k=_.textures;for(let Z=0;Z<k.length;Z++){const se=k[Z],le=s.convert(se.format,se.colorSpace),Q=s.convert(se.type),te=v(se.internalFormat,le,Q,se.normalized,se.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),te,_.width,_.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $(w,_,F){const k=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(t.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Ce=s.convert(_.depthTexture.type);let ge;_.depthTexture.format===fa?ge=t.DEPTH_COMPONENT24:_.depthTexture.format===hs&&(ge=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,_.width,_.height,0,he,Ce,null)}}else H(_.depthTexture,0);const se=Z.__webglTexture,le=mt(_),Q=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,te=_.depthTexture.format===hs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===fa)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,se,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,se,0);else if(_.depthTexture.format===hs)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,se,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(w){const _=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)$(_.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?$(_.__webglFramebuffer[0],w,0):$(_.__webglFramebuffer,w,0)}else if(F){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=t.createRenderbuffer(),J(_.__webglDepthbuffer[k],w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,se)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),J(_.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(w,_,F){const k=i.get(w);_!==void 0&&Le(k.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&I(w)}function Ne(w){const _=w.texture,F=i.get(w),k=i.get(_);w.addEventListener("dispose",g);const Z=w.textures,se=w.isWebGLCubeRenderTarget===!0,le=Z.length>1;if(le||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=_.version,r.memory.textures++),se){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let te=0;te<_.mipmaps.length;te++)F.__webglFramebuffer[Q][te]=t.createFramebuffer()}else F.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)F.__webglFramebuffer[Q]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(le)for(let Q=0,te=Z.length;Q<te;Q++){const he=i.get(Z[Q]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),r.memory.textures++)}if(w.samples>0&&Ct(w)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const te=Z[Q];F.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const he=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),ge=v(te.internalFormat,he,Ce,te.normalized,te.colorSpace,w.isXRRenderTarget===!0),pe=mt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ge,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),J(F.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Be(t.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(F.__webglFramebuffer[Q][te],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else Le(F.__webglFramebuffer[Q],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Q=0,te=Z.length;Q<te;Q++){const he=Z[Q],Ce=i.get(he);let ge=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Ce.__webglTexture),Be(ge,he),Le(F.__webglFramebuffer,w,he,t.COLOR_ATTACHMENT0+Q,ge,0),f(he)&&x(ge)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,k.__webglTexture),Be(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(F.__webglFramebuffer[te],w,_,t.COLOR_ATTACHMENT0,Q,te);else Le(F.__webglFramebuffer,w,_,t.COLOR_ATTACHMENT0,Q,0);f(_)&&x(Q),n.unbindTexture()}w.depthBuffer&&I(w)}function qe(w){const _=w.textures;for(let F=0,k=_.length;F<k;F++){const Z=_[F];if(f(Z)){const se=y(w),le=i.get(Z).__webglTexture;n.bindTexture(se,le),x(se),n.unbindTexture()}}}const Mt=[],Rt=[];function Ut(w){if(w.samples>0){if(Ct(w)===!1){const _=w.textures,F=w.width,k=w.height;let Z=t.COLOR_BUFFER_BIT;const se=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(w),Q=_.length>1;if(Q)for(let he=0;he<_.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const te=w.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let he=0;he<_.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const Ce=i.get(_[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,F,k,0,0,F,k,Z,t.NEAREST),l===!0&&(Mt.length=0,Rt.length=0,Mt.push(t.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Mt.push(se),Rt.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<_.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const Ce=i.get(_[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function mt(w){return Math.min(a.maxSamples,w.samples)}function Ct(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(w){const _=r.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function gn(w,_){const F=w.colorSpace,k=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Qc&&F!==wa&&(et.getTransfer(F)===ct?(k!==mi||Z!==Bn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",F)),_}function Ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function O3(t,e){function n(i,a=wa){let s;const r=et.getTransfer(a);if(i===Bn)return t.UNSIGNED_BYTE;if(i===Pp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kx)return t.BYTE;if(i===Qx)return t.SHORT;if(i===Xo)return t.UNSIGNED_SHORT;if(i===Op)return t.INT;if(i===Ni)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===eS)return t.RGB;if(i===mi)return t.RGBA;if(i===fa)return t.DEPTH_COMPONENT;if(i===hs)return t.DEPTH_STENCIL;if(i===tS)return t.RED;if(i===Ip)return t.RED_INTEGER;if(i===Ts)return t.RG;if(i===Bp)return t.RG_INTEGER;if(i===Fp)return t.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(r===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===$d||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ih||i===ah||i===sh||i===rh||i===Zc||i===oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nh||i===ih)return r===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ah)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===sh)return s.COMPRESSED_R11_EAC;if(i===rh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return s.COMPRESSED_RG11_EAC;if(i===oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ch)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mh||i===bh||i===Eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mh)return r===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===Ah||i===Kc||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Th)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const P3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new uS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:P3,fragmentShader:z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new Su(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B3 extends Us{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,S=null;const b=typeof XRWebGLBinding<"u",m=new I3,f={},x=n.getContextAttributes();let y=null,v=null;const T=[],A=[],C=new it;let g=null;const R=new ei;R.viewport=new Dt;const N=new ei;N.viewport=new Dt;const E=[R,N],D=new ZE;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=T[j];return fe===void 0&&(fe=new xf,T[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=T[j];return fe===void 0&&(fe=new xf,T[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=T[j];return fe===void 0&&(fe=new xf,T[j]=fe),fe.getHandSpace()};function U(j){const fe=A.indexOf(j.inputSource);if(fe===-1)return;const re=T[fe];re!==void 0&&(re.update(j.inputSource,j.frame,c||r),re.dispatchEvent({type:j.type,data:j.inputSource}))}function L(){a.removeEventListener("select",U),a.removeEventListener("selectstart",U),a.removeEventListener("selectend",U),a.removeEventListener("squeeze",U),a.removeEventListener("squeezestart",U),a.removeEventListener("squeezeend",U),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",O);for(let j=0;j<T.length;j++){const fe=A[j];fe!==null&&(A[j]=null,T[j].disconnect(fe))}V=null,q=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(y),d=null,u=null,p=null,a=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",U),a.addEventListener("selectstart",U),a.addEventListener("selectend",U),a.addEventListener("squeeze",U),a.addEventListener("squeezestart",U),a.addEventListener("squeezeend",U),a.addEventListener("end",L),a.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Pe=null,Fe=null;x.depth&&(Fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=x.stencil?hs:fa,Pe=x.stencil?Wo:Ni);const Le={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Le),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Di(u.textureWidth,u.textureHeight,{format:mi,type:Bn,depthTexture:new Or(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,re),a.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Di(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Be.setContext(a),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let fe=0;fe<j.removed.length;fe++){const re=j.removed[fe],Pe=A.indexOf(re);Pe>=0&&(A[Pe]=null,T[Pe].disconnect(re))}for(let fe=0;fe<j.added.length;fe++){const re=j.added[fe];let Pe=A.indexOf(re);if(Pe===-1){for(let Le=0;Le<T.length;Le++)if(Le>=A.length){A.push(re),Pe=Le;break}else if(A[Le]===null){A[Le]=re,Pe=Le;break}if(Pe===-1)break}const Fe=T[Pe];Fe&&Fe.connect(re)}}const H=new G,K=new G;function ie(j,fe,re){H.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const Pe=H.distanceTo(K),Fe=fe.projectionMatrix.elements,Le=re.projectionMatrix.elements,J=Fe[14]/(Fe[10]-1),$=Fe[14]/(Fe[10]+1),I=(Fe[9]+1)/Fe[5],be=(Fe[9]-1)/Fe[5],Ne=(Fe[8]-1)/Fe[0],qe=(Le[8]+1)/Le[0],Mt=J*Ne,Rt=J*qe,Ut=Pe/(-Ne+qe),mt=Ut*-Ne;if(fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(mt),j.translateZ(Ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ct=J+Ut,z=$+Ut,gn=Mt-mt,Ae=Rt+(Pe-mt),w=I*$/z*Ct,_=be*$/z*Ct;j.projectionMatrix.makePerspective(gn,Ae,w,_,Ct,z),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oe(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let fe=j.near,re=j.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=N.near=R.near=fe,D.far=N.far=R.far=re,(V!==D.near||q!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),V=D.near,q=D.far),D.layers.mask=j.layers.mask|6,R.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const Pe=j.parent,Fe=D.cameras;oe(D,Pe);for(let Le=0;Le<Fe.length;Le++)oe(Fe[Le],Pe);Fe.length===2?ie(D,R,N):D.projectionMatrix.copy(R.projectionMatrix),ue(j,D,Pe)};function ue(j,fe,re){re===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(j){return f[j]};let Ze=null;function Ke(j,fe){if(h=fe.getViewerPose(c||r),S=fe,h!==null){const re=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Pe=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Pe=!0);for(let $=0;$<re.length;$++){const I=re[$];let be=null;if(d!==null)be=d.getViewport(I);else{const qe=p.getViewSubImage(u,I);be=qe.viewport,$===0&&(e.setRenderTargetTextures(v,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(v))}let Ne=E[$];Ne===void 0&&(Ne=new ei,Ne.layers.enable($),Ne.viewport=new Dt,E[$]=Ne),Ne.matrix.fromArray(I.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(I.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(be.x,be.y,be.width,be.height),$===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pe===!0&&D.cameras.push(Ne)}const Fe=a.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){p=i.getBinding();const $=p.getDepthInformation(re[0]);$&&$.isValid&&$.texture&&m.init($,a.renderState)}if(Fe&&Fe.includes("camera-access")&&b){e.state.unbindTexture(),p=i.getBinding();for(let $=0;$<re.length;$++){const I=re[$].camera;if(I){let be=f[I];be||(be=new uS,f[I]=be);const Ne=p.getCameraImage(I);be.sourceTexture=Ne}}}}for(let re=0;re<T.length;re++){const Pe=A[re],Fe=T[re];Pe!==null&&Fe!==void 0&&Fe.update(Pe,fe,c||r)}Ze&&Ze(j,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const Be=new pS;Be.setAnimationLoop(Ke),this.setAnimationLoop=function(j){Ze=j},this.dispose=function(){}}}const F3=new zt,yS=new He;yS.set(-1,0,0,0,1,0,0,0,1);function H3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,fS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),S(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),b(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(F3.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function G3(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const A=T.program;i.uniformBlockBinding(v,A)}function c(v,T){let A=a[v.id];A===void 0&&(m(v),A=h(v),a[v.id]=A,v.addEventListener("dispose",x));const C=T.program;i.updateUBOMapping(v,C);const g=e.render.frame;s[v.id]!==g&&(u(v),s[v.id]=g)}function h(v){const T=p();v.__bindingPointIndex=T;const A=t.createBuffer(),C=v.__size,g=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=a[v.id],A=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,R=A.length;g<R;g++){const N=A[g];if(Array.isArray(N))for(let E=0,D=N.length;E<D;E++)d(N[E],g,E,C);else d(N,g,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(v,T,A,C){if(b(v,T,A,C)===!0){const g=v.__offset,R=v.value;if(Array.isArray(R)){let N=0;for(let E=0;E<R.length;E++){const D=R[E],V=f(D);S(D,v.__data,N),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(R,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,v.__data)}}function S(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function b(v,T,A,C){const g=v.value,R=T+"_"+A;if(C[R]===void 0)return typeof g=="number"||typeof g=="boolean"?C[R]=g:ArrayBuffer.isView(g)?C[R]=g.slice():C[R]=g.clone(),!0;{const N=C[R];if(typeof g=="number"||typeof g=="boolean"){if(N!==g)return C[R]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(N.equals(g)===!1)return N.copy(g),!0}}return!1}function m(v){const T=v.uniforms;let A=0;const C=16;for(let R=0,N=T.length;R<N;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let D=0,V=E.length;D<V;D++){const q=E[D],U=Array.isArray(q.value)?q.value:[q.value];for(let L=0,O=U.length;L<O;L++){const H=U[L],K=f(H),ie=A%C,oe=ie%K.boundary,ue=ie+oe;A+=oe,ue!==0&&C-ue<K.storage&&(A+=C-ue),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=K.storage}}}const g=A%C;return g>0&&(A+=C-g),v.__size=A,v.__cache={},this}function f(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),T}function x(v){const T=v.target;T.removeEventListener("dispose",x);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function y(){for(const v in a)t.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:y}}const V3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function k3(){return yi===null&&(yi=new UE(V3,16,16,Ts,ua),yi.name="DFG_LUT",yi.minFilter=mn,yi.magFilter=mn,yi.wrapS=$i,yi.wrapT=$i,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class X3{constructor(e={}){const{canvas:n=oE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Bn}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=r;const b=d,m=new Set([Fp,Bp,Ip]),f=new Set([Bn,Ni,Xo,Wo,Pp,zp]),x=new Uint32Array(4),y=new Int32Array(4),v=new G;let T=null,A=null;const C=[],g=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let E=!1,D=null,V=null,q=null,U=null;this._outputColorSpace=Qn;let L=0,O=0,H=null,K=-1,ie=null;const oe=new Dt,ue=new Dt;let Ze=null;const Ke=new je(0);let Be=0,j=n.width,fe=n.height,re=1,Pe=null,Fe=null;const Le=new Dt(0,0,j,fe),J=new Dt(0,0,j,fe);let $=!1;const I=new Xp;let be=!1,Ne=!1;const qe=new zt,Mt=new G,Rt=new Dt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ct(){return H===null?re:1}let z=i;function gn(M,B){return n.getContext(M,B)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lp}`),n.addEventListener("webglcontextlost",Nt,!1),n.addEventListener("webglcontextrestored",xt,!1),n.addEventListener("webglcontextcreationerror",_i,!1),z===null){const B="webgl2";if(z=gn(B,M),z===null)throw gn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw rt("WebGLRenderer: "+M.message),M}let Ae,w,_,F,k,Z,se,le,Q,te,he,Ce,ge,pe,Ue,Oe,Ve,P,de,ee,me,Se,ae;function Re(){Ae=new kA(z),Ae.init(),me=new O3(z,Ae),w=new PA(z,Ae,e,me),_=new N3(z,Ae),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=z.createFramebuffer(),q=z.createFramebuffer(),U=z.createFramebuffer(),F=new qA(z),k=new v3,Z=new L3(z,Ae,_,k,w,me,F),se=new VA(N),le=new QE(z),Se=new LA(z,le),Q=new XA(z,le,F,Se),te=new ZA(z,Q,le,Se,F),P=new YA(z,w,Z),Ue=new zA(k),he=new _3(N,se,Ae,w,Se,Ue),Ce=new H3(N,k),ge=new S3,pe=new A3(Ae),Ve=new NA(N,se,_,te,S,l),Oe=new U3(N,te,w),ae=new G3(z,F,w,_),de=new OA(z,Ae,F),ee=new WA(z,Ae,F),F.programs=he.programs,N.capabilities=w,N.extensions=Ae,N.properties=k,N.renderLists=ge,N.shadowMap=Oe,N.state=_,N.info=F}Re(),b!==Bn&&(R=new QA(b,n.width,n.height,o,a,s));const Ee=new B3(N,z);this.xr=Ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(j,fe,!1))},this.getSize=function(M){return M.set(j,fe)},this.setSize=function(M,B,Y=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,fe=B,n.width=Math.floor(M*re),n.height=Math.floor(B*re),Y===!0&&(n.style.width=M+"px",n.style.height=B+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(j*re,fe*re).floor()},this.setDrawingBufferSize=function(M,B,Y){j=M,fe=B,re=Y,n.width=Math.floor(M*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(b===Bn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(oe)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,B,Y,X){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,B,Y,X),_.viewport(oe.copy(Le).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,B,Y,X){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,B,Y,X),_.scissor(ue.copy(J).multiplyScalar(re).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(M){_.setScissorTest($=M)},this.setOpaqueSort=function(M){Pe=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Y=!0){let X=0;if(M){let W=!1;if(H!==null){const xe=H.texture.format;W=m.has(xe)}if(W){const xe=H.texture.type,Me=f.has(xe),ve=Ve.getClearColor(),Te=Ve.getClearAlpha(),we=ve.r,ke=ve.g,Ye=ve.b;Me?(x[0]=we,x[1]=ke,x[2]=Ye,x[3]=Te,z.clearBufferuiv(z.COLOR,0,x)):(y[0]=we,y[1]=ke,y[2]=Ye,y[3]=Te,z.clearBufferiv(z.COLOR,0,y))}else X|=z.COLOR_BUFFER_BIT}B&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",xt,!1),n.removeEventListener("webglcontextcreationerror",_i,!1),Ve.dispose(),ge.dispose(),pe.dispose(),k.dispose(),se.dispose(),te.dispose(),Se.dispose(),ae.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",em),Ee.removeEventListener("sessionend",tm),$a.stop()};function Nt(M){M.preventDefault(),X0("WebGLRenderer: Context Lost."),E=!0}function xt(){X0("WebGLRenderer: Context Restored."),E=!1;const M=F.autoReset,B=Oe.enabled,Y=Oe.autoUpdate,X=Oe.needsUpdate,W=Oe.type;Re(),F.autoReset=M,Oe.enabled=B,Oe.autoUpdate=Y,Oe.needsUpdate=X,Oe.type=W}function _i(M){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vi(M){const B=M.target;B.removeEventListener("dispose",vi),ES(B)}function ES(M){TS(M),k.remove(M)}function TS(M){const B=k.get(M).programs;B!==void 0&&(B.forEach(function(Y){he.releaseProgram(Y)}),M.isShaderMaterial&&he.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Y,X,W,xe){B===null&&(B=Ut);const Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=CS(M,B,Y,X,W);_.setMaterial(X,Me);let Te=Y.index,we=1;if(X.wireframe===!0){if(Te=Q.getWireframeAttribute(Y),Te===void 0)return;we=2}const ke=Y.drawRange,Ye=Y.attributes.position;let De=ke.start*we,dt=(ke.start+ke.count)*we;xe!==null&&(De=Math.max(De,xe.start*we),dt=Math.min(dt,(xe.start+xe.count)*we)),Te!==null?(De=Math.max(De,0),dt=Math.min(dt,Te.count)):Ye!=null&&(De=Math.max(De,0),dt=Math.min(dt,Ye.count));const It=dt-De;if(It<0||It===1/0)return;Se.setup(W,X,ve,Y,Te);let Lt,gt=de;if(Te!==null&&(Lt=le.get(Te),gt=ee,gt.setIndex(Lt)),W.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*Ct()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(W.isLine){let dn=X.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Ct()),W.isLineSegments?gt.setMode(z.LINES):W.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else W.isPoints?gt.setMode(z.POINTS):W.isSprite&&gt.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const dn=W._multiDrawStarts,ye=W._multiDrawCounts,Un=W._multiDrawCount,at=Te?le.get(Te).bytesPerElement:1,qn=k.get(X).currentProgram.getUniforms();for(let xi=0;xi<Un;xi++)qn.setValue(z,"_gl_DrawID",xi),gt.render(dn[xi]/at,ye[xi])}else if(W.isInstancedMesh)gt.renderInstances(De,It,W.count);else if(Y.isInstancedBufferGeometry){const dn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ye=Math.min(Y.instanceCount,dn);gt.renderInstances(De,It,ye)}else gt.render(De,It)};function $p(M,B,Y){M.transparent===!0&&M.side===Ki&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,cl(M,B,Y),M.side=Ka,M.needsUpdate=!0,cl(M,B,Y),M.side=Ki):cl(M,B,Y)}this.compile=function(M,B,Y=null){Y===null&&(Y=M),A=pe.get(Y),A.init(B),g.push(A),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),M!==Y&&M.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const X=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ve=xe[Me];$p(ve,Y,W),X.add(ve)}else $p(xe,Y,W),X.add(xe)}),A=g.pop(),X},this.compileAsync=function(M,B,Y=null){const X=this.compile(M,B,Y);return new Promise(W=>{function xe(){if(X.forEach(function(Me){k.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){W(M);return}setTimeout(xe,10)}Ae.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let bu=null;function AS(M){bu&&bu(M)}function em(){$a.stop()}function tm(){$a.start()}const $a=new pS;$a.setAnimationLoop(AS),typeof self<"u"&&$a.setContext(self),this.setAnimationLoop=function(M){bu=M,Ee.setAnimationLoop(M),M===null?$a.stop():$a.start()},Ee.addEventListener("sessionstart",em),Ee.addEventListener("sessionend",tm),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;D!==null&&D.renderStart(M,B);const Y=Ee.enabled===!0&&Ee.isPresenting===!0,X=R!==null&&(H===null||Y)&&R.begin(N,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,B,H),A=pe.get(M,g.length),A.init(B),A.state.textureUnits=Z.getTextureUnits(),g.push(A),qe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),I.setFromProjectionMatrix(qe,Ri,B.reversedDepth),Ne=this.localClippingEnabled,be=Ue.init(this.clippingPlanes,Ne),T=ge.get(M,C.length),T.init(),C.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=N.xr.getDepthSensingMesh();Me!==null&&Eu(Me,B,-1/0,N.sortObjects)}Eu(M,B,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(Pe,Fe,B.reversedDepth),mt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,mt&&Ve.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Ue.beginShadows();const W=A.state.shadowsArray;if(Oe.render(W,M,B),be===!0&&Ue.endShadows(),(X&&R.hasRenderPass())===!1){const Me=T.opaque,ve=T.transmissive;if(A.setupLights(),B.isArrayCamera){const Te=B.cameras;if(ve.length>0)for(let we=0,ke=Te.length;we<ke;we++){const Ye=Te[we];im(Me,ve,M,Ye)}mt&&Ve.render(M);for(let we=0,ke=Te.length;we<ke;we++){const Ye=Te[we];nm(T,M,Ye,Ye.viewport)}}else ve.length>0&&im(Me,ve,M,B),mt&&Ve.render(M),nm(T,M,B)}H!==null&&O===0&&(Z.updateMultisampleRenderTarget(H),Z.updateRenderTargetMipmap(H)),X&&R.end(N),M.isScene===!0&&M.onAfterRender(N,M,B),Se.resetDefaultState(),K=-1,ie=null,g.pop(),g.length>0?(A=g[g.length-1],Z.setTextureUnits(A.state.textureUnits),be===!0&&Ue.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,D!==null&&D.renderEnd()};function Eu(M,B,Y,X){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||I.intersectsSprite(M)){X&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qe);const Me=te.update(M),ve=M.material;ve.visible&&T.push(M,Me,ve,Y,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||I.intersectsObject(M))){const Me=te.update(M),ve=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Rt.copy(Me.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(qe)),Array.isArray(ve)){const Te=Me.groups;for(let we=0,ke=Te.length;we<ke;we++){const Ye=Te[we],De=ve[Ye.materialIndex];De&&De.visible&&T.push(M,Me,De,Y,Rt.z,Ye)}}else ve.visible&&T.push(M,Me,ve,Y,Rt.z,null)}}const xe=M.children;for(let Me=0,ve=xe.length;Me<ve;Me++)Eu(xe[Me],B,Y,X)}function nm(M,B,Y,X){const{opaque:W,transmissive:xe,transparent:Me}=M;A.setupLightsView(Y),be===!0&&Ue.setGlobalState(N.clippingPlanes,Y),X&&_.viewport(oe.copy(X)),W.length>0&&ll(W,B,Y),xe.length>0&&ll(xe,B,Y),Me.length>0&&ll(Me,B,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function im(M,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const De=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new Di(1,1,{generateMipmaps:!0,type:De?ua:Bn,minFilter:ds,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const xe=A.state.transmissionRenderTarget[X.id],Me=X.viewport||oe;xe.setSize(Me.z*N.transmissionResolutionScale,Me.w*N.transmissionResolutionScale);const ve=N.getRenderTarget(),Te=N.getActiveCubeFace(),we=N.getActiveMipmapLevel();N.setRenderTarget(xe),N.getClearColor(Ke),Be=N.getClearAlpha(),Be<1&&N.setClearColor(16777215,.5),N.clear(),mt&&Ve.render(Y);const ke=N.toneMapping;N.toneMapping=wi;const Ye=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),be===!0&&Ue.setGlobalState(N.clippingPlanes,X),ll(M,Y,X),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,It=B.length;dt<It;dt++){const Lt=B[dt],{object:gt,geometry:dn,material:ye,group:Un}=Lt;if(ye.side===Ki&&gt.layers.test(X.layers)){const at=ye.side;ye.side=Cn,ye.needsUpdate=!0,am(gt,Y,X,dn,ye,Un),ye.side=at,ye.needsUpdate=!0,De=!0}}De===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}N.setRenderTarget(ve,Te,we),N.setClearColor(Ke,Be),Ye!==void 0&&(X.viewport=Ye),N.toneMapping=ke}function ll(M,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,xe=M.length;W<xe;W++){const Me=M[W],{object:ve,geometry:Te,group:we}=Me;let ke=Me.material;ke.allowOverride===!0&&X!==null&&(ke=X),ve.layers.test(Y.layers)&&am(ve,B,Y,Te,ke,we)}}function am(M,B,Y,X,W,xe){M.onBeforeRender(N,B,Y,X,W,xe),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(N,B,Y,X,M,xe),W.transparent===!0&&W.side===Ki&&W.forceSinglePass===!1?(W.side=Cn,W.needsUpdate=!0,N.renderBufferDirect(Y,B,X,W,M,xe),W.side=Ka,W.needsUpdate=!0,N.renderBufferDirect(Y,B,X,W,M,xe),W.side=Ki):N.renderBufferDirect(Y,B,X,W,M,xe),M.onAfterRender(N,B,Y,X,W,xe)}function cl(M,B,Y){B.isScene!==!0&&(B=Ut);const X=k.get(M),W=A.state.lights,xe=A.state.shadowsArray,Me=W.state.version,ve=he.getParameters(M,W.state,xe,B,Y,A.state.lightProbeGridArray),Te=he.getProgramCacheKey(ve);let we=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=se.get(M.envMap||X.environment,ke),X.envMapRotation=X.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",vi),we=new Map,X.programs=we);let Ye=we.get(Te);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===Me)return rm(M,ve),Ye}else ve.uniforms=he.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,Y,ve),M.onBeforeCompile(ve,N),Ye=he.acquireProgram(ve,Te),we.set(Te,Ye),X.uniforms=ve.uniforms;const De=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Ue.uniform),rm(M,ve),X.needsLights=DS(M),X.lightsStateVersion=Me,X.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=Ye,X.uniformsList=null,Ye}function sm(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=vc.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function rm(M,B){const Y=k.get(M);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function RS(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let Y=0,X=M.length;Y<X;Y++){const W=M[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function CS(M,B,Y,X,W){B.isScene!==!0&&(B=Ut),Z.resetTextureUnits();const xe=B.fog,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,ve=H===null?N.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:et.workingColorSpace,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,we=se.get(X.envMap||Me,Te),ke=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,It=!!Y.morphAttributes.color;let Lt=wi;X.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Lt=N.toneMapping);const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dn=gt!==void 0?gt.length:0,ye=k.get(X),Un=A.state.lights;if(be===!0&&(Ne===!0||M!==ie)){const St=M===ie&&X.id===K;Ue.setState(X,M,St)}let at=!1;X.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Un.state.version||ye.outputColorSpace!==ve||W.isBatchedMesh&&ye.batching===!1||!W.isBatchedMesh&&ye.batching===!0||W.isBatchedMesh&&ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ye.instancing===!1||!W.isInstancedMesh&&ye.instancing===!0||W.isSkinnedMesh&&ye.skinning===!1||!W.isSkinnedMesh&&ye.skinning===!0||W.isInstancedMesh&&ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ye.instancingMorph===!1&&W.morphTexture!==null||ye.envMap!==we||X.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ue.numPlanes||ye.numIntersection!==Ue.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==Ye||ye.morphTargets!==De||ye.morphNormals!==dt||ye.morphColors!==It||ye.toneMapping!==Lt||ye.morphTargetsCount!==dn||!!ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,ye.__version=X.version);let qn=ye.currentProgram;at===!0&&(qn=cl(X,B,W),D&&X.isNodeMaterial&&D.onUpdateProgram(X,qn,ye));let xi=!1,ha=!1,Ns=!1;const _t=qn.getUniforms(),Bt=ye.uniforms;if(_.useProgram(qn.program)&&(xi=!0,ha=!0,Ns=!0),X.id!==K&&(K=X.id,ha=!0),ye.needsLights){const St=RS(A.state.lightProbeGridArray,W);ye.lightProbeGrid!==St&&(ye.lightProbeGrid=St,ha=!0)}if(xi||ie!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(z,"projectionMatrix",M.projectionMatrix),_t.setValue(z,"viewMatrix",M.matrixWorldInverse);const ma=_t.map.cameraPosition;ma!==void 0&&ma.setValue(z,Mt.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&_t.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),ie!==M&&(ie=M,ha=!0,Ns=!0)}if(ye.needsLights&&(Un.state.directionalShadowMap.length>0&&_t.setValue(z,"directionalShadowMap",Un.state.directionalShadowMap,Z),Un.state.spotShadowMap.length>0&&_t.setValue(z,"spotShadowMap",Un.state.spotShadowMap,Z),Un.state.pointShadowMap.length>0&&_t.setValue(z,"pointShadowMap",Un.state.pointShadowMap,Z)),W.isSkinnedMesh){_t.setOptional(z,W,"bindMatrix"),_t.setOptional(z,W,"bindMatrixInverse");const St=W.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),_t.setValue(z,"boneTexture",St.boneTexture,Z))}W.isBatchedMesh&&(_t.setOptional(z,W,"batchingTexture"),_t.setValue(z,"batchingTexture",W._matricesTexture,Z),_t.setOptional(z,W,"batchingIdTexture"),_t.setValue(z,"batchingIdTexture",W._indirectTexture,Z),_t.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(z,"batchingColorTexture",W._colorsTexture,Z));const pa=Y.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&P.update(W,Y,qn),(ha||ye.receiveShadow!==W.receiveShadow)&&(ye.receiveShadow=W.receiveShadow,_t.setValue(z,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=k3()),ha){if(_t.setValue(z,"toneMappingExposure",N.toneMappingExposure),ye.needsLights&&wS(Bt,Ns),xe&&X.fog===!0&&Ce.refreshFogUniforms(Bt,xe),Ce.refreshMaterialUniforms(Bt,X,re,fe,A.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){const St=ye.lightProbeGrid;Bt.probesSH.value=St.texture,Bt.probesMin.value.copy(St.boundingBox.min),Bt.probesMax.value.copy(St.boundingBox.max),Bt.probesResolution.value.copy(St.resolution)}vc.upload(z,sm(ye),Bt,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vc.upload(z,sm(ye),Bt,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(z,"center",W.center),_t.setValue(z,"modelViewMatrix",W.modelViewMatrix),_t.setValue(z,"normalMatrix",W.normalMatrix),_t.setValue(z,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){const St=X.uniformsGroups;for(let ma=0,Ls=St.length;ma<Ls;ma++){const om=St[ma];ae.update(om,qn),ae.bind(om,qn)}}return qn}function wS(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function DS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,B,Y){const X=k.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=B,k.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const Y=k.get(M);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,Y=0){H=M,L=B,O=Y;let X=null,W=!1,xe=!1;if(M){const ve=k.get(M);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,ve.__webglFramebuffer),oe.copy(M.viewport),ue.copy(M.scissor),Ze=M.scissorTest,_.viewport(oe),_.scissor(ue),_.setScissorTest(Ze),K=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(ve.__hasExternalTextures)Z.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(ve.__boundDepthTexture!==ke){if(ke!==null&&k.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const we=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[B])?X=we[B][Y]:X=we[B],W=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?X=k.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?X=we[Y]:X=we,oe.copy(M.viewport),ue.copy(M.scissor),Ze=M.scissorTest}else oe.copy(Le).multiplyScalar(re).floor(),ue.copy(J).multiplyScalar(re).floor(),Ze=$;if(Y!==0&&(X=V),_.bindFramebuffer(z.FRAMEBUFFER,X)&&_.drawBuffers(M,X),_.viewport(oe),_.scissor(ue),_.setScissorTest(Ze),W){const ve=k.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,Y)}else if(xe){const ve=B;for(let Te=0;Te<M.textures.length;Te++){const we=k.get(M.textures[Te]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Te,we.__webglTexture,Y,ve)}}else if(M!==null&&Y!==0){const ve=k.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,Y)}K=-1},this.readRenderTargetPixels=function(M,B,Y,X,W,xe,Me,ve=0){if(!(M&&M.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){_.bindFramebuffer(z.FRAMEBUFFER,Te);try{const we=M.textures[ve],ke=we.format,Ye=we.type;if(M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve),!w.textureFormatReadable(ke)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ye)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-X&&Y>=0&&Y<=M.height-W&&z.readPixels(B,Y,X,W,me.convert(ke),me.convert(Ye),xe)}finally{const we=H!==null?k.get(H).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,B,Y,X,W,xe,Me,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(B>=0&&B<=M.width-X&&Y>=0&&Y<=M.height-W){_.bindFramebuffer(z.FRAMEBUFFER,Te);const we=M.textures[ve],ke=we.format,Ye=we.type;if(M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve),!w.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,De),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),z.readPixels(B,Y,X,W,me.convert(ke),me.convert(Ye),0);const dt=H!==null?k.get(H).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,dt);const It=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await lE(z,It,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,De),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.deleteBuffer(De),z.deleteSync(It),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(M.image.width*X),xe=Math.floor(M.image.height*X),Me=B!==null?B.x:0,ve=B!==null?B.y:0;Z.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Me,ve,W,xe),_.unbindTexture()},this.copyTextureToTexture=function(M,B,Y=null,X=null,W=0,xe=0){let Me,ve,Te,we,ke,Ye,De,dt,It;const Lt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(Y!==null)Me=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,we=Y.min.x,ke=Y.min.y,Ye=Y.isBox3?Y.min.z:0;else{const Bt=Math.pow(2,-W);Me=Math.floor(Lt.width*Bt),ve=Math.floor(Lt.height*Bt),M.isDataArrayTexture?Te=Lt.depth:M.isData3DTexture?Te=Math.floor(Lt.depth*Bt):Te=1,we=0,ke=0,Ye=0}X!==null?(De=X.x,dt=X.y,It=X.z):(De=0,dt=0,It=0);const gt=me.convert(B.format),dn=me.convert(B.type);let ye;B.isData3DTexture?(Z.setTexture3D(B,0),ye=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),ye=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),ye=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const Un=_.getParameter(z.UNPACK_ROW_LENGTH),at=_.getParameter(z.UNPACK_IMAGE_HEIGHT),qn=_.getParameter(z.UNPACK_SKIP_PIXELS),xi=_.getParameter(z.UNPACK_SKIP_ROWS),ha=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,Lt.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,we),_.pixelStorei(z.UNPACK_SKIP_ROWS,ke),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Ye);const Ns=M.isDataArrayTexture||M.isData3DTexture,_t=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const Bt=k.get(M),pa=k.get(B),St=k.get(Bt.__renderTarget),ma=k.get(pa.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Ls=0;Ls<Te;Ls++)Ns&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,k.get(M).__webglTexture,W,Ye+Ls),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,k.get(B).__webglTexture,xe,It+Ls)),z.blitFramebuffer(we,ke,Me,ve,De,dt,Me,ve,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||k.has(M)){const Bt=k.get(M),pa=k.get(B);_.bindFramebuffer(z.READ_FRAMEBUFFER,q),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let St=0;St<Te;St++)Ns?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,W,Ye+St):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,W),_t?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pa.__webglTexture,xe,It+St):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pa.__webglTexture,xe),W!==0?z.blitFramebuffer(we,ke,Me,ve,De,dt,Me,ve,z.COLOR_BUFFER_BIT,z.NEAREST):_t?z.copyTexSubImage3D(ye,xe,De,dt,It+St,we,ke,Me,ve):z.copyTexSubImage2D(ye,xe,De,dt,we,ke,Me,ve);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _t?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(ye,xe,De,dt,It,Me,ve,Te,gt,dn,Lt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(ye,xe,De,dt,It,Me,ve,Te,gt,Lt.data):z.texSubImage3D(ye,xe,De,dt,It,Me,ve,Te,gt,dn,Lt):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,De,dt,Me,ve,gt,dn,Lt.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,De,dt,Lt.width,Lt.height,gt,Lt.data):z.texSubImage2D(z.TEXTURE_2D,xe,De,dt,Me,ve,gt,dn,Lt);_.pixelStorei(z.UNPACK_ROW_LENGTH,Un),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(z.UNPACK_SKIP_PIXELS,qn),_.pixelStorei(z.UNPACK_SKIP_ROWS,xi),_.pixelStorei(z.UNPACK_SKIP_IMAGES,ha),xe===0&&B.generateMipmaps&&z.generateMipmap(ye),_.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){L=0,O=0,H=null,_.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const W3="build-3d-mini-golf-v1",MS="mini-golf-three-leaderboard-v1",bS="mini-golf-three-scorecard-v1",kf=()=>[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}],st=(t,e,n)=>({x:t,y:e,z:n}),On=t=>({...t}),Zn=(t,e,n)=>Math.min(n,Math.max(e,t)),Zl=t=>Math.hypot(t.x,t.z),q3=()=>`player-${Math.random().toString(36).slice(2,8)}`,Ft={forest:{id:"forest",name:"森林回音谷",theme:"forest",par:4,colors:{course:"#2e8b57",rough:"#14532d",accent:"#65a30d",sky:"#0b2c1f",sand:"#d6b979",ice:"#bdeafe"},bounds:{minX:-18,maxX:18,minZ:-34,maxZ:14},spawn:st(0,.45,10),hole:{x:0,y:.15,z:-28,radius:.95},surfaces:[{id:"forest-grass-main",type:"grass",friction:.18,bounds:{minX:-14,maxX:14,minZ:-32,maxZ:12}},{id:"forest-sand-left",type:"sand",friction:.72,bounds:{minX:-12,maxX:-4,minZ:-14,maxZ:-3}},{id:"forest-sand-right",type:"sand",friction:.72,bounds:{minX:4,maxX:12,minZ:-24,maxZ:-13}}],obstacles:[{id:"forest-log-1",type:"fallen_log",position:st(-3,.5,-2),solid:!0,bounds:{minX:-8,maxX:1.2,minZ:-3.2,maxZ:-.8},height:1},{id:"forest-rock-1",type:"rock",position:st(7,.7,-17),solid:!0,radius:1.8,height:1.4},{id:"forest-bump-1",type:"hill",position:st(0,.2,-10),solid:!0,radius:4.2,height:.8}],terrainFeatures:[{id:"forest-slope",kind:"ridge",center:st(0,0,-10),radius:4.2,height:.8}],powerups:[{id:"forest-speed",type:"speed_boost",position:st(-8,.2,-6),active:!0,collected:!1,direction:{x:.8,z:-.4}},{id:"forest-hio",type:"hole_in_one",position:st(10,.2,-20),active:!0,collected:!1},{id:"forest-bounce",type:"bounce_pad",position:st(0,.02,-16),active:!0,collected:!1,direction:{x:.3,z:-1}}]},desert:{id:"desert",name:"沙漠烈日湾",theme:"desert",par:5,colors:{course:"#7aa35b",rough:"#7c5e1f",accent:"#eab308",sky:"#40210f",sand:"#e4c27a",ice:"#d7efff"},bounds:{minX:-22,maxX:22,minZ:-36,maxZ:16},spawn:st(-12,.45,12),hole:{x:13,y:.15,z:-30,radius:.95},surfaces:[{id:"desert-grass-main",type:"grass",friction:.2,bounds:{minX:-18,maxX:18,minZ:-33,maxZ:13}},{id:"desert-sand-ocean",type:"sand",friction:.8,bounds:{minX:-4,maxX:10,minZ:-18,maxZ:2}},{id:"desert-sand-trap",type:"sand",friction:.8,bounds:{minX:10,maxX:17,minZ:-31,maxZ:-22}}],obstacles:[{id:"desert-dune-1",type:"dune",position:st(-8,.4,-8),solid:!0,radius:3.4,height:1.2},{id:"desert-dune-2",type:"dune",position:st(6,.4,-5),solid:!0,radius:4.2,height:1.5},{id:"desert-rock-1",type:"rock",position:st(12,.8,-13),solid:!0,radius:2.1,height:1.8}],terrainFeatures:[{id:"desert-camber",kind:"dune_field",center:st(-8,0,-8),radius:3.4,height:1.2},{id:"desert-camber-2",kind:"dune_field",center:st(6,0,-5),radius:4.2,height:1.5}],powerups:[{id:"desert-speed",type:"speed_boost",position:st(-2,.02,-24),active:!0,collected:!1,direction:{x:1,z:-.1}},{id:"desert-hio",type:"hole_in_one",position:st(-14,.2,-14),active:!0,collected:!1},{id:"desert-bounce",type:"bounce_pad",position:st(14,.02,-7),active:!0,collected:!1,direction:{x:-.9,z:-.3}}]},snow:{id:"snow",name:"冰雪极光峰",theme:"snow",par:4,colors:{course:"#bfe8ff",rough:"#d9f4ff",accent:"#60a5fa",sky:"#10294f",sand:"#f3f4f6",ice:"#c5f3ff"},bounds:{minX:-20,maxX:20,minZ:-35,maxZ:14},spawn:st(0,.45,12),hole:{x:0,y:.15,z:-31,radius:.95},surfaces:[{id:"snow-grass-main",type:"grass",friction:.16,bounds:{minX:-16,maxX:16,minZ:-32,maxZ:12}},{id:"snow-ice-lane",type:"ice",friction:.018,bounds:{minX:-5,maxX:5,minZ:-27,maxZ:6}},{id:"snow-sand-soft",type:"sand",friction:.64,bounds:{minX:-14,maxX:-6,minZ:-20,maxZ:-10}}],obstacles:[{id:"snow-crystal-1",type:"ice_crystal",position:st(-7,.9,-15),solid:!0,radius:1.8,height:2.2},{id:"snow-crystal-2",type:"ice_crystal",position:st(8,.9,-9),solid:!0,radius:1.6,height:2.1},{id:"snow-mound",type:"snow_mound",position:st(0,.45,-22),solid:!0,radius:3.5,height:1.1}],terrainFeatures:[{id:"snow-mound-feature",kind:"mound",center:st(0,0,-22),radius:3.5,height:1.1},{id:"snow-ice-lane",kind:"slick_lane",bounds:{minX:-5,maxX:5,minZ:-27,maxZ:6},friction:.018}],powerups:[{id:"snow-speed",type:"speed_boost",position:st(0,.02,-18),active:!0,collected:!1,direction:{x:0,z:-1}},{id:"snow-hio",type:"hole_in_one",position:st(12,.2,-6),active:!0,collected:!1},{id:"snow-bounce",type:"bounce_pad",position:st(-10,.02,-26),active:!0,collected:!1,direction:{x:.9,z:-.1}}]}},Pg=()=>({levelBest:{forest:[],desert:[],snow:[]},overall:[],persisted:!0});function Kl(){var t,e,n;try{const i=localStorage.getItem(MS);if(!i)return Pg();const a=JSON.parse(i);return{levelBest:{forest:((t=a.levelBest)==null?void 0:t.forest)??[],desert:((e=a.levelBest)==null?void 0:e.desert)??[],snow:((n=a.levelBest)==null?void 0:n.snow)??[]},overall:a.overall??[],persisted:!0}}catch{return Pg()}}function Y3(t){localStorage.setItem(MS,JSON.stringify(t))}function zg(){try{const t=localStorage.getItem(bS);return t?JSON.parse(t):{totalStrokes:0,totalScore:0,completedLevels:[]}}catch{return{totalStrokes:0,totalScore:0,completedLevels:[]}}}function Z3(t){localStorage.setItem(bS,JSON.stringify(t))}function Xf(t,e){return[...t].sort((n,i)=>n.strokes-i.strokes||n.achievedAt-i.achievedAt||n.playerId.localeCompare(i.playerId)).map((n,i)=>({...n,rank:i+1,relativeToPar:n.strokes-e,par:e}))}function K3(t){return[...t].sort((e,n)=>e.totalStrokes-n.totalStrokes||e.achievedAt-n.achievedAt||e.playerId.localeCompare(n.playerId)).map((e,n)=>({...e,rank:n+1}))}function Ql(t,e,n){let i=0;for(const a of t.terrainFeatures){const s=a.center,r=typeof a.radius=="number"?a.radius:void 0,o=typeof a.height=="number"?a.height:0;if(s&&r){const l=e-s.x,c=n-s.z,h=Math.hypot(l,c);if(h<r){const p=1-h/r;i+=o*p*p}}}return i}function Jl(t,e,n){return t.surfaces.find(a=>e>=a.bounds.minX&&e<=a.bounds.maxX&&n>=a.bounds.minZ&&n<=a.bounds.maxZ)??t.surfaces[0]}function Ig(t,e){var n;return((n=t.find(i=>i.type===e))==null?void 0:n.count)??0}function Q3(){const t=an.useRef(null),e=an.useRef({gameState:"menu",mode:"single",selectedLevelId:null,currentHoleStrokes:0,totalStrokes:0,currentScore:0,totalScore:0,holeComplete:!1,elapsedTime:0,shot:{dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,direction:{x:0,z:-1},power:0,minPower:.1,maxPower:12,strokeCount:0},ball:{position:On(Ft.forest.spawn),velocity:st(0,0,0),speed:0,radius:.45,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:Ft.forest.surfaces[0].friction,lastCollision:null,lastSafePosition:On(Ft.forest.spawn)},camera:{mode:"follow",position:st(0,12,18),target:st(0,0,0),distance:18,minDistance:8,maxDistance:28,zoom:1,angle:0,pitch:.55},powerups:{items:[],inventory:kf(),activeEffect:null,lastTriggeredId:null,placingType:null,armedType:null,selectedPlacedId:null},multiplayer:{enabled:!1,mode:"local",status:"setup",playerCount:2,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:[],winnerId:null,tiedPlayerIds:[]},performance:{fixedStep:1/60,accumulator:0,simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,listenerCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:1,poolStats:{spheres:{capacity:4,createdTotal:1,reused:0},vectors:{capacity:32,createdTotal:8,reused:0}}},leaderboard:Kl(),contactMessage:"等待开球",motionMessage:"静止",aimMessage:"拖动球场视图进行瞄准",resultMessage:"",playerProfile:{id:q3(),name:"Solo Player"}}),[n,i]=an.useState(0),a=an.useRef(null),s=an.useRef(null),r=an.useRef(null),o=an.useRef(null),l=an.useRef(null),c=an.useRef({}),h=an.useRef(performance.now()),[p,u]=an.useState(2),d=e.current,S=d.selectedLevelId?Ft[d.selectedLevelId]:null,b=()=>{e.current.performance.reactCommitCount+=1,i(E=>E+1)},m=E=>{const D={levelBest:{forest:Xf(E.levelBest.forest.map(({rank:U,relativeToPar:L,...O})=>O),Ft.forest.par),desert:Xf(E.levelBest.desert.map(({rank:U,relativeToPar:L,...O})=>O),Ft.desert.par),snow:Xf(E.levelBest.snow.map(({rank:U,relativeToPar:L,...O})=>O),Ft.snow.par)},overall:[],persisted:!0},V=new Set;for(const U of Object.values(D.levelBest))U.forEach(L=>V.add(L.playerId));const q=[];for(const U of V){const L=D.levelBest.forest.find(K=>K.playerId===U),O=D.levelBest.desert.find(K=>K.playerId===U),H=D.levelBest.snow.find(K=>K.playerId===U);L&&O&&H&&q.push({playerId:U,playerName:L.playerName,levelStrokes:{forest:L.strokes,desert:O.strokes,snow:H.strokes},totalStrokes:L.strokes+O.strokes+H.strokes,achievedAt:Math.max(L.achievedAt,O.achievedAt,H.achievedAt)})}return D.overall=K3(q),D},f=(E,D,V,q)=>{const U=Kl(),L=U.levelBest[E]??[],O=L.find(ue=>ue.playerId===V),H=O&&O.strokes<=D?O.achievedAt:Date.now(),K=L.filter(ue=>ue.playerId!==V),ie=O?Math.min(O.strokes,D):D;K.push({playerId:V,playerName:q,strokes:ie,par:Ft[E].par,relativeToPar:ie-Ft[E].par,achievedAt:H,rank:0});const oe=m({...U,levelBest:{...U.levelBest,[E]:K},overall:U.overall,persisted:!0});Y3(oe),e.current.leaderboard=oe},x=E=>{const D=Ft[e.current.selectedLevelId??"forest"];e.current.ball.position=On(E.ballPosition),e.current.ball.lastSafePosition=On(E.ballPosition),e.current.ball.velocity=st(0,0,0),e.current.ball.speed=0,e.current.ball.moving=!1,e.current.ball.sleeping=!0,e.current.ball.inHole=E.finished;const V=Jl(D,E.ballPosition.x,E.ballPosition.z);e.current.ball.currentSurface=V.type,e.current.ball.friction=V.friction,e.current.currentHoleStrokes=E.holeStrokes,e.current.shot.strokeCount=E.holeStrokes,e.current.powerups.inventory=E.powerupInventory.map(q=>({...q})),e.current.powerups.armedType=E.armedPowerup},y=(E,D)=>Array.from({length:E},(V,q)=>({id:`P${q+1}`,name:`玩家 ${q+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:On(D.spawn),powerupInventory:kf(),armedPowerup:null,collectedMap:{}})),v=(E,D)=>{const V=Ft[E],q=zg(),U=e.current;U.selectedLevelId=E,U.gameState="playing",U.mode=D,U.currentHoleStrokes=0,U.currentScore=0,U.holeComplete=!1,U.elapsedTime=0,U.resultMessage="",U.contactMessage="球位已准备",U.motionMessage="静止",U.aimMessage="按住并拖动球场进行蓄力",U.totalStrokes=q.totalStrokes,U.totalScore=q.totalScore,U.shot={...U.shot,dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,power:0,strokeCount:0,direction:{x:0,z:-1}},U.ball.position=On(V.spawn),U.ball.lastSafePosition=On(V.spawn),U.ball.velocity=st(0,0,0),U.ball.speed=0,U.ball.inHole=!1,U.ball.outOfBounds=!1,U.ball.moving=!1,U.ball.sleeping=!0,U.ball.airborne=!1;const L=Jl(V,V.spawn.x,V.spawn.z);U.ball.currentSurface=L.type,U.ball.friction=L.friction,U.powerups.items=V.powerups.map(O=>({...O,collected:!1,active:!0})),U.powerups.inventory=kf(),U.powerups.activeEffect=null,U.powerups.lastTriggeredId=null,U.powerups.armedType=null,U.multiplayer.enabled=D==="local_multiplayer",U.multiplayer.status=D==="local_multiplayer"?"playing":"setup",U.multiplayer.playerCount=p,U.multiplayer.turnIndex=0,U.multiplayer.round=1,U.multiplayer.revision+=1,U.multiplayer.winnerId=null,U.multiplayer.tiedPlayerIds=[],U.multiplayer.players=D==="local_multiplayer"?y(p,V):[],U.multiplayer.currentPlayerId=D==="local_multiplayer"?"P1":null,D==="local_multiplayer"&&x(U.multiplayer.players[0]),b()},T=()=>{var H;const E=e.current,D=E.selectedLevelId,V=Ft[D];E.holeComplete=!0,E.gameState=(E.mode==="local_multiplayer","hole_complete"),E.ball.inHole=!0,E.ball.moving=!1,E.ball.sleeping=!0,E.ball.velocity=st(0,0,0);const q=E.currentHoleStrokes,U=Math.max(50,250-q*25+V.par*10);E.currentScore=U,E.totalScore+=U,E.totalStrokes+=q;const L=zg(),O={totalStrokes:L.totalStrokes+q,totalScore:L.totalScore+U,completedLevels:Array.from(new Set([...L.completedLevels,D]))};if(Z3(O),E.resultMessage=`完成 ${V.name}，共 ${q} 杆，得分 ${U}`,E.mode==="single")f(D,q,E.playerProfile.id,E.playerProfile.name),E.gameState="hole_complete";else{const K=E.multiplayer.turnIndex,ie=E.multiplayer.players[K];ie.finished=!0,ie.holeStrokes=q,ie.totalStrokes=q,ie.ballPosition=On(E.ball.position),ie.powerupInventory=E.powerups.inventory.map(ue=>({...ue})),ie.armedPowerup=E.powerups.armedType??null;const oe=E.multiplayer.players.findIndex(ue=>!ue.finished);if(oe>=0)E.multiplayer.turnIndex=oe,E.multiplayer.currentPlayerId=E.multiplayer.players[oe].id,E.multiplayer.round=oe===0?E.multiplayer.round+1:E.multiplayer.round,x(E.multiplayer.players[oe]),E.holeComplete=!1,E.gameState="playing",E.resultMessage=`${ie.name} 已入洞，轮到 ${E.multiplayer.players[oe].name}`;else{E.multiplayer.status="complete";const ue=[...E.multiplayer.players].sort((Be,j)=>Be.totalStrokes-j.totalStrokes||Be.id.localeCompare(j.id)),Ze=((H=ue[0])==null?void 0:H.totalStrokes)??0,Ke=ue.filter(Be=>Be.totalStrokes===Ze).map(Be=>Be.id);E.multiplayer.winnerId=Ke.length===1?Ke[0]:null,E.multiplayer.tiedPlayerIds=Ke,E.gameState="local_result"}}b()},A=()=>{const E=e.current;if(E.ball.position=On(E.ball.lastSafePosition),E.ball.velocity=st(0,0,0),E.ball.speed=0,E.ball.outOfBounds=!1,E.ball.moving=!1,E.ball.sleeping=!0,E.contactMessage="已重置到上一个安全位置",E.mode==="local_multiplayer"){const D=E.multiplayer.players[E.multiplayer.turnIndex];D&&(D.ballPosition=On(E.ball.position))}b()},C=()=>{const E=e.current;Ig(E.powerups.inventory,"hole_in_one")>0&&(E.powerups.armedType="hole_in_one",E.aimMessage="已武装一杆入洞道具，下一次合法击球生效",E.mode==="local_multiplayer"&&(E.multiplayer.players[E.multiplayer.turnIndex].armedPowerup="hole_in_one"),b())};an.useEffect(()=>{const E=t.current;if(!E)return;const D=new EE;D.background=new je("#09131f");const V=new ei(55,E.clientWidth/Math.max(1,E.clientHeight),.1,200);V.position.set(0,12,18);const q=new X3({antialias:!0,alpha:!1});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setSize(E.clientWidth,E.clientHeight),q.shadowMap.enabled=!0,E.innerHTML="",E.appendChild(q.domElement);const U=new kE("#dbeafe","#1f2937",1.4),L=new qE("#fff7ed",1.8);L.position.set(10,18,8),L.castShadow=!0,D.add(U,L);const O=new ho;D.add(O);const H=new jt(new hi(40,1,56),new Wi({color:"#1f7a48"}));H.position.y=-.5,H.receiveShadow=!0,O.add(H);const K=new jt(new Wp(.45,32,32),new Wi({color:"#f8fafc",roughness:.25,metalness:.1}));K.castShadow=!0,D.add(K);const ie=new jt(new wo(.95,.95,.22,32),new Wi({color:"#111827"}));ie.receiveShadow=!0,D.add(ie);const oe=new jt(new wo(.06,.06,3.2,12),new Wi({color:"#e5e7eb"})),ue=new jt(new hi(1.1,.5,.06),new Wi({color:"#ef4444"}));ue.position.set(.55,1.1,0),oe.add(ue),D.add(oe),a.current=D,r.current=V,s.current=q,o.current=K,l.current=ie,e.current.performance.runtimeMountCount+=1,window.__THREE_SCENE__=D,window.__THREE_RENDERER__=q,(()=>{for(;O.children.length>1;)O.remove(O.children[1]);c.current={};const J=e.current.selectedLevelId?Ft[e.current.selectedLevelId]:Ft.forest;D.background=new je(J.colors.sky),H.material.color=new je(J.colors.course),H.geometry.dispose(),H.geometry=new hi(J.bounds.maxX-J.bounds.minX+6,1,J.bounds.maxZ-J.bounds.minZ+8);for(const $ of J.surfaces){if($.type==="grass")continue;const I=$.bounds.maxX-$.bounds.minX,be=$.bounds.maxZ-$.bounds.minZ,Ne=$.type==="sand"?J.colors.sand:J.colors.ice,qe=new jt(new hi(I,.08,be),new Wi({color:Ne,transparent:$.type==="ice",opacity:$.type==="ice"?.9:1}));qe.position.set(($.bounds.minX+$.bounds.maxX)/2,.02,($.bounds.minZ+$.bounds.maxZ)/2),qe.receiveShadow=!0,O.add(qe)}J.obstacles.forEach($=>{let I;if($.bounds){const be=$.bounds.maxX-$.bounds.minX,Ne=$.bounds.maxZ-$.bounds.minZ;I=new jt(new hi(be,$.height??1,Ne),new Wi({color:J.colors.rough})),I.position.set(($.bounds.minX+$.bounds.maxX)/2,($.height??1)/2,($.bounds.minZ+$.bounds.maxZ)/2)}else I=new jt(new wo($.radius??1.5,$.radius??1.8,$.height??1.6,16),new Wi({color:$.type.includes("crystal")?J.colors.ice:J.colors.rough})),I.position.set($.position.x,($.height??1.6)/2,$.position.z);I.castShadow=!0,I.receiveShadow=!0,O.add(I)}),J.powerups.forEach($=>{const I=$.type==="hole_in_one"?"#f43f5e":$.type==="speed_boost"?"#22c55e":"#f59e0b",be=new jt($.type==="bounce_pad"?new hi(1.8,.1,1.8):new qp(.45,.15,48,8),new Wi({color:I,emissive:I,emissiveIntensity:.15}));be.position.set($.position.x,$.position.y+($.type==="bounce_pad"?.05:.45),$.position.z),be.castShadow=!0,O.add(be),c.current[$.id]=be}),ie.position.set(J.hole.x,J.hole.y,J.hole.z),oe.position.set(J.hole.x,1.6,J.hole.z),K.position.set(J.spawn.x,J.spawn.y,J.spawn.z)})();const Ke=()=>{if(!t.current||!r.current||!s.current)return;const J=t.current.clientWidth,$=t.current.clientHeight;r.current.aspect=J/Math.max(1,$),r.current.updateProjectionMatrix(),s.current.setSize(J,$)},Be=J=>{const $=e.current;$.gameState!=="playing"||$.ball.moving||$.ball.inHole||($.shot.dragging=!0,$.shot.startScreen={x:J.clientX,y:J.clientY},$.shot.currentScreen={x:J.clientX,y:J.clientY},$.aimMessage="正在瞄准",b())},j=J=>{const $=e.current;if(!$.shot.dragging||!$.shot.startScreen)return;$.shot.currentScreen={x:J.clientX,y:J.clientY};const I=J.clientX-$.shot.startScreen.x,be=J.clientY-$.shot.startScreen.y,Ne={x:Zn(-I/120,-1,1),z:Zn(-be/120,-1,1)},qe=Math.max(.001,Zl(Ne));$.shot.direction={x:Ne.x/qe,z:Ne.z/qe},$.shot.power=Zn(Math.hypot(I,be)/18,$.shot.minPower,$.shot.maxPower),$.aimMessage=`方向 ${$.shot.direction.x.toFixed(2)}, ${$.shot.direction.z.toFixed(2)} / 力度 ${$.shot.power.toFixed(2)}`,b()},fe=J=>{const I=e.current.powerups.inventory.find(be=>be.type===J);I&&I.count>0&&(I.count-=1)},re=()=>{const J=e.current;if(!J.shot.dragging)return;if(J.shot.dragging=!1,J.shot.canShoot=!0,J.ball.moving||J.ball.inHole||J.shot.power<=0){J.shot.startScreen=null,J.shot.currentScreen=null;return}const $=Ft[J.selectedLevelId??"forest"];let I=J.shot.direction,be=J.shot.power;if(J.powerups.armedType==="hole_in_one"&&Ig(J.powerups.inventory,"hole_in_one")>0){const Ne={x:$.hole.x-J.ball.position.x,z:$.hole.z-J.ball.position.z},qe=Math.max(.001,Zl(Ne));I={x:Ne.x/qe,z:Ne.z/qe},be=Zn(qe*.78,J.shot.minPower,J.shot.maxPower),fe("hole_in_one"),J.powerups.activeEffect="hole_in_one",J.powerups.armedType=null}if(J.ball.velocity=st(I.x*be,0,I.z*be),J.ball.moving=!0,J.ball.sleeping=!1,J.currentHoleStrokes+=1,J.shot.strokeCount=J.currentHoleStrokes,J.motionMessage="球体滚动中",J.contactMessage=`从 ${J.ball.currentSurface} 发球`,J.mode==="local_multiplayer"){const Ne=J.multiplayer.players[J.multiplayer.turnIndex];Ne.holeStrokes=J.currentHoleStrokes,Ne.totalStrokes=J.currentHoleStrokes,Ne.powerupInventory=J.powerups.inventory.map(qe=>({...qe})),Ne.armedPowerup=J.powerups.armedType??null}J.shot.startScreen=null,J.shot.currentScreen=null,b()};q.domElement.addEventListener("pointerdown",Be),window.addEventListener("pointermove",j),window.addEventListener("pointerup",re),window.addEventListener("resize",Ke),e.current.performance.listenerCount+=4;const Pe=()=>{const J=performance.now(),$=Math.min(.033,(J-h.current)/1e3);h.current=J;const I=e.current;I.performance.renderFrame+=1,I.performance.logicLoopCount+=1,I.elapsedTime+=I.gameState==="playing"?$:0,I.performance.accumulator=Math.min(1,I.performance.accumulator+$),I.performance.simulationTick+=1;const be=I.selectedLevelId?Ft[I.selectedLevelId]:Ft.forest,Ne=Jl(be,I.ball.position.x,I.ball.position.z);if(I.ball.currentSurface=Ne.type,I.ball.friction=Ne.friction,I.ball.moving&&!I.ball.inHole){I.ball.position.x+=I.ball.velocity.x*$,I.ball.position.z+=I.ball.velocity.z*$,I.ball.speed=Math.hypot(I.ball.velocity.x,I.ball.velocity.z);const qe=.2,Mt=Ql(be,I.ball.position.x,I.ball.position.z),Rt=Ql(be,I.ball.position.x+qe,I.ball.position.z)-Mt,Ut=Ql(be,I.ball.position.x,I.ball.position.z+qe)-Mt;I.ball.velocity.x+=-Rt*2.4*$,I.ball.velocity.z+=-Ut*2.4*$;const mt=Math.max(0,1-I.ball.friction*$*2.2);I.ball.velocity.x*=mt,I.ball.velocity.z*=mt;for(const Ae of be.obstacles){let w=!1;if(Ae.bounds){const _=Zn(I.ball.position.x,Ae.bounds.minX,Ae.bounds.maxX),F=Zn(I.ball.position.z,Ae.bounds.minZ,Ae.bounds.maxZ),k=I.ball.position.x-_,Z=I.ball.position.z-F;w=k*k+Z*Z<I.ball.radius*I.ball.radius,w&&(Math.abs(k)>Math.abs(Z)?I.ball.velocity.x*=-.82:I.ball.velocity.z*=-.82)}else if(Ae.radius){const _=I.ball.position.x-Ae.position.x,F=I.ball.position.z-Ae.position.z,k=Math.hypot(_,F);if(k<Ae.radius+I.ball.radius){w=!0;const Z=_/Math.max(.001,k),se=F/Math.max(.001,k),le=I.ball.velocity.x*Z+I.ball.velocity.z*se;I.ball.velocity.x-=1.7*le*Z,I.ball.velocity.z-=1.7*le*se,I.ball.position.x=Ae.position.x+Z*(Ae.radius+I.ball.radius+.05),I.ball.position.z=Ae.position.z+se*(Ae.radius+I.ball.radius+.05)}}w&&(I.ball.lastCollision=Ae.id,I.contactMessage=`碰撞 ${Ae.type}`)}I.powerups.items.forEach(Ae=>{const w=I.mode==="local_multiplayer"?I.multiplayer.players[I.multiplayer.turnIndex]:null;if(w?!!w.collectedMap[Ae.id]:Ae.collected)return;const F=I.ball.position.x-Ae.position.x,k=I.ball.position.z-Ae.position.z;if(Math.hypot(F,k)<1.25){if(I.powerups.lastTriggeredId=Ae.id,Ae.type==="speed_boost"){const se=Ae.direction??{x:0,z:-1},le=Math.max(.001,Zl(se)),Q=3.2;I.ball.velocity.x=Zn(I.ball.velocity.x+se.x/le*Q,-14,14),I.ball.velocity.z=Zn(I.ball.velocity.z+se.z/le*Q,-14,14),I.powerups.activeEffect="speed_boost",I.contactMessage="触发加速带"}else if(Ae.type==="bounce_pad"){const se=Ae.direction??{x:.6,z:-.8},le=Math.max(.001,Zl(se));I.ball.velocity.x=Zn(se.x/le*7.5,-14,14),I.ball.velocity.z=Zn(se.z/le*7.5,-14,14),I.powerups.activeEffect="bounce_pad",I.contactMessage="触发反弹垫"}else{const se=I.powerups.inventory.find(le=>le.type==="hole_in_one");se&&(se.count+=1),I.powerups.activeEffect="hole_in_one_pickup",I.contactMessage="拾取一杆入洞道具"}w?(w.collectedMap[Ae.id]=!0,w.powerupInventory=I.powerups.inventory.map(se=>({...se}))):(Ae.collected=!0,Ae.active=!1)}}),I.ball.position.x<be.bounds.minX||I.ball.position.x>be.bounds.maxX||I.ball.position.z<be.bounds.minZ||I.ball.position.z>be.bounds.maxZ?(I.ball.outOfBounds=!0,I.ball.moving=!1,I.motionMessage="出界",I.contactMessage="球体离开边界"):I.ball.lastSafePosition=On(I.ball.position);const Ct=I.ball.position.x-be.hole.x,z=I.ball.position.z-be.hole.z;Math.hypot(Ct,z)<be.hole.radius*.8&&I.ball.speed<6.5&&(I.ball.position.x=be.hole.x,I.ball.position.z=be.hole.z,T()),Math.hypot(I.ball.velocity.x,I.ball.velocity.z)<.05&&(I.ball.velocity.x=0,I.ball.velocity.z=0,I.ball.moving=!1,I.ball.sleeping=!0,I.motionMessage="静止",I.mode==="local_multiplayer"&&(I.multiplayer.players[I.multiplayer.turnIndex].ballPosition=On(I.ball.position)))}I.ball.speed=Math.hypot(I.ball.velocity.x,I.ball.velocity.z),I.ball.position.y=.45+Ql(be,I.ball.position.x,I.ball.position.z),I.ball.airborne=!1,I.camera.target=On(I.ball.position),I.camera.position={x:I.ball.position.x+Math.sin(I.camera.angle)*I.camera.distance,y:I.ball.position.y+I.camera.distance*I.camera.pitch,z:I.ball.position.z+Math.cos(I.camera.angle)*I.camera.distance},K.position.set(I.ball.position.x,I.ball.position.y,I.ball.position.z),V.position.set(I.camera.position.x,I.camera.position.y,I.camera.position.z),V.lookAt(I.camera.target.x,I.camera.target.y,I.camera.target.z),Object.entries(c.current).forEach(([qe,Mt])=>{const Rt=I.powerups.items.find(Ct=>Ct.id===qe),Ut=I.mode==="local_multiplayer"?I.multiplayer.players[I.multiplayer.turnIndex]:null,mt=Ut?!!Ut.collectedMap[qe]:Rt==null?void 0:Rt.collected;Mt.visible=!mt,Mt.rotation.y+=.02}),q.render(D,V),I.performance.renderFrame%8===0&&b(),requestAnimationFrame(Pe)};requestAnimationFrame(Pe);const Fe={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__contract","__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:W3})};return(()=>{window.__contract=Fe,window.__game={getState:()=>{const J=e.current,$=J.selectedLevelId?Ft[J.selectedLevelId]:null;return{ready:!0,gameState:J.gameState,mode:J.mode,currentLevel:$?{id:$.id,name:$.name,theme:$.theme,par:$.par}:null,currentHoleStrokes:J.currentHoleStrokes,totalStrokes:J.totalStrokes,currentScore:J.currentScore,totalScore:J.totalScore,holeComplete:J.holeComplete,elapsedTime:Number(J.elapsedTime.toFixed(3))}}},window.__ball={getState:()=>JSON.parse(JSON.stringify(e.current.ball))},window.__shot={getState:()=>JSON.parse(JSON.stringify(e.current.shot))},window.__course={getState:()=>{const J=Ft[e.current.selectedLevelId??"forest"];return{levelId:J.id,name:J.name,theme:J.theme,par:J.par,bounds:J.bounds,spawn:J.spawn,hole:J.hole,surfaces:J.surfaces,obstacles:J.obstacles,terrainFeatures:J.terrainFeatures,obstacleCount:J.obstacles.length,sceneObjectCount:D.children.length,loaded:!0}}},window.__multiplayer={getState:()=>JSON.parse(JSON.stringify(e.current.multiplayer))},window.__powerups={getState:()=>JSON.parse(JSON.stringify(e.current.powerups))},window.__camera={getState:()=>JSON.parse(JSON.stringify(e.current.camera))},window.__leaderboard={getState:()=>JSON.parse(JSON.stringify(e.current.leaderboard))},window.__performance={getState:()=>JSON.parse(JSON.stringify(e.current.performance))}})(),b(),()=>{q.domElement.removeEventListener("pointerdown",Be),window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",re),window.removeEventListener("resize",Ke),e.current.performance.listenerCount=Math.max(0,e.current.performance.listenerCount-4),e.current.performance.runtimeCleanupCount+=1,q.dispose()}},[]),an.useEffect(()=>{if(!a.current)return;const E=S??Ft.forest,D=e.current;D.leaderboard=Kl();const V=Jl(E,D.ball.position.x,D.ball.position.z);D.ball.currentSurface=V.type,D.ball.friction=V.friction},[n,S]);const g=an.useMemo(()=>d.leaderboard,[n]),R=d.mode==="local_multiplayer"?d.multiplayer.players[d.multiplayer.turnIndex]:null,N=[...d.multiplayer.players].sort((E,D)=>E.totalStrokes-D.totalStrokes||E.id.localeCompare(D.id));return ce.jsx("div",{className:"min-h-screen text-white",children:ce.jsxs("div",{className:"mx-auto flex min-h-screen max-w-7xl flex-col gap-4 p-4 lg:flex-row",children:[ce.jsxs("aside",{className:"w-full rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur lg:w-80",children:[ce.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[ce.jsxs("div",{children:[ce.jsx("p",{className:"text-xs uppercase tracking-[0.35em] text-emerald-300",children:"Three.js"}),ce.jsx("h1",{className:"text-2xl font-bold",children:"3D 迷你高尔夫赛"})]}),ce.jsx("div",{className:"rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200",children:"React 19"})]}),ce.jsxs("div",{id:"menu",className:"space-y-3 rounded-2xl bg-white/5 p-4",children:[ce.jsx("button",{"data-testid":"start-btn",className:"w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400",onClick:()=>{e.current.gameState="level_select",b()},children:"开始游戏"}),ce.jsx("button",{"data-testid":"multiplayer-btn",className:"w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-400",onClick:()=>{e.current.gameState="local_setup",e.current.mode="local_multiplayer",b()},children:"本地多人对战"}),ce.jsx("button",{"data-testid":"leaderboard-btn",className:"w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300",onClick:()=>{e.current.gameState="leaderboard",e.current.leaderboard=Kl(),b()},children:"查看排行榜"})]}),ce.jsxs("div",{id:"levelSelect",className:"mt-4 space-y-3 rounded-2xl bg-white/5 p-4",children:[ce.jsx("h2",{className:"text-lg font-semibold",children:"关卡选择"}),ce.jsxs("div",{className:"grid gap-3",children:[ce.jsx("button",{"data-testid":"level-forest",className:"rounded-xl bg-emerald-900/70 px-4 py-3 text-left hover:bg-emerald-800",onClick:()=>v("forest","single"),children:"森林主题 · 摩擦 0.18 / 沙坑 0.72"}),ce.jsx("button",{"data-testid":"level-desert",className:"rounded-xl bg-yellow-900/70 px-4 py-3 text-left hover:bg-yellow-800",onClick:()=>v("desert","single"),children:"沙漠主题 · 摩擦 0.20 / 沙坑 0.80"}),ce.jsx("button",{"data-testid":"level-snow",className:"rounded-xl bg-cyan-900/70 px-4 py-3 text-left hover:bg-cyan-800",onClick:()=>v("snow","single"),children:"冰雪主题 · 草地 0.16 / 冰面 0.018"})]})]}),ce.jsxs("div",{id:"multiplayerLobby",className:"mt-4 space-y-3 rounded-2xl bg-white/5 p-4",children:[ce.jsx("h2",{className:"text-lg font-semibold",children:"本地多人设置"}),ce.jsxs("label",{className:"block text-sm text-slate-300",children:["玩家数量",ce.jsxs("select",{"data-testid":"local-player-count",className:"mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2",value:p,onChange:E=>u(Number(E.target.value)),children:[ce.jsx("option",{value:2,children:"2 人"}),ce.jsx("option",{value:3,children:"3 人"}),ce.jsx("option",{value:4,children:"4 人"})]})]}),ce.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[ce.jsx("button",{"data-testid":"local-start-btn",className:"rounded-xl bg-sky-500 px-3 py-3 font-semibold text-slate-950",onClick:()=>v("forest","local_multiplayer"),children:"开始对局"}),ce.jsx("button",{"data-testid":"local-exit-btn",className:"rounded-xl bg-slate-700 px-3 py-3 font-semibold",onClick:()=>{e.current.gameState="menu",b()},children:"退出"})]})]}),ce.jsxs("div",{id:"leaderboardScreen",className:"mt-4 space-y-3 rounded-2xl bg-white/5 p-4",children:[ce.jsx("h2",{className:"text-lg font-semibold",children:"排行榜"}),["forest","desert","snow"].map(E=>ce.jsxs("div",{className:"rounded-xl border border-white/10 p-3",children:[ce.jsx("h3",{className:"mb-2 text-sm font-semibold text-emerald-300",children:Ft[E].name}),ce.jsx("div",{className:"space-y-1 text-sm text-slate-200",children:g.levelBest[E].length===0?ce.jsx("p",{children:"暂无已完成成绩"}):g.levelBest[E].map(D=>ce.jsxs("p",{children:["#",D.rank," ",D.playerName," · ",D.strokes," 杆"]},`${E}-${D.playerId}`))})]},E)),ce.jsxs("div",{className:"rounded-xl border border-white/10 p-3 text-sm",children:[ce.jsx("h3",{className:"mb-2 font-semibold text-amber-300",children:"全关总榜"}),g.overall.length===0?ce.jsx("p",{children:"需三关都有合法最佳成绩后生成"}):g.overall.map(E=>ce.jsxs("p",{children:["#",E.rank," ",E.playerName," · 总杆 ",E.totalStrokes]},E.playerId))]})]})]}),ce.jsxs("main",{className:"flex-1 rounded-3xl border border-white/10 bg-slate-950/40 p-4 shadow-2xl backdrop-blur",children:[ce.jsxs("div",{className:"mb-4 grid gap-3 md:grid-cols-3 xl:grid-cols-6",children:[ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"当前玩家"}),ce.jsx("p",{"data-testid":"current-player",className:"text-lg font-semibold",children:(R==null?void 0:R.name)??d.playerProfile.name})]}),ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"当前杆数"}),ce.jsx("p",{"data-testid":"stroke-count",className:"text-lg font-semibold",children:d.currentHoleStrokes})]}),ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"击球力度"}),ce.jsx("p",{"data-testid":"shot-power",className:"text-lg font-semibold",children:d.shot.power.toFixed(2)})]}),ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"实时摩擦系数"}),ce.jsxs("p",{"data-testid":"surface-friction",className:"text-lg font-semibold",children:[d.ball.friction.toFixed(3)," · ",d.ball.currentSurface]})]}),ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"瞄准反馈"}),ce.jsx("p",{"data-testid":"aim-feedback",className:"text-sm font-medium",children:d.aimMessage})]}),ce.jsxs("div",{className:"rounded-2xl bg-white/5 p-3",children:[ce.jsx("p",{className:"text-xs text-slate-400",children:"运动状态"}),ce.jsx("p",{"data-testid":"physics-motion",className:"text-sm font-medium",children:d.motionMessage}),ce.jsx("p",{"data-testid":"physics-contact",className:"mt-1 text-xs text-slate-300",children:d.contactMessage})]})]}),ce.jsxs("div",{id:"gameScreen",className:"relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900",style:{height:"540px"},children:[ce.jsx("div",{ref:t,className:"h-full w-full"}),ce.jsxs("div",{className:"pointer-events-none absolute left-4 top-4 rounded-2xl bg-slate-950/70 px-4 py-3 text-sm text-slate-100",children:[ce.jsxs("p",{children:["关卡：",(S==null?void 0:S.name)??"未开始"]}),ce.jsxs("p",{children:["模式：",d.mode==="single"?"单人":"本地多人"]}),ce.jsxs("p",{children:["时间：",d.elapsedTime.toFixed(1),"s"]})]}),ce.jsxs("div",{"data-testid":"powerup-status",className:"absolute right-4 top-4 space-y-2 rounded-2xl bg-slate-950/70 p-4 text-sm",children:[ce.jsx("p",{className:"font-semibold",children:"道具库存"}),d.powerups.inventory.map(E=>ce.jsxs("p",{children:[E.type,": ",E.count]},E.type)),ce.jsx("button",{"data-testid":"powerup-hio",className:"rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white",onClick:C,children:"启用一杆入洞"})]}),ce.jsxs("div",{className:"absolute bottom-4 left-4 flex flex-wrap gap-3",children:[ce.jsx("button",{"data-testid":"zoom-in",className:"rounded-xl bg-white/10 px-4 py-2",onClick:()=>{d.camera.distance=Zn(d.camera.distance-2,d.camera.minDistance,d.camera.maxDistance),d.camera.zoom=Number((1/d.camera.distance).toFixed(3)),b()},children:"相机放大"}),ce.jsx("button",{"data-testid":"zoom-out",className:"rounded-xl bg-white/10 px-4 py-2",onClick:()=>{d.camera.distance=Zn(d.camera.distance+2,d.camera.minDistance,d.camera.maxDistance),d.camera.zoom=Number((1/d.camera.distance).toFixed(3)),b()},children:"相机缩小"}),ce.jsx("button",{"data-testid":"reset-position",className:"rounded-xl bg-white/10 px-4 py-2",onClick:A,children:"重置球位"})]})]}),ce.jsx("div",{id:"resultScreen",className:"mt-4 rounded-2xl bg-white/5 p-4",children:ce.jsxs("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[ce.jsxs("div",{children:[ce.jsx("h2",{className:"text-lg font-semibold",children:"结算与赛况"}),ce.jsx("p",{className:"text-sm text-slate-300",children:d.resultMessage||"完成球洞后将显示结算、积分与继续操作。"})]}),ce.jsx("button",{"data-testid":"result-next",className:"rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950",onClick:()=>{d.mode==="local_multiplayer"&&d.multiplayer.status==="complete"?d.gameState="local_result":d.gameState="level_select",b()},children:"继续"})]})}),ce.jsxs("div",{id:"localLeaderboardScreen","data-testid":"local-match-leaderboard",className:"mt-4 rounded-2xl bg-white/5 p-4",children:[ce.jsx("h2",{className:"mb-3 text-lg font-semibold",children:"本地多人平局 / 对局排行榜"}),ce.jsx("div",{className:"grid gap-2 text-sm",children:N.length===0?ce.jsx("p",{children:"尚未开始本地多人。"}):N.map((E,D)=>ce.jsxs("div",{className:"rounded-xl border border-white/10 px-3 py-2",children:["#",D+1," ",E.name," · ",E.totalStrokes," 杆 ",d.multiplayer.tiedPlayerIds.includes(E.id)?"（并列）":""]},E.id))})]})]})]})},n%2===0?"even":"odd")}Rb.createRoot(document.getElementById("root")).render(ce.jsx(an.StrictMode,{children:ce.jsx(Q3,{})}));
