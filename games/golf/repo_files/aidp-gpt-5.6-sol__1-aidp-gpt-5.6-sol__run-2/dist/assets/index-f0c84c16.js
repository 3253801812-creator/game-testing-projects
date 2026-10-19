var OS=Object.defineProperty;var PS=(e,t,n)=>t in e?OS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var It=(e,t,n)=>(PS(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function kg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xg={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=Symbol.for("react.transitional.element"),IS=Symbol.for("react.fragment");function Wg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:zS,type:e,key:i,ref:t!==void 0?t:null,props:n}}eu.Fragment=IS;eu.jsx=Wg;eu.jsxs=Wg;Xg.exports=eu;var N=Xg.exports,qg={exports:{}},Lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=Symbol.for("react.transitional.element"),BS=Symbol.for("react.portal"),FS=Symbol.for("react.fragment"),HS=Symbol.for("react.strict_mode"),GS=Symbol.for("react.profiler"),VS=Symbol.for("react.consumer"),kS=Symbol.for("react.context"),XS=Symbol.for("react.forward_ref"),WS=Symbol.for("react.suspense"),qS=Symbol.for("react.memo"),Yg=Symbol.for("react.lazy"),YS=Symbol.for("react.activity"),hm=Symbol.iterator;function ZS(e){return e===null||typeof e!="object"?null:(e=hm&&e[hm]||e["@@iterator"],typeof e=="function"?e:null)}var Zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kg=Object.assign,jg={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Zg}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qg(){}Qg.prototype=Fr.prototype;function Od(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Zg}var Pd=Od.prototype=new Qg;Pd.constructor=Od;Kg(Pd,Fr.prototype);Pd.isPureReactComponent=!0;var dm=Array.isArray;function qf(){}var Me={H:null,A:null,T:null,S:null},Jg=Object.prototype.hasOwnProperty;function zd(e,t,n){var i=n.ref;return{$$typeof:Ld,type:e,key:t,ref:i!==void 0?i:null,props:n}}function KS(e,t){return zd(e.type,t,e.props)}function Id(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ld}function jS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pm=/\/+/g;function Au(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jS(""+e.key):t.toString(36)}function QS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(qf,qf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $s(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ld:case BS:r=!0;break;case Yg:return r=e._init,$s(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Au(e,0):i,dm(a)?(n="",r!=null&&(n=r.replace(pm,"$&/")+"/"),$s(a,t,n,"",function(u){return u})):a!=null&&(Id(a)&&(a=KS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(pm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(dm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Au(i,l),r+=$s(i,t,n,s,a);else if(l=ZS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Au(i,l++),r+=$s(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return $s(QS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function hl(e,t,n){if(e==null)return e;var i=[],a=0;return $s(e,i,"","",function(s){return t.call(n,s,a++)}),i}function JS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$S={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!Id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Lt.Activity=YS;Lt.Children=$S;Lt.Component=Fr;Lt.Fragment=FS;Lt.Profiler=GS;Lt.PureComponent=Od;Lt.StrictMode=HS;Lt.Suspense=WS;Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Lt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Lt.cache=function(e){return function(){return e.apply(null,arguments)}};Lt.cacheSignal=function(){return null};Lt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Kg({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Jg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return zd(e.type,a,i)};Lt.createContext=function(e){return e={$$typeof:kS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:VS,_context:e},e};Lt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Jg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return zd(e,s,a)};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(e){return{$$typeof:XS,render:e}};Lt.isValidElement=Id;Lt.lazy=function(e){return{$$typeof:Yg,_payload:{_status:-1,_result:e},_init:JS}};Lt.memo=function(e,t){return{$$typeof:qS,type:e,compare:t===void 0?null:t}};Lt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(qf,mm)}catch(s){mm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}};Lt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Lt.use=function(e){return Me.H.use(e)};Lt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Lt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Lt.useContext=function(e){return Me.H.useContext(e)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Lt.useEffect=function(e,t){return Me.H.useEffect(e,t)};Lt.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};Lt.useId=function(){return Me.H.useId()};Lt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Lt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Lt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Lt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Lt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Lt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Lt.useRef=function(e){return Me.H.useRef(e)};Lt.useState=function(e){return Me.H.useState(e)};Lt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Lt.useTransition=function(){return Me.H.useTransition()};Lt.version="19.2.8";qg.exports=Lt;var fi=qg.exports;const ty=kg(fi);var $g={exports:{}},nu={},t_={exports:{}},e_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,z){var X=L.length;L.push(z);t:for(;0<X;){var tt=X-1>>>1,nt=L[tt];if(0<a(nt,z))L[tt]=z,L[X]=nt,X=tt;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var z=L[0],X=L.pop();if(X!==z){L[0]=X;t:for(var tt=0,nt=L.length,ft=nt>>>1;tt<ft;){var _t=2*(tt+1)-1,Zt=L[_t],se=_t+1,Xt=L[se];if(0>a(Zt,X))se<nt&&0>a(Xt,Zt)?(L[tt]=Xt,L[se]=X,tt=se):(L[tt]=Zt,L[_t]=X,tt=_t);else if(se<nt&&0>a(Xt,X))L[tt]=Xt,L[se]=X,tt=se;else break t}}return z}function a(L,z){var X=L.sortIndex-z.sortIndex;return X!==0?X:L.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],u=[],h=1,p=null,c=3,d=!1,S=!1,b=!1,_=!1,f=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function v(L){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=L)i(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function T(L){if(b=!1,v(L),!S)if(n(l)!==null)S=!0,A||(A=!0,O());else{var z=n(u);z!==null&&H(T,z.startTime-L)}}var A=!1,R=-1,m=5,E=-1;function w(){return _?!0:!(e.unstable_now()-E<m)}function D(){if(_=!1,A){var L=e.unstable_now();E=L;var z=!0;try{t:{S=!1,b&&(b=!1,g(R),R=-1),d=!0;var X=c;try{e:{for(v(L),p=n(l);p!==null&&!(p.expirationTime>L&&w());){var tt=p.callback;if(typeof tt=="function"){p.callback=null,c=p.priorityLevel;var nt=tt(p.expirationTime<=L);if(L=e.unstable_now(),typeof nt=="function"){p.callback=nt,v(L),z=!0;break e}p===n(l)&&i(l),v(L)}else i(l);p=n(l)}if(p!==null)z=!0;else{var ft=n(u);ft!==null&&H(T,ft.startTime-L),z=!1}}break t}finally{p=null,c=X,d=!1}z=void 0}}finally{z?O():A=!1}}}var O;if(typeof y=="function")O=function(){y(D)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,K=q.port2;q.port1.onmessage=D,O=function(){K.postMessage(null)}}else O=function(){f(D,0)};function H(L,z){R=f(function(){L(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_next=function(L){switch(c){case 1:case 2:case 3:var z=3;break;default:z=c}var X=c;c=z;try{return L()}finally{c=X}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=c;c=L;try{return z()}finally{c=X}},e.unstable_scheduleCallback=function(L,z,X){var tt=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?tt+X:tt):X=tt,L){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=X+nt,L={id:h++,callback:z,priorityLevel:L,startTime:X,expirationTime:nt,sortIndex:-1},X>tt?(L.sortIndex=X,t(u,L),n(l)===null&&L===n(u)&&(b?(g(R),R=-1):b=!0,H(T,X-tt))):(L.sortIndex=nt,t(l,L),S||d||(S=!0,A||(A=!0,O()))),L},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(L){var z=c;return function(){var X=c;c=z;try{return L.apply(this,arguments)}finally{c=X}}}})(e_);t_.exports=e_;var ey=t_.exports,n_={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=fi;function i_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _a(){}var vn={d:{f:_a,r:function(){throw Error(i_(522))},D:_a,C:_a,L:_a,m:_a,X:_a,S:_a,M:_a},p:0,findDOMNode:null},iy=Symbol.for("react.portal");function ay(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iy,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var _o=ny.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function iu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(i_(299));return ay(e,t,null,n)};Sn.flushSync=function(e){var t=_o.T,n=vn.p;try{if(_o.T=null,vn.p=2,e)return e()}finally{_o.T=t,vn.p=n,vn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,vn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&vn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?vn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&vn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=iu(t.as,t.crossOrigin);vn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&vn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin);vn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=iu(t.as,t.crossOrigin);vn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else vn.d.m(e)};Sn.requestFormReset=function(e){vn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return _o.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return _o.H.useHostTransitionStatus()};Sn.version="19.2.8";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(e){console.error(e)}}a_(),n_.exports=Sn;var sy=n_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=ey,s_=fi,ry=sy;function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gm(e){if(Zo(e)!==e)throw Error($(188))}function oy(e){var t=e.alternate;if(!t){if(t=Zo(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return gm(a),e;if(s===i)return gm(a),t;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function c_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=c_(e),t!==null)return t;e=e.sibling}return null}var Ee=Object.assign,ly=Symbol.for("react.element"),dl=Symbol.for("react.transitional.element"),co=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),u_=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),f_=Symbol.for("react.consumer"),ji=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),Zf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),ba=Symbol.for("react.lazy"),jf=Symbol.for("react.activity"),cy=Symbol.for("react.memo_cache_sentinel"),_m=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=_m&&e[_m]||e["@@iterator"],typeof e=="function"?e:null)}var uy=Symbol.for("react.client.reference");function Qf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===uy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case Yf:return"Profiler";case u_:return"StrictMode";case Zf:return"Suspense";case Kf:return"SuspenseList";case jf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case co:return"Portal";case ji:return e.displayName||"Context";case f_:return(e._context.displayName||"Context")+".Consumer";case Bd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fd:return t=e.displayName||null,t!==null?t:Qf(e.type)||"Memo";case ba:t=e._payload,e=e._init;try{return Qf(e(t))}catch{}}return null}var uo=Array.isArray,wt=s_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=ry.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_s={pending:!1,data:null,method:null,action:null},Jf=[],ir=-1;function Pi(e){return{current:e}}function en(e){0>ir||(e.current=Jf[ir],Jf[ir]=null,ir--)}function xe(e,t){ir++,Jf[ir]=e.current,e.current=t}var wi=Pi(null),Uo=Pi(null),Ba=Pi(null),xc=Pi(null);function Sc(e,t){switch(xe(Ba,t),xe(Uo,e),xe(wi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=E0(t),e=Ux(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(wi),xe(wi,e)}function br(){en(wi),en(Uo),en(Ba)}function $f(e){e.memoizedState!==null&&xe(xc,e);var t=wi.current,n=Ux(t,e.type);t!==n&&(xe(Uo,e),xe(wi,n))}function yc(e){Uo.current===e&&(en(wi),en(Uo)),xc.current===e&&(en(xc),Vo._currentValue=_s)}var Ru,vm;function os(e){if(Ru===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ru=t&&t[1]||"",vm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ru+e+vm}var Cu=!1;function wu(e,t){if(!e||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var c=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){c=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){c=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&c&&typeof d.stack=="string")return[d.stack,c.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?os(n):""}function fy(e,t){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return e.child!==t&&t!==null?os("Suspense Fallback"):os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return wu(e.type,!1);case 11:return wu(e.type.render,!1);case 1:return wu(e.type,!0);case 31:return os("Activity");default:return""}}function xm(e){try{var t="",n=null;do t+=fy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var th=Object.prototype.hasOwnProperty,Hd=Ye.unstable_scheduleCallback,Du=Ye.unstable_cancelCallback,hy=Ye.unstable_shouldYield,dy=Ye.unstable_requestPaint,Hn=Ye.unstable_now,py=Ye.unstable_getCurrentPriorityLevel,h_=Ye.unstable_ImmediatePriority,d_=Ye.unstable_UserBlockingPriority,Mc=Ye.unstable_NormalPriority,my=Ye.unstable_LowPriority,p_=Ye.unstable_IdlePriority,gy=Ye.log,_y=Ye.unstable_setDisableYieldValue,Ko=null,Gn=null;function Na(e){if(typeof gy=="function"&&_y(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(Ko,e)}catch{}}var Vn=Math.clz32?Math.clz32:Sy,vy=Math.log,xy=Math.LN2;function Sy(e){return e>>>=0,e===0?32:31-(vy(e)/xy|0)|0}var pl=256,ml=262144,gl=4194304;function ls(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function au(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ls(i):(r&=o,r!==0?a=ls(r):n||(n=o&~e,n!==0&&(a=ls(n))))):(o=i&~s,o!==0?a=ls(o):r!==0?a=ls(r):n||(n=i&~e,n!==0&&(a=ls(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m_(){var e=gl;return gl<<=1,!(gl&62914560)&&(gl=4194304),e}function Uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function My(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Vn(n),p=1<<h;o[h]=0,l[h]=-1;var c=u[h];if(c!==null)for(u[h]=null,h=0;h<c.length;h++){var d=c[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&g_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function g_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Vn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function __(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Vn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function v_(e,t){var n=t&-t;return n=n&42?1:Gd(n),n&(e.suspendedLanes|t)?0:n}function Gd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function x_(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Vx(e.type))}function Sm(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var $a=Math.random().toString(36).slice(2),rn="__reactFiber$"+$a,Dn="__reactProps$"+$a,Hr="__reactContainer$"+$a,eh="__reactEvents$"+$a,Ey="__reactListeners$"+$a,by="__reactHandles$"+$a,ym="__reactResources$"+$a,Jo="__reactMarker$"+$a;function kd(e){delete e[rn],delete e[Dn],delete e[eh],delete e[Ey],delete e[by]}function ar(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hr]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=C0(e);e!==null;){if(n=e[rn])return n;e=C0(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){if(e=e[rn]||e[Hr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function pr(e){var t=e[ym];return t||(t=e[ym]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[Jo]=!0}var S_=new Set,y_={};function ws(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(y_[e]=t,e=0;e<t.length;e++)S_.add(t[e])}var Ty=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mm={},Em={};function Ay(e){return th.call(Em,e)?!0:th.call(Mm,e)?!1:Ty.test(e)?Em[e]=!0:(Mm[e]=!0,!1)}function Jl(e,t,n){if(Ay(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function _l(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ii(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ry(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nh(e){if(!e._valueTracker){var t=M_(e)?"checked":"value";e._valueTracker=Ry(e,t,""+e[t])}}function E_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=M_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ec(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cy=/[\n"\\]/g;function ti(e){return e.replace(Cy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ih(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jn(t)):e.value!==""+jn(t)&&(e.value=""+jn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ah(e,r,jn(t)):n!=null?ah(e,r,jn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+jn(o):e.removeAttribute("name")}function b_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){nh(e);return}n=n!=null?""+jn(n):"",t=t!=null?""+jn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),nh(e)}function ah(e,t,n){t==="number"&&Ec(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function T_(e,t,n){if(t!=null&&(t=""+jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jn(n):""}function A_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(uo(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=jn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),nh(e)}function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||wy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function R_(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&bm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&bm(e,s,t[s])}function Xd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return Uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var sh=null;function Wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,gr=null;function Tm(e){var t=Gr(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(ih(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error($(90));ih(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&E_(i)}break t;case"textarea":T_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var Nu=!1;function C_(e,t,n){if(Nu)return e(t,n);Nu=!0;try{var i=e(t);return i}finally{if(Nu=!1,(sr!==null||gr!==null)&&(gu(),sr&&(t=sr,e=gr,gr=sr=null,Tm(t),e)))for(t=0;t<e.length;t++)Tm(e[t])}}function No(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=!1;if(ra)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){rh=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{rh=!1}var La=null,qd=null,tc=null;function w_(){if(tc)return tc;var e,t=qd,n=t.length,i,a="value"in La?La.value:La.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return tc=a.slice(e,1<i?1-i:void 0)}function ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Am(){return!1}function Un(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:Am,this.isPropagationStopped=Am,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),t}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=Un(Ds),$o=Ee({},Ds,{view:0,detail:0}),Ny=Un($o),Lu,Ou,Qr,ru=Ee({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Lu=e.screenX-Qr.screenX,Ou=e.screenY-Qr.screenY):Ou=Lu=0,Qr=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Rm=Un(ru),Ly=Ee({},ru,{dataTransfer:0}),Oy=Un(Ly),Py=Ee({},$o,{relatedTarget:0}),Pu=Un(Py),zy=Ee({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=Un(zy),By=Ee({},Ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=Un(By),Hy=Ee({},Ds,{data:0}),Cm=Un(Hy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ky[e])?!!t[e]:!1}function Yd(){return Xy}var Wy=Ee({},$o,{key:function(e){if(e.key){var t=Gy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yd,charCode:function(e){return e.type==="keypress"?ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qy=Un(Wy),Yy=Ee({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=Un(Yy),Zy=Ee({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yd}),Ky=Un(Zy),jy=Ee({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Un(jy),Jy=Ee({},ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=Un(Jy),tM=Ee({},Ds,{newState:0,oldState:0}),eM=Un(tM),nM=[9,13,27,32],Zd=ra&&"CompositionEvent"in window,vo=null;ra&&"documentMode"in document&&(vo=document.documentMode);var iM=ra&&"TextEvent"in window&&!vo,D_=ra&&(!Zd||vo&&8<vo&&11>=vo),Dm=String.fromCharCode(32),Um=!1;function U_(e,t){switch(e){case"keyup":return nM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function aM(e,t){switch(e){case"compositionend":return N_(t);case"keypress":return t.which!==32?null:(Um=!0,Dm);case"textInput":return e=t.data,e===Dm&&Um?null:e;default:return null}}function sM(e,t){if(rr)return e==="compositionend"||!Zd&&U_(e,t)?(e=w_(),tc=qd=La=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return D_&&t.locale!=="ko"?null:t.data;default:return null}}var rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rM[e.type]:t==="textarea"}function L_(e,t,n,i){sr?gr?gr.push(i):gr=[i]:sr=i,t=Gc(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xo=null,Lo=null;function oM(e){Cx(e,0)}function ou(e){var t=fo(e);if(E_(t))return e}function Lm(e,t){if(e==="change")return t}var O_=!1;if(ra){var zu;if(ra){var Iu="oninput"in document;if(!Iu){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),Iu=typeof Om.oninput=="function"}zu=Iu}else zu=!1;O_=zu&&(!document.documentMode||9<document.documentMode)}function Pm(){xo&&(xo.detachEvent("onpropertychange",P_),Lo=xo=null)}function P_(e){if(e.propertyName==="value"&&ou(Lo)){var t=[];L_(t,Lo,e,Wd(e)),C_(oM,t)}}function lM(e,t,n){e==="focusin"?(Pm(),xo=t,Lo=n,xo.attachEvent("onpropertychange",P_)):e==="focusout"&&Pm()}function cM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(Lo)}function uM(e,t){if(e==="click")return ou(t)}function fM(e,t){if(e==="input"||e==="change")return ou(t)}function hM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xn=typeof Object.is=="function"?Object.is:hM;function Oo(e,t){if(Xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!th.call(t,a)||!Xn(e[a],t[a]))return!1}return!0}function zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Im(e,t){var n=zm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=zm(n)}}function z_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ec(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ec(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dM=ra&&"documentMode"in document&&11>=document.documentMode,or=null,oh=null,So=null,lh=!1;function Bm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||or==null||or!==Ec(i)||(i=or,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),So&&Oo(So,i)||(So=i,i=Gc(oh,"onSelect"),0<i.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=or)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},Bu={},B_={};ra&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Us(e){if(Bu[e])return Bu[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B_)return Bu[e]=t[n];return e}var F_=Us("animationend"),H_=Us("animationiteration"),G_=Us("animationstart"),pM=Us("transitionrun"),mM=Us("transitionstart"),gM=Us("transitioncancel"),V_=Us("transitionend"),k_=new Map,ch="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ch.push("scrollEnd");function mi(e,t){k_.set(e,t),ws(t,[e])}var bc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],cr=0,jd=0;function lu(){for(var e=cr,t=jd=cr=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var a=Zn[t];Zn[t++]=null;var s=Zn[t];if(Zn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&X_(n,a,s)}}function cu(e,t,n,i){Zn[cr++]=e,Zn[cr++]=t,Zn[cr++]=n,Zn[cr++]=i,jd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Qd(e,t,n,i){return cu(e,t,n,i),Tc(e)}function Ns(e,t){return cu(e,null,null,t),Tc(e)}function X_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Vn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tc(e){if(50<wo)throw wo=0,Dh=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ur={};function _M(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,t,n,i){return new _M(e,t,n,i)}function Jd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,t){var n=e.alternate;return n===null?(n=In(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function W_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Jd(e)&&(r=1);else if(typeof e=="string")r=M1(e,n,wi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case jf:return e=In(31,n,t,a),e.elementType=jf,e.lanes=s,e;case nr:return vs(n.children,a,s,t);case u_:r=8,a|=24;break;case Yf:return e=In(12,n,t,a|2),e.elementType=Yf,e.lanes=s,e;case Zf:return e=In(13,n,t,a),e.elementType=Zf,e.lanes=s,e;case Kf:return e=In(19,n,t,a),e.elementType=Kf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ji:r=10;break t;case f_:r=9;break t;case Bd:r=11;break t;case Fd:r=14;break t;case ba:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=In(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function vs(e,t,n,i){return e=In(7,e,i,t),e.lanes=n,e}function Fu(e,t,n){return e=In(6,e,null,t),e.lanes=n,e}function q_(e){var t=In(18,null,null,0);return t.stateNode=e,t}function Hu(e,t,n){return t=In(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fm=new WeakMap;function ei(e,t){if(typeof e=="object"&&e!==null){var n=Fm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:xm(t)},Fm.set(e,t),t)}return{value:e,source:t,stack:xm(t)}}var fr=[],hr=0,Ac=null,Po=0,Qn=[],Jn=0,Ya=null,bi=1,Ti="";function Zi(e,t){fr[hr++]=Po,fr[hr++]=Ac,Ac=e,Po=t}function Y_(e,t,n){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=Ya,Ya=e;var i=bi;e=Ti;var a=32-Vn(i)-1;i&=~(1<<a),n+=1;var s=32-Vn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,bi=1<<32-Vn(t)+a|n<<a|i,Ti=s+e}else bi=1<<s|n<<a|i,Ti=e}function $d(e){e.return!==null&&(Zi(e,1),Y_(e,1,0))}function tp(e){for(;e===Ac;)Ac=fr[--hr],fr[hr]=null,Po=fr[--hr],fr[hr]=null;for(;e===Ya;)Ya=Qn[--Jn],Qn[Jn]=null,Ti=Qn[--Jn],Qn[Jn]=null,bi=Qn[--Jn],Qn[Jn]=null}function Z_(e,t){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=Ya,bi=t.id,Ti=t.overflow,Ya=e}var on=null,ye=null,Qt=!1,Fa=null,ni=!1,uh=Error($(519));function Za(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(ei(t,e)),uh}function Hm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[Dn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<Ho.length;n++)Vt(Ho[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),b_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),A_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Dx(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=Qi),t=!0):t=!1,t||Za(e,!0)}function Gm(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:on=on.return}}function Is(e){if(e!==on)return!1;if(!Qt)return Gm(e),Qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ph(e.type,e.memoizedProps)),n=!n),n&&ye&&Za(e),Gm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));ye=R0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));ye=R0(e)}else t===27?(t=ye,ts(e.type)?(e=Fh,Fh=null,ye=e):ye=t):ye=on?ai(e.stateNode.nextSibling):null;return!0}function Ms(){ye=on=null,Qt=!1}function Gu(){var e=Fa;return e!==null&&(An===null?An=e:An.push.apply(An,e),Fa=null),e}function zo(e){Fa===null?Fa=[e]:Fa.push(e)}var fh=Pi(null),Ls=null,Ji=null;function Aa(e,t,n){xe(fh,t._currentValue),t._currentValue=n}function na(e){e._currentValue=fh.current,en(fh)}function hh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function dh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),hh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error($(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),hh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Vr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=a.type;Xn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===xc.current){if(r=a.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}a=a.return}e!==null&&dh(t,e,n,i),t.flags|=262144}function Rc(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ls=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return K_(Ls,e)}function xl(e,t){return Ls===null&&Es(e),K_(e,t)}function K_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error($(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var vM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xM=Ye.unstable_scheduleCallback,SM=Ye.unstable_NormalPriority,ke={$$typeof:ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ep(){return{controller:new vM,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&xM(SM,function(){e.controller.abort()})}var yo=null,ph=0,Rr=0,_r=null;function yM(e,t){if(yo===null){var n=yo=[];ph=0,Rr=Ap(),_r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ph++,t.then(Vm,Vm),t}function Vm(){if(--ph===0&&yo!==null){_r!==null&&(_r.status="fulfilled");var e=yo;yo=null,Rr=0,_r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function MM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var km=wt.S;wt.S=function(e,t){cx=Hn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&yM(e,t),km!==null&&km(e,t)};var xs=Pi(null);function np(){var e=xs.current;return e!==null?e:ge.pooledCache}function ic(e,t){t===null?xe(xs,xs.current):xe(xs,t.pool)}function j_(){var e=np();return e===null?null:{parent:ke._currentValue,pool:e}}var kr=Error($(460)),ip=Error($(474)),uu=Error($(542)),Cc={then:function(){}};function Xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Q_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qm(e),e;default:if(typeof t.status=="string")t.then(Qi,Qi);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qm(e),e}throw Ss=t,kr}}function cs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ss=n,kr):n}}var Ss=null;function Wm(){if(Ss===null)throw Error($(459));var e=Ss;return Ss=null,e}function qm(e){if(e===kr||e===uu)throw Error($(483))}var vr=null,Io=0;function Sl(e){var t=Io;return Io+=1,vr===null&&(vr=[]),Q_(vr,e,t)}function Jr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yl(e,t){throw t.$$typeof===ly?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function J_(e){function t(f,g){if(e){var y=f.deletions;y===null?(f.deletions=[g],f.flags|=16):y.push(g)}}function n(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(f,g){return f=ea(f,g),f.index=0,f.sibling=null,f}function s(f,g,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<g?(f.flags|=67108866,g):y):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,g,y,v){return g===null||g.tag!==6?(g=Fu(y,f.mode,v),g.return=f,g):(g=a(g,y),g.return=f,g)}function l(f,g,y,v){var T=y.type;return T===nr?h(f,g,y.props.children,v,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ba&&cs(T)===g.type)?(g=a(g,y.props),Jr(g,y),g.return=f,g):(g=nc(y.type,y.key,y.props,null,f.mode,v),Jr(g,y),g.return=f,g)}function u(f,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Hu(y,f.mode,v),g.return=f,g):(g=a(g,y.children||[]),g.return=f,g)}function h(f,g,y,v,T){return g===null||g.tag!==7?(g=vs(y,f.mode,v,T),g.return=f,g):(g=a(g,y),g.return=f,g)}function p(f,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Fu(""+g,f.mode,y),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dl:return y=nc(g.type,g.key,g.props,null,f.mode,y),Jr(y,g),y.return=f,y;case co:return g=Hu(g,f.mode,y),g.return=f,g;case ba:return g=cs(g),p(f,g,y)}if(uo(g)||Kr(g))return g=vs(g,f.mode,y,null),g.return=f,g;if(typeof g.then=="function")return p(f,Sl(g),y);if(g.$$typeof===ji)return p(f,xl(f,g),y);yl(f,g)}return null}function c(f,g,y,v){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(f,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return y.key===T?l(f,g,y,v):null;case co:return y.key===T?u(f,g,y,v):null;case ba:return y=cs(y),c(f,g,y,v)}if(uo(y)||Kr(y))return T!==null?null:h(f,g,y,v,null);if(typeof y.then=="function")return c(f,g,Sl(y),v);if(y.$$typeof===ji)return c(f,g,xl(f,y),v);yl(f,y)}return null}function d(f,g,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(y)||null,o(g,f,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return f=f.get(v.key===null?y:v.key)||null,l(g,f,v,T);case co:return f=f.get(v.key===null?y:v.key)||null,u(g,f,v,T);case ba:return v=cs(v),d(f,g,y,v,T)}if(uo(v)||Kr(v))return f=f.get(y)||null,h(g,f,v,T,null);if(typeof v.then=="function")return d(f,g,y,Sl(v),T);if(v.$$typeof===ji)return d(f,g,y,xl(g,v),T);yl(g,v)}return null}function S(f,g,y,v){for(var T=null,A=null,R=g,m=g=0,E=null;R!==null&&m<y.length;m++){R.index>m?(E=R,R=null):E=R.sibling;var w=c(f,R,y[m],v);if(w===null){R===null&&(R=E);break}e&&R&&w.alternate===null&&t(f,R),g=s(w,g,m),A===null?T=w:A.sibling=w,A=w,R=E}if(m===y.length)return n(f,R),Qt&&Zi(f,m),T;if(R===null){for(;m<y.length;m++)R=p(f,y[m],v),R!==null&&(g=s(R,g,m),A===null?T=R:A.sibling=R,A=R);return Qt&&Zi(f,m),T}for(R=i(R);m<y.length;m++)E=d(R,f,m,y[m],v),E!==null&&(e&&E.alternate!==null&&R.delete(E.key===null?m:E.key),g=s(E,g,m),A===null?T=E:A.sibling=E,A=E);return e&&R.forEach(function(D){return t(f,D)}),Qt&&Zi(f,m),T}function b(f,g,y,v){if(y==null)throw Error($(151));for(var T=null,A=null,R=g,m=g=0,E=null,w=y.next();R!==null&&!w.done;m++,w=y.next()){R.index>m?(E=R,R=null):E=R.sibling;var D=c(f,R,w.value,v);if(D===null){R===null&&(R=E);break}e&&R&&D.alternate===null&&t(f,R),g=s(D,g,m),A===null?T=D:A.sibling=D,A=D,R=E}if(w.done)return n(f,R),Qt&&Zi(f,m),T;if(R===null){for(;!w.done;m++,w=y.next())w=p(f,w.value,v),w!==null&&(g=s(w,g,m),A===null?T=w:A.sibling=w,A=w);return Qt&&Zi(f,m),T}for(R=i(R);!w.done;m++,w=y.next())w=d(R,f,m,w.value,v),w!==null&&(e&&w.alternate!==null&&R.delete(w.key===null?m:w.key),g=s(w,g,m),A===null?T=w:A.sibling=w,A=w);return e&&R.forEach(function(O){return t(f,O)}),Qt&&Zi(f,m),T}function _(f,g,y,v){if(typeof y=="object"&&y!==null&&y.type===nr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:t:{for(var T=y.key;g!==null;){if(g.key===T){if(T=y.type,T===nr){if(g.tag===7){n(f,g.sibling),v=a(g,y.props.children),v.return=f,f=v;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ba&&cs(T)===g.type){n(f,g.sibling),v=a(g,y.props),Jr(v,y),v.return=f,f=v;break t}n(f,g);break}else t(f,g);g=g.sibling}y.type===nr?(v=vs(y.props.children,f.mode,v,y.key),v.return=f,f=v):(v=nc(y.type,y.key,y.props,null,f.mode,v),Jr(v,y),v.return=f,f=v)}return r(f);case co:t:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(f,g.sibling),v=a(g,y.children||[]),v.return=f,f=v;break t}else{n(f,g);break}else t(f,g);g=g.sibling}v=Hu(y,f.mode,v),v.return=f,f=v}return r(f);case ba:return y=cs(y),_(f,g,y,v)}if(uo(y))return S(f,g,y,v);if(Kr(y)){if(T=Kr(y),typeof T!="function")throw Error($(150));return y=T.call(y),b(f,g,y,v)}if(typeof y.then=="function")return _(f,g,Sl(y),v);if(y.$$typeof===ji)return _(f,g,xl(f,y),v);yl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(f,g.sibling),v=a(g,y),v.return=f,f=v):(n(f,g),v=Fu(y,f.mode,v),v.return=f,f=v),r(f)):n(f,g)}return function(f,g,y,v){try{Io=0;var T=_(f,g,y,v);return vr=null,T}catch(R){if(R===kr||R===uu)throw R;var A=In(29,R,null,f.mode);return A.lanes=v,A.return=f,A}finally{}}}var bs=J_(!0),$_=J_(!1),Ta=!1;function ap(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ie&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Tc(e),X_(e,null,n),t}return cu(e,i,t,n),Tc(e)}function Mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}function Vu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gh=!1;function Eo(){if(gh){var e=_r;if(e!==null)throw e}}function bo(e,t,n,i){gh=!1;var a=e.updateQueue;Ta=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=u=l=null,o=s;do{var c=o.lane&-536870913,d=c!==o.lane;if(d?(Yt&c)===c:(i&c)===c){c!==0&&c===Rr&&(gh=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=e,b=o;c=t;var _=n;switch(b.tag){case 1:if(S=b.payload,typeof S=="function"){p=S.call(_,p,c);break t}p=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,c=typeof S=="function"?S.call(_,p,c):S,c==null)break t;p=Ee({},p,c);break t;case 2:Ta=!0}}c=o.callback,c!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[c]:d.push(c))}else d={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=d,l=p):h=h.next=d,r|=c;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(1);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),ja|=r,e.lanes=r,e.memoizedState=p}}function tv(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function ev(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tv(n[e],t)}var Cr=Pi(null),wc=Pi(0);function Ym(e,t){e=ua,xe(wc,e),xe(Cr,t),ua=e|t.baseLanes}function _h(){xe(wc,ua),xe(Cr,Cr.current)}function sp(){ua=wc.current,en(Cr),en(wc)}var Wn=Pi(null),ii=null;function Ra(e){var t=e.alternate;xe(Pe,Pe.current&1),xe(Wn,e),ii===null&&(t===null||Cr.current!==null||t.memoizedState!==null)&&(ii=e)}function vh(e){xe(Pe,Pe.current),xe(Wn,e),ii===null&&(ii=e)}function nv(e){e.tag===22?(xe(Pe,Pe.current),xe(Wn,e),ii===null&&(ii=e)):Ca()}function Ca(){xe(Pe,Pe.current),xe(Wn,Wn.current)}function zn(e){en(Wn),ii===e&&(ii=null),en(Pe)}var Pe=Pi(0);function Dc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ih(n)||Bh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oa=0,Bt=null,he=null,Ge=null,Uc=!1,xr=!1,Ts=!1,Nc=0,Bo=0,Sr=null,EM=0;function we(){throw Error($(321))}function rp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function op(e,t,n,i,a,s){return oa=s,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wt.H=e===null||e.memoizedState===null?Lv:vp,Ts=!1,s=n(i,a),Ts=!1,xr&&(s=av(t,n,i,a)),iv(e),s}function iv(e){wt.H=Fo;var t=he!==null&&he.next!==null;if(oa=0,Ge=he=Bt=null,Uc=!1,Bo=0,Sr=null,t)throw Error($(300));e===null||Xe||(e=e.dependencies,e!==null&&Rc(e)&&(Xe=!0))}function av(e,t,n,i){Bt=e;var a=0;do{if(xr&&(Sr=null),Bo=0,xr=!1,25<=a)throw Error($(301));if(a+=1,Ge=he=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}wt.H=Ov,s=t(n,i)}while(xr);return s}function bM(){var e=wt.H,t=e.useState()[0];return t=typeof t.then=="function"?el(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(Bt.flags|=1024),t}function lp(){var e=Nc!==0;return Nc=0,e}function cp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function up(e){if(Uc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uc=!1}oa=0,Ge=he=Bt=null,xr=!1,Bo=Nc=0,Sr=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Bt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ze(){if(he===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Ge===null?Bt.memoizedState:Ge.next;if(t!==null)Ge=t,he=e;else{if(e===null)throw Bt.alternate===null?Error($(467)):Error($(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Ge===null?Bt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var t=Bo;return Bo+=1,Sr===null&&(Sr=[]),e=Q_(Sr,e,t),t=Bt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,wt.H=t===null||t.memoizedState===null?Lv:vp),e}function hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===ji)return ln(e)}throw Error($(438,String(e)))}function fp(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fu(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=cy;return t.index++,n}function la(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=ze();return hp(t,he,e)}function hp(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,u=t,h=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(Yt&p)===p:(oa&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Rr&&(h=!0);else if((oa&c)===c){u=u.next,c===Rr&&(h=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Bt.lanes|=c,ja|=c;p=u.action,Ts&&n(s,p),s=u.hasEagerState?u.eagerState:n(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Bt.lanes|=p,ja|=p;u=u.next}while(u!==null&&u!==t);if(l===null?r=s:l.next=o,!Xn(s,e.memoizedState)&&(Xe=!0,h&&(n=_r,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ku(e){var t=ze(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Xn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function sv(e,t,n){var i=Bt,a=ze(),s=Qt;if(s){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!Xn((he||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,dp(lv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,wr(9,{destroy:void 0},ov.bind(null,i,a,n,t),null),ge===null)throw Error($(349));s||oa&127||rv(i,t,n)}return n}function rv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=fu(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ov(e,t,n,i){t.value=n,t.getSnapshot=i,cv(t)&&uv(e)}function lv(e,t,n){return n(function(){cv(t)&&uv(e)})}function cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch{return!0}}function uv(e){var t=Ns(e,2);t!==null&&Cn(t,e,2)}function xh(e){var t=_n();if(typeof e=="function"){var n=e;if(e=n(),Ts){Na(!0);try{n()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function fv(e,t,n,i){return e.baseState=n,hp(e,he,typeof i=="function"?i:la)}function TM(e,t,n,i,a){if(pu(e))throw Error($(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};wt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,hv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function hv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=wt.T,r={};wt.T=r;try{var o=n(a,i),l=wt.S;l!==null&&l(r,o),Zm(e,t,o)}catch(u){Sh(e,t,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),wt.T=s}}else try{s=n(a,i),Zm(e,t,s)}catch(u){Sh(e,t,u)}}function Zm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Km(e,t,i)},function(i){return Sh(e,t,i)}):Km(e,t,n)}function Km(e,t,n){t.status="fulfilled",t.value=n,dv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hv(e,n)))}function Sh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,dv(t),t=t.next;while(t!==i)}e.action=null}function dv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pv(e,t){return t}function jm(e,t){if(Qt){var n=ge.formState;if(n!==null){t:{var i=Bt;if(Qt){if(ye){e:{for(var a=ye,s=ni;a.nodeType!==8;){if(!s){a=null;break e}if(a=ai(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){ye=ai(a.nextSibling),i=a.data==="F!";break t}}Za(i)}i=!1}i&&(t=n[0])}}return n=_n(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pv,lastRenderedState:t},n.queue=i,n=Dv.bind(null,Bt,i),i.dispatch=n,i=xh(!1),s=_p.bind(null,Bt,!1,i.queue),i=_n(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=TM.bind(null,Bt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Qm(e){var t=ze();return mv(t,he,e)}function mv(e,t,n){if(t=hp(e,t,pv)[0],e=ac(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=el(t)}catch(r){throw r===kr?uu:r}else i=t;t=ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,wr(9,{destroy:void 0},AM.bind(null,a,n),null)),[i,s,e]}function AM(e,t){e.action=t}function Jm(e){var t=ze(),n=he;if(n!==null)return mv(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=fu(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gv(){return ze().memoizedState}function sc(e,t,n,i){var a=_n();Bt.flags|=e,a.memoizedState=wr(1|t,{destroy:void 0},n,i===void 0?null:i)}function du(e,t,n,i){var a=ze();i=i===void 0?null:i;var s=a.memoizedState.inst;he!==null&&i!==null&&rp(i,he.memoizedState.deps)?a.memoizedState=wr(t,s,n,i):(Bt.flags|=e,a.memoizedState=wr(1|t,s,n,i))}function $m(e,t){sc(8390656,8,e,t)}function dp(e,t){du(2048,8,e,t)}function RM(e){Bt.flags|=4;var t=Bt.updateQueue;if(t===null)t=fu(),Bt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _v(e){var t=ze().memoizedState;return RM({ref:t,nextImpl:e}),function(){if(ie&2)throw Error($(440));return t.impl.apply(void 0,arguments)}}function vv(e,t){return du(4,2,e,t)}function xv(e,t){return du(4,4,e,t)}function Sv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yv(e,t,n){n=n!=null?n.concat([e]):null,du(4,4,Sv.bind(null,t,e),n)}function pp(){}function Mv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&rp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ev(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&rp(t,i[1]))return i[0];if(i=e(),Ts){Na(!0);try{e()}finally{Na(!1)}}return n.memoizedState=[i,t],i}function mp(e,t,n){return n===void 0||oa&1073741824&&!(Yt&261930)?e.memoizedState=t:(e.memoizedState=n,e=fx(),Bt.lanes|=e,ja|=e,n)}function bv(e,t,n,i){return Xn(n,t)?n:Cr.current!==null?(e=mp(e,n,i),Xn(e,t)||(Xe=!0),e):!(oa&42)||oa&1073741824&&!(Yt&261930)?(Xe=!0,e.memoizedState=n):(e=fx(),Bt.lanes|=e,ja|=e,t)}function Tv(e,t,n,i,a){var s=ae.p;ae.p=s!==0&&8>s?s:8;var r=wt.T,o={};wt.T=o,_p(e,!1,t,n);try{var l=a(),u=wt.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=MM(l,i);To(e,t,h,kn(e))}else To(e,t,i,kn(e))}catch(p){To(e,t,{then:function(){},status:"rejected",reason:p},kn())}finally{ae.p=s,r!==null&&o.types!==null&&(r.types=o.types),wt.T=r}}function CM(){}function yh(e,t,n,i){if(e.tag!==5)throw Error($(476));var a=Av(e).queue;Tv(e,a,t,_s,n===null?CM:function(){return Rv(e),n(i)})}function Av(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_s,baseState:_s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:_s},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rv(e){var t=Av(e);t.next===null&&(t=e.alternate.memoizedState),To(e,t.next.queue,{},kn())}function gp(){return ln(Vo)}function Cv(){return ze().memoizedState}function wv(){return ze().memoizedState}function wM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kn();e=Ha(n);var i=Ga(t,e,n);i!==null&&(Cn(i,t,n),Mo(i,t,n)),t={cache:ep()},e.payload=t;return}t=t.return}}function DM(e,t,n){var i=kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pu(e)?Uv(t,n):(n=Qd(e,t,n,i),n!==null&&(Cn(n,e,i),Nv(n,t,i)))}function Dv(e,t,n){var i=kn();To(e,t,n,i)}function To(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pu(e))Uv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Xn(o,r))return cu(e,t,a,0),ge===null&&lu(),!1}catch{}finally{}if(n=Qd(e,t,a,i),n!==null)return Cn(n,e,i),Nv(n,t,i),!0}return!1}function _p(e,t,n,i){if(i={lane:2,revertLane:Ap(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},pu(e)){if(t)throw Error($(479))}else t=Qd(e,n,i,2),t!==null&&Cn(t,e,2)}function pu(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function Uv(e,t){xr=Uc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}var Fo={readContext:ln,use:hu,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Fo.useEffectEvent=we;var Lv={readContext:ln,use:hu,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:$m,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sc(4194308,4,Sv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var n=_n();t=t===void 0?null:t;var i=e();if(Ts){Na(!0);try{e()}finally{Na(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=_n();if(n!==void 0){var a=n(t);if(Ts){Na(!0);try{n(t)}finally{Na(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=DM.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:function(e){e=xh(e);var t=e.queue,n=Dv.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:pp,useDeferredValue:function(e,t){var n=_n();return mp(n,e,t)},useTransition:function(){var e=xh(!1);return e=Tv.bind(null,Bt,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,a=_n();if(Qt){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ge===null)throw Error($(349));Yt&127||rv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,$m(lv.bind(null,i,s,e),[e]),i.flags|=2048,wr(9,{destroy:void 0},ov.bind(null,i,s,n,t),null),n},useId:function(){var e=_n(),t=ge.identifierPrefix;if(Qt){var n=Ti,i=bi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Nc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=EM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gp,useFormState:jm,useActionState:jm,useOptimistic:function(e){var t=_n();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_p.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:fp,useCacheRefresh:function(){return _n().memoizedState=wM.bind(null,Bt)},useEffectEvent:function(e){var t=_n(),n={impl:e};return t.memoizedState=n,function(){if(ie&2)throw Error($(440));return n.impl.apply(void 0,arguments)}}},vp={readContext:ln,use:hu,useCallback:Mv,useContext:ln,useEffect:dp,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:Ev,useReducer:ac,useRef:gv,useState:function(){return ac(la)},useDebugValue:pp,useDeferredValue:function(e,t){var n=ze();return bv(n,he.memoizedState,e,t)},useTransition:function(){var e=ac(la)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:sv,useId:Cv,useHostTransitionStatus:gp,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,t){var n=ze();return fv(n,he,e,t)},useMemoCache:fp,useCacheRefresh:wv};vp.useEffectEvent=_v;var Ov={readContext:ln,use:hu,useCallback:Mv,useContext:ln,useEffect:dp,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:Ev,useReducer:ku,useRef:gv,useState:function(){return ku(la)},useDebugValue:pp,useDeferredValue:function(e,t){var n=ze();return he===null?mp(n,e,t):bv(n,he.memoizedState,e,t)},useTransition:function(){var e=ku(la)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:sv,useId:Cv,useHostTransitionStatus:gp,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,t){var n=ze();return he!==null?fv(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fp,useCacheRefresh:wv};Ov.useEffectEvent=_v;function Xu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kn(),a=Ha(i);a.payload=t,n!=null&&(a.callback=n),t=Ga(e,a,i),t!==null&&(Cn(t,e,i),Mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kn(),a=Ha(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ga(e,a,i),t!==null&&(Cn(t,e,i),Mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kn(),i=Ha(n);i.tag=2,t!=null&&(i.callback=t),t=Ga(e,i,n),t!==null&&(Cn(t,e,n),Mo(t,e,n))}};function t0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,i)||!Oo(a,s):!0}function e0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Mh.enqueueReplaceState(t,t.state,null)}function As(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ee({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Pv(e){bc(e)}function zv(e){console.error(e)}function Iv(e){bc(e)}function Lc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function n0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Eh(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Lc(e,t)},n}function Bv(e){return e=Ha(e),e.tag=3,e}function Fv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){n0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){n0(t,n,i),typeof a!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function UM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Vr(t,n,a,!0),n=Wn.current,n!==null){switch(n.tag){case 31:case 13:return ii===null?Bc():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ef(e,i,a)),!1;case 22:return n.flags|=65536,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ef(e,i,a)),!1}throw Error($(435,n.tag))}return ef(e,i,a),Bc(),!1}if(Qt)return t=Wn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==uh&&(e=Error($(422),{cause:i}),zo(ei(e,n)))):(i!==uh&&(t=Error($(423),{cause:i}),zo(ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ei(i,n),a=Eh(e.stateNode,i,a),Vu(e,a),De!==4&&(De=2)),!1;var s=Error($(520),{cause:i});if(s=ei(s,n),Co===null?Co=[s]:Co.push(s),De!==4&&(De=2),t===null)return!0;i=ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Eh(n.stateNode,i,e),Vu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Va===null||!Va.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Bv(a),Fv(a,e,n,i),Vu(n,a),!1}n=n.return}while(n!==null);return!1}var xp=Error($(461)),Xe=!1;function sn(e,t,n,i){t.child=e===null?$_(t,null,n,i):bs(t,e.child,n,i)}function i0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Es(t),i=op(e,t,n,r,s,a),o=lp(),e!==null&&!Xe?(cp(e,t,a),ca(e,t,a)):(Qt&&o&&$d(t),t.flags|=1,sn(e,t,i,a),t.child)}function a0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Hv(e,t,s,i,a)):(e=nc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Sp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(r,i)&&e.ref===t.ref)return ca(e,t,a)}return t.flags|=1,e=ea(s,i),e.ref=t.ref,e.return=t,t.child=e}function Hv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Oo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Sp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,ca(e,t,a)}return bh(e,t,n,i,a)}function Gv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return s0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(t,s!==null?s.cachePool:null),s!==null?Ym(t,s):_h(),nv(t);else return i=t.lanes=536870912,s0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ic(t,s.cachePool),Ym(t,s),Ca(),t.memoizedState=null):(e!==null&&ic(t,null),_h(),Ca());return sn(e,t,a,n),t.child}function ho(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function s0(e,t,n,i,a){var s=np();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ic(t,null),_h(),nv(t),e!==null&&Vr(e,t,i,!0),t.childLanes=a,null}function rc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function r0(e,t,n){return bs(t,e.child,null,n),e=rc(t,t.pendingProps),e.flags|=2,zn(t),t.memoizedState=null,e}function NM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Qt){if(i.mode==="hidden")return e=rc(t,i),t.lanes=536870912,ho(null,e);if(vh(t),(e=ye)?(e=Lx(e,ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=q_(e),n.return=t,t.child=n,on=t,ye=null)):e=null,e===null)throw Za(t);return t.lanes=536870912,null}return rc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(vh(t),a)if(t.flags&256)t.flags&=-257,t=r0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(Xe||Vr(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=ge,i!==null&&(r=v_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ns(e,r),Cn(i,e,r),xp;Bc(),t=r0(e,t,n)}else e=s.treeContext,ye=ai(r.nextSibling),on=t,Qt=!0,Fa=null,ni=!1,e!==null&&Z_(t,e),t=rc(t,i),t.flags|=4096;return t}return e=ea(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bh(e,t,n,i,a){return Es(t),n=op(e,t,n,i,void 0,a),i=lp(),e!==null&&!Xe?(cp(e,t,a),ca(e,t,a)):(Qt&&i&&$d(t),t.flags|=1,sn(e,t,n,a),t.child)}function o0(e,t,n,i,a,s){return Es(t),t.updateQueue=null,n=av(t,i,n,a),iv(e),i=lp(),e!==null&&!Xe?(cp(e,t,s),ca(e,t,s)):(Qt&&i&&$d(t),t.flags|=1,sn(e,t,n,s),t.child)}function l0(e,t,n,i,a){if(Es(t),t.stateNode===null){var s=ur,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Mh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ap(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):ur,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Mh.enqueueReplaceState(s,s.state,null),bo(t,i,s,a),Eo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=As(n,o);s.props=l;var u=s.context,h=n.contextType;r=ur,typeof h=="object"&&h!==null&&(r=ln(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&e0(t,s,i,r),Ta=!1;var c=t.memoizedState;s.state=c,bo(t,i,s,a),Eo(),u=t.memoizedState,o||c!==u||Ta?(typeof p=="function"&&(Xu(t,n,p,i),u=t.memoizedState),(l=Ta||t0(t,n,l,i,c,u,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),s.props=i,s.state=u,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,mh(e,t),r=t.memoizedProps,h=As(n,r),s.props=h,p=t.pendingProps,c=s.context,u=n.contextType,l=ur,typeof u=="object"&&u!==null&&(l=ln(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&e0(t,s,i,l),Ta=!1,c=t.memoizedState,s.state=c,bo(t,i,s,a),Eo();var d=t.memoizedState;r!==p||c!==d||Ta||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof o=="function"&&(Xu(t,n,o,i),d=t.memoizedState),(h=Ta||t0(t,n,h,i,c,d,l)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,oc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=bs(t,e.child,null,a),t.child=bs(t,null,n,a)):sn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ca(e,t,a),e}function c0(e,t,n,i){return Ms(),t.flags|=256,sn(e,t,n,i),t.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:j_()}}function Yu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Fn),e}function Vv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Qt){if(a?Ra(t):Ca(),(e=ye)?(e=Lx(e,ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=q_(e),n.return=t,t.child=n,on=t,ye=null)):e=null,e===null)throw Za(t);return Bh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ca(),a=t.mode,o=Oc({mode:"hidden",children:o},a),i=vs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=qu(n),i.childLanes=Yu(e,r,n),t.memoizedState=Wu,ho(null,i)):(Ra(t),Th(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ra(t),t.flags&=-257,t=Zu(e,t,n)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,t=null):(Ca(),o=i.fallback,a=t.mode,i=Oc({mode:"visible",children:i.children},a),o=vs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,bs(t,e.child,null,n),i=t.child,i.memoizedState=qu(n),i.childLanes=Yu(e,r,n),t.memoizedState=Wu,t=ho(null,i));else if(Ra(t),Bh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,i=Error($(419)),i.stack="",i.digest=r,zo({value:i,source:null,stack:null}),t=Zu(e,t,n)}else if(Xe||Vr(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=ge,r!==null&&(i=v_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ns(e,i),Cn(r,e,i),xp;Ih(o)||Bc(),t=Zu(e,t,n)}else Ih(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=ai(o.nextSibling),on=t,Qt=!0,Fa=null,ni=!1,e!==null&&Z_(t,e),t=Th(t,i.children),t.flags|=4096);return t}return a?(Ca(),o=i.fallback,a=t.mode,l=e.child,u=l.sibling,i=ea(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=ea(u,o):(o=vs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,ho(null,i),i=t.child,o=e.child.memoizedState,o===null?o=qu(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=j_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Yu(e,r,n),t.memoizedState=Wu,ho(e.child,i)):(Ra(t),n=e.child,e=n.sibling,n=ea(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Th(e,t){return t=Oc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=In(22,e,null,t),e.lanes=0,e}function Zu(e,t,n){return bs(t,e.child,null,n),e=Th(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),hh(e.return,t,n)}function Ku(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function kv(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Pe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,xe(Pe,r),sn(e,t,i,n),i=Qt?Po:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u0(e,n,t);else if(e.tag===19)u0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Dc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ku(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Dc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ku(t,!0,n,null,s,i);break;case"together":Ku(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ca(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,!(n&t.childLanes))if(e!==null){if(Vr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ea(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ea(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function LM(e,t,n){switch(t.tag){case 3:Sc(t,t.stateNode.containerInfo),Aa(t,ke,e.memoizedState.cache),Ms();break;case 27:case 5:$f(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:Aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ra(t),t.flags|=128,null):n&t.child.childLanes?Vv(e,t,n):(Ra(t),e=ca(e,t,n),e!==null?e.sibling:null);Ra(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Vr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return kv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(Pe,Pe.current),i)break;return null;case 22:return t.lanes=0,Gv(e,t,n,t.pendingProps);case 24:Aa(t,ke,e.memoizedState.cache)}return ca(e,t,n)}function Xv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Sp(e,n)&&!(t.flags&128))return Xe=!1,LM(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,Qt&&t.flags&1048576&&Y_(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=cs(t.elementType),t.type=e,typeof e=="function")Jd(e)?(i=As(e,i),t.tag=1,t=l0(null,t,e,i,n)):(t.tag=0,t=bh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Bd){t.tag=11,t=i0(null,t,e,i,n);break t}else if(a===Fd){t.tag=14,t=a0(null,t,e,i,n);break t}}throw t=Qf(e)||e,Error($(306,t,""))}}return t;case 0:return bh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=As(i,t.pendingProps),l0(e,t,i,a,n);case 3:t:{if(Sc(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,mh(e,t),bo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Aa(t,ke,i),i!==s.cache&&dh(t,[ke],n,!0),Eo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=c0(e,t,i,n);break t}else if(i!==a){a=ei(Error($(424)),t),zo(a),t=c0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ai(e.firstChild),on=t,Qt=!0,Fa=null,ni=!0,n=$_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ms(),i===a){t=ca(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return oc(e,t),e===null?(n=D0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qt||(n=t.type,e=t.pendingProps,i=Vc(Ba.current).createElement(n),i[rn]=t,i[Dn]=e,un(i,n,e),tn(i),t.stateNode=i):t.memoizedState=D0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $f(t),e===null&&Qt&&(i=t.stateNode=Ox(t.type,t.pendingProps,Ba.current),on=t,ni=!0,a=ye,ts(t.type)?(Fh=a,ye=ai(i.firstChild)):ye=a),sn(e,t,t.pendingProps.children,n),oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Qt&&((a=i=ye)&&(i=c1(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,on=t,ye=ai(i.firstChild),ni=!1,a=!0):a=!1),a||Za(t)),$f(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Ph(a,s)?i=null:r!==null&&Ph(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=op(e,t,bM,null,null,n),Vo._currentValue=a),oc(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&Qt&&((e=n=ye)&&(n=u1(n,t.pendingProps,ni),n!==null?(t.stateNode=n,on=t,ye=null,e=!0):e=!1),e||Za(t)),null;case 13:return Vv(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=bs(t,null,i,n):sn(e,t,i,n),t.child;case 11:return i0(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Aa(t,t.type,i.value),sn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Es(t),a=ln(a),i=i(a),t.flags|=1,sn(e,t,i,n),t.child;case 14:return a0(e,t,t.type,t.pendingProps,n);case 15:return Hv(e,t,t.type,t.pendingProps,n);case 19:return kv(e,t,n);case 31:return NM(e,t,n);case 22:return Gv(e,t,n,t.pendingProps);case 24:return Es(t),i=ln(ke),e===null?(a=np(),a===null&&(a=ge,s=ep(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},ap(t),Aa(t,ke,a)):(e.lanes&n&&(mh(e,t),bo(t,null,null,n),Eo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Aa(t,ke,i)):(i=s.cache,Aa(t,ke,i),i!==a.cache&&dh(t,[ke],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function Bi(e){e.flags|=4}function ju(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(px())e.flags|=8192;else throw Ss=Cc,ip}else e.flags&=-16777217}function f0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ix(t))if(px())e.flags|=8192;else throw Ss=Cc,ip}function Ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?m_():536870912,e.lanes|=t,Dr|=t)}function $r(e,t){if(!Qt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function OM(e,t,n){var i=t.pendingProps;switch(tp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),na(ke),br(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Is(t)?Bi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gu())),Se(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Bi(t),s!==null?(Se(t),f0(t,s)):(Se(t),ju(t,a,null,i,n))):s?s!==e.memoizedState?(Bi(t),Se(t),f0(t,s)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bi(t),Se(t),ju(t,a,e,i,n)),null;case 27:if(yc(t),n=Ba.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Se(t),null}e=wi.current,Is(t)?Hm(t):(e=Ox(a,i,n),t.stateNode=e,Bi(t))}return Se(t),null;case 5:if(yc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Se(t),null}if(s=wi.current,Is(t))Hm(t);else{var r=Vc(Ba.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[rn]=t,s[Dn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(un(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Bi(t)}}return Se(t),ju(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=Ba.current,Is(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Dx(e.nodeValue,n)),e||Za(t,!0)}else e=Vc(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Is(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[rn]=t}else Ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zn(t),t):(zn(t),null);if(t.flags&128)throw Error($(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Is(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error($(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error($(317));a[rn]=t}else Ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(zn(t),t):(zn(t),null)}return zn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ml(t,t.updateQueue),Se(t),null);case 4:return br(),e===null&&Rp(t.stateNode.containerInfo),Se(t),null;case 10:return na(t.type),Se(t),null;case 19:if(en(Pe),i=t.memoizedState,i===null)return Se(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)$r(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Dc(e),s!==null){for(t.flags|=128,$r(i,!1),e=s.updateQueue,t.updateQueue=e,Ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)W_(n,e),n=n.sibling;return xe(Pe,Pe.current&1|2),Qt&&Zi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Hn()>zc&&(t.flags|=128,a=!0,$r(i,!1),t.lanes=4194304)}else{if(!a)if(e=Dc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ml(t,e),$r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Qt)return Se(t),null}else 2*Hn()-i.renderingStartTime>zc&&n!==536870912&&(t.flags|=128,a=!0,$r(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Hn(),e.sibling=null,n=Pe.current,xe(Pe,a?n&1|2:n&1),Qt&&Zi(t,i.treeForkCount),e):(Se(t),null);case 22:case 23:return zn(t),sp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&Ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(xs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(ke),Se(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function PM(e,t){switch(tp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(ke),br(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yc(t),null;case 31:if(t.memoizedState!==null){if(zn(t),t.alternate===null)throw Error($(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(Pe),null;case 4:return br(),null;case 10:return na(t.type),null;case 22:case 23:return zn(t),sp(),e!==null&&en(xs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(ke),null;case 25:return null;default:return null}}function Wv(e,t){switch(tp(t),t.tag){case 3:na(ke),br();break;case 26:case 27:case 5:yc(t);break;case 4:br();break;case 31:t.memoizedState!==null&&zn(t);break;case 13:zn(t);break;case 19:en(Pe);break;case 10:na(t.type);break;case 22:case 23:zn(t),sp(),e!==null&&en(xs);break;case 24:na(ke)}}function nl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ce(t,t.return,o)}}function Ka(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,u=o;try{u()}catch(h){ce(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){ce(t,t.return,h)}}function qv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ev(t,n)}catch(i){ce(e,e.return,i)}}}function Yv(e,t,n){n.props=As(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Ao(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ce(e,t,a)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ce(e,t,a)}else n.current=null}function Zv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ce(e,e.return,a)}}function Qu(e,t,n){try{var i=e.stateNode;i1(i,e.type,n,t),i[Dn]=t}catch(a){ce(e,e.return,a)}}function Kv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ah(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(i!==4&&(i===27&&ts(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ah(e,t,n),e=e.sibling;e!==null;)Ah(e,t,n),e=e.sibling}function Pc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ts(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}function jv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);un(t,i,n),t[rn]=e,t[Dn]=n}catch(s){ce(e,e.return,s)}}var Ki=!1,Ve=!1,$u=!1,h0=typeof WeakSet=="function"?WeakSet:Set,$e=null;function zM(e,t){if(e=e.containerInfo,Lh=qc,e=I_(e),Kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,u=0,h=0,p=e,c=null;e:for(;;){for(var d;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)c=p,p=d;for(;;){if(p===e)break e;if(c===n&&++u===a&&(o=r),c===s&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oh={focusedElem:e,selectionRange:n},qc=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var S=As(n.type,a);e=i.getSnapshotBeforeUpdate(S,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){ce(n,n.return,b)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Qv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n),i&4&&nl(5,n);break;case 1:if(Hi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var a=As(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&qv(n),i&512&&Ao(n,n.return);break;case 3:if(Hi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ev(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&jv(n);case 26:case 5:Hi(e,n),t===null&&i&4&&Zv(n),i&512&&Ao(n,n.return);break;case 12:Hi(e,n);break;case 31:Hi(e,n),i&4&&tx(e,n);break;case 13:Hi(e,n),i&4&&ex(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=WM.bind(null,n),f1(e,n))));break;case 22:if(i=n.memoizedState!==null||Ki,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Ki;var s=Ve;Ki=i,(Ve=t)&&!s?Yi(e,n,(n.subtreeFlags&8772)!==0):Hi(e,n),Ki=a,Ve=s}break;case 30:break;default:Hi(e,n)}}function Jv(e){var t=e.alternate;t!==null&&(e.alternate=null,Jv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Tn=!1;function Fi(e,t,n){for(n=n.child;n!==null;)$v(e,t,n),n=n.sibling}function $v(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 26:Ve||Ai(n,t),Fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ai(n,t);var i=be,a=Tn;ts(n.type)&&(be=n.stateNode,Tn=!1),Fi(e,t,n),Do(n.stateNode),be=i,Tn=a;break;case 5:Ve||Ai(n,t);case 6:if(i=be,a=Tn,be=null,Fi(e,t,n),be=i,Tn=a,be!==null)if(Tn)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(n.stateNode)}catch(s){ce(n,t,s)}else try{be.removeChild(n.stateNode)}catch(s){ce(n,t,s)}break;case 18:be!==null&&(Tn?(e=be,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Or(e)):T0(be,n.stateNode));break;case 4:i=be,a=Tn,be=n.stateNode.containerInfo,Tn=!0,Fi(e,t,n),be=i,Tn=a;break;case 0:case 11:case 14:case 15:Ka(2,n,t),Ve||Ka(4,n,t),Fi(e,t,n);break;case 1:Ve||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Yv(n,t,i)),Fi(e,t,n);break;case 21:Fi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Fi(e,t,n),Ve=i;break;default:Fi(e,t,n)}}function tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Or(e)}catch(n){ce(t,t.return,n)}}}function ex(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Or(e)}catch(n){ce(t,t.return,n)}}function IM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new h0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new h0),t;default:throw Error($(435,e.tag))}}function El(e,t){var n=IM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=qM.bind(null,e,i);i.then(a,a)}})}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ts(o.type)){be=o.stateNode,Tn=!1;break t}break;case 5:be=o.stateNode,Tn=!1;break t;case 3:case 4:be=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(be===null)throw Error($(160));$v(s,r,a),be=null,Tn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)nx(t,e),t=t.sibling}var hi=null;function nx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mn(t,e),En(e),i&4&&(Ka(3,e,e.return),nl(3,e),Ka(5,e,e.return));break;case 1:Mn(t,e),En(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&64&&Ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=hi;if(Mn(t,e),En(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Jo]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),un(s,i,n),s[rn]=e,tn(s),i=s;break t;case"link":var r=N0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;case"meta":if(r=N0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),un(s,i,n),a.head.appendChild(s);break;default:throw Error($(468,i))}s[rn]=e,tn(s),i=s}e.stateNode=i}else L0(a,e.type,e.stateNode);else e.stateNode=U0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?L0(a,e.type,e.stateNode):U0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mn(t,e),En(e),i&512&&(Ve||n===null||Ai(n,n.return)),n!==null&&i&4&&Qu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mn(t,e),En(e),i&512&&(Ve||n===null||Ai(n,n.return)),e.flags&32){a=e.stateNode;try{Ar(a,"")}catch(S){ce(e,e.return,S)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Qu(e,a,n!==null?n.memoizedProps:a)),i&1024&&($u=!0);break;case 6:if(Mn(t,e),En(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(S){ce(e,e.return,S)}}break;case 3:if(uc=null,a=hi,hi=kc(t.containerInfo),Mn(t,e),hi=a,En(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(S){ce(e,e.return,S)}$u&&($u=!1,ix(e));break;case 4:i=hi,hi=kc(e.stateNode.containerInfo),Mn(t,e),En(e),hi=i;break;case 12:Mn(t,e),En(e);break;case 31:Mn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 13:Mn(t,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mu=Hn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Ki,h=Ve;if(Ki=u||a,Ve=h||l,Mn(t,e),Ve=h,Ki=u,En(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ki||Ve||us(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(S){ce(l,l.return,S)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(S){ce(l,l.return,S)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;a?A0(d,!0):A0(l.stateNode,!1)}catch(S){ce(l,l.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,El(e,n))));break;case 19:Mn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 30:break;case 21:break;default:Mn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Kv(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var a=n.stateNode,s=Ju(e);Pc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Ar(r,""),n.flags&=-33);var o=Ju(e);Pc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,u=Ju(e);Ah(e,u,l);break;default:throw Error($(161))}}catch(h){ce(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ix(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ix(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qv(e,t.alternate,t),t=t.sibling}function us(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ka(4,t,t.return),us(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yv(t,t.return,n),us(t);break;case 27:Do(t.stateNode);case 26:case 5:Ai(t,t.return),us(t);break;case 22:t.memoizedState===null&&us(t);break;case 30:us(t);break;default:us(t)}e=e.sibling}}function Yi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Yi(a,s,n),nl(4,s);break;case 1:if(Yi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){ce(i,i.return,u)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)tv(l[a],o)}catch(u){ce(i,i.return,u)}}n&&r&64&&qv(s),Ao(s,s.return);break;case 27:jv(s);case 26:case 5:Yi(a,s,n),n&&i===null&&r&4&&Zv(s),Ao(s,s.return);break;case 12:Yi(a,s,n);break;case 31:Yi(a,s,n),n&&r&4&&tx(a,s);break;case 13:Yi(a,s,n),n&&r&4&&ex(a,s);break;case 22:s.memoizedState===null&&Yi(a,s,n),Ao(s,s.return);break;case 30:break;default:Yi(a,s,n)}t=t.sibling}}function yp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&tl(n))}function Mp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function oi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ax(e,t,n,i),t=t.sibling}function ax(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:oi(e,t,n,i),a&2048&&nl(9,t);break;case 1:oi(e,t,n,i);break;case 3:oi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e)));break;case 12:if(a&2048){oi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else oi(e,t,n,i);break;case 31:oi(e,t,n,i);break;case 13:oi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?oi(e,t,n,i):Ro(e,t):s._visibility&2?oi(e,t,n,i):(s._visibility|=2,tr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&yp(r,t);break;case 24:oi(e,t,n,i),a&2048&&Mp(t.alternate,t);break;default:oi(e,t,n,i)}}function tr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,u=r.flags;switch(r.tag){case 0:case 11:case 15:tr(s,r,o,l,a),nl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?tr(s,r,o,l,a):Ro(s,r):(h._visibility|=2,tr(s,r,o,l,a)),a&&u&2048&&yp(r.alternate,r);break;case 24:tr(s,r,o,l,a),a&&u&2048&&Mp(r.alternate,r);break;default:tr(s,r,o,l,a)}t=t.sibling}}function Ro(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ro(n,i),a&2048&&yp(i.alternate,i);break;case 24:Ro(n,i),a&2048&&Mp(i.alternate,i);break;default:Ro(n,i)}t=t.sibling}}var po=8192;function Bs(e,t,n){if(e.subtreeFlags&po)for(e=e.child;e!==null;)sx(e,t,n),e=e.sibling}function sx(e,t,n){switch(e.tag){case 26:Bs(e,t,n),e.flags&po&&e.memoizedState!==null&&E1(n,hi,e.memoizedState,e.memoizedProps);break;case 5:Bs(e,t,n);break;case 3:case 4:var i=hi;hi=kc(e.stateNode.containerInfo),Bs(e,t,n),hi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=po,po=16777216,Bs(e,t,n),po=i):Bs(e,t,n));break;default:Bs(e,t,n)}}function rx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function to(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,lx(i,e)}rx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ox(e),e=e.sibling}function ox(e){switch(e.tag){case 0:case 11:case 15:to(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:to(e);break;case 12:to(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lc(e)):to(e);break;default:to(e)}}function lc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,lx(i,e)}rx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ka(8,t,t.return),lc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lc(t));break;default:lc(t)}e=e.sibling}}function lx(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Ka(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:tl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var a=i.sibling,s=i.return;if(Jv(i),i===n){$e=null;break t}if(a!==null){a.return=s,$e=a;break t}$e=s}}}var BM={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},FM=typeof WeakMap=="function"?WeakMap:Map,ie=0,ge=null,kt=null,Yt=0,le=0,Pn=null,Oa=!1,Xr=!1,Ep=!1,ua=0,De=0,ja=0,ys=0,bp=0,Fn=0,Dr=0,Co=null,An=null,Rh=!1,mu=0,cx=0,zc=1/0,Ic=null,Va=null,qe=0,ka=null,Ur=null,ia=0,Ch=0,wh=null,ux=null,wo=0,Dh=null;function kn(){return ie&2&&Yt!==0?Yt&-Yt:wt.T!==null?Ap():x_()}function fx(){if(Fn===0)if(!(Yt&536870912)||Qt){var e=ml;ml<<=1,!(ml&3932160)&&(ml=262144),Fn=e}else Fn=536870912;return e=Wn.current,e!==null&&(e.flags|=32),Fn}function Cn(e,t,n){(e===ge&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Nr(e,0),Pa(e,Yt,Fn,!1)),Qo(e,n),(!(ie&2)||e!==ge)&&(e===ge&&(!(ie&2)&&(ys|=n),De===4&&Pa(e,Yt,Fn,!1)),zi(e))}function hx(e,t,n){if(ie&6)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),a=i?VM(e,t):tf(e,t,!0),s=i;do{if(a===0){Xr&&!i&&Pa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!HM(n)){a=tf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Co;var l=o.current.memoizedState.isDehydrated;if(l&&(Nr(o,r).flags|=256),r=tf(o,r,!1),r!==2){if(Ep&&!l){o.errorRecoveryDisabledLanes|=s,ys|=s,a=4;break t}s=An,An=a,s!==null&&(An===null?An=s:An.push.apply(An,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Nr(e,0),Pa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:Pa(i,t,Fn,!Oa);break t;case 2:An=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(a=mu+300-Hn(),10<a)){if(Pa(i,t,Fn,!Oa),au(i,0,!0)!==0)break t;ia=t,i.timeoutHandle=Nx(d0.bind(null,i,n,An,Ic,Rh,t,Fn,ys,Dr,Oa,s,"Throttled",-0,0),a);break t}d0(i,n,An,Ic,Rh,t,Fn,ys,Dr,Oa,s,null,-0,0)}}break}while(1);zi(e)}function d0(e,t,n,i,a,s,r,o,l,u,h,p,c,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},sx(t,s,p);var S=(s&62914560)===s?mu-Hn():(s&4194048)===s?cx-Hn():0;if(S=b1(p,S),S!==null){ia=s,e.cancelPendingCommit=S(m0.bind(null,e,t,s,n,i,a,r,o,l,h,p,null,c,d)),Pa(e,s,r,!u);return}}m0(e,t,s,n,i,a,r,o,l)}function HM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Xn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pa(e,t,n,i){t&=~bp,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Vn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&g_(e,n,t)}function gu(){return ie&6?!0:(il(0,!1),!1)}function Tp(){if(kt!==null){if(le===0)var e=kt.return;else e=kt,Ji=Ls=null,up(e),vr=null,Io=0,e=kt;for(;e!==null;)Wv(e.alternate,e),e=e.return;kt=null}}function Nr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,r1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ia=0,Tp(),ge=e,kt=n=ea(e.current,null),Yt=t,le=0,Pn=null,Oa=!1,Xr=jo(e,t),Ep=!1,Dr=Fn=bp=ys=ja=De=0,An=Co=null,Rh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Vn(i),s=1<<a;t|=e[a],i&=~s}return ua=t,lu(),n}function dx(e,t){Bt=null,wt.H=Fo,t===kr||t===uu?(t=Wm(),le=3):t===ip?(t=Wm(),le=4):le=t===xp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pn=t,kt===null&&(De=1,Lc(e,ei(t,e.current)))}function px(){var e=Wn.current;return e===null?!0:(Yt&4194048)===Yt?ii===null:(Yt&62914560)===Yt||Yt&536870912?e===ii:!1}function mx(){var e=wt.H;return wt.H=Fo,e===null?Fo:e}function gx(){var e=wt.A;return wt.A=BM,e}function Bc(){De=4,Oa||(Yt&4194048)!==Yt&&Wn.current!==null||(Xr=!0),!(ja&134217727)&&!(ys&134217727)||ge===null||Pa(ge,Yt,Fn,!1)}function tf(e,t,n){var i=ie;ie|=2;var a=mx(),s=gx();(ge!==e||Yt!==t)&&(Ic=null,Nr(e,t)),t=!1;var r=De;t:do try{if(le!==0&&kt!==null){var o=kt,l=Pn;switch(le){case 8:Tp(),r=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(t=!0);var u=le;if(le=0,Pn=null,dr(e,o,l,u),n&&Xr){r=0;break t}break;default:u=le,le=0,Pn=null,dr(e,o,l,u)}}GM(),r=De;break}catch(h){dx(e,h)}while(1);return t&&e.shellSuspendCounter++,Ji=Ls=null,ie=i,wt.H=a,wt.A=s,kt===null&&(ge=null,Yt=0,lu()),r}function GM(){for(;kt!==null;)_x(kt)}function VM(e,t){var n=ie;ie|=2;var i=mx(),a=gx();ge!==e||Yt!==t?(Ic=null,zc=Hn()+500,Nr(e,t)):Xr=jo(e,t);t:do try{if(le!==0&&kt!==null){t=kt;var s=Pn;e:switch(le){case 1:le=0,Pn=null,dr(e,t,s,1);break;case 2:case 9:if(Xm(s)){le=0,Pn=null,p0(t);break}t=function(){le!==2&&le!==9||ge!==e||(le=7),zi(e)},s.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:Xm(s)?(le=0,Pn=null,p0(t)):(le=0,Pn=null,dr(e,t,s,7));break;case 5:var r=null;switch(kt.tag){case 26:r=kt.memoizedState;case 5:case 27:var o=kt;if(r?Ix(r):o.stateNode.complete){le=0,Pn=null;var l=o.sibling;if(l!==null)kt=l;else{var u=o.return;u!==null?(kt=u,_u(u)):kt=null}break e}}le=0,Pn=null,dr(e,t,s,5);break;case 6:le=0,Pn=null,dr(e,t,s,6);break;case 8:Tp(),De=6;break t;default:throw Error($(462))}}kM();break}catch(h){dx(e,h)}while(1);return Ji=Ls=null,wt.H=i,wt.A=a,ie=n,kt!==null?0:(ge=null,Yt=0,lu(),De)}function kM(){for(;kt!==null&&!hy();)_x(kt)}function _x(e){var t=Xv(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?_u(e):kt=t}function p0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=o0(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=o0(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:up(t);default:Wv(n,t),t=kt=W_(t,ua),t=Xv(n,t,ua)}e.memoizedProps=e.pendingProps,t===null?_u(e):kt=t}function dr(e,t,n,i){Ji=Ls=null,up(t),vr=null,Io=0;var a=t.return;try{if(UM(e,a,t,n,Yt)){De=1,Lc(e,ei(n,e.current)),kt=null;return}}catch(s){if(a!==null)throw kt=a,s;De=1,Lc(e,ei(n,e.current)),kt=null;return}t.flags&32768?(Qt||i===1?e=!0:Xr||Yt&536870912?e=!1:(Oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),vx(t,e)):_u(t)}function _u(e){var t=e;do{if(t.flags&32768){vx(t,Oa);return}e=t.return;var n=OM(t.alternate,t,ua);if(n!==null){kt=n;return}if(t=t.sibling,t!==null){kt=t;return}kt=t=e}while(t!==null);De===0&&(De=5)}function vx(e,t){do{var n=PM(e.alternate,e);if(n!==null){n.flags&=32767,kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){kt=e;return}kt=e=n}while(e!==null);De=6,kt=null}function m0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do vu();while(qe!==0);if(ie&6)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(s=t.lanes|t.childLanes,s|=jd,My(e,n,s,r,o,l),e===ge&&(kt=ge=null,Yt=0),Ur=t,ka=e,ia=n,Ch=s,wh=a,ux=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,YM(Mc,function(){return Ex(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=wt.T,wt.T=null,a=ae.p,ae.p=2,r=ie,ie|=4;try{zM(e,t,n)}finally{ie=r,ae.p=a,wt.T=i}}qe=1,xx(),Sx(),yx()}}function xx(){if(qe===1){qe=0;var e=ka,t=Ur,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=wt.T,wt.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{nx(t,e);var s=Oh,r=I_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&z_(o.ownerDocument.documentElement,o)){if(l!==null&&Kd(o)){var u=l.start,h=l.end;if(h===void 0&&(h=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var d=c.getSelection(),S=o.textContent.length,b=Math.min(l.start,S),_=l.end===void 0?b:Math.min(l.end,S);!d.extend&&b>_&&(r=_,_=b,b=r);var f=Im(o,b),g=Im(o,_);if(f&&g&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var y=p.createRange();y.setStart(f.node,f.offset),d.removeAllRanges(),b>_?(d.addRange(y),d.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),d.addRange(y))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}qc=!!Lh,Oh=Lh=null}finally{ie=a,ae.p=i,wt.T=n}}e.current=t,qe=2}}function Sx(){if(qe===2){qe=0;var e=ka,t=Ur,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=wt.T,wt.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{Qv(e,t.alternate,t)}finally{ie=a,ae.p=i,wt.T=n}}qe=3}}function yx(){if(qe===4||qe===3){qe=0,dy();var e=ka,t=Ur,n=ia,i=ux;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,Ur=ka=null,Mx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Va=null),Vd(n),t=t.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Ko,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=wt.T,a=ae.p,ae.p=2,wt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{wt.T=t,ae.p=a}}ia&3&&vu(),zi(e),a=e.pendingLanes,n&261930&&a&42?e===Dh?wo++:(wo=0,Dh=e):wo=0,il(0,!1)}}function Mx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function vu(){return xx(),Sx(),yx(),Ex()}function Ex(){if(qe!==5)return!1;var e=ka,t=Ch;Ch=0;var n=Vd(ia),i=wt.T,a=ae.p;try{ae.p=32>n?32:n,wt.T=null,n=wh,wh=null;var s=ka,r=ia;if(qe=0,Ur=ka=null,ia=0,ie&6)throw Error($(331));var o=ie;if(ie|=4,ox(s.current),ax(s,s.current,r,n),ie=o,il(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Ko,s)}catch{}return!0}finally{ae.p=a,wt.T=i,Mx(e,t)}}function g0(e,t,n){t=ei(n,t),t=Eh(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Qo(e,2),zi(e))}function ce(e,t,n){if(e.tag===3)g0(e,e,n);else for(;t!==null;){if(t.tag===3){g0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Va===null||!Va.has(i))){e=ei(n,e),n=Bv(2),i=Ga(t,n,2),i!==null&&(Fv(n,i,t,e),Qo(i,2),zi(i));break}}t=t.return}}function ef(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new FM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ep=!0,a.add(n),e=XM.bind(null,e,t,n),t.then(e,e))}function XM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Yt&n)===n&&(De===4||De===3&&(Yt&62914560)===Yt&&300>Hn()-mu?!(ie&2)&&Nr(e,0):bp|=n,Dr===Yt&&(Dr=0)),zi(e)}function bx(e,t){t===0&&(t=m_()),e=Ns(e,t),e!==null&&(Qo(e,t),zi(e))}function WM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bx(e,n)}function qM(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),bx(e,n)}function YM(e,t){return Hd(e,t)}var Fc=null,er=null,Uh=!1,Hc=!1,nf=!1,za=0;function zi(e){e!==er&&e.next===null&&(er===null?Fc=er=e:er=er.next=e),Hc=!0,Uh||(Uh=!0,KM())}function il(e,t){if(!nf&&Hc){nf=!0;do for(var n=!1,i=Fc;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Vn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,_0(i,s))}else s=Yt,s=au(i,i===ge?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||jo(i,s)||(n=!0,_0(i,s));i=i.next}while(n);nf=!1}}function ZM(){Tx()}function Tx(){Hc=Uh=!1;var e=0;za!==0&&s1()&&(e=za);for(var t=Hn(),n=null,i=Fc;i!==null;){var a=i.next,s=Ax(i,t);s===0?(i.next=null,n===null?Fc=a:n.next=a,a===null&&(er=n)):(n=i,(e!==0||s&3)&&(Hc=!0)),i=a}qe!==0&&qe!==5||il(e,!1),za!==0&&(za=0)}function Ax(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Vn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=yy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=ge,n=Yt,n=au(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Du(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||jo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Du(i),Vd(n)){case 2:case 8:n=d_;break;case 32:n=Mc;break;case 268435456:n=p_;break;default:n=Mc}return i=Rx.bind(null,e),n=Hd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Du(i),e.callbackPriority=2,e.callbackNode=null,2}function Rx(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var i=Yt;return i=au(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hx(e,i,t),Ax(e,Hn()),e.callbackNode!=null&&e.callbackNode===n?Rx.bind(null,e):null)}function _0(e,t){if(vu())return null;hx(e,t,!0)}function KM(){o1(function(){ie&6?Hd(h_,ZM):Tx()})}function Ap(){if(za===0){var e=Rr;e===0&&(e=pl,pl<<=1,!(pl&261888)&&(pl=256)),za=e}return za}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(""+e)}function x0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function jM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=v0((a[Dn]||null).action),r=i.submitter;r&&(t=(t=r[Dn]||null)?v0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new su("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(za!==0){var l=r?x0(a,r):new FormData(a);yh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?x0(a,r):new FormData(a),yh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var af=0;af<ch.length;af++){var sf=ch[af],QM=sf.toLowerCase(),JM=sf[0].toUpperCase()+sf.slice(1);mi(QM,"on"+JM)}mi(F_,"onAnimationEnd");mi(H_,"onAnimationIteration");mi(G_,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(pM,"onTransitionRun");mi(mM,"onTransitionStart");mi(gM,"onTransitionCancel");mi(V_,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$M=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Cx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=u;try{s(a)}catch(h){bc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=u;try{s(a)}catch(h){bc(h)}a.currentTarget=null,s=l}}}}function Vt(e,t){var n=t[eh];n===void 0&&(n=t[eh]=new Set);var i=e+"__bubble";n.has(i)||(wx(t,e,2,!1),n.add(i))}function rf(e,t,n){var i=0;t&&(i|=4),wx(n,e,i,t)}var bl="_reactListening"+Math.random().toString(36).slice(2);function Rp(e){if(!e[bl]){e[bl]=!0,S_.forEach(function(n){n!=="selectionchange"&&($M.has(n)||rf(n,!1,e),rf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bl]||(t[bl]=!0,rf("selectionchange",!1,t))}}function wx(e,t,n,i){switch(Vx(t)){case 2:var a=R1;break;case 8:a=C1;break;default:a=Up}n=a.bind(null,t,n,e),a=void 0,!rh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function of(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=ar(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}C_(function(){var u=s,h=Wd(n),p=[];t:{var c=k_.get(e);if(c!==void 0){var d=su,S=e;switch(e){case"keypress":if(ec(n)===0)break t;case"keydown":case"keyup":d=qy;break;case"focusin":S="focus",d=Pu;break;case"focusout":S="blur",d=Pu;break;case"beforeblur":case"afterblur":d=Pu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Ky;break;case F_:case H_:case G_:d=Iy;break;case V_:d=Qy;break;case"scroll":case"scrollend":d=Ny;break;case"wheel":d=$y;break;case"copy":case"cut":case"paste":d=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=wm;break;case"toggle":case"beforetoggle":d=eM}var b=(t&4)!==0,_=!b&&(e==="scroll"||e==="scrollend"),f=b?c!==null?c+"Capture":null:c;b=[];for(var g=u,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||f===null||(v=No(g,f),v!=null&&b.push(Go(g,v,y))),_)break;g=g.return}0<b.length&&(c=new d(c,S,null,n,h),p.push({event:c,listeners:b}))}}if(!(t&7)){t:{if(c=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",c&&n!==sh&&(S=n.relatedTarget||n.fromElement)&&(ar(S)||S[Hr]))break t;if((d||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,d?(S=n.relatedTarget||n.toElement,d=u,S=S?ar(S):null,S!==null&&(_=Zo(S),b=S.tag,S!==_||b!==5&&b!==27&&b!==6)&&(S=null)):(d=null,S=u),d!==S)){if(b=Rm,v="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=wm,v="onPointerLeave",f="onPointerEnter",g="pointer"),_=d==null?c:fo(d),y=S==null?c:fo(S),c=new b(v,g+"leave",d,n,h),c.target=_,c.relatedTarget=y,v=null,ar(h)===u&&(b=new b(f,g+"enter",S,n,h),b.target=y,b.relatedTarget=_,v=b),_=v,d&&S)e:{for(b=t1,f=d,g=S,y=0,v=f;v;v=b(v))y++;v=0;for(var T=g;T;T=b(T))v++;for(;0<y-v;)f=b(f),y--;for(;0<v-y;)g=b(g),v--;for(;y--;){if(f===g||g!==null&&f===g.alternate){b=f;break e}f=b(f),g=b(g)}b=null}else b=null;d!==null&&S0(p,c,d,b,!1),S!==null&&_!==null&&S0(p,_,S,b,!0)}}t:{if(c=u?fo(u):window,d=c.nodeName&&c.nodeName.toLowerCase(),d==="select"||d==="input"&&c.type==="file")var A=Lm;else if(Nm(c))if(O_)A=fM;else{A=cM;var R=lM}else d=c.nodeName,!d||d.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Xd(u.elementType)&&(A=Lm):A=uM;if(A&&(A=A(e,u))){L_(p,A,n,h);break t}R&&R(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&ah(c,"number",c.value)}switch(R=u?fo(u):window,e){case"focusin":(Nm(R)||R.contentEditable==="true")&&(or=R,oh=u,So=null);break;case"focusout":So=oh=or=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Bm(p,n,h);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":Bm(p,n,h)}var m;if(Zd)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else rr?U_(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(D_&&n.locale!=="ko"&&(rr||E!=="onCompositionStart"?E==="onCompositionEnd"&&rr&&(m=w_()):(La=h,qd="value"in La?La.value:La.textContent,rr=!0)),R=Gc(u,E),0<R.length&&(E=new Cm(E,e,null,n,h),p.push({event:E,listeners:R}),m?E.data=m:(m=N_(n),m!==null&&(E.data=m)))),(m=iM?aM(e,n):sM(e,n))&&(E=Gc(u,"onBeforeInput"),0<E.length&&(R=new Cm("onBeforeInput","beforeinput",null,n,h),p.push({event:R,listeners:E}),R.data=m)),jM(p,e,u,n,h)}Cx(p,t)})}function Go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=No(e,n),a!=null&&i.unshift(Go(e,a,s)),a=No(e,t),a!=null&&i.push(Go(e,a,s))),e.tag===3)return i;e=e.return}return[]}function t1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,a?(u=No(n,s),u!=null&&r.unshift(Go(n,u,l))):a||(u=No(n,s),u!=null&&r.push(Go(n,u,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var e1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function y0(e){return(typeof e=="string"?e:""+e).replace(e1,`
`).replace(n1,"")}function Dx(e,t){return t=y0(t),y0(e)===t}function fe(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ar(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ar(e,""+i);break;case"className":_l(e,"class",i);break;case"tabIndex":_l(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_l(e,n,i);break;case"style":R_(e,i,s);break;case"data":if(t!=="object"){_l(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",a.name,a,null),fe(e,t,"formEncType",a.formEncType,a,null),fe(e,t,"formMethod",a.formMethod,a,null),fe(e,t,"formTarget",a.formTarget,a,null)):(fe(e,t,"encType",a.encType,a,null),fe(e,t,"method",a.method,a,null),fe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Qi);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$l(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Jl(e,"popover",i);break;case"xlinkActuate":Ii(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ii(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ii(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ii(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ii(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ii(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dy.get(n)||n,Jl(e,n,i))}}function Nh(e,t,n,i,a,s){switch(n){case"style":R_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ar(e,i):(typeof i=="number"||typeof i=="bigint")&&Ar(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!y_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Dn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Jl(e,n,i)}}}function un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:fe(e,t,s,r,n,null)}}a&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=s=r=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:fe(e,t,i,h,n,null)}}b_(e,s,o,l,u,r,a,!1);return;case"select":Vt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:fe(e,t,r,o,n,null)}A_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<Ho.length;i++)Vt(Ho[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:fe(e,t,u,i,n,null)}return;default:if(Xd(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Nh(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function i1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,u=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var c in i){var d=i[c];if(p=n[c],i.hasOwnProperty(c)&&(d!=null||p!=null))switch(c){case"type":s=d;break;case"name":a=d;break;case"checked":u=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error($(137,t));break;default:d!==p&&fe(e,t,c,d,i,p)}}ih(e,r,o,l,u,h,s,a);return;case"select":d=r=o=c=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||fe(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":c=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&fe(e,t,a,s,i,l)}t=o,n=r,i=d,c!=null?mr(e,!!n,c,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":d=c=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":c=a;break;case"defaultValue":d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error($(91));break;default:a!==s&&fe(e,t,r,a,i,s)}T_(e,c,d);return;case"option":for(var S in n)if(c=n[S],n.hasOwnProperty(S)&&c!=null&&!i.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:fe(e,t,S,null,i,c)}for(l in i)if(c=i[l],d=n[l],i.hasOwnProperty(l)&&c!==d&&(c!=null||d!=null))switch(l){case"selected":e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:fe(e,t,l,c,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)c=n[b],n.hasOwnProperty(b)&&c!=null&&!i.hasOwnProperty(b)&&fe(e,t,b,null,i,c);for(u in i)if(c=i[u],d=n[u],i.hasOwnProperty(u)&&c!==d&&(c!=null||d!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error($(137,t));break;default:fe(e,t,u,c,i,d)}return;default:if(Xd(t)){for(var _ in n)c=n[_],n.hasOwnProperty(_)&&c!==void 0&&!i.hasOwnProperty(_)&&Nh(e,t,_,void 0,i,c);for(h in i)c=i[h],d=n[h],!i.hasOwnProperty(h)||c===d||c===void 0&&d===void 0||Nh(e,t,h,c,i,d);return}}for(var f in n)c=n[f],n.hasOwnProperty(f)&&c!=null&&!i.hasOwnProperty(f)&&fe(e,t,f,null,i,c);for(p in i)c=i[p],d=n[p],!i.hasOwnProperty(p)||c===d||c==null&&d==null||fe(e,t,p,c,i,d)}function M0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&M0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>o)break;var h=l.transferSize,p=l.initiatorType;h&&M0(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-u)/(l-u)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lh=null,Oh=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ux(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ph(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lf=null;function s1(){var e=window.event;return e&&e.type==="popstate"?e===lf?!1:(lf=e,!0):(lf=null,!1)}var Nx=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(e){return b0.resolve(null).then(e).catch(l1)}:Nx;function l1(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function T0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Or(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Do(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Do(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Jo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Do(e.ownerDocument.body);n=a}while(n);Or(t)}function A0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zh(n),kd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function c1(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Jo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ai(e.nextSibling),e===null)break}return null}function u1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ai(e.nextSibling),e===null))return null;return e}function Lx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ai(e.nextSibling),e===null))return null;return e}function Ih(e){return e.data==="$?"||e.data==="$~"}function Bh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fh=null;function R0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ai(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function C0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ox(e,t,n){switch(t=Vc(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function Do(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kd(e)}var si=new Map,w0=new Set;function kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=ae.d;ae.d={f:h1,r:d1,D:p1,C:m1,L:g1,m:_1,X:x1,S:v1,M:S1};function h1(){var e=da.f(),t=gu();return e||t}function d1(e){var t=Gr(e);t!==null&&t.tag===5&&t.type==="form"?Rv(t):da.r(e)}var Wr=typeof document>"u"?null:document;function Px(e,t,n){var i=Wr;if(i&&typeof t=="string"&&t){var a=ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),w0.has(a)||(w0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),un(t,"link",e),tn(t),i.head.appendChild(t)))}}function p1(e){da.D(e),Px("dns-prefetch",e,null)}function m1(e,t){da.C(e,t),Px("preconnect",e,t)}function g1(e,t,n){da.L(e,t,n);var i=Wr;if(i&&e&&t){var a='link[rel="preload"][as="'+ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(e)+'"]';var s=a;switch(t){case"style":s=Lr(e);break;case"script":s=qr(e)}si.has(s)||(e=Ee({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),si.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(al(s))||t==="script"&&i.querySelector(sl(s))||(t=i.createElement("link"),un(t,"link",e),tn(t),i.head.appendChild(t)))}}function _1(e,t){da.m(e,t);var n=Wr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=qr(e)}if(!si.has(s)&&(e=Ee({rel:"modulepreload",href:e},t),si.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}i=n.createElement("link"),un(i,"link",e),tn(i),n.head.appendChild(i)}}}function v1(e,t,n){da.S(e,t,n);var i=Wr;if(i&&e){var a=pr(i).hoistableStyles,s=Lr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(al(s)))o.loading=5;else{e=Ee({rel:"stylesheet",href:e,"data-precedence":t},n),(n=si.get(s))&&Cp(e,n);var l=r=i.createElement("link");tn(l),un(l,"link",e),l._p=new Promise(function(u,h){l.onload=u,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,cc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function x1(e,t){da.X(e,t);var n=Wr;if(n&&e){var i=pr(n).hoistableScripts,a=qr(e),s=i.get(a);s||(s=n.querySelector(sl(a)),s||(e=Ee({src:e,async:!0},t),(t=si.get(a))&&wp(e,t),s=n.createElement("script"),tn(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function S1(e,t){da.M(e,t);var n=Wr;if(n&&e){var i=pr(n).hoistableScripts,a=qr(e),s=i.get(a);s||(s=n.querySelector(sl(a)),s||(e=Ee({src:e,async:!0,type:"module"},t),(t=si.get(a))&&wp(e,t),s=n.createElement("script"),tn(s),un(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function D0(e,t,n,i){var a=(a=Ba.current)?kc(a):null;if(!a)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lr(n.href),n=pr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lr(n.href);var s=pr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(al(e)))&&!s._p&&(r.instance=s,r.state.loading=5),si.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},si.set(e,n),s||y1(a,e,n,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qr(n),n=pr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function Lr(e){return'href="'+ti(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function zx(e){return Ee({},e,{"data-precedence":e.precedence,precedence:null})}function y1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),un(t,"link",n),tn(t),e.head.appendChild(t))}function qr(e){return'[src="'+ti(e)+'"]'}function sl(e){return"script[async]"+e}function U0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var a=Ee({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),un(i,"style",a),cc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Lr(n.href);var s=e.querySelector(al(a));if(s)return t.state.loading|=4,t.instance=s,tn(s),s;i=zx(n),(a=si.get(a))&&Cp(i,a),s=(e.ownerDocument||e).createElement("link"),tn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),t.state.loading|=4,cc(s,n.precedence,e),t.instance=s;case"script":return s=qr(n.src),(a=e.querySelector(sl(s)))?(t.instance=a,tn(a),a):(i=n,(a=si.get(s))&&(i=Ee({},n),wp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),tn(a),un(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,cc(i,n.precedence,e));return t.instance}function cc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Cp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uc=null;function N0(e,t,n){if(uc===null){var i=new Map,a=uc=new Map;a.set(n,i)}else a=uc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Jo]||s[rn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function L0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function M1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ix(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function E1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Lr(i.href),s=t.querySelector(al(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tn(s);return}s=t.ownerDocument||t,i=zx(i),(a=si.get(a))&&Cp(i,a),s=s.createElement("link"),tn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var cf=0;function b1(e,t){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&cf===0&&(cf=62500*a1());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>cf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wc=null;function fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wc=new Map,t.forEach(T1,e),Wc=null,Xc.call(e))}function T1(e,t){if(!(t.state.loading&4)){var n=Wc.get(e);if(n)var i=n.get(null);else{n=new Map,Wc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Xc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Vo={$$typeof:ji,Provider:null,Consumer:null,_currentValue:_s,_currentValue2:_s,_threadCount:0};function A1(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.hiddenUpdates=Uu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Bx(e,t,n,i,a,s,r,o,l,u,h,p){return e=new A1(e,t,n,r,l,u,h,p,o),t=1,s===!0&&(t|=24),s=In(3,null,null,t),e.current=s,s.stateNode=e,t=ep(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ap(s),e}function Fx(e){return e?(e=ur,e):ur}function Hx(e,t,n,i,a,s){a=Fx(a),i.context===null?i.context=a:i.pendingContext=a,i=Ha(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ga(e,i,t),n!==null&&(Cn(n,e,t),Mo(n,e,t))}function O0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dp(e,t){O0(e,t),(e=e.alternate)&&O0(e,t)}function Gx(e){if(e.tag===13||e.tag===31){var t=Ns(e,67108864);t!==null&&Cn(t,e,67108864),Dp(e,67108864)}}function P0(e){if(e.tag===13||e.tag===31){var t=kn();t=Gd(t);var n=Ns(e,t);n!==null&&Cn(n,e,t),Dp(e,t)}}var qc=!0;function R1(e,t,n,i){var a=wt.T;wt.T=null;var s=ae.p;try{ae.p=2,Up(e,t,n,i)}finally{ae.p=s,wt.T=a}}function C1(e,t,n,i){var a=wt.T;wt.T=null;var s=ae.p;try{ae.p=8,Up(e,t,n,i)}finally{ae.p=s,wt.T=a}}function Up(e,t,n,i){if(qc){var a=Hh(i);if(a===null)of(e,t,i,Yc,n),z0(e,i);else if(D1(a,e,t,n,i))i.stopPropagation();else if(z0(e,i),t&4&&-1<w1.indexOf(e)){for(;a!==null;){var s=Gr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ls(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Vn(r);o.entanglements[1]|=l,r&=~l}zi(s),!(ie&6)&&(zc=Hn()+500,il(0,!1))}}break;case 31:case 13:o=Ns(s,2),o!==null&&Cn(o,s,2),gu(),Dp(s,2)}if(s=Hh(i),s===null&&of(e,t,i,Yc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else of(e,t,i,null,n)}}function Hh(e){return e=Wd(e),Np(e)}var Yc=null;function Np(e){if(Yc=null,e=ar(e),e!==null){var t=Zo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=o_(t),e!==null)return e;e=null}else if(n===31){if(e=l_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yc=e,null}function Vx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(py()){case h_:return 2;case d_:return 8;case Mc:case my:return 32;case p_:return 268435456;default:return 32}default:return 32}}var Gh=!1,Xa=null,Wa=null,qa=null,ko=new Map,Xo=new Map,wa=[],w1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z0(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(t.pointerId)}}function eo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Gr(t),t!==null&&Gx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function D1(e,t,n,i,a){switch(t){case"focusin":return Xa=eo(Xa,e,t,n,i,a),!0;case"dragenter":return Wa=eo(Wa,e,t,n,i,a),!0;case"mouseover":return qa=eo(qa,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ko.set(s,eo(ko.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Xo.set(s,eo(Xo.get(s)||null,e,t,n,i,a)),!0}return!1}function kx(e){var t=ar(e.target);if(t!==null){var n=Zo(t);if(n!==null){if(t=n.tag,t===13){if(t=o_(n),t!==null){e.blockedOn=t,Sm(e.priority,function(){P0(n)});return}}else if(t===31){if(t=l_(n),t!==null){e.blockedOn=t,Sm(e.priority,function(){P0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);sh=i,n.target.dispatchEvent(i),sh=null}else return t=Gr(n),t!==null&&Gx(t),e.blockedOn=n,!1;t.shift()}return!0}function I0(e,t,n){hc(e)&&n.delete(t)}function U1(){Gh=!1,Xa!==null&&hc(Xa)&&(Xa=null),Wa!==null&&hc(Wa)&&(Wa=null),qa!==null&&hc(qa)&&(qa=null),ko.forEach(I0),Xo.forEach(I0)}function Tl(e,t){e.blockedOn===t&&(e.blockedOn=null,Gh||(Gh=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,U1)))}var Al=null;function B0(e){Al!==e&&(Al=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){Al===e&&(Al=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Np(i||n)===null)continue;break}var s=Gr(n);s!==null&&(e.splice(t,3),t-=3,yh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Or(e){function t(l){return Tl(l,e)}Xa!==null&&Tl(Xa,e),Wa!==null&&Tl(Wa,e),qa!==null&&Tl(qa,e),ko.forEach(t),Xo.forEach(t);for(var n=0;n<wa.length;n++){var i=wa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<wa.length&&(n=wa[0],n.blockedOn===null);)kx(n),n.blockedOn===null&&wa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Dn]||null;if(typeof s=="function")r||B0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Dn]||null)o=r.formAction;else if(Np(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),B0(n)}}}function Xx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Lp(e){this._internalRoot=e}xu.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=kn();Hx(n,i,e,t,null,null)};xu.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hx(e.current,2,null,e,null,null),gu(),t[Hr]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=x_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wa.length&&t!==0&&t<wa[n].priority;n++);wa.splice(n,0,e),n===0&&kx(e)}};var F0=s_.version;if(F0!=="19.2.8")throw Error($(527,F0,"19.2.8"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=oy(t),e=e!==null?c_(e):null,e=e===null?null:e.stateNode,e};var N1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Ko=Rl.inject(N1),Gn=Rl}catch{}}nu.createRoot=function(e,t){if(!r_(e))throw Error($(299));var n=!1,i="",a=Pv,s=zv,r=Iv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Bx(e,1,!1,null,null,n,i,null,a,s,r,Xx),e[Hr]=t.current,Rp(e),new Lp(t)};nu.hydrateRoot=function(e,t,n){if(!r_(e))throw Error($(299));var i=!1,a="",s=Pv,r=zv,o=Iv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Bx(e,1,!0,t,n??null,i,a,l,s,r,o,Xx),t.context=Fx(null),n=t.current,i=kn(),i=Gd(i),a=Ha(i),a.callback=null,Ga(n,a,i),n=i,t.current.lanes=n,Qo(t,n),zi(t),e[Hr]=t.current,Rp(e),new xu(t)};nu.version="19.2.8";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(e){console.error(e)}}Wx(),$g.exports=nu;var L1=$g.exports;const O1=kg(L1);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="185",P1=0,H0=1,z1=2,dc=1,I1=2,mo=3,Qa=0,wn=1,Ei=2,aa=0,yr=1,G0=2,V0=3,k0=4,B1=5,hs=100,F1=101,H1=102,G1=103,V1=104,k1=200,X1=201,W1=202,q1=203,Vh=204,kh=205,Y1=206,Z1=207,K1=208,j1=209,Q1=210,J1=211,$1=212,tE=213,eE=214,Xh=0,Wh=1,qh=2,Pr=3,Yh=4,Zh=5,Kh=6,jh=7,qx=0,nE=1,iE=2,Di=0,Yx=1,Zx=2,Kx=3,jx=4,Qx=5,Jx=6,$x=7,tS=300,Rs=301,zr=302,uf=303,ff=304,Su=306,Qh=1e3,$i=1001,Jh=1002,cn=1003,aE=1004,Cl=1005,mn=1006,hf=1007,ps=1008,Bn=1009,eS=1010,nS=1011,Wo=1012,Pp=1013,Li=1014,Ri=1015,fa=1016,zp=1017,Ip=1018,qo=1020,iS=35902,aS=35899,sS=1021,rS=1022,pi=1023,ha=1026,ms=1027,oS=1028,Bp=1029,Cs=1030,Fp=1031,Hp=1033,pc=33776,mc=33777,gc=33778,_c=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,sd=37496,rd=37488,od=37489,Zc=37490,ld=37491,cd=37808,ud=37809,fd=37810,hd=37811,dd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,Sd=37819,yd=37820,Md=37821,Ed=36492,bd=36494,Td=36495,Ad=36283,Rd=36284,Kc=36285,Cd=36286,sE=3200,wd=0,rE=1,Da="",Kn="srgb",jc="srgb-linear",Qc="linear",oe="srgb",Fs=7680,X0=519,oE=512,lE=513,cE=514,Gp=515,uE=516,fE=517,Vp=518,hE=519,W0=35044,q0="300 es",Ci=2e3,Yo=2001;function dE(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function pE(){const e=Jc("canvas");return e.style.display="block",e}const Y0={};function Z0(...e){const t="THREE."+e.shift();console.log(t,...e)}function lS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=lS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ee(...e){e=lS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Mr(...e){const t=e.join(" ");t in Y0||(Y0[t]=!0,Dt(...e))}function mE(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const gE={[Xh]:Wh,[qh]:Kh,[Yh]:jh,[Pr]:Zh,[Wh]:Xh,[Kh]:qh,[jh]:Yh,[Zh]:Pr};class Os{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=Math.PI/180,Dd=180/Math.PI;function rl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[e&255]+dn[e>>8&255]+dn[e>>16&255]+dn[e>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function _E(e,t){return(e%t+t)%t}function pf(e,t,n){return(1-n)*e+n*t}function no(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Jp=class Jp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jp.prototype.isVector2=!0;let Ft=Jp;class Yr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],u=i[a+1],h=i[a+2],p=i[a+3],c=s[r+0],d=s[r+1],S=s[r+2],b=s[r+3];if(p!==b||l!==c||u!==d||h!==S){let _=l*c+u*d+h*S+p*b;_<0&&(c=-c,d=-d,S=-S,b=-b,_=-_);let f=1-o;if(_<.9995){const g=Math.acos(_),y=Math.sin(g);f=Math.sin(f*g)/y,o=Math.sin(o*g)/y,l=l*f+c*o,u=u*f+d*o,h=h*f+S*o,p=p*f+b*o}else{l=l*f+c*o,u=u*f+d*o,h=h*f+S*o,p=p*f+b*o;const g=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=g,u*=g,h*=g,p*=g}}t[n]=l,t[n+1]=u,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],u=i[a+2],h=i[a+3],p=s[r],c=s[r+1],d=s[r+2],S=s[r+3];return t[n]=o*S+h*p+l*d-u*c,t[n+1]=l*S+h*c+u*p-o*d,t[n+2]=u*S+h*d+o*c-l*p,t[n+3]=h*S-o*p-l*c-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(a/2),p=o(s/2),c=l(i/2),d=l(a/2),S=l(s/2);switch(r){case"XYZ":this._x=c*h*p+u*d*S,this._y=u*d*p-c*h*S,this._z=u*h*S+c*d*p,this._w=u*h*p-c*d*S;break;case"YXZ":this._x=c*h*p+u*d*S,this._y=u*d*p-c*h*S,this._z=u*h*S-c*d*p,this._w=u*h*p+c*d*S;break;case"ZXY":this._x=c*h*p-u*d*S,this._y=u*d*p+c*h*S,this._z=u*h*S+c*d*p,this._w=u*h*p-c*d*S;break;case"ZYX":this._x=c*h*p-u*d*S,this._y=u*d*p+c*h*S,this._z=u*h*S-c*d*p,this._w=u*h*p+c*d*S;break;case"YZX":this._x=c*h*p+u*d*S,this._y=u*d*p+c*h*S,this._z=u*h*S-c*d*p,this._w=u*h*p-c*d*S;break;case"XZY":this._x=c*h*p-u*d*S,this._y=u*d*p-c*h*S,this._z=u*h*S+c*d*p,this._w=u*h*p+c*d*S;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],c=i+o+p;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-u)*d,this._z=(r-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+u)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-u)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+u)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+r*o+a*u-s*l,this._y=a*h+r*l+s*o-i*u,this._z=s*h+r*u+i*l-a*o,this._w=r*h-i*o-a*l-s*u,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $p=class $p{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(K0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(K0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,u=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*u+r*p-o*h,this.y=i+l*h+o*u-s*p,this.z=a+l*p+s*h-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mf.copy(this).projectOnVector(t),this.sub(mf)}reflect(t){return this.sub(mf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$p.prototype.isVector3=!0;let F=$p;const mf=new F,K0=new Yr,tm=class tm{constructor(t,n,i,a,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,u)}set(t,n,i,a,s,r,o,l,u){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],c=i[2],d=i[5],S=i[8],b=a[0],_=a[3],f=a[6],g=a[1],y=a[4],v=a[7],T=a[2],A=a[5],R=a[8];return s[0]=r*b+o*g+l*T,s[3]=r*_+o*y+l*A,s[6]=r*f+o*v+l*R,s[1]=u*b+h*g+p*T,s[4]=u*_+h*y+p*A,s[7]=u*f+h*v+p*R,s[2]=c*b+d*g+S*T,s[5]=c*_+d*y+S*A,s[8]=c*f+d*v+S*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return n*r*h-n*o*u-i*s*h+i*o*l+a*s*u-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],u=t[7],h=t[8],p=h*r-o*u,c=o*l-h*s,d=u*s-r*l,S=n*p+i*c+a*d;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=p*b,t[1]=(a*u-h*i)*b,t[2]=(o*i-a*r)*b,t[3]=c*b,t[4]=(h*n-a*l)*b,t[5]=(a*s-o*n)*b,t[6]=d*b,t[7]=(i*l-u*n)*b,t[8]=(r*n-i*s)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*r+u*o)+r+t,-a*u,a*l,-a*(-u*r+l*o)+o+n,0,0,1),this}scale(t,n){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gf.makeScale(t,n)),this}rotate(t){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gf.makeRotation(-t)),this}translate(t,n){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tm.prototype.isMatrix3=!0;let Nt=tm;const gf=new Nt,j0=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const e={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===oe&&(a.r=sa(a.r),a.g=sa(a.g),a.b=sa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(a.r=Er(a.r),a.g=Er(a.g),a.b=Er(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Da?Qc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[jc]:{primaries:t,whitePoint:i,transfer:Qc,toXYZ:j0,fromXYZ:Q0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:j0,fromXYZ:Q0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),e}const Kt=vE();function sa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Er(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Hs;class xE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hs===void 0&&(Hs=Jc("canvas")),Hs.width=t.width,Hs.height=t.height;const a=Hs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Hs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Jc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=sa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sa(n[i]/255)*255):n[i]=sa(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let SE=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(_f(a[r].image)):s.push(_f(a[r]))}else s=_f(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function _f(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?xE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let yE=0;const vf=new F;class xn extends Os{constructor(t=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=$i,a=$i,s=mn,r=ps,o=pi,l=Bn,u=xn.DEFAULT_ANISOTROPY,h=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=rl(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vf).x}get height(){return this.source.getSize(vf).y}get depth(){return this.source.getSize(vf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=tS;xn.DEFAULT_ANISOTROPY=1;const em=class em{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,u=l[0],h=l[4],p=l[8],c=l[1],d=l[5],S=l[9],b=l[2],_=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(p-b)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+c)<.1&&Math.abs(p+b)<.1&&Math.abs(S+_)<.1&&Math.abs(u+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,v=(d+1)/2,T=(f+1)/2,A=(h+c)/4,R=(p+b)/4,m=(S+_)/4;return y>v&&y>T?y<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(y),a=A/i,s=R/i):v>T?v<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),i=A/a,s=m/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=R/s,a=m/s),this.set(i,a,s,n),this}let g=Math.sqrt((_-S)*(_-S)+(p-b)*(p-b)+(c-h)*(c-h));return Math.abs(g)<.001&&(g=1),this.x=(_-S)/g,this.y=(p-b)/g,this.z=(c-h)/g,this.w=Math.acos((u+d+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;let Te=em;class ME extends Os{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new xn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new kp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends ME{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class cS extends xn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EE extends xn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tu=class tu{constructor(t,n,i,a,s,r,o,l,u,h,p,c,d,S,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,u,h,p,c,d,S,b,_)}set(t,n,i,a,s,r,o,l,u,h,p,c,d,S,b,_){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=c,f[3]=d,f[7]=S,f[11]=b,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Gs.setFromMatrixColumn(t,0).length(),s=1/Gs.setFromMatrixColumn(t,1).length(),r=1/Gs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const c=r*h,d=r*p,S=o*h,b=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=d+S*u,n[5]=c-b*u,n[9]=-o*l,n[2]=b-c*u,n[6]=S+d*u,n[10]=r*l}else if(t.order==="YXZ"){const c=l*h,d=l*p,S=u*h,b=u*p;n[0]=c+b*o,n[4]=S*o-d,n[8]=r*u,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-S,n[6]=b+c*o,n[10]=r*l}else if(t.order==="ZXY"){const c=l*h,d=l*p,S=u*h,b=u*p;n[0]=c-b*o,n[4]=-r*p,n[8]=S+d*o,n[1]=d+S*o,n[5]=r*h,n[9]=b-c*o,n[2]=-r*u,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const c=r*h,d=r*p,S=o*h,b=o*p;n[0]=l*h,n[4]=S*u-d,n[8]=c*u+b,n[1]=l*p,n[5]=b*u+c,n[9]=d*u-S,n[2]=-u,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const c=r*l,d=r*u,S=o*l,b=o*u;n[0]=l*h,n[4]=b-c*p,n[8]=S*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-u*h,n[6]=d*p+S,n[10]=c-b*p}else if(t.order==="XZY"){const c=r*l,d=r*u,S=o*l,b=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=c*p+b,n[5]=r*h,n[9]=d*p-S,n[2]=S*p-d,n[6]=o*h,n[10]=b*p+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bE,t,TE)}lookAt(t,n,i){const a=this.elements;return Ln.subVectors(t,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),va.crossVectors(i,Ln),va.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),va.crossVectors(i,Ln)),va.normalize(),wl.crossVectors(Ln,va),a[0]=va.x,a[4]=wl.x,a[8]=Ln.x,a[1]=va.y,a[5]=wl.y,a[9]=Ln.y,a[2]=va.z,a[6]=wl.z,a[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],c=i[9],d=i[13],S=i[2],b=i[6],_=i[10],f=i[14],g=i[3],y=i[7],v=i[11],T=i[15],A=a[0],R=a[4],m=a[8],E=a[12],w=a[1],D=a[5],O=a[9],q=a[13],K=a[2],H=a[6],L=a[10],z=a[14],X=a[3],tt=a[7],nt=a[11],ft=a[15];return s[0]=r*A+o*w+l*K+u*X,s[4]=r*R+o*D+l*H+u*tt,s[8]=r*m+o*O+l*L+u*nt,s[12]=r*E+o*q+l*z+u*ft,s[1]=h*A+p*w+c*K+d*X,s[5]=h*R+p*D+c*H+d*tt,s[9]=h*m+p*O+c*L+d*nt,s[13]=h*E+p*q+c*z+d*ft,s[2]=S*A+b*w+_*K+f*X,s[6]=S*R+b*D+_*H+f*tt,s[10]=S*m+b*O+_*L+f*nt,s[14]=S*E+b*q+_*z+f*ft,s[3]=g*A+y*w+v*K+T*X,s[7]=g*R+y*D+v*H+T*tt,s[11]=g*m+y*O+v*L+T*nt,s[15]=g*E+y*q+v*z+T*ft,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],u=t[13],h=t[2],p=t[6],c=t[10],d=t[14],S=t[3],b=t[7],_=t[11],f=t[15],g=l*d-u*c,y=o*d-u*p,v=o*c-l*p,T=r*d-u*h,A=r*c-l*h,R=r*p-o*h;return n*(b*g-_*y+f*v)-i*(S*g-_*T+f*A)+a*(S*y-b*T+f*R)-s*(S*v-b*A+_*R)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],u=t[6],h=t[10];return n*(r*h-o*u)-i*(s*h-o*l)+a*(s*u-r*l)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],u=t[7],h=t[8],p=t[9],c=t[10],d=t[11],S=t[12],b=t[13],_=t[14],f=t[15],g=n*o-i*r,y=n*l-a*r,v=n*u-s*r,T=i*l-a*o,A=i*u-s*o,R=a*u-s*l,m=h*b-p*S,E=h*_-c*S,w=h*f-d*S,D=p*_-c*b,O=p*f-d*b,q=c*f-d*_,K=g*q-y*O+v*D+T*w-A*E+R*m;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/K;return t[0]=(o*q-l*O+u*D)*H,t[1]=(a*O-i*q-s*D)*H,t[2]=(b*R-_*A+f*T)*H,t[3]=(c*A-p*R-d*T)*H,t[4]=(l*w-r*q-u*E)*H,t[5]=(n*q-a*w+s*E)*H,t[6]=(_*v-S*R-f*y)*H,t[7]=(h*R-c*v+d*y)*H,t[8]=(r*O-o*w+u*m)*H,t[9]=(i*w-n*O-s*m)*H,t[10]=(S*A-b*v+f*g)*H,t[11]=(p*v-h*A-d*g)*H,t[12]=(o*E-r*D-l*m)*H,t[13]=(n*D-i*E+a*m)*H,t[14]=(b*y-S*T-_*g)*H,t[15]=(h*T-p*y+c*g)*H,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,u=s*r,h=s*o;return this.set(u*r+i,u*o-a*l,u*l+a*o,0,u*o+a*l,h*o+i,h*l-a*r,0,u*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,u=s+s,h=r+r,p=o+o,c=s*u,d=s*h,S=s*p,b=r*h,_=r*p,f=o*p,g=l*u,y=l*h,v=l*p,T=i.x,A=i.y,R=i.z;return a[0]=(1-(b+f))*T,a[1]=(d+v)*T,a[2]=(S-y)*T,a[3]=0,a[4]=(d-v)*A,a[5]=(1-(c+f))*A,a[6]=(_+g)*A,a[7]=0,a[8]=(S+y)*R,a[9]=(_-g)*R,a[10]=(1-(c+b))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Gs.set(a[0],a[1],a[2]).length();const o=Gs.set(a[4],a[5],a[6]).length(),l=Gs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),li.copy(this);const u=1/r,h=1/o,p=1/l;return li.elements[0]*=u,li.elements[1]*=u,li.elements[2]*=u,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=p,li.elements[9]*=p,li.elements[10]*=p,n.setFromRotationMatrix(li),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Ci,l=!1){const u=this.elements,h=2*s/(n-t),p=2*s/(i-a),c=(n+t)/(n-t),d=(i+a)/(i-a);let S,b;if(l)S=s/(r-s),b=r*s/(r-s);else if(o===Ci)S=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===Yo)S=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Ci,l=!1){const u=this.elements,h=2/(n-t),p=2/(i-a),c=-(n+t)/(n-t),d=-(i+a)/(i-a);let S,b;if(l)S=1/(r-s),b=r/(r-s);else if(o===Ci)S=-2/(r-s),b=-(r+s)/(r-s);else if(o===Yo)S=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=S,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};tu.prototype.isMatrix4=!0;let Ue=tu;const Gs=new F,li=new Ue,bE=new F(0,0,0),TE=new F(1,1,1),va=new F,wl=new F,Ln=new F,J0=new Ue,$0=new Yr;class Ja{constructor(t=0,n=0,i=0,a=Ja.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],u=a[5],h=a[9],p=a[2],c=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return J0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return $0.setFromEuler(this),this.setFromQuaternion($0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ja.DEFAULT_ORDER="XYZ";class uS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AE=0;const tg=new F,Vs=new Yr,Gi=new Ue,Dl=new F,io=new F,RE=new F,CE=new Yr,eg=new F(1,0,0),ng=new F(0,1,0),ig=new F(0,0,1),ag={type:"added"},wE={type:"removed"},ks={type:"childadded",child:null},xf={type:"childremoved",child:null};class fn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new F,n=new Ja,i=new Yr,a=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Nt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Vs.setFromAxisAngle(t,n),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,n){return Vs.setFromAxisAngle(t,n),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(eg,t)}rotateY(t){return this.rotateOnAxis(ng,t)}rotateZ(t){return this.rotateOnAxis(ig,t)}translateOnAxis(t,n){return tg.copy(t).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(eg,t)}translateY(t){return this.translateOnAxis(ng,t)}translateZ(t){return this.translateOnAxis(ig,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Dl.copy(t):Dl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(io,Dl,this.up):Gi.lookAt(Dl,io,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ag),ks.child=t,this.dispatchEvent(ks),ks.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(wE),xf.child=t,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ag),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,RE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,CE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),u=r(t.textures),h=r(t.images),p=r(t.shapes),c=r(t.skeletons),d=r(t.animations),S=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),c.length>0&&(i.skeletons=c),d.length>0&&(i.animations=d),S.length>0&&(i.nodes=S)}return i.object=a,i;function r(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}fn.DEFAULT_UP=new F(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ul extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const b of t.hand.values()){const _=n.getJointPose(b,i),f=this._getHandJoint(u,b);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=h.position.distanceTo(p.position),d=.02,S=.005;u.inputState.pinching&&c>d+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=d-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ul;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const fS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xa={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function yf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class qt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Kt.workingColorSpace){if(t=_E(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=yf(r,s,t+1/3),this.g=yf(r,s,t),this.b=yf(r,s,t-1/3)}return Kt.colorSpaceToWorking(this,a),this}setStyle(t,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Kn){const i=fS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Kt.workingToColorSpace(pn.copy(this),t),Math.round(jt(pn.r*255,0,255))*65536+Math.round(jt(pn.g*255,0,255))*256+Math.round(jt(pn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(pn.copy(this),n);const i=pn.r,a=pn.g,s=pn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,u;const h=(o+r)/2;if(o===r)l=0,u=0;else{const p=r-o;switch(u=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(pn.copy(this),n),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Kn){Kt.workingToColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,a=pn.b;return t!==Kn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(xa),this.setHSL(xa.h+t,xa.s+n,xa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(xa),t.getHSL(Nl);const i=pf(xa.h,Nl.h,n),a=pf(xa.s,Nl.s,n),s=pf(xa.l,Nl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new qt;qt.NAMES=fS;class Xp{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=n,this.far=i}clone(){return new Xp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class UE extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ja,this.environmentIntensity=1,this.environmentRotation=new Ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ci=new F,Vi=new F,Mf=new F,ki=new F,Xs=new F,Ws=new F,sg=new F,Ef=new F,bf=new F,Tf=new F,Af=new Te,Rf=new Te,Cf=new Te;class di{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ci.subVectors(t,n),a.cross(ci);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ci.subVectors(a,n),Vi.subVectors(i,n),Mf.subVectors(t,n);const r=ci.dot(ci),o=ci.dot(Vi),l=ci.dot(Mf),u=Vi.dot(Vi),h=Vi.dot(Mf),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;const c=1/p,d=(u*l-o*h)*c,S=(r*h-o*l)*c;return s.set(1-d-S,S,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(r,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Af.setScalar(0),Rf.setScalar(0),Cf.setScalar(0),Af.fromBufferAttribute(t,n),Rf.fromBufferAttribute(t,i),Cf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Af,s.x),r.addScaledVector(Rf,s.y),r.addScaledVector(Cf,s.z),r}static isFrontFacing(t,n,i,a){return ci.subVectors(i,n),Vi.subVectors(t,n),ci.cross(Vi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ci.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return di.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return di.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Xs.subVectors(a,i),Ws.subVectors(s,i),Ef.subVectors(t,i);const l=Xs.dot(Ef),u=Ws.dot(Ef);if(l<=0&&u<=0)return n.copy(i);bf.subVectors(t,a);const h=Xs.dot(bf),p=Ws.dot(bf);if(h>=0&&p<=h)return n.copy(a);const c=l*p-h*u;if(c<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Xs,r);Tf.subVectors(t,s);const d=Xs.dot(Tf),S=Ws.dot(Tf);if(S>=0&&d<=S)return n.copy(s);const b=d*u-l*S;if(b<=0&&u>=0&&S<=0)return o=u/(u-S),n.copy(i).addScaledVector(Ws,o);const _=h*S-d*p;if(_<=0&&p-h>=0&&d-S>=0)return sg.subVectors(s,a),o=(p-h)/(p-h+(d-S)),n.copy(a).addScaledVector(sg,o);const f=1/(_+b+c);return r=b*f,o=c*f,n.copy(i).addScaledVector(Xs,r).addScaledVector(Ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ol{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ui.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ui):ui.fromBufferAttribute(s,r),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ao),Ol.subVectors(this.max,ao),qs.subVectors(t.a,ao),Ys.subVectors(t.b,ao),Zs.subVectors(t.c,ao),Sa.subVectors(Ys,qs),ya.subVectors(Zs,Ys),is.subVectors(qs,Zs);let n=[0,-Sa.z,Sa.y,0,-ya.z,ya.y,0,-is.z,is.y,Sa.z,0,-Sa.x,ya.z,0,-ya.x,is.z,0,-is.x,-Sa.y,Sa.x,0,-ya.y,ya.x,0,-is.y,is.x,0];return!wf(n,qs,Ys,Zs,Ol)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,qs,Ys,Zs,Ol))?!1:(Pl.crossVectors(Sa,ya),n=[Pl.x,Pl.y,Pl.z],wf(n,qs,Ys,Zs,Ol))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xi=[new F,new F,new F,new F,new F,new F,new F,new F],ui=new F,Ll=new ol,qs=new F,Ys=new F,Zs=new F,Sa=new F,ya=new F,is=new F,ao=new F,Ol=new F,Pl=new F,as=new F;function wf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){as.fromArray(e,s);const o=a.x*Math.abs(as.x)+a.y*Math.abs(as.y)+a.z*Math.abs(as.z),l=t.dot(as),u=n.dot(as),h=i.dot(as);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Fe=new F,zl=new Ft;let NE=0;class Ni extends Os{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=W0,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zl.fromBufferAttribute(this,n),zl.applyMatrix3(t),this.setXY(n,zl.x,zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix3(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix4(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyNormalMatrix(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.transformDirection(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=no(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),a=bn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),a=bn(a,this.array),s=bn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hS extends Ni{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class dS extends Ni{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class nn extends Ni{constructor(t,n,i){super(new Float32Array(t),n,i)}}const LE=new ol,so=new F,Df=new F;class Wp{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):LE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const n=so.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(so,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Df.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Df)),this.expandByPoint(so.copy(t.center).sub(Df))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let OE=0;const Yn=new Ue,Uf=new fn,Ks=new F,On=new ol,ro=new ol,Qe=new F;class ri extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dE(t)?dS:hS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,n,i){return Yn.makeTranslation(t,n,i),this.applyMatrix4(Yn),this}scale(t,n,i){return Yn.makeScale(t,n,i),this.applyMatrix4(Yn),this}lookAt(t){return Uf.lookAt(t),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(On.min,ro.min),On.expandByPoint(Qe),Qe.addVectors(On.max,ro.max),On.expandByPoint(Qe)):(On.expandByPoint(ro.min),On.expandByPoint(ro.max))}On.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Qe.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Qe));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Qe.fromBufferAttribute(o,u),l&&(Ks.fromBufferAttribute(t,u),Qe.add(Ks)),a=Math.max(a,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new F,l[m]=new F;const u=new F,h=new F,p=new F,c=new Ft,d=new Ft,S=new Ft,b=new F,_=new F;function f(m,E,w){u.fromBufferAttribute(i,m),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,w),c.fromBufferAttribute(s,m),d.fromBufferAttribute(s,E),S.fromBufferAttribute(s,w),h.sub(u),p.sub(u),d.sub(c),S.sub(c);const D=1/(d.x*S.y-S.x*d.y);isFinite(D)&&(b.copy(h).multiplyScalar(S.y).addScaledVector(p,-d.y).multiplyScalar(D),_.copy(p).multiplyScalar(d.x).addScaledVector(h,-S.x).multiplyScalar(D),o[m].add(b),o[E].add(b),o[w].add(b),l[m].add(_),l[E].add(_),l[w].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let m=0,E=g.length;m<E;++m){const w=g[m],D=w.start,O=w.count;for(let q=D,K=D+O;q<K;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const y=new F,v=new F,T=new F,A=new F;function R(m){T.fromBufferAttribute(a,m),A.copy(T);const E=o[m];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(A,E);const D=v.dot(l[m])<0?-1:1;r.setXYZW(m,y.x,y.y,y.z,D)}for(let m=0,E=g.length;m<E;++m){const w=g[m],D=w.start,O=w.count;for(let q=D,K=D+O;q<K;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,d=i.count;c<d;c++)i.setXYZ(c,0,0,0);const a=new F,s=new F,r=new F,o=new F,l=new F,u=new F,h=new F,p=new F;if(t)for(let c=0,d=t.count;c<d;c+=3){const S=t.getX(c+0),b=t.getX(c+1),_=t.getX(c+2);a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,_),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,_),o.add(h),l.add(h),u.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,d=n.count;c<d;c+=3)a.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),r.fromBufferAttribute(n,c+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,p=o.normalized,c=new u.constructor(l.length*h);let d=0,S=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let f=0;f<h;f++)c[S++]=u[d++]}return new Ni(c,h,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=t(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const c=u[h],d=t(c,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const u=r[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,c=u.length;p<c;p++){const d=u[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(n))}const s=t.morphAttributes;for(const u in s){const h=[],p=s[u];for(let c=0,d=p.length;c<d;c++)h.push(p[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,h=r.length;u<h;u++){const p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let PE=0;class ll extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=yr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Qa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wi=new F,Nf=new F,Il=new F,Ma=new F,Lf=new F,Bl=new F,Of=new F;class zE{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Wi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Nf.copy(t).add(n).multiplyScalar(.5),Il.copy(n).sub(t).normalize(),Ma.copy(this.origin).sub(Nf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Il),o=Ma.dot(this.direction),l=-Ma.dot(Il),u=Ma.lengthSq(),h=Math.abs(1-r*r);let p,c,d,S;if(h>0)if(p=r*l-o,c=r*o-l,S=s*h,p>=0)if(c>=-S)if(c<=S){const b=1/h;p*=b,c*=b,d=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;else c<=-S?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u):c<=S?(p=0,c=Math.min(Math.max(-s,-l),s),d=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Nf).addScaledVector(Il,c),d}intersectSphere(t,n){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),a=Wi.dot(Wi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(i=(t.min.x-c.x)*u,a=(t.max.x-c.x)*u):(i=(t.max.x-c.x)*u,a=(t.min.x-c.x)*u),h>=0?(s=(t.min.y-c.y)*h,r=(t.max.y-c.y)*h):(s=(t.max.y-c.y)*h,r=(t.min.y-c.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-c.z)*p,l=(t.max.z-c.z)*p):(o=(t.max.z-c.z)*p,l=(t.min.z-c.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,n,i,a,s){Lf.subVectors(n,t),Bl.subVectors(i,t),Of.crossVectors(Lf,Bl);let r=this.direction.dot(Of),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ma.subVectors(this.origin,t);const l=o*this.direction.dot(Bl.crossVectors(Ma,Bl));if(l<0)return null;const u=o*this.direction.dot(Lf.cross(Ma));if(u<0||l+u>r)return null;const h=-o*Ma.dot(Of);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $c extends ll{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ja,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rg=new Ue,ss=new zE,Fl=new Wp,og=new F,Hl=new F,Gl=new F,Vl=new F,Pf=new F,kl=new F,lg=new F,Xl=new F;class He extends fn{constructor(t=new ri,n=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){kl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(Pf.fromBufferAttribute(p,t),r?kl.addScaledVector(Pf,h):kl.addScaledVector(Pf.sub(n),h))}n.add(kl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),ss.copy(t.ray).recast(t.near),!(Fl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Fl,og)===null||ss.origin.distanceToSquared(og)>(t.far-t.near)**2))&&(rg.copy(s).invert(),ss.copy(t.ray).applyMatrix4(rg),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ss)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,c=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,b=c.length;S<b;S++){const _=c[S],f=r[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){const A=o.getX(v),R=o.getX(v+1),m=o.getX(v+2);a=Wl(this,f,t,i,u,h,p,A,R,m),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const S=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let _=S,f=b;_<f;_+=3){const g=o.getX(_),y=o.getX(_+1),v=o.getX(_+2);a=Wl(this,r,t,i,u,h,p,g,y,v),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,b=c.length;S<b;S++){const _=c[S],f=r[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){const A=v,R=v+1,m=v+2;a=Wl(this,f,t,i,u,h,p,A,R,m),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const S=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let _=S,f=b;_<f;_+=3){const g=_,y=_+1,v=_+2;a=Wl(this,r,t,i,u,h,p,g,y,v),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function IE(e,t,n,i,a,s,r,o){let l;if(t.side===wn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Qa,o),l===null)return null;Xl.copy(o),Xl.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Xl);return u<n.near||u>n.far?null:{distance:u,point:Xl.clone(),object:e}}function Wl(e,t,n,i,a,s,r,o,l,u){e.getVertexPosition(o,Hl),e.getVertexPosition(l,Gl),e.getVertexPosition(u,Vl);const h=IE(e,t,n,i,Hl,Gl,Vl,lg);if(h){const p=new F;di.getBarycoord(lg,Hl,Gl,Vl,p),a&&(h.uv=di.getInterpolatedAttribute(a,o,l,u,p,new Ft)),s&&(h.uv1=di.getInterpolatedAttribute(s,o,l,u,p,new Ft)),r&&(h.normal=di.getInterpolatedAttribute(r,o,l,u,p,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new F,materialIndex:0};di.getNormal(Hl,Gl,Vl,c.normal),h.face=c,h.barycoord=p}return h}class BE extends xn{constructor(t=null,n=1,i=1,a,s,r,o,l,u=cn,h=cn,p,c){super(null,r,o,l,u,h,a,s,p,c),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zf=new F,FE=new F,HE=new Nt;class fs{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=zf.subVectors(i,n).cross(FE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(zf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||HE.getNormalMatrix(t),a=this.coplanarPoint(zf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Wp,GE=new Ft(.5,.5),ql=new F;class qp{constructor(t=new fs,n=new fs,i=new fs,a=new fs,s=new fs,r=new fs){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ci,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],c=s[6],d=s[7],S=s[8],b=s[9],_=s[10],f=s[11],g=s[12],y=s[13],v=s[14],T=s[15];if(a[0].setComponents(u-r,d-h,f-S,T-g).normalize(),a[1].setComponents(u+r,d+h,f+S,T+g).normalize(),a[2].setComponents(u+o,d+p,f+b,T+y).normalize(),a[3].setComponents(u-o,d-p,f-b,T-y).normalize(),i)a[4].setComponents(l,c,_,v).normalize(),a[5].setComponents(u-l,d-c,f-_,T-v).normalize();else if(a[4].setComponents(u-l,d-c,f-_,T-v).normalize(),n===Ci)a[5].setComponents(u+l,d+c,f+_,T+v).normalize();else if(n===Yo)a[5].setComponents(l,c,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const n=GE.distanceTo(t.center);return rs.radius=.7071067811865476+n,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(ql.x=a.normal.x>0?t.max.x:t.min.x,ql.y=a.normal.y>0?t.max.y:t.min.y,ql.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ql)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pS extends xn{constructor(t=[],n=Rs,i,a,s,r,o,l,u,h){super(t,n,i,a,s,r,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ir extends xn{constructor(t,n,i=Li,a,s,r,o=cn,l=cn,u,h=ha,p=1){if(h!==ha&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:t,height:n,depth:p};super(c,a,s,r,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class VE extends Ir{constructor(t,n=Li,i=Rs,a,s,r=cn,o=cn,l,u=ha){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mS extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ta extends ri{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],u=[],h=[],p=[];let c=0,d=0;S("z","y","x",-1,-1,i,n,t,r,s,0),S("z","y","x",1,-1,i,n,-t,r,s,1),S("x","z","y",1,1,t,i,n,a,r,2),S("x","z","y",1,-1,t,i,-n,a,r,3),S("x","y","z",1,-1,t,n,i,a,s,4),S("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2));function S(b,_,f,g,y,v,T,A,R,m,E){const w=v/R,D=T/m,O=v/2,q=T/2,K=A/2,H=R+1,L=m+1;let z=0,X=0;const tt=new F;for(let nt=0;nt<L;nt++){const ft=nt*D-q;for(let _t=0;_t<H;_t++){const Zt=_t*w-O;tt[b]=Zt*g,tt[_]=ft*y,tt[f]=K,u.push(tt.x,tt.y,tt.z),tt[b]=0,tt[_]=0,tt[f]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(_t/R),p.push(1-nt/m),z+=1}}for(let nt=0;nt<m;nt++)for(let ft=0;ft<R;ft++){const _t=c+ft+H*nt,Zt=c+ft+H*(nt+1),se=c+(ft+1)+H*(nt+1),Xt=c+(ft+1)+H*nt;l.push(_t,Zt,Xt),l.push(Zt,se,Xt),X+=6}o.addGroup(d,X,E),d+=X,c+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gs extends ri{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const u=this;a=Math.floor(a),s=Math.floor(s);const h=[],p=[],c=[],d=[];let S=0;const b=[],_=i/2;let f=0;g(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(d,2));function g(){const v=new F,T=new F;let A=0;const R=(n-t)/i;for(let m=0;m<=s;m++){const E=[],w=m/s,D=w*(n-t)+t;for(let O=0;O<=a;O++){const q=O/a,K=q*l+o,H=Math.sin(K),L=Math.cos(K);T.x=D*H,T.y=-w*i+_,T.z=D*L,p.push(T.x,T.y,T.z),v.set(H,R,L).normalize(),c.push(v.x,v.y,v.z),d.push(q,1-w),E.push(S++)}b.push(E)}for(let m=0;m<a;m++)for(let E=0;E<s;E++){const w=b[E][m],D=b[E+1][m],O=b[E+1][m+1],q=b[E][m+1];(t>0||E!==0)&&(h.push(w,D,q),A+=3),(n>0||E!==s-1)&&(h.push(D,O,q),A+=3)}u.addGroup(f,A,0),f+=A}function y(v){const T=S,A=new Ft,R=new F;let m=0;const E=v===!0?t:n,w=v===!0?1:-1;for(let O=1;O<=a;O++)p.push(0,_*w,0),c.push(0,w,0),d.push(.5,.5),S++;const D=S;for(let O=0;O<=a;O++){const K=O/a*l+o,H=Math.cos(K),L=Math.sin(K);R.x=E*L,R.y=_*w,R.z=E*H,p.push(R.x,R.y,R.z),c.push(0,w,0),A.x=H*.5+.5,A.y=L*.5*w+.5,d.push(A.x,A.y),S++}for(let O=0;O<a;O++){const q=T+O,K=D+O;v===!0?h.push(K,K+1,q):h.push(K+1,K,q),m+=3}u.addGroup(f,m,v===!0?1:2),f+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yp extends gs{constructor(t=1,n=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,t,n,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Yp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yu extends ri{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),u(i),h(),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(s.slice(),3)),this.setAttribute("uv",new nn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const y=new F,v=new F,T=new F;for(let A=0;A<n.length;A+=3)d(n[A+0],y),d(n[A+1],v),d(n[A+2],T),l(y,v,T,g)}function l(g,y,v,T){const A=T+1,R=[];for(let m=0;m<=A;m++){R[m]=[];const E=g.clone().lerp(v,m/A),w=y.clone().lerp(v,m/A),D=A-m;for(let O=0;O<=D;O++)O===0&&m===A?R[m][O]=E:R[m][O]=E.clone().lerp(w,O/D)}for(let m=0;m<A;m++)for(let E=0;E<2*(A-m)-1;E++){const w=Math.floor(E/2);E%2===0?(c(R[m][w+1]),c(R[m+1][w]),c(R[m][w])):(c(R[m][w+1]),c(R[m+1][w+1]),c(R[m+1][w]))}}function u(g){const y=new F;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(g),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const g=new F;for(let y=0;y<s.length;y+=3){g.x=s[y+0],g.y=s[y+1],g.z=s[y+2];const v=_(g)/2/Math.PI+.5,T=f(g)/Math.PI+.5;r.push(v,1-T)}S(),p()}function p(){for(let g=0;g<r.length;g+=6){const y=r[g+0],v=r[g+2],T=r[g+4],A=Math.max(y,v,T),R=Math.min(y,v,T);A>.9&&R<.1&&(y<.2&&(r[g+0]+=1),v<.2&&(r[g+2]+=1),T<.2&&(r[g+4]+=1))}}function c(g){s.push(g.x,g.y,g.z)}function d(g,y){const v=g*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function S(){const g=new F,y=new F,v=new F,T=new F,A=new Ft,R=new Ft,m=new Ft;for(let E=0,w=0;E<s.length;E+=9,w+=6){g.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),A.set(r[w+0],r[w+1]),R.set(r[w+2],r[w+3]),m.set(r[w+4],r[w+5]),T.copy(g).add(y).add(v).divideScalar(3);const D=_(T);b(A,w+0,g,D),b(R,w+2,y,D),b(m,w+4,v,D)}}function b(g,y,v,T){T<0&&g.x===1&&(r[y]=g.x-1),v.x===0&&v.z===0&&(r[y]=T/2/Math.PI+.5)}function _(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.vertices,t.indices,t.radius,t.detail)}}class Zp extends yu{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Zp(t.radius,t.detail)}}class Kp extends yu{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Kp(t.radius,t.detail)}}class cl extends ri{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,h=l+1,p=t/o,c=n/l,d=[],S=[],b=[],_=[];for(let f=0;f<h;f++){const g=f*c-r;for(let y=0;y<u;y++){const v=y*p-s;S.push(v,-g,0),b.push(0,0,1),_.push(y/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const y=g+u*f,v=g+u*(f+1),T=g+1+u*(f+1),A=g+1+u*f;d.push(y,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(b,3)),this.setAttribute("uv",new nn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}class jp extends ri{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let u=0;const h=[],p=new F,c=new F,d=[],S=[],b=[],_=[];for(let f=0;f<=i;f++){const g=[],y=f/i,v=r+y*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T);let R=0;f===0&&r===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let m=0;m<=n;m++){const E=m/n,w=a+E*s;p.x=-A*Math.cos(w),p.y=T,p.z=A*Math.sin(w),S.push(p.x,p.y,p.z),c.copy(p).normalize(),b.push(c.x,c.y,c.z),_.push(E+R,1-y),g.push(u++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const y=h[f][g+1],v=h[f][g],T=h[f+1][g],A=h[f+1][g+1];(f!==0||r>0)&&d.push(y,v,A),(f!==i-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(b,3)),this.setAttribute("uv",new nn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Br(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(cg(a))a.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(cg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function gn(e){const t={};for(let n=0;n<e.length;n++){const i=Br(e[n]);for(const a in i)t[a]=i[a]}return t}function cg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function kE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function gS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const XE={clone:Br,merge:gn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ll{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=kE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(a.value);break;case"v3":this.uniforms[i].value=new F().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class YE extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qi extends ll{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ja,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ZE extends ll{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KE extends ll{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _S extends fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class jE extends _S{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const If=new Ue,ug=new F,fg=new F;class QE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(t.matrixWorld),n.position.copy(ug),fg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fg),n.updateMatrixWorld(),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Yo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(If)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yl=new F,Zl=new Yr,xi=new F;class vS extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yl,Zl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Zl,xi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Yl,Zl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Zl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ea=new F,hg=new Ft,dg=new Ft;class $n extends vS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,hg,dg),n.subVectors(dg,hg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(df*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/u,a*=r.width/l,i*=r.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Qp extends vS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JE extends QE{constructor(){super(new Qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $E extends _S{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new JE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const js=-90,Qs=1;class tb extends fn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(js,Qs,t,n);a.layers=this.layers,this.add(a);const s=new $n(js,Qs,t,n);s.layers=this.layers,this.add(s);const r=new $n(js,Qs,t,n);r.layers=this.layers,this.add(r);const o=new $n(js,Qs,t,n);o.layers=this.layers,this.add(o);const l=new $n(js,Qs,t,n);l.layers=this.layers,this.add(l);const u=new $n(js,Qs,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const u of n)this.remove(u);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,u,h]=this.children,p=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,c,d),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class eb extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const nm=class nm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};nm.prototype.isMatrix2=!0;let pg=nm;function mg(e,t,n,i){const a=nb(i);switch(n){case sS:return e*t;case oS:return e*t/a.components*a.byteLength;case Bp:return e*t/a.components*a.byteLength;case Cs:return e*t*2/a.components*a.byteLength;case Fp:return e*t*2/a.components*a.byteLength;case rS:return e*t*3/a.components*a.byteLength;case pi:return e*t*4/a.components*a.byteLength;case Hp:return e*t*4/a.components*a.byteLength;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case td:case nd:return Math.max(e,16)*Math.max(t,8)/4;case $h:case ed:return Math.max(e,8)*Math.max(t,8)/2;case id:case ad:case rd:case od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sd:case Zc:case ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case dd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case md:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case gd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _d:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case vd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case yd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Md:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ed:case bd:case Td:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ad:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kc:case Cd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nb(e){switch(e){case Bn:case eS:return{byteLength:1,components:1};case Wo:case nS:case fa:return{byteLength:2,components:1};case zp:case Ip:return{byteLength:2,components:4};case Li:case Pp:case Ri:return{byteLength:4,components:1};case iS:case aS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function ib(e){const t=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,u,h),o.onUploadCallback();let d;if(u instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=e.SHORT;else if(u instanceof Uint32Array)d=e.UNSIGNED_INT;else if(u instanceof Int32Array)d=e.INT;else if(u instanceof Int8Array)d=e.BYTE;else if(u instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(e.bindBuffer(u,o),p.length===0)e.bufferSubData(u,0,h);else{p.sort((d,S)=>d.start-S.start);let c=0;for(let d=1;d<p.length;d++){const S=p[c],b=p[d];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++c,p[c]=b)}p.length=c+1;for(let d=0,S=p.length;d<S;d++){const b=p[d];e.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:s,update:r}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
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
#endif`,rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
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
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_b=`#ifdef USE_IRIDESCENCE
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
#endif`,vb=`#ifdef USE_BUMPMAP
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rb=`#define PI 3.141592653589793
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
} // validated`,Cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wb=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
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
#endif`,Fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
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
}`,qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jb=`#ifdef USE_ENVMAP
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
#endif`,nT=`uniform sampler2D dfgLUT;
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pT=`#if defined( USE_POINTS_UV )
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
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
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
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kT=`float getShadowMask() {
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
}`,XT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,fA=`#if DEPTH_PACKING == 3200
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
}`,hA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`uniform float scale;
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,SA=`#define LAMBERT
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
}`,yA=`#define LAMBERT
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
}`,MA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
}`,bA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,RA=`#define PHONG
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
}`,CA=`#define STANDARD
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
}`,wA=`#define STANDARD
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
}`,DA=`#define TOON
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
}`,UA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,PA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ab,alphahash_pars_fragment:sb,alphamap_fragment:rb,alphamap_pars_fragment:ob,alphatest_fragment:lb,alphatest_pars_fragment:cb,aomap_fragment:ub,aomap_pars_fragment:fb,batching_pars_vertex:hb,batching_vertex:db,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:_b,bumpmap_pars_fragment:vb,clipping_planes_fragment:xb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Mb,color_fragment:Eb,color_pars_fragment:bb,color_pars_vertex:Tb,color_vertex:Ab,common:Rb,cube_uv_reflection_fragment:Cb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Db,displacementmap_vertex:Ub,emissivemap_fragment:Nb,emissivemap_pars_fragment:Lb,colorspace_fragment:Ob,colorspace_pars_fragment:Pb,envmap_fragment:zb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Bb,envmap_pars_vertex:Fb,envmap_physical_pars_fragment:jb,envmap_vertex:Hb,fog_vertex:Gb,fog_pars_vertex:Vb,fog_fragment:kb,fog_pars_fragment:Xb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:qb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:Zb,lights_pars_begin:Kb,lights_toon_fragment:Qb,lights_toon_pars_fragment:Jb,lights_phong_fragment:$b,lights_phong_pars_fragment:tT,lights_physical_fragment:eT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:sT,lightprobes_pars_fragment:rT,logdepthbuf_fragment:oT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:fT,map_pars_fragment:hT,map_particle_fragment:dT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:ST,morphtarget_vertex:yT,normal_fragment_begin:MT,normal_fragment_maps:ET,normal_pars_fragment:bT,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:LT,premultiplied_alpha_fragment:OT,project_vertex:PT,dithering_fragment:zT,dithering_pars_fragment:IT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:GT,shadowmap_vertex:VT,shadowmask_pars_fragment:kT,skinbase_vertex:XT,skinning_pars_vertex:WT,skinning_vertex:qT,skinnormal_vertex:YT,specularmap_fragment:ZT,specularmap_pars_fragment:KT,tonemapping_fragment:jT,tonemapping_pars_fragment:QT,transmission_fragment:JT,transmission_pars_fragment:$T,uv_pars_fragment:tA,uv_pars_vertex:eA,uv_vertex:nA,worldpos_vertex:iA,background_vert:aA,background_frag:sA,backgroundCube_vert:rA,backgroundCube_frag:oA,cube_vert:lA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distance_vert:hA,distance_frag:dA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:_A,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:SA,meshlambert_frag:yA,meshmatcap_vert:MA,meshmatcap_frag:EA,meshnormal_vert:bA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:RA,meshphysical_vert:CA,meshphysical_frag:wA,meshtoon_vert:DA,meshtoon_frag:UA,points_vert:NA,points_frag:LA,shadow_vert:OA,shadow_frag:PA,sprite_vert:zA,sprite_frag:IA},dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Mi={basic:{uniforms:gn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:gn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:gn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:gn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:gn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:gn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:gn([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:gn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:gn([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:gn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:gn([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:gn([dt.common,dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:gn([dt.lights,dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mi.physical={uniforms:gn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Kl={r:0,b:0,g:0},BA=new Ue,SS=new Nt;SS.set(-1,0,0,0,1,0,0,0,1);function FA(e,t,n,i,a,s){const r=new qt(0);let o=a===!0?0:1,l,u,h=null,p=0,c=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const v=g.backgroundBlurriness>0;y=t.get(y,v)}return y}function S(g){let y=!1;const v=d(g);v===null?_(r,o):v&&v.isColor&&(_(v,1),y=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(g,y){const v=d(y);v&&(v.isCubeTexture||v.mapping===Su)?(u===void 0&&(u=new He(new ta(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Br(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(SS),u.material.toneMapped=Kt.getTransfer(v.colorSpace)!==oe,(h!==v||p!==v.version||c!==e.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,c=e.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new He(new cl(2,2),new Oi({name:"BackgroundMaterial",uniforms:Br(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,c=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,y){g.getRGB(Kl,gS(e)),n.buffers.color.setClear(Kl.r,Kl.g,Kl.b,y,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,y=1){r.set(g),o=y,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(r,o)},render:S,addToRenderList:b,dispose:f}}function HA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=c(null);let s=a,r=!1;function o(D,O,q,K,H){let L=!1;const z=p(D,K,q,O);s!==z&&(s=z,u(s.object)),L=d(D,K,q,H),L&&S(D,K,q,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,v(D,O,q,K),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function u(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function p(D,O,q,K){const H=K.wireframe===!0;let L=i[O.id];L===void 0&&(L={},i[O.id]=L);const z=D.isInstancedMesh===!0?D.id:0;let X=L[z];X===void 0&&(X={},L[z]=X);let tt=X[q.id];tt===void 0&&(tt={},X[q.id]=tt);let nt=tt[H];return nt===void 0&&(nt=c(l()),tt[H]=nt),nt}function c(D){const O=[],q=[],K=[];for(let H=0;H<n;H++)O[H]=0,q[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:K,object:D,attributes:{},index:null}}function d(D,O,q,K){const H=s.attributes,L=O.attributes;let z=0;const X=q.getAttributes();for(const tt in X)if(X[tt].location>=0){const ft=H[tt];let _t=L[tt];if(_t===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(_t=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(_t=D.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function S(D,O,q,K){const H={},L=O.attributes;let z=0;const X=q.getAttributes();for(const tt in X)if(X[tt].location>=0){let ft=L[tt];ft===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),H[tt]=_t,z++}s.attributes=H,s.attributesNum=z,s.index=K}function b(){const D=s.newAttributes;for(let O=0,q=D.length;O<q;O++)D[O]=0}function _(D){f(D,0)}function f(D,O){const q=s.newAttributes,K=s.enabledAttributes,H=s.attributeDivisors;q[D]=1,K[D]===0&&(e.enableVertexAttribArray(D),K[D]=1),H[D]!==O&&(e.vertexAttribDivisor(D,O),H[D]=O)}function g(){const D=s.newAttributes,O=s.enabledAttributes;for(let q=0,K=O.length;q<K;q++)O[q]!==D[q]&&(e.disableVertexAttribArray(q),O[q]=0)}function y(D,O,q,K,H,L,z){z===!0?e.vertexAttribIPointer(D,O,q,H,L):e.vertexAttribPointer(D,O,q,K,H,L)}function v(D,O,q,K){b();const H=K.attributes,L=q.getAttributes(),z=O.defaultAttributeValues;for(const X in L){const tt=L[X];if(tt.location>=0){let nt=H[X];if(nt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),nt!==void 0){const ft=nt.normalized,_t=nt.itemSize,Zt=t.get(nt);if(Zt===void 0)continue;const se=Zt.buffer,Xt=Zt.type,J=Zt.bytesPerElement,rt=Xt===e.INT||Xt===e.UNSIGNED_INT||nt.gpuType===Pp;if(nt.isInterleavedBufferAttribute){const it=nt.data,Ut=it.stride,Ot=nt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<tt.locationSize;Rt++)f(tt.location+Rt,it.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<tt.locationSize;Rt++)_(tt.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,se);for(let Rt=0;Rt<tt.locationSize;Rt++)y(tt.location+Rt,_t/tt.locationSize,Xt,ft,Ut*J,(Ot+_t/tt.locationSize*Rt)*J,rt)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<tt.locationSize;it++)f(tt.location+it,nt.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<tt.locationSize;it++)_(tt.location+it);e.bindBuffer(e.ARRAY_BUFFER,se);for(let it=0;it<tt.locationSize;it++)y(tt.location+it,_t/tt.locationSize,Xt,ft,_t*J,_t/tt.locationSize*it*J,rt)}}else if(z!==void 0){const ft=z[X];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(tt.location,ft);break;case 3:e.vertexAttrib3fv(tt.location,ft);break;case 4:e.vertexAttrib4fv(tt.location,ft);break;default:e.vertexAttrib1fv(tt.location,ft)}}}}g()}function T(){E();for(const D in i){const O=i[D];for(const q in O){const K=O[q];for(const H in K){const L=K[H];for(const z in L)h(L[z].object),delete L[z];delete K[H]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const q in O){const K=O[q];for(const H in K){const L=K[H];for(const z in L)h(L[z].object),delete L[z];delete K[H]}}delete i[D.id]}function R(D){for(const O in i){const q=i[O];for(const K in q){const H=q[K];if(H[D.id]===void 0)continue;const L=H[D.id];for(const z in L)h(L[z].object),delete L[z];delete H[D.id]}}}function m(D){for(const O in i){const q=i[O],K=D.isInstancedMesh===!0?D.id:0,H=q[K];if(H!==void 0){for(const L in H){const z=H[L];for(const X in z)h(z[X].object),delete z[X];delete H[L]}delete q[K],Object.keys(q).length===0&&delete i[O]}}}function E(){w(),r=!0,s!==a&&(s=a,u(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:_,disableUnusedAttributes:g}}function GA(e,t,n){let i;function a(l){i=l}function s(l,u){e.drawArrays(i,l,u),n.update(u,i,1)}function r(l,u,h){h!==0&&(e.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let c=0;for(let d=0;d<h;d++)c+=u[d];n.update(c,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function VA(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==pi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const m=R===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Bn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ri&&!m)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(Dt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:A}}function kA(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new fs,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const d=p.length!==0||c||i!==0||a;return a=c,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){n=h(p,c,0)},this.setState=function(p,c,d){const S=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,f=e.get(p);if(!a||S===null||S.length===0||s&&!_)s?h(null):u();else{const g=s?0:i,y=g*4;let v=f.clippingState||null;l.value=v,v=h(S,c,y,d);for(let T=0;T!==y;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,c,d,S){const b=p!==null?p.length:0;let _=null;if(b!==0){if(_=l.value,S!==!0||_===null){const f=d+b*4,g=c.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let y=0,v=d;y!==b;++y,v+=4)r.copy(p[y]).applyMatrix4(g,o),r.normal.toArray(_,v),_[v+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}const Ia=4,gg=[.125,.215,.35,.446,.526,.582],ds=20,XA=256,oo=new Qp,_g=new qt;let Bf=null,Ff=0,Hf=0,Gf=!1;const WA=new F;class vg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=WA}=s;Bf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bf,Ff,Hf),this._renderer.xr.enabled=Gf,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Rs||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:fa,format:pi,colorSpace:jc,depthBuffer:!1},a=xg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qA(s)),this._blurMaterial=ZA(s,t,n),this._ggxMaterial=YA(s,t,n)}return a}_compileMaterial(t){const n=new He(new ri,t);this._renderer.compile(n,oo)}_sceneToCubeUV(t,n,i,a,s){const l=new $n(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,d=p.toneMapping;p.getClearColor(_g),p.toneMapping=Di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new ta,new $c({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let f=!1;const g=t.background;g?g.isColor&&(_.color.copy(g),t.background=null,f=!0):(_.color.copy(_g),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const T=this._cubeSize;Js(a,v*T,y>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=c,t.background=g}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Rs||t.mapping===zr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,oo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),c=0+u*1.25,d=p*c,{_lodMax:S}=this,b=this._sizeLods[i],_=3*b*(i>S-Ia?i-S+Ia:0),f=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=S-n,Js(s,_,f,3*b,2*b),a.setRenderTarget(s),a.render(o,oo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,Js(t,_,f,3*b,2*b),a.setRenderTarget(t),a.render(o,oo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[a];p.material=u;const c=u.uniforms,d=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ds-1),b=s/S,_=isFinite(s)?1+Math.floor(h*b):ds;_>ds&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ds}`);const f=[];let g=0;for(let R=0;R<ds;++R){const m=R/b,E=Math.exp(-m*m/2);f.push(E),R===0?g+=E:R<_&&(g+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;c.envMap.value=t.texture,c.samples.value=_,c.weights.value=f,c.latitudinal.value=r==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=S,c.mipInt.value=y-i;const v=this._sizeLods[a],T=3*v*(a>y-Ia?a-y+Ia:0),A=4*(this._cubeSize-v);Js(n,T,A,3*v,2*v),l.setRenderTarget(n),l.render(p,oo)}}function qA(e){const t=[],n=[],i=[];let a=e;const s=e-Ia+1+gg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Ia?l=gg[r-e+Ia-1]:r===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,p=1+u,c=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,S=6,b=3,_=2,f=1,g=new Float32Array(b*S*d),y=new Float32Array(_*S*d),v=new Float32Array(f*S*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,m=A>2?0:-1,E=[R,m,0,R+2/3,m,0,R+2/3,m+1,0,R,m,0,R+2/3,m+1,0,R,m+1,0];g.set(E,b*S*A),y.set(c,_*S*A);const w=[A,A,A,A,A,A];v.set(w,f*S*A)}const T=new ri;T.setAttribute("position",new Ni(g,b)),T.setAttribute("uv",new Ni(y,_)),T.setAttribute("faceIndex",new Ni(v,f)),i.push(new He(T,null)),a>Ia&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function xg(e,t,n){const i=new Ui(e,t,n);return i.texture.mapping=Su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function YA(e,t,n){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function ZA(e,t,n){const i=new Float32Array(ds),a=new F(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Sg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function yg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}class yS extends Ui{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new pS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ta(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:aa});s.uniforms.tEquirect.value=n;const r=new He(a,s),o=n.minFilter;return n.minFilter===ps&&(n.minFilter=mn),new tb(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function KA(e){let t=new WeakMap,n=new WeakMap,i=null;function a(c,d=!1){return c==null?null:d?r(c):s(c)}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===uf||d===ff)if(t.has(c)){const S=t.get(c).texture;return o(S,c.mapping)}else{const S=c.image;if(S&&S.height>0){const b=new yS(S.height);return b.fromEquirectangularTexture(e,c),t.set(c,b),c.addEventListener("dispose",u),o(b.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture){const d=c.mapping,S=d===uf||d===ff,b=d===Rs||d===zr;if(S||b){let _=n.get(c);const f=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new vg(e)),_=S?i.fromEquirectangular(c,_):i.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,n.set(c,_),_.texture;if(_!==void 0)return _.texture;{const g=c.image;return S&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new vg(e)),_=S?i.fromEquirectangular(c):i.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,n.set(c,_),c.addEventListener("dispose",h),_.texture):null}}}return c}function o(c,d){return d===uf?c.mapping=Rs:d===ff&&(c.mapping=zr),c}function l(c){let d=0;const S=6;for(let b=0;b<S;b++)c[b]!==void 0&&d++;return d===S}function u(c){const d=c.target;d.removeEventListener("dispose",u);const S=t.get(d);S!==void 0&&(t.delete(d),S.dispose())}function h(c){const d=c.target;d.removeEventListener("dispose",h);const S=n.get(d);S!==void 0&&(n.delete(d),S.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function jA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Mr("WebGLRenderer: "+i+" extension not supported."),a}}}function QA(e,t,n,i){const a={},s=new WeakMap;function r(p){const c=p.target;c.index!==null&&t.remove(c.index);for(const S in c.attributes)t.remove(c.attributes[S]);c.removeEventListener("dispose",r),delete a[c.id];const d=s.get(c);d&&(t.remove(d),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(p,c){return a[c.id]===!0||(c.addEventListener("dispose",r),a[c.id]=!0,n.memory.geometries++),c}function l(p){const c=p.attributes;for(const d in c)t.update(c[d],e.ARRAY_BUFFER)}function u(p){const c=[],d=p.index,S=p.attributes.position;let b=0;if(S===void 0)return;if(d!==null){const g=d.array;b=d.version;for(let y=0,v=g.length;y<v;y+=3){const T=g[y+0],A=g[y+1],R=g[y+2];c.push(T,A,A,R,R,T)}}else{const g=S.array;b=S.version;for(let y=0,v=g.length/3-1;y<v;y+=3){const T=y+0,A=y+1,R=y+2;c.push(T,A,A,R,R,T)}}const _=new(S.count>=65535?dS:hS)(c,1);_.version=b;const f=s.get(p);f&&t.remove(f),s.set(p,_)}function h(p){const c=s.get(p);if(c){const d=p.index;d!==null&&c.version<d.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function JA(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){e.drawElements(i,c,s,p*r),n.update(c,i,1)}function u(p,c,d){d!==0&&(e.drawElementsInstanced(i,c,s,p*r,d),n.update(c,i,d))}function h(p,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,p,0,d);let b=0;for(let _=0;_<d;_++)b+=c[_];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function $A(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function tR(e,t,n){const i=new WeakMap,a=new Te;function s(r,o,l){const u=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let c=i.get(o);if(c===void 0||c.count!==p){let w=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var d=w;c!==void 0&&c.texture.dispose();const S=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;S===!0&&(v=1),b===!0&&(v=2),_===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*A*4*p),m=new cS(R,T,A,p);m.type=Ri,m.needsUpdate=!0;const E=v*4;for(let D=0;D<p;D++){const O=f[D],q=g[D],K=y[D],H=T*A*4*D;for(let L=0;L<O.count;L++){const z=L*E;S===!0&&(a.fromBufferAttribute(O,L),R[H+z+0]=a.x,R[H+z+1]=a.y,R[H+z+2]=a.z,R[H+z+3]=0),b===!0&&(a.fromBufferAttribute(q,L),R[H+z+4]=a.x,R[H+z+5]=a.y,R[H+z+6]=a.z,R[H+z+7]=0),_===!0&&(a.fromBufferAttribute(K,L),R[H+z+8]=a.x,R[H+z+9]=a.y,R[H+z+10]=a.z,R[H+z+11]=K.itemSize===4?a.w:1)}}c={count:p,texture:m,size:new Ft(T,A)},i.set(o,c),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let S=0;for(let _=0;_<u.length;_++)S+=u[_];const b=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(e,"morphTargetBaseInfluence",b),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:s}}function eR(e,t,n,i,a){let s=new WeakMap;function r(u){const h=a.render.frame,p=u.geometry,c=t.get(u,p);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,e.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const nR={[Yx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Kx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Jx]:"AGX_TONE_MAPPING",[$x]:"NEUTRAL_TONE_MAPPING",[Qx]:"CUSTOM_TONE_MAPPING"};function iR(e,t,n,i,a,s){const r=new Ui(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Ir(t,n):void 0}),o=new Ui(t,n,{type:fa,depthBuffer:!1,stencilBuffer:!1}),l=new ri;l.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nn([0,2,0,0,2,0],2));const u=new YE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new He(l,u),p=new Qp(-1,1,1,-1,0,1);let c=null,d=null,S=!1,b,_=null,f=[],g=!1;this.setSize=function(y,v){r.setSize(y,v),o.setSize(y,v);for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){f=y,g=f.length>0&&f[0].isRenderPass===!0;const v=r.width,T=r.height;for(let A=0;A<f.length;A++){const R=f[A];R.setSize&&R.setSize(v,T)}},this.begin=function(y,v){if(S||y.toneMapping===Di&&f.length===0)return!1;if(_=v,v!==null){const T=v.width,A=v.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return g===!1&&y.setRenderTarget(r),b=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return g},this.end=function(y,v){y.toneMapping=b,S=!0;let T=r,A=o;for(let R=0;R<f.length;R++){const m=f[R];if(m.enabled!==!1&&(m.render(y,A,T,v),m.needsSwap!==!1)){const E=T;T=A,A=E}}if(c!==y.outputColorSpace||d!==y.toneMapping){c=y.outputColorSpace,d=y.toneMapping,u.defines={},Kt.getTransfer(c)===oe&&(u.defines.SRGB_TRANSFER="");const R=nR[d];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(_),y.render(h,p),_=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),u.dispose()}}const MS=new xn,Ud=new Ir(1,1),ES=new cS,bS=new EE,TS=new pS,Mg=[],Eg=[],bg=new Float32Array(16),Tg=new Float32Array(9),Ag=new Float32Array(4);function Zr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=Mg[a];if(s===void 0&&(s=new Float32Array(a),Mg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Eu(e,t){let n=Eg[t];n===void 0&&(n=new Int32Array(t),Eg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function aR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function sR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function rR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function oR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function lR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;Ag.set(i),e.uniformMatrix2fv(this.addr,!1,Ag),Ke(n,i)}}function cR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;Tg.set(i),e.uniformMatrix3fv(this.addr,!1,Tg),Ke(n,i)}}function uR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;bg.set(i),e.uniformMatrix4fv(this.addr,!1,bg),Ke(n,i)}}function fR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function hR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function dR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function pR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function mR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function _R(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function vR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function xR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Ud.compareFunction=n.isReversedDepthBuffer()?Vp:Gp,s=Ud):s=MS,n.setTexture2D(t||s,a)}function SR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||bS,a)}function yR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||TS,a)}function MR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||ES,a)}function ER(e){switch(e){case 5126:return aR;case 35664:return sR;case 35665:return rR;case 35666:return oR;case 35674:return lR;case 35675:return cR;case 35676:return uR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return dR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return _R;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return MR}}function bR(e,t){e.uniform1fv(this.addr,t)}function TR(e,t){const n=Zr(t,this.size,2);e.uniform2fv(this.addr,n)}function AR(e,t){const n=Zr(t,this.size,3);e.uniform3fv(this.addr,n)}function RR(e,t){const n=Zr(t,this.size,4);e.uniform4fv(this.addr,n)}function CR(e,t){const n=Zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wR(e,t){const n=Zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function DR(e,t){const n=Zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function UR(e,t){e.uniform1iv(this.addr,t)}function NR(e,t){e.uniform2iv(this.addr,t)}function LR(e,t){e.uniform3iv(this.addr,t)}function OR(e,t){e.uniform4iv(this.addr,t)}function PR(e,t){e.uniform1uiv(this.addr,t)}function zR(e,t){e.uniform2uiv(this.addr,t)}function IR(e,t){e.uniform3uiv(this.addr,t)}function BR(e,t){e.uniform4uiv(this.addr,t)}function FR(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Ud:r=MS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function HR(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||bS,s[r])}function GR(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||TS,s[r])}function VR(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||ES,s[r])}function kR(e){switch(e){case 5126:return bR;case 35664:return TR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return UR;case 35667:case 35671:return NR;case 35668:case 35672:return LR;case 35669:case 35673:return OR;case 5125:return PR;case 36294:return zR;case 36295:return IR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return VR}}class XR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ER(n.type)}}class WR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kR(n.type)}}class qR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function Rg(e,t){e.seq.push(t),e.map[t.id]=t}function YR(e,t,n){const i=e.name,a=i.length;for(Vf.lastIndex=0;;){const s=Vf.exec(i),r=Vf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===a){Rg(n,u===void 0?new XR(o,e,t):new WR(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new qR(o),Rg(n,p)),n=p}}}class vc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);YR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Cg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const ZR=37297;let KR=0;function jR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const wg=new Nt;function QR(e){Kt._getMatrix(wg,Kt.workingColorSpace,e);const t=`mat3( ${wg.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Qc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Dg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+jR(e.getShaderSource(t),o)}else return s}function JR(e,t){const n=QR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const $R={[Yx]:"Linear",[Zx]:"Reinhard",[Kx]:"Cineon",[jx]:"ACESFilmic",[Jx]:"AgX",[$x]:"Neutral",[Qx]:"Custom"};function t3(e,t){const n=$R[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new F;function e3(){Kt.getLuminanceCoefficients(jl);const e=jl.x.toFixed(4),t=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function i3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function a3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function go(e){return e!==""}function Ug(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(e){return e.replace(s3,o3)}const r3=new Map;function o3(e,t){let n=Ht[t];if(n===void 0){const i=r3.get(t);if(i!==void 0)n=Ht[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nd(n)}const l3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(e){return e.replace(l3,c3)}function c3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Og(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const u3={[dc]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function f3(e){return u3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h3={[Rs]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function d3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":h3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const p3={[zr]:"ENVMAP_MODE_REFRACTION"};function m3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":p3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g3={[qx]:"ENVMAP_BLENDING_MULTIPLY",[nE]:"ENVMAP_BLENDING_MIX",[iE]:"ENVMAP_BLENDING_ADD"};function _3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":g3[e.combine]||"ENVMAP_BLENDING_NONE"}function v3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function x3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=f3(n),u=d3(n),h=m3(n),p=_3(n),c=v3(n),d=n3(n),S=i3(s),b=a.createProgram();let _,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(go).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(go).join(`
`),f.length>0&&(f+=`
`)):(_=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),f=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Di?t3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,JR("linearToOutputTexel",n.outputColorSpace),e3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(go).join(`
`)),r=Nd(r),r=Ug(r,n),r=Ng(r,n),o=Nd(o),o=Ug(o,n),o=Ng(o,n),r=Lg(r),o=Lg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",n.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=g+_+r,v=g+f+o,T=Cg(a,a.VERTEX_SHADER,y),A=Cg(a,a.FRAGMENT_SHADER,v);a.attachShader(b,T),a.attachShader(b,A),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function R(D){if(e.debug.checkShaderErrors){const O=a.getProgramInfoLog(b)||"",q=a.getShaderInfoLog(T)||"",K=a.getShaderInfoLog(A)||"",H=O.trim(),L=q.trim(),z=K.trim();let X=!0,tt=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(X=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,T,A);else{const nt=Dg(a,T,"vertex"),ft=Dg(a,A,"fragment");ee("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+nt+`
`+ft)}else H!==""?Dt("WebGLProgram: Program Info Log:",H):(L===""||z==="")&&(tt=!1);tt&&(D.diagnostics={runnable:X,programLog:H,vertexShader:{log:L,prefix:_},fragmentShader:{log:z,prefix:f}})}a.deleteShader(T),a.deleteShader(A),m=new vc(a,b),E=a3(a,b)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(b,ZR)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let S3=0;class y3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new M3(t),n.set(t,i)),i}}class M3{constructor(t){this.id=S3++,this.code=t,this.usedTimes=0}}function E3(e){return e===Cs||e===Zc||e===Kc}function b3(e,t,n,i,a,s){const r=new uS,o=new y3,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let c=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(m){return l.add(m),m===0?"uv":`uv${m}`}function b(m,E,w,D,O,q){const K=D.fog,H=O.geometry,L=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?D.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,X=t.get(m.envMap||L,z),tt=X&&X.mapping===Su?X.image.height:null,nt=d[m.type];m.precision!==null&&(c=i.getMaxPrecision(m.precision),c!==m.precision&&Dt("WebGLProgram.getParameters:",m.precision,"not supported, using",c,"instead."));const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=ft!==void 0?ft.length:0;let Zt=0;H.morphAttributes.position!==void 0&&(Zt=1),H.morphAttributes.normal!==void 0&&(Zt=2),H.morphAttributes.color!==void 0&&(Zt=3);let se,Xt,J,rt;if(nt){const St=Mi[nt];se=St.vertexShader,Xt=St.fragmentShader}else{se=m.vertexShader,Xt=m.fragmentShader;const St=o.getVertexShaderStage(m),Re=o.getFragmentShaderStage(m);o.update(m,St,Re),J=St.id,rt=Re.id}const it=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),Ot=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,Ne=!!m.map,Wt=!!m.matcap,de=!!X,ne=!!m.aoMap,Jt=!!m.lightMap,Ie=!!m.bumpMap&&m.wireframe===!1,We=!!m.normalMap,je=!!m.displacementMap,an=!!m.emissiveMap,Ae=!!m.metalnessMap,Be=!!m.roughnessMap,P=m.anisotropy>0,yn=m.clearcoat>0,re=m.dispersion>0,C=m.iridescence>0,x=m.sheen>0,B=m.transmission>0,k=P&&!!m.anisotropyMap,Y=yn&&!!m.clearcoatMap,at=yn&&!!m.clearcoatNormalMap,ot=yn&&!!m.clearcoatRoughnessMap,Z=C&&!!m.iridescenceMap,Q=C&&!!m.iridescenceThicknessMap,lt=x&&!!m.sheenColorMap,Et=x&&!!m.sheenRoughnessMap,ht=!!m.specularMap,ct=!!m.specularColorMap,At=!!m.specularIntensityMap,Ct=B&&!!m.transmissionMap,Pt=B&&!!m.thicknessMap,U=!!m.gradientMap,st=!!m.alphaMap,j=m.alphaTest>0,ut=!!m.alphaHash,gt=!!m.extensions;let et=Di;m.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(et=e.toneMapping);const Mt={shaderID:nt,shaderType:m.type,shaderName:m.name,vertexShader:se,fragmentShader:Xt,defines:m.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:c,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&O.instanceColor!==null,instancingMorph:Ot&&O.morphTexture!==null,outputColorSpace:it===null?e.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ne,matcap:Wt,envMap:de,envMapMode:de&&X.mapping,envMapCubeUVHeight:tt,aoMap:ne,lightMap:Jt,bumpMap:Ie,normalMap:We,displacementMap:je,emissiveMap:an,normalMapObjectSpace:We&&m.normalMapType===rE,normalMapTangentSpace:We&&m.normalMapType===wd,packedNormalMap:We&&m.normalMapType===wd&&E3(m.normalMap.format),metalnessMap:Ae,roughnessMap:Be,anisotropy:P,anisotropyMap:k,clearcoat:yn,clearcoatMap:Y,clearcoatNormalMap:at,clearcoatRoughnessMap:ot,dispersion:re,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:lt,sheenRoughnessMap:Et,specularMap:ht,specularColorMap:ct,specularIntensityMap:At,transmission:B,transmissionMap:Ct,thicknessMap:Pt,gradientMap:U,opaque:m.transparent===!1&&m.blending===yr&&m.alphaToCoverage===!1,alphaMap:st,alphaTest:j,alphaHash:ut,combine:m.combine,mapUv:Ne&&S(m.map.channel),aoMapUv:ne&&S(m.aoMap.channel),lightMapUv:Jt&&S(m.lightMap.channel),bumpMapUv:Ie&&S(m.bumpMap.channel),normalMapUv:We&&S(m.normalMap.channel),displacementMapUv:je&&S(m.displacementMap.channel),emissiveMapUv:an&&S(m.emissiveMap.channel),metalnessMapUv:Ae&&S(m.metalnessMap.channel),roughnessMapUv:Be&&S(m.roughnessMap.channel),anisotropyMapUv:k&&S(m.anisotropyMap.channel),clearcoatMapUv:Y&&S(m.clearcoatMap.channel),clearcoatNormalMapUv:at&&S(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&S(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&S(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&S(m.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&S(m.sheenColorMap.channel),sheenRoughnessMapUv:Et&&S(m.sheenRoughnessMap.channel),specularMapUv:ht&&S(m.specularMap.channel),specularColorMapUv:ct&&S(m.specularColorMap.channel),specularIntensityMapUv:At&&S(m.specularIntensityMap.channel),transmissionMapUv:Ct&&S(m.transmissionMap.channel),thicknessMapUv:Pt&&S(m.thicknessMap.channel),alphaMapUv:st&&S(m.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(We||P),vertexNormals:!!H.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ne||st),fog:!!K,useFog:m.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||H.attributes.normal===void 0&&We===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:et,decodeVideoTexture:Ne&&m.map.isVideoTexture===!0&&Kt.getTransfer(m.map.colorSpace)===oe,decodeVideoTextureEmissive:an&&m.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(m.emissiveMap.colorSpace)===oe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ei,flipSided:m.side===wn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:gt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&m.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function _(m){const E=[];if(m.shaderID?E.push(m.shaderID):(E.push(m.customVertexShaderID),E.push(m.customFragmentShaderID)),m.defines!==void 0)for(const w in m.defines)E.push(w),E.push(m.defines[w]);return m.isRawShaderMaterial===!1&&(f(E,m),g(E,m),E.push(e.outputColorSpace)),E.push(m.customProgramCacheKey),E.join()}function f(m,E){m.push(E.precision),m.push(E.outputColorSpace),m.push(E.envMapMode),m.push(E.envMapCubeUVHeight),m.push(E.mapUv),m.push(E.alphaMapUv),m.push(E.lightMapUv),m.push(E.aoMapUv),m.push(E.bumpMapUv),m.push(E.normalMapUv),m.push(E.displacementMapUv),m.push(E.emissiveMapUv),m.push(E.metalnessMapUv),m.push(E.roughnessMapUv),m.push(E.anisotropyMapUv),m.push(E.clearcoatMapUv),m.push(E.clearcoatNormalMapUv),m.push(E.clearcoatRoughnessMapUv),m.push(E.iridescenceMapUv),m.push(E.iridescenceThicknessMapUv),m.push(E.sheenColorMapUv),m.push(E.sheenRoughnessMapUv),m.push(E.specularMapUv),m.push(E.specularColorMapUv),m.push(E.specularIntensityMapUv),m.push(E.transmissionMapUv),m.push(E.thicknessMapUv),m.push(E.combine),m.push(E.fogExp2),m.push(E.sizeAttenuation),m.push(E.morphTargetsCount),m.push(E.morphAttributeCount),m.push(E.numDirLights),m.push(E.numPointLights),m.push(E.numSpotLights),m.push(E.numSpotLightMaps),m.push(E.numHemiLights),m.push(E.numRectAreaLights),m.push(E.numDirLightShadows),m.push(E.numPointLightShadows),m.push(E.numSpotLightShadows),m.push(E.numSpotLightShadowsWithMaps),m.push(E.numLightProbes),m.push(E.shadowMapType),m.push(E.toneMapping),m.push(E.numClippingPlanes),m.push(E.numClipIntersection),m.push(E.depthPacking)}function g(m,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),m.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),m.push(r.mask)}function y(m){const E=d[m.type];let w;if(E){const D=Mi[E];w=XE.clone(D.uniforms)}else w=m.uniforms;return w}function v(m,E){let w=h.get(E);return w!==void 0?++w.usedTimes:(w=new x3(e,E,m,a),u.push(w),h.set(E,w)),w}function T(m){if(--m.usedTimes===0){const E=u.indexOf(m);u[E]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:R}}function T3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function A3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Pg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zg(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(c){let d=0;return c.isInstancedMesh&&(d+=2),c.isSkinnedMesh&&(d+=1),d}function o(c,d,S,b,_,f){let g=e[t];return g===void 0?(g={id:c.id,object:c,geometry:d,material:S,materialVariant:r(c),groupOrder:b,renderOrder:c.renderOrder,z:_,group:f},e[t]=g):(g.id=c.id,g.object=c,g.geometry=d,g.material=S,g.materialVariant=r(c),g.groupOrder=b,g.renderOrder=c.renderOrder,g.z=_,g.group=f),t++,g}function l(c,d,S,b,_,f){const g=o(c,d,S,b,_,f);S.transmission>0?i.push(g):S.transparent===!0?a.push(g):n.push(g)}function u(c,d,S,b,_,f){const g=o(c,d,S,b,_,f);S.transmission>0?i.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function h(c,d,S){n.length>1&&n.sort(c||A3),i.length>1&&i.sort(d||Pg),a.length>1&&a.sort(d||Pg),S&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let c=t,d=e.length;c<d;c++){const S=e[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:u,finish:p,sort:h}}function R3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new zg,e.set(i,[r])):a>=s.length?(r=new zg,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function C3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new qt};break;case"SpotLight":n={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function w3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let D3=0;function U3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N3(e){const t=new C3,n=w3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const a=new F,s=new Ue,r=new Ue;function o(u){let h=0,p=0,c=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,S=0,b=0,_=0,f=0,g=0,y=0,v=0,T=0,A=0,R=0;u.sort(U3);for(let E=0,w=u.length;E<w;E++){const D=u[E],O=D.color,q=D.intensity,K=D.distance;let H=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Cs?H=D.shadow.map.texture:H=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*q,p+=O.g*q,c+=O.b*q;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],q);R++}else if(D.isDirectionalLight){const L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,X=n.get(D);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=D.shadow.matrix,g++}i.directional[d]=L,d++}else if(D.isSpotLight){const L=t.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(O).multiplyScalar(q),L.distance=K,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[b]=L;const z=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[b]=z.matrix,D.castShadow){const X=n.get(D);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.spotShadow[b]=X,i.spotShadowMap[b]=H,v++}b++}else if(D.isRectAreaLight){const L=t.get(D);L.color.copy(O).multiplyScalar(q),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=L,_++}else if(D.isPointLight){const L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){const z=D.shadow,X=n.get(D);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,i.pointShadow[S]=X,i.pointShadowMap[S]=H,i.pointShadowMatrix[S]=D.shadow.matrix,y++}i.point[S]=L,S++}else if(D.isHemisphereLight){const L=t.get(D);L.skyColor.copy(D.color).multiplyScalar(q),L.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[f]=L,f++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=c;const m=i.hash;(m.directionalLength!==d||m.pointLength!==S||m.spotLength!==b||m.rectAreaLength!==_||m.hemiLength!==f||m.numDirectionalShadows!==g||m.numPointShadows!==y||m.numSpotShadows!==v||m.numSpotMaps!==T||m.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=_,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,m.directionalLength=d,m.pointLength=S,m.spotLength=b,m.rectAreaLength=_,m.hemiLength=f,m.numDirectionalShadows=g,m.numPointShadows=y,m.numSpotShadows=v,m.numSpotMaps=T,m.numLightProbes=R,i.version=D3++)}function l(u,h){let p=0,c=0,d=0,S=0,b=0;const _=h.matrixWorldInverse;for(let f=0,g=u.length;f<g;f++){const y=u[f];if(y.isDirectionalLight){const v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(_),p++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(_),d++}else if(y.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),r.identity(),s.copy(y.matrixWorld),s.premultiply(_),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),S++}else if(y.isPointLight){const v=i.point[c];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(_),c++}else if(y.isHemisphereLight){const v=i.hemi[b];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(_),b++}}}return{setup:o,setupView:l,state:i}}function Ig(e){const t=new N3(e),n=[],i=[],a=[];function s(c){p.camera=c,n.length=0,i.length=0,a.length=0}function r(c){n.push(c)}function o(c){i.push(c)}function l(c){a.push(c)}function u(){t.setup(n)}function h(c){t.setupView(n,c)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function L3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Ig(e),t.set(a,[o])):s>=r.length?(o=new Ig(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const O3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P3=`uniform sampler2D shadow_pass;
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
}`,z3=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],I3=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Bg=new Ue,lo=new F,kf=new F;function B3(e,t,n){let i=new qp;const a=new Ft,s=new Ft,r=new Te,o=new ZE,l=new KE,u={},h=n.maxTextureSize,p={[Qa]:wn,[wn]:Qa,[Ei]:Ei},c=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:O3,fragmentShader:P3}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const S=new ri;S.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new He(S,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let f=this.type;this.render=function(A,R,m){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===I1&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dc);const E=e.getRenderTarget(),w=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(aa),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(H=>H.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,H=A.length;K<H;K++){const L=A[K],z=L.shadow;if(z===void 0){Dt("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const X=z.getFrameExtents();a.multiply(X),s.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/X.x),a.x=s.x*X.x,z.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/X.y),a.y=s.y*X.y,z.mapSize.y=s.y));const tt=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=tt,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===mo){if(L.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ui(a.x,a.y,{format:Cs,type:fa,minFilter:mn,magFilter:mn,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new Ir(a.x,a.y,Ri),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=ha,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn}else L.isPointLight?(z.map=new yS(a.x),z.map.depthTexture=new VE(a.x,Li)):(z.map=new Ui(a.x,a.y),z.map.depthTexture=new Ir(a.x,a.y,Li)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=ha,this.type===dc?(z.map.depthTexture.compareFunction=tt?Vp:Gp,z.map.depthTexture.minFilter=mn,z.map.depthTexture.magFilter=mn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn);z.camera.updateProjectionMatrix()}const nt=z.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<nt;ft++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,ft),e.clear();else{ft===0&&(e.setRenderTarget(z.map),e.clear());const _t=z.getViewport(ft);r.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),O.viewport(r)}if(L.isPointLight){const _t=z.camera,Zt=z.matrix,se=L.distance||_t.far;se!==_t.far&&(_t.far=se,_t.updateProjectionMatrix()),lo.setFromMatrixPosition(L.matrixWorld),_t.position.copy(lo),kf.copy(_t.position),kf.add(z3[ft]),_t.up.copy(I3[ft]),_t.lookAt(kf),_t.updateMatrixWorld(),Zt.makeTranslation(-lo.x,-lo.y,-lo.z),Bg.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bg,_t.coordinateSystem,_t.reversedDepth)}else z.updateMatrices(L);i=z.getFrustum(),v(R,m,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===mo&&g(z,m),z.needsUpdate=!1}f=this.type,_.needsUpdate=!1,e.setRenderTarget(E,w,D)};function g(A,R){const m=t.update(b);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(a.x,a.y,{format:Cs,type:fa})),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,m,c,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,m,d,b,null)}function y(A,R,m,E){let w=null;const D=m.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)w=D;else if(w=m.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=w.uuid,q=R.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let H=K[q];H===void 0&&(H=w.clone(),K[q]=H,R.addEventListener("dispose",T)),w=H}if(w.visible=R.visible,w.wireframe=R.wireframe,E===mo?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,m.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=e.properties.get(w);O.light=m}return w}function v(A,R,m,E,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===mo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,A.matrixWorld);const q=t.update(A),K=A.material;if(Array.isArray(K)){const H=q.groups;for(let L=0,z=H.length;L<z;L++){const X=H[L],tt=K[X.materialIndex];if(tt&&tt.visible){const nt=y(A,tt,E,w);A.onBeforeShadow(e,A,R,m,q,nt,X),e.renderBufferDirect(m,null,q,nt,A,X),A.onAfterShadow(e,A,R,m,q,nt,X)}}}else if(K.visible){const H=y(A,K,E,w);A.onBeforeShadow(e,A,R,m,q,H,null),e.renderBufferDirect(m,null,q,H,A,null),A.onAfterShadow(e,A,R,m,q,H,null)}}const O=A.children;for(let q=0,K=O.length;q<K;q++)v(O[q],R,m,E,w)}function T(A){A.target.removeEventListener("dispose",T);for(const m in u){const E=u[m],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function F3(e,t){function n(){let U=!1;const st=new Te;let j=null;const ut=new Te(0,0,0,0);return{setMask:function(gt){j!==gt&&!U&&(e.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){U=gt},setClear:function(gt,et,Mt,St,Re){Re===!0&&(gt*=St,et*=St,Mt*=St),st.set(gt,et,Mt,St),ut.equals(st)===!1&&(e.clearColor(gt,et,Mt,St),ut.copy(st))},reset:function(){U=!1,j=null,ut.set(-1,0,0,0)}}}function i(){let U=!1,st=!1,j=null,ut=null,gt=null;return{setReversed:function(et){if(st!==et){const Mt=t.get("EXT_clip_control");et?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),st=et;const St=gt;gt=null,this.setClear(St)}},getReversed:function(){return st},setTest:function(et){et?it(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(et){j!==et&&!U&&(e.depthMask(et),j=et)},setFunc:function(et){if(st&&(et=gE[et]),ut!==et){switch(et){case Xh:e.depthFunc(e.NEVER);break;case Wh:e.depthFunc(e.ALWAYS);break;case qh:e.depthFunc(e.LESS);break;case Pr:e.depthFunc(e.LEQUAL);break;case Yh:e.depthFunc(e.EQUAL);break;case Zh:e.depthFunc(e.GEQUAL);break;case Kh:e.depthFunc(e.GREATER);break;case jh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=et}},setLocked:function(et){U=et},setClear:function(et){gt!==et&&(gt=et,st&&(et=1-et),e.clearDepth(et))},reset:function(){U=!1,j=null,ut=null,gt=null,st=!1}}}function a(){let U=!1,st=null,j=null,ut=null,gt=null,et=null,Mt=null,St=null,Re=null;return{setTest:function(_e){U||(_e?it(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(_e){st!==_e&&!U&&(e.stencilMask(_e),st=_e)},setFunc:function(_e,gi,_i){(j!==_e||ut!==gi||gt!==_i)&&(e.stencilFunc(_e,gi,_i),j=_e,ut=gi,gt=_i)},setOp:function(_e,gi,_i){(et!==_e||Mt!==gi||St!==_i)&&(e.stencilOp(_e,gi,_i),et=_e,Mt=gi,St=_i)},setLocked:function(_e){U=_e},setClear:function(_e){Re!==_e&&(e.clearStencil(_e),Re=_e)},reset:function(){U=!1,st=null,j=null,ut=null,gt=null,et=null,Mt=null,St=null,Re=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,u=new WeakMap;let h={},p={},c={},d=new WeakMap,S=[],b=null,_=!1,f=null,g=null,y=null,v=null,T=null,A=null,R=null,m=new qt(0,0,0),E=0,w=!1,D=null,O=null,q=null,K=null,H=null;const L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=X>=1):tt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=X>=2);let nt=null,ft={};const _t=e.getParameter(e.SCISSOR_BOX),Zt=e.getParameter(e.VIEWPORT),se=new Te().fromArray(_t),Xt=new Te().fromArray(Zt);function J(U,st,j,ut){const gt=new Uint8Array(4),et=e.createTexture();e.bindTexture(U,et),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Mt=0;Mt<j;Mt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,gt):e.texImage2D(st+Mt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,gt);return et}const rt={};rt[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),rt[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),rt[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(e.DEPTH_TEST),r.setFunc(Pr),Ie(!1),We(H0),it(e.CULL_FACE),ne(aa);function it(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function Ut(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function Ot(U,st){return c[U]!==st?(e.bindFramebuffer(U,st),c[U]=st,U===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=st),U===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Rt(U,st){let j=S,ut=!1;if(U){j=d.get(st),j===void 0&&(j=[],d.set(st,j));const gt=U.textures;if(j.length!==gt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let et=0,Mt=gt.length;et<Mt;et++)j[et]=e.COLOR_ATTACHMENT0+et;j.length=gt.length,ut=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,ut=!0);ut&&e.drawBuffers(j)}function Ne(U){return b!==U?(e.useProgram(U),b=U,!0):!1}const Wt={[hs]:e.FUNC_ADD,[F1]:e.FUNC_SUBTRACT,[H1]:e.FUNC_REVERSE_SUBTRACT};Wt[G1]=e.MIN,Wt[V1]=e.MAX;const de={[k1]:e.ZERO,[X1]:e.ONE,[W1]:e.SRC_COLOR,[Vh]:e.SRC_ALPHA,[Q1]:e.SRC_ALPHA_SATURATE,[K1]:e.DST_COLOR,[Y1]:e.DST_ALPHA,[q1]:e.ONE_MINUS_SRC_COLOR,[kh]:e.ONE_MINUS_SRC_ALPHA,[j1]:e.ONE_MINUS_DST_COLOR,[Z1]:e.ONE_MINUS_DST_ALPHA,[J1]:e.CONSTANT_COLOR,[$1]:e.ONE_MINUS_CONSTANT_COLOR,[tE]:e.CONSTANT_ALPHA,[eE]:e.ONE_MINUS_CONSTANT_ALPHA};function ne(U,st,j,ut,gt,et,Mt,St,Re,_e){if(U===aa){_===!0&&(Ut(e.BLEND),_=!1);return}if(_===!1&&(it(e.BLEND),_=!0),U!==B1){if(U!==f||_e!==w){if((g!==hs||T!==hs)&&(e.blendEquation(e.FUNC_ADD),g=hs,T=hs),_e)switch(U){case yr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case G0:e.blendFunc(e.ONE,e.ONE);break;case V0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case k0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case yr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case G0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case V0:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}y=null,v=null,A=null,R=null,m.set(0,0,0),E=0,f=U,w=_e}return}gt=gt||st,et=et||j,Mt=Mt||ut,(st!==g||gt!==T)&&(e.blendEquationSeparate(Wt[st],Wt[gt]),g=st,T=gt),(j!==y||ut!==v||et!==A||Mt!==R)&&(e.blendFuncSeparate(de[j],de[ut],de[et],de[Mt]),y=j,v=ut,A=et,R=Mt),(St.equals(m)===!1||Re!==E)&&(e.blendColor(St.r,St.g,St.b,Re),m.copy(St),E=Re),f=U,w=!1}function Jt(U,st){U.side===Ei?Ut(e.CULL_FACE):it(e.CULL_FACE);let j=U.side===wn;st&&(j=!j),Ie(j),U.blending===yr&&U.transparent===!1?ne(aa):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ut=U.stencilWrite;o.setTest(ut),ut&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),an(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function We(U){U!==P1?(it(e.CULL_FACE),U!==O&&(U===H0?e.cullFace(e.BACK):U===z1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),O=U}function je(U){U!==q&&(z&&e.lineWidth(U),q=U)}function an(U,st,j){U?(it(e.POLYGON_OFFSET_FILL),(K!==st||H!==j)&&(K=st,H=j,r.getReversed()&&(st=-st),e.polygonOffset(st,j))):Ut(e.POLYGON_OFFSET_FILL)}function Ae(U){U?it(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function Be(U){U===void 0&&(U=e.TEXTURE0+L-1),nt!==U&&(e.activeTexture(U),nt=U)}function P(U,st,j){j===void 0&&(nt===null?j=e.TEXTURE0+L-1:j=nt);let ut=ft[j];ut===void 0&&(ut={type:void 0,texture:void 0},ft[j]=ut),(ut.type!==U||ut.texture!==st)&&(nt!==j&&(e.activeTexture(j),nt=j),e.bindTexture(U,st||rt[U]),ut.type=U,ut.texture=st)}function yn(){const U=ft[nt];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{e.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function x(){try{e.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function B(){try{e.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function at(){try{e.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function ot(){try{e.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Z(){try{e.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function lt(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Et(U,st){p[U]!==st&&(e.pixelStorei(U,st),p[U]=st)}function ht(U){se.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function ct(U){Xt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Xt.copy(U))}function At(U,st){let j=u.get(st);j===void 0&&(j=new WeakMap,u.set(st,j));let ut=j.get(U);ut===void 0&&(ut=e.getUniformBlockIndex(st,U.name),j.set(U,ut))}function Ct(U,st){const ut=u.get(st).get(U);l.get(st)!==ut&&(e.uniformBlockBinding(st,ut,U.__bindingPointIndex),l.set(st,ut))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},nt=null,ft={},c={},d=new WeakMap,S=[],b=null,_=!1,f=null,g=null,y=null,v=null,T=null,A=null,R=null,m=new qt(0,0,0),E=0,w=!1,D=null,O=null,q=null,K=null,H=null,se.set(0,0,e.canvas.width,e.canvas.height),Xt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:it,disable:Ut,bindFramebuffer:Ot,drawBuffers:Rt,useProgram:Ne,setBlending:ne,setMaterial:Jt,setFlipSided:Ie,setCullFace:We,setLineWidth:je,setPolygonOffset:an,setScissorTest:Ae,activeTexture:Be,bindTexture:P,unbindTexture:yn,compressedTexImage2D:re,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:Et,getParameter:lt,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:at,texStorage3D:ot,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:ht,viewport:ct,reset:Pt}}function H3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ft,h=new WeakMap,p=new Set;let c;const d=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,x){return S?new OffscreenCanvas(C,x):Jc("canvas")}function _(C,x,B){let k=1;const Y=re(C);if((Y.width>B||Y.height>B)&&(k=B/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(k*Y.width),ot=Math.floor(k*Y.height);c===void 0&&(c=b(at,ot));const Z=x?b(at,ot):c;return Z.width=at,Z.height=ot,Z.getContext("2d").drawImage(C,0,0,at,ot),Dt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+at+"x"+ot+")."),Z}else return"data"in C&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function f(C){return C.generateMipmaps}function g(C){e.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,x,B,k,Y,at=!1){if(C!==null){if(e[C]!==void 0)return e[C];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot;k&&(ot=t.get("EXT_texture_norm16"),ot||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&ot&&(Z=ot.R16_EXT),B===e.SHORT&&ot&&(Z=ot.R16_SNORM_EXT)),x===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),x===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&ot&&(Z=ot.RG16_EXT),B===e.SHORT&&ot&&(Z=ot.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),x===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),x===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),x===e.RGB&&(B===e.UNSIGNED_SHORT&&ot&&(Z=ot.RGB16_EXT),B===e.SHORT&&ot&&(Z=ot.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),x===e.RGBA){const Q=at?Qc:Kt.getTransfer(Y);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=Q===oe?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ot&&(Z=ot.RGBA16_EXT),B===e.SHORT&&ot&&(Z=ot.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(C,x){let B;return C?x===null||x===Li||x===qo?B=e.DEPTH24_STENCIL8:x===Ri?B=e.DEPTH32F_STENCIL8:x===Wo&&(B=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===qo?B=e.DEPTH_COMPONENT24:x===Ri?B=e.DEPTH_COMPONENT32F:x===Wo&&(B=e.DEPTH_COMPONENT16),B}function A(C,x){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function m(C){const x=C.target;x.removeEventListener("dispose",m),D(x)}function E(C){const x=i.get(C);if(x.__webglInit===void 0)return;const B=C.source,k=d.get(B);if(k){const Y=k[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(C),Object.keys(k).length===0&&d.delete(B)}i.remove(C)}function w(C){const x=i.get(C);e.deleteTexture(x.__webglTexture);const B=C.source,k=d.get(B);delete k[x.__cacheKey],r.memory.textures--}function D(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let Y=0;Y<x.__webglFramebuffer[k].length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[k][Y]);else e.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)e.deleteFramebuffer(x.__webglFramebuffer[k]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let k=0,Y=B.length;k<Y;k++){const at=i.get(B[k]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),r.memory.textures--),i.remove(B[k])}i.remove(C)}let O=0;function q(){O=0}function K(){return O}function H(C){O=C}function L(){const C=O;return C>=a.maxTextures&&Dt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),O+=1,C}function z(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function X(C,x){const B=i.get(C);if(C.isVideoTexture&&P(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const k=C.image;if(k===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+x)}function tt(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ut(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+x)}function nt(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ut(B,C,x);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+x)}function ft(C,x){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ot(B,C,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+x)}const _t={[Qh]:e.REPEAT,[$i]:e.CLAMP_TO_EDGE,[Jh]:e.MIRRORED_REPEAT},Zt={[cn]:e.NEAREST,[aE]:e.NEAREST_MIPMAP_NEAREST,[Cl]:e.NEAREST_MIPMAP_LINEAR,[mn]:e.LINEAR,[hf]:e.LINEAR_MIPMAP_NEAREST,[ps]:e.LINEAR_MIPMAP_LINEAR},se={[oE]:e.NEVER,[hE]:e.ALWAYS,[lE]:e.LESS,[Gp]:e.LEQUAL,[cE]:e.EQUAL,[Vp]:e.GEQUAL,[uE]:e.GREATER,[fE]:e.NOTEQUAL};function Xt(C,x){if(x.type===Ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===hf||x.magFilter===Cl||x.magFilter===ps||x.minFilter===mn||x.minFilter===hf||x.minFilter===Cl||x.minFilter===ps)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,_t[x.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,_t[x.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,_t[x.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Zt[x.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Zt[x.minFilter]),x.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Cl&&x.minFilter!==ps||x.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const k=x.source;let Y=d.get(k);Y===void 0&&(Y={},d.set(k,Y));const at=z(x);if(at!==C.__cacheKey){Y[at]===void 0&&(Y[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Y[at].usedTimes++;const ot=Y[C.__cacheKey];ot!==void 0&&(Y[C.__cacheKey].usedTimes--,ot.usedTimes===0&&w(x)),C.__cacheKey=at,C.__webglTexture=Y[at].texture}return B}function rt(C,x,B){return Math.floor(Math.floor(C/B)/x)}function it(C,x,B,k){const at=C.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,B,k,x.data);else{at.sort((Et,ht)=>Et.start-ht.start);let ot=0;for(let Et=1;Et<at.length;Et++){const ht=at[ot],ct=at[Et],At=ht.start+ht.count,Ct=rt(ct.start,x.width,4),Pt=rt(ht.start,x.width,4);ct.start<=At+1&&Ct===Pt&&rt(ct.start+ct.count-1,x.width,4)===Ct?ht.count=Math.max(ht.count,ct.start+ct.count-ht.start):(++ot,at[ot]=ct)}at.length=ot+1;const Z=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Et=0,ht=at.length;Et<ht;Et++){const ct=at[Et],At=Math.floor(ct.start/4),Ct=Math.ceil(ct.count/4),Pt=At%x.width,U=Math.floor(At/x.width),st=Ct,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Pt,U,st,j,B,k,x.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function Ut(C,x,B){let k=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=e.TEXTURE_3D);const Y=J(C,x),at=x.source;n.bindTexture(k,C.__webglTexture,e.TEXTURE0+B);const ot=i.get(at);if(at.version!==ot.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=Kt.getPrimaries(Kt.workingColorSpace),ut=x.colorSpace===Da?null:Kt.getPrimaries(x.colorSpace),gt=x.colorSpace===Da||j===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=_(x.image,!1,a.maxTextureSize);Q=yn(x,Q);const lt=s.convert(x.format,x.colorSpace),Et=s.convert(x.type);let ht=v(x.internalFormat,lt,Et,x.normalized,x.colorSpace,x.isVideoTexture);Xt(k,x);let ct;const At=x.mipmaps,Ct=x.isVideoTexture!==!0,Pt=ot.__version===void 0||Y===!0,U=at.dataReady,st=A(x,Q);if(x.isDepthTexture)ht=T(x.format===ms,x.type),Pt&&(Ct?n.texStorage2D(e.TEXTURE_2D,1,ht,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,ht,Q.width,Q.height,0,lt,Et,null));else if(x.isDataTexture)if(At.length>0){Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,st,ht,At[0].width,At[0].height);for(let j=0,ut=At.length;j<ut;j++)ct=At[j],Ct?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ct.width,ct.height,lt,Et,ct.data):n.texImage2D(e.TEXTURE_2D,j,ht,ct.width,ct.height,0,lt,Et,ct.data);x.generateMipmaps=!1}else Ct?(Pt&&n.texStorage2D(e.TEXTURE_2D,st,ht,Q.width,Q.height),U&&it(x,Q,lt,Et)):n.texImage2D(e.TEXTURE_2D,0,ht,Q.width,Q.height,0,lt,Et,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,ht,At[0].width,At[0].height,Q.depth);for(let j=0,ut=At.length;j<ut;j++)if(ct=At[j],x.format!==pi)if(lt!==null)if(Ct){if(U)if(x.layerUpdates.size>0){const gt=mg(ct.width,ct.height,x.format,x.type);for(const et of x.layerUpdates){const Mt=ct.data.subarray(et*gt/ct.data.BYTES_PER_ELEMENT,(et+1)*gt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,et,ct.width,ct.height,1,lt,Mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,Q.depth,lt,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,ht,ct.width,ct.height,Q.depth,0,ct.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ct.width,ct.height,Q.depth,lt,Et,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,ht,ct.width,ct.height,Q.depth,0,lt,Et,ct.data)}else{Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,st,ht,At[0].width,At[0].height);for(let j=0,ut=At.length;j<ut;j++)ct=At[j],x.format!==pi?lt!==null?Ct?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ct.width,ct.height,lt,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,j,ht,ct.width,ct.height,0,ct.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ct.width,ct.height,lt,Et,ct.data):n.texImage2D(e.TEXTURE_2D,j,ht,ct.width,ct.height,0,lt,Et,ct.data)}else if(x.isDataArrayTexture)if(Ct){if(Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,ht,Q.width,Q.height,Q.depth),U)if(x.layerUpdates.size>0){const j=mg(Q.width,Q.height,x.format,x.type);for(const ut of x.layerUpdates){const gt=Q.data.subarray(ut*j/Q.data.BYTES_PER_ELEMENT,(ut+1)*j/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,lt,Et,gt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,Et,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,lt,Et,Q.data);else if(x.isData3DTexture)Ct?(Pt&&n.texStorage3D(e.TEXTURE_3D,st,ht,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,Et,Q.data)):n.texImage3D(e.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,lt,Et,Q.data);else if(x.isFramebufferTexture){if(Pt)if(Ct)n.texStorage2D(e.TEXTURE_2D,st,ht,Q.width,Q.height);else{let j=Q.width,ut=Q.height;for(let gt=0;gt<st;gt++)n.texImage2D(e.TEXTURE_2D,gt,ht,j,ut,0,lt,Et,null),j>>=1,ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),p.add(x),j.onpaint=ut=>{const gt=ut.changedElements;for(const et of p)gt.includes(et.image)&&(et.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{const gt=e.RGBA,et=e.RGBA,Mt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,gt,et,Mt,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ct&&Pt){const j=re(At[0]);n.texStorage2D(e.TEXTURE_2D,st,ht,j.width,j.height)}for(let j=0,ut=At.length;j<ut;j++)ct=At[j],Ct?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,lt,Et,ct):n.texImage2D(e.TEXTURE_2D,j,ht,lt,Et,ct);x.generateMipmaps=!1}else if(Ct){if(Pt){const j=re(Q);n.texStorage2D(e.TEXTURE_2D,st,ht,j.width,j.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,Et,Q)}else n.texImage2D(e.TEXTURE_2D,0,ht,lt,Et,Q);f(x)&&g(k),ot.__version=at.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ot(C,x,B){if(x.image.length!==6)return;const k=J(C,x),Y=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+B);const at=i.get(Y);if(Y.version!==at.__version||k===!0){n.activeTexture(e.TEXTURE0+B);const ot=Kt.getPrimaries(Kt.workingColorSpace),Z=x.colorSpace===Da?null:Kt.getPrimaries(x.colorSpace),Q=x.colorSpace===Da||ot===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let et=0;et<6;et++)!lt&&!Et?ht[et]=_(x.image[et],!0,a.maxCubemapSize):ht[et]=Et?x.image[et].image:x.image[et],ht[et]=yn(x,ht[et]);const ct=ht[0],At=s.convert(x.format,x.colorSpace),Ct=s.convert(x.type),Pt=v(x.internalFormat,At,Ct,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,st=at.__version===void 0||k===!0,j=Y.dataReady;let ut=A(x,ct);Xt(e.TEXTURE_CUBE_MAP,x);let gt;if(lt){U&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Pt,ct.width,ct.height);for(let et=0;et<6;et++){gt=ht[et].mipmaps;for(let Mt=0;Mt<gt.length;Mt++){const St=gt[Mt];x.format!==pi?At!==null?U?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,St.width,St.height,At,St.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Pt,St.width,St.height,0,St.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,St.width,St.height,At,Ct,St.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Pt,St.width,St.height,0,At,Ct,St.data)}}}else{if(gt=x.mipmaps,U&&st){gt.length>0&&ut++;const et=re(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Pt,et.width,et.height)}for(let et=0;et<6;et++)if(Et){U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ht[et].width,ht[et].height,At,Ct,ht[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Pt,ht[et].width,ht[et].height,0,At,Ct,ht[et].data);for(let Mt=0;Mt<gt.length;Mt++){const Re=gt[Mt].image[et].image;U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Re.width,Re.height,At,Ct,Re.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Pt,Re.width,Re.height,0,At,Ct,Re.data)}}else{U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At,Ct,ht[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Pt,At,Ct,ht[et]);for(let Mt=0;Mt<gt.length;Mt++){const St=gt[Mt];U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,At,Ct,St.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Pt,At,Ct,St.image[et])}}}f(x)&&g(e.TEXTURE_CUBE_MAP),at.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Rt(C,x,B,k,Y,at){const ot=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),Q=v(B.internalFormat,ot,Z,B.normalized,B.colorSpace),lt=i.get(x),Et=i.get(B);if(Et.__renderTarget=x,!lt.__hasExternalTextures){const ht=Math.max(1,x.width>>at),ct=Math.max(1,x.height>>at);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,at,Q,ht,ct,x.depth,0,ot,Z,null):n.texImage2D(Y,at,Q,ht,ct,0,ot,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Be(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Y,Et.__webglTexture,0,Ae(x)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Y,Et.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(C,x,B){if(e.bindRenderbuffer(e.RENDERBUFFER,C),x.depthBuffer){const k=x.depthTexture,Y=k&&k.isDepthTexture?k.type:null,at=T(x.stencilBuffer,Y),ot=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Be(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(x),at,x.width,x.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(x),at,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,at,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,C)}else{const k=x.textures;for(let Y=0;Y<k.length;Y++){const at=k[Y],ot=s.convert(at.format,at.colorSpace),Z=s.convert(at.type),Q=v(at.internalFormat,ot,Z,at.normalized,at.colorSpace);Be(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(x),Q,x.width,x.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(x),Q,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,Q,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Wt(C,x,B){const k=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,x.depthTexture);const lt=s.convert(x.depthTexture.format),Et=s.convert(x.depthTexture.type);let ht;x.depthTexture.format===ha?ht=e.DEPTH_COMPONENT24:x.depthTexture.format===ms&&(ht=e.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ht,x.width,x.height,0,lt,Et,null)}}else X(x.depthTexture,0);const at=Y.__webglTexture,ot=Ae(x),Z=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,Q=x.depthTexture.format===ms?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===ha)Be(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Z,at,0,ot):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Z,at,0);else if(x.depthTexture.format===ms)Be(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Z,at,0,ot):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(C){const x=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const k=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=k}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Wt(x.__webglFramebuffer[k],C,k);else{const k=C.texture.mipmaps;k&&k.length>0?Wt(x.__webglFramebuffer[0],C,0):Wt(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=e.createRenderbuffer(),Ne(x.__webglDepthbuffer[k],C,!1);else{const Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}else{const k=C.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ne(x.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(C,x,B){const k=i.get(C);x!==void 0&&Rt(k.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&de(C)}function Jt(C){const x=C.texture,B=i.get(C),k=i.get(x);C.addEventListener("dispose",m);const Y=C.textures,at=C.isWebGLCubeRenderTarget===!0,ot=Y.length>1;if(ot||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=x.version,r.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Z][Q]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ot)for(let Z=0,Q=Y.length;Z<Q;Z++){const lt=i.get(Y[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Be(C)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const Q=Y[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const lt=s.convert(Q.format,Q.colorSpace),Et=s.convert(Q.type),ht=v(Q.internalFormat,lt,Et,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ct=Ae(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,ht,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Rt(B.__webglFramebuffer[Z][Q],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Rt(B.__webglFramebuffer[Z],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ot){for(let Z=0,Q=Y.length;Z<Q;Z++){const lt=Y[Z],Et=i.get(lt);let ht=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,Et.__webglTexture),Xt(ht,lt),Rt(B.__webglFramebuffer,C,lt,e.COLOR_ATTACHMENT0+Z,ht,0),f(lt)&&g(ht)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,k.__webglTexture),Xt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Rt(B.__webglFramebuffer[Q],C,x,e.COLOR_ATTACHMENT0,Z,Q);else Rt(B.__webglFramebuffer,C,x,e.COLOR_ATTACHMENT0,Z,0);f(x)&&g(Z),n.unbindTexture()}C.depthBuffer&&de(C)}function Ie(C){const x=C.textures;for(let B=0,k=x.length;B<k;B++){const Y=x[B];if(f(Y)){const at=y(C),ot=i.get(Y).__webglTexture;n.bindTexture(at,ot),g(at),n.unbindTexture()}}}const We=[],je=[];function an(C){if(C.samples>0){if(Be(C)===!1){const x=C.textures,B=C.width,k=C.height;let Y=e.COLOR_BUFFER_BIT;const at=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=i.get(C),Z=x.length>1;if(Z)for(let lt=0;lt<x.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Et=i.get(x[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,B,k,0,0,B,k,Y,e.NEAREST),l===!0&&(We.length=0,je.length=0,We.push(e.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(at),je.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<x.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Et=i.get(x[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Ae(C){return Math.min(a.maxSamples,C.samples)}function Be(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(C){const x=r.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function yn(C,x){const B=C.colorSpace,k=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==jc&&B!==Da&&(Kt.getTransfer(B)===oe?(k!==pi||Y!==Bn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",B)),x}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.getTextureUnits=K,this.setTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=ft,this.rebindTextures=ne,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function G3(e,t){function n(i,a=Da){let s;const r=Kt.getTransfer(a);if(i===Bn)return e.UNSIGNED_BYTE;if(i===zp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ip)return e.UNSIGNED_SHORT_5_5_5_1;if(i===iS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===aS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===eS)return e.BYTE;if(i===nS)return e.SHORT;if(i===Wo)return e.UNSIGNED_SHORT;if(i===Pp)return e.INT;if(i===Li)return e.UNSIGNED_INT;if(i===Ri)return e.FLOAT;if(i===fa)return e.HALF_FLOAT;if(i===sS)return e.ALPHA;if(i===rS)return e.RGB;if(i===pi)return e.RGBA;if(i===ha)return e.DEPTH_COMPONENT;if(i===ms)return e.DEPTH_STENCIL;if(i===oS)return e.RED;if(i===Bp)return e.RED_INTEGER;if(i===Cs)return e.RG;if(i===Fp)return e.RG_INTEGER;if(i===Hp)return e.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(r===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$h||i===td||i===ed||i===nd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===id||i===ad||i===sd||i===rd||i===od||i===Zc||i===ld)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===id||i===ad)return r===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rd)return s.COMPRESSED_R11_EAC;if(i===od)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return s.COMPRESSED_RG11_EAC;if(i===ld)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cd||i===ud||i===fd||i===hd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===Sd||i===yd||i===Md)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return r===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ed||i===bd||i===Td)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ed)return r===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ad||i===Rd||i===Kc||i===Cd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ad)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const V3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k3=`
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

}`;class X3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new mS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Oi({vertexShader:V3,fragmentShader:k3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new He(new cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W3 extends Os{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,u=null,h=null,p=null,c=null,d=null,S=null;const b=typeof XRWebGLBinding<"u",_=new X3,f={},g=n.getContextAttributes();let y=null,v=null;const T=[],A=[],R=new Ft;let m=null;const E=new $n;E.viewport=new Te;const w=new $n;w.viewport=new Te;const D=[E,w],O=new eb;let q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=T[J];return rt===void 0&&(rt=new Sf,T[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=T[J];return rt===void 0&&(rt=new Sf,T[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=T[J];return rt===void 0&&(rt=new Sf,T[J]=rt),rt.getHandSpace()};function H(J){const rt=A.indexOf(J.inputSource);if(rt===-1)return;const it=T[rt];it!==void 0&&(it.update(J.inputSource,J.frame,u||r),it.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",z);for(let J=0;J<T.length;J++){const rt=A[J];rt!==null&&(A[J]=null,T[J].disconnect(rt))}q=null,K=null,_.reset();for(const J in f)delete f[J];t.setRenderTarget(y),d=null,c=null,p=null,a=null,v=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(m),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(y=t.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",L),a.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),m=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Ut=null,Ot=null;g.depth&&(Ot=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=g.stencil?ms:ha,Ut=g.stencil?qo:Li);const Rt={colorFormat:n.RGBA8,depthFormat:Ot,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Rt),a.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),v=new Ui(c.textureWidth,c.textureHeight,{format:pi,type:Bn,depthTexture:new Ir(c.textureWidth,c.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,it),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ui(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await a.requestReferenceSpace(o),Xt.setContext(a),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(J){for(let rt=0;rt<J.removed.length;rt++){const it=J.removed[rt],Ut=A.indexOf(it);Ut>=0&&(A[Ut]=null,T[Ut].disconnect(it))}for(let rt=0;rt<J.added.length;rt++){const it=J.added[rt];let Ut=A.indexOf(it);if(Ut===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=A.length){A.push(it),Ut=Rt;break}else if(A[Rt]===null){A[Rt]=it,Ut=Rt;break}if(Ut===-1)break}const Ot=T[Ut];Ot&&Ot.connect(it)}}const X=new F,tt=new F;function nt(J,rt,it){X.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(it.matrixWorld);const Ut=X.distanceTo(tt),Ot=rt.projectionMatrix.elements,Rt=it.projectionMatrix.elements,Ne=Ot[14]/(Ot[10]-1),Wt=Ot[14]/(Ot[10]+1),de=(Ot[9]+1)/Ot[5],ne=(Ot[9]-1)/Ot[5],Jt=(Ot[8]-1)/Ot[0],Ie=(Rt[8]+1)/Rt[0],We=Ne*Jt,je=Ne*Ie,an=Ut/(-Jt+Ie),Ae=an*-Jt;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ae),J.translateZ(an),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Be=Ne+an,P=Wt+an,yn=We-Ae,re=je+(Ut-Ae),C=de*Wt/P*Be,x=ne*Wt/P*Be;J.projectionMatrix.makePerspective(yn,re,C,x,Be,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let rt=J.near,it=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(it=_.depthFar)),O.near=w.near=E.near=rt,O.far=w.far=E.far=it,(q!==O.near||K!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,K=O.far),O.layers.mask=J.layers.mask|6,E.layers.mask=O.layers.mask&-5,w.layers.mask=O.layers.mask&-3;const Ut=J.parent,Ot=O.cameras;ft(O,Ut);for(let Rt=0;Rt<Ot.length;Rt++)ft(Ot[Rt],Ut);Ot.length===2?nt(O,E,w):O.projectionMatrix.copy(E.projectionMatrix),_t(J,O,Ut)};function _t(J,rt,it){it===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(it.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Dd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(J){l=J,c!==null&&(c.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(J){return f[J]};let Zt=null;function se(J,rt){if(h=rt.getViewerPose(u||r),S=rt,h!==null){const it=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ut=!1;it.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let Wt=0;Wt<it.length;Wt++){const de=it[Wt];let ne=null;if(d!==null)ne=d.getViewport(de);else{const Ie=p.getViewSubImage(c,de);ne=Ie.viewport,Wt===0&&(t.setRenderTargetTextures(v,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(v))}let Jt=D[Wt];Jt===void 0&&(Jt=new $n,Jt.layers.enable(Wt),Jt.viewport=new Te,D[Wt]=Jt),Jt.matrix.fromArray(de.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(de.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ne.x,ne.y,ne.width,ne.height),Wt===0&&(O.matrix.copy(Jt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(Jt)}const Ot=a.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){p=i.getBinding();const Wt=p.getDepthInformation(it[0]);Wt&&Wt.isValid&&Wt.texture&&_.init(Wt,a.renderState)}if(Ot&&Ot.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Wt=0;Wt<it.length;Wt++){const de=it[Wt].camera;if(de){let ne=f[de];ne||(ne=new mS,f[de]=ne);const Jt=p.getCameraImage(de);ne.sourceTexture=Jt}}}}for(let it=0;it<T.length;it++){const Ut=A[it],Ot=T[it];Ut!==null&&Ot!==void 0&&Ot.update(Ut,rt,u||r)}Zt&&Zt(J,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),S=null}const Xt=new xS;Xt.setAnimationLoop(se),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}}const q3=new Ue,AS=new Nt;AS.set(-1,0,0,0,1,0,0,0,1);function Y3(e,t){function n(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,gS(e)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function a(_,f,g,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(_,f):f.isMeshLambertMaterial?(s(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(_,f),p(_,f)):f.isMeshPhongMaterial?(s(_,f),h(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(_,f),c(_,f),f.isMeshPhysicalMaterial&&d(_,f,v)):f.isMeshMatcapMaterial?(s(_,f),S(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),b(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(r(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,g,y):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,n(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===wn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,n(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===wn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,n(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,n(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const g=t.get(f),y=g.envMap,v=g.envMapRotation;y&&(_.envMap.value=y,_.envMapRotation.value.setFromMatrix4(q3.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(AS),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,_.aoMapTransform))}function r(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,g,y){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*g,_.scale.value=y*.5,f.map&&(_.map.value=f.map,n(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function p(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function c(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function d(_,f,g){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,f){f.matcap&&(_.matcap.value=f.matcap)}function b(_,f){const g=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Z3(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const A=T.program;i.uniformBlockBinding(v,A)}function u(v,T){let A=a[v.id];A===void 0&&(_(v),A=h(v),a[v.id]=A,v.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(v,R);const m=t.render.frame;s[v.id]!==m&&(c(v),s[v.id]=m)}function h(v){const T=p();v.__bindingPointIndex=T;const A=e.createBuffer(),R=v.__size,m=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,m),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const T=a[v.id],A=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let m=0,E=A.length;m<E;m++){const w=A[m];if(Array.isArray(w))for(let D=0,O=w.length;D<O;D++)d(w[D],m,D,R);else d(w,m,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,T,A,R){if(b(v,T,A,R)===!0){const m=v.__offset,E=v.value;if(Array.isArray(E)){let w=0;for(let D=0;D<E.length;D++){const O=E[D],q=f(O);S(O,v.__data,w),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(w+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(E,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,m,v.__data)}}function S(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function b(v,T,A,R){const m=v.value,E=T+"_"+A;if(R[E]===void 0)return typeof m=="number"||typeof m=="boolean"?R[E]=m:ArrayBuffer.isView(m)?R[E]=m.slice():R[E]=m.clone(),!0;{const w=R[E];if(typeof m=="number"||typeof m=="boolean"){if(w!==m)return R[E]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(w.equals(m)===!1)return w.copy(m),!0}}return!1}function _(v){const T=v.uniforms;let A=0;const R=16;for(let E=0,w=T.length;E<w;E++){const D=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,q=D.length;O<q;O++){const K=D[O],H=Array.isArray(K.value)?K.value:[K.value];for(let L=0,z=H.length;L<z;L++){const X=H[L],tt=f(X),nt=A%R,ft=nt%tt.boundary,_t=nt+ft;A+=ft,_t!==0&&R-_t<tt.storage&&(A+=R-_t),K.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=tt.storage}}}const m=A%R;return m>0&&(A+=R-m),v.__size=A,v.__cache={},this}function f(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),T}function g(v){const T=v.target;T.removeEventListener("dispose",g);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function y(){for(const v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:u,dispose:y}}const K3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function j3(){return Si===null&&(Si=new BE(K3,16,16,Cs,fa),Si.name="DFG_LUT",Si.minFilter=mn,Si.magFilter=mn,Si.wrapS=$i,Si.wrapT=$i,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class Q3{constructor(t={}){const{canvas:n=pE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:d=Bn}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=r;const b=d,_=new Set([Hp,Fp,Bp]),f=new Set([Bn,Li,Wo,qo,zp,Ip]),g=new Uint32Array(4),y=new Int32Array(4),v=new F;let T=null,A=null;const R=[],m=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1,O=null,q=null,K=null,H=null;this._outputColorSpace=Kn;let L=0,z=0,X=null,tt=-1,nt=null;const ft=new Te,_t=new Te;let Zt=null;const se=new qt(0);let Xt=0,J=n.width,rt=n.height,it=1,Ut=null,Ot=null;const Rt=new Te(0,0,J,rt),Ne=new Te(0,0,J,rt);let Wt=!1;const de=new qp;let ne=!1,Jt=!1;const Ie=new Ue,We=new F,je=new Te,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Be(){return X===null?it:1}let P=i;function yn(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",gi,!1),P===null){const I="webgl2";if(P=yn(I,M),P===null)throw yn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw ee("WebGLRenderer: "+M.message),M}let re,C,x,B,k,Y,at,ot,Z,Q,lt,Et,ht,ct,At,Ct,Pt,U,st,j,ut,gt,et;function Mt(){re=new jA(P),re.init(),ut=new G3(P,re),C=new VA(P,re,t,ut),x=new F3(P,re),C.reversedDepthBuffer&&c&&x.buffers.depth.setReversed(!0),q=P.createFramebuffer(),K=P.createFramebuffer(),H=P.createFramebuffer(),B=new $A(P),k=new T3,Y=new H3(P,re,x,k,C,ut,B),at=new KA(w),ot=new ib(P),gt=new HA(P,ot),Z=new QA(P,ot,B,gt),Q=new eR(P,Z,ot,gt,B),U=new tR(P,C,Y),At=new kA(k),lt=new b3(w,at,re,C,gt,At),Et=new Y3(w,k),ht=new R3,ct=new L3(re),Pt=new FA(w,at,x,Q,S,l),Ct=new B3(w,Q,C),et=new Z3(P,B,C,x),st=new GA(P,re,B),j=new JA(P,re,B),B.programs=lt.programs,w.capabilities=C,w.extensions=re,w.properties=k,w.renderLists=ht,w.shadowMap=Ct,w.state=x,w.info=B}Mt(),b!==Bn&&(E=new iR(b,n.width,n.height,o,a,s));const St=new W3(w,P);this.xr=St,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(M){M!==void 0&&(it=M,this.setSize(J,rt,!1))},this.getSize=function(M){return M.set(J,rt)},this.setSize=function(M,I,W=!0){if(St.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,rt=I,n.width=Math.floor(M*it),n.height=Math.floor(I*it),W===!0&&(n.style.width=M+"px",n.style.height=I+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(J*it,rt*it).floor()},this.setDrawingBufferSize=function(M,I,W){J=M,rt=I,it=W,n.width=Math.floor(M*W),n.height=Math.floor(I*W),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(b===Bn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ft)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,I,W,G){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,I,W,G),x.viewport(ft.copy(Rt).multiplyScalar(it).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,I,W,G){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,I,W,G),x.scissor(_t.copy(Ne).multiplyScalar(it).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(M){x.setScissorTest(Wt=M)},this.setOpaqueSort=function(M){Ut=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,W=!0){let G=0;if(M){let V=!1;if(X!==null){const mt=X.texture.format;V=_.has(mt)}if(V){const mt=X.texture.type,xt=f.has(mt),pt=Pt.getClearColor(),yt=Pt.getClearAlpha(),bt=pt.r,zt=pt.g,Gt=pt.b;xt?(g[0]=bt,g[1]=zt,g[2]=Gt,g[3]=yt,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=bt,y[1]=zt,y[2]=Gt,y[3]=yt,P.clearBufferiv(P.COLOR,0,y))}else G|=P.COLOR_BUFFER_BIT}I&&(G|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",gi,!1),Pt.dispose(),ht.dispose(),ct.dispose(),k.dispose(),at.dispose(),Q.dispose(),gt.dispose(),et.dispose(),lt.dispose(),St.dispose(),St.removeEventListener("sessionstart",am),St.removeEventListener("sessionend",sm),es.stop()};function Re(M){M.preventDefault(),Z0("WebGLRenderer: Context Lost."),D=!0}function _e(){Z0("WebGLRenderer: Context Restored."),D=!1;const M=B.autoReset,I=Ct.enabled,W=Ct.autoUpdate,G=Ct.needsUpdate,V=Ct.type;Mt(),B.autoReset=M,Ct.enabled=I,Ct.autoUpdate=W,Ct.needsUpdate=G,Ct.type=V}function gi(M){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _i(M){const I=M.target;I.removeEventListener("dispose",_i),RS(I)}function RS(M){CS(M),k.remove(M)}function CS(M){const I=k.get(M).programs;I!==void 0&&(I.forEach(function(W){lt.releaseProgram(W)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,W,G,V,mt){I===null&&(I=an);const xt=V.isMesh&&V.matrixWorld.determinantAffine()<0,pt=US(M,I,W,G,V);x.setMaterial(G,xt);let yt=W.index,bt=1;if(G.wireframe===!0){if(yt=Z.getWireframeAttribute(W),yt===void 0)return;bt=2}const zt=W.drawRange,Gt=W.attributes.position;let Tt=zt.start*bt,ue=(zt.start+zt.count)*bt;mt!==null&&(Tt=Math.max(Tt,mt.start*bt),ue=Math.min(ue,(mt.start+mt.count)*bt)),yt!==null?(Tt=Math.max(Tt,0),ue=Math.min(ue,yt.count)):Gt!=null&&(Tt=Math.max(Tt,0),ue=Math.min(ue,Gt.count));const Le=ue-Tt;if(Le<0||Le===1/0)return;gt.setup(V,G,pt,W,yt);let Ce,pe=st;if(yt!==null&&(Ce=ot.get(yt),pe=j,pe.setIndex(Ce)),V.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Be()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(V.isLine){let hn=G.linewidth;hn===void 0&&(hn=1),x.setLineWidth(hn*Be()),V.isLineSegments?pe.setMode(P.LINES):V.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else V.isPoints?pe.setMode(P.POINTS):V.isSprite&&pe.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const hn=V._multiDrawStarts,vt=V._multiDrawCounts,Nn=V._multiDrawCount,$t=yt?ot.get(yt).bytesPerElement:1,qn=k.get(G).currentProgram.getUniforms();for(let vi=0;vi<Nn;vi++)qn.setValue(P,"_gl_DrawID",vi),pe.render(hn[vi]/$t,vt[vi])}else if(V.isInstancedMesh)pe.renderInstances(Tt,Le,V.count);else if(W.isInstancedBufferGeometry){const hn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,hn);pe.renderInstances(Tt,Le,vt)}else pe.render(Tt,Le)};function im(M,I,W){M.transparent===!0&&M.side===Ei&&M.forceSinglePass===!1?(M.side=wn,M.needsUpdate=!0,fl(M,I,W),M.side=Qa,M.needsUpdate=!0,fl(M,I,W),M.side=Ei):fl(M,I,W)}this.compile=function(M,I,W=null){W===null&&(W=M),A=ct.get(W),A.init(I),m.push(A),W.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let xt=0;xt<mt.length;xt++){const pt=mt[xt];im(pt,W,V),G.add(pt)}else im(mt,W,V),G.add(mt)}),A=m.pop(),G},this.compileAsync=function(M,I,W=null){const G=this.compile(M,I,W);return new Promise(V=>{function mt(){if(G.forEach(function(xt){k.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){V(M);return}setTimeout(mt,10)}re.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let bu=null;function wS(M){bu&&bu(M)}function am(){es.stop()}function sm(){es.start()}const es=new xS;es.setAnimationLoop(wS),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(M){bu=M,St.setAnimationLoop(M),M===null?es.stop():es.start()},St.addEventListener("sessionstart",am),St.addEventListener("sessionend",sm),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,I);const W=St.enabled===!0&&St.isPresenting===!0,G=E!==null&&(X===null||W)&&E.begin(w,X);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(I),I=St.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,I,X),A=ct.get(M,m.length),A.init(I),A.state.textureUnits=Y.getTextureUnits(),m.push(A),Ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),de.setFromProjectionMatrix(Ie,Ci,I.reversedDepth),Jt=this.localClippingEnabled,ne=At.init(this.clippingPlanes,Jt),T=ht.get(M,R.length),T.init(),R.push(T),St.enabled===!0&&St.isPresenting===!0){const xt=w.xr.getDepthSensingMesh();xt!==null&&Tu(xt,I,-1/0,w.sortObjects)}Tu(M,I,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(Ut,Ot,I.reversedDepth),Ae=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Ae&&Pt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&At.beginShadows();const V=A.state.shadowsArray;if(Ct.render(V,M,I),ne===!0&&At.endShadows(),(G&&E.hasRenderPass())===!1){const xt=T.opaque,pt=T.transmissive;if(A.setupLights(),I.isArrayCamera){const yt=I.cameras;if(pt.length>0)for(let bt=0,zt=yt.length;bt<zt;bt++){const Gt=yt[bt];om(xt,pt,M,Gt)}Ae&&Pt.render(M);for(let bt=0,zt=yt.length;bt<zt;bt++){const Gt=yt[bt];rm(T,M,Gt,Gt.viewport)}}else pt.length>0&&om(xt,pt,M,I),Ae&&Pt.render(M),rm(T,M,I)}X!==null&&z===0&&(Y.updateMultisampleRenderTarget(X),Y.updateRenderTargetMipmap(X)),G&&E.end(w),M.isScene===!0&&M.onAfterRender(w,M,I),gt.resetDefaultState(),tt=-1,nt=null,m.pop(),m.length>0?(A=m[m.length-1],Y.setTextureUnits(A.state.textureUnits),ne===!0&&At.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,O!==null&&O.renderEnd()};function Tu(M,I,W,G){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||de.intersectsSprite(M)){G&&je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const xt=Q.update(M),pt=M.material;pt.visible&&T.push(M,xt,pt,W,je.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||de.intersectsObject(M))){const xt=Q.update(M),pt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),je.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),je.copy(xt.boundingSphere.center)),je.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(pt)){const yt=xt.groups;for(let bt=0,zt=yt.length;bt<zt;bt++){const Gt=yt[bt],Tt=pt[Gt.materialIndex];Tt&&Tt.visible&&T.push(M,xt,Tt,W,je.z,Gt)}}else pt.visible&&T.push(M,xt,pt,W,je.z,null)}}const mt=M.children;for(let xt=0,pt=mt.length;xt<pt;xt++)Tu(mt[xt],I,W,G)}function rm(M,I,W,G){const{opaque:V,transmissive:mt,transparent:xt}=M;A.setupLightsView(W),ne===!0&&At.setGlobalState(w.clippingPlanes,W),G&&x.viewport(ft.copy(G)),V.length>0&&ul(V,I,W),mt.length>0&&ul(mt,I,W),xt.length>0&&ul(xt,I,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function om(M,I,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const Tt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Ui(1,1,{generateMipmaps:!0,type:Tt?fa:Bn,minFilter:ps,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const mt=A.state.transmissionRenderTarget[G.id],xt=G.viewport||ft;mt.setSize(xt.z*w.transmissionResolutionScale,xt.w*w.transmissionResolutionScale);const pt=w.getRenderTarget(),yt=w.getActiveCubeFace(),bt=w.getActiveMipmapLevel();w.setRenderTarget(mt),w.getClearColor(se),Xt=w.getClearAlpha(),Xt<1&&w.setClearColor(16777215,.5),w.clear(),Ae&&Pt.render(W);const zt=w.toneMapping;w.toneMapping=Di;const Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),ne===!0&&At.setGlobalState(w.clippingPlanes,G),ul(M,W,G),Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ue=0,Le=I.length;ue<Le;ue++){const Ce=I[ue],{object:pe,geometry:hn,material:vt,group:Nn}=Ce;if(vt.side===Ei&&pe.layers.test(G.layers)){const $t=vt.side;vt.side=wn,vt.needsUpdate=!0,lm(pe,W,G,hn,vt,Nn),vt.side=$t,vt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt))}w.setRenderTarget(pt,yt,bt),w.setClearColor(se,Xt),Gt!==void 0&&(G.viewport=Gt),w.toneMapping=zt}function ul(M,I,W){const G=I.isScene===!0?I.overrideMaterial:null;for(let V=0,mt=M.length;V<mt;V++){const xt=M[V],{object:pt,geometry:yt,group:bt}=xt;let zt=xt.material;zt.allowOverride===!0&&G!==null&&(zt=G),pt.layers.test(W.layers)&&lm(pt,I,W,yt,zt,bt)}}function lm(M,I,W,G,V,mt){M.onBeforeRender(w,I,W,G,V,mt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(w,I,W,G,M,mt),V.transparent===!0&&V.side===Ei&&V.forceSinglePass===!1?(V.side=wn,V.needsUpdate=!0,w.renderBufferDirect(W,I,G,V,M,mt),V.side=Qa,V.needsUpdate=!0,w.renderBufferDirect(W,I,G,V,M,mt),V.side=Ei):w.renderBufferDirect(W,I,G,V,M,mt),M.onAfterRender(w,I,W,G,V,mt)}function fl(M,I,W){I.isScene!==!0&&(I=an);const G=k.get(M),V=A.state.lights,mt=A.state.shadowsArray,xt=V.state.version,pt=lt.getParameters(M,V.state,mt,I,W,A.state.lightProbeGridArray),yt=lt.getProgramCacheKey(pt);let bt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=at.get(M.envMap||G.environment,zt),G.envMapRotation=G.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",_i),bt=new Map,G.programs=bt);let Gt=bt.get(yt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===xt)return um(M,pt),Gt}else pt.uniforms=lt.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,pt),M.onBeforeCompile(pt,w),Gt=lt.acquireProgram(pt,yt),bt.set(yt,Gt),G.uniforms=pt.uniforms;const Tt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=At.uniform),um(M,pt),G.needsLights=LS(M),G.lightsStateVersion=xt,G.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=Gt,G.uniformsList=null,Gt}function cm(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=vc.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function um(M,I){const W=k.get(M);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function DS(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let W=0,G=M.length;W<G;W++){const V=M[W];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function US(M,I,W,G,V){I.isScene!==!0&&(I=an),Y.resetTextureUnits();const mt=I.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,pt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Kt.workingColorSpace,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,bt=at.get(G.envMap||xt,yt),zt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!W.morphAttributes.position,ue=!!W.morphAttributes.normal,Le=!!W.morphAttributes.color;let Ce=Di;G.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ce=w.toneMapping);const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,hn=pe!==void 0?pe.length:0,vt=k.get(G),Nn=A.state.lights;if(ne===!0&&(Jt===!0||M!==nt)){const ve=M===nt&&G.id===tt;At.setState(G,M,ve)}let $t=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Nn.state.version||vt.outputColorSpace!==pt||V.isBatchedMesh&&vt.batching===!1||!V.isBatchedMesh&&vt.batching===!0||V.isBatchedMesh&&vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&vt.instancing===!1||!V.isInstancedMesh&&vt.instancing===!0||V.isSkinnedMesh&&vt.skinning===!1||!V.isSkinnedMesh&&vt.skinning===!0||V.isInstancedMesh&&vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&vt.instancingMorph===!1&&V.morphTexture!==null||vt.envMap!==bt||G.fog===!0&&vt.fog!==mt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==At.numPlanes||vt.numIntersection!==At.numIntersection)||vt.vertexAlphas!==zt||vt.vertexTangents!==Gt||vt.morphTargets!==Tt||vt.morphNormals!==ue||vt.morphColors!==Le||vt.toneMapping!==Ce||vt.morphTargetsCount!==hn||!!vt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,vt.__version=G.version);let qn=vt.currentProgram;$t===!0&&(qn=fl(G,I,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,qn,vt));let vi=!1,pa=!1,Ps=!1;const me=qn.getUniforms(),Oe=vt.uniforms;if(x.useProgram(qn.program)&&(vi=!0,pa=!0,Ps=!0),G.id!==tt&&(tt=G.id,pa=!0),vt.needsLights){const ve=DS(A.state.lightProbeGridArray,V);vt.lightProbeGrid!==ve&&(vt.lightProbeGrid=ve,pa=!0)}if(vi||nt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),me.setValue(P,"projectionMatrix",M.projectionMatrix),me.setValue(P,"viewMatrix",M.matrixWorldInverse);const ga=me.map.cameraPosition;ga!==void 0&&ga.setValue(P,We.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),nt!==M&&(nt=M,pa=!0,Ps=!0)}if(vt.needsLights&&(Nn.state.directionalShadowMap.length>0&&me.setValue(P,"directionalShadowMap",Nn.state.directionalShadowMap,Y),Nn.state.spotShadowMap.length>0&&me.setValue(P,"spotShadowMap",Nn.state.spotShadowMap,Y),Nn.state.pointShadowMap.length>0&&me.setValue(P,"pointShadowMap",Nn.state.pointShadowMap,Y)),V.isSkinnedMesh){me.setOptional(P,V,"bindMatrix"),me.setOptional(P,V,"bindMatrixInverse");const ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),me.setValue(P,"boneTexture",ve.boneTexture,Y))}V.isBatchedMesh&&(me.setOptional(P,V,"batchingTexture"),me.setValue(P,"batchingTexture",V._matricesTexture,Y),me.setOptional(P,V,"batchingIdTexture"),me.setValue(P,"batchingIdTexture",V._indirectTexture,Y),me.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(P,"batchingColorTexture",V._colorsTexture,Y));const ma=W.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&U.update(V,W,qn),(pa||vt.receiveShadow!==V.receiveShadow)&&(vt.receiveShadow=V.receiveShadow,me.setValue(P,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Oe.envMapIntensity.value=I.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=j3()),pa){if(me.setValue(P,"toneMappingExposure",w.toneMappingExposure),vt.needsLights&&NS(Oe,Ps),mt&&G.fog===!0&&Et.refreshFogUniforms(Oe,mt),Et.refreshMaterialUniforms(Oe,G,it,rt,A.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){const ve=vt.lightProbeGrid;Oe.probesSH.value=ve.texture,Oe.probesMin.value.copy(ve.boundingBox.min),Oe.probesMax.value.copy(ve.boundingBox.max),Oe.probesResolution.value.copy(ve.resolution)}vc.upload(P,cm(vt),Oe,Y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vc.upload(P,cm(vt),Oe,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(P,"center",V.center),me.setValue(P,"modelViewMatrix",V.modelViewMatrix),me.setValue(P,"normalMatrix",V.normalMatrix),me.setValue(P,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ve=G.uniformsGroups;for(let ga=0,zs=ve.length;ga<zs;ga++){const fm=ve[ga];et.update(fm,qn),et.bind(fm,qn)}}return qn}function NS(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function LS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,I,W){const G=k.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=I,k.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const W=k.get(M);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,W=0){X=M,L=I,z=W;let G=null,V=!1,mt=!1;if(M){const pt=k.get(M);if(pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,pt.__webglFramebuffer),ft.copy(M.viewport),_t.copy(M.scissor),Zt=M.scissorTest,x.viewport(ft),x.scissor(_t),x.setScissorTest(Zt),tt=-1;return}else if(pt.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(pt.__hasExternalTextures)Y.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const zt=M.depthTexture;if(pt.__boundDepthTexture!==zt){if(zt!==null&&k.has(zt)&&(M.width!==zt.image.width||M.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}const yt=M.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);const bt=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?G=bt[I][W]:G=bt[I],V=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?G=k.get(M).__webglMultisampledFramebuffer:Array.isArray(bt)?G=bt[W]:G=bt,ft.copy(M.viewport),_t.copy(M.scissor),Zt=M.scissorTest}else ft.copy(Rt).multiplyScalar(it).floor(),_t.copy(Ne).multiplyScalar(it).floor(),Zt=Wt;if(W!==0&&(G=q),x.bindFramebuffer(P.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(ft),x.scissor(_t),x.setScissorTest(Zt),V){const pt=k.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,W)}else if(mt){const pt=I;for(let yt=0;yt<M.textures.length;yt++){const bt=k.get(M.textures[yt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+yt,bt.__webglTexture,W,pt)}}else if(M!==null&&W!==0){const pt=k.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pt.__webglTexture,W)}tt=-1},this.readRenderTargetPixels=function(M,I,W,G,V,mt,xt,pt=0){if(!(M&&M.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){x.bindFramebuffer(P.FRAMEBUFFER,yt);try{const bt=M.textures[pt],zt=bt.format,Gt=bt.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(zt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Gt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-G&&W>=0&&W<=M.height-V&&P.readPixels(I,W,G,V,ut.convert(zt),ut.convert(Gt),mt)}finally{const bt=X!==null?k.get(X).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,I,W,G,V,mt,xt,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(I>=0&&I<=M.width-G&&W>=0&&W<=M.height-V){x.bindFramebuffer(P.FRAMEBUFFER,yt);const bt=M.textures[pt],zt=bt.format,Gt=bt.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),P.readPixels(I,W,G,V,ut.convert(zt),ut.convert(Gt),0);const ue=X!==null?k.get(X).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,ue);const Le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await mE(P,Le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(Tt),P.deleteSync(Le),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,W=0){const G=Math.pow(2,-W),V=Math.floor(M.image.width*G),mt=Math.floor(M.image.height*G),xt=I!==null?I.x:0,pt=I!==null?I.y:0;Y.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,xt,pt,V,mt),x.unbindTexture()},this.copyTextureToTexture=function(M,I,W=null,G=null,V=0,mt=0){let xt,pt,yt,bt,zt,Gt,Tt,ue,Le;const Ce=M.isCompressedTexture?M.mipmaps[mt]:M.image;if(W!==null)xt=W.max.x-W.min.x,pt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,zt=W.min.y,Gt=W.isBox3?W.min.z:0;else{const Oe=Math.pow(2,-V);xt=Math.floor(Ce.width*Oe),pt=Math.floor(Ce.height*Oe),M.isDataArrayTexture?yt=Ce.depth:M.isData3DTexture?yt=Math.floor(Ce.depth*Oe):yt=1,bt=0,zt=0,Gt=0}G!==null?(Tt=G.x,ue=G.y,Le=G.z):(Tt=0,ue=0,Le=0);const pe=ut.convert(I.format),hn=ut.convert(I.type);let vt;I.isData3DTexture?(Y.setTexture3D(I,0),vt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Y.setTexture2DArray(I,0),vt=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(I,0),vt=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Nn=x.getParameter(P.UNPACK_ROW_LENGTH),$t=x.getParameter(P.UNPACK_IMAGE_HEIGHT),qn=x.getParameter(P.UNPACK_SKIP_PIXELS),vi=x.getParameter(P.UNPACK_SKIP_ROWS),pa=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Ce.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ce.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,bt),x.pixelStorei(P.UNPACK_SKIP_ROWS,zt),x.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt);const Ps=M.isDataArrayTexture||M.isData3DTexture,me=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Oe=k.get(M),ma=k.get(I),ve=k.get(Oe.__renderTarget),ga=k.get(ma.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,ve.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let zs=0;zs<yt;zs++)Ps&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(M).__webglTexture,V,Gt+zs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(I).__webglTexture,mt,Le+zs)),P.blitFramebuffer(bt,zt,xt,pt,Tt,ue,xt,pt,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||k.has(M)){const Oe=k.get(M),ma=k.get(I);x.bindFramebuffer(P.READ_FRAMEBUFFER,K),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let ve=0;ve<yt;ve++)Ps?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,V,Gt+ve):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,V),me?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ma.__webglTexture,mt,Le+ve):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ma.__webglTexture,mt),V!==0?P.blitFramebuffer(bt,zt,xt,pt,Tt,ue,xt,pt,P.COLOR_BUFFER_BIT,P.NEAREST):me?P.copyTexSubImage3D(vt,mt,Tt,ue,Le+ve,bt,zt,xt,pt):P.copyTexSubImage2D(vt,mt,Tt,ue,bt,zt,xt,pt);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else me?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(vt,mt,Tt,ue,Le,xt,pt,yt,pe,hn,Ce.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,mt,Tt,ue,Le,xt,pt,yt,pe,Ce.data):P.texSubImage3D(vt,mt,Tt,ue,Le,xt,pt,yt,pe,hn,Ce):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,mt,Tt,ue,xt,pt,pe,hn,Ce.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,mt,Tt,ue,Ce.width,Ce.height,pe,Ce.data):P.texSubImage2D(P.TEXTURE_2D,mt,Tt,ue,xt,pt,pe,hn,Ce);x.pixelStorei(P.UNPACK_ROW_LENGTH,Nn),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$t),x.pixelStorei(P.UNPACK_SKIP_PIXELS,qn),x.pixelStorei(P.UNPACK_SKIP_ROWS,vi),x.pixelStorei(P.UNPACK_SKIP_IMAGES,pa),mt===0&&I.generateMipmaps&&P.generateMipmap(vt),x.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){L=0,z=0,X=null,x.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}}const te=(e,t,n)=>({x:e,y:t,z:n}),Rn={minX:-8,maxX:8,minZ:-3,maxZ:34},Ua={forest:{id:"forest",name:"苔影林径",theme:"forest",par:4,bounds:Rn,spawn:te(0,.35,0),hole:{...te(2,.03,29),radius:.65},surfaces:[{id:"forest-grass",type:"grass",friction:.62,bounds:Rn},{id:"forest-sand",type:"sand",friction:2.35,bounds:{minX:-7,maxX:-1,minZ:10,maxZ:16},center:te(-4,0,13)}],obstacles:[{id:"oak-1",type:"tree",position:te(2,1.2,9),solid:!0,radius:1.05},{id:"oak-2",type:"tree",position:te(-3,1.2,21),solid:!0,radius:1.1},{id:"stone-1",type:"rock",position:te(4,.7,18),solid:!0,radius:1.25}],terrainFeatures:[]},desert:{id:"desert",name:"赤金沙谷",theme:"desert",par:5,bounds:Rn,spawn:te(-3,.35,0),hole:{...te(3,.03,30),radius:.65},surfaces:[{id:"desert-grass",type:"grass",friction:.55,bounds:Rn},{id:"desert-sand",type:"sand",friction:2.1,bounds:{minX:-8,maxX:2,minZ:8,maxZ:17},center:te(-3,0,12.5)}],obstacles:[{id:"cactus-1",type:"cactus",position:te(2,1,7),solid:!0,radius:.75},{id:"desert-rock",type:"rock",position:te(-2,.8,20),solid:!0,radius:1.45},{id:"cactus-2",type:"cactus",position:te(4,1,24),solid:!0,radius:.8}],terrainFeatures:[]},snow:{id:"snow",name:"极光冰原",theme:"snow",par:6,bounds:Rn,spawn:te(0,.35,0),hole:{...te(-3,.03,30),radius:.65},surfaces:[{id:"snow-grass",type:"grass",friction:.64,bounds:Rn},{id:"snow-ice",type:"ice",friction:.075,bounds:{minX:-7,maxX:7,minZ:7,maxZ:25},center:te(0,0,16)}],obstacles:[{id:"ice-1",type:"ice_crystal",position:te(-3,1.2,10),solid:!0,radius:1},{id:"ice-2",type:"ice_crystal",position:te(3,1.2,18),solid:!0,radius:1.1},{id:"snow-rock",type:"snow_rock",position:te(0,.8,26),solid:!0,radius:1.3}],terrainFeatures:[]}},Je=e=>JSON.parse(JSON.stringify(e)),Fg=e=>Number.isFinite(e)?e:0,Ql=()=>[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}];class J3{constructor(t,n){It(this,"scene",new UE);It(this,"renderer");It(this,"camera",new $n(48,1,.1,200));It(this,"canvas");It(this,"course",Ua.forest);It(this,"screen","menu");It(this,"mode","single");It(this,"ballMesh",new He(new jp(.34,28,20),new qi({color:16777215,roughness:.32})));It(this,"ball",{position:te(0,.35,0),velocity:te(0,0,0),radius:.34,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:.62,lastCollision:null,lastSafePosition:te(0,.35,0)});It(this,"shot",{dragging:!1,startScreen:null,currentScreen:null,direction:{x:0,z:1},power:0,minPower:1.5,maxPower:14,strokeCount:0});It(this,"cameraState",{mode:"follow",position:te(0,8,-10),target:te(0,0,0),distance:12,minDistance:7,maxDistance:20,zoom:1,angle:0,pitch:.55});It(this,"players",[]);It(this,"turnIndex",0);It(this,"round",1);It(this,"revision",0);It(this,"status","setup");It(this,"winnerId",null);It(this,"tiedPlayerIds",[]);It(this,"items",[{id:"hio-orb",type:"hole_in_one",position:te(5,.45,6),active:!0,collected:!1},{id:"speed-strip",type:"speed_boost",position:te(0,.05,14),active:!0,collected:!1,direction:{x:0,z:1}},{id:"bounce-pad",type:"bounce_pad",position:te(-4,.08,23),active:!0,collected:!1,direction:{x:.75,z:.66}}]);It(this,"singleInventory",Ql());It(this,"singleArmed",null);It(this,"singleCollected",[]);It(this,"activeEffect",null);It(this,"lastTriggeredId",null);It(this,"currentScore",0);It(this,"totalScore",0);It(this,"totalStrokes",0);It(this,"holeComplete",!1);It(this,"elapsedTime",0);It(this,"perf",{fixedStep:1/120,accumulator:0,simulationTick:0,renderFrame:0,reactCommitCount:1,logicLoopCount:0,listenerCount:5,runtimeMountCount:1,runtimeCleanupCount:0,engineGeneration:Date.now(),poolStats:{balls:{capacity:4,createdTotal:4,reused:0},effects:{capacity:12,createdTotal:12,reused:0}}});It(this,"raf",0);It(this,"last",performance.now());It(this,"onUpdate");It(this,"updateClock",0);It(this,"disposed",!1);It(this,"speedTriggered",!1);It(this,"down",t=>{var n,i;this.screen!=="playing"||this.ball.moving||this.ball.inHole||(this.shot.dragging=!0,this.shot.startScreen={x:t.clientX,y:t.clientY},this.shot.currentScreen={...this.shot.startScreen},(i=(n=this.canvas).setPointerCapture)==null||i.call(n,t.pointerId),this.onUpdate())});It(this,"move",t=>{if(!this.shot.dragging||!this.shot.startScreen)return;this.shot.currentScreen={x:t.clientX,y:t.clientY};const n=this.shot.startScreen.x-t.clientX,i=this.shot.startScreen.y-t.clientY,a=Math.hypot(n,i);a>2&&(this.shot.direction={x:n/a,z:i/a},this.shot.power=Math.min(this.shot.maxPower,Math.max(this.shot.minPower,a*.055))),this.onUpdate()});It(this,"up",()=>{this.shot.dragging&&(this.shot.dragging=!1,this.shot.power>=this.shot.minPower&&this.shoot(this.shot.direction,this.shot.power),this.shot.power=0,this.shot.startScreen=null,this.shot.currentScreen=null,this.onUpdate())});It(this,"wheel",t=>{t.preventDefault(),this.zoom(t.deltaY>0?1:-1)});It(this,"resize",()=>{const t=this.canvas.getBoundingClientRect();!t.width||!t.height||(this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix())});this.canvas=t,this.onUpdate=n,this.renderer=new Q3({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.camera.position.set(0,8,-10),this.bind(),this.installGlobals(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}bind(){this.canvas.addEventListener("pointerdown",this.down),window.addEventListener("pointermove",this.move),window.addEventListener("pointerup",this.up),window.addEventListener("resize",this.resize),this.canvas.addEventListener("wheel",this.wheel,{passive:!1}),this.resize()}selectLevel(t){this.course=Ua[t],this.buildCourse(),this.resetMatchBall(),this.onUpdate()}start(t,n="single",i=1){this.mode=n,this.course=Ua[t],this.screen="playing",this.status="playing",this.elapsedTime=0,this.totalScore=0,this.currentScore=0,this.holeComplete=!1,this.winnerId=null,this.tiedPlayerIds=[],this.turnIndex=0,this.round=1,n==="local_multiplayer"?this.players=Array.from({length:i},(a,s)=>({id:`player-${s+1}`,name:`玩家 ${s+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:Je(this.course.spawn),velocity:te(0,0,0),inventory:Ql(),armedPowerup:null,collected:[]})):this.players=[],this.buildCourse(),this.resetMatchBall(),this.installGlobals(),this.onUpdate()}resetMatchBall(){this.ball.position=Je(this.course.spawn),this.ball.velocity=te(0,0,0),this.ball.moving=!1,this.ball.sleeping=!0,this.ball.inHole=!1,this.ball.outOfBounds=!1,this.ball.lastCollision=null,this.ball.lastSafePosition=Je(this.course.spawn),this.shot.strokeCount=0,this.totalStrokes=0,this.singleInventory=Ql(),this.singleArmed=null,this.singleCollected=[],this.speedTriggered=!1,this.syncItems(),this.ballMesh.position.set(this.ball.position.x,this.ball.position.y,this.ball.position.z)}buildCourse(){this.scene.clear();const t=this.course.id==="forest"?{sky:10475456,ground:3568460,edge:1589036}:this.course.id==="desert"?{sky:16107389,ground:13211730,edge:7423272}:{sky:12181233,ground:15201527,edge:6720419};this.scene.background=new qt(t.sky),this.scene.fog=new Xp(t.sky,35,75),this.scene.add(new jE(16777215,t.edge,2.1));const n=new $E(16777215,2.4);n.position.set(-10,22,-8),n.castShadow=!0,this.scene.add(n);const i=new He(new ta(16,.35,37),new qi({color:t.ground,roughness:.9}));i.position.set(0,-.2,15.5),i.receiveShadow=!0,i.name="playable-ground",this.scene.add(i);for(const l of this.course.surfaces.slice(1)){const u=l.bounds.maxX-l.bounds.minX,h=l.bounds.maxZ-l.bounds.minZ,p=l.type==="sand"?14265698:11068911,c=new He(new ta(u,.06,h),new qi({color:p,roughness:l.type==="ice"?.2:1,metalness:l.type==="ice"?.15:0}));c.position.set((l.bounds.minX+l.bounds.maxX)/2,.015,(l.bounds.minZ+l.bounds.maxZ)/2),c.name=l.id,this.scene.add(c)}const a=new qi({color:t.edge,roughness:.8});for(const[l,u,h,p]of[[-8.35,15.5,.7,38],[8.35,15.5,.7,38],[0,-3.35,17,.7],[0,34.35,17,.7]]){const c=new He(new ta(h,1,p),a);c.position.set(l,.3,u),this.scene.add(c)}for(const l of this.course.obstacles){const u=new qi({color:l.type.includes("ice")?7268338:l.type==="rock"||l.type.includes("rock")?6582381:l.type==="cactus"?2586188:6505773,roughness:.65}),h=new He(l.type.includes("ice")?new Yp(l.radius,2.7,6):l.type==="rock"||l.type.includes("rock")?new Zp(l.radius):new gs(l.radius*.55,l.radius,2.5,10),u);h.position.set(l.position.x,l.position.y,l.position.z),h.castShadow=!0,h.name=l.id,this.scene.add(h)}const s=new He(new gs(this.course.hole.radius,this.course.hole.radius,.08,32),new $c({color:594447}));s.position.set(this.course.hole.x,.025,this.course.hole.z),s.name="hole",this.scene.add(s);const r=new He(new gs(.035,.035,3,8),new qi({color:16777215}));r.position.set(this.course.hole.x,1.5,this.course.hole.z),this.scene.add(r);const o=new He(new cl(1.15,.65),new $c({color:16735045,side:Ei}));o.position.set(this.course.hole.x+.55,2.6,this.course.hole.z),this.scene.add(o),this.ballMesh.castShadow=!0,this.scene.add(this.ballMesh),this.addItems(),this.syncItems(),window.__THREE_SCENE__=this.scene}addItems(){for(const t of this.items){let n;t.type==="speed_boost"?n=new He(new ta(3,.08,2.5),new qi({color:2741503,emissive:551560,emissiveIntensity:1})):t.type==="bounce_pad"?n=new He(new gs(1.2,1.2,.15,24),new qi({color:16756782,emissive:8074752,emissiveIntensity:.6})):n=new He(new Kp(.5),new qi({color:14942038,emissive:7315218,emissiveIntensity:1})),n.position.set(t.position.x,t.position.y,t.position.z),n.name=t.id,n.userData.powerup=!0,this.scene.add(n)}}syncItems(){const t=this.currentCollected();for(const n of this.items){n.collected=t.includes(n.id),n.active=!n.collected||n.type!=="hole_in_one";const i=this.scene.getObjectByName(n.id);i&&(i.visible=n.active)}}currentPlayer(){return this.players[this.turnIndex]}currentInventory(){var t;return this.mode==="local_multiplayer"?((t=this.currentPlayer())==null?void 0:t.inventory)??Ql():this.singleInventory}currentCollected(){var t;return this.mode==="local_multiplayer"?((t=this.currentPlayer())==null?void 0:t.collected)??[]:this.singleCollected}armHio(){const t=this.currentInventory().find(n=>n.type==="hole_in_one");!t||t.count<1||this.ball.moving||(this.mode==="local_multiplayer"?this.currentPlayer().armedPowerup=this.currentPlayer().armedPowerup?null:"hole_in_one":this.singleArmed=this.singleArmed?null:"hole_in_one",this.revision++,this.onUpdate())}shoot(t,n){if(this.ball.moving||this.ball.inHole||this.screen!=="playing")return;let i=new Ft(t.x,t.z).normalize();if((this.mode==="local_multiplayer"?this.currentPlayer().armedPowerup:this.singleArmed)==="hole_in_one"){i=new Ft(this.course.hole.x-this.ball.position.x,this.course.hole.z-this.ball.position.z).normalize(),n=Math.min(10,Math.max(6,new Ft(this.course.hole.x-this.ball.position.x,this.course.hole.z-this.ball.position.z).length()*.55));const s=this.currentInventory().find(r=>r.type==="hole_in_one");s.count--,this.mode==="local_multiplayer"?this.currentPlayer().armedPowerup=null:this.singleArmed=null,this.activeEffect="一杆入洞导航"}this.ball.velocity={x:i.x*n,y:0,z:i.y*n},this.ball.moving=!0,this.ball.sleeping=!1,this.shot.strokeCount++,this.totalStrokes++,this.mode==="local_multiplayer"&&(this.currentPlayer().holeStrokes++,this.currentPlayer().totalStrokes++),this.revision++,this.speedTriggered=!1,this.onUpdate()}resetPosition(){this.ball.moving||(this.ball.position=Je(this.ball.lastSafePosition),this.ball.velocity=te(0,0,0),this.ballMesh.position.set(this.ball.position.x,this.ball.position.y,this.ball.position.z),this.onUpdate())}zoom(t){this.cameraState.distance=Math.max(this.cameraState.minDistance,Math.min(this.cameraState.maxDistance,this.cameraState.distance+t)),this.cameraState.zoom=12/this.cameraState.distance,this.onUpdate()}surfaceAt(t,n){for(const i of[...this.course.surfaces].reverse())if(t>=i.bounds.minX&&t<=i.bounds.maxX&&n>=i.bounds.minZ&&n<=i.bounds.maxZ)return i;return this.course.surfaces[0]}step(t){if(this.screen!=="playing"||(this.elapsedTime+=t,!this.ball.moving))return;const n=this.ball,i=this.surfaceAt(n.position.x,n.position.z);n.currentSurface=i.type,n.friction=i.friction;const a=Math.hypot(n.velocity.x,n.velocity.z),s=Math.max(0,a-i.friction*t);a>0&&(n.velocity.x*=s/a,n.velocity.z*=s/a),n.position.x+=n.velocity.x*t,n.position.z+=n.velocity.z*t,n.lastCollision=null,(n.position.x<Rn.minX+n.radius||n.position.x>Rn.maxX-n.radius)&&(n.position.x=Math.max(Rn.minX+n.radius,Math.min(Rn.maxX-n.radius,n.position.x)),n.velocity.x*=-.7,n.lastCollision="边界护栏"),(n.position.z<Rn.minZ+n.radius||n.position.z>Rn.maxZ-n.radius)&&(n.position.z=Math.max(Rn.minZ+n.radius,Math.min(Rn.maxZ-n.radius,n.position.z)),n.velocity.z*=-.7,n.lastCollision="边界护栏");for(const h of this.course.obstacles){const p=n.position.x-h.position.x,c=n.position.z-h.position.z,d=Math.hypot(p,c),S=(h.radius??1)+n.radius;if(d<S&&d>.001){const b=p/d,_=c/d,f=n.velocity.x*b+n.velocity.z*_;n.position.x=h.position.x+b*S,n.position.z=h.position.z+_*S,n.velocity.x=(n.velocity.x-2*f*b)*.72,n.velocity.z=(n.velocity.z-2*f*_)*.72,n.lastCollision=h.id}}const r=this.items[0];!this.currentCollected().includes(r.id)&&Math.hypot(n.position.x-r.position.x,n.position.z-r.position.z)<.9&&(this.currentCollected().push(r.id),this.currentInventory().find(h=>h.type==="hole_in_one").count++,this.lastTriggeredId=r.id,this.activeEffect="获得一杆入洞",this.syncItems(),this.revision++);const o=this.items[1];!this.speedTriggered&&Math.abs(n.position.x-o.position.x)<1.5&&Math.abs(n.position.z-o.position.z)<1.3&&(n.velocity.z=Math.min(14,n.velocity.z+4),n.velocity.x=Math.max(-14,Math.min(14,n.velocity.x)),this.speedTriggered=!0,this.lastTriggeredId=o.id,this.activeEffect="加速带");const l=this.items[2];if(Math.hypot(n.position.x-l.position.x,n.position.z-l.position.z)<1.3){const h=Math.min(12,Math.max(5,Math.hypot(n.velocity.x,n.velocity.z)*1.15));n.velocity.x=.75*h,n.velocity.z=.66*h,this.lastTriggeredId=l.id,this.activeEffect="反弹垫"}if(Math.hypot(n.position.x-this.course.hole.x,n.position.z-this.course.hole.z)<this.course.hole.radius&&Math.hypot(n.velocity.x,n.velocity.z)<4.2){n.position={x:this.course.hole.x,y:-.15,z:this.course.hole.z},n.velocity=te(0,0,0),n.moving=!1,n.sleeping=!0,n.inHole=!0,this.completeHole();return}s<.035&&(n.velocity=te(0,0,0),n.moving=!1,n.sleeping=!0,n.lastSafePosition=Je(n.position),this.activeEffect=null,this.mode==="local_multiplayer"&&this.nextTurn()),this.ballMesh.position.set(n.position.x,n.position.y,n.position.z)}savePlayer(){const t=this.currentPlayer();t&&(t.ballPosition=Je(this.ball.position),t.velocity=Je(this.ball.velocity))}loadPlayer(){const t=this.currentPlayer();this.ball.position=Je(t.ballPosition),this.ball.velocity=te(0,0,0),this.ball.inHole=!1,this.ball.moving=!1,this.ball.sleeping=!0,this.shot.strokeCount=t.holeStrokes,this.syncItems(),this.ballMesh.position.set(this.ball.position.x,this.ball.position.y,this.ball.position.z)}nextTurn(){if(this.savePlayer(),!this.players.map((i,a)=>({p:i,i:a})).filter(i=>!i.p.finished).length){this.finishLocal();return}let n=this.turnIndex;for(let i=1;i<=this.players.length;i++){const a=(this.turnIndex+i)%this.players.length;if(!this.players[a].finished){n=a;break}}n<=this.turnIndex&&this.round++,this.turnIndex=n,this.loadPlayer(),this.revision++,this.onUpdate()}completeHole(){this.holeComplete=!0;const t=this.shot.strokeCount;if(this.currentScore=Math.max(100,1500-t*150+this.course.par*100),this.totalScore+=this.currentScore,this.recordBest(this.mode==="local_multiplayer"?this.currentPlayer().id:"player-local",this.mode==="local_multiplayer"?this.currentPlayer().name:"本地球手",t),this.mode==="local_multiplayer"){const n=this.currentPlayer();n.finished=!0,this.savePlayer(),this.players.some(a=>!a.finished)?setTimeout(()=>this.nextTurn(),700):this.finishLocal()}else this.screen="hole_complete";this.onUpdate()}finishLocal(){this.status="complete";const t=Math.min(...this.players.map(n=>n.totalStrokes));this.tiedPlayerIds=this.players.filter(n=>n.totalStrokes===t).map(n=>n.id),this.winnerId=this.tiedPlayerIds.length===1?this.tiedPlayerIds[0]:null,this.screen="local_result",this.onUpdate()}readBest(){try{return JSON.parse(localStorage.getItem("mini-golf-best-v1")||"{}")}catch{return{}}}recordBest(t,n,i){const a=this.readBest(),s=a[this.course.id]||[],r=s.find(o=>o.playerId===t);if(!r||i<r.strokes){const o={playerId:t,playerName:n,strokes:i,rank:0,par:this.course.par,relativeToPar:i-this.course.par,achievedAt:Date.now()};r&&s.splice(s.indexOf(r),1),s.push(o)}a[this.course.id]=s,localStorage.setItem("mini-golf-best-v1",JSON.stringify(a))}leaderboard(){const t=this.readBest(),n={};for(const s of["forest","desert","snow"])n[s]=(t[s]||[]).sort((r,o)=>r.strokes-o.strokes||r.achievedAt-o.achievedAt||r.playerId.localeCompare(o.playerId)).map((r,o)=>({...r,rank:o+1}));const i=new Set(Object.values(n).flat().map(s=>s.playerId)),a=[];return i.forEach(s=>{const r=["forest","desert","snow"].map(o=>n[o].find(l=>l.playerId===s));if(r.every(Boolean)){const o=r,l={forest:o[0].strokes,desert:o[1].strokes,snow:o[2].strokes};a.push({playerId:s,playerName:o[0].playerName,levelStrokes:l,totalStrokes:l.forest+l.desert+l.snow,rank:0,achievedAt:Math.max(...o.map(u=>u.achievedAt))})}}),a.sort((s,r)=>s.totalStrokes-r.totalStrokes||s.achievedAt-r.achievedAt||s.playerId.localeCompare(r.playerId)).forEach((s,r)=>s.rank=r+1),{levelBest:n,overall:a,persisted:!0}}loop(t){if(this.disposed)return;const n=Math.min(.05,(t-this.last)/1e3);for(this.last=t,this.perf.accumulator+=n;this.perf.accumulator>=this.perf.fixedStep;)this.step(this.perf.fixedStep),this.perf.accumulator-=this.perf.fixedStep,this.perf.simulationTick++,this.perf.logicLoopCount++;const i=this.ball.position,a=this.cameraState.distance,s=new F(i.x,i.y,i.z),r=new F(i.x,i.y+a*.58,i.z-a*.82);this.camera.position.lerp(r,.08),this.camera.lookAt(s),this.cameraState.position=te(this.camera.position.x,this.camera.position.y,this.camera.position.z),this.cameraState.target=Je(i),this.renderer.render(this.scene,this.camera),this.perf.renderFrame++,this.updateClock+=n,this.updateClock>.1&&(this.updateClock=0,this.onUpdate()),this.raf=requestAnimationFrame(this.loop)}installGlobals(){const t=window;t.__THREE_SCENE__=this.scene,t.__THREE_RENDERER__=this.renderer,t.__contract={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:"aurora-putt-2026"})},t.__game={getState:()=>Je({ready:!0,gameState:this.screen,mode:this.mode,currentLevel:this.screen==="menu"?null:{id:this.course.id,name:this.course.name,theme:this.course.theme,par:this.course.par},currentHoleStrokes:this.shot.strokeCount,totalStrokes:this.totalStrokes,currentScore:this.currentScore,totalScore:this.totalScore,holeComplete:this.holeComplete,elapsedTime:Fg(this.elapsedTime)})},t.__ball={getState:()=>Je({...this.ball,speed:Fg(Math.hypot(this.ball.velocity.x,this.ball.velocity.z))})},t.__shot={getState:()=>Je({...this.shot,canShoot:this.screen==="playing"&&!this.ball.moving&&!this.ball.inHole,strokeCount:this.shot.strokeCount})},t.__course={getState:()=>Je({...this.course,obstacleCount:this.course.obstacles.length,sceneObjectCount:this.scene.children.length,loaded:!0})},t.__multiplayer={getState:()=>{var n;return Je({enabled:this.mode==="local_multiplayer",mode:"local",status:this.status,playerCount:this.players.length,currentPlayerId:((n=this.currentPlayer())==null?void 0:n.id)??null,turnIndex:this.turnIndex,round:this.round,revision:this.revision,players:this.players.map(i=>({id:i.id,name:i.name,holeStrokes:i.holeStrokes,totalStrokes:i.totalStrokes,finished:i.finished,ballPosition:i.ballPosition,powerupInventory:i.inventory,armedPowerup:i.armedPowerup})),winnerId:this.winnerId,tiedPlayerIds:this.tiedPlayerIds})}},t.__powerups={getState:()=>{var n;return Je({items:this.items,inventory:this.currentInventory(),activeEffect:this.activeEffect,lastTriggeredId:this.lastTriggeredId,placingType:null,armedType:this.mode==="local_multiplayer"?((n=this.currentPlayer())==null?void 0:n.armedPowerup)??null:this.singleArmed,selectedPlacedId:null})}},t.__camera={getState:()=>Je(this.cameraState)},t.__leaderboard={getState:()=>Je(this.leaderboard())},t.__performance={getState:()=>Je(this.perf)}}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.canvas.removeEventListener("pointerdown",this.down),window.removeEventListener("pointermove",this.move),window.removeEventListener("pointerup",this.up),window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("wheel",this.wheel),this.renderer.dispose(),this.perf.runtimeCleanupCount++}}const yi=({name:e})=>{const t={play:N.jsx("path",{d:"m9 18 9-6-9-6v12Z"}),users:N.jsxs(N.Fragment,{children:[N.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),N.jsx("circle",{cx:"9",cy:"7",r:"4"}),N.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]}),trophy:N.jsxs(N.Fragment,{children:[N.jsx("path",{d:"M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"}),N.jsx("path",{d:"M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"})]}),back:N.jsx("path",{d:"m15 18-6-6 6-6"}),zoomIn:N.jsxs(N.Fragment,{children:[N.jsx("circle",{cx:"11",cy:"11",r:"7"}),N.jsx("path",{d:"m20 20-4-4M11 8v6M8 11h6"})]}),zoomOut:N.jsxs(N.Fragment,{children:[N.jsx("circle",{cx:"11",cy:"11",r:"7"}),N.jsx("path",{d:"m20 20-4-4M8 11h6"})]}),target:N.jsxs(N.Fragment,{children:[N.jsx("circle",{cx:"12",cy:"12",r:"8"}),N.jsx("circle",{cx:"12",cy:"12",r:"3"}),N.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3"})]}),refresh:N.jsxs(N.Fragment,{children:[N.jsx("path",{d:"M20 7h-6V1"}),N.jsx("path",{d:"M20 7a9 9 0 1 0 1 8"})]})};return N.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t[e]})},Xf={forest:{mark:"🌲",eyebrow:"FOREST • PAR 4",desc:"穿过古木与苔藓沙坑，寻找林间最短路线。",colors:"from-emerald-900/90 to-teal-800/70"},desert:{mark:"☀️",eyebrow:"DESERT • PAR 5",desc:"越过赤金流沙与岩阵，把握每一次滚动。",colors:"from-amber-900/90 to-orange-700/70"},snow:{mark:"❄️",eyebrow:"SNOW • PAR 6",desc:"征服超低摩擦冰面，在极光下精准控速。",colors:"from-sky-900/90 to-cyan-700/70"}},Hg={grass:"草地",sand:"沙坑",ice:"冰面"};function $3(){var A,R;const e=fi.useRef(null),t=fi.useRef(null),[n,i]=fi.useState("menu"),[a,s]=fi.useState(0),[r,o]=fi.useState(2),[l,u]=fi.useState("forest"),[h,p]=fi.useState("forest");fi.useEffect(()=>{if(!e.current)return;const m=new J3(e.current,()=>{i(m.screen),s(E=>E+1)});return t.current=m,m.selectLevel("forest"),()=>m.dispose()},[]);const c=t.current,d=c?{...c.ball,speed:Math.hypot(c.ball.velocity.x,c.ball.velocity.z)}:{currentSurface:"grass",friction:.62,speed:0,moving:!1,lastCollision:null},S=c==null?void 0:c.players[c.turnIndex],b=c?c.mode==="local_multiplayer"?S==null?void 0:S.inventory:c.singleInventory:[],_=((A=b==null?void 0:b.find(m=>m.type==="hole_in_one"))==null?void 0:A.count)??0,f=c?c.mode==="local_multiplayer"?S==null?void 0:S.armedPowerup:c.singleArmed:null,g=m=>{c&&(c.screen=m),i(m)},y=(m,E="single")=>{u(m),c==null||c.start(m,E,E==="local_multiplayer"?r:1)},v=m=>{u(m),c==null||c.selectLevel(m)},T=(c==null?void 0:c.leaderboard())??{levelBest:{forest:[],desert:[],snow:[]},overall:[]};return N.jsxs("main",{className:"relative h-screen min-h-[640px] w-full overflow-hidden bg-[#07130f] text-white selection:bg-emerald-300 selection:text-emerald-950",children:[N.jsx("canvas",{ref:e,className:`absolute inset-0 h-full w-full transition-opacity duration-700 ${n==="playing"||n==="hole_complete"||n==="local_result"?"opacity-100":"opacity-30"}`}),N.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(2,12,9,.12)_52%,rgba(2,8,6,.72)_100%)]"}),n==="menu"&&N.jsx("section",{id:"menu",className:"relative z-10 flex h-full items-center justify-center p-5",children:N.jsxs("div",{className:"w-full max-w-[580px] text-center",children:[N.jsx("div",{className:"mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-300/10 shadow-[0_0_50px_rgba(110,231,183,.18)]",children:N.jsx("span",{className:"text-4xl",children:"⛳"})}),N.jsx("p",{className:"mb-3 text-xs font-semibold tracking-[.4em] text-emerald-200/70",children:"A POCKET-SIZED ADVENTURE"}),N.jsxs("h1",{className:"font-display text-6xl font-semibold leading-none tracking-tight sm:text-8xl",children:["迷你高尔夫",N.jsx("br",{}),N.jsx("span",{className:"text-emerald-300",children:"巡回赛"})]}),N.jsx("p",{className:"mx-auto mt-6 max-w-md text-sm leading-7 text-white/55",children:"三座微缩世界，一颗高尔夫球。读懂地形与摩擦，用最少的杆数写下你的名字。"}),N.jsxs("div",{className:"mx-auto mt-9 grid max-w-sm gap-3",children:[N.jsxs("button",{"data-testid":"start-btn",onClick:()=>g("level_select"),className:"primary-btn",children:[N.jsx(yi,{name:"play"}),"开始巡回赛"]}),N.jsxs("button",{"data-testid":"multiplayer-btn",onClick:()=>g("local_setup"),className:"secondary-btn",children:[N.jsx(yi,{name:"users"}),"本地多人对战"]}),N.jsxs("button",{"data-testid":"leaderboard-btn",onClick:()=>g("leaderboard"),className:"ghost-btn",children:[N.jsx(yi,{name:"trophy"}),"排行榜"]})]})]})}),n==="level_select"&&N.jsxs("section",{id:"levelSelect",className:"relative z-10 flex h-full flex-col p-5 sm:p-10",children:[N.jsx(Gg,{title:"选择球场",sub:"SELECT A COURSE",onBack:()=>g("menu")}),N.jsx("div",{className:"mx-auto grid w-full max-w-6xl flex-1 content-center gap-5 md:grid-cols-3",children:Object.keys(Ua).map(m=>{const E=Ua[m],w=Xf[m];return N.jsxs("button",{"data-testid":`level-${m}`,onClick:()=>y(m),onMouseEnter:()=>v(m),className:`group relative h-[410px] overflow-hidden rounded-[28px] border text-left transition duration-300 hover:-translate-y-2 ${l===m?"border-emerald-200/70 shadow-[0_20px_70px_rgba(16,185,129,.18)]":"border-white/10"}`,children:[N.jsx("div",{className:`absolute inset-0 bg-gradient-to-b ${w.colors}`}),N.jsx("div",{className:"absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white_0,transparent_35%),repeating-linear-gradient(120deg,transparent_0,transparent_30px,rgba(255,255,255,.06)_31px)]"}),N.jsxs("div",{className:"relative flex h-full flex-col p-7",children:[N.jsx("span",{className:"text-6xl drop-shadow-xl",children:w.mark}),N.jsxs("div",{className:"mt-auto",children:[N.jsx("p",{className:"text-[10px] font-bold tracking-[.3em] text-white/55",children:w.eyebrow}),N.jsx("h2",{className:"font-display mt-2 text-4xl",children:E.name}),N.jsx("p",{className:"mt-3 text-sm leading-6 text-white/60",children:w.desc}),N.jsxs("div",{className:"mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-200",children:["进入球场 ",N.jsx("span",{className:"transition group-hover:translate-x-2",children:"→"})]})]})]})]},m)})})]}),n==="local_setup"&&N.jsx("section",{id:"multiplayerLobby",className:"relative z-10 flex h-full items-center justify-center p-5",children:N.jsxs("div",{className:"glass-panel w-full max-w-xl p-7 sm:p-10",children:[N.jsxs("button",{"data-testid":"local-exit-btn",onClick:()=>g("menu"),className:"icon-label",children:[N.jsx(yi,{name:"back"})," 返回"]}),N.jsxs("div",{className:"my-8 text-center",children:[N.jsx("span",{className:"text-5xl",children:"🏌️‍♀️"}),N.jsx("p",{className:"mt-5 text-[10px] font-bold tracking-[.35em] text-emerald-300/70",children:"PASS & PLAY"}),N.jsx("h2",{className:"font-display mt-2 text-4xl",children:"本地多人对战"}),N.jsx("p",{className:"mt-3 text-sm text-white/45",children:"轮流击球，每位玩家拥有独立球位与道具。"})]}),N.jsx("label",{className:"mb-2 block text-xs font-semibold text-white/60",children:"参赛人数"}),N.jsx("div",{className:"grid grid-cols-3 gap-3","data-testid":"local-player-count",children:[2,3,4].map(m=>N.jsxs("button",{onClick:()=>o(m),className:`rounded-xl border py-4 font-display text-xl ${r===m?"border-emerald-300 bg-emerald-300 text-emerald-950":"border-white/10 bg-white/5 text-white/60"}`,children:[m," 人"]},m))}),N.jsx("label",{className:"mb-2 mt-6 block text-xs font-semibold text-white/60",children:"对战球场"}),N.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.keys(Ua).map(m=>N.jsxs("button",{onClick:()=>v(m),className:`rounded-xl border px-2 py-3 text-sm ${l===m?"border-emerald-300/70 bg-emerald-300/15 text-emerald-200":"border-white/10 text-white/45"}`,children:[Xf[m].mark," ",Ua[m].name]},m))}),N.jsxs("button",{"data-testid":"local-start-btn",onClick:()=>y(l,"local_multiplayer"),className:"primary-btn mt-8",children:[N.jsx(yi,{name:"play"}),"开始对战"]})]})}),n==="playing"&&N.jsxs("section",{id:"gameScreen",className:"pointer-events-none relative z-10 h-full",children:[N.jsxs("div",{className:"absolute left-4 top-4 flex items-center gap-3 sm:left-7 sm:top-6",children:[N.jsx("button",{onClick:()=>g("menu"),className:"pointer-events-auto round-btn",children:N.jsx(yi,{name:"back"})}),N.jsxs("div",{className:"hud-card",children:[N.jsx("p",{children:c==null?void 0:c.course.name}),N.jsx("span",{children:Xf[(c==null?void 0:c.course.id)??"forest"].eyebrow})]})]}),N.jsxs("div",{className:"absolute right-4 top-4 flex gap-2 sm:right-7 sm:top-6",children:[N.jsxs("div",{className:"hud-stat",children:[N.jsx("span",{children:"PAR"}),N.jsx("b",{children:c==null?void 0:c.course.par})]}),N.jsxs("div",{className:"hud-stat",children:[N.jsx("span",{children:"杆数"}),N.jsx("b",{"data-testid":"stroke-count",children:(c==null?void 0:c.shot.strokeCount)??0})]})]}),(c==null?void 0:c.mode)==="local_multiplayer"&&N.jsxs("div",{"data-testid":"current-player",className:"absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/15 bg-black/45 px-5 py-2 text-xs font-semibold backdrop-blur-xl",children:[N.jsx("span",{className:"mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300"}),"当前：",S==null?void 0:S.name," · 第 ",c.round," 轮"]}),N.jsxs("div",{className:"absolute bottom-5 left-4 right-4 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7",children:[N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"hud-card min-w-[190px]",children:[N.jsx("span",{className:"!mb-1",children:"当前表面"}),N.jsxs("p",{className:"flex items-center justify-between",children:[Hg[d.currentSurface],N.jsxs("b",{"data-testid":"surface-friction",className:"text-emerald-300",children:["μ ",d.friction.toFixed(3)]})]})]}),N.jsxs("div",{className:"hud-card text-xs",children:[N.jsx("p",{"data-testid":"physics-motion",children:d.moving?`滚动中 · ${d.speed.toFixed(2)} m/s`:"球已静止 · 可以击球"}),N.jsx("span",{"data-testid":"physics-contact",children:d.lastCollision?`碰撞：${d.lastCollision}`:"接触："+Hg[d.currentSurface]})]})]}),N.jsxs("div",{className:"absolute bottom-0 left-1/2 w-[260px] -translate-x-1/2 text-center",children:[N.jsx("p",{"data-testid":"aim-feedback",className:"mb-2 text-[10px] font-bold tracking-[.2em] text-white/65",children:c!=null&&c.shot.dragging?"释放鼠标击球":"在球场上反向拖动瞄准"}),N.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-black/45 ring-1 ring-white/15",children:N.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-300 via-yellow-300 to-red-400 transition-all",style:{width:`${((c==null?void 0:c.shot.power)??0)/((c==null?void 0:c.shot.maxPower)??14)*100}%`}})}),N.jsxs("div",{className:"mt-2 flex justify-between text-[9px] font-bold tracking-widest text-white/40",children:[N.jsx("span",{children:"力度"}),N.jsx("span",{"data-testid":"shot-power",children:((c==null?void 0:c.shot.power)??0).toFixed(1)})]})]}),N.jsxs("div",{className:"pointer-events-auto flex flex-col items-end gap-2",children:[N.jsx("div",{"data-testid":"powerup-status",className:"mb-1 flex items-center gap-2",children:N.jsxs("button",{"data-testid":"powerup-hio",disabled:!_||d.moving,onClick:()=>c==null?void 0:c.armHio(),className:`power-btn ${f?"!border-yellow-300 !bg-yellow-300 !text-yellow-950":""}`,children:[N.jsx("span",{children:"⚡"}),N.jsxs("span",{children:[N.jsx("b",{children:"一杆入洞"}),N.jsx("small",{children:f?"已启用":`库存 × ${_}`})]})]})}),N.jsxs("div",{className:"flex gap-2",children:[N.jsx("button",{"data-testid":"reset-position",onClick:()=>c==null?void 0:c.resetPosition(),className:"round-btn",title:"重置球位",children:N.jsx(yi,{name:"refresh"})}),N.jsx("button",{"data-testid":"zoom-in",onClick:()=>c==null?void 0:c.zoom(-1),className:"round-btn",title:"拉近",children:N.jsx(yi,{name:"zoomIn"})}),N.jsx("button",{"data-testid":"zoom-out",onClick:()=>c==null?void 0:c.zoom(1),className:"round-btn",title:"拉远",children:N.jsx(yi,{name:"zoomOut"})})]}),N.jsxs("span",{className:"text-[9px] tracking-wider text-white/40",children:["跟随距离 ",c==null?void 0:c.cameraState.distance.toFixed(0),"m"]})]})]})]}),n==="hole_complete"&&N.jsx("section",{id:"resultScreen",className:"relative z-20 flex h-full items-center justify-center bg-emerald-950/45 p-5 backdrop-blur-sm",children:N.jsxs("div",{className:"glass-panel w-full max-w-md p-9 text-center",children:[N.jsx("p",{className:"text-6xl",children:"🏆"}),N.jsx("p",{className:"mt-5 text-[10px] font-bold tracking-[.35em] text-emerald-300",children:"HOLE COMPLETE"}),N.jsx("h2",{className:"font-display mt-2 text-5xl",children:"漂亮入洞！"}),N.jsxs("div",{className:"my-8 grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-black/20 py-5",children:[N.jsx(Wf,{label:"杆数",value:(c==null?void 0:c.shot.strokeCount)??0}),N.jsx(Wf,{label:"标准杆",value:(c==null?void 0:c.course.par)??0}),N.jsx(Wf,{label:"积分",value:(c==null?void 0:c.currentScore)??0})]}),N.jsxs("button",{"data-testid":"result-next",onClick:()=>g("level_select"),className:"primary-btn",children:["继续巡回赛 ",N.jsx("span",{children:"→"})]}),N.jsx("button",{onClick:()=>c==null?void 0:c.start(l),className:"mt-3 text-xs text-white/45 hover:text-white",children:"重玩本关"})]})}),n==="local_result"&&N.jsx("section",{id:"localLeaderboardScreen",className:"relative z-20 flex h-full items-center justify-center bg-[#06110d]/80 p-5 backdrop-blur-md",children:N.jsxs("div",{"data-testid":"local-match-leaderboard",className:"glass-panel w-full max-w-xl p-7 sm:p-9",children:[N.jsxs("div",{className:"text-center",children:[N.jsx("span",{className:"text-5xl",children:((c==null?void 0:c.tiedPlayerIds.length)??0)>1?"🤝":"🏆"}),N.jsx("p",{className:"mt-4 text-[10px] font-bold tracking-[.3em] text-emerald-300",children:"MATCH COMPLETE"}),N.jsx("h2",{className:"font-display mt-2 text-4xl",children:((c==null?void 0:c.tiedPlayerIds.length)??0)>1?"并列第一！":`${(R=c==null?void 0:c.players.find(m=>m.id===c.winnerId))==null?void 0:R.name} 获胜`})]}),N.jsx("div",{className:"mt-7 space-y-2",children:[...(c==null?void 0:c.players)??[]].sort((m,E)=>m.totalStrokes-E.totalStrokes).map((m,E)=>N.jsxs("div",{className:`flex items-center rounded-xl border px-4 py-3 ${c!=null&&c.tiedPlayerIds.includes(m.id)?"border-emerald-300/40 bg-emerald-300/10":"border-white/5 bg-white/[.03]"}`,children:[N.jsxs("b",{className:"w-10 text-emerald-300",children:["#",E+1]}),N.jsxs("span",{className:"flex-1",children:[m.name,((c==null?void 0:c.tiedPlayerIds.length)??0)>1&&(c==null?void 0:c.tiedPlayerIds.includes(m.id))&&N.jsx("span",{className:"ml-2 text-[10px] text-yellow-300",children:"并列"})]}),N.jsxs("strong",{children:[m.totalStrokes," 杆"]})]},m.id))}),N.jsx("button",{"data-testid":"result-next",onClick:()=>g("menu"),className:"primary-btn mt-7",children:"返回主菜单"})]})}),n==="leaderboard"&&N.jsxs("section",{id:"leaderboardScreen",className:"relative z-10 flex h-full flex-col p-5 sm:p-10",children:[N.jsx(Gg,{title:"巡回赛排行榜",sub:"HALL OF FAME",onBack:()=>g("menu")}),N.jsxs("div",{className:"glass-panel mx-auto my-auto flex h-[70vh] w-full max-w-4xl flex-col overflow-hidden p-5 sm:p-8",children:[N.jsx("div",{className:"flex gap-1 overflow-x-auto rounded-xl bg-black/20 p-1",children:["forest","desert","snow","overall"].map(m=>N.jsx("button",{onClick:()=>p(m),className:`min-w-max flex-1 rounded-lg px-4 py-2 text-xs font-semibold transition ${h===m?"bg-emerald-300 text-emerald-950":"text-white/45 hover:text-white"}`,children:m==="overall"?"全关总榜":Ua[m].name},m))}),N.jsxs("div",{className:"mt-6 overflow-auto",children:[h==="overall"?N.jsxs(N.Fragment,{children:[N.jsx(Vg,{labels:["排名","球手","森林 / 沙漠 / 冰雪","总杆数"]}),T.overall.map(m=>N.jsxs("div",{className:"board-row",children:[N.jsxs("b",{children:["#",m.rank]}),N.jsx("span",{children:m.playerName}),N.jsxs("span",{className:"text-white/45",children:[m.levelStrokes.forest," / ",m.levelStrokes.desert," / ",m.levelStrokes.snow]}),N.jsx("strong",{children:m.totalStrokes})]},m.playerId))]}):N.jsxs(N.Fragment,{children:[N.jsx(Vg,{labels:["排名","球手","成绩","标准杆"]}),T.levelBest[h].map(m=>N.jsxs("div",{className:"board-row",children:[N.jsxs("b",{children:["#",m.rank]}),N.jsx("span",{children:m.playerName}),N.jsxs("strong",{children:[m.strokes," 杆 ",N.jsx("small",{className:"ml-1 text-emerald-300",children:m.relativeToPar===0?"E":m.relativeToPar>0?`+${m.relativeToPar}`:m.relativeToPar})]}),N.jsxs("span",{className:"text-white/45",children:["PAR ",m.par]})]},m.playerId))]}),(h==="overall"?T.overall:T.levelBest[h]).length===0&&N.jsxs("div",{className:"py-20 text-center",children:[N.jsx("span",{className:"text-4xl opacity-50",children:"⛳"}),N.jsxs("p",{className:"mt-4 text-sm text-white/40",children:["尚无合法完赛记录",N.jsx("br",{}),"完成球洞后，你的最佳成绩会出现在这里。"]})]})]})]})]})]})}function Gg({title:e,sub:t,onBack:n}){return N.jsxs("header",{className:"flex items-center",children:[N.jsx("button",{onClick:n,className:"round-btn",children:N.jsx(yi,{name:"back"})}),N.jsxs("div",{className:"ml-4",children:[N.jsx("p",{className:"text-[9px] font-bold tracking-[.3em] text-emerald-300/70",children:t}),N.jsx("h1",{className:"font-display text-2xl",children:e})]})]})}function Wf({label:e,value:t}){return N.jsxs("div",{children:[N.jsx("b",{className:"font-display text-2xl",children:t}),N.jsx("span",{className:"mt-1 block text-[9px] tracking-widest text-white/40",children:e})]})}function Vg({labels:e}){return N.jsx("div",{className:"grid grid-cols-[.6fr_1.4fr_1.4fr_.8fr] px-4 pb-3 text-[9px] font-bold tracking-widest text-white/30",children:e.map(t=>N.jsx("span",{children:t},t))})}O1.createRoot(document.getElementById("root")).render(N.jsx(ty.StrictMode,{children:N.jsx($3,{})}));
