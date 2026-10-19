(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function Xg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wg={exports:{}},au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=Symbol.for("react.transitional.element"),FS=Symbol.for("react.fragment");function qg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:BS,type:e,key:i,ref:t!==void 0?t:null,props:n}}au.Fragment=FS;au.jsx=qg;au.jsxs=qg;Wg.exports=au;var B=Wg.exports,Yg={exports:{}},Ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=Symbol.for("react.transitional.element"),HS=Symbol.for("react.portal"),GS=Symbol.for("react.fragment"),VS=Symbol.for("react.strict_mode"),kS=Symbol.for("react.profiler"),XS=Symbol.for("react.consumer"),WS=Symbol.for("react.context"),qS=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),Zg=Symbol.for("react.lazy"),KS=Symbol.for("react.activity"),hm=Symbol.iterator;function jS(e){return e===null||typeof e!="object"?null:(e=hm&&e[hm]||e["@@iterator"],typeof e=="function"?e:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,Qg={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Qg,this.updater=n||Kg}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jg(){}Jg.prototype=zr.prototype;function Ih(e,t,n){this.props=e,this.context=t,this.refs=Qg,this.updater=n||Kg}var Bh=Ih.prototype=new Jg;Bh.constructor=Ih;jg(Bh,zr.prototype);Bh.isPureReactComponent=!0;var pm=Array.isArray;function Kf(){}var Ee={H:null,A:null,T:null,S:null},$g=Object.prototype.hasOwnProperty;function Fh(e,t,n){var i=n.ref;return{$$typeof:zh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function QS(e,t){return Fh(e.type,t,e.props)}function Hh(e){return typeof e=="object"&&e!==null&&e.$$typeof===zh}function JS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mm=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JS(""+e.key):t.toString(36)}function $S(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Kf,Kf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function js(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case zh:case HS:r=!0;break;case Zg:return r=e._init,js(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Du(e,0):i,pm(a)?(n="",r!=null&&(n=r.replace(mm,"$&/")+"/"),js(a,t,n,"",function(c){return c})):a!=null&&(Hh(a)&&(a=QS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(mm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(pm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Du(i,l),r+=js(i,t,n,s,a);else if(l=jS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Du(i,l++),r+=js(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return js($S(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function fl(e,t,n){if(e==null)return e;var i=[],a=0;return js(e,i,"","",function(s){return t.call(n,s,a++)}),i}function ty(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ey={map:fl,forEach:function(e,t,n){fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fl(e,function(){t++}),t},toArray:function(e){return fl(e,function(t){return t})||[]},only:function(e){if(!Hh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=KS;Ft.Children=ey;Ft.Component=zr;Ft.Fragment=GS;Ft.Profiler=kS;Ft.PureComponent=Ih;Ft.StrictMode=VS;Ft.Suspense=YS;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ee.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=jg({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!$g.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Fh(e.type,a,i)};Ft.createContext=function(e){return e={$$typeof:WS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:XS,_context:e},e};Ft.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)$g.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Fh(e,s,a)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:qS,render:e}};Ft.isValidElement=Hh;Ft.lazy=function(e){return{$$typeof:Zg,_payload:{_status:-1,_result:e},_init:ty}};Ft.memo=function(e,t){return{$$typeof:ZS,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Ee.T,n={};Ee.T=n;try{var i=e(),a=Ee.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Kf,gm)}catch(s){gm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ee.T=t}};Ft.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Ft.use=function(e){return Ee.H.use(e)};Ft.useActionState=function(e,t,n){return Ee.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Ee.H.useCallback(e,t)};Ft.useContext=function(e){return Ee.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Ee.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Ee.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Ee.H.useEffectEvent(e)};Ft.useId=function(){return Ee.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Ee.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Ee.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Ee.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Ee.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Ee.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Ee.H.useReducer(e,t,n)};Ft.useRef=function(e){return Ee.H.useRef(e)};Ft.useState=function(e){return Ee.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Ee.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Ee.H.useTransition()};Ft.version="19.2.8";Yg.exports=Ft;var qe=Yg.exports;const ny=Xg(qe);var t_={exports:{}},su={},e_={exports:{}},n_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,P){var Z=O.length;O.push(P);t:for(;0<Z;){var et=Z-1>>>1,ot=O[et];if(0<a(ot,P))O[et]=P,O[Z]=ot,Z=et;else break t}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var P=O[0],Z=O.pop();if(Z!==P){O[0]=Z;t:for(var et=0,ot=O.length,dt=ot>>>1;et<dt;){var St=2*(et+1)-1,Wt=O[St],ee=St+1,kt=O[ee];if(0>a(Wt,Z))ee<ot&&0>a(kt,Wt)?(O[et]=kt,O[ee]=Z,et=ee):(O[et]=Wt,O[St]=Z,et=St);else if(ee<ot&&0>a(kt,Z))O[et]=kt,O[ee]=Z,et=ee;else break t}}return P}function a(O,P){var Z=O.sortIndex-P.sortIndex;return Z!==0?Z:O.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,S=!1,T=!1,_=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function v(O){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=O)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function b(O){if(T=!1,v(O),!S)if(n(l)!==null)S=!0,M||(M=!0,z());else{var P=n(c);P!==null&&k(b,P.startTime-O)}}var M=!1,R=-1,g=5,A=-1;function U(){return _?!0:!(e.unstable_now()-A<g)}function N(){if(_=!1,M){var O=e.unstable_now();A=O;var P=!0;try{t:{S=!1,T&&(T=!1,m(R),R=-1),h=!0;var Z=u;try{e:{for(v(O),p=n(l);p!==null&&!(p.expirationTime>O&&U());){var et=p.callback;if(typeof et=="function"){p.callback=null,u=p.priorityLevel;var ot=et(p.expirationTime<=O);if(O=e.unstable_now(),typeof ot=="function"){p.callback=ot,v(O),P=!0;break e}p===n(l)&&i(l),v(O)}else i(l);p=n(l)}if(p!==null)P=!0;else{var dt=n(c);dt!==null&&k(b,dt.startTime-O),P=!1}}break t}finally{p=null,u=Z,h=!1}P=void 0}}finally{P?z():M=!1}}}var z;if(typeof y=="function")z=function(){y(N)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,tt=J.port2;J.port1.onmessage=N,z=function(){tt.postMessage(null)}}else z=function(){f(N,0)};function k(O,P){R=f(function(){O(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(O){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var Z=u;u=P;try{return O()}finally{u=Z}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=u;u=O;try{return P()}finally{u=Z}},e.unstable_scheduleCallback=function(O,P,Z){var et=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?et+Z:et):Z=et,O){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=Z+ot,O={id:d++,callback:P,priorityLevel:O,startTime:Z,expirationTime:ot,sortIndex:-1},Z>et?(O.sortIndex=Z,t(c,O),n(l)===null&&O===n(c)&&(T?(m(R),R=-1):T=!0,k(b,Z-et))):(O.sortIndex=ot,t(l,O),S||h||(S=!0,M||(M=!0,z()))),O},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(O){var P=u;return function(){var Z=u;u=P;try{return O.apply(this,arguments)}finally{u=Z}}}})(n_);e_.exports=n_;var iy=e_.exports,i_={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=qe;function a_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ma(){}var _n={d:{f:ma,r:function(){throw Error(a_(522))},D:ma,C:ma,L:ma,m:ma,X:ma,S:ma,M:ma},p:0,findDOMNode:null},sy=Symbol.for("react.portal");function ry(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sy,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var go=ay.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ru(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_n;xn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(a_(299));return ry(e,t,null,n)};xn.flushSync=function(e){var t=go.T,n=_n.p;try{if(go.T=null,_n.p=2,e)return e()}finally{go.T=t,_n.p=n,_n.d.f()}};xn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,_n.d.C(e,t))};xn.prefetchDNS=function(e){typeof e=="string"&&_n.d.D(e)};xn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ru(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?_n.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&_n.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};xn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ru(t.as,t.crossOrigin);_n.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&_n.d.M(e)};xn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ru(n,t.crossOrigin);_n.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};xn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ru(t.as,t.crossOrigin);_n.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else _n.d.m(e)};xn.requestFormReset=function(e){_n.d.r(e)};xn.unstable_batchedUpdates=function(e,t){return e(t)};xn.useFormState=function(e,t,n){return go.H.useFormState(e,t,n)};xn.useFormStatus=function(){return go.H.useHostTransitionStatus()};xn.version="19.2.8";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(e){console.error(e)}}s_(),i_.exports=xn;var oy=i_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=iy,r_=qe,ly=oy;function it(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _m(e){if(Zo(e)!==e)throw Error(it(188))}function cy(e){var t=e.alternate;if(!t){if(t=Zo(e),t===null)throw Error(it(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return _m(a),e;if(s===i)return _m(a),t;s=s.sibling}throw Error(it(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(it(189))}}if(n.alternate!==i)throw Error(it(190))}if(n.tag!==3)throw Error(it(188));return n.stateNode.current===n?e:t}function u_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u_(e),t!==null)return t;e=e.sibling}return null}var be=Object.assign,uy=Symbol.for("react.element"),dl=Symbol.for("react.transitional.element"),lo=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),f_=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),d_=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),Ma=Symbol.for("react.lazy"),$f=Symbol.for("react.activity"),fy=Symbol.for("react.memo_cache_sentinel"),vm=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=vm&&e[vm]||e["@@iterator"],typeof e=="function"?e:null)}var dy=Symbol.for("react.client.reference");function td(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $s:return"Fragment";case jf:return"Profiler";case f_:return"StrictMode";case Qf:return"Suspense";case Jf:return"SuspenseList";case $f:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case lo:return"Portal";case Zi:return e.displayName||"Context";case d_:return(e._context.displayName||"Context")+".Consumer";case Gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vh:return t=e.displayName||null,t!==null?t:td(e.type)||"Memo";case Ma:t=e._payload,e=e._init;try{return td(e(t))}catch{}}return null}var co=Array.isArray,Pt=r_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=ly.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hs={pending:!1,data:null,method:null,action:null},ed=[],tr=-1;function Ni(e){return{current:e}}function nn(e){0>tr||(e.current=ed[tr],ed[tr]=null,tr--)}function Se(e,t){tr++,ed[tr]=e.current,e.current=t}var Ai=Ni(null),Do=Ni(null),Pa=Ni(null),Sc=Ni(null);function yc(e,t){switch(Se(Pa,t),Se(Do,e),Se(Ai,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?b0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=b0(t),e=Nx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nn(Ai),Se(Ai,e)}function yr(){nn(Ai),nn(Do),nn(Pa)}function nd(e){e.memoizedState!==null&&Se(Sc,e);var t=Ai.current,n=Nx(t,e.type);t!==n&&(Se(Do,e),Se(Ai,n))}function Mc(e){Do.current===e&&(nn(Ai),nn(Do)),Sc.current===e&&(nn(Sc),Go._currentValue=hs)}var Uu,xm;function as(e){if(Uu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uu=t&&t[1]||"",xm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uu+e+xm}var Nu=!1;function Lu(e,t){if(!e||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(e,[],p)}else{try{p.call()}catch(h){u=h}e.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?as(n):""}function hy(e,t){switch(e.tag){case 26:case 27:case 5:return as(e.type);case 16:return as("Lazy");case 13:return e.child!==t&&t!==null?as("Suspense Fallback"):as("Suspense");case 19:return as("SuspenseList");case 0:case 15:return Lu(e.type,!1);case 11:return Lu(e.type.render,!1);case 1:return Lu(e.type,!0);case 31:return as("Activity");default:return""}}function Sm(e){try{var t="",n=null;do t+=hy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var id=Object.prototype.hasOwnProperty,kh=je.unstable_scheduleCallback,Ou=je.unstable_cancelCallback,py=je.unstable_shouldYield,my=je.unstable_requestPaint,Fn=je.unstable_now,gy=je.unstable_getCurrentPriorityLevel,h_=je.unstable_ImmediatePriority,p_=je.unstable_UserBlockingPriority,Ec=je.unstable_NormalPriority,_y=je.unstable_LowPriority,m_=je.unstable_IdlePriority,vy=je.log,xy=je.unstable_setDisableYieldValue,Ko=null,Hn=null;function wa(e){if(typeof vy=="function"&&xy(e),Hn&&typeof Hn.setStrictMode=="function")try{Hn.setStrictMode(Ko,e)}catch{}}var Gn=Math.clz32?Math.clz32:My,Sy=Math.log,yy=Math.LN2;function My(e){return e>>>=0,e===0?32:31-(Sy(e)/yy|0)|0}var hl=256,pl=262144,ml=4194304;function ss(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ou(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ss(i):(r&=o,r!==0?a=ss(r):n||(n=o&~e,n!==0&&(a=ss(n))))):(o=i&~s,o!==0?a=ss(o):r!==0?a=ss(r):n||(n=i&~e,n!==0&&(a=ss(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ey(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(){var e=ml;return ml<<=1,!(ml&62914560)&&(ml=4194304),e}function Pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function by(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Gn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&__(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function __(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Gn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function v_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Gn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function x_(e,t){var n=t&-t;return n=n&42?1:Xh(n),n&(e.suspendedLanes|t)?0:n}function Xh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function S_(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:kx(e.type))}function ym(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var ja=Math.random().toString(36).slice(2),rn="__reactFiber$"+ja,Rn="__reactProps$"+ja,Ir="__reactContainer$"+ja,ad="__reactEvents$"+ja,Ty="__reactListeners$"+ja,Ay="__reactHandles$"+ja,Mm="__reactResources$"+ja,Jo="__reactMarker$"+ja;function qh(e){delete e[rn],delete e[Rn],delete e[ad],delete e[Ty],delete e[Ay]}function er(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ir]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=w0(e);e!==null;){if(n=e[rn])return n;e=w0(e)}return t}e=n,n=e.parentNode}return null}function Br(e){if(e=e[rn]||e[Ir]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function uo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(it(33))}function fr(e){var t=e[Mm];return t||(t=e[Mm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function en(e){e[Jo]=!0}var y_=new Set,M_={};function Ts(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(M_[e]=t,e=0;e<t.length;e++)y_.add(t[e])}var Ry=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Em={},bm={};function Cy(e){return id.call(bm,e)?!0:id.call(Em,e)?!1:Ry.test(e)?bm[e]=!0:(Em[e]=!0,!1)}function Jl(e,t,n){if(Cy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Oi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function E_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sd(e){if(!e._valueTracker){var t=E_(e)?"checked":"value";e._valueTracker=wy(e,t,""+e[t])}}function b_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=E_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function bc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dy=/[\n"\\]/g;function ti(e){return e.replace(Dy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jn(t)):e.value!==""+jn(t)&&(e.value=""+jn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?od(e,r,jn(t)):n!=null?od(e,r,jn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+jn(o):e.removeAttribute("name")}function T_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){sd(e);return}n=n!=null?""+jn(n):"",t=t!=null?""+jn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),sd(e)}function od(e,t,n){t==="number"&&bc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function dr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function A_(e,t,n){if(t!=null&&(t=""+jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jn(n):""}function R_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(it(92));if(co(i)){if(1<i.length)throw Error(it(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=jn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),sd(e)}function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Uy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function C_(e,t,n){if(t!=null&&typeof t!="object")throw Error(it(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Tm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Tm(e,s,t[s])}function Yh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return Ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var ld=null;function Zh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,hr=null;function Am(e){var t=Br(e);if(t&&(e=t.stateNode)){var n=e[Rn]||null;t:switch(e=t.stateNode,t.type){case"input":if(rd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Rn]||null;if(!a)throw Error(it(90));rd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&b_(i)}break t;case"textarea":A_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}}}var zu=!1;function w_(e,t,n){if(zu)return e(t,n);zu=!0;try{var i=e(t);return i}finally{if(zu=!1,(nr!==null||hr!==null)&&(xu(),nr&&(t=nr,e=hr,hr=nr=null,Am(t),e)))for(t=0;t<e.length;t++)Am(e[t])}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(it(231,t,typeof n));return n}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=!1;if(aa)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){cd=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{cd=!1}var Da=null,Kh=null,tc=null;function D_(){if(tc)return tc;var e,t=Kh,n=t.length,i,a="value"in Da?Da.value:Da.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return tc=a.slice(e,1<i?1-i:void 0)}function ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Rm(){return!1}function Cn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Rm,this.isPropagationStopped=Rm,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=Cn(As),$o=be({},As,{view:0,detail:0}),Oy=Cn($o),Iu,Bu,Kr,cu=be({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Iu=e.screenX-Kr.screenX,Bu=e.screenY-Kr.screenY):Bu=Iu=0,Kr=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),Cm=Cn(cu),Py=be({},cu,{dataTransfer:0}),zy=Cn(Py),Iy=be({},$o,{relatedTarget:0}),Fu=Cn(Iy),By=be({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Cn(By),Hy=be({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Cn(Hy),Vy=be({},As,{data:0}),wm=Cn(Vy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function jh(){return qy}var Yy=be({},$o,{key:function(e){if(e.key){var t=ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(e){return e.type==="keypress"?ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zy=Cn(Yy),Ky=be({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Cn(Ky),jy=be({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),Qy=Cn(jy),Jy=be({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=Cn(Jy),tM=be({},cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eM=Cn(tM),nM=be({},As,{newState:0,oldState:0}),iM=Cn(nM),aM=[9,13,27,32],Qh=aa&&"CompositionEvent"in window,_o=null;aa&&"documentMode"in document&&(_o=document.documentMode);var sM=aa&&"TextEvent"in window&&!_o,U_=aa&&(!Qh||_o&&8<_o&&11>=_o),Um=String.fromCharCode(32),Nm=!1;function N_(e,t){switch(e){case"keyup":return aM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function rM(e,t){switch(e){case"compositionend":return L_(t);case"keypress":return t.which!==32?null:(Nm=!0,Um);case"textInput":return e=t.data,e===Um&&Nm?null:e;default:return null}}function oM(e,t){if(ir)return e==="compositionend"||!Qh&&N_(e,t)?(e=D_(),tc=Kh=Da=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return U_&&t.locale!=="ko"?null:t.data;default:return null}}var lM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lM[e.type]:t==="textarea"}function O_(e,t,n,i){nr?hr?hr.push(i):hr=[i]:nr=i,t=Vc(t,"onChange"),0<t.length&&(n=new lu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var vo=null,No=null;function cM(e){wx(e,0)}function uu(e){var t=uo(e);if(b_(t))return e}function Om(e,t){if(e==="change")return t}var P_=!1;if(aa){var Hu;if(aa){var Gu="oninput"in document;if(!Gu){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Gu=typeof Pm.oninput=="function"}Hu=Gu}else Hu=!1;P_=Hu&&(!document.documentMode||9<document.documentMode)}function zm(){vo&&(vo.detachEvent("onpropertychange",z_),No=vo=null)}function z_(e){if(e.propertyName==="value"&&uu(No)){var t=[];O_(t,No,e,Zh(e)),w_(cM,t)}}function uM(e,t,n){e==="focusin"?(zm(),vo=t,No=n,vo.attachEvent("onpropertychange",z_)):e==="focusout"&&zm()}function fM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(No)}function dM(e,t){if(e==="click")return uu(t)}function hM(e,t){if(e==="input"||e==="change")return uu(t)}function pM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:pM;function Lo(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!id.call(t,a)||!kn(e[a],t[a]))return!1}return!0}function Im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bm(e,t){var n=Im(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Im(n)}}function I_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?I_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function B_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bc(e.document)}return t}function Jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mM=aa&&"documentMode"in document&&11>=document.documentMode,ar=null,ud=null,xo=null,fd=!1;function Fm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||ar==null||ar!==bc(i)||(i=ar,"selectionStart"in i&&Jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&Lo(xo,i)||(xo=i,i=Vc(ud,"onSelect"),0<i.length&&(t=new lu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ar)))}function $a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Vu={},F_={};aa&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Rs(e){if(Vu[e])return Vu[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in F_)return Vu[e]=t[n];return e}var H_=Rs("animationend"),G_=Rs("animationiteration"),V_=Rs("animationstart"),gM=Rs("transitionrun"),_M=Rs("transitionstart"),vM=Rs("transitioncancel"),k_=Rs("transitionend"),X_=new Map,dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dd.push("scrollEnd");function hi(e,t){X_.set(e,t),Ts(t,[e])}var Tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],rr=0,$h=0;function fu(){for(var e=rr,t=$h=rr=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var a=Zn[t];Zn[t++]=null;var s=Zn[t];if(Zn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&W_(n,a,s)}}function du(e,t,n,i){Zn[rr++]=e,Zn[rr++]=t,Zn[rr++]=n,Zn[rr++]=i,$h|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function tp(e,t,n,i){return du(e,t,n,i),Ac(e)}function Cs(e,t){return du(e,null,null,t),Ac(e)}function W_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Gn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Ac(e){if(50<Co)throw Co=0,Ld=null,Error(it(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var or={};function xM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,i){return new xM(e,t,n,i)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function q_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")ep(e)&&(r=1);else if(typeof e=="string")r=bE(e,n,Ai.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case $f:return e=zn(31,n,t,a),e.elementType=$f,e.lanes=s,e;case $s:return ps(n.children,a,s,t);case f_:r=8,a|=24;break;case jf:return e=zn(12,n,t,a|2),e.elementType=jf,e.lanes=s,e;case Qf:return e=zn(13,n,t,a),e.elementType=Qf,e.lanes=s,e;case Jf:return e=zn(19,n,t,a),e.elementType=Jf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zi:r=10;break t;case d_:r=9;break t;case Gh:r=11;break t;case Vh:r=14;break t;case Ma:r=16,i=null;break t}r=29,n=Error(it(130,e===null?"null":typeof e,"")),i=null}return t=zn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ps(e,t,n,i){return e=zn(7,e,i,t),e.lanes=n,e}function ku(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function Y_(e){var t=zn(18,null,null,0);return t.stateNode=e,t}function Xu(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hm=new WeakMap;function ei(e,t){if(typeof e=="object"&&e!==null){var n=Hm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Sm(t)},Hm.set(e,t),t)}return{value:e,source:t,stack:Sm(t)}}var lr=[],cr=0,Rc=null,Oo=0,Qn=[],Jn=0,Xa=null,yi=1,Mi="";function qi(e,t){lr[cr++]=Oo,lr[cr++]=Rc,Rc=e,Oo=t}function Z_(e,t,n){Qn[Jn++]=yi,Qn[Jn++]=Mi,Qn[Jn++]=Xa,Xa=e;var i=yi;e=Mi;var a=32-Gn(i)-1;i&=~(1<<a),n+=1;var s=32-Gn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,yi=1<<32-Gn(t)+a|n<<a|i,Mi=s+e}else yi=1<<s|n<<a|i,Mi=e}function np(e){e.return!==null&&(qi(e,1),Z_(e,1,0))}function ip(e){for(;e===Rc;)Rc=lr[--cr],lr[cr]=null,Oo=lr[--cr],lr[cr]=null;for(;e===Xa;)Xa=Qn[--Jn],Qn[Jn]=null,Mi=Qn[--Jn],Qn[Jn]=null,yi=Qn[--Jn],Qn[Jn]=null}function K_(e,t){Qn[Jn++]=yi,Qn[Jn++]=Mi,Qn[Jn++]=Xa,yi=t.id,Mi=t.overflow,Xa=e}var on=null,Me=null,te=!1,za=null,ni=!1,hd=Error(it(519));function Wa(e){var t=Error(it(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(ei(t,e)),hd}function Gm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[Rn]=i,n){case"dialog":Zt("cancel",t),Zt("close",t);break;case"iframe":case"object":case"embed":Zt("load",t);break;case"video":case"audio":for(n=0;n<Fo.length;n++)Zt(Fo[n],t);break;case"source":Zt("error",t);break;case"img":case"image":case"link":Zt("error",t),Zt("load",t);break;case"details":Zt("toggle",t);break;case"input":Zt("invalid",t),T_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Zt("invalid",t);break;case"textarea":Zt("invalid",t),R_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ux(t.textContent,n)?(i.popover!=null&&(Zt("beforetoggle",t),Zt("toggle",t)),i.onScroll!=null&&Zt("scroll",t),i.onScrollEnd!=null&&Zt("scrollend",t),i.onClick!=null&&(t.onclick=Ki),t=!0):t=!1,t||Wa(e,!0)}function Vm(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:on=on.return}}function Ls(e){if(e!==on)return!1;if(!te)return Vm(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Bd(e.type,e.memoizedProps)),n=!n),n&&Me&&Wa(e),Vm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));Me=C0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));Me=C0(e)}else t===27?(t=Me,Qa(e.type)?(e=Vd,Vd=null,Me=e):Me=t):Me=on?ai(e.stateNode.nextSibling):null;return!0}function vs(){Me=on=null,te=!1}function Wu(){var e=za;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),za=null),e}function Po(e){za===null?za=[e]:za.push(e)}var pd=Ni(null),ws=null,ji=null;function ba(e,t,n){Se(pd,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=pd.current,nn(pd)}function md(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function gd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),md(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(it(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),md(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Fr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(it(387));if(r=r.memoizedProps,r!==null){var o=a.type;kn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Sc.current){if(r=a.alternate,r===null)throw Error(it(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}a=a.return}e!==null&&gd(t,e,n,i),t.flags|=262144}function Cc(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){ws=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return j_(ws,e)}function vl(e,t){return ws===null&&xs(e),j_(e,t)}function j_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ji===null){if(e===null)throw Error(it(308));ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ji=ji.next=t;return n}var SM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},yM=je.unstable_scheduleCallback,MM=je.unstable_NormalPriority,ke={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ap(){return{controller:new SM,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&yM(MM,function(){e.controller.abort()})}var So=null,_d=0,br=0,pr=null;function EM(e,t){if(So===null){var n=So=[];_d=0,br=wp(),pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return _d++,t.then(km,km),t}function km(){if(--_d===0&&So!==null){pr!==null&&(pr.status="fulfilled");var e=So;So=null,br=0,pr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Xm=Pt.S;Pt.S=function(e,t){ux=Fn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&EM(e,t),Xm!==null&&Xm(e,t)};var ms=Ni(null);function sp(){var e=ms.current;return e!==null?e:_e.pooledCache}function ic(e,t){t===null?Se(ms,ms.current):Se(ms,t.pool)}function Q_(){var e=sp();return e===null?null:{parent:ke._currentValue,pool:e}}var Hr=Error(it(460)),rp=Error(it(474)),hu=Error(it(542)),wc={then:function(){}};function Wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function J_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ki,Ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ym(e),e;default:if(typeof t.status=="string")t.then(Ki,Ki);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(it(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ym(e),e}throw gs=t,Hr}}function rs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(gs=n,Hr):n}}var gs=null;function qm(){if(gs===null)throw Error(it(459));var e=gs;return gs=null,e}function Ym(e){if(e===Hr||e===hu)throw Error(it(483))}var mr=null,zo=0;function xl(e){var t=zo;return zo+=1,mr===null&&(mr=[]),J_(mr,e,t)}function jr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sl(e,t){throw t.$$typeof===uy?Error(it(525)):(e=Object.prototype.toString.call(t),Error(it(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $_(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=$i(f,m),f.index=0,f.sibling=null,f}function s(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=67108866,m):y):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,y,v){return m===null||m.tag!==6?(m=ku(y,f.mode,v),m.return=f,m):(m=a(m,y),m.return=f,m)}function l(f,m,y,v){var b=y.type;return b===$s?d(f,m,y.props.children,v,y.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ma&&rs(b)===m.type)?(m=a(m,y.props),jr(m,y),m.return=f,m):(m=nc(y.type,y.key,y.props,null,f.mode,v),jr(m,y),m.return=f,m)}function c(f,m,y,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Xu(y,f.mode,v),m.return=f,m):(m=a(m,y.children||[]),m.return=f,m)}function d(f,m,y,v,b){return m===null||m.tag!==7?(m=ps(y,f.mode,v,b),m.return=f,m):(m=a(m,y),m.return=f,m)}function p(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ku(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dl:return y=nc(m.type,m.key,m.props,null,f.mode,y),jr(y,m),y.return=f,y;case lo:return m=Xu(m,f.mode,y),m.return=f,m;case Ma:return m=rs(m),p(f,m,y)}if(co(m)||Yr(m))return m=ps(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return p(f,xl(m),y);if(m.$$typeof===Zi)return p(f,vl(f,m),y);Sl(f,m)}return null}function u(f,m,y,v){var b=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return b!==null?null:o(f,m,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return y.key===b?l(f,m,y,v):null;case lo:return y.key===b?c(f,m,y,v):null;case Ma:return y=rs(y),u(f,m,y,v)}if(co(y)||Yr(y))return b!==null?null:d(f,m,y,v,null);if(typeof y.then=="function")return u(f,m,xl(y),v);if(y.$$typeof===Zi)return u(f,m,vl(f,y),v);Sl(f,y)}return null}function h(f,m,y,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(y)||null,o(m,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return f=f.get(v.key===null?y:v.key)||null,l(m,f,v,b);case lo:return f=f.get(v.key===null?y:v.key)||null,c(m,f,v,b);case Ma:return v=rs(v),h(f,m,y,v,b)}if(co(v)||Yr(v))return f=f.get(y)||null,d(m,f,v,b,null);if(typeof v.then=="function")return h(f,m,y,xl(v),b);if(v.$$typeof===Zi)return h(f,m,y,vl(m,v),b);Sl(m,v)}return null}function S(f,m,y,v){for(var b=null,M=null,R=m,g=m=0,A=null;R!==null&&g<y.length;g++){R.index>g?(A=R,R=null):A=R.sibling;var U=u(f,R,y[g],v);if(U===null){R===null&&(R=A);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,g),M===null?b=U:M.sibling=U,M=U,R=A}if(g===y.length)return n(f,R),te&&qi(f,g),b;if(R===null){for(;g<y.length;g++)R=p(f,y[g],v),R!==null&&(m=s(R,m,g),M===null?b=R:M.sibling=R,M=R);return te&&qi(f,g),b}for(R=i(R);g<y.length;g++)A=h(R,f,g,y[g],v),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?g:A.key),m=s(A,m,g),M===null?b=A:M.sibling=A,M=A);return e&&R.forEach(function(N){return t(f,N)}),te&&qi(f,g),b}function T(f,m,y,v){if(y==null)throw Error(it(151));for(var b=null,M=null,R=m,g=m=0,A=null,U=y.next();R!==null&&!U.done;g++,U=y.next()){R.index>g?(A=R,R=null):A=R.sibling;var N=u(f,R,U.value,v);if(N===null){R===null&&(R=A);break}e&&R&&N.alternate===null&&t(f,R),m=s(N,m,g),M===null?b=N:M.sibling=N,M=N,R=A}if(U.done)return n(f,R),te&&qi(f,g),b;if(R===null){for(;!U.done;g++,U=y.next())U=p(f,U.value,v),U!==null&&(m=s(U,m,g),M===null?b=U:M.sibling=U,M=U);return te&&qi(f,g),b}for(R=i(R);!U.done;g++,U=y.next())U=h(R,f,g,U.value,v),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?g:U.key),m=s(U,m,g),M===null?b=U:M.sibling=U,M=U);return e&&R.forEach(function(z){return t(f,z)}),te&&qi(f,g),b}function _(f,m,y,v){if(typeof y=="object"&&y!==null&&y.type===$s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:t:{for(var b=y.key;m!==null;){if(m.key===b){if(b=y.type,b===$s){if(m.tag===7){n(f,m.sibling),v=a(m,y.props.children),v.return=f,f=v;break t}}else if(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ma&&rs(b)===m.type){n(f,m.sibling),v=a(m,y.props),jr(v,y),v.return=f,f=v;break t}n(f,m);break}else t(f,m);m=m.sibling}y.type===$s?(v=ps(y.props.children,f.mode,v,y.key),v.return=f,f=v):(v=nc(y.type,y.key,y.props,null,f.mode,v),jr(v,y),v.return=f,f=v)}return r(f);case lo:t:{for(b=y.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),v=a(m,y.children||[]),v.return=f,f=v;break t}else{n(f,m);break}else t(f,m);m=m.sibling}v=Xu(y,f.mode,v),v.return=f,f=v}return r(f);case Ma:return y=rs(y),_(f,m,y,v)}if(co(y))return S(f,m,y,v);if(Yr(y)){if(b=Yr(y),typeof b!="function")throw Error(it(150));return y=b.call(y),T(f,m,y,v)}if(typeof y.then=="function")return _(f,m,xl(y),v);if(y.$$typeof===Zi)return _(f,m,vl(f,y),v);Sl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),v=a(m,y),v.return=f,f=v):(n(f,m),v=ku(y,f.mode,v),v.return=f,f=v),r(f)):n(f,m)}return function(f,m,y,v){try{zo=0;var b=_(f,m,y,v);return mr=null,b}catch(R){if(R===Hr||R===hu)throw R;var M=zn(29,R,null,f.mode);return M.lanes=v,M.return=f,M}finally{}}}var Ss=$_(!0),tv=$_(!1),Ea=!1;function op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Ac(e),W_(e,null,n),t}return du(e,i,t,n),Ac(e)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,v_(e,n)}}function qu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xd=!1;function Mo(){if(xd){var e=pr;if(e!==null)throw e}}function Eo(e,t,n,i){xd=!1;var a=e.updateQueue;Ea=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(Qt&u)===u:(i&u)===u){u!==0&&u===br&&(xd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=e,T=o;u=t;var _=n;switch(T.tag){case 1:if(S=T.payload,typeof S=="function"){p=S.call(_,p,u);break t}p=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,u=typeof S=="function"?S.call(_,p,u):S,u==null)break t;p=be({},p,u);break t;case 2:Ea=!0}}u=o.callback,u!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Ya|=r,e.lanes=r,e.memoizedState=p}}function ev(e,t){if(typeof e!="function")throw Error(it(191,e));e.call(t)}function nv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ev(n[e],t)}var Tr=Ni(null),Dc=Ni(0);function Zm(e,t){e=la,Se(Dc,e),Se(Tr,t),la=e|t.baseLanes}function Sd(){Se(Dc,la),Se(Tr,Tr.current)}function lp(){la=Dc.current,nn(Tr),nn(Dc)}var Xn=Ni(null),ii=null;function Ta(e){var t=e.alternate;Se(ze,ze.current&1),Se(Xn,e),ii===null&&(t===null||Tr.current!==null||t.memoizedState!==null)&&(ii=e)}function yd(e){Se(ze,ze.current),Se(Xn,e),ii===null&&(ii=e)}function iv(e){e.tag===22?(Se(ze,ze.current),Se(Xn,e),ii===null&&(ii=e)):Aa()}function Aa(){Se(ze,ze.current),Se(Xn,Xn.current)}function Pn(e){nn(Xn),ii===e&&(ii=null),nn(ze)}var ze=Ni(0);function Uc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hd(n)||Gd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=0,Gt=null,pe=null,Ge=null,Nc=!1,gr=!1,ys=!1,Lc=0,Io=0,_r=null,TM=0;function Ne(){throw Error(it(321))}function cp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function up(e,t,n,i,a,s){return sa=s,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?Ov:yp,ys=!1,s=n(i,a),ys=!1,gr&&(s=sv(t,n,i,a)),av(e),s}function av(e){Pt.H=Bo;var t=pe!==null&&pe.next!==null;if(sa=0,Ge=pe=Gt=null,Nc=!1,Io=0,_r=null,t)throw Error(it(300));e===null||Xe||(e=e.dependencies,e!==null&&Cc(e)&&(Xe=!0))}function sv(e,t,n,i){Gt=e;var a=0;do{if(gr&&(_r=null),Io=0,gr=!1,25<=a)throw Error(it(301));if(a+=1,Ge=pe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Pt.H=Pv,s=t(n,i)}while(gr);return s}function AM(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?el(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(Gt.flags|=1024),t}function fp(){var e=Lc!==0;return Lc=0,e}function dp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function hp(e){if(Nc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nc=!1}sa=0,Ge=pe=Gt=null,gr=!1,Io=Lc=0,_r=null}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Gt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ie(){if(pe===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ge===null?Gt.memoizedState:Ge.next;if(t!==null)Ge=t,pe=e;else{if(e===null)throw Gt.alternate===null?Error(it(467)):Error(it(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ge===null?Gt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var t=Io;return Io+=1,_r===null&&(_r=[]),e=J_(_r,e,t),t=Gt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?Ov:yp),e}function mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===Zi)return ln(e)}throw Error(it(438,String(e)))}function pp(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pu(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=fy;return t.index++,n}function ra(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=Ie();return mp(t,pe,e)}function mp(e,t,n){var i=e.queue;if(i===null)throw Error(it(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Qt&p)===p:(sa&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===br&&(d=!0);else if((sa&u)===u){c=c.next,u===br&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Gt.lanes|=u,Ya|=u;p=c.action,ys&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Gt.lanes|=p,Ya|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!kn(s,e.memoizedState)&&(Xe=!0,d&&(n=pr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Yu(e){var t=Ie(),n=t.queue;if(n===null)throw Error(it(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);kn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function rv(e,t,n){var i=Gt,a=Ie(),s=te;if(s){if(n===void 0)throw Error(it(407));n=n()}else n=t();var r=!kn((pe||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,gp(cv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Ar(9,{destroy:void 0},lv.bind(null,i,a,n,t),null),_e===null)throw Error(it(349));s||sa&127||ov(i,t,n)}return n}function ov(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=pu(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lv(e,t,n,i){t.value=n,t.getSnapshot=i,uv(t)&&fv(e)}function cv(e,t,n){return n(function(){uv(t)&&fv(e)})}function uv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function fv(e){var t=Cs(e,2);t!==null&&Tn(t,e,2)}function Md(e){var t=gn();if(typeof e=="function"){var n=e;if(e=n(),ys){wa(!0);try{n()}finally{wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function dv(e,t,n,i){return e.baseState=n,mp(e,pe,typeof i=="function"?i:ra)}function RM(e,t,n,i,a){if(_u(e))throw Error(it(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Pt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,hv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function hv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Pt.T,r={};Pt.T=r;try{var o=n(a,i),l=Pt.S;l!==null&&l(r,o),Km(e,t,o)}catch(c){Ed(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Pt.T=s}}else try{s=n(a,i),Km(e,t,s)}catch(c){Ed(e,t,c)}}function Km(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){jm(e,t,i)},function(i){return Ed(e,t,i)}):jm(e,t,n)}function jm(e,t,n){t.status="fulfilled",t.value=n,pv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hv(e,n)))}function Ed(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,pv(t),t=t.next;while(t!==i)}e.action=null}function pv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mv(e,t){return t}function Qm(e,t){if(te){var n=_e.formState;if(n!==null){t:{var i=Gt;if(te){if(Me){e:{for(var a=Me,s=ni;a.nodeType!==8;){if(!s){a=null;break e}if(a=ai(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Me=ai(a.nextSibling),i=a.data==="F!";break t}}Wa(i)}i=!1}i&&(t=n[0])}}return n=gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mv,lastRenderedState:t},n.queue=i,n=Uv.bind(null,Gt,i),i.dispatch=n,i=Md(!1),s=Sp.bind(null,Gt,!1,i.queue),i=gn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=RM.bind(null,Gt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jm(e){var t=Ie();return gv(t,pe,e)}function gv(e,t,n){if(t=mp(e,t,mv)[0],e=ac(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=el(t)}catch(r){throw r===Hr?hu:r}else i=t;t=Ie();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,Ar(9,{destroy:void 0},CM.bind(null,a,n),null)),[i,s,e]}function CM(e,t){e.action=t}function $m(e){var t=Ie(),n=pe;if(n!==null)return gv(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ar(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=pu(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function _v(){return Ie().memoizedState}function sc(e,t,n,i){var a=gn();Gt.flags|=e,a.memoizedState=Ar(1|t,{destroy:void 0},n,i===void 0?null:i)}function gu(e,t,n,i){var a=Ie();i=i===void 0?null:i;var s=a.memoizedState.inst;pe!==null&&i!==null&&cp(i,pe.memoizedState.deps)?a.memoizedState=Ar(t,s,n,i):(Gt.flags|=e,a.memoizedState=Ar(1|t,s,n,i))}function t0(e,t){sc(8390656,8,e,t)}function gp(e,t){gu(2048,8,e,t)}function wM(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=pu(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vv(e){var t=Ie().memoizedState;return wM({ref:t,nextImpl:e}),function(){if(se&2)throw Error(it(440));return t.impl.apply(void 0,arguments)}}function xv(e,t){return gu(4,2,e,t)}function Sv(e,t){return gu(4,4,e,t)}function yv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mv(e,t,n){n=n!=null?n.concat([e]):null,gu(4,4,yv.bind(null,t,e),n)}function _p(){}function Ev(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&cp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function bv(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&cp(t,i[1]))return i[0];if(i=e(),ys){wa(!0);try{e()}finally{wa(!1)}}return n.memoizedState=[i,t],i}function vp(e,t,n){return n===void 0||sa&1073741824&&!(Qt&261930)?e.memoizedState=t:(e.memoizedState=n,e=dx(),Gt.lanes|=e,Ya|=e,n)}function Tv(e,t,n,i){return kn(n,t)?n:Tr.current!==null?(e=vp(e,n,i),kn(e,t)||(Xe=!0),e):!(sa&42)||sa&1073741824&&!(Qt&261930)?(Xe=!0,e.memoizedState=n):(e=dx(),Gt.lanes|=e,Ya|=e,t)}function Av(e,t,n,i,a){var s=re.p;re.p=s!==0&&8>s?s:8;var r=Pt.T,o={};Pt.T=o,Sp(e,!1,t,n);try{var l=a(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=bM(l,i);bo(e,t,d,Vn(e))}else bo(e,t,i,Vn(e))}catch(p){bo(e,t,{then:function(){},status:"rejected",reason:p},Vn())}finally{re.p=s,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function DM(){}function bd(e,t,n,i){if(e.tag!==5)throw Error(it(476));var a=Rv(e).queue;Av(e,a,t,hs,n===null?DM:function(){return Cv(e),n(i)})}function Rv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:hs,baseState:hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:hs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cv(e){var t=Rv(e);t.next===null&&(t=e.alternate.memoizedState),bo(e,t.next.queue,{},Vn())}function xp(){return ln(Go)}function wv(){return Ie().memoizedState}function Dv(){return Ie().memoizedState}function UM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=Ia(n);var i=Ba(t,e,n);i!==null&&(Tn(i,t,n),yo(i,t,n)),t={cache:ap()},e.payload=t;return}t=t.return}}function NM(e,t,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e)?Nv(t,n):(n=tp(e,t,n,i),n!==null&&(Tn(n,e,i),Lv(n,t,i)))}function Uv(e,t,n){var i=Vn();bo(e,t,n,i)}function bo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Nv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,kn(o,r))return du(e,t,a,0),_e===null&&fu(),!1}catch{}finally{}if(n=tp(e,t,a,i),n!==null)return Tn(n,e,i),Lv(n,t,i),!0}return!1}function Sp(e,t,n,i){if(i={lane:2,revertLane:wp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},_u(e)){if(t)throw Error(it(479))}else t=tp(e,n,i,2),t!==null&&Tn(t,e,2)}function _u(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function Nv(e,t){gr=Nc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,v_(e,n)}}var Bo={readContext:ln,use:mu,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Bo.useEffectEvent=Ne;var Ov={readContext:ln,use:mu,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:t0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sc(4194308,4,yv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var n=gn();t=t===void 0?null:t;var i=e();if(ys){wa(!0);try{e()}finally{wa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=gn();if(n!==void 0){var a=n(t);if(ys){wa(!0);try{n(t)}finally{wa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=NM.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:function(e){e=Md(e);var t=e.queue,n=Uv.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_p,useDeferredValue:function(e,t){var n=gn();return vp(n,e,t)},useTransition:function(){var e=Md(!1);return e=Av.bind(null,Gt,e.queue,!0,!1),gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,a=gn();if(te){if(n===void 0)throw Error(it(407));n=n()}else{if(n=t(),_e===null)throw Error(it(349));Qt&127||ov(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,t0(cv.bind(null,i,s,e),[e]),i.flags|=2048,Ar(9,{destroy:void 0},lv.bind(null,i,s,n,t),null),n},useId:function(){var e=gn(),t=_e.identifierPrefix;if(te){var n=Mi,i=yi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=TM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xp,useFormState:Qm,useActionState:Qm,useOptimistic:function(e){var t=gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sp.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:pp,useCacheRefresh:function(){return gn().memoizedState=UM.bind(null,Gt)},useEffectEvent:function(e){var t=gn(),n={impl:e};return t.memoizedState=n,function(){if(se&2)throw Error(it(440));return n.impl.apply(void 0,arguments)}}},yp={readContext:ln,use:mu,useCallback:Ev,useContext:ln,useEffect:gp,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:bv,useReducer:ac,useRef:_v,useState:function(){return ac(ra)},useDebugValue:_p,useDeferredValue:function(e,t){var n=Ie();return Tv(n,pe.memoizedState,e,t)},useTransition:function(){var e=ac(ra)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:rv,useId:wv,useHostTransitionStatus:xp,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,t){var n=Ie();return dv(n,pe,e,t)},useMemoCache:pp,useCacheRefresh:Dv};yp.useEffectEvent=vv;var Pv={readContext:ln,use:mu,useCallback:Ev,useContext:ln,useEffect:gp,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:bv,useReducer:Yu,useRef:_v,useState:function(){return Yu(ra)},useDebugValue:_p,useDeferredValue:function(e,t){var n=Ie();return pe===null?vp(n,e,t):Tv(n,pe.memoizedState,e,t)},useTransition:function(){var e=Yu(ra)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:rv,useId:wv,useHostTransitionStatus:xp,useFormState:$m,useActionState:$m,useOptimistic:function(e,t){var n=Ie();return pe!==null?dv(n,pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pp,useCacheRefresh:Dv};Pv.useEffectEvent=vv;function Zu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Td={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Vn(),a=Ia(i);a.payload=t,n!=null&&(a.callback=n),t=Ba(e,a,i),t!==null&&(Tn(t,e,i),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Vn(),a=Ia(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ba(e,a,i),t!==null&&(Tn(t,e,i),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),i=Ia(n);i.tag=2,t!=null&&(i.callback=t),t=Ba(e,i,n),t!==null&&(Tn(t,e,n),yo(t,e,n))}};function e0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,i)||!Lo(a,s):!0}function n0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Td.enqueueReplaceState(t,t.state,null)}function Ms(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=be({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function zv(e){Tc(e)}function Iv(e){console.error(e)}function Bv(e){Tc(e)}function Oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function i0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ad(e,t,n){return n=Ia(n),n.tag=3,n.payload={element:null},n.callback=function(){Oc(e,t)},n}function Fv(e){return e=Ia(e),e.tag=3,e}function Hv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){i0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){i0(t,n,i),typeof a!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function LM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Fr(t,n,a,!0),n=Xn.current,n!==null){switch(n.tag){case 31:case 13:return ii===null?Fc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===wc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rf(e,i,a)),!1;case 22:return n.flags|=65536,i===wc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rf(e,i,a)),!1}throw Error(it(435,n.tag))}return rf(e,i,a),Fc(),!1}if(te)return t=Xn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==hd&&(e=Error(it(422),{cause:i}),Po(ei(e,n)))):(i!==hd&&(t=Error(it(423),{cause:i}),Po(ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ei(i,n),a=Ad(e.stateNode,i,a),qu(e,a),Le!==4&&(Le=2)),!1;var s=Error(it(520),{cause:i});if(s=ei(s,n),Ro===null?Ro=[s]:Ro.push(s),Le!==4&&(Le=2),t===null)return!0;i=ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ad(n.stateNode,i,e),qu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Fv(a),Hv(a,e,n,i),qu(n,a),!1}n=n.return}while(n!==null);return!1}var Mp=Error(it(461)),Xe=!1;function sn(e,t,n,i){t.child=e===null?tv(t,null,n,i):Ss(t,e.child,n,i)}function a0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return xs(t),i=up(e,t,n,r,s,a),o=fp(),e!==null&&!Xe?(dp(e,t,a),oa(e,t,a)):(te&&o&&np(t),t.flags|=1,sn(e,t,i,a),t.child)}function s0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Gv(e,t,s,i,a)):(e=nc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ep(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(r,i)&&e.ref===t.ref)return oa(e,t,a)}return t.flags|=1,e=$i(s,i),e.ref=t.ref,e.return=t,t.child=e}function Gv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Lo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Ep(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,oa(e,t,a)}return Rd(e,t,n,i,a)}function Vv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return r0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(t,s!==null?s.cachePool:null),s!==null?Zm(t,s):Sd(),iv(t);else return i=t.lanes=536870912,r0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ic(t,s.cachePool),Zm(t,s),Aa(),t.memoizedState=null):(e!==null&&ic(t,null),Sd(),Aa());return sn(e,t,a,n),t.child}function fo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function r0(e,t,n,i,a){var s=sp();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ic(t,null),Sd(),iv(t),e!==null&&Fr(e,t,i,!0),t.childLanes=a,null}function rc(e,t){return t=Pc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function o0(e,t,n){return Ss(t,e.child,null,n),e=rc(t,t.pendingProps),e.flags|=2,Pn(t),t.memoizedState=null,e}function OM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=rc(t,i),t.lanes=536870912,fo(null,e);if(yd(t),(e=Me)?(e=Ox(e,ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,on=t,Me=null)):e=null,e===null)throw Wa(t);return t.lanes=536870912,null}return rc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(yd(t),a)if(t.flags&256)t.flags&=-257,t=o0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(it(558));else if(Xe||Fr(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=_e,i!==null&&(r=x_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Cs(e,r),Tn(i,e,r),Mp;Fc(),t=o0(e,t,n)}else e=s.treeContext,Me=ai(r.nextSibling),on=t,te=!0,za=null,ni=!1,e!==null&&K_(t,e),t=rc(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(it(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rd(e,t,n,i,a){return xs(t),n=up(e,t,n,i,void 0,a),i=fp(),e!==null&&!Xe?(dp(e,t,a),oa(e,t,a)):(te&&i&&np(t),t.flags|=1,sn(e,t,n,a),t.child)}function l0(e,t,n,i,a,s){return xs(t),t.updateQueue=null,n=sv(t,i,n,a),av(e),i=fp(),e!==null&&!Xe?(dp(e,t,s),oa(e,t,s)):(te&&i&&np(t),t.flags|=1,sn(e,t,n,s),t.child)}function c0(e,t,n,i,a){if(xs(t),t.stateNode===null){var s=or,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Td,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},op(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):or,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Zu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Td.enqueueReplaceState(s,s.state,null),Eo(t,i,s,a),Mo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ms(n,o);s.props=l;var c=s.context,d=n.contextType;r=or,typeof d=="object"&&d!==null&&(r=ln(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&n0(t,s,i,r),Ea=!1;var u=t.memoizedState;s.state=u,Eo(t,i,s,a),Mo(),c=t.memoizedState,o||u!==c||Ea?(typeof p=="function"&&(Zu(t,n,p,i),c=t.memoizedState),(l=Ea||e0(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,vd(e,t),r=t.memoizedProps,d=Ms(n,r),s.props=d,p=t.pendingProps,u=s.context,c=n.contextType,l=or,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&n0(t,s,i,l),Ea=!1,u=t.memoizedState,s.state=u,Eo(t,i,s,a),Mo();var h=t.memoizedState;r!==p||u!==h||Ea||e!==null&&e.dependencies!==null&&Cc(e.dependencies)?(typeof o=="function"&&(Zu(t,n,o,i),h=t.memoizedState),(d=Ea||e0(t,n,d,i,u,h,l)||e!==null&&e.dependencies!==null&&Cc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),s.props=i,s.state=h,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,oc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ss(t,e.child,null,a),t.child=Ss(t,null,n,a)):sn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=oa(e,t,a),e}function u0(e,t,n,i){return vs(),t.flags|=256,sn(e,t,n,i),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(e){return{baseLanes:e,cachePool:Q_()}}function Qu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function kv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?Ta(t):Aa(),(e=Me)?(e=Ox(e,ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,on=t,Me=null)):e=null,e===null)throw Wa(t);return Gd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Aa(),a=t.mode,o=Pc({mode:"hidden",children:o},a),i=ps(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=ju(n),i.childLanes=Qu(e,r,n),t.memoizedState=Ku,fo(null,i)):(Ta(t),Cd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ta(t),t.flags&=-257,t=Ju(e,t,n)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),o=i.fallback,a=t.mode,i=Pc({mode:"visible",children:i.children},a),o=ps(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ss(t,e.child,null,n),i=t.child,i.memoizedState=ju(n),i.childLanes=Qu(e,r,n),t.memoizedState=Ku,t=fo(null,i));else if(Ta(t),Gd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(it(419)),i.stack="",i.digest=r,Po({value:i,source:null,stack:null}),t=Ju(e,t,n)}else if(Xe||Fr(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=_e,r!==null&&(i=x_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Cs(e,i),Tn(r,e,i),Mp;Hd(o)||Fc(),t=Ju(e,t,n)}else Hd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Me=ai(o.nextSibling),on=t,te=!0,za=null,ni=!1,e!==null&&K_(t,e),t=Cd(t,i.children),t.flags|=4096);return t}return a?(Aa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=ps(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,fo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=ju(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Q_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Qu(e,r,n),t.memoizedState=Ku,fo(e.child,i)):(Ta(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cd(e,t){return t=Pc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pc(e,t){return e=zn(22,e,null,t),e.lanes=0,e}function Ju(e,t,n){return Ss(t,e.child,null,n),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function f0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),md(e.return,t,n)}function $u(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Xv(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Se(ze,r),sn(e,t,i,n),i=te?Oo:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f0(e,n,t);else if(e.tag===19)f0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Uc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$u(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Uc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$u(t,!0,n,null,s,i);break;case"together":$u(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function oa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,!(n&t.childLanes))if(e!==null){if(Fr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(it(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Cc(e)))}function PM(e,t,n){switch(t.tag){case 3:yc(t,t.stateNode.containerInfo),ba(t,ke,e.memoizedState.cache),vs();break;case 27:case 5:nd(t);break;case 4:yc(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ta(t),t.flags|=128,null):n&t.child.childLanes?kv(e,t,n):(Ta(t),e=oa(e,t,n),e!==null?e.sibling:null);Ta(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Fr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Xv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(ze,ze.current),i)break;return null;case 22:return t.lanes=0,Vv(e,t,n,t.pendingProps);case 24:ba(t,ke,e.memoizedState.cache)}return oa(e,t,n)}function Wv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Ep(e,n)&&!(t.flags&128))return Xe=!1,PM(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,te&&t.flags&1048576&&Z_(t,Oo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=rs(t.elementType),t.type=e,typeof e=="function")ep(e)?(i=Ms(e,i),t.tag=1,t=c0(null,t,e,i,n)):(t.tag=0,t=Rd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Gh){t.tag=11,t=a0(null,t,e,i,n);break t}else if(a===Vh){t.tag=14,t=s0(null,t,e,i,n);break t}}throw t=td(e)||e,Error(it(306,t,""))}}return t;case 0:return Rd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ms(i,t.pendingProps),c0(e,t,i,a,n);case 3:t:{if(yc(t,t.stateNode.containerInfo),e===null)throw Error(it(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,vd(e,t),Eo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ba(t,ke,i),i!==s.cache&&gd(t,[ke],n,!0),Mo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=u0(e,t,i,n);break t}else if(i!==a){a=ei(Error(it(424)),t),Po(a),t=u0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=ai(e.firstChild),on=t,te=!0,za=null,ni=!0,n=tv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(vs(),i===a){t=oa(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return oc(e,t),e===null?(n=U0(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=kc(Pa.current).createElement(n),i[rn]=t,i[Rn]=e,un(i,n,e),en(i),t.stateNode=i):t.memoizedState=U0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nd(t),e===null&&te&&(i=t.stateNode=Px(t.type,t.pendingProps,Pa.current),on=t,ni=!0,a=Me,Qa(t.type)?(Vd=a,Me=ai(i.firstChild)):Me=a),sn(e,t,t.pendingProps.children,n),oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=i=Me)&&(i=fE(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,on=t,Me=ai(i.firstChild),ni=!1,a=!0):a=!1),a||Wa(t)),nd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Bd(a,s)?i=null:r!==null&&Bd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=up(e,t,AM,null,null,n),Go._currentValue=a),oc(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Me)&&(n=dE(n,t.pendingProps,ni),n!==null?(t.stateNode=n,on=t,Me=null,e=!0):e=!1),e||Wa(t)),null;case 13:return kv(e,t,n);case 4:return yc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ss(t,null,i,n):sn(e,t,i,n),t.child;case 11:return a0(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ba(t,t.type,i.value),sn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,xs(t),a=ln(a),i=i(a),t.flags|=1,sn(e,t,i,n),t.child;case 14:return s0(e,t,t.type,t.pendingProps,n);case 15:return Gv(e,t,t.type,t.pendingProps,n);case 19:return Xv(e,t,n);case 31:return OM(e,t,n);case 22:return Vv(e,t,n,t.pendingProps);case 24:return xs(t),i=ln(ke),e===null?(a=sp(),a===null&&(a=_e,s=ap(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},op(t),ba(t,ke,a)):(e.lanes&n&&(vd(e,t),Eo(t,null,null,n),Mo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ba(t,ke,i)):(i=s.cache,ba(t,ke,i),i!==a.cache&&gd(t,[ke],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(it(156,t.tag))}function Pi(e){e.flags|=4}function tf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(mx())e.flags|=8192;else throw gs=wc,rp}else e.flags&=-16777217}function d0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Bx(t))if(mx())e.flags|=8192;else throw gs=wc,rp}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?g_():536870912,e.lanes|=t,Rr|=t)}function Qr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function zM(e,t,n){var i=t.pendingProps;switch(ip(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(ke),yr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ls(t)?Pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wu())),ye(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Pi(t),s!==null?(ye(t),d0(t,s)):(ye(t),tf(t,a,null,i,n))):s?s!==e.memoizedState?(Pi(t),ye(t),d0(t,s)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Pi(t),ye(t),tf(t,a,e,i,n)),null;case 27:if(Mc(t),n=Pa.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return ye(t),null}e=Ai.current,Ls(t)?Gm(t):(e=Px(a,i,n),t.stateNode=e,Pi(t))}return ye(t),null;case 5:if(Mc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return ye(t),null}if(s=Ai.current,Ls(t))Gm(t);else{var r=kc(Pa.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[rn]=t,s[Rn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(un(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Pi(t)}}return ye(t),tf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(it(166));if(e=Pa.current,Ls(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ux(e.nodeValue,n)),e||Wa(t,!0)}else e=kc(e).createTextNode(i),e[rn]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ls(t),n!==null){if(e===null){if(!i)throw Error(it(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(557));e[rn]=t}else vs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pn(t),t):(Pn(t),null);if(t.flags&128)throw Error(it(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ls(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(it(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(it(317));a[rn]=t}else vs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),a=!1}else a=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Pn(t),t):(Pn(t),null)}return Pn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),ye(t),null);case 4:return yr(),e===null&&Dp(t.stateNode.containerInfo),ye(t),null;case 10:return ta(t.type),ye(t),null;case 19:if(nn(ze),i=t.memoizedState,i===null)return ye(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Qr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Uc(e),s!==null){for(t.flags|=128,Qr(i,!1),e=s.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)q_(n,e),n=n.sibling;return Se(ze,ze.current&1|2),te&&qi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Fn()>Ic&&(t.flags|=128,a=!0,Qr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Uc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),Qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!te)return ye(t),null}else 2*Fn()-i.renderingStartTime>Ic&&n!==536870912&&(t.flags|=128,a=!0,Qr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fn(),e.sibling=null,n=ze.current,Se(ze,a?n&1|2:n&1),te&&qi(t,i.treeForkCount),e):(ye(t),null);case 22:case 23:return Pn(t),lp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&nn(ms),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(ke),ye(t),null;case 25:return null;case 30:return null}throw Error(it(156,t.tag))}function IM(e,t){switch(ip(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(ke),yr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mc(t),null;case 31:if(t.memoizedState!==null){if(Pn(t),t.alternate===null)throw Error(it(340));vs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(it(340));vs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nn(ze),null;case 4:return yr(),null;case 10:return ta(t.type),null;case 22:case 23:return Pn(t),lp(),e!==null&&nn(ms),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(ke),null;case 25:return null;default:return null}}function qv(e,t){switch(ip(t),t.tag){case 3:ta(ke),yr();break;case 26:case 27:case 5:Mc(t);break;case 4:yr();break;case 31:t.memoizedState!==null&&Pn(t);break;case 13:Pn(t);break;case 19:nn(ze);break;case 10:ta(t.type);break;case 22:case 23:Pn(t),lp(),e!==null&&nn(ms);break;case 24:ta(ke)}}function nl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ce(t,t.return,o)}}function qa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){ce(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){ce(t,t.return,d)}}function Yv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{nv(t,n)}catch(i){ce(e,e.return,i)}}}function Zv(e,t,n){n.props=Ms(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function To(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ce(e,t,a)}}function Ei(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ce(e,t,a)}else n.current=null}function Kv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ce(e,e.return,a)}}function ef(e,t,n){try{var i=e.stateNode;sE(i,e.type,n,t),i[Rn]=t}catch(a){ce(e,e.return,a)}}function jv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(i!==4&&(i===27&&Qa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wd(e,t,n),e=e.sibling;e!==null;)wd(e,t,n),e=e.sibling}function zc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Qa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zc(e,t,n),e=e.sibling;e!==null;)zc(e,t,n),e=e.sibling}function Qv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);un(t,i,n),t[rn]=e,t[Rn]=n}catch(s){ce(e,e.return,s)}}var Yi=!1,Ve=!1,af=!1,h0=typeof WeakSet=="function"?WeakSet:Set,tn=null;function BM(e,t){if(e=e.containerInfo,zd=Yc,e=B_(e),Jh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,p=e,u=null;e:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:e,selectionRange:n},Yc=!1,tn=t;tn!==null;)if(t=tn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tn=e;else for(;tn!==null;){switch(t=tn,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var S=Ms(n.type,a);e=i.getSnapshotBeforeUpdate(S,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(T){ce(n,n.return,T)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Fd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(it(163))}if(e=t.sibling,e!==null){e.return=t.return,tn=e;break}tn=t.return}}function Jv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(e,n),i&4&&nl(5,n);break;case 1:if(Ii(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var a=Ms(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&Yv(n),i&512&&To(n,n.return);break;case 3:if(Ii(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{nv(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&Qv(n);case 26:case 5:Ii(e,n),t===null&&i&4&&Kv(n),i&512&&To(n,n.return);break;case 12:Ii(e,n);break;case 31:Ii(e,n),i&4&&ex(e,n);break;case 13:Ii(e,n),i&4&&nx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=YM.bind(null,n),hE(e,n))));break;case 22:if(i=n.memoizedState!==null||Yi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Yi;var s=Ve;Yi=i,(Ve=t)&&!s?Xi(e,n,(n.subtreeFlags&8772)!==0):Ii(e,n),Yi=a,Ve=s}break;case 30:break;default:Ii(e,n)}}function $v(e){var t=e.alternate;t!==null&&(e.alternate=null,$v(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,En=!1;function zi(e,t,n){for(n=n.child;n!==null;)tx(e,t,n),n=n.sibling}function tx(e,t,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 26:Ve||Ei(n,t),zi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ei(n,t);var i=Ae,a=En;Qa(n.type)&&(Ae=n.stateNode,En=!1),zi(e,t,n),wo(n.stateNode),Ae=i,En=a;break;case 5:Ve||Ei(n,t);case 6:if(i=Ae,a=En,Ae=null,zi(e,t,n),Ae=i,En=a,Ae!==null)if(En)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(s){ce(n,t,s)}else try{Ae.removeChild(n.stateNode)}catch(s){ce(n,t,s)}break;case 18:Ae!==null&&(En?(e=Ae,A0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ur(e)):A0(Ae,n.stateNode));break;case 4:i=Ae,a=En,Ae=n.stateNode.containerInfo,En=!0,zi(e,t,n),Ae=i,En=a;break;case 0:case 11:case 14:case 15:qa(2,n,t),Ve||qa(4,n,t),zi(e,t,n);break;case 1:Ve||(Ei(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Zv(n,t,i)),zi(e,t,n);break;case 21:zi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,zi(e,t,n),Ve=i;break;default:zi(e,t,n)}}function ex(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ur(e)}catch(n){ce(t,t.return,n)}}}function nx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ur(e)}catch(n){ce(t,t.return,n)}}function FM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new h0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new h0),t;default:throw Error(it(435,e.tag))}}function Ml(e,t){var n=FM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=ZM.bind(null,e,i);i.then(a,a)}})}function Sn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Qa(o.type)){Ae=o.stateNode,En=!1;break t}break;case 5:Ae=o.stateNode,En=!1;break t;case 3:case 4:Ae=o.stateNode.containerInfo,En=!0;break t}o=o.return}if(Ae===null)throw Error(it(160));tx(s,r,a),Ae=null,En=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ix(t,e),t=t.sibling}var ui=null;function ix(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sn(t,e),yn(e),i&4&&(qa(3,e,e.return),nl(3,e),qa(5,e,e.return));break;case 1:Sn(t,e),yn(e),i&512&&(Ve||n===null||Ei(n,n.return)),i&64&&Yi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ui;if(Sn(t,e),yn(e),i&512&&(Ve||n===null||Ei(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Jo]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),un(s,i,n),s[rn]=e,en(s),i=s;break t;case"link":var r=L0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;case"meta":if(r=L0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;default:throw Error(it(468,i))}s[rn]=e,en(s),i=s}e.stateNode=i}else O0(a,e.type,e.stateNode);else e.stateNode=N0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?O0(a,e.type,e.stateNode):N0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ef(e,e.memoizedProps,n.memoizedProps)}break;case 27:Sn(t,e),yn(e),i&512&&(Ve||n===null||Ei(n,n.return)),n!==null&&i&4&&ef(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sn(t,e),yn(e),i&512&&(Ve||n===null||Ei(n,n.return)),e.flags&32){a=e.stateNode;try{Er(a,"")}catch(S){ce(e,e.return,S)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ef(e,a,n!==null?n.memoizedProps:a)),i&1024&&(af=!0);break;case 6:if(Sn(t,e),yn(e),i&4){if(e.stateNode===null)throw Error(it(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(S){ce(e,e.return,S)}}break;case 3:if(uc=null,a=ui,ui=Xc(t.containerInfo),Sn(t,e),ui=a,yn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(S){ce(e,e.return,S)}af&&(af=!1,ax(e));break;case 4:i=ui,ui=Xc(e.stateNode.containerInfo),Sn(t,e),yn(e),ui=i;break;case 12:Sn(t,e),yn(e);break;case 31:Sn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ml(e,i)));break;case 13:Sn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vu=Fn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ml(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Yi,d=Ve;if(Yi=c||a,Ve=d||l,Sn(t,e),Ve=d,Yi=c,yn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yi||Ve||os(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(S){ce(l,l.return,S)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(S){ce(l,l.return,S)}}}else if(t.tag===18){if(n===null){l=t;try{var h=l.stateNode;a?R0(h,!0):R0(l.stateNode,!1)}catch(S){ce(l,l.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ml(e,n))));break;case 19:Sn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ml(e,i)));break;case 30:break;case 21:break;default:Sn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jv(i)){n=i;break}i=i.return}if(n==null)throw Error(it(160));switch(n.tag){case 27:var a=n.stateNode,s=nf(e);zc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Er(r,""),n.flags&=-33);var o=nf(e);zc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=nf(e);wd(e,c,l);break;default:throw Error(it(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ax(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ax(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ii(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jv(e,t.alternate,t),t=t.sibling}function os(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qa(4,t,t.return),os(t);break;case 1:Ei(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zv(t,t.return,n),os(t);break;case 27:wo(t.stateNode);case 26:case 5:Ei(t,t.return),os(t);break;case 22:t.memoizedState===null&&os(t);break;case 30:os(t);break;default:os(t)}e=e.sibling}}function Xi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(a,s,n),nl(4,s);break;case 1:if(Xi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)ev(l[a],o)}catch(c){ce(i,i.return,c)}}n&&r&64&&Yv(s),To(s,s.return);break;case 27:Qv(s);case 26:case 5:Xi(a,s,n),n&&i===null&&r&4&&Kv(s),To(s,s.return);break;case 12:Xi(a,s,n);break;case 31:Xi(a,s,n),n&&r&4&&ex(a,s);break;case 13:Xi(a,s,n),n&&r&4&&nx(a,s);break;case 22:s.memoizedState===null&&Xi(a,s,n),To(s,s.return);break;case 30:break;default:Xi(a,s,n)}t=t.sibling}}function bp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&tl(n))}function Tp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function ri(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sx(e,t,n,i),t=t.sibling}function sx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ri(e,t,n,i),a&2048&&nl(9,t);break;case 1:ri(e,t,n,i);break;case 3:ri(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e)));break;case 12:if(a&2048){ri(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else ri(e,t,n,i);break;case 31:ri(e,t,n,i);break;case 13:ri(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ri(e,t,n,i):Ao(e,t):s._visibility&2?ri(e,t,n,i):(s._visibility|=2,Qs(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&bp(r,t);break;case 24:ri(e,t,n,i),a&2048&&Tp(t.alternate,t);break;default:ri(e,t,n,i)}}function Qs(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Qs(s,r,o,l,a),nl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Qs(s,r,o,l,a):Ao(s,r):(d._visibility|=2,Qs(s,r,o,l,a)),a&&c&2048&&bp(r.alternate,r);break;case 24:Qs(s,r,o,l,a),a&&c&2048&&Tp(r.alternate,r);break;default:Qs(s,r,o,l,a)}t=t.sibling}}function Ao(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ao(n,i),a&2048&&bp(i.alternate,i);break;case 24:Ao(n,i),a&2048&&Tp(i.alternate,i);break;default:Ao(n,i)}t=t.sibling}}var ho=8192;function Os(e,t,n){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)rx(e,t,n),e=e.sibling}function rx(e,t,n){switch(e.tag){case 26:Os(e,t,n),e.flags&ho&&e.memoizedState!==null&&TE(n,ui,e.memoizedState,e.memoizedProps);break;case 5:Os(e,t,n);break;case 3:case 4:var i=ui;ui=Xc(e.stateNode.containerInfo),Os(e,t,n),ui=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ho,ho=16777216,Os(e,t,n),ho=i):Os(e,t,n));break;default:Os(e,t,n)}}function ox(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,cx(i,e)}ox(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lx(e),e=e.sibling}function lx(e){switch(e.tag){case 0:case 11:case 15:Jr(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Jr(e);break;case 12:Jr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lc(e)):Jr(e);break;default:Jr(e)}}function lc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,cx(i,e)}ox(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qa(8,t,t.return),lc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lc(t));break;default:lc(t)}e=e.sibling}}function cx(e,t){for(;tn!==null;){var n=tn;switch(n.tag){case 0:case 11:case 15:qa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:tl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tn=i;else t:for(n=e;tn!==null;){i=tn;var a=i.sibling,s=i.return;if($v(i),i===n){tn=null;break t}if(a!==null){a.return=s,tn=a;break t}tn=s}}}var HM={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},GM=typeof WeakMap=="function"?WeakMap:Map,se=0,_e=null,Kt=null,Qt=0,le=0,On=null,Ua=!1,Gr=!1,Ap=!1,la=0,Le=0,Ya=0,_s=0,Rp=0,Bn=0,Rr=0,Ro=null,bn=null,Dd=!1,vu=0,ux=0,Ic=1/0,Bc=null,Fa=null,Ze=0,Ha=null,Cr=null,ea=0,Ud=0,Nd=null,fx=null,Co=0,Ld=null;function Vn(){return se&2&&Qt!==0?Qt&-Qt:Pt.T!==null?wp():S_()}function dx(){if(Bn===0)if(!(Qt&536870912)||te){var e=pl;pl<<=1,!(pl&3932160)&&(pl=262144),Bn=e}else Bn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Bn}function Tn(e,t,n){(e===_e&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(wr(e,0),Na(e,Qt,Bn,!1)),Qo(e,n),(!(se&2)||e!==_e)&&(e===_e&&(!(se&2)&&(_s|=n),Le===4&&Na(e,Qt,Bn,!1)),Li(e))}function hx(e,t,n){if(se&6)throw Error(it(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),a=i?XM(e,t):sf(e,t,!0),s=i;do{if(a===0){Gr&&!i&&Na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!VM(n)){a=sf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Ro;var l=o.current.memoizedState.isDehydrated;if(l&&(wr(o,r).flags|=256),r=sf(o,r,!1),r!==2){if(Ap&&!l){o.errorRecoveryDisabledLanes|=s,_s|=s,a=4;break t}s=bn,bn=a,s!==null&&(bn===null?bn=s:bn.push.apply(bn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){wr(e,0),Na(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(it(345));case 4:if((t&4194048)!==t)break;case 6:Na(i,t,Bn,!Ua);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(it(329))}if((t&62914560)===t&&(a=vu+300-Fn(),10<a)){if(Na(i,t,Bn,!Ua),ou(i,0,!0)!==0)break t;ea=t,i.timeoutHandle=Lx(p0.bind(null,i,n,bn,Bc,Dd,t,Bn,_s,Rr,Ua,s,"Throttled",-0,0),a);break t}p0(i,n,bn,Bc,Dd,t,Bn,_s,Rr,Ua,s,null,-0,0)}}break}while(1);Li(e)}function p0(e,t,n,i,a,s,r,o,l,c,d,p,u,h){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},rx(t,s,p);var S=(s&62914560)===s?vu-Fn():(s&4194048)===s?ux-Fn():0;if(S=AE(p,S),S!==null){ea=s,e.cancelPendingCommit=S(g0.bind(null,e,t,s,n,i,a,r,o,l,d,p,null,u,h)),Na(e,s,r,!c);return}}g0(e,t,s,n,i,a,r,o,l)}function VM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!kn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,n,i){t&=~Rp,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Gn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&__(e,n,t)}function xu(){return se&6?!0:(il(0,!1),!1)}function Cp(){if(Kt!==null){if(le===0)var e=Kt.return;else e=Kt,ji=ws=null,hp(e),mr=null,zo=0,e=Kt;for(;e!==null;)qv(e.alternate,e),e=e.return;Kt=null}}function wr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ea=0,Cp(),_e=e,Kt=n=$i(e.current,null),Qt=t,le=0,On=null,Ua=!1,Gr=jo(e,t),Ap=!1,Rr=Bn=Rp=_s=Ya=Le=0,bn=Ro=null,Dd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Gn(i),s=1<<a;t|=e[a],i&=~s}return la=t,fu(),n}function px(e,t){Gt=null,Pt.H=Bo,t===Hr||t===hu?(t=qm(),le=3):t===rp?(t=qm(),le=4):le=t===Mp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,On=t,Kt===null&&(Le=1,Oc(e,ei(t,e.current)))}function mx(){var e=Xn.current;return e===null?!0:(Qt&4194048)===Qt?ii===null:(Qt&62914560)===Qt||Qt&536870912?e===ii:!1}function gx(){var e=Pt.H;return Pt.H=Bo,e===null?Bo:e}function _x(){var e=Pt.A;return Pt.A=HM,e}function Fc(){Le=4,Ua||(Qt&4194048)!==Qt&&Xn.current!==null||(Gr=!0),!(Ya&134217727)&&!(_s&134217727)||_e===null||Na(_e,Qt,Bn,!1)}function sf(e,t,n){var i=se;se|=2;var a=gx(),s=_x();(_e!==e||Qt!==t)&&(Bc=null,wr(e,t)),t=!1;var r=Le;t:do try{if(le!==0&&Kt!==null){var o=Kt,l=On;switch(le){case 8:Cp(),r=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=le;if(le=0,On=null,ur(e,o,l,c),n&&Gr){r=0;break t}break;default:c=le,le=0,On=null,ur(e,o,l,c)}}kM(),r=Le;break}catch(d){px(e,d)}while(1);return t&&e.shellSuspendCounter++,ji=ws=null,se=i,Pt.H=a,Pt.A=s,Kt===null&&(_e=null,Qt=0,fu()),r}function kM(){for(;Kt!==null;)vx(Kt)}function XM(e,t){var n=se;se|=2;var i=gx(),a=_x();_e!==e||Qt!==t?(Bc=null,Ic=Fn()+500,wr(e,t)):Gr=jo(e,t);t:do try{if(le!==0&&Kt!==null){t=Kt;var s=On;e:switch(le){case 1:le=0,On=null,ur(e,t,s,1);break;case 2:case 9:if(Wm(s)){le=0,On=null,m0(t);break}t=function(){le!==2&&le!==9||_e!==e||(le=7),Li(e)},s.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:Wm(s)?(le=0,On=null,m0(t)):(le=0,On=null,ur(e,t,s,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?Bx(r):o.stateNode.complete){le=0,On=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,Su(c)):Kt=null}break e}}le=0,On=null,ur(e,t,s,5);break;case 6:le=0,On=null,ur(e,t,s,6);break;case 8:Cp(),Le=6;break t;default:throw Error(it(462))}}WM();break}catch(d){px(e,d)}while(1);return ji=ws=null,Pt.H=i,Pt.A=a,se=n,Kt!==null?0:(_e=null,Qt=0,fu(),Le)}function WM(){for(;Kt!==null&&!py();)vx(Kt)}function vx(e){var t=Wv(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?Su(e):Kt=t}function m0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=l0(n,t,t.pendingProps,t.type,void 0,Qt);break;case 11:t=l0(n,t,t.pendingProps,t.type.render,t.ref,Qt);break;case 5:hp(t);default:qv(n,t),t=Kt=q_(t,la),t=Wv(n,t,la)}e.memoizedProps=e.pendingProps,t===null?Su(e):Kt=t}function ur(e,t,n,i){ji=ws=null,hp(t),mr=null,zo=0;var a=t.return;try{if(LM(e,a,t,n,Qt)){Le=1,Oc(e,ei(n,e.current)),Kt=null;return}}catch(s){if(a!==null)throw Kt=a,s;Le=1,Oc(e,ei(n,e.current)),Kt=null;return}t.flags&32768?(te||i===1?e=!0:Gr||Qt&536870912?e=!1:(Ua=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),xx(t,e)):Su(t)}function Su(e){var t=e;do{if(t.flags&32768){xx(t,Ua);return}e=t.return;var n=zM(t.alternate,t,la);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Le===0&&(Le=5)}function xx(e,t){do{var n=IM(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Le=6,Kt=null}function g0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do yu();while(Ze!==0);if(se&6)throw Error(it(327));if(t!==null){if(t===e.current)throw Error(it(177));if(s=t.lanes|t.childLanes,s|=$h,by(e,n,s,r,o,l),e===_e&&(Kt=_e=null,Qt=0),Cr=t,Ha=e,ea=n,Ud=s,Nd=a,fx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,KM(Ec,function(){return bx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Pt.T,Pt.T=null,a=re.p,re.p=2,r=se,se|=4;try{BM(e,t,n)}finally{se=r,re.p=a,Pt.T=i}}Ze=1,Sx(),yx(),Mx()}}function Sx(){if(Ze===1){Ze=0;var e=Ha,t=Cr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Pt.T,Pt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{ix(t,e);var s=Id,r=B_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&I_(o.ownerDocument.documentElement,o)){if(l!==null&&Jh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),S=o.textContent.length,T=Math.min(l.start,S),_=l.end===void 0?T:Math.min(l.end,S);!h.extend&&T>_&&(r=_,_=T,T=r);var f=Bm(o,T),m=Bm(o,_);if(f&&m&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var y=p.createRange();y.setStart(f.node,f.offset),h.removeAllRanges(),T>_?(h.addRange(y),h.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),h.addRange(y))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Yc=!!zd,Id=zd=null}finally{se=a,re.p=i,Pt.T=n}}e.current=t,Ze=2}}function yx(){if(Ze===2){Ze=0;var e=Ha,t=Cr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Pt.T,Pt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{Jv(e,t.alternate,t)}finally{se=a,re.p=i,Pt.T=n}}Ze=3}}function Mx(){if(Ze===4||Ze===3){Ze=0,my();var e=Ha,t=Cr,n=ea,i=fx;t.subtreeFlags&10256||t.flags&10256?Ze=5:(Ze=0,Cr=Ha=null,Ex(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Fa=null),Wh(n),t=t.stateNode,Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Ko,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,a=re.p,re.p=2,Pt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Pt.T=t,re.p=a}}ea&3&&yu(),Li(e),a=e.pendingLanes,n&261930&&a&42?e===Ld?Co++:(Co=0,Ld=e):Co=0,il(0,!1)}}function Ex(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function yu(){return Sx(),yx(),Mx(),bx()}function bx(){if(Ze!==5)return!1;var e=Ha,t=Ud;Ud=0;var n=Wh(ea),i=Pt.T,a=re.p;try{re.p=32>n?32:n,Pt.T=null,n=Nd,Nd=null;var s=Ha,r=ea;if(Ze=0,Cr=Ha=null,ea=0,se&6)throw Error(it(331));var o=se;if(se|=4,lx(s.current),sx(s,s.current,r,n),se=o,il(0,!1),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Ko,s)}catch{}return!0}finally{re.p=a,Pt.T=i,Ex(e,t)}}function _0(e,t,n){t=ei(n,t),t=Ad(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Qo(e,2),Li(e))}function ce(e,t,n){if(e.tag===3)_0(e,e,n);else for(;t!==null;){if(t.tag===3){_0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))){e=ei(n,e),n=Fv(2),i=Ba(t,n,2),i!==null&&(Hv(n,i,t,e),Qo(i,2),Li(i));break}}t=t.return}}function rf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new GM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ap=!0,a.add(n),e=qM.bind(null,e,t,n),t.then(e,e))}function qM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(Qt&n)===n&&(Le===4||Le===3&&(Qt&62914560)===Qt&&300>Fn()-vu?!(se&2)&&wr(e,0):Rp|=n,Rr===Qt&&(Rr=0)),Li(e)}function Tx(e,t){t===0&&(t=g_()),e=Cs(e,t),e!==null&&(Qo(e,t),Li(e))}function YM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tx(e,n)}function ZM(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(it(314))}i!==null&&i.delete(t),Tx(e,n)}function KM(e,t){return kh(e,t)}var Hc=null,Js=null,Od=!1,Gc=!1,of=!1,La=0;function Li(e){e!==Js&&e.next===null&&(Js===null?Hc=Js=e:Js=Js.next=e),Gc=!0,Od||(Od=!0,QM())}function il(e,t){if(!of&&Gc){of=!0;do for(var n=!1,i=Hc;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Gn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,v0(i,s))}else s=Qt,s=ou(i,i===_e?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||jo(i,s)||(n=!0,v0(i,s));i=i.next}while(n);of=!1}}function jM(){Ax()}function Ax(){Gc=Od=!1;var e=0;La!==0&&oE()&&(e=La);for(var t=Fn(),n=null,i=Hc;i!==null;){var a=i.next,s=Rx(i,t);s===0?(i.next=null,n===null?Hc=a:n.next=a,a===null&&(Js=n)):(n=i,(e!==0||s&3)&&(Gc=!0)),i=a}Ze!==0&&Ze!==5||il(e,!1),La!==0&&(La=0)}function Rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Gn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=Ey(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=_e,n=Qt,n=ou(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ou(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||jo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ou(i),Wh(n)){case 2:case 8:n=p_;break;case 32:n=Ec;break;case 268435456:n=m_;break;default:n=Ec}return i=Cx.bind(null,e),n=kh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ou(i),e.callbackPriority=2,e.callbackNode=null,2}function Cx(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yu()&&e.callbackNode!==n)return null;var i=Qt;return i=ou(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hx(e,i,t),Rx(e,Fn()),e.callbackNode!=null&&e.callbackNode===n?Cx.bind(null,e):null)}function v0(e,t){if(yu())return null;hx(e,t,!0)}function QM(){cE(function(){se&6?kh(h_,jM):Ax()})}function wp(){if(La===0){var e=br;e===0&&(e=hl,hl<<=1,!(hl&261888)&&(hl=256)),La=e}return La}function x0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(""+e)}function S0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function JM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=x0((a[Rn]||null).action),r=i.submitter;r&&(t=(t=r[Rn]||null)?x0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new lu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(La!==0){var l=r?S0(a,r):new FormData(a);bd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?S0(a,r):new FormData(a),bd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var lf=0;lf<dd.length;lf++){var cf=dd[lf],$M=cf.toLowerCase(),tE=cf[0].toUpperCase()+cf.slice(1);hi($M,"on"+tE)}hi(H_,"onAnimationEnd");hi(G_,"onAnimationIteration");hi(V_,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(gM,"onTransitionRun");hi(_M,"onTransitionStart");hi(vM,"onTransitionCancel");hi(k_,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function wx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Tc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Tc(d)}a.currentTarget=null,s=l}}}}function Zt(e,t){var n=t[ad];n===void 0&&(n=t[ad]=new Set);var i=e+"__bubble";n.has(i)||(Dx(t,e,2,!1),n.add(i))}function uf(e,t,n){var i=0;t&&(i|=4),Dx(n,e,i,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function Dp(e){if(!e[El]){e[El]=!0,y_.forEach(function(n){n!=="selectionchange"&&(eE.has(n)||uf(n,!1,e),uf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,uf("selectionchange",!1,t))}}function Dx(e,t,n,i){switch(kx(t)){case 2:var a=wE;break;case 8:a=DE;break;default:a=Op}n=a.bind(null,t,n,e),a=void 0,!cd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ff(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=er(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}w_(function(){var c=s,d=Zh(n),p=[];t:{var u=X_.get(e);if(u!==void 0){var h=lu,S=e;switch(e){case"keypress":if(ec(n)===0)break t;case"keydown":case"keyup":h=Zy;break;case"focusin":S="focus",h=Fu;break;case"focusout":S="blur",h=Fu;break;case"beforeblur":case"afterblur":h=Fu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Qy;break;case H_:case G_:case V_:h=Fy;break;case k_:h=$y;break;case"scroll":case"scrollend":h=Oy;break;case"wheel":h=eM;break;case"copy":case"cut":case"paste":h=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Dm;break;case"toggle":case"beforetoggle":h=iM}var T=(t&4)!==0,_=!T&&(e==="scroll"||e==="scrollend"),f=T?u!==null?u+"Capture":null:u;T=[];for(var m=c,y;m!==null;){var v=m;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||f===null||(v=Uo(m,f),v!=null&&T.push(Ho(m,v,y))),_)break;m=m.return}0<T.length&&(u=new h(u,S,null,n,d),p.push({event:u,listeners:T}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",u&&n!==ld&&(S=n.relatedTarget||n.fromElement)&&(er(S)||S[Ir]))break t;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(S=n.relatedTarget||n.toElement,h=c,S=S?er(S):null,S!==null&&(_=Zo(S),T=S.tag,S!==_||T!==5&&T!==27&&T!==6)&&(S=null)):(h=null,S=c),h!==S)){if(T=Cm,v="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(T=Dm,v="onPointerLeave",f="onPointerEnter",m="pointer"),_=h==null?u:uo(h),y=S==null?u:uo(S),u=new T(v,m+"leave",h,n,d),u.target=_,u.relatedTarget=y,v=null,er(d)===c&&(T=new T(f,m+"enter",S,n,d),T.target=y,T.relatedTarget=_,v=T),_=v,h&&S)e:{for(T=nE,f=h,m=S,y=0,v=f;v;v=T(v))y++;v=0;for(var b=m;b;b=T(b))v++;for(;0<y-v;)f=T(f),y--;for(;0<v-y;)m=T(m),v--;for(;y--;){if(f===m||m!==null&&f===m.alternate){T=f;break e}f=T(f),m=T(m)}T=null}else T=null;h!==null&&y0(p,u,h,T,!1),S!==null&&_!==null&&y0(p,_,S,T,!0)}}t:{if(u=c?uo(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var M=Om;else if(Lm(u))if(P_)M=hM;else{M=fM;var R=uM}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Yh(c.elementType)&&(M=Om):M=dM;if(M&&(M=M(e,c))){O_(p,M,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&od(u,"number",u.value)}switch(R=c?uo(c):window,e){case"focusin":(Lm(R)||R.contentEditable==="true")&&(ar=R,ud=c,xo=null);break;case"focusout":xo=ud=ar=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Fm(p,n,d);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":Fm(p,n,d)}var g;if(Qh)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else ir?N_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(U_&&n.locale!=="ko"&&(ir||A!=="onCompositionStart"?A==="onCompositionEnd"&&ir&&(g=D_()):(Da=d,Kh="value"in Da?Da.value:Da.textContent,ir=!0)),R=Vc(c,A),0<R.length&&(A=new wm(A,e,null,n,d),p.push({event:A,listeners:R}),g?A.data=g:(g=L_(n),g!==null&&(A.data=g)))),(g=sM?rM(e,n):oM(e,n))&&(A=Vc(c,"onBeforeInput"),0<A.length&&(R=new wm("onBeforeInput","beforeinput",null,n,d),p.push({event:R,listeners:A}),R.data=g)),JM(p,e,c,n,d)}wx(p,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Uo(e,n),a!=null&&i.unshift(Ho(e,a,s)),a=Uo(e,t),a!=null&&i.push(Ho(e,a,s))),e.tag===3)return i;e=e.return}return[]}function nE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Uo(n,s),c!=null&&r.unshift(Ho(n,c,l))):a||(c=Uo(n,s),c!=null&&r.push(Ho(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var iE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function M0(e){return(typeof e=="string"?e:""+e).replace(iE,`
`).replace(aE,"")}function Ux(e,t){return t=M0(t),M0(e)===t}function he(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Er(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Er(e,""+i);break;case"className":gl(e,"class",i);break;case"tabIndex":gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,n,i);break;case"style":C_(e,i,s);break;case"data":if(t!=="object"){gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",a.name,a,null),he(e,t,"formEncType",a.formEncType,a,null),he(e,t,"formMethod",a.formMethod,a,null),he(e,t,"formTarget",a.formTarget,a,null)):(he(e,t,"encType",a.encType,a,null),he(e,t,"method",a.method,a,null),he(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ki);break;case"onScroll":i!=null&&Zt("scroll",e);break;case"onScrollEnd":i!=null&&Zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$l(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Zt("beforetoggle",e),Zt("toggle",e),Jl(e,"popover",i);break;case"xlinkActuate":Oi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ny.get(n)||n,Jl(e,n,i))}}function Pd(e,t,n,i,a,s){switch(n){case"style":C_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Er(e,i):(typeof i=="number"||typeof i=="bigint")&&Er(e,""+i);break;case"onScroll":i!=null&&Zt("scroll",e);break;case"onScrollEnd":i!=null&&Zt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!M_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Rn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Jl(e,n,i)}}}function un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Zt("error",e),Zt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:he(e,t,s,r,n,null)}}a&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":Zt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(it(137,t));break;default:he(e,t,i,d,n,null)}}T_(e,s,o,l,c,r,a,!1);return;case"select":Zt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?dr(e,!!i,t,!1):n!=null&&dr(e,!!i,n,!0);return;case"textarea":Zt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(it(91));break;default:he(e,t,r,o,n,null)}R_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(e,t,l,i,n,null)}return;case"dialog":Zt("beforetoggle",e),Zt("toggle",e),Zt("cancel",e),Zt("close",e);break;case"iframe":case"object":Zt("load",e);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Zt(Fo[i],e);break;case"image":Zt("error",e),Zt("load",e);break;case"details":Zt("toggle",e);break;case"embed":case"source":case"link":Zt("error",e),Zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:he(e,t,c,i,n,null)}return;default:if(Yh(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Pd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}function sE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||he(e,t,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(it(137,t));break;default:h!==p&&he(e,t,u,h,i,p)}}rd(e,r,o,l,c,d,s,a);return;case"select":h=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||he(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&he(e,t,a,s,i,l)}t=o,n=r,i=h,u!=null?dr(e,!!n,u,!1):!!i!=!!n&&(t!=null?dr(e,!!n,t,!0):dr(e,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(it(91));break;default:a!==s&&he(e,t,r,a,i,s)}A_(e,u,h);return;case"option":for(var S in n)if(u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:he(e,t,S,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:he(e,t,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)u=n[T],n.hasOwnProperty(T)&&u!=null&&!i.hasOwnProperty(T)&&he(e,t,T,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(it(137,t));break;default:he(e,t,c,u,i,h)}return;default:if(Yh(t)){for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!==void 0&&!i.hasOwnProperty(_)&&Pd(e,t,_,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||Pd(e,t,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&he(e,t,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||he(e,t,p,u,i,h)}function E0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&E0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&E0(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Id=null;function kc(e){return e.nodeType===9?e:e.ownerDocument}function b0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var df=null;function oE(){var e=window.event;return e&&e.type==="popstate"?e===df?!1:(df=e,!0):(df=null,!1)}var Lx=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(e){return T0.resolve(null).then(e).catch(uE)}:Lx;function uE(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function A0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ur(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")wo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,wo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Jo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&wo(e.ownerDocument.body);n=a}while(n);Ur(t)}function R0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Fd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fd(n),qh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function fE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Jo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ai(e.nextSibling),e===null)break}return null}function dE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ai(e.nextSibling),e===null))return null;return e}function Ox(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ai(e.nextSibling),e===null))return null;return e}function Hd(e){return e.data==="$?"||e.data==="$~"}function Gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vd=null;function C0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ai(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function w0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Px(e,t,n){switch(t=kc(n),e){case"html":if(e=t.documentElement,!e)throw Error(it(452));return e;case"head":if(e=t.head,!e)throw Error(it(453));return e;case"body":if(e=t.body,!e)throw Error(it(454));return e;default:throw Error(it(451))}}function wo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qh(e)}var si=new Map,D0=new Set;function Xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=re.d;re.d={f:pE,r:mE,D:gE,C:_E,L:vE,m:xE,X:yE,S:SE,M:ME};function pE(){var e=fa.f(),t=xu();return e||t}function mE(e){var t=Br(e);t!==null&&t.tag===5&&t.type==="form"?Cv(t):fa.r(e)}var Vr=typeof document>"u"?null:document;function zx(e,t,n){var i=Vr;if(i&&typeof t=="string"&&t){var a=ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),D0.has(a)||(D0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),un(t,"link",e),en(t),i.head.appendChild(t)))}}function gE(e){fa.D(e),zx("dns-prefetch",e,null)}function _E(e,t){fa.C(e,t),zx("preconnect",e,t)}function vE(e,t,n){fa.L(e,t,n);var i=Vr;if(i&&e&&t){var a='link[rel="preload"][as="'+ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(e)+'"]';var s=a;switch(t){case"style":s=Dr(e);break;case"script":s=kr(e)}si.has(s)||(e=be({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),si.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(al(s))||t==="script"&&i.querySelector(sl(s))||(t=i.createElement("link"),un(t,"link",e),en(t),i.head.appendChild(t)))}}function xE(e,t){fa.m(e,t);var n=Vr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=kr(e)}if(!si.has(s)&&(e=be({rel:"modulepreload",href:e},t),si.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}i=n.createElement("link"),un(i,"link",e),en(i),n.head.appendChild(i)}}}function SE(e,t,n){fa.S(e,t,n);var i=Vr;if(i&&e){var a=fr(i).hoistableStyles,s=Dr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(al(s)))o.loading=5;else{e=be({rel:"stylesheet",href:e,"data-precedence":t},n),(n=si.get(s))&&Up(e,n);var l=r=i.createElement("link");en(l),un(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,cc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function yE(e,t){fa.X(e,t);var n=Vr;if(n&&e){var i=fr(n).hoistableScripts,a=kr(e),s=i.get(a);s||(s=n.querySelector(sl(a)),s||(e=be({src:e,async:!0},t),(t=si.get(a))&&Np(e,t),s=n.createElement("script"),en(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function ME(e,t){fa.M(e,t);var n=Vr;if(n&&e){var i=fr(n).hoistableScripts,a=kr(e),s=i.get(a);s||(s=n.querySelector(sl(a)),s||(e=be({src:e,async:!0,type:"module"},t),(t=si.get(a))&&Np(e,t),s=n.createElement("script"),en(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function U0(e,t,n,i){var a=(a=Pa.current)?Xc(a):null;if(!a)throw Error(it(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Dr(n.href),n=fr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Dr(n.href);var s=fr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(al(e)))&&!s._p&&(r.instance=s,r.state.loading=5),si.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},si.set(e,n),s||EE(a,e,n,r.state))),t&&i===null)throw Error(it(528,""));return r}if(t&&i!==null)throw Error(it(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kr(n),n=fr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(it(444,e))}}function Dr(e){return'href="'+ti(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function Ix(e){return be({},e,{"data-precedence":e.precedence,precedence:null})}function EE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),un(t,"link",n),en(t),e.head.appendChild(t))}function kr(e){return'[src="'+ti(e)+'"]'}function sl(e){return"script[async]"+e}function N0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return t.instance=i,en(i),i;var a=be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),en(i),un(i,"style",a),cc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Dr(n.href);var s=e.querySelector(al(a));if(s)return t.state.loading|=4,t.instance=s,en(s),s;i=Ix(n),(a=si.get(a))&&Up(i,a),s=(e.ownerDocument||e).createElement("link"),en(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),t.state.loading|=4,cc(s,n.precedence,e),t.instance=s;case"script":return s=kr(n.src),(a=e.querySelector(sl(s)))?(t.instance=a,en(a),a):(i=n,(a=si.get(s))&&(i=be({},n),Np(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),en(a),un(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(it(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,cc(i,n.precedence,e));return t.instance}function cc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Up(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Np(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uc=null;function L0(e,t,n){if(uc===null){var i=new Map,a=uc=new Map;a.set(n,i)}else a=uc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Jo]||s[rn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function O0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function TE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Dr(i.href),s=t.querySelector(al(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,en(s);return}s=t.ownerDocument||t,i=Ix(i),(a=si.get(a))&&Up(i,a),s=s.createElement("link"),en(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Wc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hf=0;function AE(e,t){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&hf===0&&(hf=62500*rE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qc=null;function fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qc=new Map,t.forEach(RE,e),qc=null,Wc.call(e))}function RE(e,t){if(!(t.state.loading&4)){var n=qc.get(e);if(n)var i=n.get(null);else{n=new Map,qc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Wc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Go={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:hs,_currentValue2:hs,_threadCount:0};function CE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Fx(e,t,n,i,a,s,r,o,l,c,d,p){return e=new CE(e,t,n,r,l,c,d,p,o),t=1,s===!0&&(t|=24),s=zn(3,null,null,t),e.current=s,s.stateNode=e,t=ap(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},op(s),e}function Hx(e){return e?(e=or,e):or}function Gx(e,t,n,i,a,s){a=Hx(a),i.context===null?i.context=a:i.pendingContext=a,i=Ia(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ba(e,i,t),n!==null&&(Tn(n,e,t),yo(n,e,t))}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lp(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function Vx(e){if(e.tag===13||e.tag===31){var t=Cs(e,67108864);t!==null&&Tn(t,e,67108864),Lp(e,67108864)}}function z0(e){if(e.tag===13||e.tag===31){var t=Vn();t=Xh(t);var n=Cs(e,t);n!==null&&Tn(n,e,t),Lp(e,t)}}var Yc=!0;function wE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=re.p;try{re.p=2,Op(e,t,n,i)}finally{re.p=s,Pt.T=a}}function DE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=re.p;try{re.p=8,Op(e,t,n,i)}finally{re.p=s,Pt.T=a}}function Op(e,t,n,i){if(Yc){var a=kd(i);if(a===null)ff(e,t,i,Zc,n),I0(e,i);else if(NE(a,e,t,n,i))i.stopPropagation();else if(I0(e,i),t&4&&-1<UE.indexOf(e)){for(;a!==null;){var s=Br(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ss(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Gn(r);o.entanglements[1]|=l,r&=~l}Li(s),!(se&6)&&(Ic=Fn()+500,il(0,!1))}}break;case 31:case 13:o=Cs(s,2),o!==null&&Tn(o,s,2),xu(),Lp(s,2)}if(s=kd(i),s===null&&ff(e,t,i,Zc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else ff(e,t,i,null,n)}}function kd(e){return e=Zh(e),Pp(e)}var Zc=null;function Pp(e){if(Zc=null,e=er(e),e!==null){var t=Zo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=l_(t),e!==null)return e;e=null}else if(n===31){if(e=c_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zc=e,null}function kx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gy()){case h_:return 2;case p_:return 8;case Ec:case _y:return 32;case m_:return 268435456;default:return 32}default:return 32}}var Xd=!1,Ga=null,Va=null,ka=null,Vo=new Map,ko=new Map,Ra=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function $r(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Br(t),t!==null&&Vx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function NE(e,t,n,i,a){switch(t){case"focusin":return Ga=$r(Ga,e,t,n,i,a),!0;case"dragenter":return Va=$r(Va,e,t,n,i,a),!0;case"mouseover":return ka=$r(ka,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Vo.set(s,$r(Vo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,ko.set(s,$r(ko.get(s)||null,e,t,n,i,a)),!0}return!1}function Xx(e){var t=er(e.target);if(t!==null){var n=Zo(t);if(n!==null){if(t=n.tag,t===13){if(t=l_(n),t!==null){e.blockedOn=t,ym(e.priority,function(){z0(n)});return}}else if(t===31){if(t=c_(n),t!==null){e.blockedOn=t,ym(e.priority,function(){z0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ld=i,n.target.dispatchEvent(i),ld=null}else return t=Br(n),t!==null&&Vx(t),e.blockedOn=n,!1;t.shift()}return!0}function B0(e,t,n){dc(e)&&n.delete(t)}function LE(){Xd=!1,Ga!==null&&dc(Ga)&&(Ga=null),Va!==null&&dc(Va)&&(Va=null),ka!==null&&dc(ka)&&(ka=null),Vo.forEach(B0),ko.forEach(B0)}function bl(e,t){e.blockedOn===t&&(e.blockedOn=null,Xd||(Xd=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,LE)))}var Tl=null;function F0(e){Tl!==e&&(Tl=e,je.unstable_scheduleCallback(je.unstable_NormalPriority,function(){Tl===e&&(Tl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Pp(i||n)===null)continue;break}var s=Br(n);s!==null&&(e.splice(t,3),t-=3,bd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ur(e){function t(l){return bl(l,e)}Ga!==null&&bl(Ga,e),Va!==null&&bl(Va,e),ka!==null&&bl(ka,e),Vo.forEach(t),ko.forEach(t);for(var n=0;n<Ra.length;n++){var i=Ra[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ra.length&&(n=Ra[0],n.blockedOn===null);)Xx(n),n.blockedOn===null&&Ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Rn]||null;if(typeof s=="function")r||F0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Rn]||null)o=r.formAction;else if(Pp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),F0(n)}}}function Wx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function zp(e){this._internalRoot=e}Mu.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(it(409));var n=t.current,i=Vn();Gx(n,i,e,t,null,null)};Mu.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gx(e.current,2,null,e,null,null),xu(),t[Ir]=null}};function Mu(e){this._internalRoot=e}Mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=S_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ra.length&&t!==0&&t<Ra[n].priority;n++);Ra.splice(n,0,e),n===0&&Xx(e)}};var H0=r_.version;if(H0!=="19.2.8")throw Error(it(527,H0,"19.2.8"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(it(188)):(e=Object.keys(e).join(","),Error(it(268,e)));return e=cy(t),e=e!==null?u_(e):null,e=e===null?null:e.stateNode,e};var OE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Ko=Al.inject(OE),Hn=Al}catch{}}su.createRoot=function(e,t){if(!o_(e))throw Error(it(299));var n=!1,i="",a=zv,s=Iv,r=Bv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Fx(e,1,!1,null,null,n,i,null,a,s,r,Wx),e[Ir]=t.current,Dp(e),new zp(t)};su.hydrateRoot=function(e,t,n){if(!o_(e))throw Error(it(299));var i=!1,a="",s=zv,r=Iv,o=Bv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Fx(e,1,!0,t,n??null,i,a,l,s,r,o,Wx),t.context=Hx(null),n=t.current,i=Vn(),i=Xh(i),a=Ia(i),a.callback=null,Ba(n,a,i),n=i,t.current.lanes=n,Qo(t,n),Li(t),e[Ir]=t.current,Dp(e),new Mu(t)};su.version="19.2.8";function qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qx)}catch(e){console.error(e)}}qx(),t_.exports=su;var PE=t_.exports;const zE=Xg(PE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="185",IE=0,G0=1,BE=2,hc=1,FE=2,po=3,Za=0,An=1,Si=2,na=0,vr=1,V0=2,k0=3,X0=4,HE=5,cs=100,GE=101,VE=102,kE=103,XE=104,WE=200,qE=201,YE=202,ZE=203,Wd=204,qd=205,KE=206,jE=207,QE=208,JE=209,$E=210,t1=211,e1=212,n1=213,i1=214,Yd=0,Zd=1,Kd=2,Nr=3,jd=4,Qd=5,Jd=6,$d=7,Yx=0,a1=1,s1=2,Ri=0,Zx=1,Kx=2,jx=3,Qx=4,Jx=5,$x=6,tS=7,eS=300,Es=301,Lr=302,pf=303,mf=304,Eu=306,th=1e3,Qi=1001,eh=1002,cn=1003,r1=1004,Rl=1005,pn=1006,gf=1007,fs=1008,In=1009,nS=1010,iS=1011,Xo=1012,Bp=1013,Di=1014,bi=1015,ca=1016,Fp=1017,Hp=1018,Wo=1020,aS=35902,sS=35899,rS=1021,oS=1022,di=1023,ua=1026,ds=1027,lS=1028,Gp=1029,bs=1030,Vp=1031,kp=1033,pc=33776,mc=33777,gc=33778,_c=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37488,uh=37489,Kc=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,Sh=37816,yh=37817,Mh=37818,Eh=37819,bh=37820,Th=37821,Ah=36492,Rh=36494,Ch=36495,wh=36283,Dh=36284,jc=36285,Uh=36286,o1=3200,Nh=0,l1=1,Ca="",Kn="srgb",Qc="srgb-linear",Jc="linear",oe="srgb",Ps=7680,W0=519,c1=512,u1=513,f1=514,Xp=515,d1=516,h1=517,Wp=518,p1=519,q0=35044,Y0="300 es",Ti=2e3,qo=2001;function m1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $c(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function g1(){const e=$c("canvas");return e.style.display="block",e}const Z0={};function K0(...e){const t="THREE."+e.shift();console.log(t,...e)}function cS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ot(...e){e=cS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ie(...e){e=cS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xr(...e){const t=e.join(" ");t in Z0||(Z0[t]=!0,Ot(...e))}function _1(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const v1={[Yd]:Zd,[Kd]:Jd,[jd]:$d,[Nr]:Qd,[Zd]:Yd,[Jd]:Kd,[$d]:jd,[Qd]:Nr};class Ds{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,Lh=180/Math.PI;function rl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[e&255]+dn[e>>8&255]+dn[e>>16&255]+dn[e>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function x1(e,t){return(e%t+t)%t}function vf(e,t,n){return(1-n)*e+n*t}function to(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $p=class $p{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$p.prototype.isVector2=!0;let qt=$p;class Xr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],S=s[r+2],T=s[r+3];if(p!==T||l!==u||c!==h||d!==S){let _=l*u+c*h+d*S+p*T;_<0&&(u=-u,h=-h,S=-S,T=-T,_=-_);let f=1-o;if(_<.9995){const m=Math.acos(_),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+u*o,c=c*f+h*o,d=d*f+S*o,p=p*f+T*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+S*o,p=p*f+T*o;const m=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=m,c*=m,d*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],S=s[r+3];return t[n]=o*S+d*p+l*h-c*u,t[n+1]=l*S+d*u+c*p-o*h,t[n+2]=c*S+d*h+o*u-l*p,t[n+3]=d*S-o*p-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),u=l(i/2),h=l(a/2),S=l(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"YXZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"ZXY":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"ZYX":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"YZX":this._x=u*d*p+c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p-u*h*S;break;case"XZY":this._x=u*d*p-c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p+u*h*S;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tm=class tm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(j0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(j0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-s*p,this.z=a+l*p+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xf.copy(this).projectOnVector(t),this.sub(xf)}reflect(t){return this.sub(xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tm.prototype.isVector3=!0;let H=tm;const xf=new H,j0=new Xr,em=class em{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],S=i[8],T=a[0],_=a[3],f=a[6],m=a[1],y=a[4],v=a[7],b=a[2],M=a[5],R=a[8];return s[0]=r*T+o*m+l*b,s[3]=r*_+o*y+l*M,s[6]=r*f+o*v+l*R,s[1]=c*T+d*m+p*b,s[4]=c*_+d*y+p*M,s[7]=c*f+d*v+p*R,s[2]=u*T+h*m+S*b,s[5]=u*_+h*y+S*M,s[8]=u*f+h*v+S*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*r-o*c,u=o*l-d*s,h=c*s-r*l,S=n*p+i*u+a*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=p*T,t[1]=(a*c-d*i)*T,t[2]=(o*i-a*r)*T,t[3]=u*T,t[4]=(d*n-a*l)*T,t[5]=(a*s-o*n)*T,t[6]=h*T,t[7]=(i*l-c*n)*T,t[8]=(r*n-i*s)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sf.makeScale(t,n)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sf.makeRotation(-t)),this}translate(t,n){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};em.prototype.isMatrix3=!0;let Bt=em;const Sf=new Bt,Q0=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S1(){const e={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===oe&&(a.r=ia(a.r),a.g=ia(a.g),a.b=ia(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ca?Jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Qc]:{primaries:t,whitePoint:i,transfer:Jc,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),e}const Jt=S1();function ia(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Sr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let zs;class y1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=$c("canvas")),zs.width=t.width,zs.height=t.height;const a=zs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=$c("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ia(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ia(n[i]/255)*255):n[i]=ia(n[i]);return{data:n,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let M1=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(yf(a[r].image)):s.push(yf(a[r]))}else s=yf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function yf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?y1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let E1=0;const Mf=new H;class vn extends Ds{constructor(t=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Qi,a=Qi,s=pn,r=fs,o=di,l=In,c=vn.DEFAULT_ANISOTROPY,d=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=rl(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case th:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case th:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=eS;vn.DEFAULT_ANISOTROPY=1;const nm=class nm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],S=l[9],T=l[2],_=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-T)<.01&&Math.abs(S-_)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+T)<.1&&Math.abs(S+_)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(h+1)/2,b=(f+1)/2,M=(d+u)/4,R=(p+T)/4,g=(S+_)/4;return y>v&&y>b?y<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(y),a=M/i,s=R/i):v>b?v<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),i=M/a,s=g/a):b<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(b),i=R/s,a=g/s),this.set(i,a,s,n),this}let m=Math.sqrt((_-S)*(_-S)+(p-T)*(p-T)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(_-S)/m,this.y=(p-T)/m,this.z=(u-d)/m,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nm.prototype.isVector4=!0;let Ce=nm;class b1 extends Ds{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new vn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new qp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends b1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class uS extends vn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class T1 extends vn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=class iu{constructor(t,n,i,a,s,r,o,l,c,d,p,u,h,S,T,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,p,u,h,S,T,_)}set(t,n,i,a,s,r,o,l,c,d,p,u,h,S,T,_){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=S,f[11]=T,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Is.setFromMatrixColumn(t,0).length(),s=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const u=r*d,h=r*p,S=o*d,T=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+S*c,n[5]=u-T*c,n[9]=-o*l,n[2]=T-u*c,n[6]=S+h*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,h=l*p,S=c*d,T=c*p;n[0]=u+T*o,n[4]=S*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=h*o-S,n[6]=T+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,h=l*p,S=c*d,T=c*p;n[0]=u-T*o,n[4]=-r*p,n[8]=S+h*o,n[1]=h+S*o,n[5]=r*d,n[9]=T-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,h=r*p,S=o*d,T=o*p;n[0]=l*d,n[4]=S*c-h,n[8]=u*c+T,n[1]=l*p,n[5]=T*c+u,n[9]=h*c-S,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,h=r*c,S=o*l,T=o*c;n[0]=l*d,n[4]=T-u*p,n[8]=S*p+h,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+S,n[10]=u-T*p}else if(t.order==="XZY"){const u=r*l,h=r*c,S=o*l,T=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+T,n[5]=r*d,n[9]=h*p-S,n[2]=S*p-h,n[6]=o*d,n[10]=T*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A1,t,R1)}lookAt(t,n,i){const a=this.elements;return Un.subVectors(t,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ga.crossVectors(i,Un),ga.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ga.crossVectors(i,Un)),ga.normalize(),Cl.crossVectors(Un,ga),a[0]=ga.x,a[4]=Cl.x,a[8]=Un.x,a[1]=ga.y,a[5]=Cl.y,a[9]=Un.y,a[2]=ga.z,a[6]=Cl.z,a[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],S=i[2],T=i[6],_=i[10],f=i[14],m=i[3],y=i[7],v=i[11],b=i[15],M=a[0],R=a[4],g=a[8],A=a[12],U=a[1],N=a[5],z=a[9],J=a[13],tt=a[2],k=a[6],O=a[10],P=a[14],Z=a[3],et=a[7],ot=a[11],dt=a[15];return s[0]=r*M+o*U+l*tt+c*Z,s[4]=r*R+o*N+l*k+c*et,s[8]=r*g+o*z+l*O+c*ot,s[12]=r*A+o*J+l*P+c*dt,s[1]=d*M+p*U+u*tt+h*Z,s[5]=d*R+p*N+u*k+h*et,s[9]=d*g+p*z+u*O+h*ot,s[13]=d*A+p*J+u*P+h*dt,s[2]=S*M+T*U+_*tt+f*Z,s[6]=S*R+T*N+_*k+f*et,s[10]=S*g+T*z+_*O+f*ot,s[14]=S*A+T*J+_*P+f*dt,s[3]=m*M+y*U+v*tt+b*Z,s[7]=m*R+y*N+v*k+b*et,s[11]=m*g+y*z+v*O+b*ot,s[15]=m*A+y*J+v*P+b*dt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],u=t[10],h=t[14],S=t[3],T=t[7],_=t[11],f=t[15],m=l*h-c*u,y=o*h-c*p,v=o*u-l*p,b=r*h-c*d,M=r*u-l*d,R=r*p-o*d;return n*(T*m-_*y+f*v)-i*(S*m-_*b+f*M)+a*(S*y-T*b+f*R)-s*(S*v-T*M+_*R)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return n*(r*d-o*c)-i*(s*d-o*l)+a*(s*c-r*l)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],u=t[10],h=t[11],S=t[12],T=t[13],_=t[14],f=t[15],m=n*o-i*r,y=n*l-a*r,v=n*c-s*r,b=i*l-a*o,M=i*c-s*o,R=a*c-s*l,g=d*T-p*S,A=d*_-u*S,U=d*f-h*S,N=p*_-u*T,z=p*f-h*T,J=u*f-h*_,tt=m*J-y*z+v*N+b*U-M*A+R*g;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/tt;return t[0]=(o*J-l*z+c*N)*k,t[1]=(a*z-i*J-s*N)*k,t[2]=(T*R-_*M+f*b)*k,t[3]=(u*M-p*R-h*b)*k,t[4]=(l*U-r*J-c*A)*k,t[5]=(n*J-a*U+s*A)*k,t[6]=(_*v-S*R-f*y)*k,t[7]=(d*R-u*v+h*y)*k,t[8]=(r*z-o*U+c*g)*k,t[9]=(i*U-n*z-s*g)*k,t[10]=(S*M-T*v+f*m)*k,t[11]=(p*v-d*M-h*m)*k,t[12]=(o*A-r*N-l*g)*k,t[13]=(n*N-i*A+a*g)*k,t[14]=(T*y-S*b-_*m)*k,t[15]=(d*b-p*y+u*m)*k,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,p=o+o,u=s*c,h=s*d,S=s*p,T=r*d,_=r*p,f=o*p,m=l*c,y=l*d,v=l*p,b=i.x,M=i.y,R=i.z;return a[0]=(1-(T+f))*b,a[1]=(h+v)*b,a[2]=(S-y)*b,a[3]=0,a[4]=(h-v)*M,a[5]=(1-(u+f))*M,a[6]=(_+m)*M,a[7]=0,a[8]=(S+y)*R,a[9]=(_-m)*R,a[10]=(1-(u+T))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Is.set(a[0],a[1],a[2]).length();const o=Is.set(a[4],a[5],a[6]).length(),l=Is.set(a[8],a[9],a[10]).length();s<0&&(r=-r),oi.copy(this);const c=1/r,d=1/o,p=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=d,oi.elements[5]*=d,oi.elements[6]*=d,oi.elements[8]*=p,oi.elements[9]*=p,oi.elements[10]*=p,n.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Ti,l=!1){const c=this.elements,d=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),h=(i+a)/(i-a);let S,T;if(l)S=s/(r-s),T=r*s/(r-s);else if(o===Ti)S=-(r+s)/(r-s),T=-2*r*s/(r-s);else if(o===qo)S=-r/(r-s),T=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Ti,l=!1){const c=this.elements,d=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),h=-(i+a)/(i-a);let S,T;if(l)S=1/(r-s),T=r/(r-s);else if(o===Ti)S=-2/(r-s),T=-(r+s)/(r-s);else if(o===qo)S=-1/(r-s),T=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=S,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};iu.prototype.isMatrix4=!0;let we=iu;const Is=new H,oi=new we,A1=new H(0,0,0),R1=new H(1,1,1),ga=new H,Cl=new H,Un=new H,$0=new we,tg=new Xr;class Ka{constructor(t=0,n=0,i=0,a=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return $0.makeRotationFromQuaternion(t),this.setFromRotationMatrix($0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return tg.setFromEuler(this),this.setFromQuaternion(tg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class fS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let C1=0;const eg=new H,Bs=new Xr,Bi=new we,wl=new H,eo=new H,w1=new H,D1=new Xr,ng=new H(1,0,0),ig=new H(0,1,0),ag=new H(0,0,1),sg={type:"added"},U1={type:"removed"},Fs={type:"childadded",child:null},Ef={type:"childremoved",child:null};class an extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new H,n=new Ka,i=new Xr,a=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new Bt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(ng,t)}rotateY(t){return this.rotateOnAxis(ig,t)}rotateZ(t){return this.rotateOnAxis(ag,t)}translateOnAxis(t,n){return eg.copy(t).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ng,t)}translateY(t){return this.translateOnAxis(ig,t)}translateZ(t){return this.translateOnAxis(ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?wl.copy(t):wl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(eo,wl,this.up):Bi.lookAt(wl,eo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(U1),Ef.child=t,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,w1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,D1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),p=r(t.shapes),u=r(t.skeletons),h=r(t.animations),S=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),S.length>0&&(i.nodes=S)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dl extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const T of t.hand.values()){const _=n.getJointPose(T,i),f=this._getHandJoint(c,T);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,S=.005;c.inputState.pinching&&u>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Dl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const dS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_a={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Tf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Jt.workingColorSpace){if(t=x1(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Tf(r,s,t+1/3),this.g=Tf(r,s,t),this.b=Tf(r,s,t-1/3)}return Jt.colorSpaceToWorking(this,a),this}setStyle(t,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ot("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Kn){const i=dS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Jt.workingToColorSpace(hn.copy(this),t),Math.round($t(hn.r*255,0,255))*65536+Math.round($t(hn.g*255,0,255))*256+Math.round($t(hn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(hn.copy(this),n);const i=hn.r,a=hn.g,s=hn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(hn.copy(this),n),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Kn){Jt.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,a=hn.b;return t!==Kn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(_a),this.setHSL(_a.h+t,_a.s+n,_a.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(_a),t.getHSL(Ul);const i=vf(_a.h,Ul.h,n),a=vf(_a.s,Ul.s,n),s=vf(_a.l,Ul.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new jt;jt.NAMES=dS;class Yp{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=n,this.far=i}clone(){return new Yp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class L1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ka,this.environmentIntensity=1,this.environmentRotation=new Ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const li=new H,Fi=new H,Af=new H,Hi=new H,Hs=new H,Gs=new H,rg=new H,Rf=new H,Cf=new H,wf=new H,Df=new Ce,Uf=new Ce,Nf=new Ce;class fi{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),li.subVectors(t,n),a.cross(li);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){li.subVectors(a,n),Fi.subVectors(i,n),Af.subVectors(t,n);const r=li.dot(li),o=li.dot(Fi),l=li.dot(Af),c=Fi.dot(Fi),d=Fi.dot(Af),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,S=(r*d-o*l)*u;return s.set(1-h-S,S,h)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(r,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Df.setScalar(0),Uf.setScalar(0),Nf.setScalar(0),Df.fromBufferAttribute(t,n),Uf.fromBufferAttribute(t,i),Nf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Df,s.x),r.addScaledVector(Uf,s.y),r.addScaledVector(Nf,s.z),r}static isFrontFacing(t,n,i,a){return li.subVectors(i,n),Fi.subVectors(t,n),li.cross(Fi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return fi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return fi.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Hs.subVectors(a,i),Gs.subVectors(s,i),Rf.subVectors(t,i);const l=Hs.dot(Rf),c=Gs.dot(Rf);if(l<=0&&c<=0)return n.copy(i);Cf.subVectors(t,a);const d=Hs.dot(Cf),p=Gs.dot(Cf);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Hs,r);wf.subVectors(t,s);const h=Hs.dot(wf),S=Gs.dot(wf);if(S>=0&&h<=S)return n.copy(s);const T=h*c-l*S;if(T<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Gs,o);const _=d*S-h*p;if(_<=0&&p-d>=0&&h-S>=0)return rg.subVectors(s,a),o=(p-d)/(p-d+(h-S)),n.copy(a).addScaledVector(rg,o);const f=1/(_+T+u);return r=T*f,o=u*f,n.copy(i).addScaledVector(Hs,r).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ol{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ci):ci.fromBufferAttribute(s,r),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(t.matrixWorld),this.union(Nl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Ll.subVectors(this.max,no),Vs.subVectors(t.a,no),ks.subVectors(t.b,no),Xs.subVectors(t.c,no),va.subVectors(ks,Vs),xa.subVectors(Xs,ks),ts.subVectors(Vs,Xs);let n=[0,-va.z,va.y,0,-xa.z,xa.y,0,-ts.z,ts.y,va.z,0,-va.x,xa.z,0,-xa.x,ts.z,0,-ts.x,-va.y,va.x,0,-xa.y,xa.x,0,-ts.y,ts.x,0];return!Lf(n,Vs,ks,Xs,Ll)||(n=[1,0,0,0,1,0,0,0,1],!Lf(n,Vs,ks,Xs,Ll))?!1:(Ol.crossVectors(va,xa),n=[Ol.x,Ol.y,Ol.z],Lf(n,Vs,ks,Xs,Ll))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gi=[new H,new H,new H,new H,new H,new H,new H,new H],ci=new H,Nl=new ol,Vs=new H,ks=new H,Xs=new H,va=new H,xa=new H,ts=new H,no=new H,Ll=new H,Ol=new H,es=new H;function Lf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){es.fromArray(e,s);const o=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),l=t.dot(es),c=n.dot(es),d=i.dot(es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const He=new H,Pl=new qt;let O1=0;class wi extends Ds{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=q0,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(t),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=to(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=to(n,this.array)),n}setX(t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=to(n,this.array)),n}setY(t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=to(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=to(n,this.array)),n}setW(t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),a=Mn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),a=Mn(a,this.array),s=Mn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hS extends wi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class pS extends wi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Ke extends wi{constructor(t,n,i){super(new Float32Array(t),n,i)}}const P1=new ol,io=new H,Of=new H;class bu{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):P1.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const n=io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(io,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Of.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Of)),this.expandByPoint(io.copy(t.center).sub(Of))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let z1=0;const qn=new we,Pf=new an,Ws=new H,Nn=new ol,ao=new ol,$e=new H;class wn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m1(t)?pS:hS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,n,i){return qn.makeTranslation(t,n,i),this.applyMatrix4(qn),this}scale(t,n,i){return qn.makeScale(t,n,i),this.applyMatrix4(qn),this}lookAt(t){return Pf.lookAt(t),Pf.updateMatrix(),this.applyMatrix4(Pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];ao.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Nn.min,ao.min),Nn.expandByPoint($e),$e.addVectors(Nn.max,ao.max),Nn.expandByPoint($e)):(Nn.expandByPoint(ao.min),Nn.expandByPoint(ao.max))}Nn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)$e.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared($e));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)$e.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),$e.add(Ws)),a=Math.max(a,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new wi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new H,l[g]=new H;const c=new H,d=new H,p=new H,u=new qt,h=new qt,S=new qt,T=new H,_=new H;function f(g,A,U){c.fromBufferAttribute(i,g),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,U),u.fromBufferAttribute(s,g),h.fromBufferAttribute(s,A),S.fromBufferAttribute(s,U),d.sub(c),p.sub(c),h.sub(u),S.sub(u);const N=1/(h.x*S.y-S.x*h.y);isFinite(N)&&(T.copy(d).multiplyScalar(S.y).addScaledVector(p,-h.y).multiplyScalar(N),_.copy(p).multiplyScalar(h.x).addScaledVector(d,-S.x).multiplyScalar(N),o[g].add(T),o[A].add(T),o[U].add(T),l[g].add(_),l[A].add(_),l[U].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let g=0,A=m.length;g<A;++g){const U=m[g],N=U.start,z=U.count;for(let J=N,tt=N+z;J<tt;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const y=new H,v=new H,b=new H,M=new H;function R(g){b.fromBufferAttribute(a,g),M.copy(b);const A=o[g];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),v.crossVectors(M,A);const N=v.dot(l[g])<0?-1:1;r.setXYZW(g,y.x,y.y,y.z,N)}for(let g=0,A=m.length;g<A;++g){const U=m[g],N=U.start,z=U.count;for(let J=N,tt=N+z;J<tt;J+=3)R(t.getX(J+0)),R(t.getX(J+1)),R(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new H,s=new H,r=new H,o=new H,l=new H,c=new H,d=new H,p=new H;if(t)for(let u=0,h=t.count;u<h;u+=3){const S=t.getX(u+0),T=t.getX(u+1),_=t.getX(u+2);a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,T),r.fromBufferAttribute(n,_),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,S=0;for(let T=0,_=l.length;T<_;T++){o.isInterleavedBufferAttribute?h=l[T]*o.data.stride+o.offset:h=l[T]*d;for(let f=0;f<d;f++)u[S++]=c[h++]}return new wi(u,d,p)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=t(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let I1=0;class Wr extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=vr,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ot(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Za&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wd&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vi=new H,zf=new H,zl=new H,Sa=new H,If=new H,Il=new H,Bf=new H;class mS{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Vi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){zf.copy(t).add(n).multiplyScalar(.5),zl.copy(n).sub(t).normalize(),Sa.copy(this.origin).sub(zf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(zl),o=Sa.dot(this.direction),l=-Sa.dot(zl),c=Sa.lengthSq(),d=Math.abs(1-r*r);let p,u,h,S;if(d>0)if(p=r*l-o,u=r*o-l,S=s*d,p>=0)if(u>=-S)if(u<=S){const T=1/d;p*=T,u*=T,h=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-S?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=S?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(zf).addScaledVector(zl,u),h}intersectSphere(t,n){Vi.subVectors(t.center,this.origin);const i=Vi.dot(this.direction),a=Vi.dot(Vi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,n,i,a,s){If.subVectors(n,t),Il.subVectors(i,t),Bf.crossVectors(If,Il);let r=this.direction.dot(Bf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sa.subVectors(this.origin,t);const l=o*this.direction.dot(Il.crossVectors(Sa,Il));if(l<0)return null;const c=o*this.direction.dot(If.cross(Sa));if(c<0||l+c>r)return null;const d=-o*Sa.dot(Bf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gS extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ka,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const og=new we,ns=new mS,Bl=new bu,lg=new H,Fl=new H,Hl=new H,Gl=new H,Ff=new H,Vl=new H,cg=new H,kl=new H;class Ye extends an{constructor(t=new wn,n=new gS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(Ff.fromBufferAttribute(p,t),r?Vl.addScaledVector(Ff,d):Vl.addScaledVector(Ff.sub(n),d))}n.add(Vl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),ns.copy(t.ray).recast(t.near),!(Bl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Bl,lg)===null||ns.origin.distanceToSquared(lg)>(t.far-t.near)**2))&&(og.copy(s).invert(),ns.copy(t.ray).applyMatrix4(og),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ns)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,T=u.length;S<T;S++){const _=u[S],f=r[_.materialIndex],m=Math.max(_.start,h.start),y=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let v=m,b=y;v<b;v+=3){const M=o.getX(v),R=o.getX(v+1),g=o.getX(v+2);a=Xl(this,f,t,i,c,d,p,M,R,g),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),T=Math.min(o.count,h.start+h.count);for(let _=S,f=T;_<f;_+=3){const m=o.getX(_),y=o.getX(_+1),v=o.getX(_+2);a=Xl(this,r,t,i,c,d,p,m,y,v),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,T=u.length;S<T;S++){const _=u[S],f=r[_.materialIndex],m=Math.max(_.start,h.start),y=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let v=m,b=y;v<b;v+=3){const M=v,R=v+1,g=v+2;a=Xl(this,f,t,i,c,d,p,M,R,g),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),T=Math.min(l.count,h.start+h.count);for(let _=S,f=T;_<f;_+=3){const m=_,y=_+1,v=_+2;a=Xl(this,r,t,i,c,d,p,m,y,v),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function B1(e,t,n,i,a,s,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Za,o),l===null)return null;kl.copy(o),kl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(kl);return c<n.near||c>n.far?null:{distance:c,point:kl.clone(),object:e}}function Xl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Fl),e.getVertexPosition(l,Hl),e.getVertexPosition(c,Gl);const d=B1(e,t,n,i,Fl,Hl,Gl,cg);if(d){const p=new H;fi.getBarycoord(cg,Fl,Hl,Gl,p),a&&(d.uv=fi.getInterpolatedAttribute(a,o,l,c,p,new qt)),s&&(d.uv1=fi.getInterpolatedAttribute(s,o,l,c,p,new qt)),r&&(d.normal=fi.getInterpolatedAttribute(r,o,l,c,p,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};fi.getNormal(Fl,Hl,Gl,u.normal),d.face=u,d.barycoord=p}return d}class F1 extends vn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=cn,d=cn,p,u){super(null,r,o,l,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=new H,H1=new H,G1=new Bt;class ls{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Hf.subVectors(i,n).cross(H1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Hf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||G1.getNormalMatrix(t),a=this.coplanarPoint(Hf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new bu,V1=new qt(.5,.5),Wl=new H;class Zp{constructor(t=new ls,n=new ls,i=new ls,a=new ls,s=new ls,r=new ls){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],S=s[8],T=s[9],_=s[10],f=s[11],m=s[12],y=s[13],v=s[14],b=s[15];if(a[0].setComponents(c-r,h-d,f-S,b-m).normalize(),a[1].setComponents(c+r,h+d,f+S,b+m).normalize(),a[2].setComponents(c+o,h+p,f+T,b+y).normalize(),a[3].setComponents(c-o,h-p,f-T,b-y).normalize(),i)a[4].setComponents(l,u,_,v).normalize(),a[5].setComponents(c-l,h-u,f-_,b-v).normalize();else if(a[4].setComponents(c-l,h-u,f-_,b-v).normalize(),n===Ti)a[5].setComponents(c+l,h+u,f+_,b+v).normalize();else if(n===qo)a[5].setComponents(l,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);const n=V1.distanceTo(t.center);return is.radius=.7071067811865476+n,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Wl.x=a.normal.x>0?t.max.x:t.min.x,Wl.y=a.normal.y>0?t.max.y:t.min.y,Wl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _S extends Wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tu=new H,eu=new H,ug=new we,so=new mS,ql=new bu,Gf=new H,fg=new H;class k1 extends an{constructor(t=new wn,n=new _S){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)tu.fromBufferAttribute(n,a-1),eu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=tu.distanceTo(eu);t.setAttribute("lineDistance",new Ke(i,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(a),ql.radius+=s,t.ray.intersectsSphere(ql)===!1)return;ug.copy(a).invert(),so.copy(t.ray).applyMatrix4(ug);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,r.start),S=Math.min(d.count,r.start+r.count);for(let T=h,_=S-1;T<_;T+=c){const f=d.getX(T),m=d.getX(T+1),y=Yl(this,t,so,l,f,m,T);y&&n.push(y)}if(this.isLineLoop){const T=d.getX(S-1),_=d.getX(h),f=Yl(this,t,so,l,T,_,S-1);f&&n.push(f)}}else{const h=Math.max(0,r.start),S=Math.min(u.count,r.start+r.count);for(let T=h,_=S-1;T<_;T+=c){const f=Yl(this,t,so,l,T,T+1,T);f&&n.push(f)}if(this.isLineLoop){const T=Yl(this,t,so,l,S-1,h,S-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(tu.fromBufferAttribute(o,a),eu.fromBufferAttribute(o,s),n.distanceSqToSegment(tu,eu,Gf,fg)>i)return;Gf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Gf);if(!(c<t.near||c>t.far))return{distance:c,point:fg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class vS extends vn{constructor(t=[],n=Es,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Or extends vn{constructor(t,n,i=Di,a,s,r,o=cn,l=cn,c,d=ua,p=1){if(d!==ua&&d!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:p};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class X1 extends Or{constructor(t,n=Di,i=Es,a,s,r=cn,o=cn,l,c=ua){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xS extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ji extends wn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],p=[];let u=0,h=0;S("z","y","x",-1,-1,i,n,t,r,s,0),S("z","y","x",1,-1,i,n,-t,r,s,1),S("x","z","y",1,1,t,i,n,a,r,2),S("x","z","y",1,-1,t,i,-n,a,r,3),S("x","y","z",1,-1,t,n,i,a,s,4),S("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function S(T,_,f,m,y,v,b,M,R,g,A){const U=v/R,N=b/g,z=v/2,J=b/2,tt=M/2,k=R+1,O=g+1;let P=0,Z=0;const et=new H;for(let ot=0;ot<O;ot++){const dt=ot*N-J;for(let St=0;St<k;St++){const Wt=St*U-z;et[T]=Wt*m,et[_]=dt*y,et[f]=tt,c.push(et.x,et.y,et.z),et[T]=0,et[_]=0,et[f]=M>0?1:-1,d.push(et.x,et.y,et.z),p.push(St/R),p.push(1-ot/g),P+=1}}for(let ot=0;ot<g;ot++)for(let dt=0;dt<R;dt++){const St=u+dt+k*ot,Wt=u+dt+k*(ot+1),ee=u+(dt+1)+k*(ot+1),kt=u+(dt+1)+k*ot;l.push(St,Wt,kt),l.push(Wt,ee,kt),Z+=6}o.addGroup(h,Z,A),h+=Z,u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Yo extends wn{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],p=[],u=[],h=[];let S=0;const T=[],_=i/2;let f=0;m(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function m(){const v=new H,b=new H;let M=0;const R=(n-t)/i;for(let g=0;g<=s;g++){const A=[],U=g/s,N=U*(n-t)+t;for(let z=0;z<=a;z++){const J=z/a,tt=J*l+o,k=Math.sin(tt),O=Math.cos(tt);b.x=N*k,b.y=-U*i+_,b.z=N*O,p.push(b.x,b.y,b.z),v.set(k,R,O).normalize(),u.push(v.x,v.y,v.z),h.push(J,1-U),A.push(S++)}T.push(A)}for(let g=0;g<a;g++)for(let A=0;A<s;A++){const U=T[A][g],N=T[A+1][g],z=T[A+1][g+1],J=T[A][g+1];(t>0||A!==0)&&(d.push(U,N,J),M+=3),(n>0||A!==s-1)&&(d.push(N,z,J),M+=3)}c.addGroup(f,M,0),f+=M}function y(v){const b=S,M=new qt,R=new H;let g=0;const A=v===!0?t:n,U=v===!0?1:-1;for(let z=1;z<=a;z++)p.push(0,_*U,0),u.push(0,U,0),h.push(.5,.5),S++;const N=S;for(let z=0;z<=a;z++){const tt=z/a*l+o,k=Math.cos(tt),O=Math.sin(tt);R.x=A*O,R.y=_*U,R.z=A*k,p.push(R.x,R.y,R.z),u.push(0,U,0),M.x=k*.5+.5,M.y=O*.5*U+.5,h.push(M.x,M.y),S++}for(let z=0;z<a;z++){const J=b+z,tt=N+z;v===!0?d.push(tt,tt+1,J):d.push(tt+1,tt,J),g+=3}c.addGroup(f,g,v===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nu extends Yo{constructor(t=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new nu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tu extends wn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const y=new H,v=new H,b=new H;for(let M=0;M<n.length;M+=3)h(n[M+0],y),h(n[M+1],v),h(n[M+2],b),l(y,v,b,m)}function l(m,y,v,b){const M=b+1,R=[];for(let g=0;g<=M;g++){R[g]=[];const A=m.clone().lerp(v,g/M),U=y.clone().lerp(v,g/M),N=M-g;for(let z=0;z<=N;z++)z===0&&g===M?R[g][z]=A:R[g][z]=A.clone().lerp(U,z/N)}for(let g=0;g<M;g++)for(let A=0;A<2*(M-g)-1;A++){const U=Math.floor(A/2);A%2===0?(u(R[g][U+1]),u(R[g+1][U]),u(R[g][U])):(u(R[g][U+1]),u(R[g+1][U+1]),u(R[g+1][U]))}}function c(m){const y=new H;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(m),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function d(){const m=new H;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];const v=_(m)/2/Math.PI+.5,b=f(m)/Math.PI+.5;r.push(v,1-b)}S(),p()}function p(){for(let m=0;m<r.length;m+=6){const y=r[m+0],v=r[m+2],b=r[m+4],M=Math.max(y,v,b),R=Math.min(y,v,b);M>.9&&R<.1&&(y<.2&&(r[m+0]+=1),v<.2&&(r[m+2]+=1),b<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function h(m,y){const v=m*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function S(){const m=new H,y=new H,v=new H,b=new H,M=new qt,R=new qt,g=new qt;for(let A=0,U=0;A<s.length;A+=9,U+=6){m.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),M.set(r[U+0],r[U+1]),R.set(r[U+2],r[U+3]),g.set(r[U+4],r[U+5]),b.copy(m).add(y).add(v).divideScalar(3);const N=_(b);T(M,U+0,m,N),T(R,U+2,y,N),T(g,U+4,v,N)}}function T(m,y,v,b){b<0&&m.x===1&&(r[y]=m.x-1),v.x===0&&v.z===0&&(r[y]=b/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.vertices,t.indices,t.radius,t.detail)}}class Kp extends Tu{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Kp(t.radius,t.detail)}}class jp extends Tu{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new jp(t.radius,t.detail)}}class ll extends wn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=t/o,u=n/l,h=[],S=[],T=[],_=[];for(let f=0;f<d;f++){const m=f*u-r;for(let y=0;y<c;y++){const v=y*p-s;S.push(v,-m,0),T.push(0,0,1),_.push(y/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const y=m+c*f,v=m+c*(f+1),b=m+1+c*(f+1),M=m+1+c*f;h.push(y,v,M),h.push(v,b,M)}this.setIndex(h),this.setAttribute("position",new Ke(S,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qp extends wn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],p=new H,u=new H,h=[],S=[],T=[],_=[];for(let f=0;f<=i;f++){const m=[],y=f/i,v=r+y*o,b=t*Math.cos(v),M=Math.sqrt(t*t-b*b);let R=0;f===0&&r===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let g=0;g<=n;g++){const A=g/n,U=a+A*s;p.x=-M*Math.cos(U),p.y=b,p.z=M*Math.sin(U),S.push(p.x,p.y,p.z),u.copy(p).normalize(),T.push(u.x,u.y,u.z),_.push(A+R,1-y),m.push(c++)}d.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const y=d[f][m+1],v=d[f][m],b=d[f+1][m],M=d[f+1][m+1];(f!==0||r>0)&&h.push(y,v,M),(f!==i-1||l<Math.PI)&&h.push(v,b,M)}this.setIndex(h),this.setAttribute("position",new Ke(S,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Pr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(dg(a))a.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(dg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function mn(e){const t={};for(let n=0;n<e.length;n++){const i=Pr(e[n]);for(const a in i)t[a]=i[a]}return t}function dg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function W1(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function SS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const q1={clone:Pr,merge:mn};var Y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=W1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(a.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new H().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new we().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class K1 extends Ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ki extends Wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ka,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class j1 extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q1 extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yS extends an{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class J1 extends yS{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Vf=new we,hg=new H,pg=new H;class $1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;hg.setFromMatrixPosition(t.matrixWorld),n.position.copy(hg),pg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(pg),n.updateMatrixWorld(),Vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===qo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zl=new H,Kl=new Xr,_i=new H;class MS extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zl,Kl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Kl,_i.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Zl,Kl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Kl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ya=new H,mg=new qt,gg=new qt;class $n extends MS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ya.x,ya.y).multiplyScalar(-t/ya.z),ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ya.x,ya.y).multiplyScalar(-t/ya.z)}getViewSize(t,n){return this.getViewBounds(t,mg,gg),n.subVectors(gg,mg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(_f*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Jp extends MS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tb extends $1{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eb extends yS{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new tb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const qs=-90,Ys=1;class nb extends an{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(qs,Ys,t,n);a.layers=this.layers,this.add(a);const s=new $n(qs,Ys,t,n);s.layers=this.layers,this.add(s);const r=new $n(qs,Ys,t,n);r.layers=this.layers,this.add(r);const o=new $n(qs,Ys,t,n);o.layers=this.layers,this.add(o);const l=new $n(qs,Ys,t,n);l.layers=this.layers,this.add(l);const c=new $n(qs,Ys,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,u,h),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class ib extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const im=class im{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};im.prototype.isMatrix2=!0;let _g=im;function vg(e,t,n,i){const a=ab(i);switch(n){case rS:return e*t;case lS:return e*t/a.components*a.byteLength;case Gp:return e*t/a.components*a.byteLength;case bs:return e*t*2/a.components*a.byteLength;case Vp:return e*t*2/a.components*a.byteLength;case oS:return e*t*3/a.components*a.byteLength;case di:return e*t*4/a.components*a.byteLength;case kp:return e*t*4/a.components*a.byteLength;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ih:case sh:return Math.max(e,16)*Math.max(t,8)/4;case nh:case ah:return Math.max(e,8)*Math.max(t,8)/2;case rh:case oh:case ch:case uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case lh:case Kc:case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ph:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _h:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Th:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ah:case Rh:case Ch:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wh:case Dh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jc:case Uh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ab(e){switch(e){case In:case nS:return{byteLength:1,components:1};case Xo:case iS:case ca:return{byteLength:2,components:1};case Fp:case Hp:return{byteLength:2,components:4};case Di:case Bp:case bi:return{byteLength:4,components:1};case aS:case sS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ES(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function sb(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,d);else{p.sort((h,S)=>h.start-S.start);let u=0;for(let h=1;h<p.length;h++){const S=p[u],T=p[h];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++u,p[u]=T)}p.length=u+1;for(let h=0,S=p.length;h<S;h++){const T=p[h];e.bufferSubData(c,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ob=`#ifdef USE_ALPHAHASH
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
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
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
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wb=`#define PI 3.141592653589793
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
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
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
#endif`,aT=`uniform sampler2D dfgLUT;
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
}`,sT=`
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
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
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WT=`float getShadowMask() {
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
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,ZT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,jT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oA=`uniform sampler2D t2D;
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,hA=`#if DEPTH_PACKING == 3200
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
}`,pA=`#define DISTANCE
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
}`,mA=`#define DISTANCE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,yA=`uniform vec3 diffuse;
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
}`,MA=`#define LAMBERT
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
}`,EA=`#define LAMBERT
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
}`,bA=`#define MATCAP
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
}`,TA=`#define MATCAP
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
}`,AA=`#define NORMAL
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
}`,RA=`#define NORMAL
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
}`,CA=`#define PHONG
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
}`,wA=`#define PHONG
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
}`,DA=`#define STANDARD
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
}`,UA=`#define STANDARD
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
}`,NA=`#define TOON
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
}`,LA=`#define TOON
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
}`,OA=`uniform float size;
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
}`,PA=`uniform vec3 diffuse;
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
}`,zA=`#include <common>
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
}`,IA=`uniform vec3 color;
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
}`,BA=`uniform float rotation;
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
}`,FA=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:rb,alphahash_pars_fragment:ob,alphamap_fragment:lb,alphamap_pars_fragment:cb,alphatest_fragment:ub,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:hb,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:_b,bsdfs:vb,iridescence_fragment:xb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:yb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:bb,color_fragment:Tb,color_pars_fragment:Ab,color_pars_vertex:Rb,color_vertex:Cb,common:wb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Nb,displacementmap_vertex:Lb,emissivemap_fragment:Ob,emissivemap_pars_fragment:Pb,colorspace_fragment:zb,colorspace_pars_fragment:Ib,envmap_fragment:Bb,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Hb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:Jb,envmap_vertex:Vb,fog_vertex:kb,fog_pars_vertex:Xb,fog_fragment:Wb,fog_pars_fragment:qb,gradientmap_pars_fragment:Yb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:jb,lights_pars_begin:Qb,lights_toon_fragment:$b,lights_toon_pars_fragment:tT,lights_phong_fragment:eT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:aT,lights_fragment_begin:sT,lights_fragment_maps:rT,lights_fragment_end:oT,lightprobes_pars_fragment:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:hT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:ST,morphnormal_vertex:yT,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:bT,normal_fragment_maps:TT,normal_pars_fragment:AT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:UT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:LT,opaque_fragment:OT,packing:PT,premultiplied_alpha_fragment:zT,project_vertex:IT,dithering_fragment:BT,dithering_pars_fragment:FT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:GT,shadowmap_pars_fragment:VT,shadowmap_pars_vertex:kT,shadowmap_vertex:XT,shadowmask_pars_fragment:WT,skinbase_vertex:qT,skinning_pars_vertex:YT,skinning_vertex:ZT,skinnormal_vertex:KT,specularmap_fragment:jT,specularmap_pars_fragment:QT,tonemapping_fragment:JT,tonemapping_pars_fragment:$T,transmission_fragment:tA,transmission_pars_fragment:eA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:aA,worldpos_vertex:sA,background_vert:rA,background_frag:oA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:fA,depth_vert:dA,depth_frag:hA,distance_vert:pA,distance_frag:mA,equirect_vert:gA,equirect_frag:_A,linedashed_vert:vA,linedashed_frag:xA,meshbasic_vert:SA,meshbasic_frag:yA,meshlambert_vert:MA,meshlambert_frag:EA,meshmatcap_vert:bA,meshmatcap_frag:TA,meshnormal_vert:AA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:wA,meshphysical_vert:DA,meshphysical_frag:UA,meshtoon_vert:NA,meshtoon_frag:LA,points_vert:OA,points_frag:PA,shadow_vert:zA,shadow_frag:IA,sprite_vert:BA,sprite_frag:FA},gt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},xi={basic:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:mn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:mn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:mn([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:mn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:mn([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:mn([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:mn([gt.common,gt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:mn([gt.lights,gt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};xi.physical={uniforms:mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const jl={r:0,b:0,g:0},HA=new we,bS=new Bt;bS.set(-1,0,0,0,1,0,0,0,1);function GA(e,t,n,i,a,s){const r=new jt(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const v=m.backgroundBlurriness>0;y=t.get(y,v)}return y}function S(m){let y=!1;const v=h(m);v===null?_(r,o):v&&v.isColor&&(_(v,1),y=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(m,y){const v=h(y);v&&(v.isCubeTexture||v.mapping===Eu)?(c===void 0&&(c=new Ye(new Ji(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Pr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bS),c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,(d!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new ll(2,2),new Ui({name:"BackgroundMaterial",uniforms:Pr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,y){m.getRGB(jl,SS(e)),n.buffers.color.setClear(jl.r,jl.g,jl.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(r,o)},render:S,addToRenderList:T,dispose:f}}function VA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(N,z,J,tt,k){let O=!1;const P=p(N,tt,J,z);s!==P&&(s=P,c(s.object)),O=h(N,tt,J,k),O&&S(N,tt,J,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,v(N,z,J,tt),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function d(N){return e.deleteVertexArray(N)}function p(N,z,J,tt){const k=tt.wireframe===!0;let O=i[z.id];O===void 0&&(O={},i[z.id]=O);const P=N.isInstancedMesh===!0?N.id:0;let Z=O[P];Z===void 0&&(Z={},O[P]=Z);let et=Z[J.id];et===void 0&&(et={},Z[J.id]=et);let ot=et[k];return ot===void 0&&(ot=u(l()),et[k]=ot),ot}function u(N){const z=[],J=[],tt=[];for(let k=0;k<n;k++)z[k]=0,J[k]=0,tt[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:tt,object:N,attributes:{},index:null}}function h(N,z,J,tt){const k=s.attributes,O=z.attributes;let P=0;const Z=J.getAttributes();for(const et in Z)if(Z[et].location>=0){const dt=k[et];let St=O[et];if(St===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;P++}return s.attributesNum!==P||s.index!==tt}function S(N,z,J,tt){const k={},O=z.attributes;let P=0;const Z=J.getAttributes();for(const et in Z)if(Z[et].location>=0){let dt=O[et];dt===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(dt=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(dt=N.instanceColor));const St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),k[et]=St,P++}s.attributes=k,s.attributesNum=P,s.index=tt}function T(){const N=s.newAttributes;for(let z=0,J=N.length;z<J;z++)N[z]=0}function _(N){f(N,0)}function f(N,z){const J=s.newAttributes,tt=s.enabledAttributes,k=s.attributeDivisors;J[N]=1,tt[N]===0&&(e.enableVertexAttribArray(N),tt[N]=1),k[N]!==z&&(e.vertexAttribDivisor(N,z),k[N]=z)}function m(){const N=s.newAttributes,z=s.enabledAttributes;for(let J=0,tt=z.length;J<tt;J++)z[J]!==N[J]&&(e.disableVertexAttribArray(J),z[J]=0)}function y(N,z,J,tt,k,O,P){P===!0?e.vertexAttribIPointer(N,z,J,k,O):e.vertexAttribPointer(N,z,J,tt,k,O)}function v(N,z,J,tt){T();const k=tt.attributes,O=J.getAttributes(),P=z.defaultAttributeValues;for(const Z in O){const et=O[Z];if(et.location>=0){let ot=k[Z];if(ot===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){const dt=ot.normalized,St=ot.itemSize,Wt=t.get(ot);if(Wt===void 0)continue;const ee=Wt.buffer,kt=Wt.type,w=Wt.bytesPerElement,D=kt===e.INT||kt===e.UNSIGNED_INT||ot.gpuType===Bp;if(ot.isInterleavedBufferAttribute){const Q=ot.data,pt=Q.stride,lt=ot.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<et.locationSize;Et++)f(et.location+Et,Q.meshPerAttribute);N.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<et.locationSize;Et++)_(et.location+Et);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Et=0;Et<et.locationSize;Et++)y(et.location+Et,St/et.locationSize,kt,dt,pt*w,(lt+St/et.locationSize*Et)*w,D)}else{if(ot.isInstancedBufferAttribute){for(let Q=0;Q<et.locationSize;Q++)f(et.location+Q,ot.meshPerAttribute);N.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Q=0;Q<et.locationSize;Q++)_(et.location+Q);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Q=0;Q<et.locationSize;Q++)y(et.location+Q,St/et.locationSize,kt,dt,St*w,St/et.locationSize*Q*w,D)}}else if(P!==void 0){const dt=P[Z];if(dt!==void 0)switch(dt.length){case 2:e.vertexAttrib2fv(et.location,dt);break;case 3:e.vertexAttrib3fv(et.location,dt);break;case 4:e.vertexAttrib4fv(et.location,dt);break;default:e.vertexAttrib1fv(et.location,dt)}}}}m()}function b(){A();for(const N in i){const z=i[N];for(const J in z){const tt=z[J];for(const k in tt){const O=tt[k];for(const P in O)d(O[P].object),delete O[P];delete tt[k]}}delete i[N]}}function M(N){if(i[N.id]===void 0)return;const z=i[N.id];for(const J in z){const tt=z[J];for(const k in tt){const O=tt[k];for(const P in O)d(O[P].object),delete O[P];delete tt[k]}}delete i[N.id]}function R(N){for(const z in i){const J=i[z];for(const tt in J){const k=J[tt];if(k[N.id]===void 0)continue;const O=k[N.id];for(const P in O)d(O[P].object),delete O[P];delete k[N.id]}}}function g(N){for(const z in i){const J=i[z],tt=N.isInstancedMesh===!0?N.id:0,k=J[tt];if(k!==void 0){for(const O in k){const P=k[O];for(const Z in P)d(P[Z].object),delete P[Z];delete k[O]}delete J[tt],Object.keys(J).length===0&&delete i[z]}}}function A(){U(),r=!0,s!==a&&(s=a,c(s.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:_,disableUnusedAttributes:m}}function kA(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function XA(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==di&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bi&&!g)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ot("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),M=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:M}}function WA(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new ls,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const S=p.clippingPlanes,T=p.clipIntersection,_=p.clipShadows,f=e.get(p);if(!a||S===null||S.length===0||s&&!_)s?d(null):c();else{const m=s?0:i,y=m*4;let v=f.clippingState||null;l.value=v,v=d(S,u,y,h);for(let b=0;b!==y;++b)v[b]=n[b];f.clippingState=v,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,u,h,S){const T=p!==null?p.length:0;let _=null;if(T!==0){if(_=l.value,S!==!0||_===null){const f=h+T*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<f)&&(_=new Float32Array(f));for(let y=0,v=h;y!==T;++y,v+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(_,v),_[v+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,_}}const Oa=4,xg=[.125,.215,.35,.446,.526,.582],us=20,qA=256,ro=new Jp,Sg=new jt;let kf=null,Xf=0,Wf=0,qf=!1;const YA=new H;class yg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=YA}=s;kf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kf,Xf,Wf),this._renderer.xr.enabled=qf,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Es||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ca,format:di,colorSpace:Qc,depthBuffer:!1},a=Mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZA(s)),this._blurMaterial=jA(s,t,n),this._ggxMaterial=KA(s,t,n)}return a}_compileMaterial(t){const n=new Ye(new wn,t);this._renderer.compile(n,ro)}_sceneToCubeUV(t,n,i,a,s){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(Sg),p.toneMapping=Ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Ji,new gS({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let f=!1;const m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,f=!0):(_.color.copy(Sg),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const b=this._cubeSize;Zs(a,v*b,y>2?b:0,b,b),p.setRenderTarget(a),f&&p.render(T,l),p.render(t,l)}p.toneMapping=h,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Es||t.mapping===Lr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ro)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:S}=this,T=this._sizeLods[i],_=3*T*(i>S-Oa?i-S+Oa:0),f=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=S-n,Zs(s,_,f,3*T,2*T),a.setRenderTarget(s),a.render(o,ro),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,Zs(t,_,f,3*T,2*T),a.setRenderTarget(t),a.render(o,ro)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ie("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*us-1),T=s/S,_=isFinite(s)?1+Math.floor(d*T):us;_>us&&Ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${us}`);const f=[];let m=0;for(let R=0;R<us;++R){const g=R/T,A=Math.exp(-g*g/2);f.push(A),R===0?m+=A:R<_&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=S,u.mipInt.value=y-i;const v=this._sizeLods[a],b=3*v*(a>y-Oa?a-y+Oa:0),M=4*(this._cubeSize-v);Zs(n,b,M,3*v,2*v),l.setRenderTarget(n),l.render(p,ro)}}function ZA(e){const t=[],n=[],i=[];let a=e;const s=e-Oa+1+xg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Oa?l=xg[r-e+Oa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,S=6,T=3,_=2,f=1,m=new Float32Array(T*S*h),y=new Float32Array(_*S*h),v=new Float32Array(f*S*h);for(let M=0;M<h;M++){const R=M%3*2/3-1,g=M>2?0:-1,A=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];m.set(A,T*S*M),y.set(u,_*S*M);const U=[M,M,M,M,M,M];v.set(U,f*S*M)}const b=new wn;b.setAttribute("position",new wi(m,T)),b.setAttribute("uv",new wi(y,_)),b.setAttribute("faceIndex",new wi(v,f)),i.push(new Ye(b,null)),a>Oa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Mg(e,t,n){const i=new Ci(e,t,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function KA(e,t,n){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function jA(e,t,n){const i=new Float32Array(us),a=new H(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Au(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function Eg(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function bg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}class TS extends Ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new vS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ji(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:na});s.uniforms.tEquirect.value=n;const r=new Ye(a,s),o=n.minFilter;return n.minFilter===fs&&(n.minFilter=pn),new nb(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function QA(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===pf||h===mf)if(t.has(u)){const S=t.get(u).texture;return o(S,u.mapping)}else{const S=u.image;if(S&&S.height>0){const T=new TS(S.height);return T.fromEquirectangularTexture(e,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,S=h===pf||h===mf,T=h===Es||h===Lr;if(S||T){let _=n.get(u);const f=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new yg(e)),_=S?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),_.texture;if(_!==void 0)return _.texture;{const m=u.image;return S&&m&&m.height>0||T&&m&&l(m)?(i===null&&(i=new yg(e)),_=S?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),u.addEventListener("dispose",d),_.texture):null}}}return u}function o(u,h){return h===pf?u.mapping=Es:h===mf&&(u.mapping=Lr),u}function l(u){let h=0;const S=6;for(let T=0;T<S;T++)u[T]!==void 0&&h++;return h===S}function c(u){const h=u.target;h.removeEventListener("dispose",c);const S=t.get(h);S!==void 0&&(t.delete(h),S.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const S=n.get(h);S!==void 0&&(n.delete(h),S.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function JA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&xr("WebGLRenderer: "+i+" extension not supported."),a}}}function $A(e,t,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const S in u.attributes)t.remove(u.attributes[S]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(t.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const h in u)t.update(u[h],e.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,S=p.attributes.position;let T=0;if(S===void 0)return;if(h!==null){const m=h.array;T=h.version;for(let y=0,v=m.length;y<v;y+=3){const b=m[y+0],M=m[y+1],R=m[y+2];u.push(b,M,M,R,R,b)}}else{const m=S.array;T=S.version;for(let y=0,v=m.length/3-1;y<v;y+=3){const b=y+0,M=y+1,R=y+2;u.push(b,M,M,R,R,b)}}const _=new(S.count>=65535?pS:hS)(u,1);_.version=T;const f=s.get(p);f&&t.remove(f),s.set(p,_)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function tR(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(e.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let T=0;for(let _=0;_<h;_++)T+=u[_];n.update(T,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function eR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ie("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function nR(e,t,n){const i=new WeakMap,a=new Ce;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let U=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var h=U;u!==void 0&&u.texture.dispose();const S=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;S===!0&&(v=1),T===!0&&(v=2),_===!0&&(v=3);let b=o.attributes.position.count*v,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*M*4*p),g=new uS(R,b,M,p);g.type=bi,g.needsUpdate=!0;const A=v*4;for(let N=0;N<p;N++){const z=f[N],J=m[N],tt=y[N],k=b*M*4*N;for(let O=0;O<z.count;O++){const P=O*A;S===!0&&(a.fromBufferAttribute(z,O),R[k+P+0]=a.x,R[k+P+1]=a.y,R[k+P+2]=a.z,R[k+P+3]=0),T===!0&&(a.fromBufferAttribute(J,O),R[k+P+4]=a.x,R[k+P+5]=a.y,R[k+P+6]=a.z,R[k+P+7]=0),_===!0&&(a.fromBufferAttribute(tt,O),R[k+P+8]=a.x,R[k+P+9]=a.y,R[k+P+10]=a.z,R[k+P+11]=tt.itemSize===4?a.w:1)}}u={count:p,texture:g,size:new qt(b,M)},i.set(o,u),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let S=0;for(let _=0;_<c.length;_++)S+=c[_];const T=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(e,"morphTargetBaseInfluence",T),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function iR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const aR={[Zx]:"LINEAR_TONE_MAPPING",[Kx]:"REINHARD_TONE_MAPPING",[jx]:"CINEON_TONE_MAPPING",[Qx]:"ACES_FILMIC_TONE_MAPPING",[$x]:"AGX_TONE_MAPPING",[tS]:"NEUTRAL_TONE_MAPPING",[Jx]:"CUSTOM_TONE_MAPPING"};function sR(e,t,n,i,a,s){const r=new Ci(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Or(t,n):void 0}),o=new Ci(t,n,{type:ca,depthBuffer:!1,stencilBuffer:!1}),l=new wn;l.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const c=new K1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(l,c),p=new Jp(-1,1,1,-1,0,1);let u=null,h=null,S=!1,T,_=null,f=[],m=!1;this.setSize=function(y,v){r.setSize(y,v),o.setSize(y,v);for(let b=0;b<f.length;b++){const M=f[b];M.setSize&&M.setSize(y,v)}},this.setEffects=function(y){f=y,m=f.length>0&&f[0].isRenderPass===!0;const v=r.width,b=r.height;for(let M=0;M<f.length;M++){const R=f[M];R.setSize&&R.setSize(v,b)}},this.begin=function(y,v){if(S||y.toneMapping===Ri&&f.length===0)return!1;if(_=v,v!==null){const b=v.width,M=v.height;(r.width!==b||r.height!==M)&&this.setSize(b,M)}return m===!1&&y.setRenderTarget(r),T=y.toneMapping,y.toneMapping=Ri,!0},this.hasRenderPass=function(){return m},this.end=function(y,v){y.toneMapping=T,S=!0;let b=r,M=o;for(let R=0;R<f.length;R++){const g=f[R];if(g.enabled!==!1&&(g.render(y,M,b,v),g.needsSwap!==!1)){const A=b;b=M,M=A}}if(u!==y.outputColorSpace||h!==y.toneMapping){u=y.outputColorSpace,h=y.toneMapping,c.defines={},Jt.getTransfer(u)===oe&&(c.defines.SRGB_TRANSFER="");const R=aR[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(d,p),_=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const AS=new vn,Oh=new Or(1,1),RS=new uS,CS=new T1,wS=new vS,Tg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),wg=new Float32Array(4);function qr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=Tg[a];if(s===void 0&&(s=new Float32Array(a),Tg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ru(e,t){let n=Ag[t];n===void 0&&(n=new Int32Array(t),Ag[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function rR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function oR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function lR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qe(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function cR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function uR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Qe(n,i))return;wg.set(i),e.uniformMatrix2fv(this.addr,!1,wg),Je(n,i)}}function fR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Qe(n,i))return;Cg.set(i),e.uniformMatrix3fv(this.addr,!1,Cg),Je(n,i)}}function dR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Qe(n,i))return;Rg.set(i),e.uniformMatrix4fv(this.addr,!1,Rg),Je(n,i)}}function hR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function pR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function mR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function gR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function _R(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function xR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function SR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function yR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Oh.compareFunction=n.isReversedDepthBuffer()?Wp:Xp,s=Oh):s=AS,n.setTexture2D(t||s,a)}function MR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||CS,a)}function ER(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||wS,a)}function bR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||RS,a)}function TR(e){switch(e){case 5126:return rR;case 35664:return oR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return fR;case 35676:return dR;case 5124:case 35670:return hR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return bR}}function AR(e,t){e.uniform1fv(this.addr,t)}function RR(e,t){const n=qr(t,this.size,2);e.uniform2fv(this.addr,n)}function CR(e,t){const n=qr(t,this.size,3);e.uniform3fv(this.addr,n)}function wR(e,t){const n=qr(t,this.size,4);e.uniform4fv(this.addr,n)}function DR(e,t){const n=qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function UR(e,t){const n=qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function NR(e,t){const n=qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function LR(e,t){e.uniform1iv(this.addr,t)}function OR(e,t){e.uniform2iv(this.addr,t)}function PR(e,t){e.uniform3iv(this.addr,t)}function zR(e,t){e.uniform4iv(this.addr,t)}function IR(e,t){e.uniform1uiv(this.addr,t)}function BR(e,t){e.uniform2uiv(this.addr,t)}function FR(e,t){e.uniform3uiv(this.addr,t)}function HR(e,t){e.uniform4uiv(this.addr,t)}function GR(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),Je(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Oh:r=AS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function VR(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),Je(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||CS,s[r])}function kR(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),Je(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||wS,s[r])}function XR(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Qe(i,s)||(e.uniform1iv(this.addr,s),Je(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||RS,s[r])}function WR(e){switch(e){case 5126:return AR;case 35664:return RR;case 35665:return CR;case 35666:return wR;case 35674:return DR;case 35675:return UR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return OR;case 35668:case 35672:return PR;case 35669:case 35673:return zR;case 5125:return IR;case 36294:return BR;case 36295:return FR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return XR}}class qR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TR(n.type)}}class YR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WR(n.type)}}class ZR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Yf=/(\w+)(\])?(\[|\.)?/g;function Dg(e,t){e.seq.push(t),e.map[t.id]=t}function KR(e,t,n){const i=e.name,a=i.length;for(Yf.lastIndex=0;;){const s=Yf.exec(i),r=Yf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Dg(n,c===void 0?new qR(o,e,t):new YR(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new ZR(o),Dg(n,p)),n=p}}}class vc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);KR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Ug(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const jR=37297;let QR=0;function JR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Ng=new Bt;function $R(e){Jt._getMatrix(Ng,Jt.workingColorSpace,e);const t=`mat3( ${Ng.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Jc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Lg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+JR(e.getShaderSource(t),o)}else return s}function t3(e,t){const n=$R(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const e3={[Zx]:"Linear",[Kx]:"Reinhard",[jx]:"Cineon",[Qx]:"ACESFilmic",[$x]:"AgX",[tS]:"Neutral",[Jx]:"Custom"};function n3(e,t){const n=e3[t];return n===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new H;function i3(){Jt.getLuminanceCoefficients(Ql);const e=Ql.x.toFixed(4),t=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function s3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function r3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function mo(e){return e!==""}function Og(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(e){return e.replace(o3,c3)}const l3=new Map;function c3(e,t){let n=Vt[t];if(n===void 0){const i=l3.get(t);if(i!==void 0)n=Vt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(n)}const u3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(e){return e.replace(u3,f3)}function f3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Ig(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const d3={[hc]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function h3(e){return d3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p3={[Es]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function m3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":p3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const g3={[Lr]:"ENVMAP_MODE_REFRACTION"};function _3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":g3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v3={[Yx]:"ENVMAP_BLENDING_MULTIPLY",[a1]:"ENVMAP_BLENDING_MIX",[s1]:"ENVMAP_BLENDING_ADD"};function x3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":v3[e.combine]||"ENVMAP_BLENDING_NONE"}function S3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function y3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=h3(n),c=m3(n),d=_3(n),p=x3(n),u=S3(n),h=a3(n),S=s3(s),T=a.createProgram();let _,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(mo).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(mo).join(`
`),f.length>0&&(f+=`
`)):(_=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),f=[Ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?Vt.tonemapping_pars_fragment:"",n.toneMapping!==Ri?n3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,t3("linearToOutputTexel",n.outputColorSpace),i3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mo).join(`
`)),r=Ph(r),r=Og(r,n),r=Pg(r,n),o=Ph(o),o=Og(o,n),o=Pg(o,n),r=zg(r),o=zg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",n.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=m+_+r,v=m+f+o,b=Ug(a,a.VERTEX_SHADER,y),M=Ug(a,a.FRAGMENT_SHADER,v);a.attachShader(T,b),a.attachShader(T,M),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function R(N){if(e.debug.checkShaderErrors){const z=a.getProgramInfoLog(T)||"",J=a.getShaderInfoLog(b)||"",tt=a.getShaderInfoLog(M)||"",k=z.trim(),O=J.trim(),P=tt.trim();let Z=!0,et=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,T,b,M);else{const ot=Lg(a,b,"vertex"),dt=Lg(a,M,"fragment");ie("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ot+`
`+dt)}else k!==""?Ot("WebGLProgram: Program Info Log:",k):(O===""||P==="")&&(et=!1);et&&(N.diagnostics={runnable:Z,programLog:k,vertexShader:{log:O,prefix:_},fragmentShader:{log:P,prefix:f}})}a.deleteShader(b),a.deleteShader(M),g=new vc(a,T),A=r3(a,T)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(T,jR)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=M,this}let M3=0;class E3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new b3(t),n.set(t,i)),i}}class b3{constructor(t){this.id=M3++,this.code=t,this.usedTimes=0}}function T3(e){return e===bs||e===Kc||e===jc}function A3(e,t,n,i,a,s){const r=new fS,o=new E3,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return l.add(g),g===0?"uv":`uv${g}`}function T(g,A,U,N,z,J){const tt=N.fog,k=z.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,P=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||O,P),et=Z&&Z.mapping===Eu?Z.image.height:null,ot=h[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Ot("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=dt!==void 0?dt.length:0;let Wt=0;k.morphAttributes.position!==void 0&&(Wt=1),k.morphAttributes.normal!==void 0&&(Wt=2),k.morphAttributes.color!==void 0&&(Wt=3);let ee,kt,w,D;if(ot){const Tt=xi[ot];ee=Tt.vertexShader,kt=Tt.fragmentShader}else{ee=g.vertexShader,kt=g.fragmentShader;const Tt=o.getVertexShaderStage(g),De=o.getFragmentShaderStage(g);o.update(g,Tt,De),w=Tt.id,D=De.id}const Q=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),lt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,Yt=!!g.map,Nt=!!g.matcap,Ct=!!Z,zt=!!g.aoMap,Lt=!!g.lightMap,ue=!!g.bumpMap&&g.wireframe===!1,Te=!!g.normalMap,Be=!!g.displacementMap,We=!!g.emissiveMap,fe=!!g.metalnessMap,Re=!!g.roughnessMap,I=g.anisotropy>0,Fe=g.clearcoat>0,ae=g.dispersion>0,C=g.iridescence>0,x=g.sheen>0,G=g.transmission>0,Y=I&&!!g.anisotropyMap,$=Fe&&!!g.clearcoatMap,V=Fe&&!!g.clearcoatNormalMap,st=Fe&&!!g.clearcoatRoughnessMap,X=C&&!!g.iridescenceMap,j=C&&!!g.iridescenceThicknessMap,rt=x&&!!g.sheenColorMap,mt=x&&!!g.sheenRoughnessMap,ct=!!g.specularMap,ft=!!g.specularColorMap,yt=!!g.specularIntensityMap,wt=G&&!!g.transmissionMap,It=G&&!!g.thicknessMap,L=!!g.gradientMap,ut=!!g.alphaMap,nt=g.alphaTest>0,ht=!!g.alphaHash,xt=!!g.extensions;let at=Ri;g.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(at=e.toneMapping);const Rt={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:ee,fragmentShader:kt,defines:g.defines,customVertexShaderID:w,customFragmentShaderID:D,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:lt,instancingColor:lt&&z.instanceColor!==null,instancingMorph:lt&&z.morphTexture!==null,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Yt,matcap:Nt,envMap:Ct,envMapMode:Ct&&Z.mapping,envMapCubeUVHeight:et,aoMap:zt,lightMap:Lt,bumpMap:ue,normalMap:Te,displacementMap:Be,emissiveMap:We,normalMapObjectSpace:Te&&g.normalMapType===l1,normalMapTangentSpace:Te&&g.normalMapType===Nh,packedNormalMap:Te&&g.normalMapType===Nh&&T3(g.normalMap.format),metalnessMap:fe,roughnessMap:Re,anisotropy:I,anisotropyMap:Y,clearcoat:Fe,clearcoatMap:$,clearcoatNormalMap:V,clearcoatRoughnessMap:st,dispersion:ae,iridescence:C,iridescenceMap:X,iridescenceThicknessMap:j,sheen:x,sheenColorMap:rt,sheenRoughnessMap:mt,specularMap:ct,specularColorMap:ft,specularIntensityMap:yt,transmission:G,transmissionMap:wt,thicknessMap:It,gradientMap:L,opaque:g.transparent===!1&&g.blending===vr&&g.alphaToCoverage===!1,alphaMap:ut,alphaTest:nt,alphaHash:ht,combine:g.combine,mapUv:Yt&&S(g.map.channel),aoMapUv:zt&&S(g.aoMap.channel),lightMapUv:Lt&&S(g.lightMap.channel),bumpMapUv:ue&&S(g.bumpMap.channel),normalMapUv:Te&&S(g.normalMap.channel),displacementMapUv:Be&&S(g.displacementMap.channel),emissiveMapUv:We&&S(g.emissiveMap.channel),metalnessMapUv:fe&&S(g.metalnessMap.channel),roughnessMapUv:Re&&S(g.roughnessMap.channel),anisotropyMapUv:Y&&S(g.anisotropyMap.channel),clearcoatMapUv:$&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:V&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:j&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:mt&&S(g.sheenRoughnessMap.channel),specularMapUv:ct&&S(g.specularMap.channel),specularColorMapUv:ft&&S(g.specularColorMap.channel),specularIntensityMapUv:yt&&S(g.specularIntensityMap.channel),transmissionMapUv:wt&&S(g.transmissionMap.channel),thicknessMapUv:It&&S(g.thicknessMap.channel),alphaMapUv:ut&&S(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Te||I),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Yt||ut),fog:!!tt,useFog:g.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&Te===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Wt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:at,decodeVideoTexture:Yt&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===oe,decodeVideoTextureEmissive:We&&g.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(g.emissiveMap.colorSpace)===oe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Si,flipSided:g.side===An,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&g.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function _(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)A.push(U),A.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(f(A,g),m(A,g),A.push(e.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function f(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function m(g,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function y(g){const A=h[g.type];let U;if(A){const N=xi[A];U=q1.clone(N.uniforms)}else U=g.uniforms;return U}function v(g,A){let U=d.get(A);return U!==void 0?++U.usedTimes:(U=new y3(e,A,g,a),c.push(U),d.set(A,U)),U}function b(g){if(--g.usedTimes===0){const A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function M(g){o.remove(g)}function R(){o.dispose()}return{getParameters:T,getProgramCacheKey:_,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:R}}function R3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function C3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Bg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Fg(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,S,T,_,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:S,materialVariant:r(u),groupOrder:T,renderOrder:u.renderOrder,z:_,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=S,m.materialVariant=r(u),m.groupOrder=T,m.renderOrder=u.renderOrder,m.z=_,m.group=f),t++,m}function l(u,h,S,T,_,f){const m=o(u,h,S,T,_,f);S.transmission>0?i.push(m):S.transparent===!0?a.push(m):n.push(m)}function c(u,h,S,T,_,f){const m=o(u,h,S,T,_,f);S.transmission>0?i.unshift(m):S.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,h,S){n.length>1&&n.sort(u||C3),i.length>1&&i.sort(h||Bg),a.length>1&&a.sort(h||Bg),S&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=t,h=e.length;u<h;u++){const S=e[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:d}}function w3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Fg,e.set(i,[r])):a>=s.length?(r=new Fg,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function D3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new H,color:new jt};break;case"SpotLight":n={position:new H,direction:new H,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function U3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let N3=0;function L3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function O3(e){const t=new D3,n=U3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const a=new H,s=new we,r=new we;function o(c){let d=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,S=0,T=0,_=0,f=0,m=0,y=0,v=0,b=0,M=0,R=0;c.sort(L3);for(let A=0,U=c.length;A<U;A++){const N=c[A],z=N.color,J=N.intensity,tt=N.distance;let k=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bs?k=N.shadow.map.texture:k=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=z.r*J,p+=z.g*J,u+=z.b*J;else if(N.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(N.sh.coefficients[O],J);R++}else if(N.isDirectionalLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const P=N.shadow,Z=n.get(N);Z.shadowIntensity=P.intensity,Z.shadowBias=P.bias,Z.shadowNormalBias=P.normalBias,Z.shadowRadius=P.radius,Z.shadowMapSize=P.mapSize,i.directionalShadow[h]=Z,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=N.shadow.matrix,m++}i.directional[h]=O,h++}else if(N.isSpotLight){const O=t.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(z).multiplyScalar(J),O.distance=tt,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,i.spot[T]=O;const P=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,P.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[T]=P.matrix,N.castShadow){const Z=n.get(N);Z.shadowIntensity=P.intensity,Z.shadowBias=P.bias,Z.shadowNormalBias=P.normalBias,Z.shadowRadius=P.radius,Z.shadowMapSize=P.mapSize,i.spotShadow[T]=Z,i.spotShadowMap[T]=k,v++}T++}else if(N.isRectAreaLight){const O=t.get(N);O.color.copy(z).multiplyScalar(J),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=O,_++}else if(N.isPointLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){const P=N.shadow,Z=n.get(N);Z.shadowIntensity=P.intensity,Z.shadowBias=P.bias,Z.shadowNormalBias=P.normalBias,Z.shadowRadius=P.radius,Z.shadowMapSize=P.mapSize,Z.shadowCameraNear=P.camera.near,Z.shadowCameraFar=P.camera.far,i.pointShadow[S]=Z,i.pointShadowMap[S]=k,i.pointShadowMatrix[S]=N.shadow.matrix,y++}i.point[S]=O,S++}else if(N.isHemisphereLight){const O=t.get(N);O.skyColor.copy(N.color).multiplyScalar(J),O.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[f]=O,f++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==h||g.pointLength!==S||g.spotLength!==T||g.rectAreaLength!==_||g.hemiLength!==f||g.numDirectionalShadows!==m||g.numPointShadows!==y||g.numSpotShadows!==v||g.numSpotMaps!==b||g.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=T,i.rectArea.length=_,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+b-M,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,g.directionalLength=h,g.pointLength=S,g.spotLength=T,g.rectAreaLength=_,g.hemiLength=f,g.numDirectionalShadows=m,g.numPointShadows=y,g.numSpotShadows=v,g.numSpotMaps=b,g.numLightProbes=R,i.version=N3++)}function l(c,d){let p=0,u=0,h=0,S=0,T=0;const _=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(_),p++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(_),h++}else if(y.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),r.identity(),s.copy(y.matrixWorld),s.premultiply(_),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),S++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),u++}else if(y.isHemisphereLight){const v=i.hemi[T];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(_),T++}}}return{setup:o,setupView:l,state:i}}function Hg(e){const t=new O3(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function P3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Hg(e),t.set(a,[o])):s>=r.length?(o=new Hg(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I3=`uniform sampler2D shadow_pass;
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
}`,B3=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],F3=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Gg=new we,oo=new H,Zf=new H;function H3(e,t,n){let i=new Zp;const a=new qt,s=new qt,r=new Ce,o=new j1,l=new Q1,c={},d=n.maxTextureSize,p={[Za]:An,[An]:Za,[Si]:Si},u=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:z3,fragmentShader:I3}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const S=new wn;S.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ye(S,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(M,R,g){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;this.type===FE&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const A=e.getRenderTarget(),U=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),z=e.state;z.setBlending(na),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const J=f!==this.type;J&&R.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(k=>k.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,k=M.length;tt<k;tt++){const O=M[tt],P=O.shadow;if(P===void 0){Ot("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const Z=P.getFrameExtents();a.multiply(Z),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Z.x),a.x=s.x*Z.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Z.y),a.y=s.y*Z.y,P.mapSize.y=s.y));const et=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=et,P.map===null||J===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===po){if(O.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ci(a.x,a.y,{format:bs,type:ca,minFilter:pn,magFilter:pn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Or(a.x,a.y,bi),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=ua,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=cn,P.map.depthTexture.magFilter=cn}else O.isPointLight?(P.map=new TS(a.x),P.map.depthTexture=new X1(a.x,Di)):(P.map=new Ci(a.x,a.y),P.map.depthTexture=new Or(a.x,a.y,Di)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=ua,this.type===hc?(P.map.depthTexture.compareFunction=et?Wp:Xp,P.map.depthTexture.minFilter=pn,P.map.depthTexture.magFilter=pn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=cn,P.map.depthTexture.magFilter=cn);P.camera.updateProjectionMatrix()}const ot=P.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<ot;dt++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,dt),e.clear();else{dt===0&&(e.setRenderTarget(P.map),e.clear());const St=P.getViewport(dt);r.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),z.viewport(r)}if(O.isPointLight){const St=P.camera,Wt=P.matrix,ee=O.distance||St.far;ee!==St.far&&(St.far=ee,St.updateProjectionMatrix()),oo.setFromMatrixPosition(O.matrixWorld),St.position.copy(oo),Zf.copy(St.position),Zf.add(B3[dt]),St.up.copy(F3[dt]),St.lookAt(Zf),St.updateMatrixWorld(),Wt.makeTranslation(-oo.x,-oo.y,-oo.z),Gg.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Gg,St.coordinateSystem,St.reversedDepth)}else P.updateMatrices(O);i=P.getFrustum(),v(R,g,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===po&&m(P,g),P.needsUpdate=!1}f=this.type,_.needsUpdate=!1,e.setRenderTarget(A,U,N)};function m(M,R){const g=t.update(T);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ci(a.x,a.y,{format:bs,type:ca})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(R,null,g,u,T,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(R,null,g,h,T,null)}function y(M,R,g,A){let U=null;const N=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)U=N;else if(U=g.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=U.uuid,J=R.uuid;let tt=c[z];tt===void 0&&(tt={},c[z]=tt);let k=tt[J];k===void 0&&(k=U.clone(),tt[J]=k,R.addEventListener("dispose",b)),U=k}if(U.visible=R.visible,U.wireframe=R.wireframe,A===po?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:p[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,g.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const z=e.properties.get(U);z.light=g}return U}function v(M,R,g,A,U){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===po)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);const J=t.update(M),tt=M.material;if(Array.isArray(tt)){const k=J.groups;for(let O=0,P=k.length;O<P;O++){const Z=k[O],et=tt[Z.materialIndex];if(et&&et.visible){const ot=y(M,et,A,U);M.onBeforeShadow(e,M,R,g,J,ot,Z),e.renderBufferDirect(g,null,J,ot,M,Z),M.onAfterShadow(e,M,R,g,J,ot,Z)}}}else if(tt.visible){const k=y(M,tt,A,U);M.onBeforeShadow(e,M,R,g,J,k,null),e.renderBufferDirect(g,null,J,k,M,null),M.onAfterShadow(e,M,R,g,J,k,null)}}const z=M.children;for(let J=0,tt=z.length;J<tt;J++)v(z[J],R,g,A,U)}function b(M){M.target.removeEventListener("dispose",b);for(const g in c){const A=c[g],U=M.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function G3(e,t){function n(){let L=!1;const ut=new Ce;let nt=null;const ht=new Ce(0,0,0,0);return{setMask:function(xt){nt!==xt&&!L&&(e.colorMask(xt,xt,xt,xt),nt=xt)},setLocked:function(xt){L=xt},setClear:function(xt,at,Rt,Tt,De){De===!0&&(xt*=Tt,at*=Tt,Rt*=Tt),ut.set(xt,at,Rt,Tt),ht.equals(ut)===!1&&(e.clearColor(xt,at,Rt,Tt),ht.copy(ut))},reset:function(){L=!1,nt=null,ht.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,nt=null,ht=null,xt=null;return{setReversed:function(at){if(ut!==at){const Rt=t.get("EXT_clip_control");at?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ut=at;const Tt=xt;xt=null,this.setClear(Tt)}},getReversed:function(){return ut},setTest:function(at){at?Q(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(at){nt!==at&&!L&&(e.depthMask(at),nt=at)},setFunc:function(at){if(ut&&(at=v1[at]),ht!==at){switch(at){case Yd:e.depthFunc(e.NEVER);break;case Zd:e.depthFunc(e.ALWAYS);break;case Kd:e.depthFunc(e.LESS);break;case Nr:e.depthFunc(e.LEQUAL);break;case jd:e.depthFunc(e.EQUAL);break;case Qd:e.depthFunc(e.GEQUAL);break;case Jd:e.depthFunc(e.GREATER);break;case $d:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=at}},setLocked:function(at){L=at},setClear:function(at){xt!==at&&(xt=at,ut&&(at=1-at),e.clearDepth(at))},reset:function(){L=!1,nt=null,ht=null,xt=null,ut=!1}}}function a(){let L=!1,ut=null,nt=null,ht=null,xt=null,at=null,Rt=null,Tt=null,De=null;return{setTest:function(ve){L||(ve?Q(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ve){ut!==ve&&!L&&(e.stencilMask(ve),ut=ve)},setFunc:function(ve,pi,mi){(nt!==ve||ht!==pi||xt!==mi)&&(e.stencilFunc(ve,pi,mi),nt=ve,ht=pi,xt=mi)},setOp:function(ve,pi,mi){(at!==ve||Rt!==pi||Tt!==mi)&&(e.stencilOp(ve,pi,mi),at=ve,Rt=pi,Tt=mi)},setLocked:function(ve){L=ve},setClear:function(ve){De!==ve&&(e.clearStencil(ve),De=ve)},reset:function(){L=!1,ut=null,nt=null,ht=null,xt=null,at=null,Rt=null,Tt=null,De=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,S=[],T=null,_=!1,f=null,m=null,y=null,v=null,b=null,M=null,R=null,g=new jt(0,0,0),A=0,U=!1,N=null,z=null,J=null,tt=null,k=null;const O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(et)[1]),P=Z>=1):et.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),P=Z>=2);let ot=null,dt={};const St=e.getParameter(e.SCISSOR_BOX),Wt=e.getParameter(e.VIEWPORT),ee=new Ce().fromArray(St),kt=new Ce().fromArray(Wt);function w(L,ut,nt,ht){const xt=new Uint8Array(4),at=e.createTexture();e.bindTexture(L,at),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<nt;Rt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,xt):e.texImage2D(ut+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xt);return at}const D={};D[e.TEXTURE_2D]=w(e.TEXTURE_2D,e.TEXTURE_2D,1),D[e.TEXTURE_CUBE_MAP]=w(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[e.TEXTURE_2D_ARRAY]=w(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),D[e.TEXTURE_3D]=w(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(Nr),ue(!1),Te(G0),Q(e.CULL_FACE),zt(na);function Q(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function pt(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function lt(L,ut){return u[L]!==ut?(e.bindFramebuffer(L,ut),u[L]=ut,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function Et(L,ut){let nt=S,ht=!1;if(L){nt=h.get(ut),nt===void 0&&(nt=[],h.set(ut,nt));const xt=L.textures;if(nt.length!==xt.length||nt[0]!==e.COLOR_ATTACHMENT0){for(let at=0,Rt=xt.length;at<Rt;at++)nt[at]=e.COLOR_ATTACHMENT0+at;nt.length=xt.length,ht=!0}}else nt[0]!==e.BACK&&(nt[0]=e.BACK,ht=!0);ht&&e.drawBuffers(nt)}function Yt(L){return T!==L?(e.useProgram(L),T=L,!0):!1}const Nt={[cs]:e.FUNC_ADD,[GE]:e.FUNC_SUBTRACT,[VE]:e.FUNC_REVERSE_SUBTRACT};Nt[kE]=e.MIN,Nt[XE]=e.MAX;const Ct={[WE]:e.ZERO,[qE]:e.ONE,[YE]:e.SRC_COLOR,[Wd]:e.SRC_ALPHA,[$E]:e.SRC_ALPHA_SATURATE,[QE]:e.DST_COLOR,[KE]:e.DST_ALPHA,[ZE]:e.ONE_MINUS_SRC_COLOR,[qd]:e.ONE_MINUS_SRC_ALPHA,[JE]:e.ONE_MINUS_DST_COLOR,[jE]:e.ONE_MINUS_DST_ALPHA,[t1]:e.CONSTANT_COLOR,[e1]:e.ONE_MINUS_CONSTANT_COLOR,[n1]:e.CONSTANT_ALPHA,[i1]:e.ONE_MINUS_CONSTANT_ALPHA};function zt(L,ut,nt,ht,xt,at,Rt,Tt,De,ve){if(L===na){_===!0&&(pt(e.BLEND),_=!1);return}if(_===!1&&(Q(e.BLEND),_=!0),L!==HE){if(L!==f||ve!==U){if((m!==cs||b!==cs)&&(e.blendEquation(e.FUNC_ADD),m=cs,b=cs),ve)switch(L){case vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case V0:e.blendFunc(e.ONE,e.ONE);break;case k0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case X0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ie("WebGLState: Invalid blending: ",L);break}else switch(L){case vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case V0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case k0:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X0:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",L);break}y=null,v=null,M=null,R=null,g.set(0,0,0),A=0,f=L,U=ve}return}xt=xt||ut,at=at||nt,Rt=Rt||ht,(ut!==m||xt!==b)&&(e.blendEquationSeparate(Nt[ut],Nt[xt]),m=ut,b=xt),(nt!==y||ht!==v||at!==M||Rt!==R)&&(e.blendFuncSeparate(Ct[nt],Ct[ht],Ct[at],Ct[Rt]),y=nt,v=ht,M=at,R=Rt),(Tt.equals(g)===!1||De!==A)&&(e.blendColor(Tt.r,Tt.g,Tt.b,De),g.copy(Tt),A=De),f=L,U=!1}function Lt(L,ut){L.side===Si?pt(e.CULL_FACE):Q(e.CULL_FACE);let nt=L.side===An;ut&&(nt=!nt),ue(nt),L.blending===vr&&L.transparent===!1?zt(na):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const ht=L.stencilWrite;o.setTest(ht),ht&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(L){N!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),N=L)}function Te(L){L!==IE?(Q(e.CULL_FACE),L!==z&&(L===G0?e.cullFace(e.BACK):L===BE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),z=L}function Be(L){L!==J&&(P&&e.lineWidth(L),J=L)}function We(L,ut,nt){L?(Q(e.POLYGON_OFFSET_FILL),(tt!==ut||k!==nt)&&(tt=ut,k=nt,r.getReversed()&&(ut=-ut),e.polygonOffset(ut,nt))):pt(e.POLYGON_OFFSET_FILL)}function fe(L){L?Q(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Re(L){L===void 0&&(L=e.TEXTURE0+O-1),ot!==L&&(e.activeTexture(L),ot=L)}function I(L,ut,nt){nt===void 0&&(ot===null?nt=e.TEXTURE0+O-1:nt=ot);let ht=dt[nt];ht===void 0&&(ht={type:void 0,texture:void 0},dt[nt]=ht),(ht.type!==L||ht.texture!==ut)&&(ot!==nt&&(e.activeTexture(nt),ot=nt),e.bindTexture(L,ut||D[L]),ht.type=L,ht.texture=ut)}function Fe(){const L=dt[ot];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{e.compressedTexImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function x(){try{e.texSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function G(){try{e.texSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function V(){try{e.texStorage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function st(){try{e.texStorage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function X(){try{e.texImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function j(){try{e.texImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function rt(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function mt(L,ut){p[L]!==ut&&(e.pixelStorei(L,ut),p[L]=ut)}function ct(L){ee.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function ft(L){kt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),kt.copy(L))}function yt(L,ut){let nt=c.get(ut);nt===void 0&&(nt=new WeakMap,c.set(ut,nt));let ht=nt.get(L);ht===void 0&&(ht=e.getUniformBlockIndex(ut,L.name),nt.set(L,ht))}function wt(L,ut){const ht=c.get(ut).get(L);l.get(ut)!==ht&&(e.uniformBlockBinding(ut,ht,L.__bindingPointIndex),l.set(ut,ht))}function It(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},ot=null,dt={},u={},h=new WeakMap,S=[],T=null,_=!1,f=null,m=null,y=null,v=null,b=null,M=null,R=null,g=new jt(0,0,0),A=0,U=!1,N=null,z=null,J=null,tt=null,k=null,ee.set(0,0,e.canvas.width,e.canvas.height),kt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Q,disable:pt,bindFramebuffer:lt,drawBuffers:Et,useProgram:Yt,setBlending:zt,setMaterial:Lt,setFlipSided:ue,setCullFace:Te,setLineWidth:Be,setPolygonOffset:We,setScissorTest:fe,activeTexture:Re,bindTexture:I,unbindTexture:Fe,compressedTexImage2D:ae,compressedTexImage3D:C,texImage2D:X,texImage3D:j,pixelStorei:mt,getParameter:rt,updateUBOMapping:yt,uniformBlockBinding:wt,texStorage2D:V,texStorage3D:st,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:$,scissor:ct,viewport:ft,reset:It}}function V3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,x){return S?new OffscreenCanvas(C,x):$c("canvas")}function _(C,x,G){let Y=1;const $=ae(C);if(($.width>G||$.height>G)&&(Y=G/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const V=Math.floor(Y*$.width),st=Math.floor(Y*$.height);u===void 0&&(u=T(V,st));const X=x?T(V,st):u;return X.width=V,X.height=st,X.getContext("2d").drawImage(C,0,0,V,st),Ot("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+st+")."),X}else return"data"in C&&Ot("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){e.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,x,G,Y,$,V=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st;Y&&(st=t.get("EXT_texture_norm16"),st||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=x;if(x===e.RED&&(G===e.FLOAT&&(X=e.R32F),G===e.HALF_FLOAT&&(X=e.R16F),G===e.UNSIGNED_BYTE&&(X=e.R8),G===e.UNSIGNED_SHORT&&st&&(X=st.R16_EXT),G===e.SHORT&&st&&(X=st.R16_SNORM_EXT)),x===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(X=e.R8UI),G===e.UNSIGNED_SHORT&&(X=e.R16UI),G===e.UNSIGNED_INT&&(X=e.R32UI),G===e.BYTE&&(X=e.R8I),G===e.SHORT&&(X=e.R16I),G===e.INT&&(X=e.R32I)),x===e.RG&&(G===e.FLOAT&&(X=e.RG32F),G===e.HALF_FLOAT&&(X=e.RG16F),G===e.UNSIGNED_BYTE&&(X=e.RG8),G===e.UNSIGNED_SHORT&&st&&(X=st.RG16_EXT),G===e.SHORT&&st&&(X=st.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(X=e.RG8UI),G===e.UNSIGNED_SHORT&&(X=e.RG16UI),G===e.UNSIGNED_INT&&(X=e.RG32UI),G===e.BYTE&&(X=e.RG8I),G===e.SHORT&&(X=e.RG16I),G===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(X=e.RGB8UI),G===e.UNSIGNED_SHORT&&(X=e.RGB16UI),G===e.UNSIGNED_INT&&(X=e.RGB32UI),G===e.BYTE&&(X=e.RGB8I),G===e.SHORT&&(X=e.RGB16I),G===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),G===e.UNSIGNED_INT&&(X=e.RGBA32UI),G===e.BYTE&&(X=e.RGBA8I),G===e.SHORT&&(X=e.RGBA16I),G===e.INT&&(X=e.RGBA32I)),x===e.RGB&&(G===e.UNSIGNED_SHORT&&st&&(X=st.RGB16_EXT),G===e.SHORT&&st&&(X=st.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),x===e.RGBA){const j=V?Jc:Jt.getTransfer($);G===e.FLOAT&&(X=e.RGBA32F),G===e.HALF_FLOAT&&(X=e.RGBA16F),G===e.UNSIGNED_BYTE&&(X=j===oe?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&st&&(X=st.RGBA16_EXT),G===e.SHORT&&st&&(X=st.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(C,x){let G;return C?x===null||x===Di||x===Wo?G=e.DEPTH24_STENCIL8:x===bi?G=e.DEPTH32F_STENCIL8:x===Xo&&(G=e.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===Wo?G=e.DEPTH_COMPONENT24:x===bi?G=e.DEPTH_COMPONENT32F:x===Xo&&(G=e.DEPTH_COMPONENT16),G}function M(C,x){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&p.delete(x)}function g(C){const x=C.target;x.removeEventListener("dispose",g),N(x)}function A(C){const x=i.get(C);if(x.__webglInit===void 0)return;const G=C.source,Y=h.get(G);if(Y){const $=Y[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(C),Object.keys(Y).length===0&&h.delete(G)}i.remove(C)}function U(C){const x=i.get(C);e.deleteTexture(x.__webglTexture);const G=C.source,Y=h.get(G);delete Y[x.__cacheKey],r.memory.textures--}function N(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let $=0;$<x.__webglFramebuffer[Y].length;$++)e.deleteFramebuffer(x.__webglFramebuffer[Y][$]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,$=G.length;Y<$;Y++){const V=i.get(G[Y]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(G[Y])}i.remove(C)}let z=0;function J(){z=0}function tt(){return z}function k(C){z=C}function O(){const C=z;return C>=a.maxTextures&&Ot("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),z+=1,C}function P(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Z(C,x){const G=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,C,x);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+x)}function et(C,x){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){pt(G,C,x);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+x)}function ot(C,x){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){pt(G,C,x);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+x)}function dt(C,x){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){lt(G,C,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+x)}const St={[th]:e.REPEAT,[Qi]:e.CLAMP_TO_EDGE,[eh]:e.MIRRORED_REPEAT},Wt={[cn]:e.NEAREST,[r1]:e.NEAREST_MIPMAP_NEAREST,[Rl]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[gf]:e.LINEAR_MIPMAP_NEAREST,[fs]:e.LINEAR_MIPMAP_LINEAR},ee={[c1]:e.NEVER,[p1]:e.ALWAYS,[u1]:e.LESS,[Xp]:e.LEQUAL,[f1]:e.EQUAL,[Wp]:e.GEQUAL,[d1]:e.GREATER,[h1]:e.NOTEQUAL};function kt(C,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===gf||x.magFilter===Rl||x.magFilter===fs||x.minFilter===pn||x.minFilter===gf||x.minFilter===Rl||x.minFilter===fs)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,St[x.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,St[x.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,St[x.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Wt[x.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Wt[x.minFilter]),x.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Rl&&x.minFilter!==fs||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function w(C,x){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let $=h.get(Y);$===void 0&&($={},h.set(Y,$));const V=P(x);if(V!==C.__cacheKey){$[V]===void 0&&($[V]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),$[V].usedTimes++;const st=$[C.__cacheKey];st!==void 0&&($[C.__cacheKey].usedTimes--,st.usedTimes===0&&U(x)),C.__cacheKey=V,C.__webglTexture=$[V].texture}return G}function D(C,x,G){return Math.floor(Math.floor(C/G)/x)}function Q(C,x,G,Y){const V=C.updateRanges;if(V.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,G,Y,x.data);else{V.sort((mt,ct)=>mt.start-ct.start);let st=0;for(let mt=1;mt<V.length;mt++){const ct=V[st],ft=V[mt],yt=ct.start+ct.count,wt=D(ft.start,x.width,4),It=D(ct.start,x.width,4);ft.start<=yt+1&&wt===It&&D(ft.start+ft.count-1,x.width,4)===wt?ct.count=Math.max(ct.count,ft.start+ft.count-ct.start):(++st,V[st]=ft)}V.length=st+1;const X=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),rt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let mt=0,ct=V.length;mt<ct;mt++){const ft=V[mt],yt=Math.floor(ft.start/4),wt=Math.ceil(ft.count/4),It=yt%x.width,L=Math.floor(yt/x.width),ut=wt,nt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,It),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,It,L,ut,nt,G,Y,x.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,X),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,rt)}}function pt(C,x,G){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);const $=w(C,x),V=x.source;n.bindTexture(Y,C.__webglTexture,e.TEXTURE0+G);const st=i.get(V);if(V.version!==st.__version||$===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const nt=Jt.getPrimaries(Jt.workingColorSpace),ht=x.colorSpace===Ca?null:Jt.getPrimaries(x.colorSpace),xt=x.colorSpace===Ca||nt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let j=_(x.image,!1,a.maxTextureSize);j=Fe(x,j);const rt=s.convert(x.format,x.colorSpace),mt=s.convert(x.type);let ct=v(x.internalFormat,rt,mt,x.normalized,x.colorSpace,x.isVideoTexture);kt(Y,x);let ft;const yt=x.mipmaps,wt=x.isVideoTexture!==!0,It=st.__version===void 0||$===!0,L=V.dataReady,ut=M(x,j);if(x.isDepthTexture)ct=b(x.format===ds,x.type),It&&(wt?n.texStorage2D(e.TEXTURE_2D,1,ct,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,ct,j.width,j.height,0,rt,mt,null));else if(x.isDataTexture)if(yt.length>0){wt&&It&&n.texStorage2D(e.TEXTURE_2D,ut,ct,yt[0].width,yt[0].height);for(let nt=0,ht=yt.length;nt<ht;nt++)ft=yt[nt],wt?L&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ft.width,ft.height,rt,mt,ft.data):n.texImage2D(e.TEXTURE_2D,nt,ct,ft.width,ft.height,0,rt,mt,ft.data);x.generateMipmaps=!1}else wt?(It&&n.texStorage2D(e.TEXTURE_2D,ut,ct,j.width,j.height),L&&Q(x,j,rt,mt)):n.texImage2D(e.TEXTURE_2D,0,ct,j.width,j.height,0,rt,mt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){wt&&It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ct,yt[0].width,yt[0].height,j.depth);for(let nt=0,ht=yt.length;nt<ht;nt++)if(ft=yt[nt],x.format!==di)if(rt!==null)if(wt){if(L)if(x.layerUpdates.size>0){const xt=vg(ft.width,ft.height,x.format,x.type);for(const at of x.layerUpdates){const Rt=ft.data.subarray(at*xt/ft.data.BYTES_PER_ELEMENT,(at+1)*xt/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,at,ft.width,ft.height,1,rt,Rt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,j.depth,rt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,ct,ft.width,ft.height,j.depth,0,ft.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,j.depth,rt,mt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,ct,ft.width,ft.height,j.depth,0,rt,mt,ft.data)}else{wt&&It&&n.texStorage2D(e.TEXTURE_2D,ut,ct,yt[0].width,yt[0].height);for(let nt=0,ht=yt.length;nt<ht;nt++)ft=yt[nt],x.format!==di?rt!==null?wt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,ft.width,ft.height,rt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,ct,ft.width,ft.height,0,ft.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?L&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ft.width,ft.height,rt,mt,ft.data):n.texImage2D(e.TEXTURE_2D,nt,ct,ft.width,ft.height,0,rt,mt,ft.data)}else if(x.isDataArrayTexture)if(wt){if(It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ct,j.width,j.height,j.depth),L)if(x.layerUpdates.size>0){const nt=vg(j.width,j.height,x.format,x.type);for(const ht of x.layerUpdates){const xt=j.data.subarray(ht*nt/j.data.BYTES_PER_ELEMENT,(ht+1)*nt/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,j.width,j.height,1,rt,mt,xt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,rt,mt,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ct,j.width,j.height,j.depth,0,rt,mt,j.data);else if(x.isData3DTexture)wt?(It&&n.texStorage3D(e.TEXTURE_3D,ut,ct,j.width,j.height,j.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,rt,mt,j.data)):n.texImage3D(e.TEXTURE_3D,0,ct,j.width,j.height,j.depth,0,rt,mt,j.data);else if(x.isFramebufferTexture){if(It)if(wt)n.texStorage2D(e.TEXTURE_2D,ut,ct,j.width,j.height);else{let nt=j.width,ht=j.height;for(let xt=0;xt<ut;xt++)n.texImage2D(e.TEXTURE_2D,xt,ct,nt,ht,0,rt,mt,null),nt>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const nt=e.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),j.parentNode!==nt){nt.appendChild(j),p.add(x),nt.onpaint=ht=>{const xt=ht.changedElements;for(const at of p)xt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,j);else{const xt=e.RGBA,at=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,xt,at,Rt,j)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(yt.length>0){if(wt&&It){const nt=ae(yt[0]);n.texStorage2D(e.TEXTURE_2D,ut,ct,nt.width,nt.height)}for(let nt=0,ht=yt.length;nt<ht;nt++)ft=yt[nt],wt?L&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,rt,mt,ft):n.texImage2D(e.TEXTURE_2D,nt,ct,rt,mt,ft);x.generateMipmaps=!1}else if(wt){if(It){const nt=ae(j);n.texStorage2D(e.TEXTURE_2D,ut,ct,nt.width,nt.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt,mt,j)}else n.texImage2D(e.TEXTURE_2D,0,ct,rt,mt,j);f(x)&&m(Y),st.__version=V.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function lt(C,x,G){if(x.image.length!==6)return;const Y=w(C,x),$=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+G);const V=i.get($);if($.version!==V.__version||Y===!0){n.activeTexture(e.TEXTURE0+G);const st=Jt.getPrimaries(Jt.workingColorSpace),X=x.colorSpace===Ca?null:Jt.getPrimaries(x.colorSpace),j=x.colorSpace===Ca||st===X?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const rt=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let at=0;at<6;at++)!rt&&!mt?ct[at]=_(x.image[at],!0,a.maxCubemapSize):ct[at]=mt?x.image[at].image:x.image[at],ct[at]=Fe(x,ct[at]);const ft=ct[0],yt=s.convert(x.format,x.colorSpace),wt=s.convert(x.type),It=v(x.internalFormat,yt,wt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ut=V.__version===void 0||Y===!0,nt=$.dataReady;let ht=M(x,ft);kt(e.TEXTURE_CUBE_MAP,x);let xt;if(rt){L&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,It,ft.width,ft.height);for(let at=0;at<6;at++){xt=ct[at].mipmaps;for(let Rt=0;Rt<xt.length;Rt++){const Tt=xt[Rt];x.format!==di?yt!==null?L?nt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,Tt.width,Tt.height,yt,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,It,Tt.width,Tt.height,0,Tt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,Tt.width,Tt.height,yt,wt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,It,Tt.width,Tt.height,0,yt,wt,Tt.data)}}}else{if(xt=x.mipmaps,L&&ut){xt.length>0&&ht++;const at=ae(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,It,at.width,at.height)}for(let at=0;at<6;at++)if(mt){L?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ct[at].width,ct[at].height,yt,wt,ct[at].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,It,ct[at].width,ct[at].height,0,yt,wt,ct[at].data);for(let Rt=0;Rt<xt.length;Rt++){const De=xt[Rt].image[at].image;L?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,De.width,De.height,yt,wt,De.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,It,De.width,De.height,0,yt,wt,De.data)}}else{L?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt,wt,ct[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,It,yt,wt,ct[at]);for(let Rt=0;Rt<xt.length;Rt++){const Tt=xt[Rt];L?nt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,yt,wt,Tt.image[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,It,yt,wt,Tt.image[at])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),V.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Et(C,x,G,Y,$,V){const st=s.convert(G.format,G.colorSpace),X=s.convert(G.type),j=v(G.internalFormat,st,X,G.normalized,G.colorSpace),rt=i.get(x),mt=i.get(G);if(mt.__renderTarget=x,!rt.__hasExternalTextures){const ct=Math.max(1,x.width>>V),ft=Math.max(1,x.height>>V);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,V,j,ct,ft,x.depth,0,st,X,null):n.texImage2D($,V,j,ct,ft,0,st,X,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,$,mt.__webglTexture,0,fe(x)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,$,mt.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Yt(C,x,G){if(e.bindRenderbuffer(e.RENDERBUFFER,C),x.depthBuffer){const Y=x.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,V=b(x.stencilBuffer,$),st=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Re(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(x),V,x.width,x.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(x),V,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,V,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,C)}else{const Y=x.textures;for(let $=0;$<Y.length;$++){const V=Y[$],st=s.convert(V.format,V.colorSpace),X=s.convert(V.type),j=v(V.internalFormat,st,X,V.normalized,V.colorSpace);Re(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(x),j,x.width,x.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(x),j,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,j,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Nt(C,x,G){const Y=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),kt(e.TEXTURE_CUBE_MAP,x.depthTexture);const rt=s.convert(x.depthTexture.format),mt=s.convert(x.depthTexture.type);let ct;x.depthTexture.format===ua?ct=e.DEPTH_COMPONENT24:x.depthTexture.format===ds&&(ct=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ct,x.width,x.height,0,rt,mt,null)}}else Z(x.depthTexture,0);const V=$.__webglTexture,st=fe(x),X=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,j=x.depthTexture.format===ds?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===ua)Re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,X,V,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,j,X,V,0);else if(x.depthTexture.format===ds)Re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,X,V,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,j,X,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ct(C){const x=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Nt(x.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?Nt(x.__webglFramebuffer[0],C,0):Nt(x.__webglFramebuffer,C,0)}else if(G){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),Yt(x.__webglDepthbuffer[Y],C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,V)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Yt(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,V)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function zt(C,x,G){const Y=i.get(C);x!==void 0&&Et(Y.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Ct(C)}function Lt(C){const x=C.texture,G=i.get(C),Y=i.get(x);C.addEventListener("dispose",g);const $=C.textures,V=C.isWebGLCubeRenderTarget===!0,st=$.length>1;if(st||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,r.memory.textures++),V){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let j=0;j<x.mipmaps.length;j++)G.__webglFramebuffer[X][j]=e.createFramebuffer()}else G.__webglFramebuffer[X]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<x.mipmaps.length;X++)G.__webglFramebuffer[X]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(st)for(let X=0,j=$.length;X<j;X++){const rt=i.get($[X]);rt.__webglTexture===void 0&&(rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Re(C)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){const j=$[X];G.__webglColorRenderbuffer[X]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[X]);const rt=s.convert(j.format,j.colorSpace),mt=s.convert(j.type),ct=v(j.internalFormat,rt,mt,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ft=fe(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,ct,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.RENDERBUFFER,G.__webglColorRenderbuffer[X])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),Yt(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(e.TEXTURE_CUBE_MAP,x);for(let X=0;X<6;X++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Et(G.__webglFramebuffer[X][j],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,j);else Et(G.__webglFramebuffer[X],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(x)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(st){for(let X=0,j=$.length;X<j;X++){const rt=$[X],mt=i.get(rt);let ct=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,mt.__webglTexture),kt(ct,rt),Et(G.__webglFramebuffer,C,rt,e.COLOR_ATTACHMENT0+X,ct,0),f(rt)&&m(ct)}n.unbindTexture()}else{let X=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(X,Y.__webglTexture),kt(X,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Et(G.__webglFramebuffer[j],C,x,e.COLOR_ATTACHMENT0,X,j);else Et(G.__webglFramebuffer,C,x,e.COLOR_ATTACHMENT0,X,0);f(x)&&m(X),n.unbindTexture()}C.depthBuffer&&Ct(C)}function ue(C){const x=C.textures;for(let G=0,Y=x.length;G<Y;G++){const $=x[G];if(f($)){const V=y(C),st=i.get($).__webglTexture;n.bindTexture(V,st),m(V),n.unbindTexture()}}}const Te=[],Be=[];function We(C){if(C.samples>0){if(Re(C)===!1){const x=C.textures,G=C.width,Y=C.height;let $=e.COLOR_BUFFER_BIT;const V=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=i.get(C),X=x.length>1;if(X)for(let rt=0;rt<x.length;rt++)n.bindFramebuffer(e.FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,st.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const j=C.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),X){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const mt=i.get(x[rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,mt,0)}e.blitFramebuffer(0,0,G,Y,0,0,G,Y,$,e.NEAREST),l===!0&&(Te.length=0,Be.length=0,Te.push(e.COLOR_ATTACHMENT0+rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Te.push(V),Be.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),X)for(let rt=0;rt<x.length;rt++){n.bindFramebuffer(e.FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const mt=i.get(x[rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,st.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function fe(C){return Math.min(a.maxSamples,C.samples)}function Re(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){const x=r.render.frame;d.get(C)!==x&&(d.set(C,x),C.update())}function Fe(C,x){const G=C.colorSpace,Y=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Qc&&G!==Ca&&(Jt.getTransfer(G)===oe?(Y!==di||$!==In)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",G)),x}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=J,this.getTextureUnits=tt,this.setTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=et,this.setTexture3D=ot,this.setTextureCube=dt,this.rebindTextures=zt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function k3(e,t){function n(i,a=Ca){let s;const r=Jt.getTransfer(a);if(i===In)return e.UNSIGNED_BYTE;if(i===Fp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Hp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===aS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===sS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===nS)return e.BYTE;if(i===iS)return e.SHORT;if(i===Xo)return e.UNSIGNED_SHORT;if(i===Bp)return e.INT;if(i===Di)return e.UNSIGNED_INT;if(i===bi)return e.FLOAT;if(i===ca)return e.HALF_FLOAT;if(i===rS)return e.ALPHA;if(i===oS)return e.RGB;if(i===di)return e.RGBA;if(i===ua)return e.DEPTH_COMPONENT;if(i===ds)return e.DEPTH_STENCIL;if(i===lS)return e.RED;if(i===Gp)return e.RED_INTEGER;if(i===bs)return e.RG;if(i===Vp)return e.RG_INTEGER;if(i===kp)return e.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(r===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===ah||i===sh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===oh||i===lh||i===ch||i===uh||i===Kc||i===fh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rh||i===oh)return r===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ch)return s.COMPRESSED_R11_EAC;if(i===uh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return s.COMPRESSED_RG11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===bh||i===Th)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_h)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ah||i===Rh||i===Ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ah)return r===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Dh||i===jc||i===Uh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const X3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W3=`
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

}`;class q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new xS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ui({vertexShader:X3,fragmentShader:W3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ye(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y3 extends Ds{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,S=null;const T=typeof XRWebGLBinding<"u",_=new q3,f={},m=n.getContextAttributes();let y=null,v=null;const b=[],M=[],R=new qt;let g=null;const A=new $n;A.viewport=new Ce;const U=new $n;U.viewport=new Ce;const N=[A,U],z=new ib;let J=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let D=b[w];return D===void 0&&(D=new bf,b[w]=D),D.getTargetRaySpace()},this.getControllerGrip=function(w){let D=b[w];return D===void 0&&(D=new bf,b[w]=D),D.getGripSpace()},this.getHand=function(w){let D=b[w];return D===void 0&&(D=new bf,b[w]=D),D.getHandSpace()};function k(w){const D=M.indexOf(w.inputSource);if(D===-1)return;const Q=b[D];Q!==void 0&&(Q.update(w.inputSource,w.frame,c||r),Q.dispatchEvent({type:w.type,data:w.inputSource}))}function O(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",P);for(let w=0;w<b.length;w++){const D=M[w];D!==null&&(M[w]=null,b[w].disconnect(D))}J=null,tt=null,_.reset();for(const w in f)delete f[w];t.setRenderTarget(y),h=null,u=null,p=null,a=null,v=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){s=w,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){o=w,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(w){if(a=w,a!==null){if(y=t.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",O),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,pt=null,lt=null;m.depth&&(lt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?ds:ua,pt=m.stencil?Wo:Di);const Et={colorFormat:n.RGBA8,depthFormat:lt,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Et),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ci(u.textureWidth,u.textureHeight,{format:di,type:In,depthTexture:new Or(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,Q),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Ci(h.framebufferWidth,h.framebufferHeight,{format:di,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),kt.setContext(a),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function P(w){for(let D=0;D<w.removed.length;D++){const Q=w.removed[D],pt=M.indexOf(Q);pt>=0&&(M[pt]=null,b[pt].disconnect(Q))}for(let D=0;D<w.added.length;D++){const Q=w.added[D];let pt=M.indexOf(Q);if(pt===-1){for(let Et=0;Et<b.length;Et++)if(Et>=M.length){M.push(Q),pt=Et;break}else if(M[Et]===null){M[Et]=Q,pt=Et;break}if(pt===-1)break}const lt=b[pt];lt&&lt.connect(Q)}}const Z=new H,et=new H;function ot(w,D,Q){Z.setFromMatrixPosition(D.matrixWorld),et.setFromMatrixPosition(Q.matrixWorld);const pt=Z.distanceTo(et),lt=D.projectionMatrix.elements,Et=Q.projectionMatrix.elements,Yt=lt[14]/(lt[10]-1),Nt=lt[14]/(lt[10]+1),Ct=(lt[9]+1)/lt[5],zt=(lt[9]-1)/lt[5],Lt=(lt[8]-1)/lt[0],ue=(Et[8]+1)/Et[0],Te=Yt*Lt,Be=Yt*ue,We=pt/(-Lt+ue),fe=We*-Lt;if(D.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(fe),w.translateZ(We),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),lt[10]===-1)w.projectionMatrix.copy(D.projectionMatrix),w.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const Re=Yt+We,I=Nt+We,Fe=Te-fe,ae=Be+(pt-fe),C=Ct*Nt/I*Re,x=zt*Nt/I*Re;w.projectionMatrix.makePerspective(Fe,ae,C,x,Re,I),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function dt(w,D){D===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(D.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(a===null)return;let D=w.near,Q=w.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(Q=_.depthFar)),z.near=U.near=A.near=D,z.far=U.far=A.far=Q,(J!==z.near||tt!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),J=z.near,tt=z.far),z.layers.mask=w.layers.mask|6,A.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;const pt=w.parent,lt=z.cameras;dt(z,pt);for(let Et=0;Et<lt.length;Et++)dt(lt[Et],pt);lt.length===2?ot(z,A,U):z.projectionMatrix.copy(A.projectionMatrix),St(w,z,pt)};function St(w,D,Q){Q===null?w.matrix.copy(D.matrixWorld):(w.matrix.copy(Q.matrixWorld),w.matrix.invert(),w.matrix.multiply(D.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(D.projectionMatrix),w.projectionMatrixInverse.copy(D.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Lh*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(w){l=w,u!==null&&(u.fixedFoveation=w),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=w)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(w){return f[w]};let Wt=null;function ee(w,D){if(d=D.getViewerPose(c||r),S=D,d!==null){const Q=d.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let pt=!1;Q.length!==z.cameras.length&&(z.cameras.length=0,pt=!0);for(let Nt=0;Nt<Q.length;Nt++){const Ct=Q[Nt];let zt=null;if(h!==null)zt=h.getViewport(Ct);else{const ue=p.getViewSubImage(u,Ct);zt=ue.viewport,Nt===0&&(t.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(v))}let Lt=N[Nt];Lt===void 0&&(Lt=new $n,Lt.layers.enable(Nt),Lt.viewport=new Ce,N[Nt]=Lt),Lt.matrix.fromArray(Ct.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ct.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(zt.x,zt.y,zt.width,zt.height),Nt===0&&(z.matrix.copy(Lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),pt===!0&&z.cameras.push(Lt)}const lt=a.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const Nt=p.getDepthInformation(Q[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(Nt,a.renderState)}if(lt&&lt.includes("camera-access")&&T){t.state.unbindTexture(),p=i.getBinding();for(let Nt=0;Nt<Q.length;Nt++){const Ct=Q[Nt].camera;if(Ct){let zt=f[Ct];zt||(zt=new xS,f[Ct]=zt);const Lt=p.getCameraImage(Ct);zt.sourceTexture=Lt}}}}for(let Q=0;Q<b.length;Q++){const pt=M[Q],lt=b[Q];pt!==null&&lt!==void 0&&lt.update(pt,D,c||r)}Wt&&Wt(w,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),S=null}const kt=new ES;kt.setAnimationLoop(ee),this.setAnimationLoop=function(w){Wt=w},this.dispose=function(){}}}const Z3=new we,DS=new Bt;DS.set(-1,0,0,0,1,0,0,0,1);function K3(e,t){function n(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,SS(e)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function a(_,f,m,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(_,f):f.isMeshLambertMaterial?(s(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(_,f),p(_,f)):f.isMeshPhongMaterial?(s(_,f),d(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(_,f),u(_,f),f.isMeshPhysicalMaterial&&h(_,f,v)):f.isMeshMatcapMaterial?(s(_,f),S(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),T(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(r(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,m,y):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,n(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===An&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,n(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===An&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,n(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,n(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const m=t.get(f),y=m.envMap,v=m.envMapRotation;y&&(_.envMap.value=y,_.envMapRotation.value.setFromMatrix4(Z3.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(DS),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,_.aoMapTransform))}function r(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,m,y){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*m,_.scale.value=y*.5,f.map&&(_.map.value=f.map,n(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function d(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function p(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function u(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function h(_,f,m){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,f){f.matcap&&(_.matcap.value=f.matcap)}function T(_,f){const m=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function j3(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const M=b.program;i.uniformBlockBinding(v,M)}function c(v,b){let M=a[v.id];M===void 0&&(_(v),M=d(v),a[v.id]=M,v.addEventListener("dispose",m));const R=b.program;i.updateUBOMapping(v,R);const g=t.render.frame;s[v.id]!==g&&(u(v),s[v.id]=g)}function d(v){const b=p();v.__bindingPointIndex=b;const M=e.createBuffer(),R=v.__size,g=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,R,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,M),M}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=a[v.id],M=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let g=0,A=M.length;g<A;g++){const U=M[g];if(Array.isArray(U))for(let N=0,z=U.length;N<z;N++)h(U[N],g,N,R);else h(U,g,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(v,b,M,R){if(T(v,b,M,R)===!0){const g=v.__offset,A=v.value;if(Array.isArray(A)){let U=0;for(let N=0;N<A.length;N++){const z=A[N],J=f(z);S(z,v.__data,U),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(A,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,v.__data)}}function S(v,b,M){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,M)}function T(v,b,M,R){const g=v.value,A=b+"_"+M;if(R[A]===void 0)return typeof g=="number"||typeof g=="boolean"?R[A]=g:ArrayBuffer.isView(g)?R[A]=g.slice():R[A]=g.clone(),!0;{const U=R[A];if(typeof g=="number"||typeof g=="boolean"){if(U!==g)return R[A]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(U.equals(g)===!1)return U.copy(g),!0}}return!1}function _(v){const b=v.uniforms;let M=0;const R=16;for(let A=0,U=b.length;A<U;A++){const N=Array.isArray(b[A])?b[A]:[b[A]];for(let z=0,J=N.length;z<J;z++){const tt=N[z],k=Array.isArray(tt.value)?tt.value:[tt.value];for(let O=0,P=k.length;O<P;O++){const Z=k[O],et=f(Z),ot=M%R,dt=ot%et.boundary,St=ot+dt;M+=dt,St!==0&&R-St<et.storage&&(M+=R-St),tt.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=M,M+=et.storage}}}const g=M%R;return g>0&&(M+=R-g),v.__size=M,v.__cache={},this}function f(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const M=r.indexOf(b.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function y(){for(const v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:y}}const Q3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function J3(){return vi===null&&(vi=new F1(Q3,16,16,bs,ca),vi.name="DFG_LUT",vi.minFilter=pn,vi.magFilter=pn,vi.wrapS=Qi,vi.wrapT=Qi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class $3{constructor(t={}){const{canvas:n=g1(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=In}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=r;const T=h,_=new Set([kp,Vp,Gp]),f=new Set([In,Di,Xo,Wo,Fp,Hp]),m=new Uint32Array(4),y=new Int32Array(4),v=new H;let b=null,M=null;const R=[],g=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let N=!1,z=null,J=null,tt=null,k=null;this._outputColorSpace=Kn;let O=0,P=0,Z=null,et=-1,ot=null;const dt=new Ce,St=new Ce;let Wt=null;const ee=new jt(0);let kt=0,w=n.width,D=n.height,Q=1,pt=null,lt=null;const Et=new Ce(0,0,w,D),Yt=new Ce(0,0,w,D);let Nt=!1;const Ct=new Zp;let zt=!1,Lt=!1;const ue=new we,Te=new H,Be=new Ce,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Re(){return Z===null?Q:1}let I=i;function Fe(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",pi,!1),I===null){const F="webgl2";if(I=Fe(F,E),I===null)throw Fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw ie("WebGLRenderer: "+E.message),E}let ae,C,x,G,Y,$,V,st,X,j,rt,mt,ct,ft,yt,wt,It,L,ut,nt,ht,xt,at;function Rt(){ae=new JA(I),ae.init(),ht=new k3(I,ae),C=new XA(I,ae,t,ht),x=new G3(I,ae),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),J=I.createFramebuffer(),tt=I.createFramebuffer(),k=I.createFramebuffer(),G=new eR(I),Y=new R3,$=new V3(I,ae,x,Y,C,ht,G),V=new QA(U),st=new sb(I),xt=new VA(I,st),X=new $A(I,st,G,xt),j=new iR(I,X,st,xt,G),L=new nR(I,C,$),yt=new WA(Y),rt=new A3(U,V,ae,C,xt,yt),mt=new K3(U,Y),ct=new w3,ft=new P3(ae),It=new GA(U,V,x,j,S,l),wt=new H3(U,j,C),at=new j3(I,G,C,x),ut=new kA(I,ae,G),nt=new tR(I,ae,G),G.programs=rt.programs,U.capabilities=C,U.extensions=ae,U.properties=Y,U.renderLists=ct,U.shadowMap=wt,U.state=x,U.info=G}Rt(),T!==In&&(A=new sR(T,n.width,n.height,o,a,s));const Tt=new Y3(U,I);this.xr=Tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(w,D,!1))},this.getSize=function(E){return E.set(w,D)},this.setSize=function(E,F,K=!0){if(Tt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,D=F,n.width=Math.floor(E*Q),n.height=Math.floor(F*Q),K===!0&&(n.style.width=E+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(w*Q,D*Q).floor()},this.setDrawingBufferSize=function(E,F,K){w=E,D=F,Q=K,n.width=Math.floor(E*K),n.height=Math.floor(F*K),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(T===In){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(dt)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,F,K,W){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,F,K,W),x.viewport(dt.copy(Et).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,F,K,W){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,F,K,W),x.scissor(St.copy(Yt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){x.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){pt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,K=!0){let W=0;if(E){let q=!1;if(Z!==null){const vt=Z.texture.format;q=_.has(vt)}if(q){const vt=Z.texture.type,bt=f.has(vt),_t=It.getClearColor(),At=It.getClearAlpha(),Dt=_t.r,Ht=_t.g,Xt=_t.b;bt?(m[0]=Dt,m[1]=Ht,m[2]=Xt,m[3]=At,I.clearBufferuiv(I.COLOR,0,m)):(y[0]=Dt,y[1]=Ht,y[2]=Xt,y[3]=At,I.clearBufferiv(I.COLOR,0,y))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),It.dispose(),ct.dispose(),ft.dispose(),Y.dispose(),V.dispose(),j.dispose(),xt.dispose(),at.dispose(),rt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",sm),Tt.removeEventListener("sessionend",rm),Ja.stop()};function De(E){E.preventDefault(),K0("WebGLRenderer: Context Lost."),N=!0}function ve(){K0("WebGLRenderer: Context Restored."),N=!1;const E=G.autoReset,F=wt.enabled,K=wt.autoUpdate,W=wt.needsUpdate,q=wt.type;Rt(),G.autoReset=E,wt.enabled=F,wt.autoUpdate=K,wt.needsUpdate=W,wt.type=q}function pi(E){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mi(E){const F=E.target;F.removeEventListener("dispose",mi),US(F)}function US(E){NS(E),Y.remove(E)}function NS(E){const F=Y.get(E).programs;F!==void 0&&(F.forEach(function(K){rt.releaseProgram(K)}),E.isShaderMaterial&&rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,K,W,q,vt){F===null&&(F=We);const bt=q.isMesh&&q.matrixWorld.determinantAffine()<0,_t=PS(E,F,K,W,q);x.setMaterial(W,bt);let At=K.index,Dt=1;if(W.wireframe===!0){if(At=X.getWireframeAttribute(K),At===void 0)return;Dt=2}const Ht=K.drawRange,Xt=K.attributes.position;let Ut=Ht.start*Dt,de=(Ht.start+Ht.count)*Dt;vt!==null&&(Ut=Math.max(Ut,vt.start*Dt),de=Math.min(de,(vt.start+vt.count)*Dt)),At!==null?(Ut=Math.max(Ut,0),de=Math.min(de,At.count)):Xt!=null&&(Ut=Math.max(Ut,0),de=Math.min(de,Xt.count));const Oe=de-Ut;if(Oe<0||Oe===1/0)return;xt.setup(q,W,_t,K,At);let Ue,me=ut;if(At!==null&&(Ue=st.get(At),me=nt,me.setIndex(Ue)),q.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Re()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(q.isLine){let fn=W.linewidth;fn===void 0&&(fn=1),x.setLineWidth(fn*Re()),q.isLineSegments?me.setMode(I.LINES):q.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else q.isPoints?me.setMode(I.POINTS):q.isSprite&&me.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const fn=q._multiDrawStarts,Mt=q._multiDrawCounts,Dn=q._multiDrawCount,ne=At?st.get(At).bytesPerElement:1,Wn=Y.get(W).currentProgram.getUniforms();for(let gi=0;gi<Dn;gi++)Wn.setValue(I,"_gl_DrawID",gi),me.render(fn[gi]/ne,Mt[gi])}else if(q.isInstancedMesh)me.renderInstances(Ut,Oe,q.count);else if(K.isInstancedBufferGeometry){const fn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Mt=Math.min(K.instanceCount,fn);me.renderInstances(Ut,Oe,Mt)}else me.render(Ut,Oe)};function am(E,F,K){E.transparent===!0&&E.side===Si&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,ul(E,F,K),E.side=Za,E.needsUpdate=!0,ul(E,F,K),E.side=Si):ul(E,F,K)}this.compile=function(E,F,K=null){K===null&&(K=E),M=ft.get(K),M.init(F),g.push(M),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights();const W=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let bt=0;bt<vt.length;bt++){const _t=vt[bt];am(_t,K,q),W.add(_t)}else am(vt,K,q),W.add(vt)}),M=g.pop(),W},this.compileAsync=function(E,F,K=null){const W=this.compile(E,F,K);return new Promise(q=>{function vt(){if(W.forEach(function(bt){Y.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){q(E);return}setTimeout(vt,10)}ae.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Cu=null;function LS(E){Cu&&Cu(E)}function sm(){Ja.stop()}function rm(){Ja.start()}const Ja=new ES;Ja.setAnimationLoop(LS),typeof self<"u"&&Ja.setContext(self),this.setAnimationLoop=function(E){Cu=E,Tt.setAnimationLoop(E),E===null?Ja.stop():Ja.start()},Tt.addEventListener("sessionstart",sm),Tt.addEventListener("sessionend",rm),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(E,F);const K=Tt.enabled===!0&&Tt.isPresenting===!0,W=A!==null&&(Z===null||K)&&A.begin(U,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(F),F=Tt.getCamera()),E.isScene===!0&&E.onBeforeRender(U,E,F,Z),M=ft.get(E,g.length),M.init(F),M.state.textureUnits=$.getTextureUnits(),g.push(M),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ct.setFromProjectionMatrix(ue,Ti,F.reversedDepth),Lt=this.localClippingEnabled,zt=yt.init(this.clippingPlanes,Lt),b=ct.get(E,R.length),b.init(),R.push(b),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=U.xr.getDepthSensingMesh();bt!==null&&wu(bt,F,-1/0,U.sortObjects)}wu(E,F,0,U.sortObjects),b.finish(),U.sortObjects===!0&&b.sort(pt,lt,F.reversedDepth),fe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,fe&&It.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&yt.beginShadows();const q=M.state.shadowsArray;if(wt.render(q,E,F),zt===!0&&yt.endShadows(),(W&&A.hasRenderPass())===!1){const bt=b.opaque,_t=b.transmissive;if(M.setupLights(),F.isArrayCamera){const At=F.cameras;if(_t.length>0)for(let Dt=0,Ht=At.length;Dt<Ht;Dt++){const Xt=At[Dt];lm(bt,_t,E,Xt)}fe&&It.render(E);for(let Dt=0,Ht=At.length;Dt<Ht;Dt++){const Xt=At[Dt];om(b,E,Xt,Xt.viewport)}}else _t.length>0&&lm(bt,_t,E,F),fe&&It.render(E),om(b,E,F)}Z!==null&&P===0&&($.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z)),W&&A.end(U),E.isScene===!0&&E.onAfterRender(U,E,F),xt.resetDefaultState(),et=-1,ot=null,g.pop(),g.length>0?(M=g[g.length-1],$.setTextureUnits(M.state.textureUnits),zt===!0&&yt.setGlobalState(U.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,z!==null&&z.renderEnd()};function wu(E,F,K,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){W&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const bt=j.update(E),_t=E.material;_t.visible&&b.push(E,bt,_t,K,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const bt=j.update(E),_t=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Be.copy(bt.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(_t)){const At=bt.groups;for(let Dt=0,Ht=At.length;Dt<Ht;Dt++){const Xt=At[Dt],Ut=_t[Xt.materialIndex];Ut&&Ut.visible&&b.push(E,bt,Ut,K,Be.z,Xt)}}else _t.visible&&b.push(E,bt,_t,K,Be.z,null)}}const vt=E.children;for(let bt=0,_t=vt.length;bt<_t;bt++)wu(vt[bt],F,K,W)}function om(E,F,K,W){const{opaque:q,transmissive:vt,transparent:bt}=E;M.setupLightsView(K),zt===!0&&yt.setGlobalState(U.clippingPlanes,K),W&&x.viewport(dt.copy(W)),q.length>0&&cl(q,F,K),vt.length>0&&cl(vt,F,K),bt.length>0&&cl(bt,F,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function lm(E,F,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){const Ut=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new Ci(1,1,{generateMipmaps:!0,type:Ut?ca:In,minFilter:fs,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const vt=M.state.transmissionRenderTarget[W.id],bt=W.viewport||dt;vt.setSize(bt.z*U.transmissionResolutionScale,bt.w*U.transmissionResolutionScale);const _t=U.getRenderTarget(),At=U.getActiveCubeFace(),Dt=U.getActiveMipmapLevel();U.setRenderTarget(vt),U.getClearColor(ee),kt=U.getClearAlpha(),kt<1&&U.setClearColor(16777215,.5),U.clear(),fe&&It.render(K);const Ht=U.toneMapping;U.toneMapping=Ri;const Xt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),zt===!0&&yt.setGlobalState(U.clippingPlanes,W),cl(E,K,W),$.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let de=0,Oe=F.length;de<Oe;de++){const Ue=F[de],{object:me,geometry:fn,material:Mt,group:Dn}=Ue;if(Mt.side===Si&&me.layers.test(W.layers)){const ne=Mt.side;Mt.side=An,Mt.needsUpdate=!0,cm(me,K,W,fn,Mt,Dn),Mt.side=ne,Mt.needsUpdate=!0,Ut=!0}}Ut===!0&&($.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt))}U.setRenderTarget(_t,At,Dt),U.setClearColor(ee,kt),Xt!==void 0&&(W.viewport=Xt),U.toneMapping=Ht}function cl(E,F,K){const W=F.isScene===!0?F.overrideMaterial:null;for(let q=0,vt=E.length;q<vt;q++){const bt=E[q],{object:_t,geometry:At,group:Dt}=bt;let Ht=bt.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),_t.layers.test(K.layers)&&cm(_t,F,K,At,Ht,Dt)}}function cm(E,F,K,W,q,vt){E.onBeforeRender(U,F,K,W,q,vt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(U,F,K,W,E,vt),q.transparent===!0&&q.side===Si&&q.forceSinglePass===!1?(q.side=An,q.needsUpdate=!0,U.renderBufferDirect(K,F,W,q,E,vt),q.side=Za,q.needsUpdate=!0,U.renderBufferDirect(K,F,W,q,E,vt),q.side=Si):U.renderBufferDirect(K,F,W,q,E,vt),E.onAfterRender(U,F,K,W,q,vt)}function ul(E,F,K){F.isScene!==!0&&(F=We);const W=Y.get(E),q=M.state.lights,vt=M.state.shadowsArray,bt=q.state.version,_t=rt.getParameters(E,q.state,vt,F,K,M.state.lightProbeGridArray),At=rt.getProgramCacheKey(_t);let Dt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=V.get(E.envMap||W.environment,Ht),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",mi),Dt=new Map,W.programs=Dt);let Xt=Dt.get(At);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===bt)return fm(E,_t),Xt}else _t.uniforms=rt.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,K,_t),E.onBeforeCompile(_t,U),Xt=rt.acquireProgram(_t,At),Dt.set(At,Xt),W.uniforms=_t.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=yt.uniform),fm(E,_t),W.needsLights=IS(E),W.lightsStateVersion=bt,W.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=Xt,W.uniformsList=null,Xt}function um(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=vc.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function fm(E,F){const K=Y.get(E);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function OS(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let K=0,W=E.length;K<W;K++){const q=E[K];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function PS(E,F,K,W,q){F.isScene!==!0&&(F=We),$.resetTextureUnits();const vt=F.fog,bt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,_t=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Jt.workingColorSpace,At=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Dt=V.get(W.envMap||bt,At),Ht=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!K.morphAttributes.position,de=!!K.morphAttributes.normal,Oe=!!K.morphAttributes.color;let Ue=Ri;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=U.toneMapping);const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fn=me!==void 0?me.length:0,Mt=Y.get(W),Dn=M.state.lights;if(zt===!0&&(Lt===!0||E!==ot)){const xe=E===ot&&W.id===et;yt.setState(W,E,xe)}let ne=!1;W.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Dn.state.version||Mt.outputColorSpace!==_t||q.isBatchedMesh&&Mt.batching===!1||!q.isBatchedMesh&&Mt.batching===!0||q.isBatchedMesh&&Mt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Mt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Mt.instancing===!1||!q.isInstancedMesh&&Mt.instancing===!0||q.isSkinnedMesh&&Mt.skinning===!1||!q.isSkinnedMesh&&Mt.skinning===!0||q.isInstancedMesh&&Mt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Mt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Mt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Mt.instancingMorph===!1&&q.morphTexture!==null||Mt.envMap!==Dt||W.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==yt.numPlanes||Mt.numIntersection!==yt.numIntersection)||Mt.vertexAlphas!==Ht||Mt.vertexTangents!==Xt||Mt.morphTargets!==Ut||Mt.morphNormals!==de||Mt.morphColors!==Oe||Mt.toneMapping!==Ue||Mt.morphTargetsCount!==fn||!!Mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Mt.__version=W.version);let Wn=Mt.currentProgram;ne===!0&&(Wn=ul(W,F,q),z&&W.isNodeMaterial&&z.onUpdateProgram(W,Wn,Mt));let gi=!1,da=!1,Us=!1;const ge=Wn.getUniforms(),Pe=Mt.uniforms;if(x.useProgram(Wn.program)&&(gi=!0,da=!0,Us=!0),W.id!==et&&(et=W.id,da=!0),Mt.needsLights){const xe=OS(M.state.lightProbeGridArray,q);Mt.lightProbeGrid!==xe&&(Mt.lightProbeGrid=xe,da=!0)}if(gi||ot!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(I,"projectionMatrix",E.projectionMatrix),ge.setValue(I,"viewMatrix",E.matrixWorldInverse);const pa=ge.map.cameraPosition;pa!==void 0&&pa.setValue(I,Te.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),ot!==E&&(ot=E,da=!0,Us=!0)}if(Mt.needsLights&&(Dn.state.directionalShadowMap.length>0&&ge.setValue(I,"directionalShadowMap",Dn.state.directionalShadowMap,$),Dn.state.spotShadowMap.length>0&&ge.setValue(I,"spotShadowMap",Dn.state.spotShadowMap,$),Dn.state.pointShadowMap.length>0&&ge.setValue(I,"pointShadowMap",Dn.state.pointShadowMap,$)),q.isSkinnedMesh){ge.setOptional(I,q,"bindMatrix"),ge.setOptional(I,q,"bindMatrixInverse");const xe=q.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),ge.setValue(I,"boneTexture",xe.boneTexture,$))}q.isBatchedMesh&&(ge.setOptional(I,q,"batchingTexture"),ge.setValue(I,"batchingTexture",q._matricesTexture,$),ge.setOptional(I,q,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",q._indirectTexture,$),ge.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",q._colorsTexture,$));const ha=K.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&L.update(q,K,Wn),(da||Mt.receiveShadow!==q.receiveShadow)&&(Mt.receiveShadow=q.receiveShadow,ge.setValue(I,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Pe.envMapIntensity.value=F.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=J3()),da){if(ge.setValue(I,"toneMappingExposure",U.toneMappingExposure),Mt.needsLights&&zS(Pe,Us),vt&&W.fog===!0&&mt.refreshFogUniforms(Pe,vt),mt.refreshMaterialUniforms(Pe,W,Q,D,M.state.transmissionRenderTarget[E.id]),Mt.needsLights&&Mt.lightProbeGrid){const xe=Mt.lightProbeGrid;Pe.probesSH.value=xe.texture,Pe.probesMin.value.copy(xe.boundingBox.min),Pe.probesMax.value.copy(xe.boundingBox.max),Pe.probesResolution.value.copy(xe.resolution)}vc.upload(I,um(Mt),Pe,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vc.upload(I,um(Mt),Pe,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(I,"center",q.center),ge.setValue(I,"modelViewMatrix",q.modelViewMatrix),ge.setValue(I,"normalMatrix",q.normalMatrix),ge.setValue(I,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const xe=W.uniformsGroups;for(let pa=0,Ns=xe.length;pa<Ns;pa++){const dm=xe[pa];at.update(dm,Wn),at.bind(dm,Wn)}}return Wn}function zS(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function IS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,F,K){const W=Y.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=F,Y.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const K=Y.get(E);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,K=0){Z=E,O=F,P=K;let W=null,q=!1,vt=!1;if(E){const _t=Y.get(E);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,_t.__webglFramebuffer),dt.copy(E.viewport),St.copy(E.scissor),Wt=E.scissorTest,x.viewport(dt),x.scissor(St),x.setScissorTest(Wt),et=-1;return}else if(_t.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(_t.__hasExternalTextures)$.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&Y.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);const Dt=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?W=Dt[F][K]:W=Dt[F],q=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?W=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?W=Dt[K]:W=Dt,dt.copy(E.viewport),St.copy(E.scissor),Wt=E.scissorTest}else dt.copy(Et).multiplyScalar(Q).floor(),St.copy(Yt).multiplyScalar(Q).floor(),Wt=Nt;if(K!==0&&(W=J),x.bindFramebuffer(I.FRAMEBUFFER,W)&&x.drawBuffers(E,W),x.viewport(dt),x.scissor(St),x.setScissorTest(Wt),q){const _t=Y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,K)}else if(vt){const _t=F;for(let At=0;At<E.textures.length;At++){const Dt=Y.get(E.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Dt.__webglTexture,K,_t)}}else if(E!==null&&K!==0){const _t=Y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,K)}et=-1},this.readRenderTargetPixels=function(E,F,K,W,q,vt,bt,_t=0){if(!(E&&E.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){x.bindFramebuffer(I.FRAMEBUFFER,At);try{const Dt=E.textures[_t],Ht=Dt.format,Xt=Dt.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Ht)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xt)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&K>=0&&K<=E.height-q&&I.readPixels(F,K,W,q,ht.convert(Ht),ht.convert(Xt),vt)}finally{const Dt=Z!==null?Y.get(Z).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,F,K,W,q,vt,bt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At)if(F>=0&&F<=E.width-W&&K>=0&&K<=E.height-q){x.bindFramebuffer(I.FRAMEBUFFER,At);const Dt=E.textures[_t],Ht=Dt.format,Xt=Dt.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),I.readPixels(F,K,W,q,ht.convert(Ht),ht.convert(Xt),0);const de=Z!==null?Y.get(Z).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,de);const Oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _1(I,Oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(Ut),I.deleteSync(Oe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,K=0){const W=Math.pow(2,-K),q=Math.floor(E.image.width*W),vt=Math.floor(E.image.height*W),bt=F!==null?F.x:0,_t=F!==null?F.y:0;$.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,bt,_t,q,vt),x.unbindTexture()},this.copyTextureToTexture=function(E,F,K=null,W=null,q=0,vt=0){let bt,_t,At,Dt,Ht,Xt,Ut,de,Oe;const Ue=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(K!==null)bt=K.max.x-K.min.x,_t=K.max.y-K.min.y,At=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Ht=K.min.y,Xt=K.isBox3?K.min.z:0;else{const Pe=Math.pow(2,-q);bt=Math.floor(Ue.width*Pe),_t=Math.floor(Ue.height*Pe),E.isDataArrayTexture?At=Ue.depth:E.isData3DTexture?At=Math.floor(Ue.depth*Pe):At=1,Dt=0,Ht=0,Xt=0}W!==null?(Ut=W.x,de=W.y,Oe=W.z):(Ut=0,de=0,Oe=0);const me=ht.convert(F.format),fn=ht.convert(F.type);let Mt;F.isData3DTexture?($.setTexture3D(F,0),Mt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Mt=I.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Mt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Dn=x.getParameter(I.UNPACK_ROW_LENGTH),ne=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Wn=x.getParameter(I.UNPACK_SKIP_PIXELS),gi=x.getParameter(I.UNPACK_SKIP_ROWS),da=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const Us=E.isDataArrayTexture||E.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pe=Y.get(E),ha=Y.get(F),xe=Y.get(Pe.__renderTarget),pa=Y.get(ha.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,xe.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let Ns=0;Ns<At;Ns++)Us&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,q,Xt+Ns),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,vt,Oe+Ns)),I.blitFramebuffer(Dt,Ht,bt,_t,Ut,de,bt,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Y.has(E)){const Pe=Y.get(E),ha=Y.get(F);x.bindFramebuffer(I.READ_FRAMEBUFFER,tt),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let xe=0;xe<At;xe++)Us?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,q,Xt+xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,q),ge?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ha.__webglTexture,vt,Oe+xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ha.__webglTexture,vt),q!==0?I.blitFramebuffer(Dt,Ht,bt,_t,Ut,de,bt,_t,I.COLOR_BUFFER_BIT,I.NEAREST):ge?I.copyTexSubImage3D(Mt,vt,Ut,de,Oe+xe,Dt,Ht,bt,_t):I.copyTexSubImage2D(Mt,vt,Ut,de,Dt,Ht,bt,_t);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Mt,vt,Ut,de,Oe,bt,_t,At,me,fn,Ue.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,vt,Ut,de,Oe,bt,_t,At,me,Ue.data):I.texSubImage3D(Mt,vt,Ut,de,Oe,bt,_t,At,me,fn,Ue):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,Ut,de,bt,_t,me,fn,Ue.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,Ut,de,Ue.width,Ue.height,me,Ue.data):I.texSubImage2D(I.TEXTURE_2D,vt,Ut,de,bt,_t,me,fn,Ue);x.pixelStorei(I.UNPACK_ROW_LENGTH,Dn),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Wn),x.pixelStorei(I.UNPACK_SKIP_ROWS,gi),x.pixelStorei(I.UNPACK_SKIP_IMAGES,da),vt===0&&F.generateMipmaps&&I.generateMipmap(Mt),x.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){O=0,P=0,Z=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}const Wi={forest:{id:"forest",name:"翡翠林径",theme:"forest",par:4,ground:"#367d45",accent:"#86ef6b",sky:"#b8e4dc",grassFriction:.58,bounds:{minX:-8,maxX:8,minZ:-15,maxZ:15},spawn:{x:0,y:.35,z:11},hole:{x:2.8,y:.03,z:-11.5,radius:.55},surfaces:[{id:"forest-grass",type:"grass",friction:.58,bounds:{minX:-8,maxX:8,minZ:-15,maxZ:15}},{id:"forest-sand",type:"sand",friction:2.2,bounds:{minX:-5.8,maxX:-1.3,minZ:-4.5,maxZ:1.2}}],obstacles:[{id:"log-1",type:"fallen_log",position:{x:2.8,y:.65,z:2.6},solid:!0,bounds:{minX:.8,maxX:4.8,minZ:2.15,maxZ:3.05}},{id:"rock-1",type:"rock",position:{x:-3.8,y:.7,z:-8},solid:!0,radius:1.1},{id:"tree-1",type:"tree",position:{x:5.7,y:1,z:-5},solid:!0,radius:.75}],terrainFeatures:[],powerups:[{id:"forest-boost",type:"speed_boost",position:{x:2.2,y:.05,z:-2.2},direction:{x:.18,z:-.98}},{id:"forest-hio",type:"hole_in_one",position:{x:-2.8,y:.35,z:5.2}}]},desert:{id:"desert",name:"烈日峡谷",theme:"desert",par:5,ground:"#c9954b",accent:"#ffd16a",sky:"#f6c777",grassFriction:.64,bounds:{minX:-9,maxX:9,minZ:-16,maxZ:16},spawn:{x:-4.8,y:.35,z:12},hole:{x:4.8,y:.03,z:-12.5,radius:.55},surfaces:[{id:"desert-fairway",type:"grass",friction:.64,bounds:{minX:-9,maxX:9,minZ:-16,maxZ:16}},{id:"desert-sand-a",type:"sand",friction:2.35,bounds:{minX:-8,maxX:1.5,minZ:-5,maxZ:2}},{id:"desert-sand-b",type:"sand",friction:2.35,bounds:{minX:2.6,maxX:8,minZ:4,maxZ:8}}],obstacles:[{id:"canyon-rock",type:"rock",position:{x:0,y:1,z:-8},solid:!0,radius:1.4},{id:"mesa-a",type:"mesa",position:{x:4,y:1,z:1.5},solid:!0,radius:1.25},{id:"mesa-b",type:"mesa",position:{x:-5.8,y:1,z:-9},solid:!0,radius:1}],terrainFeatures:[],powerups:[{id:"desert-bounce",type:"bounce_pad",position:{x:-2,y:.05,z:5.8},direction:{x:.7,z:-.7}},{id:"desert-hio",type:"hole_in_one",position:{x:2.5,y:.35,z:-5}}]},snow:{id:"snow",name:"极光冰原",theme:"snow",par:6,ground:"#d9f4f7",accent:"#7ee8ff",sky:"#8ac7dd",grassFriction:.56,bounds:{minX:-9,maxX:9,minZ:-17,maxZ:17},spawn:{x:0,y:.35,z:13.5},hole:{x:-4.5,y:.03,z:-13.5,radius:.55},surfaces:[{id:"snow-grass",type:"grass",friction:.56,bounds:{minX:-9,maxX:9,minZ:-17,maxZ:17}},{id:"ice-lake",type:"ice",friction:.06,bounds:{minX:-7,maxX:7,minZ:-8,maxZ:6}},{id:"snow-bank",type:"sand",friction:2.15,bounds:{minX:2,maxX:8,minZ:-14,maxZ:-9}}],obstacles:[{id:"ice-crystal",type:"ice_crystal",position:{x:4,y:1,z:8},solid:!0,radius:1},{id:"snow-rock",type:"snow_rock",position:{x:-4.5,y:.8,z:-1},solid:!0,radius:1.1},{id:"crystal-2",type:"ice_crystal",position:{x:3.2,y:1,z:-5.2},solid:!0,radius:.8}],terrainFeatures:[],powerups:[{id:"snow-boost",type:"speed_boost",position:{x:0,y:.05,z:2},direction:{x:-.2,z:-.98}},{id:"snow-hio",type:"hole_in_one",position:{x:-5,y:.35,z:-8}}]}},Yn=e=>JSON.parse(JSON.stringify(e)),Ks=e=>Number.isFinite(e)?e:0,Vg=(e,t)=>Array.from({length:e},(n,i)=>({id:`local-${i+1}`,name:`玩家 ${i+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:{...t},velocity:{x:0,y:0,z:0},powerupInventory:[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}],armedPowerup:null,collected:[]})),kg=()=>{try{return JSON.parse(localStorage.getItem("putt-odyssey-board")||'{"levelBest":{}}')}catch{return{levelBest:{}}}};function Ln({name:e}){const t={play:B.jsx("path",{d:"m9 7 8 5-8 5V7Z"}),users:B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),B.jsx("circle",{cx:"9",cy:"7",r:"4"}),B.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]}),trophy:B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"}),B.jsx("path",{d:"M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"})]}),back:B.jsx("path",{d:"m15 18-6-6 6-6"}),target:B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"12",cy:"12",r:"8"}),B.jsx("circle",{cx:"12",cy:"12",r:"3"}),B.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3"})]}),zoomIn:B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"11",cy:"11",r:"7"}),B.jsx("path",{d:"m20 20-4-4M11 8v6M8 11h6"})]}),zoomOut:B.jsxs(B.Fragment,{children:[B.jsx("circle",{cx:"11",cy:"11",r:"7"}),B.jsx("path",{d:"m20 20-4-4M8 11h6"})]}),reset:B.jsxs(B.Fragment,{children:[B.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),B.jsx("path",{d:"M3 4v6h6"})]}),spark:B.jsx("path",{d:"m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"})};return B.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t[e]})}function t2(){var dt,St,Wt,ee,kt;const[e,t]=qe.useState("menu"),[n,i]=qe.useState("single"),[a,s]=qe.useState("forest"),[r,o]=qe.useState(2),[l,c]=qe.useState(0),[d,p]=qe.useState(0),[u,h]=qe.useState(0),[S,T]=qe.useState(16),[_,f]=qe.useState(kg),[m,y]=qe.useState({score:0,strokes:0}),v=qe.useRef(null),b=qe.useRef({pos:{...Wi.forest.spawn},vel:{x:0,y:0,z:0},moving:!1,inHole:!1,out:!1,surface:"grass",friction:.58,lastCollision:null,lastSafe:{...Wi.forest.spawn},strokes:0,total:0,score:0,totalScore:0,startTime:Date.now(),dragging:!1,start:null,current:null,direction:{x:0,z:-1},power:0,players:Vg(2,Wi.forest.spawn),collected:[],lastTriggered:null,activeEffect:null,simTick:0,renderFrame:0,logicLoop:0,accumulator:0,cameraPos:{x:0,y:10,z:20},cameraTarget:{x:0,y:0,z:0},listeners:0,generation:0}),M=Wi[a],R=b.current.moving,g=()=>h(w=>w+1),A=()=>{var w;return n==="local_multiplayer"?((w=b.current.players[l])==null?void 0:w.powerupInventory)||[]:[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:b.current.collected.includes("used-hio")?0:b.current.collected.some(D=>D.includes("hio"))?1:0}]},U=()=>{var w;return n==="local_multiplayer"?(w=b.current.players[l])==null?void 0:w.armedPowerup:null},N=(w,D=!1)=>{const Q=Wi[w];s(w),i(D?"local_multiplayer":"single"),c(0);const pt=Vg(D?r:1,Q.spawn);Object.assign(b.current,{pos:{...Q.spawn},vel:{x:0,y:0,z:0},moving:!1,inHole:!1,out:!1,surface:"grass",friction:Q.grassFriction,lastSafe:{...Q.spawn},strokes:0,total:0,score:0,startTime:Date.now(),players:pt,collected:[],lastTriggered:null,activeEffect:null}),t("playing"),g()},z=()=>{var w;if(n==="local_multiplayer"){const D=b.current.players[l],Q=D.powerupInventory.find(pt=>pt.type==="hole_in_one");Q&&Q.count>0&&(D.armedPowerup=D.armedPowerup?null:"hole_in_one",p(pt=>pt+1),g())}else(w=A().find(D=>D.type==="hole_in_one"))!=null&&w.count&&(b.current.activeEffect=b.current.activeEffect?"":"hole_in_one",g())},J=w=>T(D=>Math.max(9,Math.min(25,D+w))),tt=()=>{b.current.moving||(b.current.pos={...b.current.lastSafe},b.current.vel={x:0,y:0,z:0},b.current.out=!1,g())},k=w=>{const D=kg();D.levelBest||(D.levelBest={});const Q=D.levelBest[a]||[],pt=Q.find(lt=>lt.playerId===w.id);if(!pt||w.holeStrokes<pt.strokes){const lt=Date.now();D.levelBest[a]=Q.filter(Et=>Et.playerId!==w.id).concat({playerId:w.id,playerName:w.name,strokes:w.holeStrokes,par:M.par,relativeToPar:w.holeStrokes-M.par,achievedAt:lt})}localStorage.setItem("putt-odyssey-board",JSON.stringify(D)),f(D)},O=()=>{const w=b.current;w.inHole=!0,w.moving=!1,w.vel={x:0,y:0,z:0};const D=Math.max(100,1400-w.strokes*120);if(w.score=D,w.totalScore+=D,n==="single"){const Q={...w.players[0],holeStrokes:w.strokes};k(Q),y({score:D,strokes:w.strokes}),t("hole_complete")}else{const Q=w.players[l];Q.finished=!0,Q.holeStrokes=w.strokes,Q.totalStrokes=w.strokes,Q.ballPosition={...w.pos},k(Q);const pt=w.players.findIndex(lt=>!lt.finished);if(pt<0)p(lt=>lt+1),t("local_result");else{c(pt);const lt=w.players[pt];Object.assign(w,{pos:{...lt.ballPosition},vel:{...lt.velocity},strokes:lt.holeStrokes,inHole:!1,moving:!1,collected:[...lt.collected]}),p(Et=>Et+1),g()}}};qe.useEffect(()=>{const w={};Object.entries(_.levelBest||{}).forEach(([D,Q])=>{w[D]=Q.sort((pt,lt)=>pt.strokes-lt.strokes||pt.achievedAt-lt.achievedAt||pt.playerId.localeCompare(lt.playerId)).map((pt,lt)=>({...pt,rank:lt+1}))}),_.levelBest=w},[_]),qe.useEffect(()=>{const w=b.current,D=()=>{const lt={};Object.entries(_.levelBest||{}).forEach(([Nt,Ct])=>lt[Nt]=Ct.slice().sort((zt,Lt)=>zt.strokes-Lt.strokes||zt.achievedAt-Lt.achievedAt||zt.playerId.localeCompare(Lt.playerId)).map((zt,Lt)=>({...zt,rank:Lt+1})));const Et=new Set;Object.values(lt).forEach(Nt=>Nt.forEach(Ct=>Et.add(Ct.playerId)));const Yt=[];return Et.forEach(Nt=>{const Ct=["forest","desert","snow"].map(zt=>{var Lt;return(Lt=lt[zt])==null?void 0:Lt.find(ue=>ue.playerId===Nt)});if(Ct.every(Boolean)){const zt=Ct.reduce((Lt,ue)=>Lt+ue.strokes,0);Yt.push({playerId:Nt,playerName:Ct[0].playerName,levelStrokes:{forest:Ct[0].strokes,desert:Ct[1].strokes,snow:Ct[2].strokes},totalStrokes:zt,achievedAt:Math.max(...Ct.map(Lt=>Lt.achievedAt))})}}),Yt.sort((Nt,Ct)=>Nt.totalStrokes-Ct.totalStrokes||Nt.achievedAt-Ct.achievedAt||Nt.playerId.localeCompare(Ct.playerId)),{levelBest:lt,overall:Yt.map((Nt,Ct)=>({...Nt,rank:Ct+1})),persisted:!0}},Q=Wi[a];Object.assign(window,{__contract:{getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:"putt-odyssey-2026"})},__game:{getState:()=>({ready:!0,gameState:e==="level_select"?"level_select":e==="local_setup"?"local_setup":e==="hole_complete"?"hole_complete":e==="local_result"?"local_result":e,mode:n,currentLevel:e==="menu"||e==="local_setup"?null:{id:Q.id,name:Q.name,theme:Q.theme,par:Q.par},currentHoleStrokes:w.strokes,totalStrokes:w.total,currentScore:w.score,totalScore:w.totalScore,holeComplete:w.inHole,elapsedTime:Ks((Date.now()-w.startTime)/1e3)})},__ball:{getState:()=>({position:Yn(w.pos),velocity:Yn(w.vel),speed:Ks(Math.hypot(w.vel.x,w.vel.z)),radius:.32,moving:w.moving,sleeping:!w.moving,airborne:!1,inHole:w.inHole,outOfBounds:w.out,currentSurface:w.surface,friction:Ks(w.friction),lastCollision:w.lastCollision,lastSafePosition:Yn(w.lastSafe)})},__shot:{getState:()=>({dragging:w.dragging,canShoot:e==="playing"&&!w.moving&&!w.inHole,startScreen:Yn(w.start),currentScreen:Yn(w.current),direction:Yn(w.direction),power:Ks(w.power),minPower:1,maxPower:18,strokeCount:w.strokes})},__course:{getState:()=>{var lt;return{...Yn(Q),obstacleCount:Q.obstacles.length,sceneObjectCount:((lt=window.__THREE_SCENE__)==null?void 0:lt.children.length)||0,loaded:e==="playing"}}},__multiplayer:{getState:()=>{var Nt;const lt=w.players.map(Ct=>Ct.totalStrokes),Et=Math.min(...lt),Yt=w.players.every(Ct=>Ct.finished)?w.players.filter(Ct=>Ct.totalStrokes===Et).map(Ct=>Ct.id):[];return{enabled:n==="local_multiplayer",mode:"local",status:e==="local_setup"?"setup":e==="local_result"?"complete":"playing",playerCount:w.players.length,currentPlayerId:n==="local_multiplayer"?(Nt=w.players[l])==null?void 0:Nt.id:null,turnIndex:l,round:1,revision:d,players:w.players.map(({velocity:Ct,collected:zt,...Lt})=>Yn(Lt)),winnerId:Yt.length===1?Yt[0]:null,tiedPlayerIds:Yt.length>1?Yt:[]}}},__powerups:{getState:()=>({items:Q.powerups.map(lt=>{var Et,Yt;return{...Yn(lt),active:!(n==="local_multiplayer"?(Et=w.players[l])==null?void 0:Et.collected:w.collected).includes(lt.id),collected:(n==="local_multiplayer"?(Yt=w.players[l])==null?void 0:Yt.collected:w.collected).includes(lt.id)}}),inventory:Yn(A()),activeEffect:w.activeEffect,lastTriggeredId:w.lastTriggered,placingType:null,armedType:U()||(w.activeEffect==="hole_in_one"?"hole_in_one":null),selectedPlacedId:null})},__camera:{getState:()=>({mode:"follow",position:Yn(w.cameraPos),target:Yn(w.cameraTarget),distance:S,minDistance:9,maxDistance:25,zoom:Ks(16/S),angle:0,pitch:.55})},__leaderboard:{getState:D},__performance:{getState:()=>({fixedStep:1/120,accumulator:Ks(w.accumulator),simulationTick:w.simTick,renderFrame:w.renderFrame,reactCommitCount:u,logicLoopCount:w.logicLoop,listenerCount:w.listeners,runtimeMountCount:w.generation,runtimeCleanupCount:Math.max(0,w.generation-1),engineGeneration:w.generation,poolStats:{balls:{capacity:4,createdTotal:4,reused:w.simTick}}})}})},[e,n,a,l,d,S,_,u]),qe.useEffect(()=>{if(e!=="playing"||!v.current)return;const w=v.current,D=b.current;D.generation++;const Q=new L1;Q.background=new jt(M.sky),Q.fog=new Yp(M.sky,28,58);const pt=new $n(48,w.clientWidth/w.clientHeight,.1,100),lt=new $3({antialias:!0});lt.setPixelRatio(Math.min(devicePixelRatio,2)),lt.setSize(w.clientWidth,w.clientHeight),lt.shadowMap.enabled=!0,w.appendChild(lt.domElement),window.__THREE_SCENE__=Q,window.__THREE_RENDERER__=lt,Q.add(new J1(16777215,3559997,2.2));const Et=new eb(16775135,2.4);Et.position.set(-8,18,10),Et.castShadow=!0,Q.add(Et);const Yt=new Ye(new Ji(M.bounds.maxX-M.bounds.minX,.5,M.bounds.maxZ-M.bounds.minZ),new ki({color:M.ground,roughness:.9}));Yt.position.y=-.28,Yt.receiveShadow=!0,Q.add(Yt),M.surfaces.slice(1).forEach(V=>{const st=V.bounds.maxX-V.bounds.minX,X=V.bounds.maxZ-V.bounds.minZ,j=new ki({color:V.type==="sand"?14266733:10414834,roughness:V.type==="ice"?.2:1,metalness:V.type==="ice"?.15:0,transparent:V.type==="ice",opacity:V.type==="ice"?.82:1}),rt=new Ye(new Ji(st,.06,X),j);rt.position.set((V.bounds.minX+V.bounds.maxX)/2,.03,(V.bounds.minZ+V.bounds.maxZ)/2),rt.receiveShadow=!0,Q.add(rt)});const Nt=new Ye(new Yo(M.hole.radius,M.hole.radius,.08,32),new ki({color:463115}));Nt.position.set(M.hole.x,.07,M.hole.z),Q.add(Nt);const Ct=new Ye(new Yo(.035,.035,3,10),new ki({color:16317180}));Ct.position.set(M.hole.x,1.5,M.hole.z),Q.add(Ct);const zt=new Ye(new ll(1.2,.65),new ki({color:M.accent,side:Si}));zt.position.set(M.hole.x+.6,2.5,M.hole.z),Q.add(zt),M.obstacles.forEach((V,st)=>{let X;V.bounds?X=new Ji(V.bounds.maxX-V.bounds.minX,1,V.bounds.maxZ-V.bounds.minZ):X=V.type.includes("crystal")?new nu(V.radius||1,2.8,5):new Kp(V.radius||1,0);const j=new ki({color:V.type.includes("crystal")?5627890:V.type==="fallen_log"?7488805:M.id==="desert"?10379834:5859420,roughness:.8}),rt=new Ye(X,j);if(rt.position.set(V.position.x,V.type.includes("crystal")?1.35:V.position.y,V.position.z),rt.castShadow=!0,rt.userData.obstacleId=V.id,Q.add(rt),V.type==="tree"){const mt=new Ye(new nu(1.8,4,8),new ki({color:2059069}));mt.position.set(V.position.x,3,V.position.z),Q.add(mt)}rt.rotation.y=st*.6});const Lt={};M.powerups.forEach(V=>{const st=V.type==="hole_in_one"?16767592:V.type==="speed_boost"?3993819:16744031,X=new Ye(V.type==="hole_in_one"?new jp(.45):new Ji(1.8,.12,2.6),new ki({color:st,emissive:st,emissiveIntensity:.3}));X.position.set(V.position.x,V.type==="hole_in_one"?.65:.12,V.position.z),X.userData.powerupId=V.id,Q.add(X),Lt[V.id]=X});const ue=new Ye(new Qp(.32,24,16),new ki({color:n==="local_multiplayer"?[16777215,16768879,7464191,16748487][l]:16777215,roughness:.32}));ue.castShadow=!0,Q.add(ue);const Te=new k1(new wn().setFromPoints([new H,new H]),new _S({color:16777215}));Q.add(Te);const Be=(V,st)=>{for(let X=M.surfaces.length-1;X>=0;X--){const j=M.surfaces[X].bounds;if(V>=j.minX&&V<=j.maxX&&st>=j.minZ&&st<=j.maxZ)return M.surfaces[X]}return M.surfaces[0]},We=()=>{for(const V of M.obstacles)if(V.radius){const st=D.pos.x-V.position.x,X=D.pos.z-V.position.z,j=Math.hypot(st,X),rt=V.radius+.32;if(j<rt){const mt=st/(j||1),ct=X/(j||1),ft=D.vel.x*mt+D.vel.z*ct;D.pos.x=V.position.x+mt*rt,D.pos.z=V.position.z+ct*rt,D.vel.x=(D.vel.x-2*ft*mt)*.72,D.vel.z=(D.vel.z-2*ft*ct)*.72,D.lastCollision=V.id}}else if(V.bounds&&D.pos.x>V.bounds.minX-.32&&D.pos.x<V.bounds.maxX+.32&&D.pos.z>V.bounds.minZ-.32&&D.pos.z<V.bounds.maxZ+.32){const st=Math.abs(D.pos.x-(V.bounds.minX-.32)),X=Math.abs(D.pos.x-(V.bounds.maxX+.32)),j=Math.abs(D.pos.z-(V.bounds.minZ-.32)),rt=Math.abs(D.pos.z-(V.bounds.maxZ+.32)),mt=Math.min(st,X,j,rt);mt===st||mt===X?D.vel.x*=-.72:D.vel.z*=-.72,D.pos.x-=D.vel.x*.02,D.pos.z-=D.vel.z*.02,D.lastCollision=V.id}};let fe=0,Re=performance.now(),I=0;const Fe=1/120,ae=V=>{const st=Math.min(.05,(V-Re)/1e3);for(Re=V,fe+=st,D.accumulator=fe,D.logicLoop++;fe>=Fe;){if(D.simTick++,D.moving){const rt=Be(D.pos.x,D.pos.z);D.surface=rt.type,D.friction=rt.friction;const mt=Math.hypot(D.vel.x,D.vel.z),ct=Math.max(0,mt-D.friction*Fe);mt>0&&(D.vel.x=D.vel.x/mt*ct,D.vel.z=D.vel.z/mt*ct),D.pos.x+=D.vel.x*Fe,D.pos.z+=D.vel.z*Fe,We(),D.pos.x>=M.bounds.minX&&D.pos.x<=M.bounds.maxX&&D.pos.z>=M.bounds.minZ&&D.pos.z<=M.bounds.maxZ?D.lastSafe={...D.pos}:(D.out=!0,D.pos={...D.lastSafe},D.vel={x:0,y:0,z:0},D.moving=!1);for(const yt of M.powerups){const wt=n==="local_multiplayer"?D.players[l]:null,It=wt?wt.collected:D.collected;if(!It.includes(yt.id)&&Math.hypot(D.pos.x-yt.position.x,D.pos.z-yt.position.z)<.85)if(It.push(yt.id),D.lastTriggered=yt.id,yt.type==="hole_in_one")wt&&wt.powerupInventory.find(L=>L.type==="hole_in_one").count++;else{const L=Math.min(18,Math.hypot(D.vel.x,D.vel.z)+4),ut=yt.direction||{x:0,z:-1};D.vel.x=ut.x*L,D.vel.z=ut.z*L,D.activeEffect=yt.type}}if(Math.hypot(D.pos.x-M.hole.x,D.pos.z-M.hole.z)<M.hole.radius&&Math.hypot(D.vel.x,D.vel.z)<4){O();return}if(ct<.035){if(D.vel={x:0,y:0,z:0},D.moving=!1,D.lastCollision=null,n==="local_multiplayer"){const yt=D.players[l];yt.ballPosition={...D.pos},yt.velocity={...D.vel},yt.holeStrokes=D.strokes,yt.collected=[...yt.collected],p(wt=>wt+1)}g()}}fe-=Fe}if(D.accumulator=fe,ue.position.set(D.pos.x,.35,D.pos.z),Object.entries(Lt).forEach(([rt,mt])=>{const ct=n==="local_multiplayer"?D.players[l].collected:D.collected;mt.visible=!ct.includes(rt),mt.rotation.y+=.015}),D.dragging){const rt=new H(D.pos.x+D.direction.x*D.power*.45,.42,D.pos.z+D.direction.z*D.power*.45);Te.geometry.setFromPoints([new H(D.pos.x,.42,D.pos.z),rt]),Te.visible=!0}else Te.visible=!1;const X=new H(D.pos.x,0,D.pos.z),j=new H(D.pos.x,Math.max(7,S*.52),D.pos.z+S*.78);pt.position.lerp(j,.08),pt.lookAt(X),D.cameraPos={x:pt.position.x,y:pt.position.y,z:pt.position.z},D.cameraTarget={x:X.x,y:X.y,z:X.z},lt.render(Q,pt),D.renderFrame++,I=requestAnimationFrame(ae)},C=V=>({x:V.clientX,y:V.clientY}),x=V=>{D.moving||D.inHole||(D.dragging=!0,D.start=C(V),D.current=C(V),lt.domElement.setPointerCapture(V.pointerId),g())},G=V=>{if(!D.dragging||!D.start)return;D.current=C(V);const st=D.start.x-V.clientX,X=D.start.y-V.clientY,j=Math.hypot(st,X);D.power=Math.min(18,Math.max(0,j/10)),j>2&&(D.direction={x:st/j,z:-X/j}),g()},Y=()=>{if(D.dragging){if(D.dragging=!1,D.power>=1){const V=U()||D.activeEffect==="hole_in_one";if(D.strokes++,n==="local_multiplayer"){const st=D.players[l];if(st.holeStrokes=D.strokes,V){st.armedPowerup=null,st.powerupInventory.find(X=>X.type==="hole_in_one").count--,D.pos={x:M.hole.x,y:.35,z:M.hole.z},O();return}}else if(V){D.collected.push("used-hio"),D.activeEffect=null,D.pos={x:M.hole.x,y:.35,z:M.hole.z},O();return}D.vel={x:D.direction.x*D.power,y:0,z:D.direction.z*D.power},D.moving=!0}D.power=0,D.start=null,D.current=null,g()}};lt.domElement.addEventListener("pointerdown",x),lt.domElement.addEventListener("pointermove",G),lt.domElement.addEventListener("pointerup",Y),D.listeners=3,I=requestAnimationFrame(ae);const $=()=>{pt.aspect=w.clientWidth/w.clientHeight,pt.updateProjectionMatrix(),lt.setSize(w.clientWidth,w.clientHeight)};return window.addEventListener("resize",$),D.listeners=4,()=>{cancelAnimationFrame(I),lt.domElement.removeEventListener("pointerdown",x),lt.domElement.removeEventListener("pointermove",G),lt.domElement.removeEventListener("pointerup",Y),window.removeEventListener("resize",$),D.listeners=0,Q.traverse(V=>{V instanceof Ye&&(V.geometry.dispose(),V.material.dispose())}),lt.dispose(),w.replaceChildren()}},[e,a,n,l,S]);const P=()=>{t("menu"),b.current.inHole=!1},Z=[...b.current.players].sort((w,D)=>w.totalStrokes-D.totalStrokes),et=(dt=Z[0])==null?void 0:dt.totalStrokes,ot=Z.filter(w=>w.totalStrokes===et);return B.jsxs("main",{className:"app-shell text-white",children:[e==="menu"&&B.jsxs("section",{id:"menu",className:"menu-screen",children:[B.jsxs("div",{className:"brand-mark",children:[B.jsx("span",{children:"PO"}),B.jsx("i",{children:"+"})]}),B.jsx("p",{className:"eyebrow",children:"THREE-DIMENSIONAL MINI GOLF"}),B.jsxs("h1",{children:["推杆",B.jsx("span",{children:"奇境"})]}),B.jsxs("p",{className:"tagline",children:["穿越三座奇境，在风景与物理法则之间",B.jsx("br",{}),"打出你的完美一杆。"]}),B.jsxs("div",{className:"menu-actions",children:[B.jsxs("button",{"data-testid":"start-btn",className:"primary-btn",onClick:()=>t("level_select"),children:[B.jsx(Ln,{name:"play"}),"开始冒险"]}),B.jsxs("button",{"data-testid":"multiplayer-btn",className:"secondary-btn",onClick:()=>t("local_setup"),children:[B.jsx(Ln,{name:"users"}),"本地对战"]}),B.jsxs("button",{"data-testid":"leaderboard-btn",className:"text-btn",onClick:()=>t("leaderboard"),children:[B.jsx(Ln,{name:"trophy"}),"荣誉榜"]})]}),B.jsxs("div",{className:"menu-footer",children:[B.jsx("span",{children:"拖动瞄准"}),B.jsx("b",{children:"·"}),B.jsx("span",{children:"释放击球"}),B.jsx("b",{children:"·"}),B.jsx("span",{children:"征服球场"})]})]}),e==="level_select"&&B.jsxs("section",{id:"levelSelect",className:"panel-screen",children:[B.jsx(xc,{title:"选择奇境",subtitle:"每片球场都有独特的地形与物理法则",back:P}),B.jsx("div",{className:"level-grid",children:Object.values(Wi).map((w,D)=>B.jsxs("button",{"data-testid":`level-${w.id}`,className:`level-card ${w.id}`,onClick:()=>N(w.id),children:[B.jsxs("div",{className:"level-art",children:[B.jsxs("span",{className:"level-no",children:["0",D+1]}),B.jsx("div",{className:"art-orb",children:w.id==="forest"?"♧":w.id==="desert"?"◒":"✦"})]}),B.jsxs("div",{className:"level-info",children:[B.jsxs("div",{children:[B.jsx("p",{children:w.theme.toUpperCase()}),B.jsx("h2",{children:w.name})]}),B.jsxs("span",{children:["PAR ",w.par]})]}),B.jsx("p",{className:"level-desc",children:w.id==="forest"?"林间沙坑与倒木，适合磨练基础。":w.id==="desert"?"穿过流沙与峡谷岩壁的精准挑战。":"低摩擦冰湖带来超长滑行体验。"})]},w.id))})]}),e==="local_setup"&&B.jsxs("section",{id:"multiplayerLobby",className:"panel-screen compact",children:[B.jsx(xc,{title:"同场竞技",subtitle:"轮流击球，最少杆数者赢得本局",back:P}),B.jsxs("div",{className:"lobby-card",children:[B.jsx("div",{className:"lobby-icon",children:B.jsx(Ln,{name:"users"})}),B.jsx("h2",{children:"选择玩家人数"}),B.jsx("p",{children:"每位玩家拥有独立球位与道具库存"}),B.jsx("div",{className:"count-select","data-testid":"local-player-count","aria-label":`当前 ${r} 名玩家`,children:[2,3,4].map(w=>B.jsxs("button",{className:r===w?"active":"",onClick:()=>o(w),children:[w,B.jsx("small",{children:"人"})]},w))}),B.jsx("label",{children:"选择竞技球场"}),B.jsx("div",{className:"mini-levels",children:Object.values(Wi).map(w=>B.jsxs("button",{onClick:()=>s(w.id),className:a===w.id?"active":"",children:[w.name,B.jsxs("small",{children:["PAR ",w.par]})]},w.id))}),B.jsxs("button",{"data-testid":"local-start-btn",className:"primary-btn wide",onClick:()=>N(a,!0),children:[B.jsx(Ln,{name:"play"}),"开始对战"]}),B.jsx("button",{"data-testid":"local-exit-btn",className:"text-btn",onClick:P,children:"退出设置"})]})]}),e==="playing"&&B.jsxs("section",{id:"gameScreen",className:"game-screen",children:[B.jsx("div",{ref:v,className:"three-host"}),B.jsxs("div",{className:"top-hud",children:[B.jsxs("div",{className:"level-chip",children:[B.jsx("button",{onClick:P,children:B.jsx(Ln,{name:"back"})}),B.jsxs("div",{children:[B.jsxs("small",{children:[M.theme," · PAR ",M.par]}),B.jsx("strong",{children:M.name})]})]}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{children:[B.jsx("small",{children:"当前杆数"}),B.jsx("strong",{"data-testid":"stroke-count",children:b.current.strokes})]}),B.jsx("i",{}),B.jsxs("div",{children:[B.jsx("small",{children:"当前玩家"}),B.jsx("strong",{"data-testid":"current-player",children:n==="single"?"探险者":(St=b.current.players[l])==null?void 0:St.name})]})]})]}),B.jsxs("div",{className:"side-tools",children:[B.jsx("button",{"data-testid":"zoom-in",onClick:()=>J(-2),"aria-label":"相机放大",children:B.jsx(Ln,{name:"zoomIn"})}),B.jsxs("span",{children:[Math.round(16/S*100),"%"]}),B.jsx("button",{"data-testid":"zoom-out",onClick:()=>J(2),"aria-label":"相机缩小",children:B.jsx(Ln,{name:"zoomOut"})}),B.jsx("button",{"data-testid":"reset-position",onClick:tt,"aria-label":"重置球位",children:B.jsx(Ln,{name:"reset"})})]}),B.jsxs("div",{className:"physics-card",children:[B.jsxs("div",{children:[B.jsx("span",{className:`surface-dot ${b.current.surface}`}),B.jsxs("p",{children:["当前表面",B.jsx("strong",{children:b.current.surface==="grass"?"草地":b.current.surface==="sand"?"沙坑":"冰面"})]}),B.jsxs("b",{"data-testid":"surface-friction",children:["μ ",b.current.friction.toFixed(2)]})]}),B.jsxs("div",{className:"physics-row",children:[B.jsx("span",{"data-testid":"physics-motion",children:b.current.moving?"滚动中":"静止"}),B.jsx("span",{"data-testid":"physics-contact",children:b.current.lastCollision?`碰撞 ${b.current.lastCollision}`:"无碰撞"})]})]}),B.jsxs("div",{className:"power-card","data-testid":"powerup-status",children:[B.jsx("small",{children:"道具库存"}),B.jsxs("button",{"data-testid":"powerup-hio",disabled:!((Wt=A().find(w=>w.type==="hole_in_one"))!=null&&Wt.count),className:U()||b.current.activeEffect==="hole_in_one"?"armed":"",onClick:z,children:[B.jsx(Ln,{name:"spark"}),B.jsxs("span",{children:["一杆入洞",B.jsxs("b",{children:["× ",((ee=A().find(w=>w.type==="hole_in_one"))==null?void 0:ee.count)||0]})]})]})]}),B.jsxs("div",{className:"shot-hud",children:[B.jsxs("div",{"data-testid":"aim-feedback",className:"aim-data",children:[B.jsx("span",{children:"方向"}),B.jsx("b",{children:b.current.dragging?`${Math.round(Math.atan2(b.current.direction.x,-b.current.direction.z)*180/Math.PI)}°`:"拖动球体瞄准"})]}),B.jsxs("div",{className:"power-track",children:[B.jsx("div",{className:"power-fill",style:{width:`${b.current.power/18*100}%`}}),B.jsxs("span",{"data-testid":"shot-power",children:["力度 ",Math.round(b.current.power/18*100),"%"]})]}),B.jsx("p",{children:R?"球正在滚动…":"按住并拖动 · 释放击球"})]})]}),e==="hole_complete"&&B.jsxs("section",{id:"resultScreen",className:"result-screen",children:[B.jsx("div",{className:"result-glow"}),B.jsx("div",{className:"result-icon",children:B.jsx(Ln,{name:"trophy"})}),B.jsx("p",{className:"eyebrow",children:"HOLE COMPLETE"}),B.jsx("h1",{children:m.strokes<=M.par?"漂亮的一杆！":"成功入洞！"}),B.jsxs("p",{children:[M.name," 已完成"]}),B.jsxs("div",{className:"result-stats",children:[B.jsxs("div",{children:[B.jsx("small",{children:"杆数"}),B.jsx("strong",{children:m.strokes}),B.jsxs("span",{children:["PAR ",M.par]})]}),B.jsxs("div",{children:[B.jsx("small",{children:"积分"}),B.jsxs("strong",{children:["+",m.score]}),B.jsxs("span",{children:[m.strokes-M.par>0?`+${m.strokes-M.par}`:m.strokes-M.par," PAR"]})]})]}),B.jsxs("button",{"data-testid":"result-next",className:"primary-btn",onClick:()=>t("level_select"),children:["继续探险 ",B.jsx("span",{children:"→"})]}),B.jsx("button",{className:"text-btn",onClick:P,children:"返回主菜单"})]}),e==="local_result"&&B.jsxs("section",{id:"localLeaderboardScreen",className:"panel-screen compact",children:[B.jsx(xc,{title:ot.length>1?"平局！":"对战完成",subtitle:ot.length>1?`${ot.map(w=>w.name).join("、")} 并列第一`:`${(kt=Z[0])==null?void 0:kt.name} 赢得本局`,back:P}),B.jsxs("div",{"data-testid":"local-match-leaderboard",className:"local-board",children:[Z.map((w,D)=>B.jsxs("div",{className:w.totalStrokes===et?"winner":"",children:[B.jsx("b",{children:w.totalStrokes===et&&ot.length>1?"=":D+1}),B.jsxs("span",{children:[w.name,B.jsx("small",{children:w.totalStrokes===et?ot.length>1?"并列第一":"胜者":"已完赛"})]}),B.jsxs("strong",{children:[w.totalStrokes," ",B.jsx("small",{children:"杆"})]})]},w.id)),B.jsx("button",{"data-testid":"result-next",className:"primary-btn wide",onClick:P,children:"完成"})]})]}),e==="leaderboard"&&B.jsx(e2,{board:_,back:P})]})}function xc({title:e,subtitle:t,back:n}){return B.jsxs("header",{className:"page-head",children:[B.jsx("button",{onClick:n,children:B.jsx(Ln,{name:"back"})}),B.jsxs("div",{children:[B.jsx("h1",{children:e}),B.jsx("p",{children:t})]}),B.jsx("span",{})]})}function e2({board:e,back:t}){var s;const[n,i]=qe.useState("forest"),a=((s=e.levelBest)==null?void 0:s[n])||[];return B.jsxs("section",{id:"leaderboardScreen",className:"panel-screen compact",children:[B.jsx(xc,{title:"荣誉榜",subtitle:"每一次更少的推杆，都值得被铭记",back:t}),B.jsxs("div",{className:"board-card",children:[B.jsx("div",{className:"board-tabs",children:Object.values(Wi).map(r=>B.jsx("button",{onClick:()=>i(r.id),className:n===r.id?"active":"",children:r.name},r.id))}),B.jsxs("div",{className:"board-labels",children:[B.jsx("span",{children:"排名 / 球员"}),B.jsx("span",{children:"成绩"})]}),a.length?a.map((r,o)=>B.jsxs("div",{className:"board-row",children:[B.jsx("b",{children:o+1}),B.jsxs("span",{children:[r.playerName,B.jsx("small",{children:new Date(r.achievedAt).toLocaleDateString()})]}),B.jsxs("strong",{children:[r.strokes,B.jsx("small",{children:"杆"})]})]},r.playerId)):B.jsxs("div",{className:"empty-board",children:[B.jsx(Ln,{name:"trophy"}),B.jsx("h3",{children:"等待首位挑战者"}),B.jsx("p",{children:"完成这个球场后，你的最佳成绩会出现在这里。"})]}),B.jsx("button",{className:"primary-btn wide",onClick:t,children:"返回主菜单"})]})]})}zE.createRoot(document.getElementById("root")).render(B.jsx(ny.StrictMode,{children:B.jsx(t2,{})}));
