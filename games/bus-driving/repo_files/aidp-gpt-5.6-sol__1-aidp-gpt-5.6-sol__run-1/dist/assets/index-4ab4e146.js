(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fm={exports:{}},Gl={},Om={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),O_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),k_=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),X_=Symbol.for("react.memo"),Y_=Symbol.for("react.lazy"),wh=Symbol.iterator;function q_(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},km=Object.assign,zm={};function $s(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||Bm}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=$s.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||Bm}var Qd=jd.prototype=new Vm;Qd.constructor=jd;km(Qd,$s.prototype);Qd.isPureReactComponent=!0;var Ah=Array.isArray,Hm=Object.prototype.hasOwnProperty,Jd={current:null},Gm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,i)&&!Gm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ja,type:t,key:s,ref:a,props:r,_owner:Jd.current}}function $_(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function K_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rh=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K_(""+t.key):e.toString(36)}function $o(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ja:case O_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+uc(a,0):i,Ah(r)?(n="",t!=null&&(n=t.replace(Rh,"$&/")+"/"),$o(r,e,n,"",function(u){return u})):r!=null&&(ef(r)&&(r=$_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Rh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+uc(s,o);a+=$o(s,e,n,l,r)}else if(l=q_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,o++),a+=$o(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return $o(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Ko={transition:null},j_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:Jd};qe.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=$s;qe.Fragment=B_;qe.Profiler=z_;qe.PureComponent=jd;qe.StrictMode=k_;qe.Suspense=W_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=km({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Hm.call(e,l)&&!Gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ja,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V_,_context:t},t.Consumer=t};qe.createElement=Wm;qe.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:G_,render:t}};qe.isValidElement=ef;qe.lazy=function(t){return{$$typeof:Y_,_payload:{_status:-1,_result:t},_init:Z_}};qe.memo=function(t,e){return{$$typeof:X_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};qe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};qe.useCallback=function(t,e){return on.current.useCallback(t,e)};qe.useContext=function(t){return on.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};qe.useEffect=function(t,e){return on.current.useEffect(t,e)};qe.useId=function(){return on.current.useId()};qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return on.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};qe.useRef=function(t){return on.current.useRef(t)};qe.useState=function(t){return on.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return on.current.useTransition()};qe.version="18.2.0";Om.exports=qe;var un=Om.exports;const Q_=F_(un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=un,ev=Symbol.for("react.element"),tv=Symbol.for("react.fragment"),nv=Object.prototype.hasOwnProperty,iv=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)nv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ev,type:t,key:s,ref:a,props:r,_owner:iv.current}}Gl.Fragment=tv;Gl.jsx=Xm;Gl.jsxs=Xm;Fm.exports=Gl;var Q=Fm.exports,pu={},Ym={exports:{}},Cn={},qm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var te=U.length;U.push(X);e:for(;0<te;){var re=te-1>>>1,ue=U[re];if(0<r(ue,X))U[re]=X,U[te]=ue,te=re;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],te=U.pop();if(te!==X){U[0]=te;e:for(var re=0,ue=U.length,We=ue>>>1;re<We;){var je=2*(re+1)-1,Ve=U[je],Z=je+1,oe=U[Z];if(0>r(Ve,te))Z<ue&&0>r(oe,Ve)?(U[re]=oe,U[Z]=te,re=Z):(U[re]=Ve,U[je]=te,re=je);else if(Z<ue&&0>r(oe,te))U[re]=oe,U[Z]=te,re=Z;else break e}}return X}function r(U,X){var te=U.sortIndex-X.sortIndex;return te!==0?te:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,d=null,c=3,p=!1,g=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=U)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function S(U){if(M=!1,y(U),!g)if(n(l)!==null)g=!0,Y(w);else{var X=n(u);X!==null&&V(S,X.startTime-U)}}function w(U,X){g=!1,M&&(M=!1,f(_),_=-1),p=!0;var te=c;try{for(y(X),d=n(l);d!==null&&(!(d.expirationTime>X)||U&&!P());){var re=d.callback;if(typeof re=="function"){d.callback=null,c=d.priorityLevel;var ue=re(d.expirationTime<=X);X=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&i(l),y(X)}else i(l);d=n(l)}if(d!==null)var We=!0;else{var je=n(u);je!==null&&V(S,je.startTime-X),We=!1}return We}finally{d=null,c=te,p=!1}}var T=!1,A=null,_=-1,R=5,b=-1;function P(){return!(t.unstable_now()-b<R)}function I(){if(A!==null){var U=t.unstable_now();b=U;var X=!0;try{X=A(!0,U)}finally{X?W():(T=!1,A=null)}}else T=!1}var W;if(typeof x=="function")W=function(){x(I)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,O=q.port2;q.port1.onmessage=I,W=function(){O.postMessage(null)}}else W=function(){m(I,0)};function Y(U){A=U,T||(T=!0,W())}function V(U,X){_=m(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Y(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(c){case 1:case 2:case 3:var X=3;break;default:X=c}var te=c;c=X;try{return U()}finally{c=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=c;c=U;try{return X()}finally{c=te}},t.unstable_scheduleCallback=function(U,X,te){var re=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?re+te:re):te=re,U){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=te+ue,U={id:h++,callback:X,priorityLevel:U,startTime:te,expirationTime:ue,sortIndex:-1},te>re?(U.sortIndex=te,e(u,U),n(l)===null&&U===n(u)&&(M?(f(_),_=-1):M=!0,V(S,te-re))):(U.sortIndex=ue,e(l,U),g||p||(g=!0,Y(w))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var X=c;return function(){var te=c;c=X;try{return U.apply(this,arguments)}finally{c=te}}}})($m);qm.exports=$m;var sv=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=un,Rn=sv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,La={};function Xr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(La[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},bh={};function ov(t){return mu.call(bh,t)?!0:mu.call(Ch,t)?!1:av.test(t)?bh[t]=!0:(Ch[t]=!0,!1)}function lv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cv(t,e,n,i){if(e===null||typeof e>"u"||lv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cv(e,n,r,i)&&(n=null),i||r===null?ov(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Ph=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,dc;function pa(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function uv(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case gu:return"Profiler";case sf:return"StrictMode";case _u:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qm:return(t.displayName||"Context")+".Consumer";case jm:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case of:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fv(t){var e=eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=fv(t))}function tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ng(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function yu(t,e){ng(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mu(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ma(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function ig(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hv=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var pv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(pv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,Cs=null,bs=null;function Uh(t){if(t=eo(t)){if(typeof Cu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=$l(e),Cu(t.stateNode,t.type,e))}}function lg(t){Cs?bs?bs.push(t):bs=[t]:Cs=t}function cg(){if(Cs){var t=Cs,e=bs;if(bs=Cs=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function ug(t,e){return t(e)}function dg(){}var pc=!1;function fg(t,e,n){if(pc)return t(e,n);pc=!0;try{return ug(t,e,n)}finally{pc=!1,(Cs!==null||bs!==null)&&(dg(),cg())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var bu=!1;if(Di)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){bu=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{bu=!1}function mv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ya=!1,hl=null,pl=!1,Pu=null,gv={onError:function(t){ya=!0,hl=t}};function _v(t,e,n,i,r,s,a,o,l){ya=!1,hl=null,mv.apply(gv,arguments)}function vv(t,e,n,i,r,s,a,o,l){if(_v.apply(this,arguments),ya){if(ya){var u=hl;ya=!1,hl=null}else throw Error(ae(198));pl||(pl=!0,Pu=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fh(t){if(Yr(t)!==t)throw Error(ae(188))}function xv(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fh(r),t;if(s===i)return Fh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function pg(t){return t=xv(t),t!==null?mg(t):null}function mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mg(t);if(e!==null)return e;t=t.sibling}return null}var gg=Rn.unstable_scheduleCallback,Oh=Rn.unstable_cancelCallback,Sv=Rn.unstable_shouldYield,yv=Rn.unstable_requestPaint,Lt=Rn.unstable_now,Mv=Rn.unstable_getCurrentPriorityLevel,cf=Rn.unstable_ImmediatePriority,_g=Rn.unstable_UserBlockingPriority,ml=Rn.unstable_NormalPriority,Ev=Rn.unstable_LowPriority,vg=Rn.unstable_IdlePriority,Wl=null,di=null;function Tv(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Rv,wv=Math.log,Av=Math.LN2;function Rv(t){return t>>>=0,t===0?32:31-(wv(t)/Av|0)|0}var uo=64,fo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function Cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Cv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xg(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Pv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yg,df,Mg,Eg,Tg,Du=!1,ho=[],rr=null,sr=null,ar=null,Ia=new Map,Ua=new Map,Qi=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function na(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=eo(e),e!==null&&df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dv(t,e,n,i,r){switch(e){case"focusin":return rr=na(rr,t,e,n,i,r),!0;case"dragenter":return sr=na(sr,t,e,n,i,r),!0;case"mouseover":return ar=na(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,na(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ua.set(s,na(Ua.get(s)||null,t,e,n,i,r)),!0}return!1}function wg(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=hg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return e=eo(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){Zo(t)&&n.delete(e)}function Nv(){Du=!1,rr!==null&&Zo(rr)&&(rr=null),sr!==null&&Zo(sr)&&(sr=null),ar!==null&&Zo(ar)&&(ar=null),Ia.forEach(kh),Ua.forEach(kh)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,Du||(Du=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,Nv)))}function Fa(t){function e(r){return ia(r,t)}if(0<ho.length){ia(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ia(rr,t),sr!==null&&ia(sr,t),ar!==null&&ia(ar,t),Ia.forEach(e),Ua.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&Qi.shift()}var Ps=Bi.ReactCurrentBatchConfig,_l=!0;function Iv(t,e,n,i){var r=lt,s=Ps.transition;Ps.transition=null;try{lt=1,ff(t,e,n,i)}finally{lt=r,Ps.transition=s}}function Uv(t,e,n,i){var r=lt,s=Ps.transition;Ps.transition=null;try{lt=4,ff(t,e,n,i)}finally{lt=r,Ps.transition=s}}function ff(t,e,n,i){if(_l){var r=Nu(t,e,n,i);if(r===null)wc(t,e,i,vl,n),Bh(t,i);else if(Dv(r,t,e,n,i))i.stopPropagation();else if(Bh(t,i),e&4&&-1<Lv.indexOf(t)){for(;r!==null;){var s=eo(r);if(s!==null&&yg(s),s=Nu(t,e,n,i),s===null&&wc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wc(t,e,i,null,n)}}var vl=null;function Nu(t,e,n,i){if(vl=null,t=lf(i),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case cf:return 1;case _g:return 4;case ml:case Ev:return 16;case vg:return 536870912;default:return 16}default:return 16}}var tr=null,hf=null,jo=null;function Rg(){if(jo)return jo;var t,e=hf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function zh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:zh,this.isPropagationStopped=zh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=bn(Ks),Ja=Et({},Ks,{view:0,detail:0}),Fv=bn(Ja),gc,_c,ra,Xl=Et({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(gc=t.screenX-ra.screenX,_c=t.screenY-ra.screenY):_c=gc=0,ra=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Vh=bn(Xl),Ov=Et({},Xl,{dataTransfer:0}),Bv=bn(Ov),kv=Et({},Ja,{relatedTarget:0}),vc=bn(kv),zv=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=bn(zv),Hv=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gv=bn(Hv),Wv=Et({},Ks,{data:0}),Hh=bn(Wv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qv[t])?!!e[t]:!1}function mf(){return $v}var Kv=Et({},Ja,{key:function(t){if(t.key){var e=Xv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=bn(Kv),jv=Et({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=bn(jv),Qv=Et({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),Jv=bn(Qv),ex=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=bn(ex),nx=Et({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=bn(nx),rx=[9,13,27,32],gf=Di&&"CompositionEvent"in window,Ma=null;Di&&"documentMode"in document&&(Ma=document.documentMode);var sx=Di&&"TextEvent"in window&&!Ma,Cg=Di&&(!gf||Ma&&8<Ma&&11>=Ma),Wh=String.fromCharCode(32),Xh=!1;function bg(t,e){switch(t){case"keyup":return rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function ax(t,e){switch(t){case"compositionend":return Pg(e);case"keypress":return e.which!==32?null:(Xh=!0,Wh);case"textInput":return t=e.data,t===Wh&&Xh?null:t;default:return null}}function ox(t,e){if(gs)return t==="compositionend"||!gf&&bg(t,e)?(t=Rg(),jo=hf=tr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cg&&e.locale!=="ko"?null:e.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lx[t.type]:e==="textarea"}function Lg(t,e,n,i){lg(i),e=xl(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,Oa=null;function cx(t){Hg(t,0)}function Yl(t){var e=xs(t);if(tg(e))return t}function ux(t,e){if(t==="change")return e}var Dg=!1;if(Di){var xc;if(Di){var Sc="oninput"in document;if(!Sc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Sc=typeof qh.oninput=="function"}xc=Sc}else xc=!1;Dg=xc&&(!document.documentMode||9<document.documentMode)}function $h(){Ea&&(Ea.detachEvent("onpropertychange",Ng),Oa=Ea=null)}function Ng(t){if(t.propertyName==="value"&&Yl(Oa)){var e=[];Lg(e,Oa,t,lf(t)),fg(cx,e)}}function dx(t,e,n){t==="focusin"?($h(),Ea=e,Oa=n,Ea.attachEvent("onpropertychange",Ng)):t==="focusout"&&$h()}function fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Oa)}function hx(t,e){if(t==="click")return Yl(e)}function px(t,e){if(t==="input"||t==="change")return Yl(e)}function mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:mx;function Ba(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ug(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gx(t){var e=Ug(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(i!==null&&_f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zh(n,s);var a=Zh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _x=Di&&"documentMode"in document&&11>=document.documentMode,_s=null,Iu=null,Ta=null,Uu=!1;function jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||_s==null||_s!==fl(i)||(i=_s,"selectionStart"in i&&_f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&Ba(Ta,i)||(Ta=i,i=xl(Iu,"onSelect"),0<i.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},yc={},Fg={};Di&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function ql(t){if(yc[t])return yc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fg)return yc[t]=e[n];return t}var Og=ql("animationend"),Bg=ql("animationiteration"),kg=ql("animationstart"),zg=ql("transitionend"),Vg=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Vg.set(t,e),Xr(e,[t])}for(var Mc=0;Mc<Qh.length;Mc++){var Ec=Qh[Mc],vx=Ec.toLowerCase(),xx=Ec[0].toUpperCase()+Ec.slice(1);_r(vx,"on"+xx)}_r(Og,"onAnimationEnd");_r(Bg,"onAnimationIteration");_r(kg,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(zg,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vv(i,e,void 0,t),t.currentTarget=null}function Hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,u),s=l}}}if(pl)throw t=Pu,pl=!1,Pu=null,t}function _t(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function Tc(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[go]){t[go]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Tc("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(Ag(e)){case 1:var r=Iv;break;case 4:r=Uv;break;default:r=ff}n=r.bind(null,e,n,t),r=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}fg(function(){var u=s,h=lf(n),d=[];e:{var c=Vg.get(t);if(c!==void 0){var p=pf,g=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":p=Zv;break;case"focusin":g="focus",p=vc;break;case"focusout":g="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jv;break;case Og:case Bg:case kg:p=Vv;break;case zg:p=tx;break;case"scroll":p=Fv;break;case"wheel":p=ix;break;case"copy":case"cut":case"paste":p=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gh}var M=(e&4)!==0,m=!M&&t==="scroll",f=M?c!==null?c+"Capture":null:c;M=[];for(var x=u,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,f!==null&&(S=Na(x,f),S!=null&&M.push(za(x,S,y)))),m)break;x=x.return}0<M.length&&(c=new p(c,g,null,n,h),d.push({event:c,listeners:M}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==Ru&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ni]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Pr(g):null,g!==null&&(m=Yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(M=Vh,S="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Gh,S="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?c:xs(p),y=g==null?c:xs(g),c=new M(S,x+"leave",p,n,h),c.target=m,c.relatedTarget=y,S=null,Pr(h)===u&&(M=new M(f,x+"enter",g,n,h),M.target=y,M.relatedTarget=m,S=M),m=S,p&&g)t:{for(M=p,f=g,x=0,y=M;y;y=Zr(y))x++;for(y=0,S=f;S;S=Zr(S))y++;for(;0<x-y;)M=Zr(M),x--;for(;0<y-x;)f=Zr(f),y--;for(;x--;){if(M===f||f!==null&&M===f.alternate)break t;M=Zr(M),f=Zr(f)}M=null}else M=null;p!==null&&ep(d,c,p,M,!1),g!==null&&m!==null&&ep(d,m,g,M,!0)}}e:{if(c=u?xs(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var w=ux;else if(Yh(c))if(Dg)w=px;else{w=fx;var T=dx}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(w=hx);if(w&&(w=w(t,u))){Lg(d,w,n,h);break e}T&&T(t,c,u),t==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&Mu(c,"number",c.value)}switch(T=u?xs(u):window,t){case"focusin":(Yh(T)||T.contentEditable==="true")&&(_s=T,Iu=u,Ta=null);break;case"focusout":Ta=Iu=_s=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,jh(d,n,h);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":jh(d,n,h)}var A;if(gf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else gs?bg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Cg&&n.locale!=="ko"&&(gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&gs&&(A=Rg()):(tr=h,hf="value"in tr?tr.value:tr.textContent,gs=!0)),T=xl(u,_),0<T.length&&(_=new Hh(_,t,null,n,h),d.push({event:_,listeners:T}),A?_.data=A:(A=Pg(n),A!==null&&(_.data=A)))),(A=sx?ax(t,n):ox(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(h=new Hh("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=A))}Hg(d,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(za(t,s,r)),s=Na(t,e),s!=null&&i.push(za(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Na(n,s),l!=null&&a.unshift(za(n,l,o))):r||(l=Na(n,s),l!=null&&a.push(za(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var yx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(yx,`
`).replace(Mx,"")}function _o(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(ae(425))}function Sl(){}var Fu=null,Ou=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(wx)}:ku;function wx(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),oi="__reactFiber$"+Zs,Va="__reactProps$"+Zs,Ni="__reactContainer$"+Zs,zu="__reactEvents$"+Zs,Ax="__reactListeners$"+Zs,Rx="__reactHandles$"+Zs;function Pr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ip(t);t!==null;){if(n=t[oi])return n;t=ip(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[oi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function $l(t){return t[Va]||null}var Vu=[],Ss=-1;function vr(t){return{current:t}}function vt(t){0>Ss||(t.current=Vu[Ss],Vu[Ss]=null,Ss--)}function gt(t,e){Ss++,Vu[Ss]=t.current,t.current=e}var pr={},Jt=vr(pr),hn=vr(!1),Br=pr;function Os(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function yl(){vt(hn),vt(Jt)}function rp(t,e,n){if(Jt.current!==pr)throw Error(ae(168));gt(Jt,e),gt(hn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,dv(t)||"Unknown",r));return Et({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Br=Jt.current,gt(Jt,t),gt(hn,hn.current),!0}function sp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Wg(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,vt(hn),vt(Jt),gt(Jt,t)):vt(hn),gt(hn,n)}var wi=null,Kl=!1,Rc=!1;function Xg(t){wi===null?wi=[t]:wi.push(t)}function Cx(t){Kl=!0,Xg(t)}function xr(){if(!Rc&&wi!==null){Rc=!0;var t=0,e=lt;try{var n=wi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Kl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),gg(cf,xr),r}finally{lt=e,Rc=!1}}return null}var ys=[],Ms=0,El=null,Tl=0,Dn=[],Nn=0,kr=null,Ai=1,Ri="";function wr(t,e){ys[Ms++]=Tl,ys[Ms++]=El,El=t,Tl=e}function Yg(t,e,n){Dn[Nn++]=Ai,Dn[Nn++]=Ri,Dn[Nn++]=kr,kr=t;var i=Ai;t=Ri;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-$n(e)+r|n<<r|i,Ri=s+t}else Ai=1<<s|n<<r|i,Ri=t}function vf(t){t.return!==null&&(wr(t,1),Yg(t,1,0))}function xf(t){for(;t===El;)El=ys[--Ms],ys[Ms]=null,Tl=ys[--Ms],ys[Ms]=null;for(;t===kr;)kr=Dn[--Nn],Dn[Nn]=null,Ri=Dn[--Nn],Dn[Nn]=null,Ai=Dn[--Nn],Dn[Nn]=null}var An=null,wn=null,xt=!1,Xn=null;function qg(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,wn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,wn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(xt){var e=wn;if(e){var n=e;if(!ap(t,e)){if(Hu(t))throw Error(ae(418));e=or(n.nextSibling);var i=An;e&&ap(t,e)?qg(i,n):(t.flags=t.flags&-4097|2,xt=!1,An=t)}}else{if(Hu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,xt=!1,An=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function vo(t){if(t!==An)return!1;if(!xt)return op(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=wn)){if(Hu(t))throw $g(),Error(ae(418));for(;e;)qg(t,e),e=or(e.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=An?or(t.stateNode.nextSibling):null;return!0}function $g(){for(var t=wn;t;)t=or(t.nextSibling)}function Bs(){wn=An=null,xt=!1}function Sf(t){Xn===null?Xn=[t]:Xn.push(t)}var bx=Bi.ReactCurrentBatchConfig;function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wl=vr(null),Al=null,Es=null,yf=null;function Mf(){yf=Es=Al=null}function Ef(t){var e=wl.current;vt(wl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Al=t,yf=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Al===null)throw Error(ae(308));Es=t,Al.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Lr=null;function Tf(t){Lr===null?Lr=[t]:Lr.push(t)}function Kg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}function lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=u=l=null,o=s;do{var c=o.lane,p=o.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,M=o;switch(c=e,p=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){d=g.call(p,d,c);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,c=typeof g=="function"?g.call(p,d,c):g,c==null)break e;d=Et({},d,c);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,a|=c;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;c=o,o=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(1);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=d}}function cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var jg=new Km.Component().refs;function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ur(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Kn(e,t,r,i),Jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ur(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Kn(e,t,r,i),Jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=ur(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Kn(e,t,i,n),Jo(e,t,i))}};function up(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function Qg(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=pn(e)?Br:Jt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=jg,wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=pn(e)?Br:Jt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===jg&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function Jg(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=dr(f,x),f.index=0,f.sibling=null,f}function s(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=2,x):y):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,y,S){return x===null||x.tag!==6?(x=Ic(y,f.mode,S),x.return=f,x):(x=r(x,y),x.return=f,x)}function l(f,x,y,S){var w=y.type;return w===ms?h(f,x,y.props.children,S,y.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zi&&fp(w)===x.type)?(S=r(x,y.props),S.ref=sa(f,x,y),S.return=f,S):(S=sl(y.type,y.key,y.props,null,f.mode,S),S.ref=sa(f,x,y),S.return=f,S)}function u(f,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Uc(y,f.mode,S),x.return=f,x):(x=r(x,y.children||[]),x.return=f,x)}function h(f,x,y,S,w){return x===null||x.tag!==7?(x=Fr(y,f.mode,S,w),x.return=f,x):(x=r(x,y),x.return=f,x)}function d(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ic(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:return y=sl(x.type,x.key,x.props,null,f.mode,y),y.ref=sa(f,null,x),y.return=f,y;case ps:return x=Uc(x,f.mode,y),x.return=f,x;case Zi:var S=x._init;return d(f,S(x._payload),y)}if(ma(x)||ea(x))return x=Fr(x,f.mode,y,null),x.return=f,x;xo(f,x)}return null}function c(f,x,y,S){var w=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(f,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:return y.key===w?l(f,x,y,S):null;case ps:return y.key===w?u(f,x,y,S):null;case Zi:return w=y._init,c(f,x,w(y._payload),S)}if(ma(y)||ea(y))return w!==null?null:h(f,x,y,S,null);xo(f,y)}return null}function p(f,x,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(y)||null,o(x,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oo:return f=f.get(S.key===null?y:S.key)||null,l(x,f,S,w);case ps:return f=f.get(S.key===null?y:S.key)||null,u(x,f,S,w);case Zi:var T=S._init;return p(f,x,y,T(S._payload),w)}if(ma(S)||ea(S))return f=f.get(y)||null,h(x,f,S,w,null);xo(x,S)}return null}function g(f,x,y,S){for(var w=null,T=null,A=x,_=x=0,R=null;A!==null&&_<y.length;_++){A.index>_?(R=A,A=null):R=A.sibling;var b=c(f,A,y[_],S);if(b===null){A===null&&(A=R);break}t&&A&&b.alternate===null&&e(f,A),x=s(b,x,_),T===null?w=b:T.sibling=b,T=b,A=R}if(_===y.length)return n(f,A),xt&&wr(f,_),w;if(A===null){for(;_<y.length;_++)A=d(f,y[_],S),A!==null&&(x=s(A,x,_),T===null?w=A:T.sibling=A,T=A);return xt&&wr(f,_),w}for(A=i(f,A);_<y.length;_++)R=p(A,f,_,y[_],S),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?_:R.key),x=s(R,x,_),T===null?w=R:T.sibling=R,T=R);return t&&A.forEach(function(P){return e(f,P)}),xt&&wr(f,_),w}function M(f,x,y,S){var w=ea(y);if(typeof w!="function")throw Error(ae(150));if(y=w.call(y),y==null)throw Error(ae(151));for(var T=w=null,A=x,_=x=0,R=null,b=y.next();A!==null&&!b.done;_++,b=y.next()){A.index>_?(R=A,A=null):R=A.sibling;var P=c(f,A,b.value,S);if(P===null){A===null&&(A=R);break}t&&A&&P.alternate===null&&e(f,A),x=s(P,x,_),T===null?w=P:T.sibling=P,T=P,A=R}if(b.done)return n(f,A),xt&&wr(f,_),w;if(A===null){for(;!b.done;_++,b=y.next())b=d(f,b.value,S),b!==null&&(x=s(b,x,_),T===null?w=b:T.sibling=b,T=b);return xt&&wr(f,_),w}for(A=i(f,A);!b.done;_++,b=y.next())b=p(A,f,_,b.value,S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?_:b.key),x=s(b,x,_),T===null?w=b:T.sibling=b,T=b);return t&&A.forEach(function(I){return e(f,I)}),xt&&wr(f,_),w}function m(f,x,y,S){if(typeof y=="object"&&y!==null&&y.type===ms&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:e:{for(var w=y.key,T=x;T!==null;){if(T.key===w){if(w=y.type,w===ms){if(T.tag===7){n(f,T.sibling),x=r(T,y.props.children),x.return=f,f=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zi&&fp(w)===T.type){n(f,T.sibling),x=r(T,y.props),x.ref=sa(f,T,y),x.return=f,f=x;break e}n(f,T);break}else e(f,T);T=T.sibling}y.type===ms?(x=Fr(y.props.children,f.mode,S,y.key),x.return=f,f=x):(S=sl(y.type,y.key,y.props,null,f.mode,S),S.ref=sa(f,x,y),S.return=f,f=S)}return a(f);case ps:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),x=r(x,y.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Uc(y,f.mode,S),x.return=f,f=x}return a(f);case Zi:return T=y._init,m(f,x,T(y._payload),S)}if(ma(y))return g(f,x,y,S);if(ea(y))return M(f,x,y,S);xo(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,y),x.return=f,f=x):(n(f,x),x=Ic(y,f.mode,S),x.return=f,f=x),a(f)):n(f,x)}return m}var ks=Jg(!0),e0=Jg(!1),to={},fi=vr(to),Ha=vr(to),Ga=vr(to);function Dr(t){if(t===to)throw Error(ae(174));return t}function Af(t,e){switch(gt(Ga,e),gt(Ha,t),gt(fi,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tu(e,t)}vt(fi),gt(fi,e)}function zs(){vt(fi),vt(Ha),vt(Ga)}function t0(t){Dr(Ga.current);var e=Dr(fi.current),n=Tu(e,t.type);e!==n&&(gt(Ha,t),gt(fi,n))}function Rf(t){Ha.current===t&&(vt(fi),vt(Ha))}var St=vr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Cf(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var el=Bi.ReactCurrentDispatcher,bc=Bi.ReactCurrentBatchConfig,zr=0,Mt=null,It=null,zt=null,bl=!1,wa=!1,Wa=0,Px=0;function qt(){throw Error(ae(321))}function bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Pf(t,e,n,i,r,s){if(zr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Ix:Ux,t=n(i,r),wa){s=0;do{if(wa=!1,Wa=0,25<=s)throw Error(ae(301));s+=1,zt=It=null,e.updateQueue=null,el.current=Fx,t=n(i,r)}while(wa)}if(el.current=Pl,e=It!==null&&It.next!==null,zr=0,zt=It=Mt=null,bl=!1,e)throw Error(ae(300));return t}function Lf(){var t=Wa!==0;return Wa=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function On(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(ae(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function Xa(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((zr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Mt.lanes|=h,Vr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Zn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Zn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n0(){}function i0(t,e){var n=Mt,i=On(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Df(a0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,s0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ae(349));zr&30||r0(n,e,r)}return r}function r0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s0(t,e,n,i){e.value=n,e.getSnapshot=i,o0(e)&&l0(t)}function a0(t,e,n){return n(function(){o0(e)&&l0(t)})}function o0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function l0(t){var e=Ii(t,1);e!==null&&Kn(e,t,1,-1)}function hp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=Nx.bind(null,Mt,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c0(){return On().memoizedState}function tl(t,e,n,i){var r=si();Mt.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&bf(i,a.deps)){r.memoizedState=Ya(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function pp(t,e){return tl(8390656,8,t,e)}function Df(t,e){return jl(2048,8,t,e)}function u0(t,e){return jl(4,2,t,e)}function d0(t,e){return jl(4,4,t,e)}function f0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,f0.bind(null,e,t),n)}function Nf(){}function p0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g0(t,e,n){return zr&21?(Zn(n,e)||(n=xg(),Mt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Lx(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=bc.transition;bc.transition={};try{t(!1),e()}finally{lt=n,bc.transition=i}}function _0(){return On().memoizedState}function Dx(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},v0(t))x0(e,n);else if(n=Kg(t,e,n,i),n!==null){var r=rn();Kn(n,t,i,r),S0(n,e,i)}}function Nx(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(t))x0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Zn(o,a)){var l=e.interleaved;l===null?(r.next=r,Tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Kg(t,e,r,i),n!==null&&(r=rn(),Kn(n,t,i,r),S0(n,e,i))}}function v0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function x0(t,e){wa=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}var Pl={readContext:Fn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Ix={readContext:Fn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,f0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:hp,useDebugValue:Nf,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=hp(!1),e=t[0];return t=Lx.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=si();if(xt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Vt===null)throw Error(ae(349));zr&30||r0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,pp(a0.bind(null,i,s,t),[t]),i.flags|=2048,Ya(9,s0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Vt.identifierPrefix;if(xt){var n=Ri,i=Ai;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ux={readContext:Fn,useCallback:p0,useContext:Fn,useEffect:Df,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:d0,useMemo:m0,useReducer:Pc,useRef:c0,useState:function(){return Pc(Xa)},useDebugValue:Nf,useDeferredValue:function(t){var e=On();return g0(e,It.memoizedState,t)},useTransition:function(){var t=Pc(Xa)[0],e=On().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1},Fx={readContext:Fn,useCallback:p0,useContext:Fn,useEffect:Df,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:d0,useMemo:m0,useReducer:Lc,useRef:c0,useState:function(){return Lc(Xa)},useDebugValue:Nf,useDeferredValue:function(t){var e=On();return It===null?e.memoizedState=t:g0(e,It.memoizedState,t)},useTransition:function(){var t=Lc(Xa)[0],e=On().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",i=e;do n+=uv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ox=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,id=i),qu(t,e)},n}function M0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ox;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jx.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Bx=Bi.ReactCurrentOwner,fn=!1;function nn(t,e,n,i){e.child=t===null?e0(e,null,n,i):ks(e,t.child,n,i)}function vp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Pf(t,e,n,i,s,r),n=Lf(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&n&&vf(e),e.flags|=1,nn(t,e,i,r),e.child)}function xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E0(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return $u(t,e,n,i,r)}function T0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ws,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ws,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(ws,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(ws,yn),yn|=i;return nn(t,e,r,n),e.child}function w0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=pn(n)?Br:Jt.current;return s=Os(e,s),Ls(e,r),n=Pf(t,e,n,i,s,r),i=Lf(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&i&&vf(e),e.flags|=1,nn(t,e,n,r),e.child)}function Sp(t,e,n,i,r){if(pn(n)){var s=!0;Ml(e)}else s=!1;if(Ls(e,r),e.stateNode===null)nl(t,e),Qg(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=pn(n)?Br:Jt.current,u=Os(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&dp(e,a,i,u),ji=!1;var c=e.memoizedState;a.state=c,Rl(e,i,a,r),l=e.memoizedState,o!==i||c!==l||hn.current||ji?(typeof h=="function"&&(Xu(e,n,h,i),l=e.memoizedState),(o=ji||up(e,n,o,i,c,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Zg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Gn(e.type,o),a.props=u,d=e.pendingProps,c=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=pn(n)?Br:Jt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||c!==l)&&dp(e,a,i,l),ji=!1,c=e.memoizedState,a.state=c,Rl(e,i,a,r);var g=e.memoizedState;o!==d||c!==g||hn.current||ji?(typeof p=="function"&&(Xu(e,n,p,i),g=e.memoizedState),(u=ji||up(e,n,u,i,c,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){w0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sp(e,n,!1),Ui(t,e,s);i=e.stateNode,Bx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&sp(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),Af(t,e.containerInfo)}function yp(t,e,n,i,r){return Bs(),Sf(r),e.flags|=256,nn(t,e,n,i),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(St,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ju(n),e.memoizedState=Zu,t):If(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return kx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ju(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function If(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function So(t,e,n,i){return i!==null&&Sf(i),ks(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(ae(422))),So(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,a),e.child.memoizedState=ju(a),e.memoizedState=Zu,s);if(!(e.mode&1))return So(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Dc(s,i,void 0),So(t,e,a,i)}if(o=(a&t.childLanes)!==0,fn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Kn(i,t,r,-1))}return zf(),i=Dc(Error(ae(421))),So(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Qx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=or(r.nextSibling),An=e,xt=!0,Xn=null,t!==null&&(Dn[Nn++]=Ai,Dn[Nn++]=Ri,Dn[Nn++]=kr,Ai=t.id,Ri=t.overflow,kr=e),e=If(e,i.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function C0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zx(t,e,n){switch(e.tag){case 3:A0(e),Bs();break;case 5:t0(e);break;case 1:pn(e.type)&&Ml(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(gt(St,St.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);gt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,T0(t,e,n)}return Ui(t,e,n)}var b0,Qu,P0,L0;b0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};P0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(fi.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Eu(t,r),i=Eu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}wu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(La.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(La.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};L0=function(t,e,n,i){n!==i&&(e.flags|=4)};function aa(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vx(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&yl(),$t(e),null;case 3:return i=e.stateNode,zs(),vt(hn),vt(Jt),Cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(ad(Xn),Xn=null))),Qu(t,e),$t(e),null;case 5:Rf(e);var r=Dr(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return $t(e),null}if(t=Dr(fi.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Va]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)_t(_a[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Lh(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Nh(i,s),_t("invalid",i)}wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":lo(i),Dh(i,s,!0);break;case"textarea":lo(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[Va]=i,b0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Au(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)_t(_a[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Lh(t,i),r=Su(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Nh(t,i),r=Eu(t,i),_t("invalid",t);break;default:r=i}wu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Da(t,l):typeof l=="number"&&Da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&rf(t,s,l,a))}switch(n){case"input":lo(t),Dh(t,i,!1);break;case"textarea":lo(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Dr(Ga.current),Dr(fi.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:_o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return $t(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&wn!==null&&e.mode&1&&!(e.flags&128))$g(),Bs(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[oi]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Xn!==null&&(ad(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):zf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return zs(),Qu(t,e),t===null&&ka(e.stateNode.containerInfo),$t(e),null;case 10:return Ef(e.type._context),$t(e),null;case 17:return pn(e.type)&&yl(),$t(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)aa(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Cl(t),a!==null){for(e.flags|=128,aa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Hs&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return $t(e),null}else 2*Lt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,gt(St,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Hx(t,e){switch(xf(e),e.tag){case 1:return pn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),vt(hn),vt(Jt),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return zs(),null;case 10:return Ef(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var yo=!1,jt=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Ju(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var Ep=!1;function Wx(t,e){if(Fu=_l,t=Ug(),_f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===r&&(o=a),c===s&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},_l=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,m=g.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gn(e.type,M),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=Ep,Ep=!1,g}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ju(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Va],delete e[zu],delete e[Ax],delete e[Rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N0(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var Ht=null,Wn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)I0(t,e,n),n=n.sibling}function I0(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:jt||Ts(n,e);case 6:var i=Ht,r=Wn;Ht=null,Hi(t,e,n),Ht=i,Wn=r,Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),Fa(t)):Ac(Ht,n.stateNode));break;case 4:i=Ht,r=Wn,Ht=n.stateNode.containerInfo,Wn=!0,Hi(t,e,n),Ht=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ju(n,e,a),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!jt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Hi(t,e,n),jt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gx),e.forEach(function(i){var r=Jx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Wn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Wn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Ht===null)throw Error(ae(160));I0(s,a,r),Ht=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Aa(3,t,t.return),Ql(3,t)}catch(M){Rt(t,t.return,M)}try{Aa(5,t,t.return)}catch(M){Rt(t,t.return,M)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Da(r,"")}catch(M){Rt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ng(r,s),Au(o,a);var u=Au(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?og(r,d):h==="dangerouslySetInnerHTML"?sg(r,d):h==="children"?Da(r,d):rf(r,h,d,u)}switch(o){case"input":yu(r,s);break;case"textarea":ig(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):c!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Va]=s}catch(M){Rt(t,t.return,M)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Rt(t,t.return,M)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(M){Rt(t,t.return,M)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Of=Lt())),i&4&&wp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||h,Bn(e,t),jt=u):Bn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Te=t,h=t.child;h!==null;){for(d=Te=h;Te!==null;){switch(c=Te,p=c.child,c.tag){case 0:case 11:case 14:case 15:Aa(4,c,c.return);break;case 1:Ts(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){Rt(i,n,M)}}break;case 5:Ts(c,c.return);break;case 22:if(c.memoizedState!==null){Rp(d);continue}}p!==null?(p.return=c,Te=p):Rp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ag("display",a))}catch(M){Rt(t,t.return,M)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(M){Rt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&wp(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N0(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Da(r,""),i.flags&=-33);var s=Tp(t);nd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Tp(t);td(t,o,a);break;default:throw Error(ae(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xx(t,e,n){Te=t,F0(t)}function F0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=yo;var u=jt;if(yo=a,(jt=l)&&!u)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Cp(r):l!==null?(l.return=a,Te=l):Cp(r);for(;s!==null;)Te=s,F0(s),s=s.sibling;Te=r,yo=o,jt=u}Ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ap(t)}}function Ap(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}jt||e.flags&512&&ed(e)}catch(c){Rt(e,e.return,c)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Rp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Cp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{ed(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{ed(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var Yx=Math.ceil,Ll=Bi.ReactCurrentDispatcher,Uf=Bi.ReactCurrentOwner,Un=Bi.ReactCurrentBatchConfig,tt=0,Vt=null,Nt=null,Wt=0,yn=0,ws=vr(0),Ut=0,qa=null,Vr=0,Jl=0,Ff=0,Ra=null,dn=null,Of=0,Hs=1/0,Ti=null,Dl=!1,id=null,cr=null,Mo=!1,nr=null,Nl=0,Ca=0,rd=null,il=-1,rl=0;function rn(){return tt&6?Lt():il!==-1?il:il=Lt()}function ur(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:bx.transition!==null?(rl===0&&(rl=xg()),rl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Kn(t,e,n,i){if(50<Ca)throw Ca=0,rd=null,Error(ae(185));Qa(t,n,i),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(Jl|=n),Ut===4&&Ji(t,Wt)),mn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Hs=Lt()+500,Kl&&xr()))}function mn(t,e){var n=t.callbackNode;bv(t,e);var i=gl(t,t===Vt?Wt:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?Cx(bp.bind(null,t)):Xg(bp.bind(null,t)),Tx(function(){!(tt&6)&&xr()}),n=null;else{switch(Sg(i)){case 1:n=cf;break;case 4:n=_g;break;case 16:n=ml;break;case 536870912:n=vg;break;default:n=ml}n=W0(n,O0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O0(t,e){if(il=-1,rl=0,tt&6)throw Error(ae(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=gl(t,t===Vt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=tt;tt|=2;var s=k0();(Vt!==t||Wt!==e)&&(Ti=null,Hs=Lt()+500,Ur(t,e));do try{Kx();break}catch(o){B0(t,o)}while(1);Mf(),Ll.current=s,tt=r,Nt!==null?e=0:(Vt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=Lu(t),r!==0&&(i=r,e=sd(t,r))),e===1)throw n=qa,Ur(t,0),Ji(t,i),mn(t,Lt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!qx(r)&&(e=Il(t,i),e===2&&(s=Lu(t),s!==0&&(i=s,e=sd(t,s))),e===1))throw n=qa,Ur(t,0),Ji(t,i),mn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ar(t,dn,Ti);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Of+500-Lt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(Ar.bind(null,t,dn,Ti),e);break}Ar(t,dn,Ti);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yx(i/1960))-i,10<i){t.timeoutHandle=ku(Ar.bind(null,t,dn,Ti),i);break}Ar(t,dn,Ti);break;case 5:Ar(t,dn,Ti);break;default:throw Error(ae(329))}}}return mn(t,Lt()),t.callbackNode===n?O0.bind(null,t):null}function sd(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Il(t,e),t!==2&&(e=dn,dn=n,e!==null&&ad(e)),t}function ad(t){dn===null?dn=t:dn.push.apply(dn,t)}function qx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Ff,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(tt&6)throw Error(ae(327));Ds();var e=gl(t,0);if(!(e&1))return mn(t,Lt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Lu(t);i!==0&&(e=i,n=sd(t,i))}if(n===1)throw n=qa,Ur(t,0),Ji(t,e),mn(t,Lt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,dn,Ti),mn(t,Lt()),null}function Bf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Hs=Lt()+500,Kl&&xr())}}function Hr(t){nr!==null&&nr.tag===0&&!(tt&6)&&Ds();var e=tt;tt|=1;var n=Un.transition,i=lt;try{if(Un.transition=null,lt=1,t)return t()}finally{lt=i,Un.transition=n,tt=e,!(tt&6)&&xr()}}function kf(){yn=ws.current,vt(ws)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ex(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:zs(),vt(hn),vt(Jt),Cf();break;case 5:Rf(i);break;case 4:zs();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Ef(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Vt=t,Nt=t=dr(t.current,null),Wt=yn=e,Ut=0,qa=null,Ff=Jl=Vr=0,dn=Ra=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Lr=null}return t}function B0(t,e){do{var n=Nt;try{if(Mf(),el.current=Pl,bl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(zr=0,zt=It=Mt=null,wa=!1,Wa=0,Uf.current=null,n===null||n.return===null){Ut=1,qa=e,Nt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=gp(a);if(p!==null){p.flags&=-257,_p(p,a,o,s,e),p.mode&1&&mp(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){mp(s,u,e),zf();break e}l=Error(ae(426))}}else if(xt&&o.mode&1){var m=gp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),_p(m,a,o,s,e),Sf(Vs(l,o));break e}}s=l=Vs(l,o),Ut!==4&&(Ut=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=y0(s,l,e);lp(s,f);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cr===null||!cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=M0(s,o,e);lp(s,S);break e}}s=s.return}while(s!==null)}V0(n)}catch(w){e=w,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(1)}function k0(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function zf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Vr&268435455)&&!(Jl&268435455)||Ji(Vt,Wt)}function Il(t,e){var n=tt;tt|=2;var i=k0();(Vt!==t||Wt!==e)&&(Ti=null,Ur(t,e));do try{$x();break}catch(r){B0(t,r)}while(1);if(Mf(),tt=n,Ll.current=i,Nt!==null)throw Error(ae(261));return Vt=null,Wt=0,Ut}function $x(){for(;Nt!==null;)z0(Nt)}function Kx(){for(;Nt!==null&&!Sv();)z0(Nt)}function z0(t){var e=G0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?V0(t):Nt=e,Uf.current=null}function V0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hx(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Nt=null;return}}else if(n=Vx(n,e,yn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Ar(t,e,n){var i=lt,r=Un.transition;try{Un.transition=null,lt=1,Zx(t,e,n,i)}finally{Un.transition=r,lt=i}return null}function Zx(t,e,n,i){do Ds();while(nr!==null);if(tt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Pv(t,s),t===Vt&&(Nt=Vt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,W0(ml,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=lt;lt=1;var o=tt;tt|=4,Uf.current=null,Wx(t,n),U0(n,t),gx(Ou),_l=!!Fu,Ou=Fu=null,t.current=n,Xx(n),yv(),tt=o,lt=a,Un.transition=s}else t.current=n;if(Mo&&(Mo=!1,nr=t,Nl=r),s=t.pendingLanes,s===0&&(cr=null),Tv(n.stateNode),mn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=id,id=null,t;return Nl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===rd?Ca++:(Ca=0,rd=t):Ca=0,xr(),null}function Ds(){if(nr!==null){var t=Sg(Nl),e=Un.transition,n=lt;try{if(Un.transition=null,lt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Nl=0,tt&6)throw Error(ae(331));var r=tt;for(tt|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var h=Te;switch(h.tag){case 0:case 11:case 15:Aa(8,h,s)}var d=h.child;if(d!==null)d.return=h,Te=d;else for(;Te!==null;){h=Te;var c=h.sibling,p=h.return;if(D0(h),h===u){Te=null;break}if(c!==null){c.return=p,Te=c;break}Te=p}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){a=Te;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Te=y;else e:for(a=x;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ql(9,o)}}catch(w){Rt(o,o.return,w)}if(o===a){Te=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Te=S;break e}Te=o.return}}if(tt=r,xr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{lt=n,Un.transition=e}}return!1}function Pp(t,e,n){e=Vs(n,e),e=y0(t,e,1),t=lr(t,e,1),e=rn(),t!==null&&(Qa(t,1,e),mn(t,e))}function Rt(t,e,n){if(t.tag===3)Pp(t,t,n);else for(;e!==null;){if(e.tag===3){Pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Vs(n,t),t=M0(e,t,1),e=lr(e,t,1),t=rn(),e!==null&&(Qa(e,1,t),mn(e,t));break}}e=e.return}}function jx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Lt()-Of?Ur(t,0):Ff|=n),mn(t,e)}function H0(t,e){e===0&&(t.mode&1?(e=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):e=1);var n=rn();t=Ii(t,e),t!==null&&(Qa(t,e,n),mn(t,n))}function Qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function Jx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),H0(t,n)}var G0;G0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,zx(t,e,n);fn=!!(t.flags&131072)}else fn=!1,xt&&e.flags&1048576&&Yg(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Os(e,Jt.current);Ls(e,n),r=Pf(null,e,i,t,r,n);var s=Lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wf(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&vf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tS(i),t=Gn(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=Sp(null,e,i,t,n);break e;case 11:e=vp(null,e,i,t,n);break e;case 14:e=xp(null,e,i,Gn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Sp(t,e,i,r,n);case 3:e:{if(A0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zg(t,e),Rl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(ae(423)),e),e=yp(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(ae(424)),e),e=yp(t,e,i,n,r);break e}else for(wn=or(e.stateNode.containerInfo.firstChild),An=e,xt=!0,Xn=null,n=e0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ui(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return t0(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Bu(i,r)?a=null:s!==null&&Bu(i,s)&&(e.flags|=32),w0(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return R0(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),vp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(wl,i._currentValue),i._currentValue=a,s!==null)if(Zn(s.value,a)){if(s.children===r.children&&!hn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Fn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),xp(t,e,i,r,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),nl(t,e),e.tag=1,pn(i)?(t=!0,Ml(e)):t=!1,Ls(e,n),Qg(e,i,r),Yu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return C0(t,e,n);case 22:return T0(t,e,n)}throw Error(ae(156,e.tag))};function W0(t,e){return gg(t,e)}function eS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new eS(t,e,n,i)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===of)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Vf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ms:return Fr(n.children,r,s,e);case sf:a=8,r|=8;break;case gu:return t=In(12,n,e,r|2),t.elementType=gu,t.lanes=s,t;case _u:return t=In(13,n,e,r),t.elementType=_u,t.lanes=s,t;case vu:return t=In(19,n,e,r),t.elementType=vu,t.lanes=s,t;case Jm:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jm:a=10;break e;case Qm:a=9;break e;case af:a=11;break e;case of:a=14;break e;case Zi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=In(22,t,i,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,i,r,s,a,o,l){return t=new nS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function iS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function X0(t){if(!t)return pr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(pn(n))return Wg(t,n,e)}return e}function Y0(t,e,n,i,r,s,a,o,l){return t=Hf(n,i,!0,t,r,s,a,o,l),t.context=X0(null),n=t.current,i=rn(),r=ur(n),s=bi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,Qa(t,r,i),mn(t,i),t}function tc(t,e,n,i){var r=e.current,s=rn(),a=ur(r);return n=X0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Kn(t,r,a,s),Jo(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gf(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function rS(){return null}var q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}nc.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));tc(t,e,null,null)};nc.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){tc(null,t,null,null)}),e[Ni]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&wg(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function sS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(a);s.call(u)}}var a=Y0(e,i,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=a,t[Ni]=a.current,ka(t.nodeType===8?t.parentNode:t),Hr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ul(l);o.call(u)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=l,t[Ni]=l.current,ka(t.nodeType===8?t.parentNode:t),Hr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ul(a);o.call(l)}}tc(e,a,t,r)}else a=sS(n,e,t,r,i);return Ul(a)}yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(uf(e,n|1),mn(e,Lt()),!(tt&6)&&(Hs=Lt()+500,xr()))}break;case 13:Hr(function(){var i=Ii(t,1);if(i!==null){var r=rn();Kn(i,t,1,r)}}),Gf(t,1)}};df=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=rn();Kn(e,t,134217728,n)}Gf(t,134217728)}};Mg=function(t){if(t.tag===13){var e=ur(t),n=Ii(t,e);if(n!==null){var i=rn();Kn(n,t,e,i)}Gf(t,e)}};Eg=function(){return lt};Tg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Cu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(ae(90));tg(i),yu(i,r)}}}break;case"textarea":ig(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};ug=Bf;dg=Hr;var aS={usingClientEntryPoint:!1,Events:[eo,xs,$l,lg,cg,Bf]},oa={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oS={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pg(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Wl=Eo.inject(oS),di=Eo}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(ae(200));return iS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Xf(t))throw Error(ae(299));var n=!1,i="",r=q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ka(t.nodeType===8?t.parentNode:t),new Wf(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=pg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Hr(t)};Cn.hydrate=function(t,e,n){if(!ic(e))throw Error(ae(200));return rc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=q0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};Cn.render=function(t,e,n){if(!ic(e))throw Error(ae(200));return rc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(ae(40));return t._reactRootContainer?(Hr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Cn.unstable_batchedUpdates=Bf;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return rc(t,e,n,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),Ym.exports=Cn;var lS=Ym.exports,Np=lS;pu.createRoot=Np.createRoot,pu.hydrateRoot=Np.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="185",cS=0,Ip=1,uS=2,al=1,dS=2,va=3,mr=0,gn=1,li=2,Pi=0,Ns=1,Up=2,Fp=3,Op=4,fS=5,Cr=100,hS=101,pS=102,mS=103,gS=104,_S=200,vS=201,xS=202,SS=203,od=204,ld=205,yS=206,MS=207,ES=208,TS=209,wS=210,AS=211,RS=212,CS=213,bS=214,cd=0,ud=1,dd=2,Gs=3,fd=4,hd=5,pd=6,md=7,K0=0,PS=1,LS=2,hi=0,Z0=1,j0=2,Q0=3,qf=4,J0=5,e_=6,t_=7,n_=300,Gr=301,Ws=302,Fc=303,Oc=304,sc=306,gd=1e3,Ci=1001,_d=1002,Gt=1003,DS=1004,To=1005,Qt=1006,Bc=1007,Nr=1008,Tn=1009,i_=1010,r_=1011,$a=1012,$f=1013,gi=1014,ci=1015,Fi=1016,Kf=1017,Zf=1018,Ka=1020,s_=35902,a_=35899,o_=1021,l_=1022,qn=1023,Oi=1026,Ir=1027,c_=1028,jf=1029,Wr=1030,Qf=1031,Jf=1033,ol=33776,ll=33777,cl=33778,ul=33779,vd=35840,xd=35841,Sd=35842,yd=35843,Md=36196,Ed=37492,Td=37496,wd=37488,Ad=37489,Fl=37490,Rd=37491,Cd=37808,bd=37809,Pd=37810,Ld=37811,Dd=37812,Nd=37813,Id=37814,Ud=37815,Fd=37816,Od=37817,Bd=37818,kd=37819,zd=37820,Vd=37821,Hd=36492,Gd=36494,Wd=36495,Xd=36283,Yd=36284,Ol=36285,qd=36286,NS=3200,$d=0,IS=1,er="",Mn="srgb",Bl="srgb-linear",kl="linear",st="srgb",jr=7680,Bp=519,US=512,FS=513,OS=514,eh=515,BS=516,kS=517,th=518,zS=519,kp=35044,zp="300 es",ui=2e3,Za=2001;function VS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HS(){const t=zl("canvas");return t.style.display="block",t}const Vp={};function Hp(...t){const e="THREE."+t.shift();console.log(e,...t)}function u_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=u_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=u_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Is(...t){const e=t.join(" ");e in Vp||(Vp[e]=!0,Ne(...t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const WS={[cd]:ud,[dd]:pd,[fd]:md,[Gs]:hd,[ud]:cd,[pd]:dd,[md]:fd,[hd]:Gs};class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gp=1234567;const ba=Math.PI/180,Xs=180/Math.PI;function js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function nh(t,e){return(t%e+e)%e}function XS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function YS(t,e,n){return t!==e?(n-t)/(e-t):0}function Pa(t,e,n){return(1-n)*t+n*e}function qS(t,e,n,i){return Pa(t,e,1-Math.exp(-n*i))}function $S(t,e=1){return e-Math.abs(nh(t,e*2)-e)}function KS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ZS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function QS(t,e){return t+Math.random()*(e-t)}function JS(t){return t*(.5-Math.random())}function ey(t){t!==void 0&&(Gp=t);let e=Gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ty(t){return t*ba}function ny(t){return t*Xs}function iy(t){return(t&t-1)===0&&t!==0}function ry(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ay(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),c=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*c,o*u);break;case"YZY":t.set(l*c,o*h,l*d,o*u);break;case"ZXZ":t.set(l*d,l*c,o*h,o*u);break;case"XZX":t.set(o*h,l*g,l*p,o*u);break;case"YXY":t.set(l*p,o*h,l*g,o*u);break;case"ZYZ":t.set(l*g,l*p,o*h,o*u);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qr={DEG2RAD:ba,RAD2DEG:Xs,generateUUID:js,clamp:Xe,euclideanModulo:nh,mapLinear:XS,inverseLerp:YS,lerp:Pa,damp:qS,pingpong:$S,smoothstep:KS,smootherstep:ZS,randInt:jS,randFloat:QS,randFloatSpread:JS,seededRandom:ey,degToRad:ty,radToDeg:ny,isPowerOfTwo:iy,ceilPowerOfTwo:ry,floorPowerOfTwo:sy,setQuaternionFromProperEuler:ay,normalize:en,denormalize:hs},dh=class dh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;let Ke=dh;class Qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3],c=s[a+0],p=s[a+1],g=s[a+2],M=s[a+3];if(d!==M||l!==c||u!==p||h!==g){let m=l*c+u*p+h*g+d*M;m<0&&(c=-c,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y,l=l*f+c*o,u=u*f+p*o,h=h*f+g*o,d=d*f+M*o}else{l=l*f+c*o,u=u*f+p*o,h=h*f+g*o,d=d*f+M*o;const x=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=x,u*=x,h*=x,d*=x}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a],c=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+h*d+l*p-u*c,e[n+1]=l*g+h*c+u*d-o*p,e[n+2]=u*g+h*p+o*c-l*d,e[n+3]=h*g-o*d-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),d=o(s/2),c=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=c*h*d+u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d-c*p*g;break;case"YXZ":this._x=c*h*d+u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d+c*p*g;break;case"ZXY":this._x=c*h*d-u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d-c*p*g;break;case"ZYX":this._x=c*h*d-u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d+c*p*g;break;case"YZX":this._x=c*h*d+u*p*g,this._y=u*p*d+c*h*g,this._z=u*h*g-c*p*d,this._w=u*h*d-c*p*g;break;case"XZY":this._x=c*h*d-u*p*g,this._y=u*p*d-c*h*g,this._z=u*h*g+c*p*d,this._w=u*h*d+c*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],d=n[10],c=i+o+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fh=class fh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*h,this.y=i+l*h+o*u-s*d,this.z=r+l*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;let B=fh;const kc=new B,Wp=new Qs,hh=class hh{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],d=i[7],c=i[2],p=i[5],g=i[8],M=r[0],m=r[3],f=r[6],x=r[1],y=r[4],S=r[7],w=r[2],T=r[5],A=r[8];return s[0]=a*M+o*x+l*w,s[3]=a*m+o*y+l*T,s[6]=a*f+o*S+l*A,s[1]=u*M+h*x+d*w,s[4]=u*m+h*y+d*T,s[7]=u*f+h*S+d*A,s[2]=c*M+p*x+g*w,s[5]=c*m+p*y+g*T,s[8]=c*f+p*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,c=o*l-h*s,p=u*s-a*l,g=n*d+i*c+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(r*u-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=c*M,e[4]=(h*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,n)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let Fe=hh;const zc=new Fe,Xp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const t={enabled:!0,workingColorSpace:Bl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Bl]:{primaries:e,whitePoint:i,transfer:kl,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const $e=oy();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class ly{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=zl("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cy=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ly.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let uy=0;const Hc=new B;class sn extends qr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ci,r=Ci,s=Qt,a=Nr,o=qn,l=Tn,u=sn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=js(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=n_;sn.DEFAULT_ANISOTROPY=1;const ph=class ph{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],c=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(p+1)/2,w=(f+1)/2,T=(h+c)/4,A=(d+M)/4,_=(g+m)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(c-h)*(c-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-M)/x,this.z=(c-h)/x,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;let yt=ph;class dy extends qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ih(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends dy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fy extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=class Hl{constructor(e,n,i,r,s,a,o,l,u,h,d,c,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,d,c,p,g,M,m)}set(e,n,i,r,s,a,o,l,u,h,d,c,p,g,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=d,f[14]=c,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*h,p=a*d,g=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=c-M*u,n[9]=-o*l,n[2]=M-c*u,n[6]=g+p*u,n[10]=a*l}else if(e.order==="YXZ"){const c=l*h,p=l*d,g=u*h,M=u*d;n[0]=c+M*o,n[4]=g*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-g,n[6]=M+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*h,p=l*d,g=u*h,M=u*d;n[0]=c-M*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*h,n[9]=M-c*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*h,p=a*d,g=o*h,M=o*d;n[0]=l*h,n[4]=g*u-p,n[8]=c*u+M,n[1]=l*d,n[5]=M*u+c,n[9]=p*u-g,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*u,g=o*l,M=o*u;n[0]=l*h,n[4]=M-c*d,n[8]=g*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*d+g,n[10]=c-M*d}else if(e.order==="XZY"){const c=a*l,p=a*u,g=o*l,M=o*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=c*d+M,n[5]=a*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=M*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,py)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(i,vn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(i,vn)),Gi.normalize(),wo.crossVectors(vn,Gi),r[0]=Gi.x,r[4]=wo.x,r[8]=vn.x,r[1]=Gi.y,r[5]=wo.y,r[9]=vn.y,r[2]=Gi.z,r[6]=wo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],d=i[5],c=i[9],p=i[13],g=i[2],M=i[6],m=i[10],f=i[14],x=i[3],y=i[7],S=i[11],w=i[15],T=r[0],A=r[4],_=r[8],R=r[12],b=r[1],P=r[5],I=r[9],W=r[13],q=r[2],O=r[6],Y=r[10],V=r[14],U=r[3],X=r[7],te=r[11],re=r[15];return s[0]=a*T+o*b+l*q+u*U,s[4]=a*A+o*P+l*O+u*X,s[8]=a*_+o*I+l*Y+u*te,s[12]=a*R+o*W+l*V+u*re,s[1]=h*T+d*b+c*q+p*U,s[5]=h*A+d*P+c*O+p*X,s[9]=h*_+d*I+c*Y+p*te,s[13]=h*R+d*W+c*V+p*re,s[2]=g*T+M*b+m*q+f*U,s[6]=g*A+M*P+m*O+f*X,s[10]=g*_+M*I+m*Y+f*te,s[14]=g*R+M*W+m*V+f*re,s[3]=x*T+y*b+S*q+w*U,s[7]=x*A+y*P+S*O+w*X,s[11]=x*_+y*I+S*Y+w*te,s[15]=x*R+y*W+S*V+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],c=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15],x=l*p-u*c,y=o*p-u*d,S=o*c-l*d,w=a*p-u*h,T=a*c-l*h,A=a*d-o*h;return n*(M*x-m*y+f*S)-i*(g*x-m*w+f*T)+r*(g*y-M*w+f*A)-s*(g*S-M*T+m*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],x=n*o-i*a,y=n*l-r*a,S=n*u-s*a,w=i*l-r*o,T=i*u-s*o,A=r*u-s*l,_=h*M-d*g,R=h*m-c*g,b=h*f-p*g,P=d*m-c*M,I=d*f-p*M,W=c*f-p*m,q=x*W-y*I+S*P+w*b-T*R+A*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/q;return e[0]=(o*W-l*I+u*P)*O,e[1]=(r*I-i*W-s*P)*O,e[2]=(M*A-m*T+f*w)*O,e[3]=(c*T-d*A-p*w)*O,e[4]=(l*b-a*W-u*R)*O,e[5]=(n*W-r*b+s*R)*O,e[6]=(m*S-g*A-f*y)*O,e[7]=(h*A-c*S+p*y)*O,e[8]=(a*I-o*b+u*_)*O,e[9]=(i*b-n*I-s*_)*O,e[10]=(g*T-M*S+f*x)*O,e[11]=(d*S-h*T-p*x)*O,e[12]=(o*R-a*P-l*_)*O,e[13]=(n*P-i*R+r*_)*O,e[14]=(M*y-g*w-m*x)*O,e[15]=(h*w-d*y+c*x)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,d=o+o,c=s*u,p=s*h,g=s*d,M=a*h,m=a*d,f=o*d,x=l*u,y=l*h,S=l*d,w=i.x,T=i.y,A=i.z;return r[0]=(1-(M+f))*w,r[1]=(p+S)*w,r[2]=(g-y)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(c+f))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+y)*A,r[9]=(m-x)*A,r[10]=(1-(c+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),l=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const u=1/a,h=1/o,d=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,h=2*s/(n-e),d=2*s/(i-r),c=(n+e)/(n-e),p=(i+r)/(i-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===ui)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Za)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,h=2/(n-e),d=2/(i-r),c=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===ui)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===Za)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hl.prototype.isMatrix4=!0;let Ct=Hl;const es=new B,kn=new Ct,hy=new B(0,0,0),py=new B(1,1,1),Gi=new B,wo=new B,vn=new B,qp=new Ct,$p=new Qs;class gr{constructor(e=0,n=0,i=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],c=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class f_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const Kp=new B,ts=new Qs,xi=new Ct,Ao=new B,la=new B,gy=new B,_y=new Qs,Zp=new B(1,0,0),jp=new B(0,1,0),Qp=new B(0,0,1),Jp={type:"added"},vy={type:"removed"},ns={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Ft extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,n=new gr,i=new Qs,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Fe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(la,Ao,this.up):xi.lookAt(Ao,la,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(xi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),ns.child=e,this.dispatchEvent(ns),ns.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vy),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),c=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class As extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(u,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=h.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&c>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=nh(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xc(a,s,e+1/3),this.g=Xc(a,s,e),this.b=Xc(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=h_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return $e.workingToColorSpace(Zt.copy(this),e),Math.round(Xe(Zt.r*255,0,255))*65536+Math.round(Xe(Zt.g*255,0,255))*256+Math.round(Xe(Zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Mn){$e.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Ro);const i=Pa(Wi.h,Ro.h,n),r=Pa(Wi.s,Ro.s,n),s=Pa(Wi.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ye;Ye.NAMES=h_;class Vl{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=n,this.far=i}clone(){return new Vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sy extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new B,Si=new B,Yc=new B,yi=new B,is=new B,rs=new B,em=new B,qc=new B,$c=new B,Kc=new B,Zc=new yt,jc=new yt,Qc=new yt;class Yn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),Si.subVectors(i,n),Yc.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(Si),l=zn.dot(Yc),u=Si.dot(Si),h=Si.dot(Yc),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,p=(u*l-o*h)*c,g=(a*h-o*l)*c;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Zc.setScalar(0),jc.setScalar(0),Qc.setScalar(0),Zc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(Qc,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),Si.subVectors(e,n),zn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),qc.subVectors(e,i);const l=is.dot(qc),u=rs.dot(qc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const h=is.dot($c),d=rs.dot($c);if(h>=0&&d<=h)return n.copy(r);const c=l*d-h*u;if(c<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(is,a);Kc.subVectors(e,s);const p=is.dot(Kc),g=rs.dot(Kc);if(g>=0&&p<=g)return n.copy(s);const M=p*u-l*g;if(M<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(rs,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return em.subVectors(s,r),o=(d-h)/(d-h+(p-g)),n.copy(r).addScaledVector(em,o);const f=1/(m+M+c);return a=M*f,o=c*f,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),bo.subVectors(this.max,ca),ss.subVectors(e.a,ca),as.subVectors(e.b,ca),os.subVectors(e.c,ca),Xi.subVectors(as,ss),Yi.subVectors(os,as),yr.subVectors(ss,os);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-yr.z,yr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,yr.z,0,-yr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-yr.y,yr.x,0];return!Jc(n,ss,as,os,bo)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,ss,as,os,bo))?!1:(Po.crossVectors(Xi,Yi),n=[Po.x,Po.y,Po.z],Jc(n,ss,as,os,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new B,new B,new B,new B,new B,new B,new B,new B],Vn=new B,Co=new no,ss=new B,as=new B,os=new B,Xi=new B,Yi=new B,yr=new B,ca=new B,bo=new B,Po=new B,Mr=new B;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Mr.fromArray(t,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),u=n.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Dt=new B,Lo=new Ke;let yy=0;class mi extends qr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lo.fromBufferAttribute(this,n),Lo.applyMatrix3(e),this.setXY(n,Lo.x,Lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class p_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const My=new no,ua=new B,eu=new B;class rh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):My.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const n=ua.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(eu)),this.expandByPoint(ua.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ey=0;const Ln=new Ct,tu=new Ft,ls=new B,xn=new no,da=new no,kt=new B;class jn extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VS(e)?m_:p_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(xn.min,da.min),xn.expandByPoint(kt),kt.addVectors(xn.max,da.max),xn.expandByPoint(kt)):(xn.expandByPoint(da.min),xn.expandByPoint(da.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)kt.fromBufferAttribute(o,u),l&&(ls.fromBufferAttribute(e,u),kt.add(ls)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new B,l[_]=new B;const u=new B,h=new B,d=new B,c=new Ke,p=new Ke,g=new Ke,M=new B,m=new B;function f(_,R,b){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,b),c.fromBufferAttribute(s,_),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,b),h.sub(u),d.sub(u),p.sub(c),g.sub(c);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(M),o[R].add(M),o[b].add(M),l[_].add(m),l[R].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,R=x.length;_<R;++_){const b=x[_],P=b.start,I=b.count;for(let W=P,q=P+I;W<q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new B,S=new B,w=new B,T=new B;function A(_){w.fromBufferAttribute(r,_),T.copy(w);const R=o[_];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),S.crossVectors(T,R);const P=S.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,R=x.length;_<R;++_){const b=x[_],P=b.start,I=b.count;for(let W=P,q=P+I;W<q;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,h=new B,d=new B;if(e)for(let c=0,p=e.count;c<p;c+=3){const g=e.getX(c+0),M=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,m),o.add(h),l.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,c=new u.constructor(l.length*h);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)c[g++]=u[p++]}return new mi(c,h,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const c=u[h],p=e(c,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ty=0;class io extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Ns,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new B,nu=new B,Do=new B,qi=new B,iu=new B,No=new B,ru=new B;class wy{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nu.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Do),o=qi.dot(this.direction),l=-qi.dot(Do),u=qi.lengthSq(),h=Math.abs(1-a*a);let d,c,p,g;if(h>0)if(d=a*l-o,c=a*o-l,g=s*h,d>=0)if(c>=-g)if(c<=g){const M=1/h;d*=M,c*=M,p=d*(d+a*c+2*o)+c*(a*d+c+2*l)+u}else c=s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c=-s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c<=-g?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u):c<=g?(d=0,c=Math.min(Math.max(-s,-l),s),p=c*(c+2*l)+u):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nu).addScaledVector(Do,c),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),h>=0?(s=(e.min.y-c.y)*h,a=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,a=(e.min.y-c.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){iu.subVectors(n,e),No.subVectors(i,e),ru.crossVectors(iu,No);let a=this.direction.dot(ru),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(qi,No));if(l<0)return null;const u=o*this.direction.dot(iu.cross(qi));if(u<0||l+u>a)return null;const h=-o*qi.dot(ru);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sh extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tm=new Ct,Er=new wy,Io=new rh,nm=new B,Uo=new B,Fo=new B,Oo=new B,su=new B,Bo=new B,im=new B,ko=new B;class _i extends Ft{constructor(e=new jn,n=new sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(su.fromBufferAttribute(d,e),a?Bo.addScaledVector(su,h):Bo.addScaledVector(su.sub(n),h))}n.add(Bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Io.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Io,nm)===null||Er.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(tm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,c=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=c.length;g<M;g++){const m=c[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,w=y;S<w;S+=3){const T=o.getX(S),A=o.getX(S+1),_=o.getX(S+2);r=zo(this,f,e,i,u,h,d,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=zo(this,a,e,i,u,h,d,x,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=c.length;g<M;g++){const m=c[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,w=y;S<w;S+=3){const T=S,A=S+1,_=S+2;r=zo(this,f,e,i,u,h,d,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const x=m,y=m+1,S=m+2;r=zo(this,a,e,i,u,h,d,x,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ay(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===mr,o),l===null)return null;ko.copy(o),ko.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ko);return u<n.near||u>n.far?null:{distance:u,point:ko.clone(),object:t}}function zo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Uo),t.getVertexPosition(l,Fo),t.getVertexPosition(u,Oo);const h=Ay(t,e,n,i,Uo,Fo,Oo,im);if(h){const d=new B;Yn.getBarycoord(im,Uo,Fo,Oo,d),r&&(h.uv=Yn.getInterpolatedAttribute(r,o,l,u,d,new Ke)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,o,l,u,d,new Ke)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,u,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new B,materialIndex:0};Yn.getNormal(Uo,Fo,Oo,c.normal),h.face=c,h.barycoord=d}return h}class Ry extends sn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Gt,h=Gt,d,c){super(null,a,o,l,u,h,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new B,Cy=new B,by=new Fe;class Rr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(Cy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(au),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||by.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new rh,Py=new Ke(.5,.5),Vo=new B;class ah{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],d=s[5],c=s[6],p=s[7],g=s[8],M=s[9],m=s[10],f=s[11],x=s[12],y=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-a,p-h,f-g,w-x).normalize(),r[1].setComponents(u+a,p+h,f+g,w+x).normalize(),r[2].setComponents(u+o,p+d,f+M,w+y).normalize(),r[3].setComponents(u-o,p-d,f-M,w-y).normalize(),i)r[4].setComponents(l,c,m,S).normalize(),r[5].setComponents(u-l,p-c,f-m,w-S).normalize();else if(r[4].setComponents(u-l,p-c,f-m,w-S).normalize(),n===ui)r[5].setComponents(u+l,p+c,f+m,w+S).normalize();else if(n===Za)r[5].setComponents(l,c,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=Py.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class g_ extends sn{constructor(e=[],n=Gr,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends sn{constructor(e,n,i=gi,r,s,a,o=Gt,l=Gt,u,h=Oi,d=1){if(h!==Oi&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:d};super(c,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ly extends Ys{constructor(e,n=gi,i=Gr,r,s,a=Gt,o=Gt,l,u=Oi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class __ extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ot extends jn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function g(M,m,f,x,y,S,w,T,A,_,R){const b=S/A,P=w/_,I=S/2,W=w/2,q=T/2,O=A+1,Y=_+1;let V=0,U=0;const X=new B;for(let te=0;te<Y;te++){const re=te*P-W;for(let ue=0;ue<O;ue++){const We=ue*b-I;X[M]=We*x,X[m]=re*y,X[f]=q,u.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(ue/A),d.push(1-te/_),V+=1}}for(let te=0;te<_;te++)for(let re=0;re<A;re++){const ue=c+re+O*te,We=c+re+O*(te+1),je=c+(re+1)+O*(te+1),Ve=c+(re+1)+O*te;l.push(ue,We,Ve),l.push(We,je,Ve),U+=6}o.addGroup(p,U,R),p+=U,c+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fr extends jn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],c=[],p=[];let g=0;const M=[],m=i/2;let f=0;x(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(p,2));function x(){const S=new B,w=new B;let T=0;const A=(n-e)/i;for(let _=0;_<=s;_++){const R=[],b=_/s,P=b*(n-e)+e;for(let I=0;I<=r;I++){const W=I/r,q=W*l+o,O=Math.sin(q),Y=Math.cos(q);w.x=P*O,w.y=-b*i+m,w.z=P*Y,d.push(w.x,w.y,w.z),S.set(O,A,Y).normalize(),c.push(S.x,S.y,S.z),p.push(W,1-b),R.push(g++)}M.push(R)}for(let _=0;_<r;_++)for(let R=0;R<s;R++){const b=M[R][_],P=M[R+1][_],I=M[R+1][_+1],W=M[R][_+1];(e>0||R!==0)&&(h.push(b,P,W),T+=3),(n>0||R!==s-1)&&(h.push(P,I,W),T+=3)}u.addGroup(f,T,0),f+=T}function y(S){const w=g,T=new Ke,A=new B;let _=0;const R=S===!0?e:n,b=S===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*b,0),c.push(0,b,0),p.push(.5,.5),g++;const P=g;for(let I=0;I<=r;I++){const q=I/r*l+o,O=Math.cos(q),Y=Math.sin(q);A.x=R*Y,A.y=m*b,A.z=R*O,d.push(A.x,A.y,A.z),c.push(0,b,0),T.x=O*.5+.5,T.y=Y*.5*b+.5,p.push(T.x,T.y),g++}for(let I=0;I<r;I++){const W=w+I,q=P+I;S===!0?h.push(q,q+1,W):h.push(q+1,q,W),_+=3}u.addGroup(f,_,S===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oh extends fr{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new oh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,d=e/o,c=n/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){const x=f*c-a;for(let y=0;y<u;y++){const S=y*d-s;g.push(S,-x,0),M.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+u*f,S=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;p.push(y,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class lh extends jn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],d=new B,c=new B,p=[],g=[],M=[],m=[];for(let f=0;f<=i;f++){const x=[],y=f/i,S=a+y*o,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w);let A=0;f===0&&a===0?A=.5/n:f===i&&l===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const R=_/n,b=r+R*s;d.x=-T*Math.cos(b),d.y=w,d.z=T*Math.sin(b),g.push(d.x,d.y,d.z),c.copy(d).normalize(),M.push(c.x,c.y,c.z),m.push(R+A,1-y),x.push(u++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const y=h[f][x+1],S=h[f][x],w=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&p.push(y,S,T),(f!==i-1||l<Math.PI)&&p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(rm(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(rm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function rm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Dy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function v_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Ny={clone:qs,merge:tn};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fy extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oy extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class By extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ch extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class zy extends ch{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const ou=new Ct,sm=new B,am=new B;class x_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(am),n.updateMatrixWorld(),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Za||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ho=new B,Go=new Qs,ni=new B;class S_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ho,Go,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new B,om=new Ke,lm=new Ke;class En extends S_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,om,lm),n.subVectors(lm,om)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Vy extends x_{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Xs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hy extends ch{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class uh extends S_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Gy extends x_{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wy extends ch{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Gy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const cs=-90,us=1;class Xy extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new En(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new En(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new En(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new En(cs,us,e,n);l.layers=this.layers,this.add(l);const u=new En(cs,us,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,c,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yy extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mh=class mh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};mh.prototype.isMatrix2=!0;let cm=mh;function um(t,e,n,i){const r=qy(i);switch(n){case o_:return t*e;case c_:return t*e/r.components*r.byteLength;case jf:return t*e/r.components*r.byteLength;case Wr:return t*e*2/r.components*r.byteLength;case Qf:return t*e*2/r.components*r.byteLength;case l_:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case Jf:return t*e*4/r.components*r.byteLength;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case yd:return Math.max(t,16)*Math.max(e,8)/4;case vd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case Ed:case wd:case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:case Fl:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hd:case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ol:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qy(t){switch(t){case Tn:case i_:return{byteLength:1,components:1};case $a:case r_:case Fi:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case gi:case $f:case ci:return{byteLength:4,components:1};case s_:case a_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $y(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,d=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const h=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,h);else{d.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<d.length;p++){const g=d[c],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++c,d[c]=M)}d.length=c+1;for(let p=0,g=d.length;p<g;p++){const M=d[p];t.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
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
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
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
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lM=`#ifdef USE_IRIDESCENCE
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
#endif`,cM=`#ifdef USE_BUMPMAP
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SM=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VM=`#ifdef USE_ENVMAP
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
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
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
#endif`,qM=`uniform sampler2D dfgLUT;
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
}`,$M=`
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
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
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,g1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,M1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:jy,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:eM,aomap_fragment:tM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:rM,begin_vertex:sM,beginnormal_vertex:aM,bsdfs:oM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:_M,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:yM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:TM,colorspace_fragment:wM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:bM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:VM,envmap_vertex:LM,fog_vertex:DM,fog_pars_vertex:NM,fog_fragment:IM,fog_pars_fragment:UM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:OM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:kM,lights_pars_begin:zM,lights_toon_fragment:HM,lights_toon_pars_fragment:GM,lights_phong_fragment:WM,lights_phong_pars_fragment:XM,lights_physical_fragment:YM,lights_physical_pars_fragment:qM,lights_fragment_begin:$M,lights_fragment_maps:KM,lights_fragment_end:ZM,lightprobes_pars_fragment:jM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:oE,morphinstance_vertex:lE,morphcolor_vertex:cE,morphnormal_vertex:uE,morphtarget_pars_vertex:dE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:_E,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:wE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:CE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:DE,shadowmap_vertex:NE,shadowmask_pars_fragment:IE,skinbase_vertex:UE,skinning_pars_vertex:FE,skinning_vertex:OE,skinnormal_vertex:BE,specularmap_fragment:kE,specularmap_pars_fragment:zE,tonemapping_fragment:VE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:WE,uv_pars_fragment:XE,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:$E,background_vert:KE,background_frag:ZE,backgroundCube_vert:jE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:e1,depth_vert:t1,depth_frag:n1,distance_vert:i1,distance_frag:r1,equirect_vert:s1,equirect_frag:a1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:_1,meshphong_frag:v1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:y1,meshtoon_frag:M1,points_vert:E1,points_frag:T1,shadow_vert:w1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ai={basic:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:tn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:tn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:tn([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:tn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:tn([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:tn([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:tn([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:tn([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Wo={r:0,b:0,g:0},b1=new Ct,M_=new Fe;M_.set(-1,0,0,0,1,0,0,0,1);function P1(t,e,n,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,u,h=null,d=0,c=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(x){let y=!1;const S=p(x);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===sc)?(u===void 0&&(u=new _i(new ot(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:qs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b1.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(M_),u.material.toneMapped=$e.getTransfer(S.colorSpace)!==st,(h!==S||d!==S.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _i(new Or(2,2),new vi({name:"BackgroundMaterial",uniforms:qs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(Wo,v_(t)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,y,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:M,dispose:f}}function L1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(P,I,W,q,O){let Y=!1;const V=d(P,q,W,I);s!==V&&(s=V,u(s.object)),Y=p(P,q,W,O),Y&&g(P,q,W,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(P,I,W,q),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function d(P,I,W,q){const O=q.wireframe===!0;let Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);const V=P.isInstancedMesh===!0?P.id:0;let U=Y[V];U===void 0&&(U={},Y[V]=U);let X=U[W.id];X===void 0&&(X={},U[W.id]=X);let te=X[O];return te===void 0&&(te=c(l()),X[O]=te),te}function c(P){const I=[],W=[],q=[];for(let O=0;O<n;O++)I[O]=0,W[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,I,W,q){const O=s.attributes,Y=I.attributes;let V=0;const U=W.getAttributes();for(const X in U)if(U[X].location>=0){const re=O[X];let ue=Y[X];if(ue===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;V++}return s.attributesNum!==V||s.index!==q}function g(P,I,W,q){const O={},Y=I.attributes;let V=0;const U=W.getAttributes();for(const X in U)if(U[X].location>=0){let re=Y[X];re===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),O[X]=ue,V++}s.attributes=O,s.attributesNum=V,s.index=q}function M(){const P=s.newAttributes;for(let I=0,W=P.length;I<W;I++)P[I]=0}function m(P){f(P,0)}function f(P,I){const W=s.newAttributes,q=s.enabledAttributes,O=s.attributeDivisors;W[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),O[P]!==I&&(t.vertexAttribDivisor(P,I),O[P]=I)}function x(){const P=s.newAttributes,I=s.enabledAttributes;for(let W=0,q=I.length;W<q;W++)I[W]!==P[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function y(P,I,W,q,O,Y,V){V===!0?t.vertexAttribIPointer(P,I,W,O,Y):t.vertexAttribPointer(P,I,W,q,O,Y)}function S(P,I,W,q){M();const O=q.attributes,Y=W.getAttributes(),V=I.defaultAttributeValues;for(const U in Y){const X=Y[U];if(X.location>=0){let te=O[U];if(te===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){const re=te.normalized,ue=te.itemSize,We=e.get(te);if(We===void 0)continue;const je=We.buffer,Ve=We.type,Z=We.bytesPerElement,oe=Ve===t.INT||Ve===t.UNSIGNED_INT||te.gpuType===$f;if(te.isInterleavedBufferAttribute){const se=te.data,$=se.stride,ie=te.offset;if(se.isInstancedInterleavedBuffer){for(let le=0;le<X.locationSize;le++)f(X.location+le,se.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,je);for(let le=0;le<X.locationSize;le++)y(X.location+le,ue/X.locationSize,Ve,re,$*Z,(ie+ue/X.locationSize*le)*Z,oe)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)f(X.location+se,te.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);t.bindBuffer(t.ARRAY_BUFFER,je);for(let se=0;se<X.locationSize;se++)y(X.location+se,ue/X.locationSize,Ve,re,ue*Z,ue/X.locationSize*se*Z,oe)}}else if(V!==void 0){const re=V[U];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(X.location,re);break;case 3:t.vertexAttrib3fv(X.location,re);break;case 4:t.vertexAttrib4fv(X.location,re);break;default:t.vertexAttrib1fv(X.location,re)}}}}x()}function w(){R();for(const P in i){const I=i[P];for(const W in I){const q=I[W];for(const O in q){const Y=q[O];for(const V in Y)h(Y[V].object),delete Y[V];delete q[O]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const W in I){const q=I[W];for(const O in q){const Y=q[O];for(const V in Y)h(Y[V].object),delete Y[V];delete q[O]}}delete i[P.id]}function A(P){for(const I in i){const W=i[I];for(const q in W){const O=W[q];if(O[P.id]===void 0)continue;const Y=O[P.id];for(const V in Y)h(Y[V].object),delete Y[V];delete O[P.id]}}}function _(P){for(const I in i){const W=i[I],q=P.isInstancedMesh===!0?P.id:0,O=W[q];if(O!==void 0){for(const Y in O){const V=O[Y];for(const U in V)h(V[U].object),delete V[U];delete O[Y]}delete W[q],Object.keys(W).length===0&&delete i[I]}}}function R(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function D1(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let c=0;for(let p=0;p<h;p++)c+=u[p];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function N1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!_)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(Ne("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:w,samples:T}}function I1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||i!==0||r;return r=c,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=h(d,c,0)},this.setState=function(d,c,p){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):u();else{const x=s?0:i,y=x*4;let S=f.clippingState||null;l.value=S,S=h(g,c,y,p);for(let w=0;w!==y;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,p,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=p+M*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=p;y!==M;++y,S+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const ir=4,dm=[.125,.215,.35,.446,.526,.582],br=20,U1=256,fa=new uh,fm=new Ye;let lu=null,cu=0,uu=0,du=!1;const F1=new B;class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=F1}=s;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gr||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Fi,format:qn,colorSpace:Bl,depthBuffer:!1},r=pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O1(s)),this._blurMaterial=k1(s,e,n),this._ggxMaterial=B1(s,e,n)}return r}_compileMaterial(e){const n=new _i(new jn,e);this._renderer.compile(n,fa)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,p=d.toneMapping;d.getClearColor(fm),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new ot,new sh({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(fm),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;ds(r,S*w,y>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=c,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gr||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,fa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),c=0+u*1.25,p=d*c,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-ir?i-g+ir:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,ds(s,m,f,3*M,2*M),r.setRenderTarget(s),r.render(o,fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ds(e,m,f,3*M,2*M),r.setRenderTarget(e),r.render(o,fa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const c=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),M=s/g,m=isFinite(s)?1+Math.floor(h*M):br;m>br&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const f=[];let x=0;for(let A=0;A<br;++A){const _=A/M,R=Math.exp(-_*_/2);f.push(R),A===0?x+=R:A<m&&(x+=2*R)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-ir?r-y+ir:0),T=4*(this._cubeSize-S);ds(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,fa)}}function O1(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+dm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=dm[a-t+ir-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,c=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,M=3,m=2,f=1,x=new Float32Array(M*g*p),y=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,_=T>2?0:-1,R=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];x.set(R,M*g*T),y.set(c,m*g*T);const b=[T,T,T,T,T,T];S.set(b,f*g*T)}const w=new jn;w.setAttribute("position",new mi(x,M)),w.setAttribute("uv",new mi(y,m)),w.setAttribute("faceIndex",new mi(S,f)),i.push(new _i(w,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function pm(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B1(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function k1(t,e,n){const i=new Float32Array(br),r=new B(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function mm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function gm(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}class E_ extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new g_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ot(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Pi});s.uniforms.tEquirect.value=n;const a=new _i(r,s),o=n.minFilter;return n.minFilter===Nr&&(n.minFilter=Qt),new Xy(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function z1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,p=!1){return c==null?null:p?a(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===Fc||p===Oc)if(e.has(c)){const g=e.get(c).texture;return o(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const M=new E_(g.height);return M.fromEquirectangularTexture(t,c),e.set(c,M),c.addEventListener("dispose",u),o(M.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const p=c.mapping,g=p===Fc||p===Oc,M=p===Gr||p===Ws;if(g||M){let m=n.get(c);const f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new hm(t)),m=g?i.fromEquirectangular(c,m):i.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),m.texture;if(m!==void 0)return m.texture;{const x=c.image;return g&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new hm(t)),m=g?i.fromEquirectangular(c):i.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),c.addEventListener("dispose",h),m.texture):null}}}return c}function o(c,p){return p===Fc?c.mapping=Gr:p===Oc&&(c.mapping=Ws),c}function l(c){let p=0;const g=6;for(let M=0;M<g;M++)c[M]!==void 0&&p++;return p===g}function u(c){const p=c.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(c){const p=c.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function V1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Is("WebGLRenderer: "+i+" extension not supported."),r}}}function H1(t,e,n,i){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete r[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER)}function u(d){const c=[],p=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(p!==null){const x=p.array;M=p.version;for(let y=0,S=x.length;y<S;y+=3){const w=x[y+0],T=x[y+1],A=x[y+2];c.push(w,T,T,A,A,w)}}else{const x=g.array;M=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const w=y+0,T=y+1,A=y+2;c.push(w,T,T,A,A,w)}}const m=new(g.count>=65535?m_:p_)(c,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const c=s.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function G1(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,c){t.drawElements(i,c,s,d*a),n.update(c,i,1)}function u(d,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,d*a,p),n.update(c,i,p))}function h(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,d,0,p);let M=0;for(let m=0;m<p;m++)M+=c[m];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function W1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function X1(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let c=i.get(o);if(c===void 0||c.count!==d){let b=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;c!==void 0&&c.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*d),_=new d_(A,w,T,d);_.type=ci,_.needsUpdate=!0;const R=S*4;for(let P=0;P<d;P++){const I=f[P],W=x[P],q=y[P],O=w*T*4*P;for(let Y=0;Y<I.count;Y++){const V=Y*R;g===!0&&(r.fromBufferAttribute(I,Y),A[O+V+0]=r.x,A[O+V+1]=r.y,A[O+V+2]=r.z,A[O+V+3]=0),M===!0&&(r.fromBufferAttribute(W,Y),A[O+V+4]=r.x,A[O+V+5]=r.y,A[O+V+6]=r.z,A[O+V+7]=0),m===!0&&(r.fromBufferAttribute(q,Y),A[O+V+8]=r.x,A[O+V+9]=r.y,A[O+V+10]=r.z,A[O+V+11]=q.itemSize===4?r.w:1)}}c={count:d,texture:_,size:new Ke(w,T)},i.set(o,c),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function Y1(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,d=u.geometry,c=e.get(u,d);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return c}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const q1={[Z0]:"LINEAR_TONE_MAPPING",[j0]:"REINHARD_TONE_MAPPING",[Q0]:"CINEON_TONE_MAPPING",[qf]:"ACES_FILMIC_TONE_MAPPING",[e_]:"AGX_TONE_MAPPING",[t_]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function $1(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ys(e,n):void 0}),o=new pi(e,n,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new jn;l.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new an([0,2,0,0,2,0],2));const u=new Fy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new _i(l,u),d=new uh(-1,1,1,-1,0,1);let c=null,p=null,g=!1,M,m=null,f=[],x=!1;this.setSize=function(y,S){a.setSize(y,S),o.setSize(y,S);for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){f=y,x=f.length>0&&f[0].isRenderPass===!0;const S=a.width,w=a.height;for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(S,w)}},this.begin=function(y,S){if(g||y.toneMapping===hi&&f.length===0)return!1;if(m=S,S!==null){const w=S.width,T=S.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return x===!1&&y.setRenderTarget(a),M=y.toneMapping,y.toneMapping=hi,!0},this.hasRenderPass=function(){return x},this.end=function(y,S){y.toneMapping=M,g=!0;let w=a,T=o;for(let A=0;A<f.length;A++){const _=f[A];if(_.enabled!==!1&&(_.render(y,T,w,S),_.needsSwap!==!1)){const R=w;w=T,T=R}}if(c!==y.outputColorSpace||p!==y.toneMapping){c=y.outputColorSpace,p=y.toneMapping,u.defines={},$e.getTransfer(c)===st&&(u.defines.SRGB_TRANSFER="");const A=q1[p];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const T_=new sn,Kd=new Ys(1,1),w_=new d_,A_=new fy,R_=new g_,_m=[],vm=[],xm=new Float32Array(16),Sm=new Float32Array(9),ym=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oc(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),Bt(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Sm.set(i),t.uniformMatrix3fv(this.addr,!1,Sm),Bt(n,i)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),Bt(n,i)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kd.compareFunction=n.isReversedDepthBuffer()?th:eh,s=Kd):s=T_,n.setTexture2D(e||s,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||A_,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||R_,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w_,r)}function pT(t){switch(t){case 5126:return K1;case 35664:return Z1;case 35665:return j1;case 35666:return Q1;case 35674:return J1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(t,e){t.uniform1fv(this.addr,e)}function gT(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function _T(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function vT(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function xT(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ST(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yT(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MT(t,e){t.uniform1iv(this.addr,e)}function ET(t,e){t.uniform2iv(this.addr,e)}function TT(t,e){t.uniform3iv(this.addr,e)}function wT(t,e){t.uniform4iv(this.addr,e)}function AT(t,e){t.uniform1uiv(this.addr,e)}function RT(t,e){t.uniform2uiv(this.addr,e)}function CT(t,e){t.uniform3uiv(this.addr,e)}function bT(t,e){t.uniform4uiv(this.addr,e)}function PT(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Kd:a=T_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||A_,s[a])}function DT(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||R_,s[a])}function NT(t,e,n){const i=this.cache,r=e.length,s=oc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||w_,s[a])}function IT(t){switch(t){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return wT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return NT}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pT(n.type)}}class FT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IT(n.type)}}class OT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fu=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(fu.lastIndex=0;;){const s=fu.exec(i),a=fu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Mm(n,u===void 0?new UT(o,t,e):new FT(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new OT(o),Mm(n,d)),n=d}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);BT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let zT=0;function VT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Tm=new Fe;function HT(t){$e._getMatrix(Tm,$e.workingColorSpace,t);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case kl:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+VT(t.getShaderSource(e),o)}else return s}function GT(t,e){const n=HT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const WT={[Z0]:"Linear",[j0]:"Reinhard",[Q0]:"Cineon",[qf]:"ACESFilmic",[e_]:"AgX",[t_]:"Neutral",[J0]:"Custom"};function XT(t,e){const n=WT[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xo=new B;function YT(){$e.getLuminanceCoefficients(Xo);const t=Xo.x.toFixed(4),e=Xo.y.toFixed(4),n=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function $T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function Am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(t){return t.replace(ZT,QT)}const jT=new Map;function QT(t,e){let n=He[e];if(n===void 0){const i=jT.get(e);if(i!==void 0)n=He[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zd(n)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(JT,ew)}function ew(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const tw={[al]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function nw(t){return tw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iw={[Gr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function rw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":iw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const sw={[Ws]:"ENVMAP_MODE_REFRACTION"};function aw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":sw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ow={[K0]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[LS]:"ENVMAP_BLENDING_ADD"};function lw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ow[t.combine]||"ENVMAP_BLENDING_NONE"}function cw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=nw(n),u=rw(n),h=aw(n),d=lw(n),c=cw(n),p=qT(n),g=$T(s),M=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),f.length>0&&(f+=`
`)):(m=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),f=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?He.tonemapping_pars_fragment:"",n.toneMapping!==hi?XT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,GT("linearToOutputTexel",n.outputColorSpace),YT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=Zd(a),a=Am(a,n),a=Rm(a,n),o=Zd(o),o=Am(o,n),o=Rm(o,n),a=Cm(a),o=Cm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+a,S=x+f+o,w=Em(r,r.VERTEX_SHADER,y),T=Em(r,r.FRAGMENT_SHADER,S);r.attachShader(M,w),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(w)||"",q=r.getShaderInfoLog(T)||"",O=I.trim(),Y=W.trim(),V=q.trim();let U=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,T);else{const te=wm(r,w,"vertex"),re=wm(r,T,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+te+`
`+re)}else O!==""?Ne("WebGLProgram: Program Info Log:",O):(Y===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:U,programLog:O,vertexShader:{log:Y,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(w),r.deleteShader(T),_=new dl(r,M),R=KT(r,M)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,kT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let dw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hw(e),n.set(e,i)),i}}class hw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function pw(t){return t===Wr||t===Fl||t===Ol}function mw(t,e,n,i,r,s){const a=new f_,o=new fw,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,R,b,P,I,W){const q=P.fog,O=I.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||Y,V),X=U&&U.mapping===sc?U.image.height:null,te=p[_.type];_.precision!==null&&(c=i.getMaxPrecision(_.precision),c!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ue=re!==void 0?re.length:0;let We=0;O.morphAttributes.position!==void 0&&(We=1),O.morphAttributes.normal!==void 0&&(We=2),O.morphAttributes.color!==void 0&&(We=3);let je,Ve,Z,oe;if(te){const we=ai[te];je=we.vertexShader,Ve=we.fragmentShader}else{je=_.vertexShader,Ve=_.fragmentShader;const we=o.getVertexShaderStage(_),wt=o.getFragmentShaderStage(_);o.update(_,we,wt),Z=we.id,oe=wt.id}const se=t.getRenderTarget(),$=t.state.buffers.depth.getReversed(),ie=I.isInstancedMesh===!0,le=I.isBatchedMesh===!0,Oe=!!_.map,ye=!!_.matcap,Ue=!!U,Be=!!_.aoMap,Ie=!!_.lightMap,nt=!!_.bumpMap&&_.wireframe===!1,it=!!_.normalMap,Qe=!!_.displacementMap,ut=!!_.emissiveMap,ht=!!_.metalnessMap,Tt=!!_.roughnessMap,D=_.anisotropy>0,cn=_.clearcoat>0,rt=_.dispersion>0,C=_.iridescence>0,v=_.sheen>0,F=_.transmission>0,H=D&&!!_.anisotropyMap,K=cn&&!!_.clearcoatMap,ce=cn&&!!_.clearcoatNormalMap,fe=cn&&!!_.clearcoatRoughnessMap,j=C&&!!_.iridescenceMap,ee=C&&!!_.iridescenceThicknessMap,he=v&&!!_.sheenColorMap,Ce=v&&!!_.sheenRoughnessMap,ge=!!_.specularMap,pe=!!_.specularColorMap,Le=!!_.specularIntensityMap,De=F&&!!_.transmissionMap,ke=F&&!!_.thicknessMap,L=!!_.gradientMap,de=!!_.alphaMap,J=_.alphaTest>0,me=!!_.alphaHash,Se=!!_.extensions;let ne=hi;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Re={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:je,fragmentShader:Ve,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:le,batchingColor:le&&I._colorsTexture!==null,instancing:ie,instancingColor:ie&&I.instanceColor!==null,instancingMorph:ie&&I.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:ye,envMap:Ue,envMapMode:Ue&&U.mapping,envMapCubeUVHeight:X,aoMap:Be,lightMap:Ie,bumpMap:nt,normalMap:it,displacementMap:Qe,emissiveMap:ut,normalMapObjectSpace:it&&_.normalMapType===IS,normalMapTangentSpace:it&&_.normalMapType===$d,packedNormalMap:it&&_.normalMapType===$d&&pw(_.normalMap.format),metalnessMap:ht,roughnessMap:Tt,anisotropy:D,anisotropyMap:H,clearcoat:cn,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,dispersion:rt,iridescence:C,iridescenceMap:j,iridescenceThicknessMap:ee,sheen:v,sheenColorMap:he,sheenRoughnessMap:Ce,specularMap:ge,specularColorMap:pe,specularIntensityMap:Le,transmission:F,transmissionMap:De,thicknessMap:ke,gradientMap:L,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:me,combine:_.combine,mapUv:Oe&&g(_.map.channel),aoMapUv:Be&&g(_.aoMap.channel),lightMapUv:Ie&&g(_.lightMap.channel),bumpMapUv:nt&&g(_.bumpMap.channel),normalMapUv:it&&g(_.normalMap.channel),displacementMapUv:Qe&&g(_.displacementMap.channel),emissiveMapUv:ut&&g(_.emissiveMap.channel),metalnessMapUv:ht&&g(_.metalnessMap.channel),roughnessMapUv:Tt&&g(_.roughnessMap.channel),anisotropyMapUv:H&&g(_.anisotropyMap.channel),clearcoatMapUv:K&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(_.sheenRoughnessMap.channel),specularMapUv:ge&&g(_.specularMap.channel),specularColorMapUv:pe&&g(_.specularColorMap.channel),specularIntensityMapUv:Le&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:ke&&g(_.thicknessMap.channel),alphaMapUv:de&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(it||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Oe||de),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&it===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:We,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)R.push(b),R.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(f(R,_),x(R,_),R.push(t.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function f(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function x(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const R=p[_.type];let b;if(R){const P=ai[R];b=Ny.clone(P.uniforms)}else b=_.uniforms;return b}function S(_,R){let b=h.get(R);return b!==void 0?++b.usedTimes:(b=new uw(t,R,_,r),u.push(b),h.set(R,b)),b}function w(_){if(--_.usedTimes===0){const R=u.indexOf(_);u[R]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function gw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _w(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,g,M,m,f){let x=t[e];return x===void 0?(x={id:c.id,object:c,geometry:p,material:g,materialVariant:a(c),groupOrder:M,renderOrder:c.renderOrder,z:m,group:f},t[e]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=g,x.materialVariant=a(c),x.groupOrder=M,x.renderOrder=c.renderOrder,x.z=m,x.group=f),e++,x}function l(c,p,g,M,m,f){const x=o(c,p,g,M,m,f);g.transmission>0?i.push(x):g.transparent===!0?r.push(x):n.push(x)}function u(c,p,g,M,m,f){const x=o(c,p,g,M,m,f);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function h(c,p,g){n.length>1&&n.sort(c||_w),i.length>1&&i.sort(p||Pm),r.length>1&&r.sort(p||Pm),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let c=e,p=t.length;c<p;c++){const g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:h}}function vw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Lm,t.set(i,[a])):r>=s.length?(a=new Lm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function xw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ye};break;case"SpotLight":n={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yw=0;function Mw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ew(t){const e=new xw,n=Sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Ct,a=new Ct;function o(u){let h=0,d=0,c=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,x=0,y=0,S=0,w=0,T=0,A=0;u.sort(Mw);for(let R=0,b=u.length;R<b;R++){const P=u[R],I=P.color,W=P.intensity,q=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Wr?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*W,d+=I.g*W,c+=I.b*W;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],W);A++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,U=n.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(I).multiplyScalar(W),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[M]=Y;const V=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[M]=V.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=O,S++}M++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(I).multiplyScalar(W),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const V=P.shadow,U=n.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(W),Y.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[f]=Y,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=c;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==x||_.numPointShadows!==y||_.numSpotShadows!==S||_.numSpotMaps!==w||_.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,_.directionalLength=p,_.pointLength=g,_.spotLength=M,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=x,_.numPointShadows=y,_.numSpotShadows=S,_.numSpotMaps=w,_.numLightProbes=A,i.version=yw++)}function l(u,h){let d=0,c=0,p=0,g=0,M=0;const m=h.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const y=u[f];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=i.point[c];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),c++}else if(y.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Dm(t){const e=new Ew(t),n=[],i=[],r=[];function s(c){d.camera=c,n.length=0,i.length=0,r.length=0}function a(c){n.push(c)}function o(c){i.push(c)}function l(c){r.push(c)}function u(){e.setup(n)}function h(c){e.setupView(n,c)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dm(t),e.set(r,[o])):s>=a.length?(o=new Dm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
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
}`,Rw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Cw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Nm=new Ct,ha=new B,hu=new B;function bw(t,e,n){let i=new ah;const r=new Ke,s=new Ke,a=new yt,o=new By,l=new ky,u={},h=n.maxTextureSize,d={[mr]:gn,[gn]:mr,[li]:li},c=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:ww,fragmentShader:Aw}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new _i(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let f=this.type;this.render=function(T,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===dS&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=al);const R=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Pi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=f!==this.type;W&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=T.length;q<O;q++){const Y=T[q],V=Y.shadow;if(V===void 0){Ne("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const U=V.getFrameExtents();r.multiply(U),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,V.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===va){if(Y.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new pi(r.x,r.y,{format:Wr,type:Fi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ys(r.x,r.y,ci),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Oi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt}else Y.isPointLight?(V.map=new E_(r.x),V.map.depthTexture=new Ly(r.x,gi)):(V.map=new pi(r.x,r.y),V.map.depthTexture=new Ys(r.x,r.y,gi)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Oi,this.type===al?(V.map.depthTexture.compareFunction=X?th:eh,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt);V.camera.updateProjectionMatrix()}const te=V.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<te;re++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,re),t.clear();else{re===0&&(t.setRenderTarget(V.map),t.clear());const ue=V.getViewport(re);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),I.viewport(a)}if(Y.isPointLight){const ue=V.camera,We=V.matrix,je=Y.distance||ue.far;je!==ue.far&&(ue.far=je,ue.updateProjectionMatrix()),ha.setFromMatrixPosition(Y.matrixWorld),ue.position.copy(ha),hu.copy(ue.position),hu.add(Rw[re]),ue.up.copy(Cw[re]),ue.lookAt(hu),ue.updateMatrixWorld(),We.makeTranslation(-ha.x,-ha.y,-ha.z),Nm.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Nm,ue.coordinateSystem,ue.reversedDepth)}else V.updateMatrices(Y);i=V.getFrustum(),S(A,_,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===va&&x(V,_),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(R,b,P)};function x(T,A){const _=e.update(M);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(r.x,r.y,{format:Wr,type:Fi})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,_,c,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,_,p,M,null)}function y(T,A,_,R){let b=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=_.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=b.uuid,W=A.uuid;let q=u[I];q===void 0&&(q={},u[I]=q);let O=q[W];O===void 0&&(O=b.clone(),q[W]=O,A.addEventListener("dispose",w)),b=O}if(b.visible=A.visible,b.wireframe=A.wireframe,R===va?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=t.properties.get(b);I.light=_}return b}function S(T,A,_,R,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===va)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const W=e.update(T),q=T.material;if(Array.isArray(q)){const O=W.groups;for(let Y=0,V=O.length;Y<V;Y++){const U=O[Y],X=q[U.materialIndex];if(X&&X.visible){const te=y(T,X,R,b);T.onBeforeShadow(t,T,A,_,W,te,U),t.renderBufferDirect(_,null,W,te,T,U),T.onAfterShadow(t,T,A,_,W,te,U)}}}else if(q.visible){const O=y(T,q,R,b);T.onBeforeShadow(t,T,A,_,W,O,null),t.renderBufferDirect(_,null,W,O,T,null),T.onAfterShadow(t,T,A,_,W,O,null)}}const I=T.children;for(let W=0,q=I.length;W<q;W++)S(I[W],A,_,R,b)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in u){const R=u[_],b=T.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}function Pw(t,e){function n(){let L=!1;const de=new yt;let J=null;const me=new yt(0,0,0,0);return{setMask:function(Se){J!==Se&&!L&&(t.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){L=Se},setClear:function(Se,ne,Re,we,wt){wt===!0&&(Se*=we,ne*=we,Re*=we),de.set(Se,ne,Re,we),me.equals(de)===!1&&(t.clearColor(Se,ne,Re,we),me.copy(de))},reset:function(){L=!1,J=null,me.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,J=null,me=null,Se=null;return{setReversed:function(ne){if(de!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const we=Se;Se=null,this.setClear(we)}},getReversed:function(){return de},setTest:function(ne){ne?se(t.DEPTH_TEST):$(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!L&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(de&&(ne=WS[ne]),me!==ne){switch(ne){case cd:t.depthFunc(t.NEVER);break;case ud:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case hd:t.depthFunc(t.GEQUAL);break;case pd:t.depthFunc(t.GREATER);break;case md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ne}},setLocked:function(ne){L=ne},setClear:function(ne){Se!==ne&&(Se=ne,de&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,J=null,me=null,Se=null,de=!1}}}function r(){let L=!1,de=null,J=null,me=null,Se=null,ne=null,Re=null,we=null,wt=null;return{setTest:function(pt){L||(pt?se(t.STENCIL_TEST):$(t.STENCIL_TEST))},setMask:function(pt){de!==pt&&!L&&(t.stencilMask(pt),de=pt)},setFunc:function(pt,Qn,Jn){(J!==pt||me!==Qn||Se!==Jn)&&(t.stencilFunc(pt,Qn,Jn),J=pt,me=Qn,Se=Jn)},setOp:function(pt,Qn,Jn){(ne!==pt||Re!==Qn||we!==Jn)&&(t.stencilOp(pt,Qn,Jn),ne=pt,Re=Qn,we=Jn)},setLocked:function(pt){L=pt},setClear:function(pt){wt!==pt&&(t.clearStencil(pt),wt=pt)},reset:function(){L=!1,de=null,J=null,me=null,Se=null,ne=null,Re=null,we=null,wt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},d={},c={},p=new WeakMap,g=[],M=null,m=!1,f=null,x=null,y=null,S=null,w=null,T=null,A=null,_=new Ye(0,0,0),R=0,b=!1,P=null,I=null,W=null,q=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,U=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=U>=2);let te=null,re={};const ue=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),je=new yt().fromArray(ue),Ve=new yt().fromArray(We);function Z(L,de,J,me){const Se=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<J;Re++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(de+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ne}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(Gs),nt(!1),it(Ip),se(t.CULL_FACE),Be(Pi);function se(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function $(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function ie(L,de){return c[L]!==de?(t.bindFramebuffer(L,de),c[L]=de,L===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=de),!0):!1}function le(L,de){let J=g,me=!1;if(L){J=p.get(de),J===void 0&&(J=[],p.set(de,J));const Se=L.textures;if(J.length!==Se.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Re=Se.length;ne<Re;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=Se.length,me=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&t.drawBuffers(J)}function Oe(L){return M!==L?(t.useProgram(L),M=L,!0):!1}const ye={[Cr]:t.FUNC_ADD,[hS]:t.FUNC_SUBTRACT,[pS]:t.FUNC_REVERSE_SUBTRACT};ye[mS]=t.MIN,ye[gS]=t.MAX;const Ue={[_S]:t.ZERO,[vS]:t.ONE,[xS]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[ES]:t.DST_COLOR,[yS]:t.DST_ALPHA,[SS]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[TS]:t.ONE_MINUS_DST_COLOR,[MS]:t.ONE_MINUS_DST_ALPHA,[AS]:t.CONSTANT_COLOR,[RS]:t.ONE_MINUS_CONSTANT_COLOR,[CS]:t.CONSTANT_ALPHA,[bS]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(L,de,J,me,Se,ne,Re,we,wt,pt){if(L===Pi){m===!0&&($(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),L!==fS){if(L!==f||pt!==b){if((x!==Cr||w!==Cr)&&(t.blendEquation(t.FUNC_ADD),x=Cr,w=Cr),pt)switch(L){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFunc(t.ONE,t.ONE);break;case Fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Op:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Fp:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Op:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}y=null,S=null,T=null,A=null,_.set(0,0,0),R=0,f=L,b=pt}return}Se=Se||de,ne=ne||J,Re=Re||me,(de!==x||Se!==w)&&(t.blendEquationSeparate(ye[de],ye[Se]),x=de,w=Se),(J!==y||me!==S||ne!==T||Re!==A)&&(t.blendFuncSeparate(Ue[J],Ue[me],Ue[ne],Ue[Re]),y=J,S=me,T=ne,A=Re),(we.equals(_)===!1||wt!==R)&&(t.blendColor(we.r,we.g,we.b,wt),_.copy(we),R=wt),f=L,b=!1}function Ie(L,de){L.side===li?$(t.CULL_FACE):se(t.CULL_FACE);let J=L.side===gn;de&&(J=!J),nt(J),L.blending===Ns&&L.transparent===!1?Be(Pi):Be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):$(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function it(L){L!==cS?(se(t.CULL_FACE),L!==I&&(L===Ip?t.cullFace(t.BACK):L===uS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$(t.CULL_FACE),I=L}function Qe(L){L!==W&&(V&&t.lineWidth(L),W=L)}function ut(L,de,J){L?(se(t.POLYGON_OFFSET_FILL),(q!==de||O!==J)&&(q=de,O=J,a.getReversed()&&(de=-de),t.polygonOffset(de,J))):$(t.POLYGON_OFFSET_FILL)}function ht(L){L?se(t.SCISSOR_TEST):$(t.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=t.TEXTURE0+Y-1),te!==L&&(t.activeTexture(L),te=L)}function D(L,de,J){J===void 0&&(te===null?J=t.TEXTURE0+Y-1:J=te);let me=re[J];me===void 0&&(me={type:void 0,texture:void 0},re[J]=me),(me.type!==L||me.texture!==de)&&(te!==J&&(t.activeTexture(J),te=J),t.bindTexture(L,de||oe[L]),me.type=L,me.texture=de)}function cn(){const L=re[te];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function v(){try{t.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ce(){try{t.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function j(){try{t.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function he(L){return d[L]!==void 0?d[L]:t.getParameter(L)}function Ce(L,de){d[L]!==de&&(t.pixelStorei(L,de),d[L]=de)}function ge(L){je.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function pe(L){Ve.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Le(L,de){let J=u.get(de);J===void 0&&(J=new WeakMap,u.set(de,J));let me=J.get(L);me===void 0&&(me=t.getUniformBlockIndex(de,L.name),J.set(L,me))}function De(L,de){const me=u.get(de).get(L);l.get(de)!==me&&(t.uniformBlockBinding(de,me,L.__bindingPointIndex),l.set(de,me))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,re={},c={},p=new WeakMap,g=[],M=null,m=!1,f=null,x=null,y=null,S=null,w=null,T=null,A=null,_=new Ye(0,0,0),R=0,b=!1,P=null,I=null,W=null,q=null,O=null,je.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:$,bindFramebuffer:ie,drawBuffers:le,useProgram:Oe,setBlending:Be,setMaterial:Ie,setFlipSided:nt,setCullFace:it,setLineWidth:Qe,setPolygonOffset:ut,setScissorTest:ht,activeTexture:Tt,bindTexture:D,unbindTexture:cn,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:j,texImage3D:ee,pixelStorei:Ce,getParameter:he,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:ce,texStorage3D:fe,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:ge,viewport:pe,reset:ke}}function Lw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,h=new WeakMap,d=new Set;let c;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,v){return g?new OffscreenCanvas(C,v):zl("canvas")}function m(C,v,F){let H=1;const K=rt(C);if((K.width>F||K.height>F)&&(H=F/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(H*K.width),fe=Math.floor(H*K.height);c===void 0&&(c=M(ce,fe));const j=v?M(ce,fe):c;return j.width=ce,j.height=fe,j.getContext("2d").drawImage(C,0,0,ce,fe),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+fe+")."),j}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function f(C){return C.generateMipmaps}function x(C){t.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,v,F,H,K,ce=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;H&&(fe=e.get("EXT_texture_norm16"),fe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===t.RED&&(F===t.FLOAT&&(j=t.R32F),F===t.HALF_FLOAT&&(j=t.R16F),F===t.UNSIGNED_BYTE&&(j=t.R8),F===t.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),F===t.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),v===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.R8UI),F===t.UNSIGNED_SHORT&&(j=t.R16UI),F===t.UNSIGNED_INT&&(j=t.R32UI),F===t.BYTE&&(j=t.R8I),F===t.SHORT&&(j=t.R16I),F===t.INT&&(j=t.R32I)),v===t.RG&&(F===t.FLOAT&&(j=t.RG32F),F===t.HALF_FLOAT&&(j=t.RG16F),F===t.UNSIGNED_BYTE&&(j=t.RG8),F===t.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),F===t.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RG8UI),F===t.UNSIGNED_SHORT&&(j=t.RG16UI),F===t.UNSIGNED_INT&&(j=t.RG32UI),F===t.BYTE&&(j=t.RG8I),F===t.SHORT&&(j=t.RG16I),F===t.INT&&(j=t.RG32I)),v===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGB8UI),F===t.UNSIGNED_SHORT&&(j=t.RGB16UI),F===t.UNSIGNED_INT&&(j=t.RGB32UI),F===t.BYTE&&(j=t.RGB8I),F===t.SHORT&&(j=t.RGB16I),F===t.INT&&(j=t.RGB32I)),v===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),F===t.UNSIGNED_INT&&(j=t.RGBA32UI),F===t.BYTE&&(j=t.RGBA8I),F===t.SHORT&&(j=t.RGBA16I),F===t.INT&&(j=t.RGBA32I)),v===t.RGB&&(F===t.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),F===t.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),v===t.RGBA){const ee=ce?kl:$e.getTransfer(K);F===t.FLOAT&&(j=t.RGBA32F),F===t.HALF_FLOAT&&(j=t.RGBA16F),F===t.UNSIGNED_BYTE&&(j=ee===st?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),F===t.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function w(C,v){let F;return C?v===null||v===gi||v===Ka?F=t.DEPTH24_STENCIL8:v===ci?F=t.DEPTH32F_STENCIL8:v===$a&&(F=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===Ka?F=t.DEPTH_COMPONENT24:v===ci?F=t.DEPTH_COMPONENT32F:v===$a&&(F=t.DEPTH_COMPONENT16),F}function T(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(C){const v=C.target;v.removeEventListener("dispose",_),P(v)}function R(C){const v=i.get(C);if(v.__webglInit===void 0)return;const F=C.source,H=p.get(F);if(H){const K=H[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(C),Object.keys(H).length===0&&p.delete(F)}i.remove(C)}function b(C){const v=i.get(C);t.deleteTexture(v.__webglTexture);const F=C.source,H=p.get(F);delete H[v.__cacheKey],a.memory.textures--}function P(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let K=0;K<v.__webglFramebuffer[H].length;K++)t.deleteFramebuffer(v.__webglFramebuffer[H][K]);else t.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)t.deleteFramebuffer(v.__webglFramebuffer[H]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=C.textures;for(let H=0,K=F.length;H<K;H++){const ce=i.get(F[H]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(F[H])}i.remove(C)}let I=0;function W(){I=0}function q(){return I}function O(C){I=C}function Y(){const C=I;return C>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function V(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function U(C,v){const F=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const H=C.image;if(H===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,C,v);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+v)}function X(C,v){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+v)}function te(C,v){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+v)}function re(C,v){const F=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){ie(F,C,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+v)}const ue={[gd]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},We={[Gt]:t.NEAREST,[DS]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},je={[US]:t.NEVER,[zS]:t.ALWAYS,[FS]:t.LESS,[eh]:t.LEQUAL,[OS]:t.EQUAL,[th]:t.GEQUAL,[BS]:t.GREATER,[kS]:t.NOTEQUAL};function Ve(C,v){if(v.type===ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===Bc||v.magFilter===To||v.magFilter===Nr||v.minFilter===Qt||v.minFilter===Bc||v.minFilter===To||v.minFilter===Nr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,ue[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ue[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ue[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,We[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==To&&v.minFilter!==Nr||v.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Z(C,v){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const H=v.source;let K=p.get(H);K===void 0&&(K={},p.set(H,K));const ce=V(v);if(ce!==C.__cacheKey){K[ce]===void 0&&(K[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[ce].usedTimes++;const fe=K[C.__cacheKey];fe!==void 0&&(K[C.__cacheKey].usedTimes--,fe.usedTimes===0&&b(v)),C.__cacheKey=ce,C.__webglTexture=K[ce].texture}return F}function oe(C,v,F){return Math.floor(Math.floor(C/F)/v)}function se(C,v,F,H){const ce=C.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,F,H,v.data);else{ce.sort((Ce,ge)=>Ce.start-ge.start);let fe=0;for(let Ce=1;Ce<ce.length;Ce++){const ge=ce[fe],pe=ce[Ce],Le=ge.start+ge.count,De=oe(pe.start,v.width,4),ke=oe(ge.start,v.width,4);pe.start<=Le+1&&De===ke&&oe(pe.start+pe.count-1,v.width,4)===De?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++fe,ce[fe]=pe)}ce.length=fe+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Ce=0,ge=ce.length;Ce<ge;Ce++){const pe=ce[Ce],Le=Math.floor(pe.start/4),De=Math.ceil(pe.count/4),ke=Le%v.width,L=Math.floor(Le/v.width),de=De,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ke,L,de,J,F,H,v.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function $(C,v,F){let H=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=t.TEXTURE_3D);const K=Z(C,v),ce=v.source;n.bindTexture(H,C.__webglTexture,t.TEXTURE0+F);const fe=i.get(ce);if(ce.version!==fe.__version||K===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=$e.getPrimaries($e.workingColorSpace),me=v.colorSpace===er?null:$e.getPrimaries(v.colorSpace),Se=v.colorSpace===er||J===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,r.maxTextureSize);ee=cn(v,ee);const he=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let ge=S(v.internalFormat,he,Ce,v.normalized,v.colorSpace,v.isVideoTexture);Ve(H,v);let pe;const Le=v.mipmaps,De=v.isVideoTexture!==!0,ke=fe.__version===void 0||K===!0,L=ce.dataReady,de=T(v,ee);if(v.isDepthTexture)ge=w(v.format===Ir,v.type),ke&&(De?n.texStorage2D(t.TEXTURE_2D,1,ge,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ce,null));else if(v.isDataTexture)if(Le.length>0){De&&ke&&n.texStorage2D(t.TEXTURE_2D,de,ge,Le[0].width,Le[0].height);for(let J=0,me=Le.length;J<me;J++)pe=Le[J],De?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,Ce,pe.data):n.texImage2D(t.TEXTURE_2D,J,ge,pe.width,pe.height,0,he,Ce,pe.data);v.generateMipmaps=!1}else De?(ke&&n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height),L&&se(v,ee,he,Ce)):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ce,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,Le[0].width,Le[0].height,ee.depth);for(let J=0,me=Le.length;J<me;J++)if(pe=Le[J],v.format!==qn)if(he!==null)if(De){if(L)if(v.layerUpdates.size>0){const Se=um(pe.width,pe.height,v.format,v.type);for(const ne of v.layerUpdates){const Re=pe.data.subarray(ne*Se/pe.data.BYTES_PER_ELEMENT,(ne+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,pe.width,pe.height,1,he,Re)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,ee.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ge,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,ee.depth,he,Ce,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,ge,pe.width,pe.height,ee.depth,0,he,Ce,pe.data)}else{De&&ke&&n.texStorage2D(t.TEXTURE_2D,de,ge,Le[0].width,Le[0].height);for(let J=0,me=Le.length;J<me;J++)pe=Le[J],v.format!==qn?he!==null?De?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,ge,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,Ce,pe.data):n.texImage2D(t.TEXTURE_2D,J,ge,pe.width,pe.height,0,he,Ce,pe.data)}else if(v.isDataArrayTexture)if(De){if(ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,ee.width,ee.height,ee.depth),L)if(v.layerUpdates.size>0){const J=um(ee.width,ee.height,v.format,v.type);for(const me of v.layerUpdates){const Se=ee.data.subarray(me*J/ee.data.BYTES_PER_ELEMENT,(me+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,he,Ce,Se)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ce,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,he,Ce,ee.data);else if(v.isData3DTexture)De?(ke&&n.texStorage3D(t.TEXTURE_3D,de,ge,ee.width,ee.height,ee.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ce,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,he,Ce,ee.data);else if(v.isFramebufferTexture){if(ke)if(De)n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height);else{let J=ee.width,me=ee.height;for(let Se=0;Se<de;Se++)n.texImage2D(t.TEXTURE_2D,Se,ge,J,me,0,he,Ce,null),J>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(v),J.onpaint=me=>{const Se=me.changedElements;for(const ne of d)Se.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Se=t.RGBA,ne=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,ne,Re,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(De&&ke){const J=rt(Le[0]);n.texStorage2D(t.TEXTURE_2D,de,ge,J.width,J.height)}for(let J=0,me=Le.length;J<me;J++)pe=Le[J],De?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he,Ce,pe):n.texImage2D(t.TEXTURE_2D,J,ge,he,Ce,pe);v.generateMipmaps=!1}else if(De){if(ke){const J=rt(ee);n.texStorage2D(t.TEXTURE_2D,de,ge,J.width,J.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Ce,ee)}else n.texImage2D(t.TEXTURE_2D,0,ge,he,Ce,ee);f(v)&&x(H),fe.__version=ce.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ie(C,v,F){if(v.image.length!==6)return;const H=Z(C,v),K=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const ce=i.get(K);if(K.version!==ce.__version||H===!0){n.activeTexture(t.TEXTURE0+F);const fe=$e.getPrimaries($e.workingColorSpace),j=v.colorSpace===er?null:$e.getPrimaries(v.colorSpace),ee=v.colorSpace===er||fe===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,Ce=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!he&&!Ce?ge[ne]=m(v.image[ne],!0,r.maxCubemapSize):ge[ne]=Ce?v.image[ne].image:v.image[ne],ge[ne]=cn(v,ge[ne]);const pe=ge[0],Le=s.convert(v.format,v.colorSpace),De=s.convert(v.type),ke=S(v.internalFormat,Le,De,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,de=ce.__version===void 0||H===!0,J=K.dataReady;let me=T(v,pe);Ve(t.TEXTURE_CUBE_MAP,v);let Se;if(he){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ke,pe.width,pe.height);for(let ne=0;ne<6;ne++){Se=ge[ne].mipmaps;for(let Re=0;Re<Se.length;Re++){const we=Se[Re];v.format!==qn?Le!==null?L?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ke,we.width,we.height,0,we.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,we.width,we.height,Le,De,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ke,we.width,we.height,0,Le,De,we.data)}}}else{if(Se=v.mipmaps,L&&de){Se.length>0&&me++;const ne=rt(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ce){L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Le,De,ge[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,ge[ne].width,ge[ne].height,0,Le,De,ge[ne].data);for(let Re=0;Re<Se.length;Re++){const wt=Se[Re].image[ne].image;L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,wt.width,wt.height,Le,De,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ke,wt.width,wt.height,0,Le,De,wt.data)}}else{L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,De,ge[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,Le,De,ge[ne]);for(let Re=0;Re<Se.length;Re++){const we=Se[Re];L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Le,De,we.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ke,Le,De,we.image[ne])}}}f(v)&&x(t.TEXTURE_CUBE_MAP),ce.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function le(C,v,F,H,K,ce){const fe=s.convert(F.format,F.colorSpace),j=s.convert(F.type),ee=S(F.internalFormat,fe,j,F.normalized,F.colorSpace),he=i.get(v),Ce=i.get(F);if(Ce.__renderTarget=v,!he.__hasExternalTextures){const ge=Math.max(1,v.width>>ce),pe=Math.max(1,v.height>>ce);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ce,ee,ge,pe,v.depth,0,fe,j,null):n.texImage2D(K,ce,ee,ge,pe,0,fe,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Tt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,K,Ce.__webglTexture,0,ht(v)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,K,Ce.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,v,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){const H=v.depthTexture,K=H&&H.isDepthTexture?H.type:null,ce=w(v.stencilBuffer,K),fe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(v),ce,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(v),ce,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ce,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,C)}else{const H=v.textures;for(let K=0;K<H.length;K++){const ce=H[K],fe=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),ee=S(ce.internalFormat,fe,j,ce.normalized,ce.colorSpace);Tt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(v),ee,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(v),ee,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ee,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(C,v,F){const H=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,v.depthTexture);const he=s.convert(v.depthTexture.format),Ce=s.convert(v.depthTexture.type);let ge;v.depthTexture.format===Oi?ge=t.DEPTH_COMPONENT24:v.depthTexture.format===Ir&&(ge=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,v.width,v.height,0,he,Ce,null)}}else U(v.depthTexture,0);const ce=K.__webglTexture,fe=ht(v),j=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,ee=v.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Oi)Tt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,j,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,j,ce,0);else if(v.depthTexture.format===Ir)Tt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,j,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,j,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(C){const v=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=H}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)ye(v.__webglFramebuffer[H],C,H);else{const H=C.texture.mipmaps;H&&H.length>0?ye(v.__webglFramebuffer[0],C,0):ye(v.__webglFramebuffer,C,0)}else if(F){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=t.createRenderbuffer(),Oe(v.__webglDepthbuffer[H],C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Oe(v.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,v,F){const H=i.get(C);v!==void 0&&le(H.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ue(C)}function Ie(C){const v=C.texture,F=i.get(C),H=i.get(v);C.addEventListener("dispose",_);const K=C.textures,ce=C.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=v.version,a.memory.textures++),ce){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let ee=0;ee<v.mipmaps.length;ee++)F.__webglFramebuffer[j][ee]=t.createFramebuffer()}else F.__webglFramebuffer[j]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)F.__webglFramebuffer[j]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(fe)for(let j=0,ee=K.length;j<ee;j++){const he=i.get(K[j]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Tt(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){const ee=K[j];F.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const he=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),ge=S(ee.internalFormat,he,Ce,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),pe=ht(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,F.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)le(F.__webglFramebuffer[j][ee],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else le(F.__webglFramebuffer[j],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(v)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let j=0,ee=K.length;j<ee;j++){const he=K[j],Ce=i.get(he);let ge=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Ce.__webglTexture),Ve(ge,he),le(F.__webglFramebuffer,C,he,t.COLOR_ATTACHMENT0+j,ge,0),f(he)&&x(ge)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,H.__webglTexture),Ve(j,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)le(F.__webglFramebuffer[ee],C,v,t.COLOR_ATTACHMENT0,j,ee);else le(F.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,j,0);f(v)&&x(j),n.unbindTexture()}C.depthBuffer&&Ue(C)}function nt(C){const v=C.textures;for(let F=0,H=v.length;F<H;F++){const K=v[F];if(f(K)){const ce=y(C),fe=i.get(K).__webglTexture;n.bindTexture(ce,fe),x(ce),n.unbindTexture()}}}const it=[],Qe=[];function ut(C){if(C.samples>0){if(Tt(C)===!1){const v=C.textures,F=C.width,H=C.height;let K=t.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(C),j=v.length>1;if(j)for(let he=0;he<v.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<v.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Ce=i.get(v[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,F,H,0,0,F,H,K,t.NEAREST),l===!0&&(it.length=0,Qe.length=0,it.push(t.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(ce),Qe.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let he=0;he<v.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Ce=i.get(v[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ht(C){return Math.min(r.maxSamples,C.samples)}function Tt(C){const v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function cn(C,v){const F=C.colorSpace,H=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Bl&&F!==er&&($e.getTransfer(F)===st?(H!==qn||K!==Tn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",F)),v}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=re,this.rebindTextures=Be,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Dw(t,e){function n(i,r=er){let s;const a=$e.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===s_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===i_)return t.BYTE;if(i===r_)return t.SHORT;if(i===$a)return t.UNSIGNED_SHORT;if(i===$f)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Fi)return t.HALF_FLOAT;if(i===o_)return t.ALPHA;if(i===l_)return t.RGB;if(i===qn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===c_)return t.RED;if(i===jf)return t.RED_INTEGER;if(i===Wr)return t.RG;if(i===Qf)return t.RG_INTEGER;if(i===Jf)return t.RGBA_INTEGER;if(i===ol||i===ll||i===cl||i===ul)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===xd||i===Sd||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Fl||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===Ed)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wd)return s.COMPRESSED_R11_EAC;if(i===Ad)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fl)return s.COMPRESSED_RG11_EAC;if(i===Rd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cd||i===bd||i===Pd||i===Ld||i===Dd||i===Nd||i===Id||i===Ud||i===Fd||i===Od||i===Bd||i===kd||i===zd||i===Vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hd||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hd)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===Yd||i===Ol||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iw=`
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

}`;class Uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new __(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:Nw,fragmentShader:Iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fw extends qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,c=null,p=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Uw,f={},x=n.getContextAttributes();let y=null,S=null;const w=[],T=[],A=new Ke;let _=null;const R=new En;R.viewport=new yt;const b=new En;b.viewport=new yt;const P=[R,b],I=new Yy;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Wc,w[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Wc,w[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=w[Z];return oe===void 0&&(oe=new Wc,w[Z]=oe),oe.getHandSpace()};function O(Z){const oe=T.indexOf(Z.inputSource);if(oe===-1)return;const se=w[oe];se!==void 0&&(se.update(Z.inputSource,Z.frame,u||a),se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let Z=0;Z<w.length;Z++){const oe=T[Z];oe!==null&&(T[Z]=null,w[Z].disconnect(oe))}W=null,q=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(y),p=null,c=null,d=null,r=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,$=null,ie=null;x.depth&&(ie=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Ir:Oi,$=x.stencil?Ka:gi);const le={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(le),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),S=new pi(c.textureWidth,c.textureHeight,{format:qn,type:Tn,depthTexture:new Ys(c.textureWidth,c.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pi(p.framebufferWidth,p.framebufferHeight,{format:qn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Z){for(let oe=0;oe<Z.removed.length;oe++){const se=Z.removed[oe],$=T.indexOf(se);$>=0&&(T[$]=null,w[$].disconnect(se))}for(let oe=0;oe<Z.added.length;oe++){const se=Z.added[oe];let $=T.indexOf(se);if($===-1){for(let le=0;le<w.length;le++)if(le>=T.length){T.push(se),$=le;break}else if(T[le]===null){T[le]=se,$=le;break}if($===-1)break}const ie=w[$];ie&&ie.connect(se)}}const U=new B,X=new B;function te(Z,oe,se){U.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const $=U.distanceTo(X),ie=oe.projectionMatrix.elements,le=se.projectionMatrix.elements,Oe=ie[14]/(ie[10]-1),ye=ie[14]/(ie[10]+1),Ue=(ie[9]+1)/ie[5],Be=(ie[9]-1)/ie[5],Ie=(ie[8]-1)/ie[0],nt=(le[8]+1)/le[0],it=Oe*Ie,Qe=Oe*nt,ut=$/(-Ie+nt),ht=ut*-Ie;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ie[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Tt=Oe+ut,D=ye+ut,cn=it-ht,rt=Qe+($-ht),C=Ue*ye/D*Tt,v=Be*ye/D*Tt;Z.projectionMatrix.makePerspective(cn,rt,C,v,Tt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,se=Z.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(se=m.depthFar)),I.near=b.near=R.near=oe,I.far=b.far=R.far=se,(W!==I.near||q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,q=I.far),I.layers.mask=Z.layers.mask|6,R.layers.mask=I.layers.mask&-5,b.layers.mask=I.layers.mask&-3;const $=Z.parent,ie=I.cameras;re(I,$);for(let le=0;le<ie.length;le++)re(ie[le],$);ie.length===2?te(I,R,b):I.projectionMatrix.copy(R.projectionMatrix),ue(Z,I,$)};function ue(Z,oe,se){se===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(Z){l=Z,c!==null&&(c.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return f[Z]};let We=null;function je(Z,oe){if(h=oe.getViewerPose(u||a),g=oe,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let $=!1;se.length!==I.cameras.length&&(I.cameras.length=0,$=!0);for(let ye=0;ye<se.length;ye++){const Ue=se[ye];let Be=null;if(p!==null)Be=p.getViewport(Ue);else{const nt=d.getViewSubImage(c,Ue);Be=nt.viewport,ye===0&&(e.setRenderTargetTextures(S,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(S))}let Ie=P[ye];Ie===void 0&&(Ie=new En,Ie.layers.enable(ye),Ie.viewport=new yt,P[ye]=Ie),Ie.matrix.fromArray(Ue.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ue.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Be.x,Be.y,Be.width,Be.height),ye===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),$===!0&&I.cameras.push(Ie)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const ye=d.getDepthInformation(se[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,r.renderState)}if(ie&&ie.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let ye=0;ye<se.length;ye++){const Ue=se[ye].camera;if(Ue){let Be=f[Ue];Be||(Be=new __,f[Ue]=Be);const Ie=d.getCameraImage(Ue);Be.sourceTexture=Ie}}}}for(let se=0;se<w.length;se++){const $=T[se],ie=w[se];$!==null&&ie!==void 0&&ie.update($,oe,u||a)}We&&We(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ve=new y_;Ve.setAnimationLoop(je),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}}const Ow=new Ct,C_=new Fe;C_.set(-1,0,0,0,1,0,0,0,1);function Bw(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,v_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,S=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(C_),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function u(S,w){let T=r[S.id];T===void 0&&(m(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",x));const A=w.program;i.updateUBOMapping(S,A);const _=e.render.frame;s[S.id]!==_&&(c(S),s[S.id]=_)}function h(S){const w=d();S.__bindingPointIndex=w;const T=t.createBuffer(),A=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const w=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,R=T.length;_<R;_++){const b=T[_];if(Array.isArray(b))for(let P=0,I=b.length;P<I;P++)p(b[P],_,P,A);else p(b,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,w,T,A){if(M(S,w,T,A)===!0){const _=S.__offset,R=S.value;if(Array.isArray(R)){let b=0;for(let P=0;P<R.length;P++){const I=R[P],W=f(I);g(I,S.__data,b),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(b+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function g(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function M(S,w,T,A){const _=S.value,R=w+"_"+T;if(A[R]===void 0)return typeof _=="number"||typeof _=="boolean"?A[R]=_:ArrayBuffer.isView(_)?A[R]=_.slice():A[R]=_.clone(),!0;{const b=A[R];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return A[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(S){const w=S.uniforms;let T=0;const A=16;for(let R=0,b=w.length;R<b;R++){const P=Array.isArray(w[R])?w[R]:[w[R]];for(let I=0,W=P.length;I<W;I++){const q=P[I],O=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,V=O.length;Y<V;Y++){const U=O[Y],X=f(U),te=T%A,re=te%X.boundary,ue=te+re;T+=re,ue!==0&&A-ue<X.storage&&(T+=A-ue),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=X.storage}}}const _=T%A;return _>0&&(T+=A-_),S.__size=T,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),w}function x(S){const w=S.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:y}}const zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function Vw(){return ii===null&&(ii=new Ry(zw,16,16,Wr,Fi),ii.name="DFG_LUT",ii.minFilter=Qt,ii.magFilter=Qt,ii.wrapS=Ci,ii.wrapT=Ci,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class Hw{constructor(e={}){const{canvas:n=HS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=p,m=new Set([Jf,Qf,jf]),f=new Set([Tn,gi,$a,Ka,Kf,Zf]),x=new Uint32Array(4),y=new Int32Array(4),S=new B;let w=null,T=null;const A=[],_=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,I=null,W=null,q=null,O=null;this._outputColorSpace=Mn;let Y=0,V=0,U=null,X=-1,te=null;const re=new yt,ue=new yt;let We=null;const je=new Ye(0);let Ve=0,Z=n.width,oe=n.height,se=1,$=null,ie=null;const le=new yt(0,0,Z,oe),Oe=new yt(0,0,Z,oe);let ye=!1;const Ue=new ah;let Be=!1,Ie=!1;const nt=new Ct,it=new B,Qe=new yt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Tt(){return U===null?se:1}let D=i;function cn(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",Qn,!1),D===null){const N="webgl2";if(D=cn(N,E),D===null)throw cn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw et("WebGLRenderer: "+E.message),E}let rt,C,v,F,H,K,ce,fe,j,ee,he,Ce,ge,pe,Le,De,ke,L,de,J,me,Se,ne;function Re(){rt=new V1(D),rt.init(),me=new Dw(D,rt),C=new N1(D,rt,e,me),v=new Pw(D,rt),C.reversedDepthBuffer&&c&&v.buffers.depth.setReversed(!0),W=D.createFramebuffer(),q=D.createFramebuffer(),O=D.createFramebuffer(),F=new W1(D),H=new gw,K=new Lw(D,rt,v,H,C,me,F),ce=new z1(b),fe=new $y(D),Se=new L1(D,fe),j=new H1(D,fe,F,Se),ee=new Y1(D,j,fe,Se,F),L=new X1(D,C,K),Le=new I1(H),he=new mw(b,ce,rt,C,Se,Le),Ce=new Bw(b,H),ge=new vw,pe=new Tw(rt),ke=new P1(b,ce,v,ee,g,l),De=new bw(b,ee,C),ne=new kw(D,F,C,v),de=new D1(D,rt,F),J=new G1(D,rt,F),F.programs=he.programs,b.capabilities=C,b.extensions=rt,b.properties=H,b.renderLists=ge,b.shadowMap=De,b.state=v,b.info=F}Re(),M!==Tn&&(R=new $1(M,n.width,n.height,o,r,s));const we=new Fw(b,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(Z,oe,!1))},this.getSize=function(E){return E.set(Z,oe)},this.setSize=function(E,N,G=!0){if(we.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,oe=N,n.width=Math.floor(E*se),n.height=Math.floor(N*se),G===!0&&(n.style.width=E+"px",n.style.height=N+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Z*se,oe*se).floor()},this.setDrawingBufferSize=function(E,N,G){Z=E,oe=N,se=G,n.width=Math.floor(E*G),n.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(M===Tn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(re)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,N,G,k){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,N,G,k),v.viewport(re.copy(le).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,N,G,k){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,N,G,k),v.scissor(ue.copy(Oe).multiplyScalar(se).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){v.setScissorTest(ye=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,G=!0){let k=0;if(E){let z=!1;if(U!==null){const xe=U.texture.format;z=m.has(xe)}if(z){const xe=U.texture.type,Ee=f.has(xe),ve=ke.getClearColor(),Ae=ke.getClearAlpha(),be=ve.r,ze=ve.g,Ge=ve.b;Ee?(x[0]=be,x[1]=ze,x[2]=Ge,x[3]=Ae,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=be,y[1]=ze,y[2]=Ge,y[3]=Ae,D.clearBufferiv(D.COLOR,0,y))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",Qn,!1),ke.dispose(),ge.dispose(),pe.dispose(),H.dispose(),ce.dispose(),ee.dispose(),Se.dispose(),ne.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",_h),we.removeEventListener("sessionend",vh),Sr.stop()};function wt(E){E.preventDefault(),Hp("WebGLRenderer: Context Lost."),P=!0}function pt(){Hp("WebGLRenderer: Context Restored."),P=!1;const E=F.autoReset,N=De.enabled,G=De.autoUpdate,k=De.needsUpdate,z=De.type;Re(),F.autoReset=E,De.enabled=N,De.autoUpdate=G,De.needsUpdate=k,De.type=z}function Qn(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jn(E){const N=E.target;N.removeEventListener("dispose",Jn),b_(N)}function b_(E){P_(E),H.remove(E)}function P_(E){const N=H.get(E).programs;N!==void 0&&(N.forEach(function(G){he.releaseProgram(G)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,k,z,xe){N===null&&(N=ut);const Ee=z.isMesh&&z.matrixWorld.determinantAffine()<0,ve=N_(E,N,G,k,z);v.setMaterial(k,Ee);let Ae=G.index,be=1;if(k.wireframe===!0){if(Ae=j.getWireframeAttribute(G),Ae===void 0)return;be=2}const ze=G.drawRange,Ge=G.attributes.position;let Pe=ze.start*be,ct=(ze.start+ze.count)*be;xe!==null&&(Pe=Math.max(Pe,xe.start*be),ct=Math.min(ct,(xe.start+xe.count)*be)),Ae!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Ae.count)):Ge!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,Ge.count));const bt=ct-Pe;if(bt<0||bt===1/0)return;Se.setup(z,k,ve,G,Ae);let At,dt=de;if(Ae!==null&&(At=fe.get(Ae),dt=J,dt.setIndex(At)),z.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Tt()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(z.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),v.setLineWidth(Yt*Tt()),z.isLineSegments?dt.setMode(D.LINES):z.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else z.isPoints?dt.setMode(D.POINTS):z.isSprite&&dt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Yt=z._multiDrawStarts,Me=z._multiDrawCounts,_n=z._multiDrawCount,Je=Ae?fe.get(Ae).bytesPerElement:1,Pn=H.get(k).currentProgram.getUniforms();for(let ei=0;ei<_n;ei++)Pn.setValue(D,"_gl_DrawID",ei),dt.render(Yt[ei]/Je,Me[ei])}else if(z.isInstancedMesh)dt.renderInstances(Pe,bt,z.count);else if(G.isInstancedBufferGeometry){const Yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Me=Math.min(G.instanceCount,Yt);dt.renderInstances(Pe,bt,Me)}else dt.render(Pe,bt)};function gh(E,N,G){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,so(E,N,G),E.side=mr,E.needsUpdate=!0,so(E,N,G),E.side=li):so(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),T=pe.get(G),T.init(N),_.push(T),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const k=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const xe=z.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const ve=xe[Ee];gh(ve,G,z),k.add(ve)}else gh(xe,G,z),k.add(xe)}),T=_.pop(),k},this.compileAsync=function(E,N,G=null){const k=this.compile(E,N,G);return new Promise(z=>{function xe(){if(k.forEach(function(Ee){H.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0){z(E);return}setTimeout(xe,10)}rt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let lc=null;function L_(E){lc&&lc(E)}function _h(){Sr.stop()}function vh(){Sr.start()}const Sr=new y_;Sr.setAnimationLoop(L_),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(E){lc=E,we.setAnimationLoop(E),E===null?Sr.stop():Sr.start()},we.addEventListener("sessionstart",_h),we.addEventListener("sessionend",vh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,N);const G=we.enabled===!0&&we.isPresenting===!0,k=R!==null&&(U===null||G)&&R.begin(b,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,N,U),T=pe.get(E,_.length),T.init(N),T.state.textureUnits=K.getTextureUnits(),_.push(T),nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(nt,ui,N.reversedDepth),Ie=this.localClippingEnabled,Be=Le.init(this.clippingPlanes,Ie),w=ge.get(E,A.length),w.init(),A.push(w),we.enabled===!0&&we.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&cc(Ee,N,-1/0,b.sortObjects)}cc(E,N,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort($,ie,N.reversedDepth),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&ke.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Le.beginShadows();const z=T.state.shadowsArray;if(De.render(z,E,N),Be===!0&&Le.endShadows(),(k&&R.hasRenderPass())===!1){const Ee=w.opaque,ve=w.transmissive;if(T.setupLights(),N.isArrayCamera){const Ae=N.cameras;if(ve.length>0)for(let be=0,ze=Ae.length;be<ze;be++){const Ge=Ae[be];Sh(Ee,ve,E,Ge)}ht&&ke.render(E);for(let be=0,ze=Ae.length;be<ze;be++){const Ge=Ae[be];xh(w,E,Ge,Ge.viewport)}}else ve.length>0&&Sh(Ee,ve,E,N),ht&&ke.render(E),xh(w,E,N)}U!==null&&V===0&&(K.updateMultisampleRenderTarget(U),K.updateRenderTargetMipmap(U)),k&&R.end(b),E.isScene===!0&&E.onAfterRender(b,E,N),Se.resetDefaultState(),X=-1,te=null,_.pop(),_.length>0?(T=_[_.length-1],K.setTextureUnits(T.state.textureUnits),Be===!0&&Le.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,I!==null&&I.renderEnd()};function cc(E,N,G,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){k&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(nt);const Ee=ee.update(E),ve=E.material;ve.visible&&w.push(E,Ee,ve,G,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const Ee=ee.update(E),ve=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Qe.copy(Ee.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(nt)),Array.isArray(ve)){const Ae=Ee.groups;for(let be=0,ze=Ae.length;be<ze;be++){const Ge=Ae[be],Pe=ve[Ge.materialIndex];Pe&&Pe.visible&&w.push(E,Ee,Pe,G,Qe.z,Ge)}}else ve.visible&&w.push(E,Ee,ve,G,Qe.z,null)}}const xe=E.children;for(let Ee=0,ve=xe.length;Ee<ve;Ee++)cc(xe[Ee],N,G,k)}function xh(E,N,G,k){const{opaque:z,transmissive:xe,transparent:Ee}=E;T.setupLightsView(G),Be===!0&&Le.setGlobalState(b.clippingPlanes,G),k&&v.viewport(re.copy(k)),z.length>0&&ro(z,N,G),xe.length>0&&ro(xe,N,G),Ee.length>0&&ro(Ee,N,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Sh(E,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Pe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new pi(1,1,{generateMipmaps:!0,type:Pe?Fi:Tn,minFilter:Nr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const xe=T.state.transmissionRenderTarget[k.id],Ee=k.viewport||re;xe.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);const ve=b.getRenderTarget(),Ae=b.getActiveCubeFace(),be=b.getActiveMipmapLevel();b.setRenderTarget(xe),b.getClearColor(je),Ve=b.getClearAlpha(),Ve<1&&b.setClearColor(16777215,.5),b.clear(),ht&&ke.render(G);const ze=b.toneMapping;b.toneMapping=hi;const Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Be===!0&&Le.setGlobalState(b.clippingPlanes,k),ro(E,G,k),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,bt=N.length;ct<bt;ct++){const At=N[ct],{object:dt,geometry:Yt,material:Me,group:_n}=At;if(Me.side===li&&dt.layers.test(k.layers)){const Je=Me.side;Me.side=gn,Me.needsUpdate=!0,yh(dt,G,k,Yt,Me,_n),Me.side=Je,Me.needsUpdate=!0,Pe=!0}}Pe===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}b.setRenderTarget(ve,Ae,be),b.setClearColor(je,Ve),Ge!==void 0&&(k.viewport=Ge),b.toneMapping=ze}function ro(E,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let z=0,xe=E.length;z<xe;z++){const Ee=E[z],{object:ve,geometry:Ae,group:be}=Ee;let ze=Ee.material;ze.allowOverride===!0&&k!==null&&(ze=k),ve.layers.test(G.layers)&&yh(ve,N,G,Ae,ze,be)}}function yh(E,N,G,k,z,xe){E.onBeforeRender(b,N,G,k,z,xe),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,N,G,k,E,xe),z.transparent===!0&&z.side===li&&z.forceSinglePass===!1?(z.side=gn,z.needsUpdate=!0,b.renderBufferDirect(G,N,k,z,E,xe),z.side=mr,z.needsUpdate=!0,b.renderBufferDirect(G,N,k,z,E,xe),z.side=li):b.renderBufferDirect(G,N,k,z,E,xe),E.onAfterRender(b,N,G,k,z,xe)}function so(E,N,G){N.isScene!==!0&&(N=ut);const k=H.get(E),z=T.state.lights,xe=T.state.shadowsArray,Ee=z.state.version,ve=he.getParameters(E,z.state,xe,N,G,T.state.lightProbeGridArray),Ae=he.getProgramCacheKey(ve);let be=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=ce.get(E.envMap||k.environment,ze),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",Jn),be=new Map,k.programs=be);let Ge=be.get(Ae);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Ee)return Eh(E,ve),Ge}else ve.uniforms=he.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,G,ve),E.onBeforeCompile(ve,b),Ge=he.acquireProgram(ve,Ae),be.set(Ae,Ge),k.uniforms=ve.uniforms;const Pe=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),Eh(E,ve),k.needsLights=U_(E),k.lightsStateVersion=Ee,k.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Ge,k.uniformsList=null,Ge}function Mh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=dl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Eh(E,N){const G=H.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function D_(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let G=0,k=E.length;G<k;G++){const z=E[G];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function N_(E,N,G,k,z){N.isScene!==!0&&(N=ut),K.resetTextureUnits();const xe=N.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,ve=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:$e.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,be=ce.get(k.envMap||Ee,Ae),ze=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,bt=!!G.morphAttributes.color;let At=hi;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=b.toneMapping);const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Yt=dt!==void 0?dt.length:0,Me=H.get(k),_n=T.state.lights;if(Be===!0&&(Ie===!0||E!==te)){const mt=E===te&&k.id===X;Le.setState(k,E,mt)}let Je=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==_n.state.version||Me.outputColorSpace!==ve||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==be||k.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==Ge||Me.morphTargets!==Pe||Me.morphNormals!==ct||Me.morphColors!==bt||Me.toneMapping!==At||Me.morphTargetsCount!==Yt||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Me.__version=k.version);let Pn=Me.currentProgram;Je===!0&&(Pn=so(k,N,z),I&&k.isNodeMaterial&&I.onUpdateProgram(k,Pn,Me));let ei=!1,ki=!1,$r=!1;const ft=Pn.getUniforms(),Pt=Me.uniforms;if(v.useProgram(Pn.program)&&(ei=!0,ki=!0,$r=!0),k.id!==X&&(X=k.id,ki=!0),Me.needsLights){const mt=D_(T.state.lightProbeGridArray,z);Me.lightProbeGrid!==mt&&(Me.lightProbeGrid=mt,ki=!0)}if(ei||te!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",E.projectionMatrix),ft.setValue(D,"viewMatrix",E.matrixWorldInverse);const Vi=ft.map.cameraPosition;Vi!==void 0&&Vi.setValue(D,it.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,ki=!0,$r=!0)}if(Me.needsLights&&(_n.state.directionalShadowMap.length>0&&ft.setValue(D,"directionalShadowMap",_n.state.directionalShadowMap,K),_n.state.spotShadowMap.length>0&&ft.setValue(D,"spotShadowMap",_n.state.spotShadowMap,K),_n.state.pointShadowMap.length>0&&ft.setValue(D,"pointShadowMap",_n.state.pointShadowMap,K)),z.isSkinnedMesh){ft.setOptional(D,z,"bindMatrix"),ft.setOptional(D,z,"bindMatrixInverse");const mt=z.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ft.setValue(D,"boneTexture",mt.boneTexture,K))}z.isBatchedMesh&&(ft.setOptional(D,z,"batchingTexture"),ft.setValue(D,"batchingTexture",z._matricesTexture,K),ft.setOptional(D,z,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",z._indirectTexture,K),ft.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",z._colorsTexture,K));const zi=G.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&L.update(z,G,Pn),(ki||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,ft.setValue(D,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Pt.envMapIntensity.value=N.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Vw()),ki){if(ft.setValue(D,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&I_(Pt,$r),xe&&k.fog===!0&&Ce.refreshFogUniforms(Pt,xe),Ce.refreshMaterialUniforms(Pt,k,se,oe,T.state.transmissionRenderTarget[E.id]),Me.needsLights&&Me.lightProbeGrid){const mt=Me.lightProbeGrid;Pt.probesSH.value=mt.texture,Pt.probesMin.value.copy(mt.boundingBox.min),Pt.probesMax.value.copy(mt.boundingBox.max),Pt.probesResolution.value.copy(mt.resolution)}dl.upload(D,Mh(Me),Pt,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(dl.upload(D,Mh(Me),Pt,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(D,"center",z.center),ft.setValue(D,"modelViewMatrix",z.modelViewMatrix),ft.setValue(D,"normalMatrix",z.normalMatrix),ft.setValue(D,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const mt=k.uniformsGroups;for(let Vi=0,Kr=mt.length;Vi<Kr;Vi++){const Th=mt[Vi];ne.update(Th,Pn),ne.bind(Th,Pn)}}return Pn}function I_(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function U_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,N,G){const k=H.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(E.texture).__webglTexture=N,H.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const G=H.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){U=E,Y=N,V=G;let k=null,z=!1,xe=!1;if(E){const ve=H.get(E);if(ve.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),re.copy(E.viewport),ue.copy(E.scissor),We=E.scissorTest,v.viewport(re),v.scissor(ue),v.setScissorTest(We),X=-1;return}else if(ve.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(ve.__hasExternalTextures)K.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(ve.__boundDepthTexture!==ze){if(ze!==null&&H.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const be=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[N])?k=be[N][G]:k=be[N],z=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?k=H.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[G]:k=be,re.copy(E.viewport),ue.copy(E.scissor),We=E.scissorTest}else re.copy(le).multiplyScalar(se).floor(),ue.copy(Oe).multiplyScalar(se).floor(),We=ye;if(G!==0&&(k=W),v.bindFramebuffer(D.FRAMEBUFFER,k)&&v.drawBuffers(E,k),v.viewport(re),v.scissor(ue),v.setScissorTest(We),z){const ve=H.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,G)}else if(xe){const ve=N;for(let Ae=0;Ae<E.textures.length;Ae++){const be=H.get(E.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,be.__webglTexture,G,ve)}}else if(E!==null&&G!==0){const ve=H.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,G)}X=-1},this.readRenderTargetPixels=function(E,N,G,k,z,xe,Ee,ve=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){v.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const be=E.textures[ve],ze=be.format,Ge=be.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(ze)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ge)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&G>=0&&G<=E.height-z&&D.readPixels(N,G,k,z,me.convert(ze),me.convert(Ge),xe)}finally{const be=U!==null?H.get(U).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,k,z,xe,Ee,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(N>=0&&N<=E.width-k&&G>=0&&G<=E.height-z){v.bindFramebuffer(D.FRAMEBUFFER,Ae);const be=E.textures[ve],ze=be.format,Ge=be.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(N,G,k,z,me.convert(ze),me.convert(Ge),0);const ct=U!==null?H.get(U).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,ct);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await GS(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Pe),D.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,G=0){const k=Math.pow(2,-G),z=Math.floor(E.image.width*k),xe=Math.floor(E.image.height*k),Ee=N!==null?N.x:0,ve=N!==null?N.y:0;K.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Ee,ve,z,xe),v.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,k=null,z=0,xe=0){let Ee,ve,Ae,be,ze,Ge,Pe,ct,bt;const At=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(G!==null)Ee=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,ze=G.min.y,Ge=G.isBox3?G.min.z:0;else{const Pt=Math.pow(2,-z);Ee=Math.floor(At.width*Pt),ve=Math.floor(At.height*Pt),E.isDataArrayTexture?Ae=At.depth:E.isData3DTexture?Ae=Math.floor(At.depth*Pt):Ae=1,be=0,ze=0,Ge=0}k!==null?(Pe=k.x,ct=k.y,bt=k.z):(Pe=0,ct=0,bt=0);const dt=me.convert(N.format),Yt=me.convert(N.type);let Me;N.isData3DTexture?(K.setTexture3D(N,0),Me=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),Me=D.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),Me=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const _n=v.getParameter(D.UNPACK_ROW_LENGTH),Je=v.getParameter(D.UNPACK_IMAGE_HEIGHT),Pn=v.getParameter(D.UNPACK_SKIP_PIXELS),ei=v.getParameter(D.UNPACK_SKIP_ROWS),ki=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,be),v.pixelStorei(D.UNPACK_SKIP_ROWS,ze),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const $r=E.isDataArrayTexture||E.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Pt=H.get(E),zi=H.get(N),mt=H.get(Pt.__renderTarget),Vi=H.get(zi.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,mt.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Kr=0;Kr<Ae;Kr++)$r&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(E).__webglTexture,z,Ge+Kr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(N).__webglTexture,xe,bt+Kr)),D.blitFramebuffer(be,ze,Ee,ve,Pe,ct,Ee,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||H.has(E)){const Pt=H.get(E),zi=H.get(N);v.bindFramebuffer(D.READ_FRAMEBUFFER,q),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let mt=0;mt<Ae;mt++)$r?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,z,Ge+mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,z),ft?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zi.__webglTexture,xe,bt+mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zi.__webglTexture,xe),z!==0?D.blitFramebuffer(be,ze,Ee,ve,Pe,ct,Ee,ve,D.COLOR_BUFFER_BIT,D.NEAREST):ft?D.copyTexSubImage3D(Me,xe,Pe,ct,bt+mt,be,ze,Ee,ve):D.copyTexSubImage2D(Me,xe,Pe,ct,be,ze,Ee,ve);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Me,xe,Pe,ct,bt,Ee,ve,Ae,dt,Yt,At.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,xe,Pe,ct,bt,Ee,ve,Ae,dt,At.data):D.texSubImage3D(Me,xe,Pe,ct,bt,Ee,ve,Ae,dt,Yt,At):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Pe,ct,Ee,ve,dt,Yt,At.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Pe,ct,At.width,At.height,dt,At.data):D.texSubImage2D(D.TEXTURE_2D,xe,Pe,ct,Ee,ve,dt,Yt,At);v.pixelStorei(D.UNPACK_ROW_LENGTH,_n),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Pn),v.pixelStorei(D.UNPACK_SKIP_ROWS,ei),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ki),xe===0&&N.generateMipmaps&&D.generateMipmap(Me),v.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){Y=0,V=0,U=null,v.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const ri={cinematic:{pixelRatio:1.35,density:1,renderDistance:520},high:{pixelRatio:1.1,density:.78,renderDistance:420},balanced:{pixelRatio:.85,density:.56,renderDistance:320}},Hn=[{id:"s1",name:"Kota Lama",z:95,waiting:7},{id:"s2",name:"Pasar Raya",z:355,waiting:9},{id:"s3",name:"Terminal Selatan",z:670,waiting:5}],Sn={maxForwardSpeedMps:24.5,maxReverseSpeedMps:5.5,throttleAcceleration:6.5,serviceBrakeDeceleration:10,reverseAcceleration:4.2,rollingResistance:.55,parkingBrakeDamping:9,steeringRateDegPerSec:28,maxWheelAngleDeg:32,doorInterlockSpeedMps:1.2,boardingSpeedMps:.8},Yo=["chase","showcase","cockpit","cinematic","stopside"];function Im(){return{phase:"menu",elapsed:0,message:"Board the coach and begin the route.",missionStatus:"Ready for departure",x:.33,z:20,heading:0,velocity:0,throttle:0,brake:0,steering:0,gear:"D",parkingBrake:!1,doorOpen:!1,headlights:!1,indicator:"off",hornActive:!1,fuel:100,damage:0,odo:0,wheelAngle:0,collisionCount:0,lastCollision:"none",passengerCount:4,boardedTotal:0,nextStop:0,boarding:0,score:0,camera:"chase",quality:"cinematic",pressed:new Set,lastAction:"none",lastPointerType:"mouse",tick:0,frame:0,uiUpdates:0,accumulator:0,lastTime:0,drawCalls:0,canvasW:0,canvasH:0,contextLost:!1,webglVersion:0}}function at(t,e=.7,n=.05){return new Oy({color:t,roughness:e,metalness:n})}function Ze(t,e,n=0,i=0,r=0){const s=new _i(t,e);return s.position.set(n,i,r),s.castShadow=!0,s.receiveShadow=!0,s}function Gw(){const t=new As;t.name="Nusantara Coach NLX-880";const e=at(15265513,.34,.18),n=at(463635,.25,.3),i=at(556896,.35,.16),r=at(12899021,.18,.85);t.add(Ze(new ot(2.55,2.7,8.9),e,0,1.65,0)),t.add(Ze(new ot(2.59,.38,7.6),i,0,.72,.15)),t.add(Ze(new ot(2.6,.12,8.7),r,0,.45,0));const s=Ze(new ot(2.61,1.12,6.6),n,0,2.15,-.15);t.add(s),t.add(Ze(new ot(2.61,1.15,.18),n,0,2.12,4.44)),t.add(Ze(new ot(2.66,.12,6.8),i,0,1.52,-.1));for(let h=-3.1;h<=2.9;h+=1.25)t.add(Ze(new ot(2.68,1.18,.07),r,0,2.14,h));const a=new fr(.48,.48,.32,20),o=at(329222,.8,.05);for(const h of[-1.33,1.33])for(const d of[-2.8,2.9]){const c=Ze(a,o,h,.57,d);c.rotation.z=Math.PI/2,c.name="wheel",t.add(c)}for(const h of[-.78,.78]){const d=Ze(new ot(.48,.24,.12),at(16774346,.2,.15),h,1.08,4.5);d.name="headlamp",t.add(d)}for(const h of[-1.02,1.02])t.add(Ze(new ot(.2,.18,.13),at(16753427),h,1.05,4.52));const l=Ze(new ot(.08,1.7,1.25),n,-1.31,1.42,2.65);l.name="door",t.add(l);const u=Ze(new ot(1.45,.28,.05),at(1515550),0,2.97,4.51);return t.add(u),t}function Ww(t){const e=new As,n=at(t,.4,.2);e.add(Ze(new ot(1.75,.75,3.8),n,0,.62,0)),e.add(Ze(new ot(1.55,.62,1.9),at(1517352,.3,.25),0,1.15,-.15));for(const i of[-.92,.92])for(const r of[-1.25,1.25]){const s=Ze(new fr(.3,.3,.18,14),at(526601),i,.38,r);s.rotation.z=Math.PI/2,e.add(s)}return e}function Ki({name:t}){const e={play:"M8 5v14l11-7z",pause:"M8 5h3v14H8zm5 0h3v14h-3z",camera:"M4 8h3l2-3h6l2 3h3v11H4z M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6",light:"M9 18h6 M10 22h4 M8 14c-1.3-1.1-2-2.7-2-4.4a6 6 0 1 1 12 0c0 1.7-.7 3.3-2 4.4-.7.6-1 1.3-1 2H9c0-.7-.3-1.4-1-2z",door:"M6 3h12v18H6z M9 6h6v15H9z M12 13h1",reset:"M4 12a8 8 0 1 0 2.3-5.7L4 8 M4 3v5h5",horn:"M4 10h4l6-5v14l-6-5H4z M17 9c1 1 1 5 0 6 M19 6c3 3 3 9 0 12"};return Q.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:t==="play"?"currentColor":"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:Q.jsx("path",{d:e[t]||e.play})})}function Xw(){const t=un.useRef(null),e=un.useRef(Im()),n=un.useRef({}),[i,r]=un.useState(()=>Um(e.current)),[s,a]=un.useState(!0),o=un.useCallback(()=>{e.current.uiUpdates++,r(Um(e.current))},[]),l=un.useCallback((d,c)=>{var g,M,m,f,x,y;const p=e.current;if(p.lastAction=d,d==="start"&&(p.phase="playing",p.message="Follow the green route. First stop: Kota Lama",p.missionStatus="IN SERVICE",a(!1)),d==="pause"&&p.phase!=="menu"&&p.phase!=="complete"&&(p.phase=p.phase==="paused"?"playing":"paused",p.message=p.phase==="paused"?"Simulation paused":"Route resumed"),d==="reset"){const S=p.quality,w=Im();Object.assign(p,w,{quality:S,phase:"playing",message:"Route reset. Depart for Kota Lama.",missionStatus:"IN SERVICE"}),a(!1),(M=(g=n.current).resetVisual)==null||M.call(g)}d==="door"&&(Math.abs(p.velocity)<=Sn.doorInterlockSpeedMps?(p.doorOpen=!p.doorOpen,p.message=p.doorOpen?"Passenger doors open":"Passenger doors secured"):p.message="DOOR INTERLOCK · Slow below 4 km/h"),d==="parking"&&(p.parkingBrake=!p.parkingBrake,p.message=p.parkingBrake?"Parking brake applied":"Parking brake released"),d==="lights"&&(p.headlights=!p.headlights),d==="indicator"&&(p.indicator=p.indicator===c?"off":c),d==="camera"&&(p.camera=Yo[(Yo.indexOf(p.camera)+1)%Yo.length],p.message=`Camera · ${p.camera.toUpperCase()}`),d==="quality"&&(p.quality=c,(f=(m=n.current).applyQuality)==null||f.call(m),p.message=`Graphics · ${String(c).toUpperCase()}`),d==="horn"&&(p.hornActive=!!c,c&&((y=(x=n.current).beep)==null||y.call(x))),o()},[o]),u=un.useCallback((d,c,p="touch")=>{const g=e.current;g.lastPointerType=p,c?g.pressed.add(d):g.pressed.delete(d),g.lastAction=c?d:`${d}:up`},[]);un.useEffect(()=>{const d=t.current,c=e.current,p=new Sy;p.background=new Ye(11323843),p.fog=new Vl(11323843,75,ri[c.quality].renderDistance);const g=new Hw({canvas:d,antialias:!0,powerPreference:"high-performance"});g.outputColorSpace=Mn,g.toneMapping=qf,g.toneMappingExposure=1.05,c.webglVersion=g.capabilities.isWebGL2?2:1,d.addEventListener("webglcontextlost",()=>c.contextLost=!0),d.addEventListener("webglcontextrestored",()=>c.contextLost=!1);const M=new En(53,1,.1,520);p.add(new zy(14284013,3232059,2.2));const m=new Wy(16772296,3.1);m.position.set(-45,65,-30),p.add(m);const f=at(2896947,.88),x=at(4549958,.95),y=at(10463133,.9),S=Ze(new Or(90,900),x,0,-.08,400);S.rotation.x=-Math.PI/2,p.add(S);const w=Ze(new Or(10.4,820),f,.33,0,400);w.rotation.x=-Math.PI/2,p.add(w);for(const $ of[-5.12,5.78]){const ie=Ze(new ot(.22,.2,820),y,$,.06,400);p.add(ie)}for(let $=8;$<805;$+=13){const ie=Ze(new ot(.11,.025,6),at(15328456),.33,.025,$);p.add(ie)}const T=[];for(let $=20,ie=0;$<800;$+=22,ie++)for(const le of[-1,1]){if(ie%4!==0){const Be=le*(10.5+ie%3*2.7)+.33,Ie=4+ie%3,nt=7+ie%2*2,it=3.2+ie%4*.8,Qe=Ze(new ot(Ie,it,nt),at([13141079,13812892,9349786,11821904][ie%4]),Be,it/2,$);p.add(Qe),Qe.add(Ze(new ot(Ie+.5,.32,nt+.6),at(ie%2?7357499:3890515),0,it/2+.18,0));for(let ut=1.1;ut<it;ut+=1.4)for(let ht=-Ie/3;ht<=Ie/3;ht+=Ie/1.5){const Tt=Ze(new ot(.7,.65,.05),at(2705740,.25),ht,ut-it/2,le<0?nt/2+.03:-nt/2-.03);Qe.add(Tt)}T.push({id:`building-${ie}-${le}`,type:"building",x:Be,z:$,halfWidth:Ie/2,halfLength:nt/2})}const Oe=le*(7.7+ie%2*1.1)+.33,ye=Ze(new fr(.13,.19,2.4,8),at(7557948),Oe,1.2,$+8);p.add(ye);const Ue=Ze(new lh(1.15+ie%3*.2,10,8),at(ie%2?2582082:3963467),Oe,2.8,$+8);p.add(Ue)}for(const $ of[-34,-18,20,37]){const ie=Ze(new oh(18,25,5),at(6059882,.95),$,10,460+Math.abs($)*4);ie.rotation.y=.4,p.add(ie)}Hn.forEach(($,ie)=>{const Oe=Ze(new ot(5,.25,3.3),at(1535835,.35,.3),7.8,3,$.z);p.add(Oe);for(const Be of[-2.2,2.2])for(const Ie of[-1.35,1.35])p.add(Ze(new ot(.16,3,.16),at(13095111,.3,.65),7.8+Be,1.5,$.z+Ie));p.add(Ze(new ot(4.5,.16,.55),at(8608309),7.8,1,$.z+.9)),p.add(Ze(new ot(4.7,1.25,.1),at(3562587,.25),7.8,2.15,$.z+1.42));const ye=Ze(new fr(.13,.13,3.7,10),at(15263443),5.95,1.85,$.z-3);p.add(ye),ye.add(Ze(new ot(.85,.85,.12),at(ie===0?2734979:3695448),0,1.35,0)),T.push({id:`shelter-${ie+1}`,type:"shelter",x:7.8,z:$.z,halfWidth:2.5,halfLength:1.8});const Ue=Ze(new Or(3.4,21),new sh({color:3530914,transparent:!0,opacity:.12,side:li}),3.65,.035,$.z);Ue.rotation.x=-Math.PI/2,Ue.name=`stopzone-${ie}`,p.add(Ue)});for(let $=35;$<790;$+=48)for(const ie of[-6.25,6.91]){const le=Ze(new fr(.07,.1,4.5,8),at(3491651,.45,.5),ie,2.25,$);p.add(le),le.add(Ze(new ot(.7,.12,.15),at(3161145),ie<0?.3:-.3,2.15,0))}const A=Gw();p.add(A);const _=Array.from({length:10},($,ie)=>({id:`traffic-${ie+1}`,x:ie%2?2.7:-2.05,z:135+ie*61,speed:5.2+ie%4*.8,direction:ie%2?-1:1})),R=[14852395,13058873,3235195,14738398,3444327];_.forEach(($,ie)=>{$.mesh=Ww(R[ie%R.length]),$.mesh.position.set($.x,0,$.z),$.mesh.rotation.y=$.direction<0?Math.PI:0,p.add($.mesh)});const b=new Hy(16773569,0,45,.45,.5,1.2),P=b.clone();p.add(b,P,b.target,P.target);let I=A.getObjectByName("door");const W=new B,q=new B,O=performance.now(),Y={position:{x:0,y:0,z:0},target:{x:0,y:0,z:0},fov:53};function V(){const $=ri[c.quality];g.setPixelRatio(Math.min(devicePixelRatio,$.pixelRatio)),M.far=$.renderDistance,p.fog=new Vl(11323843,70,$.renderDistance),M.updateProjectionMatrix(),U()}function U(){const $=d.getBoundingClientRect();g.setSize($.width,$.height,!1),M.aspect=$.width/Math.max(1,$.height),M.updateProjectionMatrix(),c.canvasW=d.width,c.canvasH=d.height}function X(){A.position.set(c.x,0,c.z),A.rotation.y=c.heading,_.forEach(($,ie)=>{$.z=135+ie*61,$.mesh.position.z=$.z})}function te(){try{const $=window.AudioContext||window.webkitAudioContext,ie=new $,le=ie.createOscillator(),Oe=ie.createGain();le.frequency.value=190,Oe.gain.setValueAtTime(.12,ie.currentTime),Oe.gain.exponentialRampToValueAtTime(.001,ie.currentTime+.18),le.connect(Oe),Oe.connect(ie.destination),le.start(),le.stop(ie.currentTime+.18)}catch{}}n.current={applyQuality:V,resetVisual:X,beep:te,traffic:_,solids:T,worldCam:Y,renderer:g,camera:M},V(),window.addEventListener("resize",U);const re=($,ie)=>{if(Math.abs($-.33)>3.9)return"road edge barrier";for(const le of _)if(Math.abs($-le.x)<2.05&&Math.abs(ie-le.z)<6.1)return le.id;for(const le of T)if(Math.abs($-le.x)<le.halfWidth+1.25&&Math.abs(ie-le.z)<le.halfLength+4.4)return le.id;return""};function ue($){if(c.phase!=="playing")return;c.elapsed+=$,c.tick++;const ie=c.pressed.has("KeyW")||c.pressed.has("ArrowUp"),le=c.pressed.has("KeyS")||c.pressed.has("ArrowDown"),Oe=c.pressed.has("KeyA")||c.pressed.has("ArrowLeft"),ye=c.pressed.has("KeyD")||c.pressed.has("ArrowRight");c.throttle=ie?1:0,c.brake=le&&c.velocity>1?1:0,c.steering=(ye?1:0)-(Oe?1:0),c.doorOpen&&Math.abs(c.velocity)>.15?c.velocity*=Math.max(0,1-$*7):c.parkingBrake?c.velocity*=Math.max(0,1-$*Sn.parkingBrakeDamping):ie&&c.fuel>0?c.velocity+=Sn.throttleAcceleration*$*(1-Math.max(0,c.velocity)/Sn.maxForwardSpeedMps):le?c.velocity>.3?c.velocity-=Sn.serviceBrakeDeceleration*$:(c.velocity-=Sn.reverseAcceleration*$,c.gear="R"):(c.velocity-=Math.sign(c.velocity)*Math.min(Math.abs(c.velocity),Sn.rollingResistance*$),Math.abs(c.velocity)<.1&&(c.gear="D")),c.velocity=Qr.clamp(c.velocity,-Sn.maxReverseSpeedMps,Sn.maxForwardSpeedMps);const Ue=Math.min(1,Math.abs(c.velocity)/4);c.wheelAngle=c.steering*Sn.maxWheelAngleDeg*Ue,c.heading+=c.steering*Qr.degToRad(Sn.steeringRateDegPerSec)*$*Ue*(c.velocity<0?-1:1),c.heading=Qr.clamp(c.heading,-.6,.6);const Be=c.x+Math.sin(c.heading)*c.velocity*$,Ie=c.z+Math.cos(c.heading)*c.velocity*$,nt=re(Be,Ie);nt?(Math.abs(c.velocity)>1&&(c.collisionCount++,c.damage=Math.min(100,c.damage+Math.abs(c.velocity)*.15),c.lastCollision=nt,c.message=`Collision · ${nt.replace(/-/g," ")}`),c.velocity*=-.08):(c.x=Be,c.z=Ie,c.odo+=Math.abs(c.velocity)*$/1e3,c.throttle&&(c.fuel=Math.max(0,c.fuel-Math.abs(c.velocity)*$*.0018)));for(const Qe of _)Qe.z+=Qe.speed*Qe.direction*$,Qe.z>815&&(Qe.z=8),Qe.z<5&&(Qe.z=810);const it=Hn[c.nextStop];if(it){const Qe=Math.abs(c.z-it.z)<=10.5&&Math.abs(c.x-3.2)<=4.2;if(Qe&&Math.abs(c.velocity)<=Sn.boardingSpeedMps&&c.doorOpen){if(c.boarding=Math.min(1,c.boarding+$/1.25),c.message=`Boarding at ${it.name} · ${Math.round(c.boarding*100)}%`,c.boarding>=1){const ut=it.waiting;c.passengerCount=Math.min(42,c.passengerCount+ut),c.boardedTotal+=ut,c.score+=ut*18e3,c.nextStop++,c.boarding=0,c.doorOpen=!1,c.message=`${ut} passengers boarded · +Rp ${(ut*18e3).toLocaleString("id-ID")}`,c.missionStatus=c.nextStop===3?"ROUTE COMPLETE":"STOP SERVED",c.nextStop===3&&(c.phase="complete",c.message="Route complete — excellent service!")}}else(!Qe||!c.doorOpen)&&(c.boarding=0)}}function We($){A.position.set(c.x,0,c.z),A.rotation.y=c.heading,I.position.x=c.doorOpen?-1.72:-1.31,I.rotation.y=c.doorOpen?-.65:0,A.children.filter(ye=>ye.name==="wheel").forEach(ye=>ye.rotation.x+=c.velocity*.012),_.forEach(ye=>{ye.mesh.position.set(ye.x,0,ye.z)});const ie=Math.floor($/450)%2===0;A.children.forEach(ye=>{var Ue,Be;ye.material&&((Ue=ye.geometry)==null?void 0:Ue.type)==="BoxGeometry"&&ye.position.z>4.5&&Math.abs(ye.position.x)>.9&&((Be=ye.material.emissive)==null||Be.setHex(c.indicator!=="off"&&ie?16738816:0))}),b.intensity=c.headlights?70:0,P.intensity=c.headlights?70:0;for(const[ye,Ue]of[[b,-.75],[P,.75]])ye.position.set(c.x+Ue,1.2,c.z+4.3),ye.target.position.set(c.x+Ue,0,c.z+35);const le=new B(Math.sin(c.heading),0,Math.cos(c.heading)),Oe=new B(Math.cos(c.heading),0,-Math.sin(c.heading));if(c.camera==="chase"&&(W.copy(new B(c.x,4.7,c.z)).addScaledVector(le,-12).addScaledVector(Oe,-.9),q.set(c.x,1.6,c.z).addScaledVector(le,11),M.fov=53),c.camera==="showcase"&&(W.copy(new B(c.x,2.6,c.z)).addScaledVector(le,-7).addScaledVector(Oe,7),q.set(c.x,1.5,c.z+1),M.fov=48),c.camera==="cockpit"&&(W.set(c.x,2.28,c.z).addScaledVector(le,3.55).addScaledVector(Oe,-.42),q.copy(W).addScaledVector(le,25),M.fov=66),c.camera==="cinematic"){const ye=$*12e-5;W.set(c.x+Math.cos(ye)*13,5.3,c.z+Math.sin(ye)*13),q.set(c.x,1.5,c.z),M.fov=47}if(c.camera==="stopside"){const ye=Hn[Math.min(c.nextStop,2)];W.set(10,3.7,Math.abs(c.z-ye.z)<70?ye.z-7:c.z-6),q.set(c.x,1.5,c.z),M.fov=52}M.position.lerp(W,.08),M.lookAt(q),M.fov=Qr.lerp(M.fov,Y.fov,.01),M.updateProjectionMatrix(),Y.position={x:+M.position.x.toFixed(2),y:+M.position.y.toFixed(2),z:+M.position.z.toFixed(2)},Y.target={x:+q.x.toFixed(2),y:+q.y.toFixed(2),z:+q.z.toFixed(2)},Y.fov=M.fov}let je=O,Ve=0,Z=0,oe=0;function se($){const ie=Math.min(.1,($-je)/1e3);for(je=$,c.phase==="playing"&&(Ve=Math.min(Ve+ie,.0667));Ve>=1/60;)ue(1/60),Ve-=1/60;c.accumulator=Ve,We($),g.render(p,M),c.frame++,c.drawCalls=g.info.render.calls,Z+=ie,Z>.1&&(Z=0,o()),oe=requestAnimationFrame(se)}return oe=requestAnimationFrame(se),()=>{cancelAnimationFrame(oe),window.removeEventListener("resize",U),g.dispose(),p.traverse($=>{var ie,le,Oe,ye;(le=(ie=$.geometry)==null?void 0:ie.dispose)==null||le.call(ie),Array.isArray($.material)?$.material.forEach(Ue=>Ue.dispose()):(ye=(Oe=$.material)==null?void 0:Oe.dispose)==null||ye.call(Oe)})}},[o]),un.useEffect(()=>{const d=g=>{["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(g.code)&&(g.preventDefault(),u(g.code,!0,"mouse")),!g.repeat&&(g.code==="Space"&&l("parking"),g.code==="KeyE"&&l("door"),g.code==="KeyL"&&l("lights"),g.code==="KeyC"&&l("camera"),(g.code==="KeyP"||g.code==="Escape")&&l("pause"),g.code==="KeyQ"&&l("indicator","left"),g.code==="KeyR"&&l("indicator","right"),g.code==="KeyH"&&l("horn",!0))},c=g=>{u(g.code,!1,"mouse"),g.code==="KeyH"&&l("horn",!1)},p=()=>{e.current.pressed.clear(),e.current.throttle=0,e.current.brake=0,e.current.steering=0,e.current.hornActive=!1};return window.addEventListener("keydown",d),window.addEventListener("keyup",c),window.addEventListener("blur",p),document.addEventListener("visibilitychange",p),()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",c),window.removeEventListener("blur",p),document.removeEventListener("visibilitychange",p)}},[l,u]),un.useEffect(()=>{const d=()=>e.current,c=()=>Hn.map((m,f)=>({...m,status:f<d().nextStop?"complete":f===d().nextStop?"next":"upcoming"})),p=()=>(n.current.solids||[]).filter(m=>Math.abs(m.z-d().z)<90).slice(0,12),g=()=>d().nextStop<3&&Math.abs(d().z-Hn[d().nextStop].z)<=10.5&&Math.abs(d().x-3.2)<=4.2,M=()=>({id:"NLX-880",type:"12m Luxury Coach",position:{x:d().x,z:d().z},headingDeg:Qr.radToDeg(d().heading),speedKph:Math.abs(d().velocity)*3.6,velocity:d().velocity,throttle:d().throttle,brake:d().brake,steering:d().steering,gear:d().gear,parkingBrake:d().parkingBrake,doorOpen:d().doorOpen,headlights:d().headlights,indicator:d().indicator,hornActive:d().hornActive,fuel:d().fuel,damage:d().damage,odometerKm:d().odo,wheelAngle:d().wheelAngle,collisionCount:d().collisionCount,lastCollision:d().lastCollision,dynamics:Sn});return window.__bus={getState:()=>({phase:d().phase,speedKph:Math.abs(d().velocity)*3.6,position:{x:d().x,z:d().z},headingDeg:Qr.radToDeg(d().heading),doorOpen:d().doorOpen,passengerCount:d().passengerCount,nextStopIndex:d().nextStop,routeProgress:Math.min(1,(d().z-20)/650),fuel:d().fuel,score:d().score})},window.__game={getState:()=>({phase:d().phase,elapsed:d().elapsed,paused:d().phase==="paused",missionStatus:d().missionStatus,score:d().score,message:d().message})},window.__vehicle={getState:M},window.__route={getState:()=>({name:"Bandung · Kota Lama · Selatan",stopCount:3,currentStopIndex:d().nextStop,stops:c().map(({waiting:m,...f})=>f),nextStopDistance:d().nextStop<3?Math.max(0,Hn[d().nextStop].z-d().z):0,atStop:g(),completed:d().nextStop===3,earnings:d().score,service:{stopLongitudinalHalfLength:10.5,stopLateralHalfWidth:4.2,boardingDuration:1.25}})},window.__passengers={getState:()=>({onboard:d().passengerCount,capacity:42,boardedTotal:d().boardedTotal,waitingAtNext:d().nextStop<3?Hn[d().nextStop].waiting:0,boardingProgress:d().boarding})},window.__traffic={getState:()=>({count:(n.current.traffic||[]).length,density:ri[d().quality].density,vehicles:(n.current.traffic||[]).map(m=>({id:m.id,x:m.x,z:m.z,speedKph:m.speed*3.6,direction:m.direction}))})},window.__world={getState:()=>({environment:"Tropical intercity corridor",weather:"Sunbreak after rain",timeOfDay:"16:20",roadCenter:.33,roadHalfWidth:5.2,surface:"asphalt",nearStopMarkers:Hn.filter(m=>Math.abs(m.z-d().z)<90).length,solidObstacleCount:(n.current.solids||[]).length,collision:{roadEdgeEnabled:!0,trafficEnabled:!0,solidObjectsEnabled:!0,busWidth:2.55,busLength:8.9},nearbySolidObstacles:p()})},window.__camera={getState:()=>({mode:d().camera,...n.current.worldCam||{position:{x:0,y:0,z:0},target:{x:0,y:0,z:0},fov:53},near:.1,far:ri[d().quality].renderDistance,modes:Yo})},window.__input={getState:()=>({pressed:Array.from(d().pressed),lastAction:d().lastAction,lastPointerType:d().lastPointerType,mobileControls:innerWidth<=720})},window.__renderer={getState:()=>({backend:"WebGL",contextLost:d().contextLost,frame:d().frame,drawCalls:d().drawCalls,canvas:{width:d().canvasW,height:d().canvasH},quality:d().quality,pixelRatio:ri[d().quality].pixelRatio,renderDistance:ri[d().quality].renderDistance,webglVersion:d().webglVersion,dynamicLighting:!0,fog:!0,antialias:!0,shadowsEnabled:!1})},window.__performance={getState:()=>({elapsed:d().elapsed,tick:d().tick,frame:d().frame,fixedStep:1/60,accumulator:d().accumulator,maxSubSteps:4,uiUpdates:d().uiUpdates,mounted:!0})},window.__settings={getState:()=>({quality:d().quality,masterVolume:.8,pixelRatio:ri[d().quality].pixelRatio,trafficDensity:ri[d().quality].density,renderDistance:ri[d().quality].renderDistance,qualityProfiles:ri})},()=>{["__bus","__game","__vehicle","__route","__passengers","__traffic","__world","__camera","__input","__renderer","__performance","__settings"].forEach(m=>delete window[m])}},[]);const h=Hn[i.nextStop];return Q.jsxs("main",{className:"relative h-full w-full overflow-hidden bg-[#07110f] select-none",children:[Q.jsx("canvas",{ref:t,className:"game-canvas"}),Q.jsx("div",{className:"pointer-events-none absolute inset-0 fade-top h-28"}),Q.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-48 fade-bottom"}),!s&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("header",{className:"absolute left-0 right-0 top-0 flex items-start justify-between gap-2 p-3 md:p-5 pointer-events-none",children:[Q.jsxs("div",{className:"glass rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-3",children:[Q.jsx("div",{className:"h-9 w-9 rounded-lg bg-emerald-500/15 border border-emerald-300/25 flex items-center justify-center text-emerald-300 condensed font-extrabold",children:"NL"}),Q.jsxs("div",{children:[Q.jsx("div",{className:"condensed text-[11px] tracking-[.22em] text-emerald-300/80",children:"NUSANTARA LINES"}),Q.jsxs("div",{className:"text-xs md:text-sm font-semibold",children:["Bandung Selatan ",Q.jsx("span",{className:"text-white/40 mx-1",children:"/"})," NLX-880"]})]})]}),Q.jsxs("div",{className:"flex gap-2 pointer-events-auto",children:[Q.jsx("button",{className:"control-btn h-11 w-11 rounded-xl","aria-label":"Cycle camera",onClick:()=>l("camera"),children:Q.jsx(Ki,{name:"camera"})}),Q.jsx("button",{className:"control-btn h-11 w-11 rounded-xl","aria-label":"Pause",onClick:()=>l("pause"),children:Q.jsx(Ki,{name:i.phase==="paused"?"play":"pause"})})]})]}),Q.jsxs("aside",{className:"absolute left-3 top-[82px] md:left-5 md:top-28 w-[178px] md:w-[220px] glass rounded-xl overflow-hidden pointer-events-none",children:[Q.jsxs("div",{className:"px-3 py-2 border-b border-white/10 flex items-center justify-between",children:[Q.jsx("span",{className:"condensed text-[10px] tracking-[.2em] text-white/50",children:"ROUTE SERVICE"}),Q.jsx("span",{className:"text-[9px] px-2 py-1 rounded bg-emerald-400/15 text-emerald-300",children:i.missionStatus})]}),Q.jsxs("div",{className:"p-3",children:[Q.jsxs("div",{className:"text-[10px] text-white/45",children:["NEXT STOP · ",Math.max(0,Math.round(i.nextDistance)),"m"]}),Q.jsx("div",{className:"condensed text-xl font-bold",children:(h==null?void 0:h.name)||"Route complete"}),Q.jsx("div",{className:"mt-3 flex gap-1",children:Hn.map((d,c)=>Q.jsx("div",{className:`h-1.5 flex-1 rounded-full ${c<i.nextStop?"bg-emerald-400":c===i.nextStop?"bg-amber-300 pulse-ring":"bg-white/15"}`},d.id))}),Q.jsxs("div",{className:"mt-2 text-[9px] flex justify-between text-white/40",children:[Q.jsx("span",{children:"DEPOT"}),Q.jsxs("span",{children:[i.nextStop,"/3 SERVED"]})]}),i.boarding>0&&Q.jsxs("div",{className:"mt-3",children:[Q.jsxs("div",{className:"flex justify-between text-[10px] text-emerald-200",children:[Q.jsx("span",{children:"BOARDING"}),Q.jsxs("span",{children:[Math.round(i.boarding*100),"%"]})]}),Q.jsx("div",{className:"h-1 mt-1 bg-white/10",children:Q.jsx("div",{className:"h-full bg-emerald-400",style:{width:`${i.boarding*100}%`}})})]})]})]}),Q.jsxs("div",{className:"absolute right-3 top-[82px] md:right-5 md:top-28 glass rounded-xl px-3 py-2 md:px-4 pointer-events-none text-right",children:[Q.jsx("div",{className:"text-[9px] tracking-widest text-white/45",children:"PASSENGERS"}),Q.jsxs("div",{className:"condensed text-xl font-bold",children:[i.passengerCount,Q.jsx("span",{className:"text-sm text-white/30",children:" / 42"})]}),Q.jsxs("div",{className:"text-[10px] text-emerald-300",children:["Rp ",i.score.toLocaleString("id-ID")]})]}),Q.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 w-[min(92vw,560px)] pointer-events-none",children:[Q.jsx("div",{className:"mb-2 mx-auto w-fit rounded-full glass px-4 py-1.5 text-[10px] md:text-xs text-center hud-shadow",children:i.message}),Q.jsxs("div",{className:"glass rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-4 meter-grid",children:[Q.jsxs("div",{className:"min-w-[74px]",children:[Q.jsx("div",{className:"condensed text-4xl md:text-5xl leading-none font-bold tabular-nums",children:Math.round(i.speedKph)}),Q.jsxs("div",{className:"text-[9px] tracking-[.2em] text-white/45",children:["KM/H · ",i.gear]})]}),Q.jsxs("div",{className:"flex-1 max-w-[230px]",children:[Q.jsxs("div",{className:"flex justify-between text-[9px] tracking-wider",children:[Q.jsx("span",{children:"FUEL"}),Q.jsxs("span",{children:[Math.round(i.fuel),"%"]})]}),Q.jsx("div",{className:"h-1.5 mt-1.5 bg-black/30 rounded-full overflow-hidden",children:Q.jsx("div",{className:`h-full ${i.fuel<20?"bg-rose-400":"bg-emerald-400"}`,style:{width:`${i.fuel}%`}})}),Q.jsxs("div",{className:"mt-2 flex gap-2 text-[9px] text-white/50",children:[Q.jsxs("span",{className:i.doorOpen?"text-amber-300":"",children:["DOOR ",i.doorOpen?"OPEN":"LOCK"]}),Q.jsxs("span",{className:i.parkingBrake?"text-rose-300":"",children:["PARK ",i.parkingBrake?"ON":"OFF"]}),Q.jsx("span",{children:i.camera.toUpperCase()})]})]}),Q.jsxs("div",{className:"text-right hidden sm:block",children:[Q.jsx("div",{className:"text-[9px] text-white/40",children:"TRIP"}),Q.jsxs("div",{className:"condensed text-lg font-semibold",children:[i.odo.toFixed(1)," km"]})]})]})]}),Q.jsxs("div",{className:"desktop-only absolute right-5 bottom-28 flex gap-2 pointer-events-auto",children:[Q.jsx("button",{onClick:()=>l("indicator","left"),className:`control-btn rounded-xl h-10 w-10 ${i.indicator==="left"?"active":""}`,children:"←"}),Q.jsx("button",{onClick:()=>l("lights"),className:`control-btn rounded-xl h-10 w-10 ${i.headlights?"active":""}`,children:Q.jsx(Ki,{name:"light"})}),Q.jsx("button",{onClick:()=>l("door"),className:`control-btn rounded-xl h-10 w-10 ${i.doorOpen?"active":""}`,children:Q.jsx(Ki,{name:"door"})}),Q.jsx("button",{onClick:()=>l("parking"),className:`control-btn rounded-xl h-10 w-10 ${i.parkingBrake?"active":""}`,children:"P"}),Q.jsx("button",{onClick:()=>l("indicator","right"),className:`control-btn rounded-xl h-10 w-10 ${i.indicator==="right"?"active":""}`,children:"→"})]}),Q.jsxs("div",{className:"mobile-only absolute inset-x-3 bottom-28 flex justify-between items-end pointer-events-none",children:[Q.jsxs("div",{className:"grid grid-cols-3 gap-2 pointer-events-auto",children:[Q.jsx("div",{}),Q.jsx(qo,{label:"▲",code:"KeyW",hold:u}),Q.jsx("div",{}),Q.jsx(qo,{label:"◀",code:"KeyA",hold:u}),Q.jsx(qo,{label:"▼",code:"KeyS",hold:u}),Q.jsx(qo,{label:"▶",code:"KeyD",hold:u})]}),Q.jsxs("div",{className:"grid grid-cols-2 gap-2 pointer-events-auto",children:[Q.jsx("button",{onClick:()=>l("door"),className:`control-btn rounded-full h-12 w-12 ${i.doorOpen?"active":""}`,children:Q.jsx(Ki,{name:"door"})}),Q.jsx("button",{onPointerDown:()=>l("horn",!0),onPointerUp:()=>l("horn",!1),className:"control-btn rounded-full h-12 w-12",children:Q.jsx(Ki,{name:"horn"})}),Q.jsx("button",{onClick:()=>l("parking"),className:`control-btn rounded-full h-12 w-12 font-bold ${i.parkingBrake?"active":""}`,children:"P"}),Q.jsx("button",{onClick:()=>l("lights"),className:`control-btn rounded-full h-12 w-12 ${i.headlights?"active":""}`,children:Q.jsx(Ki,{name:"light"})})]})]})]}),s&&Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#05110f]/95 via-[#071512]/72 to-transparent flex items-center",children:Q.jsxs("div",{className:"w-full max-w-xl px-7 md:pl-16 md:pr-0",children:[Q.jsx("div",{className:"inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] tracking-[.24em] text-emerald-200",children:"INDONESIAN INTERCITY EXPERIENCE"}),Q.jsxs("h1",{className:"condensed mt-5 text-6xl md:text-8xl font-extrabold leading-[.78] tracking-tight",children:["NUSANTARA",Q.jsx("br",{}),Q.jsx("span",{className:"text-emerald-400",children:"LINES"})]}),Q.jsx("p",{className:"mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/65",children:"Command the NLX-880 luxury coach through a living tropical corridor. Serve three stops from Kota Lama to Terminal Selatan."}),Q.jsxs("div",{className:"mt-7 grid grid-cols-3 gap-2 max-w-md",children:[Q.jsx(fs,{n:"03",l:"PASSENGER STOPS"}),Q.jsx(fs,{n:"5",l:"CAMERA MODES"}),Q.jsx(fs,{n:"42",l:"SEAT CAPACITY"})]}),Q.jsxs("button",{onClick:()=>l("start"),className:"mt-8 group h-14 px-7 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#052018] font-bold flex items-center gap-4 shadow-2xl shadow-emerald-950/60 transition",children:[Q.jsx("span",{className:"h-8 w-8 rounded-full bg-black/10 flex items-center justify-center",children:Q.jsx(Ki,{name:"play"})}),"START SERVICE ",Q.jsx("span",{className:"text-xs opacity-50",children:"BANDUNG → SELATAN"})]}),Q.jsx("div",{className:"mt-5 text-[10px] text-white/40 tracking-wider hidden md:block",children:"WASD DRIVE · E DOOR · SPACE PARK · C CAMERA · L LIGHTS · P PAUSE"})]})}),(i.phase==="paused"||i.phase==="complete")&&!s&&Q.jsx("div",{className:"absolute inset-0 bg-[#03100d]/70 backdrop-blur-sm flex items-center justify-center p-5",children:Q.jsxs("div",{className:"glass rounded-2xl p-7 w-full max-w-sm text-center",children:[Q.jsx("div",{className:"text-[10px] tracking-[.3em] text-emerald-300",children:i.phase==="complete"?"SERVICE REPORT":"SIMULATION"}),Q.jsx("h2",{className:"condensed text-4xl font-bold mt-2",children:i.phase==="complete"?"ROUTE COMPLETE":"PAUSED"}),Q.jsx("p",{className:"text-sm text-white/55 mt-2",children:i.message}),Q.jsxs("div",{className:"grid grid-cols-3 gap-2 my-6",children:[Q.jsx(fs,{n:`${i.nextStop}/3`,l:"STOPS"}),Q.jsx(fs,{n:`${i.passengerCount}`,l:"ONBOARD"}),Q.jsx(fs,{n:`${Math.round(i.score/1e3)}K`,l:"RUPIAH"})]}),i.phase==="paused"&&Q.jsx("button",{onClick:()=>l("pause"),className:"w-full py-3 rounded-xl bg-emerald-400 text-[#052018] font-bold",children:"RESUME SERVICE"}),Q.jsx("button",{onClick:()=>l("reset"),className:"mt-2 w-full py-3 rounded-xl border border-white/15 hover:bg-white/5 text-sm",children:"RESET ROUTE"}),Q.jsxs("label",{className:"mt-5 flex items-center justify-between text-xs text-white/50",children:[Q.jsx("span",{children:"GRAPHICS QUALITY"}),Q.jsxs("select",{value:i.quality,onChange:d=>l("quality",d.target.value),className:"bg-[#10231e] border border-white/15 rounded-lg px-2 py-1.5 text-white",children:[Q.jsx("option",{value:"cinematic",children:"Cinematic"}),Q.jsx("option",{value:"high",children:"High"}),Q.jsx("option",{value:"balanced",children:"Balanced"})]})]})]})})]})}function Um(t){return{phase:t.phase,message:t.message,missionStatus:t.missionStatus,speedKph:Math.abs(t.velocity)*3.6,fuel:t.fuel,passengerCount:t.passengerCount,nextStop:t.nextStop,nextDistance:t.nextStop<3?Hn[t.nextStop].z-t.z:0,boarding:t.boarding,score:t.score,gear:t.gear,doorOpen:t.doorOpen,parkingBrake:t.parkingBrake,indicator:t.indicator,headlights:t.headlights,camera:t.camera,odo:t.odo,quality:t.quality}}function fs({n:t,l:e}){return Q.jsxs("div",{className:"rounded-lg border border-white/10 bg-white/[.04] p-2.5",children:[Q.jsx("div",{className:"condensed text-xl font-bold text-white",children:t}),Q.jsx("div",{className:"text-[8px] tracking-wider text-white/40",children:e})]})}function qo({label:t,code:e,hold:n}){return Q.jsx("button",{className:"control-btn rounded-xl h-12 w-12 text-lg",onPointerDown:i=>{i.currentTarget.setPointerCapture(i.pointerId),n(e,!0,i.pointerType)},onPointerUp:i=>n(e,!1,i.pointerType),onPointerCancel:i=>n(e,!1,i.pointerType),children:t})}pu.createRoot(document.getElementById("root")).render(Q.jsx(Q_.StrictMode,{children:Q.jsx(Xw,{})}));
