(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function a_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var s_={exports:{}},Tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=Symbol.for("react.transitional.element"),QS=Symbol.for("react.fragment");function r_(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:KS,type:t,key:i,ref:e!==void 0?e:null,props:n}}Tu.Fragment=QS;Tu.jsx=r_;Tu.jsxs=r_;s_.exports=Tu;var Q=s_.exports,o_={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=Symbol.for("react.transitional.element"),jS=Symbol.for("react.portal"),JS=Symbol.for("react.fragment"),$S=Symbol.for("react.strict_mode"),eM=Symbol.for("react.profiler"),tM=Symbol.for("react.consumer"),nM=Symbol.for("react.context"),iM=Symbol.for("react.forward_ref"),aM=Symbol.for("react.suspense"),sM=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),rM=Symbol.for("react.activity"),Tm=Symbol.iterator;function oM(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,f_={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||c_}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d_(){}d_.prototype=Qr.prototype;function tp(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||c_}var np=tp.prototype=new d_;np.constructor=tp;u_(np,Qr.prototype);np.isPureReactComponent=!0;var Am=Array.isArray;function pd(){}var Ct={H:null,A:null,T:null,S:null},h_=Object.prototype.hasOwnProperty;function ip(t,e,n){var i=n.ref;return{$$typeof:ep,type:t,key:e,ref:i!==void 0?i:null,props:n}}function lM(t,e){return ip(t.type,e,t.props)}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===ep}function cM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rm=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cM(""+t.key):e.toString(36)}function uM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(pd,pd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function cr(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case ep:case jS:r=!0;break;case l_:return r=t._init,cr(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Ku(t,0):i,Am(a)?(n="",r!=null&&(n=r.replace(Rm,"$&/")+"/"),cr(a,e,n,"",function(c){return c})):a!=null&&(ap(a)&&(a=lM(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Rm,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(Am(t))for(var l=0;l<t.length;l++)i=t[l],s=o+Ku(i,l),r+=cr(i,e,n,s,a);else if(l=oM(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+Ku(i,l++),r+=cr(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return cr(uM(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ul(t,e,n){if(t==null)return t;var i=[],a=0;return cr(t,i,"","",function(s){return e.call(n,s,a++)}),i}function fM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Cm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},dM={map:Ul,forEach:function(t,e,n){Ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ul(t,function(){e++}),e},toArray:function(t){return Ul(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Activity=rM;Be.Children=dM;Be.Component=Qr;Be.Fragment=JS;Be.Profiler=eM;Be.PureComponent=tp;Be.StrictMode=$S;Be.Suspense=aM;Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;Be.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Ct.H.useMemoCache(t)}};Be.cache=function(t){return function(){return t.apply(null,arguments)}};Be.cacheSignal=function(){return null};Be.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=u_({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!h_.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return ip(t.type,a,i)};Be.createContext=function(t){return t={$$typeof:nM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:tM,_context:t},t};Be.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)h_.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return ip(t,s,a)};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:iM,render:t}};Be.isValidElement=ap;Be.lazy=function(t){return{$$typeof:l_,_payload:{_status:-1,_result:t},_init:fM}};Be.memo=function(t,e){return{$$typeof:sM,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Ct.T,n={};Ct.T=n;try{var i=t(),a=Ct.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(pd,Cm)}catch(s){Cm(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Ct.T=e}};Be.unstable_useCacheRefresh=function(){return Ct.H.useCacheRefresh()};Be.use=function(t){return Ct.H.use(t)};Be.useActionState=function(t,e,n){return Ct.H.useActionState(t,e,n)};Be.useCallback=function(t,e){return Ct.H.useCallback(t,e)};Be.useContext=function(t){return Ct.H.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t,e){return Ct.H.useDeferredValue(t,e)};Be.useEffect=function(t,e){return Ct.H.useEffect(t,e)};Be.useEffectEvent=function(t){return Ct.H.useEffectEvent(t)};Be.useId=function(){return Ct.H.useId()};Be.useImperativeHandle=function(t,e,n){return Ct.H.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Ct.H.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Ct.H.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Ct.H.useMemo(t,e)};Be.useOptimistic=function(t,e){return Ct.H.useOptimistic(t,e)};Be.useReducer=function(t,e,n){return Ct.H.useReducer(t,e,n)};Be.useRef=function(t){return Ct.H.useRef(t)};Be.useState=function(t){return Ct.H.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Ct.H.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Ct.H.useTransition()};Be.version="19.2.8";o_.exports=Be;var Ie=o_.exports;const hM=a_(Ie);var p_={exports:{}},Au={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,z){var k=O.length;O.push(z);e:for(;0<k;){var ne=k-1>>>1,le=O[ne];if(0<a(le,z))O[ne]=z,O[k]=le,k=ne;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var z=O[0],k=O.pop();if(k!==z){O[0]=k;e:for(var ne=0,le=O.length,he=le>>>1;ne<he;){var Me=2*(ne+1)-1,We=O[Me],at=Me+1,qe=O[at];if(0>a(We,k))at<le&&0>a(qe,We)?(O[ne]=qe,O[at]=k,ne=at):(O[ne]=We,O[Me]=k,ne=Me);else if(at<le&&0>a(qe,k))O[ne]=qe,O[at]=k,ne=at;else break e}}return z}function a(O,z){var k=O.sortIndex-z.sortIndex;return k!==0?k:O.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,S=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function _(O){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=O)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function b(O){if(E=!1,_(O),!S)if(n(l)!==null)S=!0,A||(A=!0,P());else{var z=n(c);z!==null&&V(b,z.startTime-O)}}var A=!1,R=-1,m=5,T=-1;function D(){return g?!0:!(t.unstable_now()-T<m)}function U(){if(g=!1,A){var O=t.unstable_now();T=O;var z=!0;try{e:{S=!1,E&&(E=!1,v(R),R=-1),h=!0;var k=u;try{t:{for(_(O),p=n(l);p!==null&&!(p.expirationTime>O&&D());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,u=p.priorityLevel;var le=ne(p.expirationTime<=O);if(O=t.unstable_now(),typeof le=="function"){p.callback=le,_(O),z=!0;break t}p===n(l)&&i(l),_(O)}else i(l);p=n(l)}if(p!==null)z=!0;else{var he=n(c);he!==null&&V(b,he.startTime-O),z=!1}}break e}finally{p=null,u=k,h=!1}z=void 0}}finally{z?P():A=!1}}}var P;if(typeof M=="function")P=function(){M(U)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,te=j.port2;j.port1.onmessage=U,P=function(){te.postMessage(null)}}else P=function(){f(U,0)};function V(O,z){R=f(function(){O(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(O){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var k=u;u=z;try{return O()}finally{u=k}},t.unstable_requestPaint=function(){g=!0},t.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=u;u=O;try{return z()}finally{u=k}},t.unstable_scheduleCallback=function(O,z,k){var ne=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ne+k:ne):k=ne,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=k+le,O={id:d++,callback:z,priorityLevel:O,startTime:k,expirationTime:le,sortIndex:-1},k>ne?(O.sortIndex=k,e(c,O),n(l)===null&&O===n(c)&&(E?(v(R),R=-1):E=!0,V(b,k-ne))):(O.sortIndex=le,e(l,O),S||h||(S=!0,A||(A=!0,P()))),O},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(O){var z=u;return function(){var k=u;u=z;try{return O.apply(this,arguments)}finally{u=k}}}})(g_);m_.exports=g_;var pM=m_.exports,__={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mM=Ie;function v_(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ta(){}var bn={d:{f:Ta,r:function(){throw Error(v_(522))},D:Ta,C:Ta,L:Ta,m:Ta,X:Ta,S:Ta,M:Ta},p:0,findDOMNode:null},gM=Symbol.for("react.portal");function _M(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gM,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var zo=mM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ru(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(v_(299));return _M(t,e,null,n)};An.flushSync=function(t){var e=zo.T,n=bn.p;try{if(zo.T=null,bn.p=2,t)return t()}finally{zo.T=e,bn.p=n,bn.d.f()}};An.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,bn.d.C(t,e))};An.prefetchDNS=function(t){typeof t=="string"&&bn.d.D(t)};An.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Ru(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?bn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&bn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};An.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Ru(e.as,e.crossOrigin);bn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&bn.d.M(t)};An.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Ru(n,e.crossOrigin);bn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};An.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Ru(e.as,e.crossOrigin);bn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else bn.d.m(t)};An.requestFormReset=function(t){bn.d.r(t)};An.unstable_batchedUpdates=function(t,e){return t(e)};An.useFormState=function(t,e,n){return zo.H.useFormState(t,e,n)};An.useFormStatus=function(){return zo.H.useHostTransitionStatus()};An.version="19.2.8";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),__.exports=An;var vM=__.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var en=pM,S_=Ie,xM=vM;function re(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _l(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E_(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(_l(t)!==t)throw Error(re(188))}function SM(t){var e=t.alternate;if(!e){if(e=_l(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return wm(a),t;if(s===i)return wm(a),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function b_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b_(t),e!==null)return e;t=t.sibling}return null}var wt=Object.assign,MM=Symbol.for("react.element"),Nl=Symbol.for("react.transitional.element"),wo=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),A_=Symbol.for("react.consumer"),ia=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),La=Symbol.for("react.lazy"),vd=Symbol.for("react.activity"),yM=Symbol.for("react.memo_cache_sentinel"),Dm=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var EM=Symbol.for("react.client.reference");function xd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===EM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case md:return"Profiler";case T_:return"StrictMode";case gd:return"Suspense";case _d:return"SuspenseList";case vd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case wo:return"Portal";case ia:return t.displayName||"Context";case A_:return(t._context.displayName||"Context")+".Consumer";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rp:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case La:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}var Do=Array.isArray,Oe=S_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut=xM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,As={pending:!1,data:null,method:null,action:null},Sd=[],pr=-1;function Hi(t){return{current:t}}function on(t){0>pr||(t.current=Sd[pr],Sd[pr]=null,pr--)}function Et(t,e){pr++,Sd[pr]=t.current,t.current=e}var Oi=Hi(null),Jo=Hi(null),qa=Hi(null),Gc=Hi(null);function Vc(t,e){switch(Et(qa,e),Et(Jo,t),Et(Oi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?z0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=z0(e),t=qx(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}on(Oi),Et(Oi,t)}function Pr(){on(Oi),on(Jo),on(qa)}function Md(t){t.memoizedState!==null&&Et(Gc,t);var e=Oi.current,n=qx(e,t.type);e!==n&&(Et(Jo,t),Et(Oi,n))}function kc(t){Jo.current===t&&(on(Oi),on(Jo)),Gc.current===t&&(on(Gc),cl._currentValue=As)}var Qu,Um;function _s(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||"",Um=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+t+Um}var ju=!1;function Ju(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){u=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?_s(n):""}function bM(t,e){switch(t.tag){case 26:case 27:case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return t.child!==e&&e!==null?_s("Suspense Fallback"):_s("Suspense");case 19:return _s("SuspenseList");case 0:case 15:return Ju(t.type,!1);case 11:return Ju(t.type.render,!1);case 1:return Ju(t.type,!0);case 31:return _s("Activity");default:return""}}function Nm(t){try{var e="",n=null;do e+=bM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var yd=Object.prototype.hasOwnProperty,op=en.unstable_scheduleCallback,$u=en.unstable_cancelCallback,TM=en.unstable_shouldYield,AM=en.unstable_requestPaint,Wn=en.unstable_now,RM=en.unstable_getCurrentPriorityLevel,R_=en.unstable_ImmediatePriority,C_=en.unstable_UserBlockingPriority,Xc=en.unstable_NormalPriority,CM=en.unstable_LowPriority,w_=en.unstable_IdlePriority,wM=en.log,DM=en.unstable_setDisableYieldValue,vl=null,qn=null;function Ha(t){if(typeof wM=="function"&&DM(t),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(vl,t)}catch{}}var Yn=Math.clz32?Math.clz32:LM,UM=Math.log,NM=Math.LN2;function LM(t){return t>>>=0,t===0?32:31-(UM(t)/NM|0)|0}var Ll=256,Ol=262144,Pl=4194304;function vs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=vs(i):(r&=o,r!==0?a=vs(r):n||(n=o&~t,n!==0&&(a=vs(n))))):(o=i&~s,o!==0?a=vs(o):r!==0?a=vs(r):n||(n=i&~t,n!==0&&(a=vs(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function xl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function OM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(){var t=Pl;return Pl<<=1,!(Pl&62914560)&&(Pl=4194304),t}function ef(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function PM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Yn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&U_(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function U_(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Yn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function N_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function L_(t,e){var n=e&-e;return n=n&42?1:lp(n),n&(t.suspendedLanes|e)?0:n}function lp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function O_(){var t=ut.p;return t!==0?t:(t=window.event,t===void 0?32:iS(t.type))}function Lm(t,e){var n=ut.p;try{return ut.p=t,e()}finally{ut.p=n}}var os=Math.random().toString(36).slice(2),fn="__reactFiber$"+os,On="__reactProps$"+os,jr="__reactContainer$"+os,Ed="__reactEvents$"+os,zM="__reactListeners$"+os,IM="__reactHandles$"+os,Om="__reactResources$"+os,Ml="__reactMarker$"+os;function up(t){delete t[fn],delete t[On],delete t[Ed],delete t[zM],delete t[IM]}function mr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jr]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=G0(t);t!==null;){if(n=t[fn])return n;t=G0(t)}return e}t=n,n=t.parentNode}return null}function Jr(t){if(t=t[fn]||t[jr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Uo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(re(33))}function Tr(t){var e=t[Om];return e||(e=t[Om]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function rn(t){t[Ml]=!0}var P_=new Set,z_={};function Fs(t,e){zr(t,e),zr(t+"Capture",e)}function zr(t,e){for(z_[t]=e,t=0;t<e.length;t++)P_.add(e[t])}var FM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pm={},zm={};function BM(t){return yd.call(zm,t)?!0:yd.call(Pm,t)?!1:FM.test(t)?zm[t]=!0:(Pm[t]=!0,!1)}function xc(t,e,n){if(BM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function zl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Xi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ni(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HM(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bd(t){if(!t._valueTracker){var e=I_(t)?"checked":"value";t._valueTracker=HM(t,e,""+t[e])}}function F_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=I_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var GM=/[\n"\\]/g;function ri(t){return t.replace(GM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Td(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ni(e)):t.value!==""+ni(e)&&(t.value=""+ni(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Ad(t,r,ni(e)):n!=null?Ad(t,r,ni(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ni(o):t.removeAttribute("name")}function B_(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){bd(t);return}n=n!=null?""+ni(n):"",e=e!=null?""+ni(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),bd(t)}function Ad(t,e,n){e==="number"&&Wc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ar(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function H_(t,e,n){if(e!=null&&(e=""+ni(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ni(n):""}function G_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(re(92));if(Do(i)){if(1<i.length)throw Error(re(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ni(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),bd(t)}function Ir(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var VM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Im(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||VM.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function V_(t,e,n){if(e!=null&&typeof e!="object")throw Error(re(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Im(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&Im(t,s,e[s])}function fp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sc(t){return XM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var Rd=null;function dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gr=null,Rr=null;function Fm(t){var e=Jr(t);if(e&&(t=e.stateNode)){var n=t[On]||null;e:switch(t=e.stateNode,e.type){case"input":if(Td(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ri(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[On]||null;if(!a)throw Error(re(90));Td(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&F_(i)}break e;case"textarea":H_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Ar(t,!!n.multiple,e,!1)}}}var tf=!1;function k_(t,e,n){if(tf)return t(e,n);tf=!0;try{var i=t(e);return i}finally{if(tf=!1,(gr!==null||Rr!==null)&&(Hu(),gr&&(e=gr,t=Rr,Rr=gr=null,Fm(e),t)))for(e=0;e<t.length;e++)Fm(t[e])}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=n[On]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=!1;if(ha)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Cd=!1}var Ga=null,hp=null,Mc=null;function X_(){if(Mc)return Mc;var t,e=hp,n=e.length,i,a="value"in Ga?Ga.value:Ga.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Mc=a.slice(t,1<i?1-i:void 0)}function yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Bm(){return!1}function Pn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:Bm,this.isPropagationStopped=Bm,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Pn(Bs),yl=wt({},Bs,{view:0,detail:0}),WM=Pn(yl),nf,af,po,Du=wt({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(nf=t.screenX-po.screenX,af=t.screenY-po.screenY):af=nf=0,po=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:af}}),Hm=Pn(Du),qM=wt({},Du,{dataTransfer:0}),YM=Pn(qM),ZM=wt({},yl,{relatedTarget:0}),sf=Pn(ZM),KM=wt({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),QM=Pn(KM),jM=wt({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JM=Pn(jM),$M=wt({},Bs,{data:0}),Gm=Pn($M),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ny[t])?!!e[t]:!1}function pp(){return iy}var ay=wt({},yl,{key:function(t){if(t.key){var e=ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=Pn(ay),ry=wt({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Pn(ry),oy=wt({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),ly=Pn(oy),cy=wt({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Pn(cy),fy=wt({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Pn(fy),hy=wt({},Bs,{newState:0,oldState:0}),py=Pn(hy),my=[9,13,27,32],mp=ha&&"CompositionEvent"in window,Io=null;ha&&"documentMode"in document&&(Io=document.documentMode);var gy=ha&&"TextEvent"in window&&!Io,W_=ha&&(!mp||Io&&8<Io&&11>=Io),km=String.fromCharCode(32),Xm=!1;function q_(t,e){switch(t){case"keyup":return my.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function _y(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(Xm=!0,km);case"textInput":return t=e.data,t===km&&Xm?null:t;default:return null}}function vy(t,e){if(_r)return t==="compositionend"||!mp&&q_(t,e)?(t=X_(),Mc=hp=Ga=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xy[t.type]:e==="textarea"}function Z_(t,e,n,i){gr?Rr?Rr.push(i):Rr=[i]:gr=i,e=cu(e,"onChange"),0<e.length&&(n=new wu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,el=null;function Sy(t){kx(t,0)}function Uu(t){var e=Uo(t);if(F_(e))return t}function qm(t,e){if(t==="change")return e}var K_=!1;if(ha){var rf;if(ha){var of="oninput"in document;if(!of){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),of=typeof Ym.oninput=="function"}rf=of}else rf=!1;K_=rf&&(!document.documentMode||9<document.documentMode)}function Zm(){Fo&&(Fo.detachEvent("onpropertychange",Q_),el=Fo=null)}function Q_(t){if(t.propertyName==="value"&&Uu(el)){var e=[];Z_(e,el,t,dp(t)),k_(Sy,e)}}function My(t,e,n){t==="focusin"?(Zm(),Fo=e,el=n,Fo.attachEvent("onpropertychange",Q_)):t==="focusout"&&Zm()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(el)}function Ey(t,e){if(t==="click")return Uu(e)}function by(t,e){if(t==="input"||t==="change")return Uu(e)}function Ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Ty;function tl(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!yd.call(e,a)||!Kn(t[a],e[a]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Wc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ay=ha&&"documentMode"in document&&11>=document.documentMode,vr=null,wd=null,Bo=null,Dd=!1;function jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||vr==null||vr!==Wc(i)||(i=vr,"selectionStart"in i&&gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&tl(Bo,i)||(Bo=i,i=cu(wd,"onSelect"),0<i.length&&(e=new wu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vr)))}function us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},lf={},$_={};ha&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Hs(t){if(lf[t])return lf[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $_)return lf[t]=e[n];return t}var ev=Hs("animationend"),tv=Hs("animationiteration"),nv=Hs("animationstart"),Ry=Hs("transitionrun"),Cy=Hs("transitionstart"),wy=Hs("transitioncancel"),iv=Hs("transitionend"),av=new Map,Ud="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ud.push("scrollEnd");function yi(t,e){av.set(t,e),Fs(e,[t])}var qc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Sr=0,_p=0;function Nu(){for(var t=Sr,e=_p=Sr=0;e<t;){var n=ei[e];ei[e++]=null;var i=ei[e];ei[e++]=null;var a=ei[e];ei[e++]=null;var s=ei[e];if(ei[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&sv(n,a,s)}}function Lu(t,e,n,i){ei[Sr++]=t,ei[Sr++]=e,ei[Sr++]=n,ei[Sr++]=i,_p|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function vp(t,e,n,i){return Lu(t,e,n,i),Yc(t)}function Gs(t,e){return Lu(t,null,null,e),Yc(t)}function sv(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Yn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function Yc(t){if(50<Zo)throw Zo=0,Jd=null,Error(re(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Mr={};function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new Dy(t,e,n,i)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function rv(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ec(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")xp(t)&&(r=1);else if(typeof t=="string")r=PE(t,n,Oi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case vd:return t=Vn(31,n,e,a),t.elementType=vd,t.lanes=s,t;case hr:return Rs(n.children,a,s,e);case T_:r=8,a|=24;break;case md:return t=Vn(12,n,e,a|2),t.elementType=md,t.lanes=s,t;case gd:return t=Vn(13,n,e,a),t.elementType=gd,t.lanes=s,t;case _d:return t=Vn(19,n,e,a),t.elementType=_d,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ia:r=10;break e;case A_:r=9;break e;case sp:r=11;break e;case rp:r=14;break e;case La:r=16,i=null;break e}r=29,n=Error(re(130,t===null?"null":typeof t,"")),i=null}return e=Vn(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function Rs(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function cf(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function ov(t){var e=Vn(18,null,null,0);return e.stateNode=t,e}function uf(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Jm=new WeakMap;function oi(t,e){if(typeof t=="object"&&t!==null){var n=Jm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Nm(e)},Jm.set(t,e),e)}return{value:t,source:e,stack:Nm(e)}}var yr=[],Er=0,Zc=null,nl=0,ii=[],ai=0,ts=null,wi=1,Di="";function ea(t,e){yr[Er++]=nl,yr[Er++]=Zc,Zc=t,nl=e}function lv(t,e,n){ii[ai++]=wi,ii[ai++]=Di,ii[ai++]=ts,ts=t;var i=wi;t=Di;var a=32-Yn(i)-1;i&=~(1<<a),n+=1;var s=32-Yn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,wi=1<<32-Yn(e)+a|n<<a|i,Di=s+t}else wi=1<<s|n<<a|i,Di=t}function Sp(t){t.return!==null&&(ea(t,1),lv(t,1,0))}function Mp(t){for(;t===Zc;)Zc=yr[--Er],yr[Er]=null,nl=yr[--Er],yr[Er]=null;for(;t===ts;)ts=ii[--ai],ii[ai]=null,Di=ii[--ai],ii[ai]=null,wi=ii[--ai],ii[ai]=null}function cv(t,e){ii[ai++]=wi,ii[ai++]=Di,ii[ai++]=ts,wi=e.id,Di=e.overflow,ts=t}var dn=null,Rt=null,nt=!1,Ya=null,li=!1,Nd=Error(re(519));function ns(t){var e=Error(re(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(oi(e,t)),Nd}function $m(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[fn]=t,e[On]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<ol.length;n++)Qe(ol[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),B_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),G_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Wx(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=aa),e=!0):e=!1,e||ns(t,!0)}function e0(t){for(dn=t.return;dn;)switch(dn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:dn=dn.return}}function Ys(t){if(t!==dn)return!1;if(!nt)return e0(t),nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||ih(t.type,t.memoizedProps)),n=!n),n&&Rt&&ns(t),e0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));Rt=H0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));Rt=H0(t)}else e===27?(e=Rt,ls(t.type)?(t=oh,oh=null,Rt=t):Rt=e):Rt=dn?ui(t.stateNode.nextSibling):null;return!0}function Us(){Rt=dn=null,nt=!1}function ff(){var t=Ya;return t!==null&&(Un===null?Un=t:Un.push.apply(Un,t),Ya=null),t}function il(t){Ya===null?Ya=[t]:Ya.push(t)}var Ld=Hi(null),Vs=null,sa=null;function Pa(t,e,n){Et(Ld,e._currentValue),e._currentValue=n}function ca(t){t._currentValue=Ld.current,on(Ld)}function Od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Pd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Od(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(re(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Od(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function $r(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(re(387));if(r=r.memoizedProps,r!==null){var o=a.type;Kn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===Gc.current){if(r=a.alternate,r===null)throw Error(re(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(cl):t=[cl])}a=a.return}t!==null&&Pd(e,t,n,i),e.flags|=262144}function Kc(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ns(t){Vs=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function hn(t){return uv(Vs,t)}function Fl(t,e){return Vs===null&&Ns(t),uv(t,e)}function uv(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},sa===null){if(t===null)throw Error(re(308));sa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else sa=sa.next=e;return n}var Uy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Ny=en.unstable_scheduleCallback,Ly=en.unstable_NormalPriority,Kt={$$typeof:ia,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yp(){return{controller:new Uy,data:new Map,refCount:0}}function El(t){t.refCount--,t.refCount===0&&Ny(Ly,function(){t.controller.abort()})}var Ho=null,zd=0,Fr=0,Cr=null;function Oy(t,e){if(Ho===null){var n=Ho=[];zd=0,Fr=Yp(),Cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return zd++,e.then(t0,t0),e}function t0(){if(--zd===0&&Ho!==null){Cr!==null&&(Cr.status="fulfilled");var t=Ho;Ho=null,Fr=0,Cr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Py(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var n0=Oe.S;Oe.S=function(t,e){bx=Wn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Oy(t,e),n0!==null&&n0(t,e)};var Cs=Hi(null);function Ep(){var t=Cs.current;return t!==null?t:St.pooledCache}function bc(t,e){e===null?Et(Cs,Cs.current):Et(Cs,e.pool)}function fv(){var t=Ep();return t===null?null:{parent:Kt._currentValue,pool:t}}var eo=Error(re(460)),bp=Error(re(474)),Ou=Error(re(542)),Qc={then:function(){}};function i0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dv(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(aa,aa),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,s0(t),t;default:if(typeof e.status=="string")e.then(aa,aa);else{if(t=St,t!==null&&100<t.shellSuspendCounter)throw Error(re(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,s0(t),t}throw ws=e,eo}}function xs(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ws=n,eo):n}}var ws=null;function a0(){if(ws===null)throw Error(re(459));var t=ws;return ws=null,t}function s0(t){if(t===eo||t===Ou)throw Error(re(483))}var wr=null,al=0;function Bl(t){var e=al;return al+=1,wr===null&&(wr=[]),dv(wr,t,e)}function mo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Hl(t,e){throw e.$$typeof===MM?Error(re(525)):(t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function hv(t){function e(f,v){if(t){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function a(f,v){return f=la(f,v),f.index=0,f.sibling=null,f}function s(f,v,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=67108866,v):M):(f.flags|=67108866,v)):(f.flags|=1048576,v)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,v,M,_){return v===null||v.tag!==6?(v=cf(M,f.mode,_),v.return=f,v):(v=a(v,M),v.return=f,v)}function l(f,v,M,_){var b=M.type;return b===hr?d(f,v,M.props.children,_,M.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===La&&xs(b)===v.type)?(v=a(v,M.props),mo(v,M),v.return=f,v):(v=Ec(M.type,M.key,M.props,null,f.mode,_),mo(v,M),v.return=f,v)}function c(f,v,M,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=uf(M,f.mode,_),v.return=f,v):(v=a(v,M.children||[]),v.return=f,v)}function d(f,v,M,_,b){return v===null||v.tag!==7?(v=Rs(M,f.mode,_,b),v.return=f,v):(v=a(v,M),v.return=f,v)}function p(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=cf(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:return M=Ec(v.type,v.key,v.props,null,f.mode,M),mo(M,v),M.return=f,M;case wo:return v=uf(v,f.mode,M),v.return=f,v;case La:return v=xs(v),p(f,v,M)}if(Do(v)||fo(v))return v=Rs(v,f.mode,M,null),v.return=f,v;if(typeof v.then=="function")return p(f,Bl(v),M);if(v.$$typeof===ia)return p(f,Fl(f,v),M);Hl(f,v)}return null}function u(f,v,M,_){var b=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b!==null?null:o(f,v,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Nl:return M.key===b?l(f,v,M,_):null;case wo:return M.key===b?c(f,v,M,_):null;case La:return M=xs(M),u(f,v,M,_)}if(Do(M)||fo(M))return b!==null?null:d(f,v,M,_,null);if(typeof M.then=="function")return u(f,v,Bl(M),_);if(M.$$typeof===ia)return u(f,v,Fl(f,M),_);Hl(f,M)}return null}function h(f,v,M,_,b){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(M)||null,o(v,f,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:return f=f.get(_.key===null?M:_.key)||null,l(v,f,_,b);case wo:return f=f.get(_.key===null?M:_.key)||null,c(v,f,_,b);case La:return _=xs(_),h(f,v,M,_,b)}if(Do(_)||fo(_))return f=f.get(M)||null,d(v,f,_,b,null);if(typeof _.then=="function")return h(f,v,M,Bl(_),b);if(_.$$typeof===ia)return h(f,v,M,Fl(v,_),b);Hl(v,_)}return null}function S(f,v,M,_){for(var b=null,A=null,R=v,m=v=0,T=null;R!==null&&m<M.length;m++){R.index>m?(T=R,R=null):T=R.sibling;var D=u(f,R,M[m],_);if(D===null){R===null&&(R=T);break}t&&R&&D.alternate===null&&e(f,R),v=s(D,v,m),A===null?b=D:A.sibling=D,A=D,R=T}if(m===M.length)return n(f,R),nt&&ea(f,m),b;if(R===null){for(;m<M.length;m++)R=p(f,M[m],_),R!==null&&(v=s(R,v,m),A===null?b=R:A.sibling=R,A=R);return nt&&ea(f,m),b}for(R=i(R);m<M.length;m++)T=h(R,f,m,M[m],_),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?m:T.key),v=s(T,v,m),A===null?b=T:A.sibling=T,A=T);return t&&R.forEach(function(U){return e(f,U)}),nt&&ea(f,m),b}function E(f,v,M,_){if(M==null)throw Error(re(151));for(var b=null,A=null,R=v,m=v=0,T=null,D=M.next();R!==null&&!D.done;m++,D=M.next()){R.index>m?(T=R,R=null):T=R.sibling;var U=u(f,R,D.value,_);if(U===null){R===null&&(R=T);break}t&&R&&U.alternate===null&&e(f,R),v=s(U,v,m),A===null?b=U:A.sibling=U,A=U,R=T}if(D.done)return n(f,R),nt&&ea(f,m),b;if(R===null){for(;!D.done;m++,D=M.next())D=p(f,D.value,_),D!==null&&(v=s(D,v,m),A===null?b=D:A.sibling=D,A=D);return nt&&ea(f,m),b}for(R=i(R);!D.done;m++,D=M.next())D=h(R,f,m,D.value,_),D!==null&&(t&&D.alternate!==null&&R.delete(D.key===null?m:D.key),v=s(D,v,m),A===null?b=D:A.sibling=D,A=D);return t&&R.forEach(function(P){return e(f,P)}),nt&&ea(f,m),b}function g(f,v,M,_){if(typeof M=="object"&&M!==null&&M.type===hr&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Nl:e:{for(var b=M.key;v!==null;){if(v.key===b){if(b=M.type,b===hr){if(v.tag===7){n(f,v.sibling),_=a(v,M.props.children),_.return=f,f=_;break e}}else if(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===La&&xs(b)===v.type){n(f,v.sibling),_=a(v,M.props),mo(_,M),_.return=f,f=_;break e}n(f,v);break}else e(f,v);v=v.sibling}M.type===hr?(_=Rs(M.props.children,f.mode,_,M.key),_.return=f,f=_):(_=Ec(M.type,M.key,M.props,null,f.mode,_),mo(_,M),_.return=f,f=_)}return r(f);case wo:e:{for(b=M.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),_=a(v,M.children||[]),_.return=f,f=_;break e}else{n(f,v);break}else e(f,v);v=v.sibling}_=uf(M,f.mode,_),_.return=f,f=_}return r(f);case La:return M=xs(M),g(f,v,M,_)}if(Do(M))return S(f,v,M,_);if(fo(M)){if(b=fo(M),typeof b!="function")throw Error(re(150));return M=b.call(M),E(f,v,M,_)}if(typeof M.then=="function")return g(f,v,Bl(M),_);if(M.$$typeof===ia)return g(f,v,Fl(f,M),_);Hl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),_=a(v,M),_.return=f,f=_):(n(f,v),_=cf(M,f.mode,_),_.return=f,f=_),r(f)):n(f,v)}return function(f,v,M,_){try{al=0;var b=g(f,v,M,_);return wr=null,b}catch(R){if(R===eo||R===Ou)throw R;var A=Vn(29,R,null,f.mode);return A.lanes=_,A.return=f,A}finally{}}}var Ls=hv(!0),pv=hv(!1),Oa=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Id(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Yc(t),sv(t,null,n),e}return Lu(t,i,e,n),Yc(t)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,N_(t,n)}}function df(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Fd=!1;function Vo(){if(Fd){var t=Cr;if(t!==null)throw t}}function ko(t,e,n,i){Fd=!1;var a=t.updateQueue;Oa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(et&u)===u:(i&u)===u){u!==0&&u===Fr&&(Fd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,E=o;u=e;var g=n;switch(E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(g,p,u);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,u=typeof S=="function"?S.call(g,p,u):S,u==null)break e;p=wt({},p,u);break e;case 2:Oa=!0}}u=o.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),as|=r,t.lanes=r,t.memoizedState=p}}function mv(t,e){if(typeof t!="function")throw Error(re(191,t));t.call(e)}function gv(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)mv(n[t],e)}var Br=Hi(null),jc=Hi(0);function r0(t,e){t=_a,Et(jc,t),Et(Br,e),_a=t|e.baseLanes}function Bd(){Et(jc,_a),Et(Br,Br.current)}function Ap(){_a=jc.current,on(Br),on(jc)}var Qn=Hi(null),ci=null;function za(t){var e=t.alternate;Et(kt,kt.current&1),Et(Qn,t),ci===null&&(e===null||Br.current!==null||e.memoizedState!==null)&&(ci=t)}function Hd(t){Et(kt,kt.current),Et(Qn,t),ci===null&&(ci=t)}function _v(t){t.tag===22?(Et(kt,kt.current),Et(Qn,t),ci===null&&(ci=t)):Ia()}function Ia(){Et(kt,kt.current),Et(Qn,Qn.current)}function Gn(t){on(Qn),ci===t&&(ci=null),on(kt)}var kt=Hi(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sh(n)||rh(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pa=0,Ge=null,_t=null,Yt=null,$c=!1,Dr=!1,Os=!1,eu=0,sl=0,Ur=null,zy=0;function Ft(){throw Error(re(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Cp(t,e,n,i,a,s){return pa=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oe.H=t===null||t.memoizedState===null?Zv:Bp,Os=!1,s=n(i,a),Os=!1,Dr&&(s=xv(e,n,i,a)),vv(t),s}function vv(t){Oe.H=rl;var e=_t!==null&&_t.next!==null;if(pa=0,Yt=_t=Ge=null,$c=!1,sl=0,Ur=null,e)throw Error(re(300));t===null||Qt||(t=t.dependencies,t!==null&&Kc(t)&&(Qt=!0))}function xv(t,e,n,i){Ge=t;var a=0;do{if(Dr&&(Ur=null),sl=0,Dr=!1,25<=a)throw Error(re(301));if(a+=1,Yt=_t=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Oe.H=Kv,s=e(n,i)}while(Dr);return s}function Iy(){var t=Oe.H,e=t.useState()[0];return e=typeof e.then=="function"?bl(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(Ge.flags|=1024),e}function wp(){var t=eu!==0;return eu=0,t}function Dp(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Up(t){if($c){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$c=!1}pa=0,Yt=_t=Ge=null,Dr=!1,sl=eu=0,Ur=null}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Ge.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Xt(){if(_t===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Yt===null?Ge.memoizedState:Yt.next;if(e!==null)Yt=e,_t=t;else{if(t===null)throw Ge.alternate===null?Error(re(467)):Error(re(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Yt===null?Ge.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(t){var e=sl;return sl+=1,Ur===null&&(Ur=[]),t=dv(Ur,t,e),e=Ge,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,Oe.H=e===null||e.memoizedState===null?Zv:Bp),t}function zu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bl(t);if(t.$$typeof===ia)return hn(t)}throw Error(re(438,String(t)))}function Np(t){var e=null,n=Ge.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Pu(),Ge.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=yM;return e.index++,n}function ma(t,e){return typeof e=="function"?e(t):e}function Tc(t){var e=Xt();return Lp(e,_t,t)}function Lp(t,e,n){var i=t.queue;if(i===null)throw Error(re(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(et&p)===p:(pa&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Fr&&(d=!0);else if((pa&u)===u){c=c.next,u===Fr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Ge.lanes|=u,as|=u;p=c.action,Os&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Ge.lanes|=p,as|=p;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!Kn(s,t.memoizedState)&&(Qt=!0,d&&(n=Cr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function hf(t){var e=Xt(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Kn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(t,e,n){var i=Ge,a=Xt(),s=nt;if(s){if(n===void 0)throw Error(re(407));n=n()}else n=e();var r=!Kn((_t||a).memoizedState,n);if(r&&(a.memoizedState=n,Qt=!0),a=a.queue,Op(Ev.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||Yt!==null&&Yt.memoizedState.tag&1){if(i.flags|=2048,Hr(9,{destroy:void 0},yv.bind(null,i,a,n,e),null),St===null)throw Error(re(349));s||pa&127||Mv(i,e,n)}return n}function Mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e=Pu(),Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,bv(e)&&Tv(t)}function Ev(t,e,n){return n(function(){bv(e)&&Tv(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Tv(t){var e=Gs(t,2);e!==null&&Nn(e,t,2)}function Gd(t){var e=En();if(typeof t=="function"){var n=t;if(t=n(),Os){Ha(!0);try{n()}finally{Ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e}function Av(t,e,n,i){return t.baseState=n,Lp(t,_t,typeof i=="function"?i:ma)}function Fy(t,e,n,i,a){if(Fu(t))throw Error(re(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Oe.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Rv(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Rv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Oe.T,r={};Oe.T=r;try{var o=n(a,i),l=Oe.S;l!==null&&l(r,o),o0(t,e,o)}catch(c){Vd(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Oe.T=s}}else try{s=n(a,i),o0(t,e,s)}catch(c){Vd(t,e,c)}}function o0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){l0(t,e,i)},function(i){return Vd(t,e,i)}):l0(t,e,n)}function l0(t,e,n){e.status="fulfilled",e.value=n,Cv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Rv(t,n)))}function Vd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Cv(e),e=e.next;while(e!==i)}t.action=null}function Cv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function wv(t,e){return e}function c0(t,e){if(nt){var n=St.formState;if(n!==null){e:{var i=Ge;if(nt){if(Rt){t:{for(var a=Rt,s=li;a.nodeType!==8;){if(!s){a=null;break t}if(a=ui(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Rt=ui(a.nextSibling),i=a.data==="F!";break e}}ns(i)}i=!1}i&&(e=n[0])}}return n=En(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wv,lastRenderedState:e},n.queue=i,n=Wv.bind(null,Ge,i),i.dispatch=n,i=Gd(!1),s=Fp.bind(null,Ge,!1,i.queue),i=En(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=Fy.bind(null,Ge,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function u0(t){var e=Xt();return Dv(e,_t,t)}function Dv(t,e,n){if(e=Lp(t,e,wv)[0],t=Tc(ma)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=bl(e)}catch(r){throw r===eo?Ou:r}else i=e;e=Xt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ge.flags|=2048,Hr(9,{destroy:void 0},By.bind(null,a,n),null)),[i,s,t]}function By(t,e){t.action=e}function f0(t){var e=Xt(),n=_t;if(n!==null)return Dv(e,n,t);Xt(),e=e.memoizedState,n=Xt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Hr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ge.updateQueue,e===null&&(e=Pu(),Ge.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Uv(){return Xt().memoizedState}function Ac(t,e,n,i){var a=En();Ge.flags|=t,a.memoizedState=Hr(1|e,{destroy:void 0},n,i===void 0?null:i)}function Iu(t,e,n,i){var a=Xt();i=i===void 0?null:i;var s=a.memoizedState.inst;_t!==null&&i!==null&&Rp(i,_t.memoizedState.deps)?a.memoizedState=Hr(e,s,n,i):(Ge.flags|=t,a.memoizedState=Hr(1|e,s,n,i))}function d0(t,e){Ac(8390656,8,t,e)}function Op(t,e){Iu(2048,8,t,e)}function Hy(t){Ge.flags|=4;var e=Ge.updateQueue;if(e===null)e=Pu(),Ge.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Nv(t){var e=Xt().memoizedState;return Hy({ref:e,nextImpl:t}),function(){if(ct&2)throw Error(re(440));return e.impl.apply(void 0,arguments)}}function Lv(t,e){return Iu(4,2,t,e)}function Ov(t,e){return Iu(4,4,t,e)}function Pv(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zv(t,e,n){n=n!=null?n.concat([t]):null,Iu(4,4,Pv.bind(null,e,t),n)}function Pp(){}function Iv(t,e){var n=Xt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Xt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Rp(e,i[1]))return i[0];if(i=t(),Os){Ha(!0);try{t()}finally{Ha(!1)}}return n.memoizedState=[i,e],i}function zp(t,e,n){return n===void 0||pa&1073741824&&!(et&261930)?t.memoizedState=e:(t.memoizedState=n,t=Ax(),Ge.lanes|=t,as|=t,n)}function Bv(t,e,n,i){return Kn(n,e)?n:Br.current!==null?(t=zp(t,n,i),Kn(t,e)||(Qt=!0),t):!(pa&42)||pa&1073741824&&!(et&261930)?(Qt=!0,t.memoizedState=n):(t=Ax(),Ge.lanes|=t,as|=t,e)}function Hv(t,e,n,i,a){var s=ut.p;ut.p=s!==0&&8>s?s:8;var r=Oe.T,o={};Oe.T=o,Fp(t,!1,e,n);try{var l=a(),c=Oe.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Py(l,i);Xo(t,e,d,Zn(t))}else Xo(t,e,i,Zn(t))}catch(p){Xo(t,e,{then:function(){},status:"rejected",reason:p},Zn())}finally{ut.p=s,r!==null&&o.types!==null&&(r.types=o.types),Oe.T=r}}function Gy(){}function kd(t,e,n,i){if(t.tag!==5)throw Error(re(476));var a=Gv(t).queue;Hv(t,a,e,As,n===null?Gy:function(){return Vv(t),n(i)})}function Gv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:As,baseState:As,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:As},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vv(t){var e=Gv(t);e.next===null&&(e=t.alternate.memoizedState),Xo(t,e.next.queue,{},Zn())}function Ip(){return hn(cl)}function kv(){return Xt().memoizedState}function Xv(){return Xt().memoizedState}function Vy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Zn();t=Za(n);var i=Ka(e,t,n);i!==null&&(Nn(i,e,n),Go(i,e,n)),e={cache:yp()},t.payload=e;return}e=e.return}}function ky(t,e,n){var i=Zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(t)?qv(e,n):(n=vp(t,e,n,i),n!==null&&(Nn(n,t,i),Yv(n,e,i)))}function Wv(t,e,n){var i=Zn();Xo(t,e,n,i)}function Xo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(t))qv(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Kn(o,r))return Lu(t,e,a,0),St===null&&Nu(),!1}catch{}finally{}if(n=vp(t,e,a,i),n!==null)return Nn(n,t,i),Yv(n,e,i),!0}return!1}function Fp(t,e,n,i){if(i={lane:2,revertLane:Yp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fu(t)){if(e)throw Error(re(479))}else e=vp(t,n,i,2),e!==null&&Nn(e,t,2)}function Fu(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function qv(t,e){Dr=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yv(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,N_(t,n)}}var rl={readContext:hn,use:zu,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft};rl.useEffectEvent=Ft;var Zv={readContext:hn,use:zu,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:d0,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ac(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){Ac(4,2,t,e)},useMemo:function(t,e){var n=En();e=e===void 0?null:e;var i=t();if(Os){Ha(!0);try{t()}finally{Ha(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=En();if(n!==void 0){var a=n(e);if(Os){Ha(!0);try{n(e)}finally{Ha(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=ky.bind(null,Ge,t),[i.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:function(t){t=Gd(t);var e=t.queue,n=Wv.bind(null,Ge,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Pp,useDeferredValue:function(t,e){var n=En();return zp(n,t,e)},useTransition:function(){var t=Gd(!1);return t=Hv.bind(null,Ge,t.queue,!0,!1),En().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ge,a=En();if(nt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),St===null)throw Error(re(349));et&127||Mv(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,d0(Ev.bind(null,i,s,t),[t]),i.flags|=2048,Hr(9,{destroy:void 0},yv.bind(null,i,s,n,e),null),n},useId:function(){var t=En(),e=St.identifierPrefix;if(nt){var n=Di,i=wi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=eu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=zy++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Ip,useFormState:c0,useActionState:c0,useOptimistic:function(t){var e=En();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Fp.bind(null,Ge,!0,n),n.dispatch=e,[t,e]},useMemoCache:Np,useCacheRefresh:function(){return En().memoizedState=Vy.bind(null,Ge)},useEffectEvent:function(t){var e=En(),n={impl:t};return e.memoizedState=n,function(){if(ct&2)throw Error(re(440));return n.impl.apply(void 0,arguments)}}},Bp={readContext:hn,use:zu,useCallback:Iv,useContext:hn,useEffect:Op,useImperativeHandle:zv,useInsertionEffect:Lv,useLayoutEffect:Ov,useMemo:Fv,useReducer:Tc,useRef:Uv,useState:function(){return Tc(ma)},useDebugValue:Pp,useDeferredValue:function(t,e){var n=Xt();return Bv(n,_t.memoizedState,t,e)},useTransition:function(){var t=Tc(ma)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:bl(t),e]},useSyncExternalStore:Sv,useId:kv,useHostTransitionStatus:Ip,useFormState:u0,useActionState:u0,useOptimistic:function(t,e){var n=Xt();return Av(n,_t,t,e)},useMemoCache:Np,useCacheRefresh:Xv};Bp.useEffectEvent=Nv;var Kv={readContext:hn,use:zu,useCallback:Iv,useContext:hn,useEffect:Op,useImperativeHandle:zv,useInsertionEffect:Lv,useLayoutEffect:Ov,useMemo:Fv,useReducer:hf,useRef:Uv,useState:function(){return hf(ma)},useDebugValue:Pp,useDeferredValue:function(t,e){var n=Xt();return _t===null?zp(n,t,e):Bv(n,_t.memoizedState,t,e)},useTransition:function(){var t=hf(ma)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:bl(t),e]},useSyncExternalStore:Sv,useId:kv,useHostTransitionStatus:Ip,useFormState:f0,useActionState:f0,useOptimistic:function(t,e){var n=Xt();return _t!==null?Av(n,_t,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Np,useCacheRefresh:Xv};Kv.useEffectEvent=Nv;function pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zn(),a=Za(i);a.payload=e,n!=null&&(a.callback=n),e=Ka(t,a,i),e!==null&&(Nn(e,t,i),Go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zn(),a=Za(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ka(t,a,i),e!==null&&(Nn(e,t,i),Go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zn(),i=Za(n);i.tag=2,e!=null&&(i.callback=e),e=Ka(t,i,n),e!==null&&(Nn(e,t,n),Go(e,t,n))}};function h0(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!tl(n,i)||!tl(a,s):!0}function p0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xd.enqueueReplaceState(e,e.state,null)}function Ps(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=wt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function Qv(t){qc(t)}function jv(t){console.error(t)}function Jv(t){qc(t)}function tu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function m0(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Wd(t,e,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){tu(t,e)},n}function $v(t){return t=Za(t),t.tag=3,t}function ex(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){m0(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){m0(e,n,i),typeof a!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Xy(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&$r(e,n,a,!0),n=Qn.current,n!==null){switch(n.tag){case 31:case 13:return ci===null?ru():n.alternate===null&&Bt===0&&(Bt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Qc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Tf(t,i,a)),!1;case 22:return n.flags|=65536,i===Qc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Tf(t,i,a)),!1}throw Error(re(435,n.tag))}return Tf(t,i,a),ru(),!1}if(nt)return e=Qn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Nd&&(t=Error(re(422),{cause:i}),il(oi(t,n)))):(i!==Nd&&(e=Error(re(423),{cause:i}),il(oi(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=oi(i,n),a=Wd(t.stateNode,i,a),df(t,a),Bt!==4&&(Bt=2)),!1;var s=Error(re(520),{cause:i});if(s=oi(s,n),Yo===null?Yo=[s]:Yo.push(s),Bt!==4&&(Bt=2),e===null)return!0;i=oi(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Wd(n.stateNode,i,t),df(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Qa===null||!Qa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$v(a),ex(a,t,n,i),df(n,a),!1}n=n.return}while(n!==null);return!1}var Hp=Error(re(461)),Qt=!1;function cn(t,e,n,i){e.child=t===null?pv(e,null,n,i):Ls(e,t.child,n,i)}function g0(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ns(e),i=Cp(t,e,n,r,s,a),o=wp(),t!==null&&!Qt?(Dp(t,e,a),ga(t,e,a)):(nt&&o&&Sp(e),e.flags|=1,cn(t,e,i,a),e.child)}function _0(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,tx(t,e,s,i,a)):(t=Ec(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Gp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(r,i)&&t.ref===e.ref)return ga(t,e,a)}return e.flags|=1,t=la(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(tl(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,Gp(t,a))t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,ga(t,e,a)}return qd(t,e,n,i,a)}function nx(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return v0(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(e,s!==null?s.cachePool:null),s!==null?r0(e,s):Bd(),_v(e);else return i=e.lanes=536870912,v0(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(bc(e,s.cachePool),r0(e,s),Ia(),e.memoizedState=null):(t!==null&&bc(e,null),Bd(),Ia());return cn(t,e,a,n),e.child}function No(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function v0(t,e,n,i,a){var s=Ep();return s=s===null?null:{parent:Kt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&bc(e,null),Bd(),_v(e),t!==null&&$r(t,e,i,!0),e.childLanes=a,null}function Rc(t,e){return e=nu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function x0(t,e,n){return Ls(e,t.child,null,n),t=Rc(e,e.pendingProps),t.flags|=2,Gn(e),e.memoizedState=null,t}function Wy(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(nt){if(i.mode==="hidden")return t=Rc(e,i),e.lanes=536870912,No(null,t);if(Hd(e),(t=Rt)?(t=Zx(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=ov(t),n.return=e,e.child=n,dn=e,Rt=null)):t=null,t===null)throw ns(e);return e.lanes=536870912,null}return Rc(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Hd(e),a)if(e.flags&256)e.flags&=-257,e=x0(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(re(558));else if(Qt||$r(t,e,n,!1),a=(n&t.childLanes)!==0,Qt||a){if(i=St,i!==null&&(r=L_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Gs(t,r),Nn(i,t,r),Hp;ru(),e=x0(t,e,n)}else t=s.treeContext,Rt=ui(r.nextSibling),dn=e,nt=!0,Ya=null,li=!1,t!==null&&cv(e,t),e=Rc(e,i),e.flags|=4096;return e}return t=la(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Cc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(re(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function qd(t,e,n,i,a){return Ns(e),n=Cp(t,e,n,i,void 0,a),i=wp(),t!==null&&!Qt?(Dp(t,e,a),ga(t,e,a)):(nt&&i&&Sp(e),e.flags|=1,cn(t,e,n,a),e.child)}function S0(t,e,n,i,a,s){return Ns(e),e.updateQueue=null,n=xv(e,i,n,a),vv(t),i=wp(),t!==null&&!Qt?(Dp(t,e,s),ga(t,e,s)):(nt&&i&&Sp(e),e.flags|=1,cn(t,e,n,s),e.child)}function M0(t,e,n,i,a){if(Ns(e),e.stateNode===null){var s=Mr,r=n.contextType;typeof r=="object"&&r!==null&&(s=hn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},Tp(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?hn(r):Mr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(pf(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Xd.enqueueReplaceState(s,s.state,null),ko(e,i,s,a),Vo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=Ps(n,o);s.props=l;var c=s.context,d=n.contextType;r=Mr,typeof d=="object"&&d!==null&&(r=hn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&p0(e,s,i,r),Oa=!1;var u=e.memoizedState;s.state=u,ko(e,i,s,a),Vo(),c=e.memoizedState,o||u!==c||Oa?(typeof p=="function"&&(pf(e,n,p,i),c=e.memoizedState),(l=Oa||h0(e,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Id(t,e),r=e.memoizedProps,d=Ps(n,r),s.props=d,p=e.pendingProps,u=s.context,c=n.contextType,l=Mr,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&p0(e,s,i,l),Oa=!1,u=e.memoizedState,s.state=u,ko(e,i,s,a),Vo();var h=e.memoizedState;r!==p||u!==h||Oa||t!==null&&t.dependencies!==null&&Kc(t.dependencies)?(typeof o=="function"&&(pf(e,n,o,i),h=e.memoizedState),(d=Oa||h0(e,n,d,i,u,h,l)||t!==null&&t.dependencies!==null&&Kc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),s.props=i,s.state=h,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,Cc(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=Ls(e,t.child,null,a),e.child=Ls(e,null,n,a)):cn(t,e,n,a),e.memoizedState=s.state,t=e.child):t=ga(t,e,a),t}function y0(t,e,n,i){return Us(),e.flags|=256,cn(t,e,n,i),e.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:fv()}}function _f(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Xn),t}function ix(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(nt){if(a?za(e):Ia(),(t=Rt)?(t=Zx(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=ov(t),n.return=e,e.child=n,dn=e,Rt=null)):t=null,t===null)throw ns(e);return rh(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ia(),a=e.mode,o=nu({mode:"hidden",children:o},a),i=Rs(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=gf(n),i.childLanes=_f(t,r,n),e.memoizedState=mf,No(null,i)):(za(e),Yd(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(za(e),e.flags&=-257,e=vf(t,e,n)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,e=null):(Ia(),o=i.fallback,a=e.mode,i=nu({mode:"visible",children:i.children},a),o=Rs(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Ls(e,t.child,null,n),i=e.child,i.memoizedState=gf(n),i.childLanes=_f(t,r,n),e.memoizedState=mf,e=No(null,i));else if(za(e),rh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(re(419)),i.stack="",i.digest=r,il({value:i,source:null,stack:null}),e=vf(t,e,n)}else if(Qt||$r(t,e,n,!1),r=(n&t.childLanes)!==0,Qt||r){if(r=St,r!==null&&(i=L_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Gs(t,i),Nn(r,t,i),Hp;sh(o)||ru(),e=vf(t,e,n)}else sh(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Rt=ui(o.nextSibling),dn=e,nt=!0,Ya=null,li=!1,t!==null&&cv(e,t),e=Yd(e,i.children),e.flags|=4096);return e}return a?(Ia(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=la(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=la(c,o):(o=Rs(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,No(null,i),i=e.child,o=t.child.memoizedState,o===null?o=gf(n):(a=o.cachePool,a!==null?(l=Kt._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=fv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=_f(t,r,n),e.memoizedState=mf,No(t.child,i)):(za(e),n=t.child,t=n.sibling,n=la(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Yd(t,e){return e=nu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nu(t,e){return t=Vn(22,t,null,e),t.lanes=0,t}function vf(t,e,n){return Ls(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Od(t.return,e,n)}function xf(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function ax(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=kt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Et(kt,r),cn(t,e,i,n),i=nt?nl:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),xf(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Jc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}xf(e,!0,n,null,s,i);break;case"together":xf(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ga(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))if(t!==null){if($r(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=la(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=la(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Kc(t)))}function qy(t,e,n){switch(e.tag){case 3:Vc(e,e.stateNode.containerInfo),Pa(e,Kt,t.memoizedState.cache),Us();break;case 27:case 5:Md(e);break;case 4:Vc(e,e.stateNode.containerInfo);break;case 10:Pa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Hd(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(za(e),e.flags|=128,null):n&e.child.childLanes?ix(t,e,n):(za(e),t=ga(t,e,n),t!==null?t.sibling:null);za(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||($r(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return ax(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Et(kt,kt.current),i)break;return null;case 22:return e.lanes=0,nx(t,e,n,e.pendingProps);case 24:Pa(e,Kt,t.memoizedState.cache)}return ga(t,e,n)}function sx(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!Gp(t,n)&&!(e.flags&128))return Qt=!1,qy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,nt&&e.flags&1048576&&lv(e,nl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=xs(e.elementType),e.type=t,typeof t=="function")xp(t)?(i=Ps(t,i),e.tag=1,e=M0(null,e,t,i,n)):(e.tag=0,e=qd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===sp){e.tag=11,e=g0(null,e,t,i,n);break e}else if(a===rp){e.tag=14,e=_0(null,e,t,i,n);break e}}throw e=xd(t)||t,Error(re(306,e,""))}}return e;case 0:return qd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Ps(i,e.pendingProps),M0(t,e,i,a,n);case 3:e:{if(Vc(e,e.stateNode.containerInfo),t===null)throw Error(re(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,Id(t,e),ko(e,i,null,n);var r=e.memoizedState;if(i=r.cache,Pa(e,Kt,i),i!==s.cache&&Pd(e,[Kt],n,!0),Vo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=y0(t,e,i,n);break e}else if(i!==a){a=oi(Error(re(424)),e),il(a),e=y0(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=ui(t.firstChild),dn=e,nt=!0,Ya=null,li=!0,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Us(),i===a){e=ga(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 26:return Cc(t,e),t===null?(n=k0(e.type,null,e.pendingProps,null))?e.memoizedState=n:nt||(n=e.type,t=e.pendingProps,i=uu(qa.current).createElement(n),i[fn]=e,i[On]=t,mn(i,n,t),rn(i),e.stateNode=i):e.memoizedState=k0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Md(e),t===null&&nt&&(i=e.stateNode=Kx(e.type,e.pendingProps,qa.current),dn=e,li=!0,a=Rt,ls(e.type)?(oh=a,Rt=ui(i.firstChild)):Rt=a),cn(t,e,e.pendingProps.children,n),Cc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&nt&&((a=i=Rt)&&(i=yE(i,e.type,e.pendingProps,li),i!==null?(e.stateNode=i,dn=e,Rt=ui(i.firstChild),li=!1,a=!0):a=!1),a||ns(e)),Md(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,ih(a,s)?i=null:r!==null&&ih(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Cp(t,e,Iy,null,null,n),cl._currentValue=a),Cc(t,e),cn(t,e,i,n),e.child;case 6:return t===null&&nt&&((t=n=Rt)&&(n=EE(n,e.pendingProps,li),n!==null?(e.stateNode=n,dn=e,Rt=null,t=!0):t=!1),t||ns(e)),null;case 13:return ix(t,e,n);case 4:return Vc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):cn(t,e,i,n),e.child;case 11:return g0(t,e,e.type,e.pendingProps,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Pa(e,e.type,i.value),cn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,Ns(e),a=hn(a),i=i(a),e.flags|=1,cn(t,e,i,n),e.child;case 14:return _0(t,e,e.type,e.pendingProps,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 19:return ax(t,e,n);case 31:return Wy(t,e,n);case 22:return nx(t,e,n,e.pendingProps);case 24:return Ns(e),i=hn(Kt),t===null?(a=Ep(),a===null&&(a=St,s=yp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},Tp(e),Pa(e,Kt,a)):(t.lanes&n&&(Id(t,e),ko(e,null,null,n),Vo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Pa(e,Kt,i)):(i=s.cache,Pa(e,Kt,i),i!==a.cache&&Pd(e,[Kt],n,!0))),cn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(re(156,e.tag))}function Wi(t){t.flags|=4}function Sf(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(wx())t.flags|=8192;else throw ws=Qc,bp}else t.flags&=-16777217}function b0(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Jx(e))if(wx())t.flags|=8192;else throw ws=Qc,bp}function Gl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?D_():536870912,t.lanes|=e,Gr|=e)}function go(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yy(t,e,n){var i=e.pendingProps;switch(Mp(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ca(Kt),Pr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ys(e)?Wi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ff())),At(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Wi(e),s!==null?(At(e),b0(e,s)):(At(e),Sf(e,a,null,i,n))):s?s!==t.memoizedState?(Wi(e),At(e),b0(e,s)):(At(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Wi(e),At(e),Sf(e,a,t,i,n)),null;case 27:if(kc(e),n=qa.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(!i){if(e.stateNode===null)throw Error(re(166));return At(e),null}t=Oi.current,Ys(e)?$m(e):(t=Kx(a,i,n),e.stateNode=t,Wi(e))}return At(e),null;case 5:if(kc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(!i){if(e.stateNode===null)throw Error(re(166));return At(e),null}if(s=Oi.current,Ys(e))$m(e);else{var r=uu(qa.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[fn]=e,s[On]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(mn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Wi(e)}}return At(e),Sf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Wi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=qa.current,Ys(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=dn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[fn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Wx(t.nodeValue,n)),t||ns(e,!0)}else t=uu(t).createTextNode(i),t[fn]=e,e.stateNode=t}return At(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ys(e),n!==null){if(t===null){if(!i)throw Error(re(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(557));t[fn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),t=!1}else n=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Gn(e),e):(Gn(e),null);if(e.flags&128)throw Error(re(558))}return At(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Ys(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(re(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(re(317));a[fn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Gn(e),e):(Gn(e),null)}return Gn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Gl(e,e.updateQueue),At(e),null);case 4:return Pr(),t===null&&Zp(e.stateNode.containerInfo),At(e),null;case 10:return ca(e.type),At(e),null;case 19:if(on(kt),i=e.memoizedState,i===null)return At(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)go(i,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jc(t),s!==null){for(e.flags|=128,go(i,!1),t=s.updateQueue,e.updateQueue=t,Gl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)rv(n,t),n=n.sibling;return Et(kt,kt.current&1|2),nt&&ea(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Wn()>au&&(e.flags|=128,a=!0,go(i,!1),e.lanes=4194304)}else{if(!a)if(t=Jc(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Gl(e,t),go(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!nt)return At(e),null}else 2*Wn()-i.renderingStartTime>au&&n!==536870912&&(e.flags|=128,a=!0,go(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Wn(),t.sibling=null,n=kt.current,Et(kt,a?n&1|2:n&1),nt&&ea(e,i.treeForkCount),t):(At(e),null);case 22:case 23:return Gn(e),Ap(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),n=e.updateQueue,n!==null&&Gl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&on(Cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ca(Kt),At(e),null;case 25:return null;case 30:return null}throw Error(re(156,e.tag))}function Zy(t,e){switch(Mp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(Kt),Pr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return kc(e),null;case 31:if(e.memoizedState!==null){if(Gn(e),e.alternate===null)throw Error(re(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Gn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return on(kt),null;case 4:return Pr(),null;case 10:return ca(e.type),null;case 22:case 23:return Gn(e),Ap(),t!==null&&on(Cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ca(Kt),null;case 25:return null;default:return null}}function rx(t,e){switch(Mp(e),e.tag){case 3:ca(Kt),Pr();break;case 26:case 27:case 5:kc(e);break;case 4:Pr();break;case 31:e.memoizedState!==null&&Gn(e);break;case 13:Gn(e);break;case 19:on(kt);break;case 10:ca(e.type);break;case 22:case 23:Gn(e),Ap(),t!==null&&on(Cs);break;case 24:ca(Kt)}}function Tl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){pt(e,e.return,o)}}function is(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){pt(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){pt(e,e.return,d)}}function ox(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{gv(e,n)}catch(i){pt(t,t.return,i)}}}function lx(t,e,n){n.props=Ps(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){pt(t,e,i)}}function Wo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){pt(t,e,a)}}function Ui(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){pt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){pt(t,e,a)}else n.current=null}function cx(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){pt(t,t.return,a)}}function Mf(t,e,n){try{var i=t.stateNode;gE(i,t.type,n,e),i[On]=e}catch(a){pt(t,t.return,a)}}function ux(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ls(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ux(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=aa));else if(i!==4&&(i===27&&ls(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function iu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ls(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(iu(t,e,n),t=t.sibling;t!==null;)iu(t,e,n),t=t.sibling}function fx(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);mn(e,i,n),e[fn]=t,e[On]=n}catch(s){pt(t,t.return,s)}}var ta=!1,Zt=!1,Ef=!1,T0=typeof WeakSet=="function"?WeakSet:Set,sn=null;function Ky(t,e){if(t=t.containerInfo,th=pu,t=J_(t),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,d=0,p=t,u=null;t:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===t)break t;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:t,selectionRange:n},pu=!1,sn=e;sn!==null;)if(e=sn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,sn=t;else for(;sn!==null;){switch(e=sn,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var S=Ps(n.type,a);t=i.getSnapshotBeforeUpdate(S,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(E){pt(n,n.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ah(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ah(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(re(163))}if(t=e.sibling,t!==null){t.return=e.return,sn=t;break}sn=e.return}}function dx(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yi(t,n),i&4&&Tl(5,n);break;case 1:if(Yi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){pt(n,n.return,r)}else{var a=Ps(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){pt(n,n.return,r)}}i&64&&ox(n),i&512&&Wo(n,n.return);break;case 3:if(Yi(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{gv(t,e)}catch(r){pt(n,n.return,r)}}break;case 27:e===null&&i&4&&fx(n);case 26:case 5:Yi(t,n),e===null&&i&4&&cx(n),i&512&&Wo(n,n.return);break;case 12:Yi(t,n);break;case 31:Yi(t,n),i&4&&mx(t,n);break;case 13:Yi(t,n),i&4&&gx(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=aE.bind(null,n),bE(t,n))));break;case 22:if(i=n.memoizedState!==null||ta,!i){e=e!==null&&e.memoizedState!==null||Zt,a=ta;var s=Zt;ta=i,(Zt=e)&&!s?$i(t,n,(n.subtreeFlags&8772)!==0):Yi(t,n),ta=a,Zt=s}break;case 30:break;default:Yi(t,n)}}function hx(t){var e=t.alternate;e!==null&&(t.alternate=null,hx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&up(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,Dn=!1;function qi(t,e,n){for(n=n.child;n!==null;)px(t,e,n),n=n.sibling}function px(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 26:Zt||Ui(n,e),qi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zt||Ui(n,e);var i=Nt,a=Dn;ls(n.type)&&(Nt=n.stateNode,Dn=!1),qi(t,e,n),Ko(n.stateNode),Nt=i,Dn=a;break;case 5:Zt||Ui(n,e);case 6:if(i=Nt,a=Dn,Nt=null,qi(t,e,n),Nt=i,Dn=a,Nt!==null)if(Dn)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(n.stateNode)}catch(s){pt(n,e,s)}else try{Nt.removeChild(n.stateNode)}catch(s){pt(n,e,s)}break;case 18:Nt!==null&&(Dn?(t=Nt,F0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Wr(t)):F0(Nt,n.stateNode));break;case 4:i=Nt,a=Dn,Nt=n.stateNode.containerInfo,Dn=!0,qi(t,e,n),Nt=i,Dn=a;break;case 0:case 11:case 14:case 15:is(2,n,e),Zt||is(4,n,e),qi(t,e,n);break;case 1:Zt||(Ui(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lx(n,e,i)),qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:Zt=(i=Zt)||n.memoizedState!==null,qi(t,e,n),Zt=i;break;default:qi(t,e,n)}}function mx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wr(t)}catch(n){pt(e,e.return,n)}}}function gx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wr(t)}catch(n){pt(e,e.return,n)}}function Qy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new T0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new T0),e;default:throw Error(re(435,t.tag))}}function Vl(t,e){var n=Qy(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=sE.bind(null,t,i);i.then(a,a)}})}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ls(o.type)){Nt=o.stateNode,Dn=!1;break e}break;case 5:Nt=o.stateNode,Dn=!1;break e;case 3:case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(re(160));px(s,r,a),Nt=null,Dn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)_x(e,t),e=e.sibling}var xi=null;function _x(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Rn(e,t),Cn(t),i&4&&(is(3,t,t.return),Tl(3,t),is(5,t,t.return));break;case 1:Rn(e,t),Cn(t),i&512&&(Zt||n===null||Ui(n,n.return)),i&64&&ta&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=xi;if(Rn(e,t),Cn(t),i&512&&(Zt||n===null||Ui(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Ml]||s[fn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),mn(s,i,n),s[fn]=t,rn(s),i=s;break e;case"link":var r=W0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=W0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;default:throw Error(re(468,i))}s[fn]=t,rn(s),i=s}t.stateNode=i}else q0(a,t.type,t.stateNode);else t.stateNode=X0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?q0(a,t.type,t.stateNode):X0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,n.memoizedProps)}break;case 27:Rn(e,t),Cn(t),i&512&&(Zt||n===null||Ui(n,n.return)),n!==null&&i&4&&Mf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Rn(e,t),Cn(t),i&512&&(Zt||n===null||Ui(n,n.return)),t.flags&32){a=t.stateNode;try{Ir(a,"")}catch(S){pt(t,t.return,S)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Mf(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Ef=!0);break;case 6:if(Rn(e,t),Cn(t),i&4){if(t.stateNode===null)throw Error(re(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(S){pt(t,t.return,S)}}break;case 3:if(Uc=null,a=xi,xi=fu(e.containerInfo),Rn(e,t),xi=a,Cn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(e.containerInfo)}catch(S){pt(t,t.return,S)}Ef&&(Ef=!1,vx(t));break;case 4:i=xi,xi=fu(t.stateNode.containerInfo),Rn(e,t),Cn(t),xi=i;break;case 12:Rn(e,t),Cn(t);break;case 31:Rn(e,t),Cn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vl(t,i)));break;case 13:Rn(e,t),Cn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bu=Wn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vl(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ta,d=Zt;if(ta=c||a,Zt=d||l,Rn(e,t),Zt=d,ta=c,Cn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||ta||Zt||Ss(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(S){pt(l,l.return,S)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(S){pt(l,l.return,S)}}}else if(e.tag===18){if(n===null){l=e;try{var h=l.stateNode;a?B0(h,!0):B0(l.stateNode,!1)}catch(S){pt(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Vl(t,n))));break;case 19:Rn(e,t),Cn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Vl(t,i)));break;case 30:break;case 21:break;default:Rn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(ux(i)){n=i;break}i=i.return}if(n==null)throw Error(re(160));switch(n.tag){case 27:var a=n.stateNode,s=yf(t);iu(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Ir(r,""),n.flags&=-33);var o=yf(t);iu(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=yf(t);Zd(t,c,l);break;default:throw Error(re(161))}}catch(d){pt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;vx(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Yi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dx(t,e.alternate,e),e=e.sibling}function Ss(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:is(4,e,e.return),Ss(e);break;case 1:Ui(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&lx(e,e.return,n),Ss(e);break;case 27:Ko(e.stateNode);case 26:case 5:Ui(e,e.return),Ss(e);break;case 22:e.memoizedState===null&&Ss(e);break;case 30:Ss(e);break;default:Ss(e)}t=t.sibling}}function $i(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:$i(a,s,n),Tl(4,s);break;case 1:if($i(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){pt(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)mv(l[a],o)}catch(c){pt(i,i.return,c)}}n&&r&64&&ox(s),Wo(s,s.return);break;case 27:fx(s);case 26:case 5:$i(a,s,n),n&&i===null&&r&4&&cx(s),Wo(s,s.return);break;case 12:$i(a,s,n);break;case 31:$i(a,s,n),n&&r&4&&mx(a,s);break;case 13:$i(a,s,n),n&&r&4&&gx(a,s);break;case 22:s.memoizedState===null&&$i(a,s,n),Wo(s,s.return);break;case 30:break;default:$i(a,s,n)}e=e.sibling}}function Vp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&El(n))}function kp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&El(t))}function mi(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xx(t,e,n,i),e=e.sibling}function xx(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:mi(t,e,n,i),a&2048&&Tl(9,e);break;case 1:mi(t,e,n,i);break;case 3:mi(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&El(t)));break;case 12:if(a&2048){mi(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){pt(e,e.return,l)}}else mi(t,e,n,i);break;case 31:mi(t,e,n,i);break;case 13:mi(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?mi(t,e,n,i):qo(t,e):s._visibility&2?mi(t,e,n,i):(s._visibility|=2,ur(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Vp(r,e);break;case 24:mi(t,e,n,i),a&2048&&kp(e.alternate,e);break;default:mi(t,e,n,i)}}function ur(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ur(s,r,o,l,a),Tl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?ur(s,r,o,l,a):qo(s,r):(d._visibility|=2,ur(s,r,o,l,a)),a&&c&2048&&Vp(r.alternate,r);break;case 24:ur(s,r,o,l,a),a&&c&2048&&kp(r.alternate,r);break;default:ur(s,r,o,l,a)}e=e.sibling}}function qo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:qo(n,i),a&2048&&Vp(i.alternate,i);break;case 24:qo(n,i),a&2048&&kp(i.alternate,i);break;default:qo(n,i)}e=e.sibling}}var Lo=8192;function Zs(t,e,n){if(t.subtreeFlags&Lo)for(t=t.child;t!==null;)Sx(t,e,n),t=t.sibling}function Sx(t,e,n){switch(t.tag){case 26:Zs(t,e,n),t.flags&Lo&&t.memoizedState!==null&&zE(n,xi,t.memoizedState,t.memoizedProps);break;case 5:Zs(t,e,n);break;case 3:case 4:var i=xi;xi=fu(t.stateNode.containerInfo),Zs(t,e,n),xi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Lo,Lo=16777216,Zs(t,e,n),Lo=i):Zs(t,e,n));break;default:Zs(t,e,n)}}function Mx(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function _o(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];sn=i,Ex(i,t)}Mx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yx(t),t=t.sibling}function yx(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&is(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wc(t)):_o(t);break;default:_o(t)}}function wc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];sn=i,Ex(i,t)}Mx(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:is(8,e,e.return),wc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,wc(e));break;default:wc(e)}t=t.sibling}}function Ex(t,e){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:is(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:El(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else e:for(n=t;sn!==null;){i=sn;var a=i.sibling,s=i.return;if(hx(i),i===n){sn=null;break e}if(a!==null){a.return=s,sn=a;break e}sn=s}}}var jy={getCacheForType:function(t){var e=hn(Kt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return hn(Kt).controller.signal}},Jy=typeof WeakMap=="function"?WeakMap:Map,ct=0,St=null,je=null,et=0,ht=0,Hn=null,Va=!1,to=!1,Xp=!1,_a=0,Bt=0,as=0,Ds=0,Wp=0,Xn=0,Gr=0,Yo=null,Un=null,Kd=!1,Bu=0,bx=0,au=1/0,su=null,Qa=null,$t=0,ja=null,Vr=null,ua=0,Qd=0,jd=null,Tx=null,Zo=0,Jd=null;function Zn(){return ct&2&&et!==0?et&-et:Oe.T!==null?Yp():O_()}function Ax(){if(Xn===0)if(!(et&536870912)||nt){var t=Ol;Ol<<=1,!(Ol&3932160)&&(Ol=262144),Xn=t}else Xn=536870912;return t=Qn.current,t!==null&&(t.flags|=32),Xn}function Nn(t,e,n){(t===St&&(ht===2||ht===9)||t.cancelPendingCommit!==null)&&(kr(t,0),ka(t,et,Xn,!1)),Sl(t,n),(!(ct&2)||t!==St)&&(t===St&&(!(ct&2)&&(Ds|=n),Bt===4&&ka(t,et,Xn,!1)),Gi(t))}function Rx(t,e,n){if(ct&6)throw Error(re(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||xl(t,e),a=i?tE(t,e):bf(t,e,!0),s=i;do{if(a===0){to&&!i&&ka(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!$y(n)){a=bf(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(kr(o,r).flags|=256),r=bf(o,r,!1),r!==2){if(Xp&&!l){o.errorRecoveryDisabledLanes|=s,Ds|=s,a=4;break e}s=Un,Un=a,s!==null&&(Un===null?Un=s:Un.push.apply(Un,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){kr(t,0),ka(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(re(345));case 4:if((e&4194048)!==e)break;case 6:ka(i,e,Xn,!Va);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(re(329))}if((e&62914560)===e&&(a=Bu+300-Wn(),10<a)){if(ka(i,e,Xn,!Va),Cu(i,0,!0)!==0)break e;ua=e,i.timeoutHandle=Yx(A0.bind(null,i,n,Un,su,Kd,e,Xn,Ds,Gr,Va,s,"Throttled",-0,0),a);break e}A0(i,n,Un,su,Kd,e,Xn,Ds,Gr,Va,s,null,-0,0)}}break}while(1);Gi(t)}function A0(t,e,n,i,a,s,r,o,l,c,d,p,u,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Sx(e,s,p);var S=(s&62914560)===s?Bu-Wn():(s&4194048)===s?bx-Wn():0;if(S=IE(p,S),S!==null){ua=s,t.cancelPendingCommit=S(C0.bind(null,t,e,s,n,i,a,r,o,l,d,p,null,u,h)),ka(t,s,r,!c);return}}C0(t,e,s,n,i,a,r,o,l)}function $y(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Kn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ka(t,e,n,i){e&=~Wp,e&=~Ds,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Yn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&U_(t,n,e)}function Hu(){return ct&6?!0:(Al(0,!1),!1)}function qp(){if(je!==null){if(ht===0)var t=je.return;else t=je,sa=Vs=null,Up(t),wr=null,al=0,t=je;for(;t!==null;)rx(t.alternate,t),t=t.return;je=null}}function kr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,xE(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ua=0,qp(),St=t,je=n=la(t.current,null),et=e,ht=0,Hn=null,Va=!1,to=xl(t,e),Xp=!1,Gr=Xn=Wp=Ds=as=Bt=0,Un=Yo=null,Kd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Yn(i),s=1<<a;e|=t[a],i&=~s}return _a=e,Nu(),n}function Cx(t,e){Ge=null,Oe.H=rl,e===eo||e===Ou?(e=a0(),ht=3):e===bp?(e=a0(),ht=4):ht=e===Hp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Hn=e,je===null&&(Bt=1,tu(t,oi(e,t.current)))}function wx(){var t=Qn.current;return t===null?!0:(et&4194048)===et?ci===null:(et&62914560)===et||et&536870912?t===ci:!1}function Dx(){var t=Oe.H;return Oe.H=rl,t===null?rl:t}function Ux(){var t=Oe.A;return Oe.A=jy,t}function ru(){Bt=4,Va||(et&4194048)!==et&&Qn.current!==null||(to=!0),!(as&134217727)&&!(Ds&134217727)||St===null||ka(St,et,Xn,!1)}function bf(t,e,n){var i=ct;ct|=2;var a=Dx(),s=Ux();(St!==t||et!==e)&&(su=null,kr(t,e)),e=!1;var r=Bt;e:do try{if(ht!==0&&je!==null){var o=je,l=Hn;switch(ht){case 8:qp(),r=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var c=ht;if(ht=0,Hn=null,br(t,o,l,c),n&&to){r=0;break e}break;default:c=ht,ht=0,Hn=null,br(t,o,l,c)}}eE(),r=Bt;break}catch(d){Cx(t,d)}while(1);return e&&t.shellSuspendCounter++,sa=Vs=null,ct=i,Oe.H=a,Oe.A=s,je===null&&(St=null,et=0,Nu()),r}function eE(){for(;je!==null;)Nx(je)}function tE(t,e){var n=ct;ct|=2;var i=Dx(),a=Ux();St!==t||et!==e?(su=null,au=Wn()+500,kr(t,e)):to=xl(t,e);e:do try{if(ht!==0&&je!==null){e=je;var s=Hn;t:switch(ht){case 1:ht=0,Hn=null,br(t,e,s,1);break;case 2:case 9:if(i0(s)){ht=0,Hn=null,R0(e);break}e=function(){ht!==2&&ht!==9||St!==t||(ht=7),Gi(t)},s.then(e,e);break e;case 3:ht=7;break e;case 4:ht=5;break e;case 7:i0(s)?(ht=0,Hn=null,R0(e)):(ht=0,Hn=null,br(t,e,s,7));break;case 5:var r=null;switch(je.tag){case 26:r=je.memoizedState;case 5:case 27:var o=je;if(r?Jx(r):o.stateNode.complete){ht=0,Hn=null;var l=o.sibling;if(l!==null)je=l;else{var c=o.return;c!==null?(je=c,Gu(c)):je=null}break t}}ht=0,Hn=null,br(t,e,s,5);break;case 6:ht=0,Hn=null,br(t,e,s,6);break;case 8:qp(),Bt=6;break e;default:throw Error(re(462))}}nE();break}catch(d){Cx(t,d)}while(1);return sa=Vs=null,Oe.H=i,Oe.A=a,ct=n,je!==null?0:(St=null,et=0,Nu(),Bt)}function nE(){for(;je!==null&&!TM();)Nx(je)}function Nx(t){var e=sx(t.alternate,t,_a);t.memoizedProps=t.pendingProps,e===null?Gu(t):je=e}function R0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=S0(n,e,e.pendingProps,e.type,void 0,et);break;case 11:e=S0(n,e,e.pendingProps,e.type.render,e.ref,et);break;case 5:Up(e);default:rx(n,e),e=je=rv(e,_a),e=sx(n,e,_a)}t.memoizedProps=t.pendingProps,e===null?Gu(t):je=e}function br(t,e,n,i){sa=Vs=null,Up(e),wr=null,al=0;var a=e.return;try{if(Xy(t,a,e,n,et)){Bt=1,tu(t,oi(n,t.current)),je=null;return}}catch(s){if(a!==null)throw je=a,s;Bt=1,tu(t,oi(n,t.current)),je=null;return}e.flags&32768?(nt||i===1?t=!0:to||et&536870912?t=!1:(Va=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lx(e,t)):Gu(e)}function Gu(t){var e=t;do{if(e.flags&32768){Lx(e,Va);return}t=e.return;var n=Yy(e.alternate,e,_a);if(n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Bt===0&&(Bt=5)}function Lx(t,e){do{var n=Zy(t.alternate,t);if(n!==null){n.flags&=32767,je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){je=t;return}je=t=n}while(t!==null);Bt=6,je=null}function C0(t,e,n,i,a,s,r,o,l){t.cancelPendingCommit=null;do Vu();while($t!==0);if(ct&6)throw Error(re(327));if(e!==null){if(e===t.current)throw Error(re(177));if(s=e.lanes|e.childLanes,s|=_p,PM(t,n,s,r,o,l),t===St&&(je=St=null,et=0),Vr=e,ja=t,ua=n,Qd=s,jd=a,Tx=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,rE(Xc,function(){return Fx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Oe.T,Oe.T=null,a=ut.p,ut.p=2,r=ct,ct|=4;try{Ky(t,e,n)}finally{ct=r,ut.p=a,Oe.T=i}}$t=1,Ox(),Px(),zx()}}function Ox(){if($t===1){$t=0;var t=ja,e=Vr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Oe.T,Oe.T=null;var i=ut.p;ut.p=2;var a=ct;ct|=4;try{_x(e,t);var s=nh,r=J_(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&j_(o.ownerDocument.documentElement,o)){if(l!==null&&gp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),S=o.textContent.length,E=Math.min(l.start,S),g=l.end===void 0?E:Math.min(l.end,S);!h.extend&&E>g&&(r=g,g=E,E=r);var f=Qm(o,E),v=Qm(o,g);if(f&&v&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var M=p.createRange();M.setStart(f.node,f.offset),h.removeAllRanges(),E>g?(h.addRange(M),h.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),h.addRange(M))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}pu=!!th,nh=th=null}finally{ct=a,ut.p=i,Oe.T=n}}t.current=e,$t=2}}function Px(){if($t===2){$t=0;var t=ja,e=Vr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Oe.T,Oe.T=null;var i=ut.p;ut.p=2;var a=ct;ct|=4;try{dx(t,e.alternate,e)}finally{ct=a,ut.p=i,Oe.T=n}}$t=3}}function zx(){if($t===4||$t===3){$t=0,AM();var t=ja,e=Vr,n=ua,i=Tx;e.subtreeFlags&10256||e.flags&10256?$t=5:($t=0,Vr=ja=null,Ix(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Qa=null),cp(n),e=e.stateNode,qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Oe.T,a=ut.p,ut.p=2,Oe.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Oe.T=e,ut.p=a}}ua&3&&Vu(),Gi(t),a=t.pendingLanes,n&261930&&a&42?t===Jd?Zo++:(Zo=0,Jd=t):Zo=0,Al(0,!1)}}function Ix(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,El(e)))}function Vu(){return Ox(),Px(),zx(),Fx()}function Fx(){if($t!==5)return!1;var t=ja,e=Qd;Qd=0;var n=cp(ua),i=Oe.T,a=ut.p;try{ut.p=32>n?32:n,Oe.T=null,n=jd,jd=null;var s=ja,r=ua;if($t=0,Vr=ja=null,ua=0,ct&6)throw Error(re(331));var o=ct;if(ct|=4,yx(s.current),xx(s,s.current,r,n),ct=o,Al(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(vl,s)}catch{}return!0}finally{ut.p=a,Oe.T=i,Ix(t,e)}}function w0(t,e,n){e=oi(n,e),e=Wd(t.stateNode,e,2),t=Ka(t,e,2),t!==null&&(Sl(t,2),Gi(t))}function pt(t,e,n){if(t.tag===3)w0(t,t,n);else for(;e!==null;){if(e.tag===3){w0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qa===null||!Qa.has(i))){t=oi(n,t),n=$v(2),i=Ka(e,n,2),i!==null&&(ex(n,i,e,t),Sl(i,2),Gi(i));break}}e=e.return}}function Tf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Xp=!0,a.add(n),t=iE.bind(null,t,e,n),e.then(t,t))}function iE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,St===t&&(et&n)===n&&(Bt===4||Bt===3&&(et&62914560)===et&&300>Wn()-Bu?!(ct&2)&&kr(t,0):Wp|=n,Gr===et&&(Gr=0)),Gi(t)}function Bx(t,e){e===0&&(e=D_()),t=Gs(t,e),t!==null&&(Sl(t,e),Gi(t))}function aE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function sE(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(re(314))}i!==null&&i.delete(e),Bx(t,n)}function rE(t,e){return op(t,e)}var ou=null,fr=null,$d=!1,lu=!1,Af=!1,Xa=0;function Gi(t){t!==fr&&t.next===null&&(fr===null?ou=fr=t:fr=fr.next=t),lu=!0,$d||($d=!0,lE())}function Al(t,e){if(!Af&&lu){Af=!0;do for(var n=!1,i=ou;i!==null;){if(!e)if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Yn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,D0(i,s))}else s=et,s=Cu(i,i===St?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||xl(i,s)||(n=!0,D0(i,s));i=i.next}while(n);Af=!1}}function oE(){Hx()}function Hx(){lu=$d=!1;var t=0;Xa!==0&&vE()&&(t=Xa);for(var e=Wn(),n=null,i=ou;i!==null;){var a=i.next,s=Gx(i,e);s===0?(i.next=null,n===null?ou=a:n.next=a,a===null&&(fr=n)):(n=i,(t!==0||s&3)&&(lu=!0)),i=a}$t!==0&&$t!==5||Al(t,!1),Xa!==0&&(Xa=0)}function Gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Yn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=OM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=St,n=et,n=Cu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ht===2||ht===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&$u(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||xl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&$u(i),cp(n)){case 2:case 8:n=C_;break;case 32:n=Xc;break;case 268435456:n=w_;break;default:n=Xc}return i=Vx.bind(null,t),n=op(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&$u(i),t.callbackPriority=2,t.callbackNode=null,2}function Vx(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Vu()&&t.callbackNode!==n)return null;var i=et;return i=Cu(t,t===St?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Rx(t,i,e),Gx(t,Wn()),t.callbackNode!=null&&t.callbackNode===n?Vx.bind(null,t):null)}function D0(t,e){if(Vu())return null;Rx(t,e,!0)}function lE(){SE(function(){ct&6?op(R_,oE):Hx()})}function Yp(){if(Xa===0){var t=Fr;t===0&&(t=Ll,Ll<<=1,!(Ll&261888)&&(Ll=256)),Xa=t}return Xa}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sc(""+t)}function N0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function cE(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=U0((a[On]||null).action),r=i.submitter;r&&(e=(e=r[On]||null)?U0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new wu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var l=r?N0(a,r):new FormData(a);kd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?N0(a,r):new FormData(a),kd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Rf=0;Rf<Ud.length;Rf++){var Cf=Ud[Rf],uE=Cf.toLowerCase(),fE=Cf[0].toUpperCase()+Cf.slice(1);yi(uE,"on"+fE)}yi(ev,"onAnimationEnd");yi(tv,"onAnimationIteration");yi(nv,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(Ry,"onTransitionRun");yi(Cy,"onTransitionStart");yi(wy,"onTransitionCancel");yi(iv,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function kx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){qc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){qc(d)}a.currentTarget=null,s=l}}}}function Qe(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var i=t+"__bubble";n.has(i)||(Xx(e,t,2,!1),n.add(i))}function wf(t,e,n){var i=0;e&&(i|=4),Xx(n,t,i,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Zp(t){if(!t[kl]){t[kl]=!0,P_.forEach(function(n){n!=="selectionchange"&&(dE.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,wf("selectionchange",!1,e))}}function Xx(t,e,n,i){switch(iS(e)){case 2:var a=HE;break;case 8:a=GE;break;default:a=Jp}n=a.bind(null,e,n,t),a=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Df(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=mr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}k_(function(){var c=s,d=dp(n),p=[];e:{var u=av.get(t);if(u!==void 0){var h=wu,S=t;switch(t){case"keypress":if(yc(n)===0)break e;case"keydown":case"keyup":h=sy;break;case"focusin":S="focus",h=sf;break;case"focusout":S="blur",h=sf;break;case"beforeblur":case"afterblur":h=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=YM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ly;break;case ev:case tv:case nv:h=QM;break;case iv:h=uy;break;case"scroll":case"scrollend":h=WM;break;case"wheel":h=dy;break;case"copy":case"cut":case"paste":h=JM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vm;break;case"toggle":case"beforetoggle":h=py}var E=(e&4)!==0,g=!E&&(t==="scroll"||t==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var v=c,M;v!==null;){var _=v;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||f===null||(_=$o(v,f),_!=null&&E.push(ll(v,_,M))),g)break;v=v.return}0<E.length&&(u=new h(u,S,null,n,d),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==Rd&&(S=n.relatedTarget||n.fromElement)&&(mr(S)||S[jr]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(S=n.relatedTarget||n.toElement,h=c,S=S?mr(S):null,S!==null&&(g=_l(S),E=S.tag,S!==g||E!==5&&E!==27&&E!==6)&&(S=null)):(h=null,S=c),h!==S)){if(E=Hm,_="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=Vm,_="onPointerLeave",f="onPointerEnter",v="pointer"),g=h==null?u:Uo(h),M=S==null?u:Uo(S),u=new E(_,v+"leave",h,n,d),u.target=g,u.relatedTarget=M,_=null,mr(d)===c&&(E=new E(f,v+"enter",S,n,d),E.target=M,E.relatedTarget=g,_=E),g=_,h&&S)t:{for(E=hE,f=h,v=S,M=0,_=f;_;_=E(_))M++;_=0;for(var b=v;b;b=E(b))_++;for(;0<M-_;)f=E(f),M--;for(;0<_-M;)v=E(v),_--;for(;M--;){if(f===v||v!==null&&f===v.alternate){E=f;break t}f=E(f),v=E(v)}E=null}else E=null;h!==null&&L0(p,u,h,E,!1),S!==null&&g!==null&&L0(p,g,S,E,!0)}}e:{if(u=c?Uo(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var A=qm;else if(Wm(u))if(K_)A=by;else{A=yy;var R=My}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&fp(c.elementType)&&(A=qm):A=Ey;if(A&&(A=A(t,c))){Z_(p,A,n,d);break e}R&&R(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Ad(u,"number",u.value)}switch(R=c?Uo(c):window,t){case"focusin":(Wm(R)||R.contentEditable==="true")&&(vr=R,wd=c,Bo=null);break;case"focusout":Bo=wd=vr=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,jm(p,n,d);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":jm(p,n,d)}var m;if(mp)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else _r?q_(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(W_&&n.locale!=="ko"&&(_r||T!=="onCompositionStart"?T==="onCompositionEnd"&&_r&&(m=X_()):(Ga=d,hp="value"in Ga?Ga.value:Ga.textContent,_r=!0)),R=cu(c,T),0<R.length&&(T=new Gm(T,t,null,n,d),p.push({event:T,listeners:R}),m?T.data=m:(m=Y_(n),m!==null&&(T.data=m)))),(m=gy?_y(t,n):vy(t,n))&&(T=cu(c,"onBeforeInput"),0<T.length&&(R=new Gm("onBeforeInput","beforeinput",null,n,d),p.push({event:R,listeners:T}),R.data=m)),cE(p,t,c,n,d)}kx(p,e)})}function ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=$o(t,n),a!=null&&i.unshift(ll(t,a,s)),a=$o(t,e),a!=null&&i.push(ll(t,a,s))),t.tag===3)return i;t=t.return}return[]}function hE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function L0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=$o(n,s),c!=null&&r.unshift(ll(n,c,l))):a||(c=$o(n,s),c!=null&&r.push(ll(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function O0(t){return(typeof t=="string"?t:""+t).replace(pE,`
`).replace(mE,"")}function Wx(t,e){return e=O0(e),O0(t)===e}function gt(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ir(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ir(t,""+i);break;case"className":zl(t,"class",i);break;case"tabIndex":zl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(t,n,i);break;case"style":V_(t,i,s);break;case"data":if(e!=="object"){zl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Sc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&gt(t,e,"name",a.name,a,null),gt(t,e,"formEncType",a.formEncType,a,null),gt(t,e,"formMethod",a.formMethod,a,null),gt(t,e,"formTarget",a.formTarget,a,null)):(gt(t,e,"encType",a.encType,a,null),gt(t,e,"method",a.method,a,null),gt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Sc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=aa);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(re(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(re(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Sc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),xc(t,"popover",i);break;case"xlinkActuate":Xi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":xc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kM.get(n)||n,xc(t,n,i))}}function eh(t,e,n,i,a,s){switch(n){case"style":V_(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(re(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(re(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Ir(t,i):(typeof i=="number"||typeof i=="bigint")&&Ir(t,""+i);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!z_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[On]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):xc(t,n,i)}}}function mn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(re(137,e));default:gt(t,e,s,r,n,null)}}a&&gt(t,e,"srcSet",n.srcSet,n,null),i&&gt(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(re(137,e));break;default:gt(t,e,i,d,n,null)}}B_(t,s,o,l,c,r,a,!1);return;case"select":Qe("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:gt(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?Ar(t,!!i,e,!1):n!=null&&Ar(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(re(91));break;default:gt(t,e,r,o,n,null)}G_(t,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:gt(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<ol.length;i++)Qe(ol[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(re(137,e));default:gt(t,e,c,i,n,null)}return;default:if(fp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&eh(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&gt(t,e,o,i,n,null))}function gE(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||gt(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(re(137,e));break;default:h!==p&&gt(t,e,u,h,i,p)}}Td(t,r,o,l,c,d,s,a);return;case"select":h=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||gt(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&gt(t,e,a,s,i,l)}e=o,n=r,i=h,u!=null?Ar(t,!!n,u,!1):!!i!=!!n&&(e!=null?Ar(t,!!n,e,!0):Ar(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:gt(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(re(91));break;default:a!==s&&gt(t,e,r,a,i,s)}H_(t,u,h);return;case"option":for(var S in n)if(u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:gt(t,e,S,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:gt(t,e,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&gt(t,e,E,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(re(137,e));break;default:gt(t,e,c,u,i,h)}return;default:if(fp(e)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&eh(t,e,g,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||eh(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&gt(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||gt(t,e,p,u,i,h)}function P0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _E(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&P0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&P0(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,nh=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qx(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=null;function vE(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var Yx=typeof setTimeout=="function"?setTimeout:void 0,xE=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(t){return I0.resolve(null).then(t).catch(ME)}:Yx;function ME(t){setTimeout(function(){throw t})}function ls(t){return t==="head"}function F0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Wr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ko(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ko(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Ml]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ko(t.ownerDocument.body);n=a}while(n);Wr(e)}function B0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function ah(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ah(n),up(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function yE(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ml])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function EE(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Zx(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ui(t.nextSibling),t===null))return null;return t}function sh(t){return t.data==="$?"||t.data==="$~"}function rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bE(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var oh=null;function H0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return ui(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function G0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Kx(t,e,n){switch(e=uu(n),t){case"html":if(t=e.documentElement,!t)throw Error(re(452));return t;case"head":if(t=e.head,!t)throw Error(re(453));return t;case"body":if(t=e.body,!t)throw Error(re(454));return t;default:throw Error(re(451))}}function Ko(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);up(t)}var fi=new Map,V0=new Set;function fu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=ut.d;ut.d={f:TE,r:AE,D:RE,C:CE,L:wE,m:DE,X:NE,S:UE,M:LE};function TE(){var t=Sa.f(),e=Hu();return t||e}function AE(t){var e=Jr(t);e!==null&&e.tag===5&&e.type==="form"?Vv(e):Sa.r(t)}var no=typeof document>"u"?null:document;function Qx(t,e,n){var i=no;if(i&&typeof e=="string"&&e){var a=ri(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),V0.has(a)||(V0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),mn(e,"link",t),rn(e),i.head.appendChild(e)))}}function RE(t){Sa.D(t),Qx("dns-prefetch",t,null)}function CE(t,e){Sa.C(t,e),Qx("preconnect",t,e)}function wE(t,e,n){Sa.L(t,e,n);var i=no;if(i&&t&&e){var a='link[rel="preload"][as="'+ri(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ri(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ri(n.imageSizes)+'"]')):a+='[href="'+ri(t)+'"]';var s=a;switch(e){case"style":s=Xr(t);break;case"script":s=io(t)}fi.has(s)||(t=wt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),fi.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Rl(s))||e==="script"&&i.querySelector(Cl(s))||(e=i.createElement("link"),mn(e,"link",t),rn(e),i.head.appendChild(e)))}}function DE(t,e){Sa.m(t,e);var n=no;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+ri(i)+'"][href="'+ri(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=io(t)}if(!fi.has(s)&&(t=wt({rel:"modulepreload",href:t},e),fi.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(s)))return}i=n.createElement("link"),mn(i,"link",t),rn(i),n.head.appendChild(i)}}}function UE(t,e,n){Sa.S(t,e,n);var i=no;if(i&&t){var a=Tr(i).hoistableStyles,s=Xr(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Rl(s)))o.loading=5;else{t=wt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=fi.get(s))&&Kp(t,n);var l=r=i.createElement("link");rn(l),mn(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Dc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function NE(t,e){Sa.X(t,e);var n=no;if(n&&t){var i=Tr(n).hoistableScripts,a=io(t),s=i.get(a);s||(s=n.querySelector(Cl(a)),s||(t=wt({src:t,async:!0},e),(e=fi.get(a))&&Qp(t,e),s=n.createElement("script"),rn(s),mn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function LE(t,e){Sa.M(t,e);var n=no;if(n&&t){var i=Tr(n).hoistableScripts,a=io(t),s=i.get(a);s||(s=n.querySelector(Cl(a)),s||(t=wt({src:t,async:!0,type:"module"},e),(e=fi.get(a))&&Qp(t,e),s=n.createElement("script"),rn(s),mn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function k0(t,e,n,i){var a=(a=qa.current)?fu(a):null;if(!a)throw Error(re(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Xr(n.href),n=Tr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Xr(n.href);var s=Tr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Rl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),fi.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},fi.set(t,n),s||OE(a,t,n,r.state))),e&&i===null)throw Error(re(528,""));return r}if(e&&i!==null)throw Error(re(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=io(n),n=Tr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(re(444,t))}}function Xr(t){return'href="'+ri(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function jx(t){return wt({},t,{"data-precedence":t.precedence,precedence:null})}function OE(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),mn(e,"link",n),rn(e),t.head.appendChild(e))}function io(t){return'[src="'+ri(t)+'"]'}function Cl(t){return"script[async]"+t}function X0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ri(n.href)+'"]');if(i)return e.instance=i,rn(i),i;var a=wt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),rn(i),mn(i,"style",a),Dc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Xr(n.href);var s=t.querySelector(Rl(a));if(s)return e.state.loading|=4,e.instance=s,rn(s),s;i=jx(n),(a=fi.get(a))&&Kp(i,a),s=(t.ownerDocument||t).createElement("link"),rn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),e.state.loading|=4,Dc(s,n.precedence,t),e.instance=s;case"script":return s=io(n.src),(a=t.querySelector(Cl(s)))?(e.instance=a,rn(a),a):(i=n,(a=fi.get(s))&&(i=wt({},n),Qp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),rn(a),mn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(re(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Dc(i,n.precedence,t));return e.instance}function Dc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Kp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Qp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uc=null;function W0(t,e,n){if(Uc===null){var i=new Map,a=Uc=new Map;a.set(n,i)}else a=Uc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Ml]||s[fn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function q0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function PE(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Jx(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function zE(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Xr(i.href),s=e.querySelector(Rl(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=du.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,rn(s);return}s=e.ownerDocument||e,i=jx(i),(a=fi.get(a))&&Kp(i,a),s=s.createElement("link"),rn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=du.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Nf=0;function IE(t,e){return t.stylesheets&&t.count===0&&Nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Nf===0&&(Nf=62500*_E());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Nf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hu=null;function Nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hu=new Map,e.forEach(FE,t),hu=null,du.call(t))}function FE(t,e){if(!(e.state.loading&4)){var n=hu.get(t);if(n)var i=n.get(null);else{n=new Map,hu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=du.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var cl={$$typeof:ia,Provider:null,Consumer:null,_currentValue:As,_currentValue2:As,_threadCount:0};function BE(t,e,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ef(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ef(0),this.hiddenUpdates=ef(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function $x(t,e,n,i,a,s,r,o,l,c,d,p){return t=new BE(t,e,n,r,l,c,d,p,o),e=1,s===!0&&(e|=24),s=Vn(3,null,null,e),t.current=s,s.stateNode=t,e=yp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},Tp(s),t}function eS(t){return t?(t=Mr,t):Mr}function tS(t,e,n,i,a,s){a=eS(a),i.context===null?i.context=a:i.pendingContext=a,i=Za(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ka(t,i,e),n!==null&&(Nn(n,t,e),Go(n,t,e))}function Y0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){Y0(t,e),(t=t.alternate)&&Y0(t,e)}function nS(t){if(t.tag===13||t.tag===31){var e=Gs(t,67108864);e!==null&&Nn(e,t,67108864),jp(t,67108864)}}function Z0(t){if(t.tag===13||t.tag===31){var e=Zn();e=lp(e);var n=Gs(t,e);n!==null&&Nn(n,t,e),jp(t,e)}}var pu=!0;function HE(t,e,n,i){var a=Oe.T;Oe.T=null;var s=ut.p;try{ut.p=2,Jp(t,e,n,i)}finally{ut.p=s,Oe.T=a}}function GE(t,e,n,i){var a=Oe.T;Oe.T=null;var s=ut.p;try{ut.p=8,Jp(t,e,n,i)}finally{ut.p=s,Oe.T=a}}function Jp(t,e,n,i){if(pu){var a=lh(i);if(a===null)Df(t,e,i,mu,n),K0(t,i);else if(kE(a,t,e,n,i))i.stopPropagation();else if(K0(t,i),e&4&&-1<VE.indexOf(t)){for(;a!==null;){var s=Jr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=vs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Yn(r);o.entanglements[1]|=l,r&=~l}Gi(s),!(ct&6)&&(au=Wn()+500,Al(0,!1))}}break;case 31:case 13:o=Gs(s,2),o!==null&&Nn(o,s,2),Hu(),jp(s,2)}if(s=lh(i),s===null&&Df(t,e,i,mu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Df(t,e,i,null,n)}}function lh(t){return t=dp(t),$p(t)}var mu=null;function $p(t){if(mu=null,t=mr(t),t!==null){var e=_l(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===31){if(t=E_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return mu=t,null}function iS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(RM()){case R_:return 2;case C_:return 8;case Xc:case CM:return 32;case w_:return 268435456;default:return 32}default:return 32}}var ch=!1,Ja=null,$a=null,es=null,ul=new Map,fl=new Map,Fa=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(t,e){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(e.pointerId)}}function vo(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Jr(e),e!==null&&nS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function kE(t,e,n,i,a){switch(e){case"focusin":return Ja=vo(Ja,t,e,n,i,a),!0;case"dragenter":return $a=vo($a,t,e,n,i,a),!0;case"mouseover":return es=vo(es,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return ul.set(s,vo(ul.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,fl.set(s,vo(fl.get(s)||null,t,e,n,i,a)),!0}return!1}function aS(t){var e=mr(t.target);if(e!==null){var n=_l(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Z0(n)});return}}else if(e===31){if(e=E_(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rd=i,n.target.dispatchEvent(i),Rd=null}else return e=Jr(n),e!==null&&nS(e),t.blockedOn=n,!1;e.shift()}return!0}function Q0(t,e,n){Lc(t)&&n.delete(e)}function XE(){ch=!1,Ja!==null&&Lc(Ja)&&(Ja=null),$a!==null&&Lc($a)&&($a=null),es!==null&&Lc(es)&&(es=null),ul.forEach(Q0),fl.forEach(Q0)}function Xl(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,XE)))}var Wl=null;function j0(t){Wl!==t&&(Wl=t,en.unstable_scheduleCallback(en.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if($p(i||n)===null)continue;break}var s=Jr(n);s!==null&&(t.splice(e,3),e-=3,kd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Wr(t){function e(l){return Xl(l,t)}Ja!==null&&Xl(Ja,t),$a!==null&&Xl($a,t),es!==null&&Xl(es,t),ul.forEach(e),fl.forEach(e);for(var n=0;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Fa.length&&(n=Fa[0],n.blockedOn===null);)aS(n),n.blockedOn===null&&Fa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[On]||null;if(typeof s=="function")r||j0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[On]||null)o=r.formAction;else if($p(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),j0(n)}}}function sS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function em(t){this._internalRoot=t}ku.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));var n=e.current,i=Zn();tS(n,i,t,e,null,null)};ku.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tS(t.current,2,null,t,null,null),Hu(),e[jr]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fa.length&&e!==0&&e<Fa[n].priority;n++);Fa.splice(n,0,t),n===0&&aS(t)}};var J0=S_.version;if(J0!=="19.2.8")throw Error(re(527,J0,"19.2.8"));ut.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=SM(e),t=t!==null?b_(t):null,t=t===null?null:t.stateNode,t};var WE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Oe,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{vl=ql.inject(WE),qn=ql}catch{}}Au.createRoot=function(t,e){if(!M_(t))throw Error(re(299));var n=!1,i="",a=Qv,s=jv,r=Jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$x(t,1,!1,null,null,n,i,null,a,s,r,sS),t[jr]=e.current,Zp(t),new em(e)};Au.hydrateRoot=function(t,e,n){if(!M_(t))throw Error(re(299));var i=!1,a="",s=Qv,r=jv,o=Jv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=$x(t,1,!0,e,n??null,i,a,l,s,r,o,sS),e.context=eS(null),n=e.current,i=Zn(),i=lp(i),a=Za(i),a.callback=null,Ka(n,a,i),n=i,e.current.lanes=n,Sl(e,n),Gi(e),t[jr]=e.current,Zp(t),new ku(e)};Au.version="19.2.8";function rS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rS)}catch(t){console.error(t)}}rS(),p_.exports=Au;var qE=p_.exports;const YE=a_(qE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="185",ZE=0,$0=1,KE=2,Oc=1,QE=2,Oo=3,ss=0,Ln=1,na=2,fa=0,Nr=1,eg=2,tg=3,ng=4,jE=5,ys=100,JE=101,$E=102,eb=103,tb=104,nb=200,ib=201,ab=202,sb=203,uh=204,fh=205,rb=206,ob=207,lb=208,cb=209,ub=210,fb=211,db=212,hb=213,pb=214,dh=0,hh=1,ph=2,qr=3,mh=4,gh=5,_h=6,vh=7,oS=0,mb=1,gb=2,Pi=0,lS=1,cS=2,uS=3,fS=4,dS=5,hS=6,pS=7,mS=300,zs=301,Yr=302,Lf=303,Of=304,Xu=306,xh=1e3,ra=1001,Sh=1002,pn=1003,_b=1004,Yl=1005,Sn=1006,Pf=1007,bs=1008,kn=1009,gS=1010,_S=1011,dl=1012,nm=1013,Fi=1014,Ni=1015,va=1016,im=1017,am=1018,hl=1020,vS=35902,xS=35899,SS=1021,MS=1022,Mi=1023,xa=1026,Ts=1027,yS=1028,sm=1029,Is=1030,rm=1031,om=1033,Pc=33776,zc=33777,Ic=33778,Fc=33779,Mh=35840,yh=35841,Eh=35842,bh=35843,Th=36196,Ah=37492,Rh=37496,Ch=37488,wh=37489,gu=37490,Dh=37491,Uh=37808,Nh=37809,Lh=37810,Oh=37811,Ph=37812,zh=37813,Ih=37814,Fh=37815,Bh=37816,Hh=37817,Gh=37818,Vh=37819,kh=37820,Xh=37821,Wh=36492,qh=36494,Yh=36495,Zh=36283,Kh=36284,_u=36285,Qh=36286,vb=3200,jh=0,xb=1,Ba="",ti="srgb",vu="srgb-linear",xu="linear",dt="srgb",Ks=7680,ig=519,Sb=512,Mb=513,yb=514,lm=515,Eb=516,bb=517,cm=518,Tb=519,ag=35044,sg="300 es",Li=2e3,pl=2001;function Ab(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rb(){const t=Su("canvas");return t.style.display="block",t}const rg={};function og(...t){const e="THREE."+t.shift();console.log(e,...t)}function ES(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=ES(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=ES(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Lr(...t){const e=t.join(" ");e in rg||(rg[e]=!0,Le(...t))}function Cb(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const wb={[dh]:hh,[ph]:_h,[mh]:vh,[qr]:gh,[hh]:dh,[_h]:ph,[vh]:mh,[gh]:qr};class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lg=1234567;const Qo=Math.PI/180,ml=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[t&255]+vn[t>>8&255]+vn[t>>16&255]+vn[t>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function um(t,e){return(t%e+e)%e}function Db(t,e,n,i,a){return i+(t-e)*(a-i)/(n-e)}function Ub(t,e,n){return t!==e?(n-t)/(e-t):0}function jo(t,e,n){return(1-n)*t+n*e}function Nb(t,e,n,i){return jo(t,e,1-Math.exp(-n*i))}function Lb(t,e=1){return e-Math.abs(um(t,e*2)-e)}function Ob(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Pb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ib(t,e){return t+Math.random()*(e-t)}function Fb(t){return t*(.5-Math.random())}function Bb(t){t!==void 0&&(lg=t);let e=lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hb(t){return t*Qo}function Gb(t){return t*ml}function Vb(t){return(t&t-1)===0&&t!==0}function kb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Xb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Wb(t,e,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((e+i)/2),d=r((e+i)/2),p=s((e-i)/2),u=r((e-i)/2),h=s((i-e)/2),S=r((i-e)/2);switch(a){case"XYX":t.set(o*d,l*p,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*S,l*h,o*c);break;case"YXY":t.set(l*h,o*d,l*S,o*c);break;case"ZYZ":t.set(l*S,l*h,o*d,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function dr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ti={DEG2RAD:Qo,RAD2DEG:ml,generateUUID:ao,clamp:Je,euclideanModulo:um,mapLinear:Db,inverseLerp:Ub,lerp:jo,damp:Nb,pingpong:Lb,smoothstep:Ob,smootherstep:Pb,randInt:zb,randFloat:Ib,randFloatSpread:Fb,seededRandom:Bb,degToRad:Hb,radToDeg:Gb,isPowerOfTwo:Vb,ceilPowerOfTwo:kb,floorPowerOfTwo:Xb,setQuaternionFromProperEuler:Wb,normalize:Mn,denormalize:dr},vm=class vm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vm.prototype.isVector2=!0;let it=vm;class so{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],S=s[r+2],E=s[r+3];if(p!==E||l!==u||c!==h||d!==S){let g=l*u+c*h+d*S+p*E;g<0&&(u=-u,h=-h,S=-S,E=-E,g=-g);let f=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,l=l*f+u*o,c=c*f+h*o,d=d*f+S*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+S*o,p=p*f+E*o;const v=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=v,c*=v,d*=v,p*=v}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],S=s[r+3];return e[n]=o*S+d*p+l*h-c*u,e[n+1]=l*S+d*u+c*p-o*h,e[n+2]=c*S+d*h+o*u-l*p,e[n+3]=d*S-o*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),u=l(i/2),h=l(a/2),S=l(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"YXZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"ZXY":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"ZYX":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"YZX":this._x=u*d*p+c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p-u*h*S;break;case"XZY":this._x=u*d*p-c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p+u*h*S;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xm=class xm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-s*p,this.z=a+l*p+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xm.prototype.isVector3=!0;let F=xm;const zf=new F,cg=new so,Sm=class Sm{constructor(e,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],S=i[8],E=a[0],g=a[3],f=a[6],v=a[1],M=a[4],_=a[7],b=a[2],A=a[5],R=a[8];return s[0]=r*E+o*v+l*b,s[3]=r*g+o*M+l*A,s[6]=r*f+o*_+l*R,s[1]=c*E+d*v+p*b,s[4]=c*g+d*M+p*A,s[7]=c*f+d*_+p*R,s[2]=u*E+h*v+S*b,s[5]=u*g+h*M+S*A,s[8]=u*f+h*_+S*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*r-o*c,u=o*l-d*s,h=c*s-r*l,S=n*p+i*u+a*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(a*c-d*i)*E,e[2]=(o*i-a*r)*E,e[3]=u*E,e[4]=(d*n-a*l)*E,e[5]=(a*s-o*n)*E,e[6]=h*E,e[7]=(i*l-c*n)*E,e[8]=(r*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(If.makeScale(e,n)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(If.makeRotation(-e)),this}translate(e,n){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(If.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sm.prototype.isMatrix3=!0;let Fe=Sm;const If=new Fe,ug=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qb(){const t={enabled:!0,workingColorSpace:vu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===dt&&(a.r=da(a.r),a.g=da(a.g),a.b=da(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===dt&&(a.r=Or(a.r),a.g=Or(a.g),a.b=Or(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ba?xu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vu]:{primaries:e,whitePoint:i,transfer:xu,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),t}const tt=qb();function da(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Or(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qs;class Yb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=Su("canvas")),Qs.width=e.width,Qs.height=e.height;const a=Qs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=da(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(da(n[i]/255)*255):n[i]=da(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zb=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Ff(a[r].image)):s.push(Ff(a[r]))}else s=Ff(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Kb=0;const Bf=new F;class Tn extends ks{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=ra,a=ra,s=Sn,r=bs,o=Mi,l=kn,c=Tn.DEFAULT_ANISOTROPY,d=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=ao(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bf).x}get height(){return this.source.getSize(Bf).y}get depth(){return this.source.getSize(Bf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case ra:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case ra:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=mS;Tn.DEFAULT_ANISOTROPY=1;const Mm=class Mm{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],S=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-E)<.01&&Math.abs(S-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+E)<.1&&Math.abs(S+g)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,_=(h+1)/2,b=(f+1)/2,A=(d+u)/4,R=(p+E)/4,m=(S+g)/4;return M>_&&M>b?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=A/i,s=R/i):_>b?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=A/a,s=m/a):b<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(b),i=R/s,a=m/s),this.set(i,a,s,n),this}let v=Math.sqrt((g-S)*(g-S)+(p-E)*(p-E)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(g-S)/v,this.y=(p-E)/v,this.z=(u-d)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mm.prototype.isVector4=!0;let Pt=Mm;class Qb extends ks{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new Tn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Qb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bS extends Tn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jb extends Tn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=class bu{constructor(e,n,i,a,s,r,o,l,c,d,p,u,h,S,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,d,p,u,h,S,E,g)}set(e,n,i,a,s,r,o,l,c,d,p,u,h,S,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=S,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),r=1/js.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*p,S=o*d,E=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+S*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=S+h*c,n[10]=r*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,S=c*d,E=c*p;n[0]=u+E*o,n[4]=S*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=h*o-S,n[6]=E+u*o,n[10]=r*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,S=c*d,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=S+h*o,n[1]=h+S*o,n[5]=r*d,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const u=r*d,h=r*p,S=o*d,E=o*p;n[0]=l*d,n[4]=S*c-h,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=h*c-S,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const u=r*l,h=r*c,S=o*l,E=o*c;n[0]=l*d,n[4]=E-u*p,n[8]=S*p+h,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+S,n[10]=u-E*p}else if(e.order==="XZY"){const u=r*l,h=r*c,S=o*l,E=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+E,n[5]=r*d,n[9]=h*p-S,n[2]=S*p-h,n[6]=o*d,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jb,e,$b)}lookAt(e,n,i){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Aa.crossVectors(i,Fn),Aa.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Aa.crossVectors(i,Fn)),Aa.normalize(),Zl.crossVectors(Fn,Aa),a[0]=Aa.x,a[4]=Zl.x,a[8]=Fn.x,a[1]=Aa.y,a[5]=Zl.y,a[9]=Fn.y,a[2]=Aa.z,a[6]=Zl.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],S=i[2],E=i[6],g=i[10],f=i[14],v=i[3],M=i[7],_=i[11],b=i[15],A=a[0],R=a[4],m=a[8],T=a[12],D=a[1],U=a[5],P=a[9],j=a[13],te=a[2],V=a[6],O=a[10],z=a[14],k=a[3],ne=a[7],le=a[11],he=a[15];return s[0]=r*A+o*D+l*te+c*k,s[4]=r*R+o*U+l*V+c*ne,s[8]=r*m+o*P+l*O+c*le,s[12]=r*T+o*j+l*z+c*he,s[1]=d*A+p*D+u*te+h*k,s[5]=d*R+p*U+u*V+h*ne,s[9]=d*m+p*P+u*O+h*le,s[13]=d*T+p*j+u*z+h*he,s[2]=S*A+E*D+g*te+f*k,s[6]=S*R+E*U+g*V+f*ne,s[10]=S*m+E*P+g*O+f*le,s[14]=S*T+E*j+g*z+f*he,s[3]=v*A+M*D+_*te+b*k,s[7]=v*R+M*U+_*V+b*ne,s[11]=v*m+M*P+_*O+b*le,s[15]=v*T+M*j+_*z+b*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],S=e[3],E=e[7],g=e[11],f=e[15],v=l*h-c*u,M=o*h-c*p,_=o*u-l*p,b=r*h-c*d,A=r*u-l*d,R=r*p-o*d;return n*(E*v-g*M+f*_)-i*(S*v-g*b+f*A)+a*(S*M-E*b+f*R)-s*(S*_-E*A+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(r*d-o*c)-i*(s*d-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],S=e[12],E=e[13],g=e[14],f=e[15],v=n*o-i*r,M=n*l-a*r,_=n*c-s*r,b=i*l-a*o,A=i*c-s*o,R=a*c-s*l,m=d*E-p*S,T=d*g-u*S,D=d*f-h*S,U=p*g-u*E,P=p*f-h*E,j=u*f-h*g,te=v*j-M*P+_*U+b*D-A*T+R*m;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/te;return e[0]=(o*j-l*P+c*U)*V,e[1]=(a*P-i*j-s*U)*V,e[2]=(E*R-g*A+f*b)*V,e[3]=(u*A-p*R-h*b)*V,e[4]=(l*D-r*j-c*T)*V,e[5]=(n*j-a*D+s*T)*V,e[6]=(g*_-S*R-f*M)*V,e[7]=(d*R-u*_+h*M)*V,e[8]=(r*P-o*D+c*m)*V,e[9]=(i*D-n*P-s*m)*V,e[10]=(S*A-E*_+f*v)*V,e[11]=(p*_-d*A-h*v)*V,e[12]=(o*T-r*U-l*m)*V,e[13]=(n*U-i*T+a*m)*V,e[14]=(E*M-S*b-g*v)*V,e[15]=(d*b-p*M+u*v)*V,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,p=o+o,u=s*c,h=s*d,S=s*p,E=r*d,g=r*p,f=o*p,v=l*c,M=l*d,_=l*p,b=i.x,A=i.y,R=i.z;return a[0]=(1-(E+f))*b,a[1]=(h+_)*b,a[2]=(S-M)*b,a[3]=0,a[4]=(h-_)*A,a[5]=(1-(u+f))*A,a[6]=(g+v)*A,a[7]=0,a[8]=(S+M)*R,a[9]=(g-v)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=js.set(a[0],a[1],a[2]).length();const o=js.set(a[4],a[5],a[6]).length(),l=js.set(a[8],a[9],a[10]).length();s<0&&(r=-r),gi.copy(this);const c=1/r,d=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=d,gi.elements[5]*=d,gi.elements[6]*=d,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,a,s,r,o=Li,l=!1){const c=this.elements,d=2*s/(n-e),p=2*s/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let S,E;if(l)S=s/(r-s),E=r*s/(r-s);else if(o===Li)S=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===pl)S=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=Li,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let S,E;if(l)S=1/(r-s),E=r/(r-s);else if(o===Li)S=-2/(r-s),E=-(r+s)/(r-s);else if(o===pl)S=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};bu.prototype.isMatrix4=!0;let zt=bu;const js=new F,gi=new zt,Jb=new F(0,0,0),$b=new F(1,1,1),Aa=new F,Zl=new F,Fn=new F,dg=new zt,hg=new so;class rs{constructor(e=0,n=0,i=0,a=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class TS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e1=0;const pg=new F,Js=new so,Zi=new zt,Kl=new F,xo=new F,t1=new F,n1=new so,mg=new F(1,0,0),gg=new F(0,1,0),_g=new F(0,0,1),vg={type:"added"},i1={type:"removed"},$s={type:"childadded",child:null},Hf={type:"childremoved",child:null};class ln extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new F,n=new rs,i=new so,a=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new Fe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,n){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Kl.copy(e):Kl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(xo,Kl,this.up):Zi.lookAt(Kl,xo,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Js.setFromRotationMatrix(Zi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vg),$s.child=e,this.dispatchEvent($s),$s.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(i1),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vg),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,t1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,n1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),p=r(e.shapes),u=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),S.length>0&&(i.nodes=S)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}ln.DEFAULT_UP=new F(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ql extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,S=.005;c.inputState.pinching&&u>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const AS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ra={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=tt.workingColorSpace){if(e=um(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Vf(r,s,e+1/3),this.g=Vf(r,s,e),this.b=Vf(r,s,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=AS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return tt.workingToColorSpace(xn.copy(this),e),Math.round(Je(xn.r*255,0,255))*65536+Math.round(Je(xn.g*255,0,255))*256+Math.round(Je(xn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(xn.copy(this),n);const i=xn.r,a=xn.g,s=xn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ti){tt.workingToColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,a=xn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Ra),this.setHSL(Ra.h+e,Ra.s+n,Ra.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ra),e.getHSL(jl);const i=jo(Ra.h,jl.h,n),a=jo(Ra.s,jl.s,n),s=jo(Ra.l,jl.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new $e;$e.NAMES=AS;class dm{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=n,this.far=i}clone(){return new dm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class s1 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new F,Ki=new F,kf=new F,Qi=new F,er=new F,tr=new F,xg=new F,Xf=new F,Wf=new F,qf=new F,Yf=new Pt,Zf=new Pt,Kf=new Pt;class Si{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),_i.subVectors(e,n),a.cross(_i);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){_i.subVectors(a,n),Ki.subVectors(i,n),kf.subVectors(e,n);const r=_i.dot(_i),o=_i.dot(Ki),l=_i.dot(kf),c=Ki.dot(Ki),d=Ki.dot(kf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,S=(r*d-o*l)*u;return s.set(1-h-S,S,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(r,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return Yf.setScalar(0),Zf.setScalar(0),Kf.setScalar(0),Yf.fromBufferAttribute(e,n),Zf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Yf,s.x),r.addScaledVector(Zf,s.y),r.addScaledVector(Kf,s.z),r}static isFrontFacing(e,n,i,a){return _i.subVectors(i,n),Ki.subVectors(e,n),_i.cross(Ki).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;er.subVectors(a,i),tr.subVectors(s,i),Xf.subVectors(e,i);const l=er.dot(Xf),c=tr.dot(Xf);if(l<=0&&c<=0)return n.copy(i);Wf.subVectors(e,a);const d=er.dot(Wf),p=tr.dot(Wf);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(er,r);qf.subVectors(e,s);const h=er.dot(qf),S=tr.dot(qf);if(S>=0&&h<=S)return n.copy(s);const E=h*c-l*S;if(E<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(tr,o);const g=d*S-h*p;if(g<=0&&p-d>=0&&h-S>=0)return xg.subVectors(s,a),o=(p-d)/(p-d+(h-S)),n.copy(a).addScaledVector(xg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(er,r).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wl{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),$l.subVectors(this.max,So),nr.subVectors(e.a,So),ir.subVectors(e.b,So),ar.subVectors(e.c,So),Ca.subVectors(ir,nr),wa.subVectors(ar,ir),fs.subVectors(nr,ar);let n=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-fs.z,fs.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,fs.z,0,-fs.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-fs.y,fs.x,0];return!Qf(n,nr,ir,ar,$l)||(n=[1,0,0,0,1,0,0,0,1],!Qf(n,nr,ir,ar,$l))?!1:(ec.crossVectors(Ca,wa),n=[ec.x,ec.y,ec.z],Qf(n,nr,ir,ar,$l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new F,new F,new F,new F,new F,new F,new F,new F],vi=new F,Jl=new wl,nr=new F,ir=new F,ar=new F,Ca=new F,wa=new F,fs=new F,So=new F,$l=new F,ec=new F,ds=new F;function Qf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){ds.fromArray(t,s);const o=a.x*Math.abs(ds.x)+a.y*Math.abs(ds.y)+a.z*Math.abs(ds.z),l=e.dot(ds),c=n.dot(ds),d=i.dot(ds);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const qt=new F,tc=new it;let r1=0;class Ii extends ks{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ag,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tc.fromBufferAttribute(this,n),tc.applyMatrix3(e),this.setXY(n,tc.x,tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=dr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=dr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=dr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=dr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),a=Mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),a=Mn(a,this.array),s=Mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ag&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class RS extends Ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class CS extends Ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jt extends Ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}const o1=new wl,Mo=new F,jf=new F;class Wu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o1.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Mo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(jf)),this.expandByPoint(Mo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l1=0;const Jn=new zt,Jf=new ln,sr=new F,Bn=new wl,yo=new wl,an=new F;class zn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ab(e)?CS:RS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];yo.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Bn.min,yo.min),Bn.expandByPoint(an),an.addVectors(Bn.max,yo.max),Bn.expandByPoint(an)):(Bn.expandByPoint(yo.min),Bn.expandByPoint(yo.max))}Bn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)an.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(an));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)an.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),an.add(sr)),a=Math.max(a,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new F,l[m]=new F;const c=new F,d=new F,p=new F,u=new it,h=new it,S=new it,E=new F,g=new F;function f(m,T,D){c.fromBufferAttribute(i,m),d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,D),u.fromBufferAttribute(s,m),h.fromBufferAttribute(s,T),S.fromBufferAttribute(s,D),d.sub(c),p.sub(c),h.sub(u),S.sub(u);const U=1/(h.x*S.y-S.x*h.y);isFinite(U)&&(E.copy(d).multiplyScalar(S.y).addScaledVector(p,-h.y).multiplyScalar(U),g.copy(p).multiplyScalar(h.x).addScaledVector(d,-S.x).multiplyScalar(U),o[m].add(E),o[T].add(E),o[D].add(E),l[m].add(g),l[T].add(g),l[D].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let m=0,T=v.length;m<T;++m){const D=v[m],U=D.start,P=D.count;for(let j=U,te=U+P;j<te;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const M=new F,_=new F,b=new F,A=new F;function R(m){b.fromBufferAttribute(a,m),A.copy(b);const T=o[m];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(A,T);const U=_.dot(l[m])<0?-1:1;r.setXYZW(m,M.x,M.y,M.z,U)}for(let m=0,T=v.length;m<T;++m){const D=v[m],U=D.start,P=D.count;for(let j=U,te=U+P;j<te;j+=3)R(e.getX(j+0)),R(e.getX(j+1)),R(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new F,s=new F,r=new F,o=new F,l=new F,c=new F,d=new F,p=new F;if(e)for(let u=0,h=e.count;u<h;u+=3){const S=e.getX(u+0),E=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,S=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?h=l[E]*o.data.stride+o.offset:h=l[E]*d;for(let f=0;f<d;f++)u[S++]=c[h++]}return new Ii(u,d,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let c1=0;class ro extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Nr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new F,$f=new F,nc=new F,Da=new F,ed=new F,ic=new F,td=new F;class wS{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){$f.copy(e).add(n).multiplyScalar(.5),nc.copy(n).sub(e).normalize(),Da.copy(this.origin).sub($f);const s=e.distanceTo(n)*.5,r=-this.direction.dot(nc),o=Da.dot(this.direction),l=-Da.dot(nc),c=Da.lengthSq(),d=Math.abs(1-r*r);let p,u,h,S;if(d>0)if(p=r*l-o,u=r*o-l,S=s*d,p>=0)if(u>=-S)if(u<=S){const E=1/d;p*=E,u*=E,h=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-S?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=S?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy($f).addScaledVector(nc,u),h}intersectSphere(e,n){Ji.subVectors(e.center,this.origin);const i=Ji.dot(this.direction),a=Ji.dot(Ji)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,n,i,a,s){ed.subVectors(n,e),ic.subVectors(i,e),td.crossVectors(ed,ic);let r=this.direction.dot(td),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Da.subVectors(this.origin,e);const l=o*this.direction.dot(ic.crossVectors(Da,ic));if(l<0)return null;const c=o*this.direction.dot(ed.cross(Da));if(c<0||l+c>r)return null;const d=-o*Da.dot(td);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hm extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=oS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sg=new zt,hs=new wS,ac=new Wu,Mg=new F,sc=new F,rc=new F,oc=new F,nd=new F,lc=new F,yg=new F,cc=new F;class un extends ln{constructor(e=new zn,n=new hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){lc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(nd.fromBufferAttribute(p,e),r?lc.addScaledVector(nd,d):lc.addScaledVector(nd.sub(n),d))}n.add(lc)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(ac.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ac,Mg)===null||hs.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(Sg.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Sg),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hs)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,E=u.length;S<E;S++){const g=u[S],f=r[g.materialIndex],v=Math.max(g.start,h.start),M=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let _=v,b=M;_<b;_+=3){const A=o.getX(_),R=o.getX(_+1),m=o.getX(_+2);a=uc(this,f,e,i,c,d,p,A,R,m),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let g=S,f=E;g<f;g+=3){const v=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);a=uc(this,r,e,i,c,d,p,v,M,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,E=u.length;S<E;S++){const g=u[S],f=r[g.materialIndex],v=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=v,b=M;_<b;_+=3){const A=_,R=_+1,m=_+2;a=uc(this,f,e,i,c,d,p,A,R,m),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let g=S,f=E;g<f;g+=3){const v=g,M=g+1,_=g+2;a=uc(this,r,e,i,c,d,p,v,M,_),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function u1(t,e,n,i,a,s,r,o){let l;if(e.side===Ln?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ss,o),l===null)return null;cc.copy(o),cc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cc);return c<n.near||c>n.far?null:{distance:c,point:cc.clone(),object:t}}function uc(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,sc),t.getVertexPosition(l,rc),t.getVertexPosition(c,oc);const d=u1(t,e,n,i,sc,rc,oc,yg);if(d){const p=new F;Si.getBarycoord(yg,sc,rc,oc,p),a&&(d.uv=Si.getInterpolatedAttribute(a,o,l,c,p,new it)),s&&(d.uv1=Si.getInterpolatedAttribute(s,o,l,c,p,new it)),r&&(d.normal=Si.getInterpolatedAttribute(r,o,l,c,p,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};Si.getNormal(sc,rc,oc,u.normal),d.face=u,d.barycoord=p}return d}class f1 extends Tn{constructor(e=null,n=1,i=1,a,s,r,o,l,c=pn,d=pn,p,u){super(null,r,o,l,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new F,d1=new F,h1=new Fe;class Ms{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=id.subVectors(i,n).cross(d1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(id),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||h1.getNormalMatrix(e),a=this.coplanarPoint(id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Wu,p1=new it(.5,.5),fc=new F;class pm{constructor(e=new Ms,n=new Ms,i=new Ms,a=new Ms,s=new Ms,r=new Ms){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],S=s[8],E=s[9],g=s[10],f=s[11],v=s[12],M=s[13],_=s[14],b=s[15];if(a[0].setComponents(c-r,h-d,f-S,b-v).normalize(),a[1].setComponents(c+r,h+d,f+S,b+v).normalize(),a[2].setComponents(c+o,h+p,f+E,b+M).normalize(),a[3].setComponents(c-o,h-p,f-E,b-M).normalize(),i)a[4].setComponents(l,u,g,_).normalize(),a[5].setComponents(c-l,h-u,f-g,b-_).normalize();else if(a[4].setComponents(c-l,h-u,f-g,b-_).normalize(),n===Li)a[5].setComponents(c+l,h+u,f+g,b+_).normalize();else if(n===pl)a[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const n=p1.distanceTo(e.center);return ps.radius=.7071067811865476+n,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(fc.x=a.normal.x>0?e.max.x:e.min.x,fc.y=a.normal.y>0?e.max.y:e.min.y,fc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DS extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mu=new F,yu=new F,Eg=new zt,Eo=new wS,dc=new Wu,ad=new F,bg=new F;class m1 extends ln{constructor(e=new zn,n=new DS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Mu.fromBufferAttribute(n,a-1),yu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Mu.distanceTo(yu);e.setAttribute("lineDistance",new jt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(a),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;Eg.copy(a).invert(),Eo.copy(e.ray).applyMatrix4(Eg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,r.start),S=Math.min(d.count,r.start+r.count);for(let E=h,g=S-1;E<g;E+=c){const f=d.getX(E),v=d.getX(E+1),M=hc(this,e,Eo,l,f,v,E);M&&n.push(M)}if(this.isLineLoop){const E=d.getX(S-1),g=d.getX(h),f=hc(this,e,Eo,l,E,g,S-1);f&&n.push(f)}}else{const h=Math.max(0,r.start),S=Math.min(u.count,r.start+r.count);for(let E=h,g=S-1;E<g;E+=c){const f=hc(this,e,Eo,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=hc(this,e,Eo,l,S-1,h,S-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hc(t,e,n,i,a,s,r){const o=t.geometry.attributes.position;if(Mu.fromBufferAttribute(o,a),yu.fromBufferAttribute(o,s),n.distanceSqToSegment(Mu,yu,ad,bg)>i)return;ad.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ad);if(!(c<e.near||c>e.far))return{distance:c,point:bg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class US extends Tn{constructor(e=[],n=zs,i,a,s,r,o,l,c,d){super(e,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zr extends Tn{constructor(e,n,i=Fi,a,s,r,o=pn,l=pn,c,d=xa,p=1){if(d!==xa&&d!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class g1 extends Zr{constructor(e,n=Fi,i=zs,a,s,r=pn,o=pn,l,c=xa){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class NS extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oa extends zn{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],p=[];let u=0,h=0;S("z","y","x",-1,-1,i,n,e,r,s,0),S("z","y","x",1,-1,i,n,-e,r,s,1),S("x","z","y",1,1,e,i,n,a,r,2),S("x","z","y",1,-1,e,i,-n,a,r,3),S("x","y","z",1,-1,e,n,i,a,s,4),S("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function S(E,g,f,v,M,_,b,A,R,m,T){const D=_/R,U=b/m,P=_/2,j=b/2,te=A/2,V=R+1,O=m+1;let z=0,k=0;const ne=new F;for(let le=0;le<O;le++){const he=le*U-j;for(let Me=0;Me<V;Me++){const We=Me*D-P;ne[E]=We*v,ne[g]=he*M,ne[f]=te,c.push(ne.x,ne.y,ne.z),ne[E]=0,ne[g]=0,ne[f]=A>0?1:-1,d.push(ne.x,ne.y,ne.z),p.push(Me/R),p.push(1-le/m),z+=1}}for(let le=0;le<m;le++)for(let he=0;he<R;he++){const Me=u+he+V*le,We=u+he+V*(le+1),at=u+(he+1)+V*(le+1),qe=u+(he+1)+V*le;l.push(Me,We,qe),l.push(We,at,qe),k+=6}o.addGroup(h,k,T),h+=k,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gl extends zn{constructor(e=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],p=[],u=[],h=[];let S=0;const E=[],g=i/2;let f=0;v(),r===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function v(){const _=new F,b=new F;let A=0;const R=(n-e)/i;for(let m=0;m<=s;m++){const T=[],D=m/s,U=D*(n-e)+e;for(let P=0;P<=a;P++){const j=P/a,te=j*l+o,V=Math.sin(te),O=Math.cos(te);b.x=U*V,b.y=-D*i+g,b.z=U*O,p.push(b.x,b.y,b.z),_.set(V,R,O).normalize(),u.push(_.x,_.y,_.z),h.push(j,1-D),T.push(S++)}E.push(T)}for(let m=0;m<a;m++)for(let T=0;T<s;T++){const D=E[T][m],U=E[T+1][m],P=E[T+1][m+1],j=E[T][m+1];(e>0||T!==0)&&(d.push(D,U,j),A+=3),(n>0||T!==s-1)&&(d.push(U,P,j),A+=3)}c.addGroup(f,A,0),f+=A}function M(_){const b=S,A=new it,R=new F;let m=0;const T=_===!0?e:n,D=_===!0?1:-1;for(let P=1;P<=a;P++)p.push(0,g*D,0),u.push(0,D,0),h.push(.5,.5),S++;const U=S;for(let P=0;P<=a;P++){const te=P/a*l+o,V=Math.cos(te),O=Math.sin(te);R.x=T*O,R.y=g*D,R.z=T*V,p.push(R.x,R.y,R.z),u.push(0,D,0),A.x=V*.5+.5,A.y=O*.5*D+.5,h.push(A.x,A.y),S++}for(let P=0;P<a;P++){const j=b+P,te=U+P;_===!0?d.push(te,te+1,j):d.push(te+1,te,j),m+=3}c.addGroup(f,m,_===!0?1:2),f+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mm extends gl{constructor(e=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new mm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qu extends zn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=n/l,h=[],S=[],E=[],g=[];for(let f=0;f<d;f++){const v=f*u-r;for(let M=0;M<c;M++){const _=M*p-s;S.push(_,-v,0),E.push(0,0,1),g.push(M/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const M=v+c*f,_=v+c*(f+1),b=v+1+c*(f+1),A=v+1+c*f;h.push(M,_,A),h.push(_,b,A)}this.setIndex(h),this.setAttribute("position",new jt(S,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eu extends zn{constructor(e=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],p=new F,u=new F,h=[],S=[],E=[],g=[];for(let f=0;f<=i;f++){const v=[],M=f/i,_=r+M*o,b=e*Math.cos(_),A=Math.sqrt(e*e-b*b);let R=0;f===0&&r===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let m=0;m<=n;m++){const T=m/n,D=a+T*s;p.x=-A*Math.cos(D),p.y=b,p.z=A*Math.sin(D),S.push(p.x,p.y,p.z),u.copy(p).normalize(),E.push(u.x,u.y,u.z),g.push(T+R,1-M),v.push(c++)}d.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const M=d[f][v+1],_=d[f][v],b=d[f+1][v],A=d[f+1][v+1];(f!==0||r>0)&&h.push(M,_,A),(f!==i-1||l<Math.PI)&&h.push(_,b,A)}this.setIndex(h),this.setAttribute("position",new jt(S,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gm extends zn{constructor(e=1,n=.4,i=64,a=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:a,p:s,q:r},i=Math.floor(i),a=Math.floor(a);const o=[],l=[],c=[],d=[],p=new F,u=new F,h=new F,S=new F,E=new F,g=new F,f=new F;for(let M=0;M<=i;++M){const _=M/i*s*Math.PI*2;v(_,s,r,e,h),v(_+.01,s,r,e,S),g.subVectors(S,h),f.addVectors(S,h),E.crossVectors(g,f),f.crossVectors(E,g),E.normalize(),f.normalize();for(let b=0;b<=a;++b){const A=b/a*Math.PI*2,R=-n*Math.cos(A),m=n*Math.sin(A);p.x=h.x+(R*f.x+m*E.x),p.y=h.y+(R*f.y+m*E.y),p.z=h.z+(R*f.z+m*E.z),l.push(p.x,p.y,p.z),u.subVectors(p,h).normalize(),c.push(u.x,u.y,u.z),d.push(M/i),d.push(b/a)}}for(let M=1;M<=i;M++)for(let _=1;_<=a;_++){const b=(a+1)*(M-1)+(_-1),A=(a+1)*M+(_-1),R=(a+1)*M+_,m=(a+1)*(M-1)+_;o.push(b,A,m),o.push(A,R,m)}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(d,2));function v(M,_,b,A,R){const m=Math.cos(M),T=Math.sin(M),D=b/_*M,U=Math.cos(D);R.x=A*(2+U)*.5*m,R.y=A*(2+U)*T*.5,R.z=A*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gm(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Tg(a))a.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Tg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const a in i)e[a]=i[a]}return e}function Tg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function _1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function LS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const v1={clone:Kr,merge:yn};var x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=S1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=_1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(a.value);break;case"v2":this.uniforms[i].value=new it().fromArray(a.value);break;case"v3":this.uniforms[i].value=new F().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(a.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class M1 extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ms extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y1 extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E1 extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class OS extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const sd=new zt,Ag=new F,Rg=new F;class b1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ag.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ag),Rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rg),n.updateMatrixWorld(),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===pl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pc=new F,mc=new so,Ai=new F;class PS extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,mc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(pc,mc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new F,Cg=new it,wg=new it;class si extends PS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,n){return this.getViewBounds(e,Cg,wg),n.subVectors(wg,Cg)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class _m extends PS{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class T1 extends b1{constructor(){super(new _m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A1 extends OS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new T1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class R1 extends OS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const rr=-90,or=1;class C1 extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new si(rr,or,e,n);a.layers=this.layers,this.add(a);const s=new si(rr,or,e,n);s.layers=this.layers,this.add(s);const r=new si(rr,or,e,n);r.layers=this.layers,this.add(r);const o=new si(rr,or,e,n);o.layers=this.layers,this.add(o);const l=new si(rr,or,e,n);l.layers=this.layers,this.add(l);const c=new si(rr,or,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class w1 extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ym=class ym{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};ym.prototype.isMatrix2=!0;let Dg=ym;const Ug=new F;let gc,rd;class D1 extends ln{constructor(e=new F(0,0,1),n=new F(0,0,0),i=1,a=16776960,s=i*.2,r=s*.2){super(),this.type="ArrowHelper",gc===void 0&&(gc=new zn,gc.setAttribute("position",new jt([0,0,0,0,1,0],3)),rd=new mm(.5,1,5,1),rd.translate(0,-.5,0)),this.position.copy(n),this.line=new m1(gc,new DS({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new un(rd,new hm({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ug.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ug,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Ng(t,e,n,i){const a=U1(i);switch(n){case SS:return t*e;case yS:return t*e/a.components*a.byteLength;case sm:return t*e/a.components*a.byteLength;case Is:return t*e*2/a.components*a.byteLength;case rm:return t*e*2/a.components*a.byteLength;case MS:return t*e*3/a.components*a.byteLength;case Mi:return t*e*4/a.components*a.byteLength;case om:return t*e*4/a.components*a.byteLength;case Pc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:case bh:return Math.max(t,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(t,8)*Math.max(e,8)/2;case Th:case Ah:case Ch:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rh:case gu:case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wh:case qh:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _u:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function U1(t){switch(t){case kn:case gS:return{byteLength:1,components:1};case dl:case _S:case va:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case Fi:case nm:case Ni:return{byteLength:4,components:1};case vS:case xS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function N1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,S)=>h.start-S.start);let u=0;for(let h=1;h<p.length;h++){const S=p[u],E=p[h];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++u,p[u]=E)}p.length=u+1;for(let h=0,S=p.length;h<S;h++){const E=p[h];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
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
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
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
#endif`,H1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G1=`#ifdef USE_BATCHING
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
#endif`,V1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q1=`#ifdef USE_IRIDESCENCE
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
#endif`,Y1=`#ifdef USE_BUMPMAP
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nT=`#define PI 3.141592653589793
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
} // validated`,iT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aT=`vec3 transformedNormal = objectNormal;
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
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cT="gl_FragColor = linearToOutputTexel( gl_FragColor );",uT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ST=`#ifdef USE_GRADIENTMAP
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
}`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,TT=`#ifdef USE_ENVMAP
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
#endif`,AT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
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
#endif`,UT=`uniform sampler2D dfgLUT;
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
}`,NT=`
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
#endif`,LT=`#if defined( RE_IndirectDiffuse )
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
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,XT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`#ifdef USE_MORPHTARGETS
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
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nA=`#ifdef USE_NORMALMAP
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
#endif`,iA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vA=`float getShadowMask() {
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
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SA=`#ifdef USE_SKINNING
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
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yA=`#ifdef USE_SKINNING
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
#endif`,EA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#ifdef USE_TRANSMISSION
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OA=`uniform sampler2D t2D;
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`#include <common>
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
}`,HA=`#if DEPTH_PACKING == 3200
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
}`,GA=`#define DISTANCE
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
}`,VA=`#define DISTANCE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`uniform float scale;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,ZA=`uniform vec3 diffuse;
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
}`,KA=`#define LAMBERT
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
}`,QA=`#define LAMBERT
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
}`,jA=`#define MATCAP
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
}`,JA=`#define MATCAP
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
}`,$A=`#define NORMAL
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
}`,eR=`#define NORMAL
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
}`,tR=`#define PHONG
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
}`,nR=`#define PHONG
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
}`,iR=`#define STANDARD
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
}`,aR=`#define STANDARD
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
}`,sR=`#define TOON
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
}`,rR=`#define TOON
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
}`,oR=`uniform float size;
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
}`,lR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,uR=`uniform vec3 color;
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
}`,fR=`uniform float rotation;
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
}`,dR=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:L1,alphahash_pars_fragment:O1,alphamap_fragment:P1,alphamap_pars_fragment:z1,alphatest_fragment:I1,alphatest_pars_fragment:F1,aomap_fragment:B1,aomap_pars_fragment:H1,batching_pars_vertex:G1,batching_vertex:V1,begin_vertex:k1,beginnormal_vertex:X1,bsdfs:W1,iridescence_fragment:q1,bumpmap_pars_fragment:Y1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:j1,color_fragment:J1,color_pars_fragment:$1,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:aT,displacementmap_pars_vertex:sT,displacementmap_vertex:rT,emissivemap_fragment:oT,emissivemap_pars_fragment:lT,colorspace_fragment:cT,colorspace_pars_fragment:uT,envmap_fragment:fT,envmap_common_pars_fragment:dT,envmap_pars_fragment:hT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:TT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:_T,fog_fragment:vT,fog_pars_fragment:xT,gradientmap_pars_fragment:ST,lightmap_pars_fragment:MT,lights_lambert_fragment:yT,lights_lambert_pars_fragment:ET,lights_pars_begin:bT,lights_toon_fragment:AT,lights_toon_pars_fragment:RT,lights_phong_fragment:CT,lights_phong_pars_fragment:wT,lights_physical_fragment:DT,lights_physical_pars_fragment:UT,lights_fragment_begin:NT,lights_fragment_maps:LT,lights_fragment_end:OT,lightprobes_pars_fragment:PT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:FT,logdepthbuf_vertex:BT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:VT,map_particle_pars_fragment:kT,metalnessmap_fragment:XT,metalnessmap_pars_fragment:WT,morphinstance_vertex:qT,morphcolor_vertex:YT,morphnormal_vertex:ZT,morphtarget_pars_vertex:KT,morphtarget_vertex:QT,normal_fragment_begin:jT,normal_fragment_maps:JT,normal_pars_fragment:$T,normal_pars_vertex:eA,normal_vertex:tA,normalmap_pars_fragment:nA,clearcoat_normal_fragment_begin:iA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:sA,iridescence_pars_fragment:rA,opaque_fragment:oA,packing:lA,premultiplied_alpha_fragment:cA,project_vertex:uA,dithering_fragment:fA,dithering_pars_fragment:dA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:pA,shadowmap_pars_fragment:mA,shadowmap_pars_vertex:gA,shadowmap_vertex:_A,shadowmask_pars_fragment:vA,skinbase_vertex:xA,skinning_pars_vertex:SA,skinning_vertex:MA,skinnormal_vertex:yA,specularmap_fragment:EA,specularmap_pars_fragment:bA,tonemapping_fragment:TA,tonemapping_pars_fragment:AA,transmission_fragment:RA,transmission_pars_fragment:CA,uv_pars_fragment:wA,uv_pars_vertex:DA,uv_vertex:UA,worldpos_vertex:NA,background_vert:LA,background_frag:OA,backgroundCube_vert:PA,backgroundCube_frag:zA,cube_vert:IA,cube_frag:FA,depth_vert:BA,depth_frag:HA,distance_vert:GA,distance_frag:VA,equirect_vert:kA,equirect_frag:XA,linedashed_vert:WA,linedashed_frag:qA,meshbasic_vert:YA,meshbasic_frag:ZA,meshlambert_vert:KA,meshlambert_frag:QA,meshmatcap_vert:jA,meshmatcap_frag:JA,meshnormal_vert:$A,meshnormal_frag:eR,meshphong_vert:tR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:aR,meshtoon_vert:sR,meshtoon_frag:rR,points_vert:oR,points_frag:lR,shadow_vert:cR,shadow_frag:uR,sprite_vert:fR,sprite_frag:dR},xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ci={basic:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:yn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:yn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:yn([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:yn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:yn([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:yn([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:yn([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:yn([xe.lights,xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ci.physical={uniforms:yn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const _c={r:0,b:0,g:0},hR=new zt,IS=new Fe;IS.set(-1,0,0,0,1,0,0,0,1);function pR(t,e,n,i,a,s){const r=new $e(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function S(v){let M=!1;const _=h(v);_===null?g(r,o):_&&_.isColor&&(g(_,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const _=h(M);_&&(_.isCubeTexture||_.mapping===Xu)?(c===void 0&&(c=new un(new oa(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Kr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(IS),c.material.toneMapped=tt.getTransfer(_.colorSpace)!==dt,(d!==_||p!==_.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new un(new qu(2,2),new Bi({name:"BackgroundMaterial",uniforms:Kr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=_,p=_.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(_c,LS(t)),n.buffers.color.setClear(_c.r,_c.g,_c.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),o=M,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:S,addToRenderList:E,dispose:f}}function mR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(U,P,j,te,V){let O=!1;const z=p(U,te,j,P);s!==z&&(s=z,c(s.object)),O=h(U,te,j,V),O&&S(U,te,j,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,_(U,P,j,te),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function d(U){return t.deleteVertexArray(U)}function p(U,P,j,te){const V=te.wireframe===!0;let O=i[P.id];O===void 0&&(O={},i[P.id]=O);const z=U.isInstancedMesh===!0?U.id:0;let k=O[z];k===void 0&&(k={},O[z]=k);let ne=k[j.id];ne===void 0&&(ne={},k[j.id]=ne);let le=ne[V];return le===void 0&&(le=u(l()),ne[V]=le),le}function u(U){const P=[],j=[],te=[];for(let V=0;V<n;V++)P[V]=0,j[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:j,attributeDivisors:te,object:U,attributes:{},index:null}}function h(U,P,j,te){const V=s.attributes,O=P.attributes;let z=0;const k=j.getAttributes();for(const ne in k)if(k[ne].location>=0){const he=V[ne];let Me=O[ne];if(Me===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;z++}return s.attributesNum!==z||s.index!==te}function S(U,P,j,te){const V={},O=P.attributes;let z=0;const k=j.getAttributes();for(const ne in k)if(k[ne].location>=0){let he=O[ne];he===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),V[ne]=Me,z++}s.attributes=V,s.attributesNum=z,s.index=te}function E(){const U=s.newAttributes;for(let P=0,j=U.length;P<j;P++)U[P]=0}function g(U){f(U,0)}function f(U,P){const j=s.newAttributes,te=s.enabledAttributes,V=s.attributeDivisors;j[U]=1,te[U]===0&&(t.enableVertexAttribArray(U),te[U]=1),V[U]!==P&&(t.vertexAttribDivisor(U,P),V[U]=P)}function v(){const U=s.newAttributes,P=s.enabledAttributes;for(let j=0,te=P.length;j<te;j++)P[j]!==U[j]&&(t.disableVertexAttribArray(j),P[j]=0)}function M(U,P,j,te,V,O,z){z===!0?t.vertexAttribIPointer(U,P,j,V,O):t.vertexAttribPointer(U,P,j,te,V,O)}function _(U,P,j,te){E();const V=te.attributes,O=j.getAttributes(),z=P.defaultAttributeValues;for(const k in O){const ne=O[k];if(ne.location>=0){let le=V[k];if(le===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){const he=le.normalized,Me=le.itemSize,We=e.get(le);if(We===void 0)continue;const at=We.buffer,qe=We.type,ae=We.bytesPerElement,pe=qe===t.INT||qe===t.UNSIGNED_INT||le.gpuType===nm;if(le.isInterleavedBufferAttribute){const ce=le.data,De=ce.stride,Ne=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ne.locationSize;Ue++)f(ne.location+Ue,ce.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<ne.locationSize;Ue++)g(ne.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,at);for(let Ue=0;Ue<ne.locationSize;Ue++)M(ne.location+Ue,Me/ne.locationSize,qe,he,De*ae,(Ne+Me/ne.locationSize*Ue)*ae,pe)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<ne.locationSize;ce++)f(ne.location+ce,le.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<ne.locationSize;ce++)g(ne.location+ce);t.bindBuffer(t.ARRAY_BUFFER,at);for(let ce=0;ce<ne.locationSize;ce++)M(ne.location+ce,Me/ne.locationSize,qe,he,Me*ae,Me/ne.locationSize*ce*ae,pe)}}else if(z!==void 0){const he=z[k];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(ne.location,he);break;case 3:t.vertexAttrib3fv(ne.location,he);break;case 4:t.vertexAttrib4fv(ne.location,he);break;default:t.vertexAttrib1fv(ne.location,he)}}}}v()}function b(){T();for(const U in i){const P=i[U];for(const j in P){const te=P[j];for(const V in te){const O=te[V];for(const z in O)d(O[z].object),delete O[z];delete te[V]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const P=i[U.id];for(const j in P){const te=P[j];for(const V in te){const O=te[V];for(const z in O)d(O[z].object),delete O[z];delete te[V]}}delete i[U.id]}function R(U){for(const P in i){const j=i[P];for(const te in j){const V=j[te];if(V[U.id]===void 0)continue;const O=V[U.id];for(const z in O)d(O[z].object),delete O[z];delete V[U.id]}}}function m(U){for(const P in i){const j=i[P],te=U.isInstancedMesh===!0?U.id:0,V=j[te];if(V!==void 0){for(const O in V){const z=V[O];for(const k in z)d(z[k].object),delete z[k];delete V[O]}delete j[te],Object.keys(j).length===0&&delete i[P]}}}function T(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:v}}function gR(t,e,n){let i;function a(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function _R(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==Mi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const m=R===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ni&&!m)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:A}}function vR(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new Ms,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const S=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!a||S===null||S.length===0||s&&!g)s?d(null):c();else{const v=s?0:i,M=v*4;let _=f.clippingState||null;l.value=_,_=d(S,u,M,h);for(let b=0;b!==M;++b)_[b]=n[b];f.clippingState=_,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,S){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,S!==!0||g===null){const f=h+E*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,_=h;M!==E;++M,_+=4)r.copy(p[M]).applyMatrix4(v,o),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Wa=4,Lg=[.125,.215,.35,.446,.526,.582],Es=20,xR=256,bo=new _m,Og=new $e;let od=null,ld=0,cd=0,ud=!1;const SR=new F;class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=SR}=s;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:va,format:Mi,colorSpace:vu,depthBuffer:!1},a=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MR(s)),this._blurMaterial=ER(s,e,n),this._ggxMaterial=yR(s,e,n)}return a}_compileMaterial(e){const n=new un(new zn,e);this._renderer.compile(n,bo)}_sceneToCubeUV(e,n,i,a,s){const l=new si(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(Og),p.toneMapping=Pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new oa,new hm({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,f=!0):(g.color.copy(Og),f=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const b=this._cubeSize;lr(a,_*b,M>2?b:0,b,b),p.setRenderTarget(a),f&&p.render(E,l),p.render(e,l)}p.toneMapping=h,p.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===zs||e.mapping===Yr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;lr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,bo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:S}=this,E=this._sizeLods[i],g=3*E*(i>S-Wa?i-S+Wa:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=S-n,lr(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,bo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,lr(e,g,f,3*E,2*E),a.setRenderTarget(e),a.render(o,bo)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Es-1),E=s/S,g=isFinite(s)?1+Math.floor(d*E):Es;g>Es&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);const f=[];let v=0;for(let R=0;R<Es;++R){const m=R/E,T=Math.exp(-m*m/2);f.push(T),R===0?v+=T:R<g&&(v+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=S,u.mipInt.value=M-i;const _=this._sizeLods[a],b=3*_*(a>M-Wa?a-M+Wa:0),A=4*(this._cubeSize-_);lr(n,b,A,3*_,2*_),l.setRenderTarget(n),l.render(p,bo)}}function MR(t){const e=[],n=[],i=[];let a=t;const s=t-Wa+1+Lg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let l=1/o;r>t-Wa?l=Lg[r-t+Wa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,S=6,E=3,g=2,f=1,v=new Float32Array(E*S*h),M=new Float32Array(g*S*h),_=new Float32Array(f*S*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,m=A>2?0:-1,T=[R,m,0,R+2/3,m,0,R+2/3,m+1,0,R,m,0,R+2/3,m+1,0,R,m+1,0];v.set(T,E*S*A),M.set(u,g*S*A);const D=[A,A,A,A,A,A];_.set(D,f*S*A)}const b=new zn;b.setAttribute("position",new Ii(v,E)),b.setAttribute("uv",new Ii(M,g)),b.setAttribute("faceIndex",new Ii(_,f)),i.push(new un(b,null)),a>Wa&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function zg(t,e,n){const i=new zi(t,e,n);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lr(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function yR(t,e,n){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function ER(t,e,n){const i=new Float32Array(Es),a=new F(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Ig(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Fg(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}class FS extends zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new US(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oa(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:fa});s.uniforms.tEquirect.value=n;const r=new un(a,s),o=n.minFilter;return n.minFilter===bs&&(n.minFilter=Sn),new C1(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function bR(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Lf||h===Of)if(e.has(u)){const S=e.get(u).texture;return o(S,u.mapping)}else{const S=u.image;if(S&&S.height>0){const E=new FS(S.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,S=h===Lf||h===Of,E=h===zs||h===Yr;if(S||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Pg(t)),g=S?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return S&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new Pg(t)),g=S?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,h){return h===Lf?u.mapping=zs:h===Of&&(u.mapping=Yr),u}function l(u){let h=0;const S=6;for(let E=0;E<S;E++)u[E]!==void 0&&h++;return h===S}function c(u){const h=u.target;h.removeEventListener("dispose",c);const S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const S=n.get(h);S!==void 0&&(n.delete(h),S.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function TR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Lr("WebGLRenderer: "+i+" extension not supported."),a}}}function AR(t,e,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const S in u.attributes)e.remove(u.attributes[S]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const h in u)e.update(u[h],t.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,S=p.attributes.position;let E=0;if(S===void 0)return;if(h!==null){const v=h.array;E=h.version;for(let M=0,_=v.length;M<_;M+=3){const b=v[M+0],A=v[M+1],R=v[M+2];u.push(b,A,A,R,R,b)}}else{const v=S.array;E=S.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const b=M+0,A=M+1,R=M+2;u.push(b,A,A,R,R,b)}}const g=new(S.count>=65535?CS:RS)(u,1);g.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function RR(t,e,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){t.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let E=0;for(let g=0;g<h;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function CR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function wR(t,e,n){const i=new WeakMap,a=new Pt;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let D=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var h=D;u!==void 0&&u.texture.dispose();const S=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;S===!0&&(_=1),E===!0&&(_=2),g===!0&&(_=3);let b=o.attributes.position.count*_,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*A*4*p),m=new bS(R,b,A,p);m.type=Ni,m.needsUpdate=!0;const T=_*4;for(let U=0;U<p;U++){const P=f[U],j=v[U],te=M[U],V=b*A*4*U;for(let O=0;O<P.count;O++){const z=O*T;S===!0&&(a.fromBufferAttribute(P,O),R[V+z+0]=a.x,R[V+z+1]=a.y,R[V+z+2]=a.z,R[V+z+3]=0),E===!0&&(a.fromBufferAttribute(j,O),R[V+z+4]=a.x,R[V+z+5]=a.y,R[V+z+6]=a.z,R[V+z+7]=0),g===!0&&(a.fromBufferAttribute(te,O),R[V+z+8]=a.x,R[V+z+9]=a.y,R[V+z+10]=a.z,R[V+z+11]=te.itemSize===4?a.w:1)}}u={count:p,texture:m,size:new it(b,A)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let S=0;for(let g=0;g<c.length;g++)S+=c[g];const E=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function DR(t,e,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const UR={[lS]:"LINEAR_TONE_MAPPING",[cS]:"REINHARD_TONE_MAPPING",[uS]:"CINEON_TONE_MAPPING",[fS]:"ACES_FILMIC_TONE_MAPPING",[hS]:"AGX_TONE_MAPPING",[pS]:"NEUTRAL_TONE_MAPPING",[dS]:"CUSTOM_TONE_MAPPING"};function NR(t,e,n,i,a,s){const r=new zi(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Zr(e,n):void 0}),o=new zi(e,n,{type:va,depthBuffer:!1,stencilBuffer:!1}),l=new zn;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));const c=new M1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new un(l,c),p=new _m(-1,1,1,-1,0,1);let u=null,h=null,S=!1,E,g=null,f=[],v=!1;this.setSize=function(M,_){r.setSize(M,_),o.setSize(M,_);for(let b=0;b<f.length;b++){const A=f[b];A.setSize&&A.setSize(M,_)}},this.setEffects=function(M){f=M,v=f.length>0&&f[0].isRenderPass===!0;const _=r.width,b=r.height;for(let A=0;A<f.length;A++){const R=f[A];R.setSize&&R.setSize(_,b)}},this.begin=function(M,_){if(S||M.toneMapping===Pi&&f.length===0)return!1;if(g=_,_!==null){const b=_.width,A=_.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return v===!1&&M.setRenderTarget(r),E=M.toneMapping,M.toneMapping=Pi,!0},this.hasRenderPass=function(){return v},this.end=function(M,_){M.toneMapping=E,S=!0;let b=r,A=o;for(let R=0;R<f.length;R++){const m=f[R];if(m.enabled!==!1&&(m.render(M,A,b,_),m.needsSwap!==!1)){const T=b;b=A,A=T}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},tt.getTransfer(u)===dt&&(c.defines.SRGB_TRANSFER="");const R=UR[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(g),M.render(d,p),g=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const BS=new Tn,Jh=new Zr(1,1),HS=new bS,GS=new jb,VS=new US,Bg=[],Hg=[],Gg=new Float32Array(16),Vg=new Float32Array(9),kg=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=Bg[a];if(s===void 0&&(s=new Float32Array(a),Bg[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function tn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function nn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zu(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2fv(this.addr,e),nn(n,e)}}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;t.uniform3fv(this.addr,e),nn(n,e)}}function zR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4fv(this.addr,e),nn(n,e)}}function IR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;kg.set(i),t.uniformMatrix2fv(this.addr,!1,kg),nn(n,i)}}function FR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Vg.set(i),t.uniformMatrix3fv(this.addr,!1,Vg),nn(n,i)}}function BR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Gg.set(i),t.uniformMatrix4fv(this.addr,!1,Gg),nn(n,i)}}function HR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2iv(this.addr,e),nn(n,e)}}function VR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3iv(this.addr,e),nn(n,e)}}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4iv(this.addr,e),nn(n,e)}}function XR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2uiv(this.addr,e),nn(n,e)}}function qR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3uiv(this.addr,e),nn(n,e)}}function YR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4uiv(this.addr,e),nn(n,e)}}function ZR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Jh.compareFunction=n.isReversedDepthBuffer()?cm:lm,s=Jh):s=BS,n.setTexture2D(e||s,a)}function KR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||GS,a)}function QR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||VS,a)}function jR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||HS,a)}function JR(t){switch(t){case 5126:return LR;case 35664:return OR;case 35665:return PR;case 35666:return zR;case 35674:return IR;case 35675:return FR;case 35676:return BR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return VR;case 35669:case 35673:return kR;case 5125:return XR;case 36294:return WR;case 36295:return qR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return jR}}function $R(t,e){t.uniform1fv(this.addr,e)}function e3(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function t3(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function n3(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function i3(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function a3(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function s3(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function r3(t,e){t.uniform1iv(this.addr,e)}function o3(t,e){t.uniform2iv(this.addr,e)}function l3(t,e){t.uniform3iv(this.addr,e)}function c3(t,e){t.uniform4iv(this.addr,e)}function u3(t,e){t.uniform1uiv(this.addr,e)}function f3(t,e){t.uniform2uiv(this.addr,e)}function d3(t,e){t.uniform3uiv(this.addr,e)}function h3(t,e){t.uniform4uiv(this.addr,e)}function p3(t,e,n){const i=this.cache,a=e.length,s=Zu(n,a);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Jh:r=BS;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function m3(t,e,n){const i=this.cache,a=e.length,s=Zu(n,a);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||GS,s[r])}function g3(t,e,n){const i=this.cache,a=e.length,s=Zu(n,a);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||VS,s[r])}function _3(t,e,n){const i=this.cache,a=e.length,s=Zu(n,a);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||HS,s[r])}function v3(t){switch(t){case 5126:return $R;case 35664:return e3;case 35665:return t3;case 35666:return n3;case 35674:return i3;case 35675:return a3;case 35676:return s3;case 5124:case 35670:return r3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return c3;case 5125:return u3;case 36294:return f3;case 36295:return d3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return _3}}class x3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JR(n.type)}}class S3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v3(n.type)}}class M3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function y3(t,e,n){const i=t.name,a=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),r=fd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Xg(n,c===void 0?new x3(o,t,e):new S3(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new M3(o),Xg(n,p)),n=p}}}class Bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);y3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function Wg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E3=37297;let b3=0;function T3(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const qg=new Fe;function A3(t){tt._getMatrix(qg,tt.workingColorSpace,t);const e=`mat3( ${qg.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case xu:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+T3(t.getShaderSource(e),o)}else return s}function R3(t,e){const n=A3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const C3={[lS]:"Linear",[cS]:"Reinhard",[uS]:"Cineon",[fS]:"ACESFilmic",[hS]:"AgX",[pS]:"Neutral",[dS]:"Custom"};function w3(t,e){const n=C3[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vc=new F;function D3(){tt.getLuminanceCoefficients(vc);const t=vc.x.toFixed(4),e=vc.y.toFixed(4),n=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function N3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function L3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function Po(t){return t!==""}function Zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(t){return t.replace(O3,z3)}const P3=new Map;function z3(t,e){let n=Ve[e];if(n===void 0){const i=P3.get(e);if(i!==void 0)n=Ve[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $h(n)}const I3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(I3,F3)}function F3(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function jg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const B3={[Oc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function H3(t){return B3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G3={[zs]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function V3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":G3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const k3={[Yr]:"ENVMAP_MODE_REFRACTION"};function X3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":k3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W3={[oS]:"ENVMAP_BLENDING_MULTIPLY",[mb]:"ENVMAP_BLENDING_MIX",[gb]:"ENVMAP_BLENDING_ADD"};function q3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":W3[t.combine]||"ENVMAP_BLENDING_NONE"}function Y3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Z3(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=H3(n),c=V3(n),d=X3(n),p=q3(n),u=Y3(n),h=U3(n),S=N3(s),E=a.createProgram();let g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Pi?w3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,R3("linearToOutputTexel",n.outputColorSpace),D3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),r=$h(r),r=Zg(r,n),r=Kg(r,n),o=$h(o),o=Zg(o,n),o=Kg(o,n),r=Qg(r),o=Qg(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+g+r,_=v+f+o,b=Wg(a,a.VERTEX_SHADER,M),A=Wg(a,a.FRAGMENT_SHADER,_);a.attachShader(E,b),a.attachShader(E,A),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(t.debug.checkShaderErrors){const P=a.getProgramInfoLog(E)||"",j=a.getShaderInfoLog(b)||"",te=a.getShaderInfoLog(A)||"",V=P.trim(),O=j.trim(),z=te.trim();let k=!0,ne=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,E,b,A);else{const le=Yg(a,b,"vertex"),he=Yg(a,A,"fragment");ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+le+`
`+he)}else V!==""?Le("WebGLProgram: Program Info Log:",V):(O===""||z==="")&&(ne=!1);ne&&(U.diagnostics={runnable:k,programLog:V,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:f}})}a.deleteShader(b),a.deleteShader(A),m=new Bc(a,E),T=L3(a,E)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,E3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=A,this}let K3=0;class Q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new j3(e),n.set(e,i)),i}}class j3{constructor(e){this.id=K3++,this.code=e,this.usedTimes=0}}function J3(t){return t===Is||t===gu||t===_u}function $3(t,e,n,i,a,s){const r=new TS,o=new Q3,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(m){return l.add(m),m===0?"uv":`uv${m}`}function E(m,T,D,U,P,j){const te=U.fog,V=P.geometry,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?U.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,k=e.get(m.envMap||O,z),ne=k&&k.mapping===Xu?k.image.height:null,le=h[m.type];m.precision!==null&&(u=i.getMaxPrecision(m.precision),u!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=he!==void 0?he.length:0;let We=0;V.morphAttributes.position!==void 0&&(We=1),V.morphAttributes.normal!==void 0&&(We=2),V.morphAttributes.color!==void 0&&(We=3);let at,qe,ae,pe;if(le){const fe=Ci[le];at=fe.vertexShader,qe=fe.fragmentShader}else{at=m.vertexShader,qe=m.fragmentShader;const fe=o.getVertexShaderStage(m),Pe=o.getFragmentShaderStage(m);o.update(m,fe,Pe),ae=fe.id,pe=Pe.id}const ce=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Ne=P.isInstancedMesh===!0,Ue=P.isBatchedMesh===!0,Dt=!!m.map,ke=!!m.matcap,ft=!!k,st=!!m.aoMap,Ye=!!m.lightMap,Lt=!!m.bumpMap&&m.wireframe===!1,bt=!!m.normalMap,Ht=!!m.displacementMap,Wt=!!m.emissiveMap,Tt=!!m.metalnessMap,Ee=!!m.roughnessMap,L=m.anisotropy>0,gn=m.clearcoat>0,lt=m.dispersion>0,w=m.iridescence>0,x=m.sheen>0,B=m.transmission>0,q=L&&!!m.anisotropyMap,J=gn&&!!m.clearcoatMap,de=gn&&!!m.clearcoatNormalMap,me=gn&&!!m.clearcoatRoughnessMap,$=w&&!!m.iridescenceMap,ie=w&&!!m.iridescenceThicknessMap,ge=x&&!!m.sheenColorMap,Re=x&&!!m.sheenRoughnessMap,ve=!!m.specularMap,_e=!!m.specularColorMap,N=!!m.specularIntensityMap,K=B&&!!m.transmissionMap,se=B&&!!m.thicknessMap,C=!!m.gradientMap,ee=!!m.alphaMap,G=m.alphaTest>0,oe=!!m.alphaHash,H=!!m.extensions;let Y=Pi;m.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Y=t.toneMapping);const ue={shaderID:le,shaderType:m.type,shaderName:m.name,vertexShader:at,fragmentShader:qe,defines:m.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:Ue,batchingColor:Ue&&P._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&P.instanceColor!==null,instancingMorph:Ne&&P.morphTexture!==null,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Dt,matcap:ke,envMap:ft,envMapMode:ft&&k.mapping,envMapCubeUVHeight:ne,aoMap:st,lightMap:Ye,bumpMap:Lt,normalMap:bt,displacementMap:Ht,emissiveMap:Wt,normalMapObjectSpace:bt&&m.normalMapType===xb,normalMapTangentSpace:bt&&m.normalMapType===jh,packedNormalMap:bt&&m.normalMapType===jh&&J3(m.normalMap.format),metalnessMap:Tt,roughnessMap:Ee,anisotropy:L,anisotropyMap:q,clearcoat:gn,clearcoatMap:J,clearcoatNormalMap:de,clearcoatRoughnessMap:me,dispersion:lt,iridescence:w,iridescenceMap:$,iridescenceThicknessMap:ie,sheen:x,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:_e,specularIntensityMap:N,transmission:B,transmissionMap:K,thicknessMap:se,gradientMap:C,opaque:m.transparent===!1&&m.blending===Nr&&m.alphaToCoverage===!1,alphaMap:ee,alphaTest:G,alphaHash:oe,combine:m.combine,mapUv:Dt&&S(m.map.channel),aoMapUv:st&&S(m.aoMap.channel),lightMapUv:Ye&&S(m.lightMap.channel),bumpMapUv:Lt&&S(m.bumpMap.channel),normalMapUv:bt&&S(m.normalMap.channel),displacementMapUv:Ht&&S(m.displacementMap.channel),emissiveMapUv:Wt&&S(m.emissiveMap.channel),metalnessMapUv:Tt&&S(m.metalnessMap.channel),roughnessMapUv:Ee&&S(m.roughnessMap.channel),anisotropyMapUv:q&&S(m.anisotropyMap.channel),clearcoatMapUv:J&&S(m.clearcoatMap.channel),clearcoatNormalMapUv:de&&S(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&S(m.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&S(m.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&S(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&S(m.sheenColorMap.channel),sheenRoughnessMapUv:Re&&S(m.sheenRoughnessMap.channel),specularMapUv:ve&&S(m.specularMap.channel),specularColorMapUv:_e&&S(m.specularColorMap.channel),specularIntensityMapUv:N&&S(m.specularIntensityMap.channel),transmissionMapUv:K&&S(m.transmissionMap.channel),thicknessMapUv:se&&S(m.thicknessMap.channel),alphaMapUv:ee&&S(m.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||L),vertexNormals:!!V.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(Dt||ee),fog:!!te,useFog:m.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||V.attributes.normal===void 0&&bt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:De,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Y,decodeVideoTexture:Dt&&m.map.isVideoTexture===!0&&tt.getTransfer(m.map.colorSpace)===dt,decodeVideoTextureEmissive:Wt&&m.emissiveMap.isVideoTexture===!0&&tt.getTransfer(m.emissiveMap.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===na,flipSided:m.side===Ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:H&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(H&&m.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function g(m){const T=[];if(m.shaderID?T.push(m.shaderID):(T.push(m.customVertexShaderID),T.push(m.customFragmentShaderID)),m.defines!==void 0)for(const D in m.defines)T.push(D),T.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(f(T,m),v(T,m),T.push(t.outputColorSpace)),T.push(m.customProgramCacheKey),T.join()}function f(m,T){m.push(T.precision),m.push(T.outputColorSpace),m.push(T.envMapMode),m.push(T.envMapCubeUVHeight),m.push(T.mapUv),m.push(T.alphaMapUv),m.push(T.lightMapUv),m.push(T.aoMapUv),m.push(T.bumpMapUv),m.push(T.normalMapUv),m.push(T.displacementMapUv),m.push(T.emissiveMapUv),m.push(T.metalnessMapUv),m.push(T.roughnessMapUv),m.push(T.anisotropyMapUv),m.push(T.clearcoatMapUv),m.push(T.clearcoatNormalMapUv),m.push(T.clearcoatRoughnessMapUv),m.push(T.iridescenceMapUv),m.push(T.iridescenceThicknessMapUv),m.push(T.sheenColorMapUv),m.push(T.sheenRoughnessMapUv),m.push(T.specularMapUv),m.push(T.specularColorMapUv),m.push(T.specularIntensityMapUv),m.push(T.transmissionMapUv),m.push(T.thicknessMapUv),m.push(T.combine),m.push(T.fogExp2),m.push(T.sizeAttenuation),m.push(T.morphTargetsCount),m.push(T.morphAttributeCount),m.push(T.numDirLights),m.push(T.numPointLights),m.push(T.numSpotLights),m.push(T.numSpotLightMaps),m.push(T.numHemiLights),m.push(T.numRectAreaLights),m.push(T.numDirLightShadows),m.push(T.numPointLightShadows),m.push(T.numSpotLightShadows),m.push(T.numSpotLightShadowsWithMaps),m.push(T.numLightProbes),m.push(T.shadowMapType),m.push(T.toneMapping),m.push(T.numClippingPlanes),m.push(T.numClipIntersection),m.push(T.depthPacking)}function v(m,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),m.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),m.push(r.mask)}function M(m){const T=h[m.type];let D;if(T){const U=Ci[T];D=v1.clone(U.uniforms)}else D=m.uniforms;return D}function _(m,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new Z3(t,T,m,a),c.push(D),d.set(T,D)),D}function b(m){if(--m.usedTimes===0){const T=c.indexOf(m);c[T]=c[c.length-1],c.pop(),d.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function e2(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function t2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $g(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,S,E,g,f){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:S,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},t[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=S,v.materialVariant=r(u),v.groupOrder=E,v.renderOrder=u.renderOrder,v.z=g,v.group=f),e++,v}function l(u,h,S,E,g,f){const v=o(u,h,S,E,g,f);S.transmission>0?i.push(v):S.transparent===!0?a.push(v):n.push(v)}function c(u,h,S,E,g,f){const v=o(u,h,S,E,g,f);S.transmission>0?i.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function d(u,h,S){n.length>1&&n.sort(u||t2),i.length>1&&i.sort(h||Jg),a.length>1&&a.sort(h||Jg),S&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=e,h=t.length;u<h;u++){const S=t[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:d}}function n2(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new $g,t.set(i,[r])):a>=s.length?(r=new $g,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function i2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new $e};break;case"SpotLight":n={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function a2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let s2=0;function r2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o2(t){const e=new i2,n=a2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,s=new zt,r=new zt;function o(c){let d=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,S=0,E=0,g=0,f=0,v=0,M=0,_=0,b=0,A=0,R=0;c.sort(r2);for(let T=0,D=c.length;T<D;T++){const U=c[T],P=U.color,j=U.intensity,te=U.distance;let V=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Is?V=U.shadow.map.texture:V=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=P.r*j,p+=P.g*j,u+=P.b*j;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],j);R++}else if(U.isDirectionalLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const z=U.shadow,k=n.get(U);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=U.shadow.matrix,v++}i.directional[h]=O,h++}else if(U.isSpotLight){const O=e.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(P).multiplyScalar(j),O.distance=te,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[E]=O;const z=U.shadow;if(U.map&&(i.spotLightMap[b]=U.map,b++,z.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[E]=z.matrix,U.castShadow){const k=n.get(U);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=V,_++}E++}else if(U.isRectAreaLight){const O=e.get(U);O.color.copy(P).multiplyScalar(j),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=O,g++}else if(U.isPointLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),O.distance=U.distance,O.decay=U.decay,U.castShadow){const z=U.shadow,k=n.get(U);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,i.pointShadow[S]=k,i.pointShadowMap[S]=V,i.pointShadowMatrix[S]=U.shadow.matrix,M++}i.point[S]=O,S++}else if(U.isHemisphereLight){const O=e.get(U);O.skyColor.copy(U.color).multiplyScalar(j),O.groundColor.copy(U.groundColor).multiplyScalar(j),i.hemi[f]=O,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const m=i.hash;(m.directionalLength!==h||m.pointLength!==S||m.spotLength!==E||m.rectAreaLength!==g||m.hemiLength!==f||m.numDirectionalShadows!==v||m.numPointShadows!==M||m.numSpotShadows!==_||m.numSpotMaps!==b||m.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=g,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,m.directionalLength=h,m.pointLength=S,m.spotLength=E,m.rectAreaLength=g,m.hemiLength=f,m.numDirectionalShadows=v,m.numPointShadows=M,m.numSpotShadows=_,m.numSpotMaps=b,m.numLightProbes=R,i.version=s2++)}function l(c,d){let p=0,u=0,h=0,S=0,E=0;const g=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const _=i.directional[p];_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(g),p++}else if(M.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(g),h++}else if(M.isRectAreaLight){const _=i.rectArea[S];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),r.identity(),s.copy(M.matrixWorld),s.premultiply(g),r.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),S++}else if(M.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const _=i.hemi[E];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function e_(t){const e=new o2(t),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function l2(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new e_(t),e.set(a,[o])):s>=r.length?(o=new e_(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`,f2=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],d2=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],t_=new zt,To=new F,dd=new F;function h2(t,e,n){let i=new pm;const a=new it,s=new it,r=new Pt,o=new y1,l=new E1,c={},d=n.maxTextureSize,p={[ss]:Ln,[Ln]:ss,[na]:na},u=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const S=new zn;S.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new un(S,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let f=this.type;this.render=function(A,R,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===QE&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const T=t.getRenderTarget(),D=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),P=t.state;P.setBlending(fa),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const j=f!==this.type;j&&R.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(V=>V.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,V=A.length;te<V;te++){const O=A[te],z=O.shadow;if(z===void 0){Le("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const k=z.getFrameExtents();a.multiply(k),s.copy(z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/k.x),a.x=s.x*k.x,z.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/k.y),a.y=s.y*k.y,z.mapSize.y=s.y));const ne=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ne,z.map===null||j===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Oo){if(O.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zi(a.x,a.y,{format:Is,type:va,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new Zr(a.x,a.y,Ni),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=xa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pn,z.map.depthTexture.magFilter=pn}else O.isPointLight?(z.map=new FS(a.x),z.map.depthTexture=new g1(a.x,Fi)):(z.map=new zi(a.x,a.y),z.map.depthTexture=new Zr(a.x,a.y,Fi)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=xa,this.type===Oc?(z.map.depthTexture.compareFunction=ne?cm:lm,z.map.depthTexture.minFilter=Sn,z.map.depthTexture.magFilter=Sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pn,z.map.depthTexture.magFilter=pn);z.camera.updateProjectionMatrix()}const le=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<le;he++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,he),t.clear();else{he===0&&(t.setRenderTarget(z.map),t.clear());const Me=z.getViewport(he);r.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),P.viewport(r)}if(O.isPointLight){const Me=z.camera,We=z.matrix,at=O.distance||Me.far;at!==Me.far&&(Me.far=at,Me.updateProjectionMatrix()),To.setFromMatrixPosition(O.matrixWorld),Me.position.copy(To),dd.copy(Me.position),dd.add(f2[he]),Me.up.copy(d2[he]),Me.lookAt(dd),Me.updateMatrixWorld(),We.makeTranslation(-To.x,-To.y,-To.z),t_.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(t_,Me.coordinateSystem,Me.reversedDepth)}else z.updateMatrices(O);i=z.getFrustum(),_(R,m,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===Oo&&v(z,m),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(T,D,U)};function v(A,R){const m=e.update(E);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(a.x,a.y,{format:Is,type:va})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,m,u,E,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,m,h,E,null)}function M(A,R,m,T){let D=null;const U=m.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)D=U;else if(D=m.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=D.uuid,j=R.uuid;let te=c[P];te===void 0&&(te={},c[P]=te);let V=te[j];V===void 0&&(V=D.clone(),te[j]=V,R.addEventListener("dispose",b)),D=V}if(D.visible=R.visible,D.wireframe=R.wireframe,T===Oo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:p[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,m.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const P=t.properties.get(D);P.light=m}return D}function _(A,R,m,T,D){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Oo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,A.matrixWorld);const j=e.update(A),te=A.material;if(Array.isArray(te)){const V=j.groups;for(let O=0,z=V.length;O<z;O++){const k=V[O],ne=te[k.materialIndex];if(ne&&ne.visible){const le=M(A,ne,T,D);A.onBeforeShadow(t,A,R,m,j,le,k),t.renderBufferDirect(m,null,j,le,A,k),A.onAfterShadow(t,A,R,m,j,le,k)}}}else if(te.visible){const V=M(A,te,T,D);A.onBeforeShadow(t,A,R,m,j,V,null),t.renderBufferDirect(m,null,j,V,A,null),A.onAfterShadow(t,A,R,m,j,V,null)}}const P=A.children;for(let j=0,te=P.length;j<te;j++)_(P[j],R,m,T,D)}function b(A){A.target.removeEventListener("dispose",b);for(const m in c){const T=c[m],D=A.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function p2(t,e){function n(){let C=!1;const ee=new Pt;let G=null;const oe=new Pt(0,0,0,0);return{setMask:function(H){G!==H&&!C&&(t.colorMask(H,H,H,H),G=H)},setLocked:function(H){C=H},setClear:function(H,Y,ue,fe,Pe){Pe===!0&&(H*=fe,Y*=fe,ue*=fe),ee.set(H,Y,ue,fe),oe.equals(ee)===!1&&(t.clearColor(H,Y,ue,fe),oe.copy(ee))},reset:function(){C=!1,G=null,oe.set(-1,0,0,0)}}}function i(){let C=!1,ee=!1,G=null,oe=null,H=null;return{setReversed:function(Y){if(ee!==Y){const ue=e.get("EXT_clip_control");Y?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ee=Y;const fe=H;H=null,this.setClear(fe)}},getReversed:function(){return ee},setTest:function(Y){Y?ce(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(Y){G!==Y&&!C&&(t.depthMask(Y),G=Y)},setFunc:function(Y){if(ee&&(Y=wb[Y]),oe!==Y){switch(Y){case dh:t.depthFunc(t.NEVER);break;case hh:t.depthFunc(t.ALWAYS);break;case ph:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case mh:t.depthFunc(t.EQUAL);break;case gh:t.depthFunc(t.GEQUAL);break;case _h:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Y}},setLocked:function(Y){C=Y},setClear:function(Y){H!==Y&&(H=Y,ee&&(Y=1-Y),t.clearDepth(Y))},reset:function(){C=!1,G=null,oe=null,H=null,ee=!1}}}function a(){let C=!1,ee=null,G=null,oe=null,H=null,Y=null,ue=null,fe=null,Pe=null;return{setTest:function(Ze){C||(Ze?ce(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(Ze){ee!==Ze&&!C&&(t.stencilMask(Ze),ee=Ze)},setFunc:function(Ze,ze,Mt){(G!==Ze||oe!==ze||H!==Mt)&&(t.stencilFunc(Ze,ze,Mt),G=Ze,oe=ze,H=Mt)},setOp:function(Ze,ze,Mt){(Y!==Ze||ue!==ze||fe!==Mt)&&(t.stencilOp(Ze,ze,Mt),Y=Ze,ue=ze,fe=Mt)},setLocked:function(Ze){C=Ze},setClear:function(Ze){Pe!==Ze&&(t.clearStencil(Ze),Pe=Ze)},reset:function(){C=!1,ee=null,G=null,oe=null,H=null,Y=null,ue=null,fe=null,Pe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,S=[],E=null,g=!1,f=null,v=null,M=null,_=null,b=null,A=null,R=null,m=new $e(0,0,0),T=0,D=!1,U=null,P=null,j=null,te=null,V=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=k>=2);let le=null,he={};const Me=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),at=new Pt().fromArray(Me),qe=new Pt().fromArray(We);function ae(C,ee,G,oe){const H=new Uint8Array(4),Y=t.createTexture();t.bindTexture(C,Y),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ue=0;ue<G;ue++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,H):t.texImage2D(ee+ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,H);return Y}const pe={};pe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),r.setFunc(qr),Lt(!1),bt($0),ce(t.CULL_FACE),st(fa);function ce(C){d[C]!==!0&&(t.enable(C),d[C]=!0)}function De(C){d[C]!==!1&&(t.disable(C),d[C]=!1)}function Ne(C,ee){return u[C]!==ee?(t.bindFramebuffer(C,ee),u[C]=ee,C===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ee),C===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ue(C,ee){let G=S,oe=!1;if(C){G=h.get(ee),G===void 0&&(G=[],h.set(ee,G));const H=C.textures;if(G.length!==H.length||G[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,ue=H.length;Y<ue;Y++)G[Y]=t.COLOR_ATTACHMENT0+Y;G.length=H.length,oe=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,oe=!0);oe&&t.drawBuffers(G)}function Dt(C){return E!==C?(t.useProgram(C),E=C,!0):!1}const ke={[ys]:t.FUNC_ADD,[JE]:t.FUNC_SUBTRACT,[$E]:t.FUNC_REVERSE_SUBTRACT};ke[eb]=t.MIN,ke[tb]=t.MAX;const ft={[nb]:t.ZERO,[ib]:t.ONE,[ab]:t.SRC_COLOR,[uh]:t.SRC_ALPHA,[ub]:t.SRC_ALPHA_SATURATE,[lb]:t.DST_COLOR,[rb]:t.DST_ALPHA,[sb]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[cb]:t.ONE_MINUS_DST_COLOR,[ob]:t.ONE_MINUS_DST_ALPHA,[fb]:t.CONSTANT_COLOR,[db]:t.ONE_MINUS_CONSTANT_COLOR,[hb]:t.CONSTANT_ALPHA,[pb]:t.ONE_MINUS_CONSTANT_ALPHA};function st(C,ee,G,oe,H,Y,ue,fe,Pe,Ze){if(C===fa){g===!0&&(De(t.BLEND),g=!1);return}if(g===!1&&(ce(t.BLEND),g=!0),C!==jE){if(C!==f||Ze!==D){if((v!==ys||b!==ys)&&(t.blendEquation(t.FUNC_ADD),v=ys,b=ys),Ze)switch(C){case Nr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFunc(t.ONE,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",C);break}else switch(C){case Nr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tg:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",C);break}M=null,_=null,A=null,R=null,m.set(0,0,0),T=0,f=C,D=Ze}return}H=H||ee,Y=Y||G,ue=ue||oe,(ee!==v||H!==b)&&(t.blendEquationSeparate(ke[ee],ke[H]),v=ee,b=H),(G!==M||oe!==_||Y!==A||ue!==R)&&(t.blendFuncSeparate(ft[G],ft[oe],ft[Y],ft[ue]),M=G,_=oe,A=Y,R=ue),(fe.equals(m)===!1||Pe!==T)&&(t.blendColor(fe.r,fe.g,fe.b,Pe),m.copy(fe),T=Pe),f=C,D=!1}function Ye(C,ee){C.side===na?De(t.CULL_FACE):ce(t.CULL_FACE);let G=C.side===Ln;ee&&(G=!G),Lt(G),C.blending===Nr&&C.transparent===!1?st(fa):st(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const oe=C.stencilWrite;o.setTest(oe),oe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Wt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){U!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),U=C)}function bt(C){C!==ZE?(ce(t.CULL_FACE),C!==P&&(C===$0?t.cullFace(t.BACK):C===KE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),P=C}function Ht(C){C!==j&&(z&&t.lineWidth(C),j=C)}function Wt(C,ee,G){C?(ce(t.POLYGON_OFFSET_FILL),(te!==ee||V!==G)&&(te=ee,V=G,r.getReversed()&&(ee=-ee),t.polygonOffset(ee,G))):De(t.POLYGON_OFFSET_FILL)}function Tt(C){C?ce(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function Ee(C){C===void 0&&(C=t.TEXTURE0+O-1),le!==C&&(t.activeTexture(C),le=C)}function L(C,ee,G){G===void 0&&(le===null?G=t.TEXTURE0+O-1:G=le);let oe=he[G];oe===void 0&&(oe={type:void 0,texture:void 0},he[G]=oe),(oe.type!==C||oe.texture!==ee)&&(le!==G&&(t.activeTexture(G),le=G),t.bindTexture(C,ee||pe[C]),oe.type=C,oe.texture=ee)}function gn(){const C=he[le];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function lt(){try{t.compressedTexImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function x(){try{t.texSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function B(){try{t.texSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function de(){try{t.texStorage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function me(){try{t.texStorage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function $(){try{t.texImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function ie(){try{t.texImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function ge(C){return p[C]!==void 0?p[C]:t.getParameter(C)}function Re(C,ee){p[C]!==ee&&(t.pixelStorei(C,ee),p[C]=ee)}function ve(C){at.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),at.copy(C))}function _e(C){qe.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),qe.copy(C))}function N(C,ee){let G=c.get(ee);G===void 0&&(G=new WeakMap,c.set(ee,G));let oe=G.get(C);oe===void 0&&(oe=t.getUniformBlockIndex(ee,C.name),G.set(C,oe))}function K(C,ee){const oe=c.get(ee).get(C);l.get(ee)!==oe&&(t.uniformBlockBinding(ee,oe,C.__bindingPointIndex),l.set(ee,oe))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},le=null,he={},u={},h=new WeakMap,S=[],E=null,g=!1,f=null,v=null,M=null,_=null,b=null,A=null,R=null,m=new $e(0,0,0),T=0,D=!1,U=null,P=null,j=null,te=null,V=null,at.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ce,disable:De,bindFramebuffer:Ne,drawBuffers:Ue,useProgram:Dt,setBlending:st,setMaterial:Ye,setFlipSided:Lt,setCullFace:bt,setLineWidth:Ht,setPolygonOffset:Wt,setScissorTest:Tt,activeTexture:Ee,bindTexture:L,unbindTexture:gn,compressedTexImage2D:lt,compressedTexImage3D:w,texImage2D:$,texImage3D:ie,pixelStorei:Re,getParameter:ge,updateUBOMapping:N,uniformBlockBinding:K,texStorage2D:de,texStorage3D:me,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:ve,viewport:_e,reset:se}}function m2(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,x){return S?new OffscreenCanvas(w,x):Su("canvas")}function g(w,x,B){let q=1;const J=lt(w);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(q*J.width),me=Math.floor(q*J.height);u===void 0&&(u=E(de,me));const $=x?E(de,me):u;return $.width=de,$.height=me,$.getContext("2d").drawImage(w,0,0,de,me),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+me+")."),$}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function f(w){return w.generateMipmaps}function v(w){t.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(w,x,B,q,J,de=!1){if(w!==null){if(t[w]!==void 0)return t[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me;q&&(me=e.get("EXT_texture_norm16"),me||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&me&&($=me.R16_EXT),B===t.SHORT&&me&&($=me.R16_SNORM_EXT)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),x===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),B===t.SHORT&&me&&($=me.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),x===t.RGB&&(B===t.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),B===t.SHORT&&me&&($=me.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),x===t.RGBA){const ie=de?xu:tt.getTransfer(J);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=ie===dt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),B===t.SHORT&&me&&($=me.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,x){let B;return w?x===null||x===Fi||x===hl?B=t.DEPTH24_STENCIL8:x===Ni?B=t.DEPTH32F_STENCIL8:x===dl&&(B=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fi||x===hl?B=t.DEPTH_COMPONENT24:x===Ni?B=t.DEPTH_COMPONENT32F:x===dl&&(B=t.DEPTH_COMPONENT16),B}function A(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==pn&&w.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&p.delete(x)}function m(w){const x=w.target;x.removeEventListener("dispose",m),U(x)}function T(w){const x=i.get(w);if(x.__webglInit===void 0)return;const B=w.source,q=h.get(B);if(q){const J=q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(w),Object.keys(q).length===0&&h.delete(B)}i.remove(w)}function D(w){const x=i.get(w);t.deleteTexture(x.__webglTexture);const B=w.source,q=h.get(B);delete q[x.__cacheKey],r.memory.textures--}function U(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let J=0;J<x.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[q][J]);else t.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)t.deleteFramebuffer(x.__webglFramebuffer[q]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=w.textures;for(let q=0,J=B.length;q<J;q++){const de=i.get(B[q]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),r.memory.textures--),i.remove(B[q])}i.remove(w)}let P=0;function j(){P=0}function te(){return P}function V(w){P=w}function O(){const w=P;return w>=a.maxTextures&&Le("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),P+=1,w}function z(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){const B=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const q=w.image;if(q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function ne(w,x){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){De(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function le(w,x){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){De(B,w,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function he(w,x){const B=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Ne(B,w,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}const Me={[xh]:t.REPEAT,[ra]:t.CLAMP_TO_EDGE,[Sh]:t.MIRRORED_REPEAT},We={[pn]:t.NEAREST,[_b]:t.NEAREST_MIPMAP_NEAREST,[Yl]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Pf]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},at={[Sb]:t.NEVER,[Tb]:t.ALWAYS,[Mb]:t.LESS,[lm]:t.LEQUAL,[yb]:t.EQUAL,[cm]:t.GEQUAL,[Eb]:t.GREATER,[bb]:t.NOTEQUAL};function qe(w,x){if(x.type===Ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Pf||x.magFilter===Yl||x.magFilter===bs||x.minFilter===Sn||x.minFilter===Pf||x.minFilter===Yl||x.minFilter===bs)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Me[x.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Me[x.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Me[x.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,We[x.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,We[x.minFilter]),x.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Yl&&x.minFilter!==bs||x.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ae(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const de=z(x);if(de!==w.__cacheKey){J[de]===void 0&&(J[de]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[de].usedTimes++;const me=J[w.__cacheKey];me!==void 0&&(J[w.__cacheKey].usedTimes--,me.usedTimes===0&&D(x)),w.__cacheKey=de,w.__webglTexture=J[de].texture}return B}function pe(w,x,B){return Math.floor(Math.floor(w/B)/x)}function ce(w,x,B,q){const de=w.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{de.sort((Re,ve)=>Re.start-ve.start);let me=0;for(let Re=1;Re<de.length;Re++){const ve=de[me],_e=de[Re],N=ve.start+ve.count,K=pe(_e.start,x.width,4),se=pe(ve.start,x.width,4);_e.start<=N+1&&K===se&&pe(_e.start+_e.count-1,x.width,4)===K?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++me,de[me]=_e)}de.length=me+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ve=de.length;Re<ve;Re++){const _e=de[Re],N=Math.floor(_e.start/4),K=Math.ceil(_e.count/4),se=N%x.width,C=Math.floor(N/x.width),ee=K,G=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,C),n.texSubImage2D(t.TEXTURE_2D,0,se,C,ee,G,B,q,x.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function De(w,x,B){let q=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=t.TEXTURE_3D);const J=ae(w,x),de=x.source;n.bindTexture(q,w.__webglTexture,t.TEXTURE0+B);const me=i.get(de);if(de.version!==me.__version||J===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const G=tt.getPrimaries(tt.workingColorSpace),oe=x.colorSpace===Ba?null:tt.getPrimaries(x.colorSpace),H=x.colorSpace===Ba||G===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=g(x.image,!1,a.maxTextureSize);ie=gn(x,ie);const ge=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let ve=_(x.internalFormat,ge,Re,x.normalized,x.colorSpace,x.isVideoTexture);qe(q,x);let _e;const N=x.mipmaps,K=x.isVideoTexture!==!0,se=me.__version===void 0||J===!0,C=de.dataReady,ee=A(x,ie);if(x.isDepthTexture)ve=b(x.format===Ts,x.type),se&&(K?n.texStorage2D(t.TEXTURE_2D,1,ve,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ve,ie.width,ie.height,0,ge,Re,null));else if(x.isDataTexture)if(N.length>0){K&&se&&n.texStorage2D(t.TEXTURE_2D,ee,ve,N[0].width,N[0].height);for(let G=0,oe=N.length;G<oe;G++)_e=N[G],K?C&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,G,ve,_e.width,_e.height,0,ge,Re,_e.data);x.generateMipmaps=!1}else K?(se&&n.texStorage2D(t.TEXTURE_2D,ee,ve,ie.width,ie.height),C&&ce(x,ie,ge,Re)):n.texImage2D(t.TEXTURE_2D,0,ve,ie.width,ie.height,0,ge,Re,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){K&&se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,ve,N[0].width,N[0].height,ie.depth);for(let G=0,oe=N.length;G<oe;G++)if(_e=N[G],x.format!==Mi)if(ge!==null)if(K){if(C)if(x.layerUpdates.size>0){const H=Ng(_e.width,_e.height,x.format,x.type);for(const Y of x.layerUpdates){const ue=_e.data.subarray(Y*H/_e.data.BYTES_PER_ELEMENT,(Y+1)*H/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,Y,_e.width,_e.height,1,ge,ue)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,ve,_e.width,_e.height,ie.depth,0,_e.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?C&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ie.depth,ge,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,ve,_e.width,_e.height,ie.depth,0,ge,Re,_e.data)}else{K&&se&&n.texStorage2D(t.TEXTURE_2D,ee,ve,N[0].width,N[0].height);for(let G=0,oe=N.length;G<oe;G++)_e=N[G],x.format!==Mi?ge!==null?K?C&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,ve,_e.width,_e.height,0,_e.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?C&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,G,ve,_e.width,_e.height,0,ge,Re,_e.data)}else if(x.isDataArrayTexture)if(K){if(se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,ve,ie.width,ie.height,ie.depth),C)if(x.layerUpdates.size>0){const G=Ng(ie.width,ie.height,x.format,x.type);for(const oe of x.layerUpdates){const H=ie.data.subarray(oe*G/ie.data.BYTES_PER_ELEMENT,(oe+1)*G/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ie.width,ie.height,1,ge,Re,H)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(x.isData3DTexture)K?(se&&n.texStorage3D(t.TEXTURE_3D,ee,ve,ie.width,ie.height,ie.depth),C&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(x.isFramebufferTexture){if(se)if(K)n.texStorage2D(t.TEXTURE_2D,ee,ve,ie.width,ie.height);else{let G=ie.width,oe=ie.height;for(let H=0;H<ee;H++)n.texImage2D(t.TEXTURE_2D,H,ve,G,oe,0,ge,Re,null),G>>=1,oe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const G=t.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),ie.parentNode!==G){G.appendChild(ie),p.add(x),G.onpaint=oe=>{const H=oe.changedElements;for(const Y of p)H.includes(Y.image)&&(Y.needsUpdate=!0)},G.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const H=t.RGBA,Y=t.RGBA,ue=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,H,Y,ue,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(N.length>0){if(K&&se){const G=lt(N[0]);n.texStorage2D(t.TEXTURE_2D,ee,ve,G.width,G.height)}for(let G=0,oe=N.length;G<oe;G++)_e=N[G],K?C&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge,Re,_e):n.texImage2D(t.TEXTURE_2D,G,ve,ge,Re,_e);x.generateMipmaps=!1}else if(K){if(se){const G=lt(ie);n.texStorage2D(t.TEXTURE_2D,ee,ve,G.width,G.height)}C&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,ve,ge,Re,ie);f(x)&&v(q),me.__version=de.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ne(w,x,B){if(x.image.length!==6)return;const q=ae(w,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+B);const de=i.get(J);if(J.version!==de.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const me=tt.getPrimaries(tt.workingColorSpace),$=x.colorSpace===Ba?null:tt.getPrimaries(x.colorSpace),ie=x.colorSpace===Ba||me===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Y=0;Y<6;Y++)!ge&&!Re?ve[Y]=g(x.image[Y],!0,a.maxCubemapSize):ve[Y]=Re?x.image[Y].image:x.image[Y],ve[Y]=gn(x,ve[Y]);const _e=ve[0],N=s.convert(x.format,x.colorSpace),K=s.convert(x.type),se=_(x.internalFormat,N,K,x.normalized,x.colorSpace),C=x.isVideoTexture!==!0,ee=de.__version===void 0||q===!0,G=J.dataReady;let oe=A(x,_e);qe(t.TEXTURE_CUBE_MAP,x);let H;if(ge){C&&ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,se,_e.width,_e.height);for(let Y=0;Y<6;Y++){H=ve[Y].mipmaps;for(let ue=0;ue<H.length;ue++){const fe=H[ue];x.format!==Mi?N!==null?C?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,0,0,fe.width,fe.height,N,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,se,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,0,0,fe.width,fe.height,N,K,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,se,fe.width,fe.height,0,N,K,fe.data)}}}else{if(H=x.mipmaps,C&&ee){H.length>0&&oe++;const Y=lt(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,se,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Re){C?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve[Y].width,ve[Y].height,N,K,ve[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,se,ve[Y].width,ve[Y].height,0,N,K,ve[Y].data);for(let ue=0;ue<H.length;ue++){const Pe=H[ue].image[Y].image;C?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,0,0,Pe.width,Pe.height,N,K,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,se,Pe.width,Pe.height,0,N,K,Pe.data)}}else{C?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,N,K,ve[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,se,N,K,ve[Y]);for(let ue=0;ue<H.length;ue++){const fe=H[ue];C?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,0,0,N,K,fe.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,se,N,K,fe.image[Y])}}}f(x)&&v(t.TEXTURE_CUBE_MAP),de.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ue(w,x,B,q,J,de){const me=s.convert(B.format,B.colorSpace),$=s.convert(B.type),ie=_(B.internalFormat,me,$,B.normalized,B.colorSpace),ge=i.get(x),Re=i.get(B);if(Re.__renderTarget=x,!ge.__hasExternalTextures){const ve=Math.max(1,x.width>>de),_e=Math.max(1,x.height>>de);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,de,ie,ve,_e,x.depth,0,me,$,null):n.texImage2D(J,de,ie,ve,_e,0,me,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ee(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,Re.__webglTexture,0,Tt(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,Re.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dt(w,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,J=q&&q.isDepthTexture?q.type:null,de=b(x.stencilBuffer,J),me=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ee(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Tt(x),de,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Tt(x),de,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,de,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,w)}else{const q=x.textures;for(let J=0;J<q.length;J++){const de=q[J],me=s.convert(de.format,de.colorSpace),$=s.convert(de.type),ie=_(de.internalFormat,me,$,de.normalized,de.colorSpace);Ee(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Tt(x),ie,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Tt(x),ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(w,x,B){const q=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),qe(t.TEXTURE_CUBE_MAP,x.depthTexture);const ge=s.convert(x.depthTexture.format),Re=s.convert(x.depthTexture.type);let ve;x.depthTexture.format===xa?ve=t.DEPTH_COMPONENT24:x.depthTexture.format===Ts&&(ve=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,x.width,x.height,0,ge,Re,null)}}else k(x.depthTexture,0);const de=J.__webglTexture,me=Tt(x),$=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ie=x.depthTexture.format===Ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===xa)Ee(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,$,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ie,$,de,0);else if(x.depthTexture.format===Ts)Ee(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,$,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ie,$,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(w){const x=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)ke(x.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?ke(x.__webglFramebuffer[0],w,0):ke(x.__webglFramebuffer,w,0)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=t.createRenderbuffer(),Dt(x.__webglDepthbuffer[q],w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Dt(x.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(w,x,B){const q=i.get(w);x!==void 0&&Ue(q.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ft(w)}function Ye(w){const x=w.texture,B=i.get(w),q=i.get(x);w.addEventListener("dispose",m);const J=w.textures,de=w.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=x.version,r.memory.textures++),de){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let ie=0;ie<x.mipmaps.length;ie++)B.__webglFramebuffer[$][ie]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(me)for(let $=0,ie=J.length;$<ie;$++){const ge=i.get(J[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),r.memory.textures++)}if(w.samples>0&&Ee(w)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){const ie=J[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const ge=s.convert(ie.format,ie.colorSpace),Re=s.convert(ie.type),ve=_(ie.internalFormat,ge,Re,ie.normalized,ie.colorSpace,w.isXRRenderTarget===!0),_e=Tt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ve,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),qe(t.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)Ue(B.__webglFramebuffer[$][ie],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie);else Ue(B.__webglFramebuffer[$],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let $=0,ie=J.length;$<ie;$++){const ge=J[$],Re=i.get(ge);let ve=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Re.__webglTexture),qe(ve,ge),Ue(B.__webglFramebuffer,w,ge,t.COLOR_ATTACHMENT0+$,ve,0),f(ge)&&v(ve)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,q.__webglTexture),qe($,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)Ue(B.__webglFramebuffer[ie],w,x,t.COLOR_ATTACHMENT0,$,ie);else Ue(B.__webglFramebuffer,w,x,t.COLOR_ATTACHMENT0,$,0);f(x)&&v($),n.unbindTexture()}w.depthBuffer&&ft(w)}function Lt(w){const x=w.textures;for(let B=0,q=x.length;B<q;B++){const J=x[B];if(f(J)){const de=M(w),me=i.get(J).__webglTexture;n.bindTexture(de,me),v(de),n.unbindTexture()}}}const bt=[],Ht=[];function Wt(w){if(w.samples>0){if(Ee(w)===!1){const x=w.textures,B=w.width,q=w.height;let J=t.COLOR_BUFFER_BIT;const de=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(w),$=x.length>1;if($)for(let ge=0;ge<x.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ie=w.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Re=i.get(x[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,J,t.NEAREST),l===!0&&(bt.length=0,Ht.length=0,bt.push(t.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(de),Ht.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<x.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Re=i.get(x[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Tt(w){return Math.min(a.maxSamples,w.samples)}function Ee(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(w){const x=r.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function gn(w,x){const B=w.colorSpace,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==vu&&B!==Ba&&(tt.getTransfer(B)===dt?(q!==Mi||J!==kn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",B)),x}function lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=ne,this.setTexture3D=le,this.setTextureCube=he,this.rebindTextures=st,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function g2(t,e){function n(i,a=Ba){let s;const r=tt.getTransfer(a);if(i===kn)return t.UNSIGNED_BYTE;if(i===im)return t.UNSIGNED_SHORT_4_4_4_4;if(i===am)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===gS)return t.BYTE;if(i===_S)return t.SHORT;if(i===dl)return t.UNSIGNED_SHORT;if(i===nm)return t.INT;if(i===Fi)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===SS)return t.ALPHA;if(i===MS)return t.RGB;if(i===Mi)return t.RGBA;if(i===xa)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===yS)return t.RED;if(i===sm)return t.RED_INTEGER;if(i===Is)return t.RG;if(i===rm)return t.RG_INTEGER;if(i===om)return t.RGBA_INTEGER;if(i===Pc||i===zc||i===Ic||i===Fc)if(r===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===yh||i===Eh||i===bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Rh||i===Ch||i===wh||i===gu||i===Dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Th||i===Ah)return r===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ch)return s.COMPRESSED_R11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gu)return s.COMPRESSED_RG11_EAC;if(i===Dh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uh||i===Nh||i===Lh||i===Oh||i===Ph||i===zh||i===Ih||i===Fh||i===Bh||i===Hh||i===Gh||i===Vh||i===kh||i===Xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ih)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xh)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wh||i===qh||i===Yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wh)return r===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===Kh||i===_u||i===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
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

}`;class x2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new NS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Bi({vertexShader:_2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends ks{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,S=null;const E=typeof XRWebGLBinding<"u",g=new x2,f={},v=n.getContextAttributes();let M=null,_=null;const b=[],A=[],R=new it;let m=null;const T=new si;T.viewport=new Pt;const D=new si;D.viewport=new Pt;const U=[T,D],P=new w1;let j=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let pe=b[ae];return pe===void 0&&(pe=new Gf,b[ae]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ae){let pe=b[ae];return pe===void 0&&(pe=new Gf,b[ae]=pe),pe.getGripSpace()},this.getHand=function(ae){let pe=b[ae];return pe===void 0&&(pe=new Gf,b[ae]=pe),pe.getHandSpace()};function V(ae){const pe=A.indexOf(ae.inputSource);if(pe===-1)return;const ce=b[pe];ce!==void 0&&(ce.update(ae.inputSource,ae.frame,c||r),ce.dispatchEvent({type:ae.type,data:ae.inputSource}))}function O(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",z);for(let ae=0;ae<b.length;ae++){const pe=A[ae];pe!==null&&(A[ae]=null,b[ae].disconnect(pe))}j=null,te=null,g.reset();for(const ae in f)delete f[ae];e.setRenderTarget(M),h=null,u=null,p=null,a=null,_=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",O),a.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await n.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,De=null,Ne=null;v.depth&&(Ne=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?Ts:xa,De=v.stencil?hl:Fi);const Ue={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ue),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new zi(u.textureWidth,u.textureHeight,{format:Mi,type:kn,depthTexture:new Zr(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new zi(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),qe.setContext(a),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(ae){for(let pe=0;pe<ae.removed.length;pe++){const ce=ae.removed[pe],De=A.indexOf(ce);De>=0&&(A[De]=null,b[De].disconnect(ce))}for(let pe=0;pe<ae.added.length;pe++){const ce=ae.added[pe];let De=A.indexOf(ce);if(De===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=A.length){A.push(ce),De=Ue;break}else if(A[Ue]===null){A[Ue]=ce,De=Ue;break}if(De===-1)break}const Ne=b[De];Ne&&Ne.connect(ce)}}const k=new F,ne=new F;function le(ae,pe,ce){k.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(ce.matrixWorld);const De=k.distanceTo(ne),Ne=pe.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Dt=Ne[14]/(Ne[10]-1),ke=Ne[14]/(Ne[10]+1),ft=(Ne[9]+1)/Ne[5],st=(Ne[9]-1)/Ne[5],Ye=(Ne[8]-1)/Ne[0],Lt=(Ue[8]+1)/Ue[0],bt=Dt*Ye,Ht=Dt*Lt,Wt=De/(-Ye+Lt),Tt=Wt*-Ye;if(pe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Tt),ae.translateZ(Wt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ne[10]===-1)ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ee=Dt+Wt,L=ke+Wt,gn=bt-Tt,lt=Ht+(De-Tt),w=ft*ke/L*Ee,x=st*ke/L*Ee;ae.projectionMatrix.makePerspective(gn,lt,w,x,Ee,L),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function he(ae,pe){pe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(pe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let pe=ae.near,ce=ae.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),P.near=D.near=T.near=pe,P.far=D.far=T.far=ce,(j!==P.near||te!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),j=P.near,te=P.far),P.layers.mask=ae.layers.mask|6,T.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;const De=ae.parent,Ne=P.cameras;he(P,De);for(let Ue=0;Ue<Ne.length;Ue++)he(Ne[Ue],De);Ne.length===2?le(P,T,D):P.projectionMatrix.copy(T.projectionMatrix),Me(ae,P,De)};function Me(ae,pe,ce){ce===null?ae.matrix.copy(pe.matrixWorld):(ae.matrix.copy(ce.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ml*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(ae){l=ae,u!==null&&(u.fixedFoveation=ae),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ae)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(ae){return f[ae]};let We=null;function at(ae,pe){if(d=pe.getViewerPose(c||r),S=pe,d!==null){const ce=d.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let De=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,De=!0);for(let ke=0;ke<ce.length;ke++){const ft=ce[ke];let st=null;if(h!==null)st=h.getViewport(ft);else{const Lt=p.getViewSubImage(u,ft);st=Lt.viewport,ke===0&&(e.setRenderTargetTextures(_,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(_))}let Ye=U[ke];Ye===void 0&&(Ye=new si,Ye.layers.enable(ke),Ye.viewport=new Pt,U[ke]=Ye),Ye.matrix.fromArray(ft.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ft.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(st.x,st.y,st.width,st.height),ke===0&&(P.matrix.copy(Ye.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),De===!0&&P.cameras.push(Ye)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const ke=p.getDepthInformation(ce[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,a.renderState)}if(Ne&&Ne.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let ke=0;ke<ce.length;ke++){const ft=ce[ke].camera;if(ft){let st=f[ft];st||(st=new NS,f[ft]=st);const Ye=p.getCameraImage(ft);st.sourceTexture=Ye}}}}for(let ce=0;ce<b.length;ce++){const De=A[ce],Ne=b[ce];De!==null&&Ne!==void 0&&Ne.update(De,pe,c||r)}We&&We(ae,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),S=null}const qe=new zS;qe.setAnimationLoop(at),this.setAnimationLoop=function(ae){We=ae},this.dispose=function(){}}}const M2=new zt,kS=new Fe;kS.set(-1,0,0,0,1,0,0,0,1);function y2(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,LS(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,v,M,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&h(g,f,_)):f.isMeshMatcapMaterial?(s(g,f),S(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,v,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ln&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ln&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=M*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ln&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function E2(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const A=b.program;i.uniformBlockBinding(_,A)}function c(_,b){let A=a[_.id];A===void 0&&(g(_),A=d(_),a[_.id]=A,_.addEventListener("dispose",v));const R=b.program;i.updateUBOMapping(_,R);const m=e.render.frame;s[_.id]!==m&&(u(_),s[_.id]=m)}function d(_){const b=p();_.__bindingPointIndex=b;const A=t.createBuffer(),R=_.__size,m=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,m),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,A),A}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=a[_.id],A=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let m=0,T=A.length;m<T;m++){const D=A[m];if(Array.isArray(D))for(let U=0,P=D.length;U<P;U++)h(D[U],m,U,R);else h(D,m,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,b,A,R){if(E(_,b,A,R)===!0){const m=_.__offset,T=_.value;if(Array.isArray(T)){let D=0;for(let U=0;U<T.length;U++){const P=T[U],j=f(P);S(P,_.__data,D),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(T,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,m,_.__data)}}function S(_,b,A){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,A)}function E(_,b,A,R){const m=_.value,T=b+"_"+A;if(R[T]===void 0)return typeof m=="number"||typeof m=="boolean"?R[T]=m:ArrayBuffer.isView(m)?R[T]=m.slice():R[T]=m.clone(),!0;{const D=R[T];if(typeof m=="number"||typeof m=="boolean"){if(D!==m)return R[T]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(D.equals(m)===!1)return D.copy(m),!0}}return!1}function g(_){const b=_.uniforms;let A=0;const R=16;for(let T=0,D=b.length;T<D;T++){const U=Array.isArray(b[T])?b[T]:[b[T]];for(let P=0,j=U.length;P<j;P++){const te=U[P],V=Array.isArray(te.value)?te.value:[te.value];for(let O=0,z=V.length;O<z;O++){const k=V[O],ne=f(k),le=A%R,he=le%ne.boundary,Me=le+he;A+=he,Me!==0&&R-Me<ne.storage&&(A+=R-Me),te.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=A,A+=ne.storage}}}const m=A%R;return m>0&&(A+=R-m),_.__size=A,_.__cache={},this}function f(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),b}function v(_){const b=_.target;b.removeEventListener("dispose",v);const A=r.indexOf(b.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function M(){for(const _ in a)t.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:l,update:c,dispose:M}}const b2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function T2(){return Ri===null&&(Ri=new f1(b2,16,16,Is,va),Ri.name="DFG_LUT",Ri.minFilter=Sn,Ri.magFilter=Sn,Ri.wrapS=ra,Ri.wrapT=ra,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class A2{constructor(e={}){const{canvas:n=Rb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=kn}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=r;const E=h,g=new Set([om,rm,sm]),f=new Set([kn,Fi,dl,hl,im,am]),v=new Uint32Array(4),M=new Int32Array(4),_=new F;let b=null,A=null;const R=[],m=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,P=null,j=null,te=null,V=null;this._outputColorSpace=ti;let O=0,z=0,k=null,ne=-1,le=null;const he=new Pt,Me=new Pt;let We=null;const at=new $e(0);let qe=0,ae=n.width,pe=n.height,ce=1,De=null,Ne=null;const Ue=new Pt(0,0,ae,pe),Dt=new Pt(0,0,ae,pe);let ke=!1;const ft=new pm;let st=!1,Ye=!1;const Lt=new zt,bt=new F,Ht=new Pt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ee(){return k===null?ce:1}let L=i;function gn(y,I){return n.getContext(y,I)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",ze,!1),L===null){const I="webgl2";if(L=gn(I,y),L===null)throw gn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ot("WebGLRenderer: "+y.message),y}let lt,w,x,B,q,J,de,me,$,ie,ge,Re,ve,_e,N,K,se,C,ee,G,oe,H,Y;function ue(){lt=new TR(L),lt.init(),oe=new g2(L,lt),w=new _R(L,lt,e,oe),x=new p2(L,lt),w.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),j=L.createFramebuffer(),te=L.createFramebuffer(),V=L.createFramebuffer(),B=new CR(L),q=new e2,J=new m2(L,lt,x,q,w,oe,B),de=new bR(D),me=new N1(L),H=new mR(L,me),$=new AR(L,me,B,H),ie=new DR(L,$,me,H,B),C=new wR(L,w,J),N=new vR(q),ge=new $3(D,de,lt,w,H,N),Re=new y2(D,q),ve=new n2,_e=new l2(lt),se=new pR(D,de,x,ie,S,l),K=new h2(D,ie,w),Y=new E2(L,B,w,x),ee=new gR(L,lt,B),G=new RR(L,lt,B),B.programs=ge.programs,D.capabilities=w,D.extensions=lt,D.properties=q,D.renderLists=ve,D.shadowMap=K,D.state=x,D.info=B}ue(),E!==kn&&(T=new NR(E,n.width,n.height,o,a,s));const fe=new S2(D,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(y){y!==void 0&&(ce=y,this.setSize(ae,pe,!1))},this.getSize=function(y){return y.set(ae,pe)},this.setSize=function(y,I,Z=!0){if(fe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=y,pe=I,n.width=Math.floor(y*ce),n.height=Math.floor(I*ce),Z===!0&&(n.style.width=y+"px",n.style.height=I+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ae*ce,pe*ce).floor()},this.setDrawingBufferSize=function(y,I,Z){ae=y,pe=I,ce=Z,n.width=Math.floor(y*Z),n.height=Math.floor(I*Z),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(E===kn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(he)},this.getViewport=function(y){return y.copy(Ue)},this.setViewport=function(y,I,Z,X){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,I,Z,X),x.viewport(he.copy(Ue).multiplyScalar(ce).round())},this.getScissor=function(y){return y.copy(Dt)},this.setScissor=function(y,I,Z,X){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,I,Z,X),x.scissor(Me.copy(Dt).multiplyScalar(ce).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(y){x.setScissorTest(ke=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,Z=!0){let X=0;if(y){let W=!1;if(k!==null){const ye=k.texture.format;W=g.has(ye)}if(W){const ye=k.texture.type,Te=f.has(ye),Se=se.getClearColor(),Ae=se.getClearAlpha(),Ce=Se.r,He=Se.g,Xe=Se.b;Te?(v[0]=Ce,v[1]=He,v[2]=Xe,v[3]=Ae,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=Ce,M[1]=He,M[2]=Xe,M[3]=Ae,L.clearBufferiv(L.COLOR,0,M))}else X|=L.COLOR_BUFFER_BIT}I&&(X|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),se.dispose(),ve.dispose(),_e.dispose(),q.dispose(),de.dispose(),ie.dispose(),H.dispose(),Y.dispose(),ge.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",lo),fe.removeEventListener("sessionend",co),Ke.stop()};function Pe(y){y.preventDefault(),og("WebGLRenderer: Context Lost."),U=!0}function Ze(){og("WebGLRenderer: Context Restored."),U=!1;const y=B.autoReset,I=K.enabled,Z=K.autoUpdate,X=K.needsUpdate,W=K.type;ue(),B.autoReset=y,K.enabled=I,K.autoUpdate=Z,K.needsUpdate=X,K.type=W}function ze(y){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Mt(y){const I=y.target;I.removeEventListener("dispose",Mt),Vi(I)}function Vi(y){di(y),q.remove(y)}function di(y){const I=q.get(y).programs;I!==void 0&&(I.forEach(function(Z){ge.releaseProgram(Z)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,Z,X,W,ye){I===null&&(I=Wt);const Te=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=qS(y,I,Z,X,W);x.setMaterial(X,Te);let Ae=Z.index,Ce=1;if(X.wireframe===!0){if(Ae=$.getWireframeAttribute(Z),Ae===void 0)return;Ce=2}const He=Z.drawRange,Xe=Z.attributes.position;let we=He.start*Ce,mt=(He.start+He.count)*Ce;ye!==null&&(we=Math.max(we,ye.start*Ce),mt=Math.min(mt,(ye.start+ye.count)*Ce)),Ae!==null?(we=Math.max(we,0),mt=Math.min(mt,Ae.count)):Xe!=null&&(we=Math.max(we,0),mt=Math.min(mt,Xe.count));const Gt=mt-we;if(Gt<0||Gt===1/0)return;H.setup(W,X,Se,Z,Ae);let It,vt=ee;if(Ae!==null&&(It=me.get(Ae),vt=G,vt.setIndex(It)),W.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*Ee()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(W.isLine){let _n=X.linewidth;_n===void 0&&(_n=1),x.setLineWidth(_n*Ee()),W.isLineSegments?vt.setMode(L.LINES):W.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else W.isPoints?vt.setMode(L.POINTS):W.isSprite&&vt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const _n=W._multiDrawStarts,be=W._multiDrawCounts,In=W._multiDrawCount,rt=Ae?me.get(Ae).bytesPerElement:1,jn=q.get(X).currentProgram.getUniforms();for(let bi=0;bi<In;bi++)jn.setValue(L,"_gl_DrawID",bi),vt.render(_n[bi]/rt,be[bi])}else if(W.isInstancedMesh)vt.renderInstances(we,Gt,W.count);else if(Z.isInstancedBufferGeometry){const _n=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,be=Math.min(Z.instanceCount,_n);vt.renderInstances(we,Gt,be)}else vt.render(we,Gt)};function hi(y,I,Z){y.transparent===!0&&y.side===na&&y.forceSinglePass===!1?(y.side=Ln,y.needsUpdate=!0,Ma(y,I,Z),y.side=ss,y.needsUpdate=!0,Ma(y,I,Z),y.side=na):Ma(y,I,Z)}this.compile=function(y,I,Z=null){Z===null&&(Z=y),A=_e.get(Z),A.init(I),m.push(A),Z.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),y!==Z&&y.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const X=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];hi(Se,Z,W),X.add(Se)}else hi(ye,Z,W),X.add(ye)}),A=m.pop(),X},this.compileAsync=function(y,I,Z=null){const X=this.compile(y,I,Z);return new Promise(W=>{function ye(){if(X.forEach(function(Te){q.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){W(y);return}setTimeout(ye,10)}lt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ki=null;function Dl(y){ki&&ki(y)}function lo(){Ke.stop()}function co(){Ke.start()}const Ke=new zS;Ke.setAnimationLoop(Dl),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(y){ki=y,fe.setAnimationLoop(y),y===null?Ke.stop():Ke.start()},fe.addEventListener("sessionstart",lo),fe.addEventListener("sessionend",co),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;P!==null&&P.renderStart(y,I);const Z=fe.enabled===!0&&fe.isPresenting===!0,X=T!==null&&(k===null||Z)&&T.begin(D,k);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(I),I=fe.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,I,k),A=_e.get(y,m.length),A.init(I),A.state.textureUnits=J.getTextureUnits(),m.push(A),Lt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ft.setFromProjectionMatrix(Lt,Li,I.reversedDepth),Ye=this.localClippingEnabled,st=N.init(this.clippingPlanes,Ye),b=ve.get(y,R.length),b.init(),R.push(b),fe.enabled===!0&&fe.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Jt(Te,I,-1/0,D.sortObjects)}Jt(y,I,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(De,Ne,I.reversedDepth),Tt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Tt&&se.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&N.beginShadows();const W=A.state.shadowsArray;if(K.render(W,y,I),st===!0&&N.endShadows(),(X&&T.hasRenderPass())===!1){const Te=b.opaque,Se=b.transmissive;if(A.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(Se.length>0)for(let Ce=0,He=Ae.length;Ce<He;Ce++){const Xe=Ae[Ce];cs(Te,Se,y,Xe)}Tt&&se.render(y);for(let Ce=0,He=Ae.length;Ce<He;Ce++){const Xe=Ae[Ce];pi(b,y,Xe,Xe.viewport)}}else Se.length>0&&cs(Te,Se,y,I),Tt&&se.render(y),pi(b,y,I)}k!==null&&z===0&&(J.updateMultisampleRenderTarget(k),J.updateRenderTargetMipmap(k)),X&&T.end(D),y.isScene===!0&&y.onAfterRender(D,y,I),H.resetDefaultState(),ne=-1,le=null,m.pop(),m.length>0?(A=m[m.length-1],J.setTextureUnits(A.state.textureUnits),st===!0&&N.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,P!==null&&P.renderEnd()};function Jt(y,I,Z,X){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ft.intersectsSprite(y)){X&&Ht.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Lt);const Te=ie.update(y),Se=y.material;Se.visible&&b.push(y,Te,Se,Z,Ht.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ft.intersectsObject(y))){const Te=ie.update(y),Se=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ht.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ht.copy(Te.boundingSphere.center)),Ht.applyMatrix4(y.matrixWorld).applyMatrix4(Lt)),Array.isArray(Se)){const Ae=Te.groups;for(let Ce=0,He=Ae.length;Ce<He;Ce++){const Xe=Ae[Ce],we=Se[Xe.materialIndex];we&&we.visible&&b.push(y,Te,we,Z,Ht.z,Xe)}}else Se.visible&&b.push(y,Te,Se,Z,Ht.z,null)}}const ye=y.children;for(let Te=0,Se=ye.length;Te<Se;Te++)Jt(ye[Te],I,Z,X)}function pi(y,I,Z,X){const{opaque:W,transmissive:ye,transparent:Te}=y;A.setupLightsView(Z),st===!0&&N.setGlobalState(D.clippingPlanes,Z),X&&x.viewport(he.copy(X)),W.length>0&&Ei(W,I,Z),ye.length>0&&Ei(ye,I,Z),Te.length>0&&Ei(Te,I,Z),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function cs(y,I,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const we=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new zi(1,1,{generateMipmaps:!0,type:we?va:kn,minFilter:bs,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[X.id],Te=X.viewport||he;ye.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const Se=D.getRenderTarget(),Ae=D.getActiveCubeFace(),Ce=D.getActiveMipmapLevel();D.setRenderTarget(ye),D.getClearColor(at),qe=D.getClearAlpha(),qe<1&&D.setClearColor(16777215,.5),D.clear(),Tt&&se.render(Z);const He=D.toneMapping;D.toneMapping=Pi;const Xe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),st===!0&&N.setGlobalState(D.clippingPlanes,X),Ei(y,Z,X),J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye),lt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let mt=0,Gt=I.length;mt<Gt;mt++){const It=I[mt],{object:vt,geometry:_n,material:be,group:In}=It;if(be.side===na&&vt.layers.test(X.layers)){const rt=be.side;be.side=Ln,be.needsUpdate=!0,Xs(vt,Z,X,_n,be,In),be.side=rt,be.needsUpdate=!0,we=!0}}we===!0&&(J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye))}D.setRenderTarget(Se,Ae,Ce),D.setClearColor(at,qe),Xe!==void 0&&(X.viewport=Xe),D.toneMapping=He}function Ei(y,I,Z){const X=I.isScene===!0?I.overrideMaterial:null;for(let W=0,ye=y.length;W<ye;W++){const Te=y[W],{object:Se,geometry:Ae,group:Ce}=Te;let He=Te.material;He.allowOverride===!0&&X!==null&&(He=X),Se.layers.test(Z.layers)&&Xs(Se,I,Z,Ae,He,Ce)}}function Xs(y,I,Z,X,W,ye){y.onBeforeRender(D,I,Z,X,W,ye),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(D,I,Z,X,y,ye),W.transparent===!0&&W.side===na&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,D.renderBufferDirect(Z,I,X,W,y,ye),W.side=ss,W.needsUpdate=!0,D.renderBufferDirect(Z,I,X,W,y,ye),W.side=na):D.renderBufferDirect(Z,I,X,W,y,ye),y.onAfterRender(D,I,Z,X,W,ye)}function Ma(y,I,Z){I.isScene!==!0&&(I=Wt);const X=q.get(y),W=A.state.lights,ye=A.state.shadowsArray,Te=W.state.version,Se=ge.getParameters(y,W.state,ye,I,Z,A.state.lightProbeGridArray),Ae=ge.getProgramCacheKey(Se);let Ce=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,X.fog=I.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=de.get(y.envMap||X.environment,He),X.envMapRotation=X.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",Mt),Ce=new Map,X.programs=Ce);let Xe=Ce.get(Ae);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===Te)return Em(y,Se),Xe}else Se.uniforms=ge.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,Z,Se),y.onBeforeCompile(Se,D),Xe=ge.acquireProgram(Se,Ae),Ce.set(Ae,Xe),X.uniforms=Se.uniforms;const we=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=N.uniform),Em(y,Se),X.needsLights=ZS(y),X.lightsStateVersion=Te,X.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=Xe,X.uniformsList=null,Xe}function uo(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Bc.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Em(y,I){const Z=q.get(y);Z.outputColorSpace=I.outputColorSpace,Z.batching=I.batching,Z.batchingColor=I.batchingColor,Z.instancing=I.instancing,Z.instancingColor=I.instancingColor,Z.instancingMorph=I.instancingMorph,Z.skinning=I.skinning,Z.morphTargets=I.morphTargets,Z.morphNormals=I.morphNormals,Z.morphColors=I.morphColors,Z.morphTargetsCount=I.morphTargetsCount,Z.numClippingPlanes=I.numClippingPlanes,Z.numIntersection=I.numClipIntersection,Z.vertexAlphas=I.vertexAlphas,Z.vertexTangents=I.vertexTangents,Z.toneMapping=I.toneMapping}function WS(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(I.matrixWorld);for(let Z=0,X=y.length;Z<X;Z++){const W=y[Z];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function qS(y,I,Z,X,W){I.isScene!==!0&&(I=Wt),J.resetTextureUnits();const ye=I.fog,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?I.environment:null,Se=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:tt.workingColorSpace,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ce=de.get(X.envMap||Te,Ae),He=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Gt=!!Z.morphAttributes.color;let It=Pi;X.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=D.toneMapping);const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_n=vt!==void 0?vt.length:0,be=q.get(X),In=A.state.lights;if(st===!0&&(Ye===!0||y!==le)){const yt=y===le&&X.id===ne;N.setState(X,y,yt)}let rt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==In.state.version||be.outputColorSpace!==Se||W.isBatchedMesh&&be.batching===!1||!W.isBatchedMesh&&be.batching===!0||W.isBatchedMesh&&be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&be.instancing===!1||!W.isInstancedMesh&&be.instancing===!0||W.isSkinnedMesh&&be.skinning===!1||!W.isSkinnedMesh&&be.skinning===!0||W.isInstancedMesh&&be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&be.instancingMorph===!1&&W.morphTexture!==null||be.envMap!==Ce||X.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==N.numPlanes||be.numIntersection!==N.numIntersection)||be.vertexAlphas!==He||be.vertexTangents!==Xe||be.morphTargets!==we||be.morphNormals!==mt||be.morphColors!==Gt||be.toneMapping!==It||be.morphTargetsCount!==_n||!!be.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,be.__version=X.version);let jn=be.currentProgram;rt===!0&&(jn=Ma(X,I,W),P&&X.isNodeMaterial&&P.onUpdateProgram(X,jn,be));let bi=!1,ya=!1,Ws=!1;const xt=jn.getUniforms(),Vt=be.uniforms;if(x.useProgram(jn.program)&&(bi=!0,ya=!0,Ws=!0),X.id!==ne&&(ne=X.id,ya=!0),be.needsLights){const yt=WS(A.state.lightProbeGridArray,W);be.lightProbeGrid!==yt&&(be.lightProbeGrid=yt,ya=!0)}if(bi||le!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",y.projectionMatrix),xt.setValue(L,"viewMatrix",y.matrixWorldInverse);const ba=xt.map.cameraPosition;ba!==void 0&&ba.setValue(L,bt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),le!==y&&(le=y,ya=!0,Ws=!0)}if(be.needsLights&&(In.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",In.state.directionalShadowMap,J),In.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",In.state.spotShadowMap,J),In.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",In.state.pointShadowMap,J)),W.isSkinnedMesh){xt.setOptional(L,W,"bindMatrix"),xt.setOptional(L,W,"bindMatrixInverse");const yt=W.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),xt.setValue(L,"boneTexture",yt.boneTexture,J))}W.isBatchedMesh&&(xt.setOptional(L,W,"batchingTexture"),xt.setValue(L,"batchingTexture",W._matricesTexture,J),xt.setOptional(L,W,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",W._indirectTexture,J),xt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",W._colorsTexture,J));const Ea=Z.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0)&&C.update(W,Z,jn),(ya||be.receiveShadow!==W.receiveShadow)&&(be.receiveShadow=W.receiveShadow,xt.setValue(L,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&I.environment!==null&&(Vt.envMapIntensity.value=I.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=T2()),ya){if(xt.setValue(L,"toneMappingExposure",D.toneMappingExposure),be.needsLights&&YS(Vt,Ws),ye&&X.fog===!0&&Re.refreshFogUniforms(Vt,ye),Re.refreshMaterialUniforms(Vt,X,ce,pe,A.state.transmissionRenderTarget[y.id]),be.needsLights&&be.lightProbeGrid){const yt=be.lightProbeGrid;Vt.probesSH.value=yt.texture,Vt.probesMin.value.copy(yt.boundingBox.min),Vt.probesMax.value.copy(yt.boundingBox.max),Vt.probesResolution.value.copy(yt.resolution)}Bc.upload(L,uo(be),Vt,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bc.upload(L,uo(be),Vt,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(L,"center",W.center),xt.setValue(L,"modelViewMatrix",W.modelViewMatrix),xt.setValue(L,"normalMatrix",W.normalMatrix),xt.setValue(L,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){const yt=X.uniformsGroups;for(let ba=0,qs=yt.length;ba<qs;ba++){const bm=yt[ba];Y.update(bm,jn),Y.bind(bm,jn)}}return jn}function YS(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ZS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,I,Z){const X=q.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),q.get(y.texture).__webglTexture=I,q.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const Z=q.get(y);Z.__webglFramebuffer=I,Z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,Z=0){k=y,O=I,z=Z;let X=null,W=!1,ye=!1;if(y){const Se=q.get(y);if(Se.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(y.viewport),Me.copy(y.scissor),We=y.scissorTest,x.viewport(he),x.scissor(Me),x.setScissorTest(We),ne=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(Se.__hasExternalTextures)J.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(Se.__boundDepthTexture!==He){if(He!==null&&q.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const Ce=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?X=Ce[I][Z]:X=Ce[I],W=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?X=q.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?X=Ce[Z]:X=Ce,he.copy(y.viewport),Me.copy(y.scissor),We=y.scissorTest}else he.copy(Ue).multiplyScalar(ce).floor(),Me.copy(Dt).multiplyScalar(ce).floor(),We=ke;if(Z!==0&&(X=j),x.bindFramebuffer(L.FRAMEBUFFER,X)&&x.drawBuffers(y,X),x.viewport(he),x.scissor(Me),x.setScissorTest(We),W){const Se=q.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,Z)}else if(ye){const Se=I;for(let Ae=0;Ae<y.textures.length;Ae++){const Ce=q.get(y.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,Z,Se)}}else if(y!==null&&Z!==0){const Se=q.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,Z)}ne=-1},this.readRenderTargetPixels=function(y,I,Z,X,W,ye,Te,Se=0){if(!(y&&y.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){x.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Ce=y.textures[Se],He=Ce.format,Xe=Ce.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!w.textureFormatReadable(He)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Xe)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-X&&Z>=0&&Z<=y.height-W&&L.readPixels(I,Z,X,W,oe.convert(He),oe.convert(Xe),ye)}finally{const Ce=k!==null?q.get(k).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,I,Z,X,W,ye,Te,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(I>=0&&I<=y.width-X&&Z>=0&&Z<=y.height-W){x.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ce=y.textures[Se],He=Ce.format,Xe=Ce.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!w.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(I,Z,X,W,oe.convert(He),oe.convert(Xe),0);const mt=k!==null?q.get(k).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,mt);const Gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cb(L,Gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(we),L.deleteSync(Gt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,Z=0){const X=Math.pow(2,-Z),W=Math.floor(y.image.width*X),ye=Math.floor(y.image.height*X),Te=I!==null?I.x:0,Se=I!==null?I.y:0;J.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Te,Se,W,ye),x.unbindTexture()},this.copyTextureToTexture=function(y,I,Z=null,X=null,W=0,ye=0){let Te,Se,Ae,Ce,He,Xe,we,mt,Gt;const It=y.isCompressedTexture?y.mipmaps[ye]:y.image;if(Z!==null)Te=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,He=Z.min.y,Xe=Z.isBox3?Z.min.z:0;else{const Vt=Math.pow(2,-W);Te=Math.floor(It.width*Vt),Se=Math.floor(It.height*Vt),y.isDataArrayTexture?Ae=It.depth:y.isData3DTexture?Ae=Math.floor(It.depth*Vt):Ae=1,Ce=0,He=0,Xe=0}X!==null?(we=X.x,mt=X.y,Gt=X.z):(we=0,mt=0,Gt=0);const vt=oe.convert(I.format),_n=oe.convert(I.type);let be;I.isData3DTexture?(J.setTexture3D(I,0),be=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(J.setTexture2DArray(I,0),be=L.TEXTURE_2D_ARRAY):(J.setTexture2D(I,0),be=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const In=x.getParameter(L.UNPACK_ROW_LENGTH),rt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),jn=x.getParameter(L.UNPACK_SKIP_PIXELS),bi=x.getParameter(L.UNPACK_SKIP_ROWS),ya=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(L.UNPACK_SKIP_ROWS,He),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);const Ws=y.isDataArrayTexture||y.isData3DTexture,xt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Vt=q.get(y),Ea=q.get(I),yt=q.get(Vt.__renderTarget),ba=q.get(Ea.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,yt.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let qs=0;qs<Ae;qs++)Ws&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(y).__webglTexture,W,Xe+qs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(I).__webglTexture,ye,Gt+qs)),L.blitFramebuffer(Ce,He,Te,Se,we,mt,Te,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||q.has(y)){const Vt=q.get(y),Ea=q.get(I);x.bindFramebuffer(L.READ_FRAMEBUFFER,te),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let yt=0;yt<Ae;yt++)Ws?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,W,Xe+yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,W),xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ea.__webglTexture,ye,Gt+yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ea.__webglTexture,ye),W!==0?L.blitFramebuffer(Ce,He,Te,Se,we,mt,Te,Se,L.COLOR_BUFFER_BIT,L.NEAREST):xt?L.copyTexSubImage3D(be,ye,we,mt,Gt+yt,Ce,He,Te,Se):L.copyTexSubImage2D(be,ye,we,mt,Ce,He,Te,Se);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(be,ye,we,mt,Gt,Te,Se,Ae,vt,_n,It.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(be,ye,we,mt,Gt,Te,Se,Ae,vt,It.data):L.texSubImage3D(be,ye,we,mt,Gt,Te,Se,Ae,vt,_n,It):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,we,mt,Te,Se,vt,_n,It.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,we,mt,It.width,It.height,vt,It.data):L.texSubImage2D(L.TEXTURE_2D,ye,we,mt,Te,Se,vt,_n,It);x.pixelStorei(L.UNPACK_ROW_LENGTH,In),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,jn),x.pixelStorei(L.UNPACK_SKIP_ROWS,bi),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ya),ye===0&&I.generateMipmaps&&L.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){O=0,z=0,k=null,x.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const R2="mini-golf-build-2026-08-18",XS="mini-golf-leaderboard-v1",wn=.28,$n=24,gs=2,Ao=18,n_=[{id:"forest",name:"森林曲道",theme:"森林",par:3,bounds:{minX:-12,maxX:12,minZ:-22,maxZ:22},spawn:{x:0,y:wn,z:17},hole:{x:0,y:0,z:-17,radius:.55},cameraAngle:.7,surfaces:[{id:"forest-grass",type:"grass",friction:.2,bounds:{minX:-7.5,maxX:7.5,minZ:-20,maxZ:20}},{id:"forest-sand-left",type:"sand",friction:.74,bounds:{minX:-6.8,maxX:-2.4,minZ:1,maxZ:10}},{id:"forest-sand-right",type:"sand",friction:.74,bounds:{minX:2.2,maxX:6.4,minZ:-12,maxZ:-4}}],obstacles:[{id:"tree-1",type:"tree",position:{x:-2.4,y:.8,z:8},solid:!0,radius:.9},{id:"tree-2",type:"tree",position:{x:2.8,y:.8,z:3.4},solid:!0,radius:1},{id:"rock-1",type:"rock",position:{x:-1.3,y:.4,z:-6},solid:!0,radius:.8}],terrainFeatures:[{id:"forest-hill",type:"hill",center:{x:0,z:-2},strength:.08}],powerups:[{id:"forest-hio",type:"hole_in_one",position:{x:-5.2,y:.3,z:14}},{id:"forest-speed",type:"speed_boost",position:{x:0,y:.05,z:-10},direction:{x:0,z:-1}},{id:"forest-bounce",type:"bounce_pad",position:{x:4.8,y:.05,z:10},direction:{x:-1,z:-.2}}]},{id:"desert",name:"沙漠回旋",theme:"沙漠",par:4,bounds:{minX:-14,maxX:14,minZ:-24,maxZ:24},spawn:{x:-5,y:wn,z:18},hole:{x:5.5,y:0,z:-18,radius:.58},cameraAngle:.85,surfaces:[{id:"desert-grass",type:"grass",friction:.18,bounds:{minX:-8,maxX:8,minZ:-21,maxZ:21}},{id:"desert-sand-main",type:"sand",friction:.66,bounds:{minX:-2.5,maxX:6.5,minZ:-5,maxZ:11}},{id:"desert-sand-top",type:"sand",friction:.66,bounds:{minX:-7,maxX:-1.5,minZ:-17,maxZ:-11}}],obstacles:[{id:"dune-1",type:"dune",position:{x:-4,y:.6,z:5},solid:!0,radius:1.3},{id:"dune-2",type:"dune",position:{x:3.3,y:.6,z:-8},solid:!0,radius:1.4},{id:"pillar",type:"rock_pillar",position:{x:1.1,y:1.1,z:10},solid:!0,radius:.9}],terrainFeatures:[{id:"desert-wave",type:"slope",axis:"x",strength:.06}],powerups:[{id:"desert-hio",type:"hole_in_one",position:{x:-7,y:.3,z:15}},{id:"desert-speed",type:"speed_boost",position:{x:5.4,y:.05,z:2},direction:{x:.3,z:-1}},{id:"desert-bounce",type:"bounce_pad",position:{x:-5.5,y:.05,z:-7},direction:{x:1,z:-.2}}]},{id:"snow",name:"冰雪滑道",theme:"冰雪",par:3,bounds:{minX:-13,maxX:13,minZ:-25,maxZ:25},spawn:{x:0,y:wn,z:20},hole:{x:0,y:0,z:-19,radius:.55},cameraAngle:.55,surfaces:[{id:"snow-grass",type:"grass",friction:.16,bounds:{minX:-7,maxX:7,minZ:-22,maxZ:22}},{id:"snow-ice-main",type:"ice",friction:.02,bounds:{minX:-4.5,maxX:4.5,minZ:-15,maxZ:11}},{id:"snow-sand-soft",type:"sand",friction:.6,bounds:{minX:-7,maxX:-3.5,minZ:-2,maxZ:5}}],obstacles:[{id:"snowbank-1",type:"snowbank",position:{x:-5.4,y:.5,z:10},solid:!0,radius:1.3},{id:"snowbank-2",type:"snowbank",position:{x:5.2,y:.5,z:-4},solid:!0,radius:1.1},{id:"crystal-1",type:"ice_crystal",position:{x:.8,y:1.1,z:3},solid:!0,radius:.9}],terrainFeatures:[{id:"snow-lane",type:"ice_lane",length:24,strength:.03}],powerups:[{id:"snow-hio",type:"hole_in_one",position:{x:5.4,y:.3,z:16}},{id:"snow-speed",type:"speed_boost",position:{x:0,y:.05,z:-7},direction:{x:0,z:-1}},{id:"snow-bounce",type:"bounce_pad",position:{x:-4.8,y:.05,z:-12},direction:{x:1,z:0}}]}],Ut=t=>({x:Ot(t.x),y:Ot(t.y),z:Ot(t.z)}),Ot=t=>Number.isFinite(t)?Number(t.toFixed(4)):0,hd=(t,e)=>Math.sqrt(t*t+e*e),Hc=()=>[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}],Na=t=>n_.find(e=>e.id===t)??n_[0];function Ro(t,e){var n;return((n=t.find(i=>i.type===e))==null?void 0:n.count)??0}function i_(t,e,n){return t.map(i=>i.type===e?{...i,count:Math.max(0,n)}:i)}function C2(t){return[...t].sort((e,n)=>e.strokes-n.strokes||e.achievedAt-n.achievedAt||e.playerId.localeCompare(n.playerId)).map((e,n)=>({...e,rank:n+1}))}function w2(t){return[...t].sort((e,n)=>e.totalStrokes-n.totalStrokes||e.achievedAt-n.achievedAt||e.playerId.localeCompare(n.playerId)).map((e,n)=>({...e,rank:n+1}))}function D2(){if(typeof window>"u")return{levelBest:{},overall:[],persisted:!1};try{const t=window.localStorage.getItem(XS);if(!t)return{levelBest:{},overall:[],persisted:!0};const e=JSON.parse(t);return{levelBest:e.levelBest??{},overall:e.overall??[],persisted:!0}}catch{return{levelBest:{},overall:[],persisted:!1}}}function U2(t){typeof window>"u"||window.localStorage.setItem(XS,JSON.stringify(t))}function N2(t,e,n){return t.id==="forest"?Math.sin((e+n)*.12)*.08:t.id==="desert"?Math.sin(e*.35)*.06+Math.cos(n*.18)*.03:Math.sin(n*.2)*.03}function Co(t,e){return t.surfaces.find(i=>i.bounds?e.x>=i.bounds.minX&&e.x<=i.bounds.maxX&&e.z>=i.bounds.minZ&&e.z<=i.bounds.maxZ:!1)??t.surfaces[0]}function L2(t,e){return{id:`player-${t+1}`,name:`玩家 ${t+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:Ut(e),powerupInventory:Hc(),armedPowerup:null,collectedPowerupIds:[]}}function O2(){const t=Ie.useRef(null),e=Ie.useRef({scene:null,camera:null,renderer:null,ballMesh:null,holeMesh:null,shotArrow:null,powerupMeshes:new Map,obstacleMeshes:new Map,surfaceMeshes:new Map,animationFrame:null,clockStart:performance.now(),simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,listenerCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:1}),[n,i]=Ie.useState("menu"),[a,s]=Ie.useState("single"),[r,o]=Ie.useState("forest"),[l,c]=Ie.useState(2),[d,p]=Ie.useState(()=>D2()),[u,h]=Ie.useState(0),[S,E]=Ie.useState(0),[g,f]=Ie.useState(0),[v,M]=Ie.useState(0),[_,b]=Ie.useState(!1),[A,R]=Ie.useState(0),[m,T]=Ie.useState(()=>({position:Ut(Na("forest").spawn),velocity:{x:0,y:0,z:0},speed:0,radius:wn,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:Na("forest").surfaces[0].friction,lastCollision:null,lastSafePosition:Ut(Na("forest").spawn)})),[D,U]=Ie.useState({dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,direction:{x:0,z:-1},power:gs,minPower:gs,maxPower:Ao,strokeCount:0}),[P,j]=Ie.useState({mode:"follow",position:{x:0,y:14,z:12},target:{x:0,y:0,z:0},distance:12,minDistance:6,maxDistance:20,zoom:1,angle:.8,pitch:.7}),[te,V]=Ie.useState({motion:"静止",contact:"无碰撞"}),[O,z]=Ie.useState([]),[k,ne]=Ie.useState(Hc()),[le,he]=Ie.useState(null),[Me,We]=Ie.useState(null),[at,qe]=Ie.useState(null),[ae,pe]=Ie.useState("setup"),[ce,De]=Ie.useState([]),[Ne,Ue]=Ie.useState(0),[Dt,ke]=Ie.useState(1),[ft,st]=Ie.useState(0),[Ye,Lt]=Ie.useState(null),[bt,Ht]=Ie.useState([]),[Wt,Tt]=Ie.useState([]),Ee=Ie.useMemo(()=>Na(r),[r]),L=ce[Ne]??null;Ie.useEffect(()=>{e.current.reactCommitCount+=1}),Ie.useEffect(()=>{U2(d)},[d]),Ie.useEffect(()=>{const N=e.current;if(N.runtimeMountCount+=1,!t.current)return;const K=new s1;K.background=new $e("#04111f"),K.fog=new dm("#04111f",16,50);const se=new si(50,1,.1,200);se.position.set(0,12,12);const C=new A2({antialias:!0,alpha:!1});C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.shadowMap.enabled=!0,C.setSize(t.current.clientWidth,t.current.clientHeight),t.current.innerHTML="",t.current.appendChild(C.domElement);const ee=new R1("#dbeafe",1.8);K.add(ee);const G=new A1("#ffffff",1.8);G.position.set(8,18,10),G.castShadow=!0,K.add(G);const oe=new un(new Eu(wn,32,32),new ms({color:"#f8fafc",metalness:.2,roughness:.45}));oe.castShadow=!0,K.add(oe);const H=new un(new gl(.7,.7,.2,32),new ms({color:"#020617",roughness:1}));H.receiveShadow=!0,K.add(H);const Y=new D1(new F(0,0,-1),new F(0,wn+.2,0),1.5,3718648);K.add(Y),N.scene=K,N.camera=se,N.renderer=C,N.ballMesh=oe,N.holeMesh=H,N.shotArrow=Y,window.__THREE_SCENE__=K,window.__THREE_RENDERER__=C;const ue=()=>{if(!t.current||!N.camera||!N.renderer)return;const Pe=t.current.clientWidth,Ze=t.current.clientHeight;N.camera.aspect=Pe/Math.max(Ze,1),N.camera.updateProjectionMatrix(),N.renderer.setSize(Pe,Ze)};window.addEventListener("resize",ue),N.listenerCount+=1,ue();const fe=()=>{N.renderFrame+=1,N.logicLoopCount+=1,N.renderer&&N.scene&&N.camera&&N.renderer.render(N.scene,N.camera),N.animationFrame=requestAnimationFrame(fe)};return fe(),()=>{var Pe;window.removeEventListener("resize",ue),N.listenerCount=Math.max(0,N.listenerCount-1),N.animationFrame&&cancelAnimationFrame(N.animationFrame),(Pe=N.renderer)==null||Pe.dispose(),N.runtimeCleanupCount+=1}},[]),Ie.useEffect(()=>{const N=e.current;if(!N.scene)return;N.surfaceMeshes.forEach(H=>{var Y;return(Y=N.scene)==null?void 0:Y.remove(H)}),N.obstacleMeshes.forEach(H=>{var Y;return(Y=N.scene)==null?void 0:Y.remove(H)}),N.powerupMeshes.forEach(H=>{var Y;return(Y=N.scene)==null?void 0:Y.remove(H)}),N.surfaceMeshes.clear(),N.obstacleMeshes.clear(),N.powerupMeshes.clear();const K=new ms({color:"#334155",roughness:.9}),se=new un(new oa(Ee.bounds.maxX-Ee.bounds.minX+2,.6,Ee.bounds.maxZ-Ee.bounds.minZ+2),new ms({color:"#1e293b",roughness:1}));se.position.set(0,-.35,0),se.receiveShadow=!0,N.scene.add(se),Ee.surfaces.forEach(H=>{var Mt,Vi,di;const Y=H.bounds?H.bounds.maxX-H.bounds.minX:2,ue=H.bounds?H.bounds.maxZ-H.bounds.minZ:2,fe=H.type==="sand"?"#fbbf24":H.type==="ice"?"#93c5fd":Ee.id==="desert"?"#84cc16":"#22c55e",Pe=new un(new oa(Y,.08,ue),new ms({color:fe,roughness:H.type==="ice"?.15:.85,metalness:H.type==="ice"?.2:0})),Ze=H.bounds?(H.bounds.minX+H.bounds.maxX)/2:((Mt=H.center)==null?void 0:Mt.x)??0,ze=H.bounds?(H.bounds.minZ+H.bounds.maxZ)/2:((Vi=H.center)==null?void 0:Vi.z)??0;Pe.position.set(Ze,0,ze),Pe.receiveShadow=!0,(di=N.scene)==null||di.add(Pe),N.surfaceMeshes.set(H.id,Pe)});const C=.6,ee=1.1,G=Ee.bounds.maxX-Ee.bounds.minX,oe=Ee.bounds.maxZ-Ee.bounds.minZ;[{x:0,z:Ee.bounds.minZ-C/2,w:G+C*2,d:C},{x:0,z:Ee.bounds.maxZ+C/2,w:G+C*2,d:C},{x:Ee.bounds.minX-C/2,z:0,w:C,d:oe},{x:Ee.bounds.maxX+C/2,z:0,w:C,d:oe}].forEach((H,Y)=>{var fe;const ue=new un(new oa(H.w,ee,H.d),K);ue.position.set(H.x,ee/2-.05,H.z),ue.receiveShadow=!0,(fe=N.scene)==null||fe.add(ue),N.obstacleMeshes.set(`wall-${Y}`,ue)}),Ee.obstacles.forEach(H=>{var Pe;const Y=H.type.includes("pillar")?new gl(H.radius??1,H.radius??1,2.2,16):new Eu(H.radius??1,20,20),ue=H.type.includes("snow")||H.type.includes("ice")?"#e0f2fe":H.type.includes("rock")?"#78716c":H.type.includes("dune")?"#f59e0b":"#14532d",fe=new un(Y,new ms({color:ue,roughness:.9}));fe.position.set(H.position.x,H.position.y,H.position.z),fe.castShadow=!0,fe.receiveShadow=!0,(Pe=N.scene)==null||Pe.add(fe),N.obstacleMeshes.set(H.id,fe)})},[Ee]),Ie.useEffect(()=>{const N=Ee.powerups.map(K=>({...K,active:!0,collected:!1}));z(N)},[Ee]),Ie.useEffect(()=>{const N=e.current;N.scene&&(N.powerupMeshes.forEach(K=>{var se;return(se=N.scene)==null?void 0:se.remove(K)}),N.powerupMeshes.clear(),O.forEach(K=>{var ee;if(!K.active)return;const se=K.type==="hole_in_one"?"#f472b6":K.type==="speed_boost"?"#f97316":"#a78bfa",C=new un(K.type==="speed_boost"?new oa(1.2,.1,2.2):new gm(.25,.08,40,8),new ms({color:se,emissive:se,emissiveIntensity:.25}));C.position.set(K.position.x,K.position.y+.2,K.position.z),K.direction&&(C.rotation.y=Math.atan2(K.direction.x,K.direction.z)),(ee=N.scene)==null||ee.add(C),N.powerupMeshes.set(K.id,C)}))},[O]),Ie.useEffect(()=>{if(!e.current.ballMesh||!e.current.holeMesh||!e.current.camera||!e.current.shotArrow)return;const N=Ee,K=e.current.ballMesh,se=e.current.holeMesh,C=e.current.shotArrow;K.position.set(m.position.x,m.position.y,m.position.z),se.position.set(N.hole.x,-.03,N.hole.z),C.position.set(m.position.x,m.position.y+.45,m.position.z),C.setDirection(new F(D.direction.x,0,D.direction.z).normalize()),C.setLength(.5+D.power*.15),C.visible=n==="playing"&&!m.moving&&!_;const ee=P.distance,G=Ee.cameraAngle,oe={x:m.position.x+Math.sin(G)*ee,y:5+ee*.45,z:m.position.z+Math.cos(G)*ee};e.current.camera.position.lerp(new F(oe.x,oe.y,oe.z),.12),e.current.camera.lookAt(m.position.x,m.position.y,m.position.z),j(H=>({...H,position:Ut(oe),target:Ut(m.position),angle:G}))},[m,D.direction,D.power,P.distance,Ee,n,_]),Ie.useEffect(()=>{e.current.clockStart=performance.now()},[n,Ee.id,a]),Ie.useEffect(()=>{if(n!=="playing")return;let N=performance.now();const K=1e3/60;let se=0;const C=e.current,ee=G=>{const oe=Math.min(32,G-N);for(N=G,se+=oe,R(Ot((G-C.clockStart)/1e3));se>=K;)C.simulationTick+=1,de(K/1e3),se-=K;C.animationFrame=requestAnimationFrame(ee)};return C.animationFrame=requestAnimationFrame(ee),()=>{C.animationFrame&&cancelAnimationFrame(C.animationFrame)}},[n,Ee,a,ce,Ne,le,O,_]);function gn(N,K,se,C){const ee=Na(se);p(G=>{const oe=G.levelBest[se]??[],H=oe.find(ze=>ze.playerId===N);if(H&&H.strokes<=C)return G;const Y=oe.filter(ze=>ze.playerId!==N),ue=H&&H.strokes===C?H.achievedAt:Date.now(),fe=C2([...Y,{playerId:N,playerName:K,strokes:C,rank:0,par:ee.par,relativeToPar:C-ee.par,achievedAt:ue}]),Pe={...G.levelBest,[se]:fe},Ze=Object.entries(Object.values(Pe).flat().reduce((ze,Mt)=>{ze[Mt.playerId]||(ze[Mt.playerId]={playerName:Mt.playerName,scores:{}});const Vi=Object.keys(Pe).find(di=>(Pe[di]??[]).some(hi=>hi.playerId===Mt.playerId&&hi.achievedAt===Mt.achievedAt&&hi.strokes===Mt.strokes));return Vi&&(ze[Mt.playerId].scores[Vi]=Mt),ze},{})).map(([ze,Mt])=>({pid:ze,...Mt})).filter(ze=>ze.scores.forest&&ze.scores.desert&&ze.scores.snow).map(ze=>({playerId:ze.pid,playerName:ze.playerName,levelStrokes:{forest:ze.scores.forest.strokes,desert:ze.scores.desert.strokes,snow:ze.scores.snow.strokes},totalStrokes:ze.scores.forest.strokes+ze.scores.desert.strokes+ze.scores.snow.strokes,rank:0,achievedAt:Math.max(ze.scores.forest.achievedAt,ze.scores.desert.achievedAt,ze.scores.snow.achievedAt)}));return{levelBest:Pe,overall:w2(Ze),persisted:!0}})}function lt(N,K=k,se=le){a!=="local_multiplayer"||!L||De(C=>C.map((ee,G)=>G===Ne?{...ee,ballPosition:Ut(N.position),holeStrokes:u,totalStrokes:S,powerupInventory:K,armedPowerup:se}:ee))}function w(N){const K=Na(N);s("single"),o(N),i("playing"),b(!1),h(0),E(0),f(0),ne(Hc()),he(null),De([]),pe("setup"),st(C=>C+1);const se=Co(K,K.spawn);T({position:Ut(K.spawn),velocity:{x:0,y:0,z:0},speed:0,radius:wn,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:se.type,friction:se.friction,lastCollision:null,lastSafePosition:Ut(K.spawn)}),U(C=>({...C,dragging:!1,canShoot:!0,power:gs,strokeCount:0,direction:{x:0,z:-1},startScreen:null,currentScreen:null}))}function x(N,K){const se=Na(N),C=Array.from({length:K},(G,oe)=>L2(oe,se.spawn));s("local_multiplayer"),o(N),De(C),Ue(0),ke(1),st(G=>G+1),Lt(null),Ht([]),Tt([]),pe("playing"),i("playing"),b(!1),h(0),E(0),ne(Hc()),he(null);const ee=Co(se,se.spawn);T({position:Ut(se.spawn),velocity:{x:0,y:0,z:0},speed:0,radius:wn,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:ee.type,friction:ee.friction,lastCollision:null,lastSafePosition:Ut(se.spawn)}),U(G=>({...G,dragging:!1,canShoot:!0,power:gs,strokeCount:0,direction:{x:0,z:-1},startScreen:null,currentScreen:null}))}function B(N,K){const se=Ee,C=K[N],ee=Co(se,C.ballPosition);Ue(N),ne(C.powerupInventory),he(C.armedPowerup),h(C.holeStrokes),E(C.totalStrokes),T({position:Ut(C.ballPosition),velocity:{x:0,y:0,z:0},speed:0,radius:wn,moving:!1,sleeping:!0,airborne:!1,inHole:C.finished,outOfBounds:!1,currentSurface:ee.type,friction:ee.friction,lastCollision:null,lastSafePosition:Ut(C.ballPosition)}),U(G=>({...G,canShoot:!C.finished,dragging:!1,power:gs,startScreen:null,currentScreen:null,strokeCount:C.holeStrokes}))}function q(N){var oe;if(a!=="local_multiplayer")return;const K=ce.map((H,Y)=>Y===Ne?{...H,finished:!0,holeStrokes:N,totalStrokes:N,ballPosition:Ut(m.position),powerupInventory:k,armedPowerup:le}:H);De(K);const se=K.findIndex(H=>!H.finished);if(se>=0){ke(H=>H+1),B(se,K);return}const C=K.map(H=>({id:H.id,name:H.name,strokes:H.holeStrokes})).sort((H,Y)=>H.strokes-Y.strokes||H.id.localeCompare(Y.id));Tt(C);const ee=((oe=C[0])==null?void 0:oe.strokes)??0,G=C.filter(H=>H.strokes===ee).map(H=>H.id);Ht(G),Lt(G.length===1?G[0]:null),pe("complete"),i("local_result")}function J(N){b(!0),U(se=>({...se,canShoot:!1}));const K=Math.max(100,500-Math.max(0,N-Ee.par)*85-N*15);f(K),M(se=>se+K),a==="single"?(gn("solo-player","单人玩家",Ee.id,N),i("hole_complete")):q(N)}function de(N){T(K=>{if(!K.moving)return K;let se=K.position.x+K.velocity.x*N,C=K.position.z+K.velocity.z*N,ee=K.velocity.x,G=K.velocity.z,oe=K.lastCollision;const H=Ee,Y=Co(H,{x:se,y:wn,z:C}),ue=Y.friction,fe=Math.max(0,1-ue*N*3.8);ee*=fe,G*=fe,(se<H.bounds.minX||se>H.bounds.maxX)&&(ee*=-.72,se=Ti.clamp(se,H.bounds.minX,H.bounds.maxX),oe="boundary-x"),(C<H.bounds.minZ||C>H.bounds.maxZ)&&(G*=-.72,C=Ti.clamp(C,H.bounds.minZ,H.bounds.maxZ),oe="boundary-z"),H.obstacles.forEach(Ke=>{const Jt=(Ke.radius??1)+wn,pi=se-Ke.position.x,cs=C-Ke.position.z,Ei=Math.sqrt(pi*pi+cs*cs);if(Ei>0&&Ei<Jt){const Xs=pi/Ei,Ma=cs/Ei,uo=ee*Xs+G*Ma;ee=(ee-2*uo*Xs)*.76,G=(G-2*uo*Ma)*.76,se=Ke.position.x+Xs*Jt,C=Ke.position.z+Ma*Jt,oe=Ke.id}});let Pe=Me,Ze=at,ze=k,Mt=le;const Vi=(L==null?void 0:L.collectedPowerupIds)??[],di=[];O.forEach(Ke=>{const Jt=se-Ke.position.x,pi=C-Ke.position.z;if(!(Math.sqrt(Jt*Jt+pi*pi)>.9)){if(Ke.type==="hole_in_one"){if(a==="local_multiplayer"&&Vi.includes(Ke.id))return;ze=i_(ze,"hole_in_one",Ro(ze,"hole_in_one")+1),di.push(Ke.id),Pe="拾取一杆入洞",Ze=Ke.id}Ke.type==="speed_boost"&&Ke.direction&&(ee=Ti.clamp(ee+Ke.direction.x*5.5,-$n,$n),G=Ti.clamp(G+Ke.direction.z*5.5,-$n,$n),Pe="加速带触发",Ze=Ke.id),Ke.type==="bounce_pad"&&Ke.direction&&(ee=Ti.clamp(Ke.direction.x*8,-$n,$n),G=Ti.clamp(Ke.direction.z*8,-$n,$n),Pe="反弹垫触发",Ze=Ke.id,oe=Ke.id)}}),di.length>0&&(z(Ke=>Ke.map(Jt=>di.includes(Jt.id)&&a==="single"?{...Jt,active:!1,collected:!0}:Jt)),a==="local_multiplayer"&&L&&De(Ke=>Ke.map((Jt,pi)=>pi===Ne?{...Jt,collectedPowerupIds:Array.from(new Set([...Jt.collectedPowerupIds,...di])),powerupInventory:ze}:Jt)),ne(ze)),We(Pe),qe(Ze);const hi=hd(ee,G),ki=hi>.08,Dl=Math.sqrt((se-H.hole.x)**2+(C-H.hole.z)**2)<H.hole.radius&&hi<3.5,lo=wn+N2(H,se,C),co={position:{x:Ot(se),y:Ot(lo),z:Ot(C)},velocity:{x:Ot(ee),y:0,z:Ot(G)},speed:Ot(hi),radius:wn,moving:ki,sleeping:!ki,airborne:!1,inHole:Dl,outOfBounds:!1,currentSurface:Y.type,friction:Ot(ue),lastCollision:oe,lastSafePosition:ki?K.lastSafePosition:{x:Ot(se),y:Ot(lo),z:Ot(C)}};if(V({motion:ki?`滚动 ${Ot(hi)}`:"静止",contact:oe??Y.type}),lt(co,ze,Mt),!ki&&Dl&&!_){const Ke=u;setTimeout(()=>J(Ke),120)}return co})}function me(N,K){if(m.moving||_)return;let se=Ti.clamp(K,gs,Ao),C=le,ee=k;if(le==="hole_in_one"&&Ro(k,"hole_in_one")>0){const Y=Ee.hole.x-m.position.x,ue=Ee.hole.z-m.position.z,fe=hd(Y,ue)||1;se=Math.min(Ao,fe*.92),N={x:Y/fe,z:ue/fe},ee=i_(k,"hole_in_one",Ro(k,"hole_in_one")-1),C=null,ne(ee),he(null),We("一杆入洞已武装并触发")}const G=Ti.clamp(N.x*se,-$n,$n),oe=Ti.clamp(N.z*se,-$n,$n),H=u+1;h(H),E(H),U(Y=>({...Y,dragging:!1,currentScreen:null,startScreen:null,canShoot:!1,strokeCount:H,power:se,direction:N})),T(Y=>({...Y,moving:!0,sleeping:!1,inHole:!1,velocity:{x:Ot(G),y:0,z:Ot(oe)},speed:Ot(hd(G,oe)),lastCollision:null})),a==="local_multiplayer"&&L&&De(Y=>Y.map((ue,fe)=>fe===Ne?{...ue,holeStrokes:H,totalStrokes:H,powerupInventory:ee,armedPowerup:C}:ue))}function $(N){if(n!=="playing"||m.moving||_)return;const K=N.currentTarget.getBoundingClientRect(),se={x:N.clientX-K.left,y:N.clientY-K.top};U(C=>({...C,dragging:!0,startScreen:se,currentScreen:se}))}function ie(N){if(!D.dragging||!D.startScreen)return;const K=N.currentTarget.getBoundingClientRect(),se={x:N.clientX-K.left,y:N.clientY-K.top},C=D.startScreen.x-se.x,ee=D.startScreen.y-se.y,G=Math.sqrt(C*C+ee*ee)||1,oe=Ti.clamp(G/140*Ao,gs,Ao);U(H=>({...H,currentScreen:se,power:oe,direction:{x:Ot(C/G),z:Ot(ee/G)}}))}function ge(){D.dragging&&me(D.direction,D.power)}Ie.useEffect(()=>{U(N=>({...N,canShoot:!m.moving&&!_&&!m.inHole}))},[m.moving,_,m.inHole]);function Re(){const N=a==="local_multiplayer"&&L?L.ballPosition:Ee.spawn,K=Co(Ee,N),se={position:Ut(N),velocity:{x:0,y:0,z:0},speed:0,radius:wn,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:K.type,friction:K.friction,lastCollision:null,lastSafePosition:Ut(N)};T(se),lt(se)}function ve(){b(!1),i("level_select")}Ie.useEffect(()=>{const N={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:R2})},K={getState:()=>({ready:!0,gameState:n,mode:a,currentLevel:Ee?{id:Ee.id,name:Ee.name,theme:Ee.theme,par:Ee.par}:null,currentHoleStrokes:u,totalStrokes:S,currentScore:g,totalScore:v,holeComplete:_,elapsedTime:A})},se={getState:()=>({...m,position:Ut(m.position),velocity:Ut(m.velocity),lastSafePosition:Ut(m.lastSafePosition)})},C={getState:()=>({...D,direction:{...D.direction}})},ee={getState:()=>{var ue;return{levelId:Ee.id,name:Ee.name,theme:Ee.theme,par:Ee.par,bounds:{...Ee.bounds},spawn:Ut(Ee.spawn),hole:{...Ee.hole},surfaces:Ee.surfaces.map(fe=>({...fe})),obstacles:Ee.obstacles.map(fe=>({...fe,position:Ut(fe.position)})),terrainFeatures:Ee.terrainFeatures.map(fe=>({...fe})),obstacleCount:Ee.obstacles.length,sceneObjectCount:((ue=e.current.scene)==null?void 0:ue.children.length)??0,loaded:!0}}},G={getState:()=>({enabled:a==="local_multiplayer",mode:"local",status:ae,playerCount:ce.length,currentPlayerId:(L==null?void 0:L.id)??null,turnIndex:Ne,round:Dt,revision:ft,players:ce.map(ue=>({...ue,ballPosition:Ut(ue.ballPosition),powerupInventory:ue.powerupInventory.map(fe=>({...fe}))})),winnerId:Ye,tiedPlayerIds:[...bt]})},oe={getState:()=>({items:O.map(ue=>({...ue,position:Ut(ue.position)})),inventory:k.map(ue=>({...ue})),activeEffect:Me,lastTriggeredId:at,placingType:null,armedType:le,selectedPlacedId:null})},H={getState:()=>({...P,position:Ut(P.position),target:Ut(P.target)})},Y={getState:()=>{var ue;return{fixedStep:Ot(1/60),accumulator:0,simulationTick:e.current.simulationTick,renderFrame:e.current.renderFrame,reactCommitCount:e.current.reactCommitCount,logicLoopCount:e.current.logicLoopCount,listenerCount:e.current.listenerCount,runtimeMountCount:e.current.runtimeMountCount,runtimeCleanupCount:e.current.runtimeCleanupCount,engineGeneration:e.current.engineGeneration,poolStats:{meshes:{capacity:128,createdTotal:((ue=e.current.scene)==null?void 0:ue.children.length)??0,reused:0}}}}};window.__contract=N,window.__game=K,window.__ball=se,window.__shot=C,window.__course=ee,window.__multiplayer=G,window.__powerups=oe,window.__camera=H,window.__leaderboard={getState:()=>d},window.__performance=Y},[n,a,Ee,u,S,g,v,_,A,m,D,ae,ce,L,Ne,Dt,ft,Ye,bt,O,k,Me,at,le,P,d]);const _e=["forest","desert","snow"].map(N=>({id:N,name:Na(N).name,entries:d.levelBest[N]??[]}));return Q.jsx("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_rgba(2,6,23,0.98)_45%)] text-white",children:Q.jsxs("div",{className:"mx-auto flex min-h-screen max-w-7xl flex-col gap-4 p-4 lg:p-6",children:[Q.jsxs("header",{className:"panel-glass flex flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center lg:justify-between",children:[Q.jsxs("div",{children:[Q.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-emerald-300",children:"Three.js × React 19 × Tailwind"}),Q.jsx("h1",{className:"text-3xl font-black text-white",children:"3D 迷你高尔夫赛"}),Q.jsx("p",{className:"text-sm text-slate-300",children:"拖拽鼠标控制力度与方向，挑战森林、沙漠与冰雪三大主题球场。"})]}),Q.jsxs("div",{className:"flex flex-wrap gap-2",children:[Q.jsx("button",{id:"menu","data-testid":"start-btn",onClick:()=>i("level_select"),className:"rounded-xl bg-emerald-500 px-4 py-2 font-bold text-slate-950 transition hover:bg-emerald-400",children:"开始游戏"}),Q.jsx("button",{"data-testid":"multiplayer-btn",onClick:()=>i("local_setup"),className:"rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-100 transition hover:bg-cyan-400/20",children:"本地多人"}),Q.jsx("button",{"data-testid":"leaderboard-btn",onClick:()=>i("leaderboard"),className:"rounded-xl border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 font-semibold text-fuchsia-100 transition hover:bg-fuchsia-400/20",children:"排行榜"})]})]}),Q.jsxs("div",{className:"grid flex-1 gap-4 lg:grid-cols-[360px,1fr]",children:[Q.jsxs("aside",{className:"space-y-4",children:[Q.jsxs("section",{id:"levelSelect",className:"panel-glass p-4",children:[Q.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[Q.jsx("h2",{className:"text-lg font-bold",children:"关卡选择"}),Q.jsxs("span",{className:"badge",children:["当前：",Ee.name]})]}),Q.jsxs("div",{className:"grid gap-2",children:[Q.jsx("button",{"data-testid":"level-forest",onClick:()=>(o("forest"),n==="playing"?w("forest"):null),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",children:"森林：树木与岩石弹反"}),Q.jsx("button",{"data-testid":"level-desert",onClick:()=>(o("desert"),n==="playing"?w("desert"):null),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",children:"沙漠：高摩擦沙坑与沙丘"}),Q.jsx("button",{"data-testid":"level-snow",onClick:()=>(o("snow"),n==="playing"?w("snow"):null),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",children:"冰雪：超低摩擦冰面滑行"})]}),Q.jsxs("div",{className:"mt-3 grid gap-2 text-sm text-slate-300",children:[Q.jsx("p",{children:"草地 / 沙坑 / 冰面摩擦实时影响球速衰减。"}),Q.jsx("p",{children:"沙坑摩擦 ≥ 草地 3.5 倍；冰面摩擦 ≤ 草地 1/8。"})]}),n==="level_select"&&Q.jsx("button",{onClick:()=>w(r),className:"mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 hover:bg-emerald-400",children:"进入单人关卡"})]}),Q.jsxs("section",{id:"multiplayerLobby",className:"panel-glass p-4",children:[Q.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[Q.jsx("h2",{className:"text-lg font-bold",children:"本地多人对战"}),Q.jsx("span",{className:"badge",children:"2–4 人轮流"})]}),Q.jsx("label",{className:"mb-3 block text-sm text-slate-300",children:"玩家数量"}),Q.jsx("select",{"data-testid":"local-player-count",value:l,onChange:N=>c(Number(N.target.value)),className:"w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white",children:[2,3,4].map(N=>Q.jsxs("option",{value:N,children:[N," 名玩家"]},N))}),Q.jsxs("div",{className:"mt-4 flex gap-2",children:[Q.jsx("button",{"data-testid":"local-start-btn",onClick:()=>x(r,l),className:"flex-1 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 hover:bg-cyan-300",children:"开始对局"}),Q.jsx("button",{"data-testid":"local-exit-btn",onClick:()=>i("menu"),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10",children:"退出"})]}),Q.jsx("p",{className:"mt-3 text-sm text-slate-400",children:"每名玩家独立保存球位、杆数、一杆入洞库存与拾取状态。"})]}),Q.jsxs("section",{className:"panel-glass p-4",children:[Q.jsx("h2",{className:"mb-3 text-lg font-bold",children:"HUD / 契约状态"}),Q.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"当前杆数"}),Q.jsx("div",{"data-testid":"stroke-count",className:"text-2xl font-black",children:u})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"当前玩家"}),Q.jsx("div",{"data-testid":"current-player",className:"text-lg font-bold",children:(L==null?void 0:L.name)??"单人玩家"})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"击球力度"}),Q.jsx("div",{"data-testid":"shot-power",className:"text-lg font-bold",children:D.power.toFixed(2)})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"实时摩擦"}),Q.jsxs("div",{"data-testid":"surface-friction",className:"text-lg font-bold",children:[m.friction.toFixed(3)," · ",m.currentSurface]})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"瞄准反馈"}),Q.jsxs("div",{"data-testid":"aim-feedback",className:"text-xs font-semibold",children:["x:",D.direction.x.toFixed(2)," z:",D.direction.z.toFixed(2)," / 拖拽:",D.dragging?"是":"否"]})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"运动状态"}),Q.jsx("div",{"data-testid":"physics-motion",className:"text-xs font-semibold",children:te.motion})]}),Q.jsxs("div",{className:"col-span-2 rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"接触/碰撞反馈"}),Q.jsx("div",{"data-testid":"physics-contact",className:"text-xs font-semibold",children:te.contact})]})]})]}),Q.jsxs("section",{className:"panel-glass p-4",children:[Q.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[Q.jsx("h2",{className:"text-lg font-bold",children:"道具状态"}),Q.jsx("span",{"data-testid":"powerup-status",className:"badge",children:Me??"待机中"})]}),Q.jsxs("div",{className:"space-y-2 text-sm text-slate-200",children:[Q.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[Q.jsx("span",{children:"一杆入洞库存"}),Q.jsxs("button",{"data-testid":"powerup-hio",disabled:Ro(k,"hole_in_one")<=0,onClick:()=>he(N=>N==="hole_in_one"?null:"hole_in_one"),className:"rounded-lg bg-pink-400 px-3 py-1 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40",children:[Ro(k,"hole_in_one")," · ",le?"已武装":"点击武装"]})]}),Q.jsx("div",{className:"rounded-xl bg-white/5 px-3 py-2",children:"反弹垫：接触后沿可见方向弹开。"}),Q.jsx("div",{className:"rounded-xl bg-white/5 px-3 py-2",children:"加速带：真实接触后获得有限速度增益。"})]})]}),Q.jsxs("section",{className:"panel-glass p-4",children:[Q.jsx("h2",{className:"mb-3 text-lg font-bold",children:"相机与控制"}),Q.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[Q.jsx("button",{"data-testid":"zoom-in",onClick:()=>j(N=>({...N,distance:Math.max(N.minDistance,N.distance-1),zoom:Ot(1/Math.max(.5,N.distance-1))})),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10",children:"放大"}),Q.jsx("button",{"data-testid":"zoom-out",onClick:()=>j(N=>({...N,distance:Math.min(N.maxDistance,N.distance+1),zoom:Ot(1/Math.max(.5,N.distance+1))})),className:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10",children:"缩小"}),Q.jsx("button",{"data-testid":"reset-position",onClick:Re,className:"col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10",children:"重置球位"})]})]})]}),Q.jsxs("main",{className:"space-y-4",children:[Q.jsxs("section",{id:"gameScreen",className:"panel-glass relative min-h-[620px] overflow-hidden",children:[Q.jsxs("div",{className:"absolute left-4 top-4 z-10 flex flex-wrap gap-2 text-xs",children:[Q.jsxs("span",{className:"badge",children:["模式：",a==="single"?"单人":"本地多人"]}),Q.jsxs("span",{className:"badge",children:["关卡：",Ee.theme]}),Q.jsxs("span",{className:"badge",children:["Par ",Ee.par]}),Q.jsxs("span",{className:"badge",children:["时间 ",A.toFixed(1),"s"]})]}),Q.jsx("div",{ref:t,onPointerDown:$,onPointerMove:ie,onPointerUp:ge,onPointerLeave:ge,className:"h-[620px] w-full cursor-crosshair bg-slate-950"}),(n==="menu"||n==="level_select"||n==="leaderboard")&&Q.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-950/55 backdrop-blur-sm",children:Q.jsxs("div",{className:"max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center shadow-2xl",children:[Q.jsx("h2",{className:"text-3xl font-black",children:"把握角度，少杆入洞"}),Q.jsx("p",{className:"mt-3 text-slate-300",children:"在右侧实时渲染的 Three.js 场景中体验 3D 迷你高尔夫，拖拽即可瞄准并击球。"})]})})]}),Q.jsxs("section",{id:"leaderboardScreen",className:"panel-glass p-4",children:[Q.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[Q.jsx("h2",{className:"text-xl font-black",children:"排行榜"}),Q.jsxs("span",{className:"badge",children:["持久化：",d.persisted?"是":"否"]})]}),Q.jsxs("div",{className:"grid gap-4 xl:grid-cols-2",children:[_e.map(N=>Q.jsxs("div",{className:"rounded-2xl bg-white/5 p-4",children:[Q.jsx("h3",{className:"mb-3 text-lg font-bold",children:N.name}),Q.jsx("div",{className:"space-y-2 text-sm",children:N.entries.length===0?Q.jsx("p",{className:"text-slate-400",children:"暂无合法完赛成绩"}):N.entries.map(K=>Q.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2",children:[Q.jsxs("span",{children:["#",K.rank," ",K.playerName]}),Q.jsxs("span",{children:[K.strokes," 杆 / ",K.relativeToPar>=0?"+":"",K.relativeToPar]})]},`${K.playerId}-${K.achievedAt}`))})]},N.id)),Q.jsxs("div",{className:"rounded-2xl bg-white/5 p-4",children:[Q.jsx("h3",{className:"mb-3 text-lg font-bold",children:"全关卡总榜"}),Q.jsx("div",{className:"space-y-2 text-sm",children:d.overall.length===0?Q.jsx("p",{className:"text-slate-400",children:"需同时完成森林、沙漠、冰雪三关后生成"}):d.overall.map(N=>Q.jsxs("div",{className:"rounded-xl bg-slate-950/60 px-3 py-2",children:[Q.jsxs("div",{className:"flex items-center justify-between",children:[Q.jsxs("span",{children:["#",N.rank," ",N.playerName]}),Q.jsxs("span",{children:[N.totalStrokes," 杆"]})]}),Q.jsxs("div",{className:"mt-1 text-xs text-slate-400",children:["森 ",N.levelStrokes.forest," / 沙 ",N.levelStrokes.desert," / 雪 ",N.levelStrokes.snow]})]},`${N.playerId}-${N.achievedAt}`))})]})]})]}),Q.jsxs("section",{id:"resultScreen",className:"panel-glass p-4",children:[Q.jsxs("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",children:[Q.jsxs("div",{children:[Q.jsx("h2",{className:"text-xl font-black",children:"结算面板"}),Q.jsx("p",{className:"text-sm text-slate-300",children:"少杆完成可获得更高分数，单人模式成绩会写入持久化排行榜。"})]}),Q.jsx("button",{"data-testid":"result-next",onClick:ve,className:"rounded-xl bg-emerald-500 px-4 py-2 font-bold text-slate-950 hover:bg-emerald-400",children:"继续"})]}),Q.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-4",children:[Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"当前分数"}),Q.jsx("div",{className:"text-2xl font-black",children:g})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"总分"}),Q.jsx("div",{className:"text-2xl font-black",children:v})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"是否进洞"}),Q.jsx("div",{className:"text-2xl font-black",children:m.inHole?"是":"否"})]}),Q.jsxs("div",{className:"rounded-xl bg-white/5 p-3",children:[Q.jsx("div",{className:"text-slate-400",children:"状态"}),Q.jsx("div",{className:"text-2xl font-black",children:_?"完成":"进行中"})]})]})]}),Q.jsxs("section",{id:"localLeaderboardScreen","data-testid":"local-match-leaderboard",className:"panel-glass p-4",children:[Q.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[Q.jsx("h2",{className:"text-xl font-black",children:"本地多人平局 / 对局排行榜"}),Q.jsx("span",{className:"badge",children:Ye?`胜者：${Ye}`:bt.length>1?"出现平局":"待开始"})]}),Q.jsx("div",{className:"space-y-2 text-sm",children:Wt.length===0?Q.jsx("p",{className:"text-slate-400",children:"开始本地多人后，这里将展示本局最终排名。"}):Wt.map((N,K)=>Q.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[Q.jsxs("span",{children:["#",K+1," ",N.name,bt.includes(N.id)&&bt.length>1?"（并列）":""]}),Q.jsxs("span",{children:[N.strokes," 杆"]})]},N.id))})]})]})]})]})})}YE.createRoot(document.getElementById("root")).render(Q.jsx(hM.StrictMode,{children:Q.jsx(O2,{})}));
