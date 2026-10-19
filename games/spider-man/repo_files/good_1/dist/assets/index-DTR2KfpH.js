(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Xd={exports:{}},zc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function tM(){if(Nv)return zc;Nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return zc.Fragment=t,zc.jsx=i,zc.jsxs=i,zc}var Ov;function eM(){return Ov||(Ov=1,Xd.exports=tM()),Xd.exports}var Dt=eM(),Wd={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function nM(){if(zv)return _e;zv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function _(P,st,bt){this.props=P,this.context=st,this.refs=S,this.updater=bt||E}_.prototype.isReactComponent={},_.prototype.setState=function(P,st){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,st,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function N(){}N.prototype=_.prototype;function L(P,st,bt){this.props=P,this.context=st,this.refs=S,this.updater=bt||E}var C=L.prototype=new N;C.constructor=L,b(C,_.prototype),C.isPureReactComponent=!0;var V=Array.isArray;function z(){}var D={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function U(P,st,bt){var Z=bt.ref;return{$$typeof:o,type:P,key:st,ref:Z!==void 0?Z:null,props:bt}}function T(P,st){return U(P.type,st,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function it(P){var st={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(bt){return st[bt]})}var tt=/\/+/g;function ht(P,st){return typeof P=="object"&&P!==null&&P.key!=null?it(""+P.key):st.toString(36)}function mt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(st){P.status==="pending"&&(P.status="fulfilled",P.value=st)},function(st){P.status==="pending"&&(P.status="rejected",P.reason=st)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,st,bt,Z,ft){var yt=typeof P;(yt==="undefined"||yt==="boolean")&&(P=null);var Tt=!1;if(P===null)Tt=!0;else switch(yt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(P.$$typeof){case o:case t:Tt=!0;break;case g:return Tt=P._init,B(Tt(P._payload),st,bt,Z,ft)}}if(Tt)return ft=ft(P),Tt=Z===""?"."+ht(P,0):Z,V(ft)?(bt="",Tt!=null&&(bt=Tt.replace(tt,"$&/")+"/"),B(ft,st,bt,"",function(pe){return pe})):ft!=null&&(I(ft)&&(ft=T(ft,bt+(ft.key==null||P&&P.key===ft.key?"":(""+ft.key).replace(tt,"$&/")+"/")+Tt)),st.push(ft)),1;Tt=0;var Wt=Z===""?".":Z+":";if(V(P))for(var qt=0;qt<P.length;qt++)Z=P[qt],yt=Wt+ht(Z,qt),Tt+=B(Z,st,bt,yt,ft);else if(qt=M(P),typeof qt=="function")for(P=qt.call(P),qt=0;!(Z=P.next()).done;)Z=Z.value,yt=Wt+ht(Z,qt++),Tt+=B(Z,st,bt,yt,ft);else if(yt==="object"){if(typeof P.then=="function")return B(mt(P),st,bt,Z,ft);throw st=String(P),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function J(P,st,bt){if(P==null)return P;var Z=[],ft=0;return B(P,Z,"","",function(yt){return st.call(bt,yt,ft++)}),Z}function Q(P){if(P._status===-1){var st=P._result;st=st(),st.then(function(bt){(P._status===0||P._status===-1)&&(P._status=1,P._result=bt)},function(bt){(P._status===0||P._status===-1)&&(P._status=2,P._result=bt)}),P._status===-1&&(P._status=0,P._result=st)}if(P._status===1)return P._result.default;throw P._result}var St=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ut={map:J,forEach:function(P,st,bt){J(P,function(){st.apply(this,arguments)},bt)},count:function(P){var st=0;return J(P,function(){st++}),st},toArray:function(P){return J(P,function(st){return st})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return _e.Activity=v,_e.Children=Ut,_e.Component=_,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=L,_e.StrictMode=s,_e.Suspense=m,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,_e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return D.H.useMemoCache(P)}},_e.cache=function(P){return function(){return P.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(P,st,bt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Z=b({},P.props),ft=P.key;if(st!=null)for(yt in st.key!==void 0&&(ft=""+st.key),st)!H.call(st,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&st.ref===void 0||(Z[yt]=st[yt]);var yt=arguments.length-2;if(yt===1)Z.children=bt;else if(1<yt){for(var Tt=Array(yt),Wt=0;Wt<yt;Wt++)Tt[Wt]=arguments[Wt+2];Z.children=Tt}return U(P.type,ft,Z)},_e.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_e.createElement=function(P,st,bt){var Z,ft={},yt=null;if(st!=null)for(Z in st.key!==void 0&&(yt=""+st.key),st)H.call(st,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ft[Z]=st[Z]);var Tt=arguments.length-2;if(Tt===1)ft.children=bt;else if(1<Tt){for(var Wt=Array(Tt),qt=0;qt<Tt;qt++)Wt[qt]=arguments[qt+2];ft.children=Wt}if(P&&P.defaultProps)for(Z in Tt=P.defaultProps,Tt)ft[Z]===void 0&&(ft[Z]=Tt[Z]);return U(P,yt,ft)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(P){return{$$typeof:d,render:P}},_e.isValidElement=I,_e.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Q}},_e.memo=function(P,st){return{$$typeof:p,type:P,compare:st===void 0?null:st}},_e.startTransition=function(P){var st=D.T,bt={};D.T=bt;try{var Z=P(),ft=D.S;ft!==null&&ft(bt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(z,St)}catch(yt){St(yt)}finally{st!==null&&bt.types!==null&&(st.types=bt.types),D.T=st}},_e.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},_e.use=function(P){return D.H.use(P)},_e.useActionState=function(P,st,bt){return D.H.useActionState(P,st,bt)},_e.useCallback=function(P,st){return D.H.useCallback(P,st)},_e.useContext=function(P){return D.H.useContext(P)},_e.useDebugValue=function(){},_e.useDeferredValue=function(P,st){return D.H.useDeferredValue(P,st)},_e.useEffect=function(P,st){return D.H.useEffect(P,st)},_e.useEffectEvent=function(P){return D.H.useEffectEvent(P)},_e.useId=function(){return D.H.useId()},_e.useImperativeHandle=function(P,st,bt){return D.H.useImperativeHandle(P,st,bt)},_e.useInsertionEffect=function(P,st){return D.H.useInsertionEffect(P,st)},_e.useLayoutEffect=function(P,st){return D.H.useLayoutEffect(P,st)},_e.useMemo=function(P,st){return D.H.useMemo(P,st)},_e.useOptimistic=function(P,st){return D.H.useOptimistic(P,st)},_e.useReducer=function(P,st,bt){return D.H.useReducer(P,st,bt)},_e.useRef=function(P){return D.H.useRef(P)},_e.useState=function(P){return D.H.useState(P)},_e.useSyncExternalStore=function(P,st,bt){return D.H.useSyncExternalStore(P,st,bt)},_e.useTransition=function(){return D.H.useTransition()},_e.version="19.2.8",_e}var Pv;function _m(){return Pv||(Pv=1,Wd.exports=nM()),Wd.exports}var ca=_m(),qd={exports:{}},Pc={},Yd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function iM(){return Iv||(Iv=1,(function(o){function t(B,J){var Q=B.length;B.push(J);t:for(;0<Q;){var St=Q-1>>>1,Ut=B[St];if(0<l(Ut,J))B[St]=J,B[Q]=Ut,Q=St;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var J=B[0],Q=B.pop();if(Q!==J){B[0]=Q;t:for(var St=0,Ut=B.length,P=Ut>>>1;St<P;){var st=2*(St+1)-1,bt=B[st],Z=st+1,ft=B[Z];if(0>l(bt,Q))Z<Ut&&0>l(ft,bt)?(B[St]=ft,B[Z]=Q,St=Z):(B[St]=bt,B[st]=Q,St=st);else if(Z<Ut&&0>l(ft,Q))B[St]=ft,B[Z]=Q,St=Z;else break t}}return J}function l(B,J){var Q=B.sortIndex-J.sortIndex;return Q!==0?Q:B.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,E=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var J=i(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=B)s(p),J.sortIndex=J.expirationTime,t(m,J);else break;J=i(p)}}function V(B){if(b=!1,C(B),!E)if(i(m)!==null)E=!0,z||(z=!0,it());else{var J=i(p);J!==null&&mt(V,J.startTime-B)}}var z=!1,D=-1,H=5,U=-1;function T(){return S?!0:!(o.unstable_now()-U<H)}function I(){if(S=!1,z){var B=o.unstable_now();U=B;var J=!0;try{t:{E=!1,b&&(b=!1,N(D),D=-1),M=!0;var Q=x;try{e:{for(C(B),v=i(m);v!==null&&!(v.expirationTime>B&&T());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var Ut=St(v.expirationTime<=B);if(B=o.unstable_now(),typeof Ut=="function"){v.callback=Ut,C(B),J=!0;break e}v===i(m)&&s(m),C(B)}else s(m);v=i(m)}if(v!==null)J=!0;else{var P=i(p);P!==null&&mt(V,P.startTime-B),J=!1}}break t}finally{v=null,x=Q,M=!1}J=void 0}}finally{J?it():z=!1}}}var it;if(typeof L=="function")it=function(){L(I)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ht=tt.port2;tt.port1.onmessage=I,it=function(){ht.postMessage(null)}}else it=function(){_(I,0)};function mt(B,J){D=_(function(){B(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var Q=x;x=J;try{return B()}finally{x=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=x;x=B;try{return J()}finally{x=Q}},o.unstable_scheduleCallback=function(B,J,Q){var St=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?St+Q:St):Q=St,B){case 1:var Ut=-1;break;case 2:Ut=250;break;case 5:Ut=1073741823;break;case 4:Ut=1e4;break;default:Ut=5e3}return Ut=Q+Ut,B={id:g++,callback:J,priorityLevel:B,startTime:Q,expirationTime:Ut,sortIndex:-1},Q>St?(B.sortIndex=Q,t(p,B),i(m)===null&&B===i(p)&&(b?(N(D),D=-1):b=!0,mt(V,Q-St))):(B.sortIndex=Ut,t(m,B),E||M||(E=!0,z||(z=!0,it()))),B},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(B){var J=x;return function(){var Q=x;x=J;try{return B.apply(this,arguments)}finally{x=Q}}}})(jd)),jd}var Bv;function aM(){return Bv||(Bv=1,Yd.exports=iM()),Yd.exports}var Zd={exports:{}},xi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function sM(){if(Fv)return xi;Fv=1;var o=_m();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,xi.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},xi.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},xi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},xi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},xi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},xi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xi.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},xi.requestFormReset=function(m){s.d.r(m)},xi.unstable_batchedUpdates=function(m,p){return m(p)},xi.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},xi.useFormStatus=function(){return h.H.useHostTransitionStatus()},xi.version="19.2.8",xi}var Hv;function rM(){if(Hv)return Zd.exports;Hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zd.exports=sM(),Zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function oM(){if(Gv)return Pc;Gv=1;var o=aM(),t=_m(),i=rM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,r=f;break}if(A===r){y=!0,r=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,r=u;break}if(A===r){y=!0,r=f,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var mt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},St=[],Ut=-1;function P(e){return{current:e}}function st(e){0>Ut||(e.current=St[Ut],St[Ut]=null,Ut--)}function bt(e,n){Ut++,St[Ut]=e.current,e.current=n}var Z=P(null),ft=P(null),yt=P(null),Tt=P(null);function Wt(e,n){switch(bt(yt,n),bt(ft,e),bt(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nv(n),e=iv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(Z),bt(Z,e)}function qt(){st(Z),st(ft),st(yt)}function pe(e){e.memoizedState!==null&&bt(Tt,e);var n=Z.current,a=iv(n,e.type);n!==a&&(bt(ft,e),bt(Z,a))}function Ve(e){ft.current===e&&(st(Z),st(ft)),Tt.current===e&&(st(Tt),Uc._currentValue=Q)}var Se,ln;function X(e){if(Se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Se=n&&n[1]||"",ln=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Se+e+ln}var ii=!1;function be(e,n){if(!e||ii)return"";ii=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ct){ot=ct}e.call(Mt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var G=y.split(`
`),nt=A.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===nt.length)for(r=G.length-1,u=nt.length-1;1<=r&&0<=u&&G[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==nt[u]){var dt=`
`+G[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=u);break}}}finally{ii=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?X(a):""}function De(e,n){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==n&&n!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var n="",a=null;do n+=De(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ke=Object.prototype.hasOwnProperty,Jt=o.unstable_scheduleCallback,O=o.unstable_cancelCallback,w=o.unstable_shouldYield,rt=o.unstable_requestPaint,gt=o.unstable_now,wt=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,Qt=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ae=o.unstable_IdlePriority,Ot=o.log,Yt=o.unstable_setDisableYieldValue,ie=null,$t=null;function Ht(e){if(typeof Ot=="function"&&Yt(e),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(ie,e)}catch{}}var re=Math.clz32?Math.clz32:Y,me=Math.log,Be=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(me(e)/Be|0)|0}var Lt=256,ut=262144,vt=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=It(r):(y&=A,y!==0?u=It(y):a||(a=A&~e,a!==0&&(u=It(a))))):(A=r&~f,A!==0?u=It(A):y!==0?u=It(y):a||(a=r&~e,a!==0&&(u=It(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ue(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nn(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Tn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,r,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-re(a),Mt=1<<dt;A[dt]=0,G[dt]=-1;var ot=nt[dt];if(ot!==null)for(nt[dt]=null,dt=0;dt<ot.length;dt++){var ct=ot[dt];ct!==null&&(ct.lane&=-536870913)}a&=~Mt}r!==0&&is(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-re(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Qe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-re(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function oi(e,n){var a=n&-n;return a=(a&42)!==0?1:Ei(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ei(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ga(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wa(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Av(e.type))}function Va(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var Ti=Math.random().toString(36).slice(2),vn="__reactFiber$"+Ti,Kn="__reactProps$"+Ti,Ra="__reactContainer$"+Ti,Hs="__reactEvents$"+Ti,Ll="__reactListeners$"+Ti,Gs="__reactHandles$"+Ti,Vs="__reactResources$"+Ti,as="__reactMarker$"+Ti;function Cr(e){delete e[vn],delete e[Kn],delete e[Hs],delete e[Ll],delete e[Gs]}function R(e){var n=e[vn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ra]||a[vn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=uv(e);e!==null;){if(a=e[vn])return a;e=uv(e)}return n}e=a,a=e.parentNode}return null}function j(e){if(e=e[vn]||e[Ra]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function lt(e){var n=e[Vs];return n||(n=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[as]=!0}var Rt=new Set,Bt={};function Ft(e,n){Ct(e,n),Ct(e+"Capture",n)}function Ct(e,n){for(Bt[e]=n,e=0;e<n.length;e++)Rt.add(n[e])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},Zt={};function ye(e){return ke.call(Zt,e)?!0:ke.call(ce,e)?!1:he.test(e)?Zt[e]=!0:(ce[e]=!0,!1)}function ge(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Le(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _n(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ze(e){if(!e._valueTracker){var n=se(e)?"checked":"value";e._valueTracker=_n(e,n,""+e[n])}}function li(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qn=/[\n"\\]/g;function Mn(e){return e.replace(Qn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(e,n,a,r,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Un(e,y,de(n)):a!=null?Un(e,y,de(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function Fn(e,n,a,r,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ze(e);return}a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ze(e)}function Un(e,n,a){n==="number"&&bi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ln(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function ka(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),ze(e)}function ci(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Nl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ol(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Nl.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function iu(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Ol(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Ol(e,f,n[f])}function zl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mo(e){return sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var go=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,wi=null;function Ca(e){var n=j(e);if(n&&(e=n.stateNode)){var a=e[Kn]||null;t:switch(e=n.stateNode,n.type){case"input":if(je(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Kn]||null;if(!u)throw Error(s(90));je(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&li(r)}break t;case"textarea":Ln(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Vt=!1;function zt(e,n,a){if(Vt)return e(n,a);Vt=!0;try{var r=e(n);return r}finally{if(Vt=!1,(Ai!==null||wi!==null)&&(Vu(),Ai&&(n=Ai,e=wi,wi=Ai=null,Ca(n),e)))for(n=0;n<e.length;n++)Ca(e[n])}}function Sn(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Kn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(ha)try{var En={};Object.defineProperty(En,"passive",{get:function(){ai=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ai=!1}var dn=null,Da=null,Ri=null;function vo(){if(Ri)return Ri;var e,n=Da,a=n.length,r,u="value"in dn?dn.value:dn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===u[f-r];r++);return Ri=u.slice(e,1<r?1-r:void 0)}function gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function _o(){return!1}function ui(e){function n(a,r,u,f,y){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qi:_o,this.isPropagationStopped=_o,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=ui(ss),Xs=v({},ss,{view:0,detail:0}),Pl=ui(Xs),Xa,Ji,Hn,Ze=v({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(Xa=e.screenX-Hn.screenX,Ji=e.screenY-Hn.screenY):Ji=Xa=0,Hn=e),Xa)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),fi=ui(Ze),Il=v({},Ze,{dataTransfer:0}),Dr=ui(Il),Bl=v({},Xs,{relatedTarget:0}),Ci=ui(Bl),rs=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),au=ui(rs),da=v({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xo=ui(da),Di=v({},ss,{data:0}),Jn=ui(Di),Nn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bn[e])?!!n[e]:!1}function Ws(){return Fl}var qs=v({},Xs,{key:function(e){if(e.key){var n=Nn[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Je=ui(qs),Hl=v({},Ze,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=ui(Hl),Vl=v({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),os=ui(Vl),Ur=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lr=ui(Ur),On=v({},Ze,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),we=ui(On),kl=v({},ss,{newState:0,oldState:0}),zn=ui(kl),Xl=[9,13,27,32],yo=ha&&"CompositionEvent"in window,Ys=null;ha&&"documentMode"in document&&(Ys=document.documentMode);var Wa=ha&&"TextEvent"in window&&!Ys,Wl=ha&&(!yo||Ys&&8<Ys&&11>=Ys),Ua=" ",ql=!1;function qa(e,n){switch(e){case"keyup":return Xl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fi=!1;function su(e,n){switch(e){case"compositionend":return Yl(n);case"keypress":return n.which!==32?null:(ql=!0,Ua);case"textInput":return e=n.data,e===Ua&&ql?null:e;default:return null}}function pa(e,n){if(Fi)return e==="compositionend"||!yo&&qa(e,n)?(e=vo(),Ri=Da=dn=null,Fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wl&&n.locale!=="ko"?null:n.data;default:return null}}var jl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jl[e.type]:n==="textarea"}function ru(e,n,a,r){Ai?wi?wi.push(r):wi=[r]:Ai=r,n=Zu(n,"onChange"),0<n.length&&(a=new ks("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Hi=null,js=null;function ls(e){Kg(e,0)}function Zs(e){var n=at(e);if(li(n))return e}function Zl(e,n){if(e==="change")return n}var Kl=!1;if(ha){var So;if(ha){var Eo="oninput"in document;if(!Eo){var Ql=document.createElement("div");Ql.setAttribute("oninput","return;"),Eo=typeof Ql.oninput=="function"}So=Eo}else So=!1;Kl=So&&(!document.documentMode||9<document.documentMode)}function Jl(){Hi&&(Hi.detachEvent("onpropertychange",cs),js=Hi=null)}function cs(e){if(e.propertyName==="value"&&Zs(js)){var n=[];ru(n,js,e,fa(e)),zt(ls,n)}}function Nr(e,n,a){e==="focusin"?(Jl(),Hi=n,js=a,Hi.attachEvent("onpropertychange",cs)):e==="focusout"&&Jl()}function rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(js)}function La(e,n){if(e==="click")return Zs(n)}function ou(e,n){if(e==="input"||e==="change")return Zs(n)}function oh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:oh;function vi(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!ke.call(n,u)||!Gn(e[u],n[u]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,n){var a=Or(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Or(a)}}function us(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?us(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ma(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bi(e.document)}return n}function To(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lu=ha&&"documentMode"in document&&11>=document.documentMode,Ya=null,bo=null,Pr=null,$l=!1;function tc(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$l||Ya==null||Ya!==bi(r)||(r=Ya,"selectionStart"in r&&To(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&vi(Pr,r)||(Pr=r,r=Zu(bo,"onSelect"),0<r.length&&(n=new ks("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ya)))}function ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var fs={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},ec={},cu={};ha&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function hs(e){if(ec[e])return ec[e];if(!fs[e])return e;var n=fs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in cu)return ec[e]=n[a];return e}var uu=hs("animationend"),fu=hs("animationiteration"),hu=hs("animationstart"),lh=hs("transitionrun"),Ao=hs("transitionstart"),du=hs("transitioncancel"),nc=hs("transitionend"),ic=new Map,wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wo.push("scrollEnd");function Gi(e,n){ic.set(e,n),Ft(n,[e])}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],ds=0,Ro=0;function Br(){for(var e=ds,n=Ro=ds=0;n<e;){var a=Ui[n];Ui[n++]=null;var r=Ui[n];Ui[n++]=null;var u=Ui[n];Ui[n++]=null;var f=Ui[n];if(Ui[n++]=null,r!==null&&u!==null){var y=r.pending;y===null?u.next=u:(u.next=y.next,y.next=u),r.pending=u}f!==0&&pt(a,u,f)}}function Fr(e,n,a,r){Ui[ds++]=e,Ui[ds++]=n,Ui[ds++]=a,Ui[ds++]=r,Ro|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function k(e,n,a,r){return Fr(e,n,a,r),Et(e)}function $(e,n){return Fr(e,null,null,n),Et(e)}function pt(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-re(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Et(e){if(50<Tc)throw Tc=0,pd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Nt={};function At(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(e,n,a,r){return new At(e,n,a,r)}function le(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ve(e,n){var a=e.alternate;return a===null?(a=ae(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ne(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pn(e,n,a,r,u,f){var y=0;if(r=e,typeof e=="function")le(e)&&(y=1);else if(typeof e=="string")y=Vy(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ae(31,a,n,u),e.elementType=U,e.lanes=f,e;case b:return Vn(a.children,u,f,n);case S:y=8,u|=24;break;case _:return e=ae(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case V:return e=ae(13,a,n,u),e.elementType=V,e.lanes=f,e;case z:return e=ae(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case N:y=9;break t;case C:y=11;break t;case D:y=14;break t;case H:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ae(y,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Vn(e,n,a,r){return e=ae(7,e,r,n),e.lanes=a,e}function Vi(e,n,a){return e=ae(6,e,null,n),e.lanes=a,e}function ga(e){var n=ae(18,null,null,0);return n.stateNode=e,n}function Za(e,n,a){return n=ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Co=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=Co.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ne(n)},Co.set(e,n),n)}return{value:e,source:n,stack:ne(n)}}var Ks=[],Qs=0,Do=null,Li=0,An=[],kn=0,$i=null,va=1,ta="";function ea(e,n){Ks[Qs++]=Li,Ks[Qs++]=Do,Do=e,Li=n}function zm(e,n,a){An[kn++]=va,An[kn++]=ta,An[kn++]=$i,$i=e;var r=va;e=ta;var u=32-re(r)-1;r&=~(1<<u),a+=1;var f=32-re(n)+u;if(30<f){var y=u-u%5;f=(r&(1<<y)-1).toString(32),r>>=y,u-=y,va=1<<32-re(n)+u|a<<u|r,ta=f+e}else va=1<<f|a<<u|r,ta=e}function ch(e){e.return!==null&&(ea(e,1),zm(e,1,0))}function uh(e){for(;e===Do;)Do=Ks[--Qs],Ks[Qs]=null,Li=Ks[--Qs],Ks[Qs]=null;for(;e===$i;)$i=An[--kn],An[kn]=null,ta=An[--kn],An[kn]=null,va=An[--kn],An[kn]=null}function Pm(e,n){An[kn++]=va,An[kn++]=ta,An[kn++]=$i,va=n.id,ta=n.overflow,$i=e}var hi=null,pn=null,Ge=!1,Js=null,_a=!1,fh=Error(s(519));function $s(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ac(_i(n,e)),fh}function Im(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[vn]=e,n[Kn]=r,a){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(a=0;a<Ac.length;a++)Ie(Ac[a],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),Fn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),ka(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||tv(n.textContent,a)?(r.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),r.onScroll!=null&&Ie("scroll",n),r.onScrollEnd!=null&&Ie("scrollend",n),r.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||$s(e,!0)}function Bm(e){for(hi=e.return;hi;)switch(hi.tag){case 5:case 31:case 13:_a=!1;return;case 27:case 3:_a=!0;return;default:hi=hi.return}}function Uo(e){if(e!==hi)return!1;if(!Ge)return Bm(e),Ge=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cd(e.type,e.memoizedProps)),a=!a),a&&pn&&$s(e),Bm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=cv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=cv(e)}else n===27?(n=pn,dr(e.type)?(e=Od,Od=null,pn=e):pn=n):pn=hi?ya(e.stateNode.nextSibling):null;return!0}function Hr(){pn=hi=null,Ge=!1}function hh(){var e=Js;return e!==null&&(qi===null?qi=e:qi.push.apply(qi,e),Js=null),e}function ac(e){Js===null?Js=[e]:Js.push(e)}var dh=P(null),Gr=null,ps=null;function tr(e,n,a){bt(dh,n._currentValue),n._currentValue=a}function ms(e){e._currentValue=dh.current,st(dh)}function ph(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function mh(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ph(f.return,a,e),r||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),ph(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Lo(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Gn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===Tt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uc):e=[Uc])}u=u.return}e!==null&&mh(n,e,a,r),n.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vr(e){Gr=e,ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function di(e){return Fm(Gr,e)}function mu(e,n){return Gr===null&&Vr(e),Fm(e,n)}function Fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ps===null){if(e===null)throw Error(s(308));ps=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ps=ps.next=n;return a}var Bx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Fx=o.unstable_scheduleCallback,Hx=o.unstable_NormalPriority,Xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gh(){return{controller:new Bx,data:new Map,refCount:0}}function sc(e){e.refCount--,e.refCount===0&&Fx(Hx,function(){e.controller.abort()})}var rc=null,vh=0,No=0,Oo=null;function Gx(e,n){if(rc===null){var a=rc=[];vh=0,No=yd(),Oo={status:"pending",value:void 0,then:function(r){a.push(r)}}}return vh++,n.then(Hm,Hm),n}function Hm(){if(--vh===0&&rc!==null){Oo!==null&&(Oo.status="fulfilled");var e=rc;rc=null,No=0,Oo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Gm=B.S;B.S=function(e,n){Tg=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gx(e,n),Gm!==null&&Gm(e,n)};var kr=P(null);function _h(){var e=kr.current;return e!==null?e:un.pooledCache}function gu(e,n){n===null?bt(kr,kr.current):bt(kr,n.pool)}function Vm(){var e=_h();return e===null?null:{parent:Xn._currentValue,pool:e}}var zo=Error(s(460)),xh=Error(s(474)),vu=Error(s(542)),_u={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qm(e),e;default:if(typeof n.status=="string")n.then(ua,ua);else{if(e=un,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qm(e),e}throw Wr=n,zo}}function Xr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wr=a,zo):a}}var Wr=null;function Wm(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function qm(e){if(e===zo||e===vu)throw Error(s(483))}var Po=null,oc=0;function xu(e){var n=oc;return oc+=1,Po===null&&(Po=[]),Xm(Po,e,n)}function lc(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yu(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){function n(K,W){if(e){var et=K.deletions;et===null?(K.deletions=[W],K.flags|=16):et.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function r(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=ve(K,W),K.index=0,K.sibling=null,K}function f(K,W,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<W?(K.flags|=67108866,W):et):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,W,et,_t){return W===null||W.tag!==6?(W=Vi(et,K.mode,_t),W.return=K,W):(W=u(W,et),W.return=K,W)}function G(K,W,et,_t){var oe=et.type;return oe===b?dt(K,W,et.props.children,_t,et.key):W!==null&&(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===H&&Xr(oe)===W.type)?(W=u(W,et.props),lc(W,et),W.return=K,W):(W=Pn(et.type,et.key,et.props,null,K.mode,_t),lc(W,et),W.return=K,W)}function nt(K,W,et,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=Za(et,K.mode,_t),W.return=K,W):(W=u(W,et.children||[]),W.return=K,W)}function dt(K,W,et,_t,oe){return W===null||W.tag!==7?(W=Vn(et,K.mode,_t,oe),W.return=K,W):(W=u(W,et),W.return=K,W)}function Mt(K,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Vi(""+W,K.mode,et),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return et=Pn(W.type,W.key,W.props,null,K.mode,et),lc(et,W),et.return=K,et;case E:return W=Za(W,K.mode,et),W.return=K,W;case H:return W=Xr(W),Mt(K,W,et)}if(mt(W)||it(W))return W=Vn(W,K.mode,et,null),W.return=K,W;if(typeof W.then=="function")return Mt(K,xu(W),et);if(W.$$typeof===L)return Mt(K,mu(K,W),et);yu(K,W)}return null}function ot(K,W,et,_t){var oe=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return oe!==null?null:A(K,W,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===oe?G(K,W,et,_t):null;case E:return et.key===oe?nt(K,W,et,_t):null;case H:return et=Xr(et),ot(K,W,et,_t)}if(mt(et)||it(et))return oe!==null?null:dt(K,W,et,_t,null);if(typeof et.then=="function")return ot(K,W,xu(et),_t);if(et.$$typeof===L)return ot(K,W,mu(K,et),_t);yu(K,et)}return null}function ct(K,W,et,_t,oe){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(et)||null,A(W,K,""+_t,oe);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return K=K.get(_t.key===null?et:_t.key)||null,G(W,K,_t,oe);case E:return K=K.get(_t.key===null?et:_t.key)||null,nt(W,K,_t,oe);case H:return _t=Xr(_t),ct(K,W,et,_t,oe)}if(mt(_t)||it(_t))return K=K.get(et)||null,dt(W,K,_t,oe,null);if(typeof _t.then=="function")return ct(K,W,et,xu(_t),oe);if(_t.$$typeof===L)return ct(K,W,et,mu(W,_t),oe);yu(W,_t)}return null}function Kt(K,W,et,_t){for(var oe=null,We=null,te=W,Ee=W=0,He=null;te!==null&&Ee<et.length;Ee++){te.index>Ee?(He=te,te=null):He=te.sibling;var qe=ot(K,te,et[Ee],_t);if(qe===null){te===null&&(te=He);break}e&&te&&qe.alternate===null&&n(K,te),W=f(qe,W,Ee),We===null?oe=qe:We.sibling=qe,We=qe,te=He}if(Ee===et.length)return a(K,te),Ge&&ea(K,Ee),oe;if(te===null){for(;Ee<et.length;Ee++)te=Mt(K,et[Ee],_t),te!==null&&(W=f(te,W,Ee),We===null?oe=te:We.sibling=te,We=te);return Ge&&ea(K,Ee),oe}for(te=r(te);Ee<et.length;Ee++)He=ct(te,K,Ee,et[Ee],_t),He!==null&&(e&&He.alternate!==null&&te.delete(He.key===null?Ee:He.key),W=f(He,W,Ee),We===null?oe=He:We.sibling=He,We=He);return e&&te.forEach(function(_r){return n(K,_r)}),Ge&&ea(K,Ee),oe}function fe(K,W,et,_t){if(et==null)throw Error(s(151));for(var oe=null,We=null,te=W,Ee=W=0,He=null,qe=et.next();te!==null&&!qe.done;Ee++,qe=et.next()){te.index>Ee?(He=te,te=null):He=te.sibling;var _r=ot(K,te,qe.value,_t);if(_r===null){te===null&&(te=He);break}e&&te&&_r.alternate===null&&n(K,te),W=f(_r,W,Ee),We===null?oe=_r:We.sibling=_r,We=_r,te=He}if(qe.done)return a(K,te),Ge&&ea(K,Ee),oe;if(te===null){for(;!qe.done;Ee++,qe=et.next())qe=Mt(K,qe.value,_t),qe!==null&&(W=f(qe,W,Ee),We===null?oe=qe:We.sibling=qe,We=qe);return Ge&&ea(K,Ee),oe}for(te=r(te);!qe.done;Ee++,qe=et.next())qe=ct(te,K,Ee,qe.value,_t),qe!==null&&(e&&qe.alternate!==null&&te.delete(qe.key===null?Ee:qe.key),W=f(qe,W,Ee),We===null?oe=qe:We.sibling=qe,We=qe);return e&&te.forEach(function($y){return n(K,$y)}),Ge&&ea(K,Ee),oe}function rn(K,W,et,_t){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var oe=et.key;W!==null;){if(W.key===oe){if(oe=et.type,oe===b){if(W.tag===7){a(K,W.sibling),_t=u(W,et.props.children),_t.return=K,K=_t;break t}}else if(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===H&&Xr(oe)===W.type){a(K,W.sibling),_t=u(W,et.props),lc(_t,et),_t.return=K,K=_t;break t}a(K,W);break}else n(K,W);W=W.sibling}et.type===b?(_t=Vn(et.props.children,K.mode,_t,et.key),_t.return=K,K=_t):(_t=Pn(et.type,et.key,et.props,null,K.mode,_t),lc(_t,et),_t.return=K,K=_t)}return y(K);case E:t:{for(oe=et.key;W!==null;){if(W.key===oe)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(K,W.sibling),_t=u(W,et.children||[]),_t.return=K,K=_t;break t}else{a(K,W);break}else n(K,W);W=W.sibling}_t=Za(et,K.mode,_t),_t.return=K,K=_t}return y(K);case H:return et=Xr(et),rn(K,W,et,_t)}if(mt(et))return Kt(K,W,et,_t);if(it(et)){if(oe=it(et),typeof oe!="function")throw Error(s(150));return et=oe.call(et),fe(K,W,et,_t)}if(typeof et.then=="function")return rn(K,W,xu(et),_t);if(et.$$typeof===L)return rn(K,W,mu(K,et),_t);yu(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(K,W.sibling),_t=u(W,et),_t.return=K,K=_t):(a(K,W),_t=Vi(et,K.mode,_t),_t.return=K,K=_t),y(K)):a(K,W)}return function(K,W,et,_t){try{oc=0;var oe=rn(K,W,et,_t);return Po=null,oe}catch(te){if(te===zo||te===vu)throw te;var We=ae(29,te,null,K.mode);return We.lanes=_t,We.return=K,We}finally{}}}var qr=Ym(!0),jm=Ym(!1),er=!1;function yh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ir(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ke&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Et(e),pt(e,null,a),n}return Fr(e,r,n,a),Et(e)}function cc(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qe(e,a)}}function Sh(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Eh=!1;function uc(){if(Eh){var e=Oo;if(e!==null)throw e}}function fc(e,n,a,r){Eh=!1;var u=e.updateQueue;er=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,nt=G.next;G.next=null,y===null?f=nt:y.next=nt,y=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=nt:A.next=nt,dt.lastBaseUpdate=G))}if(f!==null){var Mt=u.baseState;y=0,dt=nt=G=null,A=f;do{var ot=A.lane&-536870913,ct=ot!==A.lane;if(ct?(Fe&ot)===ot:(r&ot)===ot){ot!==0&&ot===No&&(Eh=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Kt=e,fe=A;ot=n;var rn=a;switch(fe.tag){case 1:if(Kt=fe.payload,typeof Kt=="function"){Mt=Kt.call(rn,Mt,ot);break t}Mt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=fe.payload,ot=typeof Kt=="function"?Kt.call(rn,Mt,ot):Kt,ot==null)break t;Mt=v({},Mt,ot);break t;case 2:er=!0}}ot=A.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(nt=dt=ct,G=Mt):dt=dt.next=ct,y|=ot;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(G=Mt),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),lr|=y,e.lanes=y,e.memoizedState=Mt}}function Zm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Km(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zm(a[e],n)}var Io=P(null),Mu=P(0);function Qm(e,n){e=Ts,bt(Mu,e),bt(Io,n),Ts=e|n.baseLanes}function Th(){bt(Mu,Ts),bt(Io,Io.current)}function bh(){Ts=Mu.current,st(Io),st(Mu)}var na=P(null),xa=null;function ar(e){var n=e.alternate;bt(In,In.current&1),bt(na,e),xa===null&&(n===null||Io.current!==null||n.memoizedState!==null)&&(xa=e)}function Ah(e){bt(In,In.current),bt(na,e),xa===null&&(xa=e)}function Jm(e){e.tag===22?(bt(In,In.current),bt(na,e),xa===null&&(xa=e)):sr()}function sr(){bt(In,In.current),bt(na,na.current)}function ia(e){st(na),xa===e&&(xa=null),st(In)}var In=P(0);function Su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ld(a)||Nd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gs=0,Me=null,an=null,Wn=null,Eu=!1,Bo=!1,Yr=!1,Tu=0,hc=0,Fo=null,kx=0;function wn(){throw Error(s(321))}function wh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gn(e[a],n[a]))return!1;return!0}function Rh(e,n,a,r,u,f){return gs=f,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?z0:kh,Yr=!1,f=a(r,u),Yr=!1,Bo&&(f=t0(n,a,r,u)),$m(e),f}function $m(e){B.H=mc;var n=an!==null&&an.next!==null;if(gs=0,Wn=an=Me=null,Eu=!1,hc=0,Fo=null,n)throw Error(s(300));e===null||qn||(e=e.dependencies,e!==null&&pu(e)&&(qn=!0))}function t0(e,n,a,r){Me=e;var u=0;do{if(Bo&&(Fo=null),hc=0,Bo=!1,25<=u)throw Error(s(301));if(u+=1,Wn=an=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=P0,f=n(a,r)}while(Bo);return f}function Xx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?dc(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(Me.flags|=1024),n}function Ch(){var e=Tu!==0;return Tu=0,e}function Dh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Uh(e){if(Eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Eu=!1}gs=0,Wn=an=Me=null,Bo=!1,hc=Tu=0,Fo=null}function Ni(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?Me.memoizedState=Wn=e:Wn=Wn.next=e,Wn}function Bn(){if(an===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=Wn===null?Me.memoizedState:Wn.next;if(n!==null)Wn=n,an=e;else{if(e===null)throw Me.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Wn===null?Me.memoizedState=Wn=e:Wn=Wn.next=e}return Wn}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dc(e){var n=hc;return hc+=1,Fo===null&&(Fo=[]),e=Xm(Fo,e,n),n=Me,(Wn===null?n.memoizedState:Wn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?z0:kh),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dc(e);if(e.$$typeof===L)return di(e)}throw Error(s(438,String(e)))}function Lh(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=T;return n.index++,a}function vs(e,n){return typeof n=="function"?n(e):n}function wu(e){var n=Bn();return Nh(n,an,e)}function Nh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,G=null,nt=n,dt=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(Fe&Mt)===Mt:(gs&Mt)===Mt){var ot=nt.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===No&&(dt=!0);else if((gs&ot)===ot){nt=nt.next,ot===No&&(dt=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=Mt,y=f):G=G.next=Mt,Me.lanes|=ot,lr|=ot;Mt=nt.action,Yr&&a(f,Mt),f=nt.hasEagerState?nt.eagerState:a(f,Mt)}else ot={lane:Mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=ot,y=f):G=G.next=ot,Me.lanes|=Mt,lr|=Mt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?y=f:G.next=A,!Gn(f,e.memoizedState)&&(qn=!0,dt&&(a=Oo,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Oh(e){var n=Bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Gn(f,n.memoizedState)||(qn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function e0(e,n,a){var r=Me,u=Bn(),f=Ge;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Gn((an||u).memoizedState,a);if(y&&(u.memoizedState=a,qn=!0),u=u.queue,Ih(a0.bind(null,r,u,e),[e]),u.getSnapshot!==n||y||Wn!==null&&Wn.memoizedState.tag&1){if(r.flags|=2048,Ho(9,{destroy:void 0},i0.bind(null,r,u,a,n),null),un===null)throw Error(s(349));f||(gs&127)!==0||n0(r,n,a)}return a}function n0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=bu(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function i0(e,n,a,r){n.value=a,n.getSnapshot=r,s0(n)&&r0(e)}function a0(e,n,a){return a(function(){s0(n)&&r0(e)})}function s0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gn(e,a)}catch{return!0}}function r0(e){var n=$(e,2);n!==null&&Yi(n,e,2)}function zh(e){var n=Ni();if(typeof e=="function"){var a=e;if(e=a(),Yr){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},n}function o0(e,n,a,r){return e.baseState=a,Nh(e,an,typeof r=="function"?r:vs)}function Wx(e,n,a,r,u){if(Du(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,l0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function l0(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var A=a(u,r),G=B.S;G!==null&&G(y,A),c0(e,n,A)}catch(nt){Ph(e,n,nt)}finally{f!==null&&y.types!==null&&(f.types=y.types),B.T=f}}else try{f=a(u,r),c0(e,n,f)}catch(nt){Ph(e,n,nt)}}function c0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){u0(e,n,r)},function(r){return Ph(e,n,r)}):u0(e,n,a)}function u0(e,n,a){n.status="fulfilled",n.value=a,f0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,l0(e,a)))}function Ph(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,f0(n),n=n.next;while(n!==r)}e.action=null}function f0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function h0(e,n){return n}function d0(e,n){if(Ge){var a=un.formState;if(a!==null){t:{var r=Me;if(Ge){if(pn){e:{for(var u=pn,f=_a;u.nodeType!==8;){if(!f){u=null;break e}if(u=ya(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){pn=ya(u.nextSibling),r=u.data==="F!";break t}}$s(r)}r=!1}r&&(n=a[0])}}return a=Ni(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:n},a.queue=r,a=L0.bind(null,Me,r),r.dispatch=a,r=zh(!1),f=Vh.bind(null,Me,!1,r.queue),r=Ni(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Wx.bind(null,Me,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function p0(e){var n=Bn();return m0(n,an,e)}function m0(e,n,a){if(n=Nh(e,n,h0)[0],e=wu(vs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=dc(n)}catch(y){throw y===zo?vu:y}else r=n;n=Bn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,Ho(9,{destroy:void 0},qx.bind(null,u,a),null)),[r,f,e]}function qx(e,n){e.action=n}function g0(e){var n=Bn(),a=an;if(a!==null)return m0(n,a,e);Bn(),n=n.memoizedState,a=Bn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ho(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Me.updateQueue,n===null&&(n=bu(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function v0(){return Bn().memoizedState}function Ru(e,n,a,r){var u=Ni();Me.flags|=e,u.memoizedState=Ho(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cu(e,n,a,r){var u=Bn();r=r===void 0?null:r;var f=u.memoizedState.inst;an!==null&&r!==null&&wh(r,an.memoizedState.deps)?u.memoizedState=Ho(n,f,a,r):(Me.flags|=e,u.memoizedState=Ho(1|n,f,a,r))}function _0(e,n){Ru(8390656,8,e,n)}function Ih(e,n){Cu(2048,8,e,n)}function Yx(e){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=bu(),Me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function x0(e){var n=Bn().memoizedState;return Yx({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function y0(e,n){return Cu(4,2,e,n)}function M0(e,n){return Cu(4,4,e,n)}function S0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function E0(e,n,a){a=a!=null?a.concat([e]):null,Cu(4,4,S0.bind(null,n,e),a)}function Bh(){}function T0(e,n){var a=Bn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&wh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function b0(e,n){var a=Bn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&wh(n,r[1]))return r[0];if(r=e(),Yr){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r}function Fh(e,n,a){return a===void 0||(gs&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),Me.lanes|=e,lr|=e,a)}function A0(e,n,a,r){return Gn(a,n)?a:Io.current!==null?(e=Fh(e,a,r),Gn(e,n)||(qn=!0),e):(gs&42)===0||(gs&1073741824)!==0&&(Fe&261930)===0?(qn=!0,e.memoizedState=a):(e=Ag(),Me.lanes|=e,lr|=e,n)}function w0(e,n,a,r,u){var f=J.p;J.p=f!==0&&8>f?f:8;var y=B.T,A={};B.T=A,Vh(e,!1,n,a);try{var G=u(),nt=B.S;if(nt!==null&&nt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=Vx(G,r);pc(e,n,dt,ra(e))}else pc(e,n,r,ra(e))}catch(Mt){pc(e,n,{then:function(){},status:"rejected",reason:Mt},ra())}finally{J.p=f,y!==null&&A.types!==null&&(y.types=A.types),B.T=y}}function jx(){}function Hh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=R0(e).queue;w0(e,u,n,Q,a===null?jx:function(){return C0(e),a(r)})}function R0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function C0(e){var n=R0(e);n.next===null&&(n=e.alternate.memoizedState),pc(e,n.next.queue,{},ra())}function Gh(){return di(Uc)}function D0(){return Bn().memoizedState}function U0(){return Bn().memoizedState}function Zx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ra();e=nr(a);var r=ir(n,e,a);r!==null&&(Yi(r,n,a),cc(r,n,a)),n={cache:gh()},e.payload=n;return}n=n.return}}function Kx(e,n,a){var r=ra();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Du(e)?N0(n,a):(a=k(e,n,a,r),a!==null&&(Yi(a,e,r),O0(a,n,r)))}function L0(e,n,a){var r=ra();pc(e,n,a,r)}function pc(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(e))N0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,Gn(A,y))return Fr(e,n,u,0),un===null&&Br(),!1}catch{}finally{}if(a=k(e,n,u,r),a!==null)return Yi(a,e,r),O0(a,n,r),!0}return!1}function Vh(e,n,a,r){if(r={lane:2,revertLane:yd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Du(e)){if(n)throw Error(s(479))}else n=k(e,a,r,2),n!==null&&Yi(n,e,2)}function Du(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function N0(e,n){Bo=Eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function O0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qe(e,a)}}var mc={readContext:di,use:Au,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};mc.useEffectEvent=wn;var z0={readContext:di,use:Au,useCallback:function(e,n){return Ni().memoizedState=[e,n===void 0?null:n],e},useContext:di,useEffect:_0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ru(4194308,4,S0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ru(4194308,4,e,n)},useInsertionEffect:function(e,n){Ru(4,2,e,n)},useMemo:function(e,n){var a=Ni();n=n===void 0?null:n;var r=e();if(Yr){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ni();if(a!==void 0){var u=a(n);if(Yr){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Kx.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var n=Ni();return e={current:e},n.memoizedState=e},useState:function(e){e=zh(e);var n=e.queue,a=L0.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Bh,useDeferredValue:function(e,n){var a=Ni();return Fh(a,e,n)},useTransition:function(){var e=zh(!1);return e=w0.bind(null,Me,e.queue,!0,!1),Ni().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Me,u=Ni();if(Ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),un===null)throw Error(s(349));(Fe&127)!==0||n0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_0(a0.bind(null,r,f,e),[e]),r.flags|=2048,Ho(9,{destroy:void 0},i0.bind(null,r,f,a,n),null),a},useId:function(){var e=Ni(),n=un.identifierPrefix;if(Ge){var a=ta,r=va;a=(r&~(1<<32-re(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gh,useFormState:d0,useActionState:d0,useOptimistic:function(e){var n=Ni();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vh.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lh,useCacheRefresh:function(){return Ni().memoizedState=Zx.bind(null,Me)},useEffectEvent:function(e){var n=Ni(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},kh={readContext:di,use:Au,useCallback:T0,useContext:di,useEffect:Ih,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:M0,useMemo:b0,useReducer:wu,useRef:v0,useState:function(){return wu(vs)},useDebugValue:Bh,useDeferredValue:function(e,n){var a=Bn();return A0(a,an.memoizedState,e,n)},useTransition:function(){var e=wu(vs)[0],n=Bn().memoizedState;return[typeof e=="boolean"?e:dc(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Gh,useFormState:p0,useActionState:p0,useOptimistic:function(e,n){var a=Bn();return o0(a,an,e,n)},useMemoCache:Lh,useCacheRefresh:U0};kh.useEffectEvent=x0;var P0={readContext:di,use:Au,useCallback:T0,useContext:di,useEffect:Ih,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:M0,useMemo:b0,useReducer:Oh,useRef:v0,useState:function(){return Oh(vs)},useDebugValue:Bh,useDeferredValue:function(e,n){var a=Bn();return an===null?Fh(a,e,n):A0(a,an.memoizedState,e,n)},useTransition:function(){var e=Oh(vs)[0],n=Bn().memoizedState;return[typeof e=="boolean"?e:dc(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Gh,useFormState:g0,useActionState:g0,useOptimistic:function(e,n){var a=Bn();return an!==null?o0(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lh,useCacheRefresh:U0};P0.useEffectEvent=x0;function Xh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ra(),u=nr(r);u.payload=n,a!=null&&(u.callback=a),n=ir(e,u,r),n!==null&&(Yi(n,e,r),cc(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ra(),u=nr(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ir(e,u,r),n!==null&&(Yi(n,e,r),cc(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ra(),r=nr(a);r.tag=2,n!=null&&(r.callback=n),n=ir(e,r,a),n!==null&&(Yi(n,e,a),cc(n,e,a))}};function I0(e,n,a,r,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!vi(a,r)||!vi(u,f):!0}function B0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Wh.enqueueReplaceState(n,n.state,null)}function jr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function F0(e){Ir(e)}function H0(e){console.error(e)}function G0(e){Ir(e)}function Uu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function V0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qh(e,n,a){return a=nr(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(e,n)},a}function k0(e){return e=nr(e),e.tag=3,e}function X0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){V0(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){V0(n,a,r),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Qx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Lo(n,a,u,!0),a=na.current,a!==null){switch(a.tag){case 31:case 13:return xa===null?ku():a.alternate===null&&Rn===0&&(Rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),vd(e,r,u)),!1;case 22:return a.flags|=65536,r===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),vd(e,r,u)),!1}throw Error(s(435,a.tag))}return vd(e,r,u),ku(),!1}if(Ge)return n=na.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==fh&&(e=Error(s(422),{cause:r}),ac(_i(e,a)))):(r!==fh&&(n=Error(s(423),{cause:r}),ac(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=_i(r,a),u=qh(e.stateNode,r,u),Sh(e,u),Rn!==4&&(Rn=2)),!1;var f=Error(s(520),{cause:r});if(f=_i(f,a),Ec===null?Ec=[f]:Ec.push(f),Rn!==4&&(Rn=2),n===null)return!0;r=_i(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=qh(a.stateNode,r,e),Sh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cr===null||!cr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=k0(u),X0(u,e,a,r),Sh(a,u),!1}a=a.return}while(a!==null);return!1}var Yh=Error(s(461)),qn=!1;function pi(e,n,a,r){n.child=e===null?jm(n,null,a,r):qr(n,e.child,a,r)}function W0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var A in r)A!=="ref"&&(y[A]=r[A])}else y=r;return Vr(n),r=Rh(e,n,a,y,f,u),A=Ch(),e!==null&&!qn?(Dh(e,n,u),_s(e,n,u)):(Ge&&A&&ch(n),n.flags|=1,pi(e,n,r,u),n.child)}function q0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!le(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Y0(e,n,f,r,u)):(e=Pn(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ed(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:vi,a(y,r)&&e.ref===n.ref)return _s(e,n,u)}return n.flags|=1,e=ve(f,r),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(vi(f,r)&&e.ref===n.ref)if(qn=!1,n.pendingProps=r=f,ed(e,u))(e.flags&131072)!==0&&(qn=!0);else return n.lanes=e.lanes,_s(e,n,u)}return jh(e,n,a,r,u)}function j0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Z0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gu(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):Th(),Jm(n);else return r=n.lanes=536870912,Z0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gu(n,f.cachePool),Qm(n,f),sr(),n.memoizedState=null):(e!==null&&gu(n,null),Th(),sr());return pi(e,n,u,a),n.child}function gc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(e,n,a,r,u){var f=_h();return f=f===null?null:{parent:Xn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gu(n,null),Th(),Jm(n),e!==null&&Lo(e,n,r,!0),n.childLanes=u,null}function Lu(e,n){return n=Ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function K0(e,n,a){return qr(n,e.child,null,a),e=Lu(n,n.pendingProps),e.flags|=2,ia(n),n.memoizedState=null,e}function Jx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ge){if(r.mode==="hidden")return e=Lu(n,r),n.lanes=536870912,gc(null,e);if(Ah(n),(e=pn)?(e=lv(e,_a),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$i!==null?{id:va,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=ga(e),a.return=n,n.child=a,hi=n,pn=null)):e=null,e===null)throw $s(n);return n.lanes=536870912,null}return Lu(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Ah(n),u)if(n.flags&256)n.flags&=-257,n=K0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(qn||Lo(e,n,a,!1),u=(a&e.childLanes)!==0,qn||u){if(r=un,r!==null&&(y=oi(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,$(e,y),Yi(r,e,y),Yh;ku(),n=K0(e,n,a)}else e=f.treeContext,pn=ya(y.nextSibling),hi=n,Ge=!0,Js=null,_a=!1,e!==null&&Pm(n,e),n=Lu(n,r),n.flags|=4096;return n}return e=ve(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function jh(e,n,a,r,u){return Vr(n),a=Rh(e,n,a,r,void 0,u),r=Ch(),e!==null&&!qn?(Dh(e,n,u),_s(e,n,u)):(Ge&&r&&ch(n),n.flags|=1,pi(e,n,a,u),n.child)}function Q0(e,n,a,r,u,f){return Vr(n),n.updateQueue=null,a=t0(n,r,a,u),$m(e),r=Ch(),e!==null&&!qn?(Dh(e,n,f),_s(e,n,f)):(Ge&&r&&ch(n),n.flags|=1,pi(e,n,a,f),n.child)}function J0(e,n,a,r,u){if(Vr(n),n.stateNode===null){var f=Nt,y=a.contextType;typeof y=="object"&&y!==null&&(f=di(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},yh(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?di(y):Nt,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Xh(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Wh.enqueueReplaceState(f,f.state,null),fc(n,r,f,u),uc(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=jr(a,A);f.props=G;var nt=f.context,dt=a.contextType;y=Nt,typeof dt=="object"&&dt!==null&&(y=di(dt));var Mt=a.getDerivedStateFromProps;dt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==y)&&B0(n,f,r,y),er=!1;var ot=n.memoizedState;f.state=ot,fc(n,r,f,u),uc(),nt=n.memoizedState,A||ot!==nt||er?(typeof Mt=="function"&&(Xh(n,a,Mt,r),nt=n.memoizedState),(G=er||I0(n,a,G,r,ot,nt,y))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=y,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Mh(e,n),y=n.memoizedProps,dt=jr(a,y),f.props=dt,Mt=n.pendingProps,ot=f.context,nt=a.contextType,G=Nt,typeof nt=="object"&&nt!==null&&(G=di(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Mt||ot!==G)&&B0(n,f,r,G),er=!1,ot=n.memoizedState,f.state=ot,fc(n,r,f,u),uc();var ct=n.memoizedState;y!==Mt||ot!==ct||er||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof A=="function"&&(Xh(n,a,A,r),ct=n.memoizedState),(dt=er||I0(n,a,dt,r,ot,ct,G)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=G,r=dt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nu(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=qr(n,e.child,null,u),n.child=qr(n,null,a,u)):pi(e,n,a,u),n.memoizedState=f.state,e=n.child):e=_s(e,n,u),e}function $0(e,n,a,r){return Hr(),n.flags|=256,pi(e,n,a,r),n.child}var Zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kh(e){return{baseLanes:e,cachePool:Vm()}}function Qh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=sa),e}function tg(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(In.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ge){if(u?ar(n):sr(),(e=pn)?(e=lv(e,_a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$i!==null?{id:va,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=ga(e),a.return=n,n.child=a,hi=n,pn=null)):e=null,e===null)throw $s(n);return Nd(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(sr(),u=n.mode,A=Ou({mode:"hidden",children:A},u),r=Vn(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Kh(a),r.childLanes=Qh(e,y,a),n.memoizedState=Zh,gc(null,r)):(ar(n),Jh(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(ar(n),n.flags&=-257,n=$h(e,n,a)):n.memoizedState!==null?(sr(),n.child=e.child,n.flags|=128,n=null):(sr(),A=r.fallback,u=n.mode,r=Ou({mode:"visible",children:r.children},u),A=Vn(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,qr(n,e.child,null,a),r=n.child,r.memoizedState=Kh(a),r.childLanes=Qh(e,y,a),n.memoizedState=Zh,n=gc(null,r));else if(ar(n),Nd(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var nt=y.dgst;y=nt,r=Error(s(419)),r.stack="",r.digest=y,ac({value:r,source:null,stack:null}),n=$h(e,n,a)}else if(qn||Lo(e,n,a,!1),y=(a&e.childLanes)!==0,qn||y){if(y=un,y!==null&&(r=oi(y,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,$(e,r),Yi(y,e,r),Yh;Ld(A)||ku(),n=$h(e,n,a)}else Ld(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,pn=ya(A.nextSibling),hi=n,Ge=!0,Js=null,_a=!1,e!==null&&Pm(n,e),n=Jh(n,r.children),n.flags|=4096);return n}return u?(sr(),A=r.fallback,u=n.mode,G=e.child,nt=G.sibling,r=ve(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?A=ve(nt,A):(A=Vn(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,gc(null,r),r=n.child,A=e.child.memoizedState,A===null?A=Kh(a):(u=A.cachePool,u!==null?(G=Xn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Vm(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=Qh(e,y,a),n.memoizedState=Zh,gc(e.child,r)):(ar(n),a=e.child,e=a.sibling,a=ve(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Jh(e,n){return n=Ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ou(e,n){return e=ae(22,e,null,n),e.lanes=0,e}function $h(e,n,a){return qr(n,e.child,null,a),e=Jh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ph(e.return,n,a)}function td(e,n,a,r,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function ng(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var y=In.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,bt(In,y),pi(e,n,r,a),r=Ge?Li:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Su(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),td(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Su(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}td(n,!0,a,null,f,r);break;case"together":td(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function _s(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Lo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ve(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ve(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ed(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function $x(e,n,a){switch(n.tag){case 3:Wt(n,n.stateNode.containerInfo),tr(n,Xn,e.memoizedState.cache),Hr();break;case 27:case 5:pe(n);break;case 4:Wt(n,n.stateNode.containerInfo);break;case 10:tr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ah(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ar(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(ar(n),e=_s(e,n,a),e!==null?e.sibling:null);ar(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Lo(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(In,In.current),r)break;return null;case 22:return n.lanes=0,j0(e,n,a,n.pendingProps);case 24:tr(n,Xn,e.memoizedState.cache)}return _s(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)qn=!0;else{if(!ed(e,a)&&(n.flags&128)===0)return qn=!1,$x(e,n,a);qn=(e.flags&131072)!==0}else qn=!1,Ge&&(n.flags&1048576)!==0&&zm(n,Li,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Xr(n.elementType),n.type=e,typeof e=="function")le(e)?(r=jr(e,r),n.tag=1,n=J0(null,n,e,r,a)):(n.tag=0,n=jh(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=W0(null,n,e,r,a);break t}else if(u===D){n.tag=14,n=q0(null,n,e,r,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return jh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=jr(r,n.pendingProps),J0(e,n,r,u,a);case 3:t:{if(Wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Mh(e,n),fc(n,r,null,a);var y=n.memoizedState;if(r=y.cache,tr(n,Xn,r),r!==f.cache&&mh(n,[Xn],a,!0),uc(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$0(e,n,r,a);break t}else if(r!==u){u=_i(Error(s(424)),n),ac(u),n=$0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pn=ya(e.firstChild),hi=n,Ge=!0,Js=null,_a=!0,a=jm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hr(),r===u){n=_s(e,n,a);break t}pi(e,n,r,a)}n=n.child}return n;case 26:return Nu(e,n),e===null?(a=pv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ge||(a=n.type,e=n.pendingProps,r=Ku(yt.current).createElement(a),r[vn]=n,r[Kn]=e,mi(r,a,e),q(r),n.stateNode=r):n.memoizedState=pv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return pe(n),e===null&&Ge&&(r=n.stateNode=fv(n.type,n.pendingProps,yt.current),hi=n,_a=!0,u=pn,dr(n.type)?(Od=u,pn=ya(r.firstChild)):pn=u),pi(e,n,n.pendingProps.children,a),Nu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ge&&((u=r=pn)&&(r=Cy(r,n.type,n.pendingProps,_a),r!==null?(n.stateNode=r,hi=n,pn=ya(r.firstChild),_a=!1,u=!0):u=!1),u||$s(n)),pe(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,Cd(u,f)?r=null:y!==null&&Cd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Rh(e,n,Xx,null,null,a),Uc._currentValue=u),Nu(e,n),pi(e,n,r,a),n.child;case 6:return e===null&&Ge&&((e=a=pn)&&(a=Dy(a,n.pendingProps,_a),a!==null?(n.stateNode=a,hi=n,pn=null,e=!0):e=!1),e||$s(n)),null;case 13:return tg(e,n,a);case 4:return Wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qr(n,null,r,a):pi(e,n,r,a),n.child;case 11:return W0(e,n,n.type,n.pendingProps,a);case 7:return pi(e,n,n.pendingProps,a),n.child;case 8:return pi(e,n,n.pendingProps.children,a),n.child;case 12:return pi(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,tr(n,n.type,r.value),pi(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Vr(n),u=di(u),r=r(u),n.flags|=1,pi(e,n,r,a),n.child;case 14:return q0(e,n,n.type,n.pendingProps,a);case 15:return Y0(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return Jx(e,n,a);case 22:return j0(e,n,a,n.pendingProps);case 24:return Vr(n),r=di(Xn),e===null?(u=_h(),u===null&&(u=un,f=gh(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},yh(n),tr(n,Xn,u)):((e.lanes&a)!==0&&(Mh(e,n),fc(n,null,null,a),uc()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),tr(n,Xn,r)):(r=f.cache,tr(n,Xn,r),r!==u.cache&&mh(n,[Xn],a,!0))),pi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function xs(e){e.flags|=4}function nd(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw Wr=_u,xh}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xv(n))if(Dg())e.flags|=8192;else throw Wr=_u,xh}function zu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Xo|=n)}function vc(e,n){if(!Ge)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function ty(e,n,a){var r=n.pendingProps;switch(uh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ms(Xn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Uo(n)?xs(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hh())),mn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(xs(n),f!==null?(mn(n),ag(n,f)):(mn(n),nd(n,u,null,r,a))):f?f!==e.memoizedState?(xs(n),mn(n),ag(n,f)):(mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&xs(n),mn(n),nd(n,u,e,r,a)),null;case 27:if(Ve(n),a=yt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&xs(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return mn(n),null}e=Z.current,Uo(n)?Im(n):(e=fv(u,r,a),n.stateNode=e,xs(n))}return mn(n),null;case 5:if(Ve(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&xs(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(f=Z.current,Uo(n))Im(n);else{var y=Ku(yt.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(u,{is:r.is}):y.createElement(u)}}f[vn]=n,f[Kn]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(mi(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&xs(n)}}return mn(n),nd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&xs(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Uo(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=hi,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[vn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||tv(e.nodeValue,a)),e||$s(n,!0)}else e=Ku(e).createTextNode(r),e[vn]=n,n.stateNode=e}return mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Uo(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[vn]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),e=!1}else a=hh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ia(n),n):(ia(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Uo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[vn]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),u=!1}else u=hh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ia(n),n):(ia(n),null)}return ia(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),mn(n),null);case 4:return qt(),e===null&&Td(n.stateNode.containerInfo),mn(n),null;case 10:return ms(n.type),mn(n),null;case 19:if(st(In),r=n.memoizedState,r===null)return mn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)vc(r,!1);else{if(Rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Su(e),f!==null){for(n.flags|=128,vc(r,!1),e=f.updateQueue,n.updateQueue=e,zu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ne(a,e),a=a.sibling;return bt(In,In.current&1|2),Ge&&ea(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&gt()>Hu&&(n.flags|=128,u=!0,vc(r,!1),n.lanes=4194304)}else{if(!u)if(e=Su(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zu(n,e),vc(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ge)return mn(n),null}else 2*gt()-r.renderingStartTime>Hu&&a!==536870912&&(n.flags|=128,u=!0,vc(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=gt(),e.sibling=null,a=In.current,bt(In,u?a&1|2:a&1),Ge&&ea(n,r.treeForkCount),e):(mn(n),null);case 22:case 23:return ia(n),bh(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&st(kr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ms(Xn),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ey(e,n){switch(uh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ms(Xn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(ia(n),n.alternate===null)throw Error(s(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ia(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(In),null;case 4:return qt(),null;case 10:return ms(n.type),null;case 22:case 23:return ia(n),bh(),e!==null&&st(kr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ms(Xn),null;case 25:return null;default:return null}}function sg(e,n){switch(uh(n),n.tag){case 3:ms(Xn),qt();break;case 26:case 27:case 5:Ve(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&ia(n);break;case 13:ia(n);break;case 19:st(In);break;case 10:ms(n.type);break;case 22:case 23:ia(n),bh(),e!==null&&st(kr);break;case 24:ms(Xn)}}function _c(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==u)}}catch(A){tn(n,n.return,A)}}function rr(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var y=r.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var G=a,nt=A;try{nt()}catch(dt){tn(u,G,dt)}}}r=r.next}while(r!==f)}}catch(dt){tn(n,n.return,dt)}}function rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Km(n,a)}catch(r){tn(e,e.return,r)}}}function og(e,n,a){a.props=jr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){tn(e,n,r)}}function xc(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){tn(e,n,u)}}function Ka(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){tn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){tn(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){tn(e,e.return,u)}}function id(e,n,a){try{var r=e.stateNode;Ey(r,e.type,a,n),r[Kn]=n}catch(u){tn(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dr(e.type)||e.tag===4}function ad(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua));else if(r!==4&&(r===27&&dr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(sd(e,n,a),e=e.sibling;e!==null;)sd(e,n,a),e=e.sibling}function Pu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&dr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pu(e,n,a),e=e.sibling;e!==null;)Pu(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);mi(n,r,a),n[vn]=e,n[Kn]=a}catch(f){tn(e,e.return,f)}}var ys=!1,Yn=!1,rd=!1,fg=typeof WeakSet=="function"?WeakSet:Set,si=null;function ny(e,n){if(e=e.containerInfo,wd=af,e=ma(e),To(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,G=-1,nt=0,dt=0,Mt=e,ot=null;e:for(;;){for(var ct;Mt!==a||u!==0&&Mt.nodeType!==3||(A=y+u),Mt!==f||r!==0&&Mt.nodeType!==3||(G=y+r),Mt.nodeType===3&&(y+=Mt.nodeValue.length),(ct=Mt.firstChild)!==null;)ot=Mt,Mt=ct;for(;;){if(Mt===e)break e;if(ot===a&&++nt===u&&(A=y),ot===f&&++dt===r&&(G=y),(ct=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=ct}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rd={focusedElem:e,selectionRange:a},af=!1,si=n;si!==null;)if(n=si,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,si=e;else for(;si!==null;){switch(n=si,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Kt=jr(a.type,u);e=r.getSnapshotBeforeUpdate(Kt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(fe){tn(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,si=e;break}si=n.return}}function hg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ss(e,a),r&4&&_c(5,a);break;case 1:if(Ss(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){tn(a,a.return,y)}else{var u=jr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){tn(a,a.return,y)}}r&64&&rg(a),r&512&&xc(a,a.return);break;case 3:if(Ss(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(e,n)}catch(y){tn(a,a.return,y)}}break;case 27:n===null&&r&4&&ug(a);case 26:case 5:Ss(e,a),n===null&&r&4&&lg(a),r&512&&xc(a,a.return);break;case 12:Ss(e,a);break;case 31:Ss(e,a),r&4&&mg(e,a);break;case 13:Ss(e,a),r&4&&gg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fy.bind(null,a),Uy(e,a))));break;case 22:if(r=a.memoizedState!==null||ys,!r){n=n!==null&&n.memoizedState!==null||Yn,u=ys;var f=Yn;ys=r,(Yn=n)&&!f?Es(e,a,(a.subtreeFlags&8772)!==0):Ss(e,a),ys=u,Yn=f}break;case 30:break;default:Ss(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xn=null,ki=!1;function Ms(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 26:Yn||Ka(a,n),Ms(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yn||Ka(a,n);var r=xn,u=ki;dr(a.type)&&(xn=a.stateNode,ki=!1),Ms(e,n,a),Rc(a.stateNode),xn=r,ki=u;break;case 5:Yn||Ka(a,n);case 6:if(r=xn,u=ki,xn=null,Ms(e,n,a),xn=r,ki=u,xn!==null)if(ki)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(f){tn(a,n,f)}else try{xn.removeChild(a.stateNode)}catch(f){tn(a,n,f)}break;case 18:xn!==null&&(ki?(e=xn,rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Jo(e)):rv(xn,a.stateNode));break;case 4:r=xn,u=ki,xn=a.stateNode.containerInfo,ki=!0,Ms(e,n,a),xn=r,ki=u;break;case 0:case 11:case 14:case 15:rr(2,a,n),Yn||rr(4,a,n),Ms(e,n,a);break;case 1:Yn||(Ka(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&og(a,n,r)),Ms(e,n,a);break;case 21:Ms(e,n,a);break;case 22:Yn=(r=Yn)||a.memoizedState!==null,Ms(e,n,a),Yn=r;break;default:Ms(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jo(e)}catch(a){tn(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(a){tn(n,n.return,a)}}function iy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(s(435,e.tag))}}function Iu(e,n){var a=iy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=hy.bind(null,e,r);r.then(u,u)}})}function Xi(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(dr(A.type)){xn=A.stateNode,ki=!1;break t}break;case 5:xn=A.stateNode,ki=!1;break t;case 3:case 4:xn=A.stateNode.containerInfo,ki=!0;break t}A=A.return}if(xn===null)throw Error(s(160));pg(f,y,u),xn=null,ki=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vg(n,e),n=n.sibling}var Na=null;function vg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xi(n,e),Wi(e),r&4&&(rr(3,e,e.return),_c(3,e),rr(5,e,e.return));break;case 1:Xi(n,e),Wi(e),r&512&&(Yn||a===null||Ka(a,a.return)),r&64&&ys&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Na;if(Xi(n,e),Wi(e),r&512&&(Yn||a===null||Ka(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[vn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),mi(f,r,a),f[vn]=e,q(f),r=f;break t;case"link":var y=vv("link","href",u).get(r+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(r),mi(f,r,a),u.head.appendChild(f);break;case"meta":if(y=vv("meta","content",u).get(r+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(r),mi(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[vn]=e,q(f),r=f}e.stateNode=r}else _v(u,e.type,e.stateNode);else e.stateNode=gv(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?_v(u,e.type,e.stateNode):gv(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&id(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xi(n,e),Wi(e),r&512&&(Yn||a===null||Ka(a,a.return)),a!==null&&r&4&&id(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xi(n,e),Wi(e),r&512&&(Yn||a===null||Ka(a,a.return)),e.flags&32){u=e.stateNode;try{ci(u,"")}catch(Kt){tn(e,e.return,Kt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,id(e,u,a!==null?a.memoizedProps:u)),r&1024&&(rd=!0);break;case 6:if(Xi(n,e),Wi(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Kt){tn(e,e.return,Kt)}}break;case 3:if($u=null,u=Na,Na=Qu(n.containerInfo),Xi(n,e),Na=u,Wi(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Jo(n.containerInfo)}catch(Kt){tn(e,e.return,Kt)}rd&&(rd=!1,_g(e));break;case 4:r=Na,Na=Qu(e.stateNode.containerInfo),Xi(n,e),Wi(e),Na=r;break;case 12:Xi(n,e),Wi(e);break;case 31:Xi(n,e),Wi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Iu(e,r)));break;case 13:Xi(n,e),Wi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fu=gt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Iu(e,r)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=ys,dt=Yn;if(ys=nt||u,Yn=dt||G,Xi(n,e),Yn=dt,ys=nt,Wi(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ys||Yn||Zr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var Mt=G.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Kt){tn(G,G.return,Kt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Kt){tn(G,G.return,Kt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?ov(ct,!0):ov(G.stateNode,!1)}catch(Kt){tn(G,G.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Iu(e,a))));break;case 19:Xi(n,e),Wi(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Iu(e,r)));break;case 30:break;case 21:break;default:Xi(n,e),Wi(e)}}function Wi(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(cg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=ad(e);Pu(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(ci(y,""),a.flags&=-33);var A=ad(e);Pu(e,A,y);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=ad(e);sd(e,nt,G);break;default:throw Error(s(161))}}catch(dt){tn(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ss(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function Zr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:rr(4,n,n.return),Zr(n);break;case 1:Ka(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),Zr(n);break;case 27:Rc(n.stateNode);case 26:case 5:Ka(n,n.return),Zr(n);break;case 22:n.memoizedState===null&&Zr(n);break;case 30:Zr(n);break;default:Zr(n)}e=e.sibling}}function Es(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Es(u,f,a),_c(4,f);break;case 1:if(Es(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){tn(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Zm(G[u],A)}catch(nt){tn(r,r.return,nt)}}a&&y&64&&rg(f),xc(f,f.return);break;case 27:ug(f);case 26:case 5:Es(u,f,a),a&&r===null&&y&4&&lg(f),xc(f,f.return);break;case 12:Es(u,f,a);break;case 31:Es(u,f,a),a&&y&4&&mg(u,f);break;case 13:Es(u,f,a),a&&y&4&&gg(u,f);break;case 22:f.memoizedState===null&&Es(u,f,a),xc(f,f.return);break;case 30:break;default:Es(u,f,a)}n=n.sibling}}function od(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sc(a))}function ld(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&sc(e))}function Oa(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,a,r),n=n.sibling}function xg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oa(e,n,a,r),u&2048&&_c(9,n);break;case 1:Oa(e,n,a,r);break;case 3:Oa(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&sc(e)));break;case 12:if(u&2048){Oa(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){tn(n,n.return,G)}}else Oa(e,n,a,r);break;case 31:Oa(e,n,a,r);break;case 13:Oa(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Oa(e,n,a,r):yc(e,n):f._visibility&2?Oa(e,n,a,r):(f._visibility|=2,Go(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&od(y,n);break;case 24:Oa(e,n,a,r),u&2048&&ld(n.alternate,n);break;default:Oa(e,n,a,r)}}function Go(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,G=r,nt=y.flags;switch(y.tag){case 0:case 11:case 15:Go(f,y,A,G,u),_c(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Go(f,y,A,G,u):yc(f,y):(dt._visibility|=2,Go(f,y,A,G,u)),u&&nt&2048&&od(y.alternate,y);break;case 24:Go(f,y,A,G,u),u&&nt&2048&&ld(y.alternate,y);break;default:Go(f,y,A,G,u)}n=n.sibling}}function yc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yc(a,r),u&2048&&od(r.alternate,r);break;case 24:yc(a,r),u&2048&&ld(r.alternate,r);break;default:yc(a,r)}n=n.sibling}}var Mc=8192;function Vo(e,n,a){if(e.subtreeFlags&Mc)for(e=e.child;e!==null;)yg(e,n,a),e=e.sibling}function yg(e,n,a){switch(e.tag){case 26:Vo(e,n,a),e.flags&Mc&&e.memoizedState!==null&&ky(a,Na,e.memoizedState,e.memoizedProps);break;case 5:Vo(e,n,a);break;case 3:case 4:var r=Na;Na=Qu(e.stateNode.containerInfo),Vo(e,n,a),Na=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Mc,Mc=16777216,Vo(e,n,a),Mc=r):Vo(e,n,a));break;default:Vo(e,n,a)}}function Mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];si=r,Eg(r,e)}Mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:Sc(e),e.flags&2048&&rr(9,e,e.return);break;case 3:Sc(e);break;case 12:Sc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bu(e)):Sc(e);break;default:Sc(e)}}function Bu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];si=r,Eg(r,e)}Mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:rr(8,n,n.return),Bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bu(n));break;default:Bu(n)}e=e.sibling}}function Eg(e,n){for(;si!==null;){var a=si;switch(a.tag){case 0:case 11:case 15:rr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sc(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,si=r;else t:for(a=e;si!==null;){r=si;var u=r.sibling,f=r.return;if(dg(r),r===a){si=null;break t}if(u!==null){u.return=f,si=u;break t}si=f}}}var ay={getCacheForType:function(e){var n=di(Xn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return di(Xn).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,Ke=0,un=null,Pe=null,Fe=0,$e=0,aa=null,or=!1,ko=!1,cd=!1,Ts=0,Rn=0,lr=0,Kr=0,ud=0,sa=0,Xo=0,Ec=null,qi=null,fd=!1,Fu=0,Tg=0,Hu=1/0,Gu=null,cr=null,$n=0,ur=null,Wo=null,bs=0,hd=0,dd=null,bg=null,Tc=0,pd=null;function ra(){return(Ke&2)!==0&&Fe!==0?Fe&-Fe:B.T!==null?yd():wa()}function Ag(){if(sa===0)if((Fe&536870912)===0||Ge){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),sa=e}else sa=536870912;return e=na.current,e!==null&&(e.flags|=32),sa}function Yi(e,n,a){(e===un&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(qo(e,0),fr(e,Fe,sa,!1)),Tn(e,a),((Ke&2)===0||e!==un)&&(e===un&&((Ke&2)===0&&(Kr|=a),Rn===4&&fr(e,Fe,sa,!1)),Qa(e))}function wg(e,n,a){if((Ke&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ue(e,n),u=r?ly(e,n):gd(e,n,!0),f=r;do{if(u===0){ko&&!r&&fr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ry(a)){u=gd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=Ec;var G=A.current.memoizedState.isDehydrated;if(G&&(qo(A,y).flags|=256),y=gd(A,y,!1),y!==2){if(cd&&!G){A.errorRecoveryDisabledLanes|=f,Kr|=f,u=4;break t}f=qi,qi=u,f!==null&&(qi===null?qi=f:qi.push.apply(qi,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){qo(e,0),fr(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:fr(r,n,sa,!or);break t;case 2:qi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fu+300-gt(),10<u)){if(fr(r,n,sa,!or),Gt(r,0,!0)!==0)break t;bs=n,r.timeoutHandle=av(Rg.bind(null,r,a,qi,Gu,fd,n,sa,Kr,Xo,or,f,"Throttled",-0,0),u);break t}Rg(r,a,qi,Gu,fd,n,sa,Kr,Xo,or,f,null,-0,0)}}break}while(!0);Qa(e)}function Rg(e,n,a,r,u,f,y,A,G,nt,dt,Mt,ot,ct){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},yg(n,f,Mt);var Kt=(f&62914560)===f?Fu-gt():(f&4194048)===f?Tg-gt():0;if(Kt=Xy(Mt,Kt),Kt!==null){bs=f,e.cancelPendingCommit=Kt(Pg.bind(null,e,n,f,a,r,u,y,A,G,dt,Mt,null,ot,ct)),fr(e,f,y,!nt);return}}Pg(e,n,f,a,r,u,y,A,G)}function ry(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n,a,r){n&=~ud,n&=~Kr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-re(u),y=1<<f;r[f]=-1,u&=~y}a!==0&&is(e,a,n)}function Vu(){return(Ke&6)===0?(bc(0),!1):!0}function md(){if(Pe!==null){if($e===0)var e=Pe.return;else e=Pe,ps=Gr=null,Uh(e),Po=null,oc=0,e=Pe;for(;e!==null;)sg(e.alternate,e),e=e.return;Pe=null}}function qo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bs=0,md(),un=e,Pe=a=ve(e.current,null),Fe=n,$e=0,aa=null,or=!1,ko=ue(e,n),cd=!1,Xo=sa=ud=Kr=lr=Rn=0,qi=Ec=null,fd=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-re(r),f=1<<u;n|=e[u],r&=~f}return Ts=n,Br(),a}function Cg(e,n){Me=null,B.H=mc,n===zo||n===vu?(n=Wm(),$e=3):n===xh?(n=Wm(),$e=4):$e=n===Yh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,aa=n,Pe===null&&(Rn=1,Uu(e,_i(n,e.current)))}function Dg(){var e=na.current;return e===null?!0:(Fe&4194048)===Fe?xa===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===xa:!1}function Ug(){var e=B.H;return B.H=mc,e===null?mc:e}function Lg(){var e=B.A;return B.A=ay,e}function ku(){Rn=4,or||(Fe&4194048)!==Fe&&na.current!==null||(ko=!0),(lr&134217727)===0&&(Kr&134217727)===0||un===null||fr(un,Fe,sa,!1)}function gd(e,n,a){var r=Ke;Ke|=2;var u=Ug(),f=Lg();(un!==e||Fe!==n)&&(Gu=null,qo(e,n)),n=!1;var y=Rn;t:do try{if($e!==0&&Pe!==null){var A=Pe,G=aa;switch($e){case 8:md(),y=6;break t;case 3:case 2:case 9:case 6:na.current===null&&(n=!0);var nt=$e;if($e=0,aa=null,Yo(e,A,G,nt),a&&ko){y=0;break t}break;default:nt=$e,$e=0,aa=null,Yo(e,A,G,nt)}}oy(),y=Rn;break}catch(dt){Cg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ps=Gr=null,Ke=r,B.H=u,B.A=f,Pe===null&&(un=null,Fe=0,Br()),y}function oy(){for(;Pe!==null;)Ng(Pe)}function ly(e,n){var a=Ke;Ke|=2;var r=Ug(),u=Lg();un!==e||Fe!==n?(Gu=null,Hu=gt()+500,qo(e,n)):ko=ue(e,n);t:do try{if($e!==0&&Pe!==null){n=Pe;var f=aa;e:switch($e){case 1:$e=0,aa=null,Yo(e,n,f,1);break;case 2:case 9:if(km(f)){$e=0,aa=null,Og(n);break}n=function(){$e!==2&&$e!==9||un!==e||($e=7),Qa(e)},f.then(n,n);break t;case 3:$e=7;break t;case 4:$e=5;break t;case 7:km(f)?($e=0,aa=null,Og(n)):($e=0,aa=null,Yo(e,n,f,7));break;case 5:var y=null;switch(Pe.tag){case 26:y=Pe.memoizedState;case 5:case 27:var A=Pe;if(y?xv(y):A.stateNode.complete){$e=0,aa=null;var G=A.sibling;if(G!==null)Pe=G;else{var nt=A.return;nt!==null?(Pe=nt,Xu(nt)):Pe=null}break e}}$e=0,aa=null,Yo(e,n,f,5);break;case 6:$e=0,aa=null,Yo(e,n,f,6);break;case 8:md(),Rn=6;break t;default:throw Error(s(462))}}cy();break}catch(dt){Cg(e,dt)}while(!0);return ps=Gr=null,B.H=r,B.A=u,Ke=a,Pe!==null?0:(un=null,Fe=0,Br(),Rn)}function cy(){for(;Pe!==null&&!w();)Ng(Pe)}function Ng(e){var n=ig(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,n===null?Xu(e):Pe=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Uh(n);default:sg(a,n),n=Pe=Ne(n,Ts),n=ig(a,n,Ts)}e.memoizedProps=e.pendingProps,n===null?Xu(e):Pe=n}function Yo(e,n,a,r){ps=Gr=null,Uh(n),Po=null,oc=0;var u=n.return;try{if(Qx(e,u,n,a,Fe)){Rn=1,Uu(e,_i(a,e.current)),Pe=null;return}}catch(f){if(u!==null)throw Pe=u,f;Rn=1,Uu(e,_i(a,e.current)),Pe=null;return}n.flags&32768?(Ge||r===1?e=!0:ko||(Fe&536870912)!==0?e=!1:(or=e=!0,(r===2||r===9||r===3||r===6)&&(r=na.current,r!==null&&r.tag===13&&(r.flags|=16384))),zg(n,e)):Xu(n)}function Xu(e){var n=e;do{if((n.flags&32768)!==0){zg(n,or);return}e=n.return;var a=ty(n.alternate,n,Ts);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);Rn===0&&(Rn=5)}function zg(e,n){do{var a=ey(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);Rn=6,Pe=null}function Pg(e,n,a,r,u,f,y,A,G){e.cancelPendingCommit=null;do Wu();while($n!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ro,Si(e,a,f,y,A,G),e===un&&(Pe=un=null,Fe=0),Wo=n,ur=e,bs=a,hd=f,dd=u,bg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dy(Pt,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=J.p,J.p=2,y=Ke,Ke|=4;try{ny(e,n,a)}finally{Ke=y,J.p=u,B.T=r}}$n=1,Ig(),Bg(),Fg()}}function Ig(){if($n===1){$n=0;var e=ur,n=Wo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=J.p;J.p=2;var u=Ke;Ke|=4;try{vg(n,e);var f=Rd,y=ma(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&us(A.ownerDocument.documentElement,A)){if(G!==null&&To(A)){var nt=G.start,dt=G.end;if(dt===void 0&&(dt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(dt,A.value.length);else{var Mt=A.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Kt=A.textContent.length,fe=Math.min(G.start,Kt),rn=G.end===void 0?fe:Math.min(G.end,Kt);!ct.extend&&fe>rn&&(y=rn,rn=fe,fe=y);var K=zr(A,fe),W=zr(A,rn);if(K&&W&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==W.node||ct.focusOffset!==W.offset)){var et=Mt.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),fe>rn?(ct.addRange(et),ct.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ct.addRange(et))}}}}for(Mt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&Mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var _t=Mt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}af=!!wd,Rd=wd=null}finally{Ke=u,J.p=r,B.T=a}}e.current=n,$n=2}}function Bg(){if($n===2){$n=0;var e=ur,n=Wo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=J.p;J.p=2;var u=Ke;Ke|=4;try{hg(e,n.alternate,n)}finally{Ke=u,J.p=r,B.T=a}}$n=3}}function Fg(){if($n===4||$n===3){$n=0,rt();var e=ur,n=Wo,a=bs,r=bg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?$n=5:($n=0,Wo=ur=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(cr=null),Ga(a),n=n.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=J.p,J.p=2,B.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var A=r[y];f(A.value,{componentStack:A.stack})}}finally{B.T=n,J.p=u}}(bs&3)!==0&&Wu(),Qa(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===pd?Tc++:(Tc=0,pd=e):Tc=0,bc(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,sc(n)))}function Wu(){return Ig(),Bg(),Fg(),Gg()}function Gg(){if($n!==5)return!1;var e=ur,n=hd;hd=0;var a=Ga(bs),r=B.T,u=J.p;try{J.p=32>a?32:a,B.T=null,a=dd,dd=null;var f=ur,y=bs;if($n=0,Wo=ur=null,bs=0,(Ke&6)!==0)throw Error(s(331));var A=Ke;if(Ke|=4,Sg(f.current),xg(f,f.current,y,a),Ke=A,bc(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{J.p=u,B.T=r,Hg(e,n)}}function Vg(e,n,a){n=_i(a,n),n=qh(e.stateNode,n,2),e=ir(e,n,2),e!==null&&(Tn(e,2),Qa(e))}function tn(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=_i(a,e),a=k0(2),r=ir(n,a,2),r!==null&&(X0(a,r,n,e),Tn(r,2),Qa(r));break}}n=n.return}}function vd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new sy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(cd=!0,u.add(a),e=uy.bind(null,e,n,a),n.then(e,e))}function uy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,un===e&&(Fe&a)===a&&(Rn===4||Rn===3&&(Fe&62914560)===Fe&&300>gt()-Fu?(Ke&2)===0&&qo(e,0):ud|=a,Xo===Fe&&(Xo=0)),Qa(e)}function kg(e,n){n===0&&(n=cn()),e=$(e,n),e!==null&&(Tn(e,n),Qa(e))}function fy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function hy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),kg(e,a)}function dy(e,n){return Jt(e,n)}var qu=null,jo=null,_d=!1,Yu=!1,xd=!1,hr=0;function Qa(e){e!==jo&&e.next===null&&(jo===null?qu=jo=e:jo=jo.next=e),Yu=!0,_d||(_d=!0,my())}function bc(e,n){if(!xd&&Yu){xd=!0;do for(var a=!1,r=qu;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var y=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-re(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Yg(r,f))}else f=Fe,f=Gt(r,r===un?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ue(r,f)||(a=!0,Yg(r,f));r=r.next}while(a);xd=!1}}function py(){Xg()}function Xg(){Yu=_d=!1;var e=0;hr!==0&&by()&&(e=hr);for(var n=gt(),a=null,r=qu;r!==null;){var u=r.next,f=Wg(r,n);f===0?(r.next=null,a===null?qu=u:a.next=u,u===null&&(jo=a)):(a=r,(e!==0||(f&3)!==0)&&(Yu=!0)),r=u}$n!==0&&$n!==5||bc(e),hr!==0&&(hr=0)}function Wg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-re(f),A=1<<y,G=u[y];G===-1?((A&a)===0||(A&r)!==0)&&(u[y]=nn(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=un,a=Fe,a=Gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&($e===2||$e===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&O(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ue(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&O(r),Ga(a)){case 2:case 8:a=Qt;break;case 32:a=Pt;break;case 268435456:a=Ae;break;default:a=Pt}return r=qg.bind(null,e),a=Jt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&O(r),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if($n!==0&&$n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wu()&&e.callbackNode!==a)return null;var r=Fe;return r=Gt(e,e===un?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(wg(e,r,n),Wg(e,gt()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(Wu())return null;wg(e,n,!0)}function my(){wy(function(){(Ke&6)!==0?Jt(xt,py):Xg()})}function yd(){if(hr===0){var e=No;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),hr=e}return hr}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mo(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gy(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=jg((u[Kn]||null).action),y=r.submitter;y&&(n=(n=y[Kn]||null)?jg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new ks("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hr!==0){var G=y?Zg(u,y):new FormData(u);Hh(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=y?Zg(u,y):new FormData(u),Hh(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Md=0;Md<wo.length;Md++){var Sd=wo[Md],vy=Sd.toLowerCase(),_y=Sd[0].toUpperCase()+Sd.slice(1);Gi(vy,"on"+_y)}Gi(uu,"onAnimationEnd"),Gi(fu,"onAnimationIteration"),Gi(hu,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(lh,"onTransitionRun"),Gi(Ao,"onTransitionStart"),Gi(du,"onTransitionCancel"),Gi(nc,"onTransitionEnd"),Ct("onMouseEnter",["mouseout","mouseover"]),Ct("onMouseLeave",["mouseout","mouseover"]),Ct("onPointerEnter",["pointerout","pointerover"]),Ct("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ac));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var A=r[y],G=A.instance,nt=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(dt){Ir(dt)}u.currentTarget=null,f=G}else for(y=0;y<r.length;y++){if(A=r[y],G=A.instance,nt=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(dt){Ir(dt)}u.currentTarget=null,f=G}}}}function Ie(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var r=e+"__bubble";a.has(r)||(Qg(n,e,2,!1),a.add(r))}function Ed(e,n,a){var r=0;n&&(r|=4),Qg(a,e,r,n)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Td(e){if(!e[ju]){e[ju]=!0,Rt.forEach(function(a){a!=="selectionchange"&&(xy.has(a)||Ed(a,!1,e),Ed(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ju]||(n[ju]=!0,Ed("selectionchange",!1,n))}}function Qg(e,n,a,r){switch(Av(n)){case 2:var u=Yy;break;case 8:u=jy;break;default:u=Fd}a=u.bind(null,n,a,e),u=void 0,!ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function bd(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var A=r.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=r.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=R(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){r=f=y;continue t}A=A.parentNode}}r=r.return}zt(function(){var nt=f,dt=fa(a),Mt=[];t:{var ot=ic.get(e);if(ot!==void 0){var ct=ks,Kt=e;switch(e){case"keypress":if(gi(a)===0)break t;case"keydown":case"keyup":ct=Je;break;case"focusin":Kt="focus",ct=Ci;break;case"focusout":Kt="blur",ct=Ci;break;case"beforeblur":case"afterblur":ct=Ci;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Dr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=os;break;case uu:case fu:case hu:ct=au;break;case nc:ct=Lr;break;case"scroll":case"scrollend":ct=Pl;break;case"wheel":ct=we;break;case"copy":case"cut":case"paste":ct=xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Gl;break;case"toggle":case"beforetoggle":ct=zn}var fe=(n&4)!==0,rn=!fe&&(e==="scroll"||e==="scrollend"),K=fe?ot!==null?ot+"Capture":null:ot;fe=[];for(var W=nt,et;W!==null;){var _t=W;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||K===null||(_t=Sn(W,K),_t!=null&&fe.push(wc(W,_t,et))),rn)break;W=W.return}0<fe.length&&(ot=new ct(ot,Kt,null,a,dt),Mt.push({event:ot,listeners:fe}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==go&&(Kt=a.relatedTarget||a.fromElement)&&(R(Kt)||Kt[Ra]))break t;if((ct||ot)&&(ot=dt.window===dt?dt:(ot=dt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Kt=a.relatedTarget||a.toElement,ct=nt,Kt=Kt?R(Kt):null,Kt!==null&&(rn=c(Kt),fe=Kt.tag,Kt!==rn||fe!==5&&fe!==27&&fe!==6)&&(Kt=null)):(ct=null,Kt=nt),ct!==Kt)){if(fe=fi,_t="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Gl,_t="onPointerLeave",K="onPointerEnter",W="pointer"),rn=ct==null?ot:at(ct),et=Kt==null?ot:at(Kt),ot=new fe(_t,W+"leave",ct,a,dt),ot.target=rn,ot.relatedTarget=et,_t=null,R(dt)===nt&&(fe=new fe(K,W+"enter",Kt,a,dt),fe.target=et,fe.relatedTarget=rn,_t=fe),rn=_t,ct&&Kt)e:{for(fe=yy,K=ct,W=Kt,et=0,_t=K;_t;_t=fe(_t))et++;_t=0;for(var oe=W;oe;oe=fe(oe))_t++;for(;0<et-_t;)K=fe(K),et--;for(;0<_t-et;)W=fe(W),_t--;for(;et--;){if(K===W||W!==null&&K===W.alternate){fe=K;break e}K=fe(K),W=fe(W)}fe=null}else fe=null;ct!==null&&Jg(Mt,ot,ct,fe,!1),Kt!==null&&rn!==null&&Jg(Mt,rn,Kt,fe,!0)}}t:{if(ot=nt?at(nt):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var We=Zl;else if(Mo(ot))if(Kl)We=ou;else{We=rh;var te=Nr}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&zl(nt.elementType)&&(We=Zl):We=La;if(We&&(We=We(e,nt))){ru(Mt,We,a,dt);break t}te&&te(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&Un(ot,"number",ot.value)}switch(te=nt?at(nt):window,e){case"focusin":(Mo(te)||te.contentEditable==="true")&&(Ya=te,bo=nt,Pr=null);break;case"focusout":Pr=bo=Ya=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,tc(Mt,a,dt);break;case"selectionchange":if(lu)break;case"keydown":case"keyup":tc(Mt,a,dt)}var Ee;if(yo)t:{switch(e){case"compositionstart":var He="onCompositionStart";break t;case"compositionend":He="onCompositionEnd";break t;case"compositionupdate":He="onCompositionUpdate";break t}He=void 0}else Fi?qa(e,a)&&(He="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(He="onCompositionStart");He&&(Wl&&a.locale!=="ko"&&(Fi||He!=="onCompositionStart"?He==="onCompositionEnd"&&Fi&&(Ee=vo()):(dn=dt,Da="value"in dn?dn.value:dn.textContent,Fi=!0)),te=Zu(nt,He),0<te.length&&(He=new Jn(He,e,null,a,dt),Mt.push({event:He,listeners:te}),Ee?He.data=Ee:(Ee=Yl(a),Ee!==null&&(He.data=Ee)))),(Ee=Wa?su(e,a):pa(e,a))&&(He=Zu(nt,"onBeforeInput"),0<He.length&&(te=new Jn("onBeforeInput","beforeinput",null,a,dt),Mt.push({event:te,listeners:He}),te.data=Ee)),gy(Mt,e,nt,a,dt)}Kg(Mt,n)})}function wc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zu(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Sn(e,a),u!=null&&r.unshift(wc(e,u,f)),u=Sn(e,n),u!=null&&r.push(wc(e,u,f))),e.tag===3)return r;e=e.return}return[]}function yy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,r,u){for(var f=n._reactName,y=[];a!==null&&a!==r;){var A=a,G=A.alternate,nt=A.stateNode;if(A=A.tag,G!==null&&G===r)break;A!==5&&A!==26&&A!==27||nt===null||(G=nt,u?(nt=Sn(a,f),nt!=null&&y.unshift(wc(a,nt,G))):u||(nt=Sn(a,f),nt!=null&&y.push(wc(a,nt,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var My=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(My,`
`).replace(Sy,"")}function tv(e,n){return n=$g(n),$g(e)===n}function sn(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ci(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ci(e,""+r);break;case"className":Oe(e,"class",r);break;case"tabIndex":Oe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,r);break;case"style":iu(e,r,f);break;case"data":if(n!=="object"){Oe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=mo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&sn(e,n,"name",u.name,u,null),sn(e,n,"formEncType",u.formEncType,u,null),sn(e,n,"formMethod",u.formMethod,u,null),sn(e,n,"formTarget",u.formTarget,u,null)):(sn(e,n,"encType",u.encType,u,null),sn(e,n,"method",u.method,u,null),sn(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=mo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ua);break;case"onScroll":r!=null&&Ie("scroll",e);break;case"onScrollEnd":r!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=mo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),ge(e,"popover",r);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ge(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ah.get(a)||a,ge(e,a,r))}}function Ad(e,n,a,r,u,f){switch(a){case"style":iu(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?ci(e,r):(typeof r=="number"||typeof r=="bigint")&&ci(e,""+r);break;case"onScroll":r!=null&&Ie("scroll",e);break;case"onScrollEnd":r!=null&&Ie("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Kn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ge(e,a,r)}}}function mi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,f,y,a,null)}}u&&sn(e,n,"srcSet",a.srcSet,a,null),r&&sn(e,n,"src",a.src,a,null);return;case"input":Ie("invalid",e);var A=f=y=u=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":y=dt;break;case"checked":G=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:sn(e,n,r,dt,a,null)}}Fn(e,f,A,G,nt,y,u,!1);return;case"select":Ie("invalid",e),r=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":r=A;default:sn(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!r,n!=null?hn(e,!!r,n,!1):a!=null&&hn(e,!!r,a,!0);return;case"textarea":Ie("invalid",e),f=u=r=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:sn(e,n,y,A,a,null)}ka(e,r,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:sn(e,n,G,r,a,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(r=0;r<Ac.length;r++)Ie(Ac[r],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,nt,r,a,null)}return;default:if(zl(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Ad(e,n,dt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&sn(e,n,A,r,a,null))}function Ey(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,G=null,nt=null,dt=null;for(ct in a){var Mt=a[ct];if(a.hasOwnProperty(ct)&&Mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:r.hasOwnProperty(ct)||sn(e,n,ct,null,r,Mt)}}for(var ot in r){var ct=r[ot];if(Mt=a[ot],r.hasOwnProperty(ot)&&(ct!=null||Mt!=null))switch(ot){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":dt=ct;break;case"value":y=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==Mt&&sn(e,n,ot,ct,r,Mt)}}je(e,y,A,G,nt,dt,f,u);return;case"select":ct=y=A=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:r.hasOwnProperty(f)||sn(e,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==G&&sn(e,n,u,f,r,G)}n=A,a=y,r=ct,ot!=null?hn(e,!!a,ot,!1):!!r!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:sn(e,n,A,null,r,u)}for(y in r)if(u=r[y],f=a[y],r.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&sn(e,n,y,u,r,f)}Ln(e,ot,ct);return;case"option":for(var Kt in a)if(ot=a[Kt],a.hasOwnProperty(Kt)&&ot!=null&&!r.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:sn(e,n,Kt,null,r,ot)}for(G in r)if(ot=r[G],ct=a[G],r.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:sn(e,n,G,ot,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)ot=a[fe],a.hasOwnProperty(fe)&&ot!=null&&!r.hasOwnProperty(fe)&&sn(e,n,fe,null,r,ot);for(nt in r)if(ot=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&ot!==ct&&(ot!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:sn(e,n,nt,ot,r,ct)}return;default:if(zl(n)){for(var rn in a)ot=a[rn],a.hasOwnProperty(rn)&&ot!==void 0&&!r.hasOwnProperty(rn)&&Ad(e,n,rn,void 0,r,ot);for(dt in r)ot=r[dt],ct=a[dt],!r.hasOwnProperty(dt)||ot===ct||ot===void 0&&ct===void 0||Ad(e,n,dt,ot,r,ct);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!r.hasOwnProperty(K)&&sn(e,n,K,null,r,ot);for(Mt in r)ot=r[Mt],ct=a[Mt],!r.hasOwnProperty(Mt)||ot===ct||ot==null&&ct==null||sn(e,n,Mt,ot,r,ct)}function ev(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&ev(y)){for(y=0,A=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>A)break;var dt=G.transferSize,Mt=G.initiatorType;dt&&ev(Mt)&&(G=G.responseEnd,y+=dt*(G<A?1:(A-nt)/(G-nt)))}if(--r,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wd=null,Rd=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function nv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dd=null;function by(){var e=window.event;return e&&e.type==="popstate"?e===Dd?!1:(Dd=e,!0):(Dd=null,!1)}var av=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(e){return sv.resolve(null).then(e).catch(Ry)}:av;function Ry(e){setTimeout(function(){throw e})}function dr(e){return e==="head"}function rv(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Jo(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Rc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rc(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[as]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Rc(e.ownerDocument.body);a=u}while(a);Jo(n)}function ov(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ud(a),Cr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cy(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ya(e.nextSibling),e===null)break}return null}function Dy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ya(e.nextSibling),e===null))return null;return e}function lv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ya(e.nextSibling),e===null))return null;return e}function Ld(e){return e.data==="$?"||e.data==="$~"}function Nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ya(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Od=null;function cv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ya(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function uv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function fv(e,n,a){switch(n=Ku(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Rc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cr(e)}var Ma=new Map,hv=new Set;function Qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var As=J.d;J.d={f:Ly,r:Ny,D:Oy,C:zy,L:Py,m:Iy,X:Fy,S:By,M:Hy};function Ly(){var e=As.f(),n=Vu();return e||n}function Ny(e){var n=j(e);n!==null&&n.tag===5&&n.type==="form"?C0(n):As.r(e)}var Zo=typeof document>"u"?null:document;function dv(e,n,a){var r=Zo;if(r&&typeof n=="string"&&n){var u=Mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),hv.has(u)||(hv.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),mi(n,"link",e),q(n),r.head.appendChild(n)))}}function Oy(e){As.D(e),dv("dns-prefetch",e,null)}function zy(e,n){As.C(e,n),dv("preconnect",e,n)}function Py(e,n,a){As.L(e,n,a);var r=Zo;if(r&&e&&n){var u='link[rel="preload"][as="'+Mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Mn(a.imageSizes)+'"]')):u+='[href="'+Mn(e)+'"]';var f=u;switch(n){case"style":f=Ko(e);break;case"script":f=Qo(e)}Ma.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ma.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Cc(f))||n==="script"&&r.querySelector(Dc(f))||(n=r.createElement("link"),mi(n,"link",e),q(n),r.head.appendChild(n)))}}function Iy(e,n){As.m(e,n);var a=Zo;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Mn(r)+'"][href="'+Mn(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qo(e)}if(!Ma.has(f)&&(e=v({rel:"modulepreload",href:e},n),Ma.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dc(f)))return}r=a.createElement("link"),mi(r,"link",e),q(r),a.head.appendChild(r)}}}function By(e,n,a){As.S(e,n,a);var r=Zo;if(r&&e){var u=lt(r).hoistableStyles,f=Ko(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=r.querySelector(Cc(f)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ma.get(f))&&zd(e,a);var G=y=r.createElement("link");q(G),mi(G,"link",e),G._p=new Promise(function(nt,dt){G.onload=nt,G.onerror=dt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ju(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function Fy(e,n){As.X(e,n);var a=Zo;if(a&&e){var r=lt(a).hoistableScripts,u=Qo(e),f=r.get(u);f||(f=a.querySelector(Dc(u)),f||(e=v({src:e,async:!0},n),(n=Ma.get(u))&&Pd(e,n),f=a.createElement("script"),q(f),mi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Hy(e,n){As.M(e,n);var a=Zo;if(a&&e){var r=lt(a).hoistableScripts,u=Qo(e),f=r.get(u);f||(f=a.querySelector(Dc(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Ma.get(u))&&Pd(e,n),f=a.createElement("script"),q(f),mi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function pv(e,n,a,r){var u=(u=yt.current)?Qu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ko(a.href),a=lt(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ko(a.href);var f=lt(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Cc(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Ma.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ma.set(e,a),f||Gy(u,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qo(a),a=lt(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ko(e){return'href="'+Mn(e)+'"'}function Cc(e){return'link[rel="stylesheet"]['+e+"]"}function mv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),mi(n,"link",a),q(n),e.head.appendChild(n))}function Qo(e){return'[src="'+Mn(e)+'"]'}function Dc(e){return"script[async]"+e}function gv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Mn(a.href)+'"]');if(r)return n.instance=r,q(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),q(r),mi(r,"style",u),Ju(r,a.precedence,e),n.instance=r;case"stylesheet":u=Ko(a.href);var f=e.querySelector(Cc(u));if(f)return n.state.loading|=4,n.instance=f,q(f),f;r=mv(a),(u=Ma.get(u))&&zd(r,u),f=(e.ownerDocument||e).createElement("link"),q(f);var y=f;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),mi(f,"link",r),n.state.loading|=4,Ju(f,a.precedence,e),n.instance=f;case"script":return f=Qo(a.src),(u=e.querySelector(Dc(f)))?(n.instance=u,q(u),u):(r=a,(u=Ma.get(f))&&(r=v({},a),Pd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),mi(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ju(r,a.precedence,e));return n.instance}function Ju(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,y=0;y<r.length;y++){var A=r[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $u=null;function vv(e,n,a){if($u===null){var r=new Map,u=$u=new Map;u.set(a,r)}else u=$u,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[vn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=r.get(y);A?A.push(f):r.set(y,[f])}}return r}function _v(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ky(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ko(r.href),f=n.querySelector(Cc(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tf.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,q(f);return}f=n.ownerDocument||n,r=mv(r),(u=Ma.get(u))&&zd(r,u),f=f.createElement("link"),q(f);var y=f;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),mi(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tf.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Id=0;function Xy(e,n){return e.stylesheets&&e.count===0&&nf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Id===0&&(Id=62500*Ty());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nf(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Id?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ef=null;function nf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ef=new Map,n.forEach(Wy,e),ef=null,tf.call(e))}function Wy(e,n){if(!(n.state.loading&4)){var a=ef.get(e);if(a)var r=a.get(null);else{a=new Map,ef.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,u),a.set(y,u),this.count++,r=tf.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uc={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function qy(e,n,a,r,u,f,y,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function yv(e,n,a,r,u,f,y,A,G,nt,dt,Mt){return e=new qy(e,n,a,y,G,nt,dt,Mt,A),n=1,f===!0&&(n|=24),f=ae(3,null,null,n),e.current=f,f.stateNode=e,n=gh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},yh(f),e}function Mv(e){return e?(e=Nt,e):Nt}function Sv(e,n,a,r,u,f){u=Mv(u),r.context===null?r.context=u:r.pendingContext=u,r=nr(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ir(e,r,n),a!==null&&(Yi(a,e,n),cc(a,e,n))}function Ev(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bd(e,n){Ev(e,n),(e=e.alternate)&&Ev(e,n)}function Tv(e){if(e.tag===13||e.tag===31){var n=$(e,67108864);n!==null&&Yi(n,e,67108864),Bd(e,67108864)}}function bv(e){if(e.tag===13||e.tag===31){var n=ra();n=Ei(n);var a=$(e,n);a!==null&&Yi(a,e,n),Bd(e,n)}}var af=!0;function Yy(e,n,a,r){var u=B.T;B.T=null;var f=J.p;try{J.p=2,Fd(e,n,a,r)}finally{J.p=f,B.T=u}}function jy(e,n,a,r){var u=B.T;B.T=null;var f=J.p;try{J.p=8,Fd(e,n,a,r)}finally{J.p=f,B.T=u}}function Fd(e,n,a,r){if(af){var u=Hd(r);if(u===null)bd(e,n,r,sf,a),wv(e,r);else if(Ky(u,e,n,a,r))r.stopPropagation();else if(wv(e,r),n&4&&-1<Zy.indexOf(e)){for(;u!==null;){var f=j(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=It(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-re(y);A.entanglements[1]|=G,y&=~G}Qa(f),(Ke&6)===0&&(Hu=gt()+500,bc(0))}}break;case 31:case 13:A=$(f,2),A!==null&&Yi(A,f,2),Vu(),Bd(f,2)}if(f=Hd(r),f===null&&bd(e,n,r,sf,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else bd(e,n,r,null,a)}}function Hd(e){return e=fa(e),Gd(e)}var sf=null;function Gd(e){if(sf=null,e=R(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sf=e,null}function Av(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case xt:return 2;case Qt:return 8;case Pt:case Xt:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Vd=!1,pr=null,mr=null,gr=null,Lc=new Map,Nc=new Map,vr=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,n){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Lc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nc.delete(n.pointerId)}}function Oc(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=j(n),n!==null&&Tv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ky(e,n,a,r,u){switch(n){case"focusin":return pr=Oc(pr,e,n,a,r,u),!0;case"dragenter":return mr=Oc(mr,e,n,a,r,u),!0;case"mouseover":return gr=Oc(gr,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Lc.set(f,Oc(Lc.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Nc.set(f,Oc(Nc.get(f)||null,e,n,a,r,u)),!0}return!1}function Rv(e){var n=R(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Va(e.priority,function(){bv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Va(e.priority,function(){bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);go=r,a.target.dispatchEvent(r),go=null}else return n=j(a),n!==null&&Tv(n),e.blockedOn=a,!1;n.shift()}return!0}function Cv(e,n,a){rf(e)&&a.delete(n)}function Qy(){Vd=!1,pr!==null&&rf(pr)&&(pr=null),mr!==null&&rf(mr)&&(mr=null),gr!==null&&rf(gr)&&(gr=null),Lc.forEach(Cv),Nc.forEach(Cv)}function of(e,n){e.blockedOn===n&&(e.blockedOn=null,Vd||(Vd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Qy)))}var lf=null;function Dv(e){lf!==e&&(lf=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lf===e&&(lf=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Gd(r||a)===null)continue;break}var f=j(a);f!==null&&(e.splice(n,3),n-=3,Hh(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Jo(e){function n(G){return of(G,e)}pr!==null&&of(pr,e),mr!==null&&of(mr,e),gr!==null&&of(gr,e),Lc.forEach(n),Nc.forEach(n);for(var a=0;a<vr.length;a++){var r=vr[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vr.length&&(a=vr[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&vr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],y=u[Kn]||null;if(typeof f=="function")y||Dv(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Kn]||null)A=y.formAction;else if(Gd(u)!==null)continue}else A=y.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Dv(a)}}}function Uv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function kd(e){this._internalRoot=e}cf.prototype.render=kd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ra();Sv(a,r,e,n,null,null)},cf.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sv(e.current,2,null,e,null,null),Vu(),n[Ra]=null}};function cf(e){this._internalRoot=e}cf.prototype.unstable_scheduleHydration=function(e){if(e){var n=wa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<vr.length&&n!==0&&n<vr[a].priority;a++);vr.splice(a,0,e),a===0&&Rv(e)}};var Lv=t.version;if(Lv!=="19.2.8")throw Error(s(527,Lv,"19.2.8"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Jy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uf.isDisabled&&uf.supportsFiber)try{ie=uf.inject(Jy),$t=uf}catch{}}return Pc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=F0,f=H0,y=G0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=yv(e,1,!1,null,null,a,r,null,u,f,y,Uv),e[Ra]=n.current,Td(e),new kd(n)},Pc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=F0,y=H0,A=G0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=yv(e,1,!0,n,a??null,r,u,G,f,y,A,Uv),n.context=Mv(null),a=n.current,r=ra(),r=Ei(r),u=nr(r),u.callback=null,ir(a,u,r),a=r,n.current.lanes=a,Tn(n,a),Qa(n),e[Ra]=n.current,Td(e),new cf(n)},Pc.version="19.2.8",Pc}var Vv;function lM(){if(Vv)return qd.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qd.exports=oM(),qd.exports}var cM=lM();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="172",uM=0,kv=1,fM=2,$_=1,tx=2,Ns=3,Rr=0,Pi=1,Fa=2,Ar=0,_l=1,gl=2,Xv=3,Wv=4,hM=5,so=100,dM=101,pM=102,mM=103,gM=104,vM=200,_M=201,xM=202,yM=203,Dp=204,Up=205,MM=206,SM=207,EM=208,TM=209,bM=210,AM=211,wM=212,RM=213,CM=214,Lp=0,Np=1,Op=2,Ml=3,zp=4,Pp=5,Ip=6,Bp=7,ex=0,DM=1,UM=2,wr=0,LM=1,NM=2,OM=3,nx=4,zM=5,PM=6,IM=7,ix=300,Sl=301,El=302,Fp=303,Hp=304,th=306,$c=1e3,oo=1001,Gp=1002,Ki=1003,BM=1004,ff=1005,$a=1006,Kd=1007,lo=1008,Is=1009,ax=1010,sx=1011,tu=1012,ym=1013,uo=1014,ts=1015,nu=1016,Mm=1017,Sm=1018,Tl=1020,rx=35902,ox=1021,lx=1022,ba=1023,cx=1024,ux=1025,xl=1026,bl=1027,Em=1028,Tm=1029,fx=1030,bm=1031,Am=1033,Bf=33776,Ff=33777,Hf=33778,Gf=33779,Vp=35840,kp=35841,Xp=35842,Wp=35843,qp=36196,Yp=37492,jp=37496,Zp=37808,Kp=37809,Qp=37810,Jp=37811,$p=37812,tm=37813,em=37814,nm=37815,im=37816,am=37817,sm=37818,rm=37819,om=37820,lm=37821,Vf=36492,cm=36494,um=36495,hx=36283,fm=36284,hm=36285,dm=36286,FM=3200,HM=3201,dx=0,GM=1,br="",Zi="srgb",Al="srgb-linear",Xf="linear",on="srgb",$o=7680,qv=519,VM=512,kM=513,XM=514,px=515,WM=516,qM=517,YM=518,jM=519,Yv=35044,jv="300 es",zs=2e3,Wf=2001;class Rl{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zv=1234567;const Yc=Math.PI/180,eu=180/Math.PI;function Cl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(yi[o&255]+yi[o>>8&255]+yi[o>>16&255]+yi[o>>24&255]+"-"+yi[t&255]+yi[t>>8&255]+"-"+yi[t>>16&15|64]+yi[t>>24&255]+"-"+yi[i&63|128]+yi[i>>8&255]+"-"+yi[i>>16&255]+yi[i>>24&255]+yi[s&255]+yi[s>>8&255]+yi[s>>16&255]+yi[s>>24&255]).toLowerCase()}function Ce(o,t,i){return Math.max(t,Math.min(i,o))}function wm(o,t){return(o%t+t)%t}function ZM(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function KM(o,t,i){return o!==t?(i-o)/(t-o):0}function jc(o,t,i){return(1-i)*o+i*t}function QM(o,t,i,s){return jc(o,t,1-Math.exp(-i*s))}function JM(o,t=1){return t-Math.abs(wm(o,t*2)-t)}function $M(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function tS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function eS(o,t){return o+Math.floor(Math.random()*(t-o+1))}function nS(o,t){return o+Math.random()*(t-o)}function iS(o){return o*(.5-Math.random())}function aS(o){o!==void 0&&(Zv=o);let t=Zv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sS(o){return o*Yc}function rS(o){return o*eu}function oS(o){return(o&o-1)===0&&o!==0}function lS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function cS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function uS(o,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),g=h((t+s)/2),v=c((t-s)/2),x=h((t-s)/2),M=c((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":o.set(d*g,m*v,m*x,d*p);break;case"YZY":o.set(m*x,d*g,m*v,d*p);break;case"ZXZ":o.set(m*v,m*x,d*g,d*p);break;case"XZX":o.set(d*g,m*E,m*M,d*p);break;case"YXY":o.set(m*M,d*g,m*E,d*p);break;case"ZYZ":o.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function pl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:Yc,RAD2DEG:eu,generateUUID:Cl,clamp:Ce,euclideanModulo:wm,mapLinear:ZM,inverseLerp:KM,lerp:jc,damp:QM,pingpong:JM,smoothstep:$M,smootherstep:tS,randInt:eS,randFloat:nS,randFloatSpread:iS,seededRandom:aS,degToRad:sS,radToDeg:rS,isPowerOfTwo:oS,ceilPowerOfTwo:lS,floorPowerOfTwo:cS,setQuaternionFromProperEuler:uS,normalize:Oi,denormalize:pl};class jt{constructor(t=0,i=0){jt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(t,i,s,l,c,h,d,m,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],E=s[8],b=l[0],S=l[3],_=l[6],N=l[1],L=l[4],C=l[7],V=l[2],z=l[5],D=l[8];return c[0]=h*b+d*N+m*V,c[3]=h*S+d*L+m*z,c[6]=h*_+d*C+m*D,c[1]=p*b+g*N+v*V,c[4]=p*S+g*L+v*z,c[7]=p*_+g*C+v*D,c[2]=x*b+M*N+E*V,c[5]=x*S+M*L+E*z,c[8]=x*_+M*C+E*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*c,M=p*c-h*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*h)*b,t[3]=x*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qd.makeScale(t,i)),this}rotate(t){return this.premultiply(Qd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new Te;function mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fS(){const o=qf("canvas");return o.style.display="block",o}const Kv={};function ml(o){o in Kv||(Kv[o]=!0,console.warn(o))}function hS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function dS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qv=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jv=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){const o={enabled:!0,workingColorSpace:Al,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===on&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===on&&(l.r=yl(l.r),l.g=yl(l.g),l.b=yl(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===br?Xf:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Al]:{primaries:t,whitePoint:s,transfer:Xf,toXYZ:Qv,fromXYZ:Jv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zi},outputColorSpaceConfig:{drawingBufferColorSpace:Zi}},[Zi]:{primaries:t,whitePoint:s,transfer:on,toXYZ:Qv,fromXYZ:Jv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zi}}}),o}const Ye=mS();function Ps(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let tl;class gS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tl===void 0&&(tl=qf("canvas")),tl.width=t.width,tl.height=t.height;const s=tl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tl}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ps(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ps(i[s]/255)*255):i[s]=Ps(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vS=0;class gx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Cl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Jd(l[h].image)):c.push(Jd(l[h]))}else c=Jd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Jd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;class Ii extends Rl{constructor(t=Ii.DEFAULT_IMAGE,i=Ii.DEFAULT_MAPPING,s=oo,l=oo,c=$a,h=lo,d=ba,m=Is,p=Ii.DEFAULT_ANISOTROPY,g=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Cl(),this.name="",this.source=new gx(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ix)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $c:t.x=t.x-Math.floor(t.x);break;case oo:t.x=t.x<0?0:1;break;case Gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $c:t.y=t.y-Math.floor(t.y);break;case oo:t.y=t.y<0?0:1;break;case Gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=ix;Ii.DEFAULT_ANISOTROPY=1;class Dn{constructor(t=0,i=0,s=0,l=1){Dn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(M+1)/2,V=(_+1)/2,z=(g+x)/4,D=(v+b)/4,H=(E+S)/4;return L>C&&L>V?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=D/s):C>V?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=z/l,c=H/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=D/c,l=H/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(v-b)/N,this.z=(x-g)/N,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xS extends Rl{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Dn(0,0,t,i),this.scissorTest=!1,this.viewport=new Dn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$a,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Ii(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new gx(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends xS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class vx extends Ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends Ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=c[h+0],M=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(v!==b||m!==x||p!==M||g!==E){let S=1-d;const _=m*x+p*M+g*E+v*b,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const V=Math.sqrt(L),z=Math.atan2(V,_*N);S=Math.sin(S*z)/V,d=Math.sin(d*z)/V}const C=d*N;if(m=m*S+x*C,p=p*S+M*C,g=g*S+E*C,v=v*S+b*C,S===1-d){const V=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=V,p*=V,g*=V,v*=V}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],x=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+g*v+m*M-p*x,t[i+1]=m*E+g*x+p*v-d*M,t[i+2]=p*E+g*M+d*x-m*v,t[i+3]=g*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"YZX":this._x=x*g*v+p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v-x*M*E;break;case"XZY":this._x=x*g*v-p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,i=0,s=0){F.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($v.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($v.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return $d.copy(this).projectOnVector(t),this.sub($d)}reflect(t){return this.sub($d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new F,$v=new Dl;class Bs{constructor(t=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(za.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(za.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=za.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,za):za.fromBufferAttribute(c,h),za.applyMatrix4(t.matrixWorld),this.expandByPoint(za);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hf.copy(s.boundingBox)),hf.applyMatrix4(t.matrixWorld),this.union(hf)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,za),za.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ic),df.subVectors(this.max,Ic),el.subVectors(t.a,Ic),nl.subVectors(t.b,Ic),il.subVectors(t.c,Ic),xr.subVectors(nl,el),yr.subVectors(il,nl),Qr.subVectors(el,il);let i=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Qr.z,Qr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Qr.z,0,-Qr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Qr.y,Qr.x,0];return!tp(i,el,nl,il,df)||(i=[1,0,0,0,1,0,0,0,1],!tp(i,el,nl,il,df))?!1:(pf.crossVectors(xr,yr),i=[pf.x,pf.y,pf.z],tp(i,el,nl,il,df))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,za).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(za).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ws=[new F,new F,new F,new F,new F,new F,new F,new F],za=new F,hf=new Bs,el=new F,nl=new F,il=new F,xr=new F,yr=new F,Qr=new F,Ic=new F,df=new F,pf=new F,Jr=new F;function tp(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Jr.fromArray(o,c);const d=l.x*Math.abs(Jr.x)+l.y*Math.abs(Jr.y)+l.z*Math.abs(Jr.z),m=t.dot(Jr),p=i.dot(Jr),g=s.dot(Jr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const MS=new Bs,Bc=new F,ep=new F;class ho{constructor(t=new F,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):MS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bc.subVectors(t,this.center);const i=Bc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bc.copy(t.center).add(ep)),this.expandByPoint(Bc.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rs=new F,np=new F,mf=new F,Mr=new F,ip=new F,gf=new F,ap=new F;class eh{constructor(t=new F,i=new F(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Rs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Rs.copy(this.origin).addScaledVector(this.direction,i),Rs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){np.copy(t).add(i).multiplyScalar(.5),mf.copy(i).sub(t).normalize(),Mr.copy(this.origin).sub(np);const c=t.distanceTo(i)*.5,h=-this.direction.dot(mf),d=Mr.dot(this.direction),m=-Mr.dot(mf),p=Mr.lengthSq(),g=Math.abs(1-h*h);let v,x,M,E;if(g>0)if(v=h*m-d,x=h*d-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const b=1/g;v*=b,x*=b,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(np).addScaledVector(mf,x),M}intersectSphere(t,i){Rs.subVectors(t.center,this.origin);const s=Rs.dot(this.direction),l=Rs.dot(Rs)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Rs)!==null}intersectTriangle(t,i,s,l,c){ip.subVectors(i,t),gf.subVectors(s,t),ap.crossVectors(ip,gf);let h=this.direction.dot(ap),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Mr.subVectors(this.origin,t);const m=d*this.direction.dot(gf.crossVectors(Mr,gf));if(m<0)return null;const p=d*this.direction.dot(ip.cross(Mr));if(p<0||m+p>h)return null;const g=-d*Mr.dot(ap);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,h,d,m,p,g,v,x,M,E,b,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,v,x,M,E,b,S)}set(t,i,s,l,c,h,d,m,p,g,v,x,M,E,b,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=E,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/al.setFromMatrixColumn(t,0).length(),c=1/al.setFromMatrixColumn(t,1).length(),h=1/al.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x+b*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=b+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x-b*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+b,i[1]=m*v,i[5]=b*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-x*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=x-b*v}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+b,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SS,t,ES)}lookAt(t,i,s){const l=this.elements;return oa.subVectors(t,i),oa.lengthSq()===0&&(oa.z=1),oa.normalize(),Sr.crossVectors(s,oa),Sr.lengthSq()===0&&(Math.abs(s.z)===1?oa.x+=1e-4:oa.z+=1e-4,oa.normalize(),Sr.crossVectors(s,oa)),Sr.normalize(),vf.crossVectors(oa,Sr),l[0]=Sr.x,l[4]=vf.x,l[8]=oa.x,l[1]=Sr.y,l[5]=vf.y,l[9]=oa.y,l[2]=Sr.z,l[6]=vf.z,l[10]=oa.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],E=s[2],b=s[6],S=s[10],_=s[14],N=s[3],L=s[7],C=s[11],V=s[15],z=l[0],D=l[4],H=l[8],U=l[12],T=l[1],I=l[5],it=l[9],tt=l[13],ht=l[2],mt=l[6],B=l[10],J=l[14],Q=l[3],St=l[7],Ut=l[11],P=l[15];return c[0]=h*z+d*T+m*ht+p*Q,c[4]=h*D+d*I+m*mt+p*St,c[8]=h*H+d*it+m*B+p*Ut,c[12]=h*U+d*tt+m*J+p*P,c[1]=g*z+v*T+x*ht+M*Q,c[5]=g*D+v*I+x*mt+M*St,c[9]=g*H+v*it+x*B+M*Ut,c[13]=g*U+v*tt+x*J+M*P,c[2]=E*z+b*T+S*ht+_*Q,c[6]=E*D+b*I+S*mt+_*St,c[10]=E*H+b*it+S*B+_*Ut,c[14]=E*U+b*tt+S*J+_*P,c[3]=N*z+L*T+C*ht+V*Q,c[7]=N*D+L*I+C*mt+V*St,c[11]=N*H+L*it+C*B+V*Ut,c[15]=N*U+L*tt+C*J+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],E=t[3],b=t[7],S=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*d*x+s*p*x+l*d*M-s*m*M)+b*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*g-c*m*g)+S*(+i*p*v-i*d*M-c*h*v+s*h*M+c*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],E=t[12],b=t[13],S=t[14],_=t[15],N=v*S*p-b*x*p+b*m*M-d*S*M-v*m*_+d*x*_,L=E*x*p-g*S*p-E*m*M+h*S*M+g*m*_-h*x*_,C=g*b*p-E*v*p+E*d*M-h*b*M-g*d*_+h*v*_,V=E*v*m-g*b*m-E*d*x+h*b*x+g*d*S-h*v*S,z=i*N+s*L+l*C+c*V;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/z;return t[0]=N*D,t[1]=(b*x*c-v*S*c-b*l*M+s*S*M+v*l*_-s*x*_)*D,t[2]=(d*S*c-b*m*c+b*l*p-s*S*p-d*l*_+s*m*_)*D,t[3]=(v*m*c-d*x*c-v*l*p+s*x*p+d*l*M-s*m*M)*D,t[4]=L*D,t[5]=(g*S*c-E*x*c+E*l*M-i*S*M-g*l*_+i*x*_)*D,t[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*_-i*m*_)*D,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*D,t[8]=C*D,t[9]=(E*v*c-g*b*c-E*s*M+i*b*M+g*s*_-i*v*_)*D,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*_+i*d*_)*D,t[11]=(g*d*c-h*v*c-g*s*p+i*v*p+h*s*M-i*d*M)*D,t[12]=V*D,t[13]=(g*b*l-E*v*l+E*s*x-i*b*x-g*s*S+i*v*S)*D,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*S-i*d*S)*D,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*D,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,M=c*g,E=c*v,b=h*g,S=h*v,_=d*v,N=m*p,L=m*g,C=m*v,V=s.x,z=s.y,D=s.z;return l[0]=(1-(b+_))*V,l[1]=(M+C)*V,l[2]=(E-L)*V,l[3]=0,l[4]=(M-C)*z,l[5]=(1-(x+_))*z,l[6]=(S+N)*z,l[7]=0,l[8]=(E+L)*D,l[9]=(S-N)*D,l[10]=(1-(x+b))*D,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=al.set(l[0],l[1],l[2]).length();const h=al.set(l[4],l[5],l[6]).length(),d=al.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Pa.copy(this);const p=1/c,g=1/h,v=1/d;return Pa.elements[0]*=p,Pa.elements[1]*=p,Pa.elements[2]*=p,Pa.elements[4]*=g,Pa.elements[5]*=g,Pa.elements[6]*=g,Pa.elements[8]*=v,Pa.elements[9]*=v,Pa.elements[10]*=v,i.setFromRotationMatrix(Pa),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=zs){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===zs)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Wf)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=zs){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(h-c),x=(i+t)*p,M=(s+l)*g;let E,b;if(d===zs)E=(h+c)*v,b=-2*v;else if(d===Wf)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const al=new F,Pa=new en,SS=new F(0,0,0),ES=new F(1,1,1),Sr=new F,vf=new F,oa=new F,t_=new en,e_=new Dl;class es{constructor(t=0,i=0,s=0,l=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return t_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return e_.setFromEuler(this),this.setFromQuaternion(e_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TS=0;const n_=new F,sl=new Dl,Cs=new en,_f=new F,Fc=new F,bS=new F,AS=new Dl,i_=new F(1,0,0),a_=new F(0,1,0),s_=new F(0,0,1),r_={type:"added"},wS={type:"removed"},rl={type:"childadded",child:null},sp={type:"childremoved",child:null};class yn extends Rl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new F,i=new es,s=new Dl,l=new F(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new Te}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return sl.setFromAxisAngle(t,i),this.quaternion.multiply(sl),this}rotateOnWorldAxis(t,i){return sl.setFromAxisAngle(t,i),this.quaternion.premultiply(sl),this}rotateX(t){return this.rotateOnAxis(i_,t)}rotateY(t){return this.rotateOnAxis(a_,t)}rotateZ(t){return this.rotateOnAxis(s_,t)}translateOnAxis(t,i){return n_.copy(t).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(i_,t)}translateY(t){return this.translateOnAxis(a_,t)}translateZ(t){return this.translateOnAxis(s_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_f.copy(t):_f.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(Fc,_f,this.up):Cs.lookAt(_f,Fc,this.up),this.quaternion.setFromRotationMatrix(Cs),l&&(Cs.extractRotation(l.matrixWorld),sl.setFromRotationMatrix(Cs),this.quaternion.premultiply(sl.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r_),rl.child=t,this.dispatchEvent(rl),rl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wS),sp.child=t,this.dispatchEvent(sp),sp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r_),rl.child=t,this.dispatchEvent(rl),rl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fc,t,bS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fc,AS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new F(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ia=new F,Ds=new F,rp=new F,Us=new F,ol=new F,ll=new F,o_=new F,op=new F,lp=new F,cp=new F,up=new Dn,fp=new Dn,hp=new Dn;class Ha{constructor(t=new F,i=new F,s=new F){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ia.subVectors(t,i),l.cross(Ia);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ia.subVectors(l,i),Ds.subVectors(s,i),rp.subVectors(t,i);const h=Ia.dot(Ia),d=Ia.dot(Ds),m=Ia.dot(rp),p=Ds.dot(Ds),g=Ds.dot(rp),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,E=(h*g-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,Us)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Us.x),m.addScaledVector(h,Us.y),m.addScaledVector(d,Us.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return up.setScalar(0),fp.setScalar(0),hp.setScalar(0),up.fromBufferAttribute(t,i),fp.fromBufferAttribute(t,s),hp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(up,c.x),h.addScaledVector(fp,c.y),h.addScaledVector(hp,c.z),h}static isFrontFacing(t,i,s,l){return Ia.subVectors(s,i),Ds.subVectors(t,i),Ia.cross(Ds).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ia.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Ia.cross(Ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ha.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ha.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ha.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ha.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ha.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;ol.subVectors(l,s),ll.subVectors(c,s),op.subVectors(t,s);const m=ol.dot(op),p=ll.dot(op);if(m<=0&&p<=0)return i.copy(s);lp.subVectors(t,l);const g=ol.dot(lp),v=ll.dot(lp);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(ol,h);cp.subVectors(t,c);const M=ol.dot(cp),E=ll.dot(cp);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(ll,d);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return o_.subVectors(c,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(o_,d);const _=1/(S+b+x);return h=b*_,d=x*_,i.copy(s).addScaledVector(ol,h).addScaledVector(ll,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},xf={h:0,s:0,l:0};function dp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ye.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ye.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ye.workingColorSpace){if(t=wm(t,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=dp(h,c,t+1/3),this.g=dp(h,c,t),this.b=dp(h,c,t-1/3)}return Ye.toWorkingColorSpace(this,l),this}setStyle(t,i=Zi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Zi){const s=_x[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zi){return Ye.fromWorkingColorSpace(Mi.copy(this),t),Math.round(Ce(Mi.r*255,0,255))*65536+Math.round(Ce(Mi.g*255,0,255))*256+Math.round(Ce(Mi.b*255,0,255))}getHexString(t=Zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mi.copy(this),i);const s=Mi.r,l=Mi.g,c=Mi.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mi.copy(this),i),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=Zi){Ye.fromWorkingColorSpace(Mi.copy(this),t);const i=Mi.r,s=Mi.g,l=Mi.b;return t!==Zi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Er),this.setHSL(Er.h+t,Er.s+i,Er.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Er),t.getHSL(xf);const s=jc(Er.h,xf.h,i),l=jc(Er.s,xf.s,i),c=jc(Er.l,xf.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new xe;xe.NAMES=_x;let RS=0;class po extends Rl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=_l,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dp,this.blendDst=Up,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_l&&(s.blending=this.blending),this.side!==Rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dp&&(s.blendSrc=this.blendSrc),this.blendDst!==Up&&(s.blendDst=this.blendDst),this.blendEquation!==so&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ml&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(s.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ba extends po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jn=new F,yf=new jt;class Aa{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Yv,this.updateRanges=[],this.gpuType=ts,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yf.fromBufferAttribute(this,i),yf.applyMatrix3(t),this.setXY(i,yf.x,yf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.applyMatrix3(t),this.setXYZ(i,jn.x,jn.y,jn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.applyMatrix4(t),this.setXYZ(i,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.applyNormalMatrix(t),this.setXYZ(i,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.transformDirection(t),this.setXYZ(i,jn.x,jn.y,jn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=pl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Oi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=pl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Oi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=pl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Oi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=pl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Oi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=pl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Oi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Oi(i,this.array),s=Oi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Oi(i,this.array),s=Oi(s,this.array),l=Oi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Oi(i,this.array),s=Oi(s,this.array),l=Oi(l,this.array),c=Oi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yv&&(t.usage=this.usage),t}}class xx extends Aa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class yx extends Aa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Xe extends Aa{constructor(t,i,s){super(new Float32Array(t),i,s)}}let CS=0;const Sa=new en,pp=new yn,cl=new F,la=new Bs,Hc=new Bs,ri=new F;class Zn extends Rl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?yx:xx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Te().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sa.makeRotationFromQuaternion(t),this.applyMatrix4(Sa),this}rotateX(t){return Sa.makeRotationX(t),this.applyMatrix4(Sa),this}rotateY(t){return Sa.makeRotationY(t),this.applyMatrix4(Sa),this}rotateZ(t){return Sa.makeRotationZ(t),this.applyMatrix4(Sa),this}translate(t,i,s){return Sa.makeTranslation(t,i,s),this.applyMatrix4(Sa),this}scale(t,i,s){return Sa.makeScale(t,i,s),this.applyMatrix4(Sa),this}lookAt(t){return pp.lookAt(t),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cl).negate(),this.translate(cl.x,cl.y,cl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xe(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];la.setFromBufferAttribute(c),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,la.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,la.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(la.min),this.boundingBox.expandByPoint(la.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const s=this.boundingSphere.center;if(la.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Hc.setFromBufferAttribute(d),this.morphTargetsRelative?(ri.addVectors(la.min,Hc.min),la.expandByPoint(ri),ri.addVectors(la.max,Hc.max),la.expandByPoint(ri)):(la.expandByPoint(Hc.min),la.expandByPoint(Hc.max))}la.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)ri.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(ri));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)ri.fromBufferAttribute(d,p),m&&(cl.fromBufferAttribute(t,p),ri.add(cl)),l=Math.max(l,s.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Aa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let H=0;H<s.count;H++)d[H]=new F,m[H]=new F;const p=new F,g=new F,v=new F,x=new jt,M=new jt,E=new jt,b=new F,S=new F;function _(H,U,T){p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,U),v.fromBufferAttribute(s,T),x.fromBufferAttribute(c,H),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,T),g.sub(p),v.sub(p),M.sub(x),E.sub(x);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(I),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(I),d[H].add(b),d[U].add(b),d[T].add(b),m[H].add(S),m[U].add(S),m[T].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let H=0,U=N.length;H<U;++H){const T=N[H],I=T.start,it=T.count;for(let tt=I,ht=I+it;tt<ht;tt+=3)_(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const L=new F,C=new F,V=new F,z=new F;function D(H){V.fromBufferAttribute(l,H),z.copy(V);const U=d[H];L.copy(U),L.sub(V.multiplyScalar(V.dot(U))).normalize(),C.crossVectors(z,U);const I=C.dot(m[H])<0?-1:1;h.setXYZW(H,L.x,L.y,L.z,I)}for(let H=0,U=N.length;H<U;++H){const T=N[H],I=T.start,it=T.count;for(let tt=I,ht=I+it;tt<ht;tt+=3)D(t.getX(tt+0)),D(t.getX(tt+1)),D(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Aa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new F,c=new F,h=new F,d=new F,m=new F,p=new F,g=new F,v=new F;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),b=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ri.fromBufferAttribute(t,i),ri.normalize(),t.setXYZ(i,ri.x,ri.y,ri.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*g;for(let _=0;_<g;_++)x[E++]=p[M++]}return new Aa(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new en,$r=new eh,Mf=new ho,c_=new F,Sf=new F,Ef=new F,Tf=new F,mp=new F,bf=new F,u_=new F,Af=new F;class ee extends yn{constructor(t=new Zn,i=new Ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){bf.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(mp.fromBufferAttribute(v,t),h?bf.addScaledVector(mp,g):bf.addScaledVector(mp.sub(i),g))}i.add(bf)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mf.copy(s.boundingSphere),Mf.applyMatrix4(c),$r.copy(t.ray).recast(t.near),!(Mf.containsPoint($r.origin)===!1&&($r.intersectSphere(Mf,c_)===null||$r.origin.distanceToSquared(c_)>(t.far-t.near)**2))&&(l_.copy(c).invert(),$r.copy(t.ray).applyMatrix4(l_),!(s.boundingBox!==null&&$r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,$r)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const S=x[E],_=h[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,V=L;C<V;C+=3){const z=d.getX(C),D=d.getX(C+1),H=d.getX(C+2);l=wf(this,_,t,s,p,g,v,z,D,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const N=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);l=wf(this,h,t,s,p,g,v,N,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const S=x[E],_=h[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,V=L;C<V;C+=3){const z=C,D=C+1,H=C+2;l=wf(this,_,t,s,p,g,v,z,D,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const N=S,L=S+1,C=S+2;l=wf(this,h,t,s,p,g,v,N,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function DS(o,t,i,s,l,c,h,d){let m;if(t.side===Pi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Rr,d),m===null)return null;Af.copy(d),Af.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Af);return p<i.near||p>i.far?null:{distance:p,point:Af.clone(),object:o}}function wf(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Sf),o.getVertexPosition(m,Ef),o.getVertexPosition(p,Tf);const g=DS(o,t,i,s,Sf,Ef,Tf,u_);if(g){const v=new F;Ha.getBarycoord(u_,Sf,Ef,Tf,v),l&&(g.uv=Ha.getInterpolatedAttribute(l,d,m,p,v,new jt)),c&&(g.uv1=Ha.getInterpolatedAttribute(c,d,m,p,v,new jt)),h&&(g.normal=Ha.getInterpolatedAttribute(h,d,m,p,v,new F),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new F,materialIndex:0};Ha.getNormal(Sf,Ef,Tf,x.normal),g.face=x,g.barycoord=v}return g}class Cn extends Zn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(v,2));function E(b,S,_,N,L,C,V,z,D,H,U){const T=C/D,I=V/H,it=C/2,tt=V/2,ht=z/2,mt=D+1,B=H+1;let J=0,Q=0;const St=new F;for(let Ut=0;Ut<B;Ut++){const P=Ut*I-tt;for(let st=0;st<mt;st++){const bt=st*T-it;St[b]=bt*N,St[S]=P*L,St[_]=ht,p.push(St.x,St.y,St.z),St[b]=0,St[S]=0,St[_]=z>0?1:-1,g.push(St.x,St.y,St.z),v.push(st/D),v.push(1-Ut/H),J+=1}}for(let Ut=0;Ut<H;Ut++)for(let P=0;P<D;P++){const st=x+P+mt*Ut,bt=x+P+mt*(Ut+1),Z=x+(P+1)+mt*(Ut+1),ft=x+(P+1)+mt*Ut;m.push(st,bt,ft),m.push(bt,Z,ft),Q+=6}d.addGroup(M,Q,U),M+=Q,x+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wl(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zi(o){const t={};for(let i=0;i<o.length;i++){const s=wl(o[i]);for(const l in s)t[l]=s[l]}return t}function US(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Mx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}const LS={clone:wl,merge:zi};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fs extends po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wl(t.uniforms),this.uniformsGroups=US(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Sx extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=zs}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new F,f_=new jt,h_=new jt;class Ta extends Sx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=eu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eu*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z)}getViewSize(t,i){return this.getViewBounds(t,f_,h_),i.subVectors(h_,f_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ul=-90,fl=1;class zS extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ta(ul,fl,t,i);l.layers=this.layers,this.add(l);const c=new Ta(ul,fl,t,i);c.layers=this.layers,this.add(c);const h=new Ta(ul,fl,t,i);h.layers=this.layers,this.add(h);const d=new Ta(ul,fl,t,i);d.layers=this.layers,this.add(d);const m=new Ta(ul,fl,t,i);m.layers=this.layers,this.add(m);const p=new Ta(ul,fl,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===zs)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Ex extends Ii{constructor(t,i,s,l,c,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Sl,super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PS extends fo{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Ex(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$a}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cn(5,5,5),c=new Fs({name:"CubemapFromEquirect",uniforms:wl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pi,blending:Ar});c.uniforms.tEquirect.value=i;const h=new ee(l,c),d=i.minFilter;return i.minFilter===lo&&(i.minFilter=$a),new zS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Zc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=s}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class IS extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Tx extends Ii{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ki,g=Ki,v,x){super(null,h,d,m,p,g,l,c,v,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d_ extends Aa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hl=new en,p_=new en,Rf=[],m_=new Bs,BS=new en,Gc=new ee,Vc=new ho;class ji extends ee{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new d_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,BS)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,hl),m_.copy(t.boundingBox).applyMatrix4(hl),this.boundingBox.union(m_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,hl),Vc.copy(t.boundingSphere).applyMatrix4(hl),this.boundingSphere.union(Vc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Gc.geometry=this.geometry,Gc.material=this.material,Gc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(s),t.ray.intersectsSphere(Vc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,hl),p_.multiplyMatrices(s,hl),Gc.matrixWorld=p_,Gc.raycast(t,Rf);for(let h=0,d=Rf.length;h<d;h++){const m=Rf[h];m.instanceId=c,m.object=this,i.push(m)}Rf.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new d_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Tx(new Float32Array(l*this.count),l,this.count,Em,ts));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const gp=new F,FS=new F,HS=new Te;class io{constructor(t=new F(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gp.subVectors(s,i).cross(FS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HS.getNormalMatrix(t),l=this.coplanarPoint(gp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new ho,Cf=new F;class Cm{constructor(t=new io,i=new io,s=new io,l=new io,c=new io,h=new io){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=zs){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],b=l[10],S=l[11],_=l[12],N=l[13],L=l[14],C=l[15];if(s[0].setComponents(m-c,x-p,S-M,C-_).normalize(),s[1].setComponents(m+c,x+p,S+M,C+_).normalize(),s[2].setComponents(m+h,x+g,S+E,C+N).normalize(),s[3].setComponents(m-h,x-g,S-E,C-N).normalize(),s[4].setComponents(m-d,x-v,S-b,C-L).normalize(),i===zs)s[5].setComponents(m+d,x+v,S+b,C+L).normalize();else if(i===Wf)s[5].setComponents(d,v,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(to)}intersectsSprite(t){return to.center.set(0,0,0),to.radius=.7071067811865476,to.applyMatrix4(t.matrixWorld),this.intersectsSphere(to)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cf.x=l.normal.x>0?t.max.x:t.min.x,Cf.y=l.normal.y>0?t.max.y:t.min.y,Cf.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bx extends po{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yf=new F,jf=new F,g_=new en,kc=new eh,Df=new ho,vp=new F,v_=new F;class GS extends yn{constructor(t=new Zn,i=new bx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Yf.fromBufferAttribute(i,l-1),jf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Yf.distanceTo(jf);t.setAttribute("lineDistance",new Xe(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Df.copy(s.boundingSphere),Df.applyMatrix4(l),Df.radius+=c,t.ray.intersectsSphere(Df)===!1)return;g_.copy(l).invert(),kc.copy(t.ray).applyMatrix4(g_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=g.getX(b),N=g.getX(b+1),L=Uf(this,t,kc,m,_,N);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(M),_=Uf(this,t,kc,m,b,S);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=Uf(this,t,kc,m,b,b+1);_&&i.push(_)}if(this.isLineLoop){const b=Uf(this,t,kc,m,E-1,M);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uf(o,t,i,s,l,c){const h=o.geometry.attributes.position;if(Yf.fromBufferAttribute(h,l),jf.fromBufferAttribute(h,c),i.distanceSqToSegment(Yf,jf,vp,v_)>s)return;vp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(vp);if(!(m<t.near||m>t.far))return{distance:m,point:v_.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}class pm extends po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const __=new en,mm=new eh,Lf=new ho,Nf=new F;class x_ extends yn{constructor(t=new Zn,i=new pm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lf.copy(s.boundingSphere),Lf.applyMatrix4(l),Lf.radius+=c,t.ray.intersectsSphere(Lf)===!1)return;__.copy(l).invert(),mm.copy(t.ray).applyMatrix4(__);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,b=M;E<b;E++){const S=p.getX(E);Nf.fromBufferAttribute(v,S),y_(Nf,S,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=x,b=M;E<b;E++)Nf.fromBufferAttribute(v,E),y_(Nf,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function y_(o,t,i,s,l,c,h){const d=mm.distanceSqToPoint(o);if(d<i){const m=new F;mm.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class co extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ax extends Ii{constructor(t,i,s,l,c,h,d,m,p,g=xl){if(g!==xl&&g!==bl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===xl&&(s=uo),s===void 0&&g===bl&&(s=Tl),super(null,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ki,this.minFilter=m!==void 0?m:Ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ns{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const g=s[l],x=s[l+1]-g,M=(h-g)/x;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new jt:new F);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i){const s=new F,l=[],c=[],h=[],d=new F,m=new en;for(let M=0;M<=t;M++){const E=M/t;l[M]=this.getTangentAt(E,new F)}c[0]=new F,h[0]=new F;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ce(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,E))}h[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(Ce(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],M*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dm extends ns{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new jt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=m-this.aX,M=p-this.aY;m=x*g-M*v+this.aX,p=x*v+M*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class VS extends Dm{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Um(){let o=0,t=0,i=0,s=0;function l(c,h,d,m){o=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,g,v){let x=(h-c)/p-(d-c)/(p+g)+(d-h)/g,M=(d-h)/g-(m-h)/(g+v)+(m-d)/v;x*=g,M*=g,l(h,d,x,M)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+s*d}}}const Of=new F,_p=new Um,xp=new Um,yp=new Um;class kS extends ns{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new F){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Of.subVectors(l[0],l[1]).add(l[0]),p=Of);const v=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Of.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Of),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),M),b=Math.pow(v.distanceToSquared(x),M),S=Math.pow(x.distanceToSquared(g),M);b<1e-4&&(b=1),E<1e-4&&(E=b),S<1e-4&&(S=b),_p.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,E,b,S),xp.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,E,b,S),yp.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,E,b,S)}else this.curveType==="catmullrom"&&(_p.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),xp.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),yp.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return s.set(_p.calc(m),xp.calc(m),yp.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new F().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function M_(o,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=o*o,m=o*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*o+i}function XS(o,t){const i=1-o;return i*i*t}function WS(o,t){return 2*(1-o)*o*t}function qS(o,t){return o*o*t}function Kc(o,t,i,s){return XS(o,t)+WS(o,i)+qS(o,s)}function YS(o,t){const i=1-o;return i*i*i*t}function jS(o,t){const i=1-o;return 3*i*i*o*t}function ZS(o,t){return 3*(1-o)*o*o*t}function KS(o,t){return o*o*o*t}function Qc(o,t,i,s,l){return YS(o,t)+jS(o,i)+ZS(o,s)+KS(o,l)}class wx extends ns{constructor(t=new jt,i=new jt,s=new jt,l=new jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new jt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Qc(t,l.x,c.x,h.x,d.x),Qc(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class QS extends ns{constructor(t=new F,i=new F,s=new F,l=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Qc(t,l.x,c.x,h.x,d.x),Qc(t,l.y,c.y,h.y,d.y),Qc(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rx extends ns{constructor(t=new jt,i=new jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new jt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new jt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class JS extends ns{constructor(t=new F,i=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new F){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new F){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cx extends ns{constructor(t=new jt,i=new jt,s=new jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new jt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Kc(t,l.x,c.x,h.x),Kc(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $S extends ns{constructor(t=new F,i=new F,s=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Kc(t,l.x,c.x,h.x),Kc(t,l.y,c.y,h.y),Kc(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dx extends ns{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new jt){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],g=l[h>l.length-2?l.length-1:h+1],v=l[h>l.length-3?l.length-1:h+2];return s.set(M_(d,m.x,p.x,g.x,v.x),M_(d,m.y,p.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new jt().fromArray(l))}return this}}var S_=Object.freeze({__proto__:null,ArcCurve:VS,CatmullRomCurve3:kS,CubicBezierCurve:wx,CubicBezierCurve3:QS,EllipseCurve:Dm,LineCurve:Rx,LineCurve3:JS,QuadraticBezierCurve:Cx,QuadraticBezierCurve3:$S,SplineCurve:Dx});class t1 extends ns{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new S_[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const h=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-h/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,m=h.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(i.push(g),s=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new S_[l.type]().fromJSON(l))}return this}}class e1 extends t1{constructor(t){super(),this.type="Path",this.currentPoint=new jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new Rx(this.currentPoint.clone(),new jt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new Cx(this.currentPoint.clone(),new jt(t,i),new jt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,h){const d=new wx(this.currentPoint.clone(),new jt(t,i),new jt(s,l),new jt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new Dx(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,h){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,c,h),this}absarc(t,i,s,l,c,h){return this.absellipse(t,i,s,s,l,c,h),this}ellipse(t,i,s,l,c,h,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,i+g,s,l,c,h,d,m),this}absellipse(t,i,s,l,c,h,d,m){const p=new Dm(t,i,s,l,c,h,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lm extends Zn{constructor(t=[new jt(0,-.5),new jt(.5,0),new jt(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=Ce(l,0,Math.PI*2);const c=[],h=[],d=[],m=[],p=[],g=1/i,v=new F,x=new jt,M=new F,E=new F,b=new F;let S=0,_=0;for(let N=0;N<=t.length-1;N++)switch(N){case 0:S=t[N+1].x-t[N].x,_=t[N+1].y-t[N].y,M.x=_*1,M.y=-S,M.z=_*0,b.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case t.length-1:m.push(b.x,b.y,b.z);break;default:S=t[N+1].x-t[N].x,_=t[N+1].y-t[N].y,M.x=_*1,M.y=-S,M.z=_*0,E.copy(M),M.x+=b.x,M.y+=b.y,M.z+=b.z,M.normalize(),m.push(M.x,M.y,M.z),b.copy(E)}for(let N=0;N<=i;N++){const L=s+N*g*l,C=Math.sin(L),V=Math.cos(L);for(let z=0;z<=t.length-1;z++){v.x=t[z].x*C,v.y=t[z].y,v.z=t[z].x*V,h.push(v.x,v.y,v.z),x.x=N/i,x.y=z/(t.length-1),d.push(x.x,x.y);const D=m[3*z+0]*C,H=m[3*z+1],U=m[3*z+0]*V;p.push(D,H,U)}}for(let N=0;N<i;N++)for(let L=0;L<t.length-1;L++){const C=L+N*t.length,V=C,z=C+t.length,D=C+t.length+1,H=C+1;c.push(V,z,H),c.push(D,H,z)}this.setIndex(c),this.setAttribute("position",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2)),this.setAttribute("normal",new Xe(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lm(t.points,t.segments,t.phiStart,t.phiLength)}}class Zf extends Lm{constructor(t=1,i=1,s=4,l=8){const c=new e1;c.absarc(0,-i/2,t,Math.PI*1.5,0),c.absarc(0,i/2,t,0,Math.PI*.5),super(c.getPoints(s),l),this.type="CapsuleGeometry",this.parameters={radius:t,length:i,capSegments:s,radialSegments:l}}static fromJSON(t){return new Zf(t.radius,t.length,t.capSegments,t.radialSegments)}}class Kf extends Zn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],m=[],p=new F,g=new jt;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let v=0,x=3;v<=i;v++,x+=3){const M=s+v/i*l;p.x=t*Math.cos(M),p.y=t*Math.sin(M),h.push(p.x,p.y,p.z),d.push(0,0,1),g.x=(h[x]/t+1)/2,g.y=(h[x+1]/t+1)/2,m.push(g.x,g.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ti extends Zn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],M=[];let E=0;const b=[],S=s/2;let _=0;N(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(M,2));function N(){const C=new F,V=new F;let z=0;const D=(i-t)/s;for(let H=0;H<=c;H++){const U=[],T=H/c,I=T*(i-t)+t;for(let it=0;it<=l;it++){const tt=it/l,ht=tt*m+d,mt=Math.sin(ht),B=Math.cos(ht);V.x=I*mt,V.y=-T*s+S,V.z=I*B,v.push(V.x,V.y,V.z),C.set(mt,D,B).normalize(),x.push(C.x,C.y,C.z),M.push(tt,1-T),U.push(E++)}b.push(U)}for(let H=0;H<l;H++)for(let U=0;U<c;U++){const T=b[U][H],I=b[U+1][H],it=b[U+1][H+1],tt=b[U][H+1];(t>0||U!==0)&&(g.push(T,I,tt),z+=3),(i>0||U!==c-1)&&(g.push(I,it,tt),z+=3)}p.addGroup(_,z,0),_+=z}function L(C){const V=E,z=new jt,D=new F;let H=0;const U=C===!0?t:i,T=C===!0?1:-1;for(let it=1;it<=l;it++)v.push(0,S*T,0),x.push(0,T,0),M.push(.5,.5),E++;const I=E;for(let it=0;it<=l;it++){const ht=it/l*m+d,mt=Math.cos(ht),B=Math.sin(ht);D.x=U*B,D.y=S*T,D.z=U*mt,v.push(D.x,D.y,D.z),x.push(0,T,0),z.x=mt*.5+.5,z.y=B*.5*T+.5,M.push(z.x,z.y),E++}for(let it=0;it<l;it++){const tt=V+it,ht=I+it;C===!0?g.push(ht,ht+1,tt):g.push(ht+1,ht,tt),H+=3}p.addGroup(_,H,C===!0?1:2),_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nh extends Zn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),g(),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(c.slice(),3)),this.setAttribute("uv",new Xe(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const L=new F,C=new F,V=new F;for(let z=0;z<i.length;z+=3)M(i[z+0],L),M(i[z+1],C),M(i[z+2],V),m(L,C,V,N)}function m(N,L,C,V){const z=V+1,D=[];for(let H=0;H<=z;H++){D[H]=[];const U=N.clone().lerp(C,H/z),T=L.clone().lerp(C,H/z),I=z-H;for(let it=0;it<=I;it++)it===0&&H===z?D[H][it]=U:D[H][it]=U.clone().lerp(T,it/I)}for(let H=0;H<z;H++)for(let U=0;U<2*(z-H)-1;U++){const T=Math.floor(U/2);U%2===0?(x(D[H][T+1]),x(D[H+1][T]),x(D[H][T])):(x(D[H][T+1]),x(D[H+1][T+1]),x(D[H+1][T]))}}function p(N){const L=new F;for(let C=0;C<c.length;C+=3)L.x=c[C+0],L.y=c[C+1],L.z=c[C+2],L.normalize().multiplyScalar(N),c[C+0]=L.x,c[C+1]=L.y,c[C+2]=L.z}function g(){const N=new F;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const C=S(N)/2/Math.PI+.5,V=_(N)/Math.PI+.5;h.push(C,1-V)}E(),v()}function v(){for(let N=0;N<h.length;N+=6){const L=h[N+0],C=h[N+2],V=h[N+4],z=Math.max(L,C,V),D=Math.min(L,C,V);z>.9&&D<.1&&(L<.2&&(h[N+0]+=1),C<.2&&(h[N+2]+=1),V<.2&&(h[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function M(N,L){const C=N*3;L.x=t[C+0],L.y=t[C+1],L.z=t[C+2]}function E(){const N=new F,L=new F,C=new F,V=new F,z=new jt,D=new jt,H=new jt;for(let U=0,T=0;U<c.length;U+=9,T+=6){N.set(c[U+0],c[U+1],c[U+2]),L.set(c[U+3],c[U+4],c[U+5]),C.set(c[U+6],c[U+7],c[U+8]),z.set(h[T+0],h[T+1]),D.set(h[T+2],h[T+3]),H.set(h[T+4],h[T+5]),V.copy(N).add(L).add(C).divideScalar(3);const I=S(V);b(z,T+0,N,I),b(D,T+2,L,I),b(H,T+4,C,I)}}function b(N,L,C,V){V<0&&N.x===1&&(h[L]=N.x-1),C.x===0&&C.z===0&&(h[L]=V/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.vertices,t.indices,t.radius,t.details)}}class Qf extends nh{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qf(t.radius,t.detail)}}class Jc extends nh{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Jc(t.radius,t.detail)}}class Os extends Zn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],E=[],b=[],S=[];for(let _=0;_<g;_++){const N=_*x-h;for(let L=0;L<p;L++){const C=L*v-c;E.push(C,-N,0),b.push(0,0,1),S.push(L/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<d;N++){const L=N+p*_,C=N+p*(_+1),V=N+1+p*(_+1),z=N+1+p*_;M.push(L,C,z),M.push(C,V,z)}this.setIndex(M),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jf extends Zn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,M=new F,E=new jt;for(let b=0;b<=l;b++){for(let S=0;S<=s;S++){const _=c+S/s*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let b=0;b<l;b++){const S=b*(s+1);for(let _=0;_<s;_++){const N=_+S,L=N,C=N+s+1,V=N+s+2,z=N+1;d.push(L,C,z),d.push(C,V,z)}}this.setIndex(d),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(p,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ea extends Zn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new F,x=new F,M=[],E=[],b=[],S=[];for(let _=0;_<=s;_++){const N=[],L=_/s;let C=0;_===0&&h===0?C=.5/i:_===s&&m===Math.PI&&(C=-.5/i);for(let V=0;V<=i;V++){const z=V/i;v.x=-t*Math.cos(l+z*c)*Math.sin(h+L*d),v.y=t*Math.cos(h+L*d),v.z=t*Math.sin(l+z*c)*Math.sin(h+L*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),b.push(x.x,x.y,x.z),S.push(z+C,1-L),N.push(p++)}g.push(N)}for(let _=0;_<s;_++)for(let N=0;N<i;N++){const L=g[_][N+1],C=g[_][N],V=g[_+1][N],z=g[_+1][N+1];(_!==0||h>0)&&M.push(L,C,z),(_!==s-1||m<Math.PI)&&M.push(C,V,z)}this.setIndex(M),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $f extends Zn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],g=new F,v=new F,x=new F;for(let M=0;M<=s;M++)for(let E=0;E<=l;E++){const b=E/l*c,S=M/s*Math.PI*2;v.x=(t+i*Math.cos(S))*Math.cos(b),v.y=(t+i*Math.cos(S))*Math.sin(b),v.z=i*Math.sin(S),d.push(v.x,v.y,v.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),x.subVectors(v,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let E=1;E<=l;E++){const b=(l+1)*M+E-1,S=(l+1)*(M-1)+E-1,_=(l+1)*(M-1)+E,N=(l+1)*M+E;h.push(b,S,N),h.push(S,_,N)}this.setIndex(h),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $f(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nm extends Zn{constructor(t=1,i=.4,s=64,l=8,c=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:l,p:c,q:h},s=Math.floor(s),l=Math.floor(l);const d=[],m=[],p=[],g=[],v=new F,x=new F,M=new F,E=new F,b=new F,S=new F,_=new F;for(let L=0;L<=s;++L){const C=L/s*c*Math.PI*2;N(C,c,h,t,M),N(C+.01,c,h,t,E),S.subVectors(E,M),_.addVectors(E,M),b.crossVectors(S,_),_.crossVectors(b,S),b.normalize(),_.normalize();for(let V=0;V<=l;++V){const z=V/l*Math.PI*2,D=-i*Math.cos(z),H=i*Math.sin(z);v.x=M.x+(D*_.x+H*b.x),v.y=M.y+(D*_.y+H*b.y),v.z=M.z+(D*_.z+H*b.z),m.push(v.x,v.y,v.z),x.subVectors(v,M).normalize(),p.push(x.x,x.y,x.z),g.push(L/s),g.push(V/l)}}for(let L=1;L<=s;L++)for(let C=1;C<=l;C++){const V=(l+1)*(L-1)+(C-1),z=(l+1)*L+(C-1),D=(l+1)*L+C,H=(l+1)*(L-1)+C;d.push(V,z,H),d.push(z,D,H)}this.setIndex(d),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(p,3)),this.setAttribute("uv",new Xe(g,2));function N(L,C,V,z,D){const H=Math.cos(L),U=Math.sin(L),T=V/C*L,I=Math.cos(T);D.x=z*(2+I)*.5*H,D.y=z*(2+I)*U*.5,D.z=z*Math.sin(T)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nm(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class gn extends po{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dx,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xc extends gn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class n1 extends po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ux extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class a1 extends Ux{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Mp=new en,E_=new F,T_=new F;class s1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cm,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;E_.setFromMatrixPosition(t.matrixWorld),i.position.copy(E_),T_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(T_),i.updateMatrixWorld(),Mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lx extends Sx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class r1 extends s1{constructor(){super(new Lx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Ux{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new r1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class o1 extends Ta{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const b_=new en;class A_{constructor(t,i,s=0,l=1/0){this.ray=new eh(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return b_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b_),this}intersectObject(t,i=!0,s=[]){return gm(t,this,s,i),s.sort(w_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)gm(t[l],this,s,i);return s.sort(w_),s}}function w_(o,t){return o.distance-t.distance}function gm(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)gm(c[h],t,i,!0)}}function R_(o,t,i,s){const l=l1(s);switch(i){case ox:return o*t;case cx:return o*t;case ux:return o*t*2;case Em:return o*t/l.components*l.byteLength;case Tm:return o*t/l.components*l.byteLength;case fx:return o*t*2/l.components*l.byteLength;case bm:return o*t*2/l.components*l.byteLength;case lx:return o*t*3/l.components*l.byteLength;case ba:return o*t*4/l.components*l.byteLength;case Am:return o*t*4/l.components*l.byteLength;case Bf:case Ff:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Hf:case Gf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kp:case Wp:return Math.max(o,16)*Math.max(t,8)/4;case Vp:case Xp:return Math.max(o,8)*Math.max(t,8)/2;case qp:case Yp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $p:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case tm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case em:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case nm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case am:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case sm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case rm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case om:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case lm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Vf:case cm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*16;case hx:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case hm:case dm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(o){switch(o){case Is:case ax:return{byteLength:1,components:1};case tu:case sx:case nu:return{byteLength:2,components:1};case Mm:case Sm:return{byteLength:2,components:4};case uo:case ym:case ts:return{byteLength:4,components:1};case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nx(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function c1(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,v[x]=b)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const b=v[M];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z1=`vec3 transformedNormal = objectNormal;
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
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,lE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,cE=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,ST=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,bT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,wT=`#define MATCAP
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
}`,RT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,NT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,zT=`#define TOON
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
}`,PT=`#define TOON
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
}`,IT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,FT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:u1,alphahash_pars_fragment:f1,alphamap_fragment:h1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:v1,batching_pars_vertex:_1,batching_vertex:x1,begin_vertex:y1,beginnormal_vertex:M1,bsdfs:S1,iridescence_fragment:E1,bumpmap_pars_fragment:T1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:R1,color_fragment:C1,color_pars_fragment:D1,color_pars_vertex:U1,color_vertex:L1,common:N1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:z1,displacementmap_pars_vertex:P1,displacementmap_vertex:I1,emissivemap_fragment:B1,emissivemap_pars_fragment:F1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:k1,envmap_pars_fragment:X1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:nE,envmap_vertex:q1,fog_vertex:Y1,fog_pars_vertex:j1,fog_fragment:Z1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:tE,lights_pars_begin:eE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:sE,lights_phong_pars_fragment:rE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:_E,map_particle_pars_fragment:xE,metalnessmap_fragment:yE,metalnessmap_pars_fragment:ME,morphinstance_vertex:SE,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:bE,morphtarget_vertex:AE,normal_fragment_begin:wE,normal_fragment_maps:RE,normal_pars_fragment:CE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:PE,opaque_fragment:IE,packing:BE,premultiplied_alpha_fragment:FE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:jE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:tT,tonemapping_fragment:eT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:hT,cube_vert:dT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distanceRGBA_vert:vT,distanceRGBA_frag:_T,equirect_vert:xT,equirect_frag:yT,linedashed_vert:MT,linedashed_frag:ST,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:bT,meshlambert_frag:AT,meshmatcap_vert:wT,meshmatcap_frag:RT,meshnormal_vert:CT,meshnormal_frag:DT,meshphong_vert:UT,meshphong_frag:LT,meshphysical_vert:NT,meshphysical_frag:OT,meshtoon_vert:zT,meshtoon_frag:PT,points_vert:IT,points_frag:BT,shadow_vert:FT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},kt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Ja={basic:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:zi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:zi([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:zi([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:zi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:zi([kt.points,kt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:zi([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:zi([kt.common,kt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:zi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:zi([kt.sprite,kt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:zi([kt.common,kt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:zi([kt.lights,kt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ja.physical={uniforms:zi([Ja.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const zf={r:0,b:0,g:0},eo=new es,kT=new en;function XT(o,t,i,s,l,c,h){const d=new xe(0);let m=c===!0?0:1,p,g,v=null,x=0,M=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:t).get(C)),C}function b(L){let C=!1;const V=E(L);V===null?_(d,m):V&&V.isColor&&(_(V,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===th)?(g===void 0&&(g=new ee(new Cn(1,1,1),new Fs({name:"BackgroundCubeMaterial",uniforms:wl(Ja.backgroundCube.uniforms),vertexShader:Ja.backgroundCube.vertexShader,fragmentShader:Ja.backgroundCube.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),eo.copy(C.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(eo)),g.material.toneMapped=Ye.getTransfer(V.colorSpace)!==on,(v!==V||x!==V.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=V,x=V.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new ee(new Os(2,2),new Fs({name:"BackgroundMaterial",uniforms:wl(Ja.background.uniforms),vertexShader:Ja.background.vertexShader,fragmentShader:Ja.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ye.getTransfer(V.colorSpace)!==on,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=V,x=V.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,C){L.getRGB(zf,Mx(o)),s.buffers.color.setClear(zf.r,zf.g,zf.b,C,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:b,addToRenderList:S,dispose:N}}function WT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(T,I,it,tt,ht){let mt=!1;const B=v(tt,it,I);c!==B&&(c=B,p(c.object)),mt=M(T,tt,it,ht),mt&&E(T,tt,it,ht),ht!==null&&t.update(ht,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,C(T,I,it,tt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function g(T){return o.deleteVertexArray(T)}function v(T,I,it){const tt=it.wireframe===!0;let ht=s[T.id];ht===void 0&&(ht={},s[T.id]=ht);let mt=ht[I.id];mt===void 0&&(mt={},ht[I.id]=mt);let B=mt[tt];return B===void 0&&(B=x(m()),mt[tt]=B),B}function x(T){const I=[],it=[],tt=[];for(let ht=0;ht<i;ht++)I[ht]=0,it[ht]=0,tt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:it,attributeDivisors:tt,object:T,attributes:{},index:null}}function M(T,I,it,tt){const ht=c.attributes,mt=I.attributes;let B=0;const J=it.getAttributes();for(const Q in J)if(J[Q].location>=0){const Ut=ht[Q];let P=mt[Q];if(P===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(P=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(P=T.instanceColor)),Ut===void 0||Ut.attribute!==P||P&&Ut.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==tt}function E(T,I,it,tt){const ht={},mt=I.attributes;let B=0;const J=it.getAttributes();for(const Q in J)if(J[Q].location>=0){let Ut=mt[Q];Ut===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(Ut=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(Ut=T.instanceColor));const P={};P.attribute=Ut,Ut&&Ut.data&&(P.data=Ut.data),ht[Q]=P,B++}c.attributes=ht,c.attributesNum=B,c.index=tt}function b(){const T=c.newAttributes;for(let I=0,it=T.length;I<it;I++)T[I]=0}function S(T){_(T,0)}function _(T,I){const it=c.newAttributes,tt=c.enabledAttributes,ht=c.attributeDivisors;it[T]=1,tt[T]===0&&(o.enableVertexAttribArray(T),tt[T]=1),ht[T]!==I&&(o.vertexAttribDivisor(T,I),ht[T]=I)}function N(){const T=c.newAttributes,I=c.enabledAttributes;for(let it=0,tt=I.length;it<tt;it++)I[it]!==T[it]&&(o.disableVertexAttribArray(it),I[it]=0)}function L(T,I,it,tt,ht,mt,B){B===!0?o.vertexAttribIPointer(T,I,it,ht,mt):o.vertexAttribPointer(T,I,it,tt,ht,mt)}function C(T,I,it,tt){b();const ht=tt.attributes,mt=it.getAttributes(),B=I.defaultAttributeValues;for(const J in mt){const Q=mt[J];if(Q.location>=0){let St=ht[J];if(St===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(St=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(St=T.instanceColor)),St!==void 0){const Ut=St.normalized,P=St.itemSize,st=t.get(St);if(st===void 0)continue;const bt=st.buffer,Z=st.type,ft=st.bytesPerElement,yt=Z===o.INT||Z===o.UNSIGNED_INT||St.gpuType===ym;if(St.isInterleavedBufferAttribute){const Tt=St.data,Wt=Tt.stride,qt=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let pe=0;pe<Q.locationSize;pe++)_(Q.location+pe,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let pe=0;pe<Q.locationSize;pe++)S(Q.location+pe);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let pe=0;pe<Q.locationSize;pe++)L(Q.location+pe,P/Q.locationSize,Z,Ut,Wt*ft,(qt+P/Q.locationSize*pe)*ft,yt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<Q.locationSize;Tt++)_(Q.location+Tt,St.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<Q.locationSize;Tt++)S(Q.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Tt=0;Tt<Q.locationSize;Tt++)L(Q.location+Tt,P/Q.locationSize,Z,Ut,P*ft,P/Q.locationSize*Tt*ft,yt)}}else if(B!==void 0){const Ut=B[J];if(Ut!==void 0)switch(Ut.length){case 2:o.vertexAttrib2fv(Q.location,Ut);break;case 3:o.vertexAttrib3fv(Q.location,Ut);break;case 4:o.vertexAttrib4fv(Q.location,Ut);break;default:o.vertexAttrib1fv(Q.location,Ut)}}}}N()}function V(){H();for(const T in s){const I=s[T];for(const it in I){const tt=I[it];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete I[it]}delete s[T]}}function z(T){if(s[T.id]===void 0)return;const I=s[T.id];for(const it in I){const tt=I[it];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete I[it]}delete s[T.id]}function D(T){for(const I in s){const it=s[I];if(it[T.id]===void 0)continue;const tt=it[T.id];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete it[T.id]}}function H(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:U,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:S,disableUnusedAttributes:N}}function qT(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function YT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(D){return!(D!==ba&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const H=D===nu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Is&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ts&&!H)}function m(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:z}}function jT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new io,d=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const N=c?0:s,L=N*4;let C=_.clippingState||null;m.value=C,C=g(E,x,L,M);for(let V=0;V!==L;++V)C[V]=i[V];_.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const _=M+b*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,C=M;L!==b;++L,C+=4)h.copy(v[L]).applyMatrix4(N,d),h.normal.toArray(S,C),S[C+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function ZT(o){let t=new WeakMap;function i(h,d){return d===Fp?h.mapping=Sl:d===Hp&&(h.mapping=El),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fp||d===Hp)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new PS(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const vl=4,C_=[.125,.215,.35,.446,.526,.582],ro=20,Ep=new Lx,D_=new xe;let Tp=null,bp=0,Ap=0,wp=!1;const ao=(1+Math.sqrt(5))/2,dl=1/ao,U_=[new F(-ao,dl,0),new F(ao,dl,0),new F(-dl,0,ao),new F(dl,0,ao),new F(0,ao,-dl),new F(0,ao,dl),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class L_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Tp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Ap=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tp,bp,Ap),this._renderer.xr.enabled=wp,t.scissorTest=!1,Pf(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Sl||t.mapping===El?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Ap=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:$a,minFilter:$a,generateMipmaps:!1,type:nu,format:ba,colorSpace:Al,depthBuffer:!1},l=N_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KT(c)),this._blurMaterial=QT(c,t,i)}return l}_compileMaterial(t){const i=new ee(this._lodPlanes[0],t);this._renderer.compile(i,Ep)}_sceneToCubeUV(t,i,s,l){const d=new Ta(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(D_),g.toneMapping=wr,g.autoClear=!1;const M=new Ba({name:"PMREM.Background",side:Pi,depthWrite:!1,depthTest:!1}),E=new ee(new Cn,M);let b=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,b=!0):(M.color.copy(D_),b=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):N===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;Pf(l,N*L,_>2?L:0,L,L),g.setRenderTarget(l),b&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=S}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Sl||t.mapping===El;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ee(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pf(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ep)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=U_[(l-c-1)%U_.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ee(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ro-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):ro;S>ro&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ro}`);const _=[];let N=0;for(let D=0;D<ro;++D){const H=D/b,U=Math.exp(-H*H/2);_.push(U),D===0?N+=U:D<S&&(N+=2*U)}for(let D=0;D<_.length;D++)_[D]=_[D]/N;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const C=this._sizeLods[l],V=3*C*(l>L-vl?l-L+vl:0),z=4*(this._cubeSize-C);Pf(i,V,z,3*C,2*C),m.setRenderTarget(i),m.render(v,Ep)}}function KT(o){const t=[],i=[],s=[];let l=o;const c=o-vl+1+C_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vl?m=C_[h-o+vl-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,b=3,S=2,_=1,N=new Float32Array(b*E*M),L=new Float32Array(S*E*M),C=new Float32Array(_*E*M);for(let z=0;z<M;z++){const D=z%3*2/3-1,H=z>2?0:-1,U=[D,H,0,D+2/3,H,0,D+2/3,H+1,0,D,H,0,D+2/3,H+1,0,D,H+1,0];N.set(U,b*E*z),L.set(x,S*E*z);const T=[z,z,z,z,z,z];C.set(T,_*E*z)}const V=new Zn;V.setAttribute("position",new Aa(N,b)),V.setAttribute("uv",new Aa(L,S)),V.setAttribute("faceIndex",new Aa(C,_)),t.push(V),l>vl&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function N_(o,t,i){const s=new fo(o,t,i);return s.texture.mapping=th,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pf(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function QT(o,t,i){const s=new Float32Array(ro),l=new F(0,1,0);return new Fs({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Om(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function O_(){return new Fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function z_(){return new Fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Om(){return`

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
	`}function JT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Fp||m===Hp,g=m===Sl||m===El;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function $T(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ml("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function tb(o,t,i,s){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let b=0;if(M!==null){const N=M.array;b=M.version;for(let L=0,C=N.length;L<C;L+=3){const V=N[L+0],z=N[L+1],D=N[L+2];x.push(V,z,z,D,D,V)}}else if(E!==void 0){const N=E.array;b=E.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const V=L+0,z=L+1,D=L+2;x.push(V,z,z,D,D,V)}}else return;const S=new(mx(x)?yx:xx)(x,1);S.version=b;const _=c.get(v);_&&t.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function eb(o,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(s,M,c,x*h,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function v(x,M,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,b,0,E);let _=0;for(let N=0;N<E;N++)_+=M[N]*b[N];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function nb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ib(o,t,i){const s=new WeakMap,l=new Dn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let T=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",T)};var M=T;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let V=d.attributes.position.count*C,z=1;V>t.maxTextureSize&&(z=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const D=new Float32Array(V*z*4*v),H=new vx(D,V,z,v);H.type=ts,H.needsUpdate=!0;const U=C*4;for(let I=0;I<v;I++){const it=_[I],tt=N[I],ht=L[I],mt=V*z*4*I;for(let B=0;B<it.count;B++){const J=B*U;E===!0&&(l.fromBufferAttribute(it,B),D[mt+J+0]=l.x,D[mt+J+1]=l.y,D[mt+J+2]=l.z,D[mt+J+3]=0),b===!0&&(l.fromBufferAttribute(tt,B),D[mt+J+4]=l.x,D[mt+J+5]=l.y,D[mt+J+6]=l.z,D[mt+J+7]=0),S===!0&&(l.fromBufferAttribute(ht,B),D[mt+J+8]=l.x,D[mt+J+9]=l.y,D[mt+J+10]=l.z,D[mt+J+11]=ht.itemSize===4?l.w:1)}}x={count:v,texture:H,size:new jt(V,z)},s.set(d,x),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ab(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Ox=new Ii,P_=new Ax(1,1),zx=new vx,Px=new yS,Ix=new Ex,I_=[],B_=[],F_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function Ul(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function ei(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function ni(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function ih(o,t){let i=B_[t];i===void 0&&(i=new Int32Array(t),B_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ei(i,t))return;o.uniform2fv(this.addr,t),ni(i,t)}}function ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ei(i,t))return;o.uniform3fv(this.addr,t),ni(i,t)}}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ei(i,t))return;o.uniform4fv(this.addr,t),ni(i,t)}}function cb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ei(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),ni(i,t)}else{if(ei(i,s))return;G_.set(s),o.uniformMatrix2fv(this.addr,!1,G_),ni(i,s)}}function ub(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ei(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),ni(i,t)}else{if(ei(i,s))return;H_.set(s),o.uniformMatrix3fv(this.addr,!1,H_),ni(i,s)}}function fb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ei(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),ni(i,t)}else{if(ei(i,s))return;F_.set(s),o.uniformMatrix4fv(this.addr,!1,F_),ni(i,s)}}function hb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ei(i,t))return;o.uniform2iv(this.addr,t),ni(i,t)}}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ei(i,t))return;o.uniform3iv(this.addr,t),ni(i,t)}}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ei(i,t))return;o.uniform4iv(this.addr,t),ni(i,t)}}function gb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ei(i,t))return;o.uniform2uiv(this.addr,t),ni(i,t)}}function _b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ei(i,t))return;o.uniform3uiv(this.addr,t),ni(i,t)}}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ei(i,t))return;o.uniform4uiv(this.addr,t),ni(i,t)}}function yb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(P_.compareFunction=px,c=P_):c=Ox,i.setTexture2D(t||c,l)}function Mb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Px,l)}function Sb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ix,l)}function Eb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zx,l)}function Tb(o){switch(o){case 5126:return sb;case 35664:return rb;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}function bb(o,t){o.uniform1fv(this.addr,t)}function Ab(o,t){const i=Ul(t,this.size,2);o.uniform2fv(this.addr,i)}function wb(o,t){const i=Ul(t,this.size,3);o.uniform3fv(this.addr,i)}function Rb(o,t){const i=Ul(t,this.size,4);o.uniform4fv(this.addr,i)}function Cb(o,t){const i=Ul(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Db(o,t){const i=Ul(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Ub(o,t){const i=Ul(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Lb(o,t){o.uniform1iv(this.addr,t)}function Nb(o,t){o.uniform2iv(this.addr,t)}function Ob(o,t){o.uniform3iv(this.addr,t)}function zb(o,t){o.uniform4iv(this.addr,t)}function Pb(o,t){o.uniform1uiv(this.addr,t)}function Ib(o,t){o.uniform2uiv(this.addr,t)}function Bb(o,t){o.uniform3uiv(this.addr,t)}function Fb(o,t){o.uniform4uiv(this.addr,t)}function Hb(o,t,i){const s=this.cache,l=t.length,c=ih(i,l);ei(s,c)||(o.uniform1iv(this.addr,c),ni(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Ox,c[h])}function Gb(o,t,i){const s=this.cache,l=t.length,c=ih(i,l);ei(s,c)||(o.uniform1iv(this.addr,c),ni(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Px,c[h])}function Vb(o,t,i){const s=this.cache,l=t.length,c=ih(i,l);ei(s,c)||(o.uniform1iv(this.addr,c),ni(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ix,c[h])}function kb(o,t,i){const s=this.cache,l=t.length,c=ih(i,l);ei(s,c)||(o.uniform1iv(this.addr,c),ni(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||zx,c[h])}function Xb(o){switch(o){case 5126:return bb;case 35664:return Ab;case 35665:return wb;case 35666:return Rb;case 35674:return Cb;case 35675:return Db;case 35676:return Ub;case 5124:case 35670:return Lb;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return zb;case 5125:return Pb;case 36294:return Ib;case 36295:return Bb;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return kb}}class Wb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Tb(i.type)}}class qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Xb(i.type)}}class Yb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function V_(o,t){o.seq.push(t),o.map[t.id]=t}function jb(o,t,i){const s=o.name,l=s.length;for(Rp.lastIndex=0;;){const c=Rp.exec(s),h=Rp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new Wb(d,o,t):new qb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Yb(d),V_(i,v)),i=v}}}class kf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);jb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function k_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Zb=37297;let Kb=0;function Qb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const X_=new Te;function Jb(o){Ye._getMatrix(X_,Ye.workingColorSpace,o);const t=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(Ye.getTransfer(o)){case Xf:return[t,"LinearTransferOETF"];case on:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function W_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Qb(o.getShaderSource(t),h)}else return l}function $b(o,t){const i=Jb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function tA(o,t){let i;switch(t){case LM:i="Linear";break;case NM:i="Reinhard";break;case OM:i="Cineon";break;case nx:i="ACESFilmic";break;case PM:i="AgX";break;case IM:i="Neutral";break;case zM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const If=new F;function eA(){Ye.getLuminanceCoefficients(If);const o=If.x.toFixed(4),t=If.y.toFixed(4),i=If.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qc).join(`
`)}function iA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function aA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function qc(o){return o!==""}function q_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vm(o){return o.replace(sA,oA)}const rA=new Map;function oA(o,t){let i=Re[t];if(i===void 0){const s=rA.get(t);if(s!==void 0)i=Re[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return vm(i)}const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(lA,cA)}function cA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function uA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===tx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ns&&(t="SHADOWMAP_TYPE_VSM"),t}function fA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Sl:case El:t="ENVMAP_TYPE_CUBE";break;case th:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case El:t="ENVMAP_MODE_REFRACTION";break}return t}function dA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ex:t="ENVMAP_BLENDING_MULTIPLY";break;case DM:t="ENVMAP_BLENDING_MIX";break;case UM:t="ENVMAP_BLENDING_ADD";break}return t}function pA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=uA(i),p=fA(i),g=hA(i),v=dA(i),x=pA(i),M=nA(i),E=iA(c),b=l.createProgram();let S,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qc).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qc).join(`
`),_.length>0&&(_+=`
`)):(S=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qc).join(`
`),_=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==wr?"#define TONE_MAPPING":"",i.toneMapping!==wr?Re.tonemapping_pars_fragment:"",i.toneMapping!==wr?tA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,$b("linearToOutputTexel",i.outputColorSpace),eA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qc).join(`
`)),h=vm(h),h=q_(h,i),h=Y_(h,i),d=vm(d),d=q_(d,i),d=Y_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+S+h,C=N+_+d,V=k_(l,l.VERTEX_SHADER,L),z=k_(l,l.FRAGMENT_SHADER,C);l.attachShader(b,V),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function D(I){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(b).trim(),tt=l.getShaderInfoLog(V).trim(),ht=l.getShaderInfoLog(z).trim();let mt=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(mt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,V,z);else{const J=W_(l,V,"vertex"),Q=W_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+it+`
`+J+`
`+Q)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(tt===""||ht==="")&&(B=!1);B&&(I.diagnostics={runnable:mt,programLog:it,vertexShader:{log:tt,prefix:S},fragmentShader:{log:ht,prefix:_}})}l.deleteShader(V),l.deleteShader(z),H=new kf(l,b),U=aA(l,b)}let H;this.getUniforms=function(){return H===void 0&&D(this),H};let U;this.getAttributes=function(){return U===void 0&&D(this),U};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(b,Zb)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Kb++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=z,this}let gA=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new _A(t),i.set(t,s)),s}}class _A{constructor(t){this.id=gA++,this.code=t,this.usedTimes=0}}function xA(o,t,i,s,l,c,h){const d=new Rm,m=new vA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,T,I,it,tt){const ht=it.fog,mt=tt.geometry,B=U.isMeshStandardMaterial?it.environment:null,J=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),Q=J&&J.mapping===th?J.image.height:null,St=E[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Ut=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,P=Ut!==void 0?Ut.length:0;let st=0;mt.morphAttributes.position!==void 0&&(st=1),mt.morphAttributes.normal!==void 0&&(st=2),mt.morphAttributes.color!==void 0&&(st=3);let bt,Z,ft,yt;if(St){const Ue=Ja[St];bt=Ue.vertexShader,Z=Ue.fragmentShader}else bt=U.vertexShader,Z=U.fragmentShader,m.update(U),ft=m.getVertexShaderID(U),yt=m.getFragmentShaderID(U);const Tt=o.getRenderTarget(),Wt=o.state.buffers.depth.getReversed(),qt=tt.isInstancedMesh===!0,pe=tt.isBatchedMesh===!0,Ve=!!U.map,Se=!!U.matcap,ln=!!J,X=!!U.aoMap,ii=!!U.lightMap,be=!!U.bumpMap,De=!!U.normalMap,ne=!!U.displacementMap,ke=!!U.emissiveMap,Jt=!!U.metalnessMap,O=!!U.roughnessMap,w=U.anisotropy>0,rt=U.clearcoat>0,gt=U.dispersion>0,wt=U.iridescence>0,xt=U.sheen>0,Qt=U.transmission>0,Pt=w&&!!U.anisotropyMap,Xt=rt&&!!U.clearcoatMap,Ae=rt&&!!U.clearcoatNormalMap,Ot=rt&&!!U.clearcoatRoughnessMap,Yt=wt&&!!U.iridescenceMap,ie=wt&&!!U.iridescenceThicknessMap,$t=xt&&!!U.sheenColorMap,Ht=xt&&!!U.sheenRoughnessMap,re=!!U.specularMap,me=!!U.specularColorMap,Be=!!U.specularIntensityMap,Y=Qt&&!!U.transmissionMap,Lt=Qt&&!!U.thicknessMap,ut=!!U.gradientMap,vt=!!U.alphaMap,It=U.alphaTest>0,Gt=!!U.alphaHash,ue=!!U.extensions;let nn=wr;U.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(nn=o.toneMapping);const cn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:bt,fragmentShader:Z,defines:U.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:pe,batchingColor:pe&&tt._colorsTexture!==null,instancing:qt,instancingColor:qt&&tt.instanceColor!==null,instancingMorph:qt&&tt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Al,alphaToCoverage:!!U.alphaToCoverage,map:Ve,matcap:Se,envMap:ln,envMapMode:ln&&J.mapping,envMapCubeUVHeight:Q,aoMap:X,lightMap:ii,bumpMap:be,normalMap:De,displacementMap:x&&ne,emissiveMap:ke,normalMapObjectSpace:De&&U.normalMapType===GM,normalMapTangentSpace:De&&U.normalMapType===dx,metalnessMap:Jt,roughnessMap:O,anisotropy:w,anisotropyMap:Pt,clearcoat:rt,clearcoatMap:Xt,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ot,dispersion:gt,iridescence:wt,iridescenceMap:Yt,iridescenceThicknessMap:ie,sheen:xt,sheenColorMap:$t,sheenRoughnessMap:Ht,specularMap:re,specularColorMap:me,specularIntensityMap:Be,transmission:Qt,transmissionMap:Y,thicknessMap:Lt,gradientMap:ut,opaque:U.transparent===!1&&U.blending===_l&&U.alphaToCoverage===!1,alphaMap:vt,alphaTest:It,alphaHash:Gt,combine:U.combine,mapUv:Ve&&b(U.map.channel),aoMapUv:X&&b(U.aoMap.channel),lightMapUv:ii&&b(U.lightMap.channel),bumpMapUv:be&&b(U.bumpMap.channel),normalMapUv:De&&b(U.normalMap.channel),displacementMapUv:ne&&b(U.displacementMap.channel),emissiveMapUv:ke&&b(U.emissiveMap.channel),metalnessMapUv:Jt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:Pt&&b(U.anisotropyMap.channel),clearcoatMapUv:Xt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(U.sheenRoughnessMap.channel),specularMapUv:re&&b(U.specularMap.channel),specularColorMapUv:me&&b(U.specularColorMap.channel),specularIntensityMapUv:Be&&b(U.specularIntensityMap.channel),transmissionMapUv:Y&&b(U.transmissionMap.channel),thicknessMapUv:Lt&&b(U.thicknessMap.channel),alphaMapUv:vt&&b(U.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(De||w),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!mt.attributes.uv&&(Ve||vt),fog:!!ht,useFog:U.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Wt,skinning:tt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:st,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:nn,decodeVideoTexture:Ve&&U.map.isVideoTexture===!0&&Ye.getTransfer(U.map.colorSpace)===on,decodeVideoTextureEmissive:ke&&U.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(U.emissiveMap.colorSpace)===on,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Fa,flipSided:U.side===Pi,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ue&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&U.extensions.multiDraw===!0||pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function _(U){const T=[];if(U.shaderID?T.push(U.shaderID):(T.push(U.customVertexShaderID),T.push(U.customFragmentShaderID)),U.defines!==void 0)for(const I in U.defines)T.push(I),T.push(U.defines[I]);return U.isRawShaderMaterial===!1&&(N(T,U),L(T,U),T.push(o.outputColorSpace)),T.push(U.customProgramCacheKey),T.join()}function N(U,T){U.push(T.precision),U.push(T.outputColorSpace),U.push(T.envMapMode),U.push(T.envMapCubeUVHeight),U.push(T.mapUv),U.push(T.alphaMapUv),U.push(T.lightMapUv),U.push(T.aoMapUv),U.push(T.bumpMapUv),U.push(T.normalMapUv),U.push(T.displacementMapUv),U.push(T.emissiveMapUv),U.push(T.metalnessMapUv),U.push(T.roughnessMapUv),U.push(T.anisotropyMapUv),U.push(T.clearcoatMapUv),U.push(T.clearcoatNormalMapUv),U.push(T.clearcoatRoughnessMapUv),U.push(T.iridescenceMapUv),U.push(T.iridescenceThicknessMapUv),U.push(T.sheenColorMapUv),U.push(T.sheenRoughnessMapUv),U.push(T.specularMapUv),U.push(T.specularColorMapUv),U.push(T.specularIntensityMapUv),U.push(T.transmissionMapUv),U.push(T.thicknessMapUv),U.push(T.combine),U.push(T.fogExp2),U.push(T.sizeAttenuation),U.push(T.morphTargetsCount),U.push(T.morphAttributeCount),U.push(T.numDirLights),U.push(T.numPointLights),U.push(T.numSpotLights),U.push(T.numSpotLightMaps),U.push(T.numHemiLights),U.push(T.numRectAreaLights),U.push(T.numDirLightShadows),U.push(T.numPointLightShadows),U.push(T.numSpotLightShadows),U.push(T.numSpotLightShadowsWithMaps),U.push(T.numLightProbes),U.push(T.shadowMapType),U.push(T.toneMapping),U.push(T.numClippingPlanes),U.push(T.numClipIntersection),U.push(T.depthPacking)}function L(U,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const T=E[U.type];let I;if(T){const it=Ja[T];I=LS.clone(it.uniforms)}else I=U.uniforms;return I}function V(U,T){let I;for(let it=0,tt=g.length;it<tt;it++){const ht=g[it];if(ht.cacheKey===T){I=ht,++I.usedTimes;break}}return I===void 0&&(I=new mA(o,T,U,c),g.push(I)),I}function z(U){if(--U.usedTimes===0){const T=g.indexOf(U);g[T]=g[g.length-1],g.pop(),U.destroy()}}function D(U){m.remove(U)}function H(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:V,releaseProgram:z,releaseShaderCache:D,programs:g,dispose:H}}function yA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function MA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function K_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Q_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,E,b,S){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=S),t++,_}function d(v,x,M,E,b,S){const _=h(v,x,M,E,b,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,E,b,S){const _=h(v,x,M,E,b,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||MA),s.length>1&&s.sort(x||K_),l.length>1&&l.sort(x||K_)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function SA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new Q_,o.set(s,[h])):l>=c.length?(h=new Q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function EA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new F,color:new xe};break;case"SpotLight":i={position:new F,direction:new F,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=i,i}}}function TA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let bA=0;function AA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function wA(o){const t=new EA,i=TA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new F);const l=new F,c=new en,h=new en;function d(p){let g=0,v=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,b=0,S=0,_=0,N=0,L=0,C=0,V=0,z=0,D=0;p.sort(AA);for(let U=0,T=p.length;U<T;U++){const I=p[U],it=I.color,tt=I.intensity,ht=I.distance,mt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=it.r*tt,v+=it.g*tt,x+=it.b*tt;else if(I.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(I.sh.coefficients[B],tt);D++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,Q=i.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=I.shadow.matrix,N++}s.directional[M]=B,M++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(it).multiplyScalar(tt),B.distance=ht,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,s.spot[b]=B;const J=I.shadow;if(I.map&&(s.spotLightMap[V]=I.map,V++,J.updateMatrices(I),I.castShadow&&z++),s.spotLightMatrix[b]=J.matrix,I.castShadow){const Q=i.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[b]=Q,s.spotShadowMap[b]=mt,C++}b++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(it).multiplyScalar(tt),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=B,S++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const J=I.shadow,Q=i.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[E]=Q,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=I.shadow.matrix,L++}s.point[E]=B,E++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(tt),B.groundColor.copy(I.groundColor).multiplyScalar(tt),s.hemi[_]=B,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=kt.LTC_FLOAT_1,s.rectAreaLTC2=kt.LTC_FLOAT_2):(s.rectAreaLTC1=kt.LTC_HALF_1,s.rectAreaLTC2=kt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const H=s.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==b||H.rectAreaLength!==S||H.hemiLength!==_||H.numDirectionalShadows!==N||H.numPointShadows!==L||H.numSpotShadows!==C||H.numSpotMaps!==V||H.numLightProbes!==D)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+V-z,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=D,H.directionalLength=M,H.pointLength=E,H.spotLength=b,H.rectAreaLength=S,H.hemiLength=_,H.numDirectionalShadows=N,H.numPointShadows=L,H.numSpotShadows=C,H.numSpotMaps=V,H.numLightProbes=D,s.version=bA++)}function m(p,g){let v=0,x=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const L=p[_];if(L.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),v++}else if(L.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),h.identity(),c.copy(L.matrixWorld),c.premultiply(S),h.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const C=s.hemi[b];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function J_(o){const t=new wA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function RA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new J_(o),t.set(l,[d])):c>=h.length?(d=new J_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`;function UA(o,t,i){let s=new Cm;const l=new jt,c=new jt,h=new Dn,d=new n1({depthPacking:HM}),m=new i1,p={},g=i.maxTextureSize,v={[Rr]:Pi,[Pi]:Rr,[Fa]:Fa},x=new Fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:CA,fragmentShader:DA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Zn;E.setAttribute("position",new Aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ee(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let _=this.type;this.render=function(z,D,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const U=o.getRenderTarget(),T=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),it=o.state;it.setBlending(Ar),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const tt=_!==Ns&&this.type===Ns,ht=_===Ns&&this.type!==Ns;for(let mt=0,B=z.length;mt<B;mt++){const J=z[mt],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const St=Q.getFrameExtents();if(l.multiply(St),c.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,Q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,Q.mapSize.y=c.y)),Q.map===null||tt===!0||ht===!0){const P=this.type!==Ns?{minFilter:Ki,magFilter:Ki}:{};Q.map!==null&&Q.map.dispose(),Q.map=new fo(l.x,l.y,P),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const Ut=Q.getViewportCount();for(let P=0;P<Ut;P++){const st=Q.getViewport(P);h.set(c.x*st.x,c.y*st.y,c.x*st.z,c.y*st.w),it.viewport(h),Q.updateMatrices(J,P),s=Q.getFrustum(),C(D,H,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Ns&&N(Q,H),Q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(U,T,I)};function N(z,D){const H=t.update(b);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new fo(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(D,null,H,x,b,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(D,null,H,M,b,null)}function L(z,D,H,U){let T=null;const I=H.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)T=I;else if(T=H.isPointLight===!0?m:d,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const it=T.uuid,tt=D.uuid;let ht=p[it];ht===void 0&&(ht={},p[it]=ht);let mt=ht[tt];mt===void 0&&(mt=T.clone(),ht[tt]=mt,D.addEventListener("dispose",V)),T=mt}if(T.visible=D.visible,T.wireframe=D.wireframe,U===Ns?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:v[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const it=o.properties.get(T);it.light=H}return T}function C(z,D,H,U,T){if(z.visible===!1)return;if(z.layers.test(D.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===Ns)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,z.matrixWorld);const tt=t.update(z),ht=z.material;if(Array.isArray(ht)){const mt=tt.groups;for(let B=0,J=mt.length;B<J;B++){const Q=mt[B],St=ht[Q.materialIndex];if(St&&St.visible){const Ut=L(z,St,U,T);z.onBeforeShadow(o,z,D,H,tt,Ut,Q),o.renderBufferDirect(H,null,tt,Ut,z,Q),z.onAfterShadow(o,z,D,H,tt,Ut,Q)}}}else if(ht.visible){const mt=L(z,ht,U,T);z.onBeforeShadow(o,z,D,H,tt,mt,null),o.renderBufferDirect(H,null,tt,mt,z,null),z.onAfterShadow(o,z,D,H,tt,mt,null)}}const it=z.children;for(let tt=0,ht=it.length;tt<ht;tt++)C(it[tt],D,H,U,T)}function V(z){z.target.removeEventListener("dispose",V);for(const H in p){const U=p[H],T=z.target.uuid;T in U&&(U[T].dispose(),delete U[T])}}}const LA={[Lp]:Np,[Op]:Ip,[zp]:Bp,[Ml]:Pp,[Np]:Lp,[Ip]:Op,[Bp]:zp,[Pp]:Ml};function NA(o,t){function i(){let Y=!1;const Lt=new Dn;let ut=null;const vt=new Dn(0,0,0,0);return{setMask:function(It){ut!==It&&!Y&&(o.colorMask(It,It,It,It),ut=It)},setLocked:function(It){Y=It},setClear:function(It,Gt,ue,nn,cn){cn===!0&&(It*=nn,Gt*=nn,ue*=nn),Lt.set(It,Gt,ue,nn),vt.equals(Lt)===!1&&(o.clearColor(It,Gt,ue,nn),vt.copy(Lt))},reset:function(){Y=!1,ut=null,vt.set(-1,0,0,0)}}}function s(){let Y=!1,Lt=!1,ut=null,vt=null,It=null;return{setReversed:function(Gt){if(Lt!==Gt){const ue=t.get("EXT_clip_control");Lt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const nn=It;It=null,this.setClear(nn)}Lt=Gt},getReversed:function(){return Lt},setTest:function(Gt){Gt?Tt(o.DEPTH_TEST):Wt(o.DEPTH_TEST)},setMask:function(Gt){ut!==Gt&&!Y&&(o.depthMask(Gt),ut=Gt)},setFunc:function(Gt){if(Lt&&(Gt=LA[Gt]),vt!==Gt){switch(Gt){case Lp:o.depthFunc(o.NEVER);break;case Np:o.depthFunc(o.ALWAYS);break;case Op:o.depthFunc(o.LESS);break;case Ml:o.depthFunc(o.LEQUAL);break;case zp:o.depthFunc(o.EQUAL);break;case Pp:o.depthFunc(o.GEQUAL);break;case Ip:o.depthFunc(o.GREATER);break;case Bp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Gt}},setLocked:function(Gt){Y=Gt},setClear:function(Gt){It!==Gt&&(Lt&&(Gt=1-Gt),o.clearDepth(Gt),It=Gt)},reset:function(){Y=!1,ut=null,vt=null,It=null,Lt=!1}}}function l(){let Y=!1,Lt=null,ut=null,vt=null,It=null,Gt=null,ue=null,nn=null,cn=null;return{setTest:function(Ue){Y||(Ue?Tt(o.STENCIL_TEST):Wt(o.STENCIL_TEST))},setMask:function(Ue){Lt!==Ue&&!Y&&(o.stencilMask(Ue),Lt=Ue)},setFunc:function(Ue,Tn,Si){(ut!==Ue||vt!==Tn||It!==Si)&&(o.stencilFunc(Ue,Tn,Si),ut=Ue,vt=Tn,It=Si)},setOp:function(Ue,Tn,Si){(Gt!==Ue||ue!==Tn||nn!==Si)&&(o.stencilOp(Ue,Tn,Si),Gt=Ue,ue=Tn,nn=Si)},setLocked:function(Ue){Y=Ue},setClear:function(Ue){cn!==Ue&&(o.clearStencil(Ue),cn=Ue)},reset:function(){Y=!1,Lt=null,ut=null,vt=null,It=null,Gt=null,ue=null,nn=null,cn=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],E=null,b=!1,S=null,_=null,N=null,L=null,C=null,V=null,z=null,D=new xe(0,0,0),H=0,U=!1,T=null,I=null,it=null,tt=null,ht=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=J>=2);let St=null,Ut={};const P=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),bt=new Dn().fromArray(P),Z=new Dn().fromArray(st);function ft(Y,Lt,ut,vt){const It=new Uint8Array(4),Gt=o.createTexture();o.bindTexture(Y,Gt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ue=0;ue<ut;ue++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,It):o.texImage2D(Lt+ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,It);return Gt}const yt={};yt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(Ml),be(!1),De(kv),Tt(o.CULL_FACE),X(Ar);function Tt(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function Wt(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function qt(Y,Lt){return v[Y]!==Lt?(o.bindFramebuffer(Y,Lt),v[Y]=Lt,Y===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),Y===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function pe(Y,Lt){let ut=M,vt=!1;if(Y){ut=x.get(Lt),ut===void 0&&(ut=[],x.set(Lt,ut));const It=Y.textures;if(ut.length!==It.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let Gt=0,ue=It.length;Gt<ue;Gt++)ut[Gt]=o.COLOR_ATTACHMENT0+Gt;ut.length=It.length,vt=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,vt=!0);vt&&o.drawBuffers(ut)}function Ve(Y){return E!==Y?(o.useProgram(Y),E=Y,!0):!1}const Se={[so]:o.FUNC_ADD,[dM]:o.FUNC_SUBTRACT,[pM]:o.FUNC_REVERSE_SUBTRACT};Se[mM]=o.MIN,Se[gM]=o.MAX;const ln={[vM]:o.ZERO,[_M]:o.ONE,[xM]:o.SRC_COLOR,[Dp]:o.SRC_ALPHA,[bM]:o.SRC_ALPHA_SATURATE,[EM]:o.DST_COLOR,[MM]:o.DST_ALPHA,[yM]:o.ONE_MINUS_SRC_COLOR,[Up]:o.ONE_MINUS_SRC_ALPHA,[TM]:o.ONE_MINUS_DST_COLOR,[SM]:o.ONE_MINUS_DST_ALPHA,[AM]:o.CONSTANT_COLOR,[wM]:o.ONE_MINUS_CONSTANT_COLOR,[RM]:o.CONSTANT_ALPHA,[CM]:o.ONE_MINUS_CONSTANT_ALPHA};function X(Y,Lt,ut,vt,It,Gt,ue,nn,cn,Ue){if(Y===Ar){b===!0&&(Wt(o.BLEND),b=!1);return}if(b===!1&&(Tt(o.BLEND),b=!0),Y!==hM){if(Y!==S||Ue!==U){if((_!==so||C!==so)&&(o.blendEquation(o.FUNC_ADD),_=so,C=so),Ue)switch(Y){case _l:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gl:o.blendFunc(o.ONE,o.ONE);break;case Xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case _l:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gl:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,L=null,V=null,z=null,D.set(0,0,0),H=0,S=Y,U=Ue}return}It=It||Lt,Gt=Gt||ut,ue=ue||vt,(Lt!==_||It!==C)&&(o.blendEquationSeparate(Se[Lt],Se[It]),_=Lt,C=It),(ut!==N||vt!==L||Gt!==V||ue!==z)&&(o.blendFuncSeparate(ln[ut],ln[vt],ln[Gt],ln[ue]),N=ut,L=vt,V=Gt,z=ue),(nn.equals(D)===!1||cn!==H)&&(o.blendColor(nn.r,nn.g,nn.b,cn),D.copy(nn),H=cn),S=Y,U=!1}function ii(Y,Lt){Y.side===Fa?Wt(o.CULL_FACE):Tt(o.CULL_FACE);let ut=Y.side===Pi;Lt&&(ut=!ut),be(ut),Y.blending===_l&&Y.transparent===!1?X(Ar):X(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const vt=Y.stencilWrite;d.setTest(vt),vt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ke(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function be(Y){T!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),T=Y)}function De(Y){Y!==uM?(Tt(o.CULL_FACE),Y!==I&&(Y===kv?o.cullFace(o.BACK):Y===fM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Wt(o.CULL_FACE),I=Y}function ne(Y){Y!==it&&(B&&o.lineWidth(Y),it=Y)}function ke(Y,Lt,ut){Y?(Tt(o.POLYGON_OFFSET_FILL),(tt!==Lt||ht!==ut)&&(o.polygonOffset(Lt,ut),tt=Lt,ht=ut)):Wt(o.POLYGON_OFFSET_FILL)}function Jt(Y){Y?Tt(o.SCISSOR_TEST):Wt(o.SCISSOR_TEST)}function O(Y){Y===void 0&&(Y=o.TEXTURE0+mt-1),St!==Y&&(o.activeTexture(Y),St=Y)}function w(Y,Lt,ut){ut===void 0&&(St===null?ut=o.TEXTURE0+mt-1:ut=St);let vt=Ut[ut];vt===void 0&&(vt={type:void 0,texture:void 0},Ut[ut]=vt),(vt.type!==Y||vt.texture!==Lt)&&(St!==ut&&(o.activeTexture(ut),St=ut),o.bindTexture(Y,Lt||yt[Y]),vt.type=Y,vt.texture=Lt)}function rt(){const Y=Ut[St];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{o.texSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{o.texSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{o.texStorage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ot(){try{o.texStorage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{o.texImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ie(){try{o.texImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $t(Y){bt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),bt.copy(Y))}function Ht(Y){Z.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Z.copy(Y))}function re(Y,Lt){let ut=p.get(Lt);ut===void 0&&(ut=new WeakMap,p.set(Lt,ut));let vt=ut.get(Y);vt===void 0&&(vt=o.getUniformBlockIndex(Lt,Y.name),ut.set(Y,vt))}function me(Y,Lt){const vt=p.get(Lt).get(Y);m.get(Lt)!==vt&&(o.uniformBlockBinding(Lt,vt,Y.__bindingPointIndex),m.set(Lt,vt))}function Be(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,Ut={},v={},x=new WeakMap,M=[],E=null,b=!1,S=null,_=null,N=null,L=null,C=null,V=null,z=null,D=new xe(0,0,0),H=0,U=!1,T=null,I=null,it=null,tt=null,ht=null,bt.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Tt,disable:Wt,bindFramebuffer:qt,drawBuffers:pe,useProgram:Ve,setBlending:X,setMaterial:ii,setFlipSided:be,setCullFace:De,setLineWidth:ne,setPolygonOffset:ke,setScissorTest:Jt,activeTexture:O,bindTexture:w,unbindTexture:rt,compressedTexImage2D:gt,compressedTexImage3D:wt,texImage2D:Yt,texImage3D:ie,updateUBOMapping:re,uniformBlockBinding:me,texStorage2D:Ae,texStorage3D:Ot,texSubImage2D:xt,texSubImage3D:Qt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Xt,scissor:$t,viewport:Ht,reset:Be}}function OA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new jt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,w){return M?new OffscreenCanvas(O,w):qf("canvas")}function b(O,w,rt){let gt=1;const wt=Jt(O);if((wt.width>rt||wt.height>rt)&&(gt=rt/Math.max(wt.width,wt.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xt=Math.floor(gt*wt.width),Qt=Math.floor(gt*wt.height);v===void 0&&(v=E(xt,Qt));const Pt=w?E(xt,Qt):v;return Pt.width=xt,Pt.height=Qt,Pt.getContext("2d").drawImage(O,0,0,xt,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+xt+"x"+Qt+")."),Pt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,w,rt,gt,wt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt=w;if(w===o.RED&&(rt===o.FLOAT&&(xt=o.R32F),rt===o.HALF_FLOAT&&(xt=o.R16F),rt===o.UNSIGNED_BYTE&&(xt=o.R8)),w===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.R8UI),rt===o.UNSIGNED_SHORT&&(xt=o.R16UI),rt===o.UNSIGNED_INT&&(xt=o.R32UI),rt===o.BYTE&&(xt=o.R8I),rt===o.SHORT&&(xt=o.R16I),rt===o.INT&&(xt=o.R32I)),w===o.RG&&(rt===o.FLOAT&&(xt=o.RG32F),rt===o.HALF_FLOAT&&(xt=o.RG16F),rt===o.UNSIGNED_BYTE&&(xt=o.RG8)),w===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RG16UI),rt===o.UNSIGNED_INT&&(xt=o.RG32UI),rt===o.BYTE&&(xt=o.RG8I),rt===o.SHORT&&(xt=o.RG16I),rt===o.INT&&(xt=o.RG32I)),w===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),rt===o.UNSIGNED_INT&&(xt=o.RGB32UI),rt===o.BYTE&&(xt=o.RGB8I),rt===o.SHORT&&(xt=o.RGB16I),rt===o.INT&&(xt=o.RGB32I)),w===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),rt===o.UNSIGNED_INT&&(xt=o.RGBA32UI),rt===o.BYTE&&(xt=o.RGBA8I),rt===o.SHORT&&(xt=o.RGBA16I),rt===o.INT&&(xt=o.RGBA32I)),w===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),w===o.RGBA){const Qt=wt?Xf:Ye.getTransfer(gt);rt===o.FLOAT&&(xt=o.RGBA32F),rt===o.HALF_FLOAT&&(xt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(xt=Qt===on?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function C(O,w){let rt;return O?w===null||w===uo||w===Tl?rt=o.DEPTH24_STENCIL8:w===ts?rt=o.DEPTH32F_STENCIL8:w===tu&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===uo||w===Tl?rt=o.DEPTH_COMPONENT24:w===ts?rt=o.DEPTH_COMPONENT32F:w===tu&&(rt=o.DEPTH_COMPONENT16),rt}function V(O,w){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ki&&O.minFilter!==$a?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function z(O){const w=O.target;w.removeEventListener("dispose",z),H(w),w.isVideoTexture&&g.delete(w)}function D(O){const w=O.target;w.removeEventListener("dispose",D),T(w)}function H(O){const w=s.get(O);if(w.__webglInit===void 0)return;const rt=O.source,gt=x.get(rt);if(gt){const wt=gt[w.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&U(O),Object.keys(gt).length===0&&x.delete(rt)}s.remove(O)}function U(O){const w=s.get(O);o.deleteTexture(w.__webglTexture);const rt=O.source,gt=x.get(rt);delete gt[w.__cacheKey],h.memory.textures--}function T(O){const w=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(w.__webglFramebuffer[gt]))for(let wt=0;wt<w.__webglFramebuffer[gt].length;wt++)o.deleteFramebuffer(w.__webglFramebuffer[gt][wt]);else o.deleteFramebuffer(w.__webglFramebuffer[gt]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[gt])}else{if(Array.isArray(w.__webglFramebuffer))for(let gt=0;gt<w.__webglFramebuffer.length;gt++)o.deleteFramebuffer(w.__webglFramebuffer[gt]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let gt=0;gt<w.__webglColorRenderbuffer.length;gt++)w.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[gt]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const rt=O.textures;for(let gt=0,wt=rt.length;gt<wt;gt++){const xt=s.get(rt[gt]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),h.memory.textures--),s.remove(rt[gt])}s.remove(O)}let I=0;function it(){I=0}function tt(){const O=I;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),I+=1,O}function ht(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function mt(O,w){const rt=s.get(O);if(O.isVideoTexture&&ne(O),O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(rt,O,w);return}}i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+w)}function B(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){Z(rt,O,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+w)}function J(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){Z(rt,O,w);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+w)}function Q(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){ft(rt,O,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+w)}const St={[$c]:o.REPEAT,[oo]:o.CLAMP_TO_EDGE,[Gp]:o.MIRRORED_REPEAT},Ut={[Ki]:o.NEAREST,[BM]:o.NEAREST_MIPMAP_NEAREST,[ff]:o.NEAREST_MIPMAP_LINEAR,[$a]:o.LINEAR,[Kd]:o.LINEAR_MIPMAP_NEAREST,[lo]:o.LINEAR_MIPMAP_LINEAR},P={[VM]:o.NEVER,[jM]:o.ALWAYS,[kM]:o.LESS,[px]:o.LEQUAL,[XM]:o.EQUAL,[YM]:o.GEQUAL,[WM]:o.GREATER,[qM]:o.NOTEQUAL};function st(O,w){if(w.type===ts&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===$a||w.magFilter===Kd||w.magFilter===ff||w.magFilter===lo||w.minFilter===$a||w.minFilter===Kd||w.minFilter===ff||w.minFilter===lo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,St[w.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,St[w.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,St[w.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Ut[w.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Ut[w.minFilter]),w.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ki||w.minFilter!==ff&&w.minFilter!==lo||w.type===ts&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function bt(O,w){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",z));const gt=w.source;let wt=x.get(gt);wt===void 0&&(wt={},x.set(gt,wt));const xt=ht(w);if(xt!==O.__cacheKey){wt[xt]===void 0&&(wt[xt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),wt[xt].usedTimes++;const Qt=wt[O.__cacheKey];Qt!==void 0&&(wt[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&U(w)),O.__cacheKey=xt,O.__webglTexture=wt[xt].texture}return rt}function Z(O,w,rt){let gt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(gt=o.TEXTURE_3D);const wt=bt(O,w),xt=w.source;i.bindTexture(gt,O.__webglTexture,o.TEXTURE0+rt);const Qt=s.get(xt);if(xt.version!==Qt.__version||wt===!0){i.activeTexture(o.TEXTURE0+rt);const Pt=Ye.getPrimaries(Ye.workingColorSpace),Xt=w.colorSpace===br?null:Ye.getPrimaries(w.colorSpace),Ae=w.colorSpace===br||Pt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ot=b(w.image,!1,l.maxTextureSize);Ot=ke(w,Ot);const Yt=c.convert(w.format,w.colorSpace),ie=c.convert(w.type);let $t=L(w.internalFormat,Yt,ie,w.colorSpace,w.isVideoTexture);st(gt,w);let Ht;const re=w.mipmaps,me=w.isVideoTexture!==!0,Be=Qt.__version===void 0||wt===!0,Y=xt.dataReady,Lt=V(w,Ot);if(w.isDepthTexture)$t=C(w.format===bl,w.type),Be&&(me?i.texStorage2D(o.TEXTURE_2D,1,$t,Ot.width,Ot.height):i.texImage2D(o.TEXTURE_2D,0,$t,Ot.width,Ot.height,0,Yt,ie,null));else if(w.isDataTexture)if(re.length>0){me&&Be&&i.texStorage2D(o.TEXTURE_2D,Lt,$t,re[0].width,re[0].height);for(let ut=0,vt=re.length;ut<vt;ut++)Ht=re[ut],me?Y&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Ht.width,Ht.height,Yt,ie,Ht.data):i.texImage2D(o.TEXTURE_2D,ut,$t,Ht.width,Ht.height,0,Yt,ie,Ht.data);w.generateMipmaps=!1}else me?(Be&&i.texStorage2D(o.TEXTURE_2D,Lt,$t,Ot.width,Ot.height),Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot.width,Ot.height,Yt,ie,Ot.data)):i.texImage2D(o.TEXTURE_2D,0,$t,Ot.width,Ot.height,0,Yt,ie,Ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){me&&Be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,$t,re[0].width,re[0].height,Ot.depth);for(let ut=0,vt=re.length;ut<vt;ut++)if(Ht=re[ut],w.format!==ba)if(Yt!==null)if(me){if(Y)if(w.layerUpdates.size>0){const It=R_(Ht.width,Ht.height,w.format,w.type);for(const Gt of w.layerUpdates){const ue=Ht.data.subarray(Gt*It/Ht.data.BYTES_PER_ELEMENT,(Gt+1)*It/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,Gt,Ht.width,Ht.height,1,Yt,ue)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Ht.width,Ht.height,Ot.depth,Yt,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,$t,Ht.width,Ht.height,Ot.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Ht.width,Ht.height,Ot.depth,Yt,ie,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ut,$t,Ht.width,Ht.height,Ot.depth,0,Yt,ie,Ht.data)}else{me&&Be&&i.texStorage2D(o.TEXTURE_2D,Lt,$t,re[0].width,re[0].height);for(let ut=0,vt=re.length;ut<vt;ut++)Ht=re[ut],w.format!==ba?Yt!==null?me?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,Ht.width,Ht.height,Yt,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,ut,$t,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?Y&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Ht.width,Ht.height,Yt,ie,Ht.data):i.texImage2D(o.TEXTURE_2D,ut,$t,Ht.width,Ht.height,0,Yt,ie,Ht.data)}else if(w.isDataArrayTexture)if(me){if(Be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,$t,Ot.width,Ot.height,Ot.depth),Y)if(w.layerUpdates.size>0){const ut=R_(Ot.width,Ot.height,w.format,w.type);for(const vt of w.layerUpdates){const It=Ot.data.subarray(vt*ut/Ot.data.BYTES_PER_ELEMENT,(vt+1)*ut/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Ot.width,Ot.height,1,Yt,ie,It)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Yt,ie,Ot.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,$t,Ot.width,Ot.height,Ot.depth,0,Yt,ie,Ot.data);else if(w.isData3DTexture)me?(Be&&i.texStorage3D(o.TEXTURE_3D,Lt,$t,Ot.width,Ot.height,Ot.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Yt,ie,Ot.data)):i.texImage3D(o.TEXTURE_3D,0,$t,Ot.width,Ot.height,Ot.depth,0,Yt,ie,Ot.data);else if(w.isFramebufferTexture){if(Be)if(me)i.texStorage2D(o.TEXTURE_2D,Lt,$t,Ot.width,Ot.height);else{let ut=Ot.width,vt=Ot.height;for(let It=0;It<Lt;It++)i.texImage2D(o.TEXTURE_2D,It,$t,ut,vt,0,Yt,ie,null),ut>>=1,vt>>=1}}else if(re.length>0){if(me&&Be){const ut=Jt(re[0]);i.texStorage2D(o.TEXTURE_2D,Lt,$t,ut.width,ut.height)}for(let ut=0,vt=re.length;ut<vt;ut++)Ht=re[ut],me?Y&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Yt,ie,Ht):i.texImage2D(o.TEXTURE_2D,ut,$t,Yt,ie,Ht);w.generateMipmaps=!1}else if(me){if(Be){const ut=Jt(Ot);i.texStorage2D(o.TEXTURE_2D,Lt,$t,ut.width,ut.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Yt,ie,Ot)}else i.texImage2D(o.TEXTURE_2D,0,$t,Yt,ie,Ot);S(w)&&_(gt),Qt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function ft(O,w,rt){if(w.image.length!==6)return;const gt=bt(O,w),wt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+rt);const xt=s.get(wt);if(wt.version!==xt.__version||gt===!0){i.activeTexture(o.TEXTURE0+rt);const Qt=Ye.getPrimaries(Ye.workingColorSpace),Pt=w.colorSpace===br?null:Ye.getPrimaries(w.colorSpace),Xt=w.colorSpace===br||Qt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,Ot=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let vt=0;vt<6;vt++)!Ae&&!Ot?Yt[vt]=b(w.image[vt],!0,l.maxCubemapSize):Yt[vt]=Ot?w.image[vt].image:w.image[vt],Yt[vt]=ke(w,Yt[vt]);const ie=Yt[0],$t=c.convert(w.format,w.colorSpace),Ht=c.convert(w.type),re=L(w.internalFormat,$t,Ht,w.colorSpace),me=w.isVideoTexture!==!0,Be=xt.__version===void 0||gt===!0,Y=wt.dataReady;let Lt=V(w,ie);st(o.TEXTURE_CUBE_MAP,w);let ut;if(Ae){me&&Be&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,ie.width,ie.height);for(let vt=0;vt<6;vt++){ut=Yt[vt].mipmaps;for(let It=0;It<ut.length;It++){const Gt=ut[It];w.format!==ba?$t!==null?me?Y&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Gt.width,Gt.height,$t,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,re,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,Gt.width,Gt.height,$t,Ht,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,re,Gt.width,Gt.height,0,$t,Ht,Gt.data)}}}else{if(ut=w.mipmaps,me&&Be){ut.length>0&&Lt++;const vt=Jt(Yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ot){me?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt[vt].width,Yt[vt].height,$t,Ht,Yt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Yt[vt].width,Yt[vt].height,0,$t,Ht,Yt[vt].data);for(let It=0;It<ut.length;It++){const ue=ut[It].image[vt].image;me?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,ue.width,ue.height,$t,Ht,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,re,ue.width,ue.height,0,$t,Ht,ue.data)}}else{me?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$t,Ht,Yt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,$t,Ht,Yt[vt]);for(let It=0;It<ut.length;It++){const Gt=ut[It];me?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,$t,Ht,Gt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,re,$t,Ht,Gt.image[vt])}}}S(w)&&_(o.TEXTURE_CUBE_MAP),xt.__version=wt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function yt(O,w,rt,gt,wt,xt){const Qt=c.convert(rt.format,rt.colorSpace),Pt=c.convert(rt.type),Xt=L(rt.internalFormat,Qt,Pt,rt.colorSpace),Ae=s.get(w),Ot=s.get(rt);if(Ot.__renderTarget=w,!Ae.__hasExternalTextures){const Yt=Math.max(1,w.width>>xt),ie=Math.max(1,w.height>>xt);wt===o.TEXTURE_3D||wt===o.TEXTURE_2D_ARRAY?i.texImage3D(wt,xt,Xt,Yt,ie,w.depth,0,Qt,Pt,null):i.texImage2D(wt,xt,Xt,Yt,ie,0,Qt,Pt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),De(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,wt,Ot.__webglTexture,0,be(w)):(wt===o.TEXTURE_2D||wt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,wt,Ot.__webglTexture,xt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(O,w,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),w.depthBuffer){const gt=w.depthTexture,wt=gt&&gt.isDepthTexture?gt.type:null,xt=C(w.stencilBuffer,wt),Qt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=be(w);De(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,xt,w.width,w.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,xt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,xt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qt,o.RENDERBUFFER,O)}else{const gt=w.textures;for(let wt=0;wt<gt.length;wt++){const xt=gt[wt],Qt=c.convert(xt.format,xt.colorSpace),Pt=c.convert(xt.type),Xt=L(xt.internalFormat,Qt,Pt,xt.colorSpace),Ae=be(w);rt&&De(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,Xt,w.width,w.height):De(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,Xt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(w.depthTexture);gt.__renderTarget=w,(!gt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),mt(w.depthTexture,0);const wt=gt.__webglTexture,xt=be(w);if(w.depthTexture.format===xl)De(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,wt,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,wt,0);else if(w.depthTexture.format===bl)De(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,wt,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function qt(O){const w=s.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),gt){const wt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,gt.removeEventListener("dispose",wt)};gt.addEventListener("dispose",wt),w.__depthDisposeCallback=wt}w.__boundDepthTexture=gt}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Wt(w.__webglFramebuffer,O)}else if(rt){w.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[gt]),w.__webglDepthbuffer[gt]===void 0)w.__webglDepthbuffer[gt]=o.createRenderbuffer(),Tt(w.__webglDepthbuffer[gt],O,!1);else{const wt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,xt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Tt(w.__webglDepthbuffer,O,!1);else{const gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,wt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function pe(O,w,rt){const gt=s.get(O);w!==void 0&&yt(gt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&qt(O)}function Ve(O){const w=O.texture,rt=s.get(O),gt=s.get(w);O.addEventListener("dispose",D);const wt=O.textures,xt=O.isWebGLCubeRenderTarget===!0,Qt=wt.length>1;if(Qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=w.version,h.memory.textures++),xt){rt.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer[Pt]=[];for(let Xt=0;Xt<w.mipmaps.length;Xt++)rt.__webglFramebuffer[Pt][Xt]=o.createFramebuffer()}else rt.__webglFramebuffer[Pt]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Pt=0;Pt<w.mipmaps.length;Pt++)rt.__webglFramebuffer[Pt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Qt)for(let Pt=0,Xt=wt.length;Pt<Xt;Pt++){const Ae=s.get(wt[Pt]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&De(O)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Pt=0;Pt<wt.length;Pt++){const Xt=wt[Pt];rt.__webglColorRenderbuffer[Pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Pt]);const Ae=c.convert(Xt.format,Xt.colorSpace),Ot=c.convert(Xt.type),Yt=L(Xt.internalFormat,Ae,Ot,Xt.colorSpace,O.isXRRenderTarget===!0),ie=be(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Yt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),st(o.TEXTURE_CUBE_MAP,w);for(let Pt=0;Pt<6;Pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Xt=0;Xt<w.mipmaps.length;Xt++)yt(rt.__webglFramebuffer[Pt][Xt],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Xt);else yt(rt.__webglFramebuffer[Pt],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);S(w)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Pt=0,Xt=wt.length;Pt<Xt;Pt++){const Ae=wt[Pt],Ot=s.get(Ae);i.bindTexture(o.TEXTURE_2D,Ot.__webglTexture),st(o.TEXTURE_2D,Ae),yt(rt.__webglFramebuffer,O,Ae,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,0),S(Ae)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Pt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,gt.__webglTexture),st(Pt,w),w.mipmaps&&w.mipmaps.length>0)for(let Xt=0;Xt<w.mipmaps.length;Xt++)yt(rt.__webglFramebuffer[Xt],O,w,o.COLOR_ATTACHMENT0,Pt,Xt);else yt(rt.__webglFramebuffer,O,w,o.COLOR_ATTACHMENT0,Pt,0);S(w)&&_(Pt),i.unbindTexture()}O.depthBuffer&&qt(O)}function Se(O){const w=O.textures;for(let rt=0,gt=w.length;rt<gt;rt++){const wt=w[rt];if(S(wt)){const xt=N(O),Qt=s.get(wt).__webglTexture;i.bindTexture(xt,Qt),_(xt),i.unbindTexture()}}}const ln=[],X=[];function ii(O){if(O.samples>0){if(De(O)===!1){const w=O.textures,rt=O.width,gt=O.height;let wt=o.COLOR_BUFFER_BIT;const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Qt=s.get(O),Pt=w.length>1;if(Pt)for(let Xt=0;Xt<w.length;Xt++)i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Xt=0;Xt<w.length;Xt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(wt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(wt|=o.STENCIL_BUFFER_BIT)),Pt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Xt]);const Ae=s.get(w[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ae,0)}o.blitFramebuffer(0,0,rt,gt,0,0,rt,gt,wt,o.NEAREST),m===!0&&(ln.length=0,X.length=0,ln.push(o.COLOR_ATTACHMENT0+Xt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ln.push(xt),X.push(xt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ln))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pt)for(let Xt=0;Xt<w.length;Xt++){i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Xt]);const Ae=s.get(w[Xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const w=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function be(O){return Math.min(l.maxSamples,O.samples)}function De(O){const w=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ne(O){const w=h.render.frame;g.get(O)!==w&&(g.set(O,w),O.update())}function ke(O,w){const rt=O.colorSpace,gt=O.format,wt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==Al&&rt!==br&&(Ye.getTransfer(rt)===on?(gt!==ba||wt!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),w}function Jt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=it,this.setTexture2D=mt,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=pe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ii,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=De}function zA(o,t){function i(s,l=br){let c;const h=Ye.getTransfer(l);if(s===Is)return o.UNSIGNED_BYTE;if(s===Mm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ax)return o.BYTE;if(s===sx)return o.SHORT;if(s===tu)return o.UNSIGNED_SHORT;if(s===ym)return o.INT;if(s===uo)return o.UNSIGNED_INT;if(s===ts)return o.FLOAT;if(s===nu)return o.HALF_FLOAT;if(s===ox)return o.ALPHA;if(s===lx)return o.RGB;if(s===ba)return o.RGBA;if(s===cx)return o.LUMINANCE;if(s===ux)return o.LUMINANCE_ALPHA;if(s===xl)return o.DEPTH_COMPONENT;if(s===bl)return o.DEPTH_STENCIL;if(s===Em)return o.RED;if(s===Tm)return o.RED_INTEGER;if(s===fx)return o.RG;if(s===bm)return o.RG_INTEGER;if(s===Am)return o.RGBA_INTEGER;if(s===Bf||s===Ff||s===Hf||s===Gf)if(h===on)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ff)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ff)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vp||s===kp||s===Xp||s===Wp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Vp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qp||s===Yp||s===jp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qp||s===Yp)return h===on?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===jp)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zp||s===Kp||s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Zp)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kp)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qp)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tm)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===em)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nm)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===im)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===am)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sm)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rm)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===om)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lm)return h===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vf||s===cm||s===um)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vf)return h===on?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===um)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hx||s===fm||s===hm||s===dm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const PA={type:"move"};class Cp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new co;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Ii,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Fs({vertexShader:IA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ee(new Os(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Rl{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,E=null;const b=new FA,S=i.getContextAttributes();let _=null,N=null;const L=[],C=[],V=new jt;let z=null;const D=new Ta;D.viewport=new Dn;const H=new Ta;H.viewport=new Dn;const U=[D,H],T=new o1;let I=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=L[Z];return ft===void 0&&(ft=new Cp,L[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=L[Z];return ft===void 0&&(ft=new Cp,L[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=L[Z];return ft===void 0&&(ft=new Cp,L[Z]=ft),ft.getHandSpace()};function tt(Z){const ft=C.indexOf(Z.inputSource);if(ft===-1)return;const yt=L[ft];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,p||h),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ht(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",mt);for(let Z=0;Z<L.length;Z++){const ft=C[Z];ft!==null&&(C[Z]=null,L[Z].disconnect(ft))}I=null,it=null,b.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,N=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",mt),S.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(V),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let yt=null,Tt=null,Wt=null;S.depth&&(Wt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=S.stencil?bl:xl,Tt=S.stencil?Tl:uo);const qt={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new fo(x.textureWidth,x.textureHeight,{format:ba,type:Is,depthTexture:new Ax(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new fo(M.framebufferWidth,M.framebufferHeight,{format:ba,type:Is,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(Z){for(let ft=0;ft<Z.removed.length;ft++){const yt=Z.removed[ft],Tt=C.indexOf(yt);Tt>=0&&(C[Tt]=null,L[Tt].disconnect(yt))}for(let ft=0;ft<Z.added.length;ft++){const yt=Z.added[ft];let Tt=C.indexOf(yt);if(Tt===-1){for(let qt=0;qt<L.length;qt++)if(qt>=C.length){C.push(yt),Tt=qt;break}else if(C[qt]===null){C[qt]=yt,Tt=qt;break}if(Tt===-1)break}const Wt=L[Tt];Wt&&Wt.connect(yt)}}const B=new F,J=new F;function Q(Z,ft,yt){B.setFromMatrixPosition(ft.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const Tt=B.distanceTo(J),Wt=ft.projectionMatrix.elements,qt=yt.projectionMatrix.elements,pe=Wt[14]/(Wt[10]-1),Ve=Wt[14]/(Wt[10]+1),Se=(Wt[9]+1)/Wt[5],ln=(Wt[9]-1)/Wt[5],X=(Wt[8]-1)/Wt[0],ii=(qt[8]+1)/qt[0],be=pe*X,De=pe*ii,ne=Tt/(-X+ii),ke=ne*-X;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ke),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Wt[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Jt=pe+ne,O=Ve+ne,w=be-ke,rt=De+(Tt-ke),gt=Se*Ve/O*Jt,wt=ln*Ve/O*Jt;Z.projectionMatrix.makePerspective(w,rt,gt,wt,Jt,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function St(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ft=Z.near,yt=Z.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(yt=b.depthFar)),T.near=H.near=D.near=ft,T.far=H.far=D.far=yt,(I!==T.near||it!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,it=T.far),D.layers.mask=Z.layers.mask|2,H.layers.mask=Z.layers.mask|4,T.layers.mask=D.layers.mask|H.layers.mask;const Tt=Z.parent,Wt=T.cameras;St(T,Tt);for(let qt=0;qt<Wt.length;qt++)St(Wt[qt],Tt);Wt.length===2?Q(T,D,H):T.projectionMatrix.copy(D.projectionMatrix),Ut(Z,T,Tt)};function Ut(Z,ft,yt){yt===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=eu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Z){m=Z,x!==null&&(x.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let P=null;function st(Z,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const yt=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Tt=!1;yt.length!==T.cameras.length&&(T.cameras.length=0,Tt=!0);for(let qt=0;qt<yt.length;qt++){const pe=yt[qt];let Ve=null;if(M!==null)Ve=M.getViewport(pe);else{const ln=v.getViewSubImage(x,pe);Ve=ln.viewport,qt===0&&(t.setRenderTargetTextures(N,ln.colorTexture,x.ignoreDepthValues?void 0:ln.depthStencilTexture),t.setRenderTarget(N))}let Se=U[qt];Se===void 0&&(Se=new Ta,Se.layers.enable(qt),Se.viewport=new Dn,U[qt]=Se),Se.matrix.fromArray(pe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(pe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),qt===0&&(T.matrix.copy(Se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Tt===!0&&T.cameras.push(Se)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){const qt=v.getDepthInformation(yt[0]);qt&&qt.isValid&&qt.texture&&b.init(t,qt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const Tt=C[yt],Wt=L[yt];Tt!==null&&Wt!==void 0&&Wt.update(Tt,ft,p||h)}P&&P(Z,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const bt=new Nx;bt.setAnimationLoop(st),this.setAnimationLoop=function(Z){P=Z},this.dispose=function(){}}}const no=new es,GA=new en;function VA(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Mx(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,N,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,C)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),b(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,N,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Pi&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Pi&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=t.get(_),L=N.envMap,C=N.envMapRotation;L&&(S.envMap.value=L,no.copy(C),no.x*=-1,no.y*=-1,no.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),S.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(no)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,N,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pi&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const N=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const C=L.program;s.uniformBlockBinding(N,C)}function p(N,L){let C=l[N.id];C===void 0&&(E(N),C=g(N),l[N.id]=C,N.addEventListener("dispose",S));const V=L.program;s.updateUBOMapping(N,V);const z=t.render.frame;c[N.id]!==z&&(x(N),c[N.id]=z)}function g(N){const L=v();N.__bindingPointIndex=L;const C=o.createBuffer(),V=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],C=N.uniforms,V=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,D=C.length;z<D;z++){const H=Array.isArray(C[z])?C[z]:[C[z]];for(let U=0,T=H.length;U<T;U++){const I=H[U];if(M(I,z,U,V)===!0){const it=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value];let ht=0;for(let mt=0;mt<tt.length;mt++){const B=tt[mt],J=b(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,it+ht,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,ht),ht+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,L,C,V){const z=N.value,D=L+"_"+C;if(V[D]===void 0)return typeof z=="number"||typeof z=="boolean"?V[D]=z:V[D]=z.clone(),!0;{const H=V[D];if(typeof z=="number"||typeof z=="boolean"){if(H!==z)return V[D]=z,!0}else if(H.equals(z)===!1)return H.copy(z),!0}return!1}function E(N){const L=N.uniforms;let C=0;const V=16;for(let D=0,H=L.length;D<H;D++){const U=Array.isArray(L[D])?L[D]:[L[D]];for(let T=0,I=U.length;T<I;T++){const it=U[T],tt=Array.isArray(it.value)?it.value:[it.value];for(let ht=0,mt=tt.length;ht<mt;ht++){const B=tt[ht],J=b(B),Q=C%V,St=Q%J.boundary,Ut=Q+St;C+=St,Ut!==0&&V-Ut<J.storage&&(C+=V-Ut),it.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=C,C+=J.storage}}}const z=C%V;return z>0&&(C+=V-z),N.__size=C,N.__cache={},this}function b(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const C=h.indexOf(L.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class XA{constructor(t={}){const{canvas:i=fS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zi,this.toneMapping=wr,this.toneMappingExposure=1;const C=this;let V=!1,z=0,D=0,H=null,U=-1,T=null;const I=new Dn,it=new Dn;let tt=null;const ht=new xe(0);let mt=0,B=i.width,J=i.height,Q=1,St=null,Ut=null;const P=new Dn(0,0,B,J),st=new Dn(0,0,B,J);let bt=!1;const Z=new Cm;let ft=!1,yt=!1;this.transmissionResolutionScale=1;const Tt=new en,Wt=new en,qt=new F,pe=new Dn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function ln(){return H===null?Q:1}let X=s;function ii(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Gt,!1),X===null){const j="webgl2";if(X=ii(j,R),X===null)throw ii(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let be,De,ne,ke,Jt,O,w,rt,gt,wt,xt,Qt,Pt,Xt,Ae,Ot,Yt,ie,$t,Ht,re,me,Be,Y;function Lt(){be=new $T(X),be.init(),me=new zA(X,be),De=new YT(X,be,t,me),ne=new NA(X,be),De.reverseDepthBuffer&&x&&ne.buffers.depth.setReversed(!0),ke=new nb(X),Jt=new yA,O=new OA(X,be,ne,Jt,De,me,ke),w=new ZT(C),rt=new JT(C),gt=new c1(X),Be=new WT(X,gt),wt=new tb(X,gt,ke,Be),xt=new ab(X,wt,gt,ke),$t=new ib(X,De,O),Ot=new jT(Jt),Qt=new xA(C,w,rt,be,De,Be,Ot),Pt=new VA(C,Jt),Xt=new SA,Ae=new RA(be),ie=new XT(C,w,rt,ne,xt,M,m),Yt=new UA(C,xt,De),Y=new kA(X,ke,De,ne),Ht=new qT(X,be,ke),re=new eb(X,be,ke),ke.programs=Qt.programs,C.capabilities=De,C.extensions=be,C.properties=Jt,C.renderLists=Xt,C.shadowMap=Yt,C.state=ne,C.info=ke}Lt();const ut=new HA(C,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(B,J,!1))},this.getSize=function(R){return R.set(B,J)},this.setSize=function(R,j,at=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,J=j,i.width=Math.floor(R*Q),i.height=Math.floor(j*Q),at===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*Q,J*Q).floor()},this.setDrawingBufferSize=function(R,j,at){B=R,J=j,Q=at,i.width=Math.floor(R*at),i.height=Math.floor(j*at),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,j,at,lt){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,j,at,lt),ne.viewport(I.copy(P).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,j,at,lt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,j,at,lt),ne.scissor(it.copy(st).multiplyScalar(Q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){ne.setScissorTest(bt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){Ut=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(R=!0,j=!0,at=!0){let lt=0;if(R){let q=!1;if(H!==null){const Rt=H.texture.format;q=Rt===Am||Rt===bm||Rt===Tm}if(q){const Rt=H.texture.type,Bt=Rt===Is||Rt===uo||Rt===tu||Rt===Tl||Rt===Mm||Rt===Sm,Ft=ie.getClearColor(),Ct=ie.getClearAlpha(),he=Ft.r,ce=Ft.g,Zt=Ft.b;Bt?(E[0]=he,E[1]=ce,E[2]=Zt,E[3]=Ct,X.clearBufferuiv(X.COLOR,0,E)):(b[0]=he,b[1]=ce,b[2]=Zt,b[3]=Ct,X.clearBufferiv(X.COLOR,0,b))}else lt|=X.COLOR_BUFFER_BIT}j&&(lt|=X.DEPTH_BUFFER_BIT),at&&(lt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),ie.dispose(),Xt.dispose(),Ae.dispose(),Jt.dispose(),w.dispose(),rt.dispose(),xt.dispose(),Be.dispose(),Y.dispose(),Qt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",is),ut.removeEventListener("sessionend",Qe),oi.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=ke.autoReset,j=Yt.enabled,at=Yt.autoUpdate,lt=Yt.needsUpdate,q=Yt.type;Lt(),ke.autoReset=R,Yt.enabled=j,Yt.autoUpdate=at,Yt.needsUpdate=lt,Yt.type=q}function Gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const j=R.target;j.removeEventListener("dispose",ue),nn(j)}function nn(R){cn(R),Jt.remove(R)}function cn(R){const j=Jt.get(R).programs;j!==void 0&&(j.forEach(function(at){Qt.releaseProgram(at)}),R.isShaderMaterial&&Qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,at,lt,q,Rt){j===null&&(j=Ve);const Bt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=Hs(R,j,at,lt,q);ne.setMaterial(lt,Bt);let Ct=at.index,he=1;if(lt.wireframe===!0){if(Ct=wt.getWireframeAttribute(at),Ct===void 0)return;he=2}const ce=at.drawRange,Zt=at.attributes.position;let ye=ce.start*he,ge=(ce.start+ce.count)*he;Rt!==null&&(ye=Math.max(ye,Rt.start*he),ge=Math.min(ge,(Rt.start+Rt.count)*he)),Ct!==null?(ye=Math.max(ye,0),ge=Math.min(ge,Ct.count)):Zt!=null&&(ye=Math.max(ye,0),ge=Math.min(ge,Zt.count));const Oe=ge-ye;if(Oe<0||Oe===1/0)return;Be.setup(q,lt,Ft,at,Ct);let Le,de=Ht;if(Ct!==null&&(Le=gt.get(Ct),de=re,de.setIndex(Le)),q.isMesh)lt.wireframe===!0?(ne.setLineWidth(lt.wireframeLinewidth*ln()),de.setMode(X.LINES)):de.setMode(X.TRIANGLES);else if(q.isLine){let se=lt.linewidth;se===void 0&&(se=1),ne.setLineWidth(se*ln()),q.isLineSegments?de.setMode(X.LINES):q.isLineLoop?de.setMode(X.LINE_LOOP):de.setMode(X.LINE_STRIP)}else q.isPoints?de.setMode(X.POINTS):q.isSprite&&de.setMode(X.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)de.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))de.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const se=q._multiDrawStarts,_n=q._multiDrawCounts,ze=q._multiDrawCount,li=Ct?gt.get(Ct).bytesPerElement:1,bi=Jt.get(lt).currentProgram.getUniforms();for(let Qn=0;Qn<ze;Qn++)bi.setValue(X,"_gl_DrawID",Qn),de.render(se[Qn]/li,_n[Qn])}else if(q.isInstancedMesh)de.renderInstances(ye,Oe,q.count);else if(at.isInstancedBufferGeometry){const se=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,_n=Math.min(at.instanceCount,se);de.renderInstances(ye,Oe,_n)}else de.render(ye,Oe)};function Ue(R,j,at){R.transparent===!0&&R.side===Fa&&R.forceSinglePass===!1?(R.side=Pi,R.needsUpdate=!0,vn(R,j,at),R.side=Rr,R.needsUpdate=!0,vn(R,j,at),R.side=Fa):vn(R,j,at)}this.compile=function(R,j,at=null){at===null&&(at=R),_=Ae.get(at),_.init(j),L.push(_),at.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),R!==at&&R.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const lt=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){const Ft=Rt[Bt];Ue(Ft,at,q),lt.add(Ft)}else Ue(Rt,at,q),lt.add(Rt)}),L.pop(),_=null,lt},this.compileAsync=function(R,j,at=null){const lt=this.compile(R,j,at);return new Promise(q=>{function Rt(){if(lt.forEach(function(Bt){Jt.get(Bt).currentProgram.isReady()&&lt.delete(Bt)}),lt.size===0){q(R);return}setTimeout(Rt,10)}be.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Tn=null;function Si(R){Tn&&Tn(R)}function is(){oi.stop()}function Qe(){oi.start()}const oi=new Nx;oi.setAnimationLoop(Si),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(R){Tn=R,ut.setAnimationLoop(R),R===null?oi.stop():oi.start()},ut.addEventListener("sessionstart",is),ut.addEventListener("sessionend",Qe),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,H),_=Ae.get(R,L.length),_.init(j),L.push(_),Wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(Wt),yt=this.localClippingEnabled,ft=Ot.init(this.clippingPlanes,yt),S=Xt.get(R,N.length),S.init(),N.push(S),ut.enabled===!0&&ut.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&Ei(Rt,j,-1/0,C.sortObjects)}Ei(R,j,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(St,Ut),Se=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Se&&ie.addToRenderList(S,R),this.info.render.frame++,ft===!0&&Ot.beginShadows();const at=_.state.shadowsArray;Yt.render(at,R,j),ft===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,q=S.transmissive;if(_.setupLights(),j.isArrayCamera){const Rt=j.cameras;if(q.length>0)for(let Bt=0,Ft=Rt.length;Bt<Ft;Bt++){const Ct=Rt[Bt];wa(lt,q,R,Ct)}Se&&ie.render(R);for(let Bt=0,Ft=Rt.length;Bt<Ft;Bt++){const Ct=Rt[Bt];Ga(S,R,Ct,Ct.viewport)}}else q.length>0&&wa(lt,q,R,j),Se&&ie.render(R),Ga(S,R,j);H!==null&&D===0&&(O.updateMultisampleRenderTarget(H),O.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(C,R,j),Be.resetDefaultState(),U=-1,T=null,L.pop(),L.length>0?(_=L[L.length-1],ft===!0&&Ot.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Ei(R,j,at,lt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){lt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Wt);const Bt=xt.update(R),Ft=R.material;Ft.visible&&S.push(R,Bt,Ft,at,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Bt=xt.update(R),Ft=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pe.copy(Bt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ft)){const Ct=Bt.groups;for(let he=0,ce=Ct.length;he<ce;he++){const Zt=Ct[he],ye=Ft[Zt.materialIndex];ye&&ye.visible&&S.push(R,Bt,ye,at,pe.z,Zt)}}else Ft.visible&&S.push(R,Bt,Ft,at,pe.z,null)}}const Rt=R.children;for(let Bt=0,Ft=Rt.length;Bt<Ft;Bt++)Ei(Rt[Bt],j,at,lt)}function Ga(R,j,at,lt){const q=R.opaque,Rt=R.transmissive,Bt=R.transparent;_.setupLightsView(at),ft===!0&&Ot.setGlobalState(C.clippingPlanes,at),lt&&ne.viewport(I.copy(lt)),q.length>0&&Va(q,j,at),Rt.length>0&&Va(Rt,j,at),Bt.length>0&&Va(Bt,j,at),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function wa(R,j,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new fo(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?nu:Is,minFilter:lo,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Rt=_.state.transmissionRenderTarget[lt.id],Bt=lt.viewport||I;Rt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Ft=C.getRenderTarget();C.setRenderTarget(Rt),C.getClearColor(ht),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),Se&&ie.render(at);const Ct=C.toneMapping;C.toneMapping=wr;const he=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),ft===!0&&Ot.setGlobalState(C.clippingPlanes,lt),Va(R,at,lt),O.updateMultisampleRenderTarget(Rt),O.updateRenderTargetMipmap(Rt),be.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Zt=0,ye=j.length;Zt<ye;Zt++){const ge=j[Zt],Oe=ge.object,Le=ge.geometry,de=ge.material,se=ge.group;if(de.side===Fa&&Oe.layers.test(lt.layers)){const _n=de.side;de.side=Pi,de.needsUpdate=!0,Ti(Oe,at,lt,Le,de,se),de.side=_n,de.needsUpdate=!0,ce=!0}}ce===!0&&(O.updateMultisampleRenderTarget(Rt),O.updateRenderTargetMipmap(Rt))}C.setRenderTarget(Ft),C.setClearColor(ht,mt),he!==void 0&&(lt.viewport=he),C.toneMapping=Ct}function Va(R,j,at){const lt=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Rt=R.length;q<Rt;q++){const Bt=R[q],Ft=Bt.object,Ct=Bt.geometry,he=lt===null?Bt.material:lt,ce=Bt.group;Ft.layers.test(at.layers)&&Ti(Ft,j,at,Ct,he,ce)}}function Ti(R,j,at,lt,q,Rt){R.onBeforeRender(C,j,at,lt,q,Rt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(C,j,at,lt,R,Rt),q.transparent===!0&&q.side===Fa&&q.forceSinglePass===!1?(q.side=Pi,q.needsUpdate=!0,C.renderBufferDirect(at,j,lt,q,R,Rt),q.side=Rr,q.needsUpdate=!0,C.renderBufferDirect(at,j,lt,q,R,Rt),q.side=Fa):C.renderBufferDirect(at,j,lt,q,R,Rt),R.onAfterRender(C,j,at,lt,q,Rt)}function vn(R,j,at){j.isScene!==!0&&(j=Ve);const lt=Jt.get(R),q=_.state.lights,Rt=_.state.shadowsArray,Bt=q.state.version,Ft=Qt.getParameters(R,q.state,Rt,j,at),Ct=Qt.getProgramCacheKey(Ft);let he=lt.programs;lt.environment=R.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(R.isMeshStandardMaterial?rt:w).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,he===void 0&&(R.addEventListener("dispose",ue),he=new Map,lt.programs=he);let ce=he.get(Ct);if(ce!==void 0){if(lt.currentProgram===ce&&lt.lightsStateVersion===Bt)return Ra(R,Ft),ce}else Ft.uniforms=Qt.getUniforms(R),R.onBeforeCompile(Ft,C),ce=Qt.acquireProgram(Ft,Ct),he.set(Ct,ce),lt.uniforms=Ft.uniforms;const Zt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Ot.uniform),Ra(R,Ft),lt.needsLights=Gs(R),lt.lightsStateVersion=Bt,lt.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),lt.currentProgram=ce,lt.uniformsList=null,ce}function Kn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=kf.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ra(R,j){const at=Jt.get(R);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function Hs(R,j,at,lt,q){j.isScene!==!0&&(j=Ve),O.resetTextureUnits();const Rt=j.fog,Bt=lt.isMeshStandardMaterial?j.environment:null,Ft=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Al,Ct=(lt.isMeshStandardMaterial?rt:w).get(lt.envMap||Bt),he=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Zt=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,ge=!!at.morphAttributes.color;let Oe=wr;lt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Oe=C.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,de=Le!==void 0?Le.length:0,se=Jt.get(lt),_n=_.state.lights;if(ft===!0&&(yt===!0||R!==T)){const hn=R===T&&lt.id===U;Ot.setState(lt,R,hn)}let ze=!1;lt.version===se.__version?(se.needsLights&&se.lightsStateVersion!==_n.state.version||se.outputColorSpace!==Ft||q.isBatchedMesh&&se.batching===!1||!q.isBatchedMesh&&se.batching===!0||q.isBatchedMesh&&se.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&se.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&se.instancing===!1||!q.isInstancedMesh&&se.instancing===!0||q.isSkinnedMesh&&se.skinning===!1||!q.isSkinnedMesh&&se.skinning===!0||q.isInstancedMesh&&se.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&se.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&se.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&se.instancingMorph===!1&&q.morphTexture!==null||se.envMap!==Ct||lt.fog===!0&&se.fog!==Rt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Ot.numPlanes||se.numIntersection!==Ot.numIntersection)||se.vertexAlphas!==he||se.vertexTangents!==ce||se.morphTargets!==Zt||se.morphNormals!==ye||se.morphColors!==ge||se.toneMapping!==Oe||se.morphTargetsCount!==de)&&(ze=!0):(ze=!0,se.__version=lt.version);let li=se.currentProgram;ze===!0&&(li=vn(lt,j,q));let bi=!1,Qn=!1,Mn=!1;const je=li.getUniforms(),Fn=se.uniforms;if(ne.useProgram(li.program)&&(bi=!0,Qn=!0,Mn=!0),lt.id!==U&&(U=lt.id,Qn=!0),bi||T!==R){ne.buffers.depth.getReversed()?(Tt.copy(R.projectionMatrix),dS(Tt),pS(Tt),je.setValue(X,"projectionMatrix",Tt)):je.setValue(X,"projectionMatrix",R.projectionMatrix),je.setValue(X,"viewMatrix",R.matrixWorldInverse);const Ln=je.map.cameraPosition;Ln!==void 0&&Ln.setValue(X,qt.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&je.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&je.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Qn=!0,Mn=!0)}if(q.isSkinnedMesh){je.setOptional(X,q,"bindMatrix"),je.setOptional(X,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),je.setValue(X,"boneTexture",hn.boneTexture,O))}q.isBatchedMesh&&(je.setOptional(X,q,"batchingTexture"),je.setValue(X,"batchingTexture",q._matricesTexture,O),je.setOptional(X,q,"batchingIdTexture"),je.setValue(X,"batchingIdTexture",q._indirectTexture,O),je.setOptional(X,q,"batchingColorTexture"),q._colorsTexture!==null&&je.setValue(X,"batchingColorTexture",q._colorsTexture,O));const Un=at.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&$t.update(q,at,li),(Qn||se.receiveShadow!==q.receiveShadow)&&(se.receiveShadow=q.receiveShadow,je.setValue(X,"receiveShadow",q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Fn.envMap.value=Ct,Fn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Fn.envMapIntensity.value=j.environmentIntensity),Qn&&(je.setValue(X,"toneMappingExposure",C.toneMappingExposure),se.needsLights&&Ll(Fn,Mn),Rt&&lt.fog===!0&&Pt.refreshFogUniforms(Fn,Rt),Pt.refreshMaterialUniforms(Fn,lt,Q,J,_.state.transmissionRenderTarget[R.id]),kf.upload(X,Kn(se),Fn,O)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(kf.upload(X,Kn(se),Fn,O),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&je.setValue(X,"center",q.center),je.setValue(X,"modelViewMatrix",q.modelViewMatrix),je.setValue(X,"normalMatrix",q.normalMatrix),je.setValue(X,"modelMatrix",q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const hn=lt.uniformsGroups;for(let Ln=0,ka=hn.length;Ln<ka;Ln++){const ci=hn[Ln];Y.update(ci,li),Y.bind(ci,li)}}return li}function Ll(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Gs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,j,at){Jt.get(R.texture).__webglTexture=j,Jt.get(R.depthTexture).__webglTexture=at;const lt=Jt.get(R);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=at===void 0,lt.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const at=Jt.get(R);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Vs=X.createFramebuffer();this.setRenderTarget=function(R,j=0,at=0){H=R,z=j,D=at;let lt=!0,q=null,Rt=!1,Bt=!1;if(R){const Ct=Jt.get(R);if(Ct.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(X.FRAMEBUFFER,null),lt=!1;else if(Ct.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Ct.__hasExternalTextures)O.rebindTextures(R,Jt.get(R.texture).__webglTexture,Jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(Ct.__boundDepthTexture!==Zt){if(Zt!==null&&Jt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const he=R.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Bt=!0);const ce=Jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ce[j])?q=ce[j][at]:q=ce[j],Rt=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?q=Jt.get(R).__webglMultisampledFramebuffer:Array.isArray(ce)?q=ce[at]:q=ce,I.copy(R.viewport),it.copy(R.scissor),tt=R.scissorTest}else I.copy(P).multiplyScalar(Q).floor(),it.copy(st).multiplyScalar(Q).floor(),tt=bt;if(at!==0&&(q=Vs),ne.bindFramebuffer(X.FRAMEBUFFER,q)&&lt&&ne.drawBuffers(R,q),ne.viewport(I),ne.scissor(it),ne.setScissorTest(tt),Rt){const Ct=Jt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct.__webglTexture,at)}else if(Bt){const Ct=Jt.get(R.texture),he=j;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ct.__webglTexture,at,he)}else if(R!==null&&at!==0){const Ct=Jt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ct.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(R,j,at,lt,q,Rt,Bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft){ne.bindFramebuffer(X.FRAMEBUFFER,Ft);try{const Ct=R.texture,he=Ct.format,ce=Ct.type;if(!De.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-lt&&at>=0&&at<=R.height-q&&X.readPixels(j,at,lt,q,me.convert(he),me.convert(ce),Rt)}finally{const Ct=H!==null?Jt.get(H).__webglFramebuffer:null;ne.bindFramebuffer(X.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(R,j,at,lt,q,Rt,Bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft){const Ct=R.texture,he=Ct.format,ce=Ct.type;if(!De.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-lt&&at>=0&&at<=R.height-q){ne.bindFramebuffer(X.FRAMEBUFFER,Ft);const Zt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Zt),X.bufferData(X.PIXEL_PACK_BUFFER,Rt.byteLength,X.STREAM_READ),X.readPixels(j,at,lt,q,me.convert(he),me.convert(ce),0);const ye=H!==null?Jt.get(H).__webglFramebuffer:null;ne.bindFramebuffer(X.FRAMEBUFFER,ye);const ge=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await hS(X,ge,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Zt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Rt),X.deleteBuffer(Zt),X.deleteSync(ge),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,at=0){R.isTexture!==!0&&(ml("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const lt=Math.pow(2,-at),q=Math.floor(R.image.width*lt),Rt=Math.floor(R.image.height*lt),Bt=j!==null?j.x:0,Ft=j!==null?j.y:0;O.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,at,0,0,Bt,Ft,q,Rt),ne.unbindTexture()};const as=X.createFramebuffer(),Cr=X.createFramebuffer();this.copyTextureToTexture=function(R,j,at=null,lt=null,q=0,Rt=null){R.isTexture!==!0&&(ml("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,R=arguments[1],j=arguments[2],Rt=arguments[3]||0,at=null),Rt===null&&(q!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=q,q=0):Rt=0);let Bt,Ft,Ct,he,ce,Zt,ye,ge,Oe;const Le=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(at!==null)Bt=at.max.x-at.min.x,Ft=at.max.y-at.min.y,Ct=at.isBox3?at.max.z-at.min.z:1,he=at.min.x,ce=at.min.y,Zt=at.isBox3?at.min.z:0;else{const Un=Math.pow(2,-q);Bt=Math.floor(Le.width*Un),Ft=Math.floor(Le.height*Un),R.isDataArrayTexture?Ct=Le.depth:R.isData3DTexture?Ct=Math.floor(Le.depth*Un):Ct=1,he=0,ce=0,Zt=0}lt!==null?(ye=lt.x,ge=lt.y,Oe=lt.z):(ye=0,ge=0,Oe=0);const de=me.convert(j.format),se=me.convert(j.type);let _n;j.isData3DTexture?(O.setTexture3D(j,0),_n=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),_n=X.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),_n=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const ze=X.getParameter(X.UNPACK_ROW_LENGTH),li=X.getParameter(X.UNPACK_IMAGE_HEIGHT),bi=X.getParameter(X.UNPACK_SKIP_PIXELS),Qn=X.getParameter(X.UNPACK_SKIP_ROWS),Mn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Le.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Le.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,he),X.pixelStorei(X.UNPACK_SKIP_ROWS,ce),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Zt);const je=R.isDataArrayTexture||R.isData3DTexture,Fn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Un=Jt.get(R),hn=Jt.get(j),Ln=Jt.get(Un.__renderTarget),ka=Jt.get(hn.__renderTarget);ne.bindFramebuffer(X.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,ka.__webglFramebuffer);for(let ci=0;ci<Ct;ci++)je&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Jt.get(R).__webglTexture,q,Zt+ci),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Jt.get(j).__webglTexture,Rt,Oe+ci)),X.blitFramebuffer(he,ce,Bt,Ft,ye,ge,Bt,Ft,X.DEPTH_BUFFER_BIT,X.NEAREST);ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Jt.has(R)){const Un=Jt.get(R),hn=Jt.get(j);ne.bindFramebuffer(X.READ_FRAMEBUFFER,as),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,Cr);for(let Ln=0;Ln<Ct;Ln++)je?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Un.__webglTexture,q,Zt+Ln):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Un.__webglTexture,q),Fn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,hn.__webglTexture,Rt,Oe+Ln):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,hn.__webglTexture,Rt),q!==0?X.blitFramebuffer(he,ce,Bt,Ft,ye,ge,Bt,Ft,X.COLOR_BUFFER_BIT,X.NEAREST):Fn?X.copyTexSubImage3D(_n,Rt,ye,ge,Oe+Ln,he,ce,Bt,Ft):X.copyTexSubImage2D(_n,Rt,ye,ge,he,ce,Bt,Ft);ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(_n,Rt,ye,ge,Oe,Bt,Ft,Ct,de,se,Le.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(_n,Rt,ye,ge,Oe,Bt,Ft,Ct,de,Le.data):X.texSubImage3D(_n,Rt,ye,ge,Oe,Bt,Ft,Ct,de,se,Le):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Rt,ye,ge,Bt,Ft,de,se,Le.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Rt,ye,ge,Le.width,Le.height,de,Le.data):X.texSubImage2D(X.TEXTURE_2D,Rt,ye,ge,Bt,Ft,de,se,Le);X.pixelStorei(X.UNPACK_ROW_LENGTH,ze),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,li),X.pixelStorei(X.UNPACK_SKIP_PIXELS,bi),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Mn),Rt===0&&j.generateMipmaps&&X.generateMipmap(_n),ne.unbindTexture()},this.copyTextureToTexture3D=function(R,j,at=null,lt=null,q=0){return R.isTexture!==!0&&(ml("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,lt=arguments[1]||null,R=arguments[2],j=arguments[3],q=arguments[4]||0),ml('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,at,lt,q)},this.initRenderTarget=function(R){Jt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),ne.unbindTexture()},this.resetState=function(){z=0,D=0,H=null,ne.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ye._getUnpackColorSpace()}}const Ls=o=>({x:o.x,y:o.y,z:o.z}),fn=Wc.clamp;function WA(){const o=ca.useRef(null),[t,i]=ca.useState(!1),[s,l]=ca.useState(0),[c,h]=ca.useState(0),[d,m]=ca.useState("N 000°"),[p,g]=ca.useState("SEARCHING"),[v,x]=ca.useState("—"),[M,E]=ca.useState(!1),[b,S]=ca.useState("idle"),[_,N]=ca.useState(0),[L,C]=ca.useState(0);ca.useEffect(()=>{const z=o.current;if(!z)return;const D=new IS;D.background=new xe(9095150),D.fog=new Zc(9095150,90,310);const H=new Fs({side:Pi,depthWrite:!1,uniforms:{topColor:{value:new xe(3768260)},horizonColor:{value:new xe(13166838)},lowerColor:{value:new xe(16107925)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPosition;
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 lowerColor;
        void main() {
          float h = normalize(vWorldPosition).y;
          float upper = smoothstep(0.02, 0.70, h);
          float lower = smoothstep(-0.18, 0.02, h);
          vec3 lowMix = mix(lowerColor, horizonColor, lower);
          gl_FragColor = vec4(mix(lowMix, topColor, upper), 1.0);
        }
      `}),U=new ee(new Ea(480,24,16),H);D.add(U);const T=new Ta(64,z.clientWidth/z.clientHeight,.1,700);T.position.set(0,5,10);const I=new XA({antialias:!0,powerPreference:"high-performance"});I.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),I.setSize(z.clientWidth,z.clientHeight),I.shadowMap.enabled=!1,I.shadowMap.type=tx,I.outputColorSpace=Zi,I.toneMapping=nx,I.toneMappingExposure=1.08,I.setClearColor(9095150,1),I.domElement.dataset.testid="game-canvas",I.domElement.tabIndex=0,I.domElement.style.width="100%",I.domElement.style.height="100%",z.appendChild(I.domElement);const it=new a1(14284031,1516603,2);D.add(it);const tt=new Sp(16773072,3.2);tt.position.set(60,110,45),tt.castShadow=!0,tt.shadow.mapSize.set(2048,2048),tt.shadow.camera.left=-140,tt.shadow.camera.right=140,tt.shadow.camera.top=140,tt.shadow.camera.bottom=-140,tt.shadow.camera.far=300,tt.shadow.bias=-18e-5,tt.shadow.normalBias=.035,D.add(tt);const ht=new Sp(8118271,1);ht.position.set(-45,35,-70),D.add(ht);const mt=new Sp(16757870,.42);mt.position.set(35,18,70),D.add(mt);const B=new ee(new Kf(18,48),new Ba({color:16767136,transparent:!0,opacity:.82,depthWrite:!1,fog:!1}));B.position.set(145,105,-260),B.lookAt(T.position),D.add(B);const J=[];let Q=9157;const St=()=>(Q=Q*1664525+1013904223>>>0,Q/4294967296);for(let k=0;k<420;k++){const $=St()*Math.PI*2,pt=180+St()*220,Et=55+St()*190;J.push(Math.cos($)*pt,Et,Math.sin($)*pt)}const Ut=new Zn;Ut.setAttribute("position",new Xe(J,3));const P=new pm({color:13626111,size:.75,sizeAttenuation:!0,transparent:!0,opacity:.82}),st=new x_(Ut,P);st.visible=!1,D.add(st);const bt=new Ba({color:15398911,transparent:!0,opacity:.18,depthWrite:!1,fog:!0}),Z=new ji(new Qf(1,1),bt,28),ft=new yn;for(let k=0;k<28;k++){const $=St()*Math.PI*2,pt=95+St()*180;ft.position.set(Math.cos($)*pt,48+St()*48,Math.sin($)*pt),ft.scale.set(8+St()*14,1.5+St()*3.4,4+St()*9),ft.rotation.set(St()*.2,St()*Math.PI,St()*.1),ft.updateMatrix(),Z.setMatrixAt(k,ft.matrix)}Z.instanceMatrix.needsUpdate=!0,D.add(Z);const yt=0,Tt=1.15,Wt=.92,qt=.42,pe=1.75,Ve=Math.PI/4,Se=new ee(new Os(520,520),new gn({color:2372164,roughness:.96,metalness:.02}));Se.rotation.x=-Math.PI/2,Se.receiveShadow=!0,D.add(Se);const ln=new gn({color:1383720,roughness:.92}),X=new Os(520,10),ii=new Os(10,520);for(let k=-180;k<=180;k+=45){const $=new ee(X,ln);$.rotation.x=-Math.PI/2,$.position.set(0,.015,k),D.add($);const pt=new ee(ii,ln);pt.rotation.x=-Math.PI/2,pt.position.set(k,.016,0),D.add(pt)}const be=new Ba({color:15195574}),De=new Os(4.6,.13),ne=[];for(let k=-180;k<=180;k+=45)ne.push(k);const ke=[];for(let k=-240;k<=240;k+=12)ke.push(k);const Jt=new ji(De,be,ne.length*ke.length*2),O=new yn;let w=0;for(const k of ne)for(const $ of ke)O.position.set($,.028,k),O.rotation.set(-Math.PI/2,0,0),O.updateMatrix(),Jt.setMatrixAt(w++,O.matrix),O.position.set(k,.029,$),O.rotation.set(-Math.PI/2,0,Math.PI/2),O.updateMatrix(),Jt.setMatrixAt(w++,O.matrix);Jt.instanceMatrix.needsUpdate=!0,D.add(Jt);const rt=new gn({color:4609380,roughness:.9,metalness:.03}),gt=new gn({color:7899544,roughness:.72,metalness:.05}),wt=new Cn(33,.025,33),xt=new Cn(34.2,.018,34.2),Qt=new ji(wt,rt,81),Pt=new ji(xt,gt,81);Qt.receiveShadow=!0,Pt.receiveShadow=!0;const Xt=new yn;let Ae=0;for(let k=-4;k<=4;k++)for(let $=-4;$<=4;$++){const pt=k*45+22.5,Et=$*45+22.5;Xt.position.set(pt,.014,Et),Xt.updateMatrix(),Pt.setMatrixAt(Ae,Xt.matrix),Xt.position.set(pt,.031,Et),Xt.updateMatrix(),Qt.setMatrixAt(Ae,Xt.matrix),Ae+=1}Qt.instanceMatrix.needsUpdate=!0,Pt.instanceMatrix.needsUpdate=!0,D.add(Pt,Qt);const Ot=new Ba({color:15265264,transparent:!0,opacity:.72}),Yt=new Os(.52,5.2),ie=[];for(let k=-180;k<=180;k+=45)for(let $=-180;$<=180;$+=45)for(let pt=-3;pt<=3;pt++)ie.push([k+pt*.88,.036,$+6.2]),ie.push([k+6.2,.037,$+pt*.88]);const $t=new ji(Yt,Ot,ie.length),Ht=new yn;ie.forEach((k,$)=>{Ht.position.set(k[0],k[1],k[2]),Ht.rotation.set(-Math.PI/2,0,$%14>=7?Math.PI/2:0),Ht.updateMatrix(),$t.setMatrixAt($,Ht.matrix)}),$t.instanceMatrix.needsUpdate=!0,D.add($t);const re=[],me=[],Be=64,Y=new Uint8Array(Be*Be*4);for(let k=0;k<Be;k++)for(let $=0;$<Be;$++){const pt=(k*Be+$)*4,Et=$%8,Nt=k%8,At=Et>=2&&Et<=5&&Nt>=2&&Nt<=5,ae=($*13+k*7)%17>5,le=At?ae?202:76:25;Y[pt]=At?Math.min(255,le+18):le,Y[pt+1]=At?Math.min(255,le+34):le+8,Y[pt+2]=At?Math.min(255,le+42):le+14,Y[pt+3]=255}const Lt=new Tx(Y,Be,Be,ba);Lt.colorSpace=Zi,Lt.wrapS=$c,Lt.wrapT=$c,Lt.repeat.set(2.2,5.4),Lt.magFilter=Ki,Lt.needsUpdate=!0;const ut=[new gn({color:5400957,map:Lt,emissiveMap:Lt,roughness:.58,metalness:.2}),new gn({color:7693163,map:Lt,emissiveMap:Lt,roughness:.68,metalness:.12}),new gn({color:5862505,map:Lt,emissiveMap:Lt,roughness:.62,metalness:.11}),new gn({color:7104136,map:Lt,emissiveMap:Lt,roughness:.56,metalness:.23})],vt=new gn({color:9165298,emissive:1058614,emissiveIntensity:.28,roughness:.24,metalness:.58,transparent:!0,opacity:.61}),It=new gn({color:2504003,roughness:.7,metalness:.22}),Gt=new gn({color:10465985,roughness:.5,metalness:.42}),ue=new gn({color:9302015,emissive:2738431,emissiveIntensity:1.25,roughness:.24,metalness:.25}),nn=new gn({color:16760970,emissive:16739644,emissiveIntensity:.85,roughness:.32,metalness:.18}),cn=new ji(new Cn(1,1,1),It,1600);cn.count=0,cn.castShadow=!0,cn.receiveShadow=!0,D.add(cn);const Ue=new ji(new Cn(1,1,1),Gt,320);Ue.count=0,Ue.castShadow=!0,D.add(Ue);const Tn=new ji(new ti(1,1.2,1,8),It,320);Tn.count=0,Tn.castShadow=!0,D.add(Tn);const Si=new ji(new Cn(1,1,1),ue,180);Si.count=0,D.add(Si);const is=new ji(new Cn(1,1,1),nn,180);is.count=0,D.add(is);const Qe=new yn,oi=(k,$,pt)=>{k.count>=k.instanceMatrix.count||(Qe.position.copy($),Qe.rotation.set(0,0,0),Qe.scale.copy(pt),Qe.updateMatrix(),k.setMatrixAt(k.count,Qe.matrix),k.count+=1,k.instanceMatrix.needsUpdate=!0)};function Ei(k,$,pt,Et,Nt,At,ae,le){const ve=ut[ae%ut.length],Ne=new ee(le??new Cn(Et,Nt,At),ve);Ne.position.set($,Nt/2,pt),Ne.castShadow=!0,Ne.receiveShadow=!0,Ne.userData.buildingId=k,D.add(Ne),Ne.updateMatrixWorld(!0);const Pn=new Bs().setFromObject(Ne);re.push({id:k,mesh:Ne,box:Pn}),me.push(Ne);const Vn=new ee(new Cn(Math.max(2,Et*.74),Math.max(4,Nt*.66),.09),vt);Vn.position.set($,Nt*.54,pt+At/2+.052),D.add(Vn);const Vi=new ee(new Cn(.09,Math.max(4,Nt*.52),Math.max(2,At*.66)),vt);Vi.position.set($+Et/2+.052,Nt*.5,pt),D.add(Vi);const ga=Math.min(2.1,Nt*.09);oi(cn,new F($,ga/2,pt),new F(Et*1.035,ga,At*1.035));const Za=Math.max(5,Nt*.78);for(const[Co,_i]of[[-1,-1],[-1,1],[1,-1],[1,1]])oi(cn,new F($+Co*(Et/2+.09),Za/2+.7,pt+_i*(At/2+.09)),new F(.22,Za,.22));return oi(cn,new F($,Nt+.12,pt),new F(Et*1.045,.34,At*1.045)),oi(Ue,new F($,Nt+.46,pt),new F(Math.max(1.4,Et*.25),.62,Math.max(1.4,At*.25))),oi(Tn,new F($+Et*.12,Nt+1.15,pt-At*.08),new F(Math.max(.16,Math.min(Et,At)*.025),1.15,Math.max(.16,Math.min(Et,At)*.025))),Nt>34&&oi((ae+Math.round(Nt))%2===0?Si:is,new F($,Nt*.79,pt+At/2+.115),new F(Math.max(1.8,Et*.42),.095,.12)),Ne}let Ga=48271;const wa=()=>(Ga=Ga*1664525+1013904223>>>0,Ga/4294967296);let Va=0;for(let k=-4;k<=4;k++)for(let $=-4;$<=4;$++){const pt=k*45+22.5,Et=$*45+22.5;if(Math.abs(pt)<25&&Math.abs(Et)<25)continue;const Nt=wa()>.48?2:1;for(let At=0;At<Nt;At++){const ae=13+wa()*8,le=13+wa()*8,ve=20+wa()*42,Ne=(At===0?-1:1)*(Nt===2?7:0),Pn=(wa()-.5)*7;Ei(`building-${Va++}`,pt+Ne,Et+Pn,ae,ve,le,Va)}}Ei("landmark-needle",0,-112,18,82,18,3);const Ti=new ee(new ti(.7,2.6,30,12),new gn({color:14412543,emissive:2575464,emissiveIntensity:1.2,metalness:.55}));Ti.position.set(0,97,-112),Ti.castShadow=!0,D.add(Ti);const vn=new gn({color:12186623,emissive:2670568,emissiveIntensity:1.15,metalness:.48,roughness:.24});for(const[k,$]of[[83.5,5.4],[88.5,4.3],[93.5,3.3]]){const pt=new ee(new $f($,.18,8,28),vn);pt.position.set(0,k,-112),pt.rotation.x=Math.PI/2,D.add(pt)}const Kn=new ti(8.5,10.5,58,16);Ei("landmark-lantern-west",-112,-20,17,58,17,2,Kn),Ei("landmark-lantern-east",112,70,17,52,17,1,new ti(8.5,10.5,52,16));const Ra=new gn({color:2639966,metalness:.52,roughness:.3}),Hs=new gn({color:12057599,emissive:3594495,emissiveIntensity:1.4,roughness:.18});for(const[k,$,pt]of[[-112,59.2,-20],[112,53.2,70]]){const Et=new ee(new ti(7.2,8.7,1.2,18),Ra);Et.position.set(k,$,pt),Et.castShadow=!0,D.add(Et);const Nt=new ee(new $f(7.5,.14,8,28),Hs);Nt.position.set(k,$+.65,pt),Nt.rotation.x=Math.PI/2,D.add(Nt);const At=new ee(new ti(.16,.3,4.2,8),Hs);At.position.set(k,$+2.6,pt),D.add(At)}Ei("landmark-step-base",72,-118,28,45,24,0),Ei("landmark-step-mid",72,-118,20,63,18,0),Ei("landmark-step-crown",72,-118,12,78,12,0);const Ll=new gn({color:16761482,emissive:16740669,emissiveIntensity:.9,metalness:.36,roughness:.3});for(let k=-1;k<=1;k++){const $=new ee(new Cn(.45,5.8-Math.abs(k)*1.1,.45),Ll);$.position.set(72+k*2.5,81.2-Math.abs(k)*.35,-118),$.castShadow=!0,D.add($)}const Gs=new ee(new Kf(17,48),new gn({color:4155728,roughness:1}));Gs.rotation.x=-Math.PI/2,Gs.position.y=.03,Gs.receiveShadow=!0,D.add(Gs);const Vs=new ee(new Nm(2.2,.45,100,12),new Xc({color:14218239,metalness:.78,roughness:.2,clearcoat:.6,clearcoatRoughness:.18}));Vs.position.set(0,4.2,0),Vs.castShadow=!0,D.add(Vs);const as=new gn({color:5916216,roughness:.94}),Cr=new gn({color:3235659,roughness:.86}),R=new ji(new ti(.16,.22,1,7),as,18),j=new ji(new Qf(1,1),Cr,18);R.castShadow=!0,j.castShadow=!0,D.add(R,j);const at=[[-12,-8],[-8,-13],[8,-13],[13,-7],[-13,7],[-8,13],[8,13],[13,7],[-15,0],[15,0]];at.forEach(([k,$],pt)=>{Qe.position.set(k,1.15,$),Qe.scale.set(1,2.3,1),Qe.rotation.set(0,pt*.57,0),Qe.updateMatrix(),R.setMatrixAt(pt,Qe.matrix),Qe.position.set(k,3.2,$),Qe.scale.set(1.45+pt%3*.12,1.15+pt%2*.16,1.45+pt%3*.12),Qe.rotation.set(0,pt*.63,0),Qe.updateMatrix(),j.setMatrixAt(pt,Qe.matrix)}),R.count=at.length,j.count=at.length,R.instanceMatrix.needsUpdate=!0,j.instanceMatrix.needsUpdate=!0;const lt=new gn({color:2306107,metalness:.52,roughness:.48}),q=new gn({color:16770994,emissive:16757583,emissiveIntensity:1.35,roughness:.2}),Rt=new ji(new ti(.06,.09,1,7),lt,96),Bt=new ji(new Ea(.18,8,6),q,96);Rt.castShadow=!0,D.add(Rt,Bt);const Ft=[];for(let k=-180;k<=180;k+=45){for(let $=-160;$<=160&&!(Ft.length>=96);$+=40)Ft.push([$,k+7.1]);if(Ft.length>=96)break}Ft.forEach(([k,$],pt)=>{Qe.position.set(k,2.1,$),Qe.scale.set(1,4.2,1),Qe.rotation.set(0,0,0),Qe.updateMatrix(),Rt.setMatrixAt(pt,Qe.matrix),Qe.position.set(k,4.2,$),Qe.scale.set(1,1,1),Qe.updateMatrix(),Bt.setMatrixAt(pt,Qe.matrix)}),Rt.count=Ft.length,Bt.count=Ft.length,Rt.instanceMatrix.needsUpdate=!0,Bt.instanceMatrix.needsUpdate=!0;const Ct=new co;D.add(Ct);const he=new Xc({color:1685704,roughness:.34,metalness:.22,clearcoat:.42,clearcoatRoughness:.28}),ce=new Xc({color:463913,roughness:.46,metalness:.3,clearcoat:.32,clearcoatRoughness:.34}),Zt=new Xc({color:16732776,emissive:3868432,emissiveIntensity:.34,roughness:.31,metalness:.2,clearcoat:.5}),ye=new gn({color:16055807,emissive:6676479,emissiveIntensity:1.65,roughness:.16}),ge=new Xc({color:1058371,roughness:.3,metalness:.52,clearcoat:.55,clearcoatRoughness:.24}),Oe=new ee(new Zf(.39,.74,8,14),he);Oe.position.y=1.46,Oe.scale.set(1,1.1,.74),Oe.castShadow=!0,Ct.add(Oe);const Le=new ee(new Zf(.18,.58,6,10),ge);Le.position.set(0,1.79,-.015),Le.rotation.z=Math.PI/2,Le.scale.set(.78,1.12,.62),Le.castShadow=!0,Ct.add(Le);const de=new ee(new Ea(.35,14,10),ce);de.position.set(0,1.04,0),de.scale.set(1.08,.52,.74),de.castShadow=!0,Ct.add(de);const se=new ee(new ti(.145,.17,.22,10),ge);se.position.set(0,1.99,0),se.castShadow=!0,Ct.add(se);const _n=new ee(new Jc(.18,0),Zt);_n.position.set(0,1.64,.39),_n.scale.set(.72,1.16,.22),_n.rotation.z=Math.PI/4,Ct.add(_n);const ze=new ee(new ti(.024,.024,.52,6),Zt);ze.position.set(0,1.39,.39),Ct.add(ze);const li=new Cn(.32,.035,.035),bi=new ee(li,Zt),Qn=new ee(li,Zt);bi.position.set(-.17,1.62,.395),Qn.position.set(.17,1.62,.395),bi.rotation.z=-.52,Qn.rotation.z=.52,Ct.add(bi,Qn);const Mn=new ee(new Ea(.32,24,18),ce);Mn.position.y=2.22,Mn.scale.set(.9,1.08,.88),Mn.castShadow=!0,Ct.add(Mn);const je=new Ea(.105,10,6),Fn=new ee(je,ye),Un=new ee(je,ye);Fn.position.set(-.115,2.27,.27),Un.position.set(.115,2.27,.27),Fn.scale.set(.58,1.3,.18),Un.scale.set(.58,1.3,.18),Fn.rotation.z=-.11,Un.rotation.z=.11,Ct.add(Fn,Un);const hn=new Cn(.17,.026,.035),Ln=new ee(hn,Zt),ka=new ee(hn,Zt);Ln.position.set(-.11,2.38,.268),ka.position.set(.11,2.38,.268),Ln.rotation.z=-.2,ka.rotation.z=.2,Ct.add(Ln,ka);const ci=new ee(new Cn(.026,.33,.03),ge);ci.position.set(0,2.17,.292),Ct.add(ci);const Nl=new ee(new Jc(.09,0),ye);Nl.position.set(0,1.58,-.38),Nl.scale.set(.7,1.25,.45),Ct.add(Nl);const Ol=he,iu=new ti(.095,.13,.88,10),zl=new ti(.075,.105,.48,10),ah=new ti(.125,.17,.92,10),sh=new ti(.09,.135,.58,10),mo=new Ea(.13,10,7),ua=k=>{const $=new co;$.position.set(.5*k,1.78,0);const pt=new ee(new Ea(.18,12,8),ge);pt.position.set(0,-.03,0),pt.scale.set(1.12,.9,.92);const Et=new ee(iu,Ol);Et.position.y=-.4;const Nt=new ee(new Ea(.115,10,7),ge);Nt.position.y=-.82,Nt.scale.set(1.04,.82,1);const At=new ee(zl,Zt);At.position.y=-1.02,At.scale.set(1.1,1.04,.95);const ae=new ee(new ti(.1,.12,.22,8),ge);ae.position.y=-1.22;const le=new ee(mo,ce);le.position.y=-1.36,le.scale.set(.94,1.1,.86);const ve=new ee(new Cn(.14,.07,.12),ye);return ve.position.set(0,-1.2,.09),[pt,Et,Nt,At,ae,le,ve].forEach(Ne=>{Ne.castShadow=!0,$.add(Ne)}),Ct.add($),$},go=k=>{const $=new co;$.position.set(.225*k,1.17,0);const pt=new ee(new Ea(.18,10,7),ge);pt.position.y=-.02;const Et=new ee(ah,ce);Et.position.y=-.34,Et.scale.set(1.08,1,.94);const Nt=new ee(new Jc(.135,0),Zt);Nt.position.set(0,-.69,.105),Nt.scale.set(.92,1.15,.5);const At=new ee(sh,Ol);At.position.y=-.9;const ae=new ee(new Cn(.14,.34,.08),ge);ae.position.set(0,-.89,.115);const le=new ee(new Cn(.24,.2,.46),ce);le.position.set(0,-1.15,.09),le.rotation.x=-.08;const ve=new ee(new Cn(.25,.055,.5),Zt);return ve.position.set(0,-1.25,.095),[pt,Et,Nt,At,ae,le,ve].forEach(Ne=>{Ne.castShadow=!0,$.add(Ne)}),Ct.add($),$},fa=ua(-1),Ai=ua(1),wi=go(-1),Ca=go(1),Vt=new F(0,0,18),zt=new F;Ct.position.copy(Vt);const Sn=.65,ha=2.6;let ai=!0,En="idle",dn=0,Da=.24,Ri=Da,vo=dn,gi=new F(0,1.4,14),Qi=0,_o=!0,ui=!0,ss=0,ks=0,Xs=performance.now(),Pl=!1,Xa=.12,Ji=0,Hn=0,Ze=0,fi=0,Il=0,Dr=!1,Bl=!1,Ci=0,rs=0,au=!0;const da=new Set,xo=new F,Di=new F,Jn=new F,Nn=new F,Bi=new F,bn=new F,Fl=new F,Ws=new F,qs=new F,Je=new F,Hl=new F,Gl=new F,Vl=new A_;Vl.far=150;let os=!1;const Ur=new F;let Lr=null,On=!1,we=null,kl=null,zn=null;const Xl=8,yo=new Zn().setFromPoints(Array.from({length:Xl+1},()=>new F)),Ys=new bx({color:16121343,transparent:!0,opacity:.98}),Wa=new GS(yo,Ys);Wa.visible=!1,D.add(Wa);const Wl=new Ba({color:6741503,transparent:!0,opacity:.3,blending:gl,depthWrite:!1}),Ua=new ee(new ti(.04,.022,1,8),Wl);Ua.visible=!1,D.add(Ua);const ql=new Ba({color:16777215,transparent:!0,opacity:.82,depthWrite:!1}),qa=new ee(new ti(.009,.009,1,6),ql);qa.visible=!1,D.add(qa);const Yl=new Ba({color:7925759,transparent:!0,opacity:0,blending:gl,depthWrite:!1,side:Fa}),Fi=new ee(new Jf(.22,.34,20),Yl);Fi.visible=!1,D.add(Fi);const su=28,pa=new Float32Array(su*3),jl=new Zn;jl.setAttribute("position",new Aa(pa,3));const Mo=new pm({color:9433087,size:.11,transparent:!0,opacity:0,blending:gl,depthWrite:!1,sizeAttenuation:!0}),ru=new x_(jl,Mo);D.add(ru);const Hi=new ee(new Ea(.2,8,6),new Ba({color:10416127,transparent:!0,opacity:.75}));Hi.visible=!1,D.add(Hi);const js=new Ba({color:11071487,transparent:!0,opacity:0,depthWrite:!1,side:Fa,blending:gl}),ls=new ee(new Jf(.4,.54,32),js);ls.rotation.x=-Math.PI/2,ls.visible=!1,D.add(ls);const Zs=new A_,Zl=new Bs,Kl=new F,So=new F,Eo=new F,Ql=new F,Jl=new F,cs=new F,Nr=new F,rh=new F,La=new F;function ou(){Vl.setFromCamera(new jt(0,0),T);const k=Vl.intersectObjects(me,!1)[0];if(k){os=!0,Ur.copy(k.point),Lr=k.object.userData.buildingId??null,Hi.position.copy(k.point),Hi.visible=!0;return}os=!1,Ur.set(0,0,0),Lr=null,Hi.visible=!1}function oh(){if(!os||!Lr||!Hi.visible||(ou(),!os||!Lr||!Hi.visible))return;const k=Vt.distanceTo(Ur);if(!Number.isFinite(k)||k<=.01)return;On=!0,we=Ur.clone(),kl=Lr,zn=k,Je.copy(Vt).sub(we).normalize();const $=Math.max(0,zt.dot(Je));fi=fn(.32+$*.055+zt.length()*.008,.32,1),Ze=Math.max(Ze,fi*.45);const pt=we.y-(Vt.y+1);if(pt>1.5){const Et=15.2+fn(pt*.04,0,1.4);zt.y=Math.max(zt.y,Et),ai=!1,Xa=0,Ji=0,Hn=Math.max(Hn,.22)}Hn=Math.max(Hn,.12+fi*.12),Wa.visible=!0}function Gn(k=!0){k&&On&&(rs=Math.max(rs,fn((zt.length()-7)/34,.12,1))),On=!1,we=null,kl=null,zn=null,fi=0,Wa.visible=!1}const vi=.025,Or=new F,zr=new F,us=new F,ma=new F,To=new F;function lu(k,$){const pt=k,Et=k+ha;return pt<$.max.y-vi&&Et>$.min.y+vi}function Ya(k,$,pt=0){return k.x>$.min.x-Sn+pt&&k.x<$.max.x+Sn-pt&&k.z>$.min.z-Sn+pt&&k.z<$.max.z+Sn-pt}function bo(){for(let k=0;k<4;k++){let $=!1;for(const pt of re){const Et=pt.box;if(!lu(Vt.y,Et)||!Ya(Vt,Et))continue;const Nt=Vt.x-(Et.min.x-Sn),At=Et.max.x+Sn-Vt.x,ae=Vt.z-(Et.min.z-Sn),le=Et.max.z+Sn-Vt.z,ve=Math.min(Nt,At,ae,le);ve===Nt?(Vt.x=Et.min.x-Sn-vi,zt.x>0&&(zt.x=0)):ve===At?(Vt.x=Et.max.x+Sn+vi,zt.x<0&&(zt.x=0)):ve===ae?(Vt.z=Et.min.z-Sn-vi,zt.z>0&&(zt.z=0)):(Vt.z=Et.max.z+Sn+vi,zt.z<0&&(zt.z=0)),$=!0}if(!$)break}}function Pr(k,$,pt){const Et=pt.min.x-Sn,Nt=pt.max.x+Sn,At=pt.min.z-Sn,ae=pt.max.z+Sn;let le=-1/0,ve=1/0,Ne=0;if(Math.abs($.x)<1e-8){if(k.x<=Et||k.x>=Nt)return null}else $.x>0?(le=(Et-k.x)/$.x,ve=(Nt-k.x)/$.x,Ne=-1):(le=(Nt-k.x)/$.x,ve=(Et-k.x)/$.x,Ne=1);let Pn=-1/0,Vn=1/0,Vi=0;if(Math.abs($.z)<1e-8){if(k.z<=At||k.z>=ae)return null}else $.z>0?(Pn=(At-k.z)/$.z,Vn=(ae-k.z)/$.z,Vi=-1):(Pn=(ae-k.z)/$.z,Vn=(At-k.z)/$.z,Vi=1);const ga=Math.max(le,Pn),Za=Math.min(ve,Vn);return ga>Za||Za<0||ga<0||ga>1?null:(Or.set(0,0,0),le>Pn?Or.set(Ne,0,0):Or.set(0,0,Vi),{t:ga,normal:Or.clone()})}function $l(k,$){let pt=null;if($.y<-1e-8&&k.y>=yt){const Et=(yt-k.y)/$.y;Et>=0&&Et<=1&&(pt={t:Et,normal:new F(0,1,0),building:null,kind:"ground"})}for(const Et of re){const Nt=Et.box;if($.y<-1e-8&&k.y>=Nt.max.y-vi){const le=(Nt.max.y-k.y)/$.y;le>=0&&le<=1&&(!pt||le<pt.t)&&(To.copy(k).addScaledVector($,le),Ya(To,Nt,vi*.5)&&(pt={t:le,normal:new F(0,1,0),building:Et,kind:"roof"}))}const At=Pr(k,$,Nt);if(!At||pt&&At.t>=pt.t)continue;const ae=k.y+$.y*At.t;lu(ae,Nt)&&(pt={t:At.t,normal:At.normal,building:Et,kind:"wall"})}return pt}function tc(k,$){Vt.copy(k),bo(),ma.copy($).sub(k),ai=!1;for(let pt=0;pt<5&&!(ma.lengthSq()<1e-10);pt++){zr.copy(Vt);const Et=$l(zr,ma);if(!Et){Vt.add(ma),ma.set(0,0,0);break}const Nt=Math.max(0,Et.t-1e-5);Vt.addScaledVector(ma,Nt),Et.kind==="wall"?Vt.addScaledVector(Et.normal,vi):Et.kind==="ground"?Vt.y=yt:Et.kind==="roof"&&Et.building&&(Vt.y=Et.building.box.max.y);const At=Math.max(0,1-Et.t);ma.multiplyScalar(At);const ae=ma.dot(Et.normal);ae<0&&ma.addScaledVector(Et.normal,-ae);const le=zt.dot(Et.normal);le<0&&zt.addScaledVector(Et.normal,-le),Et.normal.y>.5&&(ai=!0)}bo(),Vt.y<=yt+1e-5&&(Vt.y=yt,zt.y<0&&(zt.y=0),ai=!0)}function ja(k,$,pt=!0){if(!On||!we||zn===null)return!1;Je.copy(k).sub(we);const Et=Je.length();if(!Number.isFinite(Et)||Et<=zn||Et<1e-4)return!1;const Nt=Et-zn;Je.multiplyScalar(1/Et),k.copy(we).addScaledVector(Je,zn);const At=zt.dot(Je);if(At>0&&zt.addScaledVector(Je,-At),pt){const ae=zt.dot(Je),ve=Math.max(0,zt.lengthSq()-ae*ae)/Math.max(zn,1),Ne=Nt/Math.max($,1/240),Pn=fn(At*.065+Ne*.018+ve*.019,0,1);Ze=Math.max(Ze,Pn),(At>2.2||Nt>.055)&&(fi=Math.max(fi,fn(At*.044+Nt*1.45,0,.88)),Hn=Math.max(Hn,fi*.075))}return!0}function fs(){if(!(zt.y>.05)){if(Math.abs(Vt.y-yt)<=.055){Vt.y=yt,zt.y<0&&(zt.y=0),ai=!0;return}for(const k of re)if(!(Math.abs(Vt.y-k.box.max.y)>.055)&&Ya(Vt,k.box,vi)){Vt.y=k.box.max.y,zt.y<0&&(zt.y=0),ai=!0;return}}}function ec(k){Gl.copy(Vt),xo.set(Math.sin(dn),0,-Math.cos(dn)).normalize(),Di.set(Math.cos(dn),0,Math.sin(dn)).normalize(),Jn.set(0,0,0),da.has("KeyW")&&Jn.add(xo),da.has("KeyS")&&Jn.sub(xo),da.has("KeyD")&&Jn.add(Di),da.has("KeyA")&&Jn.sub(Di),Jn.lengthSq()>0&&Jn.normalize();const $=da.has("ShiftLeft")||da.has("ShiftRight"),pt=Jn.lengthSq()>0;if(Ze*=Math.exp(-8.5*k),fi*=Math.exp(-7.2*k),On&&we){if(pt&&(Je.copy(Vt).sub(we),Je.lengthSq()>1e-4&&(Je.normalize(),Hl.copy(Jn).addScaledVector(Je,-Jn.dot(Je)),Hl.lengthSq()>1e-4))){const At=$?11.5:9;zt.addScaledVector(Hl.normalize(),At*k)}}else if(ai)if(pt){const At=$?20.5:13.8,ae=Jn.x*At,le=Jn.z*At,ve=$?54:48;Nn.set(ae-zt.x,0,le-zt.z);const Ne=ve*k;Nn.lengthSq()>Ne*Ne&&Nn.setLength(Ne),zt.x+=Nn.x,zt.z+=Nn.z}else{const At=Math.exp(-9.5*k);zt.x*=At,zt.z*=At,Math.abs(zt.x)<.01&&(zt.x=0),Math.abs(zt.z)<.01&&(zt.z=0)}else if(pt){const At=zt.x*Jn.x+zt.z*Jn.z,le=Math.max(0,($?17.5:13)-At),ve=Math.min(7.5*k,le);zt.x+=Jn.x*ve,zt.z+=Jn.z*ve}if(On&&we&&zn!==null){Je.copy(Vt).sub(we);const At=Je.length();if(At>1e-4){Je.multiplyScalar(1/At);const ae=Math.abs(Vt.z-we.z)/At,le=fn((At/Math.max(zn,.001)-.86)/.14,0,1);if(ae>.05&&le>0){const ve=ae*le*(2.15+Ze*2.65);zt.addScaledVector(Je,-ve*k)}}}if(On&&we&&zn!==null){Je.copy(Vt).sub(we);const At=Je.length();if(At>1e-4){Je.multiplyScalar(1/At);const ae=we.y-(Vt.y+.9),le=Math.max(0,-Je.y),ve=fn((At/Math.max(zn,.001)-.82)/.18,0,1);if(ae>1&&le>.08&&ve>0){const Ne=.62+.38*fn(ae/18,0,1),Pn=ve*Ne*(26+le*38+Ze*16+fi*8);zt.addScaledVector(Je,-Pn*k)}}}const Et=da.has("Space");Xa=ai?.12:Math.max(0,Xa-k),Ji=Math.max(0,Ji-k),Et&&!Pl&&(Ji=.12),Ji>0&&Xa>0&&(zt.y=11.4,ai=!1,Xa=0,Ji=0,Hn=Math.max(Hn,.07)),Pl=Et,zt.y+=-24*k,On&&zt.lengthSq()>3600&&zt.setLength(60),us.copy(Vt).addScaledVector(zt,k),ja(us,k,!0);const Nt=zt.y;if(au=ai,tc(Gl,us),fs(),On&&we&&zn!==null){Nn.copy(Vt).sub(we);const At=Nn.length();At>zn+.002&&At>1e-4&&(zr.copy(Vt),Nn.multiplyScalar(1/At),us.copy(we).addScaledVector(Nn,zn),ja(us,k,!1),tc(zr,us),fs())}!au&&ai&&Nt<-4.2&&(Ci=Math.max(Ci,fn((-Nt-4.2)/18,.12,1)),Hn=Math.max(Hn,Ci*.09)),(Vt.y<-40||!Number.isFinite(Vt.x+Vt.y+Vt.z))&&(Vt.set(0,0,18),zt.set(0,0,0),Gn(!1))}function cu(k){const $=Math.hypot(zt.x,zt.z);On?En="swinging":ai?$>.6?En="moving":En="idle":En=zt.y>.6?"jumping":"falling",fa.rotation.set(0,0,0),Ai.rotation.set(0,0,0),wi.rotation.set(0,0,0),Ca.rotation.set(0,0,0),Oe.rotation.set(0,0,0),Ct.rotation.x=0,Ct.rotation.z=0;const pt=fn(zt.length()/44,0,1);if(Ct.scale.set(1-pt*.035,1+pt*.055,1-pt*.035),En==="moving"){const Et=Math.sin(k*(9+Math.min(5,$*.25)));fa.rotation.x=Et*.62,Ai.rotation.x=-Et*.62,wi.rotation.x=-Et*.5,Ca.rotation.x=Et*.5,Oe.rotation.x=-.1,Ct.rotation.z=fn(-zt.dot(Di)*.008,-.08,.08)}else if(En==="jumping")fa.rotation.x=-1.92,fa.rotation.z=1.02,Ai.rotation.x=-1.18,Ai.rotation.z=-1.28,wi.rotation.x=1.18,wi.rotation.z=.3,Ca.rotation.x=.58,Ca.rotation.z=-.32,Oe.rotation.x=-.26,Oe.rotation.z=.16,Ct.rotation.x=-.16,Ct.rotation.z=.18;else if(En==="falling")fa.rotation.z=1.24,Ai.rotation.z=-1.24,fa.rotation.x=-.36,Ai.rotation.x=-.36,wi.rotation.x=-.42,Ca.rotation.x=.46,wi.rotation.z=.12,Ca.rotation.z=-.12,Oe.rotation.x=.14,Ct.rotation.z=fn(-zt.dot(Di)*.012,-.12,.12);else if(En==="swinging"){const Et=fn(zt.y*.022,-.34,.28),Nt=Ze*.42+fi*.26;fa.rotation.x=-2.18-Nt,fa.rotation.z=.48+Nt*.22,Ai.rotation.x=-.72-Nt*.25,Ai.rotation.z=-1.05-Nt*.12,wi.rotation.x=1.02+Ze*.22,wi.rotation.z=.16,Ca.rotation.x=-.72-Ze*.16,Ca.rotation.z=-.18,Oe.rotation.z=fn(-zt.x*.024,-.38,.38)+.1,Oe.rotation.x=Et-.16-Nt*.2,Ct.rotation.x=fn(-zt.y*.016-.1-Nt*.08,-.34,.2),Ct.rotation.z=fn(-zt.dot(Di)*.018+.1,-.26,.26)}}function hs(k){const $=xo.set(Math.sin(dn),0,-Math.cos(dn)).normalize();Di.set(Math.cos(dn),0,Math.sin(dn)).normalize();const pt=zt.length(),Et=Math.hypot(zt.x,zt.z),At=(En==="swinging"?6.55:En==="jumping"?5.85:En==="falling"?6.45:8)+Math.min(En==="swinging"?2.6:3.8,pt*.075),ae=Math.atan2(zt.y,Math.max(7,Et))*.31;let le=0;if(On&&we){const Li=we.x-Vt.x,An=we.z-Vt.z,kn=Math.max(3,Math.hypot(Li,An));le=Math.atan2(we.y-(Vt.y+1.5),kn)*.19}const ve=fn(Da+ae+le,-.74,Ve);Ri+=(ve-Ri)*(1-Math.exp(-6.5*k));const Ne=Math.cos(Ri);Fl.set(Math.sin(dn)*Ne,Math.sin(Ri),-Math.cos(dn)*Ne).normalize(),Ws.copy(zt).multiplyScalar(.055),Ws.lengthSq()>2.8*2.8&&Ws.setLength(2.8);const Pn=En==="jumping"?.34:En==="falling"?.52:En==="swinging"?.68:1;Bi.set(Vt.x,yt+1.5+(Vt.y-yt)*Pn+fn(zt.y*.018,-.34,.42),Vt.z),Bi.addScaledVector(Ws,.76),Bi.addScaledVector($,.32),Bi.y=Math.max(yt+Wt,Bi.y),bn.copy(Bi).addScaledVector(Fl,-At),bn.y+=1.75+fn(-zt.y*.018,-.55,.55),bn.y=Math.max(yt+Tt,bn.y),On&&we&&Ze>.001&&(Je.copy(we).sub(Vt),Je.lengthSq()>.001&&(Je.normalize(),bn.addScaledVector(Je,Ze*.18),Bi.addScaledVector(Je,Ze*.09))),Hn>.001&&(bn.y+=Math.sin(Qi*44)*Hn*.18,bn.addScaledVector(Di,Math.cos(Qi*39)*Hn*.11),Hn*=Math.exp(-10*k)),Ci>.001&&(bn.y-=Ci*.2,Bi.y-=Ci*.08),rs>.001&&Bi.addScaledVector(Fl,rs*.12);const Vn=(Li,An)=>{Nr.copy(Li).sub(La);const kn=Nr.length();if(kn<.001)return An.copy(Li),0;Nr.multiplyScalar(1/kn);let $i=kn;for(const va of re){Zl.copy(va.box).expandByScalar(qt),Zs.ray.origin.copy(La),Zs.ray.direction.copy(Nr);const ta=Zs.ray.intersectBox(Zl,rh);if(!ta)continue;const ea=La.distanceTo(ta);ea>=0&&ea<$i&&($i=Math.max(0,ea-.08))}return An.copy(La).addScaledVector(Nr,$i),$i};La.set(Vt.x,Math.max(yt+1.15,Vt.y+1.45),Vt.z),cs.copy(bn);let Vi=Vn(bn,cs);if(Vi<pe){Kl.copy(bn).setY(bn.y+1.9),So.copy(bn).addScaledVector(Di,1.35).setY(bn.y+1.05),Eo.copy(bn).addScaledVector(Di,-1.35).setY(bn.y+1.05),Ql.set(La.x,La.y+3,La.z+.8);for(const Li of[Kl,So,Eo,Ql]){const An=Vn(Li,Jl);An>Vi&&(Vi=An,cs.copy(Jl))}}bn.copy(cs),bn.y=Math.max(yt+Tt,bn.y),Bi.y=Math.max(yt+Wt,Bi.y);const ga=(zt.y-Il)/Math.max(k,1/240);Il=zt.y;const Co=1-Math.exp(-(On?7.8:8.8)*k);if(T.position.lerp(bn,Co),gi.lerp(Bi,1-Math.exp(-7.4*k)),La.set(Vt.x,Math.max(yt+1.15,Vt.y+1.45),Vt.z),Vn(T.position,cs),T.position.copy(cs),T.position.y=Math.max(yt+Tt,T.position.y),gi.y=Math.max(yt+Wt,gi.y),Ri>.26){const Li=Math.hypot(gi.x-T.position.x,gi.z-T.position.z);if(Li>.05){const An=fn((Ri-.26)/Math.max(.001,Ve-.26),0,1),kn=T.position.y+Math.tan(Math.min(Ri,Ve))*Li;gi.y+=(kn-gi.y)*An}}const _i=Math.min(11.5,pt*.255),Ks=Ze*1.8+fi*1.2,Qs=64+_i+Ks+rs*1.6;T.fov+=(Qs-T.fov)*Math.min(1,k*5.5),T.updateProjectionMatrix(),T.lookAt(gi),Nn.copy(gi).sub(T.position),Nn.lengthSq()>1e-6&&(Nn.normalize(),vo=Math.atan2(Nn.x,-Nn.z),Math.asin(fn(Nn.y,-1,1)));const Do=fn(-zt.dot(Di)*.0048-ga*18e-5,-.095,.095);T.rotateZ(Do)}function uu(k){if(Ci*=Math.exp(-7.5*k),rs*=Math.exp(-4.8*k),Ci>.012){ls.visible=!0,ls.position.set(Vt.x,Vt.y+.035,Vt.z);const $=1+(1-Ci)*5.2;ls.scale.setScalar($),js.opacity=Ci*.42}else ls.visible=!1}function fu(){for(let k=su-1;k>0;k--)pa[k*3]=pa[(k-1)*3],pa[k*3+1]=pa[(k-1)*3+1],pa[k*3+2]=pa[(k-1)*3+2];pa[0]=Vt.x,pa[1]=Vt.y+1.25,pa[2]=Vt.z,jl.attributes.position.needsUpdate=!0,Mo.opacity=fn((zt.length()-12)/35,0,.42),Mo.size=.08+fn(zt.length()/44,0,1)*.08}function hu(){if(On&&we){qs.set(Vt.x,Vt.y+1.65,Vt.z);const k=yo.attributes.position;Nn.copy(we).sub(qs);const $=Nn.length(),pt=Vt.distanceTo(we),Et=zn?fn(pt/zn,0,1):0;for(let Nt=0;Nt<=Xl;Nt++){const At=Nt/Xl,ae=4*At*(1-At),le=(1-Et)*Math.min(1.25,$*.018)*ae,ve=Math.sin(Qi*46+At*19)*Ze*.045*ae,Ne=Wc.lerp(qs.x,we.x,At)+Di.x*ve,Pn=Wc.lerp(qs.y,we.y,At)-le,Vn=Wc.lerp(qs.z,we.z,At)+Di.z*ve;k.setXYZ(Nt,Ne,Pn,Vn)}if(k.needsUpdate=!0,Wa.computeLineDistances(),Ys.opacity=.5+Et*.34+Ze*.16,Wa.visible=!0,$>.001){Ua.visible=!0,qa.visible=!0,Ua.position.copy(qs).add(we).multiplyScalar(.5),qa.position.copy(Ua.position);const Nt=1+Ze*1.8+fi*.65;Ua.scale.set(Nt,$,Nt),qa.scale.set(1+Ze*.7,$,1+Ze*.7);const At=new Dl().setFromUnitVectors(new F(0,1,0),Nn.normalize());Ua.quaternion.copy(At),qa.quaternion.copy(At),Wl.opacity=.1+Et*.18+Ze*.28,ql.opacity=.52+Et*.24+Ze*.22,Fi.visible=!0,Fi.position.copy(we).addScaledVector(Nn,-.035),Fi.lookAt(T.position);const ae=1+Math.sin(Qi*(8+Ze*14))*.12+Ze*.32+fi*.22;Fi.scale.setScalar(ae),Yl.opacity=.2+Et*.26+Ze*.38}}else Wa.visible=!1,Ua.visible=!1,qa.visible=!1,Fi.visible=!1}function lh(k){k?(D.background=new xe(330520),D.fog=new Zc(463142,72,270),it.intensity=.72,tt.intensity=.62,ht.intensity=1.4,mt.intensity=.16,ut.forEach($=>{$.emissive.setHex(462872),$.emissiveIntensity=.52}),vt.emissive.setHex(3120330),vt.emissiveIntensity=1.38,vt.opacity=.76,ue.emissiveIntensity=2.2,nn.emissiveIntensity=1.75,q.emissiveIntensity=2.8,ye.emissiveIntensity=2.15,bt.opacity=.055,B.visible=!1,H.uniforms.topColor.value.setHex(66572),H.uniforms.horizonColor.value.setHex(1058368),H.uniforms.lowerColor.value.setHex(529190),st.visible=!0):(D.background=new xe(9095150),D.fog=new Zc(9095150,90,310),it.intensity=2,tt.intensity=3.2,ht.intensity=1,mt.intensity=.42,ut.forEach($=>{$.emissive.setHex(0),$.emissiveIntensity=1}),vt.emissive.setHex(1058614),vt.emissiveIntensity=.28,vt.opacity=.61,ue.emissiveIntensity=1.25,nn.emissiveIntensity=.85,q.emissiveIntensity=1.35,ye.emissiveIntensity=1.65,bt.opacity=.18,B.visible=!0,H.uniforms.topColor.value.setHex(3768260),H.uniforms.horizonColor.value.setHex(13166838),H.uniforms.lowerColor.value.setHex(16107925),st.visible=!1)}let Ao=!1;function du(k){["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"].includes(k.code)&&k.preventDefault(),da.add(k.code),k.code==="Space"&&!k.repeat&&(Ji=Math.max(Ji,.16)),k.code==="KeyR"&&(Vt.set(0,0,18),zt.set(0,0,0),dn=0,Da=.24,Ri=Da,vo=dn,gi.set(0,1.5,14),Ze=0,fi=0,Il=0,Ci=0,rs=0,ai=!0,Xa=.12,Ji=0,Gn(!1)),k.code==="KeyN"&&!k.repeat&&(Ao=!Ao,E(Ao),lh(Ao))}function nc(k){["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"].includes(k.code)&&k.preventDefault(),da.delete(k.code)}function ic(){da.clear(),Pl=!1,Gn(!1)}function wo(k){!(document.pointerLockElement===I.domElement)&&!Dr||(dn-=k.movementX*.00245,Da=fn(Da-k.movementY*.0019,-.7,Ve),Ri=Da)}function Gi(k){var pt,Et,Nt,At;if(k.button!==0)return;const $=document.pointerLockElement===I.domElement;if(!$&&!Dr){(Et=(pt=I.domElement).requestPointerLock)==null||Et.call(pt);return}$||(At=(Nt=I.domElement).requestPointerLock)==null||At.call(Nt),oh()}function Ir(k){k.button===0&&Gn()}function Ui(k){k.preventDefault()}function ds(){const k=z.clientWidth,$=z.clientHeight;T.aspect=k/Math.max(1,$),T.updateProjectionMatrix(),I.setSize(k,$),I.setPixelRatio(Math.min(window.devicePixelRatio,1.75))}function Ro(){Dr=!0}function Br(){document.pointerLockElement===I.domElement?(Bl=!0,Dr=!0,i(!0)):Bl&&(Bl=!1,Dr=!1,i(!1),Gn(!1))}window.addEventListener("game-start-request",Ro),window.addEventListener("keydown",du),window.addEventListener("keyup",nc),window.addEventListener("blur",ic),window.addEventListener("mousemove",wo),window.addEventListener("mouseup",Ir),window.addEventListener("resize",ds),document.addEventListener("pointerlockchange",Br),I.domElement.addEventListener("mousedown",Gi),I.domElement.addEventListener("contextmenu",Ui),window.__game={getState:()=>({ready:ui,running:_o,elapsedTime:Qi,renderer:"webgl",viewport:{width:I.domElement.clientWidth,height:I.domElement.clientHeight}})},window.__player={getState:()=>({position:Ls(Vt),velocity:Ls(zt),grounded:ai,movementState:En,collider:{radius:Sn,height:ha}})},window.__camera={getState:()=>({mode:"third-person",position:Ls(T.position),target:Ls(gi),yaw:vo,pitch:Ri})},window.__web={getState:()=>{const k=we?Vt.distanceTo(we):null,$=On?new F(Vt.x,Vt.y+1.65,Vt.z):null;return{attached:On,targetValid:os,anchor:we?Ls(we):null,anchorObjectId:kl,ropeLength:zn,distanceToAnchor:k,lineVisible:Wa.visible,playerEndpoint:$?Ls($):null,anchorEndpoint:we?Ls(we):null}}},window.__world={getState:()=>({groundY:yt,buildings:re.map(k=>({id:k.id,min:Ls(k.box.min),max:Ls(k.box.max)}))})};function Fr(k){if(!_o)return;const $=Math.min((k-Xs)/1e3,.05);Xs=k,Qi+=$;let pt=$;const Et=1/120;for(;pt>0;){const Nt=Math.min(Et,pt);ec(Nt),pt-=Nt}if(Ct.position.copy(Vt),Math.hypot(zt.x,zt.z)>.2?Ct.rotation.y=Math.atan2(zt.x,zt.z):Ct.rotation.y=dn+Math.PI,cu(Qi),uu($),fu(),hs($),ou(),Hi.scale.setScalar(.82+Math.sin(Qi*8)*.12),hu(),B.visible&&B.lookAt(T.position),I.render(D,T),(ss++&3)===0){const Nt=Math.hypot(zt.x,zt.z);l(Math.sqrt(Nt*Nt+zt.y*zt.y)),h(Vt.y),N(zt.y),C(On?Ze:0);const At=(Wc.radToDeg(dn)%360+360)%360,ae=At<22.5||At>=337.5?"N":At<67.5?"NE":At<112.5?"E":At<157.5?"SE":At<202.5?"S":At<247.5?"SW":At<292.5?"W":"NW";m(`${ae} ${Math.round(At).toString().padStart(3,"0")}°`),g(On?"ATTACHED":os?"TARGET LOCK":"SEARCHING"),x(On&&zn!==null?`${zn.toFixed(1)} u`:os?`${T.position.distanceTo(Ur).toFixed(0)} u`:"—"),S(En)}ks=requestAnimationFrame(Fr)}return ks=requestAnimationFrame(Fr),()=>{ui=!1,_o=!1,Gn(!1),window.removeEventListener("game-start-request",Ro),window.removeEventListener("keydown",du),window.removeEventListener("keyup",nc),window.removeEventListener("blur",ic),window.removeEventListener("mousemove",wo),window.removeEventListener("mouseup",Ir),window.removeEventListener("resize",ds),document.removeEventListener("pointerlockchange",Br),I.domElement.removeEventListener("mousedown",Gi),I.domElement.removeEventListener("contextmenu",Ui),cancelAnimationFrame(ks);const k=new Set,$=new Set;D.traverse(pt=>{const Et=pt;Et.geometry&&k.add(Et.geometry);const Nt=Et.material;Array.isArray(Nt)?Nt.forEach(At=>$.add(At)):Nt&&$.add(Nt)}),k.forEach(pt=>pt.dispose()),$.forEach(pt=>pt.dispose()),I.dispose(),z.contains(I.domElement)&&z.removeChild(I.domElement)}},[]);const V=()=>{var D,H;i(!0),window.dispatchEvent(new Event("game-start-request"));const z=(D=o.current)==null?void 0:D.querySelector("canvas");(H=z==null?void 0:z.requestPointerLock)==null||H.call(z)};return Dt.jsxs("main",{className:"game-shell relative h-full w-full overflow-hidden bg-slate-950 text-white",children:[Dt.jsx("div",{ref:o,className:"absolute inset-0"}),Dt.jsx("div",{className:"cinematic-grain pointer-events-none absolute inset-0"}),Dt.jsx("div",{className:"speed-vignette pointer-events-none absolute inset-0",style:{opacity:Math.min(.72,Math.max(0,(s-10)/38))}}),Dt.jsxs("div",{className:"hud-top pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-6",children:[Dt.jsxs("section",{className:"glass-panel hud-card min-w-[220px] sm:min-w-[272px]",children:[Dt.jsxs("div",{className:"hud-kicker",children:[Dt.jsx("span",{className:"signal-dot"})," SKYLINE THREAD / LIVE"]}),Dt.jsxs("div",{className:"mt-3 flex items-end gap-3",children:[Dt.jsx("div",{className:"font-mono text-4xl font-semibold leading-none tracking-[-0.06em] text-white",children:s.toFixed(0)}),Dt.jsx("div",{className:"pb-1 text-[10px] font-semibold tracking-[0.24em] text-cyan-100/55",children:"U / SEC"})]}),Dt.jsx("div",{className:"speed-rail mt-3",children:Dt.jsx("span",{style:{width:`${Math.min(100,s/44*100)}%`}})}),Dt.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-2 font-mono text-[10px] tracking-[0.12em]",children:[Dt.jsxs("div",{className:"hud-stat",children:[Dt.jsx("span",{children:"ALTITUDE"}),Dt.jsx("b",{children:c.toFixed(1)})]}),Dt.jsxs("div",{className:"hud-stat",children:[Dt.jsx("span",{children:"VERTICAL"}),Dt.jsxs("b",{children:[_>=0?"+":"",_.toFixed(1)]})]}),Dt.jsxs("div",{className:"hud-stat",children:[Dt.jsx("span",{children:"MOTION"}),Dt.jsx("b",{children:b.toUpperCase()})]}),Dt.jsxs("div",{className:"hud-stat",children:[Dt.jsx("span",{children:"TENSION"}),Dt.jsx("b",{children:p==="ATTACHED"?`${Math.round(L*100)}%`:"—"})]})]})]}),Dt.jsxs("section",{className:"glass-panel compass-card flex items-center gap-4 px-4 py-3",children:[Dt.jsx("div",{className:"compass-glyph",children:Dt.jsx("span",{})}),Dt.jsxs("div",{children:[Dt.jsx("div",{className:"text-[9px] font-semibold tracking-[0.25em] text-white/40",children:"VECTOR"}),Dt.jsx("div",{className:"mt-1 font-mono text-sm tracking-[0.08em] text-white/90",children:d})]})]})]}),Dt.jsxs("div",{className:`reticle pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${p==="TARGET LOCK"?"is-lock":""} ${p==="ATTACHED"?"is-attached":""}`,children:[Dt.jsx("span",{className:"reticle-ring"}),Dt.jsx("span",{className:"reticle-core"}),Dt.jsx("i",{className:"reticle-n"}),Dt.jsx("i",{className:"reticle-e"}),Dt.jsx("i",{className:"reticle-s"}),Dt.jsx("i",{className:"reticle-w"})]}),Dt.jsx("div",{className:"pointer-events-none absolute bottom-5 left-4 sm:bottom-6 sm:left-6",children:Dt.jsxs("div",{className:`web-status glass-panel ${p==="ATTACHED"?"attached":p==="TARGET LOCK"?"locked":""}`,children:[Dt.jsx("div",{className:"web-icon",children:Dt.jsx("span",{})}),Dt.jsxs("div",{children:[Dt.jsx("div",{className:"text-[9px] font-semibold tracking-[0.24em] text-white/40",children:"THREAD LINK"}),Dt.jsxs("div",{className:"mt-1 flex items-center gap-3 font-mono text-xs",children:[Dt.jsx("b",{children:p}),Dt.jsx("span",{className:"text-white/35",children:v})]}),Dt.jsx("div",{className:"tension-rail mt-2",children:Dt.jsx("span",{style:{width:`${p==="ATTACHED"?Math.max(5,L*100):0}%`}})})]})]})}),Dt.jsx("div",{className:"pointer-events-none absolute bottom-5 right-4 hidden text-right sm:bottom-6 sm:right-6 sm:block",children:Dt.jsxs("div",{className:"control-strip glass-panel",children:[Dt.jsxs("span",{children:[Dt.jsx("kbd",{children:"WASD"})," MOVE"]}),Dt.jsxs("span",{children:[Dt.jsx("kbd",{children:"SPACE"})," JUMP"]}),Dt.jsxs("span",{children:[Dt.jsx("kbd",{children:"LMB"})," WEB"]}),Dt.jsxs("span",{children:[Dt.jsx("kbd",{children:"SHIFT"})," SPRINT"]})]})}),!t&&Dt.jsx("button",{type:"button",onClick:V,"data-testid":"start-overlay",className:"start-overlay absolute inset-0 flex h-full w-full cursor-crosshair items-center justify-center p-5 text-left",children:Dt.jsxs("div",{className:"launch-card w-full max-w-[680px] overflow-hidden",children:[Dt.jsx("div",{className:"launch-scanline"}),Dt.jsxs("div",{className:"relative p-7 sm:p-10",children:[Dt.jsxs("div",{className:"flex items-center justify-between gap-4",children:[Dt.jsxs("div",{className:"hud-kicker",children:[Dt.jsx("span",{className:"signal-dot"})," CITY LINK READY"]}),Dt.jsx("div",{className:"rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-white/40",children:"BUILD 01"})]}),Dt.jsxs("div",{className:"mt-8 max-w-xl",children:[Dt.jsx("div",{className:"text-[11px] font-semibold tracking-[0.38em] text-cyan-300/80",children:"SKYLINE THREAD"}),Dt.jsx("h1",{className:"mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl",children:"Own the arc."}),Dt.jsx("p",{className:"mt-4 max-w-lg text-sm leading-6 text-slate-300/80 sm:text-base",children:"Read the skyline, anchor to real building surfaces, pump through the low point, and release with every unit of momentum intact."})]}),Dt.jsxs("div",{className:"mt-8 grid gap-3 border-y border-white/[0.08] py-5 sm:grid-cols-2",children:[Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"W A S D"}),Dt.jsx("span",{children:"Directional movement"})]}),Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"MOUSE"}),Dt.jsx("span",{children:"Third-person camera"})]}),Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"SPACE"}),Dt.jsx("span",{children:"Jump / buffered takeoff"})]}),Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"HOLD LMB"}),Dt.jsx("span",{children:"Anchor / swing / release"})]}),Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"SHIFT"}),Dt.jsx("span",{children:"Ground sprint"})]}),Dt.jsxs("div",{className:"launch-tip",children:[Dt.jsx("kbd",{children:"N / R"}),Dt.jsx("span",{children:"Night mode / reset"})]})]}),Dt.jsxs("div",{className:"mt-6 flex items-center justify-between gap-4",children:[Dt.jsx("span",{className:"text-[10px] tracking-[0.2em] text-white/35",children:"GREEN RETICLE = VALID SURFACE"}),Dt.jsxs("span",{className:"launch-cta",children:["CLICK TO DROP IN ",Dt.jsx("b",{children:"↗"})]})]})]})]})}),Dt.jsxs("div",{className:"pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.18em] text-white/25 sm:bottom-3",children:[M?"NIGHT GRID":"DAY GRID"," · ESC CURSOR · N LIGHTING · R RESET"]})]})}cM.createRoot(document.getElementById("root")).render(Dt.jsx(ca.StrictMode,{children:Dt.jsx(WA,{})}));
