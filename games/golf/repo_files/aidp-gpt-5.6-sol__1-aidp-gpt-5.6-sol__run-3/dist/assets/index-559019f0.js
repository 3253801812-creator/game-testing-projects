(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function o_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l_={exports:{}},vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nM=Symbol.for("react.transitional.element"),iM=Symbol.for("react.fragment");function c_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:nM,type:e,key:i,ref:t!==void 0?t:null,props:n}}vu.Fragment=iM;vu.jsx=c_;vu.jsxs=c_;l_.exports=vu;var q=l_.exports,u_={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh=Symbol.for("react.transitional.element"),aM=Symbol.for("react.portal"),sM=Symbol.for("react.fragment"),rM=Symbol.for("react.strict_mode"),oM=Symbol.for("react.profiler"),lM=Symbol.for("react.consumer"),cM=Symbol.for("react.context"),uM=Symbol.for("react.forward_ref"),fM=Symbol.for("react.suspense"),dM=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),hM=Symbol.for("react.activity"),Um=Symbol.iterator;function pM(e){return e===null||typeof e!="object"?null:(e=Um&&e[Um]||e["@@iterator"],typeof e=="function"?e:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,p_={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=p_,this.updater=n||d_}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function m_(){}m_.prototype=Zr.prototype;function $h(e,t,n){this.props=e,this.context=t,this.refs=p_,this.updater=n||d_}var tp=$h.prototype=new m_;tp.constructor=$h;h_(tp,Zr.prototype);tp.isPureReactComponent=!0;var Nm=Array.isArray;function cd(){}var be={H:null,A:null,T:null,S:null},g_=Object.prototype.hasOwnProperty;function ep(e,t,n){var i=n.ref;return{$$typeof:Jh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function mM(e,t){return ep(e.type,t,e.props)}function np(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jh}function gM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lm=/\/+/g;function ku(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gM(""+e.key):t.toString(36)}function _M(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(cd,cd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ar(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Jh:case aM:r=!0;break;case f_:return r=e._init,ar(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+ku(e,0):i,Nm(a)?(n="",r!=null&&(n=r.replace(Lm,"$&/")+"/"),ar(a,t,n,"",function(c){return c})):a!=null&&(np(a)&&(a=mM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Lm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Nm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+ku(i,l),r+=ar(i,t,n,s,a);else if(l=pM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+ku(i,l++),r+=ar(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return ar(_M(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Tl(e,t,n){if(e==null)return e;var i=[],a=0;return ar(e,i,"","",function(s){return t.call(n,s,a++)}),i}function vM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Om=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xM={map:Tl,forEach:function(e,t,n){Tl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tl(e,function(){t++}),t},toArray:function(e){return Tl(e,function(t){return t})||[]},only:function(e){if(!np(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=hM;It.Children=xM;It.Component=Zr;It.Fragment=sM;It.Profiler=oM;It.PureComponent=$h;It.StrictMode=rM;It.Suspense=fM;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return be.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=h_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!g_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return ep(e.type,a,i)};It.createContext=function(e){return e={$$typeof:cM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:lM,_context:e},e};It.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)g_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return ep(e,s,a)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:uM,render:e}};It.isValidElement=np;It.lazy=function(e){return{$$typeof:f_,_payload:{_status:-1,_result:e},_init:vM}};It.memo=function(e,t){return{$$typeof:dM,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=be.T,n={};be.T=n;try{var i=e(),a=be.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(cd,Om)}catch(s){Om(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),be.T=t}};It.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()};It.use=function(e){return be.H.use(e)};It.useActionState=function(e,t,n){return be.H.useActionState(e,t,n)};It.useCallback=function(e,t){return be.H.useCallback(e,t)};It.useContext=function(e){return be.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return be.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return be.H.useEffect(e,t)};It.useEffectEvent=function(e){return be.H.useEffectEvent(e)};It.useId=function(){return be.H.useId()};It.useImperativeHandle=function(e,t,n){return be.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return be.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return be.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return be.H.useMemo(e,t)};It.useOptimistic=function(e,t){return be.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return be.H.useReducer(e,t,n)};It.useRef=function(e){return be.H.useRef(e)};It.useState=function(e){return be.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return be.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return be.H.useTransition()};It.version="19.2.8";u_.exports=It;var kn=u_.exports;const SM=o_(kn);var __={exports:{}},xu={},v_={exports:{}},x_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,P){var D=O.length;O.push(P);t:for(;0<D;){var G=D-1>>>1,nt=O[G];if(0<a(nt,P))O[G]=P,O[D]=nt,D=G;else break t}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var P=O[0],D=O.pop();if(D!==P){O[0]=D;t:for(var G=0,nt=O.length,at=nt>>>1;G<at;){var lt=2*(G+1)-1,Bt=O[lt],Mt=lt+1,Tt=O[Mt];if(0>a(Bt,D))Mt<nt&&0>a(Tt,Bt)?(O[G]=Tt,O[Mt]=D,G=Mt):(O[G]=Bt,O[lt]=D,G=lt);else if(Mt<nt&&0>a(Tt,D))O[G]=Tt,O[Mt]=D,G=Mt;else break t}}return P}function a(O,P){var D=O.sortIndex-P.sortIndex;return D!==0?D:O.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,p=null,f=3,h=!1,x=!1,E=!1,_=!1,u=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function g(O){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=O)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function T(O){if(E=!1,g(O),!x)if(n(l)!==null)x=!0,A||(A=!0,L());else{var P=n(c);P!==null&&H(T,P.startTime-O)}}var A=!1,R=-1,v=5,b=-1;function w(){return _?!0:!(e.unstable_now()-b<v)}function U(){if(_=!1,A){var O=e.unstable_now();b=O;var P=!0;try{t:{x=!1,E&&(E=!1,m(R),R=-1),h=!0;var D=f;try{e:{for(g(O),p=n(l);p!==null&&!(p.expirationTime>O&&w());){var G=p.callback;if(typeof G=="function"){p.callback=null,f=p.priorityLevel;var nt=G(p.expirationTime<=O);if(O=e.unstable_now(),typeof nt=="function"){p.callback=nt,g(O),P=!0;break e}p===n(l)&&i(l),g(O)}else i(l);p=n(l)}if(p!==null)P=!0;else{var at=n(c);at!==null&&H(T,at.startTime-O),P=!1}}break t}finally{p=null,f=D,h=!1}P=void 0}}finally{P?L():A=!1}}}var L;if(typeof M=="function")L=function(){M(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=U,L=function(){j.postMessage(null)}}else L=function(){u(U,0)};function H(O,P){R=u(function(){O(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var D=f;f=P;try{return O()}finally{f=D}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var D=f;f=O;try{return P()}finally{f=D}},e.unstable_scheduleCallback=function(O,P,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,O){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=D+nt,O={id:d++,callback:P,priorityLevel:O,startTime:D,expirationTime:nt,sortIndex:-1},D>G?(O.sortIndex=D,t(c,O),n(l)===null&&O===n(c)&&(E?(m(R),R=-1):E=!0,H(T,D-G))):(O.sortIndex=nt,t(l,O),x||h||(x=!0,A||(A=!0,L()))),O},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(O){var P=f;return function(){var D=f;f=P;try{return O.apply(this,arguments)}finally{f=D}}}})(x_);v_.exports=x_;var MM=v_.exports,S_={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yM=kn;function M_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ea(){}var bn={d:{f:Ea,r:function(){throw Error(M_(522))},D:Ea,C:Ea,L:Ea,m:Ea,X:Ea,S:Ea,M:Ea},p:0,findDOMNode:null},EM=Symbol.for("react.portal");function bM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:EM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var wo=yM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Su(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;An.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(M_(299));return bM(e,t,null,n)};An.flushSync=function(e){var t=wo.T,n=bn.p;try{if(wo.T=null,bn.p=2,e)return e()}finally{wo.T=t,bn.p=n,bn.d.f()}};An.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,bn.d.C(e,t))};An.prefetchDNS=function(e){typeof e=="string"&&bn.d.D(e)};An.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Su(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?bn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&bn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};An.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Su(t.as,t.crossOrigin);bn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&bn.d.M(e)};An.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Su(n,t.crossOrigin);bn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};An.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Su(t.as,t.crossOrigin);bn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else bn.d.m(e)};An.requestFormReset=function(e){bn.d.r(e)};An.unstable_batchedUpdates=function(e,t){return e(t)};An.useFormState=function(e,t,n){return wo.H.useFormState(e,t,n)};An.useFormStatus=function(){return wo.H.useHostTransitionStatus()};An.version="19.2.8";function y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y_)}catch(e){console.error(e)}}y_(),S_.exports=An;var TM=S_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=MM,E_=kn,AM=TM;function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function T_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pm(e){if(ll(e)!==e)throw Error(tt(188))}function RM(e){var t=e.alternate;if(!t){if(t=ll(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Pm(a),e;if(s===i)return Pm(a),t;s=s.sibling}throw Error(tt(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function R_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R_(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,CM=Symbol.for("react.element"),Al=Symbol.for("react.transitional.element"),Mo=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),C_=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),w_=Symbol.for("react.consumer"),na=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),Da=Symbol.for("react.lazy"),hd=Symbol.for("react.activity"),wM=Symbol.for("react.memo_cache_sentinel"),zm=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=zm&&e[zm]||e["@@iterator"],typeof e=="function"?e:null)}var DM=Symbol.for("react.client.reference");function pd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===DM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ud:return"Profiler";case C_:return"StrictMode";case fd:return"Suspense";case dd:return"SuspenseList";case hd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Mo:return"Portal";case na:return e.displayName||"Context";case w_:return(e._context.displayName||"Context")+".Consumer";case ip:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ap:return t=e.displayName||null,t!==null?t:pd(e.type)||"Memo";case Da:t=e._payload,e=e._init;try{return pd(e(t))}catch{}}return null}var yo=Array.isArray,Ot=E_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=AM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ys={pending:!1,data:null,method:null,action:null},md=[],ur=-1;function Vi(e){return{current:e}}function on(e){0>ur||(e.current=md[ur],md[ur]=null,ur--)}function Me(e,t){ur++,md[ur]=e.current,e.current=t}var Ii=Vi(null),Wo=Vi(null),ka=Vi(null),Pc=Vi(null);function zc(e,t){switch(Me(ka,t),Me(Wo,e),Me(Ii,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=V0(t),e=Kx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}on(Ii),Me(Ii,e)}function Nr(){on(Ii),on(Wo),on(ka)}function gd(e){e.memoizedState!==null&&Me(Pc,e);var t=Ii.current,n=Kx(t,e.type);t!==n&&(Me(Wo,e),Me(Ii,n))}function Ic(e){Wo.current===e&&(on(Ii),on(Wo)),Pc.current===e&&(on(Pc),nl._currentValue=ys)}var Xu,Im;function ds(e){if(Xu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xu=t&&t[1]||"",Im=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xu+e+Im}var Wu=!1;function qu(e,t){if(!e||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var f=h}Reflect.construct(e,[],p)}else{try{p.call()}catch(h){f=h}e.call(p.prototype)}}else{try{throw Error()}catch(h){f=h}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ds(n):""}function UM(e,t){switch(e.tag){case 26:case 27:case 5:return ds(e.type);case 16:return ds("Lazy");case 13:return e.child!==t&&t!==null?ds("Suspense Fallback"):ds("Suspense");case 19:return ds("SuspenseList");case 0:case 15:return qu(e.type,!1);case 11:return qu(e.type.render,!1);case 1:return qu(e.type,!0);case 31:return ds("Activity");default:return""}}function Bm(e){try{var t="",n=null;do t+=UM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var _d=Object.prototype.hasOwnProperty,sp=Je.unstable_scheduleCallback,Yu=Je.unstable_cancelCallback,NM=Je.unstable_shouldYield,LM=Je.unstable_requestPaint,Zn=Je.unstable_now,OM=Je.unstable_getCurrentPriorityLevel,D_=Je.unstable_ImmediatePriority,U_=Je.unstable_UserBlockingPriority,Bc=Je.unstable_NormalPriority,PM=Je.unstable_LowPriority,N_=Je.unstable_IdlePriority,zM=Je.log,IM=Je.unstable_setDisableYieldValue,cl=null,Kn=null;function Ia(e){if(typeof zM=="function"&&IM(e),Kn&&typeof Kn.setStrictMode=="function")try{Kn.setStrictMode(cl,e)}catch{}}var Qn=Math.clz32?Math.clz32:HM,BM=Math.log,FM=Math.LN2;function HM(e){return e>>>=0,e===0?32:31-(BM(e)/FM|0)|0}var Rl=256,Cl=262144,wl=4194304;function hs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=hs(i):(r&=o,r!==0?a=hs(r):n||(n=o&~e,n!==0&&(a=hs(n))))):(o=i&~s,o!==0?a=hs(o):r!==0?a=hs(r):n||(n=i&~e,n!==0&&(a=hs(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function GM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L_(){var e=wl;return wl<<=1,!(wl&62914560)&&(wl=4194304),e}function Zu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function VM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Qn(n),p=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var h=f[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&O_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function O_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Qn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function P_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Qn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function z_(e,t){var n=t&-t;return n=n&42?1:rp(n),n&(e.suspendedLanes|t)?0:n}function rp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function op(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function I_(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:rS(e.type))}function Fm(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var as=Math.random().toString(36).slice(2),fn="__reactFiber$"+as,zn="__reactProps$"+as,Kr="__reactContainer$"+as,vd="__reactEvents$"+as,kM="__reactListeners$"+as,XM="__reactHandles$"+as,Hm="__reactResources$"+as,dl="__reactMarker$"+as;function lp(e){delete e[fn],delete e[zn],delete e[vd],delete e[kM],delete e[XM]}function fr(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kr]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Y0(e);e!==null;){if(n=e[fn])return n;e=Y0(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){if(e=e[fn]||e[Kr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function Mr(e){var t=e[Hm];return t||(t=e[Hm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[dl]=!0}var B_=new Set,F_={};function Os(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(F_[e]=t,e=0;e<t.length;e++)B_.add(t[e])}var WM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gm={},Vm={};function qM(e){return _d.call(Vm,e)?!0:_d.call(Gm,e)?!1:WM.test(e)?Vm[e]=!0:(Gm[e]=!0,!1)}function dc(e,t,n){if(qM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Dl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ai(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function H_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function YM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xd(e){if(!e._valueTracker){var t=H_(e)?"checked":"value";e._valueTracker=YM(e,t,""+e[t])}}function G_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=H_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Fc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ZM=/[\n"\\]/g;function li(e){return e.replace(ZM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Sd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ai(t)):e.value!==""+ai(t)&&(e.value=""+ai(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Md(e,r,ai(t)):n!=null?Md(e,r,ai(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ai(o):e.removeAttribute("name")}function V_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){xd(e);return}n=n!=null?""+ai(n):"",t=t!=null?""+ai(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),xd(e)}function Md(e,t,n){t==="number"&&Fc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ai(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function k_(e,t,n){if(t!=null&&(t=""+ai(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ai(n):""}function X_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(yo(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ai(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),xd(e)}function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var KM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function km(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||KM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function W_(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&km(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&km(e,s,t[s])}function cp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var QM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hc(e){return jM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var yd=null;function up(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,Er=null;function Xm(e){var t=Qr(e);if(t&&(e=t.stateNode)){var n=e[zn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Sd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+li(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[zn]||null;if(!a)throw Error(tt(90));Sd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&G_(i)}break t;case"textarea":k_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}}}var Ku=!1;function q_(e,t,n){if(Ku)return e(t,n);Ku=!0;try{var i=e(t);return i}finally{if(Ku=!1,(dr!==null||Er!==null)&&(Lu(),dr&&(t=dr,e=Er,Er=dr=null,Xm(t),e)))for(t=0;t<e.length;t++)Xm(e[t])}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[zn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=!1;if(da)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Ed=!1}var Ba=null,fp=null,pc=null;function Y_(){if(pc)return pc;var e,t=fp,n=t.length,i,a="value"in Ba?Ba.value:Ba.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return pc=a.slice(e,1<i?1-i:void 0)}function mc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Wm(){return!1}function In(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:Wm,this.isPropagationStopped=Wm,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=In(Ps),hl=Te({},Ps,{view:0,detail:0}),JM=In(hl),Qu,ju,oo,Eu=Te({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Qu=e.screenX-oo.screenX,ju=e.screenY-oo.screenY):ju=Qu=0,oo=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),qm=In(Eu),$M=Te({},Eu,{dataTransfer:0}),ty=In($M),ey=Te({},hl,{relatedTarget:0}),Ju=In(ey),ny=Te({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=In(ny),ay=Te({},Ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sy=In(ay),ry=Te({},Ps,{data:0}),Ym=In(ry),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cy[e])?!!t[e]:!1}function dp(){return uy}var fy=Te({},hl,{key:function(e){if(e.key){var t=oy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(e){return e.type==="keypress"?mc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dy=In(fy),hy=Te({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=In(hy),py=Te({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),my=In(py),gy=Te({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=In(gy),vy=Te({},Eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=In(vy),Sy=Te({},Ps,{newState:0,oldState:0}),My=In(Sy),yy=[9,13,27,32],hp=da&&"CompositionEvent"in window,Do=null;da&&"documentMode"in document&&(Do=document.documentMode);var Ey=da&&"TextEvent"in window&&!Do,Z_=da&&(!hp||Do&&8<Do&&11>=Do),Km=String.fromCharCode(32),Qm=!1;function K_(e,t){switch(e){case"keyup":return yy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function by(e,t){switch(e){case"compositionend":return Q_(t);case"keypress":return t.which!==32?null:(Qm=!0,Km);case"textInput":return e=t.data,e===Km&&Qm?null:e;default:return null}}function Ty(e,t){if(hr)return e==="compositionend"||!hp&&K_(e,t)?(e=Y_(),pc=fp=Ba=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Z_&&t.locale!=="ko"?null:t.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ay[e.type]:t==="textarea"}function j_(e,t,n,i){dr?Er?Er.push(i):Er=[i]:dr=i,t=iu(t,"onChange"),0<t.length&&(n=new yu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Uo=null,Yo=null;function Ry(e){qx(e,0)}function bu(e){var t=Eo(e);if(G_(t))return e}function Jm(e,t){if(e==="change")return t}var J_=!1;if(da){var $u;if(da){var tf="oninput"in document;if(!tf){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),tf=typeof $m.oninput=="function"}$u=tf}else $u=!1;J_=$u&&(!document.documentMode||9<document.documentMode)}function t0(){Uo&&(Uo.detachEvent("onpropertychange",$_),Yo=Uo=null)}function $_(e){if(e.propertyName==="value"&&bu(Yo)){var t=[];j_(t,Yo,e,up(e)),q_(Ry,t)}}function Cy(e,t,n){e==="focusin"?(t0(),Uo=t,Yo=n,Uo.attachEvent("onpropertychange",$_)):e==="focusout"&&t0()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(Yo)}function Dy(e,t){if(e==="click")return bu(t)}function Uy(e,t){if(e==="input"||e==="change")return bu(t)}function Ny(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jn=typeof Object.is=="function"?Object.is:Ny;function Zo(e,t){if(Jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!_d.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,t){var n=e0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=e0(n)}}function tv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ev(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fc(e.document)}return t}function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ly=da&&"documentMode"in document&&11>=document.documentMode,pr=null,bd=null,No=null,Td=!1;function i0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||pr==null||pr!==Fc(i)||(i=pr,"selectionStart"in i&&pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Zo(No,i)||(No=i,i=iu(bd,"onSelect"),0<i.length&&(t=new yu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=pr)))}function os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},ef={},nv={};da&&(nv=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function zs(e){if(ef[e])return ef[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nv)return ef[e]=t[n];return e}var iv=zs("animationend"),av=zs("animationiteration"),sv=zs("animationstart"),Oy=zs("transitionrun"),Py=zs("transitionstart"),zy=zs("transitioncancel"),rv=zs("transitionend"),ov=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ad.push("scrollEnd");function bi(e,t){ov.set(e,t),Os(t,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],gr=0,mp=0;function Tu(){for(var e=gr,t=mp=gr=0;t<e;){var n=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];ni[t++]=null;var s=ni[t];if(ni[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&lv(n,a,s)}}function Au(e,t,n,i){ni[gr++]=e,ni[gr++]=t,ni[gr++]=n,ni[gr++]=i,mp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function gp(e,t,n,i){return Au(e,t,n,i),Gc(e)}function Is(e,t){return Au(e,null,null,t),Gc(e)}function lv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Qn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Gc(e){if(50<Go)throw Go=0,Yd=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function Iy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,t,n,i){return new Iy(e,t,n,i)}function _p(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var n=e.alternate;return n===null?(n=Wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")_p(e)&&(r=1);else if(typeof e=="string")r=VE(e,n,Ii.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case hd:return e=Wn(31,n,t,a),e.elementType=hd,e.lanes=s,e;case cr:return Es(n.children,a,s,t);case C_:r=8,a|=24;break;case ud:return e=Wn(12,n,t,a|2),e.elementType=ud,e.lanes=s,e;case fd:return e=Wn(13,n,t,a),e.elementType=fd,e.lanes=s,e;case dd:return e=Wn(19,n,t,a),e.elementType=dd,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case na:r=10;break t;case w_:r=9;break t;case ip:r=11;break t;case ap:r=14;break t;case Da:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Wn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Es(e,t,n,i){return e=Wn(7,e,i,t),e.lanes=n,e}function nf(e,t,n){return e=Wn(6,e,null,t),e.lanes=n,e}function uv(e){var t=Wn(18,null,null,0);return t.stateNode=e,t}function af(e,t,n){return t=Wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a0=new WeakMap;function ci(e,t){if(typeof e=="object"&&e!==null){var n=a0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bm(t)},a0.set(e,t),t)}return{value:e,source:t,stack:Bm(t)}}var vr=[],xr=0,Vc=null,Ko=0,si=[],ri=0,Ja=null,Ni=1,Li="";function ta(e,t){vr[xr++]=Ko,vr[xr++]=Vc,Vc=e,Ko=t}function fv(e,t,n){si[ri++]=Ni,si[ri++]=Li,si[ri++]=Ja,Ja=e;var i=Ni;e=Li;var a=32-Qn(i)-1;i&=~(1<<a),n+=1;var s=32-Qn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Ni=1<<32-Qn(t)+a|n<<a|i,Li=s+e}else Ni=1<<s|n<<a|i,Li=e}function vp(e){e.return!==null&&(ta(e,1),fv(e,1,0))}function xp(e){for(;e===Vc;)Vc=vr[--xr],vr[xr]=null,Ko=vr[--xr],vr[xr]=null;for(;e===Ja;)Ja=si[--ri],si[ri]=null,Li=si[--ri],si[ri]=null,Ni=si[--ri],si[ri]=null}function dv(e,t){si[ri++]=Ni,si[ri++]=Li,si[ri++]=Ja,Ni=t.id,Li=t.overflow,Ja=e}var dn=null,Ee=null,$t=!1,Xa=null,ui=!1,Rd=Error(tt(519));function $a(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qo(ci(t,e)),Rd}function s0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[fn]=e,t[zn]=i,n){case"dialog":qt("cancel",t),qt("close",t);break;case"iframe":case"object":case"embed":qt("load",t);break;case"video":case"audio":for(n=0;n<tl.length;n++)qt(tl[n],t);break;case"source":qt("error",t);break;case"img":case"image":case"link":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"input":qt("invalid",t),V_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":qt("invalid",t);break;case"textarea":qt("invalid",t),X_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Zx(t.textContent,n)?(i.popover!=null&&(qt("beforetoggle",t),qt("toggle",t)),i.onScroll!=null&&qt("scroll",t),i.onScrollEnd!=null&&qt("scrollend",t),i.onClick!=null&&(t.onclick=ia),t=!0):t=!1,t||$a(e,!0)}function r0(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:dn=dn.return}}function Vs(e){if(e!==dn)return!1;if(!$t)return r0(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Jd(e.type,e.memoizedProps)),n=!n),n&&Ee&&$a(e),r0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ee=q0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ee=q0(e)}else t===27?(t=Ee,ss(e.type)?(e=nh,nh=null,Ee=e):Ee=t):Ee=dn?di(e.stateNode.nextSibling):null;return!0}function Rs(){Ee=dn=null,$t=!1}function sf(){var e=Xa;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),Xa=null),e}function Qo(e){Xa===null?Xa=[e]:Xa.push(e)}var Cd=Vi(null),Bs=null,aa=null;function Na(e,t,n){Me(Cd,t._currentValue),t._currentValue=n}function la(e){e._currentValue=Cd.current,on(Cd)}function wd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Dd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),wd(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(tt(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),wd(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function jr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=a.type;Jn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Pc.current){if(r=a.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}a=a.return}e!==null&&Dd(t,e,n,i),t.flags|=262144}function kc(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){Bs=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return hv(Bs,e)}function Nl(e,t){return Bs===null&&Cs(e),hv(e,t)}function hv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},aa===null){if(e===null)throw Error(tt(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return n}var By=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fy=Je.unstable_scheduleCallback,Hy=Je.unstable_NormalPriority,qe={$$typeof:na,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sp(){return{controller:new By,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&Fy(Hy,function(){e.controller.abort()})}var Lo=null,Ud=0,Pr=0,br=null;function Gy(e,t){if(Lo===null){var n=Lo=[];Ud=0,Pr=Wp(),br={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ud++,t.then(o0,o0),t}function o0(){if(--Ud===0&&Lo!==null){br!==null&&(br.status="fulfilled");var e=Lo;Lo=null,Pr=0,br=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var l0=Ot.S;Ot.S=function(e,t){Rx=Zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gy(e,t),l0!==null&&l0(e,t)};var bs=Vi(null);function Mp(){var e=bs.current;return e!==null?e:ve.pooledCache}function _c(e,t){t===null?Me(bs,bs.current):Me(bs,t.pool)}function pv(){var e=Mp();return e===null?null:{parent:qe._currentValue,pool:e}}var Jr=Error(tt(460)),yp=Error(tt(474)),Ru=Error(tt(542)),Xc={then:function(){}};function c0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ia,ia),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e;default:if(typeof t.status=="string")t.then(ia,ia);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e}throw Ts=t,Jr}}function ps(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ts=n,Jr):n}}var Ts=null;function u0(){if(Ts===null)throw Error(tt(459));var e=Ts;return Ts=null,e}function f0(e){if(e===Jr||e===Ru)throw Error(tt(483))}var Tr=null,jo=0;function Ll(e){var t=jo;return jo+=1,Tr===null&&(Tr=[]),mv(Tr,e,t)}function lo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ol(e,t){throw t.$$typeof===CM?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gv(e){function t(u,m){if(e){var M=u.deletions;M===null?(u.deletions=[m],u.flags|=16):M.push(m)}}function n(u,m){if(!e)return null;for(;m!==null;)t(u,m),m=m.sibling;return null}function i(u){for(var m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function a(u,m){return u=oa(u,m),u.index=0,u.sibling=null,u}function s(u,m,M){return u.index=M,e?(M=u.alternate,M!==null?(M=M.index,M<m?(u.flags|=67108866,m):M):(u.flags|=67108866,m)):(u.flags|=1048576,m)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,m,M,g){return m===null||m.tag!==6?(m=nf(M,u.mode,g),m.return=u,m):(m=a(m,M),m.return=u,m)}function l(u,m,M,g){var T=M.type;return T===cr?d(u,m,M.props.children,g,M.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Da&&ps(T)===m.type)?(m=a(m,M.props),lo(m,M),m.return=u,m):(m=gc(M.type,M.key,M.props,null,u.mode,g),lo(m,M),m.return=u,m)}function c(u,m,M,g){return m===null||m.tag!==4||m.stateNode.containerInfo!==M.containerInfo||m.stateNode.implementation!==M.implementation?(m=af(M,u.mode,g),m.return=u,m):(m=a(m,M.children||[]),m.return=u,m)}function d(u,m,M,g,T){return m===null||m.tag!==7?(m=Es(M,u.mode,g,T),m.return=u,m):(m=a(m,M),m.return=u,m)}function p(u,m,M){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=nf(""+m,u.mode,M),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Al:return M=gc(m.type,m.key,m.props,null,u.mode,M),lo(M,m),M.return=u,M;case Mo:return m=af(m,u.mode,M),m.return=u,m;case Da:return m=ps(m),p(u,m,M)}if(yo(m)||so(m))return m=Es(m,u.mode,M,null),m.return=u,m;if(typeof m.then=="function")return p(u,Ll(m),M);if(m.$$typeof===na)return p(u,Nl(u,m),M);Ol(u,m)}return null}function f(u,m,M,g){var T=m!==null?m.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(u,m,""+M,g);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Al:return M.key===T?l(u,m,M,g):null;case Mo:return M.key===T?c(u,m,M,g):null;case Da:return M=ps(M),f(u,m,M,g)}if(yo(M)||so(M))return T!==null?null:d(u,m,M,g,null);if(typeof M.then=="function")return f(u,m,Ll(M),g);if(M.$$typeof===na)return f(u,m,Nl(u,M),g);Ol(u,M)}return null}function h(u,m,M,g,T){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return u=u.get(M)||null,o(m,u,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Al:return u=u.get(g.key===null?M:g.key)||null,l(m,u,g,T);case Mo:return u=u.get(g.key===null?M:g.key)||null,c(m,u,g,T);case Da:return g=ps(g),h(u,m,M,g,T)}if(yo(g)||so(g))return u=u.get(M)||null,d(m,u,g,T,null);if(typeof g.then=="function")return h(u,m,M,Ll(g),T);if(g.$$typeof===na)return h(u,m,M,Nl(m,g),T);Ol(m,g)}return null}function x(u,m,M,g){for(var T=null,A=null,R=m,v=m=0,b=null;R!==null&&v<M.length;v++){R.index>v?(b=R,R=null):b=R.sibling;var w=f(u,R,M[v],g);if(w===null){R===null&&(R=b);break}e&&R&&w.alternate===null&&t(u,R),m=s(w,m,v),A===null?T=w:A.sibling=w,A=w,R=b}if(v===M.length)return n(u,R),$t&&ta(u,v),T;if(R===null){for(;v<M.length;v++)R=p(u,M[v],g),R!==null&&(m=s(R,m,v),A===null?T=R:A.sibling=R,A=R);return $t&&ta(u,v),T}for(R=i(R);v<M.length;v++)b=h(R,u,v,M[v],g),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?v:b.key),m=s(b,m,v),A===null?T=b:A.sibling=b,A=b);return e&&R.forEach(function(U){return t(u,U)}),$t&&ta(u,v),T}function E(u,m,M,g){if(M==null)throw Error(tt(151));for(var T=null,A=null,R=m,v=m=0,b=null,w=M.next();R!==null&&!w.done;v++,w=M.next()){R.index>v?(b=R,R=null):b=R.sibling;var U=f(u,R,w.value,g);if(U===null){R===null&&(R=b);break}e&&R&&U.alternate===null&&t(u,R),m=s(U,m,v),A===null?T=U:A.sibling=U,A=U,R=b}if(w.done)return n(u,R),$t&&ta(u,v),T;if(R===null){for(;!w.done;v++,w=M.next())w=p(u,w.value,g),w!==null&&(m=s(w,m,v),A===null?T=w:A.sibling=w,A=w);return $t&&ta(u,v),T}for(R=i(R);!w.done;v++,w=M.next())w=h(R,u,v,w.value,g),w!==null&&(e&&w.alternate!==null&&R.delete(w.key===null?v:w.key),m=s(w,m,v),A===null?T=w:A.sibling=w,A=w);return e&&R.forEach(function(L){return t(u,L)}),$t&&ta(u,v),T}function _(u,m,M,g){if(typeof M=="object"&&M!==null&&M.type===cr&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Al:t:{for(var T=M.key;m!==null;){if(m.key===T){if(T=M.type,T===cr){if(m.tag===7){n(u,m.sibling),g=a(m,M.props.children),g.return=u,u=g;break t}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Da&&ps(T)===m.type){n(u,m.sibling),g=a(m,M.props),lo(g,M),g.return=u,u=g;break t}n(u,m);break}else t(u,m);m=m.sibling}M.type===cr?(g=Es(M.props.children,u.mode,g,M.key),g.return=u,u=g):(g=gc(M.type,M.key,M.props,null,u.mode,g),lo(g,M),g.return=u,u=g)}return r(u);case Mo:t:{for(T=M.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===M.containerInfo&&m.stateNode.implementation===M.implementation){n(u,m.sibling),g=a(m,M.children||[]),g.return=u,u=g;break t}else{n(u,m);break}else t(u,m);m=m.sibling}g=af(M,u.mode,g),g.return=u,u=g}return r(u);case Da:return M=ps(M),_(u,m,M,g)}if(yo(M))return x(u,m,M,g);if(so(M)){if(T=so(M),typeof T!="function")throw Error(tt(150));return M=T.call(M),E(u,m,M,g)}if(typeof M.then=="function")return _(u,m,Ll(M),g);if(M.$$typeof===na)return _(u,m,Nl(u,M),g);Ol(u,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,m!==null&&m.tag===6?(n(u,m.sibling),g=a(m,M),g.return=u,u=g):(n(u,m),g=nf(M,u.mode,g),g.return=u,u=g),r(u)):n(u,m)}return function(u,m,M,g){try{jo=0;var T=_(u,m,M,g);return Tr=null,T}catch(R){if(R===Jr||R===Ru)throw R;var A=Wn(29,R,null,u.mode);return A.lanes=g,A.return=u,A}finally{}}}var ws=gv(!0),_v=gv(!1),Ua=!1;function Ep(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Gc(e),lv(e,null,n),t}return Au(e,i,t,n),Gc(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,P_(e,n)}}function rf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ld=!1;function Po(){if(Ld){var e=br;if(e!==null)throw e}}function zo(e,t,n,i){Ld=!1;var a=e.updateQueue;Ua=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,d=c=l=null,o=s;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(Qt&f)===f:(i&f)===f){f!==0&&f===Pr&&(Ld=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,E=o;f=t;var _=n;switch(E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(_,p,f);break t}p=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,f=typeof x=="function"?x.call(_,p,f):x,f==null)break t;p=Te({},p,f);break t;case 2:Ua=!0}}f=o.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),es|=r,e.lanes=r,e.memoizedState=p}}function vv(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function xv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vv(n[e],t)}var zr=Vi(null),Wc=Vi(0);function d0(e,t){e=ga,Me(Wc,e),Me(zr,t),ga=e|t.baseLanes}function Od(){Me(Wc,ga),Me(zr,zr.current)}function bp(){ga=Wc.current,on(zr),on(Wc)}var $n=Vi(null),fi=null;function La(e){var t=e.alternate;Me(Fe,Fe.current&1),Me($n,e),fi===null&&(t===null||zr.current!==null||t.memoizedState!==null)&&(fi=e)}function Pd(e){Me(Fe,Fe.current),Me($n,e),fi===null&&(fi=e)}function Sv(e){e.tag===22?(Me(Fe,Fe.current),Me($n,e),fi===null&&(fi=e)):Oa()}function Oa(){Me(Fe,Fe.current),Me($n,$n.current)}function Xn(e){on($n),fi===e&&(fi=null),on(Fe)}var Fe=Vi(0);function qc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||th(n)||eh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,Vt=null,he=null,Xe=null,Yc=!1,Ar=!1,Ds=!1,Zc=0,Jo=0,Rr=null,ky=0;function Le(){throw Error(tt(321))}function Tp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function Ap(e,t,n,i,a,s){return ha=s,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?jv:Ip,Ds=!1,s=n(i,a),Ds=!1,Ar&&(s=yv(t,n,i,a)),Mv(e),s}function Mv(e){Ot.H=$o;var t=he!==null&&he.next!==null;if(ha=0,Xe=he=Vt=null,Yc=!1,Jo=0,Rr=null,t)throw Error(tt(300));e===null||Ye||(e=e.dependencies,e!==null&&kc(e)&&(Ye=!0))}function yv(e,t,n,i){Vt=e;var a=0;do{if(Ar&&(Rr=null),Jo=0,Ar=!1,25<=a)throw Error(tt(301));if(a+=1,Xe=he=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ot.H=Jv,s=t(n,i)}while(Ar);return s}function Xy(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?ml(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(Vt.flags|=1024),t}function Rp(){var e=Zc!==0;return Zc=0,e}function Cp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wp(e){if(Yc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yc=!1}ha=0,Xe=he=Vt=null,Ar=!1,Jo=Zc=0,Rr=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Vt.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function He(){if(he===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Xe===null?Vt.memoizedState:Xe.next;if(t!==null)Xe=t,he=e;else{if(e===null)throw Vt.alternate===null?Error(tt(467)):Error(tt(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Xe===null?Vt.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var t=Jo;return Jo+=1,Rr===null&&(Rr=[]),e=mv(Rr,e,t),t=Vt,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?jv:Ip),e}function wu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===na)return hn(e)}throw Error(tt(438,String(e)))}function Dp(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cu(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=wM;return t.index++,n}function pa(e,t){return typeof t=="function"?t(e):t}function vc(e){var t=He();return Up(t,he,e)}function Up(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Qt&p)===p:(ha&p)===p){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Pr&&(d=!0);else if((ha&f)===f){c=c.next,f===Pr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Vt.lanes|=f,es|=f;p=c.action,Ds&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else f={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,Vt.lanes|=p,es|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Jn(s,e.memoizedState)&&(Ye=!0,d&&(n=br,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function of(e){var t=He(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Jn(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Ev(e,t,n){var i=Vt,a=He(),s=$t;if(s){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Jn((he||a).memoizedState,n);if(r&&(a.memoizedState=n,Ye=!0),a=a.queue,Np(Av.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Ir(9,{destroy:void 0},Tv.bind(null,i,a,n,t),null),ve===null)throw Error(tt(349));s||ha&127||bv(i,t,n)}return n}function bv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=Cu(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tv(e,t,n,i){t.value=n,t.getSnapshot=i,Rv(t)&&Cv(e)}function Av(e,t,n){return n(function(){Rv(t)&&Cv(e)})}function Rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch{return!0}}function Cv(e){var t=Is(e,2);t!==null&&On(t,e,2)}function zd(e){var t=En();if(typeof e=="function"){var n=e;if(e=n(),Ds){Ia(!0);try{n()}finally{Ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function wv(e,t,n,i){return e.baseState=n,Up(e,he,typeof i=="function"?i:pa)}function Wy(e,t,n,i,a){if(Uu(e))throw Error(tt(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ot.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Dv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Dv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Ot.T,r={};Ot.T=r;try{var o=n(a,i),l=Ot.S;l!==null&&l(r,o),h0(e,t,o)}catch(c){Id(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ot.T=s}}else try{s=n(a,i),h0(e,t,s)}catch(c){Id(e,t,c)}}function h0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){p0(e,t,i)},function(i){return Id(e,t,i)}):p0(e,t,n)}function p0(e,t,n){t.status="fulfilled",t.value=n,Uv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Dv(e,n)))}function Id(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Uv(t),t=t.next;while(t!==i)}e.action=null}function Uv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nv(e,t){return t}function m0(e,t){if($t){var n=ve.formState;if(n!==null){t:{var i=Vt;if($t){if(Ee){e:{for(var a=Ee,s=ui;a.nodeType!==8;){if(!s){a=null;break e}if(a=di(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ee=di(a.nextSibling),i=a.data==="F!";break t}}$a(i)}i=!1}i&&(t=n[0])}}return n=En(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nv,lastRenderedState:t},n.queue=i,n=Zv.bind(null,Vt,i),i.dispatch=n,i=zd(!1),s=zp.bind(null,Vt,!1,i.queue),i=En(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Wy.bind(null,Vt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function g0(e){var t=He();return Lv(t,he,e)}function Lv(e,t,n){if(t=Up(e,t,Nv)[0],e=vc(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ml(t)}catch(r){throw r===Jr?Ru:r}else i=t;t=He();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,Ir(9,{destroy:void 0},qy.bind(null,a,n),null)),[i,s,e]}function qy(e,t){e.action=t}function _0(e){var t=He(),n=he;if(n!==null)return Lv(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ir(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=Cu(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ov(){return He().memoizedState}function xc(e,t,n,i){var a=En();Vt.flags|=e,a.memoizedState=Ir(1|t,{destroy:void 0},n,i===void 0?null:i)}function Du(e,t,n,i){var a=He();i=i===void 0?null:i;var s=a.memoizedState.inst;he!==null&&i!==null&&Tp(i,he.memoizedState.deps)?a.memoizedState=Ir(t,s,n,i):(Vt.flags|=e,a.memoizedState=Ir(1|t,s,n,i))}function v0(e,t){xc(8390656,8,e,t)}function Np(e,t){Du(2048,8,e,t)}function Yy(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=Cu(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Pv(e){var t=He().memoizedState;return Yy({ref:t,nextImpl:e}),function(){if(se&2)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function zv(e,t){return Du(4,2,e,t)}function Iv(e,t){return Du(4,4,e,t)}function Bv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fv(e,t,n){n=n!=null?n.concat([e]):null,Du(4,4,Bv.bind(null,t,e),n)}function Lp(){}function Hv(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Tp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Gv(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Tp(t,i[1]))return i[0];if(i=e(),Ds){Ia(!0);try{e()}finally{Ia(!1)}}return n.memoizedState=[i,t],i}function Op(e,t,n){return n===void 0||ha&1073741824&&!(Qt&261930)?e.memoizedState=t:(e.memoizedState=n,e=wx(),Vt.lanes|=e,es|=e,n)}function Vv(e,t,n,i){return Jn(n,t)?n:zr.current!==null?(e=Op(e,n,i),Jn(e,t)||(Ye=!0),e):!(ha&42)||ha&1073741824&&!(Qt&261930)?(Ye=!0,e.memoizedState=n):(e=wx(),Vt.lanes|=e,es|=e,t)}function kv(e,t,n,i,a){var s=re.p;re.p=s!==0&&8>s?s:8;var r=Ot.T,o={};Ot.T=o,zp(e,!1,t,n);try{var l=a(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Vy(l,i);Io(e,t,d,jn(e))}else Io(e,t,i,jn(e))}catch(p){Io(e,t,{then:function(){},status:"rejected",reason:p},jn())}finally{re.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function Zy(){}function Bd(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var a=Xv(e).queue;kv(e,a,t,ys,n===null?Zy:function(){return Wv(e),n(i)})}function Xv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ys,baseState:ys,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:ys},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wv(e){var t=Xv(e);t.next===null&&(t=e.alternate.memoizedState),Io(e,t.next.queue,{},jn())}function Pp(){return hn(nl)}function qv(){return He().memoizedState}function Yv(){return He().memoizedState}function Ky(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jn();e=Wa(n);var i=qa(t,e,n);i!==null&&(On(i,t,n),Oo(i,t,n)),t={cache:Sp()},e.payload=t;return}t=t.return}}function Qy(e,t,n){var i=jn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e)?Kv(t,n):(n=gp(e,t,n,i),n!==null&&(On(n,e,i),Qv(n,t,i)))}function Zv(e,t,n){var i=jn();Io(e,t,n,i)}function Io(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Kv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Jn(o,r))return Au(e,t,a,0),ve===null&&Tu(),!1}catch{}finally{}if(n=gp(e,t,a,i),n!==null)return On(n,e,i),Qv(n,t,i),!0}return!1}function zp(e,t,n,i){if(i={lane:2,revertLane:Wp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Uu(e)){if(t)throw Error(tt(479))}else t=gp(e,n,i,2),t!==null&&On(t,e,2)}function Uu(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function Kv(e,t){Ar=Yc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,P_(e,n)}}var $o={readContext:hn,use:wu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};$o.useEffectEvent=Le;var jv={readContext:hn,use:wu,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:v0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,xc(4194308,4,Bv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xc(4194308,4,e,t)},useInsertionEffect:function(e,t){xc(4,2,e,t)},useMemo:function(e,t){var n=En();t=t===void 0?null:t;var i=e();if(Ds){Ia(!0);try{e()}finally{Ia(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=En();if(n!==void 0){var a=n(t);if(Ds){Ia(!0);try{n(t)}finally{Ia(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Qy.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:function(e){e=zd(e);var t=e.queue,n=Zv.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lp,useDeferredValue:function(e,t){var n=En();return Op(n,e,t)},useTransition:function(){var e=zd(!1);return e=kv.bind(null,Vt,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,a=En();if($t){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),ve===null)throw Error(tt(349));Qt&127||bv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,v0(Av.bind(null,i,s,e),[e]),i.flags|=2048,Ir(9,{destroy:void 0},Tv.bind(null,i,s,n,t),null),n},useId:function(){var e=En(),t=ve.identifierPrefix;if($t){var n=Li,i=Ni;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Zc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ky++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pp,useFormState:m0,useActionState:m0,useOptimistic:function(e){var t=En();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zp.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Dp,useCacheRefresh:function(){return En().memoizedState=Ky.bind(null,Vt)},useEffectEvent:function(e){var t=En(),n={impl:e};return t.memoizedState=n,function(){if(se&2)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},Ip={readContext:hn,use:wu,useCallback:Hv,useContext:hn,useEffect:Np,useImperativeHandle:Fv,useInsertionEffect:zv,useLayoutEffect:Iv,useMemo:Gv,useReducer:vc,useRef:Ov,useState:function(){return vc(pa)},useDebugValue:Lp,useDeferredValue:function(e,t){var n=He();return Vv(n,he.memoizedState,e,t)},useTransition:function(){var e=vc(pa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ml(e),t]},useSyncExternalStore:Ev,useId:qv,useHostTransitionStatus:Pp,useFormState:g0,useActionState:g0,useOptimistic:function(e,t){var n=He();return wv(n,he,e,t)},useMemoCache:Dp,useCacheRefresh:Yv};Ip.useEffectEvent=Pv;var Jv={readContext:hn,use:wu,useCallback:Hv,useContext:hn,useEffect:Np,useImperativeHandle:Fv,useInsertionEffect:zv,useLayoutEffect:Iv,useMemo:Gv,useReducer:of,useRef:Ov,useState:function(){return of(pa)},useDebugValue:Lp,useDeferredValue:function(e,t){var n=He();return he===null?Op(n,e,t):Vv(n,he.memoizedState,e,t)},useTransition:function(){var e=of(pa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ml(e),t]},useSyncExternalStore:Ev,useId:qv,useHostTransitionStatus:Pp,useFormState:_0,useActionState:_0,useOptimistic:function(e,t){var n=He();return he!==null?wv(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Dp,useCacheRefresh:Yv};Jv.useEffectEvent=Pv;function lf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=jn(),a=Wa(i);a.payload=t,n!=null&&(a.callback=n),t=qa(e,a,i),t!==null&&(On(t,e,i),Oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=jn(),a=Wa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=qa(e,a,i),t!==null&&(On(t,e,i),Oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jn(),i=Wa(n);i.tag=2,t!=null&&(i.callback=t),t=qa(e,i,n),t!==null&&(On(t,e,n),Oo(t,e,n))}};function x0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Zo(n,i)||!Zo(a,s):!0}function S0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Fd.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function $v(e){Hc(e)}function tx(e){console.error(e)}function ex(e){Hc(e)}function Kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function M0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Hd(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Kc(e,t)},n}function nx(e){return e=Wa(e),e.tag=3,e}function ix(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){M0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){M0(t,n,i),typeof a!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function jy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&jr(t,n,a,!0),n=$n.current,n!==null){switch(n.tag){case 31:case 13:return fi===null?tu():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Xc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xf(e,i,a)),!1;case 22:return n.flags|=65536,i===Xc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xf(e,i,a)),!1}throw Error(tt(435,n.tag))}return xf(e,i,a),tu(),!1}if($t)return t=$n.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Rd&&(e=Error(tt(422),{cause:i}),Qo(ci(e,n)))):(i!==Rd&&(t=Error(tt(423),{cause:i}),Qo(ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ci(i,n),a=Hd(e.stateNode,i,a),rf(e,a),Oe!==4&&(Oe=2)),!1;var s=Error(tt(520),{cause:i});if(s=ci(s,n),Ho===null?Ho=[s]:Ho.push(s),Oe!==4&&(Oe=2),t===null)return!0;i=ci(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Hd(n.stateNode,i,e),rf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nx(a),ix(a,e,n,i),rf(n,a),!1}n=n.return}while(n!==null);return!1}var Bp=Error(tt(461)),Ye=!1;function un(e,t,n,i){t.child=e===null?_v(t,null,n,i):ws(t,e.child,n,i)}function y0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Cs(t),i=Ap(e,t,n,r,s,a),o=Rp(),e!==null&&!Ye?(Cp(e,t,a),ma(e,t,a)):($t&&o&&vp(t),t.flags|=1,un(e,t,i,a),t.child)}function E0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,ax(e,t,s,i,a)):(e=gc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Fp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(r,i)&&e.ref===t.ref)return ma(e,t,a)}return t.flags|=1,e=oa(s,i),e.ref=t.ref,e.return=t,t.child=e}function ax(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Zo(s,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=s,Fp(e,a))e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,ma(e,t,a)}return Gd(e,t,n,i,a)}function sx(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return b0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_c(t,s!==null?s.cachePool:null),s!==null?d0(t,s):Od(),Sv(t);else return i=t.lanes=536870912,b0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(_c(t,s.cachePool),d0(t,s),Oa(),t.memoizedState=null):(e!==null&&_c(t,null),Od(),Oa());return un(e,t,a,n),t.child}function bo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function b0(e,t,n,i,a){var s=Mp();return s=s===null?null:{parent:qe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&_c(t,null),Od(),Sv(t),e!==null&&jr(e,t,i,!0),t.childLanes=a,null}function Sc(e,t){return t=Qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function T0(e,t,n){return ws(t,e.child,null,n),e=Sc(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function Jy(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($t){if(i.mode==="hidden")return e=Sc(t,i),t.lanes=536870912,bo(null,e);if(Pd(t),(e=Ee)?(e=jx(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=uv(e),n.return=t,t.child=n,dn=t,Ee=null)):e=null,e===null)throw $a(t);return t.lanes=536870912,null}return Sc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Pd(t),a)if(t.flags&256)t.flags&=-257,t=T0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(Ye||jr(e,t,n,!1),a=(n&e.childLanes)!==0,Ye||a){if(i=ve,i!==null&&(r=z_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Is(e,r),On(i,e,r),Bp;tu(),t=T0(e,t,n)}else e=s.treeContext,Ee=di(r.nextSibling),dn=t,$t=!0,Xa=null,ui=!1,e!==null&&dv(t,e),t=Sc(t,i),t.flags|=4096;return t}return e=oa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gd(e,t,n,i,a){return Cs(t),n=Ap(e,t,n,i,void 0,a),i=Rp(),e!==null&&!Ye?(Cp(e,t,a),ma(e,t,a)):($t&&i&&vp(t),t.flags|=1,un(e,t,n,a),t.child)}function A0(e,t,n,i,a,s){return Cs(t),t.updateQueue=null,n=yv(t,i,n,a),Mv(e),i=Rp(),e!==null&&!Ye?(Cp(e,t,s),ma(e,t,s)):($t&&i&&vp(t),t.flags|=1,un(e,t,n,s),t.child)}function R0(e,t,n,i,a){if(Cs(t),t.stateNode===null){var s=_r,r=n.contextType;typeof r=="object"&&r!==null&&(s=hn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fd,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Ep(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?hn(r):_r,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(lf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Fd.enqueueReplaceState(s,s.state,null),zo(t,i,s,a),Po(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Us(n,o);s.props=l;var c=s.context,d=n.contextType;r=_r,typeof d=="object"&&d!==null&&(r=hn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&S0(t,s,i,r),Ua=!1;var f=t.memoizedState;s.state=f,zo(t,i,s,a),Po(),c=t.memoizedState,o||f!==c||Ua?(typeof p=="function"&&(lf(t,n,p,i),c=t.memoizedState),(l=Ua||x0(t,n,l,i,f,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Nd(e,t),r=t.memoizedProps,d=Us(n,r),s.props=d,p=t.pendingProps,f=s.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||f!==l)&&S0(t,s,i,l),Ua=!1,f=t.memoizedState,s.state=f,zo(t,i,s,a),Po();var h=t.memoizedState;r!==p||f!==h||Ua||e!==null&&e.dependencies!==null&&kc(e.dependencies)?(typeof o=="function"&&(lf(t,n,o,i),h=t.memoizedState),(d=Ua||x0(t,n,d,i,f,h,l)||e!==null&&e.dependencies!==null&&kc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),s.props=i,s.state=h,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Mc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ws(t,e.child,null,a),t.child=ws(t,null,n,a)):un(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ma(e,t,a),e}function C0(e,t,n,i){return Rs(),t.flags|=256,un(e,t,n,i),t.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:pv()}}function ff(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yn),e}function rx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(a?La(t):Oa(),(e=Ee)?(e=jx(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=uv(e),n.return=t,t.child=n,dn=t,Ee=null)):e=null,e===null)throw $a(t);return eh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Oa(),a=t.mode,o=Qc({mode:"hidden",children:o},a),i=Es(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=uf(n),i.childLanes=ff(e,r,n),t.memoizedState=cf,bo(null,i)):(La(t),Vd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(La(t),t.flags&=-257,t=df(e,t,n)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),o=i.fallback,a=t.mode,i=Qc({mode:"visible",children:i.children},a),o=Es(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ws(t,e.child,null,n),i=t.child,i.memoizedState=uf(n),i.childLanes=ff(e,r,n),t.memoizedState=cf,t=bo(null,i));else if(La(t),eh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,Qo({value:i,source:null,stack:null}),t=df(e,t,n)}else if(Ye||jr(e,t,n,!1),r=(n&e.childLanes)!==0,Ye||r){if(r=ve,r!==null&&(i=z_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Is(e,i),On(r,e,i),Bp;th(o)||tu(),t=df(e,t,n)}else th(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ee=di(o.nextSibling),dn=t,$t=!0,Xa=null,ui=!1,e!==null&&dv(t,e),t=Vd(t,i.children),t.flags|=4096);return t}return a?(Oa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=oa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=oa(c,o):(o=Es(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,bo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=uf(n):(a=o.cachePool,a!==null?(l=qe._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=pv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=ff(e,r,n),t.memoizedState=cf,bo(e.child,i)):(La(t),n=e.child,e=n.sibling,n=oa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Vd(e,t){return t=Qc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qc(e,t){return e=Wn(22,e,null,t),e.lanes=0,e}function df(e,t,n){return ws(t,e.child,null,n),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function w0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),wd(e.return,t,n)}function hf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function ox(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Fe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Me(Fe,r),un(e,t,i,n),i=$t?Ko:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w0(e,n,t);else if(e.tag===19)w0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&qc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),hf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&qc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}hf(t,!0,n,null,s,i);break;case"together":hf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ma(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),es|=t.lanes,!(n&t.childLanes))if(e!==null){if(jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=oa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&kc(e)))}function $y(e,t,n){switch(t.tag){case 3:zc(t,t.stateNode.containerInfo),Na(t,qe,e.memoizedState.cache),Rs();break;case 27:case 5:gd(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Pd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(La(t),t.flags|=128,null):n&t.child.childLanes?rx(e,t,n):(La(t),e=ma(e,t,n),e!==null?e.sibling:null);La(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(jr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return ox(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(Fe,Fe.current),i)break;return null;case 22:return t.lanes=0,sx(e,t,n,t.pendingProps);case 24:Na(t,qe,e.memoizedState.cache)}return ma(e,t,n)}function lx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Fp(e,n)&&!(t.flags&128))return Ye=!1,$y(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,$t&&t.flags&1048576&&fv(t,Ko,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ps(t.elementType),t.type=e,typeof e=="function")_p(e)?(i=Us(e,i),t.tag=1,t=R0(null,t,e,i,n)):(t.tag=0,t=Gd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===ip){t.tag=11,t=y0(null,t,e,i,n);break t}else if(a===ap){t.tag=14,t=E0(null,t,e,i,n);break t}}throw t=pd(e)||e,Error(tt(306,t,""))}}return t;case 0:return Gd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Us(i,t.pendingProps),R0(e,t,i,a,n);case 3:t:{if(zc(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Nd(e,t),zo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Na(t,qe,i),i!==s.cache&&Dd(t,[qe],n,!0),Po(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=C0(e,t,i,n);break t}else if(i!==a){a=ci(Error(tt(424)),t),Qo(a),t=C0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=di(e.firstChild),dn=t,$t=!0,Xa=null,ui=!0,n=_v(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Rs(),i===a){t=ma(e,t,n);break t}un(e,t,i,n)}t=t.child}return t;case 26:return Mc(e,t),e===null?(n=K0(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=au(ka.current).createElement(n),i[fn]=t,i[zn]=e,mn(i,n,e),rn(i),t.stateNode=i):t.memoizedState=K0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gd(t),e===null&&$t&&(i=t.stateNode=Jx(t.type,t.pendingProps,ka.current),dn=t,ui=!0,a=Ee,ss(t.type)?(nh=a,Ee=di(i.firstChild)):Ee=a),un(e,t,t.pendingProps.children,n),Mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((a=i=Ee)&&(i=wE(i,t.type,t.pendingProps,ui),i!==null?(t.stateNode=i,dn=t,Ee=di(i.firstChild),ui=!1,a=!0):a=!1),a||$a(t)),gd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Jd(a,s)?i=null:r!==null&&Jd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Ap(e,t,Xy,null,null,n),nl._currentValue=a),Mc(e,t),un(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Ee)&&(n=DE(n,t.pendingProps,ui),n!==null?(t.stateNode=n,dn=t,Ee=null,e=!0):e=!1),e||$a(t)),null;case 13:return rx(e,t,n);case 4:return zc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ws(t,null,i,n):un(e,t,i,n),t.child;case 11:return y0(e,t,t.type,t.pendingProps,n);case 7:return un(e,t,t.pendingProps,n),t.child;case 8:return un(e,t,t.pendingProps.children,n),t.child;case 12:return un(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Na(t,t.type,i.value),un(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Cs(t),a=hn(a),i=i(a),t.flags|=1,un(e,t,i,n),t.child;case 14:return E0(e,t,t.type,t.pendingProps,n);case 15:return ax(e,t,t.type,t.pendingProps,n);case 19:return ox(e,t,n);case 31:return Jy(e,t,n);case 22:return sx(e,t,n,t.pendingProps);case 24:return Cs(t),i=hn(qe),e===null?(a=Mp(),a===null&&(a=ve,s=Sp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Ep(t),Na(t,qe,a)):(e.lanes&n&&(Nd(e,t),zo(t,null,null,n),Po()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Na(t,qe,i)):(i=s.cache,Na(t,qe,i),i!==a.cache&&Dd(t,[qe],n,!0))),un(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Wi(e){e.flags|=4}function pf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Nx())e.flags|=8192;else throw Ts=Xc,yp}else e.flags&=-16777217}function D0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!eS(t))if(Nx())e.flags|=8192;else throw Ts=Xc,yp}function Pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?L_():536870912,e.lanes|=t,Br|=t)}function co(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function tE(e,t,n){var i=t.pendingProps;switch(xp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),la(qe),Nr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?Wi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sf())),ye(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Wi(t),s!==null?(ye(t),D0(t,s)):(ye(t),pf(t,a,null,i,n))):s?s!==e.memoizedState?(Wi(t),ye(t),D0(t,s)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Wi(t),ye(t),pf(t,a,e,i,n)),null;case 27:if(Ic(t),n=ka.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return ye(t),null}e=Ii.current,Vs(t)?s0(t):(e=Jx(a,i,n),t.stateNode=e,Wi(t))}return ye(t),null;case 5:if(Ic(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return ye(t),null}if(s=Ii.current,Vs(t))s0(t);else{var r=au(ka.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[fn]=t,s[zn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(mn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Wi(t)}}return ye(t),pf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=ka.current,Vs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=dn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[fn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Zx(e.nodeValue,n)),e||$a(t,!0)}else e=au(e).createTextNode(i),e[fn]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Vs(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[fn]=t}else Rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if(t.flags&128)throw Error(tt(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(tt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(tt(317));a[fn]=t}else Rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),a=!1}else a=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pl(t,t.updateQueue),ye(t),null);case 4:return Nr(),e===null&&qp(t.stateNode.containerInfo),ye(t),null;case 10:return la(t.type),ye(t),null;case 19:if(on(Fe),i=t.memoizedState,i===null)return ye(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)co(i,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qc(e),s!==null){for(t.flags|=128,co(i,!1),e=s.updateQueue,t.updateQueue=e,Pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cv(n,e),n=n.sibling;return Me(Fe,Fe.current&1|2),$t&&ta(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Zn()>Jc&&(t.flags|=128,a=!0,co(i,!1),t.lanes=4194304)}else{if(!a)if(e=qc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pl(t,e),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!$t)return ye(t),null}else 2*Zn()-i.renderingStartTime>Jc&&n!==536870912&&(t.flags|=128,a=!0,co(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Zn(),e.sibling=null,n=Fe.current,Me(Fe,a?n&1|2:n&1),$t&&ta(t,i.treeForkCount),e):(ye(t),null);case 22:case 23:return Xn(t),bp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&Pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&on(bs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(qe),ye(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function eE(e,t){switch(xp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(qe),Nr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ic(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error(tt(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return on(Fe),null;case 4:return Nr(),null;case 10:return la(t.type),null;case 22:case 23:return Xn(t),bp(),e!==null&&on(bs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(qe),null;case 25:return null;default:return null}}function cx(e,t){switch(xp(t),t.tag){case 3:la(qe),Nr();break;case 26:case 27:case 5:Ic(t);break;case 4:Nr();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:on(Fe);break;case 10:la(t.type);break;case 22:case 23:Xn(t),bp(),e!==null&&on(bs);break;case 24:la(qe)}}function gl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ue(t,t.return,o)}}function ts(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){ue(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){ue(t,t.return,d)}}function ux(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xv(t,n)}catch(i){ue(e,e.return,i)}}}function fx(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function Bo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ue(e,t,a)}}function Oi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ue(e,t,a)}else n.current=null}function dx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ue(e,e.return,a)}}function mf(e,t,n){try{var i=e.stateNode;EE(i,e.type,n,t),i[zn]=t}catch(a){ue(e,e.return,a)}}function hx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ss(e.type)||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(i!==4&&(i===27&&ss(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kd(e,t,n),e=e.sibling;e!==null;)kd(e,t,n),e=e.sibling}function jc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ss(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}function px(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);mn(t,i,n),t[fn]=e,t[zn]=n}catch(s){ue(e,e.return,s)}}var ea=!1,We=!1,_f=!1,U0=typeof WeakSet=="function"?WeakSet:Set,sn=null;function nE(e,t){if(e=e.containerInfo,Qd=lu,e=ev(e),pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,p=e,f=null;e:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break e;if(f===n&&++c===a&&(o=r),f===s&&++d===i&&(l=r),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:e,selectionRange:n},lu=!1,sn=t;sn!==null;)if(t=sn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,sn=e;else for(;sn!==null;){switch(t=sn,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var x=Us(n.type,a);e=i.getSnapshotBeforeUpdate(x,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){ue(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)$d(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,sn=e;break}sn=t.return}}function mx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yi(e,n),i&4&&gl(5,n);break;case 1:if(Yi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var a=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&ux(n),i&512&&Bo(n,n.return);break;case 3:if(Yi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xv(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&px(n);case 26:case 5:Yi(e,n),t===null&&i&4&&dx(n),i&512&&Bo(n,n.return);break;case 12:Yi(e,n);break;case 31:Yi(e,n),i&4&&vx(e,n);break;case 13:Yi(e,n),i&4&&xx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fE.bind(null,n),UE(e,n))));break;case 22:if(i=n.memoizedState!==null||ea,!i){t=t!==null&&t.memoizedState!==null||We,a=ea;var s=We;ea=i,(We=t)&&!s?$i(e,n,(n.subtreeFlags&8772)!==0):Yi(e,n),ea=a,We=s}break;case 30:break;default:Yi(e,n)}}function gx(e){var t=e.alternate;t!==null&&(e.alternate=null,gx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Un=!1;function qi(e,t,n){for(n=n.child;n!==null;)_x(e,t,n),n=n.sibling}function _x(e,t,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 26:We||Oi(n,t),qi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||Oi(n,t);var i=Ae,a=Un;ss(n.type)&&(Ae=n.stateNode,Un=!1),qi(e,t,n),Vo(n.stateNode),Ae=i,Un=a;break;case 5:We||Oi(n,t);case 6:if(i=Ae,a=Un,Ae=null,qi(e,t,n),Ae=i,Un=a,Ae!==null)if(Un)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(s){ue(n,t,s)}else try{Ae.removeChild(n.stateNode)}catch(s){ue(n,t,s)}break;case 18:Ae!==null&&(Un?(e=Ae,X0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vr(e)):X0(Ae,n.stateNode));break;case 4:i=Ae,a=Un,Ae=n.stateNode.containerInfo,Un=!0,qi(e,t,n),Ae=i,Un=a;break;case 0:case 11:case 14:case 15:ts(2,n,t),We||ts(4,n,t),qi(e,t,n);break;case 1:We||(Oi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&fx(n,t,i)),qi(e,t,n);break;case 21:qi(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,qi(e,t,n),We=i;break;default:qi(e,t,n)}}function vx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vr(e)}catch(n){ue(t,t.return,n)}}}function xx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vr(e)}catch(n){ue(t,t.return,n)}}function iE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new U0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new U0),t;default:throw Error(tt(435,e.tag))}}function zl(e,t){var n=iE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=dE.bind(null,e,i);i.then(a,a)}})}function Cn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ss(o.type)){Ae=o.stateNode,Un=!1;break t}break;case 5:Ae=o.stateNode,Un=!1;break t;case 3:case 4:Ae=o.stateNode.containerInfo,Un=!0;break t}o=o.return}if(Ae===null)throw Error(tt(160));_x(s,r,a),Ae=null,Un=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sx(t,e),t=t.sibling}var xi=null;function Sx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(t,e),wn(e),i&4&&(ts(3,e,e.return),gl(3,e),ts(5,e,e.return));break;case 1:Cn(t,e),wn(e),i&512&&(We||n===null||Oi(n,n.return)),i&64&&ea&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=xi;if(Cn(t,e),wn(e),i&512&&(We||n===null||Oi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[dl]||s[fn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),mn(s,i,n),s[fn]=e,rn(s),i=s;break t;case"link":var r=j0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=j0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;default:throw Error(tt(468,i))}s[fn]=e,rn(s),i=s}e.stateNode=i}else J0(a,e.type,e.stateNode);else e.stateNode=Q0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?J0(a,e.type,e.stateNode):Q0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&mf(e,e.memoizedProps,n.memoizedProps)}break;case 27:Cn(t,e),wn(e),i&512&&(We||n===null||Oi(n,n.return)),n!==null&&i&4&&mf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Cn(t,e),wn(e),i&512&&(We||n===null||Oi(n,n.return)),e.flags&32){a=e.stateNode;try{Or(a,"")}catch(x){ue(e,e.return,x)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,mf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(_f=!0);break;case 6:if(Cn(t,e),wn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(x){ue(e,e.return,x)}}break;case 3:if(bc=null,a=xi,xi=su(t.containerInfo),Cn(t,e),xi=a,wn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(x){ue(e,e.return,x)}_f&&(_f=!1,Mx(e));break;case 4:i=xi,xi=su(e.stateNode.containerInfo),Cn(t,e),wn(e),xi=i;break;case 12:Cn(t,e),wn(e);break;case 31:Cn(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zl(e,i)));break;case 13:Cn(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nu=Zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ea,d=We;if(ea=c||a,We=d||l,Cn(t,e),We=d,ea=c,wn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ea||We||ms(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,f=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(x){ue(l,l.return,x)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(x){ue(l,l.return,x)}}}else if(t.tag===18){if(n===null){l=t;try{var h=l.stateNode;a?W0(h,!0):W0(l.stateNode,!1)}catch(x){ue(l,l.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,zl(e,n))));break;case 19:Cn(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zl(e,i)));break;case 30:break;case 21:break;default:Cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(hx(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var a=n.stateNode,s=gf(e);jc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Or(r,""),n.flags&=-33);var o=gf(e);jc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=gf(e);kd(e,c,l);break;default:throw Error(tt(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mx(e,t.alternate,t),t=t.sibling}function ms(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ts(4,t,t.return),ms(t);break;case 1:Oi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fx(t,t.return,n),ms(t);break;case 27:Vo(t.stateNode);case 26:case 5:Oi(t,t.return),ms(t);break;case 22:t.memoizedState===null&&ms(t);break;case 30:ms(t);break;default:ms(t)}e=e.sibling}}function $i(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:$i(a,s,n),gl(4,s);break;case 1:if($i(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)vv(l[a],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&ux(s),Bo(s,s.return);break;case 27:px(s);case 26:case 5:$i(a,s,n),n&&i===null&&r&4&&dx(s),Bo(s,s.return);break;case 12:$i(a,s,n);break;case 31:$i(a,s,n),n&&r&4&&vx(a,s);break;case 13:$i(a,s,n),n&&r&4&&xx(a,s);break;case 22:s.memoizedState===null&&$i(a,s,n),Bo(s,s.return);break;case 30:break;default:$i(a,s,n)}t=t.sibling}}function Hp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pl(n))}function Gp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function pi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yx(e,t,n,i),t=t.sibling}function yx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,n,i),a&2048&&gl(9,t);break;case 1:pi(e,t,n,i);break;case 3:pi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(a&2048){pi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else pi(e,t,n,i);break;case 31:pi(e,t,n,i);break;case 13:pi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?pi(e,t,n,i):Fo(e,t):s._visibility&2?pi(e,t,n,i):(s._visibility|=2,sr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Hp(r,t);break;case 24:pi(e,t,n,i),a&2048&&Gp(t.alternate,t);break;default:pi(e,t,n,i)}}function sr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:sr(s,r,o,l,a),gl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?sr(s,r,o,l,a):Fo(s,r):(d._visibility|=2,sr(s,r,o,l,a)),a&&c&2048&&Hp(r.alternate,r);break;case 24:sr(s,r,o,l,a),a&&c&2048&&Gp(r.alternate,r);break;default:sr(s,r,o,l,a)}t=t.sibling}}function Fo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Fo(n,i),a&2048&&Hp(i.alternate,i);break;case 24:Fo(n,i),a&2048&&Gp(i.alternate,i);break;default:Fo(n,i)}t=t.sibling}}var To=8192;function ks(e,t,n){if(e.subtreeFlags&To)for(e=e.child;e!==null;)Ex(e,t,n),e=e.sibling}function Ex(e,t,n){switch(e.tag){case 26:ks(e,t,n),e.flags&To&&e.memoizedState!==null&&kE(n,xi,e.memoizedState,e.memoizedProps);break;case 5:ks(e,t,n);break;case 3:case 4:var i=xi;xi=su(e.stateNode.containerInfo),ks(e,t,n),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=To,To=16777216,ks(e,t,n),To=i):ks(e,t,n));break;default:ks(e,t,n)}}function bx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function uo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,Ax(i,e)}bx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tx(e),e=e.sibling}function Tx(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&ts(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yc(e)):uo(e);break;default:uo(e)}}function yc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,Ax(i,e)}bx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ts(8,t,t.return),yc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yc(t));break;default:yc(t)}e=e.sibling}}function Ax(e,t){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:ts(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else t:for(n=e;sn!==null;){i=sn;var a=i.sibling,s=i.return;if(gx(i),i===n){sn=null;break t}if(a!==null){a.return=s,sn=a;break t}sn=s}}}var aE={getCacheForType:function(e){var t=hn(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return hn(qe).controller.signal}},sE=typeof WeakMap=="function"?WeakMap:Map,se=0,ve=null,Yt=null,Qt=0,ce=0,Vn=null,Fa=!1,$r=!1,Vp=!1,ga=0,Oe=0,es=0,As=0,kp=0,Yn=0,Br=0,Ho=null,Nn=null,Xd=!1,Nu=0,Rx=0,Jc=1/0,$c=null,Ya=null,Qe=0,Za=null,Fr=null,ca=0,Wd=0,qd=null,Cx=null,Go=0,Yd=null;function jn(){return se&2&&Qt!==0?Qt&-Qt:Ot.T!==null?Wp():I_()}function wx(){if(Yn===0)if(!(Qt&536870912)||$t){var e=Cl;Cl<<=1,!(Cl&3932160)&&(Cl=262144),Yn=e}else Yn=536870912;return e=$n.current,e!==null&&(e.flags|=32),Yn}function On(e,t,n){(e===ve&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),Ha(e,Qt,Yn,!1)),fl(e,n),(!(se&2)||e!==ve)&&(e===ve&&(!(se&2)&&(As|=n),Oe===4&&Ha(e,Qt,Yn,!1)),ki(e))}function Dx(e,t,n){if(se&6)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ul(e,t),a=i?lE(e,t):vf(e,t,!0),s=i;do{if(a===0){$r&&!i&&Ha(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!rE(n)){a=vf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Ho;var l=o.current.memoizedState.isDehydrated;if(l&&(Hr(o,r).flags|=256),r=vf(o,r,!1),r!==2){if(Vp&&!l){o.errorRecoveryDisabledLanes|=s,As|=s,a=4;break t}s=Nn,Nn=a,s!==null&&(Nn===null?Nn=s:Nn.push.apply(Nn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Hr(e,0),Ha(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Ha(i,t,Yn,!Fa);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(a=Nu+300-Zn(),10<a)){if(Ha(i,t,Yn,!Fa),Mu(i,0,!0)!==0)break t;ca=t,i.timeoutHandle=Qx(N0.bind(null,i,n,Nn,$c,Xd,t,Yn,As,Br,Fa,s,"Throttled",-0,0),a);break t}N0(i,n,Nn,$c,Xd,t,Yn,As,Br,Fa,s,null,-0,0)}}break}while(1);ki(e)}function N0(e,t,n,i,a,s,r,o,l,c,d,p,f,h){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},Ex(t,s,p);var x=(s&62914560)===s?Nu-Zn():(s&4194048)===s?Rx-Zn():0;if(x=XE(p,x),x!==null){ca=s,e.cancelPendingCommit=x(O0.bind(null,e,t,s,n,i,a,r,o,l,d,p,null,f,h)),Ha(e,s,r,!c);return}}O0(e,t,s,n,i,a,r,o,l)}function rE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Jn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ha(e,t,n,i){t&=~kp,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Qn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&O_(e,n,t)}function Lu(){return se&6?!0:(_l(0,!1),!1)}function Xp(){if(Yt!==null){if(ce===0)var e=Yt.return;else e=Yt,aa=Bs=null,wp(e),Tr=null,jo=0,e=Yt;for(;e!==null;)cx(e.alternate,e),e=e.return;Yt=null}}function Hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,AE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ca=0,Xp(),ve=e,Yt=n=oa(e.current,null),Qt=t,ce=0,Vn=null,Fa=!1,$r=ul(e,t),Vp=!1,Br=Yn=kp=As=es=Oe=0,Nn=Ho=null,Xd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Qn(i),s=1<<a;t|=e[a],i&=~s}return ga=t,Tu(),n}function Ux(e,t){Vt=null,Ot.H=$o,t===Jr||t===Ru?(t=u0(),ce=3):t===yp?(t=u0(),ce=4):ce=t===Bp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vn=t,Yt===null&&(Oe=1,Kc(e,ci(t,e.current)))}function Nx(){var e=$n.current;return e===null?!0:(Qt&4194048)===Qt?fi===null:(Qt&62914560)===Qt||Qt&536870912?e===fi:!1}function Lx(){var e=Ot.H;return Ot.H=$o,e===null?$o:e}function Ox(){var e=Ot.A;return Ot.A=aE,e}function tu(){Oe=4,Fa||(Qt&4194048)!==Qt&&$n.current!==null||($r=!0),!(es&134217727)&&!(As&134217727)||ve===null||Ha(ve,Qt,Yn,!1)}function vf(e,t,n){var i=se;se|=2;var a=Lx(),s=Ox();(ve!==e||Qt!==t)&&($c=null,Hr(e,t)),t=!1;var r=Oe;t:do try{if(ce!==0&&Yt!==null){var o=Yt,l=Vn;switch(ce){case 8:Xp(),r=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var c=ce;if(ce=0,Vn=null,Sr(e,o,l,c),n&&$r){r=0;break t}break;default:c=ce,ce=0,Vn=null,Sr(e,o,l,c)}}oE(),r=Oe;break}catch(d){Ux(e,d)}while(1);return t&&e.shellSuspendCounter++,aa=Bs=null,se=i,Ot.H=a,Ot.A=s,Yt===null&&(ve=null,Qt=0,Tu()),r}function oE(){for(;Yt!==null;)Px(Yt)}function lE(e,t){var n=se;se|=2;var i=Lx(),a=Ox();ve!==e||Qt!==t?($c=null,Jc=Zn()+500,Hr(e,t)):$r=ul(e,t);t:do try{if(ce!==0&&Yt!==null){t=Yt;var s=Vn;e:switch(ce){case 1:ce=0,Vn=null,Sr(e,t,s,1);break;case 2:case 9:if(c0(s)){ce=0,Vn=null,L0(t);break}t=function(){ce!==2&&ce!==9||ve!==e||(ce=7),ki(e)},s.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:c0(s)?(ce=0,Vn=null,L0(t)):(ce=0,Vn=null,Sr(e,t,s,7));break;case 5:var r=null;switch(Yt.tag){case 26:r=Yt.memoizedState;case 5:case 27:var o=Yt;if(r?eS(r):o.stateNode.complete){ce=0,Vn=null;var l=o.sibling;if(l!==null)Yt=l;else{var c=o.return;c!==null?(Yt=c,Ou(c)):Yt=null}break e}}ce=0,Vn=null,Sr(e,t,s,5);break;case 6:ce=0,Vn=null,Sr(e,t,s,6);break;case 8:Xp(),Oe=6;break t;default:throw Error(tt(462))}}cE();break}catch(d){Ux(e,d)}while(1);return aa=Bs=null,Ot.H=i,Ot.A=a,se=n,Yt!==null?0:(ve=null,Qt=0,Tu(),Oe)}function cE(){for(;Yt!==null&&!NM();)Px(Yt)}function Px(e){var t=lx(e.alternate,e,ga);e.memoizedProps=e.pendingProps,t===null?Ou(e):Yt=t}function L0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=A0(n,t,t.pendingProps,t.type,void 0,Qt);break;case 11:t=A0(n,t,t.pendingProps,t.type.render,t.ref,Qt);break;case 5:wp(t);default:cx(n,t),t=Yt=cv(t,ga),t=lx(n,t,ga)}e.memoizedProps=e.pendingProps,t===null?Ou(e):Yt=t}function Sr(e,t,n,i){aa=Bs=null,wp(t),Tr=null,jo=0;var a=t.return;try{if(jy(e,a,t,n,Qt)){Oe=1,Kc(e,ci(n,e.current)),Yt=null;return}}catch(s){if(a!==null)throw Yt=a,s;Oe=1,Kc(e,ci(n,e.current)),Yt=null;return}t.flags&32768?($t||i===1?e=!0:$r||Qt&536870912?e=!1:(Fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=$n.current,i!==null&&i.tag===13&&(i.flags|=16384))),zx(t,e)):Ou(t)}function Ou(e){var t=e;do{if(t.flags&32768){zx(t,Fa);return}e=t.return;var n=tE(t.alternate,t,ga);if(n!==null){Yt=n;return}if(t=t.sibling,t!==null){Yt=t;return}Yt=t=e}while(t!==null);Oe===0&&(Oe=5)}function zx(e,t){do{var n=eE(e.alternate,e);if(n!==null){n.flags&=32767,Yt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yt=e;return}Yt=e=n}while(e!==null);Oe=6,Yt=null}function O0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Pu();while(Qe!==0);if(se&6)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(s=t.lanes|t.childLanes,s|=mp,VM(e,n,s,r,o,l),e===ve&&(Yt=ve=null,Qt=0),Fr=t,Za=e,ca=n,Wd=s,qd=a,Cx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,hE(Bc,function(){return Gx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ot.T,Ot.T=null,a=re.p,re.p=2,r=se,se|=4;try{nE(e,t,n)}finally{se=r,re.p=a,Ot.T=i}}Qe=1,Ix(),Bx(),Fx()}}function Ix(){if(Qe===1){Qe=0;var e=Za,t=Fr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ot.T,Ot.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{Sx(t,e);var s=jd,r=ev(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&tv(o.ownerDocument.documentElement,o)){if(l!==null&&pp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var h=f.getSelection(),x=o.textContent.length,E=Math.min(l.start,x),_=l.end===void 0?E:Math.min(l.end,x);!h.extend&&E>_&&(r=_,_=E,E=r);var u=n0(o,E),m=n0(o,_);if(u&&m&&(h.rangeCount!==1||h.anchorNode!==u.node||h.anchorOffset!==u.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var M=p.createRange();M.setStart(u.node,u.offset),h.removeAllRanges(),E>_?(h.addRange(M),h.extend(m.node,m.offset)):(M.setEnd(m.node,m.offset),h.addRange(M))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var g=p[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}lu=!!Qd,jd=Qd=null}finally{se=a,re.p=i,Ot.T=n}}e.current=t,Qe=2}}function Bx(){if(Qe===2){Qe=0;var e=Za,t=Fr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ot.T,Ot.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{mx(e,t.alternate,t)}finally{se=a,re.p=i,Ot.T=n}}Qe=3}}function Fx(){if(Qe===4||Qe===3){Qe=0,LM();var e=Za,t=Fr,n=ca,i=Cx;t.subtreeFlags&10256||t.flags&10256?Qe=5:(Qe=0,Fr=Za=null,Hx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ya=null),op(n),t=t.stateNode,Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,a=re.p,re.p=2,Ot.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ot.T=t,re.p=a}}ca&3&&Pu(),ki(e),a=e.pendingLanes,n&261930&&a&42?e===Yd?Go++:(Go=0,Yd=e):Go=0,_l(0,!1)}}function Hx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function Pu(){return Ix(),Bx(),Fx(),Gx()}function Gx(){if(Qe!==5)return!1;var e=Za,t=Wd;Wd=0;var n=op(ca),i=Ot.T,a=re.p;try{re.p=32>n?32:n,Ot.T=null,n=qd,qd=null;var s=Za,r=ca;if(Qe=0,Fr=Za=null,ca=0,se&6)throw Error(tt(331));var o=se;if(se|=4,Tx(s.current),yx(s,s.current,r,n),se=o,_l(0,!1),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(cl,s)}catch{}return!0}finally{re.p=a,Ot.T=i,Hx(e,t)}}function P0(e,t,n){t=ci(n,t),t=Hd(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(fl(e,2),ki(e))}function ue(e,t,n){if(e.tag===3)P0(e,e,n);else for(;t!==null;){if(t.tag===3){P0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ya===null||!Ya.has(i))){e=ci(n,e),n=nx(2),i=qa(t,n,2),i!==null&&(ix(n,i,t,e),fl(i,2),ki(i));break}}t=t.return}}function xf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new sE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Vp=!0,a.add(n),e=uE.bind(null,e,t,n),t.then(e,e))}function uE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(Qt&n)===n&&(Oe===4||Oe===3&&(Qt&62914560)===Qt&&300>Zn()-Nu?!(se&2)&&Hr(e,0):kp|=n,Br===Qt&&(Br=0)),ki(e)}function Vx(e,t){t===0&&(t=L_()),e=Is(e,t),e!==null&&(fl(e,t),ki(e))}function fE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vx(e,n)}function dE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),Vx(e,n)}function hE(e,t){return sp(e,t)}var eu=null,rr=null,Zd=!1,nu=!1,Sf=!1,Ga=0;function ki(e){e!==rr&&e.next===null&&(rr===null?eu=rr=e:rr=rr.next=e),nu=!0,Zd||(Zd=!0,mE())}function _l(e,t){if(!Sf&&nu){Sf=!0;do for(var n=!1,i=eu;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Qn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,z0(i,s))}else s=Qt,s=Mu(i,i===ve?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||ul(i,s)||(n=!0,z0(i,s));i=i.next}while(n);Sf=!1}}function pE(){kx()}function kx(){nu=Zd=!1;var e=0;Ga!==0&&TE()&&(e=Ga);for(var t=Zn(),n=null,i=eu;i!==null;){var a=i.next,s=Xx(i,t);s===0?(i.next=null,n===null?eu=a:n.next=a,a===null&&(rr=n)):(n=i,(e!==0||s&3)&&(nu=!0)),i=a}Qe!==0&&Qe!==5||_l(e,!1),Ga!==0&&(Ga=0)}function Xx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Qn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=GM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=ve,n=Qt,n=Mu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Yu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Yu(i),op(n)){case 2:case 8:n=U_;break;case 32:n=Bc;break;case 268435456:n=N_;break;default:n=Bc}return i=Wx.bind(null,e),n=sp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Yu(i),e.callbackPriority=2,e.callbackNode=null,2}function Wx(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pu()&&e.callbackNode!==n)return null;var i=Qt;return i=Mu(e,e===ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dx(e,i,t),Xx(e,Zn()),e.callbackNode!=null&&e.callbackNode===n?Wx.bind(null,e):null)}function z0(e,t){if(Pu())return null;Dx(e,t,!0)}function mE(){RE(function(){se&6?sp(D_,pE):kx()})}function Wp(){if(Ga===0){var e=Pr;e===0&&(e=Rl,Rl<<=1,!(Rl&261888)&&(Rl=256)),Ga=e}return Ga}function I0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hc(""+e)}function B0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=I0((a[zn]||null).action),r=i.submitter;r&&(t=(t=r[zn]||null)?I0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new yu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ga!==0){var l=r?B0(a,r):new FormData(a);Bd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?B0(a,r):new FormData(a),Bd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Mf=0;Mf<Ad.length;Mf++){var yf=Ad[Mf],_E=yf.toLowerCase(),vE=yf[0].toUpperCase()+yf.slice(1);bi(_E,"on"+vE)}bi(iv,"onAnimationEnd");bi(av,"onAnimationIteration");bi(sv,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(Oy,"onTransitionRun");bi(Py,"onTransitionStart");bi(zy,"onTransitionCancel");bi(rv,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function qx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Hc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Hc(d)}a.currentTarget=null,s=l}}}}function qt(e,t){var n=t[vd];n===void 0&&(n=t[vd]=new Set);var i=e+"__bubble";n.has(i)||(Yx(t,e,2,!1),n.add(i))}function Ef(e,t,n){var i=0;t&&(i|=4),Yx(n,e,i,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function qp(e){if(!e[Il]){e[Il]=!0,B_.forEach(function(n){n!=="selectionchange"&&(xE.has(n)||Ef(n,!1,e),Ef(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,Ef("selectionchange",!1,t))}}function Yx(e,t,n,i){switch(rS(t)){case 2:var a=YE;break;case 8:a=ZE;break;default:a=Qp}n=a.bind(null,t,n,e),a=void 0,!Ed||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=fr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}q_(function(){var c=s,d=up(n),p=[];t:{var f=ov.get(e);if(f!==void 0){var h=yu,x=e;switch(e){case"keypress":if(mc(n)===0)break t;case"keydown":case"keyup":h=dy;break;case"focusin":x="focus",h=Ju;break;case"focusout":x="blur",h=Ju;break;case"beforeblur":case"afterblur":h=Ju;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=my;break;case iv:case av:case sv:h=iy;break;case rv:h=_y;break;case"scroll":case"scrollend":h=JM;break;case"wheel":h=xy;break;case"copy":case"cut":case"paste":h=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zm;break;case"toggle":case"beforetoggle":h=My}var E=(t&4)!==0,_=!E&&(e==="scroll"||e==="scrollend"),u=E?f!==null?f+"Capture":null:f;E=[];for(var m=c,M;m!==null;){var g=m;if(M=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||M===null||u===null||(g=qo(m,u),g!=null&&E.push(el(m,g,M))),_)break;m=m.return}0<E.length&&(f=new h(f,x,null,n,d),p.push({event:f,listeners:E}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==yd&&(x=n.relatedTarget||n.fromElement)&&(fr(x)||x[Kr]))break t;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=c,x=x?fr(x):null,x!==null&&(_=ll(x),E=x.tag,x!==_||E!==5&&E!==27&&E!==6)&&(x=null)):(h=null,x=c),h!==x)){if(E=qm,g="onMouseLeave",u="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Zm,g="onPointerLeave",u="onPointerEnter",m="pointer"),_=h==null?f:Eo(h),M=x==null?f:Eo(x),f=new E(g,m+"leave",h,n,d),f.target=_,f.relatedTarget=M,g=null,fr(d)===c&&(E=new E(u,m+"enter",x,n,d),E.target=M,E.relatedTarget=_,g=E),_=g,h&&x)e:{for(E=SE,u=h,m=x,M=0,g=u;g;g=E(g))M++;g=0;for(var T=m;T;T=E(T))g++;for(;0<M-g;)u=E(u),M--;for(;0<g-M;)m=E(m),g--;for(;M--;){if(u===m||m!==null&&u===m.alternate){E=u;break e}u=E(u),m=E(m)}E=null}else E=null;h!==null&&F0(p,f,h,E,!1),x!==null&&_!==null&&F0(p,_,x,E,!0)}}t:{if(f=c?Eo(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Jm;else if(jm(f))if(J_)A=Uy;else{A=wy;var R=Cy}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&cp(c.elementType)&&(A=Jm):A=Dy;if(A&&(A=A(e,c))){j_(p,A,n,d);break t}R&&R(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Md(f,"number",f.value)}switch(R=c?Eo(c):window,e){case"focusin":(jm(R)||R.contentEditable==="true")&&(pr=R,bd=c,No=null);break;case"focusout":No=bd=pr=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,i0(p,n,d);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":i0(p,n,d)}var v;if(hp)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else hr?K_(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Z_&&n.locale!=="ko"&&(hr||b!=="onCompositionStart"?b==="onCompositionEnd"&&hr&&(v=Y_()):(Ba=d,fp="value"in Ba?Ba.value:Ba.textContent,hr=!0)),R=iu(c,b),0<R.length&&(b=new Ym(b,e,null,n,d),p.push({event:b,listeners:R}),v?b.data=v:(v=Q_(n),v!==null&&(b.data=v)))),(v=Ey?by(e,n):Ty(e,n))&&(b=iu(c,"onBeforeInput"),0<b.length&&(R=new Ym("onBeforeInput","beforeinput",null,n,d),p.push({event:R,listeners:b}),R.data=v)),gE(p,e,c,n,d)}qx(p,t)})}function el(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=qo(e,n),a!=null&&i.unshift(el(e,a,s)),a=qo(e,t),a!=null&&i.push(el(e,a,s))),e.tag===3)return i;e=e.return}return[]}function SE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=qo(n,s),c!=null&&r.unshift(el(n,c,l))):a||(c=qo(n,s),c!=null&&r.push(el(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var ME=/\r\n?/g,yE=/\u0000|\uFFFD/g;function H0(e){return(typeof e=="string"?e:""+e).replace(ME,`
`).replace(yE,"")}function Zx(e,t){return t=H0(t),H0(e)===t}function de(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Or(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Or(e,""+i);break;case"className":Dl(e,"class",i);break;case"tabIndex":Dl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(e,n,i);break;case"style":W_(e,i,s);break;case"data":if(t!=="object"){Dl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=hc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",a.name,a,null),de(e,t,"formEncType",a.formEncType,a,null),de(e,t,"formMethod",a.formMethod,a,null),de(e,t,"formTarget",a.formTarget,a,null)):(de(e,t,"encType",a.encType,a,null),de(e,t,"method",a.method,a,null),de(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=hc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ia);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=hc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":qt("beforetoggle",e),qt("toggle",e),dc(e,"popover",i);break;case"xlinkActuate":Xi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":dc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=QM.get(n)||n,dc(e,n,i))}}function Kd(e,t,n,i,a,s){switch(n){case"style":W_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Or(e,i):(typeof i=="number"||typeof i=="bigint")&&Or(e,""+i);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!F_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[zn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):dc(e,n,i)}}}function mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",e),qt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:de(e,t,s,r,n,null)}}a&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":qt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:de(e,t,i,d,n,null)}}V_(e,s,o,l,c,r,a,!1);return;case"select":qt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?yr(e,!!i,t,!1):n!=null&&yr(e,!!i,n,!0);return;case"textarea":qt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:de(e,t,r,o,n,null)}X_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:de(e,t,l,i,n,null)}return;case"dialog":qt("beforetoggle",e),qt("toggle",e),qt("cancel",e),qt("close",e);break;case"iframe":case"object":qt("load",e);break;case"video":case"audio":for(i=0;i<tl.length;i++)qt(tl[i],e);break;case"image":qt("error",e),qt("load",e);break;case"details":qt("toggle",e);break;case"embed":case"source":case"link":qt("error",e),qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:de(e,t,c,i,n,null)}return;default:if(cp(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Kd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}function EE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||de(e,t,h,null,i,p)}}for(var f in i){var h=i[f];if(p=n[f],i.hasOwnProperty(f)&&(h!=null||p!=null))switch(f){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:h!==p&&de(e,t,f,h,i,p)}}Sd(e,r,o,l,c,d,s,a);return;case"select":h=r=o=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||de(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":f=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&de(e,t,a,s,i,l)}t=o,n=r,i=h,f!=null?yr(e,!!n,f,!1):!!i!=!!n&&(t!=null?yr(e,!!n,t,!0):yr(e,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":f=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(tt(91));break;default:a!==s&&de(e,t,r,a,i,s)}k_(e,f,h);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:de(e,t,x,null,i,f)}for(l in i)if(f=i[l],h=n[l],i.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:de(e,t,l,f,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)f=n[E],n.hasOwnProperty(E)&&f!=null&&!i.hasOwnProperty(E)&&de(e,t,E,null,i,f);for(c in i)if(f=i[c],h=n[c],i.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:de(e,t,c,f,i,h)}return;default:if(cp(t)){for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!==void 0&&!i.hasOwnProperty(_)&&Kd(e,t,_,void 0,i,f);for(d in i)f=i[d],h=n[d],!i.hasOwnProperty(d)||f===h||f===void 0&&h===void 0||Kd(e,t,d,f,i,h);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&de(e,t,u,null,i,f);for(p in i)f=i[p],h=n[p],!i.hasOwnProperty(p)||f===h||f==null&&h==null||de(e,t,p,f,i,h)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&G0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&G0(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qd=null,jd=null;function au(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tf=null;function TE(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var Qx=typeof setTimeout=="function"?setTimeout:void 0,AE=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(CE)}:Qx;function CE(e){setTimeout(function(){throw e})}function ss(e){return e==="head"}function X0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Vr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Vo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[dl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Vo(e.ownerDocument.body);n=a}while(n);Vr(t)}function W0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function $d(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$d(n),lp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function DE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function jx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=di(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function UE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var nh=null;function q0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return di(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Y0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Jx(e,t,n){switch(t=au(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function Vo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lp(e)}var hi=new Map,Z0=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=re.d;re.d={f:NE,r:LE,D:OE,C:PE,L:zE,m:IE,X:FE,S:BE,M:HE};function NE(){var e=xa.f(),t=Lu();return e||t}function LE(e){var t=Qr(e);t!==null&&t.tag===5&&t.type==="form"?Wv(t):xa.r(e)}var to=typeof document>"u"?null:document;function $x(e,t,n){var i=to;if(i&&typeof t=="string"&&t){var a=li(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Z0.has(a)||(Z0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),mn(t,"link",e),rn(t),i.head.appendChild(t)))}}function OE(e){xa.D(e),$x("dns-prefetch",e,null)}function PE(e,t){xa.C(e,t),$x("preconnect",e,t)}function zE(e,t,n){xa.L(e,t,n);var i=to;if(i&&e&&t){var a='link[rel="preload"][as="'+li(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+li(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+li(n.imageSizes)+'"]')):a+='[href="'+li(e)+'"]';var s=a;switch(t){case"style":s=Gr(e);break;case"script":s=eo(e)}hi.has(s)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(vl(s))||t==="script"&&i.querySelector(xl(s))||(t=i.createElement("link"),mn(t,"link",e),rn(t),i.head.appendChild(t)))}}function IE(e,t){xa.m(e,t);var n=to;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+li(i)+'"][href="'+li(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=eo(e)}if(!hi.has(s)&&(e=Te({rel:"modulepreload",href:e},t),hi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(xl(s)))return}i=n.createElement("link"),mn(i,"link",e),rn(i),n.head.appendChild(i)}}}function BE(e,t,n){xa.S(e,t,n);var i=to;if(i&&e){var a=Mr(i).hoistableStyles,s=Gr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(vl(s)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hi.get(s))&&Yp(e,n);var l=r=i.createElement("link");rn(l),mn(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ec(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function FE(e,t){xa.X(e,t);var n=to;if(n&&e){var i=Mr(n).hoistableScripts,a=eo(e),s=i.get(a);s||(s=n.querySelector(xl(a)),s||(e=Te({src:e,async:!0},t),(t=hi.get(a))&&Zp(e,t),s=n.createElement("script"),rn(s),mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function HE(e,t){xa.M(e,t);var n=to;if(n&&e){var i=Mr(n).hoistableScripts,a=eo(e),s=i.get(a);s||(s=n.querySelector(xl(a)),s||(e=Te({src:e,async:!0,type:"module"},t),(t=hi.get(a))&&Zp(e,t),s=n.createElement("script"),rn(s),mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function K0(e,t,n,i){var a=(a=ka.current)?su(a):null;if(!a)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=Mr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var s=Mr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(vl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),hi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(e,n),s||GE(a,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=eo(n),n=Mr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Gr(e){return'href="'+li(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function tS(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function GE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),mn(t,"link",n),rn(t),e.head.appendChild(t))}function eo(e){return'[src="'+li(e)+'"]'}function xl(e){return"script[async]"+e}function Q0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+li(n.href)+'"]');if(i)return t.instance=i,rn(i),i;var a=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),mn(i,"style",a),Ec(i,n.precedence,e),t.instance=i;case"stylesheet":a=Gr(n.href);var s=e.querySelector(vl(a));if(s)return t.state.loading|=4,t.instance=s,rn(s),s;i=tS(n),(a=hi.get(a))&&Yp(i,a),s=(e.ownerDocument||e).createElement("link"),rn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),t.state.loading|=4,Ec(s,n.precedence,e),t.instance=s;case"script":return s=eo(n.src),(a=e.querySelector(xl(s)))?(t.instance=a,rn(a),a):(i=n,(a=hi.get(s))&&(i=Te({},n),Zp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),rn(a),mn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Ec(i,n.precedence,e));return t.instance}function Ec(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bc=null;function j0(e,t,n){if(bc===null){var i=new Map,a=bc=new Map;a.set(n,i)}else a=bc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[dl]||s[fn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function J0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function VE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function eS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function kE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Gr(i.href),s=t.querySelector(vl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ru.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,rn(s);return}s=t.ownerDocument||t,i=tS(i),(a=hi.get(a))&&Yp(i,a),s=s.createElement("link"),rn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ru.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Af=0;function XE(e,t){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Af===0&&(Af=62500*bE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Af?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function Tc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(WE,e),ou=null,ru.call(e))}function WE(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var i=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=ru.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var nl={$$typeof:na,Provider:null,Consumer:null,_currentValue:ys,_currentValue2:ys,_threadCount:0};function qE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.hiddenUpdates=Zu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function nS(e,t,n,i,a,s,r,o,l,c,d,p){return e=new qE(e,t,n,r,l,c,d,p,o),t=1,s===!0&&(t|=24),s=Wn(3,null,null,t),e.current=s,s.stateNode=e,t=Sp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Ep(s),e}function iS(e){return e?(e=_r,e):_r}function aS(e,t,n,i,a,s){a=iS(a),i.context===null?i.context=a:i.pendingContext=a,i=Wa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=qa(e,i,t),n!==null&&(On(n,e,t),Oo(n,e,t))}function $0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kp(e,t){$0(e,t),(e=e.alternate)&&$0(e,t)}function sS(e){if(e.tag===13||e.tag===31){var t=Is(e,67108864);t!==null&&On(t,e,67108864),Kp(e,67108864)}}function tg(e){if(e.tag===13||e.tag===31){var t=jn();t=rp(t);var n=Is(e,t);n!==null&&On(n,e,t),Kp(e,t)}}var lu=!0;function YE(e,t,n,i){var a=Ot.T;Ot.T=null;var s=re.p;try{re.p=2,Qp(e,t,n,i)}finally{re.p=s,Ot.T=a}}function ZE(e,t,n,i){var a=Ot.T;Ot.T=null;var s=re.p;try{re.p=8,Qp(e,t,n,i)}finally{re.p=s,Ot.T=a}}function Qp(e,t,n,i){if(lu){var a=ih(i);if(a===null)bf(e,t,i,cu,n),eg(e,i);else if(QE(a,e,t,n,i))i.stopPropagation();else if(eg(e,i),t&4&&-1<KE.indexOf(e)){for(;a!==null;){var s=Qr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=hs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Qn(r);o.entanglements[1]|=l,r&=~l}ki(s),!(se&6)&&(Jc=Zn()+500,_l(0,!1))}}break;case 31:case 13:o=Is(s,2),o!==null&&On(o,s,2),Lu(),Kp(s,2)}if(s=ih(i),s===null&&bf(e,t,i,cu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else bf(e,t,i,null,n)}}function ih(e){return e=up(e),jp(e)}var cu=null;function jp(e){if(cu=null,e=fr(e),e!==null){var t=ll(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=T_(t),e!==null)return e;e=null}else if(n===31){if(e=A_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cu=e,null}function rS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(OM()){case D_:return 2;case U_:return 8;case Bc:case PM:return 32;case N_:return 268435456;default:return 32}default:return 32}}var ah=!1,Ka=null,Qa=null,ja=null,il=new Map,al=new Map,Pa=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(t.pointerId)}}function fo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Qr(t),t!==null&&sS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function QE(e,t,n,i,a){switch(t){case"focusin":return Ka=fo(Ka,e,t,n,i,a),!0;case"dragenter":return Qa=fo(Qa,e,t,n,i,a),!0;case"mouseover":return ja=fo(ja,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return il.set(s,fo(il.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,al.set(s,fo(al.get(s)||null,e,t,n,i,a)),!0}return!1}function oS(e){var t=fr(e.target);if(t!==null){var n=ll(t);if(n!==null){if(t=n.tag,t===13){if(t=T_(n),t!==null){e.blockedOn=t,Fm(e.priority,function(){tg(n)});return}}else if(t===31){if(t=A_(n),t!==null){e.blockedOn=t,Fm(e.priority,function(){tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ih(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);yd=i,n.target.dispatchEvent(i),yd=null}else return t=Qr(n),t!==null&&sS(t),e.blockedOn=n,!1;t.shift()}return!0}function ng(e,t,n){Ac(e)&&n.delete(t)}function jE(){ah=!1,Ka!==null&&Ac(Ka)&&(Ka=null),Qa!==null&&Ac(Qa)&&(Qa=null),ja!==null&&Ac(ja)&&(ja=null),il.forEach(ng),al.forEach(ng)}function Bl(e,t){e.blockedOn===t&&(e.blockedOn=null,ah||(ah=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,jE)))}var Fl=null;function ig(e){Fl!==e&&(Fl=e,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,function(){Fl===e&&(Fl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(jp(i||n)===null)continue;break}var s=Qr(n);s!==null&&(e.splice(t,3),t-=3,Bd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Vr(e){function t(l){return Bl(l,e)}Ka!==null&&Bl(Ka,e),Qa!==null&&Bl(Qa,e),ja!==null&&Bl(ja,e),il.forEach(t),al.forEach(t);for(var n=0;n<Pa.length;n++){var i=Pa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Pa.length&&(n=Pa[0],n.blockedOn===null);)oS(n),n.blockedOn===null&&Pa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[zn]||null;if(typeof s=="function")r||ig(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[zn]||null)o=r.formAction;else if(jp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ig(n)}}}function lS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Jp(e){this._internalRoot=e}zu.prototype.render=Jp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=jn();aS(n,i,e,t,null,null)};zu.prototype.unmount=Jp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;aS(e.current,2,null,e,null,null),Lu(),t[Kr]=null}};function zu(e){this._internalRoot=e}zu.prototype.unstable_scheduleHydration=function(e){if(e){var t=I_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pa.length&&t!==0&&t<Pa[n].priority;n++);Pa.splice(n,0,e),n===0&&oS(e)}};var ag=E_.version;if(ag!=="19.2.8")throw Error(tt(527,ag,"19.2.8"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=RM(t),e=e!==null?R_(e):null,e=e===null?null:e.stateNode,e};var JE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{cl=Hl.inject(JE),Kn=Hl}catch{}}xu.createRoot=function(e,t){if(!b_(e))throw Error(tt(299));var n=!1,i="",a=$v,s=tx,r=ex;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=nS(e,1,!1,null,null,n,i,null,a,s,r,lS),e[Kr]=t.current,qp(e),new Jp(t)};xu.hydrateRoot=function(e,t,n){if(!b_(e))throw Error(tt(299));var i=!1,a="",s=$v,r=tx,o=ex,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=nS(e,1,!0,t,n??null,i,a,l,s,r,o,lS),t.context=iS(null),n=t.current,i=jn(),i=rp(i),a=Wa(i),a.callback=null,qa(n,a,i),n=i,t.current.lanes=n,fl(t,n),ki(t),e[Kr]=t.current,qp(e),new zu(t)};xu.version="19.2.8";function cS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cS)}catch(e){console.error(e)}}cS(),__.exports=xu;var $E=__.exports;const t1=o_($E);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="185",e1=0,sg=1,n1=2,Rc=1,i1=2,Ao=3,ns=0,Pn=1,Ui=2,ua=0,Cr=1,rg=2,og=3,lg=4,a1=5,vs=100,s1=101,r1=102,o1=103,l1=104,c1=200,u1=201,f1=202,d1=203,sh=204,rh=205,h1=206,p1=207,m1=208,g1=209,_1=210,v1=211,x1=212,S1=213,M1=214,oh=0,lh=1,ch=2,kr=3,uh=4,fh=5,dh=6,hh=7,uS=0,y1=1,E1=2,Bi=0,fS=1,dS=2,hS=3,pS=4,mS=5,gS=6,_S=7,vS=300,Ns=301,Xr=302,Rf=303,Cf=304,Iu=306,ph=1e3,sa=1001,mh=1002,pn=1003,b1=1004,Gl=1005,Sn=1006,wf=1007,Ss=1008,qn=1009,xS=1010,SS=1011,sl=1012,tm=1013,Hi=1014,Pi=1015,_a=1016,em=1017,nm=1018,rl=1020,MS=35902,yS=35899,ES=1021,bS=1022,yi=1023,va=1026,Ms=1027,TS=1028,im=1029,Ls=1030,am=1031,sm=1033,Cc=33776,wc=33777,Dc=33778,Uc=33779,gh=35840,_h=35841,vh=35842,xh=35843,Sh=36196,Mh=37492,yh=37496,Eh=37488,bh=37489,uu=37490,Th=37491,Ah=37808,Rh=37809,Ch=37810,wh=37811,Dh=37812,Uh=37813,Nh=37814,Lh=37815,Oh=37816,Ph=37817,zh=37818,Ih=37819,Bh=37820,Fh=37821,Hh=36492,Gh=36494,Vh=36495,kh=36283,Xh=36284,fu=36285,Wh=36286,T1=3200,qh=0,A1=1,za="",ii="srgb",du="srgb-linear",hu="linear",le="srgb",Xs=7680,cg=519,R1=512,C1=513,w1=514,rm=515,D1=516,U1=517,om=518,N1=519,ug=35044,fg="300 es",zi=2e3,ol=2001;function L1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function O1(){const e=pu("canvas");return e.style.display="block",e}const dg={};function hg(...e){const t="THREE."+e.shift();console.log(t,...e)}function AS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=AS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ne(...e){e=AS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function wr(...e){const t=e.join(" ");t in dg||(dg[t]=!0,Lt(...e))}function P1(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const z1={[oh]:lh,[ch]:dh,[uh]:hh,[kr]:fh,[lh]:oh,[dh]:ch,[hh]:uh,[fh]:kr};class Fs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=Math.PI/180,Yh=180/Math.PI;function Sl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function I1(e,t){return(e%t+t)%t}function Uf(e,t,n){return(1-n)*e+n*t}function ho(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _m=class _m{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_m.prototype.isVector2=!0;let Wt=_m;class no{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],f=s[r+0],h=s[r+1],x=s[r+2],E=s[r+3];if(p!==E||l!==f||c!==h||d!==x){let _=l*f+c*h+d*x+p*E;_<0&&(f=-f,h=-h,x=-x,E=-E,_=-_);let u=1-o;if(_<.9995){const m=Math.acos(_),M=Math.sin(m);u=Math.sin(u*m)/M,o=Math.sin(o*m)/M,l=l*u+f*o,c=c*u+h*o,d=d*u+x*o,p=p*u+E*o}else{l=l*u+f*o,c=c*u+h*o,d=d*u+x*o,p=p*u+E*o;const m=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=m,c*=m,d*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=s[r],f=s[r+1],h=s[r+2],x=s[r+3];return t[n]=o*x+d*p+l*h-c*f,t[n+1]=l*x+d*f+c*p-o*h,t[n+2]=c*x+d*h+o*f-l*p,t[n+3]=d*x-o*p-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),f=l(i/2),h=l(a/2),x=l(s/2);switch(r){case"XYZ":this._x=f*d*p+c*h*x,this._y=c*h*p-f*d*x,this._z=c*d*x+f*h*p,this._w=c*d*p-f*h*x;break;case"YXZ":this._x=f*d*p+c*h*x,this._y=c*h*p-f*d*x,this._z=c*d*x-f*h*p,this._w=c*d*p+f*h*x;break;case"ZXY":this._x=f*d*p-c*h*x,this._y=c*h*p+f*d*x,this._z=c*d*x+f*h*p,this._w=c*d*p-f*h*x;break;case"ZYX":this._x=f*d*p-c*h*x,this._y=c*h*p+f*d*x,this._z=c*d*x-f*h*p,this._w=c*d*p+f*h*x;break;case"YZX":this._x=f*d*p+c*h*x,this._y=c*h*p+f*d*x,this._z=c*d*x-f*h*p,this._w=c*d*p-f*h*x;break;case"XZY":this._x=f*d*p-c*h*x,this._y=c*h*p-f*d*x,this._z=c*d*x+f*h*p,this._w=c*d*p+f*h*x;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vm=class vm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(pg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(pg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-s*p,this.z=a+l*p+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nf.copy(this).projectOnVector(t),this.sub(Nf)}reflect(t){return this.sub(Nf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vm.prototype.isVector3=!0;let B=vm;const Nf=new B,pg=new no,xm=class xm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],h=i[5],x=i[8],E=a[0],_=a[3],u=a[6],m=a[1],M=a[4],g=a[7],T=a[2],A=a[5],R=a[8];return s[0]=r*E+o*m+l*T,s[3]=r*_+o*M+l*A,s[6]=r*u+o*g+l*R,s[1]=c*E+d*m+p*T,s[4]=c*_+d*M+p*A,s[7]=c*u+d*g+p*R,s[2]=f*E+h*m+x*T,s[5]=f*_+h*M+x*A,s[8]=f*u+h*g+x*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*r-o*c,f=o*l-d*s,h=c*s-r*l,x=n*p+i*f+a*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return t[0]=p*E,t[1]=(a*c-d*i)*E,t[2]=(o*i-a*r)*E,t[3]=f*E,t[4]=(d*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=h*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lf.makeScale(t,n)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lf.makeRotation(-t)),this}translate(t,n){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xm.prototype.isMatrix3=!0;let zt=xm;const Lf=new zt,mg=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B1(){const e={enabled:!0,workingColorSpace:du,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===le&&(a.r=fa(a.r),a.g=fa(a.g),a.b=fa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(a.r=Dr(a.r),a.g=Dr(a.g),a.b=Dr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===za?hu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[du]:{primaries:t,whitePoint:i,transfer:hu,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:le,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),e}const jt=B1();function fa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Dr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ws;class F1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ws===void 0&&(Ws=pu("canvas")),Ws.width=t.width,Ws.height=t.height;const a=Ws.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ws}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=pu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=fa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fa(n[i]/255)*255):n[i]=fa(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let H1=0;class lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Of(a[r].image)):s.push(Of(a[r]))}else s=Of(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Of(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?F1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let G1=0;const Pf=new B;class Tn extends Fs{constructor(t=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=sa,a=sa,s=Sn,r=Ss,o=yi,l=qn,c=Tn.DEFAULT_ANISOTROPY,d=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Sl(),this.name="",this.source=new lm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ph:t.x=t.x-Math.floor(t.x);break;case sa:t.x=t.x<0?0:1;break;case mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ph:t.y=t.y-Math.floor(t.y);break;case sa:t.y=t.y<0?0:1;break;case mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=vS;Tn.DEFAULT_ANISOTROPY=1;const Sm=class Sm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],p=l[8],f=l[1],h=l[5],x=l[9],E=l[2],_=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-E)<.01&&Math.abs(x-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+E)<.1&&Math.abs(x+_)<.1&&Math.abs(c+h+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,g=(h+1)/2,T=(u+1)/2,A=(d+f)/4,R=(p+E)/4,v=(x+_)/4;return M>g&&M>T?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=A/i,s=R/i):g>T?g<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(g),i=A/a,s=v/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=R/s,a=v/s),this.set(i,a,s,n),this}let m=Math.sqrt((_-x)*(_-x)+(p-E)*(p-E)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(_-x)/m,this.y=(p-E)/m,this.z=(f-d)/m,this.w=Math.acos((c+h+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this.w=Jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this.w=Jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;let Ce=Sm;class V1 extends Fs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new Tn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new lm(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends V1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class RS extends Tn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class k1 extends Tn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=class _u{constructor(t,n,i,a,s,r,o,l,c,d,p,f,h,x,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,p,f,h,x,E,_)}set(t,n,i,a,s,r,o,l,c,d,p,f,h,x,E,_){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=f,u[3]=h,u[7]=x,u[11]=E,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,a=1/qs.setFromMatrixColumn(t,0).length(),s=1/qs.setFromMatrixColumn(t,1).length(),r=1/qs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const f=r*d,h=r*p,x=o*d,E=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+x*c,n[5]=f-E*c,n[9]=-o*l,n[2]=E-f*c,n[6]=x+h*c,n[10]=r*l}else if(t.order==="YXZ"){const f=l*d,h=l*p,x=c*d,E=c*p;n[0]=f+E*o,n[4]=x*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=h*o-x,n[6]=E+f*o,n[10]=r*l}else if(t.order==="ZXY"){const f=l*d,h=l*p,x=c*d,E=c*p;n[0]=f-E*o,n[4]=-r*p,n[8]=x+h*o,n[1]=h+x*o,n[5]=r*d,n[9]=E-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const f=r*d,h=r*p,x=o*d,E=o*p;n[0]=l*d,n[4]=x*c-h,n[8]=f*c+E,n[1]=l*p,n[5]=E*c+f,n[9]=h*c-x,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const f=r*l,h=r*c,x=o*l,E=o*c;n[0]=l*d,n[4]=E-f*p,n[8]=x*p+h,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+x,n[10]=f-E*p}else if(t.order==="XZY"){const f=r*l,h=r*c,x=o*l,E=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=f*p+E,n[5]=r*d,n[9]=h*p-x,n[2]=x*p-h,n[6]=o*d,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(X1,t,W1)}lookAt(t,n,i){const a=this.elements;return Hn.subVectors(t,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ba.crossVectors(i,Hn),ba.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ba.crossVectors(i,Hn)),ba.normalize(),Vl.crossVectors(Hn,ba),a[0]=ba.x,a[4]=Vl.x,a[8]=Hn.x,a[1]=ba.y,a[5]=Vl.y,a[9]=Hn.y,a[2]=ba.z,a[6]=Vl.z,a[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],h=i[13],x=i[2],E=i[6],_=i[10],u=i[14],m=i[3],M=i[7],g=i[11],T=i[15],A=a[0],R=a[4],v=a[8],b=a[12],w=a[1],U=a[5],L=a[9],Y=a[13],j=a[2],H=a[6],O=a[10],P=a[14],D=a[3],G=a[7],nt=a[11],at=a[15];return s[0]=r*A+o*w+l*j+c*D,s[4]=r*R+o*U+l*H+c*G,s[8]=r*v+o*L+l*O+c*nt,s[12]=r*b+o*Y+l*P+c*at,s[1]=d*A+p*w+f*j+h*D,s[5]=d*R+p*U+f*H+h*G,s[9]=d*v+p*L+f*O+h*nt,s[13]=d*b+p*Y+f*P+h*at,s[2]=x*A+E*w+_*j+u*D,s[6]=x*R+E*U+_*H+u*G,s[10]=x*v+E*L+_*O+u*nt,s[14]=x*b+E*Y+_*P+u*at,s[3]=m*A+M*w+g*j+T*D,s[7]=m*R+M*U+g*H+T*G,s[11]=m*v+M*L+g*O+T*nt,s[15]=m*b+M*Y+g*P+T*at,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],f=t[10],h=t[14],x=t[3],E=t[7],_=t[11],u=t[15],m=l*h-c*f,M=o*h-c*p,g=o*f-l*p,T=r*h-c*d,A=r*f-l*d,R=r*p-o*d;return n*(E*m-_*M+u*g)-i*(x*m-_*T+u*A)+a*(x*M-E*T+u*R)-s*(x*g-E*A+_*R)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return n*(r*d-o*c)-i*(s*d-o*l)+a*(s*c-r*l)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],f=t[10],h=t[11],x=t[12],E=t[13],_=t[14],u=t[15],m=n*o-i*r,M=n*l-a*r,g=n*c-s*r,T=i*l-a*o,A=i*c-s*o,R=a*c-s*l,v=d*E-p*x,b=d*_-f*x,w=d*u-h*x,U=p*_-f*E,L=p*u-h*E,Y=f*u-h*_,j=m*Y-M*L+g*U+T*w-A*b+R*v;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/j;return t[0]=(o*Y-l*L+c*U)*H,t[1]=(a*L-i*Y-s*U)*H,t[2]=(E*R-_*A+u*T)*H,t[3]=(f*A-p*R-h*T)*H,t[4]=(l*w-r*Y-c*b)*H,t[5]=(n*Y-a*w+s*b)*H,t[6]=(_*g-x*R-u*M)*H,t[7]=(d*R-f*g+h*M)*H,t[8]=(r*L-o*w+c*v)*H,t[9]=(i*w-n*L-s*v)*H,t[10]=(x*A-E*g+u*m)*H,t[11]=(p*g-d*A-h*m)*H,t[12]=(o*b-r*U-l*v)*H,t[13]=(n*U-i*b+a*v)*H,t[14]=(E*M-x*T-_*m)*H,t[15]=(d*T-p*M+f*m)*H,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,p=o+o,f=s*c,h=s*d,x=s*p,E=r*d,_=r*p,u=o*p,m=l*c,M=l*d,g=l*p,T=i.x,A=i.y,R=i.z;return a[0]=(1-(E+u))*T,a[1]=(h+g)*T,a[2]=(x-M)*T,a[3]=0,a[4]=(h-g)*A,a[5]=(1-(f+u))*A,a[6]=(_+m)*A,a[7]=0,a[8]=(x+M)*R,a[9]=(_-m)*R,a[10]=(1-(f+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=qs.set(a[0],a[1],a[2]).length();const o=qs.set(a[4],a[5],a[6]).length(),l=qs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),mi.copy(this);const c=1/r,d=1/o,p=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=p,mi.elements[9]*=p,mi.elements[10]*=p,n.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=zi,l=!1){const c=this.elements,d=2*s/(n-t),p=2*s/(i-a),f=(n+t)/(n-t),h=(i+a)/(i-a);let x,E;if(l)x=s/(r-s),E=r*s/(r-s);else if(o===zi)x=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===ol)x=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=zi,l=!1){const c=this.elements,d=2/(n-t),p=2/(i-a),f=-(n+t)/(n-t),h=-(i+a)/(i-a);let x,E;if(l)x=1/(r-s),E=r/(r-s);else if(o===zi)x=-2/(r-s),E=-(r+s)/(r-s);else if(o===ol)x=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};_u.prototype.isMatrix4=!0;let we=_u;const qs=new B,mi=new we,X1=new B(0,0,0),W1=new B(1,1,1),ba=new B,Vl=new B,Hn=new B,_g=new we,vg=new no;class is{constructor(t=0,n=0,i=0,a=is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],f=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return _g.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_g,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class CS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let q1=0;const xg=new B,Ys=new no,Zi=new we,kl=new B,po=new B,Y1=new B,Z1=new no,Sg=new B(1,0,0),Mg=new B(0,1,0),yg=new B(0,0,1),Eg={type:"added"},K1={type:"removed"},Zs={type:"childadded",child:null},zf={type:"childremoved",child:null};class ln extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new B,n=new is,i=new no,a=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new zt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new CS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ys.setFromAxisAngle(t,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,n){return Ys.setFromAxisAngle(t,n),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Sg,t)}rotateY(t){return this.rotateOnAxis(Mg,t)}rotateZ(t){return this.rotateOnAxis(yg,t)}translateOnAxis(t,n){return xg.copy(t).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Sg,t)}translateY(t){return this.translateOnAxis(Mg,t)}translateZ(t){return this.translateOnAxis(yg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?kl.copy(t):kl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(po,kl,this.up):Zi.lookAt(kl,po,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Ys.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eg),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(K1),zf.child=t,this.dispatchEvent(zf),zf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eg),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,t,Y1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,Z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),p=r(t.shapes),f=r(t.skeletons),h=r(t.animations),x=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),x.length>0&&(i.nodes=x)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}ln.DEFAULT_UP=new B(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xl extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q1={type:"move"};class If{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const _=n.getJointPose(E,i),u=this._getHandJoint(c,E);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),h=.02,x=.005;c.inputState.pinching&&f>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Xl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const wS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Bf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Zt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=jt.workingColorSpace){if(t=I1(t,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Bf(r,s,t+1/3),this.g=Bf(r,s,t),this.b=Bf(r,s,t-1/3)}return jt.colorSpaceToWorking(this,a),this}setStyle(t,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ii){const i=wS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return jt.workingToColorSpace(vn.copy(this),t),Math.round(Jt(vn.r*255,0,255))*65536+Math.round(Jt(vn.g*255,0,255))*256+Math.round(Jt(vn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.workingToColorSpace(vn.copy(this),n);const i=vn.r,a=vn.g,s=vn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=jt.workingColorSpace){return jt.workingToColorSpace(vn.copy(this),n),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ii){jt.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,a=vn.b;return t!==ii?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+n,Ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ta),t.getHSL(Wl);const i=Uf(Ta.h,Wl.h,n),a=Uf(Ta.s,Wl.s,n),s=Uf(Ta.l,Wl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Zt;Zt.NAMES=wS;class cm{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=n,this.far=i}clone(){return new cm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class j1 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const gi=new B,Ki=new B,Ff=new B,Qi=new B,Ks=new B,Qs=new B,bg=new B,Hf=new B,Gf=new B,Vf=new B,kf=new Ce,Xf=new Ce,Wf=new Ce;class Si{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),gi.subVectors(t,n),a.cross(gi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){gi.subVectors(a,n),Ki.subVectors(i,n),Ff.subVectors(t,n);const r=gi.dot(gi),o=gi.dot(Ki),l=gi.dot(Ff),c=Ki.dot(Ki),d=Ki.dot(Ff),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,h=(c*l-o*d)*f,x=(r*d-o*l)*f;return s.set(1-h-x,x,h)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(r,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return kf.setScalar(0),Xf.setScalar(0),Wf.setScalar(0),kf.fromBufferAttribute(t,n),Xf.fromBufferAttribute(t,i),Wf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(kf,s.x),r.addScaledVector(Xf,s.y),r.addScaledVector(Wf,s.z),r}static isFrontFacing(t,n,i,a){return gi.subVectors(i,n),Ki.subVectors(t,n),gi.cross(Ki).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),gi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return Si.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Ks.subVectors(a,i),Qs.subVectors(s,i),Hf.subVectors(t,i);const l=Ks.dot(Hf),c=Qs.dot(Hf);if(l<=0&&c<=0)return n.copy(i);Gf.subVectors(t,a);const d=Ks.dot(Gf),p=Qs.dot(Gf);if(d>=0&&p<=d)return n.copy(a);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Ks,r);Vf.subVectors(t,s);const h=Ks.dot(Vf),x=Qs.dot(Vf);if(x>=0&&h<=x)return n.copy(s);const E=h*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Qs,o);const _=d*x-h*p;if(_<=0&&p-d>=0&&h-x>=0)return bg.subVectors(s,a),o=(p-d)/(p-d+(h-x)),n.copy(a).addScaledVector(bg,o);const u=1/(_+E+f);return r=E*u,o=f*u,n.copy(i).addScaledVector(Ks,r).addScaledVector(Qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ml{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(_i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=_i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,_i):_i.fromBufferAttribute(s,r),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ql.copy(i.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mo),Yl.subVectors(this.max,mo),js.subVectors(t.a,mo),Js.subVectors(t.b,mo),$s.subVectors(t.c,mo),Aa.subVectors(Js,js),Ra.subVectors($s,Js),ls.subVectors(js,$s);let n=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-ls.z,ls.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,ls.z,0,-ls.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-ls.y,ls.x,0];return!qf(n,js,Js,$s,Yl)||(n=[1,0,0,0,1,0,0,0,1],!qf(n,js,Js,$s,Yl))?!1:(Zl.crossVectors(Aa,Ra),n=[Zl.x,Zl.y,Zl.z],qf(n,js,Js,$s,Yl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new B,new B,new B,new B,new B,new B,new B,new B],_i=new B,ql=new Ml,js=new B,Js=new B,$s=new B,Aa=new B,Ra=new B,ls=new B,mo=new B,Yl=new B,Zl=new B,cs=new B;function qf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){cs.fromArray(e,s);const o=a.x*Math.abs(cs.x)+a.y*Math.abs(cs.y)+a.z*Math.abs(cs.z),l=t.dot(cs),c=n.dot(cs),d=i.dot(cs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ke=new B,Kl=new Wt;let J1=0;class Ei extends Fs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=ug,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Kl.fromBufferAttribute(this,n),Kl.applyMatrix3(t),this.setXY(n,Kl.x,Kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),a=Dn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),a=Dn(a,this.array),s=Dn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ug&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class DS extends Ei{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class US extends Ei{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class je extends Ei{constructor(t,n,i){super(new Float32Array(t),n,i)}}const $1=new Ml,go=new B,Yf=new B;class Bu{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):$1.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;go.subVectors(t,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(go,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(go.copy(t.center).add(Yf)),this.expandByPoint(go.copy(t.center).sub(Yf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let tb=0;const ei=new we,Zf=new ln,tr=new B,Gn=new Ml,_o=new Ml,nn=new B;class Bn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L1(t)?US:DS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,n,i){return ei.makeTranslation(t,n,i),this.applyMatrix4(ei),this}scale(t,n,i){return ei.makeScale(t,n,i),this.applyMatrix4(ei),this}lookAt(t){return Zf.lookAt(t),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new je(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Gn.min,_o.min),Gn.expandByPoint(nn),nn.addVectors(Gn.max,_o.max),Gn.expandByPoint(nn)):(Gn.expandByPoint(_o.min),Gn.expandByPoint(_o.max))}Gn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)nn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(nn));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)nn.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),nn.add(tr)),a=Math.max(a,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new B,l[v]=new B;const c=new B,d=new B,p=new B,f=new Wt,h=new Wt,x=new Wt,E=new B,_=new B;function u(v,b,w){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,b),x.fromBufferAttribute(s,w),d.sub(c),p.sub(c),h.sub(f),x.sub(f);const U=1/(h.x*x.y-x.x*h.y);isFinite(U)&&(E.copy(d).multiplyScalar(x.y).addScaledVector(p,-h.y).multiplyScalar(U),_.copy(p).multiplyScalar(h.x).addScaledVector(d,-x.x).multiplyScalar(U),o[v].add(E),o[b].add(E),o[w].add(E),l[v].add(_),l[b].add(_),l[w].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let v=0,b=m.length;v<b;++v){const w=m[v],U=w.start,L=w.count;for(let Y=U,j=U+L;Y<j;Y+=3)u(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const M=new B,g=new B,T=new B,A=new B;function R(v){T.fromBufferAttribute(a,v),A.copy(T);const b=o[v];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),g.crossVectors(A,b);const U=g.dot(l[v])<0?-1:1;r.setXYZW(v,M.x,M.y,M.z,U)}for(let v=0,b=m.length;v<b;++v){const w=m[v],U=w.start,L=w.count;for(let Y=U,j=U+L;Y<j;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const a=new B,s=new B,r=new B,o=new B,l=new B,c=new B,d=new B,p=new B;if(t)for(let f=0,h=t.count;f<h;f+=3){const x=t.getX(f+0),E=t.getX(f+1),_=t.getX(f+2);a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,_),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)a.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let h=0,x=0;for(let E=0,_=l.length;E<_;E++){o.isInterleavedBufferAttribute?h=l[E]*o.data.stride+o.offset:h=l[E]*d;for(let u=0;u<d;u++)f[x++]=c[h++]}return new Ei(f,d,p)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],h=t(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const h=c[p];d.push(h.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,h=p.length;f<h;f++)d.push(p[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eb=0;class io extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Cr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ji=new B,Kf=new B,Ql=new B,Ca=new B,Qf=new B,jl=new B,jf=new B;class NS{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ji.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Kf.copy(t).add(n).multiplyScalar(.5),Ql.copy(n).sub(t).normalize(),Ca.copy(this.origin).sub(Kf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Ql),o=Ca.dot(this.direction),l=-Ca.dot(Ql),c=Ca.lengthSq(),d=Math.abs(1-r*r);let p,f,h,x;if(d>0)if(p=r*l-o,f=r*o-l,x=s*d,p>=0)if(f>=-x)if(f<=x){const E=1/d;p*=E,f*=E,h=p*(p+r*f+2*o)+f*(r*p+f+2*l)+c}else f=s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+c;else f<=-x?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c):f<=x?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Kf).addScaledVector(Ql,f),h}intersectSphere(t,n){Ji.subVectors(t.center,this.origin);const i=Ji.dot(this.direction),a=Ji.dot(Ji)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),d>=0?(s=(t.min.y-f.y)*d,r=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,r=(t.min.y-f.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,n,i,a,s){Qf.subVectors(n,t),jl.subVectors(i,t),jf.crossVectors(Qf,jl);let r=this.direction.dot(jf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ca.subVectors(this.origin,t);const l=o*this.direction.dot(jl.crossVectors(Ca,jl));if(l<0)return null;const c=o*this.direction.dot(Qf.cross(Ca));if(c<0||l+c>r)return null;const d=-o*Ca.dot(jf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class um extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=uS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tg=new we,us=new NS,Jl=new Bu,Ag=new B,$l=new B,tc=new B,ec=new B,Jf=new B,nc=new B,Rg=new B,ic=new B;class Be extends ln{constructor(t=new Bn,n=new um){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(Jf.fromBufferAttribute(p,t),r?nc.addScaledVector(Jf,d):nc.addScaledVector(Jf.sub(n),d))}n.add(nc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(Jl.containsPoint(us.origin)===!1&&(us.intersectSphere(Jl,Ag)===null||us.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(Tg.copy(s).invert(),us.copy(t.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,us)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,E=f.length;x<E;x++){const _=f[x],u=r[_.materialIndex],m=Math.max(_.start,h.start),M=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let g=m,T=M;g<T;g+=3){const A=o.getX(g),R=o.getX(g+1),v=o.getX(g+2);a=ac(this,u,t,i,c,d,p,A,R,v),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const x=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let _=x,u=E;_<u;_+=3){const m=o.getX(_),M=o.getX(_+1),g=o.getX(_+2);a=ac(this,r,t,i,c,d,p,m,M,g),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,E=f.length;x<E;x++){const _=f[x],u=r[_.materialIndex],m=Math.max(_.start,h.start),M=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let g=m,T=M;g<T;g+=3){const A=g,R=g+1,v=g+2;a=ac(this,u,t,i,c,d,p,A,R,v),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const x=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let _=x,u=E;_<u;_+=3){const m=_,M=_+1,g=_+2;a=ac(this,r,t,i,c,d,p,m,M,g),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function nb(e,t,n,i,a,s,r,o){let l;if(t.side===Pn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ns,o),l===null)return null;ic.copy(o),ic.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(ic);return c<n.near||c>n.far?null:{distance:c,point:ic.clone(),object:e}}function ac(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,$l),e.getVertexPosition(l,tc),e.getVertexPosition(c,ec);const d=nb(e,t,n,i,$l,tc,ec,Rg);if(d){const p=new B;Si.getBarycoord(Rg,$l,tc,ec,p),a&&(d.uv=Si.getInterpolatedAttribute(a,o,l,c,p,new Wt)),s&&(d.uv1=Si.getInterpolatedAttribute(s,o,l,c,p,new Wt)),r&&(d.normal=Si.getInterpolatedAttribute(r,o,l,c,p,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Si.getNormal($l,tc,ec,f.normal),d.face=f,d.barycoord=p}return d}class ib extends Tn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=pn,d=pn,p,f){super(null,r,o,l,c,d,a,s,p,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $f=new B,ab=new B,sb=new zt;class gs{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=$f.subVectors(i,n).cross(ab.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta($f),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||sb.getNormalMatrix(t),a=this.coplanarPoint($f).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Bu,rb=new Wt(.5,.5),sc=new B;class fm{constructor(t=new gs,n=new gs,i=new gs,a=new gs,s=new gs,r=new gs){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],f=s[6],h=s[7],x=s[8],E=s[9],_=s[10],u=s[11],m=s[12],M=s[13],g=s[14],T=s[15];if(a[0].setComponents(c-r,h-d,u-x,T-m).normalize(),a[1].setComponents(c+r,h+d,u+x,T+m).normalize(),a[2].setComponents(c+o,h+p,u+E,T+M).normalize(),a[3].setComponents(c-o,h-p,u-E,T-M).normalize(),i)a[4].setComponents(l,f,_,g).normalize(),a[5].setComponents(c-l,h-f,u-_,T-g).normalize();else if(a[4].setComponents(c-l,h-f,u-_,T-g).normalize(),n===zi)a[5].setComponents(c+l,h+f,u+_,T+g).normalize();else if(n===ol)a[5].setComponents(l,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);const n=rb.distanceTo(t.center);return fs.radius=.7071067811865476+n,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(sc.x=a.normal.x>0?t.max.x:t.min.x,sc.y=a.normal.y>0?t.max.y:t.min.y,sc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LS extends io{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mu=new B,gu=new B,Cg=new we,vo=new NS,rc=new Bu,td=new B,wg=new B;class ob extends ln{constructor(t=new Bn,n=new LS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)mu.fromBufferAttribute(n,a-1),gu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=mu.distanceTo(gu);t.setAttribute("lineDistance",new je(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(a),rc.radius+=s,t.ray.intersectsSphere(rc)===!1)return;Cg.copy(a).invert(),vo.copy(t.ray).applyMatrix4(Cg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const h=Math.max(0,r.start),x=Math.min(d.count,r.start+r.count);for(let E=h,_=x-1;E<_;E+=c){const u=d.getX(E),m=d.getX(E+1),M=oc(this,t,vo,l,u,m,E);M&&n.push(M)}if(this.isLineLoop){const E=d.getX(x-1),_=d.getX(h),u=oc(this,t,vo,l,E,_,x-1);u&&n.push(u)}}else{const h=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let E=h,_=x-1;E<_;E+=c){const u=oc(this,t,vo,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=oc(this,t,vo,l,x-1,h,x-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function oc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(mu.fromBufferAttribute(o,a),gu.fromBufferAttribute(o,s),n.distanceSqToSegment(mu,gu,td,wg)>i)return;td.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(td);if(!(c<t.near||c>t.far))return{distance:c,point:wg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class OS extends Tn{constructor(t=[],n=Ns,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wr extends Tn{constructor(t,n,i=Hi,a,s,r,o=pn,l=pn,c,d=va,p=1){if(d!==va&&d!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:p};super(f,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lb extends Wr{constructor(t,n=Hi,i=Ns,a,s,r=pn,o=pn,l,c=va){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class PS extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ra extends Bn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],p=[];let f=0,h=0;x("z","y","x",-1,-1,i,n,t,r,s,0),x("z","y","x",1,-1,i,n,-t,r,s,1),x("x","z","y",1,1,t,i,n,a,r,2),x("x","z","y",1,-1,t,i,-n,a,r,3),x("x","y","z",1,-1,t,n,i,a,s,4),x("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(p,2));function x(E,_,u,m,M,g,T,A,R,v,b){const w=g/R,U=T/v,L=g/2,Y=T/2,j=A/2,H=R+1,O=v+1;let P=0,D=0;const G=new B;for(let nt=0;nt<O;nt++){const at=nt*U-Y;for(let lt=0;lt<H;lt++){const Bt=lt*w-L;G[E]=Bt*m,G[_]=at*M,G[u]=j,c.push(G.x,G.y,G.z),G[E]=0,G[_]=0,G[u]=A>0?1:-1,d.push(G.x,G.y,G.z),p.push(lt/R),p.push(1-nt/v),P+=1}}for(let nt=0;nt<v;nt++)for(let at=0;at<R;at++){const lt=f+at+H*nt,Bt=f+at+H*(nt+1),Mt=f+(at+1)+H*(nt+1),Tt=f+(at+1)+H*nt;l.push(lt,Bt,Tt),l.push(Bt,Mt,Tt),D+=6}o.addGroup(h,D,b),h+=D,f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ko extends Bn{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],p=[],f=[],h=[];let x=0;const E=[],_=i/2;let u=0;m(),r===!1&&(t>0&&M(!0),n>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(h,2));function m(){const g=new B,T=new B;let A=0;const R=(n-t)/i;for(let v=0;v<=s;v++){const b=[],w=v/s,U=w*(n-t)+t;for(let L=0;L<=a;L++){const Y=L/a,j=Y*l+o,H=Math.sin(j),O=Math.cos(j);T.x=U*H,T.y=-w*i+_,T.z=U*O,p.push(T.x,T.y,T.z),g.set(H,R,O).normalize(),f.push(g.x,g.y,g.z),h.push(Y,1-w),b.push(x++)}E.push(b)}for(let v=0;v<a;v++)for(let b=0;b<s;b++){const w=E[b][v],U=E[b+1][v],L=E[b+1][v+1],Y=E[b][v+1];(t>0||b!==0)&&(d.push(w,U,Y),A+=3),(n>0||b!==s-1)&&(d.push(U,L,Y),A+=3)}c.addGroup(u,A,0),u+=A}function M(g){const T=x,A=new Wt,R=new B;let v=0;const b=g===!0?t:n,w=g===!0?1:-1;for(let L=1;L<=a;L++)p.push(0,_*w,0),f.push(0,w,0),h.push(.5,.5),x++;const U=x;for(let L=0;L<=a;L++){const j=L/a*l+o,H=Math.cos(j),O=Math.sin(j);R.x=b*O,R.y=_*w,R.z=b*H,p.push(R.x,R.y,R.z),f.push(0,w,0),A.x=H*.5+.5,A.y=O*.5*w+.5,h.push(A.x,A.y),x++}for(let L=0;L<a;L++){const Y=T+L,j=U+L;g===!0?d.push(j,j+1,Y):d.push(j+1,j,Y),v+=3}c.addGroup(u,v,g===!0?1:2),u+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yl extends Bn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(s.slice(),3)),this.setAttribute("uv",new je(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const M=new B,g=new B,T=new B;for(let A=0;A<n.length;A+=3)h(n[A+0],M),h(n[A+1],g),h(n[A+2],T),l(M,g,T,m)}function l(m,M,g,T){const A=T+1,R=[];for(let v=0;v<=A;v++){R[v]=[];const b=m.clone().lerp(g,v/A),w=M.clone().lerp(g,v/A),U=A-v;for(let L=0;L<=U;L++)L===0&&v===A?R[v][L]=b:R[v][L]=b.clone().lerp(w,L/U)}for(let v=0;v<A;v++)for(let b=0;b<2*(A-v)-1;b++){const w=Math.floor(b/2);b%2===0?(f(R[v][w+1]),f(R[v+1][w]),f(R[v][w])):(f(R[v][w+1]),f(R[v+1][w+1]),f(R[v+1][w]))}}function c(m){const M=new B;for(let g=0;g<s.length;g+=3)M.x=s[g+0],M.y=s[g+1],M.z=s[g+2],M.normalize().multiplyScalar(m),s[g+0]=M.x,s[g+1]=M.y,s[g+2]=M.z}function d(){const m=new B;for(let M=0;M<s.length;M+=3){m.x=s[M+0],m.y=s[M+1],m.z=s[M+2];const g=_(m)/2/Math.PI+.5,T=u(m)/Math.PI+.5;r.push(g,1-T)}x(),p()}function p(){for(let m=0;m<r.length;m+=6){const M=r[m+0],g=r[m+2],T=r[m+4],A=Math.max(M,g,T),R=Math.min(M,g,T);A>.9&&R<.1&&(M<.2&&(r[m+0]+=1),g<.2&&(r[m+2]+=1),T<.2&&(r[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function h(m,M){const g=m*3;M.x=t[g+0],M.y=t[g+1],M.z=t[g+2]}function x(){const m=new B,M=new B,g=new B,T=new B,A=new Wt,R=new Wt,v=new Wt;for(let b=0,w=0;b<s.length;b+=9,w+=6){m.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),g.set(s[b+6],s[b+7],s[b+8]),A.set(r[w+0],r[w+1]),R.set(r[w+2],r[w+3]),v.set(r[w+4],r[w+5]),T.copy(m).add(M).add(g).divideScalar(3);const U=_(T);E(A,w+0,m,U),E(R,w+2,M,U),E(v,w+4,g,U)}}function E(m,M,g,T){T<0&&m.x===1&&(r[M]=m.x-1),g.x===0&&g.z===0&&(r[M]=T/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.vertices,t.indices,t.radius,t.detail)}}class dm extends yl{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new dm(t.radius,t.detail)}}class hm extends yl{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new hm(t.radius,t.detail)}}class pm extends yl{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new pm(t.radius,t.detail)}}class qr extends Bn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=t/o,f=n/l,h=[],x=[],E=[],_=[];for(let u=0;u<d;u++){const m=u*f-r;for(let M=0;M<c;M++){const g=M*p-s;x.push(g,-m,0),E.push(0,0,1),_.push(M/o),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const M=m+c*u,g=m+c*(u+1),T=m+1+c*(u+1),A=m+1+c*u;h.push(M,g,A),h.push(g,T,A)}this.setIndex(h),this.setAttribute("position",new je(x,3)),this.setAttribute("normal",new je(E,3)),this.setAttribute("uv",new je(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class mm extends Bn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],p=new B,f=new B,h=[],x=[],E=[],_=[];for(let u=0;u<=i;u++){const m=[],M=u/i,g=r+M*o,T=t*Math.cos(g),A=Math.sqrt(t*t-T*T);let R=0;u===0&&r===0?R=.5/n:u===i&&l===Math.PI&&(R=-.5/n);for(let v=0;v<=n;v++){const b=v/n,w=a+b*s;p.x=-A*Math.cos(w),p.y=T,p.z=A*Math.sin(w),x.push(p.x,p.y,p.z),f.copy(p).normalize(),E.push(f.x,f.y,f.z),_.push(b+R,1-M),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const M=d[u][m+1],g=d[u][m],T=d[u+1][m],A=d[u+1][m+1];(u!==0||r>0)&&h.push(M,g,A),(u!==i-1||l<Math.PI)&&h.push(g,T,A)}this.setIndex(h),this.setAttribute("position",new je(x,3)),this.setAttribute("normal",new je(E,3)),this.setAttribute("uv",new je(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Yr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(Dg(a))a.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(Dg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Mn(e){const t={};for(let n=0;n<e.length;n++){const i=Yr(e[n]);for(const a in i)t[a]=i[a]}return t}function Dg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function cb(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ub={clone:Yr,merge:Mn};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=cb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(a.value);break;case"v2":this.uniforms[i].value=new Wt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new B().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(a.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new we().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hb extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vi extends io{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pb extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mb extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class IS extends ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class gb extends IS{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const ed=new we,Ug=new B,Ng=new B;class _b{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Ug.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ug),Ng.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Ng),n.updateMatrixWorld(),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ol||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lc=new B,cc=new no,Ci=new B;class BS extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lc,cc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(lc,cc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wa=new B,Lg=new Wt,Og=new Wt;class oi extends BS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Yh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Df*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-t/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-t/wa.z)}getViewSize(t,n){return this.getViewBounds(t,Lg,Og),n.subVectors(Og,Lg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Df*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gm extends BS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vb extends _b{constructor(){super(new gm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xb extends IS{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new vb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const er=-90,nr=1;class Sb extends ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(er,nr,t,n);a.layers=this.layers,this.add(a);const s=new oi(er,nr,t,n);s.layers=this.layers,this.add(s);const r=new oi(er,nr,t,n);r.layers=this.layers,this.add(r);const o=new oi(er,nr,t,n);o.layers=this.layers,this.add(o);const l=new oi(er,nr,t,n);l.layers=this.layers,this.add(l);const c=new oi(er,nr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,f,h),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Mb extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Mm=class Mm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};Mm.prototype.isMatrix2=!0;let Pg=Mm;function zg(e,t,n,i){const a=yb(i);switch(n){case ES:return e*t;case TS:return e*t/a.components*a.byteLength;case im:return e*t/a.components*a.byteLength;case Ls:return e*t*2/a.components*a.byteLength;case am:return e*t*2/a.components*a.byteLength;case bS:return e*t*3/a.components*a.byteLength;case yi:return e*t*4/a.components*a.byteLength;case sm:return e*t*4/a.components*a.byteLength;case Cc:case wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _h:case xh:return Math.max(e,16)*Math.max(t,8)/4;case gh:case vh:return Math.max(e,8)*Math.max(t,8)/2;case Sh:case Mh:case Eh:case bh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yh:case uu:case Th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Hh:case Gh:case Vh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kh:case Xh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case fu:case Wh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(e){switch(e){case qn:case xS:return{byteLength:1,components:1};case sl:case SS:case _a:return{byteLength:2,components:1};case em:case nm:return{byteLength:2,components:4};case Hi:case tm:case Pi:return{byteLength:4,components:1};case MS:case yS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function FS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Eb(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,d);else{p.sort((h,x)=>h.start-x.start);let f=0;for(let h=1;h<p.length;h++){const x=p[f],E=p[h];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++f,p[f]=E)}p.length=f+1;for(let h=0,x=p.length;h<x;h++){const E=p[h];e.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
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
#endif`,Ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Db=`#ifdef USE_AOMAP
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
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nb=`#ifdef USE_BATCHING
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
#endif`,Lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yb=`#define PI 3.141592653589793
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
} // validated`,Zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
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
#endif`,yT=`uniform sampler2D dfgLUT;
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
}`,ET=`
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OT=`#if defined( USE_POINTS_UV )
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
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
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
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
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
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cA=`float getShadowMask() {
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
}`,uA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,pA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TA=`uniform sampler2D t2D;
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`#include <common>
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
}`,UA=`#if DEPTH_PACKING == 3200
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
}`,NA=`#define DISTANCE
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
}`,LA=`#define DISTANCE
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
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
}`,IA=`uniform vec3 diffuse;
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
}`,BA=`#include <common>
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
}`,FA=`uniform vec3 diffuse;
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define MATCAP
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
}`,kA=`#define MATCAP
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
}`,XA=`#define NORMAL
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
}`,WA=`#define NORMAL
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
}`,qA=`#define PHONG
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
}`,YA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define STANDARD
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
}`,QA=`#define TOON
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
}`,jA=`#define TOON
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
}`,JA=`uniform float size;
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
}`,$A=`uniform vec3 diffuse;
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
}`,tR=`#include <common>
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
}`,eR=`uniform vec3 color;
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
}`,nR=`uniform float rotation;
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
}`,iR=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:bb,alphahash_pars_fragment:Tb,alphamap_fragment:Ab,alphamap_pars_fragment:Rb,alphatest_fragment:Cb,alphatest_pars_fragment:wb,aomap_fragment:Db,aomap_pars_fragment:Ub,batching_pars_vertex:Nb,batching_vertex:Lb,begin_vertex:Ob,beginnormal_vertex:Pb,bsdfs:zb,iridescence_fragment:Ib,bumpmap_pars_fragment:Bb,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:kb,color_pars_fragment:Xb,color_pars_vertex:Wb,color_vertex:qb,common:Yb,cube_uv_reflection_fragment:Zb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Qb,displacementmap_vertex:jb,emissivemap_fragment:Jb,emissivemap_pars_fragment:$b,colorspace_fragment:tT,colorspace_pars_fragment:eT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:aT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:gT,envmap_vertex:rT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:_T,lights_toon_pars_fragment:vT,lights_phong_fragment:xT,lights_phong_pars_fragment:ST,lights_physical_fragment:MT,lights_physical_pars_fragment:yT,lights_fragment_begin:ET,lights_fragment_maps:bT,lights_fragment_end:TT,lightprobes_pars_fragment:AT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:wT,logdepthbuf_vertex:DT,map_fragment:UT,map_pars_fragment:NT,map_particle_fragment:LT,map_particle_pars_fragment:OT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:zT,morphinstance_vertex:IT,morphcolor_vertex:BT,morphnormal_vertex:FT,morphtarget_pars_vertex:HT,morphtarget_vertex:GT,normal_fragment_begin:VT,normal_fragment_maps:kT,normal_pars_fragment:XT,normal_pars_vertex:WT,normal_vertex:qT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:jT,opaque_fragment:JT,packing:$T,premultiplied_alpha_fragment:tA,project_vertex:eA,dithering_fragment:nA,dithering_pars_fragment:iA,roughnessmap_fragment:aA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:rA,shadowmap_pars_vertex:oA,shadowmap_vertex:lA,shadowmask_pars_fragment:cA,skinbase_vertex:uA,skinning_pars_vertex:fA,skinning_vertex:dA,skinnormal_vertex:hA,specularmap_fragment:pA,specularmap_pars_fragment:mA,tonemapping_fragment:gA,tonemapping_pars_fragment:_A,transmission_fragment:vA,transmission_pars_fragment:xA,uv_pars_fragment:SA,uv_pars_vertex:MA,uv_vertex:yA,worldpos_vertex:EA,background_vert:bA,background_frag:TA,backgroundCube_vert:AA,backgroundCube_frag:RA,cube_vert:CA,cube_frag:wA,depth_vert:DA,depth_frag:UA,distance_vert:NA,distance_frag:LA,equirect_vert:OA,equirect_frag:PA,linedashed_vert:zA,linedashed_frag:IA,meshbasic_vert:BA,meshbasic_frag:FA,meshlambert_vert:HA,meshlambert_frag:GA,meshmatcap_vert:VA,meshmatcap_frag:kA,meshnormal_vert:XA,meshnormal_frag:WA,meshphong_vert:qA,meshphong_frag:YA,meshphysical_vert:ZA,meshphysical_frag:KA,meshtoon_vert:QA,meshtoon_frag:jA,points_vert:JA,points_frag:$A,shadow_vert:tR,shadow_frag:eR,sprite_vert:nR,sprite_frag:iR},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Di={basic:{uniforms:Mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Mn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Mn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Mn([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Mn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Mn([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Mn([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Mn([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Mn([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Di.physical={uniforms:Mn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const uc={r:0,b:0,g:0},aR=new we,HS=new zt;HS.set(-1,0,0,0,1,0,0,0,1);function sR(e,t,n,i,a,s){const r=new Zt(0);let o=a===!0?0:1,l,c,d=null,p=0,f=null;function h(m){let M=m.isScene===!0?m.background:null;if(M&&M.isTexture){const g=m.backgroundBlurriness>0;M=t.get(M,g)}return M}function x(m){let M=!1;const g=h(m);g===null?_(r,o):g&&g.isColor&&(_(g,1),M=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,M){const g=h(M);g&&(g.isCubeTexture||g.mapping===Iu)?(c===void 0&&(c=new Be(new ra(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Yr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aR.makeRotationFromEuler(M.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(HS),c.material.toneMapped=jt.getTransfer(g.colorSpace)!==le,(d!==g||p!==g.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,d=g,p=g.version,f=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Be(new qr(2,2),new Gi({name:"BackgroundMaterial",uniforms:Yr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=jt.getTransfer(g.colorSpace)!==le,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||p!==g.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,d=g,p=g.version,f=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,M){m.getRGB(uc,zS(e)),n.buffers.color.setClear(uc.r,uc.g,uc.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,M=1){r.set(m),o=M,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(r,o)},render:x,addToRenderList:E,dispose:u}}function rR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(U,L,Y,j,H){let O=!1;const P=p(U,j,Y,L);s!==P&&(s=P,c(s.object)),O=h(U,j,Y,H),O&&x(U,j,Y,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,g(U,L,Y,j),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function d(U){return e.deleteVertexArray(U)}function p(U,L,Y,j){const H=j.wireframe===!0;let O=i[L.id];O===void 0&&(O={},i[L.id]=O);const P=U.isInstancedMesh===!0?U.id:0;let D=O[P];D===void 0&&(D={},O[P]=D);let G=D[Y.id];G===void 0&&(G={},D[Y.id]=G);let nt=G[H];return nt===void 0&&(nt=f(l()),G[H]=nt),nt}function f(U){const L=[],Y=[],j=[];for(let H=0;H<n;H++)L[H]=0,Y[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:j,object:U,attributes:{},index:null}}function h(U,L,Y,j){const H=s.attributes,O=L.attributes;let P=0;const D=Y.getAttributes();for(const G in D)if(D[G].location>=0){const at=H[G];let lt=O[G];if(lt===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(lt=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(lt=U.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;P++}return s.attributesNum!==P||s.index!==j}function x(U,L,Y,j){const H={},O=L.attributes;let P=0;const D=Y.getAttributes();for(const G in D)if(D[G].location>=0){let at=O[G];at===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),H[G]=lt,P++}s.attributes=H,s.attributesNum=P,s.index=j}function E(){const U=s.newAttributes;for(let L=0,Y=U.length;L<Y;L++)U[L]=0}function _(U){u(U,0)}function u(U,L){const Y=s.newAttributes,j=s.enabledAttributes,H=s.attributeDivisors;Y[U]=1,j[U]===0&&(e.enableVertexAttribArray(U),j[U]=1),H[U]!==L&&(e.vertexAttribDivisor(U,L),H[U]=L)}function m(){const U=s.newAttributes,L=s.enabledAttributes;for(let Y=0,j=L.length;Y<j;Y++)L[Y]!==U[Y]&&(e.disableVertexAttribArray(Y),L[Y]=0)}function M(U,L,Y,j,H,O,P){P===!0?e.vertexAttribIPointer(U,L,Y,H,O):e.vertexAttribPointer(U,L,Y,j,H,O)}function g(U,L,Y,j){E();const H=j.attributes,O=Y.getAttributes(),P=L.defaultAttributeValues;for(const D in O){const G=O[D];if(G.location>=0){let nt=H[D];if(nt===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor)),nt!==void 0){const at=nt.normalized,lt=nt.itemSize,Bt=t.get(nt);if(Bt===void 0)continue;const Mt=Bt.buffer,Tt=Bt.type,K=Bt.bytesPerElement,rt=Tt===e.INT||Tt===e.UNSIGNED_INT||nt.gpuType===tm;if(nt.isInterleavedBufferAttribute){const st=nt.data,Ut=st.stride,Pt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)u(G.location+Dt,st.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)_(G.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,Mt);for(let Dt=0;Dt<G.locationSize;Dt++)M(G.location+Dt,lt/G.locationSize,Tt,at,Ut*K,(Pt+lt/G.locationSize*Dt)*K,rt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)u(G.location+st,nt.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<G.locationSize;st++)_(G.location+st);e.bindBuffer(e.ARRAY_BUFFER,Mt);for(let st=0;st<G.locationSize;st++)M(G.location+st,lt/G.locationSize,Tt,at,lt*K,lt/G.locationSize*st*K,rt)}}else if(P!==void 0){const at=P[D];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(G.location,at);break;case 3:e.vertexAttrib3fv(G.location,at);break;case 4:e.vertexAttrib4fv(G.location,at);break;default:e.vertexAttrib1fv(G.location,at)}}}}m()}function T(){b();for(const U in i){const L=i[U];for(const Y in L){const j=L[Y];for(const H in j){const O=j[H];for(const P in O)d(O[P].object),delete O[P];delete j[H]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const L=i[U.id];for(const Y in L){const j=L[Y];for(const H in j){const O=j[H];for(const P in O)d(O[P].object),delete O[P];delete j[H]}}delete i[U.id]}function R(U){for(const L in i){const Y=i[L];for(const j in Y){const H=Y[j];if(H[U.id]===void 0)continue;const O=H[U.id];for(const P in O)d(O[P].object),delete O[P];delete H[U.id]}}}function v(U){for(const L in i){const Y=i[L],j=U.isInstancedMesh===!0?U.id:0,H=Y[j];if(H!==void 0){for(const O in H){const P=H[O];for(const D in P)d(P[D].object),delete P[D];delete H[O]}delete Y[j],Object.keys(Y).length===0&&delete i[L]}}}function b(){w(),r=!0,s!==a&&(s=a,c(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:_,disableUnusedAttributes:m}}function oR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let h=0;h<d;h++)f+=c[h];n.update(f,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function lR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==yi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pi&&!v)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Lt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:g,maxSamples:T,samples:A}}function cR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new gs,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||i!==0||a;return a=f,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,h){const x=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,u=e.get(p);if(!a||x===null||x.length===0||s&&!_)s?d(null):c();else{const m=s?0:i,M=m*4;let g=u.clippingState||null;l.value=g,g=d(x,f,M,h);for(let T=0;T!==M;++T)g[T]=n[T];u.clippingState=g,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,f,h,x){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=l.value,x!==!0||_===null){const u=h+E*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<u)&&(_=new Float32Array(u));for(let M=0,g=h;M!==E;++M,g+=4)r.copy(p[M]).applyMatrix4(m,o),r.normal.toArray(_,g),_[g+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}const Va=4,Ig=[.125,.215,.35,.446,.526,.582],xs=20,uR=256,xo=new gm,Bg=new Zt;let nd=null,id=0,ad=0,sd=!1;const fR=new B;class Fg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=fR}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ns||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:_a,format:yi,colorSpace:du,depthBuffer:!1},a=Hg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dR(s)),this._blurMaterial=pR(s,t,n),this._ggxMaterial=hR(s,t,n)}return a}_compileMaterial(t){const n=new Be(new Bn,t);this._renderer.compile(n,xo)}_sceneToCubeUV(t,n,i,a,s){const l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,h=p.toneMapping;p.getClearColor(Bg),p.toneMapping=Bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new ra,new um({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let u=!1;const m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,u=!0):(_.color.copy(Bg),u=!0);for(let M=0;M<6;M++){const g=M%3;g===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):g===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const T=this._cubeSize;ir(a,g*T,M>2?T:0,T,T),p.setRenderTarget(a),u&&p.render(E,l),p.render(t,l)}p.toneMapping=h,p.autoClear=f,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Ns||t.mapping===Xr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ir(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,xo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),f=0+c*1.25,h=p*f,{_lodMax:x}=this,E=this._sizeLods[i],_=3*E*(i>x-Va?i-x+Va:0),u=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=x-n,ir(s,_,u,3*E,2*E),a.setRenderTarget(s),a.render(o,xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,ir(t,_,u,3*E,2*E),a.setRenderTarget(t),a.render(o,xo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*xs-1),E=s/x,_=isFinite(s)?1+Math.floor(d*E):xs;_>xs&&Lt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${xs}`);const u=[];let m=0;for(let R=0;R<xs;++R){const v=R/E,b=Math.exp(-v*v/2);u.push(b),R===0?m+=b:R<_&&(m+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/m;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-i;const g=this._sizeLods[a],T=3*g*(a>M-Va?a-M+Va:0),A=4*(this._cubeSize-g);ir(n,T,A,3*g,2*g),l.setRenderTarget(n),l.render(p,xo)}}function dR(e){const t=[],n=[],i=[];let a=e;const s=e-Va+1+Ig.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Va?l=Ig[r-e+Va-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,x=6,E=3,_=2,u=1,m=new Float32Array(E*x*h),M=new Float32Array(_*x*h),g=new Float32Array(u*x*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,v=A>2?0:-1,b=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];m.set(b,E*x*A),M.set(f,_*x*A);const w=[A,A,A,A,A,A];g.set(w,u*x*A)}const T=new Bn;T.setAttribute("position",new Ei(m,E)),T.setAttribute("uv",new Ei(M,_)),T.setAttribute("faceIndex",new Ei(g,u)),i.push(new Be(T,null)),a>Va&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Hg(e,t,n){const i=new Fi(e,t,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function hR(e,t,n){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function pR(e,t,n){const i=new Float32Array(xs),a=new B(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Gg(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Vg(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}class GS extends Fi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new OS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ra(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ua});s.uniforms.tEquirect.value=n;const r=new Be(a,s),o=n.minFilter;return n.minFilter===Ss&&(n.minFilter=Sn),new Sb(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function mR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(f,h=!1){return f==null?null:h?r(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Rf||h===Cf)if(t.has(f)){const x=t.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const E=new GS(x.height);return E.fromEquirectangularTexture(e,f),t.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){const h=f.mapping,x=h===Rf||h===Cf,E=h===Ns||h===Xr;if(x||E){let _=n.get(f);const u=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new Fg(e)),_=x?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const m=f.image;return x&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new Fg(e)),_=x?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",d),_.texture):null}}}return f}function o(f,h){return h===Rf?f.mapping=Ns:h===Cf&&(f.mapping=Xr),f}function l(f){let h=0;const x=6;for(let E=0;E<x;E++)f[E]!==void 0&&h++;return h===x}function c(f){const h=f.target;h.removeEventListener("dispose",c);const x=t.get(h);x!==void 0&&(t.delete(h),x.dispose())}function d(f){const h=f.target;h.removeEventListener("dispose",d);const x=n.get(h);x!==void 0&&(n.delete(h),x.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function gR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&wr("WebGLRenderer: "+i+" extension not supported."),a}}}function _R(e,t,n,i){const a={},s=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",r),delete a[f.id];const h=s.get(f);h&&(t.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const h in f)t.update(f[h],e.ARRAY_BUFFER)}function c(p){const f=[],h=p.index,x=p.attributes.position;let E=0;if(x===void 0)return;if(h!==null){const m=h.array;E=h.version;for(let M=0,g=m.length;M<g;M+=3){const T=m[M+0],A=m[M+1],R=m[M+2];f.push(T,A,A,R,R,T)}}else{const m=x.array;E=x.version;for(let M=0,g=m.length/3-1;M<g;M+=3){const T=M+0,A=M+1,R=M+2;f.push(T,A,A,R,R,T)}}const _=new(x.count>=65535?US:DS)(f,1);_.version=E;const u=s.get(p);u&&t.remove(u),s.set(p,_)}function d(p){const f=s.get(p);if(f){const h=p.index;h!==null&&f.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function vR(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,f){e.drawElements(i,f,s,p*r),n.update(f,i,1)}function c(p,f,h){h!==0&&(e.drawElementsInstanced(i,f,s,p*r,h),n.update(f,i,h))}function d(p,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,h);let E=0;for(let _=0;_<h;_++)E+=f[_];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function xR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ne("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function SR(e,t,n){const i=new WeakMap,a=new Ce;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let w=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var h=w;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let g=0;x===!0&&(g=1),E===!0&&(g=2),_===!0&&(g=3);let T=o.attributes.position.count*g,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*A*4*p),v=new RS(R,T,A,p);v.type=Pi,v.needsUpdate=!0;const b=g*4;for(let U=0;U<p;U++){const L=u[U],Y=m[U],j=M[U],H=T*A*4*U;for(let O=0;O<L.count;O++){const P=O*b;x===!0&&(a.fromBufferAttribute(L,O),R[H+P+0]=a.x,R[H+P+1]=a.y,R[H+P+2]=a.z,R[H+P+3]=0),E===!0&&(a.fromBufferAttribute(Y,O),R[H+P+4]=a.x,R[H+P+5]=a.y,R[H+P+6]=a.z,R[H+P+7]=0),_===!0&&(a.fromBufferAttribute(j,O),R[H+P+8]=a.x,R[H+P+9]=a.y,R[H+P+10]=a.z,R[H+P+11]=j.itemSize===4?a.w:1)}}f={count:p,texture:v,size:new Wt(T,A)},i.set(o,f),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let x=0;for(let _=0;_<c.length;_++)x+=c[_];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function MR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,f=t.get(c,p);if(s.get(f)!==d&&(t.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const yR={[fS]:"LINEAR_TONE_MAPPING",[dS]:"REINHARD_TONE_MAPPING",[hS]:"CINEON_TONE_MAPPING",[pS]:"ACES_FILMIC_TONE_MAPPING",[gS]:"AGX_TONE_MAPPING",[_S]:"NEUTRAL_TONE_MAPPING",[mS]:"CUSTOM_TONE_MAPPING"};function ER(e,t,n,i,a,s){const r=new Fi(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Wr(t,n):void 0}),o=new Fi(t,n,{type:_a,depthBuffer:!1,stencilBuffer:!1}),l=new Bn;l.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new je([0,2,0,0,2,0],2));const c=new hb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Be(l,c),p=new gm(-1,1,1,-1,0,1);let f=null,h=null,x=!1,E,_=null,u=[],m=!1;this.setSize=function(M,g){r.setSize(M,g),o.setSize(M,g);for(let T=0;T<u.length;T++){const A=u[T];A.setSize&&A.setSize(M,g)}},this.setEffects=function(M){u=M,m=u.length>0&&u[0].isRenderPass===!0;const g=r.width,T=r.height;for(let A=0;A<u.length;A++){const R=u[A];R.setSize&&R.setSize(g,T)}},this.begin=function(M,g){if(x||M.toneMapping===Bi&&u.length===0)return!1;if(_=g,g!==null){const T=g.width,A=g.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return m===!1&&M.setRenderTarget(r),E=M.toneMapping,M.toneMapping=Bi,!0},this.hasRenderPass=function(){return m},this.end=function(M,g){M.toneMapping=E,x=!0;let T=r,A=o;for(let R=0;R<u.length;R++){const v=u[R];if(v.enabled!==!1&&(v.render(M,A,T,g),v.needsSwap!==!1)){const b=T;T=A,A=b}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,c.defines={},jt.getTransfer(f)===le&&(c.defines.SRGB_TRANSFER="");const R=yR[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(_),M.render(d,p),_=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const VS=new Tn,Zh=new Wr(1,1),kS=new RS,XS=new k1,WS=new OS,kg=[],Xg=[],Wg=new Float32Array(16),qg=new Float32Array(9),Yg=new Float32Array(4);function ao(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=kg[a];if(s===void 0&&(s=new Float32Array(a),kg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function $e(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function tn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Hu(e,t){let n=Xg[t];n===void 0&&(n=new Int32Array(t),Xg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function bR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function TR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2fv(this.addr,t),tn(n,t)}}function AR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($e(n,t))return;e.uniform3fv(this.addr,t),tn(n,t)}}function RR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4fv(this.addr,t),tn(n,t)}}function CR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;Yg.set(i),e.uniformMatrix2fv(this.addr,!1,Yg),tn(n,i)}}function wR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;qg.set(i),e.uniformMatrix3fv(this.addr,!1,qg),tn(n,i)}}function DR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if($e(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if($e(n,i))return;Wg.set(i),e.uniformMatrix4fv(this.addr,!1,Wg),tn(n,i)}}function UR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function NR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2iv(this.addr,t),tn(n,t)}}function LR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3iv(this.addr,t),tn(n,t)}}function OR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4iv(this.addr,t),tn(n,t)}}function PR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function zR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($e(n,t))return;e.uniform2uiv(this.addr,t),tn(n,t)}}function IR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($e(n,t))return;e.uniform3uiv(this.addr,t),tn(n,t)}}function BR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($e(n,t))return;e.uniform4uiv(this.addr,t),tn(n,t)}}function FR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Zh.compareFunction=n.isReversedDepthBuffer()?om:rm,s=Zh):s=VS,n.setTexture2D(t||s,a)}function HR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||XS,a)}function GR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||WS,a)}function VR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||kS,a)}function kR(e){switch(e){case 5126:return bR;case 35664:return TR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return UR;case 35667:case 35671:return NR;case 35668:case 35672:return LR;case 35669:case 35673:return OR;case 5125:return PR;case 36294:return zR;case 36295:return IR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return VR}}function XR(e,t){e.uniform1fv(this.addr,t)}function WR(e,t){const n=ao(t,this.size,2);e.uniform2fv(this.addr,n)}function qR(e,t){const n=ao(t,this.size,3);e.uniform3fv(this.addr,n)}function YR(e,t){const n=ao(t,this.size,4);e.uniform4fv(this.addr,n)}function ZR(e,t){const n=ao(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function KR(e,t){const n=ao(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function QR(e,t){const n=ao(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jR(e,t){e.uniform1iv(this.addr,t)}function JR(e,t){e.uniform2iv(this.addr,t)}function $R(e,t){e.uniform3iv(this.addr,t)}function t3(e,t){e.uniform4iv(this.addr,t)}function e3(e,t){e.uniform1uiv(this.addr,t)}function n3(e,t){e.uniform2uiv(this.addr,t)}function i3(e,t){e.uniform3uiv(this.addr,t)}function a3(e,t){e.uniform4uiv(this.addr,t)}function s3(e,t,n){const i=this.cache,a=t.length,s=Hu(n,a);$e(i,s)||(e.uniform1iv(this.addr,s),tn(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Zh:r=VS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function r3(e,t,n){const i=this.cache,a=t.length,s=Hu(n,a);$e(i,s)||(e.uniform1iv(this.addr,s),tn(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||XS,s[r])}function o3(e,t,n){const i=this.cache,a=t.length,s=Hu(n,a);$e(i,s)||(e.uniform1iv(this.addr,s),tn(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||WS,s[r])}function l3(e,t,n){const i=this.cache,a=t.length,s=Hu(n,a);$e(i,s)||(e.uniform1iv(this.addr,s),tn(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||kS,s[r])}function c3(e){switch(e){case 5126:return XR;case 35664:return WR;case 35665:return qR;case 35666:return YR;case 35674:return ZR;case 35675:return KR;case 35676:return QR;case 5124:case 35670:return jR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return t3;case 5125:return e3;case 36294:return n3;case 36295:return i3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}class u3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kR(n.type)}}class f3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=c3(n.type)}}class d3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function Zg(e,t){e.seq.push(t),e.map[t.id]=t}function h3(e,t,n){const i=e.name,a=i.length;for(rd.lastIndex=0;;){const s=rd.exec(i),r=rd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Zg(n,c===void 0?new u3(o,e,t):new f3(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new d3(o),Zg(n,p)),n=p}}}class Nc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);h3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Kg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const p3=37297;let m3=0;function g3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Qg=new zt;function _3(e){jt._getMatrix(Qg,jt.workingColorSpace,e);const t=`mat3( ${Qg.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case hu:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function jg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+g3(e.getShaderSource(t),o)}else return s}function v3(e,t){const n=_3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const x3={[fS]:"Linear",[dS]:"Reinhard",[hS]:"Cineon",[pS]:"ACESFilmic",[gS]:"AgX",[_S]:"Neutral",[mS]:"Custom"};function S3(e,t){const n=x3[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fc=new B;function M3(){jt.getLuminanceCoefficients(fc);const e=fc.x.toFixed(4),t=fc.y.toFixed(4),n=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function E3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function b3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Ro(e){return e!==""}function Jg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $g(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(e){return e.replace(T3,R3)}const A3=new Map;function R3(e,t){let n=kt[t];if(n===void 0){const i=A3.get(t);if(i!==void 0)n=kt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kh(n)}const C3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(e){return e.replace(C3,w3)}function w3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function e_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const D3={[Rc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function U3(e){return D3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N3={[Ns]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function L3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":N3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const O3={[Xr]:"ENVMAP_MODE_REFRACTION"};function P3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":O3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z3={[uS]:"ENVMAP_BLENDING_MULTIPLY",[y1]:"ENVMAP_BLENDING_MIX",[E1]:"ENVMAP_BLENDING_ADD"};function I3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":z3[e.combine]||"ENVMAP_BLENDING_NONE"}function B3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function F3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=U3(n),c=L3(n),d=P3(n),p=I3(n),f=B3(n),h=y3(n),x=E3(s),E=a.createProgram();let _,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ro).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ro).join(`
`),u.length>0&&(u+=`
`)):(_=[e_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),u=[e_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?kt.tonemapping_pars_fragment:"",n.toneMapping!==Bi?S3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,v3("linearToOutputTexel",n.outputColorSpace),M3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),r=Kh(r),r=Jg(r,n),r=$g(r,n),o=Kh(o),o=Jg(o,n),o=$g(o,n),r=t_(r),o=t_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=m+_+r,g=m+u+o,T=Kg(a,a.VERTEX_SHADER,M),A=Kg(a,a.FRAGMENT_SHADER,g);a.attachShader(E,T),a.attachShader(E,A),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(e.debug.checkShaderErrors){const L=a.getProgramInfoLog(E)||"",Y=a.getShaderInfoLog(T)||"",j=a.getShaderInfoLog(A)||"",H=L.trim(),O=Y.trim(),P=j.trim();let D=!0,G=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(D=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,T,A);else{const nt=jg(a,T,"vertex"),at=jg(a,A,"fragment");ne("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+nt+`
`+at)}else H!==""?Lt("WebGLProgram: Program Info Log:",H):(O===""||P==="")&&(G=!1);G&&(U.diagnostics={runnable:D,programLog:H,vertexShader:{log:O,prefix:_},fragmentShader:{log:P,prefix:u}})}a.deleteShader(T),a.deleteShader(A),v=new Nc(a,E),b=b3(a,E)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(E,p3)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=m3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=A,this}let H3=0;class G3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new V3(t),n.set(t,i)),i}}class V3{constructor(t){this.id=H3++,this.code=t,this.usedTimes=0}}function k3(e){return e===Ls||e===uu||e===fu}function X3(e,t,n,i,a,s){const r=new CS,o=new G3,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,b,w,U,L,Y){const j=U.fog,H=L.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=t.get(v.envMap||O,P),G=D&&D.mapping===Iu?D.image.height:null,nt=h[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Lt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=at!==void 0?at.length:0;let Bt=0;H.morphAttributes.position!==void 0&&(Bt=1),H.morphAttributes.normal!==void 0&&(Bt=2),H.morphAttributes.color!==void 0&&(Bt=3);let Mt,Tt,K,rt;if(nt){const yt=Di[nt];Mt=yt.vertexShader,Tt=yt.fragmentShader}else{Mt=v.vertexShader,Tt=v.fragmentShader;const yt=o.getVertexShaderStage(v),Ue=o.getFragmentShaderStage(v);o.update(v,yt,Ue),K=yt.id,rt=Ue.id}const st=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,Dt=L.isBatchedMesh===!0,Pe=!!v.map,Kt=!!v.matcap,pe=!!D,ie=!!v.aoMap,te=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,Ze=!!v.normalMap,en=!!v.displacementMap,cn=!!v.emissiveMap,De=!!v.metalnessMap,Ve=!!v.roughnessMap,z=v.anisotropy>0,Rn=v.clearcoat>0,oe=v.dispersion>0,C=v.iridescence>0,S=v.sheen>0,F=v.transmission>0,X=z&&!!v.anisotropyMap,Z=Rn&&!!v.clearcoatMap,ot=Rn&&!!v.clearcoatNormalMap,ut=Rn&&!!v.clearcoatRoughnessMap,Q=C&&!!v.iridescenceMap,$=C&&!!v.iridescenceThicknessMap,ft=S&&!!v.sheenColorMap,At=S&&!!v.sheenRoughnessMap,pt=!!v.specularMap,dt=!!v.specularColorMap,wt=!!v.specularIntensityMap,Nt=F&&!!v.transmissionMap,Ft=F&&!!v.thicknessMap,N=!!v.gradientMap,ct=!!v.alphaMap,J=v.alphaTest>0,ht=!!v.alphaHash,vt=!!v.extensions;let it=Bi;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(it=e.toneMapping);const bt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:Mt,fragmentShader:Tt,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Kt,envMap:pe,envMapMode:pe&&D.mapping,envMapCubeUVHeight:G,aoMap:ie,lightMap:te,bumpMap:Ge,normalMap:Ze,displacementMap:en,emissiveMap:cn,normalMapObjectSpace:Ze&&v.normalMapType===A1,normalMapTangentSpace:Ze&&v.normalMapType===qh,packedNormalMap:Ze&&v.normalMapType===qh&&k3(v.normalMap.format),metalnessMap:De,roughnessMap:Ve,anisotropy:z,anisotropyMap:X,clearcoat:Rn,clearcoatMap:Z,clearcoatNormalMap:ot,clearcoatRoughnessMap:ut,dispersion:oe,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:$,sheen:S,sheenColorMap:ft,sheenRoughnessMap:At,specularMap:pt,specularColorMap:dt,specularIntensityMap:wt,transmission:F,transmissionMap:Nt,thicknessMap:Ft,gradientMap:N,opaque:v.transparent===!1&&v.blending===Cr&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:J,alphaHash:ht,combine:v.combine,mapUv:Pe&&x(v.map.channel),aoMapUv:ie&&x(v.aoMap.channel),lightMapUv:te&&x(v.lightMap.channel),bumpMapUv:Ge&&x(v.bumpMap.channel),normalMapUv:Ze&&x(v.normalMap.channel),displacementMapUv:en&&x(v.displacementMap.channel),emissiveMapUv:cn&&x(v.emissiveMap.channel),metalnessMapUv:De&&x(v.metalnessMap.channel),roughnessMapUv:Ve&&x(v.roughnessMap.channel),anisotropyMapUv:X&&x(v.anisotropyMap.channel),clearcoatMapUv:Z&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(v.sheenRoughnessMap.channel),specularMapUv:pt&&x(v.specularMap.channel),specularColorMapUv:dt&&x(v.specularColorMap.channel),specularIntensityMapUv:wt&&x(v.specularIntensityMap.channel),transmissionMapUv:Nt&&x(v.transmissionMap.channel),thicknessMapUv:Ft&&x(v.thicknessMap.channel),alphaMapUv:ct&&x(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ze||z),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Pe||ct),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&Ze===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:cn&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===Pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function _(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)b.push(w),b.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(u(b,v),m(b,v),b.push(e.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function u(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function m(v,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function M(v){const b=h[v.type];let w;if(b){const U=Di[b];w=ub.clone(U.uniforms)}else w=v.uniforms;return w}function g(v,b){let w=d.get(b);return w!==void 0?++w.usedTimes:(w=new F3(e,b,v,a),c.push(w),d.set(b,w)),w}function T(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:M,acquireProgram:g,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function W3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function q3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function n_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function i_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,x,E,_,u){let m=e[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:x,materialVariant:r(f),groupOrder:E,renderOrder:f.renderOrder,z:_,group:u},e[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=x,m.materialVariant=r(f),m.groupOrder=E,m.renderOrder=f.renderOrder,m.z=_,m.group=u),t++,m}function l(f,h,x,E,_,u){const m=o(f,h,x,E,_,u);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):n.push(m)}function c(f,h,x,E,_,u){const m=o(f,h,x,E,_,u);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):n.unshift(m)}function d(f,h,x){n.length>1&&n.sort(f||q3),i.length>1&&i.sort(h||n_),a.length>1&&a.sort(h||n_),x&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let f=t,h=e.length;f<h;f++){const x=e[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:d}}function Y3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new i_,e.set(i,[r])):a>=s.length?(r=new i_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function Z3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Zt};break;case"SpotLight":n={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function K3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Q3=0;function j3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function J3(e){const t=new Z3,n=K3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,s=new we,r=new we;function o(c){let d=0,p=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,x=0,E=0,_=0,u=0,m=0,M=0,g=0,T=0,A=0,R=0;c.sort(j3);for(let b=0,w=c.length;b<w;b++){const U=c[b],L=U.color,Y=U.intensity,j=U.distance;let H=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ls?H=U.shadow.map.texture:H=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=L.r*Y,p+=L.g*Y,f+=L.b*Y;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],Y);R++}else if(U.isDirectionalLight){const O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const P=U.shadow,D=n.get(U);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=U.shadow.matrix,m++}i.directional[h]=O,h++}else if(U.isSpotLight){const O=t.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(L).multiplyScalar(Y),O.distance=j,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[E]=O;const P=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,P.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[E]=P.matrix,U.castShadow){const D=n.get(U);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,i.spotShadow[E]=D,i.spotShadowMap[E]=H,g++}E++}else if(U.isRectAreaLight){const O=t.get(U);O.color.copy(L).multiplyScalar(Y),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=O,_++}else if(U.isPointLight){const O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),O.distance=U.distance,O.decay=U.decay,U.castShadow){const P=U.shadow,D=n.get(U);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,D.shadowCameraNear=P.camera.near,D.shadowCameraFar=P.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=U.shadow.matrix,M++}i.point[x]=O,x++}else if(U.isHemisphereLight){const O=t.get(U);O.skyColor.copy(U.color).multiplyScalar(Y),O.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[u]=O,u++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==h||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==_||v.hemiLength!==u||v.numDirectionalShadows!==m||v.numPointShadows!==M||v.numSpotShadows!==g||v.numSpotMaps!==T||v.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=_,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=g+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,v.directionalLength=h,v.pointLength=x,v.spotLength=E,v.rectAreaLength=_,v.hemiLength=u,v.numDirectionalShadows=m,v.numPointShadows=M,v.numSpotShadows=g,v.numSpotMaps=T,v.numLightProbes=R,i.version=Q3++)}function l(c,d){let p=0,f=0,h=0,x=0,E=0;const _=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const M=c[u];if(M.isDirectionalLight){const g=i.directional[p];g.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(_),p++}else if(M.isSpotLight){const g=i.spot[h];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(_),h++}else if(M.isRectAreaLight){const g=i.rectArea[x];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(_),r.identity(),s.copy(M.matrixWorld),s.premultiply(_),r.extractRotation(s),g.halfWidth.set(M.width*.5,0,0),g.halfHeight.set(0,M.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),x++}else if(M.isPointLight){const g=i.point[f];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const g=i.hemi[E];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(_),E++}}}return{setup:o,setupView:l,state:i}}function a_(e){const t=new J3(e),n=[],i=[],a=[];function s(f){p.camera=f,n.length=0,i.length=0,a.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function l(f){a.push(f)}function c(){t.setup(n)}function d(f){t.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function $3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new a_(e),t.set(a,[o])):s>=r.length?(o=new a_(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`,n2=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],i2=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],s_=new we,So=new B,od=new B;function a2(e,t,n){let i=new fm;const a=new Wt,s=new Wt,r=new Ce,o=new pb,l=new mb,c={},d=n.maxTextureSize,p={[ns]:Pn,[Pn]:ns,[Ui]:Ui},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:t2,fragmentShader:e2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const x=new Bn;x.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Be(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let u=this.type;this.render=function(A,R,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===i1&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Rc);const b=e.getRenderTarget(),w=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),L=e.state;L.setBlending(ua),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const Y=u!==this.type;Y&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(H=>H.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,H=A.length;j<H;j++){const O=A[j],P=O.shadow;if(P===void 0){Lt("WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const D=P.getFrameExtents();a.multiply(D),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/D.x),a.x=s.x*D.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/D.y),a.y=s.y*D.y,P.mapSize.y=s.y));const G=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=G,P.map===null||Y===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Ao){if(O.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Fi(a.x,a.y,{format:Ls,type:_a,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),P.map.texture.name=O.name+".shadowMap",P.map.depthTexture=new Wr(a.x,a.y,Pi),P.map.depthTexture.name=O.name+".shadowMapDepth",P.map.depthTexture.format=va,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=pn,P.map.depthTexture.magFilter=pn}else O.isPointLight?(P.map=new GS(a.x),P.map.depthTexture=new lb(a.x,Hi)):(P.map=new Fi(a.x,a.y),P.map.depthTexture=new Wr(a.x,a.y,Hi)),P.map.depthTexture.name=O.name+".shadowMap",P.map.depthTexture.format=va,this.type===Rc?(P.map.depthTexture.compareFunction=G?om:rm,P.map.depthTexture.minFilter=Sn,P.map.depthTexture.magFilter=Sn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=pn,P.map.depthTexture.magFilter=pn);P.camera.updateProjectionMatrix()}const nt=P.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<nt;at++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,at),e.clear();else{at===0&&(e.setRenderTarget(P.map),e.clear());const lt=P.getViewport(at);r.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),L.viewport(r)}if(O.isPointLight){const lt=P.camera,Bt=P.matrix,Mt=O.distance||lt.far;Mt!==lt.far&&(lt.far=Mt,lt.updateProjectionMatrix()),So.setFromMatrixPosition(O.matrixWorld),lt.position.copy(So),od.copy(lt.position),od.add(n2[at]),lt.up.copy(i2[at]),lt.lookAt(od),lt.updateMatrixWorld(),Bt.makeTranslation(-So.x,-So.y,-So.z),s_.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),P._frustum.setFromProjectionMatrix(s_,lt.coordinateSystem,lt.reversedDepth)}else P.updateMatrices(O);i=P.getFrustum(),g(R,v,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Ao&&m(P,v),P.needsUpdate=!1}u=this.type,_.needsUpdate=!1,e.setRenderTarget(b,w,U)};function m(A,R){const v=t.update(E);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fi(a.x,a.y,{format:Ls,type:_a})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,v,f,E,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,v,h,E,null)}function M(A,R,v,b){let w=null;const U=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)w=U;else if(w=v.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=w.uuid,Y=R.uuid;let j=c[L];j===void 0&&(j={},c[L]=j);let H=j[Y];H===void 0&&(H=w.clone(),j[Y]=H,R.addEventListener("dispose",T)),w=H}if(w.visible=R.visible,w.wireframe=R.wireframe,b===Ao?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=e.properties.get(w);L.light=v}return w}function g(A,R,v,b,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ao)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const Y=t.update(A),j=A.material;if(Array.isArray(j)){const H=Y.groups;for(let O=0,P=H.length;O<P;O++){const D=H[O],G=j[D.materialIndex];if(G&&G.visible){const nt=M(A,G,b,w);A.onBeforeShadow(e,A,R,v,Y,nt,D),e.renderBufferDirect(v,null,Y,nt,A,D),A.onAfterShadow(e,A,R,v,Y,nt,D)}}}else if(j.visible){const H=M(A,j,b,w);A.onBeforeShadow(e,A,R,v,Y,H,null),e.renderBufferDirect(v,null,Y,H,A,null),A.onAfterShadow(e,A,R,v,Y,H,null)}}const L=A.children;for(let Y=0,j=L.length;Y<j;Y++)g(L[Y],R,v,b,w)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const b=c[v],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function s2(e,t){function n(){let N=!1;const ct=new Ce;let J=null;const ht=new Ce(0,0,0,0);return{setMask:function(vt){J!==vt&&!N&&(e.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){N=vt},setClear:function(vt,it,bt,yt,Ue){Ue===!0&&(vt*=yt,it*=yt,bt*=yt),ct.set(vt,it,bt,yt),ht.equals(ct)===!1&&(e.clearColor(vt,it,bt,yt),ht.copy(ct))},reset:function(){N=!1,J=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,ct=!1,J=null,ht=null,vt=null;return{setReversed:function(it){if(ct!==it){const bt=t.get("EXT_clip_control");it?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ct=it;const yt=vt;vt=null,this.setClear(yt)}},getReversed:function(){return ct},setTest:function(it){it?st(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(it){J!==it&&!N&&(e.depthMask(it),J=it)},setFunc:function(it){if(ct&&(it=z1[it]),ht!==it){switch(it){case oh:e.depthFunc(e.NEVER);break;case lh:e.depthFunc(e.ALWAYS);break;case ch:e.depthFunc(e.LESS);break;case kr:e.depthFunc(e.LEQUAL);break;case uh:e.depthFunc(e.EQUAL);break;case fh:e.depthFunc(e.GEQUAL);break;case dh:e.depthFunc(e.GREATER);break;case hh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=it}},setLocked:function(it){N=it},setClear:function(it){vt!==it&&(vt=it,ct&&(it=1-it),e.clearDepth(it))},reset:function(){N=!1,J=null,ht=null,vt=null,ct=!1}}}function a(){let N=!1,ct=null,J=null,ht=null,vt=null,it=null,bt=null,yt=null,Ue=null;return{setTest:function(xe){N||(xe?st(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(xe){ct!==xe&&!N&&(e.stencilMask(xe),ct=xe)},setFunc:function(xe,Ti,Ai){(J!==xe||ht!==Ti||vt!==Ai)&&(e.stencilFunc(xe,Ti,Ai),J=xe,ht=Ti,vt=Ai)},setOp:function(xe,Ti,Ai){(it!==xe||bt!==Ti||yt!==Ai)&&(e.stencilOp(xe,Ti,Ai),it=xe,bt=Ti,yt=Ai)},setLocked:function(xe){N=xe},setClear:function(xe){Ue!==xe&&(e.clearStencil(xe),Ue=xe)},reset:function(){N=!1,ct=null,J=null,ht=null,vt=null,it=null,bt=null,yt=null,Ue=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},f={},h=new WeakMap,x=[],E=null,_=!1,u=null,m=null,M=null,g=null,T=null,A=null,R=null,v=new Zt(0,0,0),b=0,w=!1,U=null,L=null,Y=null,j=null,H=null;const O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,D=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=D>=1):G.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=D>=2);let nt=null,at={};const lt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Mt=new Ce().fromArray(lt),Tt=new Ce().fromArray(Bt);function K(N,ct,J,ht){const vt=new Uint8Array(4),it=e.createTexture();e.bindTexture(N,it),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<J;bt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ct+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return it}const rt={};rt[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),rt[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),rt[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),st(e.DEPTH_TEST),r.setFunc(kr),Ge(!1),Ze(sg),st(e.CULL_FACE),ie(ua);function st(N){d[N]!==!0&&(e.enable(N),d[N]=!0)}function Ut(N){d[N]!==!1&&(e.disable(N),d[N]=!1)}function Pt(N,ct){return f[N]!==ct?(e.bindFramebuffer(N,ct),f[N]=ct,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=ct),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(N,ct){let J=x,ht=!1;if(N){J=h.get(ct),J===void 0&&(J=[],h.set(ct,J));const vt=N.textures;if(J.length!==vt.length||J[0]!==e.COLOR_ATTACHMENT0){for(let it=0,bt=vt.length;it<bt;it++)J[it]=e.COLOR_ATTACHMENT0+it;J.length=vt.length,ht=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,ht=!0);ht&&e.drawBuffers(J)}function Pe(N){return E!==N?(e.useProgram(N),E=N,!0):!1}const Kt={[vs]:e.FUNC_ADD,[s1]:e.FUNC_SUBTRACT,[r1]:e.FUNC_REVERSE_SUBTRACT};Kt[o1]=e.MIN,Kt[l1]=e.MAX;const pe={[c1]:e.ZERO,[u1]:e.ONE,[f1]:e.SRC_COLOR,[sh]:e.SRC_ALPHA,[_1]:e.SRC_ALPHA_SATURATE,[m1]:e.DST_COLOR,[h1]:e.DST_ALPHA,[d1]:e.ONE_MINUS_SRC_COLOR,[rh]:e.ONE_MINUS_SRC_ALPHA,[g1]:e.ONE_MINUS_DST_COLOR,[p1]:e.ONE_MINUS_DST_ALPHA,[v1]:e.CONSTANT_COLOR,[x1]:e.ONE_MINUS_CONSTANT_COLOR,[S1]:e.CONSTANT_ALPHA,[M1]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(N,ct,J,ht,vt,it,bt,yt,Ue,xe){if(N===ua){_===!0&&(Ut(e.BLEND),_=!1);return}if(_===!1&&(st(e.BLEND),_=!0),N!==a1){if(N!==u||xe!==w){if((m!==vs||T!==vs)&&(e.blendEquation(e.FUNC_ADD),m=vs,T=vs),xe)switch(N){case Cr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rg:e.blendFunc(e.ONE,e.ONE);break;case og:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case lg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case og:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lg:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}M=null,g=null,A=null,R=null,v.set(0,0,0),b=0,u=N,w=xe}return}vt=vt||ct,it=it||J,bt=bt||ht,(ct!==m||vt!==T)&&(e.blendEquationSeparate(Kt[ct],Kt[vt]),m=ct,T=vt),(J!==M||ht!==g||it!==A||bt!==R)&&(e.blendFuncSeparate(pe[J],pe[ht],pe[it],pe[bt]),M=J,g=ht,A=it,R=bt),(yt.equals(v)===!1||Ue!==b)&&(e.blendColor(yt.r,yt.g,yt.b,Ue),v.copy(yt),b=Ue),u=N,w=!1}function te(N,ct){N.side===Ui?Ut(e.CULL_FACE):st(e.CULL_FACE);let J=N.side===Pn;ct&&(J=!J),Ge(J),N.blending===Cr&&N.transparent===!1?ie(ua):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),cn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(N){U!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),U=N)}function Ze(N){N!==e1?(st(e.CULL_FACE),N!==L&&(N===sg?e.cullFace(e.BACK):N===n1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),L=N}function en(N){N!==Y&&(P&&e.lineWidth(N),Y=N)}function cn(N,ct,J){N?(st(e.POLYGON_OFFSET_FILL),(j!==ct||H!==J)&&(j=ct,H=J,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,J))):Ut(e.POLYGON_OFFSET_FILL)}function De(N){N?st(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=e.TEXTURE0+O-1),nt!==N&&(e.activeTexture(N),nt=N)}function z(N,ct,J){J===void 0&&(nt===null?J=e.TEXTURE0+O-1:J=nt);let ht=at[J];ht===void 0&&(ht={type:void 0,texture:void 0},at[J]=ht),(ht.type!==N||ht.texture!==ct)&&(nt!==J&&(e.activeTexture(J),nt=J),e.bindTexture(N,ct||rt[N]),ht.type=N,ht.texture=ct)}function Rn(){const N=at[nt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function S(){try{e.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function F(){try{e.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ot(){try{e.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function ut(){try{e.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Q(){try{e.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function $(){try{e.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ft(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function At(N,ct){p[N]!==ct&&(e.pixelStorei(N,ct),p[N]=ct)}function pt(N){Mt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Mt.copy(N))}function dt(N){Tt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Tt.copy(N))}function wt(N,ct){let J=c.get(ct);J===void 0&&(J=new WeakMap,c.set(ct,J));let ht=J.get(N);ht===void 0&&(ht=e.getUniformBlockIndex(ct,N.name),J.set(N,ht))}function Nt(N,ct){const ht=c.get(ct).get(N);l.get(ct)!==ht&&(e.uniformBlockBinding(ct,ht,N.__bindingPointIndex),l.set(ct,ht))}function Ft(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},nt=null,at={},f={},h=new WeakMap,x=[],E=null,_=!1,u=null,m=null,M=null,g=null,T=null,A=null,R=null,v=new Zt(0,0,0),b=0,w=!1,U=null,L=null,Y=null,j=null,H=null,Mt.set(0,0,e.canvas.width,e.canvas.height),Tt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:st,disable:Ut,bindFramebuffer:Pt,drawBuffers:Dt,useProgram:Pe,setBlending:ie,setMaterial:te,setFlipSided:Ge,setCullFace:Ze,setLineWidth:en,setPolygonOffset:cn,setScissorTest:De,activeTexture:Ve,bindTexture:z,unbindTexture:Rn,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:Q,texImage3D:$,pixelStorei:At,getParameter:ft,updateUBOMapping:wt,uniformBlockBinding:Nt,texStorage2D:ot,texStorage3D:ut,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:pt,viewport:dt,reset:Ft}}function r2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,d=new WeakMap,p=new Set;let f;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,S){return x?new OffscreenCanvas(C,S):pu("canvas")}function _(C,S,F){let X=1;const Z=oe(C);if((Z.width>F||Z.height>F)&&(X=F/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(X*Z.width),ut=Math.floor(X*Z.height);f===void 0&&(f=E(ot,ut));const Q=S?E(ot,ut):f;return Q.width=ot,Q.height=ut,Q.getContext("2d").drawImage(C,0,0,ot,ut),Lt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+ut+")."),Q}else return"data"in C&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function u(C){return C.generateMipmaps}function m(C){e.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(C,S,F,X,Z,ot=!1){if(C!==null){if(e[C]!==void 0)return e[C];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;X&&(ut=t.get("EXT_texture_norm16"),ut||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===e.RED&&(F===e.FLOAT&&(Q=e.R32F),F===e.HALF_FLOAT&&(Q=e.R16F),F===e.UNSIGNED_BYTE&&(Q=e.R8),F===e.UNSIGNED_SHORT&&ut&&(Q=ut.R16_EXT),F===e.SHORT&&ut&&(Q=ut.R16_SNORM_EXT)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.R8UI),F===e.UNSIGNED_SHORT&&(Q=e.R16UI),F===e.UNSIGNED_INT&&(Q=e.R32UI),F===e.BYTE&&(Q=e.R8I),F===e.SHORT&&(Q=e.R16I),F===e.INT&&(Q=e.R32I)),S===e.RG&&(F===e.FLOAT&&(Q=e.RG32F),F===e.HALF_FLOAT&&(Q=e.RG16F),F===e.UNSIGNED_BYTE&&(Q=e.RG8),F===e.UNSIGNED_SHORT&&ut&&(Q=ut.RG16_EXT),F===e.SHORT&&ut&&(Q=ut.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RG8UI),F===e.UNSIGNED_SHORT&&(Q=e.RG16UI),F===e.UNSIGNED_INT&&(Q=e.RG32UI),F===e.BYTE&&(Q=e.RG8I),F===e.SHORT&&(Q=e.RG16I),F===e.INT&&(Q=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(Q=e.RGB16UI),F===e.UNSIGNED_INT&&(Q=e.RGB32UI),F===e.BYTE&&(Q=e.RGB8I),F===e.SHORT&&(Q=e.RGB16I),F===e.INT&&(Q=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(Q=e.RGBA16UI),F===e.UNSIGNED_INT&&(Q=e.RGBA32UI),F===e.BYTE&&(Q=e.RGBA8I),F===e.SHORT&&(Q=e.RGBA16I),F===e.INT&&(Q=e.RGBA32I)),S===e.RGB&&(F===e.UNSIGNED_SHORT&&ut&&(Q=ut.RGB16_EXT),F===e.SHORT&&ut&&(Q=ut.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(Q=e.R11F_G11F_B10F)),S===e.RGBA){const $=ot?hu:jt.getTransfer(Z);F===e.FLOAT&&(Q=e.RGBA32F),F===e.HALF_FLOAT&&(Q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(Q=$===le?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&ut&&(Q=ut.RGBA16_EXT),F===e.SHORT&&ut&&(Q=ut.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function T(C,S){let F;return C?S===null||S===Hi||S===rl?F=e.DEPTH24_STENCIL8:S===Pi?F=e.DEPTH32F_STENCIL8:S===sl&&(F=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===rl?F=e.DEPTH_COMPONENT24:S===Pi?F=e.DEPTH_COMPONENT32F:S===sl&&(F=e.DEPTH_COMPONENT16),F}function A(C,S){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&p.delete(S)}function v(C){const S=C.target;S.removeEventListener("dispose",v),U(S)}function b(C){const S=i.get(C);if(S.__webglInit===void 0)return;const F=C.source,X=h.get(F);if(X){const Z=X[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(C),Object.keys(X).length===0&&h.delete(F)}i.remove(C)}function w(C){const S=i.get(C);e.deleteTexture(S.__webglTexture);const F=C.source,X=h.get(F);delete X[S.__cacheKey],r.memory.textures--}function U(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Z=0;Z<S.__webglFramebuffer[X].length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[X][Z]);else e.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)e.deleteFramebuffer(S.__webglFramebuffer[X]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=C.textures;for(let X=0,Z=F.length;X<Z;X++){const ot=i.get(F[X]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(F[X])}i.remove(C)}let L=0;function Y(){L=0}function j(){return L}function H(C){L=C}function O(){const C=L;return C>=a.maxTextures&&Lt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),L+=1,C}function P(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function D(C,S){const F=i.get(C);if(C.isVideoTexture&&z(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const X=C.image;if(X===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(F,C,S);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function G(C,S){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Ut(F,C,S);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function nt(C,S){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Ut(F,C,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function at(C,S){const F=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){Pt(F,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}const lt={[ph]:e.REPEAT,[sa]:e.CLAMP_TO_EDGE,[mh]:e.MIRRORED_REPEAT},Bt={[pn]:e.NEAREST,[b1]:e.NEAREST_MIPMAP_NEAREST,[Gl]:e.NEAREST_MIPMAP_LINEAR,[Sn]:e.LINEAR,[wf]:e.LINEAR_MIPMAP_NEAREST,[Ss]:e.LINEAR_MIPMAP_LINEAR},Mt={[R1]:e.NEVER,[N1]:e.ALWAYS,[C1]:e.LESS,[rm]:e.LEQUAL,[w1]:e.EQUAL,[om]:e.GEQUAL,[D1]:e.GREATER,[U1]:e.NOTEQUAL};function Tt(C,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===wf||S.magFilter===Gl||S.magFilter===Ss||S.minFilter===Sn||S.minFilter===wf||S.minFilter===Gl||S.minFilter===Ss)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,lt[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,lt[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,lt[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Bt[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Bt[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==Gl&&S.minFilter!==Ss||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const X=S.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const ot=P(S);if(ot!==C.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[ot].usedTimes++;const ut=Z[C.__cacheKey];ut!==void 0&&(Z[C.__cacheKey].usedTimes--,ut.usedTimes===0&&w(S)),C.__cacheKey=ot,C.__webglTexture=Z[ot].texture}return F}function rt(C,S,F){return Math.floor(Math.floor(C/F)/S)}function st(C,S,F,X){const ot=C.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,F,X,S.data);else{ot.sort((At,pt)=>At.start-pt.start);let ut=0;for(let At=1;At<ot.length;At++){const pt=ot[ut],dt=ot[At],wt=pt.start+pt.count,Nt=rt(dt.start,S.width,4),Ft=rt(pt.start,S.width,4);dt.start<=wt+1&&Nt===Ft&&rt(dt.start+dt.count-1,S.width,4)===Nt?pt.count=Math.max(pt.count,dt.start+dt.count-pt.start):(++ut,ot[ut]=dt)}ot.length=ut+1;const Q=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let At=0,pt=ot.length;At<pt;At++){const dt=ot[At],wt=Math.floor(dt.start/4),Nt=Math.ceil(dt.count/4),Ft=wt%S.width,N=Math.floor(wt/S.width),ct=Nt,J=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Ft,N,ct,J,F,X,S.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function Ut(C,S,F){let X=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=e.TEXTURE_3D);const Z=K(C,S),ot=S.source;n.bindTexture(X,C.__webglTexture,e.TEXTURE0+F);const ut=i.get(ot);if(ot.version!==ut.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=jt.getPrimaries(jt.workingColorSpace),ht=S.colorSpace===za?null:jt.getPrimaries(S.colorSpace),vt=S.colorSpace===za||J===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let $=_(S.image,!1,a.maxTextureSize);$=Rn(S,$);const ft=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let pt=g(S.internalFormat,ft,At,S.normalized,S.colorSpace,S.isVideoTexture);Tt(X,S);let dt;const wt=S.mipmaps,Nt=S.isVideoTexture!==!0,Ft=ut.__version===void 0||Z===!0,N=ot.dataReady,ct=A(S,$);if(S.isDepthTexture)pt=T(S.format===Ms,S.type),Ft&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,pt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,pt,$.width,$.height,0,ft,At,null));else if(S.isDataTexture)if(wt.length>0){Nt&&Ft&&n.texStorage2D(e.TEXTURE_2D,ct,pt,wt[0].width,wt[0].height);for(let J=0,ht=wt.length;J<ht;J++)dt=wt[J],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,At,dt.data):n.texImage2D(e.TEXTURE_2D,J,pt,dt.width,dt.height,0,ft,At,dt.data);S.generateMipmaps=!1}else Nt?(Ft&&n.texStorage2D(e.TEXTURE_2D,ct,pt,$.width,$.height),N&&st(S,$,ft,At)):n.texImage2D(e.TEXTURE_2D,0,pt,$.width,$.height,0,ft,At,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,pt,wt[0].width,wt[0].height,$.depth);for(let J=0,ht=wt.length;J<ht;J++)if(dt=wt[J],S.format!==yi)if(ft!==null)if(Nt){if(N)if(S.layerUpdates.size>0){const vt=zg(dt.width,dt.height,S.format,S.type);for(const it of S.layerUpdates){const bt=dt.data.subarray(it*vt/dt.data.BYTES_PER_ELEMENT,(it+1)*vt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,it,dt.width,dt.height,1,ft,bt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,ft,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,pt,dt.width,dt.height,$.depth,0,dt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,ft,At,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,pt,dt.width,dt.height,$.depth,0,ft,At,dt.data)}else{Nt&&Ft&&n.texStorage2D(e.TEXTURE_2D,ct,pt,wt[0].width,wt[0].height);for(let J=0,ht=wt.length;J<ht;J++)dt=wt[J],S.format!==yi?ft!==null?Nt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,J,pt,dt.width,dt.height,0,dt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,At,dt.data):n.texImage2D(e.TEXTURE_2D,J,pt,dt.width,dt.height,0,ft,At,dt.data)}else if(S.isDataArrayTexture)if(Nt){if(Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,pt,$.width,$.height,$.depth),N)if(S.layerUpdates.size>0){const J=zg($.width,$.height,S.format,S.type);for(const ht of S.layerUpdates){const vt=$.data.subarray(ht*J/$.data.BYTES_PER_ELEMENT,(ht+1)*J/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,$.width,$.height,1,ft,At,vt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,At,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,$.width,$.height,$.depth,0,ft,At,$.data);else if(S.isData3DTexture)Nt?(Ft&&n.texStorage3D(e.TEXTURE_3D,ct,pt,$.width,$.height,$.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,At,$.data)):n.texImage3D(e.TEXTURE_3D,0,pt,$.width,$.height,$.depth,0,ft,At,$.data);else if(S.isFramebufferTexture){if(Ft)if(Nt)n.texStorage2D(e.TEXTURE_2D,ct,pt,$.width,$.height);else{let J=$.width,ht=$.height;for(let vt=0;vt<ct;vt++)n.texImage2D(e.TEXTURE_2D,vt,pt,J,ht,0,ft,At,null),J>>=1,ht>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),p.add(S),J.onpaint=ht=>{const vt=ht.changedElements;for(const it of p)vt.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{const vt=e.RGBA,it=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,it,bt,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Nt&&Ft){const J=oe(wt[0]);n.texStorage2D(e.TEXTURE_2D,ct,pt,J.width,J.height)}for(let J=0,ht=wt.length;J<ht;J++)dt=wt[J],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ft,At,dt):n.texImage2D(e.TEXTURE_2D,J,pt,ft,At,dt);S.generateMipmaps=!1}else if(Nt){if(Ft){const J=oe($);n.texStorage2D(e.TEXTURE_2D,ct,pt,J.width,J.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,At,$)}else n.texImage2D(e.TEXTURE_2D,0,pt,ft,At,$);u(S)&&m(X),ut.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Pt(C,S,F){if(S.image.length!==6)return;const X=K(C,S),Z=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+F);const ot=i.get(Z);if(Z.version!==ot.__version||X===!0){n.activeTexture(e.TEXTURE0+F);const ut=jt.getPrimaries(jt.workingColorSpace),Q=S.colorSpace===za?null:jt.getPrimaries(S.colorSpace),$=S.colorSpace===za||ut===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ft=S.isCompressedTexture||S.image[0].isCompressedTexture,At=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!ft&&!At?pt[it]=_(S.image[it],!0,a.maxCubemapSize):pt[it]=At?S.image[it].image:S.image[it],pt[it]=Rn(S,pt[it]);const dt=pt[0],wt=s.convert(S.format,S.colorSpace),Nt=s.convert(S.type),Ft=g(S.internalFormat,wt,Nt,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,ct=ot.__version===void 0||X===!0,J=Z.dataReady;let ht=A(S,dt);Tt(e.TEXTURE_CUBE_MAP,S);let vt;if(ft){N&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Ft,dt.width,dt.height);for(let it=0;it<6;it++){vt=pt[it].mipmaps;for(let bt=0;bt<vt.length;bt++){const yt=vt[bt];S.format!==yi?wt!==null?N?J&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt,0,0,yt.width,yt.height,wt,yt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt,Ft,yt.width,yt.height,0,yt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt,0,0,yt.width,yt.height,wt,Nt,yt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt,Ft,yt.width,yt.height,0,wt,Nt,yt.data)}}}else{if(vt=S.mipmaps,N&&ct){vt.length>0&&ht++;const it=oe(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(At){N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,wt,Nt,pt[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,pt[it].width,pt[it].height,0,wt,Nt,pt[it].data);for(let bt=0;bt<vt.length;bt++){const Ue=vt[bt].image[it].image;N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt+1,0,0,Ue.width,Ue.height,wt,Nt,Ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt+1,Ft,Ue.width,Ue.height,0,wt,Nt,Ue.data)}}else{N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt,Nt,pt[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,wt,Nt,pt[it]);for(let bt=0;bt<vt.length;bt++){const yt=vt[bt];N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt+1,0,0,wt,Nt,yt.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt+1,Ft,wt,Nt,yt.image[it])}}}u(S)&&m(e.TEXTURE_CUBE_MAP),ot.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Dt(C,S,F,X,Z,ot){const ut=s.convert(F.format,F.colorSpace),Q=s.convert(F.type),$=g(F.internalFormat,ut,Q,F.normalized,F.colorSpace),ft=i.get(S),At=i.get(F);if(At.__renderTarget=S,!ft.__hasExternalTextures){const pt=Math.max(1,S.width>>ot),dt=Math.max(1,S.height>>ot);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,ot,$,pt,dt,S.depth,0,ut,Q,null):n.texImage2D(Z,ot,$,pt,dt,0,ut,Q,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Ve(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,Z,At.__webglTexture,0,De(S)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,Z,At.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(C,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){const X=S.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ot=T(S.stencilBuffer,Z),ut=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ve(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),ot,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),ot,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ot,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,C)}else{const X=S.textures;for(let Z=0;Z<X.length;Z++){const ot=X[Z],ut=s.convert(ot.format,ot.colorSpace),Q=s.convert(ot.type),$=g(ot.internalFormat,ut,Q,ot.normalized,ot.colorSpace);Ve(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),$,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),$,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,$,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Kt(C,S,F){const X=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Tt(e.TEXTURE_CUBE_MAP,S.depthTexture);const ft=s.convert(S.depthTexture.format),At=s.convert(S.depthTexture.type);let pt;S.depthTexture.format===va?pt=e.DEPTH_COMPONENT24:S.depthTexture.format===Ms&&(pt=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pt,S.width,S.height,0,ft,At,null)}}else D(S.depthTexture,0);const ot=Z.__webglTexture,ut=De(S),Q=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,$=S.depthTexture.format===Ms?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===va)Ve(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Q,ot,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,Q,ot,0);else if(S.depthTexture.format===Ms)Ve(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Q,ot,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,Q,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(C){const S=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=X}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let X=0;X<6;X++)Kt(S.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Kt(S.__webglFramebuffer[0],C,0):Kt(S.__webglFramebuffer,C,0)}else if(F){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=e.createRenderbuffer(),Pe(S.__webglDepthbuffer[X],C,!1);else{const Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Pe(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(C,S,F){const X=i.get(C);S!==void 0&&Dt(X.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&pe(C)}function te(C){const S=C.texture,F=i.get(C),X=i.get(S);C.addEventListener("dispose",v);const Z=C.textures,ot=C.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=S.version,r.memory.textures++),ot){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let $=0;$<S.mipmaps.length;$++)F.__webglFramebuffer[Q][$]=e.createFramebuffer()}else F.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)F.__webglFramebuffer[Q]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(ut)for(let Q=0,$=Z.length;Q<$;Q++){const ft=i.get(Z[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Ve(C)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const $=Z[Q];F.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const ft=s.convert($.format,$.colorSpace),At=s.convert($.type),pt=g($.internalFormat,ft,At,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),dt=De(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Tt(e.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)Dt(F.__webglFramebuffer[Q][$],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$);else Dt(F.__webglFramebuffer[Q],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);u(S)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ut){for(let Q=0,$=Z.length;Q<$;Q++){const ft=Z[Q],At=i.get(ft);let pt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,At.__webglTexture),Tt(pt,ft),Dt(F.__webglFramebuffer,C,ft,e.COLOR_ATTACHMENT0+Q,pt,0),u(ft)&&m(pt)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,X.__webglTexture),Tt(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)Dt(F.__webglFramebuffer[$],C,S,e.COLOR_ATTACHMENT0,Q,$);else Dt(F.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,Q,0);u(S)&&m(Q),n.unbindTexture()}C.depthBuffer&&pe(C)}function Ge(C){const S=C.textures;for(let F=0,X=S.length;F<X;F++){const Z=S[F];if(u(Z)){const ot=M(C),ut=i.get(Z).__webglTexture;n.bindTexture(ot,ut),m(ot),n.unbindTexture()}}}const Ze=[],en=[];function cn(C){if(C.samples>0){if(Ve(C)===!1){const S=C.textures,F=C.width,X=C.height;let Z=e.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(C),Q=S.length>1;if(Q)for(let ft=0;ft<S.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const $=C.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);const At=i.get(S[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,At,0)}e.blitFramebuffer(0,0,F,X,0,0,F,X,Z,e.NEAREST),l===!0&&(Ze.length=0,en.length=0,Ze.push(e.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(ot),en.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,en)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<S.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);const At=i.get(S[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,At,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function De(C){return Math.min(a.maxSamples,C.samples)}function Ve(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(C){const S=r.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function Rn(C,S){const F=C.colorSpace,X=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==du&&F!==za&&(jt.getTransfer(F)===le?(X!==yi||Z!==qn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",F)),S}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=H,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=at,this.rebindTextures=ie,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function o2(e,t){function n(i,a=za){let s;const r=jt.getTransfer(a);if(i===qn)return e.UNSIGNED_BYTE;if(i===em)return e.UNSIGNED_SHORT_4_4_4_4;if(i===nm)return e.UNSIGNED_SHORT_5_5_5_1;if(i===MS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===yS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xS)return e.BYTE;if(i===SS)return e.SHORT;if(i===sl)return e.UNSIGNED_SHORT;if(i===tm)return e.INT;if(i===Hi)return e.UNSIGNED_INT;if(i===Pi)return e.FLOAT;if(i===_a)return e.HALF_FLOAT;if(i===ES)return e.ALPHA;if(i===bS)return e.RGB;if(i===yi)return e.RGBA;if(i===va)return e.DEPTH_COMPONENT;if(i===Ms)return e.DEPTH_STENCIL;if(i===TS)return e.RED;if(i===im)return e.RED_INTEGER;if(i===Ls)return e.RG;if(i===am)return e.RG_INTEGER;if(i===sm)return e.RGBA_INTEGER;if(i===Cc||i===wc||i===Dc||i===Uc)if(r===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===_h||i===vh||i===xh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sh||i===Mh||i===yh||i===Eh||i===bh||i===uu||i===Th)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sh||i===Mh)return r===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eh)return s.COMPRESSED_R11_EAC;if(i===bh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===uu)return s.COMPRESSED_RG11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ah||i===Rh||i===Ch||i===wh||i===Dh||i===Uh||i===Nh||i===Lh||i===Oh||i===Ph||i===zh||i===Ih||i===Bh||i===Fh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hh||i===Gh||i===Vh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Hh)return r===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kh||i===Xh||i===fu||i===Wh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===kh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`;class u2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new PS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Gi({vertexShader:l2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends Fs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,h=null,x=null;const E=typeof XRWebGLBinding<"u",_=new u2,u={},m=n.getContextAttributes();let M=null,g=null;const T=[],A=[],R=new Wt;let v=null;const b=new oi;b.viewport=new Ce;const w=new oi;w.viewport=new Ce;const U=[b,w],L=new Mb;let Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=T[K];return rt===void 0&&(rt=new If,T[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=T[K];return rt===void 0&&(rt=new If,T[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=T[K];return rt===void 0&&(rt=new If,T[K]=rt),rt.getHandSpace()};function H(K){const rt=A.indexOf(K.inputSource);if(rt===-1)return;const st=T[rt];st!==void 0&&(st.update(K.inputSource,K.frame,c||r),st.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",P);for(let K=0;K<T.length;K++){const rt=A[K];rt!==null&&(A[K]=null,T[K].disconnect(rt))}Y=null,j=null,_.reset();for(const K in u)delete u[K];t.setRenderTarget(M),h=null,f=null,p=null,a=null,g=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(M=t.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",O),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Ut=null,Pt=null;m.depth&&(Pt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=m.stencil?Ms:va,Ut=m.stencil?rl:Hi);const Dt={colorFormat:n.RGBA8,depthFormat:Pt,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Dt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new Fi(f.textureWidth,f.textureHeight,{format:yi,type:qn,depthTexture:new Wr(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,st),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),g=new Fi(h.framebufferWidth,h.framebufferHeight,{format:yi,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Tt.setContext(a),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function P(K){for(let rt=0;rt<K.removed.length;rt++){const st=K.removed[rt],Ut=A.indexOf(st);Ut>=0&&(A[Ut]=null,T[Ut].disconnect(st))}for(let rt=0;rt<K.added.length;rt++){const st=K.added[rt];let Ut=A.indexOf(st);if(Ut===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=A.length){A.push(st),Ut=Dt;break}else if(A[Dt]===null){A[Dt]=st,Ut=Dt;break}if(Ut===-1)break}const Pt=T[Ut];Pt&&Pt.connect(st)}}const D=new B,G=new B;function nt(K,rt,st){D.setFromMatrixPosition(rt.matrixWorld),G.setFromMatrixPosition(st.matrixWorld);const Ut=D.distanceTo(G),Pt=rt.projectionMatrix.elements,Dt=st.projectionMatrix.elements,Pe=Pt[14]/(Pt[10]-1),Kt=Pt[14]/(Pt[10]+1),pe=(Pt[9]+1)/Pt[5],ie=(Pt[9]-1)/Pt[5],te=(Pt[8]-1)/Pt[0],Ge=(Dt[8]+1)/Dt[0],Ze=Pe*te,en=Pe*Ge,cn=Ut/(-te+Ge),De=cn*-te;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(cn),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ve=Pe+cn,z=Kt+cn,Rn=Ze-De,oe=en+(Ut-De),C=pe*Kt/z*Ve,S=ie*Kt/z*Ve;K.projectionMatrix.makePerspective(Rn,oe,C,S,Ve,z),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function at(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let rt=K.near,st=K.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(st=_.depthFar)),L.near=w.near=b.near=rt,L.far=w.far=b.far=st,(Y!==L.near||j!==L.far)&&(a.updateRenderState({depthNear:L.near,depthFar:L.far}),Y=L.near,j=L.far),L.layers.mask=K.layers.mask|6,b.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;const Ut=K.parent,Pt=L.cameras;at(L,Ut);for(let Dt=0;Dt<Pt.length;Dt++)at(Pt[Dt],Ut);Pt.length===2?nt(L,b,w):L.projectionMatrix.copy(b.projectionMatrix),lt(K,L,Ut)};function lt(K,rt,st){st===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(st.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(K){return u[K]};let Bt=null;function Mt(K,rt){if(d=rt.getViewerPose(c||r),x=rt,d!==null){const st=d.views;h!==null&&(t.setRenderTargetFramebuffer(g,h.framebuffer),t.setRenderTarget(g));let Ut=!1;st.length!==L.cameras.length&&(L.cameras.length=0,Ut=!0);for(let Kt=0;Kt<st.length;Kt++){const pe=st[Kt];let ie=null;if(h!==null)ie=h.getViewport(pe);else{const Ge=p.getViewSubImage(f,pe);ie=Ge.viewport,Kt===0&&(t.setRenderTargetTextures(g,Ge.colorTexture,Ge.depthStencilTexture),t.setRenderTarget(g))}let te=U[Kt];te===void 0&&(te=new oi,te.layers.enable(Kt),te.viewport=new Ce,U[Kt]=te),te.matrix.fromArray(pe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(pe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),Kt===0&&(L.matrix.copy(te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ut===!0&&L.cameras.push(te)}const Pt=a.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Kt=p.getDepthInformation(st[0]);Kt&&Kt.isValid&&Kt.texture&&_.init(Kt,a.renderState)}if(Pt&&Pt.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let Kt=0;Kt<st.length;Kt++){const pe=st[Kt].camera;if(pe){let ie=u[pe];ie||(ie=new PS,u[pe]=ie);const te=p.getCameraImage(pe);ie.sourceTexture=te}}}}for(let st=0;st<T.length;st++){const Ut=A[st],Pt=T[st];Ut!==null&&Pt!==void 0&&Pt.update(Ut,rt,c||r)}Bt&&Bt(K,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),x=null}const Tt=new FS;Tt.setAnimationLoop(Mt),this.setAnimationLoop=function(K){Bt=K},this.dispose=function(){}}}const d2=new we,qS=new zt;qS.set(-1,0,0,0,1,0,0,0,1);function h2(e,t){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,zS(e)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function a(_,u,m,M,g){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),d(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),f(_,u),u.isMeshPhysicalMaterial&&h(_,u,g)):u.isMeshMatcapMaterial?(s(_,u),x(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),E(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(r(_,u),u.isLineDashedMaterial&&o(_,u)):u.isPointsMaterial?l(_,u,m,M):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Pn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Pn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const m=t.get(u),M=m.envMap,g=m.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(g)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(qS),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function r(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function o(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,m,M){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*m,_.scale.value=M*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function h(_,u,m){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,u){u.matcap&&(_.matcap.value=u.matcap)}function E(_,u){const m=t.get(u).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function p2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,T){const A=T.program;i.uniformBlockBinding(g,A)}function c(g,T){let A=a[g.id];A===void 0&&(_(g),A=d(g),a[g.id]=A,g.addEventListener("dispose",m));const R=T.program;i.updateUBOMapping(g,R);const v=t.render.frame;s[g.id]!==v&&(f(g),s[g.id]=v)}function d(g){const T=p();g.__bindingPointIndex=T;const A=e.createBuffer(),R=g.__size,v=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function p(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const T=a[g.id],A=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let v=0,b=A.length;v<b;v++){const w=A[v];if(Array.isArray(w))for(let U=0,L=w.length;U<L;U++)h(w[U],v,U,R);else h(w,v,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(g,T,A,R){if(E(g,T,A,R)===!0){const v=g.__offset,b=g.value;if(Array.isArray(b)){let w=0;for(let U=0;U<b.length;U++){const L=b[U],Y=u(L);x(L,g.__data,w),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(w+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,g.__data)}}function x(g,T,A){typeof g=="number"||typeof g=="boolean"?T[0]=g:g.isMatrix3?(T[0]=g.elements[0],T[1]=g.elements[1],T[2]=g.elements[2],T[3]=0,T[4]=g.elements[3],T[5]=g.elements[4],T[6]=g.elements[5],T[7]=0,T[8]=g.elements[6],T[9]=g.elements[7],T[10]=g.elements[8],T[11]=0):ArrayBuffer.isView(g)?T.set(new g.constructor(g.buffer,g.byteOffset,T.length)):g.toArray(T,A)}function E(g,T,A,R){const v=g.value,b=T+"_"+A;if(R[b]===void 0)return typeof v=="number"||typeof v=="boolean"?R[b]=v:ArrayBuffer.isView(v)?R[b]=v.slice():R[b]=v.clone(),!0;{const w=R[b];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return R[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function _(g){const T=g.uniforms;let A=0;const R=16;for(let b=0,w=T.length;b<w;b++){const U=Array.isArray(T[b])?T[b]:[T[b]];for(let L=0,Y=U.length;L<Y;L++){const j=U[L],H=Array.isArray(j.value)?j.value:[j.value];for(let O=0,P=H.length;O<P;O++){const D=H[O],G=u(D),nt=A%R,at=nt%G.boundary,lt=nt+at;A+=at,lt!==0&&R-lt<G.storage&&(A+=R-lt),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=G.storage}}}const v=A%R;return v>0&&(A+=R-v),g.__size=A,g.__cache={},this}function u(g){const T={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(T.boundary=4,T.storage=4):g.isVector2?(T.boundary=8,T.storage=8):g.isVector3||g.isColor?(T.boundary=16,T.storage=12):g.isVector4?(T.boundary=16,T.storage=16):g.isMatrix3?(T.boundary=48,T.storage=48):g.isMatrix4?(T.boundary=64,T.storage=64):g.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(T.boundary=16,T.storage=g.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",g),T}function m(g){const T=g.target;T.removeEventListener("dispose",m);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function M(){for(const g in a)e.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:M}}const m2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function g2(){return wi===null&&(wi=new ib(m2,16,16,Ls,_a),wi.name="DFG_LUT",wi.minFilter=Sn,wi.magFilter=Sn,wi.wrapS=sa,wi.wrapT=sa,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class _2{constructor(t={}){const{canvas:n=O1(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=qn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=r;const E=h,_=new Set([sm,am,im]),u=new Set([qn,Hi,sl,rl,em,nm]),m=new Uint32Array(4),M=new Int32Array(4),g=new B;let T=null,A=null;const R=[],v=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1,L=null,Y=null,j=null,H=null;this._outputColorSpace=ii;let O=0,P=0,D=null,G=-1,nt=null;const at=new Ce,lt=new Ce;let Bt=null;const Mt=new Zt(0);let Tt=0,K=n.width,rt=n.height,st=1,Ut=null,Pt=null;const Dt=new Ce(0,0,K,rt),Pe=new Ce(0,0,K,rt);let Kt=!1;const pe=new fm;let ie=!1,te=!1;const Ge=new we,Ze=new B,en=new Ce,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ve(){return D===null?st:1}let z=i;function Rn(y,I){return n.getContext(y,I)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$p}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",Ti,!1),z===null){const I="webgl2";if(z=Rn(I,y),z===null)throw Rn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ne("WebGLRenderer: "+y.message),y}let oe,C,S,F,X,Z,ot,ut,Q,$,ft,At,pt,dt,wt,Nt,Ft,N,ct,J,ht,vt,it;function bt(){oe=new gR(z),oe.init(),ht=new o2(z,oe),C=new lR(z,oe,t,ht),S=new s2(z,oe),C.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),Y=z.createFramebuffer(),j=z.createFramebuffer(),H=z.createFramebuffer(),F=new xR(z),X=new W3,Z=new r2(z,oe,S,X,C,ht,F),ot=new mR(w),ut=new Eb(z),vt=new rR(z,ut),Q=new _R(z,ut,F,vt),$=new MR(z,Q,ut,vt,F),N=new SR(z,C,Z),wt=new cR(X),ft=new X3(w,ot,oe,C,vt,wt),At=new h2(w,X),pt=new Y3,dt=new $3(oe),Ft=new sR(w,ot,S,$,x,l),Nt=new a2(w,$,C),it=new p2(z,F,C,S),ct=new oR(z,oe,F),J=new vR(z,oe,F),F.programs=ft.programs,w.capabilities=C,w.extensions=oe,w.properties=X,w.renderLists=pt,w.shadowMap=Nt,w.state=S,w.info=F}bt(),E!==qn&&(b=new ER(E,n.width,n.height,o,a,s));const yt=new f2(w,z);this.xr=yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){y!==void 0&&(st=y,this.setSize(K,rt,!1))},this.getSize=function(y){return y.set(K,rt)},this.setSize=function(y,I,W=!0){if(yt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,rt=I,n.width=Math.floor(y*st),n.height=Math.floor(I*st),W===!0&&(n.style.width=y+"px",n.style.height=I+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(K*st,rt*st).floor()},this.setDrawingBufferSize=function(y,I,W){K=y,rt=I,st=W,n.width=Math.floor(y*W),n.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(E===qn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(at)},this.getViewport=function(y){return y.copy(Dt)},this.setViewport=function(y,I,W,V){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,I,W,V),S.viewport(at.copy(Dt).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(Pe)},this.setScissor=function(y,I,W,V){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,I,W,V),S.scissor(lt.copy(Pe).multiplyScalar(st).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(y){S.setScissorTest(Kt=y)},this.setOpaqueSort=function(y){Ut=y},this.setTransparentSort=function(y){Pt=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let V=0;if(y){let k=!1;if(D!==null){const _t=D.texture.format;k=_.has(_t)}if(k){const _t=D.texture.type,St=u.has(_t),gt=Ft.getClearColor(),Et=Ft.getClearAlpha(),Rt=gt.r,Ht=gt.g,Xt=gt.b;St?(m[0]=Rt,m[1]=Ht,m[2]=Xt,m[3]=Et,z.clearBufferuiv(z.COLOR,0,m)):(M[0]=Rt,M[1]=Ht,M[2]=Xt,M[3]=Et,z.clearBufferiv(z.COLOR,0,M))}else V|=z.COLOR_BUFFER_BIT}I&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),L=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",Ti,!1),Ft.dispose(),pt.dispose(),dt.dispose(),X.dispose(),ot.dispose(),$.dispose(),vt.dispose(),it.dispose(),ft.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Em),yt.removeEventListener("sessionend",bm),rs.stop()};function Ue(y){y.preventDefault(),hg("WebGLRenderer: Context Lost."),U=!0}function xe(){hg("WebGLRenderer: Context Restored."),U=!1;const y=F.autoReset,I=Nt.enabled,W=Nt.autoUpdate,V=Nt.needsUpdate,k=Nt.type;bt(),F.autoReset=y,Nt.enabled=I,Nt.autoUpdate=W,Nt.needsUpdate=V,Nt.type=k}function Ti(y){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ai(y){const I=y.target;I.removeEventListener("dispose",Ai),KS(I)}function KS(y){QS(y),X.remove(y)}function QS(y){const I=X.get(y).programs;I!==void 0&&(I.forEach(function(W){ft.releaseProgram(W)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,V,k,_t){I===null&&(I=cn);const St=k.isMesh&&k.matrixWorld.determinantAffine()<0,gt=$S(y,I,W,V,k);S.setMaterial(V,St);let Et=W.index,Rt=1;if(V.wireframe===!0){if(Et=Q.getWireframeAttribute(W),Et===void 0)return;Rt=2}const Ht=W.drawRange,Xt=W.attributes.position;let Ct=Ht.start*Rt,fe=(Ht.start+Ht.count)*Rt;_t!==null&&(Ct=Math.max(Ct,_t.start*Rt),fe=Math.min(fe,(_t.start+_t.count)*Rt)),Et!==null?(Ct=Math.max(Ct,0),fe=Math.min(fe,Et.count)):Xt!=null&&(Ct=Math.max(Ct,0),fe=Math.min(fe,Xt.count));const ze=fe-Ct;if(ze<0||ze===1/0)return;vt.setup(k,V,gt,W,Et);let Ne,me=ct;if(Et!==null&&(Ne=ut.get(Et),me=J,me.setIndex(Ne)),k.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*Ve()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(k.isLine){let gn=V.linewidth;gn===void 0&&(gn=1),S.setLineWidth(gn*Ve()),k.isLineSegments?me.setMode(z.LINES):k.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else k.isPoints?me.setMode(z.POINTS):k.isSprite&&me.setMode(z.TRIANGLES);if(k.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const gn=k._multiDrawStarts,xt=k._multiDrawCounts,Fn=k._multiDrawCount,ee=Et?ut.get(Et).bytesPerElement:1,ti=X.get(V).currentProgram.getUniforms();for(let Ri=0;Ri<Fn;Ri++)ti.setValue(z,"_gl_DrawID",Ri),me.render(gn[Ri]/ee,xt[Ri])}else if(k.isInstancedMesh)me.renderInstances(Ct,ze,k.count);else if(W.isInstancedBufferGeometry){const gn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,gn);me.renderInstances(Ct,ze,xt)}else me.render(Ct,ze)};function ym(y,I,W){y.transparent===!0&&y.side===Ui&&y.forceSinglePass===!1?(y.side=Pn,y.needsUpdate=!0,bl(y,I,W),y.side=ns,y.needsUpdate=!0,bl(y,I,W),y.side=Ui):bl(y,I,W)}this.compile=function(y,I,W=null){W===null&&(W=y),A=dt.get(W),A.init(I),v.push(A),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();const V=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const gt=_t[St];ym(gt,W,k),V.add(gt)}else ym(_t,W,k),V.add(_t)}),A=v.pop(),V},this.compileAsync=function(y,I,W=null){const V=this.compile(y,I,W);return new Promise(k=>{function _t(){if(V.forEach(function(St){X.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){k(y);return}setTimeout(_t,10)}oe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Gu=null;function jS(y){Gu&&Gu(y)}function Em(){rs.stop()}function bm(){rs.start()}const rs=new FS;rs.setAnimationLoop(jS),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(y){Gu=y,yt.setAnimationLoop(y),y===null?rs.stop():rs.start()},yt.addEventListener("sessionstart",Em),yt.addEventListener("sessionend",bm),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;L!==null&&L.renderStart(y,I);const W=yt.enabled===!0&&yt.isPresenting===!0,V=b!==null&&(D===null||W)&&b.begin(w,D);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(I),I=yt.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,I,D),A=dt.get(y,v.length),A.init(I),A.state.textureUnits=Z.getTextureUnits(),v.push(A),Ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),pe.setFromProjectionMatrix(Ge,zi,I.reversedDepth),te=this.localClippingEnabled,ie=wt.init(this.clippingPlanes,te),T=pt.get(y,R.length),T.init(),R.push(T),yt.enabled===!0&&yt.isPresenting===!0){const St=w.xr.getDepthSensingMesh();St!==null&&Vu(St,I,-1/0,w.sortObjects)}Vu(y,I,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(Ut,Pt,I.reversedDepth),De=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,De&&Ft.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&wt.beginShadows();const k=A.state.shadowsArray;if(Nt.render(k,y,I),ie===!0&&wt.endShadows(),(V&&b.hasRenderPass())===!1){const St=T.opaque,gt=T.transmissive;if(A.setupLights(),I.isArrayCamera){const Et=I.cameras;if(gt.length>0)for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Xt=Et[Rt];Am(St,gt,y,Xt)}De&&Ft.render(y);for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Xt=Et[Rt];Tm(T,y,Xt,Xt.viewport)}}else gt.length>0&&Am(St,gt,y,I),De&&Ft.render(y),Tm(T,y,I)}D!==null&&P===0&&(Z.updateMultisampleRenderTarget(D),Z.updateRenderTargetMipmap(D)),V&&b.end(w),y.isScene===!0&&y.onAfterRender(w,y,I),vt.resetDefaultState(),G=-1,nt=null,v.pop(),v.length>0?(A=v[v.length-1],Z.setTextureUnits(A.state.textureUnits),ie===!0&&wt.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,L!==null&&L.renderEnd()};function Vu(y,I,W,V){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||pe.intersectsSprite(y)){V&&en.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ge);const St=$.update(y),gt=y.material;gt.visible&&T.push(y,St,gt,W,en.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||pe.intersectsObject(y))){const St=$.update(y),gt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),en.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),en.copy(St.boundingSphere.center)),en.applyMatrix4(y.matrixWorld).applyMatrix4(Ge)),Array.isArray(gt)){const Et=St.groups;for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Xt=Et[Rt],Ct=gt[Xt.materialIndex];Ct&&Ct.visible&&T.push(y,St,Ct,W,en.z,Xt)}}else gt.visible&&T.push(y,St,gt,W,en.z,null)}}const _t=y.children;for(let St=0,gt=_t.length;St<gt;St++)Vu(_t[St],I,W,V)}function Tm(y,I,W,V){const{opaque:k,transmissive:_t,transparent:St}=y;A.setupLightsView(W),ie===!0&&wt.setGlobalState(w.clippingPlanes,W),V&&S.viewport(at.copy(V)),k.length>0&&El(k,I,W),_t.length>0&&El(_t,I,W),St.length>0&&El(St,I,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Am(y,I,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const Ct=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new Fi(1,1,{generateMipmaps:!0,type:Ct?_a:qn,minFilter:Ss,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const _t=A.state.transmissionRenderTarget[V.id],St=V.viewport||at;_t.setSize(St.z*w.transmissionResolutionScale,St.w*w.transmissionResolutionScale);const gt=w.getRenderTarget(),Et=w.getActiveCubeFace(),Rt=w.getActiveMipmapLevel();w.setRenderTarget(_t),w.getClearColor(Mt),Tt=w.getClearAlpha(),Tt<1&&w.setClearColor(16777215,.5),w.clear(),De&&Ft.render(W);const Ht=w.toneMapping;w.toneMapping=Bi;const Xt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),ie===!0&&wt.setGlobalState(w.clippingPlanes,V),El(y,W,V),Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let fe=0,ze=I.length;fe<ze;fe++){const Ne=I[fe],{object:me,geometry:gn,material:xt,group:Fn}=Ne;if(xt.side===Ui&&me.layers.test(V.layers)){const ee=xt.side;xt.side=Pn,xt.needsUpdate=!0,Rm(me,W,V,gn,xt,Fn),xt.side=ee,xt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t))}w.setRenderTarget(gt,Et,Rt),w.setClearColor(Mt,Tt),Xt!==void 0&&(V.viewport=Xt),w.toneMapping=Ht}function El(y,I,W){const V=I.isScene===!0?I.overrideMaterial:null;for(let k=0,_t=y.length;k<_t;k++){const St=y[k],{object:gt,geometry:Et,group:Rt}=St;let Ht=St.material;Ht.allowOverride===!0&&V!==null&&(Ht=V),gt.layers.test(W.layers)&&Rm(gt,I,W,Et,Ht,Rt)}}function Rm(y,I,W,V,k,_t){y.onBeforeRender(w,I,W,V,k,_t),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(w,I,W,V,y,_t),k.transparent===!0&&k.side===Ui&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,w.renderBufferDirect(W,I,V,k,y,_t),k.side=ns,k.needsUpdate=!0,w.renderBufferDirect(W,I,V,k,y,_t),k.side=Ui):w.renderBufferDirect(W,I,V,k,y,_t),y.onAfterRender(w,I,W,V,k,_t)}function bl(y,I,W){I.isScene!==!0&&(I=cn);const V=X.get(y),k=A.state.lights,_t=A.state.shadowsArray,St=k.state.version,gt=ft.getParameters(y,k.state,_t,I,W,A.state.lightProbeGridArray),Et=ft.getProgramCacheKey(gt);let Rt=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=ot.get(y.envMap||V.environment,Ht),V.envMapRotation=V.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Ai),Rt=new Map,V.programs=Rt);let Xt=Rt.get(Et);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===St)return wm(y,gt),Xt}else gt.uniforms=ft.getUniforms(y),L!==null&&y.isNodeMaterial&&L.build(y,W,gt),y.onBeforeCompile(gt,w),Xt=ft.acquireProgram(gt,Et),Rt.set(Et,Xt),V.uniforms=gt.uniforms;const Ct=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=wt.uniform),wm(y,gt),V.needsLights=eM(y),V.lightsStateVersion=St,V.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=A.state.lightProbeGridArray.length>0,V.currentProgram=Xt,V.uniformsList=null,Xt}function Cm(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Nc.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function wm(y,I){const W=X.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function JS(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;g.setFromMatrixPosition(I.matrixWorld);for(let W=0,V=y.length;W<V;W++){const k=y[W];if(k.texture!==null&&k.boundingBox.containsPoint(g))return k}return null}function $S(y,I,W,V,k){I.isScene!==!0&&(I=cn),Z.resetTextureUnits();const _t=I.fog,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,gt=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:jt.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Rt=ot.get(V.envMap||St,Et),Ht=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color;let Ne=Bi;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ne=w.toneMapping);const me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gn=me!==void 0?me.length:0,xt=X.get(V),Fn=A.state.lights;if(ie===!0&&(te===!0||y!==nt)){const Se=y===nt&&V.id===G;wt.setState(V,y,Se)}let ee=!1;V.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Fn.state.version||xt.outputColorSpace!==gt||k.isBatchedMesh&&xt.batching===!1||!k.isBatchedMesh&&xt.batching===!0||k.isBatchedMesh&&xt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&xt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&xt.instancing===!1||!k.isInstancedMesh&&xt.instancing===!0||k.isSkinnedMesh&&xt.skinning===!1||!k.isSkinnedMesh&&xt.skinning===!0||k.isInstancedMesh&&xt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xt.instancingMorph===!1&&k.morphTexture!==null||xt.envMap!==Rt||V.fog===!0&&xt.fog!==_t||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==wt.numPlanes||xt.numIntersection!==wt.numIntersection)||xt.vertexAlphas!==Ht||xt.vertexTangents!==Xt||xt.morphTargets!==Ct||xt.morphNormals!==fe||xt.morphColors!==ze||xt.toneMapping!==Ne||xt.morphTargetsCount!==gn||!!xt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,xt.__version=V.version);let ti=xt.currentProgram;ee===!0&&(ti=bl(V,I,k),L&&V.isNodeMaterial&&L.onUpdateProgram(V,ti,xt));let Ri=!1,Sa=!1,Hs=!1;const ge=ti.getUniforms(),Ie=xt.uniforms;if(S.useProgram(ti.program)&&(Ri=!0,Sa=!0,Hs=!0),V.id!==G&&(G=V.id,Sa=!0),xt.needsLights){const Se=JS(A.state.lightProbeGridArray,k);xt.lightProbeGrid!==Se&&(xt.lightProbeGrid=Se,Sa=!0)}if(Ri||nt!==y){S.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ge.setValue(z,"projectionMatrix",y.projectionMatrix),ge.setValue(z,"viewMatrix",y.matrixWorldInverse);const ya=ge.map.cameraPosition;ya!==void 0&&ya.setValue(z,Ze.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,Sa=!0,Hs=!0)}if(xt.needsLights&&(Fn.state.directionalShadowMap.length>0&&ge.setValue(z,"directionalShadowMap",Fn.state.directionalShadowMap,Z),Fn.state.spotShadowMap.length>0&&ge.setValue(z,"spotShadowMap",Fn.state.spotShadowMap,Z),Fn.state.pointShadowMap.length>0&&ge.setValue(z,"pointShadowMap",Fn.state.pointShadowMap,Z)),k.isSkinnedMesh){ge.setOptional(z,k,"bindMatrix"),ge.setOptional(z,k,"bindMatrixInverse");const Se=k.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ge.setValue(z,"boneTexture",Se.boneTexture,Z))}k.isBatchedMesh&&(ge.setOptional(z,k,"batchingTexture"),ge.setValue(z,"batchingTexture",k._matricesTexture,Z),ge.setOptional(z,k,"batchingIdTexture"),ge.setValue(z,"batchingIdTexture",k._indirectTexture,Z),ge.setOptional(z,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(z,"batchingColorTexture",k._colorsTexture,Z));const Ma=W.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&N.update(k,W,ti),(Sa||xt.receiveShadow!==k.receiveShadow)&&(xt.receiveShadow=k.receiveShadow,ge.setValue(z,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(Ie.envMapIntensity.value=I.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=g2()),Sa){if(ge.setValue(z,"toneMappingExposure",w.toneMappingExposure),xt.needsLights&&tM(Ie,Hs),_t&&V.fog===!0&&At.refreshFogUniforms(Ie,_t),At.refreshMaterialUniforms(Ie,V,st,rt,A.state.transmissionRenderTarget[y.id]),xt.needsLights&&xt.lightProbeGrid){const Se=xt.lightProbeGrid;Ie.probesSH.value=Se.texture,Ie.probesMin.value.copy(Se.boundingBox.min),Ie.probesMax.value.copy(Se.boundingBox.max),Ie.probesResolution.value.copy(Se.resolution)}Nc.upload(z,Cm(xt),Ie,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Nc.upload(z,Cm(xt),Ie,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(z,"center",k.center),ge.setValue(z,"modelViewMatrix",k.modelViewMatrix),ge.setValue(z,"normalMatrix",k.normalMatrix),ge.setValue(z,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){const Se=V.uniformsGroups;for(let ya=0,Gs=Se.length;ya<Gs;ya++){const Dm=Se[ya];it.update(Dm,ti),it.bind(Dm,ti)}}return ti}function tM(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function eM(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,I,W){const V=X.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=I,X.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=X.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){D=y,O=I,P=W;let V=null,k=!1,_t=!1;if(y){const gt=X.get(y);if(gt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,gt.__webglFramebuffer),at.copy(y.viewport),lt.copy(y.scissor),Bt=y.scissorTest,S.viewport(at),S.scissor(lt),S.setScissorTest(Bt),G=-1;return}else if(gt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(gt.__hasExternalTextures)Z.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ht=y.depthTexture;if(gt.__boundDepthTexture!==Ht){if(Ht!==null&&X.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}const Et=y.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const Rt=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?V=Rt[I][W]:V=Rt[I],k=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?V=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?V=Rt[W]:V=Rt,at.copy(y.viewport),lt.copy(y.scissor),Bt=y.scissorTest}else at.copy(Dt).multiplyScalar(st).floor(),lt.copy(Pe).multiplyScalar(st).floor(),Bt=Kt;if(W!==0&&(V=Y),S.bindFramebuffer(z.FRAMEBUFFER,V)&&S.drawBuffers(y,V),S.viewport(at),S.scissor(lt),S.setScissorTest(Bt),k){const gt=X.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,W)}else if(_t){const gt=I;for(let Et=0;Et<y.textures.length;Et++){const Rt=X.get(y.textures[Et]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Et,Rt.__webglTexture,W,gt)}}else if(y!==null&&W!==0){const gt=X.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gt.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(y,I,W,V,k,_t,St,gt=0){if(!(y&&y.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){S.bindFramebuffer(z.FRAMEBUFFER,Et);try{const Rt=y.textures[gt],Ht=Rt.format,Xt=Rt.type;if(y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+gt),!C.textureFormatReadable(Ht)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-V&&W>=0&&W<=y.height-k&&z.readPixels(I,W,V,k,ht.convert(Ht),ht.convert(Xt),_t)}finally{const Rt=D!==null?X.get(D).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,V,k,_t,St,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(I>=0&&I<=y.width-V&&W>=0&&W<=y.height-k){S.bindFramebuffer(z.FRAMEBUFFER,Et);const Rt=y.textures[gt],Ht=Rt.format,Xt=Rt.type;if(y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+gt),!C.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.bufferData(z.PIXEL_PACK_BUFFER,_t.byteLength,z.STREAM_READ),z.readPixels(I,W,V,k,ht.convert(Ht),ht.convert(Xt),0);const fe=D!==null?X.get(D).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,fe);const ze=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await P1(z,ze,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_t),z.deleteBuffer(Ct),z.deleteSync(ze),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const V=Math.pow(2,-W),k=Math.floor(y.image.width*V),_t=Math.floor(y.image.height*V),St=I!==null?I.x:0,gt=I!==null?I.y:0;Z.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,St,gt,k,_t),S.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,V=null,k=0,_t=0){let St,gt,Et,Rt,Ht,Xt,Ct,fe,ze;const Ne=y.isCompressedTexture?y.mipmaps[_t]:y.image;if(W!==null)St=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Ht=W.min.y,Xt=W.isBox3?W.min.z:0;else{const Ie=Math.pow(2,-k);St=Math.floor(Ne.width*Ie),gt=Math.floor(Ne.height*Ie),y.isDataArrayTexture?Et=Ne.depth:y.isData3DTexture?Et=Math.floor(Ne.depth*Ie):Et=1,Rt=0,Ht=0,Xt=0}V!==null?(Ct=V.x,fe=V.y,ze=V.z):(Ct=0,fe=0,ze=0);const me=ht.convert(I.format),gn=ht.convert(I.type);let xt;I.isData3DTexture?(Z.setTexture3D(I,0),xt=z.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Z.setTexture2DArray(I,0),xt=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(I,0),xt=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,I.unpackAlignment);const Fn=S.getParameter(z.UNPACK_ROW_LENGTH),ee=S.getParameter(z.UNPACK_IMAGE_HEIGHT),ti=S.getParameter(z.UNPACK_SKIP_PIXELS),Ri=S.getParameter(z.UNPACK_SKIP_ROWS),Sa=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(z.UNPACK_SKIP_ROWS,Ht),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const Hs=y.isDataArrayTexture||y.isData3DTexture,ge=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Ie=X.get(y),Ma=X.get(I),Se=X.get(Ie.__renderTarget),ya=X.get(Ma.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Se.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let Gs=0;Gs<Et;Gs++)Hs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(y).__webglTexture,k,Xt+Gs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(I).__webglTexture,_t,ze+Gs)),z.blitFramebuffer(Rt,Ht,St,gt,Ct,fe,St,gt,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||X.has(y)){const Ie=X.get(y),Ma=X.get(I);S.bindFramebuffer(z.READ_FRAMEBUFFER,j),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,H);for(let Se=0;Se<Et;Se++)Hs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,k,Xt+Se):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,k),ge?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ma.__webglTexture,_t,ze+Se):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ma.__webglTexture,_t),k!==0?z.blitFramebuffer(Rt,Ht,St,gt,Ct,fe,St,gt,z.COLOR_BUFFER_BIT,z.NEAREST):ge?z.copyTexSubImage3D(xt,_t,Ct,fe,ze+Se,Rt,Ht,St,gt):z.copyTexSubImage2D(xt,_t,Ct,fe,Rt,Ht,St,gt);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ge?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(xt,_t,Ct,fe,ze,St,gt,Et,me,gn,Ne.data):I.isCompressedArrayTexture?z.compressedTexSubImage3D(xt,_t,Ct,fe,ze,St,gt,Et,me,Ne.data):z.texSubImage3D(xt,_t,Ct,fe,ze,St,gt,Et,me,gn,Ne):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_t,Ct,fe,St,gt,me,gn,Ne.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_t,Ct,fe,Ne.width,Ne.height,me,Ne.data):z.texSubImage2D(z.TEXTURE_2D,_t,Ct,fe,St,gt,me,gn,Ne);S.pixelStorei(z.UNPACK_ROW_LENGTH,Fn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),S.pixelStorei(z.UNPACK_SKIP_PIXELS,ti),S.pixelStorei(z.UNPACK_SKIP_ROWS,Ri),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Sa),_t===0&&I.generateMipmaps&&z.generateMipmap(xt),S.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),S.unbindTexture()},this.resetState=function(){O=0,P=0,D=null,S.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}}const _e=(e,t,n)=>({x:e,y:t,z:n}),or={forest:{id:"forest",name:"翡翠林径",theme:"forest",par:4,bounds:{minX:-8,maxX:8,minZ:-18,maxZ:18},spawn:_e(0,.34,14),hole:{x:2.6,y:.08,z:-13,radius:.55},colors:{ground:3570757,accent:9365099,sky:9226460},surfaces:[{id:"forest-grass",type:"grass",friction:.42,bounds:{minX:-8,maxX:8,minZ:-18,maxZ:18}},{id:"forest-sand",type:"sand",friction:1.55,bounds:{minX:-5,maxX:-1,minZ:-7,maxZ:-1},center:_e(-3,0,-4)}],obstacles:[{id:"tree-1",type:"tree",position:_e(-2,1.5,5),solid:!0,radius:1},{id:"tree-2",type:"tree",position:_e(3,1.5,0),solid:!0,radius:1.1},{id:"rock-1",type:"rock",position:_e(-4,.7,-11),solid:!0,radius:1.15}],terrainFeatures:[]},desert:{id:"desert",name:"赤金沙谷",theme:"desert",par:5,bounds:{minX:-9,maxX:9,minZ:-20,maxZ:20},spawn:_e(-4,.34,16),hole:{x:4.5,y:.08,z:-15,radius:.58},colors:{ground:13210956,accent:16766071,sky:15316339},surfaces:[{id:"desert-grass",type:"grass",friction:.46,bounds:{minX:-9,maxX:9,minZ:-20,maxZ:20}},{id:"desert-sand",type:"sand",friction:1.72,bounds:{minX:-7,maxX:3,minZ:-9,maxZ:5},center:_e(-2,0,-2)}],obstacles:[{id:"cactus-1",type:"cactus",position:_e(-3,1,7),solid:!0,radius:.75},{id:"rock-2",type:"rock",position:_e(2,.8,-4),solid:!0,radius:1.4},{id:"cactus-2",type:"cactus",position:_e(-3,1,-12),solid:!0,radius:.8}],terrainFeatures:[]},snow:{id:"snow",name:"极光冰原",theme:"snow",par:5,bounds:{minX:-9,maxX:9,minZ:-20,maxZ:20},spawn:_e(3,.34,16),hole:{x:-3.8,y:.08,z:-15,radius:.58},colors:{ground:14544881,accent:8318719,sky:7705275},surfaces:[{id:"snow-grass",type:"grass",friction:.4,bounds:{minX:-9,maxX:9,minZ:-20,maxZ:20}},{id:"snow-ice",type:"ice",friction:.045,bounds:{minX:-7,maxX:7,minZ:-11,maxZ:9},center:_e(0,0,-1)}],obstacles:[{id:"crystal-1",type:"ice_crystal",position:_e(-4,1,5),solid:!0,radius:1},{id:"snowbank-1",type:"snowbank",position:_e(3,.65,-6),solid:!0,radius:1.5},{id:"crystal-2",type:"ice_crystal",position:_e(1,1,-13),solid:!0,radius:.9}],terrainFeatures:[]}},an=e=>JSON.parse(JSON.stringify(e)),et={position:_e(0,.34,14),velocity:_e(0,0,0),speed:0,radius:.32,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:.42,lastCollision:null,lastSafePosition:_e(0,.34,14)},Gt={dragging:!1,canShoot:!1,startScreen:null,currentScreen:null,direction:{x:0,z:-1},power:0,minPower:1.5,maxPower:15,strokeCount:0},Ln={mode:"follow",position:_e(0,8,22),target:_e(0,0,14),distance:12,minDistance:7,maxDistance:20,zoom:1,angle:0,pitch:.55},yn={fixedStep:1/120,accumulator:0,simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,listenerCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:0,poolStats:{balls:{capacity:4,createdTotal:1,reused:0},particles:{capacity:40,createdTotal:0,reused:0}}};let Re=or.forest,xn={ready:!0,gameState:"menu",mode:"single",currentLevel:null,currentHoleStrokes:0,totalStrokes:0,currentScore:0,totalScore:0,holeComplete:!1,elapsedTime:0},ae=[],Ke=0,Co="setup",Ur=0,Qh=null,_s=[],Xo=[],lr=null,Lc=null;const YS="mini-golf-leaderboard-v2";let Mi={levelBest:{forest:[],desert:[],snow:[]},overall:[],persisted:!0};try{const e=localStorage.getItem(YS);e&&(Mi=JSON.parse(e))}catch{}function v2(){Object.values(Mi.levelBest).forEach(n=>n.sort((i,a)=>i.strokes-a.strokes||i.achievedAt-a.achievedAt||i.playerId.localeCompare(a.playerId)).forEach((i,a)=>i.rank=a+1));const e=new Set(Object.values(Mi.levelBest).flat().map(n=>n.playerId)),t=[];e.forEach(n=>{const i=["forest","desert","snow"].map(a=>Mi.levelBest[a].find(s=>s.playerId===n));if(i.every(Boolean)){const a=i;t.push({playerId:n,playerName:a[0].playerName,levelStrokes:{forest:a[0].strokes,desert:a[1].strokes,snow:a[2].strokes},totalStrokes:a.reduce((s,r)=>s+r.strokes,0),rank:0,achievedAt:Math.max(...a.map(s=>s.achievedAt))})}}),t.sort((n,i)=>n.totalStrokes-i.totalStrokes||n.achievedAt-i.achievedAt||n.playerId.localeCompare(i.playerId)).forEach((n,i)=>n.rank=i+1),Mi.overall=t;try{localStorage.setItem(YS,JSON.stringify(Mi))}catch{}}function x2(e,t,n){const i=Mi.levelBest[Re.id],a=i.find(s=>s.playerId===e);(!a||n<a.strokes)&&(a&&i.splice(i.indexOf(a),1),i.push({playerId:e,playerName:t,strokes:n,rank:0,par:Re.par,relativeToPar:n-Re.par,achievedAt:Date.now()}),v2())}function jh(e){return(e==null?void 0:e.powerupInventory)??[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}]}function ZS(){window.__contract={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:"aurora-putt-2026"})},window.__game={getState:()=>an({...xn,currentLevel:xn.currentLevel?{id:Re.id,name:Re.name,theme:Re.theme,par:Re.par}:null})},window.__ball={getState:()=>an(et)},window.__shot={getState:()=>an(Gt)},window.__course={getState:()=>{var e;return an({levelId:Re.id,name:Re.name,theme:Re.theme,par:Re.par,bounds:Re.bounds,spawn:Re.spawn,hole:Re.hole,surfaces:Re.surfaces,obstacles:Re.obstacles,terrainFeatures:Re.terrainFeatures,obstacleCount:Re.obstacles.length,sceneObjectCount:((e=window.__THREE_SCENE__)==null?void 0:e.children.length)??0,loaded:!!window.__THREE_SCENE__})}},window.__multiplayer={getState:()=>{var e;return an({enabled:xn.mode==="local_multiplayer",mode:"local",status:Co,playerCount:ae.length,currentPlayerId:((e=ae[Ke])==null?void 0:e.id)??null,turnIndex:Ke,round:Math.floor(ae.reduce((t,n)=>t+n.holeStrokes,0)/Math.max(ae.length,1))+1,revision:Ur,players:ae,winnerId:Qh,tiedPlayerIds:_s})}},window.__powerups={getState:()=>{var e;return an({items:Xo.map(t=>{var n,i;return{...t,collected:((n=ae[Ke])==null?void 0:n.collected.includes(t.id))??t.collected,active:!(((i=ae[Ke])==null?void 0:i.collected.includes(t.id))??t.collected)}}),inventory:jh(ae[Ke]),activeEffect:lr,lastTriggeredId:Lc,placingType:null,armedType:((e=ae[Ke])==null?void 0:e.armedPowerup)??null,selectedPlacedId:null})}},window.__camera={getState:()=>an(Ln)},window.__leaderboard={getState:()=>an(Mi)},window.__performance={getState:()=>an(yn)}}ZS();function Oc(e=Re.spawn){var t;Object.assign(et,{position:an(e),velocity:_e(0,0,0),speed:0,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:Re.surfaces[0].friction,lastCollision:null,lastSafePosition:an(e)}),Gt.canShoot=!0,Gt.power=0,Gt.strokeCount=((t=ae[Ke])==null?void 0:t.holeStrokes)??0}function S2(){Xo=[{id:"hio-orb",type:"hole_in_one",position:_e(Re.id==="forest"?4:-4,.5,7),active:!0,collected:!1},{id:"speed-strip",type:"speed_boost",position:_e(0,.08,-8),active:!0,collected:!1,direction:{x:0,z:-1}},{id:"bounce-pad",type:"bounce_pad",position:_e(-3,.1,-12),active:!0,collected:!1,direction:{x:.7,z:-.7}}]}function M2({level:e,onTick:t,onComplete:n}){const i=kn.useRef(null),a=kn.useRef(n);return a.current=n,kn.useEffect(()=>{if(!i.current)return;yn.runtimeMountCount++,yn.engineGeneration++,Re=e;const s=new j1;s.background=new Zt(e.colors.sky),s.fog=new cm(e.colors.sky,28,58);const r=new oi(48,1,.1,100),o=new _2({antialias:!0});o.setPixelRatio(Math.min(devicePixelRatio,2)),o.shadowMap.enabled=!0,i.current.appendChild(o.domElement),window.__THREE_SCENE__=s,window.__THREE_RENDERER__=o,s.add(new gb(16777215,3559994,2.2));const l=new xb(16774358,2.8);l.position.set(-8,16,10),l.castShadow=!0,s.add(l);const c=new Be(new ra(e.bounds.maxX-e.bounds.minX,.35,e.bounds.maxZ-e.bounds.minZ),new vi({color:e.colors.ground,roughness:.9}));c.position.y=-.2,c.receiveShadow=!0,s.add(c),e.surfaces.slice(1).forEach(D=>{const G=D.bounds.maxX-D.bounds.minX,nt=D.bounds.maxZ-D.bounds.minZ,at=new Be(new qr(G,nt),new vi({color:D.type==="sand"?14859636:11069935,roughness:D.type==="ice"?.15:1,metalness:D.type==="ice"?.15:0,transparent:D.type==="ice",opacity:D.type==="ice"?.82:1}));at.rotation.x=-Math.PI/2,at.position.set((D.bounds.minX+D.bounds.maxX)/2,.005,(D.bounds.minZ+D.bounds.maxZ)/2),at.receiveShadow=!0,s.add(at)});const d=new vi({color:e.colors.accent,roughness:.65}),p=e.bounds.maxX-e.bounds.minX,f=e.bounds.maxZ-e.bounds.minZ;[[0,.3,e.bounds.minZ,p,.65,.45],[0,.3,e.bounds.maxZ,p,.65,.45],[e.bounds.minX,.3,0,.45,.65,f],[e.bounds.maxX,.3,0,.45,.65,f]].forEach(D=>{const G=new Be(new ra(D[3],D[4],D[5]),d);G.position.set(D[0],D[1],D[2]),G.castShadow=!0,s.add(G)}),e.obstacles.forEach(D=>{let G;D.type.includes("tree")||D.type.includes("cactus")?G=new Be(new ko(D.radius*.6,D.radius,2.7,8),new vi({color:D.type==="tree"?2381877:3635533})):D.type.includes("crystal")?G=new Be(new pm(D.radius,0),new vi({color:9367551,metalness:.25,roughness:.15})):G=new Be(new dm(D.radius,0),new vi({color:D.type==="snowbank"?15792378:6905684,roughness:.9})),G.position.set(D.position.x,D.position.y,D.position.z),G.castShadow=!0,G.userData.obstacleId=D.id,s.add(G)});const h=new Be(new ko(e.hole.radius,e.hole.radius,.08,32),new vi({color:1054485}));h.position.set(e.hole.x,.015,e.hole.z),s.add(h);const x=new Be(new ko(.035,.035,3,8),new vi({color:16119285}));x.position.set(e.hole.x,1.5,e.hole.z),s.add(x);const E=new Be(new qr(1.1,.65),new um({color:16732493,side:Ui}));E.position.set(e.hole.x+.55,2.65,e.hole.z),s.add(E),Xo.forEach(D=>{let G;D.type==="speed_boost"?G=new Be(new ra(2,.08,3),new vi({color:5105663,emissive:1341834,emissiveIntensity:1})):G=new Be(D.type==="hole_in_one"?new hm(.48,1):new ra(2,.15,2),new vi({color:D.type==="hole_in_one"?16768088:16536241,emissive:D.type==="hole_in_one"?7228160:7148093,emissiveIntensity:1})),G.position.set(D.position.x,D.position.y,D.position.z),G.userData.powerId=D.id,s.add(G)});const _=new Be(new mm(et.radius,24,18),new vi({color:16777215,roughness:.35}));_.castShadow=!0,s.add(_);const u=new LS({color:16777215,transparent:!0,opacity:.9}),m=new Bn().setFromPoints([new B,new B(0,0,-3)]),M=new ob(m,u);s.add(M);const g=o.domElement;let T=!1;const A=D=>({x:D.clientX,y:D.clientY}),R=D=>{!Gt.canShoot||et.moving||(T=!0,Gt.dragging=!0,Gt.startScreen=A(D),Gt.currentScreen=A(D),g.setPointerCapture(D.pointerId))},v=D=>{if(!T||!Gt.startScreen)return;Gt.currentScreen=A(D);const G=Gt.startScreen.x-D.clientX,nt=Gt.startScreen.y-D.clientY,at=Math.hypot(G,nt);Gt.power=Math.min(Gt.maxPower,Math.max(0,at*.065)),at>2&&(Gt.direction={x:G/at,z:nt/at}),t()},b=()=>{if(T){if(T=!1,Gt.dragging=!1,Gt.power>=Gt.minPower){const D=ae[Ke];if((D==null?void 0:D.armedPowerup)==="hole_in_one"){D.armedPowerup=null;const G=D.powerupInventory.find(Bt=>Bt.type==="hole_in_one");G&&(G.count=Math.max(0,G.count-1));const nt=e.hole.x-et.position.x,at=e.hole.z-et.position.z,lt=Math.hypot(nt,at);et.velocity.x=nt/lt*12,et.velocity.z=at/lt*12,lr="一杆入洞 · 引导击球"}else et.velocity.x=Gt.direction.x*Gt.power,et.velocity.z=Gt.direction.z*Gt.power,lr=null;et.moving=!0,et.sleeping=!1,Gt.canShoot=!1,D?(D.holeStrokes++,D.totalStrokes++,Gt.strokeCount=D.holeStrokes):Gt.strokeCount++,xn.currentHoleStrokes=Gt.strokeCount,xn.totalStrokes=Gt.strokeCount,Ur++}Gt.power=0,t()}};g.addEventListener("pointerdown",R),g.addEventListener("pointermove",v),g.addEventListener("pointerup",b),yn.listenerCount+=3;let w=performance.now(),U=0,L=0,Y=0,j=0;const H=()=>{if(!i.current)return;const D=i.current.clientWidth,G=i.current.clientHeight;o.setSize(D,G,!1),r.aspect=D/G,r.updateProjectionMatrix()},O=D=>{if(yn.simulationTick++,xn.elapsedTime+=D,!et.moving)return;j=Math.max(0,j-D);let G=e.surfaces[0];for(const Mt of e.surfaces.slice(1)){const Tt=Mt.bounds;et.position.x>=Tt.minX&&et.position.x<=Tt.maxX&&et.position.z>=Tt.minZ&&et.position.z<=Tt.maxZ&&(G=Mt)}et.currentSurface=G.type,et.friction=G.friction;const nt=Math.hypot(et.velocity.x,et.velocity.z),at=G.friction*9.2*D;if(nt>0){const Mt=Math.max(0,nt-at),Tt=Mt/nt;et.velocity.x*=Tt,et.velocity.z*=Tt}et.position.x+=et.velocity.x*D,et.position.z+=et.velocity.z*D,(et.position.x<e.bounds.minX+et.radius||et.position.x>e.bounds.maxX-et.radius)&&(et.position.x=Math.max(e.bounds.minX+et.radius,Math.min(e.bounds.maxX-et.radius,et.position.x)),et.velocity.x*=-.72,et.lastCollision="边界护栏"),(et.position.z<e.bounds.minZ+et.radius||et.position.z>e.bounds.maxZ-et.radius)&&(et.position.z=Math.max(e.bounds.minZ+et.radius,Math.min(e.bounds.maxZ-et.radius,et.position.z)),et.velocity.z*=-.72,et.lastCollision="边界护栏");for(const Mt of e.obstacles){const Tt=et.position.x-Mt.position.x,K=et.position.z-Mt.position.z,rt=Math.hypot(Tt,K),st=et.radius+(Mt.radius??.8);if(rt<st&&rt>.001){const Ut=Tt/rt,Pt=K/rt,Dt=et.velocity.x*Ut+et.velocity.z*Pt;et.position.x=Mt.position.x+Ut*st,et.position.z=Mt.position.z+Pt*st,et.velocity.x=(et.velocity.x-2*Dt*Ut)*.72,et.velocity.z=(et.velocity.z-2*Dt*Pt)*.72,et.lastCollision=Mt.id}}const lt=ae[Ke];for(const Mt of Xo){if(lt!=null&&lt.collected.includes(Mt.id))continue;if(Math.hypot(et.position.x-Mt.position.x,et.position.z-Mt.position.z)<(Mt.type==="speed_boost"?1.45:.75))if(Mt.type==="hole_in_one"&&lt){lt.collected.push(Mt.id);const K=lt.powerupInventory.find(rt=>rt.type==="hole_in_one");K&&K.count++,Mt.collected=!0,Lc=Mt.id}else if(Mt.type==="speed_boost"&&j===0){const K=Mt.direction;et.velocity.x=Math.max(-16,Math.min(16,et.velocity.x+K.x*4)),et.velocity.z=Math.max(-16,Math.min(16,et.velocity.z+K.z*4)),j=1.2,Lc=Mt.id,lr="加速带"}else Mt.type==="bounce_pad"&&(et.velocity.x*=-1,et.velocity.z*=-1,Lc=Mt.id,lr="反弹垫")}if(et.speed=Math.hypot(et.velocity.x,et.velocity.z),et.lastSafePosition=an(et.position),Math.hypot(et.position.x-e.hole.x,et.position.z-e.hole.z)<e.hole.radius&&et.speed<8){et.position.x=e.hole.x,et.position.z=e.hole.z,et.velocity=_e(0,0,0),et.speed=0,et.moving=!1,et.sleeping=!0,et.inHole=!0,Gt.canShoot=!1,a.current();return}if(et.speed<.035){if(et.velocity=_e(0,0,0),et.speed=0,et.moving=!1,et.sleeping=!0,Gt.canShoot=!0,lt&&(lt.ballPosition=an(et.position)),xn.mode==="local_multiplayer"&&ae.length>1){let Mt=Ke;for(let Tt=1;Tt<=ae.length;Tt++){const K=(Ke+Tt)%ae.length;if(!ae[K].finished){Mt=K;break}}Mt!==Ke&&(Ke=Mt,Oc(ae[Mt].ballPosition),Xo.forEach(Tt=>{Tt.collected=ae[Mt].collected.includes(Tt.id),Tt.active=!Tt.collected}),lr=null)}Ur++}},P=D=>{yn.logicLoopCount++;const G=Math.min(.05,(D-w)/1e3);for(w=D,U+=G;U>=yn.fixedStep;)O(yn.fixedStep),U-=yn.fixedStep;yn.accumulator=U,s.children.forEach(Bt=>{var Mt;Bt.userData.powerId&&(Bt.visible=!(((Mt=ae[Ke])==null?void 0:Mt.collected.includes(Bt.userData.powerId))??!1))}),_.position.set(et.position.x,et.position.y,et.position.z),_.rotation.x+=et.velocity.z*.006,_.rotation.z-=et.velocity.x*.006,M.visible=Gt.dragging;const nt=new Float32Array([et.position.x,.4,et.position.z,et.position.x+Gt.direction.x*(2+Gt.power*.3),.4,et.position.z+Gt.direction.z*(2+Gt.power*.3)]);m.setAttribute("position",new Ei(nt,3)),m.attributes.position.needsUpdate=!0;const at=.45,lt=new B(et.position.x+Math.sin(at)*Ln.distance,7+Ln.distance*.18,et.position.z+Math.cos(at)*Ln.distance);r.position.lerp(lt,.07),r.lookAt(et.position.x,0,et.position.z),Ln.position=_e(r.position.x,r.position.y,r.position.z),Ln.target=an(et.position),Ln.zoom=12/Ln.distance,o.render(s,r),yn.renderFrame++,Y+=G,Y>.1&&(Y=0,t()),L=requestAnimationFrame(P)};return H(),window.addEventListener("resize",H),yn.listenerCount++,L=requestAnimationFrame(P),()=>{cancelAnimationFrame(L),window.removeEventListener("resize",H),g.removeEventListener("pointerdown",R),g.removeEventListener("pointermove",v),g.removeEventListener("pointerup",b),yn.listenerCount-=4,yn.runtimeCleanupCount++,s.traverse(D=>{var nt;const G=D;(nt=G.geometry)==null||nt.dispose(),G.material&&(Array.isArray(G.material)?G.material.forEach(at=>at.dispose()):G.material.dispose())}),o.dispose(),g.remove(),window.__THREE_SCENE__=null,window.__THREE_RENDERER__=null}},[e,t]),q.jsx("div",{ref:i,className:"h-full w-full","aria-label":"Three.js 迷你高尔夫球场"})}function y2(){var E,_;const[e,t]=kn.useState("menu"),[n,i]=kn.useState("single"),[a,s]=kn.useState(or.forest),[r,o]=kn.useState(2),[,l]=kn.useState(0),c=kn.useCallback(()=>l(u=>u+1),[]);kn.useEffect(()=>{yn.reactCommitCount++,xn.gameState=e==="hole_complete"?"hole_complete":e,xn.mode=n,ZS()},[e,n]);const d=u=>{Re=u,s(u),S2(),Ke=0,Qh=null,_s=[],xn={...xn,gameState:"playing",mode:n,currentLevel:u,currentHoleStrokes:0,totalStrokes:0,currentScore:0,totalScore:0,holeComplete:!1,elapsedTime:0},n==="single"?ae=[{id:"player-1",name:"玩家 1",holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:an(u.spawn),powerupInventory:jh(),armedPowerup:null,collected:[]}]:ae.length||p(),Co="playing",ae.forEach(m=>{m.holeStrokes=0,m.totalStrokes=0,m.finished=!1,m.ballPosition=an(u.spawn),m.armedPowerup=null,m.collected=[]}),Oc(),t("playing")},p=()=>{ae=Array.from({length:r},(u,m)=>({id:`player-${m+1}`,name:`玩家 ${m+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:an(or.forest.spawn),powerupInventory:jh(),armedPowerup:null,collected:[]})),Ur++,Co="setup"},f=()=>{const u=ae[Ke];if(!u||u.finished)return;if(u.finished=!0,u.ballPosition=an(et.position),xn.holeComplete=!0,xn.currentScore=Math.max(100,1200-u.holeStrokes*120),xn.totalScore+=xn.currentScore,x2(u.id,u.name,u.holeStrokes),Ur++,n==="single"){t("hole_complete");return}const m=ae.findIndex(M=>!M.finished);if(m>=0)Ke=m,Oc(ae[m].ballPosition),c();else{Co="complete";const M=Math.min(...ae.map(g=>g.totalStrokes));_s=ae.filter(g=>g.totalStrokes===M).map(g=>g.id),Qh=_s.length===1?_s[0]:null,t("local_result")}},h=()=>{const u=ae[Ke],m=u==null?void 0:u.powerupInventory.find(M=>M.type==="hole_in_one");u&&m&&m.count>0&&!et.moving&&(u.armedPowerup=u.armedPowerup?null:"hole_in_one",Ur++,c())},x=ae[Ke];return q.jsxs("main",{className:"h-screen w-screen overflow-hidden bg-[#07140f] text-white selection:bg-lime-300 selection:text-black",children:[e==="menu"&&q.jsxs("section",{id:"menu",className:"relative flex h-full items-center justify-center overflow-hidden px-6",children:[q.jsx("div",{className:"orb orb-a"}),q.jsx("div",{className:"orb orb-b"}),q.jsxs("div",{className:"relative z-10 w-full max-w-5xl",children:[q.jsxs("div",{className:"mb-9 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-lime-300",children:[q.jsx("span",{className:"h-px w-10 bg-lime-300"})," Putt beyond the ordinary"]}),q.jsxs("h1",{className:"max-w-4xl text-6xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl",children:["极光",q.jsx("br",{}),q.jsx("span",{className:"text-lime-300",children:"迷你高尔夫"})]}),q.jsx("p",{className:"mt-7 max-w-lg text-base leading-7 text-white/60",children:"穿越林径、沙谷与冰原。读懂每一寸地表，用最少的杆数写下你的名字。"}),q.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[q.jsxs("button",{"data-testid":"start-btn",onClick:()=>{i("single"),t("level_select")},className:"primary",children:["开始冒险 ",q.jsx("b",{children:"↗"})]}),q.jsx("button",{"data-testid":"multiplayer-btn",onClick:()=>{i("local_multiplayer"),Co="setup",t("local_setup")},className:"secondary",children:"本地对战"}),q.jsx("button",{"data-testid":"leaderboard-btn",onClick:()=>t("leaderboard"),className:"secondary",children:"排行榜"})]})]}),q.jsxs("div",{className:"absolute bottom-7 right-8 hidden text-right text-xs uppercase tracking-[.22em] text-white/30 md:block",children:["Three courses",q.jsx("br",{}),"One perfect line"]})]}),e==="level_select"&&q.jsxs("section",{id:"levelSelect",className:"screen-shell",children:[q.jsx(ld,{back:()=>t(n==="single"?"menu":"local_setup"),label:n==="single"?"单人巡回赛":"本地对战 · 选择赛场"}),q.jsxs("div",{className:"mx-auto mt-10 max-w-6xl px-6",children:[q.jsx("h2",{className:"text-4xl font-black tracking-tight",children:"选择你的球场"}),q.jsx("p",{className:"mt-2 text-white/50",children:"每种地表，都有自己的脾气。"}),q.jsx("div",{className:"mt-8 grid gap-5 md:grid-cols-3",children:Object.values(or).map((u,m)=>q.jsxs("button",{"data-testid":`level-${u.id}`,onClick:()=>d(u),className:`level-card theme-${u.id}`,children:[q.jsxs("span",{className:"level-no",children:["0",m+1]}),q.jsxs("div",{children:[q.jsxs("span",{className:"tag",children:["PAR ",u.par]}),q.jsx("h3",{children:u.name}),q.jsx("p",{children:u.id==="forest"?"柔软草地与致密沙坑":u.id==="desert"?"强摩擦沙谷与岩石走廊":"超低摩擦的漫长冰面"})]}),q.jsx("span",{className:"arrow",children:"→"})]},u.id))})]})]}),e==="local_setup"&&q.jsxs("section",{id:"multiplayerLobby",className:"screen-shell",children:[q.jsx(ld,{back:()=>t("menu"),label:"LOCAL MATCH"}),q.jsxs("div",{className:"mx-auto mt-16 max-w-2xl px-6 text-center",children:[q.jsx("div",{className:"text-6xl",children:"⛳"}),q.jsx("h2",{className:"mt-6 text-5xl font-black tracking-tight",children:"同场竞技"}),q.jsx("p",{className:"mt-3 text-white/50",children:"轮流击球，各自保存球位与道具。最低杆者获胜。"}),q.jsxs("div",{className:"glass mt-10 p-7 text-left",children:[q.jsx("label",{className:"text-xs font-bold uppercase tracking-widest text-lime-300",children:"参赛人数"}),q.jsxs("select",{"data-testid":"local-player-count",value:r,onChange:u=>o(Number(u.target.value)),className:"mt-3 w-full rounded-xl border border-white/10 bg-black/40 p-4 text-lg outline-none",children:[q.jsx("option",{value:"2",children:"2 名玩家"}),q.jsx("option",{value:"3",children:"3 名玩家"}),q.jsx("option",{value:"4",children:"4 名玩家"})]}),q.jsx("button",{"data-testid":"local-start-btn",onClick:()=>{p(),t("level_select")},className:"primary mt-5 w-full",children:"选择球场"}),q.jsx("button",{"data-testid":"local-exit-btn",onClick:()=>t("menu"),className:"mt-4 w-full text-center text-sm text-white/45 hover:text-white",children:"退出多人模式"})]})]})]}),e==="playing"&&q.jsxs("section",{id:"gameScreen",className:"relative h-full w-full",children:[q.jsx(M2,{level:a,onTick:c,onComplete:f}),q.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(1,10,7,.58),transparent_24%,transparent_72%,rgba(1,10,7,.72))]"}),q.jsxs("div",{className:"absolute left-5 right-5 top-5 flex items-start justify-between gap-3",children:[q.jsxs("div",{className:"hud flex items-center gap-4",children:[q.jsx("button",{onClick:()=>t("menu"),className:"pointer-events-auto text-lg",children:"←"}),q.jsxs("div",{children:[q.jsxs("div",{className:"text-[10px] uppercase tracking-[.2em] text-white/45",children:[a.theme," course"]}),q.jsx("b",{className:"text-sm",children:a.name})]})]}),q.jsxs("div",{className:"flex gap-2",children:[q.jsxs("div",{className:"hud text-center",children:[q.jsx("span",{className:"hud-label",children:"玩家"}),q.jsx("b",{"data-testid":"current-player",children:(x==null?void 0:x.name)??"玩家 1"})]}),q.jsxs("div",{className:"hud text-center",children:[q.jsx("span",{className:"hud-label",children:"杆数 / PAR"}),q.jsxs("b",{children:[q.jsx("span",{"data-testid":"stroke-count",children:Gt.strokeCount})," / ",a.par]})]})]})]}),q.jsxs("div",{className:"absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4",children:[q.jsxs("div",{className:"hud w-60",children:[q.jsxs("div",{className:"mb-2 flex justify-between",children:[q.jsx("span",{className:"hud-label",children:"击球力度"}),q.jsxs("b",{"data-testid":"shot-power",children:[Math.round(Gt.power/Gt.maxPower*100),"%"]})]}),q.jsx("div",{className:"h-1.5 overflow-hidden rounded bg-white/10",children:q.jsx("div",{className:"h-full bg-lime-300 transition-all",style:{width:`${Gt.power/Gt.maxPower*100}%`}})}),q.jsx("div",{"data-testid":"aim-feedback",className:"mt-3 text-xs text-white/55",children:Gt.dragging?"松开鼠标击球":"在球场上向后拖动瞄准"})]}),q.jsxs("div",{className:"hidden gap-2 lg:flex",children:[q.jsxs("div",{className:"hud",children:[q.jsx("span",{className:"hud-label",children:"表面摩擦"}),q.jsxs("b",{"data-testid":"surface-friction",className:et.currentSurface==="ice"?"text-cyan-300":et.currentSurface==="sand"?"text-amber-300":"text-lime-300",children:[et.currentSurface.toUpperCase()," · μ ",et.friction.toFixed(3)]})]}),q.jsxs("div",{className:"hud",children:[q.jsx("span",{className:"hud-label",children:"运动"}),q.jsx("b",{"data-testid":"physics-motion",children:et.moving?`${et.speed.toFixed(2)} m/s`:"已静止"}),q.jsx("span",{"data-testid":"physics-contact",className:"block max-w-32 truncate text-[10px] text-white/40",children:et.lastCollision??"无碰撞"})]})]}),q.jsxs("div",{className:"flex flex-col items-end gap-2",children:[q.jsxs("div",{"data-testid":"powerup-status",className:"hud flex items-center gap-2",children:[q.jsx("span",{className:"hud-label !mb-0",children:"道具"}),q.jsxs("button",{"data-testid":"powerup-hio",onClick:h,disabled:!((E=x==null?void 0:x.powerupInventory.find(u=>u.type==="hole_in_one"))!=null&&E.count),className:`pointer-events-auto rounded-lg px-3 py-1.5 text-xs font-bold ${x!=null&&x.armedPowerup?"bg-yellow-300 text-black":"bg-white/10 disabled:opacity-30"}`,children:["★ 一杆入洞 × ",((_=x==null?void 0:x.powerupInventory.find(u=>u.type==="hole_in_one"))==null?void 0:_.count)??0]})]}),q.jsxs("div",{className:"flex gap-2",children:[q.jsx("button",{"data-testid":"reset-position",onClick:()=>{et.moving||Oc(et.lastSafePosition),c()},className:"control",children:"↻ 重置"}),q.jsx("button",{"data-testid":"zoom-in",onClick:()=>{Ln.distance=Math.max(Ln.minDistance,Ln.distance-2),c()},className:"control",children:"＋"}),q.jsx("button",{"data-testid":"zoom-out",onClick:()=>{Ln.distance=Math.min(Ln.maxDistance,Ln.distance+2),c()},className:"control",children:"－"})]})]})]})]}),e==="hole_complete"&&q.jsx("section",{id:"resultScreen",className:"result-wrap",children:q.jsxs("div",{className:"result-card",children:[q.jsx("div",{className:"text-xs font-bold uppercase tracking-[.3em] text-lime-300",children:"Hole complete"}),q.jsx("div",{className:"my-6 text-7xl",children:"⛳"}),q.jsx("h2",{className:"text-5xl font-black",children:"漂亮收杆！"}),q.jsxs("p",{className:"mt-3 text-white/50",children:[a.name," · PAR ",a.par]}),q.jsxs("div",{className:"my-8 grid grid-cols-2 gap-3",children:[q.jsx(r_,{label:"完成杆数",value:Gt.strokeCount}),q.jsx(r_,{label:"本局积分",value:xn.currentScore})]}),q.jsx("button",{"data-testid":"result-next",onClick:()=>t("level_select"),className:"primary w-full",children:"继续巡回赛"})]})}),e==="local_result"&&q.jsx("section",{id:"localLeaderboardScreen",className:"result-wrap",children:q.jsxs("div",{"data-testid":"local-match-leaderboard",className:"result-card !max-w-xl",children:[q.jsx("div",{className:"text-xs font-bold uppercase tracking-[.3em] text-lime-300",children:"Match result"}),q.jsx("h2",{className:"mt-4 text-4xl font-black",children:_s.length>1?"并列冠军":"本局冠军"}),q.jsx("div",{className:"my-7 space-y-2",children:[...ae].sort((u,m)=>u.totalStrokes-m.totalStrokes).map((u,m)=>q.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-white/5 p-4",children:[q.jsxs("span",{children:[q.jsxs("b",{className:"mr-3 text-white/30",children:["#",m+1]}),u.name,_s.includes(u.id)&&q.jsx("em",{className:"ml-2 not-italic text-lime-300",children:"并列"})]}),q.jsxs("b",{children:[u.totalStrokes," 杆"]})]},u.id))}),q.jsx("button",{"data-testid":"result-next",onClick:()=>t("menu"),className:"primary w-full",children:"返回主菜单"})]})}),e==="leaderboard"&&q.jsxs("section",{id:"leaderboardScreen",className:"screen-shell overflow-y-auto",children:[q.jsx(ld,{back:()=>t("menu"),label:"HALL OF FAME"}),q.jsxs("div",{className:"mx-auto max-w-5xl px-6 py-12",children:[q.jsx("h2",{className:"text-5xl font-black",children:"最佳球手"}),q.jsx("div",{className:"mt-8 grid gap-5 lg:grid-cols-3",children:["forest","desert","snow"].map(u=>q.jsxs("div",{className:"glass p-5",children:[q.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[q.jsx("h3",{className:"text-xl font-bold",children:or[u].name}),q.jsxs("span",{className:"tag",children:["PAR ",or[u].par]})]}),Mi.levelBest[u].length?Mi.levelBest[u].slice(0,6).map(m=>q.jsxs("div",{className:"board-row",children:[q.jsxs("span",{children:[q.jsx("i",{children:m.rank}),m.playerName]}),q.jsxs("b",{children:[m.strokes," 杆"]})]},m.playerId)):q.jsx("p",{className:"py-8 text-center text-sm text-white/30",children:"等待首个完赛成绩"})]},u))}),q.jsxs("div",{className:"glass mt-5 p-6",children:[q.jsx("h3",{className:"text-xl font-bold",children:"全关卡总榜"}),q.jsx("p",{className:"mt-1 text-xs text-white/35",children:"完成全部三关后自动入榜"}),Mi.overall.map(u=>q.jsxs("div",{className:"board-row mt-3",children:[q.jsxs("span",{children:[q.jsx("i",{children:u.rank}),u.playerName]}),q.jsxs("b",{children:[u.totalStrokes," 总杆"]})]},u.playerId))]})]})]})]})}function ld({back:e,label:t}){return q.jsxs("header",{className:"flex h-20 items-center justify-between border-b border-white/10 px-6 sm:px-10",children:[q.jsx("button",{onClick:e,className:"text-sm text-white/60 hover:text-white",children:"← 返回"}),q.jsx("b",{className:"text-xs tracking-[.25em] text-lime-300",children:t}),q.jsx("span",{className:"text-xl",children:"●"})]})}function r_({label:e,value:t}){return q.jsxs("div",{className:"rounded-2xl bg-white/5 p-5",children:[q.jsx("span",{className:"hud-label",children:e}),q.jsx("b",{className:"text-3xl",children:t})]})}t1.createRoot(document.getElementById("root")).render(q.jsx(SM.StrictMode,{children:q.jsx(y2,{})}));
