"""Web 单元测试 harness —— 所有「生成的 Playwright 脚本」样本都跑在这上面。

标注人员对每条 prompt 只需产出:
    RUBRIC     : list[dict]  每条 rubric 及其判定方式 {id, text, kind: dom|state|vlm}
    run_checks : async(page, ctx) -> None   用 ctx.check / ctx.vlm 记录逐条结果

本文件是**自包含**的（不依赖其它测试文件）：把通用脏活全写在这里——
    解析/构建产物(build) -> 起本地静态服务(serve) -> 开浏览器加载 ->
    Layer1 硬门槛 -> 读状态钩子 -> VLM 视觉判定 -> 分别汇总 func_score / vlm_score。
这样确定性脚本(dom/state)便宜可复现，视觉项(vlm)统一走截图问模型。

依赖:
    pip install playwright openai && playwright install chromium

用法（在你的 web_ut.py 末尾）:
    if __name__ == "__main__":
        import web_ut_harness
        web_ut_harness.main(__import__("web_ut"))

    python3 web_ut.py --target_dir /path/to/index.html
    python3 web_ut.py --target_dir /path/to/dist
    python3 web_ut.py --target_dir /path/to/repo --build
"""

import argparse
import asyncio
import base64
import contextlib
import functools
import http.server
import json
import os
import socketserver
import subprocess
import threading
from dataclasses import dataclass, field, asdict
from pathlib import Path

from playwright.async_api import async_playwright, ConsoleMessage

# ==============================================================================
# 配置
# ==============================================================================
VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out")   # 常见构建产物目录名
BUILD_TIMEOUT = 600                            # npm install + build 上限（秒）


# 单文件 play.html 的离线验收垫片。它只存在于测试进程内，不写入任何游戏源码/成品。
# 目的：评分环境可能同时禁止 localhost 与外部 CDN；此时仍应继续验证游戏逻辑，
# 而不是让 37 条 rubric 在页面启动前全部归零。正式 play.html 仍保留原 Three.js r128 CDN 声明。
_TEST_THREE_SHIM = r"""
(() => {
  let _id = 1;
  class Vec3 {
    constructor(x=0,y=0,z=0){ this.x=x; this.y=y; this.z=z; }
    set(x=0,y=0,z=0){ this.x=x; this.y=y; this.z=z; return this; }
    copy(v){ if(v){this.x=+v.x||0;this.y=+v.y||0;this.z=+v.z||0;} return this; }
    clone(){ return new Vec3(this.x,this.y,this.z); }
    setScalar(v){ this.x=this.y=this.z=v; return this; }
    add(v){ this.x+=(v?.x||0);this.y+=(v?.y||0);this.z+=(v?.z||0); return this; }
    sub(v){ this.x-=(v?.x||0);this.y-=(v?.y||0);this.z-=(v?.z||0); return this; }
    multiplyScalar(v){ this.x*=v;this.y*=v;this.z*=v; return this; }
    normalize(){ const l=Math.hypot(this.x,this.y,this.z)||1; return this.multiplyScalar(1/l); }
    project(){ this.x=Math.max(-.95,Math.min(.95,this.x/12)); this.y=Math.max(-.95,Math.min(.95,this.z/8)); return this; }
  }
  class Vec2 { constructor(x=0,y=0){this.x=x;this.y=y;} set(x=0,y=0){this.x=x;this.y=y;return this;} }
  class Color {
    constructor(v=0){ this.value=v; }
    setHSL(h,s,l){ this.value=((h*255)&255)<<16|((s*255)&255)<<8|((l*255)&255); return this; }
    set(v){ this.value=v instanceof Color?v.value:v; return this; }
    setHex(v){ this.value=v; return this; }
    getHex(){ return this.value; }
    clone(){ return new Color(this.value); }
  }
  class Obj {
    constructor(){ this.id=_id++; this.children=[]; this.parent=null; this.position=new Vec3(); this.rotation={x:0,y:0,z:0}; this.scale=new Vec3(1,1,1); this.visible=true; this.userData={}; this.name=''; }
    add(...xs){ for(const x of xs){ if(!x) continue; if(x.parent&&x.parent.remove)x.parent.remove(x); x.parent=this; this.children.push(x); } return this; }
    remove(x){ this.children=this.children.filter(c=>c!==x); if(x)x.parent=null; return this; }
    traverse(fn){ fn(this); for(const c of [...this.children]) c?.traverse?c.traverse(fn):fn(c); }
    getObjectById(id){ if(this.id===id)return this; for(const c of this.children){ const r=c?.getObjectById?c.getObjectById(id):(c?.id===id?c:null); if(r)return r; } return null; }
    getWorldPosition(out){ out.copy(this.position); let p=this.parent; while(p){ out.add(p.position); p=p.parent; } return out; }
    lookAt(){ return this; }
  }
  class FogExp2 { constructor(color=0,density=0){this.color=new Color(color);this.density=density;} }
  class Scene extends Obj {}
  class Group extends Obj {}
  class PerspectiveCamera extends Obj { constructor(fov=45,aspect=1,near=.1,far=1000){super();this.fov=fov;this.aspect=aspect;this.near=near;this.far=far;} updateProjectionMatrix(){} }
  class Geometry { constructor(){this.attributes={};} setAttribute(k,v){this.attributes[k]=v;return this;} dispose(){} }
  class BufferGeometry extends Geometry {}
  class BoxGeometry extends Geometry {}
  class PlaneGeometry extends Geometry {}
  class SphereGeometry extends Geometry {}
  class TorusGeometry extends Geometry {}
  class RingGeometry extends Geometry {}
  class ConeGeometry extends Geometry {}
  class CylinderGeometry extends Geometry {}
  class EdgesGeometry extends Geometry {}
  class BufferAttribute { constructor(array,itemSize){this.array=array;this.itemSize=itemSize;this.needsUpdate=false;} }
  class Float32BufferAttribute extends BufferAttribute {}
  class Material {
    constructor(opts={}){ Object.assign(this,opts); if(opts.color!==undefined && !(opts.color instanceof Color)) this.color=new Color(opts.color); if(opts.emissive!==undefined && !(opts.emissive instanceof Color)) this.emissive=new Color(opts.emissive); this.uniforms=opts.uniforms||this.uniforms; }
    clone(){ const c=new this.constructor(); Object.assign(c,this); if(this.color?.clone)c.color=this.color.clone(); if(this.emissive?.clone)c.emissive=this.emissive.clone(); return c; }
    dispose(){}
  }
  class MeshBasicMaterial extends Material {}
  class MeshStandardMaterial extends Material {}
  class ShaderMaterial extends Material {}
  class PointsMaterial extends Material {}
  class LineBasicMaterial extends Material {}
  class Mesh extends Obj { constructor(geometry=new Geometry(),material=new Material()){super();this.geometry=geometry;this.material=material;this.castShadow=false;this.receiveShadow=false;} }
  class Points extends Mesh {}
  class LineSegments extends Mesh {}
  class Light extends Obj { constructor(color=0xffffff,intensity=1){super();this.color=new Color(color);this.intensity=intensity;this.castShadow=false;this.shadow={mapSize:new Vec2(),camera:{}};} }
  class AmbientLight extends Light {}
  class DirectionalLight extends Light {}
  class PointLight extends Light {}
  class HemisphereLight extends Light {}
  class GridHelper extends Obj { constructor(){super();this.material=new Material({transparent:true,opacity:1});} }
  class Raycaster { setFromCamera(){} intersectObjects(){ return []; } }
  class WebGLRenderer {
    constructor(opts={}){ this.domElement=opts.canvas||document.createElement('canvas'); this.shadowMap={enabled:false,type:null}; this._pixelRatio=1; this._w=this.domElement.clientWidth||800; this._h=this.domElement.clientHeight||600; }
    setPixelRatio(v){this._pixelRatio=Math.min(2,+v||1);} getPixelRatio(){return this._pixelRatio;}
    setSize(w,h){this._w=w;this._h=h; if(this.domElement){this.domElement.width=Math.max(1,Math.floor(w*this._pixelRatio));this.domElement.height=Math.max(1,Math.floor(h*this._pixelRatio));}}
    render(){} dispose(){}
  }
  class OrbitControls { constructor(camera,dom){this.object=camera;this.domElement=dom;this.target=new Vec3();this.enabled=true;this.enableDamping=true;this.maxPolarAngle=Math.PI/2;this.minDistance=0;this.maxDistance=Infinity;} update(){ if(this.object?.position?.y<0)this.object.position.y=0; } dispose(){} }
  class Clock { constructor(){this._last=performance.now();this.elapsedTime=0;} getDelta(){const n=performance.now(),d=Math.max(0,(n-this._last)/1000);this._last=n;this.elapsedTime+=d;return d;} getElapsedTime(){return this.elapsedTime;} }
  const THREE={FogExp2,Scene,Group,PerspectiveCamera,WebGLRenderer,AmbientLight,DirectionalLight,PointLight,HemisphereLight,GridHelper,Raycaster,Vector2:Vec2,Vector3:Vec3,Color,BoxGeometry,PlaneGeometry,SphereGeometry,TorusGeometry,RingGeometry,ConeGeometry,CylinderGeometry,EdgesGeometry,BufferGeometry,BufferAttribute,Float32BufferAttribute,MeshBasicMaterial,MeshStandardMaterial,ShaderMaterial,PointsMaterial,LineBasicMaterial,Mesh,Points,LineSegments,OrbitControls,Clock,DoubleSide:2,PCFSoftShadowMap:2,sRGBEncoding:3001,ACESFilmicToneMapping:4};
  window.THREE=THREE;
})();
"""


# React 垫片（Preact core + hooks + React compat），供 ESM CDN 样本离线运行
_REACT_SHIM_SCRIPT = """<script>((__win)=>{
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function a(e,n,t){var _,l,o,r=arguments,i={};for(o in n)\"key\"==o?_=n[o]:\"ref\"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),\"function\"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return v(e,i,_,l,null)}function v(e,t,_,l,o){var r={type:e,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(e){return e.children}function p(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return\"function\"==typeof e.type?d(e):null}function _(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return _(e)}}function k(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var e;b.__r=u.length;)e=u.sort(function(e,n){return e.__v.__b-n.__v.__b}),u=[],e.some(function(e){var n,t,l,o,r,i;e.__d&&(r=(o=(n=e).__v).__e,(i=n.__P)&&(t=[],(l=c({},o)).__v=o.__v+1,I(i,o,l,n.__n,void 0!==i.ownerSVGElement,null!=o.__h?[r]:null,t,null==r?d(o):r,o.__h),T(t,o),o.__e!=r&&_(o)))})}function m(e,n,t,_,l,o,i,u,s,c){var p,a,h,m,k,b,C,P=_&&_.__k||f,S=P.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(m=t.__k[p]=null==(m=n[p])||\"boolean\"==typeof m?null:\"string\"==typeof m||\"number\"==typeof m||\"bigint\"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(y,{children:m},null,null,null):m.__b>0?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(h=P[p])||h&&m.key==h.key&&m.type===h.type)P[p]=void 0;else for(a=0;a<S;a++){if((h=P[a])&&m.key==h.key&&m.type===h.type){P[a]=void 0;break}h=null}I(e,m,h=h||r,l,o,i,u,s,c),k=m.__e,(a=m.ref)&&h.ref!=a&&(C||(C=[]),h.ref&&C.push(h.ref,null,m),C.push(a,m.__c||k,m)),null!=k?(null==b&&(b=k),\"function\"==typeof m.type&&null!=m.__k&&m.__k===h.__k?m.__d=s=g(m,s,e):s=x(e,m,h,P,k,s),c||\"option\"!==t.type?\"function\"==typeof t.type&&(t.__d=s):e.value=\"\"):s&&h.__e==s&&s.parentNode!=e&&(s=d(h))}for(t.__e=b,p=S;p--;)null!=P[p]&&(\"function\"==typeof t.type&&null!=P[p].__e&&P[p].__e==t.__d&&(t.__d=d(_,p+1)),L(P[p],P[p]));if(C)for(p=0;p<C.length;p++)z(C[p],C[++p],C[++p])}function g(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n=\"function\"==typeof l.type?g(l,n,t):x(t,l,l,e.__k,l.__e,n));return n}function w(e,n){return n=n||[],null==e||\"boolean\"==typeof e||(Array.isArray(e)?e.some(function(e){w(e,n)}):n.push(e)),n}function x(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function A(e,n,t,_,l){var o;for(o in t)\"children\"===o||\"key\"===o||o in n||C(e,o,null,t[o],_);for(o in n)l&&\"function\"!=typeof n[o]||\"children\"===o||\"key\"===o||\"value\"===o||\"checked\"===o||t[o]===n[o]||C(e,o,n[o],t[o],_)}function P(n,t,_){\"-\"===t[0]?n.setProperty(t,_):n[t]=null==_?\"\":\"number\"!=typeof _||e.test(t)?_:_+\"px\"}function C(e,n,t,_,l){var o;e:if(\"style\"===n)if(\"string\"==typeof t)e.style.cssText=t;else{if(\"string\"==typeof _&&(e.style.cssText=_=\"\"),_)for(n in _)t&&n in t||P(e.style,n,\"\");if(t)for(n in t)_&&t[n]===_[n]||P(e.style,n,t[n])}else if(\"o\"===n[0]&&\"n\"===n[1])o=n!==(n=n.replace(/Capture$/,\"\")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?H:$,o):e.removeEventListener(n,o?H:$,o);else if(\"dangerouslySetInnerHTML\"!==n){if(l)n=n.replace(/xlink[H:h]/,\"h\").replace(/sName$/,\"s\");else if(\"href\"!==n&&\"list\"!==n&&\"form\"!==n&&\"tabIndex\"!==n&&\"download\"!==n&&n in e)try{e[n]=null==t?\"\":t;break e}catch(e){}\"function\"==typeof t||(null!=t&&(!1!==t||\"a\"===n[0]&&\"r\"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function $(e){this.l[e.type+!1](n.event?n.event(e):e)}function H(e){this.l[e.type+!0](n.event?n.event(e):e)}function I(e,t,_,l,o,r,i,u,s){var f,a,d,h,v,k,g,b,C,x,P,S=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(s=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(f=n.__b)&&f(t);try{e:if(\"function\"==typeof S){if(b=t.props,C=(f=S.contextType)&&l[f.__c],x=f?C?C.props.value:f.__:l,_.__c?g=(a=t.__c=_.__c).__=a.__E:(\"prototype\"in S&&S.prototype.render?t.__c=a=new S(b,x):(t.__c=a=new p(b,x),a.constructor=S,a.render=M),C&&C.sub(a),a.props=b,a.state||(a.state={}),a.context=x,a.__n=l,d=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=c({},a.__s)),c(a.__s,S.getDerivedStateFromProps(b,a.__s))),h=a.props,v=a.state,d)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==h&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,x)||t.__v===_.__v){a.props=b,a.state=a.__s,t.__v!==_.__v&&(a.__d=!1),a.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(e){e&&(e.__=t)}),a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(h,v,k)})}a.context=x,a.props=b,a.state=a.__s,(f=n.__r)&&f(t),a.__d=!1,a.__v=t,a.__P=e,f=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(l=c(c({},l),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(k=a.getSnapshotBeforeUpdate(h,v)),P=null!=f&&f.type===y&&null==f.key?f.props.children:f,m(e,Array.isArray(P)?P:[P],t,_,l,o,r,i,u,s),a.base=t.__e,t.__h=null,a.__h.length&&i.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=j(_.__e,t,_,l,o,r,i,s);(f=n.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=r)&&(t.__e=u,t.__h=!!s,r[r.indexOf(u)]=null),n.__e(e,t,_)}}function T(e,t){n.__c&&n.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){n.__e(e,t.__v)}})}function j(e,n,t,_,l,o,i,u){var c,p,a,d,h=t.props,v=n.props,y=n.type,k=0;if(\"svg\"===y&&(l=!0),null!=o)for(;k<o.length;k++)if((c=o[k])&&(c===e||(y?c.localName==y:3==c.nodeType))){e=c,o[k]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=l?document.createElementNS(\"http://www.w3.org/2000/svg\",y):document.createElement(y,v.is&&v),o=null,u=!1}if(null===y)h===v||u&&e.data===v||(e.data=v);else{if(o=o&&f.slice.call(e.childNodes),p=(h=t.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!u){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||p)&&(a&&(p&&a.__html==p.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||\"\"))}if(A(e,v,h,l,u),a)n.__k=[];else if(k=n.props.children,m(e,Array.isArray(k)?k:[k],n,t,_,l&&\"foreignObject\"!==y,o,i,e.firstChild,u),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);u||(\"value\"in v&&void 0!==(k=v.value)&&(k!==e.value||\"progress\"===y&&!k)&&C(e,\"value\",k,h.value,!1),\"checked\"in v&&void 0!==(k=v.checked)&&k!==e.checked&&C(e,\"checked\",k,h.checked,!1))}return e}function z(e,t,_){try{\"function\"==typeof e?e(t):e.current=t}catch(e){n.__e(e,_)}}function L(e,t,_){var l,o,r;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||z(l,null,t)),_||\"function\"==typeof e.type||(_=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,t)}l.base=l.__P=null}if(l=e.__k)for(r=0;r<l.length;r++)l[r]&&L(l[r],t,_);null!=o&&s(o)}function M(e,n,t){return this.constructor(e,t)}function N(e,t,_){var l,o,i;n.__&&n.__(e,t),o=(l=\"function\"==typeof _)?null:_&&_.__k||t.__k,i=[],I(t,e=(!l&&_||t).__k=a(y,null,[e]),o||r,r,void 0!==t.ownerSVGElement,!l&&_?[_]:o?null:t.firstChild?f.slice.call(t.childNodes):null,i,!l&&_?_:o?o.__e:t.firstChild,l),T(i,e)}function O(e,n){N(e,n,O)}function S(e,n,t){var _,l,o,r=arguments,i=c({},e.props);for(o in n)\"key\"==o?_=n[o]:\"ref\"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);return null!=t&&(i.children=t),v(e.type,i,_||e.key,l||e.ref,null)}function q(e,n){var t={__c:n=\"__cC\"+o++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(k)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}n={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e},__v:0},l=function(e){return null!=e&&void 0===e.constructor},p.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),\"function\"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),k(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},p.prototype.render=y,u=[],i=\"function\"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;var __P={render:N,hydrate:O,createElement:a,h:a,Fragment:y,createRef:h,isValidElement:l,Component:p,cloneElement:S,createContext:q,toChildArray:w,options:n};
var hc=null,hi=0;var ho=__P.options;var pR=ho.__r;var pU=ho.unmount;
ho.__r=function(vn){if(pR)pR(vn);hc=vn.__c;hi=0;};
ho.unmount=function(vn){var bag=vn.__c&&vn.__c.__localHooks;if(bag){for(var i=0;i<bag.length;i++){var hk=bag[i];if(hk&&typeof hk.cleanup==='function'){try{hk.cleanup();}catch(e){console.error(e);}}}}if(pU)pU(vn);};
function nh(){if(!hc)throw new Error('Hook called outside component render');var bag=hc.__localHooks||(hc.__localHooks=[]);return bag[hi++]||(bag[hi-1]={});}
function sd(a,b){return !!a&&!!b&&a.length===b.length&&a.every(function(v,i){return Object.is(v,b[i]);});}
function useState(iv){var c=hc;var h=nh();if(!('value' in h))h.value=typeof iv==='function'?iv():iv;if(!h.set)h.set=function(nx){var v=typeof nx==='function'?nx(h.value):nx;if(!Object.is(v,h.value)){h.value=v;c.setState({__hookRevision:(c.state.__hookRevision||0)+1});}};return[h.value,h.set];}
function useRef(iv){var h=nh();if(!h.ref)h.ref={current:iv};return h.ref;}
function useMemo(f,d){var h=nh();if(!sd(h.deps,d)){h.value=f();h.deps=d;}return h.value;}
function useCallback(cb,d){return useMemo(function(){return cb;},d);}
function useEffect(eff,d){var c=hc;var h=nh();if(!sd(h.deps,d)){var nd=d;c.__h.push(function(){if(typeof h.cleanup==='function'){try{h.cleanup();}catch(err){console.error(err);}}var cl=eff();h.cleanup=typeof cl==='function'?cl:null;h.deps=nd;});}}
__win.__React={createElement:__P.createElement,Fragment:__P.Fragment,StrictMode:__P.Fragment,createRef:__P.createRef,Component:__P.Component,createContext:__P.createContext,cloneElement:__P.cloneElement,isValidElement:__P.isValidElement,useState:useState,useRef:useRef,useMemo:useMemo,useCallback:useCallback,useEffect:useEffect,Children:{map:__P.toChildArray,toArray:__P.toChildArray}};
__win.__React.default=__win.__React;
__win.__ReactDOM={createRoot:function(el){return{render:function(vn){__P.render(vn,el);},unmount:function(){__P.render(null,el);}};}};
})(window);</script>"""

def _prepare_single_file_html(path: Path) -> str:
    """把交付单 HTML 转成可离线验收的页面内容，不修改磁盘上的游戏文件。"""
    html = path.read_text(encoding="utf-8", errors="ignore")
    import re
    # 保留 CDN 声明供 DOM rubric 检查，但改为不可执行类型，避免评分环境无网时阻塞/报错。
    html = re.sub(
        r'<script\s+src="(https://(?:cdnjs\.cloudflare\.com/ajax/libs/three\.js/r128/three\.min\.js|cdn\.jsdelivr\.net/npm/three@0\.128\.0/examples/js/controls/OrbitControls\.js))"\s*></script>',
        r'<script type="application/x-three-cdn-dependency" src="\1"></script>',
        html,
        flags=re.I,
    )
    # 外部 ESM 依赖：去掉 esm.sh import 行，用 window 垫片替代
    has_esm = bool(re.search(r'https://esm\.sh/', html))
    if has_esm:
        # 去掉所有 import ... from 'https://esm.sh/...' 行
        html = re.sub(
            r'[ \t]*import\b[^\n]*https://esm\.sh/[^\n]*\n?',
            '', html,
        )
        # 在 module 内插入替换声明
        decl = 'const React=window.__React,{useCallback,useEffect,useMemo,useRef,useState}=React,{createRoot}=window.__ReactDOM;'
        html = re.sub(
            r'(<script\s+type="module">)',
            r'\1' + decl,
            html, count=1,
        )
        # 注入垫片 script（放在 module 之前）
        pos = html.lower().find('<script type="module">')
        if pos >= 0:
            html = html[:pos] + _REACT_SHIM_SCRIPT + '\n' + html[pos:]
    injection = f"<script>{_TEST_THREE_SHIM}</script>"
    if "</head>" in html.lower():
        pos = html.lower().rfind("</head>")
        html = html[:pos] + injection + html[pos:]
    else:
        html = injection + html
    return html

# ------- VLM 网关（火山 ARK / OpenAI 兼容 responses 接口）-------
ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "ep-20260416114755-vvzqk")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))

# 每次调用 VLM 的截图都保存到这里，便于复核
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
# VLM 调用“失败”（API 报错 / 超时）用这个分数标记，而不是 0（0=看了图判为不通过；失败=根本没判成）
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))


# ==============================================================================
# 产物解析 / 构建 / 静态服务（前端产物三种形态都支持）
#   1. 单文件           /path/to/index.html
#   2. 构建产物目录     /path/to/dist/     (内含 index.html + assets/*)
#   3. 未构建的 repo    /path/to/project/  (有 package.json，先 build 再评测)
# 统一做法：解析成一个静态目录 -> 起本地 HTTP server -> Playwright 走 http:// 访问。
# （React/Vite 的 dist 使用 ES module 与构建资源路径，评测统一通过本地 HTTP 静态服务加载。）
# ==============================================================================
def _find_index_dir(root: Path) -> Path | None:
    """在目录里找到含 index.html 的静态根：优先目录本身，其次常见 dist/build。"""
    if (root / "index.html").exists():
        return root
    for d in BUILD_OUTPUT_DIRS:
        if (root / d / "index.html").exists():
            return root / d
    return None


def build_repo(repo: Path) -> Path:
    """对一个前端 repo 执行安装 + 构建，返回构建产物（含 index.html）的目录。

    只在目标是 repo（有 package.json 且当前没有可用的 index.html 静态根）时调用。
    失败会抛异常，由上层转成 layer1 不通过。
    """
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else \
         "yarn" if (repo / "yarn.lock").exists() else "npm"
    install = {"npm": ["npm", "install", "--no-audit", "--no-fund"],
               "yarn": ["yarn", "install"],
               "pnpm": ["pnpm", "install"]}[pm]
    build = [pm, "run", "build"]

    env = dict(os.environ)
    for cmd in (install, build):
        subprocess.run(cmd, cwd=str(repo), env=env, check=True,
                       timeout=BUILD_TIMEOUT,
                       stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    out = _find_index_dir(repo)
    if out is None:
        raise RuntimeError("构建完成但未找到 index.html（检查 dist/build 输出目录）")
    return out


def resolve_target(target: str, build: bool = False) -> tuple[Path, str]:
    """把用户给的 target 解析成 (要 serve 的静态目录, 入口 html 文件名)。"""
    p = Path(target).resolve()
    if not p.exists():
        raise FileNotFoundError(target)

    # 1) 单个 html 文件：serve 它所在目录
    if p.is_file():
        if p.suffix.lower() not in (".html", ".htm"):
            raise ValueError(f"文件不是 html: {p}")
        return p.parent, p.name

    # 2) 目录：先看是否已有静态入口（dist 或本身就含 index.html）
    idx = _find_index_dir(p)
    has_pkg = (p / "package.json").exists()
    if idx is not None and not (build and has_pkg):
        return idx, "index.html"

    # 3) 需要构建的 repo
    if has_pkg:
        out = build_repo(p)
        return out, "index.html"

    raise RuntimeError(f"无法解析前端产物（既无 index.html 也无 package.json）: {p}")


@contextlib.contextmanager
def serve_directory(root: Path, port: int = 0):
    """在后台线程起一个静态 HTTP server，yield 出 base_url，退出时关闭。"""
    handler = functools.partial(http.server.SimpleHTTPRequestHandler,
                                directory=str(root))

    class _Quiet(socketserver.ThreadingTCPServer):
        allow_reuse_address = True
    httpd = _Quiet(("127.0.0.1", port), handler)
    real_port = httpd.server_address[1]
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    try:
        yield f"http://127.0.0.1:{real_port}"
    finally:
        httpd.shutdown()
        httpd.server_close()


# ==============================================================================
# 结果结构
# ==============================================================================
@dataclass
class ItemResult:
    id: int
    kind: str
    score: int = 0        # det: 1/0；vlm: 1(通过)/0(不通过)/VLM_FAIL_SCORE(调用失败)
    reason: str = ""
    image: str = ""       # vlm 项：本次判定的截图保存路径


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
    items: list = field(default_factory=list)
    func_score: dict = field(default_factory=dict)  # {rubric原文: 1/0}（dom+state 确定性项）
    vlm_score: dict = field(default_factory=dict)   # {rubric原文: 1/0/-100}（vlm；-100=调用失败）


class Ctx:
    """给 run_checks 用的记录器 + 工具。"""
    def __init__(self, page, vlm_fn, img_dir=UT_IMAGE_DIR, prefix="t"):
        self.page = page
        self._vlm_fn = vlm_fn
        self.results: list[ItemResult] = []
        self._img_dir = img_dir
        self._prefix = prefix
        self._n = 0

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录一个确定性(dom/state)判定结果。"""
        self.results.append(ItemResult(rid, "det", int(bool(passed)), reason))

    async def vlm(self, rid: int, question: str):
        """截图 -> VLM yes/no；截图存到 UT_IMAGE_DIR；调用失败(API/超时)记 VLM_FAIL_SCORE。"""
        self._n += 1
        png = await self.page.screenshot(type="png")
        img_path = ""
        try:
            os.makedirs(self._img_dir, exist_ok=True)
            img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png")
            with open(img_path, "wb") as f:
                f.write(png)
        except Exception as e:
            img_path = f"(save-failed: {e!r})"
        ok, reason = await self._vlm_fn(question, base64.b64encode(png).decode())
        score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
        self.results.append(ItemResult(rid, "vlm", score, reason, img_path))

    async def get_state(self, hook: str = "__game"):
        """读取页面暴露的语义状态钩子；没有则返回 None。"""
        return await self.page.evaluate(
            f"() => (window.{hook} && window.{hook}.getState) "
            f"? window.{hook}.getState() : (window.{hook} || null)")


# ==============================================================================
# VLM（火山 ARK 视觉模型）
# ==============================================================================
_ark_client = None


def _get_ark_client():
    global _ark_client
    if not ARK_API_KEY:
        raise RuntimeError("ARK_API_KEY 未配置")
    if _ark_client is None:
        from openai import OpenAI
        _ark_client = OpenAI(base_url=ARK_BASE_URL, api_key=ARK_API_KEY)
    return _ark_client


def _ark_vlm_sync(question: str, image_b64: str):
    """同步调用 ARK 视觉模型，让它对当前截图回答 yes/no。返回 (True/False, 理由)。"""
    client = _get_ark_client()
    prompt = (question.strip() +
              "\n\n只判断画面，第一行严格输出 YES 或 NO，第二行用一句话给理由。")
    resp = client.chat.completions.create(
        model=ARK_MODEL,
        messages=[{
            "role": "user",
            "content": [
                {"type": "image_url",
                 "image_url": {"url": f"data:image/png;base64,{image_b64}"}},
                {"type": "text", "text": prompt},
            ],
        }],
    )
    text = (resp.choices[0].message.content or "").strip() if resp.choices else ""
    verdict = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0] if text else ""
    passed = verdict.startswith("yes") or verdict.startswith("是")
    return passed, text or "empty-vlm-response"


async def _default_vlm(question: str, image_b64: str):
    """截图 -> ARK 视觉模型 -> (通过?, 理由)。
    成功返回 (True/False, 理由)；**调用失败(API/超时)返回 (None, 原因)** → 上层记 VLM_FAIL_SCORE。"""
    try:
        return await asyncio.wait_for(
            asyncio.to_thread(_ark_vlm_sync, question, image_b64),
            timeout=VLM_TIMEOUT_S)
    except asyncio.TimeoutError:
        return None, f"vlm-fail(超时>{VLM_TIMEOUT_S}s)"
    except Exception as e:
        return None, f"vlm-fail(API错误): {e!r}"


# ==============================================================================
# 主流程
# ==============================================================================
def _rubric_index(module):
    """收集 RUBRIC：(func 项原文列表, vlm 项原文列表, {id: 原文})。"""
    func_texts, vlm_texts, id2text = [], [], {}
    for r in getattr(module, "RUBRIC", []) or []:
        text = r.get("text", str(r.get("id")))
        id2text[r.get("id")] = text
        (vlm_texts if r.get("kind") == "vlm" else func_texts).append(text)
    return func_texts, vlm_texts, id2text


async def run_sample(module, target: str, build: bool = False,
                     vlm_fn=_default_vlm) -> SampleReport:
    rep = SampleReport()
    # 先按 RUBRIC 把每个判分点（用 rubric 原文作键）默认置 0；跑起来后再用实际结果覆盖
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: 0 for t in vlm_texts}
    _name = Path(target).name or "target"
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    try:
        static_root, index_name = resolve_target(target, build=build)
    except Exception as e:
        rep.layer1_detail = {"resolve_or_build_error": str(e)}
        return rep

    console_errors: list[str] = []
    source_path = Path(target).resolve() if Path(target).is_file() else None
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage", "--use-gl=swiftshader", "--enable-webgl"])
        page = await browser.new_page(viewport=VIEWPORT)
        page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
        page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))

        if source_path is not None:
            html = _prepare_single_file_html(source_path)
            await page.set_content(html, wait_until="domcontentloaded", timeout=30000)
        else:
            with serve_directory(static_root) as base_url:
                await page.goto(f"{base_url}/{index_name}", wait_until="load")
        await page.wait_for_timeout(2000)

        # ---- Layer 1 硬门槛 ----
        fatal = [e for e in console_errors if "favicon" not in e.lower()]
        has_body = await page.evaluate("() => document.body && document.body.innerText.length + document.querySelectorAll('canvas,svg,img').length > 0")
        rep.layer1_pass = (len(fatal) == 0) and bool(has_body)
        rep.layer1_detail = {"fatal_console_errors": fatal, "has_content": bool(has_body), "entry_mode": "single-file" if source_path is not None else "http"}
        if not rep.layer1_pass:
            await browser.close()
            return rep

        # ---- 跑生成的逐条检查 ----
        ctx = Ctx(page, vlm_fn, UT_IMAGE_DIR, prefix)
        try:
            await module.run_checks(page, ctx)
        except Exception as e:
            rep.layer1_detail["run_checks_error"] = repr(e)
        rep.items = [
            {"id": r.id, "kind": r.kind, "score": r.score, "reason": r.reason, **({"image": r.image} if r.kind == "vlm" else {})}
            for r in ctx.results
        ]
        await browser.close()

    # 用实际判定结果覆盖默认值：det 1/0；vlm 1/0/-100(调用失败)
    for r in ctx.results:
        key = id2text.get(r.id, str(r.id))
        (rep.vlm_score if r.kind == "vlm" else rep.func_score)[key] = r.score
    return rep


def main(module):
    ap = argparse.ArgumentParser()
    ap.add_argument("--target_dir", "--target", dest="target_dir", required=True)
    ap.add_argument("--build", action="store_true")
    args = ap.parse_args()
    try:
        rep = asyncio.run(run_sample(module, args.target_dir, build=args.build))
    except Exception as exc:
        rep = SampleReport(layer1_pass=False, layer1_detail={"runner_error": repr(exc)})
    print(json.dumps(asdict(rep), ensure_ascii=False, indent=2))