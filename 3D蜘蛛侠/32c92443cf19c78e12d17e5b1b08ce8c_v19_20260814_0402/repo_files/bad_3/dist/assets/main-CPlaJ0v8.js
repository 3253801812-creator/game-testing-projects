(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function z_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function CS(){if(cv)return il;cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return il.Fragment=t,il.jsx=i,il.jsxs=i,il}var uv;function DS(){return uv||(uv=1,wh.exports=CS()),wh.exports}var lt=DS(),Rh={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function US(){if(fv)return Me;fv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(H){return H===null||typeof H!="object"?null:(H=_&&H[_]||H["@@iterator"],typeof H=="function"?H:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(H,et,yt){this.props=H,this.context=et,this.refs=M,this.updater=yt||E}x.prototype.isReactComponent={},x.prototype.setState=function(H,et){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,et,"setState")},x.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function N(){}N.prototype=x.prototype;function L(H,et,yt){this.props=H,this.context=et,this.refs=M,this.updater=yt||E}var b=L.prototype=new N;b.constructor=L,T(b,x.prototype),b.isPureReactComponent=!0;var P=Array.isArray;function C(){}var O={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function U(H,et,yt){var Z=yt.ref;return{$$typeof:r,type:H,key:et,ref:Z!==void 0?Z:null,props:yt}}function A(H,et){return U(H.type,et,H.props)}function B(H){return typeof H=="object"&&H!==null&&H.$$typeof===r}function W(H){var et={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(yt){return et[yt]})}var tt=/\/+/g;function ut(H,et){return typeof H=="object"&&H!==null&&H.key!=null?W(""+H.key):et.toString(36)}function pt(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(C,C):(H.status="pending",H.then(function(et){H.status==="pending"&&(H.status="fulfilled",H.value=et)},function(et){H.status==="pending"&&(H.status="rejected",H.reason=et)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function G(H,et,yt,Z,ft){var At=typeof H;(At==="undefined"||At==="boolean")&&(H=null);var $=!1;if(H===null)$=!0;else switch(At){case"bigint":case"string":case"number":$=!0;break;case"object":switch(H.$$typeof){case r:case t:$=!0;break;case v:return $=H._init,G($(H._payload),et,yt,Z,ft)}}if($)return ft=ft(H),$=Z===""?"."+ut(H,0):Z,P(ft)?(yt="",$!=null&&(yt=$.replace(tt,"$&/")+"/"),G(ft,et,yt,"",function(Pt){return Pt})):ft!=null&&(B(ft)&&(ft=A(ft,yt+(ft.key==null||H&&H.key===ft.key?"":(""+ft.key).replace(tt,"$&/")+"/")+$)),et.push(ft)),1;$=0;var dt=Z===""?".":Z+":";if(P(H))for(var Nt=0;Nt<H.length;Nt++)Z=H[Nt],At=dt+ut(Z,Nt),$+=G(Z,et,yt,At,ft);else if(Nt=y(H),typeof Nt=="function")for(H=Nt.call(H),Nt=0;!(Z=H.next()).done;)Z=Z.value,At=dt+ut(Z,Nt++),$+=G(Z,et,yt,At,ft);else if(At==="object"){if(typeof H.then=="function")return G(pt(H),et,yt,Z,ft);throw et=String(H),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return $}function j(H,et,yt){if(H==null)return H;var Z=[],ft=0;return G(H,Z,"","",function(At){return et.call(yt,At,ft++)}),Z}function V(H){if(H._status===-1){var et=H._result;et=et(),et.then(function(yt){(H._status===0||H._status===-1)&&(H._status=1,H._result=yt)},function(yt){(H._status===0||H._status===-1)&&(H._status=2,H._result=yt)}),H._status===-1&&(H._status=0,H._result=et)}if(H._status===1)return H._result.default;throw H._result}var Mt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)},wt={map:j,forEach:function(H,et,yt){j(H,function(){et.apply(this,arguments)},yt)},count:function(H){var et=0;return j(H,function(){et++}),et},toArray:function(H){return j(H,function(et){return et})||[]},only:function(H){if(!B(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return Me.Activity=g,Me.Children=wt,Me.Component=x,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=L,Me.StrictMode=s,Me.Suspense=p,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Me.__COMPILER_RUNTIME={__proto__:null,c:function(H){return O.H.useMemoCache(H)}},Me.cache=function(H){return function(){return H.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(H,et,yt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var Z=T({},H.props),ft=H.key;if(et!=null)for(At in et.key!==void 0&&(ft=""+et.key),et)!z.call(et,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&et.ref===void 0||(Z[At]=et[At]);var At=arguments.length-2;if(At===1)Z.children=yt;else if(1<At){for(var $=Array(At),dt=0;dt<At;dt++)$[dt]=arguments[dt+2];Z.children=$}return U(H.type,ft,Z)},Me.createContext=function(H){return H={$$typeof:f,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:c,_context:H},H},Me.createElement=function(H,et,yt){var Z,ft={},At=null;if(et!=null)for(Z in et.key!==void 0&&(At=""+et.key),et)z.call(et,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ft[Z]=et[Z]);var $=arguments.length-2;if($===1)ft.children=yt;else if(1<$){for(var dt=Array($),Nt=0;Nt<$;Nt++)dt[Nt]=arguments[Nt+2];ft.children=dt}if(H&&H.defaultProps)for(Z in $=H.defaultProps,$)ft[Z]===void 0&&(ft[Z]=$[Z]);return U(H,At,ft)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(H){return{$$typeof:h,render:H}},Me.isValidElement=B,Me.lazy=function(H){return{$$typeof:v,_payload:{_status:-1,_result:H},_init:V}},Me.memo=function(H,et){return{$$typeof:m,type:H,compare:et===void 0?null:et}},Me.startTransition=function(H){var et=O.T,yt={};O.T=yt;try{var Z=H(),ft=O.S;ft!==null&&ft(yt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(C,Mt)}catch(At){Mt(At)}finally{et!==null&&yt.types!==null&&(et.types=yt.types),O.T=et}},Me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Me.use=function(H){return O.H.use(H)},Me.useActionState=function(H,et,yt){return O.H.useActionState(H,et,yt)},Me.useCallback=function(H,et){return O.H.useCallback(H,et)},Me.useContext=function(H){return O.H.useContext(H)},Me.useDebugValue=function(){},Me.useDeferredValue=function(H,et){return O.H.useDeferredValue(H,et)},Me.useEffect=function(H,et){return O.H.useEffect(H,et)},Me.useEffectEvent=function(H){return O.H.useEffectEvent(H)},Me.useId=function(){return O.H.useId()},Me.useImperativeHandle=function(H,et,yt){return O.H.useImperativeHandle(H,et,yt)},Me.useInsertionEffect=function(H,et){return O.H.useInsertionEffect(H,et)},Me.useLayoutEffect=function(H,et){return O.H.useLayoutEffect(H,et)},Me.useMemo=function(H,et){return O.H.useMemo(H,et)},Me.useOptimistic=function(H,et){return O.H.useOptimistic(H,et)},Me.useReducer=function(H,et,yt){return O.H.useReducer(H,et,yt)},Me.useRef=function(H){return O.H.useRef(H)},Me.useState=function(H){return O.H.useState(H)},Me.useSyncExternalStore=function(H,et,yt){return O.H.useSyncExternalStore(H,et,yt)},Me.useTransition=function(){return O.H.useTransition()},Me.version="19.2.8",Me}var hv;function up(){return hv||(hv=1,Rh.exports=US()),Rh.exports}var qn=up();const LS=z_(qn);var Ch={exports:{}},al={},Dh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function NS(){return dv||(dv=1,(function(r){function t(G,j){var V=G.length;G.push(j);t:for(;0<V;){var Mt=V-1>>>1,wt=G[Mt];if(0<l(wt,j))G[Mt]=j,G[V]=wt,V=Mt;else break t}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var j=G[0],V=G.pop();if(V!==j){G[0]=V;t:for(var Mt=0,wt=G.length,H=wt>>>1;Mt<H;){var et=2*(Mt+1)-1,yt=G[et],Z=et+1,ft=G[Z];if(0>l(yt,V))Z<wt&&0>l(ft,yt)?(G[Mt]=ft,G[Z]=V,Mt=Z):(G[Mt]=yt,G[et]=V,Mt=et);else if(Z<wt&&0>l(ft,V))G[Mt]=ft,G[Z]=V,Mt=Z;else break t}}return j}function l(G,j){var V=G.sortIndex-j.sortIndex;return V!==0?V:G.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,g=null,_=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function b(G){for(var j=i(m);j!==null;){if(j.callback===null)s(m);else if(j.startTime<=G)s(m),j.sortIndex=j.expirationTime,t(p,j);else break;j=i(m)}}function P(G){if(T=!1,b(G),!E)if(i(p)!==null)E=!0,C||(C=!0,W());else{var j=i(m);j!==null&&pt(P,j.startTime-G)}}var C=!1,O=-1,z=5,U=-1;function A(){return M?!0:!(r.unstable_now()-U<z)}function B(){if(M=!1,C){var G=r.unstable_now();U=G;var j=!0;try{t:{E=!1,T&&(T=!1,N(O),O=-1),y=!0;var V=_;try{e:{for(b(G),g=i(p);g!==null&&!(g.expirationTime>G&&A());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,_=g.priorityLevel;var wt=Mt(g.expirationTime<=G);if(G=r.unstable_now(),typeof wt=="function"){g.callback=wt,b(G),j=!0;break e}g===i(p)&&s(p),b(G)}else s(p);g=i(p)}if(g!==null)j=!0;else{var H=i(m);H!==null&&pt(P,H.startTime-G),j=!1}}break t}finally{g=null,_=V,y=!1}j=void 0}}finally{j?W():C=!1}}}var W;if(typeof L=="function")W=function(){L(B)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ut=tt.port2;tt.port1.onmessage=B,W=function(){ut.postMessage(null)}}else W=function(){x(B,0)};function pt(G,j){O=x(function(){G(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(G){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var V=_;_=j;try{return G()}finally{_=V}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(G,j){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var V=_;_=G;try{return j()}finally{_=V}},r.unstable_scheduleCallback=function(G,j,V){var Mt=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Mt+V:Mt):V=Mt,G){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=V+wt,G={id:v++,callback:j,priorityLevel:G,startTime:V,expirationTime:wt,sortIndex:-1},V>Mt?(G.sortIndex=V,t(m,G),i(p)===null&&G===i(m)&&(T?(N(O),O=-1):T=!0,pt(P,V-Mt))):(G.sortIndex=wt,t(p,G),E||y||(E=!0,C||(C=!0,W()))),G},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(G){var j=_;return function(){var V=_;_=j;try{return G.apply(this,arguments)}finally{_=V}}}})(Uh)),Uh}var pv;function OS(){return pv||(pv=1,Dh.exports=NS()),Dh.exports}var Lh={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function PS(){if(mv)return Fn;mv=1;var r=up();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,v)},Fn.flushSync=function(p){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=v,s.d.f()}},Fn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Fn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Fn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&s.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Fn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Fn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin);s.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Fn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Fn.requestFormReset=function(p){s.d.r(p)},Fn.unstable_batchedUpdates=function(p,m){return p(m)},Fn.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var gv;function zS(){if(gv)return Lh.exports;gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Lh.exports=PS(),Lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function IS(){if(vv)return al;vv=1;var r=OS(),t=up(),i=zS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case C:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case b:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var pt=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Mt=[],wt=-1;function H(e){return{current:e}}function et(e){0>wt||(e.current=Mt[wt],Mt[wt]=null,wt--)}function yt(e,n){wt++,Mt[wt]=e.current,e.current=n}var Z=H(null),ft=H(null),At=H(null),$=H(null);function dt(e,n){switch(yt(At,n),yt(ft,e),yt(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lg(n),e=Ng(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Z),yt(Z,e)}function Nt(){et(Z),et(ft),et(At)}function Pt(e){e.memoizedState!==null&&yt($,e);var n=Z.current,a=Ng(n,e.type);n!==a&&(yt(ft,e),yt(Z,a))}function oe(e){ft.current===e&&(et(Z),et(ft)),$.current===e&&(et($),$o._currentValue=V)}var Ee,Lt;function F(e){if(Ee===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ee=n&&n[1]||"",Lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+Lt}var ie=!1;function Ot(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(ht){var ot=ht}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(ht){ot=ht}e.call(Tt.prototype)}}else{try{throw Error()}catch(ht){ot=ht}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(ht){if(ht&&ot&&typeof ht.stack=="string")return[ht.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var X=S.split(`
`),at=R.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===at.length)for(o=X.length-1,u=at.length-1;1<=o&&0<=u&&X[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==at[u]){var xt=`
`+X[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?F(a):""}function le(e,n){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return F("Activity");default:return""}}function Gt(e){try{var n="",a=null;do n+=le(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _e=Object.prototype.hasOwnProperty,Zt=r.unstable_scheduleCallback,I=r.unstable_cancelCallback,w=r.unstable_shouldYield,nt=r.unstable_requestPaint,vt=r.unstable_now,Rt=r.unstable_getCurrentPriorityLevel,St=r.unstable_ImmediatePriority,ee=r.unstable_UserBlockingPriority,zt=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,be=r.unstable_IdlePriority,Dt=r.log,Kt=r.unstable_setDisableYieldValue,se=null,re=null;function Wt(e){if(typeof Dt=="function"&&Kt(e),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(se,e)}catch{}}var he=Math.clz32?Math.clz32:K,xe=Math.log,ke=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(xe(e)/ke|0)|0}var Bt=256,mt=262144,bt=4194304;function Ft(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ht(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ft(o):(S&=R,S!==0?u=Ft(S):a||(a=R&~e,a!==0&&(u=Ft(a))))):(R=o&~d,R!==0?u=Ft(R):S!==0?u=Ft(S):a||(a=o&~e,a!==0&&(u=Ft(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function ae(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function He(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function Le(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qn(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,X=e.expirationTimes,at=e.hiddenUpdates;for(a=S&~a;0<a;){var xt=31-he(a),Tt=1<<xt;R[xt]=0,X[xt]=-1;var ot=at[xt];if(ot!==null)for(at[xt]=null,xt=0;xt<ot.length;xt++){var ht=ot[xt];ht!==null&&(ht.lane&=-536870913)}a&=~Tt}o!==0&&ea(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function ea(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-he(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function za(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-he(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Jn(e,n){var a=n&-n;return a=(a&42)!==0?1:na(a),(a&(e.suspendedLanes|n))!==0?0:a}function na(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ia(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _s(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:nv(e.type))}function ia(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var oi=Math.random().toString(36).slice(2),cn="__reactFiber$"+oi,bn="__reactProps$"+oi,yi="__reactContainer$"+oi,xs="__reactEvents$"+oi,ir="__reactListeners$"+oi,ar="__reactHandles$"+oi,sr="__reactResources$"+oi,aa="__reactMarker$"+oi;function ys(e){delete e[cn],delete e[bn],delete e[xs],delete e[ir],delete e[ar]}function D(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[yi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Hg(e);e!==null;){if(a=e[cn])return a;e=Hg(e)}return n}e=a,a=e.parentNode}return null}function Q(e){if(e=e[cn]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ct(e){var n=e[sr];return n||(n=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[aa]=!0}var Ut=new Set,Vt={};function kt(e,n){jt(e,n),jt(e+"Capture",n)}function jt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),me={},ue={};function rt(e){return _e.call(ue,e)?!0:_e.call(me,e)?!1:pe.test(e)?ue[e]=!0:(me[e]=!0,!1)}function _t(e,n,a){if(rt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $t(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function It(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ge(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){if(!e._valueTracker){var n=It(e)?"checked":"value";e._valueTracker=ge(e,n,""+e[n])}}function Ge(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=It(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ye=/[\n"\\]/g;function Ke(e){return e.replace(ye,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(e,n,a,o,u,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Un(e,S,Xt(n)):a!=null?Un(e,S,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Xt(R):e.removeAttribute("name")}function Dn(e,n,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){ve(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),ve(e)}function Un(e,n,a){n==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function sn(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function $n(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(pt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ve(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||bx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Cp(e,d,n[d])}function Mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return Ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Eu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rr=null,or=null;function Up(e){var n=Q(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ie(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Ie(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ge(o)}break t;case"textarea":sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&un(e,!!a.multiple,n,!1)}}}var Tu=!1;function Lp(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(rr!==null||or!==null)&&(hc(),rr&&(n=rr,e=or,or=rr=null,Up(n),e)))for(n=0;n<e.length;n++)Up(e[n])}}function go(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ra)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Au=!1}var Ba=null,wu=null,Al=null;function Np(){if(Al)return Al;var e,n=wu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return Al=u.slice(e,1<o?1-o:void 0)}function wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function Op(){return!1}function ti(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rl:Op,this.isPropagationStopped=Op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=ti(Ss),_o=g({},Ss,{view:0,detail:0}),wx=ti(_o),Ru,Cu,xo,Dl=g({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Ru=e.screenX-xo.screenX,Cu=e.screenY-xo.screenY):Cu=Ru=0,xo=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Pp=ti(Dl),Rx=g({},Dl,{dataTransfer:0}),Cx=ti(Rx),Dx=g({},_o,{relatedTarget:0}),Du=ti(Dx),Ux=g({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=ti(Ux),Nx=g({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=ti(Nx),Px=g({},Ss,{data:0}),zp=ti(Px),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bx[e])?!!n[e]:!1}function Uu(){return Fx}var Hx=g({},_o,{key:function(e){if(e.key){var n=zx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=ti(Hx),Vx=g({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=ti(Vx),kx=g({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Xx=ti(kx),Wx=g({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=ti(Wx),Yx=g({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=ti(Yx),Zx=g({},Ss,{newState:0,oldState:0}),Kx=ti(Zx),Qx=[9,13,27,32],Lu=ra&&"CompositionEvent"in window,yo=null;ra&&"documentMode"in document&&(yo=document.documentMode);var Jx=ra&&"TextEvent"in window&&!yo,Bp=ra&&(!Lu||yo&&8<yo&&11>=yo),Fp=" ",Hp=!1;function Gp(e,n){switch(e){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function $x(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,Fp);case"textInput":return e=n.data,e===Fp&&Hp?null:e;default:return null}}function ty(e,n){if(lr)return e==="compositionend"||!Lu&&Gp(e,n)?(e=Np(),Al=wu=Ba=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ey[e.type]:n==="textarea"}function Xp(e,n,a,o){rr?or?or.push(o):or=[o]:rr=o,n=xc(n,"onChange"),0<n.length&&(a=new Cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var So=null,Mo=null;function ny(e){Ag(e,0)}function Ul(e){var n=st(e);if(Ge(n))return e}function Wp(e,n){if(e==="change")return n}var qp=!1;if(ra){var Nu;if(ra){var Ou="oninput"in document;if(!Ou){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Ou=typeof Yp.oninput=="function"}Nu=Ou}else Nu=!1;qp=Nu&&(!document.documentMode||9<document.documentMode)}function jp(){So&&(So.detachEvent("onpropertychange",Zp),Mo=So=null)}function Zp(e){if(e.propertyName==="value"&&Ul(Mo)){var n=[];Xp(n,Mo,e,bu(e)),Lp(ny,n)}}function iy(e,n,a){e==="focusin"?(jp(),So=n,Mo=a,So.attachEvent("onpropertychange",Zp)):e==="focusout"&&jp()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(Mo)}function sy(e,n){if(e==="click")return Ul(n)}function ry(e,n){if(e==="input"||e==="change")return Ul(n)}function oy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:oy;function Eo(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!_e.call(n,u)||!li(e[u],n[u]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var a=Kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ze(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ze(e.document)}return n}function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ly=ra&&"documentMode"in document&&11>=document.documentMode,cr=null,zu=null,bo=null,Iu=!1;function tm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||cr==null||cr!==Ze(o)||(o=cr,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&Eo(bo,o)||(bo=o,o=xc(zu,"onSelect"),0<o.length&&(n=new Cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=cr)))}function Ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ur={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Bu={},em={};ra&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Es(e){if(Bu[e])return Bu[e];if(!ur[e])return e;var n=ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Bu[e]=n[a];return e}var nm=Es("animationend"),im=Es("animationiteration"),am=Es("animationstart"),cy=Es("transitionrun"),uy=Es("transitionstart"),fy=Es("transitioncancel"),sm=Es("transitionend"),rm=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Ui(e,n){rm.set(e,n),kt(n,[e])}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],fr=0,Hu=0;function Nl(){for(var e=fr,n=Hu=fr=0;n<e;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var d=Si[n];if(Si[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&om(a,u,d)}}function Ol(e,n,a,o){Si[fr++]=e,Si[fr++]=n,Si[fr++]=a,Si[fr++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Ol(e,n,a,o),Pl(e)}function bs(e,n){return Ol(e,null,null,n),Pl(e)}function om(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-he(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Pl(e){if(50<qo)throw qo=0,Qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hr={};function hy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,n,a,o){return new hy(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var a=e.alternate;return a===null?(a=ci(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function zl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Vu(e)&&(S=1);else if(typeof e=="string")S=vS(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ci(31,a,n,u),e.elementType=U,e.lanes=d,e;case T:return Ts(a.children,u,d,n);case M:S=8,u|=24;break;case x:return e=ci(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case P:return e=ci(13,a,n,u),e.elementType=P,e.lanes=d,e;case C:return e=ci(19,a,n,u),e.elementType=C,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case N:S=9;break t;case b:S=11;break t;case O:S=14;break t;case z:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ci(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ts(e,n,a,o){return e=ci(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=ci(6,e,null,n),e.lanes=a,e}function cm(e){var n=ci(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=ci(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var um=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Gt(n)},um.set(e,n),n)}return{value:e,source:n,stack:Gt(n)}}var dr=[],pr=0,Il=null,To=0,Ei=[],bi=0,Fa=null,ki=1,Xi="";function la(e,n){dr[pr++]=To,dr[pr++]=Il,Il=e,To=n}function fm(e,n,a){Ei[bi++]=ki,Ei[bi++]=Xi,Ei[bi++]=Fa,Fa=e;var o=ki;e=Xi;var u=32-he(o)-1;o&=~(1<<u),a+=1;var d=32-he(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ki=1<<32-he(n)+u|a<<u|o,Xi=d+e}else ki=1<<d|a<<u|o,Xi=e}function Wu(e){e.return!==null&&(la(e,1),fm(e,1,0))}function qu(e){for(;e===Il;)Il=dr[--pr],dr[pr]=null,To=dr[--pr],dr[pr]=null;for(;e===Fa;)Fa=Ei[--bi],Ei[bi]=null,Xi=Ei[--bi],Ei[bi]=null,ki=Ei[--bi],Ei[bi]=null}function hm(e,n){Ei[bi++]=ki,Ei[bi++]=Xi,Ei[bi++]=Fa,ki=n.id,Xi=n.overflow,Fa=e}var Pn=null,on=null,Be=!1,Ha=null,Ti=!1,Yu=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Mi(n,e)),Yu}function dm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[bn]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)Oe(jo[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),$n(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Dg(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ga(e,!0)}function pm(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Pn=Pn.return}}function mr(e){if(e!==Pn)return!1;if(!Be)return pm(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&on&&Ga(e),pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=Fg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=Fg(e)}else n===27?(n=on,es(e.type)?(e=vh,vh=null,on=e):on=n):on=Pn?wi(e.stateNode.nextSibling):null;return!0}function As(){on=Pn=null,Be=!1}function ju(){var e=Ha;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Ha=null),e}function Ao(e){Ha===null?Ha=[e]:Ha.push(e)}var Zu=H(null),ws=null,ca=null;function Va(e,n,a){yt(Zu,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Zu.current,et(Zu)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var X=0;X<n.length;X++)if(R.context===n[X]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Ku(d.return,a,e),o||(S=null);break t}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Ku(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function gr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;li(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===$.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push($o):e=[$o])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function Bl(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){ws=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return mm(ws,e)}function Fl(e,n){return ws===null&&Rs(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(s(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return a}var dy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},py=r.unstable_scheduleCallback,my=r.unstable_NormalPriority,xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new dy,data:new Map,refCount:0}}function wo(e){e.refCount--,e.refCount===0&&py(my,function(){e.controller.abort()})}var Ro=null,$u=0,vr=0,_r=null;function gy(e,n){if(Ro===null){var a=Ro=[];$u=0,vr=ih(),_r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(gm,gm),n}function gm(){if(--$u===0&&Ro!==null){_r!==null&&(_r.status="fulfilled");var e=Ro;Ro=null,vr=0,_r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function vy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=G.S;G.S=function(e,n){tg=vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(e,n),vm!==null&&vm(e,n)};var Cs=H(null);function tf(){var e=Cs.current;return e!==null?e:rn.pooledCache}function Hl(e,n){n===null?yt(Cs,Cs.current):yt(Cs,n.pool)}function _m(){var e=tf();return e===null?null:{parent:xn._currentValue,pool:e}}var xr=Error(s(460)),ef=Error(s(474)),Gl=Error(s(542)),Vl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=rn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e}throw Us=n,xr}}function Ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,xr):a}}var Us=null;function Sm(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function Mm(e){if(e===xr||e===Gl)throw Error(s(483))}var yr=null,Co=0;function kl(e){var n=Co;return Co+=1,yr===null&&(yr=[]),ym(yr,e,n)}function Do(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){function n(J,q){if(e){var it=J.deletions;it===null?(J.deletions=[q],J.flags|=16):it.push(q)}}function a(J,q){if(!e)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function o(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function u(J,q){return J=oa(J,q),J.index=0,J.sibling=null,J}function d(J,q,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<q?(J.flags|=67108866,q):it):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function S(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,q,it,Et){return q===null||q.tag!==6?(q=ku(it,J.mode,Et),q.return=J,q):(q=u(q,it),q.return=J,q)}function X(J,q,it,Et){var fe=it.type;return fe===T?xt(J,q,it.props.children,Et,it.key):q!==null&&(q.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===z&&Ds(fe)===q.type)?(q=u(q,it.props),Do(q,it),q.return=J,q):(q=zl(it.type,it.key,it.props,null,J.mode,Et),Do(q,it),q.return=J,q)}function at(J,q,it,Et){return q===null||q.tag!==4||q.stateNode.containerInfo!==it.containerInfo||q.stateNode.implementation!==it.implementation?(q=Xu(it,J.mode,Et),q.return=J,q):(q=u(q,it.children||[]),q.return=J,q)}function xt(J,q,it,Et,fe){return q===null||q.tag!==7?(q=Ts(it,J.mode,Et,fe),q.return=J,q):(q=u(q,it),q.return=J,q)}function Tt(J,q,it){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=ku(""+q,J.mode,it),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return it=zl(q.type,q.key,q.props,null,J.mode,it),Do(it,q),it.return=J,it;case E:return q=Xu(q,J.mode,it),q.return=J,q;case z:return q=Ds(q),Tt(J,q,it)}if(pt(q)||W(q))return q=Ts(q,J.mode,it,null),q.return=J,q;if(typeof q.then=="function")return Tt(J,kl(q),it);if(q.$$typeof===L)return Tt(J,Fl(J,q),it);Xl(J,q)}return null}function ot(J,q,it,Et){var fe=q!==null?q.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return fe!==null?null:R(J,q,""+it,Et);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===fe?X(J,q,it,Et):null;case E:return it.key===fe?at(J,q,it,Et):null;case z:return it=Ds(it),ot(J,q,it,Et)}if(pt(it)||W(it))return fe!==null?null:xt(J,q,it,Et,null);if(typeof it.then=="function")return ot(J,q,kl(it),Et);if(it.$$typeof===L)return ot(J,q,Fl(J,it),Et);Xl(J,it)}return null}function ht(J,q,it,Et,fe){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return J=J.get(it)||null,R(q,J,""+Et,fe);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case y:return J=J.get(Et.key===null?it:Et.key)||null,X(q,J,Et,fe);case E:return J=J.get(Et.key===null?it:Et.key)||null,at(q,J,Et,fe);case z:return Et=Ds(Et),ht(J,q,it,Et,fe)}if(pt(Et)||W(Et))return J=J.get(it)||null,xt(q,J,Et,fe,null);if(typeof Et.then=="function")return ht(J,q,it,kl(Et),fe);if(Et.$$typeof===L)return ht(J,q,it,Fl(q,Et),fe);Xl(q,Et)}return null}function ne(J,q,it,Et){for(var fe=null,Xe=null,ce=q,Ae=q=0,ze=null;ce!==null&&Ae<it.length;Ae++){ce.index>Ae?(ze=ce,ce=null):ze=ce.sibling;var We=ot(J,ce,it[Ae],Et);if(We===null){ce===null&&(ce=ze);break}e&&ce&&We.alternate===null&&n(J,ce),q=d(We,q,Ae),Xe===null?fe=We:Xe.sibling=We,Xe=We,ce=ze}if(Ae===it.length)return a(J,ce),Be&&la(J,Ae),fe;if(ce===null){for(;Ae<it.length;Ae++)ce=Tt(J,it[Ae],Et),ce!==null&&(q=d(ce,q,Ae),Xe===null?fe=ce:Xe.sibling=ce,Xe=ce);return Be&&la(J,Ae),fe}for(ce=o(ce);Ae<it.length;Ae++)ze=ht(ce,J,Ae,it[Ae],Et),ze!==null&&(e&&ze.alternate!==null&&ce.delete(ze.key===null?Ae:ze.key),q=d(ze,q,Ae),Xe===null?fe=ze:Xe.sibling=ze,Xe=ze);return e&&ce.forEach(function(rs){return n(J,rs)}),Be&&la(J,Ae),fe}function de(J,q,it,Et){if(it==null)throw Error(s(151));for(var fe=null,Xe=null,ce=q,Ae=q=0,ze=null,We=it.next();ce!==null&&!We.done;Ae++,We=it.next()){ce.index>Ae?(ze=ce,ce=null):ze=ce.sibling;var rs=ot(J,ce,We.value,Et);if(rs===null){ce===null&&(ce=ze);break}e&&ce&&rs.alternate===null&&n(J,ce),q=d(rs,q,Ae),Xe===null?fe=rs:Xe.sibling=rs,Xe=rs,ce=ze}if(We.done)return a(J,ce),Be&&la(J,Ae),fe;if(ce===null){for(;!We.done;Ae++,We=it.next())We=Tt(J,We.value,Et),We!==null&&(q=d(We,q,Ae),Xe===null?fe=We:Xe.sibling=We,Xe=We);return Be&&la(J,Ae),fe}for(ce=o(ce);!We.done;Ae++,We=it.next())We=ht(ce,J,Ae,We.value,Et),We!==null&&(e&&We.alternate!==null&&ce.delete(We.key===null?Ae:We.key),q=d(We,q,Ae),Xe===null?fe=We:Xe.sibling=We,Xe=We);return e&&ce.forEach(function(RS){return n(J,RS)}),Be&&la(J,Ae),fe}function en(J,q,it,Et){if(typeof it=="object"&&it!==null&&it.type===T&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var fe=it.key;q!==null;){if(q.key===fe){if(fe=it.type,fe===T){if(q.tag===7){a(J,q.sibling),Et=u(q,it.props.children),Et.return=J,J=Et;break t}}else if(q.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===z&&Ds(fe)===q.type){a(J,q.sibling),Et=u(q,it.props),Do(Et,it),Et.return=J,J=Et;break t}a(J,q);break}else n(J,q);q=q.sibling}it.type===T?(Et=Ts(it.props.children,J.mode,Et,it.key),Et.return=J,J=Et):(Et=zl(it.type,it.key,it.props,null,J.mode,Et),Do(Et,it),Et.return=J,J=Et)}return S(J);case E:t:{for(fe=it.key;q!==null;){if(q.key===fe)if(q.tag===4&&q.stateNode.containerInfo===it.containerInfo&&q.stateNode.implementation===it.implementation){a(J,q.sibling),Et=u(q,it.children||[]),Et.return=J,J=Et;break t}else{a(J,q);break}else n(J,q);q=q.sibling}Et=Xu(it,J.mode,Et),Et.return=J,J=Et}return S(J);case z:return it=Ds(it),en(J,q,it,Et)}if(pt(it))return ne(J,q,it,Et);if(W(it)){if(fe=W(it),typeof fe!="function")throw Error(s(150));return it=fe.call(it),de(J,q,it,Et)}if(typeof it.then=="function")return en(J,q,kl(it),Et);if(it.$$typeof===L)return en(J,q,Fl(J,it),Et);Xl(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,q!==null&&q.tag===6?(a(J,q.sibling),Et=u(q,it),Et.return=J,J=Et):(a(J,q),Et=ku(it,J.mode,Et),Et.return=J,J=Et),S(J)):a(J,q)}return function(J,q,it,Et){try{Co=0;var fe=en(J,q,it,Et);return yr=null,fe}catch(ce){if(ce===xr||ce===Gl)throw ce;var Xe=ci(29,ce,null,J.mode);return Xe.lanes=Et,Xe.return=J,Xe}finally{}}}var Ls=Em(!0),bm=Em(!1),ka=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Pl(e),om(e,null,a),n}return Ol(e,o,n,a),Pl(e)}function Uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,za(e,a)}}function sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function Lo(){if(rf){var e=_r;if(e!==null)throw e}}function No(e,n,a,o){rf=!1;var u=e.updateQueue;ka=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var X=R,at=X.next;X.next=null,S===null?d=at:S.next=at,S=X;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,R=xt.lastBaseUpdate,R!==S&&(R===null?xt.firstBaseUpdate=at:R.next=at,xt.lastBaseUpdate=X))}if(d!==null){var Tt=u.baseState;S=0,xt=at=X=null,R=d;do{var ot=R.lane&-536870913,ht=ot!==R.lane;if(ht?(Pe&ot)===ot:(o&ot)===ot){ot!==0&&ot===vr&&(rf=!0),xt!==null&&(xt=xt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ne=e,de=R;ot=n;var en=a;switch(de.tag){case 1:if(ne=de.payload,typeof ne=="function"){Tt=ne.call(en,Tt,ot);break t}Tt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=de.payload,ot=typeof ne=="function"?ne.call(en,Tt,ot):ne,ot==null)break t;Tt=g({},Tt,ot);break t;case 2:ka=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ot]:ht.push(ot))}else ht={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xt===null?(at=xt=ht,X=Tt):xt=xt.next=ht,S|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);xt===null&&(X=Tt),u.baseState=X,u.firstBaseUpdate=at,u.lastBaseUpdate=xt,d===null&&(u.shared.lanes=0),Ka|=S,e.lanes=S,e.memoizedState=Tt}}function Tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],n)}var Sr=H(null),Wl=H(0);function wm(e,n){e=xa,yt(Wl,e),yt(Sr,n),xa=e|n.baseLanes}function of(){yt(Wl,xa),yt(Sr,Sr.current)}function lf(){xa=Wl.current,et(Sr),et(Wl)}var ui=H(null),Ai=null;function qa(e){var n=e.alternate;yt(mn,mn.current&1),yt(ui,e),Ai===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(Ai=e)}function cf(e){yt(mn,mn.current),yt(ui,e),Ai===null&&(Ai=e)}function Rm(e){e.tag===22?(yt(mn,mn.current),yt(ui,e),Ai===null&&(Ai=e)):Ya()}function Ya(){yt(mn,mn.current),yt(ui,ui.current)}function fi(e){et(ui),Ai===e&&(Ai=null),et(mn)}var mn=H(0);function ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,Te=null,$e=null,yn=null,Yl=!1,Mr=!1,Ns=!1,jl=0,Oo=0,Er=null,_y=0;function dn(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,d){return fa=d,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?f0:Af,Ns=!1,d=a(o,u),Ns=!1,Mr&&(d=Dm(n,a,o,u)),Cm(e),d}function Cm(e){G.H=Io;var n=$e!==null&&$e.next!==null;if(fa=0,yn=$e=Te=null,Yl=!1,Oo=0,Er=null,n)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&Bl(e)&&(Sn=!0))}function Dm(e,n,a,o){Te=e;var u=0;do{if(Mr&&(Er=null),Oo=0,Mr=!1,25<=u)throw Error(s(301));if(u+=1,yn=$e=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=h0,d=n(a,o)}while(Mr);return d}function xy(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?Po(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Te.flags|=1024),n}function hf(){var e=jl!==0;return jl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Yl=!1}fa=0,yn=$e=Te=null,Mr=!1,Oo=jl=0,Er=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Te.memoizedState=yn=e:yn=yn.next=e,yn}function gn(){if($e===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=yn===null?Te.memoizedState:yn.next;if(n!==null)yn=n,$e=e;else{if(e===null)throw Te.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},yn===null?Te.memoizedState=yn=e:yn=yn.next=e}return yn}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var n=Oo;return Oo+=1,Er===null&&(Er=[]),e=ym(Er,e,n),n=Te,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?f0:Af),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===L)return zn(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=Te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Te.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zl(),Te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=A;return n.index++,a}function ha(e,n){return typeof n=="function"?n(e):n}function Ql(e){var n=gn();return gf(n,$e,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=S=null,X=null,at=n,xt=!1;do{var Tt=at.lane&-536870913;if(Tt!==at.lane?(Pe&Tt)===Tt:(fa&Tt)===Tt){var ot=at.revertLane;if(ot===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Tt===vr&&(xt=!0);else if((fa&ot)===ot){at=at.next,ot===vr&&(xt=!0);continue}else Tt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(R=X=Tt,S=d):X=X.next=Tt,Te.lanes|=ot,Ka|=ot;Tt=at.action,Ns&&a(d,Tt),d=at.hasEagerState?at.eagerState:a(d,Tt)}else ot={lane:Tt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(R=X=ot,S=d):X=X.next=ot,Te.lanes|=Tt,Ka|=Tt;at=at.next}while(at!==null&&at!==n);if(X===null?S=d:X.next=R,!li(d,e.memoizedState)&&(Sn=!0,xt&&(a=_r,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=X,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vf(e){var n=gn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);li(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Um(e,n,a){var o=Te,u=gn(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!li(($e||u).memoizedState,a);if(S&&(u.memoizedState=a,Sn=!0),u=u.queue,yf(Om.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),rn===null)throw Error(s(349));d||(fa&127)!==0||Lm(o,n,a)}return a}function Lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Te.updateQueue,n===null?(n=Zl(),Te.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Nm(e,n,a,o){n.value=a,n.getSnapshot=o,Pm(n)&&zm(e)}function Om(e,n,a){return a(function(){Pm(n)&&zm(e)})}function Pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function zm(e){var n=bs(e,2);n!==null&&si(n,e,2)}function _f(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Ns){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function Im(e,n,a,o){return e.baseState=a,gf(e,$e,typeof o=="function"?o:ha)}function yy(e,n,a,o,u){if(tc(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};G.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Bm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=G.T,S={};G.T=S;try{var R=a(u,o),X=G.S;X!==null&&X(S,R),Fm(e,n,R)}catch(at){xf(e,n,at)}finally{d!==null&&S.types!==null&&(d.types=S.types),G.T=d}}else try{d=a(u,o),Fm(e,n,d)}catch(at){xf(e,n,at)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(e,n,o)},function(o){return xf(e,n,o)}):Hm(e,n,a)}function Hm(e,n,a){n.status="fulfilled",n.value=a,Gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}e.action=null}function Gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function km(e,n){if(Be){var a=rn.formState;if(a!==null){t:{var o=Te;if(Be){if(on){e:{for(var u=on,d=Ti;u.nodeType!==8;){if(!d){u=null;break e}if(u=wi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){on=wi(u.nextSibling),o=u.data==="F!";break t}}Ga(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=o,a=l0.bind(null,Te,o),o.dispatch=a,o=_f(!1),d=Tf.bind(null,Te,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=yy.bind(null,Te,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xm(e){var n=gn();return Wm(n,$e,e)}function Wm(e,n,a){if(n=gf(e,n,Vm)[0],e=Ql(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Po(n)}catch(S){throw S===xr?Gl:S}else o=n;n=gn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Te.flags|=2048,br(9,{destroy:void 0},Sy.bind(null,u,a),null)),[o,d,e]}function Sy(e,n){e.action=n}function qm(e){var n=gn(),a=$e;if(a!==null)return Wm(n,a,e);gn(),n=n.memoizedState,a=gn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Te.updateQueue,n===null&&(n=Zl(),Te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ym(){return gn().memoizedState}function Jl(e,n,a,o){var u=kn();Te.flags|=e,u.memoizedState=br(1|n,{destroy:void 0},a,o===void 0?null:o)}function $l(e,n,a,o){var u=gn();o=o===void 0?null:o;var d=u.memoizedState.inst;$e!==null&&o!==null&&uf(o,$e.memoizedState.deps)?u.memoizedState=br(n,d,a,o):(Te.flags|=e,u.memoizedState=br(1|n,d,a,o))}function jm(e,n){Jl(8390656,8,e,n)}function yf(e,n){$l(2048,8,e,n)}function My(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=Zl(),Te.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zm(e){var n=gn().memoizedState;return My({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Km(e,n){return $l(4,2,e,n)}function Qm(e,n){return $l(4,4,e,n)}function Jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $m(e,n,a){a=a!=null?a.concat([e]):null,$l(4,4,Jm.bind(null,n,e),a)}function Sf(){}function t0(e,n){var a=gn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function e0(e,n){var a=gn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),Ns){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(fa&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ng(),Te.lanes|=e,Ka|=e,a)}function n0(e,n,a,o){return li(a,n)?a:Sr.current!==null?(e=Mf(e,a,o),li(e,n)||(Sn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(Pe&261930)===0?(Sn=!0,e.memoizedState=a):(e=ng(),Te.lanes|=e,Ka|=e,n)}function i0(e,n,a,o,u){var d=j.p;j.p=d!==0&&8>d?d:8;var S=G.T,R={};G.T=R,Tf(e,!1,n,a);try{var X=u(),at=G.S;if(at!==null&&at(R,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var xt=vy(X,o);zo(e,n,xt,pi(e))}else zo(e,n,o,pi(e))}catch(Tt){zo(e,n,{then:function(){},status:"rejected",reason:Tt},pi())}finally{j.p=d,S!==null&&R.types!==null&&(S.types=R.types),G.T=S}}function Ey(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=a0(e).queue;i0(e,u,n,V,a===null?Ey:function(){return s0(e),a(o)})}function a0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function s0(e){var n=a0(e);n.next===null&&(n=e.alternate.memoizedState),zo(e,n.next.queue,{},pi())}function bf(){return zn($o)}function r0(){return gn().memoizedState}function o0(){return gn().memoizedState}function by(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=Xa(a);var o=Wa(n,e,a);o!==null&&(si(o,n,a),Uo(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function Ty(e,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},tc(e)?c0(n,a):(a=Gu(e,n,a,o),a!==null&&(si(a,e,o),u0(a,n,o)))}function l0(e,n,a){var o=pi();zo(e,n,a,o)}function zo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(e))c0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,li(R,S))return Ol(e,n,u,0),rn===null&&Nl(),!1}catch{}finally{}if(a=Gu(e,n,u,o),a!==null)return si(a,e,o),u0(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},tc(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&si(n,e,2)}function tc(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function c0(e,n){Mr=Yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function u0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,za(e,a)}}var Io={readContext:zn,use:Kl,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};Io.useEffectEvent=dn;var f0={readContext:zn,use:Kl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Jl(4194308,4,Jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Jl(4194308,4,e,n)},useInsertionEffect:function(e,n){Jl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var o=e();if(Ns){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ns){Wt(!0);try{a(n)}finally{Wt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ty.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=_f(e);var n=e.queue,a=l0.bind(null,Te,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,n){var a=kn();return Mf(a,e,n)},useTransition:function(){var e=_f(!1);return e=i0.bind(null,Te,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Te,u=kn();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),rn===null)throw Error(s(349));(Pe&127)!==0||Lm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,jm(Om.bind(null,o,d,e),[e]),o.flags|=2048,br(9,{destroy:void 0},Nm.bind(null,o,d,a,n),null),a},useId:function(){var e=kn(),n=rn.identifierPrefix;if(Be){var a=Xi,o=ki;a=(o&~(1<<32-he(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=jl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_y++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:km,useActionState:km,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,Te,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return kn().memoizedState=by.bind(null,Te)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:zn,use:Kl,useCallback:t0,useContext:zn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e0,useReducer:Ql,useRef:Ym,useState:function(){return Ql(ha)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=gn();return n0(a,$e.memoizedState,e,n)},useTransition:function(){var e=Ql(ha)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=gn();return Im(a,$e,e,n)},useMemoCache:mf,useCacheRefresh:o0};Af.useEffectEvent=Zm;var h0={readContext:zn,use:Kl,useCallback:t0,useContext:zn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e0,useReducer:vf,useRef:Ym,useState:function(){return vf(ha)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=gn();return $e===null?Mf(a,e,n):n0(a,$e.memoizedState,e,n)},useTransition:function(){var e=vf(ha)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:bf,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=gn();return $e!==null?Im(a,$e,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:o0};h0.useEffectEvent=Zm;function wf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(si(n,e,o),Uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(si(n,e,o),Uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(e,o,a),n!==null&&(si(n,e,a),Uo(n,e,a))}};function d0(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,o)||!Eo(u,d):!0}function p0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Rf.enqueueReplaceState(n,n.state,null)}function Os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function m0(e){Ll(e)}function g0(e){console.error(e)}function v0(e){Ll(e)}function ec(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(e,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){ec(e,n)},a}function x0(e){return e=Xa(e),e.tag=3,e}function y0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){_0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){_0(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ay(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&gr(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?dc():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(s(435,a.tag))}return th(e,o,u),dc(),!1}if(Be)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(s(422),{cause:o}),Ao(Mi(e,a)))):(o!==Yu&&(n=Error(s(423),{cause:o}),Ao(Mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Mi(o,a),u=Cf(e.stateNode,o,u),sf(e,u),pn!==4&&(pn=2)),!1;var d=Error(s(520),{cause:o});if(d=Mi(d,a),Wo===null?Wo=[d]:Wo.push(d),pn!==4&&(pn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Cf(a.stateNode,o,e),sf(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Qa===null||!Qa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x0(u),y0(u,e,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),Sn=!1;function In(e,n,a,o){n.child=e===null?bm(n,null,a,o):Ls(n,e.child,a,o)}function S0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Rs(n),o=ff(e,n,a,S,d,u),R=hf(),e!==null&&!Sn?(df(e,n,u),da(e,n,u)):(Be&&R&&Wu(n),n.flags|=1,In(e,n,o,u),n.child)}function M0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Vu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,E0(e,n,d,o,u)):(e=zl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Bf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(S,o)&&e.ref===n.ref)return da(e,n,u)}return n.flags|=1,e=oa(d,o),e.ref=n.ref,e.return=n,n.child=e}function E0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Eo(d,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Bf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,da(e,n,u)}return Uf(e,n,a,o,u)}function b0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return T0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hl(n,d!==null?d.cachePool:null),d!==null?wm(n,d):of(),Rm(n);else return o=n.lanes=536870912,T0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Hl(n,d.cachePool),wm(n,d),Ya(),n.memoizedState=null):(e!==null&&Hl(n,null),of(),Ya());return In(e,n,u,a),n.child}function Bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(e,n,a,o,u){var d=tf();return d=d===null?null:{parent:xn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Hl(n,null),of(),Rm(n),e!==null&&gr(e,n,o,!0),n.childLanes=u,null}function nc(e,n){return n=ac({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function A0(e,n,a){return Ls(n,e.child,null,a),e=nc(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function wy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=nc(n,o),n.lanes=536870912,Bo(null,e);if(cf(n),(e=on)?(e=Bg(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Pn=n,on=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return nc(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=A0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||gr(e,n,a,!1),u=(a&e.childLanes)!==0,Sn||u){if(o=rn,o!==null&&(S=Jn(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,bs(e,S),si(o,e,S),Df;dc(),n=A0(e,n,a)}else e=d.treeContext,on=wi(S.nextSibling),Pn=n,Be=!0,Ha=null,Ti=!1,e!==null&&hm(n,e),n=nc(n,o),n.flags|=4096;return n}return e=oa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ic(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return Rs(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!Sn?(df(e,n,u),da(e,n,u)):(Be&&o&&Wu(n),n.flags|=1,In(e,n,a,u),n.child)}function w0(e,n,a,o,u,d){return Rs(n),n.updateQueue=null,a=Dm(n,o,a,u),Cm(e),o=hf(),e!==null&&!Sn?(df(e,n,d),da(e,n,d)):(Be&&o&&Wu(n),n.flags|=1,In(e,n,a,d),n.child)}function R0(e,n,a,o,u){if(Rs(n),n.stateNode===null){var d=hr,S=a.contextType;typeof S=="object"&&S!==null&&(d=zn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},nf(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?zn(S):hr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(wf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Rf.enqueueReplaceState(d,d.state,null),No(n,o,d,u),Lo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,X=Os(a,R);d.props=X;var at=d.context,xt=a.contextType;S=hr,typeof xt=="object"&&xt!==null&&(S=zn(xt));var Tt=a.getDerivedStateFromProps;xt=typeof Tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||at!==S)&&p0(n,d,o,S),ka=!1;var ot=n.memoizedState;d.state=ot,No(n,o,d,u),Lo(),at=n.memoizedState,R||ot!==at||ka?(typeof Tt=="function"&&(wf(n,a,Tt,o),at=n.memoizedState),(X=ka||d0(n,a,X,o,ot,at,S))?(xt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),d.props=o,d.state=at,d.context=S,o=X):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,af(e,n),S=n.memoizedProps,xt=Os(a,S),d.props=xt,Tt=n.pendingProps,ot=d.context,at=a.contextType,X=hr,typeof at=="object"&&at!==null&&(X=zn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Tt||ot!==X)&&p0(n,d,o,X),ka=!1,ot=n.memoizedState,d.state=ot,No(n,o,d,u),Lo();var ht=n.memoizedState;S!==Tt||ot!==ht||ka||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof R=="function"&&(wf(n,a,R,o),ht=n.memoizedState),(xt=ka||d0(n,a,xt,o,ot,ht,X)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(at||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,X),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,X)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=X,o=xt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ic(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ls(n,e.child,null,u),n.child=Ls(n,null,a,u)):In(e,n,a,u),n.memoizedState=d.state,e=n.child):e=da(e,n,u),e}function C0(e,n,a,o){return As(),n.flags|=256,In(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:_m()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function D0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?qa(n):Ya(),(e=on)?(e=Bg(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Pn=n,on=null)):e=null,e===null)throw Ga(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ya(),u=n.mode,R=ac({mode:"hidden",children:R},u),o=Ts(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,S,a),n.memoizedState=Lf,Bo(null,o)):(qa(n),Pf(n,R))}var X=e.memoizedState;if(X!==null&&(R=X.dehydrated,R!==null)){if(d)n.flags&256?(qa(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ya(),n.child=e.child,n.flags|=128,n=null):(Ya(),R=o.fallback,u=n.mode,o=ac({mode:"visible",children:o.children},u),R=Ts(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ls(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,S,a),n.memoizedState=Lf,n=Bo(null,o));else if(qa(n),gh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var at=S.dgst;S=at,o=Error(s(419)),o.stack="",o.digest=S,Ao({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(Sn||gr(e,n,a,!1),S=(a&e.childLanes)!==0,Sn||S){if(S=rn,S!==null&&(o=Jn(S,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,bs(e,o),si(S,e,o),Df;mh(R)||dc(),n=zf(e,n,a)}else mh(R)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,on=wi(R.nextSibling),Pn=n,Be=!0,Ha=null,Ti=!1,e!==null&&hm(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Ya(),R=o.fallback,u=n.mode,X=e.child,at=X.sibling,o=oa(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,at!==null?R=oa(at,R):(R=Ts(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Bo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Nf(a):(u=R.cachePool,u!==null?(X=xn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=_m(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Of(e,S,a),n.memoizedState=Lf,Bo(e.child,o)):(qa(n),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=ac({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ac(e,n){return e=ci(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return Ls(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function U0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function If(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function L0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=mn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,yt(mn,S),In(e,n,o,a),o=Be?To:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,a,n);else if(e.tag===19)U0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ql(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),If(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ql(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}If(n,!0,a,null,d,o);break;case"together":If(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=oa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function Ry(e,n,a){switch(n.tag){case 3:dt(n,n.stateNode.containerInfo),Va(n,xn,e.memoizedState.cache),As();break;case 27:case 5:Pt(n);break;case 4:dt(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(e,n,a):(qa(n),e=da(e,n,a),e!==null?e.sibling:null);qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(gr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return L0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(mn,mn.current),o)break;return null;case 22:return n.lanes=0,b0(e,n,a,n.pendingProps);case 24:Va(n,xn,e.memoizedState.cache)}return da(e,n,a)}function N0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Bf(e,a)&&(n.flags&128)===0)return Sn=!1,Ry(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Be&&(n.flags&1048576)!==0&&fm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ds(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Os(e,o),n.tag=1,n=R0(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===b){n.tag=11,n=S0(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=M0(null,n,e,o,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Os(o,n.pendingProps),R0(e,n,o,u,a);case 3:t:{if(dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,af(e,n),No(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Va(n,xn,o),o!==d.cache&&Qu(n,[xn],a,!0),Lo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=C0(e,n,o,a);break t}else if(o!==u){u=Mi(Error(s(424)),n),Ao(u),n=C0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(on=wi(e.firstChild),Pn=n,Be=!0,Ha=null,Ti=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=da(e,n,a);break t}In(e,n,o,a)}n=n.child}return n;case 26:return ic(e,n),e===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=yc(At.current).createElement(a),o[cn]=n,o[bn]=e,Bn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pt(n),e===null&&Be&&(o=n.stateNode=Gg(n.type,n.pendingProps,At.current),Pn=n,Ti=!0,u=on,es(n.type)?(vh=u,on=wi(o.firstChild)):on=u),In(e,n,n.pendingProps.children,a),ic(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=on)&&(o=aS(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Pn=n,on=wi(o.firstChild),Ti=!1,u=!0):u=!1),u||Ga(n)),Pt(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,hh(u,d)?o=null:S!==null&&hh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,xy,null,null,a),$o._currentValue=u),ic(e,n),In(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=on)&&(a=sS(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Pn=n,on=null,e=!0):e=!1),e||Ga(n)),null;case 13:return D0(e,n,a);case 4:return dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ls(n,null,o,a):In(e,n,o,a),n.child;case 11:return S0(e,n,n.type,n.pendingProps,a);case 7:return In(e,n,n.pendingProps,a),n.child;case 8:return In(e,n,n.pendingProps.children,a),n.child;case 12:return In(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Va(n,n.type,o.value),In(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rs(n),u=zn(u),o=o(u),n.flags|=1,In(e,n,o,a),n.child;case 14:return M0(e,n,n.type,n.pendingProps,a);case 15:return E0(e,n,n.type,n.pendingProps,a);case 19:return L0(e,n,a);case 31:return wy(e,n,a);case 22:return b0(e,n,a,n.pendingProps);case 24:return Rs(n),o=zn(xn),e===null?(u=tf(),u===null&&(u=rn,d=Ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},nf(n),Va(n,xn,u)):((e.lanes&a)!==0&&(af(e,n),No(n,null,null,a),Lo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Va(n,xn,o)):(o=d.cache,Va(n,xn,o),o!==u.cache&&Qu(n,[xn],a,!0))),In(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(e){e.flags|=4}function Ff(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(rg())e.flags|=8192;else throw Us=Vl,ef}else e.flags&=-16777217}function O0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(n))if(rg())e.flags|=8192;else throw Us=Vl,ef}function sc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ct():536870912,e.lanes|=n,Rr|=n)}function Fo(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Cy(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(xn),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mr(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),ln(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(pa(n),d!==null?(ln(n),O0(n,d)):(ln(n),Ff(n,u,null,o,a))):d?d!==e.memoizedState?(pa(n),ln(n),O0(n,d)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&pa(n),ln(n),Ff(n,u,e,o,a)),null;case 27:if(oe(n),a=At.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}e=Z.current,mr(n)?dm(n):(e=Gg(u,o,a),n.stateNode=e,pa(n))}return ln(n),null;case 5:if(oe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}if(d=Z.current,mr(n))dm(n);else{var S=yc(At.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[cn]=n,d[bn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Bn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&pa(n)}}return ln(n),Ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=At.current,mr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Dg(e.nodeValue,a)),e||Ga(n,!0)}else e=yc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return ln(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=mr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),sc(n,n.updateQueue),ln(n),null);case 4:return Nt(),e===null&&oh(n.stateNode.containerInfo),ln(n),null;case 10:return ua(n.type),ln(n),null;case 19:if(et(mn),o=n.memoizedState,o===null)return ln(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Fo(o,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=ql(e),d!==null){for(n.flags|=128,Fo(o,!1),e=d.updateQueue,n.updateQueue=e,sc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lm(a,e),a=a.sibling;return yt(mn,mn.current&1|2),Be&&la(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&vt()>uc&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304)}else{if(!u)if(e=ql(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,sc(n,e),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Be)return ln(n),null}else 2*vt()-o.renderingStartTime>uc&&a!==536870912&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=vt(),e.sibling=null,a=mn.current,yt(mn,u?a&1|2:a&1),Be&&la(n,o.treeForkCount),e):(ln(n),null);case 22:case 23:return fi(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&sc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(Cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(xn),ln(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dy(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(xn),Nt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(mn),null;case 4:return Nt(),null;case 10:return ua(n.type),null;case 22:case 23:return fi(n),lf(),e!==null&&et(Cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(xn),null;case 25:return null;default:return null}}function P0(e,n){switch(qu(n),n.tag){case 3:ua(xn),Nt();break;case 26:case 27:case 5:oe(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:et(mn);break;case 10:ua(n.type);break;case 22:case 23:fi(n),lf(),e!==null&&et(Cs);break;case 24:ua(xn)}}function Ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Je(n,n.return,R)}}function ja(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var X=a,at=R;try{at()}catch(xt){Je(u,X,xt)}}}o=o.next}while(o!==d)}}catch(xt){Je(n,n.return,xt)}}function z0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Am(n,a)}catch(o){Je(e,e.return,o)}}}function I0(e,n,a){a.props=Os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Je(e,n,o)}}function Go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Je(e,n,u)}}function Wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Je(e,n,u)}else a.current=null}function B0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Je(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;Jy(o,e.type,a,n),o[bn]=n}catch(u){Je(e,e.return,u)}}function F0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||F0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function rc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(rc(e,n,a),e=e.sibling;e!==null;)rc(e,n,a),e=e.sibling}function H0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[cn]=e,n[bn]=a}catch(d){Je(e,e.return,d)}}var ma=!1,Mn=!1,kf=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function Uy(e,n){if(e=e.containerInfo,uh=wc,e=$p(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,R=-1,X=-1,at=0,xt=0,Tt=e,ot=null;e:for(;;){for(var ht;Tt!==a||u!==0&&Tt.nodeType!==3||(R=S+u),Tt!==d||o!==0&&Tt.nodeType!==3||(X=S+o),Tt.nodeType===3&&(S+=Tt.nodeValue.length),(ht=Tt.firstChild)!==null;)ot=Tt,Tt=ht;for(;;){if(Tt===e)break e;if(ot===a&&++at===u&&(R=S),ot===d&&++xt===o&&(X=S),(ht=Tt.nextSibling)!==null)break;Tt=ot,ot=Tt.parentNode}Tt=ht}a=R===-1||X===-1?null:{start:R,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},wc=!1,Ln=n;Ln!==null;)if(n=Ln,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ln=e;else for(;Ln!==null;){switch(n=Ln,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ne=Os(a.type,u);e=o.getSnapshotBeforeUpdate(ne,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){Je(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ln=e;break}Ln=n.return}}function V0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),o&4&&Ho(5,a);break;case 1:if(va(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Je(a,a.return,S)}else{var u=Os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Je(a,a.return,S)}}o&64&&z0(a),o&512&&Go(a,a.return);break;case 3:if(va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(e,n)}catch(S){Je(a,a.return,S)}}break;case 27:n===null&&o&4&&H0(a);case 26:case 5:va(e,a),n===null&&o&4&&B0(a),o&512&&Go(a,a.return);break;case 12:va(e,a);break;case 31:va(e,a),o&4&&W0(e,a);break;case 13:va(e,a),o&4&&q0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hy.bind(null,a),rS(e,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||Mn,u=ma;var d=Mn;ma=o,(Mn=n)&&!d?_a(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ma=u,Mn=d}break;case 30:break;default:va(e,a)}}function k0(e){var n=e.alternate;n!==null&&(e.alternate=null,k0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ys(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,ei=!1;function ga(e,n,a){for(a=a.child;a!==null;)X0(e,n,a),a=a.sibling}function X0(e,n,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:Mn||Wi(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Wi(a,n);var o=fn,u=ei;es(a.type)&&(fn=a.stateNode,ei=!1),ga(e,n,a),Ko(a.stateNode),fn=o,ei=u;break;case 5:Mn||Wi(a,n);case 6:if(o=fn,u=ei,fn=null,ga(e,n,a),fn=o,ei=u,fn!==null)if(ei)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode)}catch(d){Je(a,n,d)}else try{fn.removeChild(a.stateNode)}catch(d){Je(a,n,d)}break;case 18:fn!==null&&(ei?(e=fn,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zr(e)):zg(fn,a.stateNode));break;case 4:o=fn,u=ei,fn=a.stateNode.containerInfo,ei=!0,ga(e,n,a),fn=o,ei=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Mn||ja(4,a,n),ga(e,n,a);break;case 1:Mn||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&I0(a,n,o)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,ga(e,n,a),Mn=o;break;default:ga(e,n,a)}}function W0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(a){Je(n,n.return,a)}}}function q0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(a){Je(n,n.return,a)}}function Ly(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new G0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new G0),n;default:throw Error(s(435,e.tag))}}function oc(e,n){var a=Ly(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Gy.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(es(R.type)){fn=R.stateNode,ei=!1;break t}break;case 5:fn=R.stateNode,ei=!1;break t;case 3:case 4:fn=R.stateNode.containerInfo,ei=!0;break t}R=R.return}if(fn===null)throw Error(s(160));X0(d,S,u),fn=null,ei=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,e),n=n.sibling}var Li=null;function Y0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&(ja(3,e,e.return),Ho(3,e),ja(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(Mn||a===null||Wi(a,a.return)),o&64&&ma&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(ni(n,e),ii(e),o&512&&(Mn||a===null||Wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[aa]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Bn(d,o,a),d[cn]=e,Y(d),o=d;break t;case"link":var S=Yg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}d=u.createElement(o),Bn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Yg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}d=u.createElement(o),Bn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,Y(d),o=d}e.stateNode=o}else jg(u,e.type,e.stateNode);else e.stateNode=qg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?jg(u,e.type,e.stateNode):qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(Mn||a===null||Wi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(Mn||a===null||Wi(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(ne){Je(e,e.return,ne)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ne){Je(e,e.return,ne)}}break;case 3:if(Ec=null,u=Li,Li=Sc(n.containerInfo),ni(n,e),Li=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zr(n.containerInfo)}catch(ne){Je(e,e.return,ne)}kf&&(kf=!1,j0(e));break;case 4:o=Li,Li=Sc(e.stateNode.containerInfo),ni(n,e),ii(e),Li=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oc(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cc=vt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oc(e,o)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,at=ma,xt=Mn;if(ma=at||u,Mn=xt||X,ni(n,e),Mn=xt,ma=at,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||ma||Mn||Ps(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(d=X.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=X.stateNode;var Tt=X.memoizedProps.style,ot=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(ne){Je(X,X.return,ne)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(ne){Je(X,X.return,ne)}}}else if(n.tag===18){if(a===null){X=n;try{var ht=X.stateNode;u?Ig(ht,!0):Ig(X.stateNode,!1)}catch(ne){Je(X,X.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,oc(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,oc(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(F0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Gf(e);rc(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(hn(S,""),a.flags&=-33);var R=Gf(e);rc(e,R,S);break;case 3:case 4:var X=a.stateNode.containerInfo,at=Gf(e);Vf(e,at,X);break;default:throw Error(s(161))}}catch(xt){Je(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(e,n.alternate,n),n=n.sibling}function Ps(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Ps(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&I0(n,n.return,a),Ps(n);break;case 27:Ko(n.stateNode);case 26:case 5:Wi(n,n.return),Ps(n);break;case 22:n.memoizedState===null&&Ps(n);break;case 30:Ps(n);break;default:Ps(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,a),Ho(4,d);break;case 1:if(_a(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Je(o,o.return,at)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Tm(X[u],R)}catch(at){Je(o,o.return,at)}}a&&S&64&&z0(d),Go(d,d.return);break;case 27:H0(d);case 26:case 5:_a(u,d,a),a&&o===null&&S&4&&B0(d),Go(d,d.return);break;case 12:_a(u,d,a);break;case 31:_a(u,d,a),a&&S&4&&W0(u,d);break;case 13:_a(u,d,a),a&&S&4&&q0(u,d);break;case 22:d.memoizedState===null&&_a(u,d,a),Go(d,d.return);break;case 30:break;default:_a(u,d,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wo(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(e,n,a,o),n=n.sibling}function Z0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&Ho(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Je(n,n.return,X)}}else Ni(e,n,a,o);break;case 31:Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(e,n,a,o):Vo(e,n):d._visibility&2?Ni(e,n,a,o):(d._visibility|=2,Tr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(S,n);break;case 24:Ni(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:Ni(e,n,a,o)}}function Tr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,R=a,X=o,at=S.flags;switch(S.tag){case 0:case 11:case 15:Tr(d,S,R,X,u),Ho(8,S);break;case 23:break;case 22:var xt=S.stateNode;S.memoizedState!==null?xt._visibility&2?Tr(d,S,R,X,u):Vo(d,S):(xt._visibility|=2,Tr(d,S,R,X,u)),u&&at&2048&&Xf(S.alternate,S);break;case 24:Tr(d,S,R,X,u),u&&at&2048&&Wf(S.alternate,S);break;default:Tr(d,S,R,X,u)}n=n.sibling}}function Vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Vo(a,o),u&2048&&Xf(o.alternate,o);break;case 24:Vo(a,o),u&2048&&Wf(o.alternate,o);break;default:Vo(a,o)}n=n.sibling}}var ko=8192;function Ar(e,n,a){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)K0(e,n,a),e=e.sibling}function K0(e,n,a){switch(e.tag){case 26:Ar(e,n,a),e.flags&ko&&e.memoizedState!==null&&_S(a,Li,e.memoizedState,e.memoizedProps);break;case 5:Ar(e,n,a);break;case 3:case 4:var o=Li;Li=Sc(e.stateNode.containerInfo),Ar(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ko,ko=16777216,Ar(e,n,a),ko=o):Ar(e,n,a));break;default:Ar(e,n,a)}}function Q0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,$0(o,e)}Q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J0(e),e=e.sibling}function J0(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,lc(e)):Xo(e);break;default:Xo(e)}}function lc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,$0(o,e)}Q0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ja(8,n,n.return),lc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,lc(n));break;default:lc(n)}e=e.sibling}}function $0(e,n){for(;Ln!==null;){var a=Ln;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:wo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ln=o;else t:for(a=e;Ln!==null;){o=Ln;var u=o.sibling,d=o.return;if(k0(o),o===a){Ln=null;break t}if(u!==null){u.return=d,Ln=u;break t}Ln=d}}}var Ny={getCacheForType:function(e){var n=zn(xn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(xn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rn=null,Ne=null,Pe=0,Qe=0,hi=null,Za=!1,wr=!1,qf=!1,xa=0,pn=0,Ka=0,zs=0,Yf=0,di=0,Rr=0,Wo=null,ai=null,jf=!1,cc=0,tg=0,uc=1/0,fc=null,Qa=null,Tn=0,Ja=null,Cr=null,ya=0,Zf=0,Kf=null,eg=null,qo=0,Qf=null;function pi(){return(Ye&2)!==0&&Pe!==0?Pe&-Pe:G.T!==null?ih():_s()}function ng(){if(di===0)if((Pe&536870912)===0||Be){var e=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),di=e}else di=536870912;return e=ui.current,e!==null&&(e.flags|=32),di}function si(e,n,a){(e===rn&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Dr(e,0),$a(e,Pe,di,!1)),_n(e,a),((Ye&2)===0||e!==rn)&&(e===rn&&((Ye&2)===0&&(zs|=a),pn===4&&$a(e,Pe,di,!1)),qi(e))}function ig(e,n,a){if((Ye&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ae(e,n),u=o?Iy(e,n):$f(e,n,!0),d=o;do{if(u===0){wr&&!o&&$a(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Py(a)){u=$f(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Wo;var X=R.current.memoizedState.isDehydrated;if(X&&(Dr(R,S).flags|=256),S=$f(R,S,!1),S!==2){if(qf&&!X){R.errorRecoveryDisabledLanes|=d,zs|=d,u=4;break t}d=ai,ai=u,d!==null&&(ai===null?ai=d:ai.push.apply(ai,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){Dr(e,0),$a(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,di,!Za);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=cc+300-vt(),10<u)){if($a(o,n,di,!Za),Ht(o,0,!0)!==0)break t;ya=n,o.timeoutHandle=Og(ag.bind(null,o,a,ai,fc,jf,n,di,zs,Rr,Za,d,"Throttled",-0,0),u);break t}ag(o,a,ai,fc,jf,n,di,zs,Rr,Za,d,null,-0,0)}}break}while(!0);qi(e)}function ag(e,n,a,o,u,d,S,R,X,at,xt,Tt,ot,ht){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},K0(n,d,Tt);var ne=(d&62914560)===d?cc-vt():(d&4194048)===d?tg-vt():0;if(ne=xS(Tt,ne),ne!==null){ya=d,e.cancelPendingCommit=ne(hg.bind(null,e,n,d,a,o,u,S,R,X,xt,Tt,null,ot,ht)),$a(e,d,S,!at);return}}hg(e,n,d,a,o,u,S,R,X)}function Py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!li(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(e,n,a,o){n&=~Yf,n&=~zs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-he(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&ea(e,a,n)}function hc(){return(Ye&6)===0?(Yo(0),!1):!0}function Jf(){if(Ne!==null){if(Qe===0)var e=Ne.return;else e=Ne,ca=ws=null,pf(e),yr=null,Co=0,e=Ne;for(;e!==null;)P0(e.alternate,e),e=e.return;Ne=null}}function Dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,Jf(),rn=e,Ne=a=oa(e.current,null),Pe=n,Qe=0,hi=null,Za=!1,wr=ae(e,n),qf=!1,Rr=di=Yf=zs=Ka=pn=0,ai=Wo=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-he(o),d=1<<u;n|=e[u],o&=~d}return xa=n,Nl(),a}function sg(e,n){Te=null,G.H=Io,n===xr||n===Gl?(n=Sm(),Qe=3):n===ef?(n=Sm(),Qe=4):Qe=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Ne===null&&(pn=1,ec(e,Mi(n,e.current)))}function rg(){var e=ui.current;return e===null?!0:(Pe&4194048)===Pe?Ai===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===Ai:!1}function og(){var e=G.H;return G.H=Io,e===null?Io:e}function lg(){var e=G.A;return G.A=Ny,e}function dc(){pn=4,Za||(Pe&4194048)!==Pe&&ui.current!==null||(wr=!0),(Ka&134217727)===0&&(zs&134217727)===0||rn===null||$a(rn,Pe,di,!1)}function $f(e,n,a){var o=Ye;Ye|=2;var u=og(),d=lg();(rn!==e||Pe!==n)&&(fc=null,Dr(e,n)),n=!1;var S=pn;t:do try{if(Qe!==0&&Ne!==null){var R=Ne,X=hi;switch(Qe){case 8:Jf(),S=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var at=Qe;if(Qe=0,hi=null,Ur(e,R,X,at),a&&wr){S=0;break t}break;default:at=Qe,Qe=0,hi=null,Ur(e,R,X,at)}}zy(),S=pn;break}catch(xt){sg(e,xt)}while(!0);return n&&e.shellSuspendCounter++,ca=ws=null,Ye=o,G.H=u,G.A=d,Ne===null&&(rn=null,Pe=0,Nl()),S}function zy(){for(;Ne!==null;)cg(Ne)}function Iy(e,n){var a=Ye;Ye|=2;var o=og(),u=lg();rn!==e||Pe!==n?(fc=null,uc=vt()+500,Dr(e,n)):wr=ae(e,n);t:do try{if(Qe!==0&&Ne!==null){n=Ne;var d=hi;e:switch(Qe){case 1:Qe=0,hi=null,Ur(e,n,d,1);break;case 2:case 9:if(xm(d)){Qe=0,hi=null,ug(n);break}n=function(){Qe!==2&&Qe!==9||rn!==e||(Qe=7),qi(e)},d.then(n,n);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:xm(d)?(Qe=0,hi=null,ug(n)):(Qe=0,hi=null,Ur(e,n,d,7));break;case 5:var S=null;switch(Ne.tag){case 26:S=Ne.memoizedState;case 5:case 27:var R=Ne;if(S?Zg(S):R.stateNode.complete){Qe=0,hi=null;var X=R.sibling;if(X!==null)Ne=X;else{var at=R.return;at!==null?(Ne=at,pc(at)):Ne=null}break e}}Qe=0,hi=null,Ur(e,n,d,5);break;case 6:Qe=0,hi=null,Ur(e,n,d,6);break;case 8:Jf(),pn=6;break t;default:throw Error(s(462))}}By();break}catch(xt){sg(e,xt)}while(!0);return ca=ws=null,G.H=o,G.A=u,Ye=a,Ne!==null?0:(rn=null,Pe=0,Nl(),pn)}function By(){for(;Ne!==null&&!w();)cg(Ne)}function cg(e){var n=N0(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?pc(e):Ne=n}function ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=w0(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=w0(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:pf(n);default:P0(a,n),n=Ne=lm(n,xa),n=N0(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?pc(e):Ne=n}function Ur(e,n,a,o){ca=ws=null,pf(n),yr=null,Co=0;var u=n.return;try{if(Ay(e,u,n,a,Pe)){pn=1,ec(e,Mi(a,e.current)),Ne=null;return}}catch(d){if(u!==null)throw Ne=u,d;pn=1,ec(e,Mi(a,e.current)),Ne=null;return}n.flags&32768?(Be||o===1?e=!0:wr||(Pe&536870912)!==0?e=!1:(Za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),fg(n,e)):pc(n)}function pc(e){var n=e;do{if((n.flags&32768)!==0){fg(n,Za);return}e=n.return;var a=Cy(n.alternate,n,xa);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);pn===0&&(pn=5)}function fg(e,n){do{var a=Dy(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);pn=6,Ne=null}function hg(e,n,a,o,u,d,S,R,X){e.cancelPendingCommit=null;do mc();while(Tn!==0);if((Ye&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Hu,Qn(e,a,d,S,R,X),e===rn&&(Ne=rn=null,Pe=0),Cr=n,Ja=e,ya=a,Zf=d,Kf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vy(zt,function(){return vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,u=j.p,j.p=2,S=Ye,Ye|=4;try{Uy(e,n,a)}finally{Ye=S,j.p=u,G.T=o}}Tn=1,dg(),pg(),mg()}}function dg(){if(Tn===1){Tn=0;var e=Ja,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=j.p;j.p=2;var u=Ye;Ye|=4;try{Y0(n,e);var d=fh,S=$p(e.containerInfo),R=d.focusedElem,X=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&Jp(R.ownerDocument.documentElement,R)){if(X!==null&&Pu(R)){var at=X.start,xt=X.end;if(xt===void 0&&(xt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(xt,R.value.length);else{var Tt=R.ownerDocument||document,ot=Tt&&Tt.defaultView||window;if(ot.getSelection){var ht=ot.getSelection(),ne=R.textContent.length,de=Math.min(X.start,ne),en=X.end===void 0?de:Math.min(X.end,ne);!ht.extend&&de>en&&(S=en,en=de,de=S);var J=Qp(R,de),q=Qp(R,en);if(J&&q&&(ht.rangeCount!==1||ht.anchorNode!==J.node||ht.anchorOffset!==J.offset||ht.focusNode!==q.node||ht.focusOffset!==q.offset)){var it=Tt.createRange();it.setStart(J.node,J.offset),ht.removeAllRanges(),de>en?(ht.addRange(it),ht.extend(q.node,q.offset)):(it.setEnd(q.node,q.offset),ht.addRange(it))}}}}for(Tt=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&Tt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Tt.length;R++){var Et=Tt[R];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}wc=!!uh,fh=uh=null}finally{Ye=u,j.p=o,G.T=a}}e.current=n,Tn=2}}function pg(){if(Tn===2){Tn=0;var e=Ja,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=j.p;j.p=2;var u=Ye;Ye|=4;try{V0(e,n.alternate,n)}finally{Ye=u,j.p=o,G.T=a}}Tn=3}}function mg(){if(Tn===4||Tn===3){Tn=0,nt();var e=Ja,n=Cr,a=ya,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Cr=Ja=null,gg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),Ia(a),n=n.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=G.T,u=j.p,j.p=2,G.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{G.T=n,j.p=u}}(ya&3)!==0&&mc(),qi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?qo++:(qo=0,Qf=e):qo=0,Yo(0)}}function gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,wo(n)))}function mc(){return dg(),pg(),mg(),vg()}function vg(){if(Tn!==5)return!1;var e=Ja,n=Zf;Zf=0;var a=Ia(ya),o=G.T,u=j.p;try{j.p=32>a?32:a,G.T=null,a=Kf,Kf=null;var d=Ja,S=ya;if(Tn=0,Cr=Ja=null,ya=0,(Ye&6)!==0)throw Error(s(331));var R=Ye;if(Ye|=4,J0(d.current),Z0(d,d.current,S,a),Ye=R,Yo(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(se,d)}catch{}return!0}finally{j.p=u,G.T=o,gg(e,n)}}function _g(e,n,a){n=Mi(a,n),n=Cf(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(_n(e,2),qi(e))}function Je(e,n,a){if(e.tag===3)_g(e,e,a);else for(;n!==null;){if(n.tag===3){_g(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=Mi(a,e),a=x0(2),o=Wa(n,a,2),o!==null&&(y0(a,o,n,e),_n(o,2),qi(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=Fy.bind(null,e,n,a),n.then(e,e))}function Fy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,rn===e&&(Pe&a)===a&&(pn===4||pn===3&&(Pe&62914560)===Pe&&300>vt()-cc?(Ye&2)===0&&Dr(e,0):Yf|=a,Rr===Pe&&(Rr=0)),qi(e)}function xg(e,n){n===0&&(n=Ct()),e=bs(e,n),e!==null&&(_n(e,n),qi(e))}function Hy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(e,a)}function Gy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),xg(e,a)}function Vy(e,n){return Zt(e,n)}var gc=null,Lr=null,eh=!1,vc=!1,nh=!1,ts=0;function qi(e){e!==Lr&&e.next===null&&(Lr===null?gc=Lr=e:Lr=Lr.next=e),vc=!0,eh||(eh=!0,Xy())}function Yo(e,n){if(!nh&&vc){nh=!0;do for(var a=!1,o=gc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-he(42|e)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Eg(o,d))}else d=Pe,d=Ht(o,o===rn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ae(o,d)||(a=!0,Eg(o,d));o=o.next}while(a);nh=!1}}function ky(){yg()}function yg(){vc=eh=!1;var e=0;ts!==0&&tS()&&(e=ts);for(var n=vt(),a=null,o=gc;o!==null;){var u=o.next,d=Sg(o,n);d===0?(o.next=null,a===null?gc=u:a.next=u,u===null&&(Lr=a)):(a=o,(e!==0||(d&3)!==0)&&(vc=!0)),o=u}Tn!==0&&Tn!==5||Yo(e),ts!==0&&(ts=0)}function Sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-he(d),R=1<<S,X=u[S];X===-1?((R&a)===0||(R&o)!==0)&&(u[S]=He(R,n)):X<=n&&(e.expiredLanes|=R),d&=~R}if(n=rn,a=Pe,a=Ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ae(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&I(o),Ia(a)){case 2:case 8:a=ee;break;case 32:a=zt;break;case 268435456:a=be;break;default:a=zt}return o=Mg.bind(null,e),a=Zt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&I(o),e.callbackPriority=2,e.callbackNode=null,2}function Mg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(mc()&&e.callbackNode!==a)return null;var o=Pe;return o=Ht(e,e===rn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ig(e,o,n),Sg(e,vt()),e.callbackNode!=null&&e.callbackNode===a?Mg.bind(null,e):null)}function Eg(e,n){if(mc())return null;ig(e,n,!0)}function Xy(){nS(function(){(Ye&6)!==0?Zt(St,ky):yg()})}function ih(){if(ts===0){var e=vr;e===0&&(e=Bt,Bt<<=1,(Bt&261888)===0&&(Bt=256)),ts=e}return ts}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function Tg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Wy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=bg((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?bg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new Cl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var X=S?Tg(u,S):new FormData(u);Ef(a,{pending:!0,data:X,method:u.method,action:d},null,X)}}else typeof d=="function"&&(R.preventDefault(),X=S?Tg(u,S):new FormData(u),Ef(a,{pending:!0,data:X,method:u.method,action:d},d,X))},currentTarget:u}]})}}for(var ah=0;ah<Fu.length;ah++){var sh=Fu[ah],qy=sh.toLowerCase(),Yy=sh[0].toUpperCase()+sh.slice(1);Ui(qy,"on"+Yy)}Ui(nm,"onAnimationEnd"),Ui(im,"onAnimationIteration"),Ui(am,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(cy,"onTransitionRun"),Ui(uy,"onTransitionStart"),Ui(fy,"onTransitionCancel"),Ui(sm,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],X=R.instance,at=R.currentTarget;if(R=R.listener,X!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=at;try{d(u)}catch(xt){Ll(xt)}u.currentTarget=null,d=X}else for(S=0;S<o.length;S++){if(R=o[S],X=R.instance,at=R.currentTarget,R=R.listener,X!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=at;try{d(u)}catch(xt){Ll(xt)}u.currentTarget=null,d=X}}}}function Oe(e,n){var a=n[xs];a===void 0&&(a=n[xs]=new Set);var o=e+"__bubble";a.has(o)||(wg(n,e,2,!1),a.add(o))}function rh(e,n,a){var o=0;n&&(o|=4),wg(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[_c]){e[_c]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||rh(a,!1,e),rh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,rh("selectionchange",!1,n))}}function wg(e,n,a,o){switch(nv(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=Mh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var X=S.tag;if((X===3||X===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=D(R),S===null)return;if(X=S.tag,X===5||X===6||X===26||X===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Lp(function(){var at=d,xt=bu(a),Tt=[];t:{var ot=rm.get(e);if(ot!==void 0){var ht=Cl,ne=e;switch(e){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":ht=Gx;break;case"focusin":ne="focus",ht=Du;break;case"focusout":ne="blur",ht=Du;break;case"beforeblur":case"afterblur":ht=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Xx;break;case nm:case im:case am:ht=Lx;break;case sm:ht=qx;break;case"scroll":case"scrollend":ht=wx;break;case"wheel":ht=jx;break;case"copy":case"cut":case"paste":ht=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Ip;break;case"toggle":case"beforetoggle":ht=Kx}var de=(n&4)!==0,en=!de&&(e==="scroll"||e==="scrollend"),J=de?ot!==null?ot+"Capture":null:ot;de=[];for(var q=at,it;q!==null;){var Et=q;if(it=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||it===null||J===null||(Et=go(q,J),Et!=null&&de.push(Zo(q,Et,it))),en)break;q=q.return}0<de.length&&(ot=new ht(ot,ne,null,a,xt),Tt.push({event:ot,listeners:de}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ot&&a!==Eu&&(ne=a.relatedTarget||a.fromElement)&&(D(ne)||ne[yi]))break t;if((ht||ot)&&(ot=xt.window===xt?xt:(ot=xt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ht?(ne=a.relatedTarget||a.toElement,ht=at,ne=ne?D(ne):null,ne!==null&&(en=c(ne),de=ne.tag,ne!==en||de!==5&&de!==27&&de!==6)&&(ne=null)):(ht=null,ne=at),ht!==ne)){if(de=Pp,Et="onMouseLeave",J="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(de=Ip,Et="onPointerLeave",J="onPointerEnter",q="pointer"),en=ht==null?ot:st(ht),it=ne==null?ot:st(ne),ot=new de(Et,q+"leave",ht,a,xt),ot.target=en,ot.relatedTarget=it,Et=null,D(xt)===at&&(de=new de(J,q+"enter",ne,a,xt),de.target=it,de.relatedTarget=en,Et=de),en=Et,ht&&ne)e:{for(de=Zy,J=ht,q=ne,it=0,Et=J;Et;Et=de(Et))it++;Et=0;for(var fe=q;fe;fe=de(fe))Et++;for(;0<it-Et;)J=de(J),it--;for(;0<Et-it;)q=de(q),Et--;for(;it--;){if(J===q||q!==null&&J===q.alternate){de=J;break e}J=de(J),q=de(q)}de=null}else de=null;ht!==null&&Rg(Tt,ot,ht,de,!1),ne!==null&&en!==null&&Rg(Tt,en,ne,de,!0)}}t:{if(ot=at?st(at):window,ht=ot.nodeName&&ot.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ot.type==="file")var Xe=Wp;else if(kp(ot))if(qp)Xe=ry;else{Xe=ay;var ce=iy}else ht=ot.nodeName,!ht||ht.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&Mu(at.elementType)&&(Xe=Wp):Xe=sy;if(Xe&&(Xe=Xe(e,at))){Xp(Tt,Xe,a,xt);break t}ce&&ce(e,ot,at),e==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&Un(ot,"number",ot.value)}switch(ce=at?st(at):window,e){case"focusin":(kp(ce)||ce.contentEditable==="true")&&(cr=ce,zu=at,bo=null);break;case"focusout":bo=zu=cr=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,tm(Tt,a,xt);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":tm(Tt,a,xt)}var Ae;if(Lu)t:{switch(e){case"compositionstart":var ze="onCompositionStart";break t;case"compositionend":ze="onCompositionEnd";break t;case"compositionupdate":ze="onCompositionUpdate";break t}ze=void 0}else lr?Gp(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(Bp&&a.locale!=="ko"&&(lr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&lr&&(Ae=Np()):(Ba=xt,wu="value"in Ba?Ba.value:Ba.textContent,lr=!0)),ce=xc(at,ze),0<ce.length&&(ze=new zp(ze,e,null,a,xt),Tt.push({event:ze,listeners:ce}),Ae?ze.data=Ae:(Ae=Vp(a),Ae!==null&&(ze.data=Ae)))),(Ae=Jx?$x(e,a):ty(e,a))&&(ze=xc(at,"onBeforeInput"),0<ze.length&&(ce=new zp("onBeforeInput","beforeinput",null,a,xt),Tt.push({event:ce,listeners:ze}),ce.data=Ae)),Wy(Tt,e,at,a,xt)}Ag(Tt,n)})}function Zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function xc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=go(e,a),u!=null&&o.unshift(Zo(e,u,d)),u=go(e,n),u!=null&&o.push(Zo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rg(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var R=a,X=R.alternate,at=R.stateNode;if(R=R.tag,X!==null&&X===o)break;R!==5&&R!==26&&R!==27||at===null||(X=at,u?(at=go(a,d),at!=null&&S.unshift(Zo(a,at,X))):u||(at=go(a,d),at!=null&&S.push(Zo(a,at,X)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Qy,"")}function Dg(e,n){return n=Cg(n),Cg(e)===n}function tn(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,a,o);break;case"style":Dp(e,o,d);break;case"data":if(n!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&tn(e,n,"name",u.name,u,null),tn(e,n,"formEncType",u.formEncType,u,null),tn(e,n,"formMethod",u.formMethod,u,null),tn(e,n,"formTarget",u.formTarget,u,null)):(tn(e,n,"encType",u.encType,u,null),tn(e,n,"method",u.method,u,null),tn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sa);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),_t(e,"popover",o);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tx.get(a)||a,_t(e,a,o))}}function ch(e,n,a,o,u,d){switch(a){case"style":Dp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?hn(e,o):(typeof o=="number"||typeof o=="bigint")&&hn(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[bn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):_t(e,a,o)}}}function Bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(e,n,d,S,a,null)}}u&&tn(e,n,"srcSet",a.srcSet,a,null),o&&tn(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var R=d=S=u=null,X=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":S=xt;break;case"checked":X=xt;break;case"defaultChecked":at=xt;break;case"value":d=xt;break;case"defaultValue":R=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:tn(e,n,o,xt,a,null)}}Dn(e,d,R,X,at,S,u,!1);return;case"select":Oe("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:tn(e,n,u,R,a,null)}n=d,a=S,e.multiple=!!o,n!=null?un(e,!!o,n,!1):a!=null&&un(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:tn(e,n,S,R,a,null)}$n(e,o,u,d);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:tn(e,n,X,o,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<jo.length;o++)Oe(jo[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(e,n,at,o,a,null)}return;default:if(Mu(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&ch(e,n,xt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&tn(e,n,R,o,a,null))}function Jy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,X=null,at=null,xt=null;for(ht in a){var Tt=a[ht];if(a.hasOwnProperty(ht)&&Tt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":X=Tt;default:o.hasOwnProperty(ht)||tn(e,n,ht,null,o,Tt)}}for(var ot in o){var ht=o[ot];if(Tt=a[ot],o.hasOwnProperty(ot)&&(ht!=null||Tt!=null))switch(ot){case"type":d=ht;break;case"name":u=ht;break;case"checked":at=ht;break;case"defaultChecked":xt=ht;break;case"value":S=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==Tt&&tn(e,n,ot,ht,o,Tt)}}Ie(e,S,R,X,at,xt,d,u);return;case"select":ht=S=R=ot=null;for(d in a)if(X=a[d],a.hasOwnProperty(d)&&X!=null)switch(d){case"value":break;case"multiple":ht=X;default:o.hasOwnProperty(d)||tn(e,n,d,null,o,X)}for(u in o)if(d=o[u],X=a[u],o.hasOwnProperty(u)&&(d!=null||X!=null))switch(u){case"value":ot=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==X&&tn(e,n,u,d,o,X)}n=R,a=S,o=ht,ot!=null?un(e,!!a,ot,!1):!!o!=!!a&&(n!=null?un(e,!!a,n,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":ht=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:tn(e,n,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ot=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&tn(e,n,S,u,o,d)}sn(e,ot,ht);return;case"option":for(var ne in a)if(ot=a[ne],a.hasOwnProperty(ne)&&ot!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:tn(e,n,ne,null,o,ot)}for(X in o)if(ot=o[X],ht=a[X],o.hasOwnProperty(X)&&ot!==ht&&(ot!=null||ht!=null))switch(X){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:tn(e,n,X,ot,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)ot=a[de],a.hasOwnProperty(de)&&ot!=null&&!o.hasOwnProperty(de)&&tn(e,n,de,null,o,ot);for(at in o)if(ot=o[at],ht=a[at],o.hasOwnProperty(at)&&ot!==ht&&(ot!=null||ht!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:tn(e,n,at,ot,o,ht)}return;default:if(Mu(n)){for(var en in a)ot=a[en],a.hasOwnProperty(en)&&ot!==void 0&&!o.hasOwnProperty(en)&&ch(e,n,en,void 0,o,ot);for(xt in o)ot=o[xt],ht=a[xt],!o.hasOwnProperty(xt)||ot===ht||ot===void 0&&ht===void 0||ch(e,n,xt,ot,o,ht);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!o.hasOwnProperty(J)&&tn(e,n,J,null,o,ot);for(Tt in o)ot=o[Tt],ht=a[Tt],!o.hasOwnProperty(Tt)||ot===ht||ot==null&&ht==null||tn(e,n,Tt,ot,o,ht)}function Ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&Ug(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],at=X.startTime;if(at>R)break;var xt=X.transferSize,Tt=X.initiatorType;xt&&Ug(Tt)&&(X=X.responseEnd,S+=xt*(X<R?1:(R-at)/(X-at)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function Lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(iS)}:Og;function iS(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function zg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),zr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ko(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ko(a);for(var d=a.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Ko(e.ownerDocument.body);a=u}while(a);zr(n)}function Ig(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wi(e.nextSibling),e===null))return null;return e}function Bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function wi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vh=null;function Fg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return wi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Hg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Gg(e,n,a){switch(n=yc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ko(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ys(e)}var Ri=new Map,Vg=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=j.d;j.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=Sa.f(),n=hc();return e||n}function lS(e){var n=Q(e);n!==null&&n.tag===5&&n.type==="form"?s0(n):Sa.r(e)}var Nr=typeof document>"u"?null:document;function kg(e,n,a){var o=Nr;if(o&&typeof n=="string"&&n){var u=Ke(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Vg.has(u)||(Vg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",e),Y(n),o.head.appendChild(n)))}}function cS(e){Sa.D(e),kg("dns-prefetch",e,null)}function uS(e,n){Sa.C(e,n),kg("preconnect",e,n)}function fS(e,n,a){Sa.L(e,n,a);var o=Nr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ke(a.imageSizes)+'"]')):u+='[href="'+Ke(e)+'"]';var d=u;switch(n){case"style":d=Or(e);break;case"script":d=Pr(e)}Ri.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Qo(d))||n==="script"&&o.querySelector(Jo(d))||(n=o.createElement("link"),Bn(n,"link",e),Y(n),o.head.appendChild(n)))}}function hS(e,n){Sa.m(e,n);var a=Nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ke(o)+'"][href="'+Ke(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Pr(e)}if(!Ri.has(d)&&(e=g({rel:"modulepreload",href:e},n),Ri.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(d)))return}o=a.createElement("link"),Bn(o,"link",e),Y(o),a.head.appendChild(o)}}}function dS(e,n,a){Sa.S(e,n,a);var o=Nr;if(o&&e){var u=ct(o).hoistableStyles,d=Or(e);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Qo(d)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(d))&&_h(e,a);var X=S=o.createElement("link");Y(X),Bn(X,"link",e),X._p=new Promise(function(at,xt){X.onload=at,X.onerror=xt}),X.addEventListener("load",function(){R.loading|=1}),X.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Mc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function pS(e,n){Sa.X(e,n);var a=Nr;if(a&&e){var o=ct(a).hoistableScripts,u=Pr(e),d=o.get(u);d||(d=a.querySelector(Jo(u)),d||(e=g({src:e,async:!0},n),(n=Ri.get(u))&&xh(e,n),d=a.createElement("script"),Y(d),Bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function mS(e,n){Sa.M(e,n);var a=Nr;if(a&&e){var o=ct(a).hoistableScripts,u=Pr(e),d=o.get(u);d||(d=a.querySelector(Jo(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=Ri.get(u))&&xh(e,n),d=a.createElement("script"),Y(d),Bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Xg(e,n,a,o){var u=(u=At.current)?Sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Or(a.href),a=ct(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Or(a.href);var d=ct(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Qo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,a),d||gS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pr(a),a=ct(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Or(e){return'href="'+Ke(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function Wg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),Y(n),e.head.appendChild(n))}function Pr(e){return'[src="'+Ke(e)+'"]'}function Jo(e){return"script[async]"+e}function qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ke(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Bn(o,"style",u),Mc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Or(a.href);var d=e.querySelector(Qo(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=Wg(a),(u=Ri.get(u))&&_h(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var S=d;return S._p=new Promise(function(R,X){S.onload=R,S.onerror=X}),Bn(d,"link",o),n.state.loading|=4,Mc(d,a.precedence,e),n.instance=d;case"script":return d=Pr(a.src),(u=e.querySelector(Jo(d)))?(n.instance=u,Y(u),u):(o=a,(u=Ri.get(d))&&(o=g({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Mc(o,a.precedence,e));return n.instance}function Mc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function _h(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ec=null;function Yg(e,n,a){if(Ec===null){var o=new Map,u=Ec=new Map;u.set(a,o)}else u=Ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[aa]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _S(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(o.href),d=n.querySelector(Qo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=Wg(o),(u=Ri.get(u))&&_h(o,u),d=d.createElement("link"),Y(d);var S=d;S._p=new Promise(function(R,X){S.onload=R,S.onerror=X}),Bn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function xS(e,n){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&yh===0&&(yh=62500*$y());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>yh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tc=null;function Ac(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tc=new Map,n.forEach(yS,e),Tc=null,bc.call(e))}function yS(e,n){if(!(n.state.loading&4)){var a=Tc.get(e);if(a)var o=a.get(null);else{a=new Map,Tc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var $o={$$typeof:L,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function SS(e,n,a,o,u,d,S,R,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function Kg(e,n,a,o,u,d,S,R,X,at,xt,Tt){return e=new SS(e,n,a,S,X,at,xt,Tt,R),n=1,d===!0&&(n|=24),d=ci(3,null,null,n),e.current=d,d.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},nf(d),e}function Qg(e){return e?(e=hr,e):hr}function Jg(e,n,a,o,u,d){u=Qg(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Wa(e,o,n),a!==null&&(si(a,e,n),Uo(a,e,n))}function $g(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Sh(e,n){$g(e,n),(e=e.alternate)&&$g(e,n)}function tv(e){if(e.tag===13||e.tag===31){var n=bs(e,67108864);n!==null&&si(n,e,67108864),Sh(e,67108864)}}function ev(e){if(e.tag===13||e.tag===31){var n=pi();n=na(n);var a=bs(e,n);a!==null&&si(a,e,n),Sh(e,n)}}var wc=!0;function MS(e,n,a,o){var u=G.T;G.T=null;var d=j.p;try{j.p=2,Mh(e,n,a,o)}finally{j.p=d,G.T=u}}function ES(e,n,a,o){var u=G.T;G.T=null;var d=j.p;try{j.p=8,Mh(e,n,a,o)}finally{j.p=d,G.T=u}}function Mh(e,n,a,o){if(wc){var u=Eh(o);if(u===null)lh(e,n,o,Rc,a),iv(e,o);else if(TS(u,e,n,a,o))o.stopPropagation();else if(iv(e,o),n&4&&-1<bS.indexOf(e)){for(;u!==null;){var d=Q(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ft(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var X=1<<31-he(S);R.entanglements[1]|=X,S&=~X}qi(d),(Ye&6)===0&&(uc=vt()+500,Yo(0))}}break;case 31:case 13:R=bs(d,2),R!==null&&si(R,d,2),hc(),Sh(d,2)}if(d=Eh(o),d===null&&lh(e,n,o,Rc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function Eh(e){return e=bu(e),bh(e)}var Rc=null;function bh(e){if(Rc=null,e=D(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Rc=e,null}function nv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case St:return 2;case ee:return 8;case zt:case Yt:return 32;case be:return 268435456;default:return 32}default:return 32}}var Th=!1,ns=null,is=null,as=null,tl=new Map,el=new Map,ss=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(e,n){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Q(n),n!==null&&tv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,a,o,u){switch(n){case"focusin":return ns=nl(ns,e,n,a,o,u),!0;case"dragenter":return is=nl(is,e,n,a,o,u),!0;case"mouseover":return as=nl(as,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return tl.set(d,nl(tl.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,el.set(d,nl(el.get(d)||null,e,n,a,o,u)),!0}return!1}function av(e){var n=D(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ia(e.priority,function(){ev(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,ia(e.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Eu=o,a.target.dispatchEvent(o),Eu=null}else return n=Q(a),n!==null&&tv(n),e.blockedOn=a,!1;n.shift()}return!0}function sv(e,n,a){Cc(e)&&a.delete(n)}function AS(){Th=!1,ns!==null&&Cc(ns)&&(ns=null),is!==null&&Cc(is)&&(is=null),as!==null&&Cc(as)&&(as=null),tl.forEach(sv),el.forEach(sv)}function Dc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var Uc=null;function rv(e){Uc!==e&&(Uc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Uc===e&&(Uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(bh(o||a)===null)continue;break}var d=Q(a);d!==null&&(e.splice(n,3),n-=3,Ef(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zr(e){function n(X){return Dc(X,e)}ns!==null&&Dc(ns,e),is!==null&&Dc(is,e),as!==null&&Dc(as,e),tl.forEach(n),el.forEach(n);for(var a=0;a<ss.length;a++){var o=ss[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)av(a),a.blockedOn===null&&ss.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[bn]||null;if(typeof d=="function")S||rv(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[bn]||null)R=S.formAction;else if(bh(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),rv(a)}}}function ov(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}Lc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=pi();Jg(a,o,e,n,null,null)},Lc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jg(e.current,2,null,e,null,null),hc(),n[yi]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=_s();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,e),a===0&&av(e)}};var lv=t.version;if(lv!=="19.2.8")throw Error(s(527,lv,"19.2.8"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{se=Nc.inject(wS),re=Nc}catch{}}return al.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=m0,d=g0,S=v0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Kg(e,1,!1,null,null,a,o,null,u,d,S,ov),e[yi]=n.current,oh(e),new Ah(n)},al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=m0,S=g0,R=v0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=Kg(e,1,!0,n,a??null,o,u,X,d,S,R,ov),n.context=Qg(null),a=n.current,o=pi(),o=na(o),u=Xa(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,_n(n,a),qi(n),e[yi]=n.current,oh(e),new Lc(n)},al.version="19.2.8",al}var _v;function BS(){if(_v)return Ch.exports;_v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=IS(),Ch.exports}var FS=BS();const HS=z_(FS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="174",GS=0,xv=1,VS=2,I_=1,B_=2,Ra=3,vs=0,Kn=1,Zn=2,ms=0,eo=1,yv=2,Sv=3,Mv=4,kS=5,Ys=100,XS=101,WS=102,qS=103,YS=104,jS=200,ZS=201,KS=202,QS=203,yd=204,Sd=205,JS=206,$S=207,tM=208,eM=209,nM=210,iM=211,aM=212,sM=213,rM=214,Md=0,Ed=1,bd=2,ao=3,Td=4,Ad=5,wd=6,Rd=7,F_=0,oM=1,lM=2,gs=0,cM=1,uM=2,fM=3,H_=4,hM=5,dM=6,pM=7,G_=300,so=301,ro=302,Cd=303,Dd=304,_u=306,yl=1e3,Ks=1001,Ud=1002,xi=1003,mM=1004,Oc=1005,Qi=1006,Nh=1007,Qs=1008,Oa=1009,V_=1010,k_=1011,Sl=1012,hp=1013,Js=1014,Ji=1015,bl=1016,dp=1017,pp=1018,oo=1020,X_=35902,W_=1021,q_=1022,Fi=1023,Y_=1024,j_=1025,no=1026,lo=1027,mp=1028,gp=1029,Z_=1030,vp=1031,_p=1033,ou=33776,lu=33777,cu=33778,uu=33779,Ld=35840,Nd=35841,Od=35842,Pd=35843,zd=36196,Id=37492,Bd=37496,Fd=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,Wd=37814,qd=37815,Yd=37816,jd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,fu=36492,$d=36494,tp=36495,K_=36283,ep=36284,np=36285,ip=36286,gM=3200,vM=3201,Q_=0,_M=1,ds="",Yn="srgb",co="srgb-linear",du="linear",nn="srgb",Ir=7680,Ev=519,xM=512,yM=513,SM=514,J_=515,MM=516,EM=517,bM=518,TM=519,bv=35044,Tv="300 es",La=2e3,pu=2001;class ho{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Av=1234567;const ml=Math.PI/180,Ml=180/Math.PI;function po(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function Ue(r,t,i){return Math.max(t,Math.min(i,r))}function xp(r,t){return(r%t+t)%t}function AM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function wM(r,t,i){return r!==t?(i-r)/(t-r):0}function gl(r,t,i){return(1-i)*r+i*t}function RM(r,t,i,s){return gl(r,t,1-Math.exp(-i*s))}function CM(r,t=1){return t-Math.abs(xp(r,t*2)-t)}function DM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function UM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function LM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function NM(r,t){return r+Math.random()*(t-r)}function OM(r){return r*(.5-Math.random())}function PM(r){r!==void 0&&(Av=r);let t=Av+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zM(r){return r*ml}function IM(r){return r*Ml}function BM(r){return(r&r-1)===0&&r!==0}function FM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function HM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function GM(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),p=f(i/2),m=c((t+s)/2),v=f((t+s)/2),g=c((t-s)/2),_=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*v,p*g,p*_,h*m);break;case"YZY":r.set(p*_,h*v,p*g,h*m);break;case"ZXZ":r.set(p*g,p*_,h*v,h*m);break;case"XZX":r.set(h*v,p*E,p*y,h*m);break;case"YXY":r.set(p*y,h*v,p*E,h*m);break;case"ZYZ":r.set(p*E,p*y,h*v,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Jr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $_={DEG2RAD:ml,RAD2DEG:Ml,generateUUID:po,clamp:Ue,euclideanModulo:xp,mapLinear:AM,inverseLerp:wM,lerp:gl,damp:RM,pingpong:CM,smoothstep:DM,smootherstep:UM,randInt:LM,randFloat:NM,randFloatSpread:OM,seededRandom:PM,degToRad:zM,radToDeg:IM,isPowerOfTwo:BM,ceilPowerOfTwo:FM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:GM,normalize:Xn,denormalize:Jr};class Jt{constructor(t=0,i=0){Jt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t,i,s,l,c,f,h,p,m){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,m)}set(t,i,s,l,c,f,h,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],v=s[4],g=s[7],_=s[2],y=s[5],E=s[8],T=l[0],M=l[3],x=l[6],N=l[1],L=l[4],b=l[7],P=l[2],C=l[5],O=l[8];return c[0]=f*T+h*N+p*P,c[3]=f*M+h*L+p*C,c[6]=f*x+h*b+p*O,c[1]=m*T+v*N+g*P,c[4]=m*M+v*L+g*C,c[7]=m*x+v*b+g*O,c[2]=_*T+y*N+E*P,c[5]=_*M+y*L+E*C,c[8]=_*x+y*b+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*h*m-s*c*v+s*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],g=v*f-h*m,_=h*p-v*c,y=m*c-f*p,E=i*g+s*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*m-v*s)*T,t[2]=(h*s-l*f)*T,t[3]=_*T,t[4]=(v*i-l*p)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Oh.makeScale(t,i)),this}rotate(t){return this.premultiply(Oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new Re;function tx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function VM(){const r=mu("canvas");return r.style.display="block",r}const wv={};function Xs(r){r in wv||(wv[r]=!0,console.warn(r))}function kM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function XM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function WM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rv=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qM(){const r={enabled:!0,workingColorSpace:co,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===nn&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===nn&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?du:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[co]:{primaries:t,whitePoint:s,transfer:du,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:nn,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),r}const qe=qM();function Na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class YM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Br===void 0&&(Br=mu("canvas")),Br.width=t.width,Br.height=t.height;const s=Br.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Br}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=mu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jM=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ph(l[f].image)):c.push(Ph(l[f]))}else c=Ph(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ph(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?YM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class Vn extends ho{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ks,l=Ks,c=Qi,f=Qs,h=Fi,p=Oa,m=Vn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=po(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yl:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case Ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yl:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case Ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=G_;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],v=p[4],g=p[8],_=p[1],y=p[5],E=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,b=(y+1)/2,P=(x+1)/2,C=(v+_)/4,O=(g+T)/4,z=(E+M)/4;return L>b&&L>P?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=C/s,c=O/s):b>P?b<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(b),s=C/l,c=z/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=O/c,l=z/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(g-T)/N,this.z=(_-v)/N,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KM extends ho{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Vn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends KM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ex extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const _=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(h===1){t[i+0]=_,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(g!==T||p!==_||m!==y||v!==E){let M=1-h;const x=p*_+m*y+v*E+g*T,N=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const P=Math.sqrt(L),C=Math.atan2(P,x*N);M=Math.sin(M*C)/P,h=Math.sin(h*C)/P}const b=h*N;if(p=p*M+_*b,m=m*M+y*b,v=v*M+E*b,g=g*M+T*b,M===1-h){const P=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=P,m*=P,v*=P,g*=P}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[f],_=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+v*g+p*y-m*_,t[i+1]=p*E+v*_+m*g-h*y,t[i+2]=m*E+v*y+h*_-p*g,t[i+3]=v*E-h*g-p*_-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(l/2),g=h(c/2),_=p(s/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=_*v*g+m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g-_*y*E;break;case"YXZ":this._x=_*v*g+m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g+_*y*E;break;case"ZXY":this._x=_*v*g-m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g-_*y*E;break;case"ZYX":this._x=_*v*g-m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g+_*y*E;break;case"YZX":this._x=_*v*g+m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g-_*y*E;break;case"XZY":this._x=_*v*g-m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],v=i[6],g=i[10],_=s+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(v-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*h+l*m-c*p,this._y=l*v+f*p+c*h-s*m,this._z=c*v+f*m+s*p-l*h,this._w=f*v-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),g=Math.sin((1-i)*v)/m,_=Math.sin(i*v)/m;return this._w=f*g+this._w*_,this._x=s*g+this._x*_,this._y=l*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,s=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Dv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Dv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*s),v=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-h*v,this.y=s+p*v+h*m-c*g,this.z=l+p*g+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zh=new k,Dv=new Gi;class tr{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Oi):Oi.fromBufferAttribute(c,f),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pc.copy(s.boundingBox)),Pc.applyMatrix4(t.matrixWorld),this.union(Pc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),zc.subVectors(this.max,sl),Fr.subVectors(t.a,sl),Hr.subVectors(t.b,sl),Gr.subVectors(t.c,sl),os.subVectors(Hr,Fr),ls.subVectors(Gr,Hr),Is.subVectors(Fr,Gr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Is.z,Is.y,os.z,0,-os.x,ls.z,0,-ls.x,Is.z,0,-Is.x,-os.y,os.x,0,-ls.y,ls.x,0,-Is.y,Is.x,0];return!Ih(i,Fr,Hr,Gr,zc)||(i=[1,0,0,0,1,0,0,0,1],!Ih(i,Fr,Hr,Gr,zc))?!1:(Ic.crossVectors(os,ls),i=[Ic.x,Ic.y,Ic.z],Ih(i,Fr,Hr,Gr,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ma=[new k,new k,new k,new k,new k,new k,new k,new k],Oi=new k,Pc=new tr,Fr=new k,Hr=new k,Gr=new k,os=new k,ls=new k,Is=new k,sl=new k,zc=new k,Ic=new k,Bs=new k;function Ih(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Bs.fromArray(r,c);const h=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),p=t.dot(Bs),m=i.dot(Bs),v=s.dot(Bs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const JM=new tr,rl=new k,Bh=new k;class er{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):JM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rl.subVectors(t,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(rl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rl.copy(t.center).add(Bh)),this.expandByPoint(rl.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ea=new k,Fh=new k,Bc=new k,cs=new k,Hh=new k,Fc=new k,Gh=new k;class xu{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Fh.copy(t).add(i).multiplyScalar(.5),Bc.copy(i).sub(t).normalize(),cs.copy(this.origin).sub(Fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Bc),h=cs.dot(this.direction),p=-cs.dot(Bc),m=cs.lengthSq(),v=Math.abs(1-f*f);let g,_,y,E;if(v>0)if(g=f*p-h,_=f*h-p,E=c*v,g>=0)if(_>=-E)if(_<=E){const T=1/v;g*=T,_*=T,y=g*(g+f*_+2*h)+_*(f*g+_+2*p)+m}else _=c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*p)+m;else _=-c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*p)+m;else _<=-E?(g=Math.max(0,-(-f*c+h)),_=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m):_<=E?(g=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(g=Math.max(0,-(f*c+h)),_=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m);else _=f>0?-c:c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Fh).addScaledVector(Bc,_),y}intersectSphere(t,i){Ea.subVectors(t.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(s=(t.min.x-_.x)*m,l=(t.max.x-_.x)*m):(s=(t.max.x-_.x)*m,l=(t.min.x-_.x)*m),v>=0?(c=(t.min.y-_.y)*v,f=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,f=(t.min.y-_.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(t.min.z-_.z)*g,p=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,p=(t.min.z-_.z)*g),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,i,s,l,c){Hh.subVectors(i,t),Fc.subVectors(s,t),Gh.crossVectors(Hh,Fc);let f=this.direction.dot(Gh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;cs.subVectors(this.origin,t);const p=h*this.direction.dot(Fc.crossVectors(cs,Fc));if(p<0)return null;const m=h*this.direction.dot(Hh.cross(cs));if(m<0||p+m>f)return null;const v=-h*cs.dot(Gh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,i,s,l,c,f,h,p,m,v,g,_,y,E,T,M){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,p,m,v,g,_,y,E,T,M)}set(t,i,s,l,c,f,h,p,m,v,g,_,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Vr.setFromMatrixColumn(t,0).length(),c=1/Vr.setFromMatrixColumn(t,1).length(),f=1/Vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=f*v,y=f*g,E=h*v,T=h*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=y+E*m,i[5]=_-T*m,i[9]=-h*p,i[2]=T-_*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*v,y=p*g,E=m*v,T=m*g;i[0]=_+T*h,i[4]=E*h-y,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=y*h-E,i[6]=T+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*v,y=p*g,E=m*v,T=m*g;i[0]=_-T*h,i[4]=-f*g,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*v,i[9]=T-_*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*v,y=f*g,E=h*v,T=h*g;i[0]=p*v,i[4]=E*m-y,i[8]=_*m+T,i[1]=p*g,i[5]=T*m+_,i[9]=y*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,y=f*m,E=h*p,T=h*m;i[0]=p*v,i[4]=T-_*g,i[8]=E*g+y,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-m*v,i[6]=y*g+E,i[10]=_-T*g}else if(t.order==="XZY"){const _=f*p,y=f*m,E=h*p,T=h*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=_*g+T,i[5]=f*v,i[9]=y*g-E,i[2]=E*g-y,i[6]=h*v,i[10]=T*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($M,t,t1)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),us.crossVectors(s,mi),us.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),us.crossVectors(s,mi)),us.normalize(),Hc.crossVectors(mi,us),l[0]=us.x,l[4]=Hc.x,l[8]=mi.x,l[1]=us.y,l[5]=Hc.y,l[9]=mi.y,l[2]=us.z,l[6]=Hc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],v=s[1],g=s[5],_=s[9],y=s[13],E=s[2],T=s[6],M=s[10],x=s[14],N=s[3],L=s[7],b=s[11],P=s[15],C=l[0],O=l[4],z=l[8],U=l[12],A=l[1],B=l[5],W=l[9],tt=l[13],ut=l[2],pt=l[6],G=l[10],j=l[14],V=l[3],Mt=l[7],wt=l[11],H=l[15];return c[0]=f*C+h*A+p*ut+m*V,c[4]=f*O+h*B+p*pt+m*Mt,c[8]=f*z+h*W+p*G+m*wt,c[12]=f*U+h*tt+p*j+m*H,c[1]=v*C+g*A+_*ut+y*V,c[5]=v*O+g*B+_*pt+y*Mt,c[9]=v*z+g*W+_*G+y*wt,c[13]=v*U+g*tt+_*j+y*H,c[2]=E*C+T*A+M*ut+x*V,c[6]=E*O+T*B+M*pt+x*Mt,c[10]=E*z+T*W+M*G+x*wt,c[14]=E*U+T*tt+M*j+x*H,c[3]=N*C+L*A+b*ut+P*V,c[7]=N*O+L*B+b*pt+P*Mt,c[11]=N*z+L*W+b*G+P*wt,c[15]=N*U+L*tt+b*j+P*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],v=t[2],g=t[6],_=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15];return E*(+c*p*g-l*m*g-c*h*_+s*m*_+l*h*y-s*p*y)+T*(+i*p*y-i*m*_+c*f*_-l*f*y+l*m*v-c*p*v)+M*(+i*m*g-i*h*y-c*f*g+s*f*y+c*h*v-s*m*v)+x*(-l*h*v-i*p*g+i*h*_+l*f*g-s*f*_+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],g=t[9],_=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],N=g*M*m-T*_*m+T*p*y-h*M*y-g*p*x+h*_*x,L=E*_*m-v*M*m-E*p*y+f*M*y+v*p*x-f*_*x,b=v*T*m-E*g*m+E*h*y-f*T*y-v*h*x+f*g*x,P=E*g*p-v*T*p-E*h*_+f*T*_+v*h*M-f*g*M,C=i*N+s*L+l*b+c*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return t[0]=N*O,t[1]=(T*_*c-g*M*c-T*l*y+s*M*y+g*l*x-s*_*x)*O,t[2]=(h*M*c-T*p*c+T*l*m-s*M*m-h*l*x+s*p*x)*O,t[3]=(g*p*c-h*_*c-g*l*m+s*_*m+h*l*y-s*p*y)*O,t[4]=L*O,t[5]=(v*M*c-E*_*c+E*l*y-i*M*y-v*l*x+i*_*x)*O,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*x-i*p*x)*O,t[7]=(f*_*c-v*p*c+v*l*m-i*_*m-f*l*y+i*p*y)*O,t[8]=b*O,t[9]=(E*g*c-v*T*c-E*s*y+i*T*y+v*s*x-i*g*x)*O,t[10]=(f*T*c-E*h*c+E*s*m-i*T*m-f*s*x+i*h*x)*O,t[11]=(v*h*c-f*g*c-v*s*m+i*g*m+f*s*y-i*h*y)*O,t[12]=P*O,t[13]=(v*T*l-E*g*l+E*s*_-i*T*_-v*s*M+i*g*M)*O,t[14]=(E*h*l-f*T*l-E*s*p+i*T*p+f*s*M-i*h*M)*O,t[15]=(f*g*l-v*h*l+v*s*p-i*g*p-f*s*_+i*h*_)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,p=t.z,m=c*f,v=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+s,v*p-l*f,0,m*p-l*h,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,v=f+f,g=h+h,_=c*m,y=c*v,E=c*g,T=f*v,M=f*g,x=h*g,N=p*m,L=p*v,b=p*g,P=s.x,C=s.y,O=s.z;return l[0]=(1-(T+x))*P,l[1]=(y+b)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(y-b)*C,l[5]=(1-(_+x))*C,l[6]=(M+N)*C,l[7]=0,l[8]=(E+L)*O,l[9]=(M-N)*O,l[10]=(1-(_+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Vr.set(l[0],l[1],l[2]).length();const f=Vr.set(l[4],l[5],l[6]).length(),h=Vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Pi.copy(this);const m=1/c,v=1/f,g=1/h;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=g,Pi.elements[9]*=g,Pi.elements[10]*=g,i.setFromRotationMatrix(Pi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=La){const p=this.elements,m=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),_=(s+l)/(s-l);let y,E;if(h===La)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===pu)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=La){const p=this.elements,m=1/(i-t),v=1/(s-l),g=1/(f-c),_=(i+t)*m,y=(s+l)*v;let E,T;if(h===La)E=(f+c)*g,T=-2*g;else if(h===pu)E=c*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Vr=new k,Pi=new Fe,$M=new k(0,0,0),t1=new k(1,1,1),us=new k,Hc=new k,mi=new k,Uv=new Fe,Lv=new Gi;class $i{constructor(t=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],v=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Uv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let e1=0;const Nv=new k,kr=new Gi,ba=new Fe,Gc=new k,ol=new k,n1=new k,i1=new Gi,Ov=new k(1,0,0),Pv=new k(0,1,0),zv=new k(0,0,1),Iv={type:"added"},a1={type:"removed"},Xr={type:"childadded",child:null},Vh={type:"childremoved",child:null};class An extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new k,i=new $i,s=new Gi,l=new k(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Re}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return kr.setFromAxisAngle(t,i),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,i){return kr.setFromAxisAngle(t,i),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(Ov,t)}rotateY(t){return this.rotateOnAxis(Pv,t)}rotateZ(t){return this.rotateOnAxis(zv,t)}translateOnAxis(t,i){return Nv.copy(t).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ov,t)}translateY(t){return this.translateOnAxis(Pv,t)}translateZ(t){return this.translateOnAxis(zv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Gc.copy(t):Gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(ol,Gc,this.up):ba.lookAt(Gc,ol,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),kr.setFromRotationMatrix(ba),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iv),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(a1),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iv),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,n1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,i1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),_=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new k(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new k,Ta=new k,kh=new k,Aa=new k,Wr=new k,qr=new k,Bv=new k,Xh=new k,Wh=new k,qh=new k,Yh=new an,jh=new an,Zh=new an;class Bi{constructor(t=new k,i=new k,s=new k){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),zi.subVectors(t,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){zi.subVectors(l,i),Ta.subVectors(s,i),kh.subVectors(t,i);const f=zi.dot(zi),h=zi.dot(Ta),p=zi.dot(kh),m=Ta.dot(Ta),v=Ta.dot(kh),g=f*m-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(m*p-h*v)*_,E=(f*v-h*p)*_;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,f,h,p){return this.getBarycoord(t,i,s,l,Aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Aa.x),p.addScaledVector(f,Aa.y),p.addScaledVector(h,Aa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return Yh.setScalar(0),jh.setScalar(0),Zh.setScalar(0),Yh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Yh,c.x),f.addScaledVector(jh,c.y),f.addScaledVector(Zh,c.z),f}static isFrontFacing(t,i,s,l){return zi.subVectors(s,i),Ta.subVectors(t,i),zi.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Wr.subVectors(l,s),qr.subVectors(c,s),Xh.subVectors(t,s);const p=Wr.dot(Xh),m=qr.dot(Xh);if(p<=0&&m<=0)return i.copy(s);Wh.subVectors(t,l);const v=Wr.dot(Wh),g=qr.dot(Wh);if(v>=0&&g<=v)return i.copy(l);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(Wr,f);qh.subVectors(t,c);const y=Wr.dot(qh),E=qr.dot(qh);if(E>=0&&y<=E)return i.copy(c);const T=y*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(s).addScaledVector(qr,h);const M=v*E-y*g;if(M<=0&&g-v>=0&&y-E>=0)return Bv.subVectors(c,l),h=(g-v)/(g-v+(y-E)),i.copy(l).addScaledVector(Bv,h);const x=1/(M+T+_);return f=T*x,h=_*x,i.copy(s).addScaledVector(Wr,f).addScaledVector(qr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function Kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Se{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,qe.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=qe.workingColorSpace){if(t=xp(t,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Kh(f,c,t+1/3),this.g=Kh(f,c,t),this.b=Kh(f,c,t-1/3)}return qe.toWorkingColorSpace(this,l),this}setStyle(t,i=Yn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=nx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return qe.fromWorkingColorSpace(Gn.copy(this),t),Math.round(Ue(Gn.r*255,0,255))*65536+Math.round(Ue(Gn.g*255,0,255))*256+Math.round(Ue(Gn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=qe.workingColorSpace){qe.fromWorkingColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const v=(h+f)/2;if(h===f)p=0,m=0;else{const g=f-h;switch(m=v<=.5?g/(f+h):g/(2-f-h),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=qe.workingColorSpace){return qe.fromWorkingColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Yn){qe.fromWorkingColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+i,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(fs),t.getHSL(Vc);const s=gl(fs.h,Vc.h,i),l=gl(fs.s,Vc.s,i),c=gl(fs.l,Vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Se;Se.NAMES=nx;let s1=0;class nr extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=po(),this.name="",this.type="Material",this.blending=eo,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Sd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==vs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yd&&(s.blendSrc=this.blendSrc),this.blendDst!==Sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vn extends nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const En=new k,kc=new Jt;let r1=0;class Vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=bv,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)kc.fromBufferAttribute(this,i),kc.applyMatrix3(t),this.setXY(i,kc.x,kc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Jr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Jr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Jr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Jr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Jr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bv&&(t.usage=this.usage),t}}class ix extends Vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ax extends Vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class je extends Vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let o1=0;const Ci=new Fe,Qh=new An,Yr=new k,gi=new tr,ll=new tr,Nn=new k;class wn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tx(t)?ax:ix)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,s){return Ci.makeTranslation(t,i,s),this.applyMatrix4(Ci),this}scale(t,i,s){return Ci.makeScale(t,i,s),this.applyMatrix4(Ci),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new je(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(gi.min,ll.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,ll.max),gi.expandByPoint(Nn)):(gi.expandByPoint(ll.min),gi.expandByPoint(ll.max))}gi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Nn.fromBufferAttribute(h,m),p&&(Yr.fromBufferAttribute(t,m),Nn.add(Yr)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let z=0;z<s.count;z++)h[z]=new k,p[z]=new k;const m=new k,v=new k,g=new k,_=new Jt,y=new Jt,E=new Jt,T=new k,M=new k;function x(z,U,A){m.fromBufferAttribute(s,z),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,A),_.fromBufferAttribute(c,z),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,A),v.sub(m),g.sub(m),y.sub(_),E.sub(_);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(B),h[z].add(T),h[U].add(T),h[A].add(T),p[z].add(M),p[U].add(M),p[A].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let z=0,U=N.length;z<U;++z){const A=N[z],B=A.start,W=A.count;for(let tt=B,ut=B+W;tt<ut;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const L=new k,b=new k,P=new k,C=new k;function O(z){P.fromBufferAttribute(l,z),C.copy(P);const U=h[z];L.copy(U),L.sub(P.multiplyScalar(P.dot(U))).normalize(),b.crossVectors(C,U);const B=b.dot(p[z])<0?-1:1;f.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,U=N.length;z<U;++z){const A=N[z],B=A.start,W=A.count;for(let tt=B,ut=B+W;tt<ut;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new k,c=new k,f=new k,h=new k,p=new k,m=new k,v=new k,g=new k;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),h.add(v),p.add(v),m.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(h,p){const m=h.array,v=h.itemSize,g=h.normalized,_=new m.constructor(p.length*v);let y=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*v;for(let x=0;x<v;x++)_[E++]=m[y++]}return new Vi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wn,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,g=m.length;v<g;v++){const _=m[v],y=t(_,s);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];v.push(y.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],g=c[m];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fv=new Fe,Fs=new xu,Xc=new er,Hv=new k,Wc=new k,qc=new k,Yc=new k,Jh=new k,jc=new k,Gv=new k,Zc=new k;class gt extends An{constructor(t=new wn,i=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){jc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],g=c[p];v!==0&&(Jh.fromBufferAttribute(g,t),f?jc.addScaledVector(Jh,v):jc.addScaledVector(Jh.sub(i),v))}i.add(jc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Xc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Xc,Hv)===null||Fs.origin.distanceToSquared(Hv)>(t.far-t.near)**2))&&(Fv.copy(c).invert(),Fs.copy(t.ray).applyMatrix4(Fv),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Fs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=f[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let b=N,P=L;b<P;b+=3){const C=h.getX(b),O=h.getX(b+1),z=h.getX(b+2);l=Kc(this,x,t,s,m,v,g,C,O,z),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const N=h.getX(M),L=h.getX(M+1),b=h.getX(M+2);l=Kc(this,f,t,s,m,v,g,N,L,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=f[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let b=N,P=L;b<P;b+=3){const C=b,O=b+1,z=b+2;l=Kc(this,x,t,s,m,v,g,C,O,z),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const N=M,L=M+1,b=M+2;l=Kc(this,f,t,s,m,v,g,N,L,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function l1(r,t,i,s,l,c,f,h){let p;if(t.side===Kn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===vs,h),p===null)return null;Zc.copy(h),Zc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Zc);return m<i.near||m>i.far?null:{distance:m,point:Zc.clone(),object:r}}function Kc(r,t,i,s,l,c,f,h,p,m){r.getVertexPosition(h,Wc),r.getVertexPosition(p,qc),r.getVertexPosition(m,Yc);const v=l1(r,t,i,s,Wc,qc,Yc,Gv);if(v){const g=new k;Bi.getBarycoord(Gv,Wc,qc,Yc,g),l&&(v.uv=Bi.getInterpolatedAttribute(l,h,p,m,g,new Jt)),c&&(v.uv1=Bi.getInterpolatedAttribute(c,h,p,m,g,new Jt)),f&&(v.normal=Bi.getInterpolatedAttribute(f,h,p,m,g,new k),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new k,materialIndex:0};Bi.getNormal(Wc,qc,Yc,_.normal),v.face=_,v.barycoord=g}return v}class te extends wn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(g,2));function E(T,M,x,N,L,b,P,C,O,z,U){const A=b/O,B=P/z,W=b/2,tt=P/2,ut=C/2,pt=O+1,G=z+1;let j=0,V=0;const Mt=new k;for(let wt=0;wt<G;wt++){const H=wt*B-tt;for(let et=0;et<pt;et++){const yt=et*A-W;Mt[T]=yt*N,Mt[M]=H*L,Mt[x]=ut,m.push(Mt.x,Mt.y,Mt.z),Mt[T]=0,Mt[M]=0,Mt[x]=C>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),g.push(et/O),g.push(1-wt/z),j+=1}}for(let wt=0;wt<z;wt++)for(let H=0;H<O;H++){const et=_+H+pt*wt,yt=_+H+pt*(wt+1),Z=_+(H+1)+pt*(wt+1),ft=_+(H+1)+pt*wt;p.push(et,yt,ft),p.push(yt,Z,ft),V+=6}h.addGroup(y,V,U),y+=V,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function uo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Wn(r){const t={};for(let i=0;i<r.length;i++){const s=uo(r[i]);for(const l in s)t[l]=s[l]}return t}function c1(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function sx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}const u1={clone:uo,merge:Wn};var f1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=uo(t.uniforms),this.uniformsGroups=c1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class rx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=La}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new k,Vv=new Jt,kv=new Jt;class _i extends rx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,i){return this.getViewBounds(t,Vv,kv),i.subVectors(kv,Vv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ml*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const jr=-90,Zr=1;class d1 extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(jr,Zr,t,i);l.layers=this.layers,this.add(l);const c=new _i(jr,Zr,t,i);c.layers=this.layers,this.add(c);const f=new _i(jr,Zr,t,i);f.layers=this.layers,this.add(f);const h=new _i(jr,Zr,t,i);h.layers=this.layers,this.add(h);const p=new _i(jr,Zr,t,i);p.layers=this.layers,this.add(p);const m=new _i(jr,Zr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===La)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===pu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,_,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ox extends Vn{constructor(t,i,s,l,c,f,h,p,m,v){t=t!==void 0?t:[],i=i!==void 0?i:so,super(t,i,s,l,c,f,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p1 extends $s{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ox(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new te(5,5,5),c=new Pa({name:"CubemapFromEquirect",uniforms:uo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ms});c.uniforms.tEquirect.value=i;const f=new gt(l,c),h=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Qi),new d1(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Hi extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m1={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(m,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,E=.005;m.inputState.pinching&&_>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Hi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class vl{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(t),this.density=i}clone(){return new vl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g1 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class v1 extends Vn{constructor(t=null,i=1,s=1,l,c,f,h,p,m=xi,v=xi,g,_){super(null,f,h,p,m,v,l,c,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends Vi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Kr=new Fe,Wv=new Fe,Qc=[],qv=new tr,_1=new Fe,cl=new gt,ul=new er;class ps extends gt{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Xv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,_1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new tr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Kr),qv.copy(t.boundingBox).applyMatrix4(Kr),this.boundingBox.union(qv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Kr),ul.copy(t.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(ul)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(cl.geometry=this.geometry,cl.material=this.material,cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),t.ray.intersectsSphere(ul)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Kr),Wv.multiplyMatrices(s,Kr),cl.matrixWorld=Wv,cl.raycast(t,Qc);for(let f=0,h=Qc.length;f<h;f++){const p=Qc[f];p.instanceId=c,p.object=this,i.push(p)}Qc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Xv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new v1(new Float32Array(l*this.count),l,this.count,mp,Ji));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const h=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=h,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const td=new k,x1=new k,y1=new Re;class Ws{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=td.subVectors(s,i).cross(x1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||y1.getNormalMatrix(t),l=this.coplanarPoint(td).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new er,Jc=new k;class Mp{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,c=new Ws,f=new Ws){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=La){const s=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],v=l[5],g=l[6],_=l[7],y=l[8],E=l[9],T=l[10],M=l[11],x=l[12],N=l[13],L=l[14],b=l[15];if(s[0].setComponents(p-c,_-m,M-y,b-x).normalize(),s[1].setComponents(p+c,_+m,M+y,b+x).normalize(),s[2].setComponents(p+f,_+v,M+E,b+N).normalize(),s[3].setComponents(p-f,_-v,M-E,b-N).normalize(),s[4].setComponents(p-h,_-g,M-T,b-L).normalize(),i===La)s[5].setComponents(p+h,_+g,M+T,b+L).normalize();else if(i===pu)s[5].setComponents(h,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Jc.x=l.normal.x>0?t.max.x:t.min.x,Jc.y=l.normal.y>0?t.max.y:t.min.y,Jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends nr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gu=new k,vu=new k,Yv=new Fe,fl=new xu,$c=new er,ed=new k,jv=new k;class nd extends An{constructor(t=new wn,i=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)gu.fromBufferAttribute(i,l-1),vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=gu.distanceTo(vu);t.setAttribute("lineDistance",new je(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;Yv.copy(l).invert(),fl.copy(t.ray).applyMatrix4(Yv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=m){const x=v.getX(T),N=v.getX(T+1),L=tu(this,t,fl,p,x,N,T);L&&i.push(L)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(y),x=tu(this,t,fl,p,T,M,E-1);x&&i.push(x)}}else{const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=m){const x=tu(this,t,fl,p,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=tu(this,t,fl,p,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function tu(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(gu.fromBufferAttribute(h,l),vu.fromBufferAttribute(h,c),i.distanceSqToSegment(gu,vu,ed,jv)>s)return;ed.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(ed);if(!(m<t.near||m>t.far))return{distance:m,point:jv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class sp extends nr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zv=new Fe,rp=new xu,eu=new er,nu=new k;class op extends An{constructor(t=new wn,i=new sp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;Zv.copy(l).invert(),rp.copy(t.ray).applyMatrix4(Zv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,g=s.attributes.position;if(m!==null){const _=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let E=_,T=y;E<T;E++){const M=m.getX(E);nu.fromBufferAttribute(g,M),Kv(nu,M,p,l,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let E=_,T=y;E<T;E++)nu.fromBufferAttribute(g,E),Kv(nu,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Kv(r,t,i,s,l,c,f){const h=rp.distanceSqToPoint(r);if(h<i){const p=new k;rp.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class lx extends Vn{constructor(t,i,s,l,c,f,h,p,m){super(t,i,s,l,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cx extends Vn{constructor(t,i,s,l,c,f,h,p,m,v=no){if(v!==no&&v!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===no&&(s=Js),s===void 0&&v===lo&&(s=oo),super(null,l,c,f,h,p,v,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:xi,this.minFilter=p!==void 0?p:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ta{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=s[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const v=s[l],_=s[l+1]-v,y=(f-v)/_;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=i||(f.isVector2?new Jt:new k);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new k,l=[],c=[],f=[],h=new k,p=new Fe;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new k)}c[0]=new k,f[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),_<=m&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Ue(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Ue(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ep extends ta{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new Jt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=p-this.aX,y=m-this.aY;p=_*v-y*g+this.aX,m=_*g+y*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class S1 extends Ep{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function bp(){let r=0,t=0,i=0,s=0;function l(c,f,h,p){r=c,t=h,i=-3*c+3*f-2*h-p,s=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,v,g){let _=(f-c)/m-(h-c)/(m+v)+(h-f)/v,y=(h-f)/v-(p-f)/(v+g)+(p-h)/g;_*=v,y*=v,l(f,h,_,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const iu=new k,id=new bp,ad=new bp,sd=new bp;class M1 extends ta{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new k){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,v;this.closed||h>0?m=l[(h-1)%c]:(iu.subVectors(l[0],l[1]).add(l[0]),m=iu);const g=l[h%c],_=l[(h+1)%c];if(this.closed||h+2<c?v=l[(h+2)%c]:(iu.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=iu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),y),T=Math.pow(g.distanceToSquared(_),y),M=Math.pow(_.distanceToSquared(v),y);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),id.initNonuniformCatmullRom(m.x,g.x,_.x,v.x,E,T,M),ad.initNonuniformCatmullRom(m.y,g.y,_.y,v.y,E,T,M),sd.initNonuniformCatmullRom(m.z,g.z,_.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(id.initCatmullRom(m.x,g.x,_.x,v.x,this.tension),ad.initCatmullRom(m.y,g.y,_.y,v.y,this.tension),sd.initCatmullRom(m.z,g.z,_.z,v.z,this.tension));return s.set(id.calc(p),ad.calc(p),sd.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,h=r*r,p=r*h;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*h+c*r+i}function E1(r,t){const i=1-r;return i*i*t}function b1(r,t){return 2*(1-r)*r*t}function T1(r,t){return r*r*t}function _l(r,t,i,s){return E1(r,t)+b1(r,i)+T1(r,s)}function A1(r,t){const i=1-r;return i*i*i*t}function w1(r,t){const i=1-r;return 3*i*i*r*t}function R1(r,t){return 3*(1-r)*r*r*t}function C1(r,t){return r*r*r*t}function xl(r,t,i,s,l){return A1(r,t)+w1(r,i)+R1(r,s)+C1(r,l)}class ux extends ta{constructor(t=new Jt,i=new Jt,s=new Jt,l=new Jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Jt){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(xl(t,l.x,c.x,f.x,h.x),xl(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class D1 extends ta{constructor(t=new k,i=new k,s=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(xl(t,l.x,c.x,f.x,h.x),xl(t,l.y,c.y,f.y,h.y),xl(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fx extends ta{constructor(t=new Jt,i=new Jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Jt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Jt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U1 extends ta{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hx extends ta{constructor(t=new Jt,i=new Jt,s=new Jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Jt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(_l(t,l.x,c.x,f.x),_l(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class L1 extends ta{constructor(t=new k,i=new k,s=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(_l(t,l.x,c.x,f.x),_l(t,l.y,c.y,f.y),_l(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dx extends ta{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Jt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(Qv(h,p.x,m.x,v.x,g.x),Qv(h,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Jt().fromArray(l))}return this}}var Jv=Object.freeze({__proto__:null,ArcCurve:S1,CatmullRomCurve3:M1,CubicBezierCurve:ux,CubicBezierCurve3:D1,EllipseCurve:Ep,LineCurve:fx,LineCurve3:U1,QuadraticBezierCurve:hx,QuadraticBezierCurve3:L1,SplineCurve:dx});class N1 extends ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jv[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],p=h.getLength(),m=p===0?0:1-f/p;return h.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(h);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new Jv[l.type]().fromJSON(l))}return this}}class O1 extends N1{constructor(t){super(),this.type="Path",this.currentPoint=new Jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new fx(this.currentPoint.clone(),new Jt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new hx(this.currentPoint.clone(),new Jt(t,i),new Jt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const h=new ux(this.currentPoint.clone(),new Jt(t,i),new Jt(s,l),new Jt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new dx(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,i+p,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,h,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,c,f,h,p),this}absellipse(t,i,s,l,c,f,h,p){const m=new Ep(t,i,s,l,c,f,h,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tp extends wn{constructor(t=[new Jt(0,-.5),new Jt(.5,0),new Jt(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=Ue(l,0,Math.PI*2);const c=[],f=[],h=[],p=[],m=[],v=1/i,g=new k,_=new Jt,y=new k,E=new k,T=new k;let M=0,x=0;for(let N=0;N<=t.length-1;N++)switch(N){case 0:M=t[N+1].x-t[N].x,x=t[N+1].y-t[N].y,y.x=x*1,y.y=-M,y.z=x*0,T.copy(y),y.normalize(),p.push(y.x,y.y,y.z);break;case t.length-1:p.push(T.x,T.y,T.z);break;default:M=t[N+1].x-t[N].x,x=t[N+1].y-t[N].y,y.x=x*1,y.y=-M,y.z=x*0,E.copy(y),y.x+=T.x,y.y+=T.y,y.z+=T.z,y.normalize(),p.push(y.x,y.y,y.z),T.copy(E)}for(let N=0;N<=i;N++){const L=s+N*v*l,b=Math.sin(L),P=Math.cos(L);for(let C=0;C<=t.length-1;C++){g.x=t[C].x*b,g.y=t[C].y,g.z=t[C].x*P,f.push(g.x,g.y,g.z),_.x=N/i,_.y=C/(t.length-1),h.push(_.x,_.y);const O=p[3*C+0]*b,z=p[3*C+1],U=p[3*C+0]*P;m.push(O,z,U)}}for(let N=0;N<i;N++)for(let L=0;L<t.length-1;L++){const b=L+N*t.length,P=b,C=b+t.length,O=b+t.length+1,z=b+1;c.push(P,C,z),c.push(O,z,C)}this.setIndex(c),this.setAttribute("position",new je(f,3)),this.setAttribute("uv",new je(h,2)),this.setAttribute("normal",new je(m,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.points,t.segments,t.phiStart,t.phiLength)}}class Ca extends Tp{constructor(t=1,i=1,s=4,l=8){const c=new O1;c.absarc(0,-i/2,t,Math.PI*1.5,0),c.absarc(0,i/2,t,0,Math.PI*.5),super(c.getPoints(s),l),this.type="CapsuleGeometry",this.parameters={radius:t,length:i,capSegments:s,radialSegments:l}}static fromJSON(t){return new Ca(t.radius,t.length,t.capSegments,t.radialSegments)}}class yu extends wn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],h=[],p=[],m=new k,v=new Jt;f.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let g=0,_=3;g<=i;g++,_+=3){const y=s+g/i*l;m.x=t*Math.cos(y),m.y=t*Math.sin(y),f.push(m.x,m.y,m.z),h.push(0,0,1),v.x=(f[_]/t+1)/2,v.y=(f[_+1]/t+1)/2,p.push(v.x,v.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ri extends wn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],_=[],y=[];let E=0;const T=[],M=s/2;let x=0;N(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(y,2));function N(){const b=new k,P=new k;let C=0;const O=(i-t)/s;for(let z=0;z<=c;z++){const U=[],A=z/c,B=A*(i-t)+t;for(let W=0;W<=l;W++){const tt=W/l,ut=tt*p+h,pt=Math.sin(ut),G=Math.cos(ut);P.x=B*pt,P.y=-A*s+M,P.z=B*G,g.push(P.x,P.y,P.z),b.set(pt,O,G).normalize(),_.push(b.x,b.y,b.z),y.push(tt,1-A),U.push(E++)}T.push(U)}for(let z=0;z<l;z++)for(let U=0;U<c;U++){const A=T[U][z],B=T[U+1][z],W=T[U+1][z+1],tt=T[U][z+1];(t>0||U!==0)&&(v.push(A,B,tt),C+=3),(i>0||U!==c-1)&&(v.push(B,W,tt),C+=3)}m.addGroup(x,C,0),x+=C}function L(b){const P=E,C=new Jt,O=new k;let z=0;const U=b===!0?t:i,A=b===!0?1:-1;for(let W=1;W<=l;W++)g.push(0,M*A,0),_.push(0,A,0),y.push(.5,.5),E++;const B=E;for(let W=0;W<=l;W++){const ut=W/l*p+h,pt=Math.cos(ut),G=Math.sin(ut);O.x=U*G,O.y=M*A,O.z=U*pt,g.push(O.x,O.y,O.z),_.push(0,A,0),C.x=pt*.5+.5,C.y=G*.5*A+.5,y.push(C.x,C.y),E++}for(let W=0;W<l;W++){const tt=P+W,ut=B+W;b===!0?v.push(ut,ut+1,tt):v.push(ut+1,ut,tt),z+=3}m.addGroup(x,z,b===!0?1:2),x+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends ri{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new Ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ap extends wn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];h(l),m(s),v(),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(c.slice(),3)),this.setAttribute("uv",new je(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const L=new k,b=new k,P=new k;for(let C=0;C<i.length;C+=3)y(i[C+0],L),y(i[C+1],b),y(i[C+2],P),p(L,b,P,N)}function p(N,L,b,P){const C=P+1,O=[];for(let z=0;z<=C;z++){O[z]=[];const U=N.clone().lerp(b,z/C),A=L.clone().lerp(b,z/C),B=C-z;for(let W=0;W<=B;W++)W===0&&z===C?O[z][W]=U:O[z][W]=U.clone().lerp(A,W/B)}for(let z=0;z<C;z++)for(let U=0;U<2*(C-z)-1;U++){const A=Math.floor(U/2);U%2===0?(_(O[z][A+1]),_(O[z+1][A]),_(O[z][A])):(_(O[z][A+1]),_(O[z+1][A+1]),_(O[z+1][A]))}}function m(N){const L=new k;for(let b=0;b<c.length;b+=3)L.x=c[b+0],L.y=c[b+1],L.z=c[b+2],L.normalize().multiplyScalar(N),c[b+0]=L.x,c[b+1]=L.y,c[b+2]=L.z}function v(){const N=new k;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const b=M(N)/2/Math.PI+.5,P=x(N)/Math.PI+.5;f.push(b,1-P)}E(),g()}function g(){for(let N=0;N<f.length;N+=6){const L=f[N+0],b=f[N+2],P=f[N+4],C=Math.max(L,b,P),O=Math.min(L,b,P);C>.9&&O<.1&&(L<.2&&(f[N+0]+=1),b<.2&&(f[N+2]+=1),P<.2&&(f[N+4]+=1))}}function _(N){c.push(N.x,N.y,N.z)}function y(N,L){const b=N*3;L.x=t[b+0],L.y=t[b+1],L.z=t[b+2]}function E(){const N=new k,L=new k,b=new k,P=new k,C=new Jt,O=new Jt,z=new Jt;for(let U=0,A=0;U<c.length;U+=9,A+=6){N.set(c[U+0],c[U+1],c[U+2]),L.set(c[U+3],c[U+4],c[U+5]),b.set(c[U+6],c[U+7],c[U+8]),C.set(f[A+0],f[A+1]),O.set(f[A+2],f[A+3]),z.set(f[A+4],f[A+5]),P.copy(N).add(L).add(b).divideScalar(3);const B=M(P);T(C,A+0,N,B),T(O,A+2,L,B),T(z,A+4,b,B)}}function T(N,L,b,P){P<0&&N.x===1&&(f[L]=N.x-1),b.x===0&&b.z===0&&(f[L]=P/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ap(t.vertices,t.indices,t.radius,t.details)}}class fo extends Ap{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new fo(t.radius,t.detail)}}class vi extends wn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,v=p+1,g=t/h,_=i/p,y=[],E=[],T=[],M=[];for(let x=0;x<v;x++){const N=x*_-f;for(let L=0;L<m;L++){const b=L*g-c;E.push(b,-N,0),T.push(0,0,1),M.push(L/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<h;N++){const L=N+m*x,b=N+m*(x+1),P=N+1+m*(x+1),C=N+1+m*x;y.push(L,b,C),y.push(b,P,C)}this.setIndex(y),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(T,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class El extends wn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],p=[],m=[],v=[];let g=t;const _=(i-t)/l,y=new k,E=new Jt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const x=c+M/s*f;y.x=g*Math.cos(x),y.y=g*Math.sin(x),p.push(y.x,y.y,y.z),m.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,v.push(E.x,E.y)}g+=_}for(let T=0;T<l;T++){const M=T*(s+1);for(let x=0;x<s;x++){const N=x+M,L=N,b=N+s+1,P=N+s+2,C=N+1;h.push(L,b,C),h.push(b,P,C)}}this.setIndex(h),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jn extends wn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let m=0;const v=[],g=new k,_=new k,y=[],E=[],T=[],M=[];for(let x=0;x<=s;x++){const N=[],L=x/s;let b=0;x===0&&f===0?b=.5/i:x===s&&p===Math.PI&&(b=-.5/i);for(let P=0;P<=i;P++){const C=P/i;g.x=-t*Math.cos(l+C*c)*Math.sin(f+L*h),g.y=t*Math.cos(f+L*h),g.z=t*Math.sin(l+C*c)*Math.sin(f+L*h),E.push(g.x,g.y,g.z),_.copy(g).normalize(),T.push(_.x,_.y,_.z),M.push(C+b,1-L),N.push(m++)}v.push(N)}for(let x=0;x<s;x++)for(let N=0;N<i;N++){const L=v[x][N+1],b=v[x][N],P=v[x+1][N],C=v[x+1][N+1];(x!==0||f>0)&&y.push(L,b,C),(x!==s-1||p<Math.PI)&&y.push(b,P,C)}this.setIndex(y),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(T,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zi extends wn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],p=[],m=[],v=new k,g=new k,_=new k;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,M=y/s*Math.PI*2;g.x=(t+i*Math.cos(M))*Math.cos(T),g.y=(t+i*Math.cos(M))*Math.sin(T),g.z=i*Math.sin(M),h.push(g.x,g.y,g.z),v.x=t*Math.cos(T),v.y=t*Math.sin(T),_.subVectors(g,v).normalize(),p.push(_.x,_.y,_.z),m.push(E/l),m.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,x=(l+1)*(y-1)+E,N=(l+1)*y+E;f.push(T,M,N),f.push(M,x,N)}this.setIndex(f),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class On extends nr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q_,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class px extends On{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class P1 extends nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z1 extends nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wp extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class I1 extends wp{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const rd=new Fe,$v=new k,t_=new k;class mx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;$v.setFromMatrixPosition(t.matrixWorld),i.position.copy($v),t_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(t_),i.updateMatrixWorld(),rd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const e_=new Fe,hl=new k,od=new k;class B1 extends mx{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new an(2,1,1,1),new an(0,1,1,1),new an(3,1,1,1),new an(1,1,1,1),new an(3,0,1,1),new an(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),hl.setFromMatrixPosition(t.matrixWorld),s.position.copy(hl),od.copy(s.position),od.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(od),s.updateMatrixWorld(),l.makeTranslation(-hl.x,-hl.y,-hl.z),e_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e_)}}class n_ extends wp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new B1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gx extends rx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class F1 extends mx{constructor(){super(new gx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i_ extends wp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new F1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class H1 extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const a_=new Fe;class G1{constructor(t,i,s=0,l=1/0){this.ray=new xu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return a_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a_),this}intersectObject(t,i=!0,s=[]){return lp(t,this,s,i),s.sort(s_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)lp(t[l],this,s,i);return s.sort(s_),s}}function s_(r,t){return r.distance-t.distance}function lp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)lp(c[f],t,i,!0)}}function r_(r,t,i,s){const l=V1(s);switch(i){case W_:return r*t;case Y_:return r*t;case j_:return r*t*2;case mp:return r*t/l.components*l.byteLength;case gp:return r*t/l.components*l.byteLength;case Z_:return r*t*2/l.components*l.byteLength;case vp:return r*t*2/l.components*l.byteLength;case q_:return r*t*3/l.components*l.byteLength;case Fi:return r*t*4/l.components*l.byteLength;case _p:return r*t*4/l.components*l.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:case Pd:return Math.max(r,16)*Math.max(t,8)/4;case Ld:case Od:return Math.max(r,8)*Math.max(t,8)/2;case zd:case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fu:case $d:case tp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case K_:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*8;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function V1(r){switch(r){case Oa:case V_:return{byteLength:1,components:1};case Sl:case k_:case bl:return{byteLength:2,components:1};case dp:case pp:return{byteLength:2,components:4};case Js:case hp:case Ji:return{byteLength:4,components:1};case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function k1(r){const t=new WeakMap;function i(h,p){const m=h.array,v=h.usage,g=m.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,m,v),h.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const v=p.array,g=p.updateRanges;if(r.bindBuffer(m,h),g.length===0)r.bufferSubData(m,0,v);else{g.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<g.length;y++){const E=g[_],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W1=`#ifdef USE_ALPHAHASH
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
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
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
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1=`#ifdef USE_BATCHING
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
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iE=`#ifdef USE_IRIDESCENCE
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
#endif`,aE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dE=`#define PI 3.141592653589793
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
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
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
#endif`,VE=`struct PhysicalMaterial {
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
}`,kE=`
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$E=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Kb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,oT=`#define MATCAP
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
}`,lT=`#define MATCAP
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
}`,cT=`#define NORMAL
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
}`,uT=`#define NORMAL
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
}`,fT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,pT=`#define STANDARD
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
}`,mT=`#define TOON
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
}`,gT=`#define TOON
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
}`,vT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,yT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
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
}`,MT=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:X1,alphahash_pars_fragment:W1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:j1,alphatest_pars_fragment:Z1,aomap_fragment:K1,aomap_pars_fragment:Q1,batching_pars_vertex:J1,batching_vertex:$1,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:xE,colorspace_fragment:yE,colorspace_pars_fragment:SE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:zE,envmap_vertex:AE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:LE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:IE,lights_toon_pars_fragment:BE,lights_phong_fragment:FE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:XE,lights_fragment_end:WE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:$E,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:vb,packing:_b,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:wb,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:zb,transmission_fragment:Ib,transmission_pars_fragment:Bb,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:vT,points_frag:_T,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:MT},qt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Ki={basic:{uniforms:Wn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Wn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Wn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Wn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Wn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Wn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Wn([qt.points,qt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Wn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Wn([qt.common,qt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Wn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Wn([qt.sprite,qt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Wn([qt.common,qt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Wn([qt.lights,qt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ki.physical={uniforms:Wn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const au={r:0,b:0,g:0},Gs=new $i,ET=new Fe;function bT(r,t,i,s,l,c,f){const h=new Se(0);let p=c===!0?0:1,m,v,g=null,_=0,y=null;function E(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?i:t).get(b)),b}function T(L){let b=!1;const P=E(L);P===null?x(h,p):P&&P.isColor&&(x(P,1),b=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?s.buffers.color.setClear(0,0,0,1,f):C==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,b){const P=E(b);P&&(P.isCubeTexture||P.mapping===_u)?(v===void 0&&(v=new gt(new te(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:uo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(C,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gs.copy(b.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Gs)),v.material.toneMapped=qe.getTransfer(P.colorSpace)!==nn,(g!==P||_!==P.version||y!==r.toneMapping)&&(v.material.needsUpdate=!0,g=P,_=P.version,y=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new gt(new vi(2,2),new Pa({name:"BackgroundMaterial",uniforms:uo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=qe.getTransfer(P.colorSpace)!==nn,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||_!==P.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,_=P.version,y=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,b){L.getRGB(au,sx(r)),s.buffers.color.setClear(au.r,au.g,au.b,b,f)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,b=1){h.set(L),p=b,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(h,p)},render:T,addToRenderList:M,dispose:N}}function TT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function h(A,B,W,tt,ut){let pt=!1;const G=g(tt,W,B);c!==G&&(c=G,m(c.object)),pt=y(A,tt,W,ut),pt&&E(A,tt,W,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,b(A,B,W,tt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function v(A){return r.deleteVertexArray(A)}function g(A,B,W){const tt=W.wireframe===!0;let ut=s[A.id];ut===void 0&&(ut={},s[A.id]=ut);let pt=ut[B.id];pt===void 0&&(pt={},ut[B.id]=pt);let G=pt[tt];return G===void 0&&(G=_(p()),pt[tt]=G),G}function _(A){const B=[],W=[],tt=[];for(let ut=0;ut<i;ut++)B[ut]=0,W[ut]=0,tt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:tt,object:A,attributes:{},index:null}}function y(A,B,W,tt){const ut=c.attributes,pt=B.attributes;let G=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){const wt=ut[V];let H=pt[V];if(H===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),wt===void 0||wt.attribute!==H||H&&wt.data!==H.data)return!0;G++}return c.attributesNum!==G||c.index!==tt}function E(A,B,W,tt){const ut={},pt=B.attributes;let G=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){let wt=pt[V];wt===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(wt=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(wt=A.instanceColor));const H={};H.attribute=wt,wt&&wt.data&&(H.data=wt.data),ut[V]=H,G++}c.attributes=ut,c.attributesNum=G,c.index=tt}function T(){const A=c.newAttributes;for(let B=0,W=A.length;B<W;B++)A[B]=0}function M(A){x(A,0)}function x(A,B){const W=c.newAttributes,tt=c.enabledAttributes,ut=c.attributeDivisors;W[A]=1,tt[A]===0&&(r.enableVertexAttribArray(A),tt[A]=1),ut[A]!==B&&(r.vertexAttribDivisor(A,B),ut[A]=B)}function N(){const A=c.newAttributes,B=c.enabledAttributes;for(let W=0,tt=B.length;W<tt;W++)B[W]!==A[W]&&(r.disableVertexAttribArray(W),B[W]=0)}function L(A,B,W,tt,ut,pt,G){G===!0?r.vertexAttribIPointer(A,B,W,ut,pt):r.vertexAttribPointer(A,B,W,tt,ut,pt)}function b(A,B,W,tt){T();const ut=tt.attributes,pt=W.getAttributes(),G=B.defaultAttributeValues;for(const j in pt){const V=pt[j];if(V.location>=0){let Mt=ut[j];if(Mt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Mt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Mt=A.instanceColor)),Mt!==void 0){const wt=Mt.normalized,H=Mt.itemSize,et=t.get(Mt);if(et===void 0)continue;const yt=et.buffer,Z=et.type,ft=et.bytesPerElement,At=Z===r.INT||Z===r.UNSIGNED_INT||Mt.gpuType===hp;if(Mt.isInterleavedBufferAttribute){const $=Mt.data,dt=$.stride,Nt=Mt.offset;if($.isInstancedInterleavedBuffer){for(let Pt=0;Pt<V.locationSize;Pt++)x(V.location+Pt,$.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Pt=0;Pt<V.locationSize;Pt++)M(V.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Pt=0;Pt<V.locationSize;Pt++)L(V.location+Pt,H/V.locationSize,Z,wt,dt*ft,(Nt+H/V.locationSize*Pt)*ft,At)}else{if(Mt.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)x(V.location+$,Mt.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let $=0;$<V.locationSize;$++)M(V.location+$);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let $=0;$<V.locationSize;$++)L(V.location+$,H/V.locationSize,Z,wt,H*ft,H/V.locationSize*$*ft,At)}}else if(G!==void 0){const wt=G[j];if(wt!==void 0)switch(wt.length){case 2:r.vertexAttrib2fv(V.location,wt);break;case 3:r.vertexAttrib3fv(V.location,wt);break;case 4:r.vertexAttrib4fv(V.location,wt);break;default:r.vertexAttrib1fv(V.location,wt)}}}}N()}function P(){z();for(const A in s){const B=s[A];for(const W in B){const tt=B[W];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete B[W]}delete s[A]}}function C(A){if(s[A.id]===void 0)return;const B=s[A.id];for(const W in B){const tt=B[W];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete B[W]}delete s[A.id]}function O(A){for(const B in s){const W=s[B];if(W[A.id]===void 0)continue;const tt=W[A.id];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete W[A.id]}}function z(){U(),f=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:M,disableUnusedAttributes:N}}function AT(r,t,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(r.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function h(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let y=0;for(let E=0;E<g;E++)y+=v[E];i.update(y,s,1)}function p(m,v,g,_){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],v[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,v,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function wT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Fi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const z=O===bl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Oa&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!z)}function p(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:P,maxSamples:C}}function RT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ws,h=new Re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||s!==0||l;return l=_,s=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):m();else{const N=c?0:s,L=N*4;let b=x.clippingState||null;p.value=b,b=v(E,_,L,y);for(let P=0;P!==L;++P)b[P]=i[P];x.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const x=y+T*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,b=y;L!==T;++L,b+=4)f.copy(g[L]).applyMatrix4(N,h),f.normal.toArray(M,b),M[b+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function CT(r){let t=new WeakMap;function i(f,h){return h===Cd?f.mapping=so:h===Dd&&(f.mapping=ro),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Cd||h===Dd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new p1(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const to=4,o_=[.125,.215,.35,.446,.526,.582],js=20,ld=new gx,l_=new Se;let cd=null,ud=0,fd=0,hd=!1;const qs=(1+Math.sqrt(5))/2,Qr=1/qs,c_=[new k(-qs,Qr,0),new k(qs,Qr,0),new k(-Qr,0,qs),new k(Qr,0,qs),new k(0,qs,-Qr),new k(0,qs,Qr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],DT=new k;class u_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=DT}=c;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=hd,t.scissorTest=!1,su(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===so||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:bl,format:Fi,colorSpace:co,depthBuffer:!1},l=f_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,t,i)}return l}_compileMaterial(t){const i=new gt(this._lodPlanes[0],t);this._renderer.compile(i,ld)}_sceneToCubeUV(t,i,s,l,c){const p=new _i(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(l_),g.toneMapping=gs,g.autoClear=!1;const E=new vn({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),T=new gt(new te,E);let M=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,M=!0):(E.color.copy(l_),M=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[N],c.y,c.z)):L===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[N]));const b=this._cubeSize;su(l,L*b,N>2?b:0,b,b),g.setRenderTarget(l),M&&g.render(T,p),g.render(t,p)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=x}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===so||t.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=d_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new gt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;su(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,ld)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=c_[(l-c-1)%c_.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new gt(this._lodPlanes[l],m),_=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*js-1),T=c/E,M=isFinite(c)?1+Math.floor(v*T):js;M>js&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const x=[];let N=0;for(let O=0;O<js;++O){const z=O/T,U=Math.exp(-z*z/2);x.push(U),O===0?N+=U:O<M&&(N+=2*U)}for(let O=0;O<x.length;O++)x[O]=x[O]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const b=this._sizeLods[l],P=3*b*(l>L-to?l-L+to:0),C=4*(this._cubeSize-b);su(i,P,C,3*b,2*b),p.setRenderTarget(i),p.render(g,ld)}}function UT(r){const t=[],i=[],s=[];let l=r;const c=r-to+1+o_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-to?p=o_[f-r+to-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,E=6,T=3,M=2,x=1,N=new Float32Array(T*E*y),L=new Float32Array(M*E*y),b=new Float32Array(x*E*y);for(let C=0;C<y;C++){const O=C%3*2/3-1,z=C>2?0:-1,U=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];N.set(U,T*E*C),L.set(_,M*E*C);const A=[C,C,C,C,C,C];b.set(A,x*E*C)}const P=new wn;P.setAttribute("position",new Vi(N,T)),P.setAttribute("uv",new Vi(L,M)),P.setAttribute("faceIndex",new Vi(b,x)),t.push(P),l>to&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function f_(r,t,i){const s=new $s(r,t,i);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function su(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function LT(r,t,i){const s=new Float32Array(js),l=new k(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function h_(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function d_(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Rp(){return`

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
	`}function NT(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Cd||p===Dd,v=p===so||p===ro;if(m||v){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new u_(r)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new u_(r)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function OT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xs("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function PT(r,t,i,s){const l={},c=new WeakMap;function f(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)t.update(_[y],r.ARRAY_BUFFER)}function m(g){const _=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let L=0,b=N.length;L<b;L+=3){const P=N[L+0],C=N[L+1],O=N[L+2];_.push(P,C,C,O,O,P)}}else if(E!==void 0){const N=E.array;T=E.version;for(let L=0,b=N.length/3-1;L<b;L+=3){const P=L+0,C=L+1,O=L+2;_.push(P,C,C,O,O,P)}}else return;const M=new(tx(_)?ax:ix)(_,1);M.version=T;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function v(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function zT(r,t,i){let s;function l(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function p(_,y){r.drawElements(s,y,c,_*f),i.update(y,s,1)}function m(_,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,_*f,E),i.update(y,s,E))}function v(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,s,1)}function g(_,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)m(_[x]/f,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,T,0,E);let x=0;for(let N=0;N<E;N++)x+=y[N]*T[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function IT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function BT(r,t,i){const s=new WeakMap,l=new an;function c(f,h,p){const m=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let A=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var y=A;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),M===!0&&(b=3);let P=h.attributes.position.count*b,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*C*4*g),z=new ex(O,P,C,g);z.type=Ji,z.needsUpdate=!0;const U=b*4;for(let B=0;B<g;B++){const W=x[B],tt=N[B],ut=L[B],pt=P*C*4*B;for(let G=0;G<W.count;G++){const j=G*U;E===!0&&(l.fromBufferAttribute(W,G),O[pt+j+0]=l.x,O[pt+j+1]=l.y,O[pt+j+2]=l.z,O[pt+j+3]=0),T===!0&&(l.fromBufferAttribute(tt,G),O[pt+j+4]=l.x,O[pt+j+5]=l.y,O[pt+j+6]=l.z,O[pt+j+7]=0),M===!0&&(l.fromBufferAttribute(ut,G),O[pt+j+8]=l.x,O[pt+j+9]=l.y,O[pt+j+10]=l.z,O[pt+j+11]=ut.itemSize===4?l.w:1)}}_={count:g,texture:z,size:new Jt(P,C)},s.set(h,_),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function FT(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return g}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const _x=new Vn,p_=new cx(1,1),xx=new ex,yx=new QM,Sx=new ox,m_=[],g_=[],v_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function mo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=m_[l];if(c===void 0&&(c=new Float32Array(l),m_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Rn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Cn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Su(r,t){let i=g_[t];i===void 0&&(i=new Int32Array(t),g_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function HT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2fv(this.addr,t),Cn(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;r.uniform3fv(this.addr,t),Cn(i,t)}}function kT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4fv(this.addr,t),Cn(i,t)}}function XT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;x_.set(s),r.uniformMatrix2fv(this.addr,!1,x_),Cn(i,s)}}function WT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;__.set(s),r.uniformMatrix3fv(this.addr,!1,__),Cn(i,s)}}function qT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;v_.set(s),r.uniformMatrix4fv(this.addr,!1,v_),Cn(i,s)}}function YT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2iv(this.addr,t),Cn(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3iv(this.addr,t),Cn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4iv(this.addr,t),Cn(i,t)}}function QT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2uiv(this.addr,t),Cn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3uiv(this.addr,t),Cn(i,t)}}function tA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4uiv(this.addr,t),Cn(i,t)}}function eA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(p_.compareFunction=J_,c=p_):c=_x,i.setTexture2D(t||c,l)}function nA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||yx,l)}function iA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Sx,l)}function aA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||xx,l)}function sA(r){switch(r){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}function rA(r,t){r.uniform1fv(this.addr,t)}function oA(r,t){const i=mo(t,this.size,2);r.uniform2fv(this.addr,i)}function lA(r,t){const i=mo(t,this.size,3);r.uniform3fv(this.addr,i)}function cA(r,t){const i=mo(t,this.size,4);r.uniform4fv(this.addr,i)}function uA(r,t){const i=mo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function fA(r,t){const i=mo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function hA(r,t){const i=mo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function dA(r,t){r.uniform1iv(this.addr,t)}function pA(r,t){r.uniform2iv(this.addr,t)}function mA(r,t){r.uniform3iv(this.addr,t)}function gA(r,t){r.uniform4iv(this.addr,t)}function vA(r,t){r.uniform1uiv(this.addr,t)}function _A(r,t){r.uniform2uiv(this.addr,t)}function xA(r,t){r.uniform3uiv(this.addr,t)}function yA(r,t){r.uniform4uiv(this.addr,t)}function SA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||_x,c[f])}function MA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||yx,c[f])}function EA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Sx,c[f])}function bA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||xx,c[f])}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return vA;case 36294:return _A;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}class AA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sA(i.type)}}class wA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TA(i.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function y_(r,t){r.seq.push(t),r.map[t.id]=t}function CA(r,t,i){const s=r.name,l=s.length;for(dd.lastIndex=0;;){const c=dd.exec(s),f=dd.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){y_(i,m===void 0?new AA(h,r,t):new wA(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new RA(h),y_(i,g)),i=g}}}class hu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);CA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function S_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const DA=37297;let UA=0;function LA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const M_=new Re;function NA(r){qe._getMatrix(M_,qe.workingColorSpace,r);const t=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(qe.getTransfer(r)){case du:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function E_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+LA(r.getShaderSource(t),f)}else return l}function OA(r,t){const i=NA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function PA(r,t){let i;switch(t){case cM:i="Linear";break;case uM:i="Reinhard";break;case fM:i="Cineon";break;case H_:i="ACESFilmic";break;case dM:i="AgX";break;case pM:i="Neutral";break;case hM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ru=new k;function zA(){qe.getLuminanceCoefficients(ru);const r=ru.x.toFixed(4),t=ru.y.toFixed(4),i=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function BA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function FA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function pl(r){return r!==""}function b_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(r){return r.replace(HA,VA)}const GA=new Map;function VA(r,t){let i=Ce[t];if(i===void 0){const s=GA.get(t);if(s!==void 0)i=Ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return cp(i)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(r){return r.replace(kA,XA)}function XA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function w_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===I_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===B_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ra&&(t="SHADOWMAP_TYPE_VSM"),t}function qA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case so:case ro:t="ENVMAP_TYPE_CUBE";break;case _u:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ro:t="ENVMAP_MODE_REFRACTION";break}return t}function jA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case F_:t="ENVMAP_BLENDING_MULTIPLY";break;case oM:t="ENVMAP_BLENDING_MIX";break;case lM:t="ENVMAP_BLENDING_ADD";break}return t}function ZA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function KA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=WA(i),m=qA(i),v=YA(i),g=jA(i),_=ZA(i),y=IA(i),E=BA(c),T=l.createProgram();let M,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),x.length>0&&(x+=`
`)):(M=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),x=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==gs?"#define TONE_MAPPING":"",i.toneMapping!==gs?Ce.tonemapping_pars_fragment:"",i.toneMapping!==gs?PA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,OA("linearToOutputTexel",i.outputColorSpace),zA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),f=cp(f),f=b_(f,i),f=T_(f,i),h=cp(h),h=b_(h,i),h=T_(h,i),f=A_(f),h=A_(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+M+f,b=N+x+h,P=S_(l,l.VERTEX_SHADER,L),C=S_(l,l.FRAGMENT_SHADER,b);l.attachShader(T,P),l.attachShader(T,C),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(B){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(T).trim(),tt=l.getShaderInfoLog(P).trim(),ut=l.getShaderInfoLog(C).trim();let pt=!0,G=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(pt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,C);else{const j=E_(l,P,"vertex"),V=E_(l,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+j+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(tt===""||ut==="")&&(G=!1);G&&(B.diagnostics={runnable:pt,programLog:W,vertexShader:{log:tt,prefix:M},fragmentShader:{log:ut,prefix:x}})}l.deleteShader(P),l.deleteShader(C),z=new hu(l,T),U=FA(l,T)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,DA)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=C,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new $A(t),i.set(t,s)),s}}class $A{constructor(t){this.id=QA++,this.code=t,this.usedTimes=0}}function t2(r,t,i,s,l,c,f){const h=new Sp,p=new JA,m=new Set,v=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,A,B,W,tt){const ut=W.fog,pt=tt.geometry,G=U.isMeshStandardMaterial?W.environment:null,j=(U.isMeshStandardMaterial?i:t).get(U.envMap||G),V=j&&j.mapping===_u?j.image.height:null,Mt=E[U.type];U.precision!==null&&(y=l.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const wt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,H=wt!==void 0?wt.length:0;let et=0;pt.morphAttributes.position!==void 0&&(et=1),pt.morphAttributes.normal!==void 0&&(et=2),pt.morphAttributes.color!==void 0&&(et=3);let yt,Z,ft,At;if(Mt){const Le=Ki[Mt];yt=Le.vertexShader,Z=Le.fragmentShader}else yt=U.vertexShader,Z=U.fragmentShader,p.update(U),ft=p.getVertexShaderID(U),At=p.getFragmentShaderID(U);const $=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Nt=tt.isInstancedMesh===!0,Pt=tt.isBatchedMesh===!0,oe=!!U.map,Ee=!!U.matcap,Lt=!!j,F=!!U.aoMap,ie=!!U.lightMap,Ot=!!U.bumpMap,le=!!U.normalMap,Gt=!!U.displacementMap,_e=!!U.emissiveMap,Zt=!!U.metalnessMap,I=!!U.roughnessMap,w=U.anisotropy>0,nt=U.clearcoat>0,vt=U.dispersion>0,Rt=U.iridescence>0,St=U.sheen>0,ee=U.transmission>0,zt=w&&!!U.anisotropyMap,Yt=nt&&!!U.clearcoatMap,be=nt&&!!U.clearcoatNormalMap,Dt=nt&&!!U.clearcoatRoughnessMap,Kt=Rt&&!!U.iridescenceMap,se=Rt&&!!U.iridescenceThicknessMap,re=St&&!!U.sheenColorMap,Wt=St&&!!U.sheenRoughnessMap,he=!!U.specularMap,xe=!!U.specularColorMap,ke=!!U.specularIntensityMap,K=ee&&!!U.transmissionMap,Bt=ee&&!!U.thicknessMap,mt=!!U.gradientMap,bt=!!U.alphaMap,Ft=U.alphaTest>0,Ht=!!U.alphaHash,ae=!!U.extensions;let He=gs;U.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=r.toneMapping);const Ct={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:yt,fragmentShader:Z,defines:U.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&tt._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&tt.instanceColor!==null,instancingMorph:Nt&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:co,alphaToCoverage:!!U.alphaToCoverage,map:oe,matcap:Ee,envMap:Lt,envMapMode:Lt&&j.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:ie,bumpMap:Ot,normalMap:le,displacementMap:_&&Gt,emissiveMap:_e,normalMapObjectSpace:le&&U.normalMapType===_M,normalMapTangentSpace:le&&U.normalMapType===Q_,metalnessMap:Zt,roughnessMap:I,anisotropy:w,anisotropyMap:zt,clearcoat:nt,clearcoatMap:Yt,clearcoatNormalMap:be,clearcoatRoughnessMap:Dt,dispersion:vt,iridescence:Rt,iridescenceMap:Kt,iridescenceThicknessMap:se,sheen:St,sheenColorMap:re,sheenRoughnessMap:Wt,specularMap:he,specularColorMap:xe,specularIntensityMap:ke,transmission:ee,transmissionMap:K,thicknessMap:Bt,gradientMap:mt,opaque:U.transparent===!1&&U.blending===eo&&U.alphaToCoverage===!1,alphaMap:bt,alphaTest:Ft,alphaHash:Ht,combine:U.combine,mapUv:oe&&T(U.map.channel),aoMapUv:F&&T(U.aoMap.channel),lightMapUv:ie&&T(U.lightMap.channel),bumpMapUv:Ot&&T(U.bumpMap.channel),normalMapUv:le&&T(U.normalMap.channel),displacementMapUv:Gt&&T(U.displacementMap.channel),emissiveMapUv:_e&&T(U.emissiveMap.channel),metalnessMapUv:Zt&&T(U.metalnessMap.channel),roughnessMapUv:I&&T(U.roughnessMap.channel),anisotropyMapUv:zt&&T(U.anisotropyMap.channel),clearcoatMapUv:Yt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:se&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:re&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&T(U.sheenRoughnessMap.channel),specularMapUv:he&&T(U.specularMap.channel),specularColorMapUv:xe&&T(U.specularColorMap.channel),specularIntensityMapUv:ke&&T(U.specularIntensityMap.channel),transmissionMapUv:K&&T(U.transmissionMap.channel),thicknessMapUv:Bt&&T(U.thicknessMap.channel),alphaMapUv:bt&&T(U.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(le||w),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!pt.attributes.uv&&(oe||bt),fog:!!ut,useFog:U.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:dt,skinning:tt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:oe&&U.map.isVideoTexture===!0&&qe.getTransfer(U.map.colorSpace)===nn,decodeVideoTextureEmissive:_e&&U.emissiveMap.isVideoTexture===!0&&qe.getTransfer(U.emissiveMap.colorSpace)===nn,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Zn,flipSided:U.side===Kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ae&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&U.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ct.vertexUv1s=m.has(1),Ct.vertexUv2s=m.has(2),Ct.vertexUv3s=m.has(3),m.clear(),Ct}function x(U){const A=[];if(U.shaderID?A.push(U.shaderID):(A.push(U.customVertexShaderID),A.push(U.customFragmentShaderID)),U.defines!==void 0)for(const B in U.defines)A.push(B),A.push(U.defines[B]);return U.isRawShaderMaterial===!1&&(N(A,U),L(A,U),A.push(r.outputColorSpace)),A.push(U.customProgramCacheKey),A.join()}function N(U,A){U.push(A.precision),U.push(A.outputColorSpace),U.push(A.envMapMode),U.push(A.envMapCubeUVHeight),U.push(A.mapUv),U.push(A.alphaMapUv),U.push(A.lightMapUv),U.push(A.aoMapUv),U.push(A.bumpMapUv),U.push(A.normalMapUv),U.push(A.displacementMapUv),U.push(A.emissiveMapUv),U.push(A.metalnessMapUv),U.push(A.roughnessMapUv),U.push(A.anisotropyMapUv),U.push(A.clearcoatMapUv),U.push(A.clearcoatNormalMapUv),U.push(A.clearcoatRoughnessMapUv),U.push(A.iridescenceMapUv),U.push(A.iridescenceThicknessMapUv),U.push(A.sheenColorMapUv),U.push(A.sheenRoughnessMapUv),U.push(A.specularMapUv),U.push(A.specularColorMapUv),U.push(A.specularIntensityMapUv),U.push(A.transmissionMapUv),U.push(A.thicknessMapUv),U.push(A.combine),U.push(A.fogExp2),U.push(A.sizeAttenuation),U.push(A.morphTargetsCount),U.push(A.morphAttributeCount),U.push(A.numDirLights),U.push(A.numPointLights),U.push(A.numSpotLights),U.push(A.numSpotLightMaps),U.push(A.numHemiLights),U.push(A.numRectAreaLights),U.push(A.numDirLightShadows),U.push(A.numPointLightShadows),U.push(A.numSpotLightShadows),U.push(A.numSpotLightShadowsWithMaps),U.push(A.numLightProbes),U.push(A.shadowMapType),U.push(A.toneMapping),U.push(A.numClippingPlanes),U.push(A.numClipIntersection),U.push(A.depthPacking)}function L(U,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),U.push(h.mask)}function b(U){const A=E[U.type];let B;if(A){const W=Ki[A];B=u1.clone(W.uniforms)}else B=U.uniforms;return B}function P(U,A){let B;for(let W=0,tt=v.length;W<tt;W++){const ut=v[W];if(ut.cacheKey===A){B=ut,++B.usedTimes;break}}return B===void 0&&(B=new KA(r,A,U,c),v.push(B)),B}function C(U){if(--U.usedTimes===0){const A=v.indexOf(U);v[A]=v[v.length-1],v.pop(),U.destroy()}}function O(U){p.remove(U)}function z(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:b,acquireProgram:P,releaseProgram:C,releaseShaderCache:O,programs:v,dispose:z}}function e2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function n2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function R_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function C_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,_,y,E,T,M){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},r[t]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=M),t++,x}function h(g,_,y,E,T,M){const x=f(g,_,y,E,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function p(g,_,y,E,T,M){const x=f(g,_,y,E,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function m(g,_){i.length>1&&i.sort(g||n2),s.length>1&&s.sort(_||R_),l.length>1&&l.sort(_||R_)}function v(){for(let g=t,_=r.length;g<_;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:v,sort:m}}function i2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new C_,r.set(s,[f])):l>=c.length?(f=new C_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function a2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new Se};break;case"SpotLight":i={position:new k,direction:new k,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=i,i}}}function s2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let r2=0;function o2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function l2(r){const t=new a2,i=s2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new k);const l=new k,c=new Fe,f=new Fe;function h(m){let v=0,g=0,_=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,N=0,L=0,b=0,P=0,C=0,O=0;m.sort(o2);for(let U=0,A=m.length;U<A;U++){const B=m[U],W=B.color,tt=B.intensity,ut=B.distance,pt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=W.r*tt,g+=W.g*tt,_+=W.b*tt;else if(B.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(B.sh.coefficients[G],tt);O++}else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,V=i.get(B);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,s.directionalShadow[y]=V,s.directionalShadowMap[y]=pt,s.directionalShadowMatrix[y]=B.shadow.matrix,N++}s.directional[y]=G,y++}else if(B.isSpotLight){const G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(W).multiplyScalar(tt),G.distance=ut,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,s.spot[T]=G;const j=B.shadow;if(B.map&&(s.spotLightMap[P]=B.map,P++,j.updateMatrices(B),B.castShadow&&C++),s.spotLightMatrix[T]=j.matrix,B.castShadow){const V=i.get(B);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,s.spotShadow[T]=V,s.spotShadowMap[T]=pt,b++}T++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(W).multiplyScalar(tt),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=G,M++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){const j=B.shadow,V=i.get(B);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,s.pointShadow[E]=V,s.pointShadowMap[E]=pt,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=G,E++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(tt),G.groundColor.copy(B.groundColor).multiplyScalar(tt),s.hemi[x]=G,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const z=s.hash;(z.directionalLength!==y||z.pointLength!==E||z.spotLength!==T||z.rectAreaLength!==M||z.hemiLength!==x||z.numDirectionalShadows!==N||z.numPointShadows!==L||z.numSpotShadows!==b||z.numSpotMaps!==P||z.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+P-C,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=O,z.directionalLength=y,z.pointLength=E,z.spotLength=T,z.rectAreaLength=M,z.hemiLength=x,z.numDirectionalShadows=N,z.numPointShadows=L,z.numSpotShadows=b,z.numSpotMaps=P,z.numLightProbes=O,s.version=r2++)}function p(m,v){let g=0,_=0,y=0,E=0,T=0;const M=v.matrixWorldInverse;for(let x=0,N=m.length;x<N;x++){const L=m[x];if(L.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),g++}else if(L.isSpotLight){const b=s.spot[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const b=s.point[_];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:s}}function D_(r){const t=new l2(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function h(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function c2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new D_(r),t.set(l,[h])):c>=f.length?(h=new D_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const u2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
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
}`;function h2(r,t,i){let s=new Mp;const l=new Jt,c=new Jt,f=new an,h=new P1({depthPacking:vM}),p=new z1,m={},v=i.maxTextureSize,g={[vs]:Kn,[Kn]:vs,[Zn]:Zn},_=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:u2,fragmentShader:f2}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new wn;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new gt(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I_;let x=this.type;this.render=function(C,O,z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||C.length===0)return;const U=r.getRenderTarget(),A=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(ms),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const tt=x!==Ra&&this.type===Ra,ut=x===Ra&&this.type!==Ra;for(let pt=0,G=C.length;pt<G;pt++){const j=C[pt],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const Mt=V.getFrameExtents();if(l.multiply(Mt),c.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Mt.x),l.x=c.x*Mt.x,V.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Mt.y),l.y=c.y*Mt.y,V.mapSize.y=c.y)),V.map===null||tt===!0||ut===!0){const H=this.type!==Ra?{minFilter:xi,magFilter:xi}:{};V.map!==null&&V.map.dispose(),V.map=new $s(l.x,l.y,H),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const wt=V.getViewportCount();for(let H=0;H<wt;H++){const et=V.getViewport(H);f.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),W.viewport(f),V.updateMatrices(j,H),s=V.getFrustum(),b(O,z,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Ra&&N(V,z),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(U,A,B)};function N(C,O){const z=t.update(T);_.defines.VSM_SAMPLES!==C.blurSamples&&(_.defines.VSM_SAMPLES=C.blurSamples,y.defines.VSM_SAMPLES=C.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $s(l.x,l.y)),_.uniforms.shadow_pass.value=C.map.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(O,null,z,_,T,null),y.uniforms.shadow_pass.value=C.mapPass.texture,y.uniforms.resolution.value=C.mapSize,y.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(O,null,z,y,T,null)}function L(C,O,z,U){let A=null;const B=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)A=B;else if(A=z.isPointLight===!0?p:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const W=A.uuid,tt=O.uuid;let ut=m[W];ut===void 0&&(ut={},m[W]=ut);let pt=ut[tt];pt===void 0&&(pt=A.clone(),ut[tt]=pt,O.addEventListener("dispose",P)),A=pt}if(A.visible=O.visible,A.wireframe=O.wireframe,U===Ra?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=r.properties.get(A);W.light=z}return A}function b(C,O,z,U,A){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Ra)&&(!C.frustumCulled||s.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const tt=t.update(C),ut=C.material;if(Array.isArray(ut)){const pt=tt.groups;for(let G=0,j=pt.length;G<j;G++){const V=pt[G],Mt=ut[V.materialIndex];if(Mt&&Mt.visible){const wt=L(C,Mt,U,A);C.onBeforeShadow(r,C,O,z,tt,wt,V),r.renderBufferDirect(z,null,tt,wt,C,V),C.onAfterShadow(r,C,O,z,tt,wt,V)}}}else if(ut.visible){const pt=L(C,ut,U,A);C.onBeforeShadow(r,C,O,z,tt,pt,null),r.renderBufferDirect(z,null,tt,pt,C,null),C.onAfterShadow(r,C,O,z,tt,pt,null)}}const W=C.children;for(let tt=0,ut=W.length;tt<ut;tt++)b(W[tt],O,z,U,A)}function P(C){C.target.removeEventListener("dispose",P);for(const z in m){const U=m[z],A=C.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}}const d2={[Md]:Ed,[bd]:wd,[Td]:Rd,[ao]:Ad,[Ed]:Md,[wd]:bd,[Rd]:Td,[Ad]:ao};function p2(r,t){function i(){let K=!1;const Bt=new an;let mt=null;const bt=new an(0,0,0,0);return{setMask:function(Ft){mt!==Ft&&!K&&(r.colorMask(Ft,Ft,Ft,Ft),mt=Ft)},setLocked:function(Ft){K=Ft},setClear:function(Ft,Ht,ae,He,Ct){Ct===!0&&(Ft*=He,Ht*=He,ae*=He),Bt.set(Ft,Ht,ae,He),bt.equals(Bt)===!1&&(r.clearColor(Ft,Ht,ae,He),bt.copy(Bt))},reset:function(){K=!1,mt=null,bt.set(-1,0,0,0)}}}function s(){let K=!1,Bt=!1,mt=null,bt=null,Ft=null;return{setReversed:function(Ht){if(Bt!==Ht){const ae=t.get("EXT_clip_control");Bt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);const He=Ft;Ft=null,this.setClear(He)}Bt=Ht},getReversed:function(){return Bt},setTest:function(Ht){Ht?$(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(Ht){mt!==Ht&&!K&&(r.depthMask(Ht),mt=Ht)},setFunc:function(Ht){if(Bt&&(Ht=d2[Ht]),bt!==Ht){switch(Ht){case Md:r.depthFunc(r.NEVER);break;case Ed:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case Ad:r.depthFunc(r.GEQUAL);break;case wd:r.depthFunc(r.GREATER);break;case Rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=Ht}},setLocked:function(Ht){K=Ht},setClear:function(Ht){Ft!==Ht&&(Bt&&(Ht=1-Ht),r.clearDepth(Ht),Ft=Ht)},reset:function(){K=!1,mt=null,bt=null,Ft=null,Bt=!1}}}function l(){let K=!1,Bt=null,mt=null,bt=null,Ft=null,Ht=null,ae=null,He=null,Ct=null;return{setTest:function(Le){K||(Le?$(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(Le){Bt!==Le&&!K&&(r.stencilMask(Le),Bt=Le)},setFunc:function(Le,_n,Qn){(mt!==Le||bt!==_n||Ft!==Qn)&&(r.stencilFunc(Le,_n,Qn),mt=Le,bt=_n,Ft=Qn)},setOp:function(Le,_n,Qn){(Ht!==Le||ae!==_n||He!==Qn)&&(r.stencilOp(Le,_n,Qn),Ht=Le,ae=_n,He=Qn)},setLocked:function(Le){K=Le},setClear:function(Le){Ct!==Le&&(r.clearStencil(Le),Ct=Le)},reset:function(){K=!1,Bt=null,mt=null,bt=null,Ft=null,Ht=null,ae=null,He=null,Ct=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let v={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,N=null,L=null,b=null,P=null,C=null,O=new Se(0,0,0),z=0,U=!1,A=null,B=null,W=null,tt=null,ut=null;const pt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=j>=2);let Mt=null,wt={};const H=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),yt=new an().fromArray(H),Z=new an().fromArray(et);function ft(K,Bt,mt,bt){const Ft=new Uint8Array(4),Ht=r.createTexture();r.bindTexture(K,Ht),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<mt;ae++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Bt,0,r.RGBA,1,1,bt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(Bt+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return Ht}const At={};At[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),At[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),At[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),$(r.DEPTH_TEST),f.setFunc(ao),Ot(!1),le(xv),$(r.CULL_FACE),F(ms);function $(K){v[K]!==!0&&(r.enable(K),v[K]=!0)}function dt(K){v[K]!==!1&&(r.disable(K),v[K]=!1)}function Nt(K,Bt){return g[K]!==Bt?(r.bindFramebuffer(K,Bt),g[K]=Bt,K===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Bt),K===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Pt(K,Bt){let mt=y,bt=!1;if(K){mt=_.get(Bt),mt===void 0&&(mt=[],_.set(Bt,mt));const Ft=K.textures;if(mt.length!==Ft.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Ht=0,ae=Ft.length;Ht<ae;Ht++)mt[Ht]=r.COLOR_ATTACHMENT0+Ht;mt.length=Ft.length,bt=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,bt=!0);bt&&r.drawBuffers(mt)}function oe(K){return E!==K?(r.useProgram(K),E=K,!0):!1}const Ee={[Ys]:r.FUNC_ADD,[XS]:r.FUNC_SUBTRACT,[WS]:r.FUNC_REVERSE_SUBTRACT};Ee[qS]=r.MIN,Ee[YS]=r.MAX;const Lt={[jS]:r.ZERO,[ZS]:r.ONE,[KS]:r.SRC_COLOR,[yd]:r.SRC_ALPHA,[nM]:r.SRC_ALPHA_SATURATE,[tM]:r.DST_COLOR,[JS]:r.DST_ALPHA,[QS]:r.ONE_MINUS_SRC_COLOR,[Sd]:r.ONE_MINUS_SRC_ALPHA,[eM]:r.ONE_MINUS_DST_COLOR,[$S]:r.ONE_MINUS_DST_ALPHA,[iM]:r.CONSTANT_COLOR,[aM]:r.ONE_MINUS_CONSTANT_COLOR,[sM]:r.CONSTANT_ALPHA,[rM]:r.ONE_MINUS_CONSTANT_ALPHA};function F(K,Bt,mt,bt,Ft,Ht,ae,He,Ct,Le){if(K===ms){T===!0&&(dt(r.BLEND),T=!1);return}if(T===!1&&($(r.BLEND),T=!0),K!==kS){if(K!==M||Le!==U){if((x!==Ys||b!==Ys)&&(r.blendEquation(r.FUNC_ADD),x=Ys,b=Ys),Le)switch(K){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yv:r.blendFunc(r.ONE,r.ONE);break;case Sv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}N=null,L=null,P=null,C=null,O.set(0,0,0),z=0,M=K,U=Le}return}Ft=Ft||Bt,Ht=Ht||mt,ae=ae||bt,(Bt!==x||Ft!==b)&&(r.blendEquationSeparate(Ee[Bt],Ee[Ft]),x=Bt,b=Ft),(mt!==N||bt!==L||Ht!==P||ae!==C)&&(r.blendFuncSeparate(Lt[mt],Lt[bt],Lt[Ht],Lt[ae]),N=mt,L=bt,P=Ht,C=ae),(He.equals(O)===!1||Ct!==z)&&(r.blendColor(He.r,He.g,He.b,Ct),O.copy(He),z=Ct),M=K,U=!1}function ie(K,Bt){K.side===Zn?dt(r.CULL_FACE):$(r.CULL_FACE);let mt=K.side===Kn;Bt&&(mt=!mt),Ot(mt),K.blending===eo&&K.transparent===!1?F(ms):F(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const bt=K.stencilWrite;h.setTest(bt),bt&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),_e(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(K){A!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),A=K)}function le(K){K!==GS?($(r.CULL_FACE),K!==B&&(K===xv?r.cullFace(r.BACK):K===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),B=K}function Gt(K){K!==W&&(G&&r.lineWidth(K),W=K)}function _e(K,Bt,mt){K?($(r.POLYGON_OFFSET_FILL),(tt!==Bt||ut!==mt)&&(r.polygonOffset(Bt,mt),tt=Bt,ut=mt)):dt(r.POLYGON_OFFSET_FILL)}function Zt(K){K?$(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function I(K){K===void 0&&(K=r.TEXTURE0+pt-1),Mt!==K&&(r.activeTexture(K),Mt=K)}function w(K,Bt,mt){mt===void 0&&(Mt===null?mt=r.TEXTURE0+pt-1:mt=Mt);let bt=wt[mt];bt===void 0&&(bt={type:void 0,texture:void 0},wt[mt]=bt),(bt.type!==K||bt.texture!==Bt)&&(Mt!==mt&&(r.activeTexture(mt),Mt=mt),r.bindTexture(K,Bt||At[K]),bt.type=K,bt.texture=Bt)}function nt(){const K=wt[Mt];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function vt(){try{r.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Rt(){try{r.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function St(){try{r.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ee(){try{r.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function zt(){try{r.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function be(){try{r.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Dt(){try{r.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Kt(){try{r.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function se(){try{r.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(K){yt.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),yt.copy(K))}function Wt(K){Z.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Z.copy(K))}function he(K,Bt){let mt=m.get(Bt);mt===void 0&&(mt=new WeakMap,m.set(Bt,mt));let bt=mt.get(K);bt===void 0&&(bt=r.getUniformBlockIndex(Bt,K.name),mt.set(K,bt))}function xe(K,Bt){const bt=m.get(Bt).get(K);p.get(Bt)!==bt&&(r.uniformBlockBinding(Bt,bt,K.__bindingPointIndex),p.set(Bt,bt))}function ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Mt=null,wt={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,x=null,N=null,L=null,b=null,P=null,C=null,O=new Se(0,0,0),z=0,U=!1,A=null,B=null,W=null,tt=null,ut=null,yt.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:$,disable:dt,bindFramebuffer:Nt,drawBuffers:Pt,useProgram:oe,setBlending:F,setMaterial:ie,setFlipSided:Ot,setCullFace:le,setLineWidth:Gt,setPolygonOffset:_e,setScissorTest:Zt,activeTexture:I,bindTexture:w,unbindTexture:nt,compressedTexImage2D:vt,compressedTexImage3D:Rt,texImage2D:Kt,texImage3D:se,updateUBOMapping:he,uniformBlockBinding:xe,texStorage2D:be,texStorage3D:Dt,texSubImage2D:St,texSubImage3D:ee,compressedTexSubImage2D:zt,compressedTexSubImage3D:Yt,scissor:re,viewport:Wt,reset:ke}}function m2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Jt,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,w){return y?new OffscreenCanvas(I,w):mu("canvas")}function T(I,w,nt){let vt=1;const Rt=Zt(I);if((Rt.width>nt||Rt.height>nt)&&(vt=nt/Math.max(Rt.width,Rt.height)),vt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const St=Math.floor(vt*Rt.width),ee=Math.floor(vt*Rt.height);g===void 0&&(g=E(St,ee));const zt=w?E(St,ee):g;return zt.width=St,zt.height=ee,zt.getContext("2d").drawImage(I,0,0,St,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+St+"x"+ee+")."),zt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,w,nt,vt,Rt=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let St=w;if(w===r.RED&&(nt===r.FLOAT&&(St=r.R32F),nt===r.HALF_FLOAT&&(St=r.R16F),nt===r.UNSIGNED_BYTE&&(St=r.R8)),w===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(St=r.R8UI),nt===r.UNSIGNED_SHORT&&(St=r.R16UI),nt===r.UNSIGNED_INT&&(St=r.R32UI),nt===r.BYTE&&(St=r.R8I),nt===r.SHORT&&(St=r.R16I),nt===r.INT&&(St=r.R32I)),w===r.RG&&(nt===r.FLOAT&&(St=r.RG32F),nt===r.HALF_FLOAT&&(St=r.RG16F),nt===r.UNSIGNED_BYTE&&(St=r.RG8)),w===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(St=r.RG8UI),nt===r.UNSIGNED_SHORT&&(St=r.RG16UI),nt===r.UNSIGNED_INT&&(St=r.RG32UI),nt===r.BYTE&&(St=r.RG8I),nt===r.SHORT&&(St=r.RG16I),nt===r.INT&&(St=r.RG32I)),w===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(St=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(St=r.RGB16UI),nt===r.UNSIGNED_INT&&(St=r.RGB32UI),nt===r.BYTE&&(St=r.RGB8I),nt===r.SHORT&&(St=r.RGB16I),nt===r.INT&&(St=r.RGB32I)),w===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(St=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(St=r.RGBA16UI),nt===r.UNSIGNED_INT&&(St=r.RGBA32UI),nt===r.BYTE&&(St=r.RGBA8I),nt===r.SHORT&&(St=r.RGBA16I),nt===r.INT&&(St=r.RGBA32I)),w===r.RGB&&nt===r.UNSIGNED_INT_5_9_9_9_REV&&(St=r.RGB9_E5),w===r.RGBA){const ee=Rt?du:qe.getTransfer(vt);nt===r.FLOAT&&(St=r.RGBA32F),nt===r.HALF_FLOAT&&(St=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(St=ee===nn?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(St=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(St=r.RGB5_A1)}return(St===r.R16F||St===r.R32F||St===r.RG16F||St===r.RG32F||St===r.RGBA16F||St===r.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function b(I,w){let nt;return I?w===null||w===Js||w===oo?nt=r.DEPTH24_STENCIL8:w===Ji?nt=r.DEPTH32F_STENCIL8:w===Sl&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Js||w===oo?nt=r.DEPTH_COMPONENT24:w===Ji?nt=r.DEPTH_COMPONENT32F:w===Sl&&(nt=r.DEPTH_COMPONENT16),nt}function P(I,w){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==xi&&I.minFilter!==Qi?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function C(I){const w=I.target;w.removeEventListener("dispose",C),z(w),w.isVideoTexture&&v.delete(w)}function O(I){const w=I.target;w.removeEventListener("dispose",O),A(w)}function z(I){const w=s.get(I);if(w.__webglInit===void 0)return;const nt=I.source,vt=_.get(nt);if(vt){const Rt=vt[w.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&U(I),Object.keys(vt).length===0&&_.delete(nt)}s.remove(I)}function U(I){const w=s.get(I);r.deleteTexture(w.__webglTexture);const nt=I.source,vt=_.get(nt);delete vt[w.__cacheKey],f.memory.textures--}function A(I){const w=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(w.__webglFramebuffer[vt]))for(let Rt=0;Rt<w.__webglFramebuffer[vt].length;Rt++)r.deleteFramebuffer(w.__webglFramebuffer[vt][Rt]);else r.deleteFramebuffer(w.__webglFramebuffer[vt]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[vt])}else{if(Array.isArray(w.__webglFramebuffer))for(let vt=0;vt<w.__webglFramebuffer.length;vt++)r.deleteFramebuffer(w.__webglFramebuffer[vt]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let vt=0;vt<w.__webglColorRenderbuffer.length;vt++)w.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[vt]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const nt=I.textures;for(let vt=0,Rt=nt.length;vt<Rt;vt++){const St=s.get(nt[vt]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),f.memory.textures--),s.remove(nt[vt])}s.remove(I)}let B=0;function W(){B=0}function tt(){const I=B;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),B+=1,I}function ut(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function pt(I,w){const nt=s.get(I);if(I.isVideoTexture&&Gt(I),I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){const vt=I.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(nt,I,w);return}}i.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+w)}function G(I,w){const nt=s.get(I);if(I.version>0&&nt.__version!==I.version){Z(nt,I,w);return}i.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+w)}function j(I,w){const nt=s.get(I);if(I.version>0&&nt.__version!==I.version){Z(nt,I,w);return}i.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+w)}function V(I,w){const nt=s.get(I);if(I.version>0&&nt.__version!==I.version){ft(nt,I,w);return}i.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+w)}const Mt={[yl]:r.REPEAT,[Ks]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},wt={[xi]:r.NEAREST,[mM]:r.NEAREST_MIPMAP_NEAREST,[Oc]:r.NEAREST_MIPMAP_LINEAR,[Qi]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[Qs]:r.LINEAR_MIPMAP_LINEAR},H={[xM]:r.NEVER,[TM]:r.ALWAYS,[yM]:r.LESS,[J_]:r.LEQUAL,[SM]:r.EQUAL,[bM]:r.GEQUAL,[MM]:r.GREATER,[EM]:r.NOTEQUAL};function et(I,w){if(w.type===Ji&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Qi||w.magFilter===Nh||w.magFilter===Oc||w.magFilter===Qs||w.minFilter===Qi||w.minFilter===Nh||w.minFilter===Oc||w.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Mt[w.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Mt[w.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Mt[w.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,wt[w.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,wt[w.minFilter]),w.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xi||w.minFilter!==Oc&&w.minFilter!==Qs||w.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function yt(I,w){let nt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",C));const vt=w.source;let Rt=_.get(vt);Rt===void 0&&(Rt={},_.set(vt,Rt));const St=ut(w);if(St!==I.__cacheKey){Rt[St]===void 0&&(Rt[St]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Rt[St].usedTimes++;const ee=Rt[I.__cacheKey];ee!==void 0&&(Rt[I.__cacheKey].usedTimes--,ee.usedTimes===0&&U(w)),I.__cacheKey=St,I.__webglTexture=Rt[St].texture}return nt}function Z(I,w,nt){let vt=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(vt=r.TEXTURE_3D);const Rt=yt(I,w),St=w.source;i.bindTexture(vt,I.__webglTexture,r.TEXTURE0+nt);const ee=s.get(St);if(St.version!==ee.__version||Rt===!0){i.activeTexture(r.TEXTURE0+nt);const zt=qe.getPrimaries(qe.workingColorSpace),Yt=w.colorSpace===ds?null:qe.getPrimaries(w.colorSpace),be=w.colorSpace===ds||zt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Dt=T(w.image,!1,l.maxTextureSize);Dt=_e(w,Dt);const Kt=c.convert(w.format,w.colorSpace),se=c.convert(w.type);let re=L(w.internalFormat,Kt,se,w.colorSpace,w.isVideoTexture);et(vt,w);let Wt;const he=w.mipmaps,xe=w.isVideoTexture!==!0,ke=ee.__version===void 0||Rt===!0,K=St.dataReady,Bt=P(w,Dt);if(w.isDepthTexture)re=b(w.format===lo,w.type),ke&&(xe?i.texStorage2D(r.TEXTURE_2D,1,re,Dt.width,Dt.height):i.texImage2D(r.TEXTURE_2D,0,re,Dt.width,Dt.height,0,Kt,se,null));else if(w.isDataTexture)if(he.length>0){xe&&ke&&i.texStorage2D(r.TEXTURE_2D,Bt,re,he[0].width,he[0].height);for(let mt=0,bt=he.length;mt<bt;mt++)Wt=he[mt],xe?K&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Wt.width,Wt.height,Kt,se,Wt.data):i.texImage2D(r.TEXTURE_2D,mt,re,Wt.width,Wt.height,0,Kt,se,Wt.data);w.generateMipmaps=!1}else xe?(ke&&i.texStorage2D(r.TEXTURE_2D,Bt,re,Dt.width,Dt.height),K&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt.width,Dt.height,Kt,se,Dt.data)):i.texImage2D(r.TEXTURE_2D,0,re,Dt.width,Dt.height,0,Kt,se,Dt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xe&&ke&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,re,he[0].width,he[0].height,Dt.depth);for(let mt=0,bt=he.length;mt<bt;mt++)if(Wt=he[mt],w.format!==Fi)if(Kt!==null)if(xe){if(K)if(w.layerUpdates.size>0){const Ft=r_(Wt.width,Wt.height,w.format,w.type);for(const Ht of w.layerUpdates){const ae=Wt.data.subarray(Ht*Ft/Wt.data.BYTES_PER_ELEMENT,(Ht+1)*Ft/Wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Ht,Wt.width,Wt.height,1,Kt,ae)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Wt.width,Wt.height,Dt.depth,Kt,Wt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,re,Wt.width,Wt.height,Dt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?K&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Wt.width,Wt.height,Dt.depth,Kt,se,Wt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,re,Wt.width,Wt.height,Dt.depth,0,Kt,se,Wt.data)}else{xe&&ke&&i.texStorage2D(r.TEXTURE_2D,Bt,re,he[0].width,he[0].height);for(let mt=0,bt=he.length;mt<bt;mt++)Wt=he[mt],w.format!==Fi?Kt!==null?xe?K&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Wt.width,Wt.height,Kt,Wt.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,re,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?K&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Wt.width,Wt.height,Kt,se,Wt.data):i.texImage2D(r.TEXTURE_2D,mt,re,Wt.width,Wt.height,0,Kt,se,Wt.data)}else if(w.isDataArrayTexture)if(xe){if(ke&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,re,Dt.width,Dt.height,Dt.depth),K)if(w.layerUpdates.size>0){const mt=r_(Dt.width,Dt.height,w.format,w.type);for(const bt of w.layerUpdates){const Ft=Dt.data.subarray(bt*mt/Dt.data.BYTES_PER_ELEMENT,(bt+1)*mt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,bt,Dt.width,Dt.height,1,Kt,se,Ft)}w.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Kt,se,Dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,re,Dt.width,Dt.height,Dt.depth,0,Kt,se,Dt.data);else if(w.isData3DTexture)xe?(ke&&i.texStorage3D(r.TEXTURE_3D,Bt,re,Dt.width,Dt.height,Dt.depth),K&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Kt,se,Dt.data)):i.texImage3D(r.TEXTURE_3D,0,re,Dt.width,Dt.height,Dt.depth,0,Kt,se,Dt.data);else if(w.isFramebufferTexture){if(ke)if(xe)i.texStorage2D(r.TEXTURE_2D,Bt,re,Dt.width,Dt.height);else{let mt=Dt.width,bt=Dt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,re,mt,bt,0,Kt,se,null),mt>>=1,bt>>=1}}else if(he.length>0){if(xe&&ke){const mt=Zt(he[0]);i.texStorage2D(r.TEXTURE_2D,Bt,re,mt.width,mt.height)}for(let mt=0,bt=he.length;mt<bt;mt++)Wt=he[mt],xe?K&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Kt,se,Wt):i.texImage2D(r.TEXTURE_2D,mt,re,Kt,se,Wt);w.generateMipmaps=!1}else if(xe){if(ke){const mt=Zt(Dt);i.texStorage2D(r.TEXTURE_2D,Bt,re,mt.width,mt.height)}K&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Kt,se,Dt)}else i.texImage2D(r.TEXTURE_2D,0,re,Kt,se,Dt);M(w)&&x(vt),ee.__version=St.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ft(I,w,nt){if(w.image.length!==6)return;const vt=yt(I,w),Rt=w.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+nt);const St=s.get(Rt);if(Rt.version!==St.__version||vt===!0){i.activeTexture(r.TEXTURE0+nt);const ee=qe.getPrimaries(qe.workingColorSpace),zt=w.colorSpace===ds?null:qe.getPrimaries(w.colorSpace),Yt=w.colorSpace===ds||ee===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,Dt=w.image[0]&&w.image[0].isDataTexture,Kt=[];for(let bt=0;bt<6;bt++)!be&&!Dt?Kt[bt]=T(w.image[bt],!0,l.maxCubemapSize):Kt[bt]=Dt?w.image[bt].image:w.image[bt],Kt[bt]=_e(w,Kt[bt]);const se=Kt[0],re=c.convert(w.format,w.colorSpace),Wt=c.convert(w.type),he=L(w.internalFormat,re,Wt,w.colorSpace),xe=w.isVideoTexture!==!0,ke=St.__version===void 0||vt===!0,K=Rt.dataReady;let Bt=P(w,se);et(r.TEXTURE_CUBE_MAP,w);let mt;if(be){xe&&ke&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,se.width,se.height);for(let bt=0;bt<6;bt++){mt=Kt[bt].mipmaps;for(let Ft=0;Ft<mt.length;Ft++){const Ht=mt[Ft];w.format!==Fi?re!==null?xe?K&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,0,0,Ht.width,Ht.height,re,Ht.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,he,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?K&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,0,0,Ht.width,Ht.height,re,Wt,Ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,he,Ht.width,Ht.height,0,re,Wt,Ht.data)}}}else{if(mt=w.mipmaps,xe&&ke){mt.length>0&&Bt++;const bt=Zt(Kt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,he,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Dt){xe?K&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Kt[bt].width,Kt[bt].height,re,Wt,Kt[bt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,he,Kt[bt].width,Kt[bt].height,0,re,Wt,Kt[bt].data);for(let Ft=0;Ft<mt.length;Ft++){const ae=mt[Ft].image[bt].image;xe?K&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,0,0,ae.width,ae.height,re,Wt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,he,ae.width,ae.height,0,re,Wt,ae.data)}}else{xe?K&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,re,Wt,Kt[bt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,he,re,Wt,Kt[bt]);for(let Ft=0;Ft<mt.length;Ft++){const Ht=mt[Ft];xe?K&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,0,0,re,Wt,Ht.image[bt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,he,re,Wt,Ht.image[bt])}}}M(w)&&x(r.TEXTURE_CUBE_MAP),St.__version=Rt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function At(I,w,nt,vt,Rt,St){const ee=c.convert(nt.format,nt.colorSpace),zt=c.convert(nt.type),Yt=L(nt.internalFormat,ee,zt,nt.colorSpace),be=s.get(w),Dt=s.get(nt);if(Dt.__renderTarget=w,!be.__hasExternalTextures){const Kt=Math.max(1,w.width>>St),se=Math.max(1,w.height>>St);Rt===r.TEXTURE_3D||Rt===r.TEXTURE_2D_ARRAY?i.texImage3D(Rt,St,Yt,Kt,se,w.depth,0,ee,zt,null):i.texImage2D(Rt,St,Yt,Kt,se,0,ee,zt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Rt,Dt.__webglTexture,0,Ot(w)):(Rt===r.TEXTURE_2D||Rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Rt,Dt.__webglTexture,St),i.bindFramebuffer(r.FRAMEBUFFER,null)}function $(I,w,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,I),w.depthBuffer){const vt=w.depthTexture,Rt=vt&&vt.isDepthTexture?vt.type:null,St=b(w.stencilBuffer,Rt),ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=Ot(w);le(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt,St,w.width,w.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,St,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,St,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,I)}else{const vt=w.textures;for(let Rt=0;Rt<vt.length;Rt++){const St=vt[Rt],ee=c.convert(St.format,St.colorSpace),zt=c.convert(St.type),Yt=L(St.internalFormat,ee,zt,St.colorSpace),be=Ot(w);nt&&le(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,Yt,w.width,w.height):le(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,Yt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Yt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(w.depthTexture);vt.__renderTarget=w,(!vt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pt(w.depthTexture,0);const Rt=vt.__webglTexture,St=Ot(w);if(w.depthTexture.format===no)le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Rt,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Rt,0);else if(w.depthTexture.format===lo)le(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Rt,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function Nt(I){const w=s.get(I),nt=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const vt=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),vt){const Rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,vt.removeEventListener("dispose",Rt)};vt.addEventListener("dispose",Rt),w.__depthDisposeCallback=Rt}w.__boundDepthTexture=vt}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");dt(w.__webglFramebuffer,I)}else if(nt){w.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[vt]),w.__webglDepthbuffer[vt]===void 0)w.__webglDepthbuffer[vt]=r.createRenderbuffer(),$(w.__webglDepthbuffer[vt],I,!1);else{const Rt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,St)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),$(w.__webglDepthbuffer,I,!1);else{const vt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,Rt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(I,w,nt){const vt=s.get(I);w!==void 0&&At(vt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&Nt(I)}function oe(I){const w=I.texture,nt=s.get(I),vt=s.get(w);I.addEventListener("dispose",O);const Rt=I.textures,St=I.isWebGLCubeRenderTarget===!0,ee=Rt.length>1;if(ee||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=w.version,f.memory.textures++),St){nt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer[zt]=[];for(let Yt=0;Yt<w.mipmaps.length;Yt++)nt.__webglFramebuffer[zt][Yt]=r.createFramebuffer()}else nt.__webglFramebuffer[zt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer=[];for(let zt=0;zt<w.mipmaps.length;zt++)nt.__webglFramebuffer[zt]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(ee)for(let zt=0,Yt=Rt.length;zt<Yt;zt++){const be=s.get(Rt[zt]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&le(I)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let zt=0;zt<Rt.length;zt++){const Yt=Rt[zt];nt.__webglColorRenderbuffer[zt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[zt]);const be=c.convert(Yt.format,Yt.colorSpace),Dt=c.convert(Yt.type),Kt=L(Yt.internalFormat,be,Dt,Yt.colorSpace,I.isXRRenderTarget===!0),se=Ot(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Kt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,nt.__webglColorRenderbuffer[zt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),$(nt.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(St){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),et(r.TEXTURE_CUBE_MAP,w);for(let zt=0;zt<6;zt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Yt=0;Yt<w.mipmaps.length;Yt++)At(nt.__webglFramebuffer[zt][Yt],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Yt);else At(nt.__webglFramebuffer[zt],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);M(w)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let zt=0,Yt=Rt.length;zt<Yt;zt++){const be=Rt[zt],Dt=s.get(be);i.bindTexture(r.TEXTURE_2D,Dt.__webglTexture),et(r.TEXTURE_2D,be),At(nt.__webglFramebuffer,I,be,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,0),M(be)&&x(r.TEXTURE_2D)}i.unbindTexture()}else{let zt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(zt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(zt,vt.__webglTexture),et(zt,w),w.mipmaps&&w.mipmaps.length>0)for(let Yt=0;Yt<w.mipmaps.length;Yt++)At(nt.__webglFramebuffer[Yt],I,w,r.COLOR_ATTACHMENT0,zt,Yt);else At(nt.__webglFramebuffer,I,w,r.COLOR_ATTACHMENT0,zt,0);M(w)&&x(zt),i.unbindTexture()}I.depthBuffer&&Nt(I)}function Ee(I){const w=I.textures;for(let nt=0,vt=w.length;nt<vt;nt++){const Rt=w[nt];if(M(Rt)){const St=N(I),ee=s.get(Rt).__webglTexture;i.bindTexture(St,ee),x(St),i.unbindTexture()}}}const Lt=[],F=[];function ie(I){if(I.samples>0){if(le(I)===!1){const w=I.textures,nt=I.width,vt=I.height;let Rt=r.COLOR_BUFFER_BIT;const St=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=s.get(I),zt=w.length>1;if(zt)for(let Yt=0;Yt<w.length;Yt++)i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Yt=0;Yt<w.length;Yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Rt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Rt|=r.STENCIL_BUFFER_BIT)),zt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Yt]);const be=s.get(w[Yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,nt,vt,0,0,nt,vt,Rt,r.NEAREST),p===!0&&(Lt.length=0,F.length=0,Lt.push(r.COLOR_ATTACHMENT0+Yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Lt.push(St),F.push(St),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),zt)for(let Yt=0;Yt<w.length;Yt++){i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Yt]);const be=s.get(w[Yt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const w=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ot(I){return Math.min(l.maxSamples,I.samples)}function le(I){const w=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gt(I){const w=f.render.frame;v.get(I)!==w&&(v.set(I,w),I.update())}function _e(I,w){const nt=I.colorSpace,vt=I.format,Rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||nt!==co&&nt!==ds&&(qe.getTransfer(nt)===nn?(vt!==Fi||Rt!==Oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),w}function Zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=W,this.setTexture2D=pt,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Pt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=le}function g2(r,t){function i(s,l=ds){let c;const f=qe.getTransfer(l);if(s===Oa)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===X_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===V_)return r.BYTE;if(s===k_)return r.SHORT;if(s===Sl)return r.UNSIGNED_SHORT;if(s===hp)return r.INT;if(s===Js)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===bl)return r.HALF_FLOAT;if(s===W_)return r.ALPHA;if(s===q_)return r.RGB;if(s===Fi)return r.RGBA;if(s===Y_)return r.LUMINANCE;if(s===j_)return r.LUMINANCE_ALPHA;if(s===no)return r.DEPTH_COMPONENT;if(s===lo)return r.DEPTH_STENCIL;if(s===mp)return r.RED;if(s===gp)return r.RED_INTEGER;if(s===Z_)return r.RG;if(s===vp)return r.RG_INTEGER;if(s===_p)return r.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(f===nn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ld||s===Nd||s===Od||s===Pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zd||s===Id||s===Bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zd||s===Id)return f===nn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Bd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return f===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fu||s===$d||s===tp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===fu)return f===nn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===K_||s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===fu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
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

}`;class x2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Pa({vertexShader:v2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gt(new vi(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends ho{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,v=null,g=null,_=null,y=null,E=null;const T=new x2,M=i.getContextAttributes();let x=null,N=null;const L=[],b=[],P=new Jt;let C=null;const O=new _i;O.viewport=new an;const z=new _i;z.viewport=new an;const U=[O,z],A=new H1;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=L[Z];return ft===void 0&&(ft=new $h,L[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=L[Z];return ft===void 0&&(ft=new $h,L[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=L[Z];return ft===void 0&&(ft=new $h,L[Z]=ft),ft.getHandSpace()};function tt(Z){const ft=b.indexOf(Z.inputSource);if(ft===-1)return;const At=L[ft];At!==void 0&&(At.update(Z.inputSource,Z.frame,m||f),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ut(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",pt);for(let Z=0;Z<L.length;Z++){const ft=b[Z];ft!==null&&(b[Z]=null,L[Z].disconnect(ft))}B=null,W=null,T.reset(),t.setRenderTarget(x),y=null,_=null,g=null,l=null,N=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,$=null,dt=null;M.depth&&(dt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=M.stencil?lo:no,$=M.stencil?oo:Js);const Nt={colorFormat:i.RGBA8,depthFormat:dt,scaleFactor:c};g=new XRWebGLBinding(l,i),_=g.createProjectionLayer(Nt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new $s(_.textureWidth,_.textureHeight,{format:Fi,type:Oa,depthTexture:new cx(_.textureWidth,_.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new $s(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:Oa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pt(Z){for(let ft=0;ft<Z.removed.length;ft++){const At=Z.removed[ft],$=b.indexOf(At);$>=0&&(b[$]=null,L[$].disconnect(At))}for(let ft=0;ft<Z.added.length;ft++){const At=Z.added[ft];let $=b.indexOf(At);if($===-1){for(let Nt=0;Nt<L.length;Nt++)if(Nt>=b.length){b.push(At),$=Nt;break}else if(b[Nt]===null){b[Nt]=At,$=Nt;break}if($===-1)break}const dt=L[$];dt&&dt.connect(At)}}const G=new k,j=new k;function V(Z,ft,At){G.setFromMatrixPosition(ft.matrixWorld),j.setFromMatrixPosition(At.matrixWorld);const $=G.distanceTo(j),dt=ft.projectionMatrix.elements,Nt=At.projectionMatrix.elements,Pt=dt[14]/(dt[10]-1),oe=dt[14]/(dt[10]+1),Ee=(dt[9]+1)/dt[5],Lt=(dt[9]-1)/dt[5],F=(dt[8]-1)/dt[0],ie=(Nt[8]+1)/Nt[0],Ot=Pt*F,le=Pt*ie,Gt=$/(-F+ie),_e=Gt*-F;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_e),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),dt[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Zt=Pt+Gt,I=oe+Gt,w=Ot-_e,nt=le+($-_e),vt=Ee*oe/I*Zt,Rt=Lt*oe/I*Zt;Z.projectionMatrix.makePerspective(w,nt,vt,Rt,Zt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ft=Z.near,At=Z.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(At=T.depthFar)),A.near=z.near=O.near=ft,A.far=z.far=O.far=At,(B!==A.near||W!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,W=A.far),O.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,A.layers.mask=O.layers.mask|z.layers.mask;const $=Z.parent,dt=A.cameras;Mt(A,$);for(let Nt=0;Nt<dt.length;Nt++)Mt(dt[Nt],$);dt.length===2?V(A,O,z):A.projectionMatrix.copy(O.projectionMatrix),wt(Z,A,$)};function wt(Z,ft,At){At===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ml*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(Z){p=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let H=null;function et(Z,ft){if(v=ft.getViewerPose(m||f),E=ft,v!==null){const At=v.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let $=!1;At.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let Pt=0;Pt<At.length;Pt++){const oe=At[Pt];let Ee=null;if(y!==null)Ee=y.getViewport(oe);else{const F=g.getViewSubImage(_,oe);Ee=F.viewport,Pt===0&&(t.setRenderTargetTextures(N,F.colorTexture,_.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(N))}let Lt=U[Pt];Lt===void 0&&(Lt=new _i,Lt.layers.enable(Pt),Lt.viewport=new an,U[Pt]=Lt),Lt.matrix.fromArray(oe.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(oe.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Pt===0&&(A.matrix.copy(Lt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),$===!0&&A.cameras.push(Lt)}const dt=l.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Pt=g.getDepthInformation(At[0]);Pt&&Pt.isValid&&Pt.texture&&T.init(t,Pt,l.renderState)}}for(let At=0;At<L.length;At++){const $=b[At],dt=L[At];$!==null&&dt!==void 0&&dt.update($,ft,m||f)}H&&H(Z,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const yt=new vx;yt.setAnimationLoop(et),this.setAnimationLoop=function(Z){H=Z},this.dispose=function(){}}}const Vs=new $i,S2=new Fe;function M2(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,sx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,N,L,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,b)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,N,L):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=t.get(x),L=N.envMap,b=N.envMapRotation;L&&(M.envMap.value=L,Vs.copy(b),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),M.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(Vs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,N,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const N=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function E2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const b=L.program;s.uniformBlockBinding(N,b)}function m(N,L){let b=l[N.id];b===void 0&&(E(N),b=v(N),l[N.id]=b,N.addEventListener("dispose",M));const P=L.program;s.updateUBOMapping(N,P);const C=t.render.frame;c[N.id]!==C&&(_(N),c[N.id]=C)}function v(N){const L=g();N.__bindingPointIndex=L;const b=r.createBuffer(),P=N.__size,C=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function g(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const L=l[N.id],b=N.uniforms,P=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let C=0,O=b.length;C<O;C++){const z=Array.isArray(b[C])?b[C]:[b[C]];for(let U=0,A=z.length;U<A;U++){const B=z[U];if(y(B,C,U,P)===!0){const W=B.__offset,tt=Array.isArray(B.value)?B.value:[B.value];let ut=0;for(let pt=0;pt<tt.length;pt++){const G=tt[pt],j=T(G);typeof G=="number"||typeof G=="boolean"?(B.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,W+ut,B.__data)):G.isMatrix3?(B.__data[0]=G.elements[0],B.__data[1]=G.elements[1],B.__data[2]=G.elements[2],B.__data[3]=0,B.__data[4]=G.elements[3],B.__data[5]=G.elements[4],B.__data[6]=G.elements[5],B.__data[7]=0,B.__data[8]=G.elements[6],B.__data[9]=G.elements[7],B.__data[10]=G.elements[8],B.__data[11]=0):(G.toArray(B.__data,ut),ut+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,L,b,P){const C=N.value,O=L+"_"+b;if(P[O]===void 0)return typeof C=="number"||typeof C=="boolean"?P[O]=C:P[O]=C.clone(),!0;{const z=P[O];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return P[O]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function E(N){const L=N.uniforms;let b=0;const P=16;for(let O=0,z=L.length;O<z;O++){const U=Array.isArray(L[O])?L[O]:[L[O]];for(let A=0,B=U.length;A<B;A++){const W=U[A],tt=Array.isArray(W.value)?W.value:[W.value];for(let ut=0,pt=tt.length;ut<pt;ut++){const G=tt[ut],j=T(G),V=b%P,Mt=V%j.boundary,wt=V+Mt;b+=Mt,wt!==0&&P-wt<j.storage&&(b+=P-wt),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=j.storage}}}const C=b%P;return C>0&&(b+=P-C),N.__size=b,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function M(N){const L=N.target;L.removeEventListener("dispose",M);const b=f.indexOf(L.__bindingPointIndex);f.splice(b,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:p,update:m,dispose:x}}class b2{constructor(t={}){const{canvas:i=VM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=gs,this.toneMappingExposure=1;const b=this;let P=!1,C=0,O=0,z=null,U=-1,A=null;const B=new an,W=new an;let tt=null;const ut=new Se(0);let pt=0,G=i.width,j=i.height,V=1,Mt=null,wt=null;const H=new an(0,0,G,j),et=new an(0,0,G,j);let yt=!1;const Z=new Mp;let ft=!1,At=!1;this.transmissionResolutionScale=1;const $=new Fe,dt=new Fe,Nt=new k,Pt=new an,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Lt(){return z===null?V:1}let F=s;function ie(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fp}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Ht,!1),F===null){const Q="webgl2";if(F=ie(Q,D),F===null)throw ie(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ot,le,Gt,_e,Zt,I,w,nt,vt,Rt,St,ee,zt,Yt,be,Dt,Kt,se,re,Wt,he,xe,ke,K;function Bt(){Ot=new OT(F),Ot.init(),xe=new g2(F,Ot),le=new wT(F,Ot,t,xe),Gt=new p2(F,Ot),le.reverseDepthBuffer&&_&&Gt.buffers.depth.setReversed(!0),_e=new IT(F),Zt=new e2,I=new m2(F,Ot,Gt,Zt,le,xe,_e),w=new CT(b),nt=new NT(b),vt=new k1(F),ke=new TT(F,vt),Rt=new PT(F,vt,_e,ke),St=new FT(F,Rt,vt,_e),re=new BT(F,le,I),Dt=new RT(Zt),ee=new t2(b,w,nt,Ot,le,ke,Dt),zt=new M2(b,Zt),Yt=new i2,be=new c2(Ot),se=new bT(b,w,nt,Gt,St,y,p),Kt=new h2(b,St,le),K=new E2(F,_e,le,Gt),Wt=new AT(F,Ot,_e),he=new zT(F,Ot,_e),_e.programs=ee.programs,b.capabilities=le,b.extensions=Ot,b.properties=Zt,b.renderLists=Yt,b.shadowMap=Kt,b.state=Gt,b.info=_e}Bt();const mt=new y2(b,F);this.xr=mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Ot.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ot.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(G,j,!1))},this.getSize=function(D){return D.set(G,j)},this.setSize=function(D,Q,st=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,j=Q,i.width=Math.floor(D*V),i.height=Math.floor(Q*V),st===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(G*V,j*V).floor()},this.setDrawingBufferSize=function(D,Q,st){G=D,j=Q,V=st,i.width=Math.floor(D*st),i.height=Math.floor(Q*st),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(H)},this.setViewport=function(D,Q,st,ct){D.isVector4?H.set(D.x,D.y,D.z,D.w):H.set(D,Q,st,ct),Gt.viewport(B.copy(H).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(et)},this.setScissor=function(D,Q,st,ct){D.isVector4?et.set(D.x,D.y,D.z,D.w):et.set(D,Q,st,ct),Gt.scissor(W.copy(et).multiplyScalar(V).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(D){Gt.setScissorTest(yt=D)},this.setOpaqueSort=function(D){Mt=D},this.setTransparentSort=function(D){wt=D},this.getClearColor=function(D){return D.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,st=!0){let ct=0;if(D){let Y=!1;if(z!==null){const Ut=z.texture.format;Y=Ut===_p||Ut===vp||Ut===gp}if(Y){const Ut=z.texture.type,Vt=Ut===Oa||Ut===Js||Ut===Sl||Ut===oo||Ut===dp||Ut===pp,kt=se.getClearColor(),jt=se.getClearAlpha(),pe=kt.r,me=kt.g,ue=kt.b;Vt?(E[0]=pe,E[1]=me,E[2]=ue,E[3]=jt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=pe,T[1]=me,T[2]=ue,T[3]=jt,F.clearBufferiv(F.COLOR,0,T))}else ct|=F.COLOR_BUFFER_BIT}Q&&(ct|=F.DEPTH_BUFFER_BIT),st&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Ht,!1),se.dispose(),Yt.dispose(),be.dispose(),Zt.dispose(),w.dispose(),nt.dispose(),St.dispose(),ke.dispose(),K.dispose(),ee.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",ea),mt.removeEventListener("sessionend",za),Jn.stop()};function bt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const D=_e.autoReset,Q=Kt.enabled,st=Kt.autoUpdate,ct=Kt.needsUpdate,Y=Kt.type;Bt(),_e.autoReset=D,Kt.enabled=Q,Kt.autoUpdate=st,Kt.needsUpdate=ct,Kt.type=Y}function Ht(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ae(D){const Q=D.target;Q.removeEventListener("dispose",ae),He(Q)}function He(D){Ct(D),Zt.remove(D)}function Ct(D){const Q=Zt.get(D).programs;Q!==void 0&&(Q.forEach(function(st){ee.releaseProgram(st)}),D.isShaderMaterial&&ee.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,st,ct,Y,Ut){Q===null&&(Q=oe);const Vt=Y.isMesh&&Y.matrixWorld.determinant()<0,kt=xs(D,Q,st,ct,Y);Gt.setMaterial(ct,Vt);let jt=st.index,pe=1;if(ct.wireframe===!0){if(jt=Rt.getWireframeAttribute(st),jt===void 0)return;pe=2}const me=st.drawRange,ue=st.attributes.position;let rt=me.start*pe,_t=(me.start+me.count)*pe;Ut!==null&&(rt=Math.max(rt,Ut.start*pe),_t=Math.min(_t,(Ut.start+Ut.count)*pe)),jt!==null?(rt=Math.max(rt,0),_t=Math.min(_t,jt.count)):ue!=null&&(rt=Math.max(rt,0),_t=Math.min(_t,ue.count));const $t=_t-rt;if($t<0||$t===1/0)return;ke.setup(Y,ct,kt,st,jt);let Qt,Xt=Wt;if(jt!==null&&(Qt=vt.get(jt),Xt=he,Xt.setIndex(Qt)),Y.isMesh)ct.wireframe===!0?(Gt.setLineWidth(ct.wireframeLinewidth*Lt()),Xt.setMode(F.LINES)):Xt.setMode(F.TRIANGLES);else if(Y.isLine){let It=ct.linewidth;It===void 0&&(It=1),Gt.setLineWidth(It*Lt()),Y.isLineSegments?Xt.setMode(F.LINES):Y.isLineLoop?Xt.setMode(F.LINE_LOOP):Xt.setMode(F.LINE_STRIP)}else Y.isPoints?Xt.setMode(F.POINTS):Y.isSprite&&Xt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const It=Y._multiDrawStarts,ge=Y._multiDrawCounts,ve=Y._multiDrawCount,Ge=jt?vt.get(jt).bytesPerElement:1,Ze=Zt.get(ct).currentProgram.getUniforms();for(let ye=0;ye<ve;ye++)Ze.setValue(F,"_gl_DrawID",ye),Xt.render(It[ye]/Ge,ge[ye])}else if(Y.isInstancedMesh)Xt.renderInstances(rt,$t,Y.count);else if(st.isInstancedBufferGeometry){const It=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ge=Math.min(st.instanceCount,It);Xt.renderInstances(rt,$t,ge)}else Xt.render(rt,$t)};function Le(D,Q,st){D.transparent===!0&&D.side===Zn&&D.forceSinglePass===!1?(D.side=Kn,D.needsUpdate=!0,cn(D,Q,st),D.side=vs,D.needsUpdate=!0,cn(D,Q,st),D.side=Zn):cn(D,Q,st)}this.compile=function(D,Q,st=null){st===null&&(st=D),x=be.get(st),x.init(Q),L.push(x),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),D!==st&&D.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const ct=new Set;return D.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ut=Y.material;if(Ut)if(Array.isArray(Ut))for(let Vt=0;Vt<Ut.length;Vt++){const kt=Ut[Vt];Le(kt,st,Y),ct.add(kt)}else Le(Ut,st,Y),ct.add(Ut)}),x=L.pop(),ct},this.compileAsync=function(D,Q,st=null){const ct=this.compile(D,Q,st);return new Promise(Y=>{function Ut(){if(ct.forEach(function(Vt){Zt.get(Vt).currentProgram.isReady()&&ct.delete(Vt)}),ct.size===0){Y(D);return}setTimeout(Ut,10)}Ot.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let _n=null;function Qn(D){_n&&_n(D)}function ea(){Jn.stop()}function za(){Jn.start()}const Jn=new vx;Jn.setAnimationLoop(Qn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(D){_n=D,mt.setAnimationLoop(D),D===null?Jn.stop():Jn.start()},mt.addEventListener("sessionstart",ea),mt.addEventListener("sessionend",za),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(Q),Q=mt.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,Q,z),x=be.get(D,L.length),x.init(Q),L.push(x),dt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Z.setFromProjectionMatrix(dt),At=this.localClippingEnabled,ft=Dt.init(this.clippingPlanes,At),M=Yt.get(D,N.length),M.init(),N.push(M),mt.enabled===!0&&mt.isPresenting===!0){const Ut=b.xr.getDepthSensingMesh();Ut!==null&&na(Ut,Q,-1/0,b.sortObjects)}na(D,Q,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(Mt,wt),Ee=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Ee&&se.addToRenderList(M,D),this.info.render.frame++,ft===!0&&Dt.beginShadows();const st=x.state.shadowsArray;Kt.render(st,D,Q),ft===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,Y=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const Ut=Q.cameras;if(Y.length>0)for(let Vt=0,kt=Ut.length;Vt<kt;Vt++){const jt=Ut[Vt];_s(ct,Y,D,jt)}Ee&&se.render(D);for(let Vt=0,kt=Ut.length;Vt<kt;Vt++){const jt=Ut[Vt];Ia(M,D,jt,jt.viewport)}}else Y.length>0&&_s(ct,Y,D,Q),Ee&&se.render(D),Ia(M,D,Q);z!==null&&O===0&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),D.isScene===!0&&D.onAfterRender(b,D,Q),ke.resetDefaultState(),U=-1,A=null,L.pop(),L.length>0?(x=L[L.length-1],ft===!0&&Dt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function na(D,Q,st,ct){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Z.intersectsSprite(D)){ct&&Pt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(dt);const Vt=St.update(D),kt=D.material;kt.visible&&M.push(D,Vt,kt,st,Pt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Z.intersectsObject(D))){const Vt=St.update(D),kt=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Pt.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Pt.copy(Vt.boundingSphere.center)),Pt.applyMatrix4(D.matrixWorld).applyMatrix4(dt)),Array.isArray(kt)){const jt=Vt.groups;for(let pe=0,me=jt.length;pe<me;pe++){const ue=jt[pe],rt=kt[ue.materialIndex];rt&&rt.visible&&M.push(D,Vt,rt,st,Pt.z,ue)}}else kt.visible&&M.push(D,Vt,kt,st,Pt.z,null)}}const Ut=D.children;for(let Vt=0,kt=Ut.length;Vt<kt;Vt++)na(Ut[Vt],Q,st,ct)}function Ia(D,Q,st,ct){const Y=D.opaque,Ut=D.transmissive,Vt=D.transparent;x.setupLightsView(st),ft===!0&&Dt.setGlobalState(b.clippingPlanes,st),ct&&Gt.viewport(B.copy(ct)),Y.length>0&&ia(Y,Q,st),Ut.length>0&&ia(Ut,Q,st),Vt.length>0&&ia(Vt,Q,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function _s(D,Q,st,ct){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new $s(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?bl:Oa,minFilter:Qs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Ut=x.state.transmissionRenderTarget[ct.id],Vt=ct.viewport||B;Ut.setSize(Vt.z*b.transmissionResolutionScale,Vt.w*b.transmissionResolutionScale);const kt=b.getRenderTarget();b.setRenderTarget(Ut),b.getClearColor(ut),pt=b.getClearAlpha(),pt<1&&b.setClearColor(16777215,.5),b.clear(),Ee&&se.render(st);const jt=b.toneMapping;b.toneMapping=gs;const pe=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),ft===!0&&Dt.setGlobalState(b.clippingPlanes,ct),ia(D,st,ct),I.updateMultisampleRenderTarget(Ut),I.updateRenderTargetMipmap(Ut),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let ue=0,rt=Q.length;ue<rt;ue++){const _t=Q[ue],$t=_t.object,Qt=_t.geometry,Xt=_t.material,It=_t.group;if(Xt.side===Zn&&$t.layers.test(ct.layers)){const ge=Xt.side;Xt.side=Kn,Xt.needsUpdate=!0,oi($t,st,ct,Qt,Xt,It),Xt.side=ge,Xt.needsUpdate=!0,me=!0}}me===!0&&(I.updateMultisampleRenderTarget(Ut),I.updateRenderTargetMipmap(Ut))}b.setRenderTarget(kt),b.setClearColor(ut,pt),pe!==void 0&&(ct.viewport=pe),b.toneMapping=jt}function ia(D,Q,st){const ct=Q.isScene===!0?Q.overrideMaterial:null;for(let Y=0,Ut=D.length;Y<Ut;Y++){const Vt=D[Y],kt=Vt.object,jt=Vt.geometry,pe=ct===null?Vt.material:ct,me=Vt.group;kt.layers.test(st.layers)&&oi(kt,Q,st,jt,pe,me)}}function oi(D,Q,st,ct,Y,Ut){D.onBeforeRender(b,Q,st,ct,Y,Ut),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Y.onBeforeRender(b,Q,st,ct,D,Ut),Y.transparent===!0&&Y.side===Zn&&Y.forceSinglePass===!1?(Y.side=Kn,Y.needsUpdate=!0,b.renderBufferDirect(st,Q,ct,Y,D,Ut),Y.side=vs,Y.needsUpdate=!0,b.renderBufferDirect(st,Q,ct,Y,D,Ut),Y.side=Zn):b.renderBufferDirect(st,Q,ct,Y,D,Ut),D.onAfterRender(b,Q,st,ct,Y,Ut)}function cn(D,Q,st){Q.isScene!==!0&&(Q=oe);const ct=Zt.get(D),Y=x.state.lights,Ut=x.state.shadowsArray,Vt=Y.state.version,kt=ee.getParameters(D,Y.state,Ut,Q,st),jt=ee.getProgramCacheKey(kt);let pe=ct.programs;ct.environment=D.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(D.isMeshStandardMaterial?nt:w).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,pe===void 0&&(D.addEventListener("dispose",ae),pe=new Map,ct.programs=pe);let me=pe.get(jt);if(me!==void 0){if(ct.currentProgram===me&&ct.lightsStateVersion===Vt)return yi(D,kt),me}else kt.uniforms=ee.getUniforms(D),D.onBeforeCompile(kt,b),me=ee.acquireProgram(kt,jt),pe.set(jt,me),ct.uniforms=kt.uniforms;const ue=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ue.clippingPlanes=Dt.uniform),yi(D,kt),ct.needsLights=ar(D),ct.lightsStateVersion=Vt,ct.needsLights&&(ue.ambientLightColor.value=Y.state.ambient,ue.lightProbe.value=Y.state.probe,ue.directionalLights.value=Y.state.directional,ue.directionalLightShadows.value=Y.state.directionalShadow,ue.spotLights.value=Y.state.spot,ue.spotLightShadows.value=Y.state.spotShadow,ue.rectAreaLights.value=Y.state.rectArea,ue.ltc_1.value=Y.state.rectAreaLTC1,ue.ltc_2.value=Y.state.rectAreaLTC2,ue.pointLights.value=Y.state.point,ue.pointLightShadows.value=Y.state.pointShadow,ue.hemisphereLights.value=Y.state.hemi,ue.directionalShadowMap.value=Y.state.directionalShadowMap,ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ue.spotShadowMap.value=Y.state.spotShadowMap,ue.spotLightMatrix.value=Y.state.spotLightMatrix,ue.spotLightMap.value=Y.state.spotLightMap,ue.pointShadowMap.value=Y.state.pointShadowMap,ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),ct.currentProgram=me,ct.uniformsList=null,me}function bn(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=hu.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function yi(D,Q){const st=Zt.get(D);st.outputColorSpace=Q.outputColorSpace,st.batching=Q.batching,st.batchingColor=Q.batchingColor,st.instancing=Q.instancing,st.instancingColor=Q.instancingColor,st.instancingMorph=Q.instancingMorph,st.skinning=Q.skinning,st.morphTargets=Q.morphTargets,st.morphNormals=Q.morphNormals,st.morphColors=Q.morphColors,st.morphTargetsCount=Q.morphTargetsCount,st.numClippingPlanes=Q.numClippingPlanes,st.numIntersection=Q.numClipIntersection,st.vertexAlphas=Q.vertexAlphas,st.vertexTangents=Q.vertexTangents,st.toneMapping=Q.toneMapping}function xs(D,Q,st,ct,Y){Q.isScene!==!0&&(Q=oe),I.resetTextureUnits();const Ut=Q.fog,Vt=ct.isMeshStandardMaterial?Q.environment:null,kt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:co,jt=(ct.isMeshStandardMaterial?nt:w).get(ct.envMap||Vt),pe=ct.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,me=!!st.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),ue=!!st.morphAttributes.position,rt=!!st.morphAttributes.normal,_t=!!st.morphAttributes.color;let $t=gs;ct.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&($t=b.toneMapping);const Qt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Xt=Qt!==void 0?Qt.length:0,It=Zt.get(ct),ge=x.state.lights;if(ft===!0&&(At===!0||D!==A)){const un=D===A&&ct.id===U;Dt.setState(ct,D,un)}let ve=!1;ct.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ge.state.version||It.outputColorSpace!==kt||Y.isBatchedMesh&&It.batching===!1||!Y.isBatchedMesh&&It.batching===!0||Y.isBatchedMesh&&It.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&It.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||Y.isInstancedMesh&&It.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&It.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&It.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&It.instancingMorph===!1&&Y.morphTexture!==null||It.envMap!==jt||ct.fog===!0&&It.fog!==Ut||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Dt.numPlanes||It.numIntersection!==Dt.numIntersection)||It.vertexAlphas!==pe||It.vertexTangents!==me||It.morphTargets!==ue||It.morphNormals!==rt||It.morphColors!==_t||It.toneMapping!==$t||It.morphTargetsCount!==Xt)&&(ve=!0):(ve=!0,It.__version=ct.version);let Ge=It.currentProgram;ve===!0&&(Ge=cn(ct,Q,Y));let Ze=!1,ye=!1,Ke=!1;const Ie=Ge.getUniforms(),Dn=It.uniforms;if(Gt.useProgram(Ge.program)&&(Ze=!0,ye=!0,Ke=!0),ct.id!==U&&(U=ct.id,ye=!0),Ze||A!==D){Gt.buffers.depth.getReversed()?($.copy(D.projectionMatrix),XM($),WM($),Ie.setValue(F,"projectionMatrix",$)):Ie.setValue(F,"projectionMatrix",D.projectionMatrix),Ie.setValue(F,"viewMatrix",D.matrixWorldInverse);const sn=Ie.map.cameraPosition;sn!==void 0&&sn.setValue(F,Nt.setFromMatrixPosition(D.matrixWorld)),le.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,ye=!0,Ke=!0)}if(Y.isSkinnedMesh){Ie.setOptional(F,Y,"bindMatrix"),Ie.setOptional(F,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ie.setValue(F,"boneTexture",un.boneTexture,I))}Y.isBatchedMesh&&(Ie.setOptional(F,Y,"batchingTexture"),Ie.setValue(F,"batchingTexture",Y._matricesTexture,I),Ie.setOptional(F,Y,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",Y._indirectTexture,I),Ie.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",Y._colorsTexture,I));const Un=st.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&re.update(Y,st,Ge),(ye||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,Ie.setValue(F,"receiveShadow",Y.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Dn.envMap.value=jt,Dn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(Dn.envMapIntensity.value=Q.environmentIntensity),ye&&(Ie.setValue(F,"toneMappingExposure",b.toneMappingExposure),It.needsLights&&ir(Dn,Ke),Ut&&ct.fog===!0&&zt.refreshFogUniforms(Dn,Ut),zt.refreshMaterialUniforms(Dn,ct,V,j,x.state.transmissionRenderTarget[D.id]),hu.upload(F,bn(It),Dn,I)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(hu.upload(F,bn(It),Dn,I),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ie.setValue(F,"center",Y.center),Ie.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ie.setValue(F,"normalMatrix",Y.normalMatrix),Ie.setValue(F,"modelMatrix",Y.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const un=ct.uniformsGroups;for(let sn=0,$n=un.length;sn<$n;sn++){const hn=un[sn];K.update(hn,Ge),K.bind(hn,Ge)}}return Ge}function ir(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function ar(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(D,Q,st){Zt.get(D.texture).__webglTexture=Q,Zt.get(D.depthTexture).__webglTexture=st;const ct=Zt.get(D);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=st===void 0,ct.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Q){const st=Zt.get(D);st.__webglFramebuffer=Q,st.__useDefaultFramebuffer=Q===void 0};const sr=F.createFramebuffer();this.setRenderTarget=function(D,Q=0,st=0){z=D,C=Q,O=st;let ct=!0,Y=null,Ut=!1,Vt=!1;if(D){const jt=Zt.get(D);if(jt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(jt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(jt.__hasExternalTextures)I.rebindTextures(D,Zt.get(D.texture).__webglTexture,Zt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ue=D.depthTexture;if(jt.__boundDepthTexture!==ue){if(ue!==null&&Zt.has(ue)&&(D.width!==ue.image.width||D.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}const pe=D.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Vt=!0);const me=Zt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(me[Q])?Y=me[Q][st]:Y=me[Q],Ut=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?Y=Zt.get(D).__webglMultisampledFramebuffer:Array.isArray(me)?Y=me[st]:Y=me,B.copy(D.viewport),W.copy(D.scissor),tt=D.scissorTest}else B.copy(H).multiplyScalar(V).floor(),W.copy(et).multiplyScalar(V).floor(),tt=yt;if(st!==0&&(Y=sr),Gt.bindFramebuffer(F.FRAMEBUFFER,Y)&&ct&&Gt.drawBuffers(D,Y),Gt.viewport(B),Gt.scissor(W),Gt.setScissorTest(tt),Ut){const jt=Zt.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,jt.__webglTexture,st)}else if(Vt){const jt=Zt.get(D.texture),pe=Q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,st,pe)}else if(D!==null&&st!==0){const jt=Zt.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(D,Q,st,ct,Y,Ut,Vt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Zt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){Gt.bindFramebuffer(F.FRAMEBUFFER,kt);try{const jt=D.texture,pe=jt.format,me=jt.type;if(!le.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ct&&st>=0&&st<=D.height-Y&&F.readPixels(Q,st,ct,Y,xe.convert(pe),xe.convert(me),Ut)}finally{const jt=z!==null?Zt.get(z).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(D,Q,st,ct,Y,Ut,Vt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Zt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){const jt=D.texture,pe=jt.format,me=jt.type;if(!le.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=D.width-ct&&st>=0&&st<=D.height-Y){Gt.bindFramebuffer(F.FRAMEBUFFER,kt);const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,Ut.byteLength,F.STREAM_READ),F.readPixels(Q,st,ct,Y,xe.convert(pe),xe.convert(me),0);const rt=z!==null?Zt.get(z).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,rt);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kM(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ut),F.deleteBuffer(ue),F.deleteSync(_t),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Q=null,st=0){D.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,D=arguments[1]);const ct=Math.pow(2,-st),Y=Math.floor(D.image.width*ct),Ut=Math.floor(D.image.height*ct),Vt=Q!==null?Q.x:0,kt=Q!==null?Q.y:0;I.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Vt,kt,Y,Ut),Gt.unbindTexture()};const aa=F.createFramebuffer(),ys=F.createFramebuffer();this.copyTextureToTexture=function(D,Q,st=null,ct=null,Y=0,Ut=null){D.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,D=arguments[1],Q=arguments[2],Ut=arguments[3]||0,st=null),Ut===null&&(Y!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Y,Y=0):Ut=0);let Vt,kt,jt,pe,me,ue,rt,_t,$t;const Qt=D.isCompressedTexture?D.mipmaps[Ut]:D.image;if(st!==null)Vt=st.max.x-st.min.x,kt=st.max.y-st.min.y,jt=st.isBox3?st.max.z-st.min.z:1,pe=st.min.x,me=st.min.y,ue=st.isBox3?st.min.z:0;else{const Un=Math.pow(2,-Y);Vt=Math.floor(Qt.width*Un),kt=Math.floor(Qt.height*Un),D.isDataArrayTexture?jt=Qt.depth:D.isData3DTexture?jt=Math.floor(Qt.depth*Un):jt=1,pe=0,me=0,ue=0}ct!==null?(rt=ct.x,_t=ct.y,$t=ct.z):(rt=0,_t=0,$t=0);const Xt=xe.convert(Q.format),It=xe.convert(Q.type);let ge;Q.isData3DTexture?(I.setTexture3D(Q,0),ge=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(I.setTexture2DArray(Q,0),ge=F.TEXTURE_2D_ARRAY):(I.setTexture2D(Q,0),ge=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const ve=F.getParameter(F.UNPACK_ROW_LENGTH),Ge=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ze=F.getParameter(F.UNPACK_SKIP_PIXELS),ye=F.getParameter(F.UNPACK_SKIP_ROWS),Ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Qt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);const Ie=D.isDataArrayTexture||D.isData3DTexture,Dn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const Un=Zt.get(D),un=Zt.get(Q),sn=Zt.get(Un.__renderTarget),$n=Zt.get(un.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,sn.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let hn=0;hn<jt;hn++)Ie&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(D).__webglTexture,Y,ue+hn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(Q).__webglTexture,Ut,$t+hn)),F.blitFramebuffer(pe,me,Vt,kt,rt,_t,Vt,kt,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||D.isRenderTargetTexture||Zt.has(D)){const Un=Zt.get(D),un=Zt.get(Q);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,aa),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ys);for(let sn=0;sn<jt;sn++)Ie?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,Y,ue+sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,Y),Dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Ut,$t+sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Ut),Y!==0?F.blitFramebuffer(pe,me,Vt,kt,rt,_t,Vt,kt,F.COLOR_BUFFER_BIT,F.NEAREST):Dn?F.copyTexSubImage3D(ge,Ut,rt,_t,$t+sn,pe,me,Vt,kt):F.copyTexSubImage2D(ge,Ut,rt,_t,pe,me,Vt,kt);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Dn?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(ge,Ut,rt,_t,$t,Vt,kt,jt,Xt,It,Qt.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(ge,Ut,rt,_t,$t,Vt,kt,jt,Xt,Qt.data):F.texSubImage3D(ge,Ut,rt,_t,$t,Vt,kt,jt,Xt,It,Qt):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ut,rt,_t,Vt,kt,Xt,It,Qt.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ut,rt,_t,Qt.width,Qt.height,Xt,Qt.data):F.texSubImage2D(F.TEXTURE_2D,Ut,rt,_t,Vt,kt,Xt,It,Qt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ze),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke),Ut===0&&Q.generateMipmaps&&F.generateMipmap(ge),Gt.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,st=null,ct=null,Y=0){return D.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ct=arguments[1]||null,D=arguments[2],Q=arguments[3],Y=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Q,st,ct,Y)},this.initRenderTarget=function(D){Zt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Gt.unbindTexture()},this.resetState=function(){C=0,O=0,z=null,Gt.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return La}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=qe._getUnpackColorSpace()}}const Ii=0,Di=.54,Mx=1.86,Zs=Mx/2,pd=30,md=118,T2=1.2,gd=1/120,A2=16.4,vd=24.2,w2=112,R2=148,C2=176,D2=86,U2=19.4,L2=31.2,U_=27,L_=39,N2=3.05,O2=1.9,P2=13.45,z2=.2,_d=.16,I2=.185,B2=.68,F2=1.11,H2=.52,Ex=new k(14,Zs+.03,5),N_=126,xd=20,$r=new k(0,1,0),Da=r=>({x:r.x,y:r.y,z:r.z}),we=(r,t,i)=>Math.max(t,Math.min(i,r)),Ve=(r,t,i,s)=>$_.lerp(r,t,1-Math.exp(-i*s));function De(r,t){const i=Math.sin(r*127.1+t*311.7)*43758.5453123;return i-Math.floor(i)}function G2(r){const t=document.createElement("canvas");t.width=160,t.height=320;const i=t.getContext("2d"),s=r%4===0||r%7===0,l=i.createLinearGradient(0,0,160,320);l.addColorStop(0,r%3===0?"#1a2b3e":"#14263a"),l.addColorStop(.52,"#0d1725"),l.addColorStop(1,"#070d16"),i.fillStyle=l,i.fillRect(0,0,160,320),i.fillStyle="rgba(122,170,205,.055)";for(let f=0;f<160;f+=20)i.fillRect(f,0,1,320);for(let f=0;f<320;f+=20)i.fillRect(0,f,160,1);i.fillStyle="rgba(205,236,255,.035)";for(let f=40;f<320;f+=80)i.fillRect(0,f,160,2);for(let f=7;f<312;f+=16)for(let h=7;h<152;h+=16){const p=De(h+r*17,f+r*11),m=p>.51,v=.38+p*.42;i.fillStyle=m?s?`rgba(255,197,118,${v})`:`rgba(100,220,255,${v})`:`rgba(45,73,98,${.19+p*.17})`;const g=p>.83?1:0;i.fillRect(h+g,f+g,8-g,10-g),m&&p>.79&&(i.fillStyle=s?"rgba(255,228,181,.24)":"rgba(196,248,255,.22)",i.fillRect(h+1,f+1,6,1))}for(let f=0;f<3;f++){const h=De(r*13+f,r*7);if(h>.42){const p=34+Math.floor(h*14)*16;i.fillStyle=s?"rgba(255,143,91,.14)":"rgba(73,222,255,.13)",i.fillRect(0,p,160,2)}}const c=new lx(t);return c.wrapS=yl,c.wrapT=yl,c.anisotropy=8,c.colorSpace=Yn,c}function V2(r){const t=new gt(new vi(286,286),new On({color:593944,roughness:.82,metalness:.12}));t.rotation.x=-Math.PI/2,t.position.y=Ii,t.receiveShadow=!0,r.add(t);const i=new On({color:594717,roughness:.5,metalness:.34}),s=new On({color:1779762,roughness:.76,metalness:.14}),l=new vn({color:13822191,transparent:!0,opacity:.28}),c=new vn({color:5823733,transparent:!0,opacity:.18}),f=new vn({color:16752743,transparent:!0,opacity:.14}),h=[-98,-84,-56,-28,0,28,56,84,98];for(const p of h){const m=new gt(new vi(8.2,274),i);m.rotation.x=-Math.PI/2,m.position.set(p,.012,0),r.add(m);const v=new gt(new vi(274,8.2),i);v.rotation.x=-Math.PI/2,v.position.set(0,.014,p),r.add(v)}for(let p=-116;p<=116;p+=8)for(const m of[-84,-56,-28,0,28,56,84]){const v=new gt(new vi(.11,3.35),l);v.rotation.x=-Math.PI/2,v.position.set(m,.026,p),r.add(v);const g=new gt(new vi(3.35,.11),l);g.rotation.x=-Math.PI/2,g.position.set(p,.028,m),r.add(g)}for(const p of[-56,0,56])for(const m of[-56,0,56])for(let v=-3;v<=3;v++){const g=new gt(new vi(.46,3.2),l);g.rotation.x=-Math.PI/2,g.position.set(p+v*.72,.031,m+5.2),r.add(g)}for(const p of[-1,1]){const m=new gt(new vi(.08,258),c);m.rotation.x=-Math.PI/2,m.position.set(p*4.15,.034,0),r.add(m)}for(const p of[-1,1]){const m=new gt(new vi(258,.06),f);m.rotation.x=-Math.PI/2,m.position.set(0,.035,p*28+4.14),r.add(m)}return{sidewalkMat:s}}function k2(r,t){const i=document.createElement("canvas");i.width=384,i.height=128;const s=i.getContext("2d"),l=t==="cyan"?{main:"#8ff5ff",soft:"#1dd7f1"}:t==="pink"?{main:"#ff91b8",soft:"#f13478"}:{main:"#ffd091",soft:"#ff914d"};s.fillStyle="rgba(3,8,16,.88)",s.fillRect(0,0,i.width,i.height);const c=s.createLinearGradient(0,0,i.width,0);c.addColorStop(0,"rgba(255,255,255,.02)"),c.addColorStop(.5,`${l.soft}33`),c.addColorStop(1,"rgba(255,255,255,.015)"),s.fillStyle=c,s.fillRect(0,0,i.width,i.height),s.strokeStyle=`${l.soft}66`,s.lineWidth=3,s.strokeRect(7,7,i.width-14,i.height-14),s.fillStyle=l.main,s.shadowColor=l.soft,s.shadowBlur=20,s.font="900 49px Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(r,i.width/2,i.height/2+2),s.shadowBlur=0,s.fillStyle="rgba(255,255,255,.5)",s.fillRect(22,22,44,3),s.fillRect(i.width-66,i.height-25,44,3);const f=new lx(i);return f.colorSpace=Yn,f.anisotropy=8,f}function X2(r,t){const i=[],s=[],l=[],c=[-70,-42,-14,14,42,70],f=[6220031,16736167,16760167].map(P=>new On({color:P,emissive:P,emissiveIntensity:1.55,roughness:.24,metalness:.3})),h=new On({color:1121578,roughness:.34,metalness:.7}),p=new On({color:2438982,roughness:.48,metalness:.54}),m=new px({color:7453394,roughness:.16,metalness:.08,transmission:.06,transparent:!0,opacity:.46,clearcoat:.65,clearcoatRoughness:.2}),v=[],g=[],_=[];if(c.forEach((P,C)=>{c.forEach((O,z)=>{const U=De(C+1,z+2),A=14.6+De(C*3+4,z+1)*5.2,B=14.6+De(C+2,z*4+8)*5.2;let W=23+U*43;const tt=P===14&&O===-14,ut=P===-42&&O===42,pt=P===42&&O===42;tt&&(W=94),ut&&(W=76),pt&&(W=72);const G=`building-${C}-${z}`,j=G2(C*10+z+1);j.repeat.set(Math.max(1.5,A/9),Math.max(2.5,W/12));const V=.55+De(C+6,z+3)*.1,Mt=new On({color:new Se().setHSL(V,.25,.145+U*.065),roughness:.48,metalness:.34,map:j,emissiveMap:j,emissive:new Se(W2(C,z)),emissiveIntensity:.28});l.push(Mt);const wt=new gt(new te(A,W,B),Mt);wt.position.set(P,W/2,O),wt.castShadow=W<82,wt.receiveShadow=!0,wt.userData.buildingId=G,r.add(wt);const H=new k(P-A/2,Ii,O-B/2),et=new k(P+A/2,W,O+B/2);i.push({id:G,min:Da(H),max:Da(et),mesh:wt}),s.push(wt);const yt=new gt(new te(A+3.2,.2,B+3.2),t);yt.position.set(P,.1,O),yt.receiveShadow=!0,r.add(yt);const Z=(C*2+z)%f.length,ft=f[Z],At=2.2+De(C+4,z+8)*2.2,$=new gt(new te(A+1.25,At,B+1.25),h);$.position.set(P,At/2+.12,O),$.castShadow=!0,r.add($);const dt=Math.max(8,W-At*.55),Nt=.38+De(C+41,z+23)*.22;for(const Lt of[-1,1])for(const F of[-1,1])if(Lt===1&&F===1||W>52){const ie=new gt(new te(Nt,dt,Nt),h);ie.position.set(P+Lt*(A/2-Nt*.46),At+dt/2-.08,O+F*(B/2-Nt*.46)),ie.castShadow=W<72,r.add(ie)}if(W>48){const Lt=W*(.54+De(C+18,z+29)*.08),F=new gt(new te(A+.72,.46,B+.72),p);F.position.set(P,Lt,O),F.castShadow=!1,r.add(F);const ie=new gt(new te(A*.9,.14,B*.9),ft);ie.position.set(P,Lt+.29,O),r.add(ie)}if(W>38){const Lt=2.1+De(C+12,z+2)*3.2,F=new gt(new te(A*.76,Lt,B*.76),p);F.position.set(P,W-Lt/2+.12,O),F.castShadow=!0,r.add(F)}const Pt=new gt(new te(A+.09,.15,B+.09),ft);Pt.position.set(P,W-.075,O),r.add(Pt);const oe=W>55?4:2;for(let Lt=0;Lt<oe;Lt++){const F=Lt%2===0?-1:1,ie=Lt<2,Ot=W*(.52+De(C+Lt*2,z+Lt*4)*.22),le=new gt(ie?new te(.13,Ot,.42):new te(.42,Ot,.13),h);ie?le.position.set(P+F*(A/2-.5),W-Ot/2-1.1,O-B/2-.11):le.position.set(P+A/2+.11,W-Ot/2-1.1,O+F*(B/2-.5)),r.add(le)}if((C+z)%2===0||W>62){const Lt=new vn({color:ft.color,transparent:!0,opacity:W>68?.72:.42,toneMapped:!1}),F=Math.min(W*.68,48);for(const ie of[-1,1]){const Ot=new gt(new te(.075,F,.075),Lt);Ot.position.set(P+ie*(A/2-.06),W-F/2-.26,O-B/2+.04),r.add(Ot)}}const Ee=W>55?2:1;for(let Lt=0;Lt<Ee;Lt++){const F=W*(.34+Lt*.26+De(C+Lt,z+5)*.05),ie=new gt(new te(A+.04,.12,B+.04),ft);ie.position.set(P,Math.min(F,W-4),O),ie.scale.set(1,.62,1),r.add(ie)}if((C*3+z)%5===0&&!tt){const Lt=new gt(new te(A*.52,2.8,B*.52),m);Lt.position.set(P,W+1.25,O),r.add(Lt);const F=new gt(new te(A*.56,.12,B*.56),ft);F.position.set(P,W+2.65,O),r.add(F)}if(W>32&&!tt&&(v.push({x:P+(De(C+31,z+17)-.5)*A*.34,y:W+.48,z:O+(De(C+9,z+25)-.5)*B*.34,sx:.7+De(C+22,z+6)*.7,sz:.7+De(C+5,z+33)*.7}),((C+z)%3===0||W>63)&&_.push({x:P+(De(C+71,z+13)-.5)*A*.22,y:W+1.2,z:O+(De(C+37,z+61)-.5)*B*.22,h:2.8+De(C+44,z+82)*5.6})),(C+z*2)%7===0&&W>38){const Lt=Z===0?"cyan":Z===1?"pink":"amber";g.push({x:P,y:Math.min(W*.62,W-5),z:O-B/2-.07,rotY:0,label:["N//04","THREAD","AXIS","VANTA","GRID"][Math.abs(C*2+z)%5],hue:Lt})}if(tt){const Lt=new Hi,F=new gt(new Zi(4.2,.16,10,48),f[0]);F.rotation.x=Math.PI/2,F.position.y=1.4,Lt.add(F);const ie=new gt(new Zi(2.65,.09,8,36),f[1]);ie.rotation.x=Math.PI/2,ie.position.y=5.1,Lt.add(ie);const Ot=new gt(new fo(2.35,1),h);Ot.scale.set(.68,2.45,.68),Ot.position.y=4.25,Ot.rotation.y=Math.PI/4,Lt.add(Ot);const le=new gt(new fo(1.25,0),m);le.scale.set(.58,2.25,.58),le.position.y=4.25,le.rotation.y=Math.PI/4,Lt.add(le);const Gt=new gt(new ri(.09,.18,12,10),f[0]);Gt.position.y=10.5,Lt.add(Gt),Lt.position.set(P,W,O),r.add(Lt)}if(ut||pt){const Lt=new Hi,F=f[ut?1:2];for(const Ot of[-1,1]){const le=new gt(new Ua(1.32,7.8,4),F);le.position.set(Ot*A*.24,3.6,0),le.rotation.y=Math.PI/4,Lt.add(le);const Gt=new gt(new te(.14,5.1,A*.16),h);Gt.position.set(Ot*A*.18,2.8,0),Lt.add(Gt)}const ie=new gt(new te(A*.5,.38,1.15),m);ie.position.y=1.1,Lt.add(ie),Lt.position.set(P,W,O),r.add(Lt)}})}),v.length){const P=new te(1.55,.85,1.35),C=new ps(P,p,v.length),O=new Fe,z=new k,U=new Gi,A=new k;v.forEach((B,W)=>{z.set(B.x,B.y,B.z),A.set(B.sx,1,B.sz),O.compose(z,U,A),C.setMatrixAt(W,O)}),C.castShadow=!0,C.receiveShadow=!0,r.add(C)}if(_.length){const P=new ri(.055,.09,1,7),C=new ps(P,h,_.length),O=new ps(new jn(.11,8,6),f[0],_.length),z=new Fe,U=new Gi,A=new k;_.forEach((B,W)=>{z.compose(new k(B.x,B.y+B.h/2,B.z),U,A.set(1,B.h,1)),C.setMatrixAt(W,z),z.compose(new k(B.x,B.y+B.h,B.z),U,A.set(1,1,1)),O.setMatrixAt(W,z)}),r.add(C,O)}g.forEach(P=>{const C=k2(P.label,P.hue),O=new vn({map:C,transparent:!0,opacity:.88,toneMapped:!1,depthWrite:!1,side:Zn}),z=new gt(new vi(5.2,1.72),O);z.position.set(P.x,P.y,P.z),z.rotation.y=P.rotY,z.renderOrder=2,r.add(z)});const y=[];for(const P of[-84,-56,-28,0,28,56,84])for(let C=-108;C<=108;C+=18)y.push(new k(P+5.25,1.9,C));const E=new ps(new ri(.055,.075,3.8,7),h,y.length),T=new ps(new te(.34,.12,.72),f[0],y.length),M=new Fe,x=new Gi,N=new k(1,1,1);y.forEach((P,C)=>{M.compose(P,x,N),E.setMatrixAt(C,M),M.compose(new k(P.x,P.y+1.88,P.z),x,N),T.setMatrixAt(C,M)}),r.add(E,T);const L=new On({color:8711679,emissive:1933213,emissiveIntensity:2.4,metalness:.76,roughness:.18,transparent:!0,opacity:.9}),b=new Hi;for(const P of[-.32,.32]){const C=new gt(new te(18,.16,.16),L);C.position.y=P,b.add(C)}for(let P=-8.2;P<=8.2;P+=2.05){const C=new gt(new te(.11,.72,.11),h);C.position.x=P,C.rotation.z=P%4.1===0?.34:-.34,b.add(C)}return b.position.set(0,35,42),r.add(b),{buildings:i,raycastMeshes:s,facadeMaterials:l}}function W2(r,t){const i=Math.floor(De(r+3,t+9)*3);return i===0?1589076:i===1?4335166:4011292}function q2(r){const t={topColor:{value:new Se(3570586)},horizonColor:{value:new Se(10209745)},bottomColor:{value:new Se(14862512)}},i=new Pa({uniforms:t,side:Kn,depthWrite:!1,vertexShader:`
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
      uniform vec3 bottomColor;
      void main() {
        float h = normalize(vWorldPosition).y * 0.5 + 0.5;
        vec3 lower = mix(bottomColor, horizonColor, smoothstep(0.18, 0.54, h));
        vec3 color = mix(lower, topColor, smoothstep(0.5, 0.98, h));
        gl_FragColor = vec4(color, 1.0);
      }
    `}),s=new gt(new jn(320,32,20),i);return s.renderOrder=-20,r.add(s),t}function Y2(r){const i=new te(1,1,1),s=new On({color:1385779,roughness:.72,metalness:.18}),l=new ps(i,s,86),c=new Fe,f=new k,h=new Gi,p=new k;for(let g=0;g<86;g++){const _=g/86*Math.PI*2+De(g,77)*.12,y=142+De(g,29)*52,E=5+De(g,31)*9,T=5+De(g,41)*8,M=12+Math.pow(De(g,53),.72)*54;f.set(Math.cos(_)*y,M/2-.2,Math.sin(_)*y),h.setFromAxisAngle($r,-_+De(g,61)*.22),p.set(E,M,T),c.compose(f,h,p),l.setMatrixAt(g,c)}l.receiveShadow=!1,l.castShadow=!1,r.add(l);const m=new vn({color:6744575,transparent:!0,opacity:.22,toneMapped:!1}),v=new ps(new te(.08,6,.08),m,22);for(let g=0;g<22;g++){const _=g/22*Math.PI*2+De(g,91)*.16,y=148+De(g,93)*37,E=22+De(g,97)*34;f.set(Math.cos(_)*y,E,Math.sin(_)*y),h.identity(),p.set(1,1,1),c.compose(f,h,p),v.setMatrixAt(g,c)}r.add(v)}function j2(r){const t=q2(r);Y2(r);const i=new wn,s=[];for(let E=0;E<620;E++){const T=118+De(E,E*3)*86,M=De(E*2,7)*Math.PI*2,x=38+De(E*5,11)*126;s.push(Math.cos(M)*T,x,Math.sin(M)*T)}i.setAttribute("position",new je(s,3));const l=new sp({color:14678015,size:.46,transparent:!0,opacity:0,depthWrite:!1}),c=new op(i,l);r.add(c);const f=new wn,h=[];for(let E=0;E<180;E++){const T=De(E,19)*Math.PI*2,M=35+De(E,31)*108;h.push(Math.cos(T)*M,4+De(E*7,3)*56,Math.sin(T)*M)}f.setAttribute("position",new je(h,3));const p=new sp({color:12120063,size:.33,transparent:!0,opacity:.14,depthWrite:!1}),m=new op(f,p);r.add(m);const v=new gt(new jn(5.3,24,16),new vn({color:15332607,transparent:!0,opacity:0}));v.position.set(-92,112,-138),r.add(v);const g=new gt(new El(6.4,9.8,48),new vn({color:10209279,transparent:!0,opacity:0,side:Zn,depthWrite:!1}));g.position.copy(v.position),g.lookAt(0,50,0),r.add(g);const _=new gt(new jn(7.8,24,16),new vn({color:16771011,transparent:!0,opacity:.8}));_.position.set(118,116,-142),r.add(_);const y=new gt(new El(9.4,16,48),new vn({color:16767405,transparent:!0,opacity:.16,side:Zn,depthWrite:!1}));return y.position.copy(_.position),y.lookAt(0,50,0),r.add(y),{starMat:l,moon:v.material,moonHalo:g.material,sun:_.material,sunHalo:y.material,hazeField:m,skyUniforms:t}}function Z2(r){const t=new On({color:1055527,roughness:.72,metalness:.18}),i=new vn({color:5105151,transparent:!0,opacity:.18,toneMapped:!1,depthWrite:!1}),s=new te(1,1,1),l=[],c=150;for(let g=0;g<96;g++){const _=g/96*Math.PI*2+De(g,41)*.08,y=c+De(g,77)*34,E=22+De(g,91)*74;l.push({x:Math.cos(_)*y,y:E/2-1,z:Math.sin(_)*y,sx:6+De(g,63)*13,sy:E,sz:6+De(g,54)*13})}const f=new ps(s,t,l.length),h=new Fe,p=new Gi;l.forEach((g,_)=>{h.compose(new k(g.x,g.y,g.z),p,new k(g.sx,g.sy,g.sz)),f.setMatrixAt(_,h)}),f.receiveShadow=!1,r.add(f);for(let g=0;g<22;g++){const _=l[g*13%l.length],y=new gt(new te(.18,Math.max(7,_.sy*.52),.06),i);y.position.set(_.x,Math.max(6,_.sy*.52),_.z),y.lookAt(0,y.position.y,0),r.add(y)}const m=new vn({color:16740259,transparent:!0,opacity:.26,toneMapped:!1,depthWrite:!1});for(const g of[-112,116]){const _=new gt(new te(190,.08,.08),m);_.position.set(0,22+(g>0?5:0),g),r.add(_)}const v=new vn({color:8378863,transparent:!0,opacity:.055,side:Zn,depthWrite:!1,toneMapped:!1});for(const g of[18,34,52]){const _=new gt(new ri(132+g*.7,132+g*.7,.12,64,1,!0),v);_.position.y=g,r.add(_)}}function K2(r){const t=new Hi;t.position.copy(Ex);const i=new Hi;t.add(i);const s=new On({color:926264,roughness:.36,metalness:.42}),l=new On({color:265238,roughness:.46,metalness:.34}),c=new On({color:2705507,roughness:.3,metalness:.55}),f=new On({color:1054752,roughness:.62,metalness:.22}),h=new On({color:6942975,emissive:695996,emissiveIntensity:2.45,roughness:.18,metalness:.28}),p=new On({color:16731526,emissive:12588632,emissiveIntensity:1.85,roughness:.22,metalness:.2}),m=new px({color:13302527,emissive:7270399,emissiveIntensity:1.35,roughness:.08,metalness:.12,transmission:.14,transparent:!0,opacity:.92,clearcoat:1,clearcoatRoughness:.08}),v=new vn({color:16056063,toneMapped:!1}),g=new gt(new Ca(.34,.49,10,18),s);g.position.y=.08,g.scale.set(1.08,1.02,.77),g.castShadow=!0,i.add(g);const _=new gt(new Ca(.235,.26,7,12),f);_.position.set(0,-.19,-.005),_.scale.set(1,1,.78),_.castShadow=!0,i.add(_);const y=new gt(new te(.54,.35,.075,1,1,1),c);y.position.set(0,.23,-.295),y.rotation.x=-.08,i.add(y);for(const $ of[-1,1]){const dt=new gt(new te(.21,.22,.055),l);dt.position.set($*.155,.3,-.34),dt.rotation.z=$*-.12,i.add(dt);const Nt=new gt(new te(.1,.38,.22),c);Nt.position.set($*.34,.08,-.04),Nt.rotation.z=$*-.12,i.add(Nt)}const E=new gt(new fo(.14,0),p);E.position.set(0,.225,-.356),E.scale.set(.6,1.42,.28),i.add(E);const T=new gt(new te(.035,.5,.035),h);T.position.set(0,.1,-.36),i.add(T);const M=new gt(new ri(.285,.355,.24,8,1,!1,Math.PI/8),c);M.position.set(0,.38,-.01),M.scale.set(1.34,1,.82),M.rotation.y=Math.PI/8,i.add(M);for(let $=0;$<3;$++){const dt=new gt(new te(.32-$*.035,.075,.055),$===1?c:l);dt.position.set(0,.045-$*.095,-.286-$*.008),dt.rotation.x=-.1+$*.04,i.add(dt)}const x=new gt(new jn(.32,18,14),l);x.position.y=-.38,x.scale.set(1.05,.67,.8),x.castShadow=!0,i.add(x);const N=new gt(new te(.46,.16,.34),c);N.position.set(0,-.38,-.035),N.rotation.x=-.1,i.add(N);for(const $ of[-1,1]){const dt=new gt(new te(.13,.22,.24),f);dt.position.set($*.31,-.38,.015),dt.rotation.z=$*-.18,i.add(dt);const Nt=new gt(new Ua(.095,.28,4),c);Nt.position.set($*.35,-.49,-.04),Nt.rotation.z=$*.35,Nt.rotation.y=Math.PI/4,i.add(Nt)}const L=new gt(new jn(.29,24,18),s);L.position.y=.8,L.scale.set(.92,1.08,.88),L.castShadow=!0,i.add(L);const b=new gt(new te(.26,.12,.23),c);b.position.set(0,1.015,-.015),b.rotation.x=-.12,i.add(b);const P=new gt(new te(.32,.14,.18),l);P.position.set(0,.69,-.14),P.rotation.x=.14,i.add(P);const C=new gt(new te(.37,.12,.03),m);C.position.set(0,.86,-.266),C.scale.x=.94,i.add(C);const O=new gt(new te(.29,.025,.01),v);O.position.set(0,.87,-.286),i.add(O);const z=new gt(new te(.052,.135,.038),s);z.position.set(0,.86,-.282),i.add(z);for(const $ of[-1,1]){const dt=new gt(new te(.06,.18,.17),p);dt.position.set($*.265,.83,-.02),dt.rotation.z=$*.08,i.add(dt);const Nt=new gt(new ri(.075,.09,.055,10),c);Nt.position.set($*.286,.82,.025),Nt.rotation.z=Math.PI/2,i.add(Nt);const Pt=new gt(new te(.09,.16,.055),l);Pt.position.set($*.195,.745,-.205),Pt.rotation.z=$*-.16,Pt.rotation.y=$*.12,i.add(Pt)}const U=new gt(new te(.32,.18,.095),f);U.position.set(0,.82,.225),U.rotation.x=-.08,i.add(U);const A=new gt(new ri(.018,.026,.24,6),h);A.position.set(.16,1.08,.02),A.rotation.z=-.18,i.add(A);const B=new gt(new Zi(.2,.026,8,24),h);B.position.y=.57,B.rotation.x=Math.PI/2,i.add(B);const W=new jn(.145,14,10),tt=new Ca(.086,.3,7,12),ut=new Ca(.078,.24,7,12),pt=[];for(const $ of[-1,1]){const dt=new Hi;dt.position.set($*.415,.34,0);const Nt=new gt(W,p);Nt.scale.set(1.12,.9,1),Nt.castShadow=!0,dt.add(Nt);const Pt=new gt(new te(.19,.11,.24),c);Pt.position.set($*.035,.01,0),Pt.rotation.z=$*-.18,dt.add(Pt);const oe=new gt(new Ua(.13,.25,4),p);oe.position.set($*.09,.035,.045),oe.rotation.z=$*-1.15,oe.rotation.y=Math.PI/4,oe.scale.set(.7,1,1.1),dt.add(oe);const Ee=new gt(tt,s);Ee.position.y=-.22,Ee.castShadow=!0,dt.add(Ee);const Lt=new gt(new te(.13,.22,.085),c);Lt.position.set($*.028,-.22,-.085),Lt.rotation.z=$*-.05,dt.add(Lt);const F=new gt(new te(.1,.19,.07),f);F.position.set(-$*.035,-.22,.085),F.rotation.z=$*.05,dt.add(F);const ie=new gt(new jn(.102,12,9),l);ie.position.set(0,-.43,-.015),ie.scale.set(1,.78,.9),dt.add(ie);const Ot=new gt(new Zi(.095,.018,7,16),p);Ot.position.set(0,-.43,-.015),Ot.rotation.x=Math.PI/2,dt.add(Ot);const le=new gt(ut,f);le.position.set(0,-.57,-.012),le.scale.set(1.02,1,.95),le.castShadow=!0,dt.add(le);const Gt=new gt(new te(.12,.26,.055),h);Gt.position.set($*.055,-.56,-.09),Gt.rotation.z=$*-.08,dt.add(Gt);const _e=new gt(new Ca(.1,.12,6,10),c);_e.position.y=-.73,_e.scale.set(.9,1,.88),dt.add(_e);const Zt=new gt(new te(.13,.19,.08),l);Zt.position.set(0,-.705,-.095),Zt.rotation.x=.1,dt.add(Zt);const I=new gt(new Zi(.075,.014,7,18),h);I.position.set(0,-.75,-.08),I.rotation.x=Math.PI/2,dt.add(I);const w=new gt(new jn(.095,12,9),l);w.position.y=-.88,w.scale.set(.9,1.05,.86),dt.add(w),i.add(dt),pt.push(dt)}const G=[];for(const $ of[-1,1]){const dt=new Hi;dt.position.set($*.19,-.47,0);const Nt=new gt(new Ca(.112,.33,7,12),c);Nt.position.y=-.22,Nt.castShadow=!0,dt.add(Nt);const Pt=new gt(new Ua(.105,.34,4),f);Pt.position.set($*.105,-.2,.015),Pt.rotation.z=$*-.1,Pt.rotation.y=Math.PI/4,Pt.scale.set(.75,1,1.08),dt.add(Pt);const oe=new gt(new te(.14,.31,.08),s);oe.position.set($*.045,-.2,-.115),oe.rotation.z=$*-.07,dt.add(oe);const Ee=new gt(new jn(.118,12,9),p);Ee.position.set(0,-.47,-.03),Ee.scale.set(.92,.72,.8),dt.add(Ee);const Lt=new gt(new te(.13,.11,.055),h);Lt.position.set(0,-.475,-.13),dt.add(Lt);for(const I of[-1,1]){const w=new gt(new ri(.035,.035,.035,8),c);w.position.set(I*.105,-.47,-.01),w.rotation.z=Math.PI/2,dt.add(w)}const F=new gt(new Ca(.09,.27,6,11),l);F.position.y=-.65,F.castShadow=!0,dt.add(F);const ie=new gt(new te(.045,.29,.045),h);ie.position.set($*.07,-.65,-.075),dt.add(ie);const Ot=new gt(new te(.115,.24,.075),c);Ot.position.set(-$*.035,-.66,.075),Ot.rotation.z=$*.06,dt.add(Ot);const le=new gt(new jn(.082,10,8),f);le.position.y=-.83,dt.add(le);const Gt=new gt(new te(.18,.15,.36),p);Gt.position.set(0,-.91,-.075),Gt.rotation.x=-.06,Gt.castShadow=!0,dt.add(Gt);const _e=new gt(new Ua(.11,.18,4),c);_e.position.set(0,-.91,-.275),_e.rotation.x=-Math.PI/2,_e.rotation.y=Math.PI/4,_e.scale.set(1.05,1,.7),dt.add(_e);const Zt=new gt(new te(.17,.035,.35),h);Zt.position.set(0,-.995,-.075),dt.add(Zt),i.add(dt),G.push(dt)}const j=new gt(new Zi(.278,.028,8,24),h);j.position.y=-.25,j.rotation.x=Math.PI/2,i.add(j);const V=new gt(new te(.36,.49,.17),f);V.position.set(0,.17,.31),V.rotation.x=.05,i.add(V);const Mt=new gt(new te(.055,.56,.045),h);Mt.position.set(0,.13,.41),i.add(Mt);for(const $ of[-1,1]){const dt=new gt(new te(.045,.64,.055),h);dt.position.set($*.18,.12,.35),dt.rotation.z=$*-.13,i.add(dt);const Nt=new gt(new ri(.07,.085,.29,10),c);Nt.position.set($*.14,-.02,.43),Nt.rotation.x=Math.PI/2,i.add(Nt);const Pt=new gt(new Zi(.082,.014,7,16),l);Pt.position.set($*.14,-.02,.505),Pt.rotation.x=Math.PI/2,i.add(Pt);const oe=new gt(new yu(.052,12),p);oe.position.set($*.14,-.02,.585),i.add(oe)}const wt=new gt(new Zi(.135,.035,8,22),c);wt.position.set(0,.31,.43),wt.rotation.x=Math.PI/2,i.add(wt);const H=new gt(new ri(.055,.055,.065,10),p);H.position.set(0,.31,.43),H.rotation.x=Math.PI/2,i.add(H);const et=new gt(new te(.1,.055,.88),h);et.position.set(0,.57,.46),et.rotation.x=-.16,i.add(et);for(const $ of[-1,1]){const dt=new gt(new Ua(.055,.78,5),p);dt.position.set($*.075,.53,.72),dt.rotation.x=Math.PI/2,dt.rotation.z=$*.06,dt.scale.set(.85,1,.55),i.add(dt)}for(const $ of[-1,1]){const dt=new gt(new te(.15,.24,.08),c);dt.position.set($*.205,.535,.03),dt.rotation.z=$*.42,dt.rotation.x=-.16,i.add(dt);const Nt=new gt(new te(.065,.27,.035),h);Nt.position.set($*.245,.04,-.31),Nt.rotation.z=$*-.1,i.add(Nt);const Pt=new gt(new te(.055,.34,.28),c);Pt.position.set($*.255,.18,.34),Pt.rotation.z=$*-.18,Pt.rotation.x=.12,i.add(Pt);const oe=new gt(new Ua(.055,.25,4),h);oe.position.set($*.19,-1,.08),oe.rotation.x=-Math.PI/2,oe.rotation.z=Math.PI/4,i.add(oe)}const yt=new gt(new te(.18,.035,.025),p);yt.position.set(0,.71,-.245),i.add(yt);const Z=new gt(new te(.42,.045,.05),l);Z.position.set(0,.93,-.265),Z.rotation.x=-.08,i.add(Z);const ft=new gt(new fo(.105,0),p);ft.position.set(0,.22,.43),ft.scale.set(.7,1.3,.48),i.add(ft);const At=new gt(new te(.19,.09,.055),p);return At.position.set(0,-.27,-.295),i.add(At),i.rotation.order="YXZ",r.add(t),{root:t,visual:i,torso:g,head:L,arms:[pt[0],pt[1]],legs:[G[0],G[1]],scarf:et}}const Q2=.16,J2=8,ks=.0025,wa=.035,$2=4,Yi=.44,ji=.12;function tw(r,t,i=Di){const s=we(r.x,t.min.x,t.max.x),l=we(r.z,t.min.z,t.max.z),c=r.x-s,f=r.z-l;return c*c+f*f<=i*i+1e-7}function dl(r,t,i,s){const l=r.x*t+r.y*i+r.z*s;l<0&&(r.x-=t*l,r.y-=i*l,r.z-=s*l)}function O_(r,t,i,s){let l=!1;const c=Ii+Zs;r.y<=c+wa&&t.y<=0&&(r.y=c,t.y<0&&(t.y=0),l=!0);for(let f=0;f<$2;f++){let h=!1;for(const p of i){const m=r.y-Zs,v=r.y+Zs,g=s.y-Zs;if(!tw(r,p))continue;const y=t.y<=0&&g>=p.max.y-wa&&m<=p.max.y+wa,E=t.y<=0&&Math.abs(m-p.max.y)<=wa&&v>p.max.y;if(y||E){r.y=p.max.y+Zs,t.y<0&&(t.y=0),l=!0,h=!0;continue}if(!(v>p.min.y+ks&&m<p.max.y-ks))continue;const M=we(r.x,p.min.x,p.max.x),x=we(r.z,p.min.z,p.max.z);let N=r.x-M,L=r.z-x;const b=N*N+L*L;if(b>1e-10){const ut=Math.sqrt(b);if(ut>=Di)continue;const pt=N/ut,G=L/ut,j=Di-ut+ks;r.x+=pt*j,r.z+=G*j,dl(t,pt,0,G),h=!0;continue}const P=r.x-p.min.x,C=p.max.x-r.x,O=r.z-p.min.z,z=p.max.z-r.z,U=Math.min(P,C,O,z),A=s.x<=p.min.x-Di+wa,B=s.x>=p.max.x+Di-wa,W=s.z<=p.min.z-Di+wa,tt=s.z>=p.max.z+Di-wa;A||!B&&!W&&!tt&&U===P?(r.x=p.min.x-Di-ks,dl(t,-1,0,0)):B||!W&&!tt&&U===C?(r.x=p.max.x+Di+ks,dl(t,1,0,0)):W||!tt&&U===O?(r.z=p.min.z-Di-ks,dl(t,0,0,-1)):(r.z=p.max.z+Di+ks,dl(t,0,0,1)),h=!0}if(!h)break}return r.y<c?(r.y=c,t.y<0&&(t.y=0),l=!0):Math.abs(r.y-c)<=wa&&t.y<=0&&(l=!0),l}function P_(r,t,i,s){const l=t.x-r.x,c=t.y-r.y,f=t.z-r.z;let h=0,p=1;const m=[[r.x,l,i.min.x-s,i.max.x+s],[r.y,c,i.min.y-s,i.max.y+s],[r.z,f,i.min.z-s,i.max.z+s]];for(const[v,g,_,y]of m){if(Math.abs(g)<1e-9){if(v<_||v>y)return null;continue}let E=(_-v)/g,T=(y-v)/g;if(E>T&&([E,T]=[T,E]),h=Math.max(h,E),p=Math.min(p,T),h>p)return null}return h>=0&&h<=1?h:null}function ew(r,t){for(let i=0;i<3;i++){let s=!1;for(const l of t){const c=l.min.x-Yi,f=l.max.x+Yi,h=l.min.y-Yi,p=l.max.y+Yi,m=l.min.z-Yi,v=l.max.z+Yi;if(r.x<=c||r.x>=f||r.y<=h||r.y>=p||r.z<=m||r.z>=v)continue;const g=[{d:r.x-c,axis:"x",value:c-ji},{d:f-r.x,axis:"x",value:f+ji},{d:r.y-h,axis:"y",value:h-ji},{d:p-r.y,axis:"y",value:p+ji},{d:r.z-m,axis:"z",value:m-ji},{d:v-r.z,axis:"z",value:v+ji}];g.sort((E,T)=>E.d-T.d);const _=Ii+Yi+ji,y=g.find(E=>E.axis!=="y"||E.value>=_)??g[0];r[y.axis]=y.value,s=!0}if(!s)break}r.y=Math.max(Ii+Yi+ji,r.y)}function nw(r){const t=(r%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return["N","NE","E","SE","S","SW","W","NW"][Math.round(t/(Math.PI/4))%8]}function iw(r){return($_.radToDeg(r)%360+360)%360}const aw=qn.forwardRef(function({onHud:t,onPointerLock:i},s){const l=qn.useRef(null),c=qn.useRef(null);return qn.useImperativeHandle(s,()=>({lock:()=>{var f;return(f=c.current)==null?void 0:f.lock()},toggleNight:f=>{var h;return(h=c.current)==null?void 0:h.setNight(f)},reset:()=>{var f;return(f=c.current)==null?void 0:f.reset()}}),[]),qn.useEffect(()=>{const f=l.current;if(!f)return;const h=new b2({canvas:f,antialias:!0,alpha:!1,powerPreference:"high-performance"});h.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),h.shadowMap.enabled=!0,h.shadowMap.type=B_,h.outputColorSpace=Yn,h.toneMapping=H_,h.toneMappingExposure=1.06;const p=new g1;p.background=new Se(7974079),p.fog=new vl(7974079,.0054);const m=new _i(68,1,.08,420);m.position.set(0,4.6,11),m.rotation.order="YXZ";const v=new I1(14152959,3424330,1.75);p.add(v);const g=new i_(16772560,2.75);g.position.set(52,92,24),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.camera.left=-102,g.shadow.camera.right=102,g.shadow.camera.top=102,g.shadow.camera.bottom=-102,g.shadow.camera.near=4,g.shadow.camera.far=245,g.shadow.bias=-45e-5,p.add(g);const _=new i_(6867455,.42);_.position.set(-70,35,-40),p.add(_);const y=new n_(4646911,0,92,1.7);y.position.set(14,46,-14),p.add(y);const E=new n_(16732050,0,88,1.8);E.position.set(-42,40,42),p.add(E);const{sidewalkMat:T}=V2(p),{buildings:M,raycastMeshes:x,facadeMaterials:N}=X2(p,T),L=j2(p);Z2(p);const b=K2(p),P=b.root,C=new wn().setFromPoints(Array.from({length:xd+1},()=>new k)),O=new ap({color:15400191,transparent:!0,opacity:.96}),z=new nd(C,O);z.visible=!1,z.frustumCulled=!1,p.add(z);const U=C.clone(),A=new ap({color:7399679,transparent:!0,opacity:.28}),B=new nd(U,A);B.visible=!1,B.frustumCulled=!1,p.add(B);const W=new gt(new ri(.012,.012,1,7,1,!0),new vn({color:15400959,transparent:!0,opacity:.58,depthWrite:!1,toneMapped:!1}));W.visible=!1,W.frustumCulled=!1,p.add(W);const tt=new gt(new jn(.075,10,8),new vn({color:12253439,transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1}));tt.visible=!1,p.add(tt);const ut=new gt(new jn(.16,14,10),new vn({color:9437174,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));ut.visible=!1,ut.frustumCulled=!1,p.add(ut);const pt=new gt(new El(.18,.31,24),new vn({color:10286591,side:Zn,transparent:!0,opacity:.88,depthTest:!1}));pt.visible=!1,pt.renderOrder=8,p.add(pt);const G=new gt(new yu(.055,16),new vn({color:16121343,side:Zn,depthTest:!1}));G.visible=!1,G.renderOrder=9,p.add(G);const j=new Set,V=new k,Mt=new k,wt=new k,H=new k,et=new k,yt=new k,Z=new k(0,3.7,7),ft=new k,At=new k,$=new k,dt=new G1,Nt=new Jt(0,0),Pt=new k,oe=new k,Ee=new k,Lt=new k,F=new k,ie=new k,Ot=new k,le=new k,Gt=new k,_e=new k,Zt=new k,I=new k;let w=!0,nt=0,vt=.75,Rt=0,St="idle",ee=!1,zt=!1,Yt=0,be=_d,Dt=0,Kt=!1,se=0,re=0,Wt=performance.now(),he=!1,xe=!1,ke=0,K=0,Bt=performance.now(),mt=!1,bt=document.pointerLockElement===f,Ft=!0,Ht=0,ae=0,He=0;const Ct={attached:!1,targetValid:!1,anchor:null,anchorObjectId:null,ropeLength:null,targetPoint:null,targetObjectId:null,targetNormal:null,tension:0},Le=()=>{const rt=Math.max(1,f.clientWidth),_t=Math.max(1,f.clientHeight);h.setSize(rt,_t,!1),m.aspect=rt/_t,m.updateProjectionMatrix()};Le();const _n=()=>{var Xt;dt.setFromCamera(Nt,m),dt.near=.2,dt.far=md+16;const _t=dt.intersectObjects(x,!1)[0];if(!_t||P.position.distanceTo(_t.point)>md)return null;const $t=_t.object.userData.buildingId;if(!$t)return null;const Qt=((Xt=_t.face)==null?void 0:Xt.normal.clone())??new k(0,1,0);return Qt.transformDirection(_t.object.matrixWorld).normalize(),{point:_t.point.clone(),id:$t,normal:Qt}},Qn=rt=>(rt.set(.36,.37,-.08),rt.applyAxisAngle($r,b.visual.rotation.y),rt.add(P.position)),ea=()=>{Ct.attached&&(He=Math.max(He,we((V.length()-6)/44,0,1))),Ct.attached=!1,Ct.anchor=null,Ct.anchorObjectId=null,Ct.ropeLength=null,Ct.tension=0,z.visible=!1,B.visible=!1,W.visible=!1,tt.visible=!1,ut.visible=!1},za=()=>{const rt=_n();if(!rt)return!1;const _t=P.position.distanceTo(rt.point);return _t>md?!1:(Ct.attached=!0,Ct.anchor=rt.point.clone().addScaledVector(rt.normal,1.5),Ct.anchorObjectId=rt.id,Ct.ropeLength=Math.max(T2,_t),Ct.tension=0,ae=Math.max(ae,we(.22+V.length()/64,.22,.86)),z.visible=!0,B.visible=!0,ut.visible=!0,ut.position.copy(Ct.anchor),!0)},Jn=()=>{P.position.copy(Ex),V.set(0,0,0),w=!0,be=_d,Yt=0,ee=!1,zt=!1,Dt=0,St="idle",ea(),ae=0,He=0,m.position.set(0,4.6,11),et.copy(P.position).add(ie.set(0,.55,0)),Z.copy(m.position).sub(Ot.copy(P.position).add(ie.set(0,.88,0)))},na=rt=>{mt=rt,mt?(p.background=new Se(198417),p.fog=new vl(264211,.0071),v.color.set(6125741),v.groundColor.set(461586),v.intensity=.52,g.color.set(10140159),g.intensity=.42,_.color.set(3921407),_.intensity=.9,y.intensity=4.8,E.intensity=3.8,h.toneMappingExposure=.8,N.forEach(_t=>{_t.emissiveIntensity=1.38}),L.starMat.opacity=.9,L.moon.opacity=.94,L.moonHalo.opacity=.16,L.sun.opacity=0,L.sunHalo.opacity=0,L.skyUniforms.topColor.value.set(132626),L.skyUniforms.horizonColor.value.set(1121074),L.skyUniforms.bottomColor.value.set(462877)):(p.background=new Se(7974079),p.fog=new vl(7974079,.0054),v.color.set(14152959),v.groundColor.set(3424330),v.intensity=1.75,g.color.set(16772560),g.intensity=2.75,_.color.set(6867455),_.intensity=.42,y.intensity=0,E.intensity=0,h.toneMappingExposure=1.06,N.forEach(_t=>{_t.emissiveIntensity=.24}),L.starMat.opacity=0,L.moon.opacity=0,L.moonHalo.opacity=0,L.sun.opacity=.8,L.sunHalo.opacity=.16,L.skyUniforms.topColor.value.set(3570586),L.skyUniforms.horizonColor.value.set(10209745),L.skyUniforms.bottomColor.value.set(14862512))},Ia=()=>{ft.set(Math.sin(nt),0,-Math.cos(nt)).normalize(),At.crossVectors(ft,$r).normalize(),Mt.set(0,0,0),j.has("KeyW")&&Mt.add(ft),j.has("KeyS")&&Mt.sub(ft),j.has("KeyD")&&Mt.add(At),j.has("KeyA")&&Mt.sub(At),Mt.lengthSq()>1&&Mt.normalize()},_s=rt=>{const $t=j.has("ShiftLeft")||j.has("ShiftRight")?vd:A2,Qt=Math.hypot(V.x,V.z);if(Mt.lengthSq()>1e-4){Lt.copy(Mt).normalize(),F.set(V.x,0,V.z);const It=Qt>.01?we(F.dot(Lt)/Qt,-1,1):1;if(Qt<=$t*1.08){wt.copy(Lt).multiplyScalar($t);const ge=wt.x-V.x,ve=wt.z-V.z,Ge=Math.hypot(ge,ve),ye=(It<-.2?C2:It<.72?R2:w2)*rt;Ge>ye&&Ge>0?(V.x+=ge/Ge*ye,V.z+=ve/Ge*ye):(V.x=wt.x,V.z=wt.z)}else{F.normalize();const ge=we(1.15-Qt/105,.3,.9),ve=It<0?1.35:1,Ge=1-Math.exp(-3.9*ge*ve*rt);F.lerp(Lt,Ge),F.lengthSq()>.001&&F.normalize();const Ze=Math.max(0,Qt-$t),ye=Math.exp(-.4*we(Ze/42,.08,1)*rt);F.multiplyScalar(Qt*ye),V.x=F.x,V.z=F.z}}else if(Qt>.001)if(Qt>vd){const It=Math.exp(-.4*we((Qt-vd)/44,.06,1)*rt);V.x*=It,V.z*=It}else{const ge=Math.max(0,Qt-D2*rt)/Qt;V.x*=ge,V.z*=ge}},ia=rt=>{if(Mt.lengthSq()!==0)if(Ct.attached&&Ct.anchor){if(oe.copy(P.position).sub(Ct.anchor),oe.lengthSq()>.001&&(oe.normalize(),Ee.copy(Mt).addScaledVector(oe,-Mt.dot(oe)),Ee.lengthSq()>.001)){Ee.normalize();const _t=V.length();ie.copy(V).addScaledVector(oe,-V.dot(oe));const Qt=ie.length()>.01?we(ie.normalize().dot(Ee),-1,1):0,Xt=_t>L_?we(1-(_t-L_)/78,.36,1):1,It=Qt<.25?1.18:1,ge=L2*Xt*It;V.addScaledVector(Ee,ge*rt)}}else{F.set(V.x,0,V.z);const _t=F.length();Lt.copy(Mt).normalize();const $t=_t>.01?we(F.normalize().dot(Lt),-1,1):0,Qt=$t<-.15?1.32:$t<.55?1.14:1,Xt=_t>U_?we(1-(_t-U_)/58,.3,1):1;V.addScaledVector(Lt,U2*Qt*Xt*rt)}},oi=rt=>{if(!Ct.attached||!Ct.anchor||Ct.ropeLength==null)return;Ot.copy(Ct.anchor).sub(P.position);const _t=Ot.length();if(_t<.001)return;const $t=Math.abs(Ot.z)/_t,Qt=we(_t/Math.max(Ct.ropeLength,.001),0,1.04),Xt=we((Qt-.8)/.2,0,1);if($t<.06||Xt<=0)return;Ot.multiplyScalar(1/_t);const It=1.35+Math.min(4.8,Ct.tension*.038);V.addScaledVector(Ot,$t*Xt*It*rt)},cn=()=>{if(!Ct.attached||!Ct.anchor||Ct.ropeLength==null){Ct.tension=0;return}oe.copy(P.position).sub(Ct.anchor);const rt=oe.length();if(rt<1e-4)return;oe.divideScalar(rt);const _t=rt-Ct.ropeLength,$t=V.dot(oe);_t>0&&(P.position.addScaledVector(oe,-_t),$t>0&&(V.addScaledVector(oe,-$t),ae=Math.max(ae,we($t/24+_t*.42,0,1.35))));const Xt=Math.max(0,V.lengthSq()-Math.pow(V.dot(oe),2))/Math.max(Ct.ropeLength,.1),It=Math.max(0,-pd*oe.y);Ct.tension=Math.max(0,Xt+It)},bn=rt=>{Pt.copy(P.position),Ft=w,Ia(),ee?(Yt=z2,ee=!1):Yt=Math.max(0,Yt-rt),be=w?_d:Math.max(0,be-rt),w?_s(rt):ia(rt),Yt>0&&be>0&&(V.y=P2,w=!1,be=0,Yt=0,Dt=I2,zt=!1),zt&&(!w&&V.y>0&&Dt>0&&(V.y*=H2),zt=!1,Dt=0),Dt=Math.max(0,Dt-rt);const $t=j.has("Space")&&Dt>0&&V.y>0?B2:V.y<0?F2:1;$t===1?V.y-=pd*rt:V.y-=pd*$t*rt;const Qt=V.y;if(!w&&!Ct.attached){const Ze=Math.exp(-.014*rt);V.x*=Ze,V.z*=Ze}oi(rt),V.lengthSq()>8100&&V.setLength(90);const Xt=V.length()*rt,It=we(Math.ceil(Xt/Q2),1,J2),ge=rt/It;let ve=!1;for(let Ze=0;Ze<It;Ze++){Pt.copy(P.position),P.position.addScaledVector(V,ge);let ye=O_(P.position,V,M,Pt);for(let Ke=0;Ke<3;Ke++)Pt.copy(P.position),cn(),ye=O_(P.position,V,M,Pt)||ye;ve=ye}w=ve,ae=Math.max(0,ae-N2*rt),He=Math.max(0,He-O2*rt),!Ft&&w&&(Ht=we(Math.abs(Math.min(0,Qt))*.018+.18,.18,.52)),Ht=Math.max(0,Ht-rt*2.8),(P.position.y<-12||Math.abs(P.position.x)>N_||Math.abs(P.position.z)>N_)&&Jn();const Ge=Math.hypot(V.x,V.z);Ct.attached?St="swinging":!w&&V.y>.2?St="jumping":w?Ge>.35?St="moving":St="idle":St="falling"},yi=rt=>{ft.set(Math.sin(nt),0,-Math.cos(nt)).normalize(),At.crossVectors(ft,$r).normalize();const _t=V.length();H.copy(P.position).add(ie.set(0,.62,0)),H.y+=Math.sin(vt)*2.45,H.addScaledVector(ft,Math.max(0,Math.sin(vt))*.62),Ot.copy(V),Ot.y*=Ct.attached?.56:.46;const $t=.046+we(_t*.00155,0,.064)+He*.026;H.addScaledVector(Ot,$t);const Qt=1-Math.exp(-rt*(Ct.attached?6.4:7.6));et.lerp(H,Qt);const Xt=6.4+we(_t*.098,0,5.5)+He*.38,It=.54+we(_t*.0045,0,.2),ge=we(V.y*.0062,-.12,.12),ve=Ct.attached&&Ct.anchor?we((Ct.anchor.y-P.position.y)/110,-.075,.1):0,Ge=we(vt+ge+ve,-1.16,.9),Ze=Math.cos(Ge*.76);$.copy(ft).multiplyScalar(Ze),yt.copy(et),yt.addScaledVector($,-Xt),yt.addScaledVector(At,It),yt.y+=2.5-Math.sin(Ge)*Xt*.61,yt.y+=we(-V.y*.009,-.26,.36),yt.y=Math.max(Ii+.72,yt.y),Ot.copy(P.position).add(ie.set(0,.88,0)),ie.copy(yt).sub(Ot);const ye=1-Math.exp(-rt*(Ct.attached?5.2:6.4));Z.lerp(ie,ye),yt.copy(Ot).add(Z),ie.copy(yt).sub(Ot);const Ke=ie.length();if(Ke>.001){let sn=1;for(const $n of M){const hn=P_(Ot,yt,$n,Yi);hn!=null&&hn<sn&&(sn=hn)}if(sn<1){const $n=Math.max(.82,Ke*sn-ji);yt.copy(Ot).addScaledVector(ie.divideScalar(Ke),$n),Z.copy(yt).sub(Ot)}}yt.y=Math.max(Ii+.72,yt.y),m.position.copy(yt),ew(m.position,M),m.position.y=Math.max(Ii+.72,m.position.y),ie.copy(m.position).sub(Ot);const Ie=ie.length();if(Ie>.001){let sn=1;for(const $n of M){const hn=P_(Ot,m.position,$n,Yi);hn!=null&&hn<sn&&(sn=hn)}if(sn<1){const $n=Math.max(.8,Ie*sn-ji);m.position.copy(Ot).addScaledVector(ie.divideScalar(Ie),$n),Z.copy(m.position).sub(Ot)}}m.position.y=Math.max(Ii+.72,m.position.y),m.lookAt(et);const Dn=V.dot(At),Un=Ct.attached?we(-Dn*.0021,-.026,.026):we(-Dn*7e-4,-.008,.008);Rt=Ve(Rt,Un,4.5,rt),m.rotateZ(Rt);const un=66+we((_t-6)*.3,0,16)+ae*1.1+He*2.4;m.fov=Ve(m.fov,un,Ct.attached?5.2:6.2,rt),m.updateProjectionMatrix()},xs=(rt,_t)=>{const $t=Math.hypot(V.x,V.z),Qt=V.length(),Xt=we($t/12,0,1);let It=b.visual.rotation.y;$t>.15&&(It=Math.atan2(V.x,-V.z)),b.visual.rotation.y=Ve(b.visual.rotation.y,It,Ct.attached?7:12,_t);const ge=w?0:we(-V.y*.018,-.34,.4);b.visual.rotation.x=Ve(b.visual.rotation.x,ge,7,_t);const ve=Math.sin(It)*V.z+Math.cos(It)*V.x,Ge=Ct.attached?we(-ve*.018,-.42,.42):0;if(b.visual.rotation.z=Ve(b.visual.rotation.z,Ge,7,_t),Ct.attached&&Ct.anchor){const ye=Math.sin(rt*4.8);b.arms[0].rotation.x=Ve(b.arms[0].rotation.x,-1.48,13,_t),b.arms[0].rotation.z=Ve(b.arms[0].rotation.z,-.22,12,_t),b.arms[1].rotation.x=Ve(b.arms[1].rotation.x,-.88+ye*.1,11,_t),b.arms[1].rotation.z=Ve(b.arms[1].rotation.z,.48,11,_t),b.legs[0].rotation.x=Ve(b.legs[0].rotation.x,.48+ye*.2,9,_t),b.legs[1].rotation.x=Ve(b.legs[1].rotation.x,-.62-ye*.15,9,_t),b.legs[0].rotation.z=Ve(b.legs[0].rotation.z,-.12,8,_t),b.legs[1].rotation.z=Ve(b.legs[1].rotation.z,.12,8,_t)}else if(w&&$t>.5){const ye=Math.sin(rt*(8.5+Xt*4.5));b.arms[0].rotation.x=Ve(b.arms[0].rotation.x,ye*.82*Xt,17,_t),b.arms[1].rotation.x=Ve(b.arms[1].rotation.x,-ye*.82*Xt,17,_t),b.legs[0].rotation.x=Ve(b.legs[0].rotation.x,-ye*.88*Xt,17,_t),b.legs[1].rotation.x=Ve(b.legs[1].rotation.x,ye*.88*Xt,17,_t),b.arms[0].rotation.z=Ve(b.arms[0].rotation.z,-.1,10,_t),b.arms[1].rotation.z=Ve(b.arms[1].rotation.z,.1,10,_t)}else if(w)b.arms[0].rotation.x=Ve(b.arms[0].rotation.x,0,12,_t),b.arms[1].rotation.x=Ve(b.arms[1].rotation.x,0,12,_t),b.legs[0].rotation.x=Ve(b.legs[0].rotation.x,0,12,_t),b.legs[1].rotation.x=Ve(b.legs[1].rotation.x,0,12,_t);else{const ye=V.y>0;b.arms[0].rotation.x=Ve(b.arms[0].rotation.x,ye?-.7:-.28,9,_t),b.arms[1].rotation.x=Ve(b.arms[1].rotation.x,ye?.65:.34,9,_t),b.legs[0].rotation.x=Ve(b.legs[0].rotation.x,ye?.42:.22,9,_t),b.legs[1].rotation.x=Ve(b.legs[1].rotation.x,ye?-.36:-.18,9,_t)}Ct.attached||(b.legs[0].rotation.z=Ve(b.legs[0].rotation.z,0,10,_t),b.legs[1].rotation.z=Ve(b.legs[1].rotation.z,0,10,_t));const Ze=Ht;b.torso.scale.y=Ve(b.torso.scale.y,1-Ze*.17,12,_t),b.head.position.y=Ve(b.head.position.y,.8-Ze*.08,12,_t),b.scarf.rotation.x=Ve(b.scarf.rotation.x,-.18+we(Qt*.018,0,.7),7,_t),b.scarf.scale.z=Ve(b.scarf.scale.z,1+we(Qt*.012,0,.45),6,_t)},ir=()=>{const rt=_n();if(Ct.targetValid=!!rt,Ct.targetPoint=(rt==null?void 0:rt.point)??null,Ct.targetObjectId=(rt==null?void 0:rt.id)??null,Ct.targetNormal=(rt==null?void 0:rt.normal)??null,rt&&!Ct.attached){pt.visible=!0,G.visible=!0,le.copy(rt.normal),pt.position.copy(rt.point).addScaledVector(le,.035),G.position.copy(pt.position);const _t=new Gi().setFromUnitVectors(new k(0,0,1),le);pt.quaternion.copy(_t),G.quaternion.copy(_t);const $t=1+Math.sin(se*10.5)*.16;pt.scale.setScalar($t)}else pt.visible=!1,G.visible=!1;Kt&&!Ct.attached&&rt&&za()},ar=()=>{if(!Ct.attached||!Ct.anchor){z.visible=!1,B.visible=!1,W.visible=!1,tt.visible=!1;return}Qn(Gt);const rt=Ot.copy(Ct.anchor).sub(Gt),_t=Math.max(.001,rt.length()),$t=rt.clone().divideScalar(_t);Zt.crossVectors($t,$r),Zt.lengthSq()<.001?Zt.set(1,0,0):Zt.normalize(),I.crossVectors(Zt,$t).normalize();const Qt=Ct.ropeLength==null?1:we(1-Math.max(0,Ct.ropeLength-_t)/3.2,0,1),Xt=we(ae*.07+Ct.tension/900,0,.14),It=(1-Qt)*Math.min(1.35,_t*.018);for(const Ge of[C,U]){const Ze=Ge.getAttribute("position");for(let ye=0;ye<=xd;ye++){const Ke=ye/xd;_e.lerpVectors(Gt,Ct.anchor,Ke);const Ie=Math.sin(Math.PI*Ke);_e.addScaledVector(I,-It*Ie),_e.addScaledVector(Zt,Math.sin(se*38-Ke*11)*Xt*Ie),Ze.setXYZ(ye,_e.x,_e.y,_e.z)}Ze.needsUpdate=!0,Ge.computeBoundingSphere()}z.visible=!0,B.visible=!0;const ge=we(Ct.tension/38+ae*.42,0,1);O.opacity=.82+ge*.18,A.opacity=.18+ge*.3,Ot.copy(Ct.anchor).sub(Gt);const ve=Ot.length();if(ve>.001){W.visible=!0,W.position.copy(Gt).add(Ct.anchor).multiplyScalar(.5),W.scale.set(1+ge*.82+ae*.28,ve,1+ge*.82+ae*.28),W.quaternion.setFromUnitVectors($r,Ot.normalize()),W.material.opacity=.34+ge*.44,tt.visible=!0;const Ge=se*(.86+ge*1.05+ae*.9)%1;tt.position.lerpVectors(Gt,Ct.anchor,Ge),tt.scale.setScalar(.72+ge*.72+ae*.3),ut.visible=!0,ut.position.copy(Ct.anchor);const Ze=1+Math.sin(se*(10+ge*12))*.12;ut.scale.setScalar(Ze*(.82+ge*1.25+ae*.9)),ut.material.opacity=we(.12+ge*.34+ae*.42,.12,.84)}},sr=()=>({ready:xe,running:he&&performance.now()-Bt<300,elapsedTime:se,renderer:"webgl",viewport:{width:f.clientWidth,height:f.clientHeight}}),aa=()=>({position:Da(P.position),velocity:Da(V),grounded:w,movementState:St,collider:{radius:Di,height:Mx}}),ys=()=>{const rt=new k;m.getWorldDirection(rt);const _t=Math.atan2(rt.x,-rt.z),$t=Math.asin(we(rt.y,-1,1));return{mode:"third-person",position:Da(m.position),target:Da(et),yaw:_t,pitch:$t}},D=()=>{const rt=Ct.attached?Qn(ie):null;return{attached:Ct.attached,targetValid:Ct.targetValid,anchor:Ct.anchor?Da(Ct.anchor):null,anchorObjectId:Ct.anchorObjectId,ropeLength:Ct.ropeLength,distanceToAnchor:Ct.attached&&Ct.anchor?P.position.distanceTo(Ct.anchor):null,lineVisible:z.visible,playerEndpoint:rt?Da(rt):null,anchorEndpoint:Ct.anchor?Da(Ct.anchor):null}},Q=()=>({groundY:Ii,buildings:M.map(rt=>({id:rt.id,min:{...rt.min},max:{...rt.max}}))});window.__game=Object.freeze({getState:sr}),window.__player=Object.freeze({getState:aa}),window.__camera=Object.freeze({getState:ys}),window.__web=Object.freeze({getState:D}),window.__world=Object.freeze({getState:Q});const st=()=>{j.clear(),Kt=!1,ee=!1,zt=!1,Dt=0,ea()},ct=rt=>{if(rt.code==="KeyR"&&!rt.repeat){Jn();return}bt&&(["Space","KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight"].includes(rt.code)&&rt.preventDefault(),j.add(rt.code),rt.code==="Space"&&!rt.repeat&&(ee=!0))},Y=rt=>{j.delete(rt.code),rt.code==="Space"&&(zt=!0)},Ut=rt=>{if(document.pointerLockElement!==f)return;const _t=we(1-Math.max(0,V.length()-30)/180,.82,1);nt-=rt.movementX*.00245*_t,vt-=rt.movementY*.00216*_t,vt=we(vt,-1.16,.9)},Vt=rt=>{rt.button!==0||document.pointerLockElement!==f||(Kt=!0,za())},kt=rt=>{rt.button===0&&(Kt=!1,ea())},jt=()=>{const rt=document.pointerLockElement===f;bt=rt,rt||st(),i(rt)},pe=()=>{document.visibilityState!=="visible"&&st()},me=rt=>rt.preventDefault();window.addEventListener("resize",Le),window.addEventListener("keydown",ct,{passive:!1}),window.addEventListener("keyup",Y),window.addEventListener("mousemove",Ut),window.addEventListener("mousedown",Vt),window.addEventListener("mouseup",kt),window.addEventListener("blur",st),document.addEventListener("pointerlockchange",jt),document.addEventListener("visibilitychange",pe),f.addEventListener("contextmenu",me),c.current={lock:()=>{document.pointerLockElement!==f&&f.requestPointerLock().catch(()=>{})},setNight:na,reset:Jn},et.copy(P.position).add(ie.set(0,.5,0)),yi(1/60),ir(),ar(),h.render(p,m),xe=!0;const ue=rt=>{var $t,Qt;const _t=Math.min(.045,Math.max(0,(rt-Wt)/1e3));for(Wt=rt,se+=_t,re+=_t,he=!0,Bt=rt;re>=gd;)bt&&bn(gd),re-=gd;yi(_t),ir(),ar(),xs(se,_t),L.hazeField.rotation.y=se*.006,L.hazeField.position.y=Math.sin(se*.12)*.5,h.render(p,m),rt-K>66&&(K=rt,t({speed:V.length(),altitude:Math.max(0,P.position.y-Zs-Ii),verticalSpeed:V.y,compass:nw(nt),heading:iw(nt),attached:Ct.attached,targetValid:Ct.targetValid,movementState:St,ropeLength:Ct.ropeLength,ropeDistance:Ct.attached&&Ct.anchor?P.position.distanceTo(Ct.anchor):null,webTension:Ct.tension,running:he,playerX:P.position.x,playerZ:P.position.z,anchorX:(($t=Ct.anchor)==null?void 0:$t.x)??null,anchorZ:((Qt=Ct.anchor)==null?void 0:Qt.z)??null})),ke=requestAnimationFrame(ue)};return ke=requestAnimationFrame(ue),()=>{xe=!1,he=!1,cancelAnimationFrame(ke),window.removeEventListener("resize",Le),window.removeEventListener("keydown",ct),window.removeEventListener("keyup",Y),window.removeEventListener("mousemove",Ut),window.removeEventListener("mousedown",Vt),window.removeEventListener("mouseup",kt),window.removeEventListener("blur",st),document.removeEventListener("pointerlockchange",jt),document.removeEventListener("visibilitychange",pe),f.removeEventListener("contextmenu",me),c.current=null,document.pointerLockElement===f&&document.exitPointerLock(),p.traverse(rt=>{var _t;if(rt instanceof gt||rt instanceof nd||rt instanceof op){(_t=rt.geometry)==null||_t.dispose();const $t=rt.material;(Array.isArray($t)?$t:[$t]).forEach(Xt=>{var It,ge;Xt instanceof On&&((It=Xt.map)==null||It.dispose(),(ge=Xt.emissiveMap)==null||ge.dispose()),Xt.dispose()})}}),h.dispose()}},[t,i]),lt.jsx("canvas",{ref:l,"data-testid":"game-canvas",className:"block h-full w-full outline-none"})}),sw={speed:0,altitude:0,verticalSpeed:0,compass:"N",heading:0,attached:!1,targetValid:!1,movementState:"idle",ropeLength:null,ropeDistance:null,webTension:0,running:!1,playerX:0,playerZ:5,anchorX:null,anchorZ:null},rw={idle:"STANDBY",moving:"SPRINT",jumping:"RISE",falling:"DIVE",swinging:"SWING"};function ow(){const[r,t]=qn.useState(sw),[i,s]=qn.useState(!1),[l,c]=qn.useState(!1),[f,h]=qn.useState(!1),p=qn.useRef(null),m=qn.useCallback(C=>t(C),[]);qn.useEffect(()=>{var C;(C=p.current)==null||C.toggleNight(f)},[f]),qn.useEffect(()=>{const C=O=>{O.code==="KeyN"&&!O.repeat&&h(z=>!z)};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[]);const v=()=>{var C;s(!0),(C=p.current)==null||C.lock()},g=Math.min(100,r.speed/60*100),_=Math.min(100,r.webTension/52*100),y=Math.min(1,Math.max(0,(r.speed-11)/42)),E=Math.min(100,r.altitude/1.05),T=qn.useMemo(()=>{const C=["N","NE","E","SE","S","SW","W","NW"],O=Math.max(0,C.indexOf(r.compass));return[-2,-1,0,1,2].map(z=>C[(O+z+C.length)%C.length])},[r.compass]),M=r.attached?"TETHER LIVE":r.targetValid?"ANCHOR READY":"NO SURFACE",x=r.attached?"release to preserve momentum":r.targetValid?"hold LMB to connect":"aim at a building face",N=Math.min(96,Math.max(4,50+r.playerX/126*46)),L=Math.min(96,Math.max(4,50+r.playerZ/126*46)),b=r.anchorX==null?null:Math.min(96,Math.max(4,50+r.anchorX/126*46)),P=r.anchorZ==null?null:Math.min(96,Math.max(4,50+r.anchorZ/126*46));return lt.jsxs("main",{className:`game-shell ${f?"theme-night":"theme-day"} relative h-full w-full overflow-hidden bg-black select-none`,children:[lt.jsx(aw,{ref:p,onHud:m,onPointerLock:c}),lt.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 overflow-hidden",children:[lt.jsx("div",{className:"hud-vignette absolute inset-0"}),lt.jsx("div",{className:"speed-wash absolute inset-0",style:{opacity:y*.35}}),lt.jsx("div",{className:"edge-rush absolute inset-0",style:{opacity:y*.72}}),lt.jsx("div",{className:"scan-grid absolute inset-0"}),lt.jsxs("header",{className:"absolute left-0 right-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-6",children:[lt.jsxs("div",{className:"hud-panel speed-cluster relative min-w-[200px] overflow-hidden rounded-[20px] px-4 py-3 sm:min-w-[258px] sm:px-5 sm:py-4",children:[lt.jsxs("div",{className:"flex items-center justify-between gap-4",children:[lt.jsxs("div",{className:"flex items-center gap-3",children:[lt.jsx("div",{className:"brand-mark grid h-9 w-9 place-items-center rounded-[11px] text-[10px] font-black",children:"NT"}),lt.jsxs("div",{children:[lt.jsx("div",{className:"eyebrow",children:"RUNNER // 04"}),lt.jsxs("div",{className:"mt-1 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-white/78",children:[lt.jsx("span",{className:`status-dot ${r.running?"is-live":""}`}),"NEON THREAD"]})]})]}),lt.jsx("div",{className:`motion-chip ${r.attached?"is-live":""}`,children:rw[r.movementState]})]}),lt.jsxs("div",{className:"mt-4 flex items-end justify-between",children:[lt.jsxs("div",{className:"speed-number font-mono font-black leading-none text-white",children:[r.speed.toFixed(0),lt.jsx("span",{className:"ml-2 text-[9px] font-bold tracking-[0.18em] text-cyan-100/42",children:"M/S"})]}),lt.jsxs("div",{className:"pb-1 text-right",children:[lt.jsx("div",{className:"metric-label",children:"VERT"}),lt.jsxs("div",{className:`mt-1 font-mono text-[12px] font-black ${r.verticalSpeed>=0?"text-cyan-100":"text-rose-100"}`,children:[r.verticalSpeed>=0?"+":"",r.verticalSpeed.toFixed(1)]})]})]}),lt.jsx("div",{className:"speed-track mt-3",children:lt.jsx("span",{style:{width:`${g}%`}})}),lt.jsxs("div",{className:"mt-2 flex justify-between text-[7px] font-bold tracking-[0.2em] text-white/20",children:[lt.jsx("span",{children:"0"}),lt.jsx("span",{children:"FLOW"}),lt.jsx("span",{children:"60+"})]})]}),lt.jsx("div",{className:"absolute left-1/2 top-4 hidden -translate-x-1/2 sm:block sm:top-6",children:lt.jsxs("div",{className:"hud-panel compass-shell rounded-full px-5 py-2.5",children:[lt.jsx("div",{className:"flex min-w-[250px] items-center justify-center gap-5 text-[8px] font-black tracking-[0.24em] text-white/26",children:T.map(C=>lt.jsx("span",{className:C===r.compass?"compass-active":"",children:C},C))}),lt.jsxs("div",{className:"mt-1 flex items-center justify-center gap-3 font-mono text-[9px] text-white/36",children:[lt.jsx("span",{className:"compass-line"}),lt.jsxs("b",{className:"text-white/84",children:[r.heading.toFixed(0).padStart(3,"0"),"°"]}),lt.jsx("span",{className:"compass-line reverse"})]})]})}),lt.jsxs("div",{className:"hud-panel altitude-cluster rounded-[20px] px-4 py-3 sm:px-5 sm:py-4",children:[lt.jsxs("div",{className:"flex items-start gap-4",children:[lt.jsxs("div",{children:[lt.jsx("div",{className:"metric-label",children:"ALTITUDE"}),lt.jsxs("div",{className:"mt-1 font-mono text-[23px] font-black tracking-[-0.05em] text-white",children:[r.altitude.toFixed(1),lt.jsx("span",{className:"ml-1 text-[8px] tracking-[0.15em] text-white/28",children:"M"})]})]}),lt.jsx("div",{className:"alt-mini relative h-10 w-1 overflow-hidden rounded-full bg-white/[0.06]",children:lt.jsx("span",{className:"absolute bottom-0 left-0 w-full rounded-full",style:{height:`${E}%`}})})]}),lt.jsxs("div",{className:"mt-3 flex items-center justify-between gap-4 text-[8px] font-bold tracking-[0.17em] text-white/32",children:[lt.jsx("span",{children:f?"NIGHT GRID":"DAY GRID"}),lt.jsx("span",{children:"N"})]})]})]}),lt.jsx("aside",{className:"absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block sm:right-6",children:lt.jsxs("div",{className:`hud-panel web-telemetry w-[154px] rounded-[19px] p-3.5 ${r.attached?"is-attached":""}`,children:[lt.jsxs("div",{className:"flex items-center justify-between",children:[lt.jsx("span",{className:"metric-label",children:"WEB LOAD"}),lt.jsxs("span",{className:"font-mono text-[9px] font-black text-white/72",children:[Math.round(_),"%"]})]}),lt.jsx("div",{className:"tension-track mt-2",children:lt.jsx("span",{style:{width:`${_}%`}})}),lt.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[lt.jsxs("div",{className:"telemetry-cell",children:[lt.jsx("span",{children:"ROPE"}),lt.jsxs("b",{children:[r.ropeLength==null?"--":r.ropeLength.toFixed(0),"m"]})]}),lt.jsxs("div",{className:"telemetry-cell",children:[lt.jsx("span",{children:"DIST"}),lt.jsxs("b",{children:[r.ropeDistance==null?"--":r.ropeDistance.toFixed(0),"m"]})]})]}),lt.jsxs("div",{className:"mt-3 flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/34",children:[lt.jsx("span",{className:`link-node ${r.attached?"on":r.targetValid?"ready":""}`}),M]})]})}),lt.jsx("div",{className:"absolute left-4 top-1/2 hidden -translate-y-1/2 lg:block lg:left-6",children:lt.jsxs("div",{className:"elevation-rail relative h-48 w-7",children:[lt.jsx("span",{className:"rail-line absolute bottom-0 left-2 top-0 w-px"}),lt.jsx("span",{className:"rail-fill absolute bottom-0 left-2 w-px",style:{height:`${E}%`}}),[0,25,50,75,100].map(C=>lt.jsx("i",{className:"rail-tick",style:{bottom:`${C}%`}},C)),lt.jsx("b",{className:"absolute bottom-1/2 left-5 origin-left -rotate-90 text-[7px] uppercase tracking-[0.28em] text-white/20",children:"Elevation"})]})}),lt.jsxs("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:[lt.jsx("div",{className:`kinetic-halo ${r.attached?"is-live":""}`,style:{opacity:.15+y*.35}}),lt.jsxs("div",{className:`aim-reticle relative h-12 w-12 ${r.targetValid?"is-valid":""} ${r.attached?"is-attached":""}`,children:[lt.jsx("span",{className:"reticle-bracket bracket-tl"}),lt.jsx("span",{className:"reticle-bracket bracket-tr"}),lt.jsx("span",{className:"reticle-bracket bracket-bl"}),lt.jsx("span",{className:"reticle-bracket bracket-br"}),lt.jsx("span",{className:"reticle-core absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"})]})]}),lt.jsx("div",{className:"absolute bottom-6 right-6 hidden xl:block",children:lt.jsxs("div",{className:"hud-panel minimap-shell relative h-[142px] w-[142px] overflow-hidden rounded-[22px]",children:[lt.jsx("div",{className:"minimap-grid absolute inset-0"}),lt.jsx("span",{className:"map-landmark prism",title:"Prism Spire"}),lt.jsx("span",{className:"map-landmark crown-a",title:"Split Crown West"}),lt.jsx("span",{className:"map-landmark crown-b",title:"Split Crown East"}),b!=null&&P!=null&&lt.jsx("span",{className:"map-anchor",style:{left:`${b}%`,top:`${P}%`}}),lt.jsx("span",{className:"map-player",style:{left:`${N}%`,top:`${L}%`,transform:`translate(-50%, -50%) rotate(${r.heading}deg)`}}),lt.jsxs("div",{className:"absolute inset-x-3 bottom-2 flex items-center justify-between text-[6px] font-black uppercase tracking-[0.18em] text-white/25",children:[lt.jsx("span",{children:"City Grid"}),lt.jsx("span",{children:"126m"})]})]})}),lt.jsx("div",{className:"absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-[610px] -translate-x-1/2 sm:bottom-6",children:lt.jsxs("div",{className:`web-prompt hud-panel mx-auto flex min-h-[50px] items-center rounded-full px-4 py-2.5 sm:px-5 ${r.attached?"web-live":r.targetValid?"web-ready":""}`,children:[lt.jsx("span",{className:"mouse-glyph mr-3 grid h-7 w-7 shrink-0 place-items-center rounded-full",children:"L"}),lt.jsxs("div",{className:"min-w-0 flex-1",children:[lt.jsx("div",{className:"truncate text-[9px] font-black uppercase tracking-[0.22em] text-white/78",children:M}),lt.jsx("div",{className:"mt-0.5 truncate text-[8px] uppercase tracking-[0.11em] text-white/27",children:x})]}),lt.jsxs("div",{className:`signal-bars ml-4 hidden items-end gap-[2px] sm:flex ${r.targetValid||r.attached?"active":""}`,children:[lt.jsx("i",{}),lt.jsx("i",{}),lt.jsx("i",{}),lt.jsx("i",{})]})]})}),i&&l&&lt.jsxs("div",{className:"absolute bottom-5 left-5 hidden items-center gap-2 text-[7px] font-bold tracking-[0.15em] text-white/25 xl:flex",children:[lt.jsx("span",{className:"micro-key",children:"WASD"}),lt.jsx("span",{children:"MOVE"}),lt.jsx("span",{className:"micro-key",children:"SPACE"}),lt.jsx("span",{children:"JUMP"}),lt.jsx("span",{className:"micro-key",children:"SHIFT"}),lt.jsx("span",{children:"SPRINT"}),lt.jsx("span",{className:"micro-key",children:"R"}),lt.jsx("span",{children:"RESET"})]})]}),(!i||!l)&&lt.jsxs("div",{className:"pause-layer absolute inset-0 z-30 grid place-items-center px-4 py-5",children:[lt.jsx("div",{className:"absolute inset-0 bg-[#02050a]/70 backdrop-blur-[9px]"}),lt.jsx("div",{className:"intro-glow absolute left-1/2 top-1/2 h-[580px] w-[880px] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 rounded-full"}),lt.jsxs("section",{className:"intro-panel relative w-full max-w-[850px] overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#07111b]/90 shadow-[0_32px_110px_rgba(0,0,0,.62)]",children:[lt.jsx("div",{className:"intro-noise absolute inset-0"}),lt.jsx("div",{className:"intro-scan absolute inset-x-0 top-0 h-px"}),lt.jsxs("div",{className:"relative p-6 sm:p-8 lg:p-10",children:[lt.jsxs("div",{className:"flex items-center justify-between gap-4",children:[lt.jsxs("div",{className:"flex items-center gap-3",children:[lt.jsx("div",{className:"brand-mark grid h-10 w-10 place-items-center rounded-[12px] text-[11px] font-black",children:"NT"}),lt.jsxs("div",{children:[lt.jsx("div",{className:"eyebrow",children:"COMPLETE MOMENTUM PLAYGROUND"}),lt.jsx("div",{className:"mt-1 text-[9px] tracking-[0.17em] text-white/28",children:"WEBGL CITY SYSTEM // RUNNER 04 // V9"})]})]}),lt.jsx("button",{className:"ghost-button pointer-events-auto rounded-full px-4 py-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/55",onClick:()=>h(C=>!C),children:f?"☀  Day":"◐  Night"})]}),lt.jsxs("div",{className:"mt-8 grid gap-7 lg:grid-cols-[1.3fr_.7fr] lg:items-end",children:[lt.jsxs("div",{children:[lt.jsx("div",{className:"intro-kicker",children:"VELOCITY IS THE GAME"}),lt.jsxs("h1",{className:"title-lockup mt-3 text-[52px] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white sm:text-[76px]",children:["Neon",lt.jsx("br",{}),lt.jsx("span",{children:"Thread"})]}),lt.jsx("p",{className:"mt-6 max-w-[560px] text-[12px] leading-6 text-white/43 sm:text-[13px]",children:"在原创程序化霓虹都市中跑动、跃起、瞄准真实建筑表面并建立蛛丝。摆荡由当前速度、重力、锚点和真实绳长共同决定；松手后动量完整保留。"})]}),lt.jsxs("div",{className:"city-readout rounded-[21px] border border-white/[0.065] bg-black/20 p-4",children:[lt.jsxs("div",{className:"flex items-center justify-between",children:[lt.jsx("span",{className:"metric-label",children:"SYSTEM"}),lt.jsx("span",{className:"ready-tag",children:"READY"})]}),lt.jsx("div",{className:"mt-4 grid grid-cols-2 gap-2",children:[["PHYSICS","120 HZ"],["TARGET","RAYCAST"],["CAMERA","FREE 3RD"],["WORLD","PROCEDURAL"]].map(([C,O])=>lt.jsxs("div",{className:"readout-cell",children:[lt.jsx("span",{children:C}),lt.jsx("b",{children:O})]},C))}),lt.jsx("div",{className:"mt-3 text-[8px] leading-4 tracking-[0.06em] text-white/27",children:"No remote models · No remote textures · No backend"})]})]}),lt.jsx("div",{className:"mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5",children:[["WASD","移动 / 空中修正"],["鼠标","第三人称观察"],["左键","按住连接蛛丝"],["SPACE","短按低跃 / 长按高跃"],["SHIFT","冲刺 / 保持高速"]].map(([C,O],z)=>lt.jsxs("div",{className:"control-card rounded-[15px] border border-white/[0.055] bg-white/[0.022] p-3",children:[lt.jsxs("div",{className:"flex items-center justify-between",children:[lt.jsx("b",{children:C}),lt.jsxs("i",{children:["0",z+1]})]}),lt.jsx("span",{children:O})]},C))}),lt.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[lt.jsx("button",{onClick:v,className:"primary-cta pointer-events-auto flex-1 rounded-[17px] px-6 py-4 text-[10px] font-black uppercase tracking-[0.24em] text-[#041018] transition active:scale-[0.99]",children:i?"Resume Momentum":"Enter City"}),i&&lt.jsx("button",{onClick:()=>{var C;(C=p.current)==null||C.reset(),v()},className:"secondary-cta pointer-events-auto rounded-[17px] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/52",children:"Reset Position"})]}),lt.jsx("div",{className:"mt-3 text-center text-[7px] font-bold uppercase tracking-[0.22em] text-white/18",children:"ESC · RELEASE MOUSE   /   R · RESET   /   N · DAY–NIGHT"})]})]})]})]})}HS.createRoot(document.getElementById("root")).render(lt.jsx(LS.StrictMode,{children:lt.jsx(ow,{})}));
