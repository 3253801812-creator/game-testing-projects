(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},Zl={},$m={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),q_=Symbol.for("react.portal"),$_=Symbol.for("react.fragment"),Z_=Symbol.for("react.strict_mode"),K_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),Ih=Symbol.iterator;function iv(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Km=Object.assign,jm={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Zm}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=Ks.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Zm}var pf=hf.prototype=new Jm;pf.constructor=hf;Km(pf,Ks.prototype);pf.isPureReactComponent=!0;var Uh=Array.isArray,Qm=Object.prototype.hasOwnProperty,mf={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qm.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:mf.current}}function rv(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fh=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case q_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mc(o,0):i,Uh(r)?(n="",t!=null&&(n=t.replace(Fh,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(gf(r)&&(r=rv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Uh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mc(s,a);o+=tl(s,e,n,l,r)}else if(l=iv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mc(s,a++),o+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},nl={transition:null},av={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:mf};function ng(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ks;$e.Fragment=$_;$e.Profiler=K_;$e.PureComponent=hf;$e.StrictMode=Z_;$e.Suspense=ev;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av;$e.act=ng;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Km({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qm.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j_,_context:t},t.Consumer=t};$e.createElement=tg;$e.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Q_,render:t}};$e.isValidElement=gf;$e.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:ov}};$e.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};$e.unstable_act=ng;$e.useCallback=function(t,e){return dn.current.useCallback(t,e)};$e.useContext=function(t){return dn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return dn.current.useEffect(t,e)};$e.useId=function(){return dn.current.useId()};$e.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return dn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};$e.useRef=function(t){return dn.current.useRef(t)};$e.useState=function(t){return dn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return dn.current.useTransition()};$e.version="18.3.1";$m.exports=$e;var Ye=$m.exports;const lv=Y_(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=Ye,uv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),fv=Object.prototype.hasOwnProperty,hv=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pv={key:!0,ref:!0,__self:!0,__source:!0};function ig(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fv.call(e,i)&&!pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uv,type:t,key:s,ref:o,props:r,_owner:hv.current}}Zl.Fragment=dv;Zl.jsx=ig;Zl.jsxs=ig;qm.exports=Zl;var $=qm.exports,bu={},rg={exports:{}},Rn={},sg={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,Z){var re=k.length;k.push(Z);e:for(;0<re;){var Q=re-1>>>1,de=k[Q];if(0<r(de,Z))k[Q]=Z,k[re]=de,re=Q;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Z=k[0],re=k.pop();if(re!==Z){k[0]=re;e:for(var Q=0,de=k.length,De=de>>>1;Q<De;){var He=2*(Q+1)-1,Ue=k[He],j=He+1,le=k[j];if(0>r(Ue,re))j<de&&0>r(le,Ue)?(k[Q]=le,k[j]=re,Q=j):(k[Q]=Ue,k[He]=re,Q=He);else if(j<de&&0>r(le,re))k[Q]=le,k[j]=re,Q=j;else break e}}return Z}function r(k,Z){var re=k.sortIndex-Z.sortIndex;return re!==0?re:k.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,_=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=k)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(k){if(E=!1,y(k),!_)if(n(l)!==null)_=!0,J(T);else{var Z=n(c);Z!==null&&G(S,Z.startTime-k)}}function T(k,Z){_=!1,E&&(E=!1,u(m),m=-1),p=!0;var re=d;try{for(y(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||k&&!D());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var de=Q(h.expirationTime<=Z);Z=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&i(l),y(Z)}else i(l);h=n(l)}if(h!==null)var De=!0;else{var He=n(c);He!==null&&G(S,He.startTime-Z),De=!1}return De}finally{h=null,d=re,p=!1}}var w=!1,A=null,m=-1,C=5,L=-1;function D(){return!(t.unstable_now()-L<C)}function F(){if(A!==null){var k=t.unstable_now();L=k;var Z=!0;try{Z=A(!0,k)}finally{Z?K():(w=!1,A=null)}}else w=!1}var K;if(typeof x=="function")K=function(){x(F)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,z=ne.port2;ne.port1.onmessage=F,K=function(){z.postMessage(null)}}else K=function(){g(F,0)};function J(k){A=k,w||(w=!0,K())}function G(k,Z){m=g(function(){k(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,J(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var re=d;d=Z;try{return k()}finally{d=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=d;d=k;try{return Z()}finally{d=re}},t.unstable_scheduleCallback=function(k,Z,re){var Q=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Q+re:Q):re=Q,k){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=re+de,k={id:f++,callback:Z,priorityLevel:k,startTime:re,expirationTime:de,sortIndex:-1},re>Q?(k.sortIndex=re,e(c,k),n(l)===null&&k===n(c)&&(E?(u(m),m=-1):E=!0,G(S,re-Q))):(k.sortIndex=de,e(l,k),_||p||(_=!0,J(T))),k},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(k){var Z=d;return function(){var re=d;d=Z;try{return k.apply(this,arguments)}finally{d=re}}}})(og);sg.exports=og;var mv=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=Ye,Cn=mv;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,ko={};function Kr(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(ko[t]=e,t=0;t<e.length;t++)ag.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},kh={};function vv(t){return Cu.call(kh,t)?!0:Cu.call(Oh,t)?!1:_v.test(t)?kh[t]=!0:(Oh[t]=!0,!1)}function xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sv(t,e,n,i){if(e===null||typeof e>"u"||xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,vf);Kt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,vf);Kt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,vf);Kt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sv(e,n,r,i)&&(n=null),i||r===null?vv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),vs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,gc;function yo(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function yv(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case vs:return"Portal";case Ru:return"Profiler";case Sf:return"StrictMode";case Pu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mf:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function Mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ev(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=Ev(t))}function fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hg(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function Iu(t,e){hg(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uu(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uu(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Mo(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function pg(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wv=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function _g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Tv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(Tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vu=null,Ls=null,Ns=null;function Wh(t){if(t=aa(t)){if(typeof Vu!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=ec(e),Vu(t.stateNode,t.type,e))}}function xg(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function Sg(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function yg(t,e){return t(e)}function Mg(){}var xc=!1;function Eg(t,e,n){if(xc)return t(e,n);xc=!0;try{return yg(t,e,n)}finally{xc=!1,(Ls!==null||Ns!==null)&&(Mg(),Sg())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var i=ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Hu=!1;if(Ui)try{var so={};Object.defineProperty(so,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Hu=!1}function Av(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ro=!1,Sl=null,yl=!1,Gu=null,bv={onError:function(t){Ro=!0,Sl=t}};function Cv(t,e,n,i,r,s,o,a,l){Ro=!1,Sl=null,Av.apply(bv,arguments)}function Rv(t,e,n,i,r,s,o,a,l){if(Cv.apply(this,arguments),Ro){if(Ro){var c=Sl;Ro=!1,Sl=null}else throw Error(ue(198));yl||(yl=!0,Gu=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(jr(t)!==t)throw Error(ue(188))}function Pv(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xh(r),t;if(s===i)return Xh(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Tg(t){return t=Pv(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var bg=Cn.unstable_scheduleCallback,Yh=Cn.unstable_cancelCallback,Lv=Cn.unstable_shouldYield,Nv=Cn.unstable_requestPaint,Lt=Cn.unstable_now,Dv=Cn.unstable_getCurrentPriorityLevel,wf=Cn.unstable_ImmediatePriority,Cg=Cn.unstable_UserBlockingPriority,Ml=Cn.unstable_NormalPriority,Iv=Cn.unstable_LowPriority,Rg=Cn.unstable_IdlePriority,Kl=null,hi=null;function Uv(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:kv,Fv=Math.log,Ov=Math.LN2;function kv(t){return t>>>=0,t===0?32:31-(Fv(t)/Ov|0)|0}var xa=64,Sa=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function Bv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Bv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pg(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function Vv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,Af,Dg,Ig,Ug,Xu=!1,ya=[],lr=null,cr=null,ur=null,Vo=new Map,Ho=new Map,nr=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gv(t,e,n,i,r){switch(e){case"focusin":return lr=oo(lr,t,e,n,i,r),!0;case"dragenter":return cr=oo(cr,t,e,n,i,r),!0;case"mouseover":return ur=oo(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,oo(Vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ho.set(s,oo(Ho.get(s)||null,t,e,n,i,r)),!0}return!1}function Fg(t){var e=Ir(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=wg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zu=i,n.target.dispatchEvent(i),zu=null}else return e=aa(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){il(t)&&n.delete(e)}function Wv(){Xu=!1,lr!==null&&il(lr)&&(lr=null),cr!==null&&il(cr)&&(cr=null),ur!==null&&il(ur)&&(ur=null),Vo.forEach($h),Ho.forEach($h)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Wv)))}function Go(t){function e(r){return ao(r,t)}if(0<ya.length){ao(ya[0],t);for(var n=1;n<ya.length;n++){var i=ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&ao(lr,t),cr!==null&&ao(cr,t),ur!==null&&ao(ur,t),Vo.forEach(e),Ho.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Fg(n),n.blockedOn===null&&nr.shift()}var Ds=Vi.ReactCurrentBatchConfig,wl=!0;function Xv(t,e,n,i){var r=lt,s=Ds.transition;Ds.transition=null;try{lt=1,bf(t,e,n,i)}finally{lt=r,Ds.transition=s}}function Yv(t,e,n,i){var r=lt,s=Ds.transition;Ds.transition=null;try{lt=4,bf(t,e,n,i)}finally{lt=r,Ds.transition=s}}function bf(t,e,n,i){if(wl){var r=Yu(t,e,n,i);if(r===null)Pc(t,e,i,Tl,n),qh(t,i);else if(Gv(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<Hv.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&Ng(s),s=Yu(t,e,n,i),s===null&&Pc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var Tl=null;function Yu(t,e,n,i){if(Tl=null,t=Ef(i),t=Ir(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case wf:return 1;case Cg:return 4;case Ml:case Iv:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var sr=null,Cf=null,rl=null;function kg(){if(rl)return rl;var t,e=Cf,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function Zh(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:Zh,this.isPropagationStopped=Zh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=Pn(js),oa=Et({},js,{view:0,detail:0}),qv=Pn(oa),yc,Mc,lo,jl=Et({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(yc=t.screenX-lo.screenX,Mc=t.screenY-lo.screenY):Mc=yc=0,lo=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Kh=Pn(jl),$v=Et({},jl,{dataTransfer:0}),Zv=Pn($v),Kv=Et({},oa,{relatedTarget:0}),Ec=Pn(Kv),jv=Et({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Pn(jv),Qv=Et({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ex=Pn(Qv),tx=Et({},js,{data:0}),jh=Pn(tx),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rx[t])?!!e[t]:!1}function Pf(){return sx}var ox=Et({},oa,{key:function(t){if(t.key){var e=nx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ax=Pn(ox),lx=Et({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=Pn(lx),cx=Et({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),ux=Pn(cx),dx=Et({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Pn(dx),hx=Et({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Pn(hx),mx=[9,13,27,32],Lf=Ui&&"CompositionEvent"in window,Po=null;Ui&&"documentMode"in document&&(Po=document.documentMode);var gx=Ui&&"TextEvent"in window&&!Po,Bg=Ui&&(!Lf||Po&&8<Po&&11>=Po),Qh=String.fromCharCode(32),ep=!1;function zg(t,e){switch(t){case"keyup":return mx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function _x(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(ep=!0,Qh);case"textInput":return t=e.data,t===Qh&&ep?null:t;default:return null}}function vx(t,e){if(Ss)return t==="compositionend"||!Lf&&zg(t,e)?(t=kg(),rl=Cf=sr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xx[t.type]:e==="textarea"}function Hg(t,e,n,i){xg(i),e=Al(e,"onChange"),0<e.length&&(n=new Rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Wo=null;function Sx(t){Qg(t,0)}function Jl(t){var e=Es(t);if(fg(e))return t}function yx(t,e){if(t==="change")return e}var Gg=!1;if(Ui){var wc;if(Ui){var Tc="oninput"in document;if(!Tc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Tc=typeof np.oninput=="function"}wc=Tc}else wc=!1;Gg=wc&&(!document.documentMode||9<document.documentMode)}function ip(){Lo&&(Lo.detachEvent("onpropertychange",Wg),Wo=Lo=null)}function Wg(t){if(t.propertyName==="value"&&Jl(Wo)){var e=[];Hg(e,Wo,t,Ef(t)),Eg(Sx,e)}}function Mx(t,e,n){t==="focusin"?(ip(),Lo=e,Wo=n,Lo.attachEvent("onpropertychange",Wg)):t==="focusout"&&ip()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Wo)}function wx(t,e){if(t==="click")return Jl(e)}function Tx(t,e){if(t==="input"||t==="change")return Jl(e)}function Ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:Ax;function Xo(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bx(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xg(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cx=Ui&&"documentMode"in document&&11>=document.documentMode,ys=null,qu=null,No=null,$u=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||ys==null||ys!==xl(i)||(i=ys,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Xo(No,i)||(No=i,i=Al(qu,"onSelect"),0<i.length&&(e=new Rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Ac={},qg={};Ui&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ql(t){if(Ac[t])return Ac[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qg)return Ac[t]=e[n];return t}var $g=Ql("animationend"),Zg=Ql("animationiteration"),Kg=Ql("animationstart"),jg=Ql("transitionend"),Jg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Jg.set(t,e),Kr(e,[t])}for(var bc=0;bc<ap.length;bc++){var Cc=ap[bc],Rx=Cc.toLowerCase(),Px=Cc[0].toUpperCase()+Cc.slice(1);Sr(Rx,"on"+Px)}Sr($g,"onAnimationEnd");Sr(Zg,"onAnimationIteration");Sr(Kg,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(jg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Rv(i,e,void 0,t),t.currentTarget=null}function Qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(yl)throw t=Gu,yl=!1,Gu=null,t}function mt(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(e0(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),e0(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[wa]){t[wa]=!0,ag.forEach(function(n){n!=="selectionchange"&&(Lx.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Rc("selectionchange",!1,e))}}function e0(t,e,n,i){switch(Og(e)){case 1:var r=Xv;break;case 4:r=Yv;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Eg(function(){var c=s,f=Ef(n),h=[];e:{var d=Jg.get(t);if(d!==void 0){var p=Rf,_=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=ax;break;case"focusin":_="focus",p=Ec;break;case"focusout":_="blur",p=Ec;break;case"beforeblur":case"afterblur":p=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ux;break;case $g:case Zg:case Kg:p=Jv;break;case jg:p=fx;break;case"scroll":p=qv;break;case"wheel":p=px;break;case"copy":case"cut":case"paste":p=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jh}var E=(e&4)!==0,g=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var x=c,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,u!==null&&(S=zo(x,u),S!=null&&E.push(qo(x,S,y)))),g)break;x=x.return}0<E.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==zu&&(_=n.relatedTarget||n.fromElement)&&(Ir(_)||_[Fi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ir(_):null,_!==null&&(g=jr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(E=Kh,S="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=Jh,S="onPointerLeave",u="onPointerEnter",x="pointer"),g=p==null?d:Es(p),y=_==null?d:Es(_),d=new E(S,x+"leave",p,n,f),d.target=g,d.relatedTarget=y,S=null,Ir(f)===c&&(E=new E(u,x+"enter",_,n,f),E.target=y,E.relatedTarget=g,S=E),g=S,p&&_)t:{for(E=p,u=_,x=0,y=E;y;y=ts(y))x++;for(y=0,S=u;S;S=ts(S))y++;for(;0<x-y;)E=ts(E),x--;for(;0<y-x;)u=ts(u),y--;for(;x--;){if(E===u||u!==null&&E===u.alternate)break t;E=ts(E),u=ts(u)}E=null}else E=null;p!==null&&cp(h,d,p,E,!1),_!==null&&g!==null&&cp(h,g,_,E,!0)}}e:{if(d=c?Es(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=yx;else if(tp(d))if(Gg)T=Tx;else{T=Ex;var w=Mx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=wx);if(T&&(T=T(t,c))){Hg(h,T,n,f);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Uu(d,"number",d.value)}switch(w=c?Es(c):window,t){case"focusin":(tp(w)||w.contentEditable==="true")&&(ys=w,qu=c,No=null);break;case"focusout":No=qu=ys=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,op(h,n,f);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":op(h,n,f)}var A;if(Lf)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Ss?zg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Bg&&n.locale!=="ko"&&(Ss||m!=="onCompositionStart"?m==="onCompositionEnd"&&Ss&&(A=kg()):(sr=f,Cf="value"in sr?sr.value:sr.textContent,Ss=!0)),w=Al(c,m),0<w.length&&(m=new jh(m,t,null,n,f),h.push({event:m,listeners:w}),A?m.data=A:(A=Vg(n),A!==null&&(m.data=A)))),(A=gx?_x(t,n):vx(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(f=new jh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}Qg(h,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zo(t,n),s!=null&&i.unshift(qo(t,s,r)),s=zo(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=zo(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=zo(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Nx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(Nx,`
`).replace(Dx,"")}function Ta(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(ue(425))}function bl(){}var Zu=null,Ku=null;function ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(Fx)}:Ju;function Fx(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Go(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ui="__reactFiber$"+Js,$o="__reactProps$"+Js,Fi="__reactContainer$"+Js,Qu="__reactEvents$"+Js,Ox="__reactListeners$"+Js,kx="__reactHandles$"+Js;function Ir(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[ui])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ui]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function ec(t){return t[$o]||null}var ed=[],ws=-1;function yr(t){return{current:t}}function gt(t){0>ws||(t.current=ed[ws],ed[ws]=null,ws--)}function pt(t,e){ws++,ed[ws]=t.current,t.current=e}var _r={},on=yr(_r),gn=yr(!1),Hr=_r;function zs(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Cl(){gt(gn),gt(on)}function hp(t,e,n){if(on.current!==_r)throw Error(ue(168));pt(on,e),pt(gn,n)}function t0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Mv(t)||"Unknown",r));return Et({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Hr=on.current,pt(on,t),pt(gn,gn.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=t0(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,gt(gn),gt(on),pt(on,t)):gt(gn),pt(gn,n)}var bi=null,tc=!1,Nc=!1;function n0(t){bi===null?bi=[t]:bi.push(t)}function Bx(t){tc=!0,n0(t)}function Mr(){if(!Nc&&bi!==null){Nc=!0;var t=0,e=lt;try{var n=bi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,tc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),bg(wf,Mr),r}finally{lt=e,Nc=!1}}return null}var Ts=[],As=0,Pl=null,Ll=0,Un=[],Fn=0,Gr=null,Ri=1,Pi="";function Rr(t,e){Ts[As++]=Ll,Ts[As++]=Pl,Pl=t,Ll=e}function i0(t,e,n){Un[Fn++]=Ri,Un[Fn++]=Pi,Un[Fn++]=Gr,Gr=t;var i=Ri;t=Pi;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ti(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Df(t){t.return!==null&&(Rr(t,1),i0(t,1,0))}function If(t){for(;t===Pl;)Pl=Ts[--As],Ts[As]=null,Ll=Ts[--As],Ts[As]=null;for(;t===Gr;)Gr=Un[--Fn],Un[Fn]=null,Pi=Un[--Fn],Un[Fn]=null,Ri=Un[--Fn],Un[Fn]=null}var bn=null,An=null,vt=!1,Jn=null;function r0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,An=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,An=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(vt){var e=An;if(e){var n=e;if(!mp(t,e)){if(td(t))throw Error(ue(418));e=dr(n.nextSibling);var i=bn;e&&mp(t,e)?r0(i,n):(t.flags=t.flags&-4097|2,vt=!1,bn=t)}}else{if(td(t))throw Error(ue(418));t.flags=t.flags&-4097|2,vt=!1,bn=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Aa(t){if(t!==bn)return!1;if(!vt)return gp(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ju(t.type,t.memoizedProps)),e&&(e=An)){if(td(t))throw s0(),Error(ue(418));for(;e;)r0(t,e),e=dr(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=bn?dr(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=An;t;)t=dr(t.nextSibling)}function Vs(){An=bn=null,vt=!1}function Uf(t){Jn===null?Jn=[t]:Jn.push(t)}var zx=Vi.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function o0(t){function e(u,x){if(t){var y=u.deletions;y===null?(u.deletions=[x],u.flags|=16):y.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=mr(u,x),u.index=0,u.sibling=null,u}function s(u,x,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<x?(u.flags|=2,x):y):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,y,S){return x===null||x.tag!==6?(x=Bc(y,u.mode,S),x.return=u,x):(x=r(x,y),x.return=u,x)}function l(u,x,y,S){var T=y.type;return T===xs?f(u,x,y.props.children,S,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&_p(T)===x.type)?(S=r(x,y.props),S.ref=co(u,x,y),S.return=u,S):(S=fl(y.type,y.key,y.props,null,u.mode,S),S.ref=co(u,x,y),S.return=u,S)}function c(u,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=zc(y,u.mode,S),x.return=u,x):(x=r(x,y.children||[]),x.return=u,x)}function f(u,x,y,S,T){return x===null||x.tag!==7?(x=Vr(y,u.mode,S,T),x.return=u,x):(x=r(x,y),x.return=u,x)}function h(u,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Bc(""+x,u.mode,y),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return y=fl(x.type,x.key,x.props,null,u.mode,y),y.ref=co(u,null,x),y.return=u,y;case vs:return x=zc(x,u.mode,y),x.return=u,x;case er:var S=x._init;return h(u,S(x._payload),y)}if(Mo(x)||ro(x))return x=Vr(x,u.mode,y,null),x.return=u,x;ba(u,x)}return null}function d(u,x,y,S){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(u,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ga:return y.key===T?l(u,x,y,S):null;case vs:return y.key===T?c(u,x,y,S):null;case er:return T=y._init,d(u,x,T(y._payload),S)}if(Mo(y)||ro(y))return T!==null?null:f(u,x,y,S,null);ba(u,y)}return null}function p(u,x,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(y)||null,a(x,u,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ga:return u=u.get(S.key===null?y:S.key)||null,l(x,u,S,T);case vs:return u=u.get(S.key===null?y:S.key)||null,c(x,u,S,T);case er:var w=S._init;return p(u,x,y,w(S._payload),T)}if(Mo(S)||ro(S))return u=u.get(y)||null,f(x,u,S,T,null);ba(x,S)}return null}function _(u,x,y,S){for(var T=null,w=null,A=x,m=x=0,C=null;A!==null&&m<y.length;m++){A.index>m?(C=A,A=null):C=A.sibling;var L=d(u,A,y[m],S);if(L===null){A===null&&(A=C);break}t&&A&&L.alternate===null&&e(u,A),x=s(L,x,m),w===null?T=L:w.sibling=L,w=L,A=C}if(m===y.length)return n(u,A),vt&&Rr(u,m),T;if(A===null){for(;m<y.length;m++)A=h(u,y[m],S),A!==null&&(x=s(A,x,m),w===null?T=A:w.sibling=A,w=A);return vt&&Rr(u,m),T}for(A=i(u,A);m<y.length;m++)C=p(A,u,m,y[m],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?m:C.key),x=s(C,x,m),w===null?T=C:w.sibling=C,w=C);return t&&A.forEach(function(D){return e(u,D)}),vt&&Rr(u,m),T}function E(u,x,y,S){var T=ro(y);if(typeof T!="function")throw Error(ue(150));if(y=T.call(y),y==null)throw Error(ue(151));for(var w=T=null,A=x,m=x=0,C=null,L=y.next();A!==null&&!L.done;m++,L=y.next()){A.index>m?(C=A,A=null):C=A.sibling;var D=d(u,A,L.value,S);if(D===null){A===null&&(A=C);break}t&&A&&D.alternate===null&&e(u,A),x=s(D,x,m),w===null?T=D:w.sibling=D,w=D,A=C}if(L.done)return n(u,A),vt&&Rr(u,m),T;if(A===null){for(;!L.done;m++,L=y.next())L=h(u,L.value,S),L!==null&&(x=s(L,x,m),w===null?T=L:w.sibling=L,w=L);return vt&&Rr(u,m),T}for(A=i(u,A);!L.done;m++,L=y.next())L=p(A,u,m,L.value,S),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?m:L.key),x=s(L,x,m),w===null?T=L:w.sibling=L,w=L);return t&&A.forEach(function(F){return e(u,F)}),vt&&Rr(u,m),T}function g(u,x,y,S){if(typeof y=="object"&&y!==null&&y.type===xs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ga:e:{for(var T=y.key,w=x;w!==null;){if(w.key===T){if(T=y.type,T===xs){if(w.tag===7){n(u,w.sibling),x=r(w,y.props.children),x.return=u,u=x;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&_p(T)===w.type){n(u,w.sibling),x=r(w,y.props),x.ref=co(u,w,y),x.return=u,u=x;break e}n(u,w);break}else e(u,w);w=w.sibling}y.type===xs?(x=Vr(y.props.children,u.mode,S,y.key),x.return=u,u=x):(S=fl(y.type,y.key,y.props,null,u.mode,S),S.ref=co(u,x,y),S.return=u,u=S)}return o(u);case vs:e:{for(w=y.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(u,x.sibling),x=r(x,y.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=zc(y,u.mode,S),x.return=u,u=x}return o(u);case er:return w=y._init,g(u,x,w(y._payload),S)}if(Mo(y))return _(u,x,y,S);if(ro(y))return E(u,x,y,S);ba(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,y),x.return=u,u=x):(n(u,x),x=Bc(y,u.mode,S),x.return=u,u=x),o(u)):n(u,x)}return g}var Hs=o0(!0),a0=o0(!1),Nl=yr(null),Dl=null,bs=null,Ff=null;function Of(){Ff=bs=Dl=null}function kf(t){var e=Nl.current;gt(Nl),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Dl=t,Ff=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Dl===null)throw Error(ue(308));bs=t,Dl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ur=null;function Bf(t){Ur===null?Ur=[t]:Ur.push(t)}function l0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tf(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(d=e,p=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Et({},h,d);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var la={},pi=yr(la),Zo=yr(la),Ko=yr(la);function Fr(t){if(t===la)throw Error(ue(174));return t}function Vf(t,e){switch(pt(Ko,e),pt(Zo,t),pt(pi,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}gt(pi),pt(pi,e)}function Gs(){gt(pi),gt(Zo),gt(Ko)}function u0(t){Fr(Ko.current);var e=Fr(pi.current),n=Ou(e,t.type);e!==n&&(pt(Zo,t),pt(pi,n))}function Hf(t){Zo.current===t&&(gt(pi),gt(Zo))}var St=yr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Gf(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var al=Vi.ReactCurrentDispatcher,Ic=Vi.ReactCurrentBatchConfig,Wr=0,Mt=null,kt=null,Gt=null,Fl=!1,Do=!1,jo=0,Vx=0;function Qt(){throw Error(ue(321))}function Wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function Xf(t,e,n,i,r,s){if(Wr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?Xx:Yx,t=n(i,r),Do){s=0;do{if(Do=!1,jo=0,25<=s)throw Error(ue(301));s+=1,Gt=kt=null,e.updateQueue=null,al.current=qx,t=n(i,r)}while(Do)}if(al.current=Ol,e=kt!==null&&kt.next!==null,Wr=0,Gt=kt=Mt=null,Fl=!1,e)throw Error(ue(300));return t}function Yf(){var t=jo!==0;return jo=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Vn(){if(kt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(ue(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Jo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Wr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=f,Xr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d0(){}function f0(t,e){var n=Mt,i=Vn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,qf(m0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Qo(9,p0.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ue(349));Wr&30||h0(n,e,r)}return r}function h0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,i){e.value=n,e.getSnapshot=i,g0(e)&&_0(t)}function m0(t,e,n){return n(function(){g0(e)&&_0(t)})}function g0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function _0(t){var e=Oi(t,1);e!==null&&ni(e,t,1,-1)}function Sp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=Wx.bind(null,Mt,t),[e.memoizedState,t]}function Qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v0(){return Vn().memoizedState}function ll(t,e,n,i){var r=li();Mt.flags|=t,r.memoizedState=Qo(1|e,n,void 0,i===void 0?null:i)}function nc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Wf(i,o.deps)){r.memoizedState=Qo(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Qo(1|e,n,s,i)}function yp(t,e){return ll(8390656,8,t,e)}function qf(t,e){return nc(2048,8,t,e)}function x0(t,e){return nc(4,2,t,e)}function S0(t,e){return nc(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,y0.bind(null,e,t),n)}function $f(){}function E0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function T0(t,e,n){return Wr&21?(ii(n,e)||(n=Pg(),Mt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Hx(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Ic.transition;Ic.transition={};try{t(!1),e()}finally{lt=n,Ic.transition=i}}function A0(){return Vn().memoizedState}function Gx(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))C0(e,n);else if(n=l0(t,e,n,i),n!==null){var r=cn();ni(n,t,i,r),R0(n,e,i)}}function Wx(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))C0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=l0(t,e,r,i),n!==null&&(r=cn(),ni(n,t,i,r),R0(n,e,i))}}function b0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function C0(t,e){Do=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tf(t,n)}}var Ol={readContext:zn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Xx={readContext:zn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Sp,useDebugValue:$f,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Sp(!1),e=t[0];return t=Hx.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=li();if(vt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Wt===null)throw Error(ue(349));Wr&30||h0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(m0.bind(null,i,s,t),[t]),i.flags|=2048,Qo(9,p0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Wt.identifierPrefix;if(vt){var n=Pi,i=Ri;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:zn,useCallback:E0,useContext:zn,useEffect:qf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:S0,useMemo:w0,useReducer:Uc,useRef:v0,useState:function(){return Uc(Jo)},useDebugValue:$f,useDeferredValue:function(t){var e=Vn();return T0(e,kt.memoizedState,t)},useTransition:function(){var t=Uc(Jo)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1},qx={readContext:zn,useCallback:E0,useContext:zn,useEffect:qf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:S0,useMemo:w0,useReducer:Fc,useRef:v0,useState:function(){return Fc(Jo)},useDebugValue:$f,useDeferredValue:function(t){var e=Vn();return kt===null?e.memoizedState=t:T0(e,kt.memoizedState,t)},useTransition:function(){var t=Fc(Jo)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=pr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ni(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=pr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ni(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=pr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(ni(e,t,i,n),ol(e,t,i))}};function Mp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,i)||!Xo(r,s):!0}function P0(t,e,n){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=_n(e)?Hr:on.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=_n(e)?Hr:on.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ic.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,gd=i),od(t,e)},n}function N0(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=lS.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var Zx=Vi.ReactCurrentOwner,mn=!1;function ln(t,e,n,i){e.child=t===null?a0(e,null,n,i):Hs(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=Xf(t,e,n,i,s,r),n=Yf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(vt&&n&&Df(e),e.flags|=1,ln(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Xo(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return ad(t,e,n,i,r)}function I0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Rs,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Rs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Rs,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Rs,wn),wn|=i;return ln(t,e,r,n),e.child}function U0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,i,r){var s=_n(n)?Hr:on.current;return s=zs(e,s),Is(e,r),n=Xf(t,e,n,i,s,r),i=Yf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(vt&&i&&Df(e),e.flags|=1,ln(t,e,n,r),e.child)}function Rp(t,e,n,i,r){if(_n(n)){var s=!0;Rl(e)}else s=!1;if(Is(e,r),e.stateNode===null)cl(t,e),P0(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=_n(n)?Hr:on.current,c=zs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ep(e,o,i,c),tr=!1;var d=e.memoizedState;o.state=d,Il(e,i,o,r),l=e.memoizedState,a!==i||d!==l||gn.current||tr?(typeof f=="function"&&(rd(e,n,f,i),l=e.memoizedState),(a=tr||Mp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,c0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=_n(n)?Hr:on.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ep(e,o,i,l),tr=!1,d=e.memoizedState,o.state=d,Il(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||gn.current||tr?(typeof p=="function"&&(rd(e,n,p,i),_=e.memoizedState),(c=tr||Mp(e,n,c,i,d,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){U0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),ki(t,e,s);i=e.stateNode,Zx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function F0(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Vf(t,e.containerInfo)}function Pp(t,e,n,i,r){return Vs(),Uf(r),e.flags|=256,ln(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function O0(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(St,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):Zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Kx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zf(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,i){return i!==null&&Uf(i),Hs(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(ue(422))),Ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=oc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=cd,s);if(!(e.mode&1))return Ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Oc(s,i,void 0),Ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),ni(i,t,r,-1))}return th(),i=Oc(Error(ue(421))),Ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=dr(r.nextSibling),bn=e,vt=!0,Jn=null,t!==null&&(Un[Fn++]=Ri,Un[Fn++]=Pi,Un[Fn++]=Gr,Ri=t.id,Pi=t.overflow,Gr=e),e=Zf(e,i.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function k0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jx(t,e,n){switch(e.tag){case 3:F0(e),Vs();break;case 5:u0(e);break;case 1:_n(e.type)&&Rl(e);break;case 4:Vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?O0(t,e,n):(pt(St,St.current&1),t=ki(t,e,n),t!==null?t.sibling:null);pt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return k0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,I0(t,e,n)}return ki(t,e,n)}var B0,dd,z0,V0;B0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(pi.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=bl)}ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V0=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jx(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return _n(e.type)&&Cl(),en(e),null;case 3:return i=e.stateNode,Gs(),gt(gn),gt(on),Gf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(xd(Jn),Jn=null))),dd(t,e),en(e),null;case 5:Hf(e);var r=Fr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return en(e),null}if(t=Fr(pi.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)mt(wo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":zh(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Hh(i,s),mt("invalid",i)}ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":_a(i),Vh(i,s,!0);break;case"textarea":_a(i),Gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ui]=e,t[$o]=i,B0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)mt(wo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":zh(t,i),r=Du(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Hh(t,i),r=Fu(t,i),mt("invalid",t);break;default:r=i}ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&xf(t,s,l,o))}switch(n){case"input":_a(t),Vh(t,i,!1);break;case"textarea":_a(t),Gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)V0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Fr(Ko.current),Fr(pi.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return en(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&An!==null&&e.mode&1&&!(e.flags&128))s0(),Vs(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[ui]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Jn!==null&&(xd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Bt===0&&(Bt=3):th())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Gs(),dd(t,e),t===null&&Yo(e.stateNode.containerInfo),en(e),null;case 10:return kf(e.type._context),en(e),null;case 17:return _n(e.type)&&Cl(),en(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Xs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return en(e),null}else 2*Lt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,pt(St,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return eh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Qx(t,e){switch(If(e),e.tag){case 1:return _n(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),gt(gn),gt(on),Gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hf(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return Gs(),null;case 10:return kf(e.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var Ra=!1,rn=!1,eS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){At(t,e,i)}}var Np=!1;function tS(t,e){if(Zu=wl,t=Yg(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},wl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,g=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Kn(e.type,E),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=Np,Np=!1,_}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fd(e,n,s)}r=r.next}while(r!==i)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[$o],delete e[Qu],delete e[Ox],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G0(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Yt=null,jn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)W0(t,e,n),n=n.sibling}function W0(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:rn||Cs(n,e);case 6:var i=Yt,r=jn;Yt=null,Xi(t,e,n),Yt=i,jn=r,Yt!==null&&(jn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(jn?(t=Yt,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Go(t)):Lc(Yt,n.stateNode));break;case 4:i=Yt,r=jn,Yt=n.stateNode.containerInfo,jn=!0,Xi(t,e,n),Yt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fd(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!rn&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Xi(t,e,n),rn=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eS),e.forEach(function(i){var r=uS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,jn=!1;break e;case 3:Yt=a.stateNode.containerInfo,jn=!0;break e;case 4:Yt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Yt===null)throw Error(ue(160));W0(s,o,r),Yt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X0(e,t),e=e.sibling}function X0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{Io(3,t,t.return),rc(3,t)}catch(E){At(t,t.return,E)}try{Io(5,t,t.return)}catch(E){At(t,t.return,E)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Bo(r,"")}catch(E){At(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hg(r,s),Bu(a,o);var c=Bu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?vg(r,h):f==="dangerouslySetInnerHTML"?gg(r,h):f==="children"?Bo(r,h):xf(r,f,h,c)}switch(a){case"input":Iu(r,s);break;case"textarea":pg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ps(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(E){At(t,t.return,E)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){At(t,t.return,E)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(E){At(t,t.return,E)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jf=Lt())),i&4&&Ip(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,Wn(e,t),rn=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(h=we=f;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:Cs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){At(i,n,E)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Fp(h);continue}}p!==null?(p.return=d,we=p):Fp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_g("display",o))}catch(E){At(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){At(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),si(t),i&4&&Ip(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G0(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bo(r,""),i.flags&=-33);var s=Dp(t);md(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);pd(t,a,o);break;default:throw Error(ue(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nS(t,e,n){we=t,Y0(t)}function Y0(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Ra;var c=rn;if(Ra=o,(rn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Op(r):l!==null?(l.return=o,we=l):Op(r);for(;s!==null;)we=s,Y0(s),s=s.sibling;we=r,Ra=a,rn=c}Up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Up(t)}}function Up(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}rn||e.flags&512&&hd(e)}catch(d){At(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Fp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Op(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{hd(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var iS=Math.ceil,kl=Vi.ReactCurrentDispatcher,Kf=Vi.ReactCurrentOwner,Bn=Vi.ReactCurrentBatchConfig,nt=0,Wt=null,Ut=null,$t=0,wn=0,Rs=yr(0),Bt=0,ea=null,Xr=0,sc=0,jf=0,Uo=null,pn=null,Jf=0,Xs=1/0,Ai=null,Bl=!1,gd=null,hr=null,Pa=!1,or=null,zl=0,Fo=0,_d=null,ul=-1,dl=0;function cn(){return nt&6?Lt():ul!==-1?ul:ul=Lt()}function pr(t){return t.mode&1?nt&2&&$t!==0?$t&-$t:zx.transition!==null?(dl===0&&(dl=Pg()),dl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function ni(t,e,n,i){if(50<Fo)throw Fo=0,_d=null,Error(ue(185));sa(t,n,i),(!(nt&2)||t!==Wt)&&(t===Wt&&(!(nt&2)&&(sc|=n),Bt===4&&ir(t,$t)),vn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Xs=Lt()+500,tc&&Mr()))}function vn(t,e){var n=t.callbackNode;zv(t,e);var i=El(t,t===Wt?$t:0);if(i===0)n!==null&&Yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yh(n),e===1)t.tag===0?Bx(kp.bind(null,t)):n0(kp.bind(null,t)),Ux(function(){!(nt&6)&&Mr()}),n=null;else{switch(Lg(i)){case 1:n=wf;break;case 4:n=Cg;break;case 16:n=Ml;break;case 536870912:n=Rg;break;default:n=Ml}n=e_(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(ul=-1,dl=0,nt&6)throw Error(ue(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=El(t,t===Wt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=nt;nt|=2;var s=Z0();(Wt!==t||$t!==e)&&(Ai=null,Xs=Lt()+500,zr(t,e));do try{oS();break}catch(a){$0(t,a)}while(1);Of(),kl.current=s,nt=r,Ut!==null?e=0:(Wt=null,$t=0,e=Bt)}if(e!==0){if(e===2&&(r=Wu(t),r!==0&&(i=r,e=vd(t,r))),e===1)throw n=ea,zr(t,0),ir(t,i),vn(t,Lt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!rS(r)&&(e=Vl(t,i),e===2&&(s=Wu(t),s!==0&&(i=s,e=vd(t,s))),e===1))throw n=ea,zr(t,0),ir(t,i),vn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Pr(t,pn,Ai);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Jf+500-Lt(),10<e)){if(El(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(Pr.bind(null,t,pn,Ai),e);break}Pr(t,pn,Ai);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iS(i/1960))-i,10<i){t.timeoutHandle=Ju(Pr.bind(null,t,pn,Ai),i);break}Pr(t,pn,Ai);break;case 5:Pr(t,pn,Ai);break;default:throw Error(ue(329))}}}return vn(t,Lt()),t.callbackNode===n?q0.bind(null,t):null}function vd(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=pn,pn=n,e!==null&&xd(e)),t}function xd(t){pn===null?pn=t:pn.push.apply(pn,t)}function rS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~jf,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if(nt&6)throw Error(ue(327));Us();var e=El(t,0);if(!(e&1))return vn(t,Lt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Wu(t);i!==0&&(e=i,n=vd(t,i))}if(n===1)throw n=ea,zr(t,0),ir(t,e),vn(t,Lt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,pn,Ai),vn(t,Lt()),null}function Qf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Xs=Lt()+500,tc&&Mr())}}function Yr(t){or!==null&&or.tag===0&&!(nt&6)&&Us();var e=nt;nt|=1;var n=Bn.transition,i=lt;try{if(Bn.transition=null,lt=1,t)return t()}finally{lt=i,Bn.transition=n,nt=e,!(nt&6)&&Mr()}}function eh(){wn=Rs.current,gt(Rs)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ix(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:Gs(),gt(gn),gt(on),Gf();break;case 5:Hf(i);break;case 4:Gs();break;case 13:gt(St);break;case 19:gt(St);break;case 10:kf(i.type._context);break;case 22:case 23:eh()}n=n.return}if(Wt=t,Ut=t=mr(t.current,null),$t=wn=e,Bt=0,ea=null,jf=sc=Xr=0,pn=Uo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function $0(t,e){do{var n=Ut;try{if(Of(),al.current=Ol,Fl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(Wr=0,Gt=kt=Mt=null,Do=!1,jo=0,Kf.current=null,n===null||n.return===null){Bt=1,ea=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Tp(o);if(p!==null){p.flags&=-257,Ap(p,o,a,s,e),p.mode&1&&wp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){wp(s,c,e),th();break e}l=Error(ue(426))}}else if(vt&&a.mode&1){var g=Tp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ap(g,o,a,s,e),Uf(Ws(l,a));break e}}s=l=Ws(l,a),Bt!==4&&(Bt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=L0(s,l,e);vp(s,u);break e;case 1:a=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hr===null||!hr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N0(s,a,e);vp(s,S);break e}}s=s.return}while(s!==null)}j0(n)}catch(T){e=T,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(1)}function Z0(){var t=kl.current;return kl.current=Ol,t===null?Ol:t}function th(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(Xr&268435455)&&!(sc&268435455)||ir(Wt,$t)}function Vl(t,e){var n=nt;nt|=2;var i=Z0();(Wt!==t||$t!==e)&&(Ai=null,zr(t,e));do try{sS();break}catch(r){$0(t,r)}while(1);if(Of(),nt=n,kl.current=i,Ut!==null)throw Error(ue(261));return Wt=null,$t=0,Bt}function sS(){for(;Ut!==null;)K0(Ut)}function oS(){for(;Ut!==null&&!Lv();)K0(Ut)}function K0(t){var e=Q0(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?j0(t):Ut=e,Kf.current=null}function j0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=Jx(n,e,wn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Pr(t,e,n){var i=lt,r=Bn.transition;try{Bn.transition=null,lt=1,aS(t,e,n,i)}finally{Bn.transition=r,lt=i}return null}function aS(t,e,n,i){do Us();while(or!==null);if(nt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vv(t,s),t===Wt&&(Ut=Wt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,e_(Ml,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=lt;lt=1;var a=nt;nt|=4,Kf.current=null,tS(t,n),X0(n,t),bx(Ku),wl=!!Zu,Ku=Zu=null,t.current=n,nS(n),Nv(),nt=a,lt=o,Bn.transition=s}else t.current=n;if(Pa&&(Pa=!1,or=t,zl=r),s=t.pendingLanes,s===0&&(hr=null),Uv(n.stateNode),vn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=gd,gd=null,t;return zl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===_d?Fo++:(Fo=0,_d=t):Fo=0,Mr(),null}function Us(){if(or!==null){var t=Lg(zl),e=Bn.transition,n=lt;try{if(Bn.transition=null,lt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,zl=0,nt&6)throw Error(ue(331));var r=nt;for(nt|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:Io(8,f,s)}var h=f.child;if(h!==null)h.return=f,we=h;else for(;we!==null;){f=we;var d=f.sibling,p=f.return;if(H0(f),f===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var x=t.current;for(we=x;we!==null;){o=we;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,we=y;else e:for(o=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(T){At(a,a.return,T)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(nt=r,Mr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Kl,t)}catch{}i=!0}return i}finally{lt=n,Bn.transition=e}}return!1}function Bp(t,e,n){e=Ws(n,e),e=L0(t,e,1),t=fr(t,e,1),e=cn(),t!==null&&(sa(t,1,e),vn(t,e))}function At(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=Ws(n,t),t=N0(e,t,1),e=fr(e,t,1),t=cn(),e!==null&&(sa(e,1,t),vn(e,t));break}}e=e.return}}function lS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&($t&n)===n&&(Bt===4||Bt===3&&($t&130023424)===$t&&500>Lt()-Jf?zr(t,0):jf|=n),vn(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=cn();t=Oi(t,e),t!==null&&(sa(t,e,n),vn(t,n))}function cS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function uS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),J0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,jx(t,e,n);mn=!!(t.flags&131072)}else mn=!1,vt&&e.flags&1048576&&i0(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=zs(e,on.current);Is(e,n),r=Xf(null,e,i,t,r,n);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zf(e),r.updater=ic,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Df(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fS(i),t=Kn(i,t),r){case 0:e=ad(null,e,i,t,n);break e;case 1:e=Rp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Kn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Rp(t,e,i,r,n);case 3:e:{if(F0(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c0(t,e),Il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(ue(423)),e),e=Pp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(ue(424)),e),e=Pp(t,e,i,n,r);break e}else for(An=dr(e.stateNode.containerInfo.firstChild),bn=e,vt=!0,Jn=null,n=a0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=ki(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return u0(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ju(i,r)?o=null:s!==null&&ju(i,s)&&(e.flags|=32),U0(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return O0(t,e,n);case 4:return Vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),bp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Nl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!gn.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=zn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Cp(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),cl(t,e),e.tag=1,_n(i)?(t=!0,Rl(e)):t=!1,Is(e,n),P0(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return k0(t,e,n);case 22:return I0(t,e,n)}throw Error(ue(156,e.tag))};function e_(t,e){return bg(t,e)}function dS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new dS(t,e,n,i)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yf)return 11;if(t===Mf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return Vr(n.children,r,s,e);case Sf:o=8,r|=8;break;case Ru:return t=kn(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Pu:return t=kn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Lu:return t=kn(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case ug:return oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:o=10;break e;case cg:o=9;break e;case yf:o=11;break e;case Mf:o=14;break e;case er:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function oc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=ug,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ih(t,e,n,i,r,s,o,a,l){return t=new hS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function pS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return _r;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(_n(n))return t0(t,n,e)}return e}function n_(t,e,n,i,r,s,o,a,l){return t=ih(n,i,!0,t,r,s,o,a,l),t.context=t_(null),n=t.current,i=cn(),r=pr(n),s=Ni(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,sa(t,r,i),vn(t,i),t}function ac(t,e,n,i){var r=e.current,s=cn(),o=pr(r);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(ni(t,r,o,s),ol(t,r,o)),o}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rh(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function mS(){return null}var i_=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}lc.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));ac(t,e,null,null)};lc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){ac(null,t,null,null)}),e[Fi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&Fg(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function gS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hl(o);s.call(c)}}var o=n_(e,i,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=o,t[Fi]=o.current,Yo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hl(l);a.call(c)}}var l=ih(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=l,t[Fi]=l.current,Yo(t.nodeType===8?t.parentNode:t),Yr(function(){ac(e,l,n,i)}),l}function uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hl(o);a.call(l)}}ac(e,o,t,r)}else o=gS(n,e,t,r,i);return Hl(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Tf(e,n|1),vn(e,Lt()),!(nt&6)&&(Xs=Lt()+500,Mr()))}break;case 13:Yr(function(){var i=Oi(t,1);if(i!==null){var r=cn();ni(i,t,1,r)}}),rh(t,1)}};Af=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=cn();ni(e,t,134217728,n)}rh(t,134217728)}};Dg=function(t){if(t.tag===13){var e=pr(t),n=Oi(t,e);if(n!==null){var i=cn();ni(n,t,e,i)}rh(t,e)}};Ig=function(){return lt};Ug=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Vu=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ec(i);if(!r)throw Error(ue(90));fg(i),Iu(i,r)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};yg=Qf;Mg=Yr;var _S={usingClientEntryPoint:!1,Events:[aa,Es,ec,xg,Sg,Qf]},fo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||mS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Kl=La.inject(vS),hi=La}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(e))throw Error(ue(200));return pS(t,e,null,n)};Rn.createRoot=function(t,e){if(!oh(t))throw Error(ue(299));var n=!1,i="",r=i_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ih(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Yo(t.nodeType===8?t.parentNode:t),new sh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Yr(t)};Rn.hydrate=function(t,e,n){if(!cc(e))throw Error(ue(200));return uc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!oh(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=i_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n??null,r,!1,s,o),t[Fi]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lc(e)};Rn.render=function(t,e,n){if(!cc(e))throw Error(ue(200));return uc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!cc(t))throw Error(ue(40));return t._reactRootContainer?(Yr(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Qf;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return uc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(t){console.error(t)}}r_(),rg.exports=Rn;var xS=rg.exports,Hp=xS;bu.createRoot=Hp.createRoot,bu.hydrateRoot=Hp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="185",SS=0,Gp=1,yS=2,hl=1,MS=2,To=3,vr=0,xn=1,Ci=2,Di=0,Fs=1,Wp=2,Xp=3,Yp=4,ES=5,Nr=100,wS=101,TS=102,AS=103,bS=104,CS=200,RS=201,PS=202,LS=203,Sd=204,yd=205,NS=206,DS=207,IS=208,US=209,FS=210,OS=211,kS=212,BS=213,zS=214,Md=0,Ed=1,wd=2,Ys=3,Td=4,Ad=5,bd=6,Cd=7,s_=0,VS=1,HS=2,mi=0,o_=1,a_=2,l_=3,c_=4,u_=5,d_=6,f_=7,h_=300,qr=301,qs=302,Vc=303,Hc=304,dc=306,Rd=1e3,Li=1001,Pd=1002,qt=1003,GS=1004,Na=1005,sn=1006,Gc=1007,Or=1008,Tn=1009,p_=1010,m_=1011,ta=1012,lh=1013,vi=1014,di=1015,Bi=1016,ch=1017,uh=1018,na=1020,g_=35902,__=35899,v_=1021,x_=1022,ei=1023,zi=1026,kr=1027,S_=1028,dh=1029,$r=1030,fh=1031,hh=1033,pl=33776,ml=33777,gl=33778,_l=33779,Ld=35840,Nd=35841,Dd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,Gl=37490,zd=37491,Vd=37808,Hd=37809,Gd=37810,Wd=37811,Xd=37812,Yd=37813,qd=37814,$d=37815,Zd=37816,Kd=37817,jd=37818,Jd=37819,Qd=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,of=36284,Wl=36285,af=36286,WS=3200,lf=0,XS=1,rr="",In="srgb",Xl="srgb-linear",Yl="linear",at="srgb",ns=7680,qp=519,YS=512,qS=513,$S=514,ph=515,ZS=516,KS=517,mh=518,jS=519,$p=35044,Zp="300 es",fi=2e3,ia=2001;function JS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QS(){const t=ql("canvas");return t.style.display="block",t}const Kp={};function jp(...t){const e="THREE."+t.shift();console.log(e,...t)}function y_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Os(...t){const e=t.join(" ");e in Kp||(Kp[e]=!0,Ie(...t))}function ey(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ty={[Md]:Ed,[wd]:bd,[Td]:Cd,[Ys]:Ad,[Ed]:Md,[bd]:wd,[Cd]:Td,[Ad]:Ys};class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,cf=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function ny(t,e){return(t%e+e)%e}function Xc(t,e,n){return(1-n)*t+n*e}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Eh=class Eh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eh.prototype.isVector2=!0;let Qe=Eh;class Qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(h!==E||l!==d||c!==p||f!==_){let g=l*d+c*p+f*_+h*E;g<0&&(d=-d,p=-p,_=-_,E=-E,g=-g);let u=1-a;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);u=Math.sin(u*x)/y,a=Math.sin(a*x)/y,l=l*u+d*a,c=c*u+p*a,f=f*u+_*a,h=h*u+E*a}else{l=l*u+d*a,c=c*u+p*a,f=f*u+_*a,h=h*u+E*a;const x=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=x,c*=x,f*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*p-c*d,e[n+1]=l*_+f*d+c*h-a*p,e[n+2]=c*_+f*p+a*d-l*h,e[n+3]=f*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"YZX":this._x=d*f*h+c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h-d*p*_;break;case"XZY":this._x=d*f*h-c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h+d*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wh=class wh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wh.prototype.isVector3=!0;let B=wh;const Yc=new B,Jp=new Qs,Th=class Th{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],E=r[0],g=r[3],u=r[6],x=r[1],y=r[4],S=r[7],T=r[2],w=r[5],A=r[8];return s[0]=o*E+a*x+l*T,s[3]=o*g+a*y+l*w,s[6]=o*u+a*S+l*A,s[1]=c*E+f*x+h*T,s[4]=c*g+f*y+h*w,s[7]=c*u+f*S+h*A,s[2]=d*E+p*x+_*T,s[5]=d*g+p*y+_*w,s[8]=d*u+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(e,n)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;let Oe=Th;const qc=new Oe,Qp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){const t={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Yl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xl]:{primaries:e,whitePoint:i,transfer:Yl,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const je=iy();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class ry{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=ql("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($c(r[o].image)):s.push($c(r[o]))}else s=$c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ry.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let oy=0;const Zc=new B;class un extends Jr{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Li,r=Li,s=sn,o=Or,a=ei,l=Tn,c=un.DEFAULT_ANISOTROPY,f=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=ca(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=h_;un.DEFAULT_ANISOTROPY=1;const Ah=class Ah{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],E=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,T=(u+1)/2,w=(f+d)/4,A=(h+E)/4,m=(_+g)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=m/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=m/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(h-E)*(h-E)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-E)/x,this.z=(d-f)/x,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;let yt=Ah;class ay extends Jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends ay{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=class $l{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,_,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,_,E,g)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,_,E,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=E,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,_=a*f,E=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-E*c,n[9]=-a*l,n[2]=E-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=c*f,E=c*h;n[0]=d+E*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=E+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=c*f,E=c*h;n[0]=d-E*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=E-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,_=a*f,E=a*h;n[0]=l*f,n[4]=_*c-p,n[8]=d*c+E,n[1]=l*h,n[5]=E*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=E-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+_,n[10]=d-E*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+E,n[5]=o*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*f,n[10]=E*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,uy)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Yi.crossVectors(i,Mn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Yi.crossVectors(i,Mn)),Yi.normalize(),Da.crossVectors(Mn,Yi),r[0]=Yi.x,r[4]=Da.x,r[8]=Mn.x,r[1]=Yi.y,r[5]=Da.y,r[9]=Mn.y,r[2]=Yi.z,r[6]=Da.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],E=i[6],g=i[10],u=i[14],x=i[3],y=i[7],S=i[11],T=i[15],w=r[0],A=r[4],m=r[8],C=r[12],L=r[1],D=r[5],F=r[9],K=r[13],ne=r[2],z=r[6],J=r[10],G=r[14],k=r[3],Z=r[7],re=r[11],Q=r[15];return s[0]=o*w+a*L+l*ne+c*k,s[4]=o*A+a*D+l*z+c*Z,s[8]=o*m+a*F+l*J+c*re,s[12]=o*C+a*K+l*G+c*Q,s[1]=f*w+h*L+d*ne+p*k,s[5]=f*A+h*D+d*z+p*Z,s[9]=f*m+h*F+d*J+p*re,s[13]=f*C+h*K+d*G+p*Q,s[2]=_*w+E*L+g*ne+u*k,s[6]=_*A+E*D+g*z+u*Z,s[10]=_*m+E*F+g*J+u*re,s[14]=_*C+E*K+g*G+u*Q,s[3]=x*w+y*L+S*ne+T*k,s[7]=x*A+y*D+S*z+T*Z,s[11]=x*m+y*F+S*J+T*re,s[15]=x*C+y*K+S*G+T*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],E=e[7],g=e[11],u=e[15],x=l*p-c*d,y=a*p-c*h,S=a*d-l*h,T=o*p-c*f,w=o*d-l*f,A=o*h-a*f;return n*(E*x-g*y+u*S)-i*(_*x-g*T+u*w)+r*(_*y-E*T+u*A)-s*(_*S-E*w+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],E=e[13],g=e[14],u=e[15],x=n*a-i*o,y=n*l-r*o,S=n*c-s*o,T=i*l-r*a,w=i*c-s*a,A=r*c-s*l,m=f*E-h*_,C=f*g-d*_,L=f*u-p*_,D=h*g-d*E,F=h*u-p*E,K=d*u-p*g,ne=x*K-y*F+S*D+T*L-w*C+A*m;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/ne;return e[0]=(a*K-l*F+c*D)*z,e[1]=(r*F-i*K-s*D)*z,e[2]=(E*A-g*w+u*T)*z,e[3]=(d*w-h*A-p*T)*z,e[4]=(l*L-o*K-c*C)*z,e[5]=(n*K-r*L+s*C)*z,e[6]=(g*S-_*A-u*y)*z,e[7]=(f*A-d*S+p*y)*z,e[8]=(o*F-a*L+c*m)*z,e[9]=(i*L-n*F-s*m)*z,e[10]=(_*w-E*S+u*x)*z,e[11]=(h*S-f*w-p*x)*z,e[12]=(a*C-o*D-l*m)*z,e[13]=(n*D-i*C+r*m)*z,e[14]=(E*y-_*T-g*x)*z,e[15]=(f*T-h*y+d*x)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,_=s*h,E=o*f,g=o*h,u=a*h,x=l*c,y=l*f,S=l*h,T=i.x,w=i.y,A=i.z;return r[0]=(1-(E+u))*T,r[1]=(p+S)*T,r[2]=(_-y)*T,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(d+u))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(_+y)*A,r[9]=(g-x)*A,r[10]=(1-(d+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=rs.set(r[0],r[1],r[2]).length();const a=rs.set(r[4],r[5],r[6]).length(),l=rs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,f=1/a,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=fi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(l)_=s/(o-s),E=o*s/(o-s);else if(a===fi)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===ia)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(l)_=1/(o-s),E=o/(o-s);else if(a===fi)_=-2/(o-s),E=-(o+s)/(o-s);else if(a===ia)_=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$l.prototype.isMatrix4=!0;let bt=$l;const rs=new B,Xn=new bt,cy=new B(0,0,0),uy=new B(1,1,1),Yi=new B,Da=new B,Mn=new B,tm=new bt,nm=new Qs;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const im=new B,ss=new Qs,yi=new bt,Ia=new B,po=new B,fy=new B,hy=new Qs,rm=new B(1,0,0),sm=new B(0,1,0),om=new B(0,0,1),am={type:"added"},py={type:"removed"},os={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Zt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new B,n=new xr,i=new Qs,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Oe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(po,Ia,this.up):yi.lookAt(Ia,po,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(yi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),os.child=e,this.dispatchEvent(os),os.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(py),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ao extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),u=this._getHandJoint(c,E);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=ny(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Jc(o,s,e+1/3),this.g=Jc(o,s,e),this.b=Jc(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return je.workingToColorSpace(nn.copy(this),e),Math.round(Je(nn.r*255,0,255))*65536+Math.round(Je(nn.g*255,0,255))*256+Math.round(Je(nn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=In){je.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Ua);const i=Xc(qi.h,Ua.h,n),r=Xc(qi.s,Ua.s,n),s=Xc(qi.l,Ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new qe;qe.NAMES=w_;class _h{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new _h(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gy extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yn=new B,Mi=new B,Qc=new B,Ei=new B,as=new B,ls=new B,lm=new B,eu=new B,tu=new B,nu=new B,iu=new yt,ru=new yt,su=new yt;class Qn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Mi.subVectors(i,n),Qc.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(Qc),c=Mi.dot(Mi),f=Mi.dot(Qc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,_=(o*f-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,n),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(iu,s.x),o.addScaledVector(ru,s.y),o.addScaledVector(su,s.z),o}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Mi.subVectors(e,n),Yn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),eu.subVectors(e,i);const l=as.dot(eu),c=ls.dot(eu);if(l<=0&&c<=0)return n.copy(i);tu.subVectors(e,r);const f=as.dot(tu),h=ls.dot(tu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(as,o);nu.subVectors(e,s);const p=as.dot(nu),_=ls.dot(nu);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ls,a);const g=f*_-p*h;if(g<=0&&h-f>=0&&p-_>=0)return lm.subVectors(s,r),a=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(lm,a);const u=1/(g+E+d);return o=E*u,a=d*u,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ua{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Oa.subVectors(this.max,mo),cs.subVectors(e.a,mo),us.subVectors(e.b,mo),ds.subVectors(e.c,mo),$i.subVectors(us,cs),Zi.subVectors(ds,us),Tr.subVectors(cs,ds);let n=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-Tr.z,Tr.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,Tr.z,0,-Tr.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-Tr.y,Tr.x,0];return!ou(n,cs,us,ds,Oa)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,cs,us,ds,Oa))?!1:(ka.crossVectors($i,Zi),n=[ka.x,ka.y,ka.z],ou(n,cs,us,ds,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,Fa=new ua,cs=new B,us=new B,ds=new B,$i=new B,Zi=new B,Tr=new B,mo=new B,Oa=new B,ka=new B,Ar=new B;function ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),f=i.dot(Ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Dt=new B,Ba=new Qe;let _y=0;class _i extends Jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$p,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends _i{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends _i{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends _i{constructor(e,n,i){super(new Float32Array(e),n,i)}}const vy=new ua,go=new B,au=new B;class vh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(au)),this.expandByPoint(go.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xy=0;const Nn=new bt,lu=new Zt,fs=new B,En=new ua,_o=new ua,Ht=new B;class Hn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JS(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(En.min,_o.min),En.expandByPoint(Ht),Ht.addVectors(En.max,_o.max),En.expandByPoint(Ht)):(En.expandByPoint(_o.min),En.expandByPoint(_o.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ht.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Ht.add(fs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new _i(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let m=0;m<i.count;m++)a[m]=new B,l[m]=new B;const c=new B,f=new B,h=new B,d=new Qe,p=new Qe,_=new Qe,E=new B,g=new B;function u(m,C,L){c.fromBufferAttribute(i,m),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,L),d.fromBufferAttribute(s,m),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,L),f.sub(c),h.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(D),a[m].add(E),a[C].add(E),a[L].add(E),l[m].add(g),l[C].add(g),l[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let m=0,C=x.length;m<C;++m){const L=x[m],D=L.start,F=L.count;for(let K=D,ne=D+F;K<ne;K+=3)u(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const y=new B,S=new B,T=new B,w=new B;function A(m){T.fromBufferAttribute(r,m),w.copy(T);const C=a[m];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(w,C);const D=S.dot(l[m])<0?-1:1;o.setXYZW(m,y.x,y.y,y.z,D)}for(let m=0,C=x.length;m<C;++m){const L=x[m],D=L.start,F=L.count;for(let K=D,ne=D+F;K<ne;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),E=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,_=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*f;for(let u=0;u<f;u++)d[_++]=c[p++]}return new _i(d,f,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sy=0;class da extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Fs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=yd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==yd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new B,cu=new B,za=new B,Ki=new B,uu=new B,Va=new B,du=new B;class yy{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=Ki.dot(this.direction),l=-Ki.dot(za),c=Ki.lengthSq(),f=Math.abs(1-o*o);let h,d,p,_;if(f>0)if(h=o*l-a,d=o*a-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const E=1/f;h*=E,d*=E,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cu).addScaledVector(za,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){uu.subVectors(n,e),Va.subVectors(i,e),du.crossVectors(uu,Va);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Ki,Va));if(l<0)return null;const c=a*this.direction.dot(uu.cross(Ki));if(c<0||l+c>o)return null;const f=-a*Ki.dot(du);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class b_ extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cm=new bt,br=new yy,Ha=new vh,um=new B,Ga=new B,Wa=new B,Xa=new B,fu=new B,Ya=new B,dm=new B,qa=new B;class It extends Zt{constructor(e=new Hn,n=new b_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(fu.fromBufferAttribute(h,e),o?Ya.addScaledVector(fu,f):Ya.addScaledVector(fu.sub(n),f))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Ha.containsPoint(br.origin)===!1&&(br.intersectSphere(Ha,um)===null||br.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),br.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=d.length;_<E;_++){const g=d[_],u=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,T=y;S<T;S+=3){const w=a.getX(S),A=a.getX(S+1),m=a.getX(S+2);r=$a(this,u,e,i,c,f,h,w,A,m),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const x=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=$a(this,o,e,i,c,f,h,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=d.length;_<E;_++){const g=d[_],u=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,T=y;S<T;S+=3){const w=S,A=S+1,m=S+2;r=$a(this,u,e,i,c,f,h,w,A,m),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=_,u=E;g<u;g+=3){const x=g,y=g+1,S=g+2;r=$a(this,o,e,i,c,f,h,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function My(t,e,n,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vr,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qa);return c<n.near||c>n.far?null:{distance:c,point:qa.clone(),object:t}}function $a(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ga),t.getVertexPosition(l,Wa),t.getVertexPosition(c,Xa);const f=My(t,e,n,i,Ga,Wa,Xa,dm);if(f){const h=new B;Qn.getBarycoord(dm,Ga,Wa,Xa,h),r&&(f.uv=Qn.getInterpolatedAttribute(r,a,l,c,h,new Qe)),s&&(f.uv1=Qn.getInterpolatedAttribute(s,a,l,c,h,new Qe)),o&&(f.normal=Qn.getInterpolatedAttribute(o,a,l,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Qn.getNormal(Ga,Wa,Xa,d.normal),f.face=d,f.barycoord=h}return f}class Ey extends un{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,f=qt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new B,wy=new B,Ty=new Oe;class Lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(wy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ty.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new vh,Ay=new Qe(.5,.5),Za=new B;class xh{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],_=s[8],E=s[9],g=s[10],u=s[11],x=s[12],y=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-o,p-f,u-_,T-x).normalize(),r[1].setComponents(c+o,p+f,u+_,T+x).normalize(),r[2].setComponents(c+a,p+h,u+E,T+y).normalize(),r[3].setComponents(c-a,p-h,u-E,T-y).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,p-d,u-g,T-S).normalize();else if(r[4].setComponents(c-l,p-d,u-g,T-S).normalize(),n===fi)r[5].setComponents(c+l,p+d,u+g,T+S).normalize();else if(n===ia)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=Ay.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends un{constructor(e=[],n=qr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends un{constructor(e,n,i=vi,r,s,o,a=qt,l=qt,c,f=zi,h=1){if(f!==zi&&f!==kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class by extends $s{constructor(e,n=vi,i=qr,r,s,o=qt,a=qt,l,c=zi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R_ extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zr extends Hn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(h,2));function _(E,g,u,x,y,S,T,w,A,m,C){const L=S/A,D=T/m,F=S/2,K=T/2,ne=w/2,z=A+1,J=m+1;let G=0,k=0;const Z=new B;for(let re=0;re<J;re++){const Q=re*D-K;for(let de=0;de<z;de++){const De=de*L-F;Z[E]=De*x,Z[g]=Q*y,Z[u]=ne,c.push(Z.x,Z.y,Z.z),Z[E]=0,Z[g]=0,Z[u]=w>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(de/A),h.push(1-re/m),G+=1}}for(let re=0;re<m;re++)for(let Q=0;Q<A;Q++){const de=d+Q+z*re,De=d+Q+z*(re+1),He=d+(Q+1)+z*(re+1),Ue=d+(Q+1)+z*re;l.push(de,De,Ue),l.push(De,He,Ue),k+=6}a.addGroup(p,k,C),p+=k,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Br extends Hn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let _=0;const E=[],g=i/2;let u=0;x(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function x(){const S=new B,T=new B;let w=0;const A=(n-e)/i;for(let m=0;m<=s;m++){const C=[],L=m/s,D=L*(n-e)+e;for(let F=0;F<=r;F++){const K=F/r,ne=K*l+a,z=Math.sin(ne),J=Math.cos(ne);T.x=D*z,T.y=-L*i+g,T.z=D*J,h.push(T.x,T.y,T.z),S.set(z,A,J).normalize(),d.push(S.x,S.y,S.z),p.push(K,1-L),C.push(_++)}E.push(C)}for(let m=0;m<r;m++)for(let C=0;C<s;C++){const L=E[C][m],D=E[C+1][m],F=E[C+1][m+1],K=E[C][m+1];(e>0||C!==0)&&(f.push(L,D,K),w+=3),(n>0||C!==s-1)&&(f.push(D,F,K),w+=3)}c.addGroup(u,w,0),u+=w}function y(S){const T=_,w=new Qe,A=new B;let m=0;const C=S===!0?e:n,L=S===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*L,0),d.push(0,L,0),p.push(.5,.5),_++;const D=_;for(let F=0;F<=r;F++){const ne=F/r*l+a,z=Math.cos(ne),J=Math.sin(ne);A.x=C*J,A.y=g*L,A.z=C*z,h.push(A.x,A.y,A.z),d.push(0,L,0),w.x=z*.5+.5,w.y=J*.5*L+.5,p.push(w.x,w.y),_++}for(let F=0;F<r;F++){const K=T+F,ne=D+F;S===!0?f.push(ne,ne+1,K):f.push(ne+1,ne,K),m+=3}c.addGroup(u,m,S===!0?1:2),u+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sh extends Br{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Sh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],_=[],E=[],g=[];for(let u=0;u<f;u++){const x=u*d-o;for(let y=0;y<c;y++){const S=y*h-s;_.push(S,-x,0),E.push(0,0,1),g.push(y/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const y=x+c*u,S=x+c*(u+1),T=x+1+c*(u+1),w=x+1+c*u;p.push(y,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(E,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oo extends Hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new B,d=new B,p=[],_=[],E=[],g=[];for(let u=0;u<=i;u++){const x=[],y=u/i,S=o+y*a,T=e*Math.cos(S),w=Math.sqrt(e*e-T*T);let A=0;u===0&&o===0?A=.5/n:u===i&&l===Math.PI&&(A=-.5/n);for(let m=0;m<=n;m++){const C=m/n,L=r+C*s;h.x=-w*Math.cos(L),h.y=T,h.z=w*Math.sin(L),_.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),g.push(C+A,1-y),x.push(c++)}f.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const y=f[u][x+1],S=f[u][x],T=f[u+1][x],w=f[u+1][x+1];(u!==0||o>0)&&p.push(y,S,w),(u!==i-1||l<Math.PI)&&p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(E,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yh extends Hn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],f=[],h=new B,d=new B,p=new B,_=new B,E=new B,g=new B,u=new B;for(let y=0;y<=i;++y){const S=y/i*s*Math.PI*2;x(S,s,o,e,p),x(S+.01,s,o,e,_),g.subVectors(_,p),u.addVectors(_,p),E.crossVectors(g,u),u.crossVectors(E,g),E.normalize(),u.normalize();for(let T=0;T<=r;++T){const w=T/r*Math.PI*2,A=-n*Math.cos(w),m=n*Math.sin(w);h.x=p.x+(A*u.x+m*E.x),h.y=p.y+(A*u.y+m*E.y),h.z=p.z+(A*u.z+m*E.z),l.push(h.x,h.y,h.z),d.subVectors(h,p).normalize(),c.push(d.x,d.y,d.z),f.push(y/i),f.push(T/r)}}for(let y=1;y<=i;y++)for(let S=1;S<=r;S++){const T=(r+1)*(y-1)+(S-1),w=(r+1)*y+(S-1),A=(r+1)*y+S,m=(r+1)*(y-1)+S;a.push(T,w,m),a.push(w,A,m)}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(f,2));function x(y,S,T,w,A){const m=Math.cos(y),C=Math.sin(y),L=T/S*y,D=Math.cos(L);A.x=w*(2+D)*.5*m,A.y=w*(2+D)*C*.5,A.z=w*Math.sin(L)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(fm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(fm(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function fm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Cy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ry={clone:Zs,merge:an};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ny extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $n extends da{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dy extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class L_ extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Uy extends L_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const pu=new bt,hm=new B,pm=new B;class Fy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ia||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ka=new B,ja=new Qs,oi=new B;class N_ extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,ja,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ka,ja,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new B,mm=new Qe,gm=new Qe;class On extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Mh extends N_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Oy extends Fy{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ky extends L_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Oy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const hs=-90,ps=1;class By extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new On(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new On(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new On(hs,ps,e,n);a.layers=this.layers,this.add(a);const l=new On(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new On(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zy extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bh=class bh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};bh.prototype.isMatrix2=!0;let _m=bh;function vm(t,e,n,i){const r=Vy(i);switch(n){case v_:return t*e;case S_:return t*e/r.components*r.byteLength;case dh:return t*e/r.components*r.byteLength;case $r:return t*e*2/r.components*r.byteLength;case fh:return t*e*2/r.components*r.byteLength;case x_:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case hh:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Ld:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:case Gl:case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sf:case of:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wl:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vy(t){switch(t){case Tn:case p_:return{byteLength:1,components:1};case ta:case m_:case Bi:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case vi:case lh:case di:return{byteLength:4,components:1};case g_:case __:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hy(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],E=h[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const E=h[p];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
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
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,VM=`uniform sampler2D dfgLUT;
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
}`,HM=`
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
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
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
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
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CE=`float getShadowMask() {
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
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NE=`#ifdef USE_SKINNING
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WE=`uniform sampler2D t2D;
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
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
}`,KE=`#if DEPTH_PACKING == 3200
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
}`,jE=`#define DISTANCE
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
}`,JE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,o1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,l1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,d1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,p1=`#define STANDARD
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
}`,m1=`#define TOON
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
}`,g1=`#define TOON
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
}`,_1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,M1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:$y,aomap_fragment:Zy,aomap_pars_fragment:Ky,batching_pars_vertex:jy,batching_vertex:Jy,begin_vertex:Qy,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:aM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:dM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:_M,emissivemap_pars_fragment:vM,colorspace_fragment:xM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:UM,envmap_vertex:TM,fog_vertex:AM,fog_pars_vertex:bM,fog_fragment:CM,fog_pars_fragment:RM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:DM,lights_pars_begin:IM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:VM,lights_fragment_begin:HM,lights_fragment_maps:GM,lights_fragment_end:WM,lightprobes_pars_fragment:XM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:ZM,map_fragment:KM,map_pars_fragment:jM,map_particle_fragment:JM,map_particle_pars_fragment:QM,metalnessmap_fragment:eE,metalnessmap_pars_fragment:tE,morphinstance_vertex:nE,morphcolor_vertex:iE,morphnormal_vertex:rE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:aE,normal_fragment_maps:lE,normal_pars_fragment:cE,normal_pars_vertex:uE,normal_vertex:dE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,opaque_fragment:_E,packing:vE,premultiplied_alpha_fragment:xE,project_vertex:SE,dithering_fragment:yE,dithering_pars_fragment:ME,roughnessmap_fragment:EE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:TE,shadowmap_pars_vertex:AE,shadowmap_vertex:bE,shadowmask_pars_fragment:CE,skinbase_vertex:RE,skinning_pars_vertex:PE,skinning_vertex:LE,skinnormal_vertex:NE,specularmap_fragment:DE,specularmap_pars_fragment:IE,tonemapping_fragment:UE,tonemapping_pars_fragment:FE,transmission_fragment:OE,transmission_pars_fragment:kE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:VE,worldpos_vertex:HE,background_vert:GE,background_frag:WE,backgroundCube_vert:XE,backgroundCube_frag:YE,cube_vert:qE,cube_frag:$E,depth_vert:ZE,depth_frag:KE,distance_vert:jE,distance_frag:JE,equirect_vert:QE,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:u1,meshphong_vert:d1,meshphong_frag:f1,meshphysical_vert:h1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:_1,points_frag:v1,shadow_vert:x1,shadow_frag:S1,sprite_vert:y1,sprite_frag:M1},_e={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ci={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ja={r:0,b:0,g:0},E1=new bt,I_=new Oe;I_.set(-1,0,0,0,1,0,0,0,1);function w1(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,l,c,f=null,h=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function _(x){let y=!1;const S=p(x);S===null?g(o,a):S&&S.isColor&&(g(S,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===dc)?(c===void 0&&(c=new It(new Zr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Zs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I_),c.material.toneMapped=je.getTransfer(S.colorSpace)!==at,(f!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new It(new fa(2,2),new xi({name:"BackgroundMaterial",uniforms:Zs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(Ja,P_(t)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:_,addToRenderList:E,dispose:u}}function T1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,F,K,ne,z){let J=!1;const G=h(D,ne,K,F);s!==G&&(s=G,c(s.object)),J=p(D,ne,K,z),J&&_(D,ne,K,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(D,F,K,ne),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function h(D,F,K,ne){const z=ne.wireframe===!0;let J=i[F.id];J===void 0&&(J={},i[F.id]=J);const G=D.isInstancedMesh===!0?D.id:0;let k=J[G];k===void 0&&(k={},J[G]=k);let Z=k[K.id];Z===void 0&&(Z={},k[K.id]=Z);let re=Z[z];return re===void 0&&(re=d(l()),Z[z]=re),re}function d(D){const F=[],K=[],ne=[];for(let z=0;z<n;z++)F[z]=0,K[z]=0,ne[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:K,attributeDivisors:ne,object:D,attributes:{},index:null}}function p(D,F,K,ne){const z=s.attributes,J=F.attributes;let G=0;const k=K.getAttributes();for(const Z in k)if(k[Z].location>=0){const Q=z[Z];let de=J[Z];if(de===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;G++}return s.attributesNum!==G||s.index!==ne}function _(D,F,K,ne){const z={},J=F.attributes;let G=0;const k=K.getAttributes();for(const Z in k)if(k[Z].location>=0){let Q=J[Z];Q===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),z[Z]=de,G++}s.attributes=z,s.attributesNum=G,s.index=ne}function E(){const D=s.newAttributes;for(let F=0,K=D.length;F<K;F++)D[F]=0}function g(D){u(D,0)}function u(D,F){const K=s.newAttributes,ne=s.enabledAttributes,z=s.attributeDivisors;K[D]=1,ne[D]===0&&(t.enableVertexAttribArray(D),ne[D]=1),z[D]!==F&&(t.vertexAttribDivisor(D,F),z[D]=F)}function x(){const D=s.newAttributes,F=s.enabledAttributes;for(let K=0,ne=F.length;K<ne;K++)F[K]!==D[K]&&(t.disableVertexAttribArray(K),F[K]=0)}function y(D,F,K,ne,z,J,G){G===!0?t.vertexAttribIPointer(D,F,K,z,J):t.vertexAttribPointer(D,F,K,ne,z,J)}function S(D,F,K,ne){E();const z=ne.attributes,J=K.getAttributes(),G=F.defaultAttributeValues;for(const k in J){const Z=J[k];if(Z.location>=0){let re=z[k];if(re===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){const Q=re.normalized,de=re.itemSize,De=e.get(re);if(De===void 0)continue;const He=De.buffer,Ue=De.type,j=De.bytesPerElement,le=Ue===t.INT||Ue===t.UNSIGNED_INT||re.gpuType===lh;if(re.isInterleavedBufferAttribute){const ae=re.data,oe=ae.stride,Ae=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Z.locationSize;Ne++)u(Z.location+Ne,ae.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)g(Z.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ne=0;Ne<Z.locationSize;Ne++)y(Z.location+Ne,de/Z.locationSize,Ue,Q,oe*j,(Ae+de/Z.locationSize*Ne)*j,le)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)u(Z.location+ae,re.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<Z.locationSize;ae++)g(Z.location+ae);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ae=0;ae<Z.locationSize;ae++)y(Z.location+ae,de/Z.locationSize,Ue,Q,de*j,de/Z.locationSize*ae*j,le)}}else if(G!==void 0){const Q=G[k];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(Z.location,Q);break;case 3:t.vertexAttrib3fv(Z.location,Q);break;case 4:t.vertexAttrib4fv(Z.location,Q);break;default:t.vertexAttrib1fv(Z.location,Q)}}}}x()}function T(){C();for(const D in i){const F=i[D];for(const K in F){const ne=F[K];for(const z in ne){const J=ne[z];for(const G in J)f(J[G].object),delete J[G];delete ne[z]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const K in F){const ne=F[K];for(const z in ne){const J=ne[z];for(const G in J)f(J[G].object),delete J[G];delete ne[z]}}delete i[D.id]}function A(D){for(const F in i){const K=i[F];for(const ne in K){const z=K[ne];if(z[D.id]===void 0)continue;const J=z[D.id];for(const G in J)f(J[G].object),delete J[G];delete z[D.id]}}}function m(D){for(const F in i){const K=i[F],ne=D.isInstancedMesh===!0?D.id:0,z=K[ne];if(z!==void 0){for(const J in z){const G=z[J];for(const k in G)f(G[k].object),delete G[k];delete z[J]}delete K[ne],Object.keys(K).length===0&&delete i[F]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:m,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function A1(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function b1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const m=A===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!m)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:T,samples:w}}function C1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,y=x*4;let S=u.clippingState||null;l.value=S,S=f(_,d,y,p);for(let T=0;T!==y;++T)S[T]=n[T];u.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const u=p+E*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,S=p;y!==E;++y,S+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const ar=4,xm=[.125,.215,.35,.446,.526,.582],Dr=20,R1=256,vo=new Mh,Sm=new qe;let mu=null,gu=0,_u=0,vu=!1;const P1=new B;class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=P1}=s;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=vu,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Bi,format:ei,colorSpace:Xl,depthBuffer:!1},r=Mm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L1(s)),this._blurMaterial=D1(s,e,n),this._ggxMaterial=N1(s,e,n)}return r}_compileMaterial(e){const n=new It(new Hn,e);this._renderer.compile(n,vo)}_sceneToCubeUV(e,n,i,r,s){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Sm),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Zr,new b_({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let u=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,u=!0):(g.color.copy(Sm),u=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const T=this._cubeSize;ms(r,S*T,y>2?T:0,T,T),h.setRenderTarget(r),u&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:_}=this,E=this._sizeLods[i],g=3*E*(i>_-ar?i-_+ar:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,ms(s,g,u,3*E,2*E),r.setRenderTarget(s),r.render(a,vo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ms(e,g,u,3*E,2*E),r.setRenderTarget(e),r.render(a,vo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),E=s/_,g=isFinite(s)?1+Math.floor(f*E):Dr;g>Dr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const u=[];let x=0;for(let A=0;A<Dr;++A){const m=A/E,C=Math.exp(-m*m/2);u.push(C),A===0?x+=C:A<g&&(x+=2*C)}for(let A=0;A<u.length;A++)u[A]=u[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-ar?r-y+ar:0),w=4*(this._cubeSize-S);ms(n,T,w,3*S,2*S),l.setRenderTarget(n),l.render(h,vo)}}function L1(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-ar?l=xm[o-t+ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,E=3,g=2,u=1,x=new Float32Array(E*_*p),y=new Float32Array(g*_*p),S=new Float32Array(u*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,m=w>2?0:-1,C=[A,m,0,A+2/3,m,0,A+2/3,m+1,0,A,m,0,A+2/3,m+1,0,A,m+1,0];x.set(C,E*_*w),y.set(d,g*_*w);const L=[w,w,w,w,w,w];S.set(L,u*_*w)}const T=new Hn;T.setAttribute("position",new _i(x,E)),T.setAttribute("uv",new _i(y,g)),T.setAttribute("faceIndex",new _i(S,u)),i.push(new It(T,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Mm(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function N1(t,e,n){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function D1(t,e,n){const i=new Float32Array(Dr),r=new B(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Em(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function wm(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}class U_ extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Di});s.uniforms.tEquirect.value=n;const o=new It(r,s),a=n.minFilter;return n.minFilter===Or&&(n.minFilter=sn),new By(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function I1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Vc||p===Hc)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const E=new U_(_.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),a(E.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,_=p===Vc||p===Hc,E=p===qr||p===qs;if(_||E){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new ym(t)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return _&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new ym(t)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function a(d,p){return p===Vc?d.mapping=qr:p===Hc&&(d.mapping=qs),d}function l(d){let p=0;const _=6;for(let E=0;E<_;E++)d[E]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function U1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("WebGLRenderer: "+i+" extension not supported."),r}}}function F1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(p!==null){const x=p.array;E=p.version;for(let y=0,S=x.length;y<S;y+=3){const T=x[y+0],w=x[y+1],A=x[y+2];d.push(T,w,w,A,A,T)}}else{const x=_.array;E=_.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const T=y+0,w=y+1,A=y+2;d.push(T,w,w,A,A,T)}}const g=new(_.count>=65535?A_:T_)(d,1);g.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function O1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*o,p),n.update(d,i,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let E=0;for(let g=0;g<p;g++)E+=d[g];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function k1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let L=function(){m.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*h),m=new M_(A,T,w,h);m.type=di,m.needsUpdate=!0;const C=S*4;for(let D=0;D<h;D++){const F=u[D],K=x[D],ne=y[D],z=T*w*4*D;for(let J=0;J<F.count;J++){const G=J*C;_===!0&&(r.fromBufferAttribute(F,J),A[z+G+0]=r.x,A[z+G+1]=r.y,A[z+G+2]=r.z,A[z+G+3]=0),E===!0&&(r.fromBufferAttribute(K,J),A[z+G+4]=r.x,A[z+G+5]=r.y,A[z+G+6]=r.z,A[z+G+7]=0),g===!0&&(r.fromBufferAttribute(ne,J),A[z+G+8]=r.x,A[z+G+9]=r.y,A[z+G+10]=r.z,A[z+G+11]=ne.itemSize===4?r.w:1)}}d={count:h,texture:m,size:new Qe(T,w)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function z1(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const V1={[o_]:"LINEAR_TONE_MAPPING",[a_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[d_]:"AGX_TONE_MAPPING",[f_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function H1(t,e,n,i,r,s){const o=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new $s(e,n):void 0}),a=new gi(e,n,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn;l.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const c=new Ny({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new It(l,c),h=new Mh(-1,1,1,-1,0,1);let d=null,p=null,_=!1,E,g=null,u=[],x=!1;this.setSize=function(y,S){o.setSize(y,S),a.setSize(y,S);for(let T=0;T<u.length;T++){const w=u[T];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){u=y,x=u.length>0&&u[0].isRenderPass===!0;const S=o.width,T=o.height;for(let w=0;w<u.length;w++){const A=u[w];A.setSize&&A.setSize(S,T)}},this.begin=function(y,S){if(_||y.toneMapping===mi&&u.length===0)return!1;if(g=S,S!==null){const T=S.width,w=S.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return x===!1&&y.setRenderTarget(o),E=y.toneMapping,y.toneMapping=mi,!0},this.hasRenderPass=function(){return x},this.end=function(y,S){y.toneMapping=E,_=!0;let T=o,w=a;for(let A=0;A<u.length;A++){const m=u[A];if(m.enabled!==!1&&(m.render(y,w,T,S),m.needsSwap!==!1)){const C=T;T=w,w=C}}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,c.defines={},je.getTransfer(d)===at&&(c.defines.SRGB_TRANSFER="");const A=V1[p];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(f,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const F_=new un,uf=new $s(1,1),O_=new M_,k_=new ly,B_=new C_,Tm=[],Am=[],bm=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),Vt(n,i)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),Vt(n,i)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;bm.set(i),t.uniformMatrix4fv(this.addr,!1,bm),Vt(n,i)}}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(uf.compareFunction=n.isReversedDepthBuffer()?mh:ph,s=uf):s=F_,n.setTexture2D(e||s,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||k_,r)}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||B_,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||O_,r)}function lw(t){switch(t){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return Y1;case 35674:return q1;case 35675:return $1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return j1;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}function cw(t,e){t.uniform1fv(this.addr,e)}function uw(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function dw(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function fw(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function hw(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pw(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mw(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gw(t,e){t.uniform1iv(this.addr,e)}function _w(t,e){t.uniform2iv(this.addr,e)}function vw(t,e){t.uniform3iv(this.addr,e)}function xw(t,e){t.uniform4iv(this.addr,e)}function Sw(t,e){t.uniform1uiv(this.addr,e)}function yw(t,e){t.uniform2uiv(this.addr,e)}function Mw(t,e){t.uniform3uiv(this.addr,e)}function Ew(t,e){t.uniform4uiv(this.addr,e)}function ww(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=uf:o=F_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Tw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||k_,s[o])}function Aw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||B_,s[o])}function bw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||O_,s[o])}function Cw(t){switch(t){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return Sw;case 36294:return yw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return bw}}class Rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lw(n.type)}}class Pw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cw(n.type)}}class Lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function Nw(t,e,n){const i=t.name,r=i.length;for(xu.lastIndex=0;;){const s=xu.exec(i),o=xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pm(n,c===void 0?new Rw(a,t,e):new Pw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Lw(a),Pm(n,h)),n=h}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Nw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Dw=37297;let Iw=0;function Uw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Nm=new Oe;function Fw(t){je._getMatrix(Nm,je.workingColorSpace,t);const e=`mat3( ${Nm.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Yl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Uw(t.getShaderSource(e),a)}else return s}function Ow(t,e){const n=Fw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kw={[o_]:"Linear",[a_]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[d_]:"AgX",[f_]:"Neutral",[u_]:"Custom"};function Bw(t,e){const n=kw[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qa=new B;function zw(){je.getLuminanceCoefficients(Qa);const t=Qa.x.toFixed(4),e=Qa.y.toFixed(4),n=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function Hw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function Im(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(t){return t.replace(Ww,Yw)}const Xw=new Map;function Yw(t,e){let n=Ve[e];if(n===void 0){const i=Xw.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return df(n)}const qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(t){return t.replace(qw,$w)}function $w(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Zw={[hl]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Kw(t){return Zw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jw={[qr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function Jw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qw={[qs]:"ENVMAP_MODE_REFRACTION"};function eT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tT={[s_]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function nT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":tT[t.combine]||"ENVMAP_BLENDING_NONE"}function iT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Kw(n),c=Jw(n),f=eT(n),h=nT(n),d=iT(n),p=Vw(n),_=Hw(s),E=r.createProgram();let g,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),u.length>0&&(u+=`
`)):(g=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),u=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==mi?Bw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ow("linearToOutputTexel",n.outputColorSpace),zw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=df(o),o=Im(o,n),o=Um(o,n),a=df(a),a=Im(a,n),a=Um(a,n),o=Fm(o),a=Fm(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=x+g+o,S=x+u+a,T=Lm(r,r.VERTEX_SHADER,y),w=Lm(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(D){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",K=r.getShaderInfoLog(T)||"",ne=r.getShaderInfoLog(w)||"",z=F.trim(),J=K.trim(),G=ne.trim();let k=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,w);else{const re=Dm(r,T,"vertex"),Q=Dm(r,w,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+re+`
`+Q)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(J===""||G==="")&&(Z=!1);Z&&(D.diagnostics={runnable:k,programLog:z,vertexShader:{log:J,prefix:g},fragmentShader:{log:G,prefix:u}})}r.deleteShader(T),r.deleteShader(w),m=new vl(r,E),C=Gw(r,E)}let m;this.getUniforms=function(){return m===void 0&&A(this),m};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,Dw)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=w,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t){return t===$r||t===Gl||t===Wl}function cT(t,e,n,i,r,s){const o=new E_,a=new oT,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}function E(m,C,L,D,F,K){const ne=D.fog,z=F.geometry,J=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?D.environment:null,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,k=e.get(m.envMap||J,G),Z=k&&k.mapping===dc?k.image.height:null,re=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Ie("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=Q!==void 0?Q.length:0;let De=0;z.morphAttributes.position!==void 0&&(De=1),z.morphAttributes.normal!==void 0&&(De=2),z.morphAttributes.color!==void 0&&(De=3);let He,Ue,j,le;if(re){const ie=ci[re];He=ie.vertexShader,Ue=ie.fragmentShader}else{He=m.vertexShader,Ue=m.fragmentShader;const ie=a.getVertexShaderStage(m),Fe=a.getFragmentShaderStage(m);a.update(m,ie,Fe),j=ie.id,le=Fe.id}const ae=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,ft=!!m.map,Ge=!!m.matcap,ot=!!k,Ze=!!m.aoMap,Ke=!!m.lightMap,wt=!!m.bumpMap&&m.wireframe===!1,Ct=!!m.normalMap,Nt=!!m.displacementMap,Ft=!!m.emissiveMap,_t=!!m.metalnessMap,xt=!!m.roughnessMap,U=m.anisotropy>0,jt=m.clearcoat>0,st=m.dispersion>0,R=m.iridescence>0,v=m.sheen>0,b=m.transmission>0,P=U&&!!m.anisotropyMap,N=jt&&!!m.clearcoatMap,W=jt&&!!m.clearcoatNormalMap,te=jt&&!!m.clearcoatRoughnessMap,q=R&&!!m.iridescenceMap,X=R&&!!m.iridescenceThicknessMap,ce=v&&!!m.sheenColorMap,Se=v&&!!m.sheenRoughnessMap,fe=!!m.specularMap,he=!!m.specularColorMap,be=!!m.specularIntensityMap,ye=b&&!!m.transmissionMap,Le=b&&!!m.thicknessMap,I=!!m.gradientMap,pe=!!m.alphaMap,ee=m.alphaTest>0,me=!!m.alphaHash,ge=!!m.extensions;let se=mi;m.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(se=t.toneMapping);const Te={shaderID:re,shaderType:m.type,shaderName:m.name,vertexShader:He,fragmentShader:Ue,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ft,matcap:Ge,envMap:ot,envMapMode:ot&&k.mapping,envMapCubeUVHeight:Z,aoMap:Ze,lightMap:Ke,bumpMap:wt,normalMap:Ct,displacementMap:Nt,emissiveMap:Ft,normalMapObjectSpace:Ct&&m.normalMapType===XS,normalMapTangentSpace:Ct&&m.normalMapType===lf,packedNormalMap:Ct&&m.normalMapType===lf&&lT(m.normalMap.format),metalnessMap:_t,roughnessMap:xt,anisotropy:U,anisotropyMap:P,clearcoat:jt,clearcoatMap:N,clearcoatNormalMap:W,clearcoatRoughnessMap:te,dispersion:st,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:X,sheen:v,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:fe,specularColorMap:he,specularIntensityMap:be,transmission:b,transmissionMap:ye,thicknessMap:Le,gradientMap:I,opaque:m.transparent===!1&&m.blending===Fs&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:me,combine:m.combine,mapUv:ft&&_(m.map.channel),aoMapUv:Ze&&_(m.aoMap.channel),lightMapUv:Ke&&_(m.lightMap.channel),bumpMapUv:wt&&_(m.bumpMap.channel),normalMapUv:Ct&&_(m.normalMap.channel),displacementMapUv:Nt&&_(m.displacementMap.channel),emissiveMapUv:Ft&&_(m.emissiveMap.channel),metalnessMapUv:_t&&_(m.metalnessMap.channel),roughnessMapUv:xt&&_(m.roughnessMap.channel),anisotropyMapUv:P&&_(m.anisotropyMap.channel),clearcoatMapUv:N&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:W&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:X&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(m.sheenRoughnessMap.channel),specularMapUv:fe&&_(m.specularMap.channel),specularColorMapUv:he&&_(m.specularColorMap.channel),specularIntensityMapUv:be&&_(m.specularIntensityMap.channel),transmissionMapUv:ye&&_(m.transmissionMap.channel),thicknessMapUv:Le&&_(m.thicknessMap.channel),alphaMapUv:pe&&_(m.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ct||U),vertexNormals:!!z.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ft||pe),fog:!!ne,useFog:m.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||z.attributes.normal===void 0&&Ct===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:De,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:ft&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===at,decodeVideoTextureEmissive:Ft&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===at,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ci,flipSided:m.side===xn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ge&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&m.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(m){const C=[];if(m.shaderID?C.push(m.shaderID):(C.push(m.customVertexShaderID),C.push(m.customFragmentShaderID)),m.defines!==void 0)for(const L in m.defines)C.push(L),C.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(u(C,m),x(C,m),C.push(t.outputColorSpace)),C.push(m.customProgramCacheKey),C.join()}function u(m,C){m.push(C.precision),m.push(C.outputColorSpace),m.push(C.envMapMode),m.push(C.envMapCubeUVHeight),m.push(C.mapUv),m.push(C.alphaMapUv),m.push(C.lightMapUv),m.push(C.aoMapUv),m.push(C.bumpMapUv),m.push(C.normalMapUv),m.push(C.displacementMapUv),m.push(C.emissiveMapUv),m.push(C.metalnessMapUv),m.push(C.roughnessMapUv),m.push(C.anisotropyMapUv),m.push(C.clearcoatMapUv),m.push(C.clearcoatNormalMapUv),m.push(C.clearcoatRoughnessMapUv),m.push(C.iridescenceMapUv),m.push(C.iridescenceThicknessMapUv),m.push(C.sheenColorMapUv),m.push(C.sheenRoughnessMapUv),m.push(C.specularMapUv),m.push(C.specularColorMapUv),m.push(C.specularIntensityMapUv),m.push(C.transmissionMapUv),m.push(C.thicknessMapUv),m.push(C.combine),m.push(C.fogExp2),m.push(C.sizeAttenuation),m.push(C.morphTargetsCount),m.push(C.morphAttributeCount),m.push(C.numDirLights),m.push(C.numPointLights),m.push(C.numSpotLights),m.push(C.numSpotLightMaps),m.push(C.numHemiLights),m.push(C.numRectAreaLights),m.push(C.numDirLightShadows),m.push(C.numPointLightShadows),m.push(C.numSpotLightShadows),m.push(C.numSpotLightShadowsWithMaps),m.push(C.numLightProbes),m.push(C.shadowMapType),m.push(C.toneMapping),m.push(C.numClippingPlanes),m.push(C.numClipIntersection),m.push(C.depthPacking)}function x(m,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function y(m){const C=p[m.type];let L;if(C){const D=ci[C];L=Ry.clone(D.uniforms)}else L=m.uniforms;return L}function S(m,C){let L=f.get(C);return L!==void 0?++L.usedTimes:(L=new rT(t,C,m,r),c.push(L),f.set(C,L)),L}function T(m){if(--m.usedTimes===0){const C=c.indexOf(m);c[C]=c[c.length-1],c.pop(),f.delete(m.cacheKey),m.destroy()}}function w(m){a.remove(m)}function A(){a.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function uT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function dT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function km(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,_,E,g,u){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:_,materialVariant:o(d),groupOrder:E,renderOrder:d.renderOrder,z:g,group:u},t[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=_,x.materialVariant=o(d),x.groupOrder=E,x.renderOrder=d.renderOrder,x.z=g,x.group=u),e++,x}function l(d,p,_,E,g,u){const x=a(d,p,_,E,g,u);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):n.push(x)}function c(d,p,_,E,g,u){const x=a(d,p,_,E,g,u);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function f(d,p,_){n.length>1&&n.sort(d||dT),i.length>1&&i.sort(p||km),r.length>1&&r.sort(p||km),_&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function fT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Bm,t.set(i,[o])):r>=s.length?(o=new Bm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new qe};break;case"SpotLight":n={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mT=0;function gT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _T(t){const e=new hT,n=pT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new bt,o=new bt;function a(c){let f=0,h=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,_=0,E=0,g=0,u=0,x=0,y=0,S=0,T=0,w=0,A=0;c.sort(gT);for(let C=0,L=c.length;C<L;C++){const D=c[C],F=D.color,K=D.intensity,ne=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$r?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=F.r*K,h+=F.g*K,d+=F.b*K;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],K);A++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=J,p++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(F).multiplyScalar(K),J.distance=ne,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[E]=J;const G=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[E]=G.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=z,S++}E++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(F).multiplyScalar(K),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=J,g++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=J,_++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(K),J.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[u]=J,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const m=i.hash;(m.directionalLength!==p||m.pointLength!==_||m.spotLength!==E||m.rectAreaLength!==g||m.hemiLength!==u||m.numDirectionalShadows!==x||m.numPointShadows!==y||m.numSpotShadows!==S||m.numSpotMaps!==T||m.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,m.directionalLength=p,m.pointLength=_,m.spotLength=E,m.rectAreaLength=g,m.hemiLength=u,m.numDirectionalShadows=x,m.numPointShadows=y,m.numSpotShadows=S,m.numSpotMaps=T,m.numLightProbes=A,i.version=mT++)}function l(c,f){let h=0,d=0,p=0,_=0,E=0;const g=f.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const y=c[u];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function zm(t){const e=new _T(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function vT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zm(t),e.set(r,[a])):s>=o.length?(a=new zm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
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
}`,yT=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],MT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Vm=new bt,xo=new B,Su=new B;function ET(t,e,n){let i=new xh;const r=new Qe,s=new Qe,o=new yt,a=new Dy,l=new Iy,c={},f=n.maxTextureSize,h={[vr]:xn,[xn]:vr,[Ci]:Ci},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:xT,fragmentShader:ST}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new It(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let u=this.type;this.render=function(w,A,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===MS&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hl);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const K=u!==this.type;K&&A.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(z=>z.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,z=w.length;ne<z;ne++){const J=w[ne],G=J.shadow;if(G===void 0){Ie("WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const Z=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===To){if(J.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new gi(r.x,r.y,{format:$r,type:Bi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=J.name+".shadowMap",G.map.depthTexture=new $s(r.x,r.y,di),G.map.depthTexture.name=J.name+".shadowMapDepth",G.map.depthTexture.format=zi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else J.isPointLight?(G.map=new U_(r.x),G.map.depthTexture=new by(r.x,vi)):(G.map=new gi(r.x,r.y),G.map.depthTexture=new $s(r.x,r.y,vi)),G.map.depthTexture.name=J.name+".shadowMap",G.map.depthTexture.format=zi,this.type===hl?(G.map.depthTexture.compareFunction=Z?mh:ph,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}const re=G.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<re;Q++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(G.map),t.clear());const de=G.getViewport(Q);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(o)}if(J.isPointLight){const de=G.camera,De=G.matrix,He=J.distance||de.far;He!==de.far&&(de.far=He,de.updateProjectionMatrix()),xo.setFromMatrixPosition(J.matrixWorld),de.position.copy(xo),Su.copy(de.position),Su.add(yT[Q]),de.up.copy(MT[Q]),de.lookAt(Su),de.updateMatrixWorld(),De.makeTranslation(-xo.x,-xo.y,-xo.z),Vm.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Vm,de.coordinateSystem,de.reversedDepth)}else G.updateMatrices(J);i=G.getFrustum(),S(A,m,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===To&&x(G,m),G.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,D)};function x(w,A){const m=e.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y,{format:$r,type:Bi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,m,d,E,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,m,p,E,null)}function y(w,A,m,C){let L=null;const D=m.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=m.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=L.uuid,K=A.uuid;let ne=c[F];ne===void 0&&(ne={},c[F]=ne);let z=ne[K];z===void 0&&(z=L.clone(),ne[K]=z,A.addEventListener("dispose",T)),L=z}if(L.visible=A.visible,L.wireframe=A.wireframe,C===To?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:h[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,m.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=t.properties.get(L);F.light=m}return L}function S(w,A,m,C,L){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===To)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,w.matrixWorld);const K=e.update(w),ne=w.material;if(Array.isArray(ne)){const z=K.groups;for(let J=0,G=z.length;J<G;J++){const k=z[J],Z=ne[k.materialIndex];if(Z&&Z.visible){const re=y(w,Z,C,L);w.onBeforeShadow(t,w,A,m,K,re,k),t.renderBufferDirect(m,null,K,re,w,k),w.onAfterShadow(t,w,A,m,K,re,k)}}}else if(ne.visible){const z=y(w,ne,C,L);w.onBeforeShadow(t,w,A,m,K,z,null),t.renderBufferDirect(m,null,K,z,w,null),w.onAfterShadow(t,w,A,m,K,z,null)}}const F=w.children;for(let K=0,ne=F.length;K<ne;K++)S(F[K],A,m,C,L)}function T(w){w.target.removeEventListener("dispose",T);for(const m in c){const C=c[m],L=w.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function wT(t,e){function n(){let I=!1;const pe=new yt;let ee=null;const me=new yt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!I&&(t.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){I=ge},setClear:function(ge,se,Te,ie,Fe){Fe===!0&&(ge*=ie,se*=ie,Te*=ie),pe.set(ge,se,Te,ie),me.equals(pe)===!1&&(t.clearColor(ge,se,Te,ie),me.copy(pe))},reset:function(){I=!1,ee=null,me.set(-1,0,0,0)}}}function i(){let I=!1,pe=!1,ee=null,me=null,ge=null;return{setReversed:function(se){if(pe!==se){const Te=e.get("EXT_clip_control");se?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const ie=ge;ge=null,this.setClear(ie)}},getReversed:function(){return pe},setTest:function(se){se?ae(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(se){ee!==se&&!I&&(t.depthMask(se),ee=se)},setFunc:function(se){if(pe&&(se=ty[se]),me!==se){switch(se){case Md:t.depthFunc(t.NEVER);break;case Ed:t.depthFunc(t.ALWAYS);break;case wd:t.depthFunc(t.LESS);break;case Ys:t.depthFunc(t.LEQUAL);break;case Td:t.depthFunc(t.EQUAL);break;case Ad:t.depthFunc(t.GEQUAL);break;case bd:t.depthFunc(t.GREATER);break;case Cd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){I=se},setClear:function(se){ge!==se&&(ge=se,pe&&(se=1-se),t.clearDepth(se))},reset:function(){I=!1,ee=null,me=null,ge=null,pe=!1}}}function r(){let I=!1,pe=null,ee=null,me=null,ge=null,se=null,Te=null,ie=null,Fe=null;return{setTest:function(ke){I||(ke?ae(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ke){pe!==ke&&!I&&(t.stencilMask(ke),pe=ke)},setFunc:function(ke,Be,Xe){(ee!==ke||me!==Be||ge!==Xe)&&(t.stencilFunc(ke,Be,Xe),ee=ke,me=Be,ge=Xe)},setOp:function(ke,Be,Xe){(se!==ke||Te!==Be||ie!==Xe)&&(t.stencilOp(ke,Be,Xe),se=ke,Te=Be,ie=Xe)},setLocked:function(ke){I=ke},setClear:function(ke){Fe!==ke&&(t.clearStencil(ke),Fe=ke)},reset:function(){I=!1,pe=null,ee=null,me=null,ge=null,se=null,Te=null,ie=null,Fe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,_=[],E=null,g=!1,u=null,x=null,y=null,S=null,T=null,w=null,A=null,m=new qe(0,0,0),C=0,L=!1,D=null,F=null,K=null,ne=null,z=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=k>=2);let re=null,Q={};const de=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),He=new yt().fromArray(de),Ue=new yt().fromArray(De);function j(I,pe,ee,me){const ge=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<ee;Te++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(pe+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return se}const le={};le[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Ys),wt(!1),Ct(Gp),ae(t.CULL_FACE),Ze(Di);function ae(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function oe(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Ae(I,pe){return d[I]!==pe?(t.bindFramebuffer(I,pe),d[I]=pe,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ne(I,pe){let ee=_,me=!1;if(I){ee=p.get(pe),ee===void 0&&(ee=[],p.set(pe,ee));const ge=I.textures;if(ee.length!==ge.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Te=ge.length;se<Te;se++)ee[se]=t.COLOR_ATTACHMENT0+se;ee.length=ge.length,me=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,me=!0);me&&t.drawBuffers(ee)}function ft(I){return E!==I?(t.useProgram(I),E=I,!0):!1}const Ge={[Nr]:t.FUNC_ADD,[wS]:t.FUNC_SUBTRACT,[TS]:t.FUNC_REVERSE_SUBTRACT};Ge[AS]=t.MIN,Ge[bS]=t.MAX;const ot={[CS]:t.ZERO,[RS]:t.ONE,[PS]:t.SRC_COLOR,[Sd]:t.SRC_ALPHA,[FS]:t.SRC_ALPHA_SATURATE,[IS]:t.DST_COLOR,[NS]:t.DST_ALPHA,[LS]:t.ONE_MINUS_SRC_COLOR,[yd]:t.ONE_MINUS_SRC_ALPHA,[US]:t.ONE_MINUS_DST_COLOR,[DS]:t.ONE_MINUS_DST_ALPHA,[OS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[BS]:t.CONSTANT_ALPHA,[zS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,pe,ee,me,ge,se,Te,ie,Fe,ke){if(I===Di){g===!0&&(oe(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),I!==ES){if(I!==u||ke!==L){if((x!==Nr||T!==Nr)&&(t.blendEquation(t.FUNC_ADD),x=Nr,T=Nr),ke)switch(I){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.ONE,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xp:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yp:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",I);break}y=null,S=null,w=null,A=null,m.set(0,0,0),C=0,u=I,L=ke}return}ge=ge||pe,se=se||ee,Te=Te||me,(pe!==x||ge!==T)&&(t.blendEquationSeparate(Ge[pe],Ge[ge]),x=pe,T=ge),(ee!==y||me!==S||se!==w||Te!==A)&&(t.blendFuncSeparate(ot[ee],ot[me],ot[se],ot[Te]),y=ee,S=me,w=se,A=Te),(ie.equals(m)===!1||Fe!==C)&&(t.blendColor(ie.r,ie.g,ie.b,Fe),m.copy(ie),C=Fe),u=I,L=!1}function Ke(I,pe){I.side===Ci?oe(t.CULL_FACE):ae(t.CULL_FACE);let ee=I.side===xn;pe&&(ee=!ee),wt(ee),I.blending===Fs&&I.transparent===!1?Ze(Di):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ft(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function wt(I){D!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),D=I)}function Ct(I){I!==SS?(ae(t.CULL_FACE),I!==F&&(I===Gp?t.cullFace(t.BACK):I===yS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),F=I}function Nt(I){I!==K&&(G&&t.lineWidth(I),K=I)}function Ft(I,pe,ee){I?(ae(t.POLYGON_OFFSET_FILL),(ne!==pe||z!==ee)&&(ne=pe,z=ee,o.getReversed()&&(pe=-pe),t.polygonOffset(pe,ee))):oe(t.POLYGON_OFFSET_FILL)}function _t(I){I?ae(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function xt(I){I===void 0&&(I=t.TEXTURE0+J-1),re!==I&&(t.activeTexture(I),re=I)}function U(I,pe,ee){ee===void 0&&(re===null?ee=t.TEXTURE0+J-1:ee=re);let me=Q[ee];me===void 0&&(me={type:void 0,texture:void 0},Q[ee]=me),(me.type!==I||me.texture!==pe)&&(re!==ee&&(t.activeTexture(ee),re=ee),t.bindTexture(I,pe||le[I]),me.type=I,me.texture=pe)}function jt(){const I=Q[re];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function st(){try{t.compressedTexImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function v(){try{t.texSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function b(){try{t.texSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function P(){try{t.compressedTexSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function N(){try{t.compressedTexSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function W(){try{t.texStorage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function te(){try{t.texStorage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function q(){try{t.texImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function X(){try{t.texImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function ce(I){return h[I]!==void 0?h[I]:t.getParameter(I)}function Se(I,pe){h[I]!==pe&&(t.pixelStorei(I,pe),h[I]=pe)}function fe(I){He.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function he(I){Ue.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ue.copy(I))}function be(I,pe){let ee=c.get(pe);ee===void 0&&(ee=new WeakMap,c.set(pe,ee));let me=ee.get(I);me===void 0&&(me=t.getUniformBlockIndex(pe,I.name),ee.set(I,me))}function ye(I,pe){const me=c.get(pe).get(I);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,I.__bindingPointIndex),l.set(pe,me))}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},re=null,Q={},d={},p=new WeakMap,_=[],E=null,g=!1,u=null,x=null,y=null,S=null,T=null,w=null,A=null,m=new qe(0,0,0),C=0,L=!1,D=null,F=null,K=null,ne=null,z=null,He.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:oe,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:ft,setBlending:Ze,setMaterial:Ke,setFlipSided:wt,setCullFace:Ct,setLineWidth:Nt,setPolygonOffset:Ft,setScissorTest:_t,activeTexture:xt,bindTexture:U,unbindTexture:jt,compressedTexImage2D:st,compressedTexImage3D:R,texImage2D:q,texImage3D:X,pixelStorei:Se,getParameter:ce,updateUBOMapping:be,uniformBlockBinding:ye,texStorage2D:W,texStorage3D:te,texSubImage2D:v,texSubImage3D:b,compressedTexSubImage2D:P,compressedTexSubImage3D:N,scissor:fe,viewport:he,reset:Le}}function TT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,v){return _?new OffscreenCanvas(R,v):ql("canvas")}function g(R,v,b){let P=1;const N=st(R);if((N.width>b||N.height>b)&&(P=b/Math.max(N.width,N.height)),P<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(P*N.width),te=Math.floor(P*N.height);d===void 0&&(d=E(W,te));const q=v?E(W,te):d;return q.width=W,q.height=te,q.getContext("2d").drawImage(R,0,0,W,te),Ie("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+W+"x"+te+")."),q}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),R;return R}function u(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,v,b,P,N,W=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te;P&&(te=e.get("EXT_texture_norm16"),te||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===t.RED&&(b===t.FLOAT&&(q=t.R32F),b===t.HALF_FLOAT&&(q=t.R16F),b===t.UNSIGNED_BYTE&&(q=t.R8),b===t.UNSIGNED_SHORT&&te&&(q=te.R16_EXT),b===t.SHORT&&te&&(q=te.R16_SNORM_EXT)),v===t.RED_INTEGER&&(b===t.UNSIGNED_BYTE&&(q=t.R8UI),b===t.UNSIGNED_SHORT&&(q=t.R16UI),b===t.UNSIGNED_INT&&(q=t.R32UI),b===t.BYTE&&(q=t.R8I),b===t.SHORT&&(q=t.R16I),b===t.INT&&(q=t.R32I)),v===t.RG&&(b===t.FLOAT&&(q=t.RG32F),b===t.HALF_FLOAT&&(q=t.RG16F),b===t.UNSIGNED_BYTE&&(q=t.RG8),b===t.UNSIGNED_SHORT&&te&&(q=te.RG16_EXT),b===t.SHORT&&te&&(q=te.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(b===t.UNSIGNED_BYTE&&(q=t.RG8UI),b===t.UNSIGNED_SHORT&&(q=t.RG16UI),b===t.UNSIGNED_INT&&(q=t.RG32UI),b===t.BYTE&&(q=t.RG8I),b===t.SHORT&&(q=t.RG16I),b===t.INT&&(q=t.RG32I)),v===t.RGB_INTEGER&&(b===t.UNSIGNED_BYTE&&(q=t.RGB8UI),b===t.UNSIGNED_SHORT&&(q=t.RGB16UI),b===t.UNSIGNED_INT&&(q=t.RGB32UI),b===t.BYTE&&(q=t.RGB8I),b===t.SHORT&&(q=t.RGB16I),b===t.INT&&(q=t.RGB32I)),v===t.RGBA_INTEGER&&(b===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),b===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),b===t.UNSIGNED_INT&&(q=t.RGBA32UI),b===t.BYTE&&(q=t.RGBA8I),b===t.SHORT&&(q=t.RGBA16I),b===t.INT&&(q=t.RGBA32I)),v===t.RGB&&(b===t.UNSIGNED_SHORT&&te&&(q=te.RGB16_EXT),b===t.SHORT&&te&&(q=te.RGB16_SNORM_EXT),b===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),b===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),v===t.RGBA){const X=W?Yl:je.getTransfer(N);b===t.FLOAT&&(q=t.RGBA32F),b===t.HALF_FLOAT&&(q=t.RGBA16F),b===t.UNSIGNED_BYTE&&(q=X===at?t.SRGB8_ALPHA8:t.RGBA8),b===t.UNSIGNED_SHORT&&te&&(q=te.RGBA16_EXT),b===t.SHORT&&te&&(q=te.RGBA16_SNORM_EXT),b===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),b===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(R,v){let b;return R?v===null||v===vi||v===na?b=t.DEPTH24_STENCIL8:v===di?b=t.DEPTH32F_STENCIL8:v===ta&&(b=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===na?b=t.DEPTH_COMPONENT24:v===di?b=t.DEPTH_COMPONENT32F:v===ta&&(b=t.DEPTH_COMPONENT16),b}function w(R,v){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&h.delete(v)}function m(R){const v=R.target;v.removeEventListener("dispose",m),D(v)}function C(R){const v=i.get(R);if(v.__webglInit===void 0)return;const b=R.source,P=p.get(b);if(P){const N=P[v.__cacheKey];N.usedTimes--,N.usedTimes===0&&L(R),Object.keys(P).length===0&&p.delete(b)}i.remove(R)}function L(R){const v=i.get(R);t.deleteTexture(v.__webglTexture);const b=R.source,P=p.get(b);delete P[v.__cacheKey],o.memory.textures--}function D(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let N=0;N<v.__webglFramebuffer[P].length;N++)t.deleteFramebuffer(v.__webglFramebuffer[P][N]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const b=R.textures;for(let P=0,N=b.length;P<N;P++){const W=i.get(b[P]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(b[P])}i.remove(R)}let F=0;function K(){F=0}function ne(){return F}function z(R){F=R}function J(){const R=F;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function G(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function k(R,v){const b=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&b.__version!==R.version){const P=R.image;if(P===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(b,R,v);return}}else R.isExternalTexture&&(b.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,b.__webglTexture,t.TEXTURE0+v)}function Z(R,v){const b=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&b.__version!==R.version){oe(b,R,v);return}else R.isExternalTexture&&(b.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,b.__webglTexture,t.TEXTURE0+v)}function re(R,v){const b=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&b.__version!==R.version){oe(b,R,v);return}n.bindTexture(t.TEXTURE_3D,b.__webglTexture,t.TEXTURE0+v)}function Q(R,v){const b=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&b.__version!==R.version){Ae(b,R,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+v)}const de={[Rd]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},De={[qt]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[Na]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR},He={[YS]:t.NEVER,[jS]:t.ALWAYS,[qS]:t.LESS,[ph]:t.LEQUAL,[$S]:t.EQUAL,[mh]:t.GEQUAL,[ZS]:t.GREATER,[KS]:t.NOTEQUAL};function Ue(R,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Gc||v.magFilter===Na||v.magFilter===Or||v.minFilter===sn||v.minFilter===Gc||v.minFilter===Na||v.minFilter===Or)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,de[v.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,de[v.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,de[v.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,De[v.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,De[v.minFilter]),v.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,He[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==Na&&v.minFilter!==Or||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function j(R,v){let b=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const P=v.source;let N=p.get(P);N===void 0&&(N={},p.set(P,N));const W=G(v);if(W!==R.__cacheKey){N[W]===void 0&&(N[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,b=!0),N[W].usedTimes++;const te=N[R.__cacheKey];te!==void 0&&(N[R.__cacheKey].usedTimes--,te.usedTimes===0&&L(v)),R.__cacheKey=W,R.__webglTexture=N[W].texture}return b}function le(R,v,b){return Math.floor(Math.floor(R/b)/v)}function ae(R,v,b,P){const W=R.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,b,P,v.data);else{W.sort((Se,fe)=>Se.start-fe.start);let te=0;for(let Se=1;Se<W.length;Se++){const fe=W[te],he=W[Se],be=fe.start+fe.count,ye=le(he.start,v.width,4),Le=le(fe.start,v.width,4);he.start<=be+1&&ye===Le&&le(he.start+he.count-1,v.width,4)===ye?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++te,W[te]=he)}W.length=te+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),X=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Se=0,fe=W.length;Se<fe;Se++){const he=W[Se],be=Math.floor(he.start/4),ye=Math.ceil(he.count/4),Le=be%v.width,I=Math.floor(be/v.width),pe=ye,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Le,I,pe,ee,b,P,v.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,X),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function oe(R,v,b){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const N=j(R,v),W=v.source;n.bindTexture(P,R.__webglTexture,t.TEXTURE0+b);const te=i.get(W);if(W.version!==te.__version||N===!0){if(n.activeTexture(t.TEXTURE0+b),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ee=je.getPrimaries(je.workingColorSpace),me=v.colorSpace===rr?null:je.getPrimaries(v.colorSpace),ge=v.colorSpace===rr||ee===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let X=g(v.image,!1,r.maxTextureSize);X=jt(v,X);const ce=s.convert(v.format,v.colorSpace),Se=s.convert(v.type);let fe=S(v.internalFormat,ce,Se,v.normalized,v.colorSpace,v.isVideoTexture);Ue(P,v);let he;const be=v.mipmaps,ye=v.isVideoTexture!==!0,Le=te.__version===void 0||N===!0,I=W.dataReady,pe=w(v,X);if(v.isDepthTexture)fe=T(v.format===kr,v.type),Le&&(ye?n.texStorage2D(t.TEXTURE_2D,1,fe,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,fe,X.width,X.height,0,ce,Se,null));else if(v.isDataTexture)if(be.length>0){ye&&Le&&n.texStorage2D(t.TEXTURE_2D,pe,fe,be[0].width,be[0].height);for(let ee=0,me=be.length;ee<me;ee++)he=be[ee],ye?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Se,he.data):n.texImage2D(t.TEXTURE_2D,ee,fe,he.width,he.height,0,ce,Se,he.data);v.generateMipmaps=!1}else ye?(Le&&n.texStorage2D(t.TEXTURE_2D,pe,fe,X.width,X.height),I&&ae(v,X,ce,Se)):n.texImage2D(t.TEXTURE_2D,0,fe,X.width,X.height,0,ce,Se,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ye&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,fe,be[0].width,be[0].height,X.depth);for(let ee=0,me=be.length;ee<me;ee++)if(he=be[ee],v.format!==ei)if(ce!==null)if(ye){if(I)if(v.layerUpdates.size>0){const ge=vm(he.width,he.height,v.format,v.type);for(const se of v.layerUpdates){const Te=he.data.subarray(se*ge/he.data.BYTES_PER_ELEMENT,(se+1)*ge/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,se,he.width,he.height,1,ce,Te)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,X.depth,ce,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,X.depth,0,he.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,X.depth,ce,Se,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,X.depth,0,ce,Se,he.data)}else{ye&&Le&&n.texStorage2D(t.TEXTURE_2D,pe,fe,be[0].width,be[0].height);for(let ee=0,me=be.length;ee<me;ee++)he=be[ee],v.format!==ei?ce!==null?ye?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,fe,he.width,he.height,0,he.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Se,he.data):n.texImage2D(t.TEXTURE_2D,ee,fe,he.width,he.height,0,ce,Se,he.data)}else if(v.isDataArrayTexture)if(ye){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,fe,X.width,X.height,X.depth),I)if(v.layerUpdates.size>0){const ee=vm(X.width,X.height,v.format,v.type);for(const me of v.layerUpdates){const ge=X.data.subarray(me*ee/X.data.BYTES_PER_ELEMENT,(me+1)*ee/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,X.width,X.height,1,ce,Se,ge)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ce,Se,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,ce,Se,X.data);else if(v.isData3DTexture)ye?(Le&&n.texStorage3D(t.TEXTURE_3D,pe,fe,X.width,X.height,X.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ce,Se,X.data)):n.texImage3D(t.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,ce,Se,X.data);else if(v.isFramebufferTexture){if(Le)if(ye)n.texStorage2D(t.TEXTURE_2D,pe,fe,X.width,X.height);else{let ee=X.width,me=X.height;for(let ge=0;ge<pe;ge++)n.texImage2D(t.TEXTURE_2D,ge,fe,ee,me,0,ce,Se,null),ee>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),X.parentNode!==ee){ee.appendChild(X),h.add(v),ee.onpaint=me=>{const ge=me.changedElements;for(const se of h)ge.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,X);else{const ge=t.RGBA,se=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,se,Te,X)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(ye&&Le){const ee=st(be[0]);n.texStorage2D(t.TEXTURE_2D,pe,fe,ee.width,ee.height)}for(let ee=0,me=be.length;ee<me;ee++)he=be[ee],ye?I&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce,Se,he):n.texImage2D(t.TEXTURE_2D,ee,fe,ce,Se,he);v.generateMipmaps=!1}else if(ye){if(Le){const ee=st(X);n.texStorage2D(t.TEXTURE_2D,pe,fe,ee.width,ee.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Se,X)}else n.texImage2D(t.TEXTURE_2D,0,fe,ce,Se,X);u(v)&&x(P),te.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ae(R,v,b){if(v.image.length!==6)return;const P=j(R,v),N=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+b);const W=i.get(N);if(N.version!==W.__version||P===!0){n.activeTexture(t.TEXTURE0+b);const te=je.getPrimaries(je.workingColorSpace),q=v.colorSpace===rr?null:je.getPrimaries(v.colorSpace),X=v.colorSpace===rr||te===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const ce=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!ce&&!Se?fe[se]=g(v.image[se],!0,r.maxCubemapSize):fe[se]=Se?v.image[se].image:v.image[se],fe[se]=jt(v,fe[se]);const he=fe[0],be=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Le=S(v.internalFormat,be,ye,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,pe=W.__version===void 0||P===!0,ee=N.dataReady;let me=w(v,he);Ue(t.TEXTURE_CUBE_MAP,v);let ge;if(ce){I&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Le,he.width,he.height);for(let se=0;se<6;se++){ge=fe[se].mipmaps;for(let Te=0;Te<ge.length;Te++){const ie=ge[Te];v.format!==ei?be!==null?I?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ie.width,ie.height,be,ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Le,ie.width,ie.height,0,ie.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ie.width,ie.height,be,ye,ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Le,ie.width,ie.height,0,be,ye,ie.data)}}}else{if(ge=v.mipmaps,I&&pe){ge.length>0&&me++;const se=st(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Le,se.width,se.height)}for(let se=0;se<6;se++)if(Se){I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,be,ye,fe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Le,fe[se].width,fe[se].height,0,be,ye,fe[se].data);for(let Te=0;Te<ge.length;Te++){const Fe=ge[Te].image[se].image;I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Fe.width,Fe.height,be,ye,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Le,Fe.width,Fe.height,0,be,ye,Fe.data)}}else{I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be,ye,fe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Le,be,ye,fe[se]);for(let Te=0;Te<ge.length;Te++){const ie=ge[Te];I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,be,ye,ie.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Le,be,ye,ie.image[se])}}}u(v)&&x(t.TEXTURE_CUBE_MAP),W.__version=N.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ne(R,v,b,P,N,W){const te=s.convert(b.format,b.colorSpace),q=s.convert(b.type),X=S(b.internalFormat,te,q,b.normalized,b.colorSpace),ce=i.get(v),Se=i.get(b);if(Se.__renderTarget=v,!ce.__hasExternalTextures){const fe=Math.max(1,v.width>>W),he=Math.max(1,v.height>>W);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,W,X,fe,he,v.depth,0,te,q,null):n.texImage2D(N,W,X,fe,he,0,te,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xt(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,N,Se.__webglTexture,0,_t(v)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,N,Se.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ft(R,v,b){if(t.bindRenderbuffer(t.RENDERBUFFER,R),v.depthBuffer){const P=v.depthTexture,N=P&&P.isDepthTexture?P.type:null,W=T(v.stencilBuffer,N),te=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xt(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(v),W,v.width,v.height):b?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(v),W,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,W,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,R)}else{const P=v.textures;for(let N=0;N<P.length;N++){const W=P[N],te=s.convert(W.format,W.colorSpace),q=s.convert(W.type),X=S(W.internalFormat,te,q,W.normalized,W.colorSpace);xt(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(v),X,v.width,v.height):b?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(v),X,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,X,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(R,v,b){const P=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=i.get(v.depthTexture);if(N.__renderTarget=v,(!N.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),P){if(N.__webglInit===void 0&&(N.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),N.__webglTexture===void 0){N.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,v.depthTexture);const ce=s.convert(v.depthTexture.format),Se=s.convert(v.depthTexture.type);let fe;v.depthTexture.format===zi?fe=t.DEPTH_COMPONENT24:v.depthTexture.format===kr&&(fe=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,v.width,v.height,0,ce,Se,null)}}else k(v.depthTexture,0);const W=N.__webglTexture,te=_t(v),q=P?t.TEXTURE_CUBE_MAP_POSITIVE_X+b:t.TEXTURE_2D,X=v.depthTexture.format===kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)xt(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,q,W,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,X,q,W,0);else if(v.depthTexture.format===kr)xt(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,q,W,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,X,q,W,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(R){const v=i.get(R),b=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const P=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const N=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",N)};P.addEventListener("dispose",N),v.__depthDisposeCallback=N}v.__boundDepthTexture=P}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(b)for(let P=0;P<6;P++)Ge(v.__webglFramebuffer[P],R,P);else{const P=R.texture.mipmaps;P&&P.length>0?Ge(v.__webglFramebuffer[0],R,0):Ge(v.__webglFramebuffer,R,0)}else if(b){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),ft(v.__webglDepthbuffer[P],R,!1);else{const N=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,W)}}else{const P=R.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ft(v.__webglDepthbuffer,R,!1);else{const N=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(R,v,b){const P=i.get(R);v!==void 0&&Ne(P.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),b!==void 0&&ot(R)}function Ke(R){const v=R.texture,b=i.get(R),P=i.get(v);R.addEventListener("dispose",m);const N=R.textures,W=R.isWebGLCubeRenderTarget===!0,te=N.length>1;if(te||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,o.memory.textures++),W){b.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer[q]=[];for(let X=0;X<v.mipmaps.length;X++)b.__webglFramebuffer[q][X]=t.createFramebuffer()}else b.__webglFramebuffer[q]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)b.__webglFramebuffer[q]=t.createFramebuffer()}else b.__webglFramebuffer=t.createFramebuffer();if(te)for(let q=0,X=N.length;q<X;q++){const ce=i.get(N[q]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&xt(R)===!1){b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let q=0;q<N.length;q++){const X=N[q];b.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,b.__webglColorRenderbuffer[q]);const ce=s.convert(X.format,X.colorSpace),Se=s.convert(X.type),fe=S(X.internalFormat,ce,Se,X.normalized,X.colorSpace,R.isXRRenderTarget===!0),he=_t(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,fe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,b.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),ft(b.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)Ne(b.__webglFramebuffer[q][X],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,X);else Ne(b.__webglFramebuffer[q],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(v)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){for(let q=0,X=N.length;q<X;q++){const ce=N[q],Se=i.get(ce);let fe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Se.__webglTexture),Ue(fe,ce),Ne(b.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+q,fe,0),u(ce)&&x(fe)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,P.__webglTexture),Ue(q,v),v.mipmaps&&v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)Ne(b.__webglFramebuffer[X],R,v,t.COLOR_ATTACHMENT0,q,X);else Ne(b.__webglFramebuffer,R,v,t.COLOR_ATTACHMENT0,q,0);u(v)&&x(q),n.unbindTexture()}R.depthBuffer&&ot(R)}function wt(R){const v=R.textures;for(let b=0,P=v.length;b<P;b++){const N=v[b];if(u(N)){const W=y(R),te=i.get(N).__webglTexture;n.bindTexture(W,te),x(W),n.unbindTexture()}}}const Ct=[],Nt=[];function Ft(R){if(R.samples>0){if(xt(R)===!1){const v=R.textures,b=R.width,P=R.height;let N=t.COLOR_BUFFER_BIT;const W=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=i.get(R),q=v.length>1;if(q)for(let ce=0;ce<v.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const X=R.texture.mipmaps;X&&X.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,te.__webglColorRenderbuffer[ce]);const Se=i.get(v[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,b,P,0,0,b,P,N,t.NEAREST),l===!0&&(Ct.length=0,Nt.length=0,Ct.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ct.push(W),Nt.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ce=0;ce<v.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,te.__webglColorRenderbuffer[ce]);const Se=i.get(v[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function _t(R){return Math.min(r.maxSamples,R.samples)}function xt(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=o.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function jt(R,v){const b=R.colorSpace,P=R.format,N=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||b!==Xl&&b!==rr&&(je.getTransfer(b)===at?(P!==ei||N!==Tn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",b)),v}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.getTextureUnits=ne,this.setTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=Q,this.rebindTextures=Ze,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AT(t,e){function n(i,r=rr){let s;const o=je.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===g_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===__)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===p_)return t.BYTE;if(i===m_)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===lh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Bi)return t.HALF_FLOAT;if(i===v_)return t.ALPHA;if(i===x_)return t.RGB;if(i===ei)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===kr)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===dh)return t.RED_INTEGER;if(i===$r)return t.RG;if(i===fh)return t.RG_INTEGER;if(i===hh)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===_l)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===Nd||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===Gl||i===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Od)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kd)return s.COMPRESSED_R11_EAC;if(i===Bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gl)return s.COMPRESSED_RG11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===Yd||i===qd||i===$d||i===Zd||i===Kd||i===jd||i===Jd||i===Qd||i===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tf)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sf||i===of||i===Wl||i===af)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===af)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new R_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xi({vertexShader:bT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new It(new fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends Jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",g=new RT,u={},x=n.getContextAttributes();let y=null,S=null;const T=[],w=[],A=new Qe;let m=null;const C=new On;C.viewport=new yt;const L=new On;L.viewport=new yt;const D=[C,L],F=new zy;let K=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=T[j];return le===void 0&&(le=new jc,T[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=T[j];return le===void 0&&(le=new jc,T[j]=le),le.getGripSpace()},this.getHand=function(j){let le=T[j];return le===void 0&&(le=new jc,T[j]=le),le.getHandSpace()};function z(j){const le=w.indexOf(j.inputSource);if(le===-1)return;const ae=T[le];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",G);for(let j=0;j<T.length;j++){const le=w[j];le!==null&&(w[j]=null,T[j].disconnect(le))}K=null,ne=null,g.reset();for(const j in u)delete u[j];e.setRenderTarget(y),p=null,d=null,h=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",J),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,oe=null,Ae=null;x.depth&&(Ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=x.stencil?kr:zi,oe=x.stencil?na:vi);const Ne={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:ei,type:Tn,depthTexture:new $s(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(j){for(let le=0;le<j.removed.length;le++){const ae=j.removed[le],oe=w.indexOf(ae);oe>=0&&(w[oe]=null,T[oe].disconnect(ae))}for(let le=0;le<j.added.length;le++){const ae=j.added[le];let oe=w.indexOf(ae);if(oe===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(ae),oe=Ne;break}else if(w[Ne]===null){w[Ne]=ae,oe=Ne;break}if(oe===-1)break}const Ae=T[oe];Ae&&Ae.connect(ae)}}const k=new B,Z=new B;function re(j,le,ae){k.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const oe=k.distanceTo(Z),Ae=le.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,ft=Ae[14]/(Ae[10]-1),Ge=Ae[14]/(Ae[10]+1),ot=(Ae[9]+1)/Ae[5],Ze=(Ae[9]-1)/Ae[5],Ke=(Ae[8]-1)/Ae[0],wt=(Ne[8]+1)/Ne[0],Ct=ft*Ke,Nt=ft*wt,Ft=oe/(-Ke+wt),_t=Ft*-Ke;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const xt=ft+Ft,U=Ge+Ft,jt=Ct-_t,st=Nt+(oe-_t),R=ot*Ge/U*xt,v=Ze*Ge/U*xt;j.projectionMatrix.makePerspective(jt,st,R,v,xt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let le=j.near,ae=j.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),F.near=L.near=C.near=le,F.far=L.far=C.far=ae,(K!==F.near||ne!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),K=F.near,ne=F.far),F.layers.mask=j.layers.mask|6,C.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const oe=j.parent,Ae=F.cameras;Q(F,oe);for(let Ne=0;Ne<Ae.length;Ne++)Q(Ae[Ne],oe);Ae.length===2?re(F,C,L):F.projectionMatrix.copy(C.projectionMatrix),de(j,F,oe)};function de(j,le,ae){ae===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(j){return u[j]};let De=null;function He(j,le){if(f=le.getViewerPose(c||o),_=le,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let oe=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,oe=!0);for(let Ge=0;Ge<ae.length;Ge++){const ot=ae[Ge];let Ze=null;if(p!==null)Ze=p.getViewport(ot);else{const wt=h.getViewSubImage(d,ot);Ze=wt.viewport,Ge===0&&(e.setRenderTargetTextures(S,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(S))}let Ke=D[Ge];Ke===void 0&&(Ke=new On,Ke.layers.enable(Ge),Ke.viewport=new yt,D[Ge]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ge===0&&(F.matrix.copy(Ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),oe===!0&&F.cameras.push(Ke)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Ge=h.getDepthInformation(ae[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Ae&&Ae.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<ae.length;Ge++){const ot=ae[Ge].camera;if(ot){let Ze=u[ot];Ze||(Ze=new R_,u[ot]=Ze);const Ke=h.getCameraImage(ot);Ze.sourceTexture=Ke}}}}for(let ae=0;ae<T.length;ae++){const oe=w[ae],Ae=T[ae];oe!==null&&Ae!==void 0&&Ae.update(oe,le,c||o)}De&&De(j,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ue=new D_;Ue.setAnimationLoop(He),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}}const LT=new bt,z_=new Oe;z_.set(-1,0,0,0,1,0,0,0,1);function NT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,P_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,y,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),E(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,x,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===xn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===xn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u),y=x.envMap,S=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(z_),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=y*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function E(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function c(S,T){let w=r[S.id];w===void 0&&(g(S),w=f(S),r[S.id]=w,S.addEventListener("dispose",x));const A=T.program;i.updateUBOMapping(S,A);const m=e.render.frame;s[S.id]!==m&&(d(S),s[S.id]=m)}function f(S){const T=h();S.__bindingPointIndex=T;const w=t.createBuffer(),A=S.__size,m=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,m),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],w=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let m=0,C=w.length;m<C;m++){const L=w[m];if(Array.isArray(L))for(let D=0,F=L.length;D<F;D++)p(L[D],m,D,A);else p(L,m,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,w,A){if(E(S,T,w,A)===!0){const m=S.__offset,C=S.value;if(Array.isArray(C)){let L=0;for(let D=0;D<C.length;D++){const F=C[D],K=u(F);_(F,S.__data,L),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,m,S.__data)}}function _(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function E(S,T,w,A){const m=S.value,C=T+"_"+w;if(A[C]===void 0)return typeof m=="number"||typeof m=="boolean"?A[C]=m:ArrayBuffer.isView(m)?A[C]=m.slice():A[C]=m.clone(),!0;{const L=A[C];if(typeof m=="number"||typeof m=="boolean"){if(L!==m)return A[C]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(L.equals(m)===!1)return L.copy(m),!0}}return!1}function g(S){const T=S.uniforms;let w=0;const A=16;for(let C=0,L=T.length;C<L;C++){const D=Array.isArray(T[C])?T[C]:[T[C]];for(let F=0,K=D.length;F<K;F++){const ne=D[F],z=Array.isArray(ne.value)?ne.value:[ne.value];for(let J=0,G=z.length;J<G;J++){const k=z[J],Z=u(k),re=w%A,Q=re%Z.boundary,de=re+Q;w+=Q,de!==0&&A-de<Z.storage&&(w+=A-de),ne.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=w,w+=Z.storage}}}const m=w%A;return m>0&&(w+=A-m),S.__size=w,S.__cache={},this}function u(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),T}function x(S){const T=S.target;T.removeEventListener("dispose",x);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const IT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function UT(){return ai===null&&(ai=new Ey(IT,16,16,$r,Bi),ai.name="DFG_LUT",ai.minFilter=sn,ai.magFilter=sn,ai.wrapS=Li,ai.wrapT=Li,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class FT{constructor(e={}){const{canvas:n=QS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const E=p,g=new Set([hh,fh,dh]),u=new Set([Tn,vi,ta,na,ch,uh]),x=new Uint32Array(4),y=new Int32Array(4),S=new B;let T=null,w=null;const A=[],m=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,F=null,K=null,ne=null,z=null;this._outputColorSpace=In;let J=0,G=0,k=null,Z=-1,re=null;const Q=new yt,de=new yt;let De=null;const He=new qe(0);let Ue=0,j=n.width,le=n.height,ae=1,oe=null,Ae=null;const Ne=new yt(0,0,j,le),ft=new yt(0,0,j,le);let Ge=!1;const ot=new xh;let Ze=!1,Ke=!1;const wt=new bt,Ct=new B,Nt=new yt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function xt(){return k===null?ae:1}let U=i;function jt(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ah}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Be,!1),U===null){const O="webgl2";if(U=jt(O,M),U===null)throw jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw tt("WebGLRenderer: "+M.message),M}let st,R,v,b,P,N,W,te,q,X,ce,Se,fe,he,be,ye,Le,I,pe,ee,me,ge,se;function Te(){st=new U1(U),st.init(),me=new AT(U,st),R=new b1(U,st,e,me),v=new wT(U,st),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),K=U.createFramebuffer(),ne=U.createFramebuffer(),z=U.createFramebuffer(),b=new k1(U),P=new uT,N=new TT(U,st,v,P,R,me,b),W=new I1(L),te=new Hy(U),ge=new T1(U,te),q=new F1(U,te,b,ge),X=new z1(U,q,te,ge,b),I=new B1(U,R,N),be=new C1(P),ce=new cT(L,W,st,R,ge,be),Se=new NT(L,P),fe=new fT,he=new vT(st),Le=new w1(L,W,v,X,_,l),ye=new ET(L,X,R),se=new DT(U,b,R,v),pe=new A1(U,st,b),ee=new O1(U,st,b),b.programs=ce.programs,L.capabilities=R,L.extensions=st,L.properties=P,L.renderLists=fe,L.shadowMap=ye,L.state=v,L.info=b}Te(),E!==Tn&&(C=new H1(E,n.width,n.height,a,r,s));const ie=new PT(L,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=st.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=st.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(j,le,!1))},this.getSize=function(M){return M.set(j,le)},this.setSize=function(M,O,Y=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,le=O,n.width=Math.floor(M*ae),n.height=Math.floor(O*ae),Y===!0&&(n.style.width=M+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(j*ae,le*ae).floor()},this.setDrawingBufferSize=function(M,O,Y){j=M,le=O,ae=Y,n.width=Math.floor(M*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(E===Tn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(Ne)},this.setViewport=function(M,O,Y,V){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,O,Y,V),v.viewport(Q.copy(Ne).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(ft)},this.setScissor=function(M,O,Y,V){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,O,Y,V),v.scissor(de.copy(ft).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){v.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,Y=!0){let V=0;if(M){let H=!1;if(k!==null){const xe=k.texture.format;H=g.has(xe)}if(H){const xe=k.texture.type,Ee=u.has(xe),ve=Le.getClearColor(),Ce=Le.getClearAlpha(),Re=ve.r,ze=ve.g,We=ve.b;Ee?(x[0]=Re,x[1]=ze,x[2]=We,x[3]=Ce,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Re,y[1]=ze,y[2]=We,y[3]=Ce,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Le.dispose(),fe.dispose(),he.dispose(),P.dispose(),W.dispose(),X.dispose(),ge.dispose(),se.dispose(),ce.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",no),ie.removeEventListener("sessionend",io),wr.stop()};function Fe(M){M.preventDefault(),jp("WebGLRenderer: Context Lost."),D=!0}function ke(){jp("WebGLRenderer: Context Restored."),D=!1;const M=b.autoReset,O=ye.enabled,Y=ye.autoUpdate,V=ye.needsUpdate,H=ye.type;Te(),b.autoReset=M,ye.enabled=O,ye.autoUpdate=Y,ye.needsUpdate=V,ye.type=H}function Be(M){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xe(M){const O=M.target;O.removeEventListener("dispose",Xe),Gn(O)}function Gn(M){Sn(M),P.remove(M)}function Sn(M){const O=P.get(M).programs;O!==void 0&&(O.forEach(function(Y){ce.releaseProgram(Y)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,Y,V,H,xe){O===null&&(O=Ft);const Ee=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=G_(M,O,Y,V,H);v.setMaterial(V,Ee);let Ce=Y.index,Re=1;if(V.wireframe===!0){if(Ce=q.getWireframeAttribute(Y),Ce===void 0)return;Re=2}const ze=Y.drawRange,We=Y.attributes.position;let Pe=ze.start*Re,ct=(ze.start+ze.count)*Re;xe!==null&&(Pe=Math.max(Pe,xe.start*Re),ct=Math.min(ct,(xe.start+xe.count)*Re)),Ce!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Ce.count)):We!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,We.count));const Rt=ct-Pe;if(Rt<0||Rt===1/0)return;ge.setup(H,V,ve,Y,Ce);let Tt,ut=pe;if(Ce!==null&&(Tt=te.get(Ce),ut=ee,ut.setIndex(Tt)),H.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*xt()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(H.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),v.setLineWidth(Jt*xt()),H.isLineSegments?ut.setMode(U.LINES):H.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else H.isPoints?ut.setMode(U.POINTS):H.isSprite&&ut.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Jt=H._multiDrawStarts,Me=H._multiDrawCounts,yn=H._multiDrawCount,et=Ce?te.get(Ce).bytesPerElement:1,Ln=P.get(V).currentProgram.getUniforms();for(let ri=0;ri<yn;ri++)Ln.setValue(U,"_gl_DrawID",ri),ut.render(Jt[ri]/et,Me[ri])}else if(H.isInstancedMesh)ut.renderInstances(Pe,Rt,H.count);else if(Y.isInstancedBufferGeometry){const Jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,Jt);ut.renderInstances(Pe,Rt,Me)}else ut.render(Pe,Rt)};function Si(M,O,Y){M.transparent===!0&&M.side===Ci&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,pa(M,O,Y),M.side=vr,M.needsUpdate=!0,pa(M,O,Y),M.side=Ci):pa(M,O,Y)}this.compile=function(M,O,Y=null){Y===null&&(Y=M),w=he.get(Y),w.init(O),m.push(w),Y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),M!==Y&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const ve=xe[Ee];Si(ve,Y,H),V.add(ve)}else Si(xe,Y,H),V.add(xe)}),w=m.pop(),V},this.compileAsync=function(M,O,Y=null){const V=this.compile(M,O,Y);return new Promise(H=>{function xe(){if(V.forEach(function(Ee){P.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){H(M);return}setTimeout(xe,10)}st.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Er=null;function to(M){Er&&Er(M)}function no(){wr.stop()}function io(){wr.start()}const wr=new D_;wr.setAnimationLoop(to),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(M){Er=M,ie.setAnimationLoop(M),M===null?wr.stop():wr.start()},ie.addEventListener("sessionstart",no),ie.addEventListener("sessionend",io),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(M,O);const Y=ie.enabled===!0&&ie.isPresenting===!0,V=C!==null&&(k===null||Y)&&C.begin(L,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,O,k),w=he.get(M,m.length),w.init(O),w.state.textureUnits=N.getTextureUnits(),m.push(w),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ot.setFromProjectionMatrix(wt,fi,O.reversedDepth),Ke=this.localClippingEnabled,Ze=be.init(this.clippingPlanes,Ke),T=fe.get(M,A.length),T.init(),A.push(T),ie.enabled===!0&&ie.isPresenting===!0){const Ee=L.xr.getDepthSensingMesh();Ee!==null&&pc(Ee,O,-1/0,L.sortObjects)}pc(M,O,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(oe,Ae,O.reversedDepth),_t=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,_t&&Le.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&be.beginShadows();const H=w.state.shadowsArray;if(ye.render(H,M,O),Ze===!0&&be.endShadows(),(V&&C.hasRenderPass())===!1){const Ee=T.opaque,ve=T.transmissive;if(w.setupLights(),O.isArrayCamera){const Ce=O.cameras;if(ve.length>0)for(let Re=0,ze=Ce.length;Re<ze;Re++){const We=Ce[Re];Rh(Ee,ve,M,We)}_t&&Le.render(M);for(let Re=0,ze=Ce.length;Re<ze;Re++){const We=Ce[Re];Ch(T,M,We,We.viewport)}}else ve.length>0&&Rh(Ee,ve,M,O),_t&&Le.render(M),Ch(T,M,O)}k!==null&&G===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),V&&C.end(L),M.isScene===!0&&M.onAfterRender(L,M,O),ge.resetDefaultState(),Z=-1,re=null,m.pop(),m.length>0?(w=m[m.length-1],N.setTextureUnits(w.state.textureUnits),Ze===!0&&be.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,F!==null&&F.renderEnd()};function pc(M,O,Y,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){V&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);const Ee=X.update(M),ve=M.material;ve.visible&&T.push(M,Ee,ve,Y,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const Ee=X.update(M),ve=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Nt.copy(Ee.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(ve)){const Ce=Ee.groups;for(let Re=0,ze=Ce.length;Re<ze;Re++){const We=Ce[Re],Pe=ve[We.materialIndex];Pe&&Pe.visible&&T.push(M,Ee,Pe,Y,Nt.z,We)}}else ve.visible&&T.push(M,Ee,ve,Y,Nt.z,null)}}const xe=M.children;for(let Ee=0,ve=xe.length;Ee<ve;Ee++)pc(xe[Ee],O,Y,V)}function Ch(M,O,Y,V){const{opaque:H,transmissive:xe,transparent:Ee}=M;w.setupLightsView(Y),Ze===!0&&be.setGlobalState(L.clippingPlanes,Y),V&&v.viewport(Q.copy(V)),H.length>0&&ha(H,O,Y),xe.length>0&&ha(xe,O,Y),Ee.length>0&&ha(Ee,O,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Rh(M,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Pe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new gi(1,1,{generateMipmaps:!0,type:Pe?Bi:Tn,minFilter:Or,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const xe=w.state.transmissionRenderTarget[V.id],Ee=V.viewport||Q;xe.setSize(Ee.z*L.transmissionResolutionScale,Ee.w*L.transmissionResolutionScale);const ve=L.getRenderTarget(),Ce=L.getActiveCubeFace(),Re=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(He),Ue=L.getClearAlpha(),Ue<1&&L.setClearColor(16777215,.5),L.clear(),_t&&Le.render(Y);const ze=L.toneMapping;L.toneMapping=mi;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Ze===!0&&be.setGlobalState(L.clippingPlanes,V),ha(M,Y,V),N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Rt=O.length;ct<Rt;ct++){const Tt=O[ct],{object:ut,geometry:Jt,material:Me,group:yn}=Tt;if(Me.side===Ci&&ut.layers.test(V.layers)){const et=Me.side;Me.side=xn,Me.needsUpdate=!0,Ph(ut,Y,V,Jt,Me,yn),Me.side=et,Me.needsUpdate=!0,Pe=!0}}Pe===!0&&(N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe))}L.setRenderTarget(ve,Ce,Re),L.setClearColor(He,Ue),We!==void 0&&(V.viewport=We),L.toneMapping=ze}function ha(M,O,Y){const V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=M.length;H<xe;H++){const Ee=M[H],{object:ve,geometry:Ce,group:Re}=Ee;let ze=Ee.material;ze.allowOverride===!0&&V!==null&&(ze=V),ve.layers.test(Y.layers)&&Ph(ve,O,Y,Ce,ze,Re)}}function Ph(M,O,Y,V,H,xe){M.onBeforeRender(L,O,Y,V,H,xe),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(L,O,Y,V,M,xe),H.transparent===!0&&H.side===Ci&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,L.renderBufferDirect(Y,O,V,H,M,xe),H.side=vr,H.needsUpdate=!0,L.renderBufferDirect(Y,O,V,H,M,xe),H.side=Ci):L.renderBufferDirect(Y,O,V,H,M,xe),M.onAfterRender(L,O,Y,V,H,xe)}function pa(M,O,Y){O.isScene!==!0&&(O=Ft);const V=P.get(M),H=w.state.lights,xe=w.state.shadowsArray,Ee=H.state.version,ve=ce.getParameters(M,H.state,xe,O,Y,w.state.lightProbeGridArray),Ce=ce.getProgramCacheKey(ve);let Re=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=W.get(M.envMap||V.environment,ze),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Xe),Re=new Map,V.programs=Re);let We=Re.get(Ce);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===Ee)return Nh(M,ve),We}else ve.uniforms=ce.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,Y,ve),M.onBeforeCompile(ve,L),We=ce.acquireProgram(ve,Ce),Re.set(Ce,We),V.uniforms=ve.uniforms;const Pe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=be.uniform),Nh(M,ve),V.needsLights=X_(M),V.lightsStateVersion=Ee,V.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=We,V.uniformsList=null,We}function Lh(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=vl.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Nh(M,O){const Y=P.get(M);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function H_(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let Y=0,V=M.length;Y<V;Y++){const H=M[Y];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function G_(M,O,Y,V,H){O.isScene!==!0&&(O=Ft),N.resetTextureUnits();const xe=O.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ve=k===null?L.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:je.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=W.get(V.envMap||Ee,Ce),ze=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color;let Tt=mi;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=L.toneMapping);const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Jt=ut!==void 0?ut.length:0,Me=P.get(V),yn=w.state.lights;if(Ze===!0&&(Ke===!0||M!==re)){const ht=M===re&&V.id===Z;be.setState(V,M,ht)}let et=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==yn.state.version||Me.outputColorSpace!==ve||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==Re||V.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==be.numPlanes||Me.numIntersection!==be.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==We||Me.morphTargets!==Pe||Me.morphNormals!==ct||Me.morphColors!==Rt||Me.toneMapping!==Tt||Me.morphTargetsCount!==Jt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Me.__version=V.version);let Ln=Me.currentProgram;et===!0&&(Ln=pa(V,O,H),F&&V.isNodeMaterial&&F.onUpdateProgram(V,Ln,Me));let ri=!1,Hi=!1,Qr=!1;const dt=Ln.getUniforms(),Pt=Me.uniforms;if(v.useProgram(Ln.program)&&(ri=!0,Hi=!0,Qr=!0),V.id!==Z&&(Z=V.id,Hi=!0),Me.needsLights){const ht=H_(w.state.lightProbeGridArray,H);Me.lightProbeGrid!==ht&&(Me.lightProbeGrid=ht,Hi=!0)}if(ri||re!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",M.projectionMatrix),dt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Wi=dt.map.cameraPosition;Wi!==void 0&&Wi.setValue(U,Ct.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),re!==M&&(re=M,Hi=!0,Qr=!0)}if(Me.needsLights&&(yn.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",yn.state.directionalShadowMap,N),yn.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",yn.state.spotShadowMap,N),yn.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",yn.state.pointShadowMap,N)),H.isSkinnedMesh){dt.setOptional(U,H,"bindMatrix"),dt.setOptional(U,H,"bindMatrixInverse");const ht=H.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),dt.setValue(U,"boneTexture",ht.boneTexture,N))}H.isBatchedMesh&&(dt.setOptional(U,H,"batchingTexture"),dt.setValue(U,"batchingTexture",H._matricesTexture,N),dt.setOptional(U,H,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",H._indirectTexture,N),dt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",H._colorsTexture,N));const Gi=Y.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&I.update(H,Y,Ln),(Hi||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,dt.setValue(U,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=UT()),Hi){if(dt.setValue(U,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&W_(Pt,Qr),xe&&V.fog===!0&&Se.refreshFogUniforms(Pt,xe),Se.refreshMaterialUniforms(Pt,V,ae,le,w.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.lightProbeGrid){const ht=Me.lightProbeGrid;Pt.probesSH.value=ht.texture,Pt.probesMin.value.copy(ht.boundingBox.min),Pt.probesMax.value.copy(ht.boundingBox.max),Pt.probesResolution.value.copy(ht.resolution)}vl.upload(U,Lh(Me),Pt,N)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vl.upload(U,Lh(Me),Pt,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(U,"center",H.center),dt.setValue(U,"modelViewMatrix",H.modelViewMatrix),dt.setValue(U,"normalMatrix",H.normalMatrix),dt.setValue(U,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ht=V.uniformsGroups;for(let Wi=0,es=ht.length;Wi<es;Wi++){const Dh=ht[Wi];se.update(Dh,Ln),se.bind(Dh,Ln)}}return Ln}function W_(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function X_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,O,Y){const V=P.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),P.get(M.texture).__webglTexture=O,P.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const Y=P.get(M);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,Y=0){k=M,J=O,G=Y;let V=null,H=!1,xe=!1;if(M){const ve=P.get(M);if(ve.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),Q.copy(M.viewport),de.copy(M.scissor),De=M.scissorTest,v.viewport(Q),v.scissor(de),v.setScissorTest(De),Z=-1;return}else if(ve.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(ve.__hasExternalTextures)N.rebindTextures(M,P.get(M.texture).__webglTexture,P.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(ve.__boundDepthTexture!==ze){if(ze!==null&&P.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Re=P.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?V=Re[O][Y]:V=Re[O],H=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?V=P.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[Y]:V=Re,Q.copy(M.viewport),de.copy(M.scissor),De=M.scissorTest}else Q.copy(Ne).multiplyScalar(ae).floor(),de.copy(ft).multiplyScalar(ae).floor(),De=Ge;if(Y!==0&&(V=K),v.bindFramebuffer(U.FRAMEBUFFER,V)&&v.drawBuffers(M,V),v.viewport(Q),v.scissor(de),v.setScissorTest(De),H){const ve=P.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,Y)}else if(xe){const ve=O;for(let Ce=0;Ce<M.textures.length;Ce++){const Re=P.get(M.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Re.__webglTexture,Y,ve)}}else if(M!==null&&Y!==0){const ve=P.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,Y)}Z=-1},this.readRenderTargetPixels=function(M,O,Y,V,H,xe,Ee,ve=0){if(!(M&&M.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=P.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){v.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Re=M.textures[ve],ze=Re.format,We=Re.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(ze)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(We)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&Y>=0&&Y<=M.height-H&&U.readPixels(O,Y,V,H,me.convert(ze),me.convert(We),xe)}finally{const Re=k!==null?P.get(k).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,O,Y,V,H,xe,Ee,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=P.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(O>=0&&O<=M.width-V&&Y>=0&&Y<=M.height-H){v.bindFramebuffer(U.FRAMEBUFFER,Ce);const Re=M.textures[ve],ze=Re.format,We=Re.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),U.readPixels(O,Y,V,H,me.convert(ze),me.convert(We),0);const ct=k!==null?P.get(k).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,ct);const Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ey(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe),U.deleteBuffer(Pe),U.deleteSync(Rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,Y=0){const V=Math.pow(2,-Y),H=Math.floor(M.image.width*V),xe=Math.floor(M.image.height*V),Ee=O!==null?O.x:0,ve=O!==null?O.y:0;N.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ee,ve,H,xe),v.unbindTexture()},this.copyTextureToTexture=function(M,O,Y=null,V=null,H=0,xe=0){let Ee,ve,Ce,Re,ze,We,Pe,ct,Rt;const Tt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(Y!==null)Ee=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,ze=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const Pt=Math.pow(2,-H);Ee=Math.floor(Tt.width*Pt),ve=Math.floor(Tt.height*Pt),M.isDataArrayTexture?Ce=Tt.depth:M.isData3DTexture?Ce=Math.floor(Tt.depth*Pt):Ce=1,Re=0,ze=0,We=0}V!==null?(Pe=V.x,ct=V.y,Rt=V.z):(Pe=0,ct=0,Rt=0);const ut=me.convert(O.format),Jt=me.convert(O.type);let Me;O.isData3DTexture?(N.setTexture3D(O,0),Me=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),Me=U.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),Me=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const yn=v.getParameter(U.UNPACK_ROW_LENGTH),et=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=v.getParameter(U.UNPACK_SKIP_PIXELS),ri=v.getParameter(U.UNPACK_SKIP_ROWS),Hi=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(U.UNPACK_SKIP_ROWS,ze),v.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Qr=M.isDataArrayTexture||M.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Pt=P.get(M),Gi=P.get(O),ht=P.get(Pt.__renderTarget),Wi=P.get(Gi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ht.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let es=0;es<Ce;es++)Qr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(M).__webglTexture,H,We+es),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(O).__webglTexture,xe,Rt+es)),U.blitFramebuffer(Re,ze,Ee,ve,Pe,ct,Ee,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||P.has(M)){const Pt=P.get(M),Gi=P.get(O);v.bindFramebuffer(U.READ_FRAMEBUFFER,ne),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let ht=0;ht<Ce;ht++)Qr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,H,We+ht):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,H),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gi.__webglTexture,xe,Rt+ht):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gi.__webglTexture,xe),H!==0?U.blitFramebuffer(Re,ze,Ee,ve,Pe,ct,Ee,ve,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(Me,xe,Pe,ct,Rt+ht,Re,ze,Ee,ve):U.copyTexSubImage2D(Me,xe,Pe,ct,Re,ze,Ee,ve);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Me,xe,Pe,ct,Rt,Ee,ve,Ce,ut,Jt,Tt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,xe,Pe,ct,Rt,Ee,ve,Ce,ut,Tt.data):U.texSubImage3D(Me,xe,Pe,ct,Rt,Ee,ve,Ce,ut,Jt,Tt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xe,Pe,ct,Ee,ve,ut,Jt,Tt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xe,Pe,ct,Tt.width,Tt.height,ut,Tt.data):U.texSubImage2D(U.TEXTURE_2D,xe,Pe,ct,Ee,ve,ut,Jt,Tt);v.pixelStorei(U.UNPACK_ROW_LENGTH,yn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),v.pixelStorei(U.UNPACK_SKIP_ROWS,ri),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Hi),xe===0&&O.generateMipmaps&&U.generateMipmap(Me),v.unbindTexture()},this.initRenderTarget=function(M){P.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){J=0,G=0,k=null,v.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const OT=`build-${new Date().toISOString()}`,V_="mini-golf-3d-leaderboard-v1",yu="Guest Golfer",Ji=.35,Hm=.18,el=13,kT=.75,Zn=1/60,Gm=.4,Mu=100,Eu=8,wu=26,ff=()=>[{type:"bounce_pad",count:0},{type:"speed_boost",count:0},{type:"hole_in_one",count:0}],it=t=>JSON.parse(JSON.stringify(t)),BT=t=>({x:Ot(t.x),y:Ot(t.y),z:Ot(t.z)}),rt=(t,e,n)=>({x:t,y:e,z:n}),Ot=t=>Number(t.toFixed(4)),Tu=(t,e,n)=>Math.min(n,Math.max(e,t)),Au=(t,e)=>Math.hypot(t.x-e.x,t.z-e.z),Wm=(t,e)=>t.slice().sort((n,i)=>{const r=e(n)-e(i);if(r!==0)return r;const s=n.achievedAt-i.achievedAt;return s!==0?s:n.playerId.localeCompare(i.playerId)}).map((n,i)=>({...n,rank:i+1})),Qi={forest:{id:"forest",name:"森林回旋谷",theme:"Forest",par:4,bounds:{minX:-17,maxX:17,minZ:-27,maxZ:15},spawn:rt(0,.35,12),hole:{x:0,y:0,z:-21,radius:.7},ambient:"#10331f",sky:"#0f172a",fairway:"#3f7f45",surfaces:[{id:"forest-fairway",type:"grass",friction:.9,bounds:{minX:-14,maxX:14,minZ:-24,maxZ:14}},{id:"forest-bunker",type:"sand",friction:3.4,bounds:{minX:-6.8,maxX:-1.3,minZ:-9,maxZ:-2.5}},{id:"forest-bunker-2",type:"sand",friction:3.6,bounds:{minX:2.2,maxX:8.2,minZ:-18.5,maxZ:-12.3}}],obstacles:[{id:"tree-1",type:"tree",position:rt(-5.8,.8,4.8),solid:!0,radius:1.25,height:3},{id:"tree-2",type:"tree",position:rt(5.6,.8,-4.6),solid:!0,radius:1.2,height:3.2},{id:"rock-1",type:"rock",position:rt(.2,.55,-12.3),solid:!0,radius:1.15,height:1.1},{id:"rock-2",type:"rock",position:rt(-8.6,.55,-16.2),solid:!0,radius:1.3,height:1.15}],terrainFeatures:[{id:"ridge-forest-left",kind:"mound",center:rt(-9,0,-3),radius:3.5,height:.65},{id:"ridge-forest-right",kind:"mound",center:rt(8,0,-14),radius:3.8,height:.7}],powerups:[{id:"forest-speed",type:"speed_boost",position:rt(7.5,.18,3)},{id:"forest-hio",type:"hole_in_one",position:rt(-10.5,.18,-7.2)},{id:"forest-pad",type:"bounce_pad",position:rt(3.6,.08,-14.5)}]},desert:{id:"desert",name:"沙漠风暴坑",theme:"Desert",par:5,bounds:{minX:-18,maxX:18,minZ:-28,maxZ:16},spawn:rt(-11,.35,13),hole:{x:9,y:0,z:-22,radius:.76},ambient:"#4b2d12",sky:"#1f2937",fairway:"#6f9b56",surfaces:[{id:"desert-fairway",type:"grass",friction:.86,bounds:{minX:-16,maxX:15,minZ:-25,maxZ:14}},{id:"desert-bunker-main",type:"sand",friction:3.5,bounds:{minX:-4.5,maxX:5.5,minZ:-6.5,maxZ:4.5}},{id:"desert-bunker-hole",type:"sand",friction:3.7,bounds:{minX:5.5,maxX:14.5,minZ:-24.5,maxZ:-15.5}}],obstacles:[{id:"dune-1",type:"dune",position:rt(-8.2,.8,-2.2),solid:!0,radius:1.55,height:1.6},{id:"dune-2",type:"dune",position:rt(1.7,.8,-11.7),solid:!0,radius:1.75,height:1.5},{id:"stone-arch",type:"rock",position:rt(9.5,.9,-8.6),solid:!0,radius:1.45,height:2.4},{id:"stone-2",type:"rock",position:rt(-13.2,.7,-15.2),solid:!0,radius:1.35,height:1.4}],terrainFeatures:[{id:"desert-slope",kind:"slope",axis:"x",strength:.06,region:{minX:-16,maxX:15,minZ:-25,maxZ:14}},{id:"desert-dune-ridge",kind:"mound",center:rt(4.5,0,-17),radius:4,height:.75}],powerups:[{id:"desert-speed",type:"speed_boost",position:rt(-1.4,.18,10),direction:{x:.95,z:-.2}},{id:"desert-hio",type:"hole_in_one",position:rt(-14.4,.18,-10.2)},{id:"desert-pad",type:"bounce_pad",position:rt(10.4,.08,-16.2)}]},snow:{id:"snow",name:"冰雪极光岭",theme:"Snow",par:4,bounds:{minX:-18,maxX:18,minZ:-28,maxZ:18},spawn:rt(0,.35,14),hole:{x:-12,y:0,z:-21,radius:.72},ambient:"#163851",sky:"#020617",fairway:"#b0d6ff",surfaces:[{id:"snow-grass",type:"grass",friction:.88,bounds:{minX:-16,maxX:16,minZ:-25,maxZ:16}},{id:"snow-ice-main",type:"ice",friction:.1,bounds:{minX:-6.5,maxX:7.5,minZ:-15.5,maxZ:8.5}},{id:"snow-ice-lane",type:"ice",friction:.09,bounds:{minX:-15.5,maxX:-8.5,minZ:-24.5,maxZ:-12.5}},{id:"snow-sand-bank",type:"sand",friction:3.6,bounds:{minX:8.5,maxX:14.5,minZ:-11.5,maxZ:-3.5}}],obstacles:[{id:"snowbank-1",type:"snowbank",position:rt(10.8,.9,6.4),solid:!0,radius:1.5,height:1.55},{id:"snowbank-2",type:"snowbank",position:rt(-4.2,.8,-4.6),solid:!0,radius:1.45,height:1.5},{id:"ice-crystal-1",type:"ice_crystal",position:rt(4.5,1,-18),solid:!0,radius:1.2,height:2.7},{id:"ice-crystal-2",type:"ice_crystal",position:rt(-10,1,-9),solid:!0,radius:1.25,height:2.8}],terrainFeatures:[{id:"snow-ridge",kind:"mound",center:rt(8,0,7),radius:4,height:.7},{id:"ice-channel",kind:"slope",axis:"z",strength:-.045,region:{minX:-6.5,maxX:7.5,minZ:-15.5,maxZ:8.5}}],powerups:[{id:"snow-speed",type:"speed_boost",position:rt(1.5,.18,7),direction:{x:-.2,z:-1}},{id:"snow-hio",type:"hole_in_one",position:rt(12.5,.18,-7.5)},{id:"snow-pad",type:"bounce_pad",position:rt(-10.5,.08,-16.8)}]}},Xm=()=>({levelBest:{forest:[],desert:[],snow:[]},overall:[],persisted:!1}),zT=()=>{var t,e,n;try{const i=localStorage.getItem(V_);if(!i)return Xm();const r=JSON.parse(i);return{levelBest:{forest:((t=r.levelBest)==null?void 0:t.forest)??[],desert:((e=r.levelBest)==null?void 0:e.desert)??[],snow:((n=r.levelBest)==null?void 0:n.snow)??[]},overall:r.overall??[],persisted:!0}}catch{return Xm()}},gs=(t,e)=>{var n;return((n=t.find(i=>i.type===e))==null?void 0:n.count)??0},_s=(t,e,n)=>t.map(i=>i.type===e?{...i,count:Math.max(0,i.count+n)}:i),Ym=(t,e)=>Array.from({length:t},(n,i)=>({id:`P${i+1}`,name:`玩家 ${i+1}`,holeStrokes:0,totalStrokes:0,finished:!1,ballPosition:it(e),powerupInventory:ff(),armedPowerup:null,collectedPowerupIds:[],placedBouncePads:[]}));function Dn(t,e,n){let i=0;for(const r of t.terrainFeatures){if(r.kind==="mound"&&r.center&&r.radius&&r.height){const s=r.center,o=r.radius,a=Math.hypot(e-s.x,n-s.z);a<o&&(i+=(1-a/o)*r.height)}if(r.kind==="slope"&&r.region&&r.axis&&r.strength){const s=r.region;e>=s.minX&&e<=s.maxX&&n>=s.minZ&&n<=s.maxZ&&(r.axis==="x"?i+=((e-s.minX)/Math.max(1,s.maxX-s.minX)-.5)*r.strength*14:i+=((n-s.minZ)/Math.max(1,s.maxZ-s.minZ)-.5)*r.strength*14)}}return i}function So(t,e){for(let n=t.surfaces.length-1;n>=0;n-=1){const i=t.surfaces[n];if(i.bounds){const{minX:r,maxX:s,minZ:o,maxZ:a}=i.bounds;if(e.x>=r&&e.x<=s&&e.z>=o&&e.z<=a)return i}}return t.surfaces[0]}function VT(t,e,n,i,r,s){const o=Date.now(),a={...t.levelBest},l=a[e].find(p=>p.playerId===n);if(!l||r<l.strokes){const p=a[e].filter(_=>_.playerId!==n);a[e]=Wm([...p,{playerId:n,playerName:i,strokes:r,rank:0,par:s,relativeToPar:r-s,achievedAt:(l==null?void 0:l.achievedAt)??o}],_=>_.strokes)}const f=new Map;Object.keys(a).forEach(p=>{a[p].forEach(_=>{const E=f.get(_.playerId)??{playerName:_.playerName,levelStrokes:{},achievedAt:_.achievedAt};E.levelStrokes[p]=_.strokes,E.achievedAt=Math.min(E.achievedAt,_.achievedAt),f.set(_.playerId,E)})});const h=Wm(Array.from(f.entries()).filter(([,p])=>p.levelStrokes.forest&&p.levelStrokes.desert&&p.levelStrokes.snow).map(([p,_])=>({playerId:p,playerName:_.playerName,levelStrokes:{forest:_.levelStrokes.forest,desert:_.levelStrokes.desert,snow:_.levelStrokes.snow},totalStrokes:_.levelStrokes.forest+_.levelStrokes.desert+_.levelStrokes.snow,rank:0,achievedAt:_.achievedAt})),p=>p.totalStrokes),d={levelBest:a,overall:h,persisted:!0};return localStorage.setItem(V_,JSON.stringify(d)),d}function HT(){const t=Ye.useRef(null),e=Ye.useRef({pickups:new Map,obstacles:new Map,bouncePads:new Map}),n=Ye.useRef(0),i=Ye.useRef({fixedStep:Zn,accumulator:0,simulationTick:0,renderFrame:0,reactCommitCount:0,logicLoopCount:0,listenerCount:0,runtimeMountCount:0,runtimeCleanupCount:0,engineGeneration:1,poolStats:{pickups:{capacity:12,createdTotal:0,reused:0},obstacles:{capacity:24,createdTotal:0,reused:0},bouncePads:{capacity:12,createdTotal:0,reused:0}}}),[r,s]=Ye.useState("menu"),[o,a]=Ye.useState("single"),[l,c]=Ye.useState("forest"),[f,h]=Ye.useState(2),[d,p]=Ye.useState(0),[_,E]=Ye.useState(14),g=1,[u,x]=Ye.useState(()=>zT()),[y,S]=Ye.useState(0),[T,w]=Ye.useState(0),[A,m]=Ye.useState(0),[C,L]=Ye.useState(0),[D,F]=Ye.useState(""),[K,ne]=Ye.useState(""),[z,J]=Ye.useState("无"),[G,k]=Ye.useState("待机"),[Z,re]=Ye.useState("拖动球附近区域开始瞄准"),[Q,de]=Ye.useState({position:it(Qi.forest.spawn),velocity:rt(0,0,0),speed:0,radius:Ji,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:"grass",friction:Qi.forest.surfaces[0].friction,lastCollision:null,lastSafePosition:it(Qi.forest.spawn)}),[De,He]=Ye.useState({dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,direction:{x:0,z:-1},power:0,minPower:Gm,maxPower:Mu,strokeCount:0}),[Ue,j]=Ye.useState({enabled:!1,mode:"local",status:"setup",playerCount:2,currentPlayerId:null,turnIndex:0,round:1,revision:0,players:Ym(2,Qi.forest.spawn),winnerId:null,tiedPlayerIds:[]}),[le,ae]=Ye.useState({items:Qi.forest.powerups.map(b=>({...b,active:!0,collected:!1})),inventory:ff(),activeEffect:null,lastTriggeredId:null,placingType:null,armedType:null,selectedPlacedId:null}),oe=Qi[l],Ae=Ue.players[Ue.turnIndex]??null;Ye.useEffect(()=>{n.current+=1,i.current.reactCommitCount=n.current});const Ne=Ye.useMemo(()=>({ready:!0,gameState:r,mode:o,currentLevel:oe?{id:oe.id,name:oe.name,theme:oe.theme,par:oe.par}:null,currentHoleStrokes:De.strokeCount,totalStrokes:A,currentScore:y,totalScore:T,holeComplete:Q.inHole,elapsedTime:Ot(d)}),[Q.inHole,oe,y,d,r,o,De.strokeCount,T,A]),ft=Ye.useMemo(()=>{var b;return{levelId:oe.id,name:oe.name,theme:oe.theme,par:oe.par,bounds:it(oe.bounds),spawn:it(oe.spawn),hole:it(oe.hole),surfaces:it(oe.surfaces),obstacles:it(oe.obstacles),terrainFeatures:it(oe.terrainFeatures),obstacleCount:oe.obstacles.length,sceneObjectCount:((b=e.current.scene)==null?void 0:b.children.length)??0,loaded:!!e.current.scene}},[oe]),Ge=Ye.useMemo(()=>{const b=e.current.camera,P=Q.position;return{mode:"follow",position:b?BT(b.position):{x:0,y:_*.72,z:_},target:it(P),distance:Ot(_),minDistance:Eu,maxDistance:wu,zoom:Ot(g),angle:-Math.PI/2,pitch:.62}},[Q.position,_,g]);Ye.useEffect(()=>{const b=t.current;if(!b)return;i.current.runtimeMountCount+=1;const P=new gy;P.background=new qe(oe.sky),P.fog=new _h(oe.sky,16,56);const N=new On(55,b.clientWidth/Math.max(1,b.clientHeight),.1,200);N.position.set(0,11,14);const W=new FT({antialias:!0,alpha:!1});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(b.clientWidth,b.clientHeight),W.shadowMap.enabled=!0,b.innerHTML="",b.appendChild(W.domElement);const te=new Uy(13428735,2109472,1.1);P.add(te);const q=new ky(16777215,1.5);q.position.set(8,16,10),q.castShadow=!0,P.add(q);const X=new Ao;P.add(X);const ce=new It(new fa(38,54,64,64),new $n({color:new qe(oe.fairway),roughness:.95,metalness:.02}));ce.rotation.x=-Math.PI/2,ce.receiveShadow=!0;const Se=ce.geometry,fe=Se.attributes.position;for(let ie=0;ie<fe.count;ie+=1){const Fe=fe.getX(ie),ke=fe.getY(ie);fe.setZ(ie,Dn(oe,Fe,-ke))}fe.needsUpdate=!0,Se.computeVertexNormals(),X.add(ce),oe.surfaces.forEach(ie=>{if(!ie.bounds||ie.type==="grass")return;const Fe=ie.bounds.maxX-ie.bounds.minX,ke=ie.bounds.maxZ-ie.bounds.minZ,Be=(ie.bounds.minX+ie.bounds.maxX)/2,Xe=(ie.bounds.minZ+ie.bounds.maxZ)/2,Gn=ie.type==="sand"?"#d6b06b":"#9fe3ff",Sn=new It(new Zr(Fe,.08,ke),new $n({color:Gn,transparent:!0,opacity:ie.type==="ice"?.86:.94,roughness:ie.type==="ice"?.15:.9}));Sn.position.set(Be,Dn(oe,Be,Xe)+.02,Xe),Sn.receiveShadow=!0,X.add(Sn)});const he=new It(new Br(oe.hole.radius,oe.hole.radius*1.05,.5,24),new $n({color:1118481,roughness:.35}));he.position.set(oe.hole.x,-.18+Dn(oe,oe.hole.x,oe.hole.z),oe.hole.z),X.add(he);const be=new It(new Br(.05,.05,3.2,12),new $n({color:16317180}));be.position.set(oe.hole.x,1.6+Dn(oe,oe.hole.x,oe.hole.z),oe.hole.z);const ye=new It(new Zr(.95,.46,.04),new $n({color:15680580}));ye.position.set(oe.hole.x+.45,2.55+Dn(oe,oe.hole.x,oe.hole.z),oe.hole.z),X.add(be,ye);const Le=new It(new Oo(Ji,28,28),new $n({color:16777215,roughness:.45,metalness:.05}));Le.castShadow=!0,Le.receiveShadow=!0,X.add(Le);const I=new Map;oe.obstacles.forEach(ie=>{let Fe;if(ie.type==="tree"){Fe=new It(new Br(ie.radius?ie.radius*.5:.6,ie.radius?ie.radius*.7:.8,ie.height??3,16),new $n({color:"#6b4f2b"}));const ke=new It(new Oo((ie.radius??1)*1.15,20,20),new $n({color:"#14532d"}));ke.position.set(ie.position.x,ie.position.y+1.8,ie.position.z),ke.castShadow=!0,X.add(ke)}else ie.type==="ice_crystal"?Fe=new It(new Sh(ie.radius??1,ie.height??2.6,6),new $n({color:"#a5f3fc",emissive:"#164e63",roughness:.15,metalness:.2})):Fe=new It(new Oo(ie.radius??1.2,16,16),new $n({color:ie.type==="dune"?"#c58b42":ie.type==="snowbank"?"#e2ecf7":"#7c7c7c",roughness:.95}));Fe.position.set(ie.position.x,ie.position.y,ie.position.z),Fe.castShadow=!0,Fe.receiveShadow=!0,X.add(Fe),I.set(ie.id,Fe)});const pe=new Map;oe.powerups.forEach(ie=>{const Fe=ie.type==="hole_in_one"?"#f59e0b":ie.type==="speed_boost"?"#22d3ee":"#a855f7",ke=new It(ie.type==="bounce_pad"?new Br(.7,.7,.2,18):new yh(.34,.12,64,8),new $n({color:Fe,emissive:Fe,emissiveIntensity:.2,roughness:.35}));ke.position.set(ie.position.x,ie.position.y+.3,ie.position.z),X.add(ke),pe.set(ie.id,ke)}),e.current={...e.current,ballMesh:Le,holeMesh:he,holeFlag:ye,group:X,pickups:pe,obstacles:I,renderer:W,camera:N,scene:P},window.__THREE_SCENE__=P,window.__THREE_RENDERER__=W;const ee=()=>{if(!t.current||!e.current.renderer||!e.current.camera)return;const ie=t.current.clientWidth,Fe=t.current.clientHeight;e.current.renderer.setSize(ie,Fe),e.current.camera.aspect=ie/Math.max(1,Fe),e.current.camera.updateProjectionMatrix()};window.addEventListener("resize",ee),i.current.listenerCount+=1;let me=0,ge=performance.now(),se=0;const Te=ie=>{const Fe=Math.min(.05,(ie-ge)/1e3);for(ge=ie,se+=Fe,i.current.accumulator=se,i.current.logicLoopCount+=1,p(Xe=>r==="playing"?Xe+Fe:Xe),e.current.ballMesh&&e.current.ballMesh.position.set(Q.position.x,Q.position.y,Q.position.z);se>=Zn;)se-=Zn,i.current.simulationTick+=1;i.current.accumulator=se;const ke=new B(Q.position.x,Q.position.y+.2,Q.position.z),Be=new B(Q.position.x,Q.position.y+_*.72,Q.position.z+_);N.position.lerp(Be,.08),N.lookAt(ke),N.zoom=g,N.updateProjectionMatrix(),pe.forEach(Xe=>{Xe.rotation.y+=.02}),W.render(P,N),i.current.renderFrame+=1,me=window.requestAnimationFrame(Te)};return me=window.requestAnimationFrame(Te),ee(),()=>{window.removeEventListener("resize",ee),i.current.runtimeCleanupCount+=1,W.dispose(),b.innerHTML="",cancelAnimationFrame(me)}},[Q.position.x,Q.position.y,Q.position.z,_,g,oe,r]),Ye.useEffect(()=>{const b=e.current.scene;b&&(b.background=new qe(oe.sky))},[oe]),Ye.useEffect(()=>{const b=e.current.ballMesh;b&&b.position.set(Q.position.x,Q.position.y,Q.position.z)},[Q.position]),Ye.useEffect(()=>{const b=(Ae==null?void 0:Ae.powerupInventory)??le.inventory;ae(P=>({...P,inventory:it(b),armedType:(Ae==null?void 0:Ae.armedPowerup)??P.armedType??null,items:oe.powerups.map(N=>({...N,active:!((Ae==null?void 0:Ae.collectedPowerupIds.includes(N.id))??!1),collected:(Ae==null?void 0:Ae.collectedPowerupIds.includes(N.id))??!1}))}))},[oe,Ae]);const ot=b=>{o==="local_multiplayer"&&j(P=>{const N=P.players.map((W,te)=>te===P.turnIndex?{...W,ballPosition:it(b)}:W);return{...P,players:N}})},Ze=(b,P,N=f)=>{const W=Qi[b];if(c(b),a(P),p(0),S(0),ne(""),F(""),m(0),re("拖动球附近区域开始瞄准"),J("无"),k("待机"),de({position:it(W.spawn),velocity:rt(0,0,0),speed:0,radius:Ji,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:So(W,W.spawn).type,friction:So(W,W.spawn).friction,lastCollision:null,lastSafePosition:it(W.spawn)}),He(te=>({...te,dragging:!1,canShoot:!0,startScreen:null,currentScreen:null,power:0,strokeCount:0,direction:{x:0,z:-1}})),P==="local_multiplayer"){const te=Ym(N,W.spawn);j({enabled:!0,mode:"local",status:"playing",playerCount:N,currentPlayerId:te[0].id,turnIndex:0,round:1,revision:C+1,players:te,winnerId:null,tiedPlayerIds:[]}),L(q=>q+1),ae({items:W.powerups.map(q=>({...q,active:!0,collected:!1})),inventory:it(te[0].powerupInventory),activeEffect:null,lastTriggeredId:null,placingType:null,armedType:null,selectedPlacedId:null})}else j(te=>({...te,enabled:!1,status:"setup",currentPlayerId:null,winnerId:null,tiedPlayerIds:[]})),ae({items:W.powerups.map(te=>({...te,active:!0,collected:!1})),inventory:ff(),activeEffect:null,lastTriggeredId:null,placingType:null,armedType:null,selectedPlacedId:null});s("playing")},Ke=b=>{const P=Math.max(25,160-b*15+(oe.par-b)*10);if(S(P),w(W=>W+P),o==="local_multiplayer"){j(W=>{var he,be;const te=W.players.map((ye,Le)=>Le===W.turnIndex?{...ye,finished:!0,holeStrokes:b,totalStrokes:b,ballPosition:it(Q.position)}:ye);if(te.findIndex(ye=>!ye.finished)>=0)return F(`${te[W.turnIndex].name} 完成球洞，用杆 ${b}。按“继续”轮到下一位玩家。`),{...W,players:te,revision:W.revision+1};const X=te.slice().sort((ye,Le)=>ye.totalStrokes-Le.totalStrokes||ye.id.localeCompare(Le.id)),ce=((he=X[0])==null?void 0:he.totalStrokes)??b,Se=X.filter(ye=>ye.totalStrokes===ce).map(ye=>ye.id),fe=Se.length===1?Se[0]:null;return F(Se.length>1?`本地多人出现并列第一：${Se.join("、")}，均为 ${ce} 杆。`:`${((be=X[0])==null?void 0:be.name)??"玩家"} 以 ${ce} 杆获胜！`),s("local_result"),{...W,players:te,status:"complete",winnerId:fe,tiedPlayerIds:Se,revision:W.revision+1}});return}const N=VT(u,oe.id,yu,yu,b,oe.par);x(N),ne(`成功入洞！本关 ${b} 杆，得分 +${P}。`),s("hole_complete")},wt=()=>{r==="playing"&&de(b=>{if(b.inHole)return b;const P={...b.position},N={...b.velocity},W=oe,te=So(W,P),q=te.friction,X=Dn(W,P.x,P.z)+Ji;let ce=b.lastCollision,Se=null,fe=null;N.y-=7.4*Zn,P.x+=N.x*Zn,P.y+=N.y*Zn,P.z+=N.z*Zn;const he=Dn(W,P.x,P.z)+Ji;P.y<=he&&(P.y=he,N.y=0);const be=(Dn(W,P.x+.2,P.z)-Dn(W,P.x-.2,P.z))/.4,ye=(Dn(W,P.x,P.z+.2)-Dn(W,P.x,P.z-.2))/.4;N.x+=-be*2.6*Zn,N.z+=-ye*2.6*Zn;const Le=Math.max(0,1-q*.54*Zn);N.x*=Le,N.z*=Le;const I=Math.hypot(N.x,N.z);if(I>el){const Be=el/I;N.x*=Be,N.z*=Be}for(const Be of W.obstacles){const Xe=(Be.radius??1)+Ji,Gn=P.x-Be.position.x,Sn=P.z-Be.position.z,Si=Math.hypot(Gn,Sn);if(Si<Xe){const Er=Gn/Math.max(1e-4,Si),to=Sn/Math.max(1e-4,Si),no=Xe-Si;P.x+=Er*no,P.z+=to*no;const io=N.x*Er+N.z*to;N.x-=1.72*io*Er,N.z-=1.72*io*to,ce=Be.type,J(`碰撞：${Be.type}`)}}le.items.forEach(Be=>{if(!(Be.collected||!Be.active)&&Au(P,Be.position)<.95){if(fe=Be.id,Be.type==="speed_boost"){const Xe=Be.direction??{x:.2,z:-1},Gn=Math.hypot(Xe.x,Xe.z)||1;N.x+=Xe.x/Gn*3.2,N.z+=Xe.z/Gn*3.2,Se="speed_boost"}else Se=Be.type;o==="local_multiplayer"?j(Xe=>{const Gn=Xe.players.map((Sn,Si)=>Si!==Xe.turnIndex?Sn:{...Sn,collectedPowerupIds:[...Sn.collectedPowerupIds,Be.id],powerupInventory:_s(Sn.powerupInventory,Be.type,1)});return{...Xe,players:Gn,revision:Xe.revision+1}}):ae(Xe=>({...Xe,inventory:_s(Xe.inventory,Be.type,1)}))}}),((Ae==null?void 0:Ae.placedBouncePads)??[]).forEach(Be=>{Au(P,Be.position)<1.1&&(N.y=3.8,N.x*=1.08,N.z*=1.08,ce="bounce_pad",J("碰撞：bounce_pad"))});let ee=!1;(P.x<W.bounds.minX||P.x>W.bounds.maxX||P.z<W.bounds.minZ||P.z>W.bounds.maxZ)&&(ee=!0,P.x=b.lastSafePosition.x,P.y=b.lastSafePosition.y,P.z=b.lastSafePosition.z,N.x=0,N.y=0,N.z=0,ce="out_of_bounds",J("碰撞：out_of_bounds"));const me=Au(P,oe.hole);let ge=!1;me<oe.hole.radius&&I<kT&&Math.abs(P.y-X)<.08&&(ge=!0,P.x=oe.hole.x,P.z=oe.hole.z,P.y=Dn(W,oe.hole.x,oe.hole.z)-.16,N.x=0,N.y=0,N.z=0);const se=Math.hypot(N.x,N.y,N.z),Te=se>.08,ie=!Te;Te?k(`运动中 ${Ot(se)} m/s`):(k(ge?"已入洞":"静止"),J(ce?`最后碰撞：${ce}`:"无"));const Fe=ee||I<.12?it(b.lastSafePosition):it(P),ke={position:it(P),velocity:{x:Ot(N.x),y:Ot(N.y),z:Ot(N.z)},speed:Ot(se),radius:Ji,moving:Te,sleeping:ie,airborne:P.y>X+.02,inHole:ge,outOfBounds:ee,currentSurface:te.type,friction:te.friction,lastCollision:ce,lastSafePosition:Fe};return fe&&ae(Be=>({...Be,items:Be.items.map(Xe=>Xe.id===fe?{...Xe,active:!1,collected:!0}:Xe),activeEffect:Se,lastTriggeredId:fe})),ot(ke.position),ge&&(He(Be=>({...Be,canShoot:!1})),window.setTimeout(()=>Ke(De.strokeCount),120)),ke})};Ye.useEffect(()=>{if(r!=="playing")return;const b=window.setInterval(wt,Zn*1e3);return i.current.listenerCount+=1,()=>window.clearInterval(b)});const Ct=(b,P)=>{const N=b.x-P.x,W=b.y-P.y,te=Math.hypot(N,W)||1;return{direction:{x:Ot(N/te),z:Ot(W/te)},power:Tu(Math.hypot(N,W)/220*Mu,0,Mu)}},Nt=b=>{if(r!=="playing"||!De.canShoot||Q.moving)return;const P={x:b.clientX,y:b.clientY};He(N=>({...N,dragging:!0,startScreen:P,currentScreen:P})),re("正在瞄准")},Ft=b=>{if(!De.dragging||!De.startScreen)return;const P={x:b.clientX,y:b.clientY},N=Ct(De.startScreen,P);He(W=>({...W,currentScreen:P,direction:N.direction,power:N.power})),re(`方向 (${N.direction.x}, ${N.direction.z}) 力度 ${Ot(N.power)}`)},_t=()=>{if(!De.canShoot||Q.moving||Q.inHole)return;const b=Math.max(Gm,De.power),P=De.direction,N=le.armedType==="hole_in_one"&&gs(le.inventory,"hole_in_one")>0;let W={x:Ot(P.x*b*Hm),y:0,z:Ot(P.z*b*Hm)};if(N){const te=oe.hole.x-Q.position.x,q=oe.hole.z-Q.position.z,X=Math.hypot(te,q)||1;W={x:Ot(te/X*Math.min(el*.72,7.8)),y:0,z:Ot(q/X*Math.min(el*.72,7.8))}}de(te=>({...te,velocity:W,moving:!0,sleeping:!1,inHole:!1,outOfBounds:!1})),He(te=>({...te,strokeCount:te.strokeCount+1,canShoot:!1,power:0,dragging:!1,startScreen:null,currentScreen:null})),m(te=>te+1),k("已击球"),o==="local_multiplayer"?j(te=>{const q=te.players.map((X,ce)=>ce===te.turnIndex?{...X,holeStrokes:X.holeStrokes+1,totalStrokes:X.totalStrokes+1,powerupInventory:N?_s(X.powerupInventory,"hole_in_one",-1):X.powerupInventory,armedPowerup:N?null:X.armedPowerup}:X);return{...te,players:q,revision:te.revision+1}}):N&&ae(te=>({...te,inventory:_s(te.inventory,"hole_in_one",-1),armedType:null,activeEffect:"hole_in_one"}))},xt=()=>{De.dragging&&(He(b=>({...b,dragging:!1,canShoot:!0})),_t())};Ye.useEffect(()=>{!Q.moving&&!Q.inHole&&He(b=>({...b,canShoot:!0}))},[Q.inHole,Q.moving]);const U=()=>{gs(le.inventory,"hole_in_one")<=0||(o==="local_multiplayer"&&j(b=>{const P=b.players.map((N,W)=>W===b.turnIndex?{...N,armedPowerup:N.armedPowerup?null:"hole_in_one"}:N);return{...b,players:P,revision:b.revision+1}}),ae(b=>({...b,armedType:b.armedType==="hole_in_one"?null:"hole_in_one"})))},jt=()=>{if(gs(le.inventory,"bounce_pad")<=0||o!=="local_multiplayer"||!Ae)return;const b={id:`pad-${Date.now()}`,position:it(Q.position)};j(P=>{const N=P.players.map((W,te)=>te===P.turnIndex?{...W,placedBouncePads:[...W.placedBouncePads,b],powerupInventory:_s(W.powerupInventory,"bounce_pad",-1)}:W);return{...P,players:N,revision:P.revision+1}}),ae(P=>({...P,inventory:_s(P.inventory,"bounce_pad",-1),selectedPlacedId:b.id}))},st=()=>{const b=it(Q.lastSafePosition);de(P=>({...P,position:b,velocity:rt(0,0,0),speed:0,moving:!1,sleeping:!0,outOfBounds:!1})),ot(b),k("已重置至安全位置")},R=()=>{if(r==="hole_complete"){s("level_select");return}if(r==="local_result"){if(Ue.status==="complete"&&Ue.tiedPlayerIds.length>1){s("local_result");return}const b=Ue.players.findIndex(P=>!P.finished);if(b>=0){const P=Ue.players[b];j(N=>({...N,currentPlayerId:P.id,turnIndex:b,round:b+1,status:"playing",revision:N.revision+1})),de({position:it(P.ballPosition),velocity:rt(0,0,0),speed:0,radius:Ji,moving:!1,sleeping:!0,airborne:!1,inHole:!1,outOfBounds:!1,currentSurface:So(oe,P.ballPosition).type,friction:So(oe,P.ballPosition).friction,lastCollision:null,lastSafePosition:it(P.ballPosition)}),He(N=>({...N,strokeCount:P.holeStrokes,canShoot:!0,power:0})),s("playing")}}};Ye.useEffect(()=>{window.__contract={getState:()=>({version:"1.0.0",gameType:"3d-mini-golf",renderer:"threejs",stateSource:"live",hooksReady:!0,hookNames:["__game","__ball","__shot","__course","__multiplayer","__powerups","__camera","__leaderboard","__performance"],buildId:OT})},window.__game={getState:()=>it(Ne)},window.__ball={getState:()=>it(Q),friction:Q.friction},window.__shot={getState:()=>it(De)},window.__course={getState:()=>it(ft),obstacles:ft.obstacles,terrainFeatures:ft.terrainFeatures},window.__multiplayer={getState:()=>it(Ue)},window.__powerups={getState:()=>it(le)},window.__camera={getState:()=>it(Ge)},window.__leaderboard={getState:()=>it(u)},window.__performance={getState:()=>it(i.current)}},[Q,Ge,ft,Ne,u,Ue,le,De]);const v=Object.keys(u.levelBest).map(b=>({key:b,entries:u.levelBest[b]}));return $.jsx("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top,#0f172a,#020617_55%,#000)] text-white",children:$.jsxs("div",{className:"mx-auto flex min-h-screen max-w-[1600px] flex-col gap-4 p-4 lg:p-6",children:[$.jsx("header",{className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl panel-blur",children:$.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[$.jsxs("div",{children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.35em] text-emerald-300",children:"Three.js · React 19 · Tailwind"}),$.jsx("h1",{className:"mt-2 text-3xl font-black text-white md:text-5xl",children:"3D 迷你高尔夫赛"}),$.jsx("p",{className:"mt-3 max-w-3xl text-sm text-slate-300 md:text-base",children:"鼠标拖动控制击球方向与力度，在森林、沙漠、冰雪三大主题关卡中挑战最少杆数；支持本地多人轮流竞技、实时摩擦反馈、排行榜持久化与 3D 跟随镜头。"})]}),$.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm md:grid-cols-4",children:[$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 px-4 py-3",children:[$.jsx("p",{className:"text-slate-400",children:"当前关卡"}),$.jsx("p",{className:"font-semibold",children:oe.name})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 px-4 py-3",children:[$.jsx("p",{className:"text-slate-400",children:"当前模式"}),$.jsx("p",{className:"font-semibold",children:o==="single"?"单人":"本地多人"})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 px-4 py-3",children:[$.jsx("p",{className:"text-slate-400",children:"总杆数"}),$.jsx("p",{className:"font-semibold",children:A})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 px-4 py-3",children:[$.jsx("p",{className:"text-slate-400",children:"总积分"}),$.jsx("p",{className:"font-semibold",children:T})]})]})]})}),$.jsxs("div",{className:"grid flex-1 gap-4 xl:grid-cols-[320px_minmax(0,1fr)_350px]",children:[$.jsxs("aside",{className:"space-y-4",children:[$.jsxs("section",{id:"menu",className:"rounded-3xl border border-emerald-400/20 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"主菜单"}),$.jsxs("div",{className:"mt-4 grid gap-3",children:[$.jsx("button",{"data-testid":"start-btn",className:"rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400",onClick:()=>s("level_select"),children:"开始游戏"}),$.jsx("button",{"data-testid":"multiplayer-btn",className:"rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold transition hover:bg-white/15",onClick:()=>{s("local_setup"),a("local_multiplayer")},children:"本地多人对战"}),$.jsx("button",{"data-testid":"leaderboard-btn",className:"rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold transition hover:bg-white/15",onClick:()=>s("leaderboard"),children:"查看排行榜"})]})]}),$.jsxs("section",{id:"levelSelect",className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"关卡选择"}),$.jsxs("div",{className:"mt-4 grid gap-3",children:[$.jsxs("button",{"data-testid":"level-forest",className:"rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-left hover:bg-emerald-500/20",onClick:()=>Ze("forest","single"),children:[$.jsx("div",{className:"font-semibold",children:"森林"}),$.jsx("div",{className:"text-sm text-slate-300",children:"树木与岩石挡道，草地摩擦稳定。"})]}),$.jsxs("button",{"data-testid":"level-desert",className:"rounded-2xl border border-amber-300/25 bg-amber-500/10 px-4 py-3 text-left hover:bg-amber-500/20",onClick:()=>Ze("desert","single"),children:[$.jsx("div",{className:"font-semibold",children:"沙漠"}),$.jsx("div",{className:"text-sm text-slate-300",children:"大沙坑与沙丘阻力显著，谨慎规划线路。"})]}),$.jsxs("button",{"data-testid":"level-snow",className:"rounded-2xl border border-cyan-300/25 bg-cyan-500/10 px-4 py-3 text-left hover:bg-cyan-500/20",onClick:()=>Ze("snow","single"),children:[$.jsx("div",{className:"font-semibold",children:"冰雪"}),$.jsx("div",{className:"text-sm text-slate-300",children:"超低摩擦冰面带来超长滑行与转向挑战。"})]})]})]}),$.jsxs("section",{id:"multiplayerLobby",className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"本地多人设置"}),$.jsxs("div",{className:"mt-4 space-y-3",children:[$.jsxs("label",{className:"block text-sm text-slate-300",children:["玩家数量",$.jsx("select",{"data-testid":"local-player-count",value:f,onChange:b=>h(Number(b.target.value)),className:"mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[2,3,4].map(b=>$.jsxs("option",{value:b,children:[b," 人"]},b))})]}),$.jsx("button",{"data-testid":"local-start-btn",className:"w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-300",onClick:()=>Ze(l,"local_multiplayer",f),children:"开始本地比赛"}),$.jsx("button",{"data-testid":"local-exit-btn",className:"w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15",onClick:()=>s("menu"),children:"返回菜单"})]})]})]}),$.jsxs("main",{className:"space-y-4",children:[$.jsxs("section",{id:"gameScreen",className:"overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.55)] panel-blur",children:[$.jsxs("div",{className:"grid gap-4 border-b border-white/10 bg-black/25 p-4 lg:grid-cols-[1fr_auto] lg:items-center",children:[$.jsxs("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-5",children:[$.jsxs("div",{className:"rounded-2xl bg-white/5 px-4 py-3",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-400",children:"击球力度"}),$.jsx("p",{"data-testid":"shot-power",className:"mt-1 text-lg font-bold text-emerald-300",children:Ot(De.power)})]}),$.jsxs("div",{className:"rounded-2xl bg-white/5 px-4 py-3",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-400",children:"当前杆数"}),$.jsx("p",{"data-testid":"stroke-count",className:"mt-1 text-lg font-bold text-white",children:De.strokeCount})]}),$.jsxs("div",{className:"rounded-2xl bg-white/5 px-4 py-3",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-400",children:"当前玩家"}),$.jsx("p",{"data-testid":"current-player",className:"mt-1 text-lg font-bold text-cyan-300",children:(Ae==null?void 0:Ae.name)??yu})]}),$.jsxs("div",{className:"rounded-2xl bg-white/5 px-4 py-3",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-400",children:"实时摩擦系数"}),$.jsx("p",{"data-testid":"surface-friction",className:"mt-1 text-lg font-bold text-amber-300",children:Q.friction})]}),$.jsxs("div",{className:"rounded-2xl bg-white/5 px-4 py-3",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-400",children:"表面类型"}),$.jsx("p",{className:"mt-1 text-lg font-bold text-fuchsia-300",children:Q.currentSurface})]})]}),$.jsxs("div",{className:"flex flex-wrap gap-3",children:[$.jsx("button",{"data-testid":"zoom-in",className:"rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15",onClick:()=>E(b=>Tu(b-2,Eu,wu)),children:"镜头拉近"}),$.jsx("button",{"data-testid":"zoom-out",className:"rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15",onClick:()=>E(b=>Tu(b+2,Eu,wu)),children:"镜头拉远"}),$.jsx("button",{"data-testid":"reset-position",className:"rounded-2xl border border-rose-300/20 bg-rose-500/10 px-4 py-3 font-semibold hover:bg-rose-500/20",onClick:st,children:"重置球位"})]})]}),$.jsxs("div",{className:"relative h-[520px] w-full canvas-shell",onPointerDown:Nt,onPointerMove:Ft,onPointerUp:xt,onPointerLeave:xt,children:[$.jsx("div",{ref:t,className:"h-full w-full"}),$.jsxs("div",{className:"pointer-events-none absolute left-4 top-4 grid max-w-sm gap-2",children:[$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-400",children:"瞄准方向反馈"}),$.jsx("p",{"data-testid":"aim-feedback",className:"mt-1 text-slate-100",children:Z})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-400",children:"运动状态反馈"}),$.jsx("p",{"data-testid":"physics-motion",className:"mt-1 text-slate-100",children:G})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm panel-blur",children:[$.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-400",children:"当前接触/碰撞反馈"}),$.jsx("p",{"data-testid":"physics-contact",className:"mt-1 text-slate-100",children:z})]})]})]})]}),$.jsxs("section",{className:"grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",children:[$.jsxs("div",{className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsxs("div",{className:"flex items-center justify-between",children:[$.jsx("h2",{className:"text-xl font-bold",children:"道具与技能"}),$.jsxs("span",{"data-testid":"powerup-status",className:"rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300",children:["当前武装：",le.armedType??"无"]})]}),$.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:[$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 p-4",children:[$.jsx("p",{className:"font-semibold text-fuchsia-300",children:"反弹垫"}),$.jsxs("p",{className:"mt-2 text-sm text-slate-300",children:["库存 ",gs(le.inventory,"bounce_pad")]}),$.jsx("button",{className:"mt-3 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15",onClick:jt,children:"当前球位放置"})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 p-4",children:[$.jsx("p",{className:"font-semibold text-cyan-300",children:"加速带"}),$.jsxs("p",{className:"mt-2 text-sm text-slate-300",children:["库存 ",gs(le.inventory,"speed_boost")]}),$.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"接触后按可见方向获得一次有限加速，并仍受最高速度上限约束。"})]}),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 p-4",children:[$.jsx("p",{className:"font-semibold text-amber-300",children:"一杆入洞"}),$.jsxs("p",{className:"mt-2 text-sm text-slate-300",children:["库存 ",$.jsx("span",{"data-testid":"powerup-hio",children:gs(le.inventory,"hole_in_one")})]}),$.jsx("button",{className:"mt-3 w-full rounded-xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300",onClick:U,children:"启用 / 取消"})]})]})]}),$.jsxs("div",{className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"物理规则摘要"}),$.jsxs("ul",{className:"mt-4 space-y-3 text-sm text-slate-300",children:[$.jsx("li",{children:"• 草地为基础摩擦；沙坑滚阻至少为草地 3.5 倍附近，进入后明显更快减速。"}),$.jsx("li",{children:"• 冰雪关卡冰面摩擦≤草地 1/8，滑行更远但仍受最大速度限制。"}),$.jsx("li",{children:"• 所有明显障碍均有真实碰撞体，沙丘、雪堆、岩石、冰晶不会被球穿透。"}),$.jsx("li",{children:"• 相机使用真实透视相机跟随当前球，支持缩放调整跟随距离。"})]})]})]})]}),$.jsxs("aside",{className:"space-y-4",children:[$.jsxs("section",{id:"leaderboardScreen",className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"排行榜"}),$.jsxs("div",{className:"mt-4 space-y-4",children:[v.map(({key:b,entries:P})=>$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 p-4",children:[$.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[$.jsx("h3",{className:"font-semibold",children:Qi[b].name}),$.jsx("span",{className:"text-xs text-slate-400",children:"按杆数 / 时间 / playerId 稳定排序"})]}),P.length===0?$.jsx("p",{className:"text-sm text-slate-400",children:"尚无完赛记录"}):$.jsx("div",{className:"space-y-2 text-sm",children:P.map(N=>$.jsxs("div",{className:"rounded-xl bg-white/5 px-3 py-2",children:["#",N.rank," ",N.playerName," · ",N.strokes," 杆 · ",N.relativeToPar>=0?"+":"",N.relativeToPar]},`${b}-${N.playerId}`))})]},b)),$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 p-4",children:[$.jsx("h3",{className:"font-semibold",children:"全关卡总榜"}),u.overall.length===0?$.jsx("p",{className:"mt-2 text-sm text-slate-400",children:"需同一玩家在森林 / 沙漠 / 冰雪三关均拥有合法最佳成绩后才会生成。"}):$.jsx("div",{className:"mt-3 space-y-2 text-sm",children:u.overall.map(b=>$.jsxs("div",{className:"rounded-xl bg-white/5 px-3 py-2",children:["#",b.rank," ",b.playerName," · 总杆 ",b.totalStrokes]},b.playerId))})]})]})]}),$.jsxs("section",{id:"resultScreen",className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"结算与赛事状态"}),$.jsxs("div",{className:"mt-4 space-y-3 text-sm text-slate-300",children:[$.jsxs("p",{children:["单人结算：",K||"尚未完成当前球洞"]}),$.jsxs("p",{children:["本地多人结算：",D||"等待比赛开始"]}),$.jsx("button",{"data-testid":"result-next",className:"w-full rounded-2xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15",onClick:R,children:"结算后继续"})]})]}),$.jsxs("section",{id:"localLeaderboardScreen",className:"rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl panel-blur",children:[$.jsx("h2",{className:"text-xl font-bold",children:"本地多人排行榜"}),$.jsx("div",{"data-testid":"local-match-leaderboard",className:"mt-4 space-y-2 text-sm",children:Ue.players.slice().sort((b,P)=>b.totalStrokes-P.totalStrokes||b.id.localeCompare(P.id)).map(b=>$.jsxs("div",{className:"rounded-2xl border border-white/10 bg-black/20 px-4 py-3",children:[$.jsxs("div",{className:"flex items-center justify-between",children:[$.jsx("span",{children:b.name}),$.jsxs("span",{children:[b.totalStrokes," 杆"]})]}),$.jsx("div",{className:"mt-1 text-xs text-slate-400",children:Ue.tiedPlayerIds.includes(b.id)?"并列领先":b.finished?"已完赛":"进行中"})]},b.id))})]})]})]})]})})}bu.createRoot(document.getElementById("root")).render($.jsx(lv.StrictMode,{children:$.jsx(HT,{})}));
